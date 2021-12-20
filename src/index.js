const { sequelize } = require('./db/models')

const express = require('express');
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

app.listen({ port: port}, async () => {
    console.log(`Server running on http://localhost:${port}`)
    await sequelize.sync({ force: true })
    console.log('Database forced!')
})
