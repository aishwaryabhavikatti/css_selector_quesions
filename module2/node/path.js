//"C:\Users\Dell\Desktop\New folder\css_selector_questions\module2\node\path.js"
let path=require("path");
//console.log(path);

let extensionName= path.extname("C:\Users\Dell\Desktop\New folder\css_selector_questions\module2\node\path.js");
console.log(extensionName);

console.log(__filename);

let dirPath=__dirname;
console.log(dirPath);

let newFilePath=path.join(dirPath,"test.js");
console.log(newFilePath)