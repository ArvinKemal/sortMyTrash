const mongoose = require('mongoose')

const tambahEdukasiSampahSchema = new mongoose.Schema({
    id_edukasi: {
        type: String,
        required: true
    },
    namaLengkap: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("TambahEdukasi", tambahEdukasiSampahSchema)