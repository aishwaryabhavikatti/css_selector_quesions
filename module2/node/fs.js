let fs=require("fs");
//console.log(fs);

let path= require("path");

let filePath=path.join(__dirname,"file.txt");
console.log(filePath);

//create file if it does not exists else it oerride
fs.writeFileSync(filePath,"hello i am txt file");

//read
console.log('before update')
let content = fs.readFileSync(filePath,'utf-8');
console.log(content)

//update
fs.appendFileSync(filePath,'newly added')
console.log("after update")
console.log(fs.readFileSync(filePath,'utf-8'));

//delete
fs.unlinkSync(filePath)