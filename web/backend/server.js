const express = require('express')
require('dotenv').config()
require('./config/cnx-db')
const cors = require('cors')
const router = require('./routes/router')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', router)

const port = process.env.PORT
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => console.log("Server listening on port " + port))

