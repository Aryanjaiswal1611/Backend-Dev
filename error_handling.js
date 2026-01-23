const fs=require("fs");
fs.readFile("./text.txt", "utf-8",error,data=>{
    if(error){
        if(error.code==="ENOENT"){
            console.log("file not found");

        }
        return;
    
    }
    console.log(data);
})