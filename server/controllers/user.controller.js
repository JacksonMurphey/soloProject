const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    register:
        (req, res) => {
            const user = new User(req.body)
            user.save()
                .then((newUser) => {
                    console.log('Successful Registration')
                    console.log(newUser)
                    res.json({
                        successMessage: "Thank you for Registering",
                        user: newUser
                    })
                })
                .catch(err => {
                    console.log('Failed Registration')
                    res.status(400).json(err)
                })
        },

    login:
        (req, res) => {
            User.findOne({ email: req.body.email })
                .then((userData) => {
                    if (userData === null) {
                        res.status(400).json({ message: 'Invalid Email or Password' })
                    } else {
                        bcrypt.compare(req.body.password, userData.password)
                            .then((isValid) => {
                                if (isValid) {
                                    console.log('Password is Valid')
                                    res.cookie(
                                        'usertoken',
                                        jwt.sign({
                                            id: userData._id,

                                            email: userData.email,
                                            username: userData.username
                                        }, 'asdfghjkl12345'), { //replace with: process.env.JWT_SECRET
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 10000000) //900,000 = 15mins
                                    },
                                    ).json({
                                        message: 'Successfully Logged In',
                                        userLoggedIn: userData.username,
                                        userId: userData._id
                                    })
                                } else {
                                    res.status(400).json({ message: 'Invalid Email or Password' })
                                }
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(400).json({ message: 'Invalid Email or Password' })
                            })
                    }
                })
                .catch(err => {
                    console.log(err)
                    res.status(400).json({ message: 'Invalid Attempt' })
                })
        },

    logout:
        (req, res) => {
            console.log('Logging Out')
            res.clearCookie('usertoken')
            res.json({ message: 'You have Successfully Logged Out' })
        },

    getUserLoggedIn:
        (req, res) => {
            User.findOne({ _id: req.jwtpayload.id })
                .then(user => res.json(user))
                .catch(err => res.json(err))
        },

    updateOneUser:
        (req, res) => {
            User.findOneAndUpdate({ _id: req.jwtpayload.id }, req.body, { new: true, runValidators: true })
                .then((updatedUser) => {
                    console.log(updatedUser)
                    res.json(updatedUser)
                })
                .catch(err => {
                    console.log("Updating the User Failed")
                    res.status(400).json({ message: 'Error in updateOneUser', error: err })
                })
        },

    findAllUsers:
        (req, res) => {
            User.find()
                .then((users) => {
                    console.log(users)
                    res.json(users)
                })
                .catch(err => {
                    console.log('Finding All Users Failed')
                    res.json({ message: 'Find All Users Failed', error: err })
                })
        }

}