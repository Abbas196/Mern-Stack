const express = require('express')
const dotenv = require('dotenv').config()
// process.env allow us to access environment variables from .env file.
const port = process.env.PORT || 5000

// initialize our application 
const app = express()
app.listen(port, () => console.log(`Server started on port ${port}`))
