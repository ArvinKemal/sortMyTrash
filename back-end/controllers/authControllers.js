const Masyarakat = require('../models/auth/masyarakat-model')
const Petugas = require('../models/auth/petugas-model')

module.exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await Masyarakat.findOne({ email });
        if (!user) return res.json({msg: "Password atau Username tidak ditemukan!", status: false});
        const checkPassword = (user.password === password)
        if (!checkPassword) return res.json({msg: "Password salah!", status: false});
        return res.json({status: true, user})
    } catch (ex) {
        next(ex)
    }
}

module.exports.register = async (req, res, next) => {
    try {
        const {namaLengkap, nomorTelepon, email, password} = req.body
        const emailCheck = await Masyarakat.findOne({ email });
        if (emailCheck) return res.json({msg: "Email telah digunakan!", status: false});
        const user = await Masyarakat.create({
            namaLengkap,
            email,
            nomorTelepon,
            password
        })
        return res.json({ status: true, user})
    } catch (ex) {
        next(ex)
    }
}

module.exports.loginPetugas = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await Petugas.findOne({ email });
        if (!user) return res.json({msg: "Password atau Username tidak ditemukan!", status: false});
        const checkPassword = (user.password === password)
        if (!checkPassword) return res.json({msg: "Password salah!", status: false});
        return res.json({status: true, user})
    } catch (ex) {
        next(ex)
    }
}

module.exports.registerPetugas = async (req, res, next) => {
    try {
        const {namaLengkap, nomorTelepon, email, password} = req.body
        const emailCheck = await Petugas.findOne({ email });
        if (emailCheck) return res.json({msg: "Email telah digunakan!", status: false});
        const petugas = await Petugas.create({
            namaLengkap,
            email,
            nomorTelepon,
            password
        })
        return res.json({ status: true, petugas})
    } catch (ex) {
        next(ex)
    }
}