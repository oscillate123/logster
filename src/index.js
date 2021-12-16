import express from 'express'

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
    console.log(``)
    console.log(`${req.socket._httpMessage._header}`)
    console.log(`IP: ${req.ip}`)
    console.log(`HOSTNAME: ${req.hostname}`)
})

const port = 3000
app.listen(port)

console.log(`Running app on ${port}`)
