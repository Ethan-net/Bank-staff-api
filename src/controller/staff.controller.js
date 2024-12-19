const staffschema = require('../model/bankstaffschema')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const staffSignUp = async (req, res) => {

    const { name, staffId, username, email, phone_number, password } = req.body

    // res.status(201).json({
    //     message: "user Created"
    // })

    //check if email or username exist

    const verifyemail = await staffschema.findOne({ email: email })
    const verifyusername = await staffschema.findOne({ username: username })

    const firstfour = name.split("").slice(0, 4).join("")
    const year = new Date().getFullYear()

    const id = `usd/${firstfour}/${year}`

    try {
        if (verifyemail || verifyusername) {
            return res.status(401).json({
                message: " username or email in use",
                succefull: false
            })
        }
        else {
            //hassing password
            bcrypt.hash(req.body.password, 10).then((hashresult) => {
                //create the use as document to be added to users collection 
                const staff = new staffschema({

                    staffId: id,
                    name: name,
                    username: username,
                    email: email,
                    phone_number: phone_number,
                    password: hashresult,

                })
                staff.save().then((response) => {
                    return res.status(201).json({
                        success: true,
                        data: response,
                        message: "user sign up successfully"
                    })
                }).catch((err) => {
                    res.status(500).json({
                        error: err
                    })
                })
            })
        }
    } catch (e) {
        return res.status(412).json({
            success: false,
            message: e.message
        })
    }


}



module.exports = staffSignUp