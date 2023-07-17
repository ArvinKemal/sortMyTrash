const { login, register, loginPetugas, registerPetugas } = require('../controllers/authControllers');
const router = require('express').Router();

router.post(`/login`, login)
router.post(`/register`, register)

router.post(`/login-petugas`, loginPetugas)
router.post(`/register-petugas`, registerPetugas)

module.exports = router