const mongoose = require('mongoose');
require('dotenv').config();

const dbString = process.env.DBSTRING;

const connectDataBase = async ()=>{
    try{
        console.log('connecting to database....')
        await mongoose.connect(dbString, {})
        console.log('connected successful')
    }catch(e){
        console.log('unable to connect due to', e.message)
    }
}

module.exports = connectDataBase;