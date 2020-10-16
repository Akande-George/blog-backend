const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    const token = req.header('authorization')
    if(!token) {
        res.status(400).send('access denied')
        try {
            const verified = jwt.verify(token, 'georgeblog')
        } catch (error) {
            res.status(400).send('invalid token')
        }
    }
}