
let http = require('http')
http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'application/json'});
    res.write(JSON.stringify([
        {name:'Adel', age: '22', email:'adeelali137@gmail.com'},
        {name:'Rajesh', age: '32', email:'rajesh@gmail.com'},
        {name:'Peter', age: '29', email:'peter@gmail.com'}
        ,{name:'Bob', age: '42', email:'bob137@gmail.com'}
    ]))
    res.end()
}).listen(2000)

