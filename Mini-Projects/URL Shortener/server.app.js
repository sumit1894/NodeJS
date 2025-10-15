import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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


const server = createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            return serverFile(res, path.join(__dirname, "public", "index.html"), "text/html");
        }
        else if (req.url === "/style.css") {
            return serverFile(res, path.join(__dirname, "public", "style.css"), "text/css");
        }
    }
});


server.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});
