// OS
// PATH
// FS
// HTTP


let os = require('os')
// console.log(os.userInfo())
// console.log(os.uptime())


let path = require('path')
// console.log(path.sep);


let fs = require('fs')
// let test = fs.readFileSync('./test.txt', 'utf8') //SYNC read

// Async read
let testay = fs.readFile('./test.txt', 'utf8' , (err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})
console.log(testay)


// Creatimg new file
let create = fs.writeFileSync('./test2.txt', 'this is second testing file')


// HTTP
// let http = require('http')
// let server = http.createServer((req,res)=>{
//     res.write('Welcome to group')
//     res.end()
// })
// server.listen(2000)



let http = require('http')
let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to group')
    }
    if(req.url === '/about'){
        res.end('This is About')
    }
})
server.listen(2000)