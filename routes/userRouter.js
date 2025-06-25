const express = require("express")
const { signinUser, signupUser, getUsers} = require("../controller/userController")

const userRouter = express.Router()

userRouter.post('/signin', signinUser)

userRouter.post('/signup', signupUser)

userRouter.get('/get-users', getUsers)

module.exports = userRouter