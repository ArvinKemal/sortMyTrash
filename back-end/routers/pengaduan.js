const { addPengaduan } = require('../controllers/pengaduanSampahControllers')
const router = require('express').Router()

router.post('/pengaduan-sampah/tambah-pengaduan', addPengaduan)

module.exports = router