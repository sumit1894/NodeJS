import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";


const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, "data", "links.json")


//! function for reading html and Css file
const serverFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }
}


//! loading link from data folder or creating file
const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") { //ENOENT= ERROR NO ENTRY
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}


//!saving links to links.json
const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links));
}


//!  reading html and Css file and json
const server = createServer(async (req, res) => {

    if (req.method === "GET") {
        if (req.url === "/") {
            return serverFile(res, path.join(__dirname, "public", "index.html"), "text/html");
        }
        else if (req.url === "/style.css") {
            return serverFile(res, path.join(__dirname, "public", "style.css"), "text/css");
        }
        else if (req.url === "/links") {
            const links = await loadLinks();
            res.writeHead(200, { "Content-Type": "application/json" })
            return res.end(JSON.stringify(links));
        }else{
            const links=await loadLinks();
            const shortCode=req.url.slice(1);
            console.log("links red",req.url);
            if(links[shortCode]){
                res.writeHead(302,{location:links[shortCode]})
                return res.end();
            }

            res.writeHead(404,{"Content-type":"text/plain"});
            return res.end("Shortend url is not found")

        }
    }

    //! POST methods/data store/duplicate check
    if (req.method === "POST" && req.url === "/shorten") {

        //! loading link from data folder
        const links = await loadLinks();


        //!Getting data when it fetch
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", async () => {
            console.log(body);
            const { url, shortCode } = JSON.parse(body);


            //! cheaking URL
            if (!url) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                return res.end("url is required")
            }


            //! making shortCode if !shortCode
            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");


            //! checking Duplicate shortCode
            if (links[finalShortCode]) {
                res.writeHead(400, { "Content-Type": "text/plain" })
                return res.end("Short Code already Exist. pleased Choose another.")
            }

            //! saving links into json
            links[finalShortCode] = url;
            await saveLinks(links)

            res.writeHead(200, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ success: true, shortCode: finalShortCode }));

        });
    };
});


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
