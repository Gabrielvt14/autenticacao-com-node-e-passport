const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
require('mongoose-type-email')

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

User.methods.genHash = (pass) => {
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(7), null)
}

module.exports = mongoose.model('User', User)
