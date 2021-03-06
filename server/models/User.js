const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: ""
    },
    token: {
        type: String,
    },
    gender: {
        type: String
    },
    contact: {
        type: String
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})

userSchema.methods.generateToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET)
        this.token = token
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}


module.exports = User = mongoose.model("User", userSchema);