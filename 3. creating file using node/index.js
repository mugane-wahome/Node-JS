
// var fs = require("fs");
// var createStream = fs.createWriteStream("files.txt");
// createStream.end();


const fsPromise = require('fs').promises
const path = require('path')

const createFile = async ()=>{
    try{
        const data = await fsPromise.appendFile(path.join(__dirname, 'filess.txt'), 'Hello World\n')
        console.log('File created successfully')
    }

    catch(err){
        console.log(err)
    }
}
createFile()


