const express = require ('express');
const cors = require('cors');
require('dotenv').config()

const connectDataBase = require('./src/config/db_config');
const staffSignUp = require('./src/controller/staff.controller');

const app = express();
app.use(express.json())
app.use(cors());

const port = process.env.PORT

app.get('/', (req, res)=>{
    res.status(200).json({
        message: "welcome server"
    })
})

app.post('/staffsignup', staffSignUp)

connectDataBase()

app.listen(port, ()=>{
    console.log(`you are connected to ${port}`)
})

