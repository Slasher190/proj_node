function helpFn(){
    console.log(`
    List of All commands:
        node main.js tree "directoryPath"
        node main.js organise "directoryPath"
        node main.js help   
    `);
}
module.exports={
    helpkey: helpFn
}