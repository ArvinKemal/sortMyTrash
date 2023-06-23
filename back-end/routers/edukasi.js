const { getAll, getItemById } = require('../controllers/edukasiControllers');
const { addTambahEdukasi, 
    getAllTambahEdukasi, 
    getTambahEdukasiById, 
    updateTambahEdukasi, 
    deleteTambahEdukasi } = require('../controllers/tambahEdukasiControllers');
const router = require('express').Router()

router.get('/edukasi', getAll)
router.get('/edukasi/detail-edukasi/:id', getItemById)

router.get('/edukasi/detail-edukasi/tambah-edukasi/:id', getAllTambahEdukasi)
router.get('/edukasi/get-tambah-edukasi/:id', getTambahEdukasiById)
router.post('/edukasi/tambah-edukasi', addTambahEdukasi)
router.put('/edukasi/edit-tambah-edukasi/:id', updateTambahEdukasi)
router.delete('/edukasi/hapus-tambah-edukasi/:id', deleteTambahEdukasi)

module.exports = router