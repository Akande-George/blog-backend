const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const jwt = require('jsonwebtoken')
const {registerValidation, loginValidation} = require('../middleware/validate')

const User = require('../models/user.model')

router.post('/register', async (req, res)=> {
    const {error} = registerValidation(req.body)
    const emailExist = await User.findOne({email: req.body.email})
    
    if(emailExist) {
        res.status(200).send('Email exists, please try to login')
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        name: req.body.name,
        password: hash
    })
    try {
        const savedUser = await user.save()
        return res.status(200).send({user: user._id})
    } catch (error) {
        res.status(400).send('something went wrong')
    }
})

router.post('/login', async (req, res)=> {
    const {error} = loginValidation(req.body)
    const user = await User.findOne({emai: req.body.email})
    if(!user){
        return res.status(400).send('user or password not availabe')
    }

    const validPass = await bcrypt.compareSync(user.password, hash);
    if(!validPass) {
        return res.status(400).send('wrong Password, try again')
    }
    const token = jwt.sign({ user: user._id }, 'georgeblog')
    res.header('authorization', token).send(token)
    res.status(200).send('login successful, keep posting')
})

module.exports = router 