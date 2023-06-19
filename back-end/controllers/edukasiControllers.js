const Edukasi = require('../models/edukasi/edukasi-sampah')

module.exports.getAll = async (req, res, next) => {
    try {
        const data = await Edukasi.find()

        if (!data) return res.json({ msg: "data tidak ada!", status: false })

        return res.status(200).json(data)
    } catch (ex) {
        next(ex)
    }
}

module.exports.getItemById = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await Edukasi.findById(id)
        if (!data) return res.json({ msg: "data tidak ada!", status: false })

        return res.status(200).json(data)
    } catch (ex) {
        next(ex)
    }
}
