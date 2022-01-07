#!/usr/bin/env node
//sheban syntax
//process := command line input  
let inputArr = process.argv.slice(2); //2 because 0 index for node anf 1st index for file name then input data ex 
let fs = require("fs");
let path = require('path');
let helpObj = require('./commands/help');
let treeObj = require('./commands/tree');
let orgaobj = require('./commands/organize');
let types = {
    media: ["mp4", "mkv", 'jpg', 'png'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'csv'],
    app: ['exe', 'dmg', 'pkg', "deb", 'ipynb']
}
// node ilename.js aman naman etc
// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organise "directoryPath"
// node main.js help
let command = inputArr[0]; // here we get command 
switch(command){
    case "tree":
        treeObj.treekey(inputArr[1]);
        break;
    case "organize":
        orgaobj.organisekey(inputArr[1]);
        break;
    case "help":
        helpObj.helpkey();
        break;       
    default:
        console.log("Please 🙏 choose Right command ");     
}
