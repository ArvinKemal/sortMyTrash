const { addPengaduan } = require('../controllers/pengaduanSampahControllers')

const router = require('express').Router()

router.post('/pengaduan-sampah', addPengaduan)

module.exports = router