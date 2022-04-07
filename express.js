let express = require('express')

let app = express()

app.get('', (req, resp, next) => {
    resp.send('Welcoem')
    next()
})
app.get('/help', (req, resp) => {
    resp.send('Help')
})
app.get('/about', (req, resp) => {
    resp.send('About')
})

app.listen(5000)