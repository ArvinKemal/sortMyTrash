const mongoose = require('mongoose')

const edukasiSampahSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Edukasi", edukasiSampahSchema)