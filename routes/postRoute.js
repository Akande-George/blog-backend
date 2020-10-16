const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    return res.status(200).send('you are trying to get a new content')
})

module.exports = router