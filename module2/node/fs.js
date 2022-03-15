let fs=require("fs");
//console.log(fs);

// let path= require("path");

// let filePath=path.join(__dirname,"file.txt");
// console.log(filePath);

// //create file if it does not exists else it oerride
// fs.writeFileSync(filePath,"hello i am txt file");

// //read
// console.log('before update')
// let content = fs.readFileSync(filePath,'utf-8');
// console.log(content)

// //update
// fs.appendFileSync(filePath,'newly added')
// console.log("after update")
// console.log(fs.readFileSync(filePath,'utf-8'));

// //delete
// fs.unlinkSync(filePath)

//create directory

if(!fs.existsSync("hamariDirectory"))
fs.mkdirSync("hamariDirectory");

//read directory
// let folderPath=__dirname;
// let contentOfFolder= fs.readdirSync(folderPath);
// console.log(contentOfFolder);


//delete 
//fs.rmdirSync("hamariDirectory");

//copy file
let sourcePath = path.join(__dirname,"file.txt")
let destinationPath = path.join(__dirname,"module","file.txt")
console.log(sourcePath);
console.log(destinationPath);

fs.copyFileSync(sourcePath,destinationPath); 
