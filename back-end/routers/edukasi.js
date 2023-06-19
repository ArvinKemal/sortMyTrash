const { getAll, getItemById } = require('../controllers/edukasiControllers');
const router = require('express').Router()

router.get('/edukasi', getAll)
router.get('/edukasi/detail-edukasi/:id', getItemById)

module.exports = router