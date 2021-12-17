import express from 'express'

const app = express()
const port = 3000

app.get('/', function (req, res) {
    
    const request_information = {
        "ip": req.ip,
        "hostname": req.hostname,
        "config": config
    }
    res.send(request_information)
})

app.listen(port, () => {
    console.log(`Running app on ${port}`)
})
