const pengaduan = require('../models/pengaduan/pengaduan-sampah')

module.exports.addPengaduan = async (req, res, next) => {
    try {
        if (!req.file) return res.status(401).json({ msg: "image harus di upload!"})
        const image = req.file.path
        const { permasalahan, lokasi } = req.body
        if (permasalahan === '') return res.json({ msg: "permasalahan tidak boleh kosong!", status: false })
        if (lokasi === '') return res.json({ msg: "lokasi tidak boleh kosong!", status: false })
    
        const data = await pengaduan.create({
            status_pengaduan: false,
            image,
            permasalahan,
            lokasi
        })
    
        return res.json({status: true, data})
    } catch (ex) {
        next(ex)
    }
}