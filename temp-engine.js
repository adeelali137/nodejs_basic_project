let express = require('express')
let path = require('path')
let app = express()


app.set('view engine', 'ejs')

app.get('/' , (req, res)=>{
    // res.sendFile(path.join(__dirname, './app.html'))
    res.render('home')
})

app.get('/about' , (req, res)=>{
    // res.send("This is About Page")
    res.render('about')
})

app.get('/help' , (req, res)=>{
    res.send("This is Help Page")
})

app.get('**' , (req, res)=>{
    // res.status(404).send("This page is NOT FOUND")
    res.status(404).render('404')
})

app.listen(9000 , ()=>{
    console.log("Serve is started with 9000 port");
} )