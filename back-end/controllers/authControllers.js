const Masyarakat = require('../models/masyarakatModel')

module.exports.login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await Masyarakat.findOne({ email });
        if (!user) return res.json({msg: "Password atau Username tidak ditemukan!", status: false});
        return res.json({status: true, user})
    } catch (ex) {
        next(ex)
    }
}

module.exports. register = async (req, res, next) => {
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