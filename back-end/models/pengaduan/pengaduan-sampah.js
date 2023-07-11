const mongoose = require('mongoose')

const pengaduanSampahSchema = new mongoose.Schema({
    id_user: {
        type: String,
        required: true
    },
    namaLengkap_user : {
        type: String,
        required: true
    },
    status_pengaduan: {
        type: Boolean,
        required: true
    },
    permasalahan: {
        type: String,
        required: true,
    },
    lokasi: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Pengaduan", pengaduanSampahSchema)