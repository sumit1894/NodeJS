
import readline from "readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const todos=[];


const showMenu=()=>{
    console.log("\n1: Add a Task");
    console.log("2: View Task");
    console.log("3: Exit");
    rl.question("\nchoose an option:",handleChange)
}

const handleChange=(option)=>{
    if(option==="1"){
        rl.question("Enter the Task:",(task)=>{
            todos.push(task);
            console.log("Task Added: ",task,"\n");
            showMenu();
        })
    }else if(option==="2"){
        console.log("\nYour Todo Lists");
        todos.forEach((task,index)=>{
            console.log(`${index+1}. ${task}`);
        });
        showMenu();
    }else if(option==="3"){
        console.log("GooodBye!")
        rl.close();
    }else{
        console.log("Invalid Option. Plz try Again.")
        showMenu();
    }
}

showMenu();