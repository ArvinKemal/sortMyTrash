const { addPengaduan, getAllPengaduan, updatePengaduan, getPengaduanById } = require('../controllers/pengaduanSampahControllers')
const router = require('express').Router()

router.post('/pengaduan-sampah/tambah-pengaduan', addPengaduan)

router.get('/petugas/laporan', getAllPengaduan)
router.get('/petugas/laporan/detail-laporan/:id', getPengaduanById)
router.put('/petugas/laporan/detail-laporan/:id', updatePengaduan)

module.exports = router