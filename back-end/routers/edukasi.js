const { getAll, getItemById } = require('../controllers/edukasiControllers');
const { addTambahEdukasi, getAllTambahEdukasi } = require('../controllers/tambahEdukasiControllers');
const router = require('express').Router()

router.get('/edukasi', getAll)
router.get('/edukasi/detail-edukasi/:id', getItemById)

router.get('/edukasi/detail-edukasi/tambah-edukasi/:id', getAllTambahEdukasi)
router.post('/edukasi/tambah-edukasi', addTambahEdukasi)

module.exports = router