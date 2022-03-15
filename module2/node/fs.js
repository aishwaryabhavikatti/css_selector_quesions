let fs=require("fs");
//console.log(fs);

let path= require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

//create file if it does not exists else it oerride
fs.writeFileSync(filePath,"hello i am txt file");