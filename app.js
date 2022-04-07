let express = require('express')
let app = express()

let item = require('./data')

app.get('/' , (req, res)=>{
    // res.send(item)
    res.send('<a href="/product">Products</a>')
    // res.json([{name: 'Adeel'}, {age: 22}])
})

app.get('/product' , (req, res)=>{
    let newProduct = item.map((product)=>{
        let {id, name, price} = product
        return {id, name, price}
    })
    res.json(newProduct)
})

// app.get('/product/1' , (req, res)=>{
//     let singleproduct = item.find((product)=> product.id === 1)
//     res.json(singleproduct)
// })

app.get('/product/:productid' , (req, res)=>{
    let {productid} = req.params
    let singleproduct = item.find((product)=> product.id === Number(productid))

    if(!singleproduct){
        return res.status(404).send("Not Found Product")
    }

    res.json(singleproduct)
})





app.listen(9000, ()=>{
    console.log("Server is started");
})