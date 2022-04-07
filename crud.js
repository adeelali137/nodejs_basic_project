let fs = require('fs')
let path = require('path')
let dirpath = path.join(__dirname, 'curd')
let filepath = `${dirpath}/testing.txt`

// Create
// fs.writeFileSync(filepath, 'This is testing txt file')

// READ
// fs.readFile(filepath, 'utf8', (err, text)=>{
//     if(!err)
//     console.log(text);
// })

// Apped/EDIT
// fs.appendFile(filepath, ' and this s addion', (err)=>{
//     if(!err) console.log("file is updates");
// })

// Delet
// fs.unlinkSync(filepath)