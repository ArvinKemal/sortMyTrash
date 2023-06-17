const { getAll } = require('../controllers/edukasiControllers');
const router = require('express').Router()

router.get('/edukasi', getAll)

module.exports = router