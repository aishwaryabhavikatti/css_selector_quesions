let fs = require("fs");
let path = require("path");

if(!fs.existsSync("newFolder")){
    fs.mkdirSync("newFolder");
}

let fileKaPath = path.join(__dirname,"newFolder","newFile.txt");
console.log(fileKaPath);

fs.writeFileSync(fileKaPath,"new file has been made");