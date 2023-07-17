const mongoose = require('mongoose')

const petugasSchema = new mongoose.Schema({
    namaLengkap: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    nomorTelepon: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 13,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    }
})

module.exports = mongoose.model("Petugas", petugasSchema)