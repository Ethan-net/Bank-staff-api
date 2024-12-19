const mongoose = require('mongoose')
const passport = require('passport')

const staffModel = new mongoose.Schema({
    name: {type: String, maxlength: 30, minlength: 10, required: true},
    username: {type: String, maxlength: 30, minlength: 10, required: true, unique: true},
    staffId:{type: String, maxlength: 15, require: true, unique: true},
    email:{ type: String, maxlength: 100, minlength: 10, required: true, unique: true},
    phone_number:{type: String, minlength: 12, maxlength: 20, unique: true, required: true},
    password:{type: String, minlength: 8, maxlength: 80, required: true}
})


module.exports = mongoose.model("staff", staffModel)