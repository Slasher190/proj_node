function treeFn(dirPath){
    // console.log("Tree command implemented for ", dirPath);
    if (dirPath == undefined){
        console.log("Kindly enter the path");
        return;
    }
    else {
        let doesExist = fs.existsSync(dirPath);
        if(doesExist){
            treeHelper(dirPath,"");
        }
        else{
            console.log("Kindly enter the right path ");
        }
    }
}
function treeHelper(dirPath,indent){
    //is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if (isFile == true) {
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    } else {
        let dirName = path.basename(dirPath)
        console.log(indent + "└──" + dirName);
        let childrens = fs.readdirSync(dirPath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirPath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}
module.exports = {
    treekey : treeFn
}