const Pengaduan = require('../models/pengaduan/pengaduan-sampah')
const Masyarakat = require('../models/auth/masyarakat-model')

module.exports.addPengaduan = async (req, res, next) => {
    try {
        if (!req.file) return res.status(401).json({ msg: "image harus di upload!" })
        const image = req.file.path
        const { permasalahan, lokasi, id_user, namaLengkap_user } = req.body

        // const id = await Masyarakat.findById(id_user)
        // if (!id) return res.json({ msg: "User dengan id ini tidak ditemukan!", status: false })

        if (permasalahan === '') return res.json({ msg: "permasalahan tidak boleh kosong!", status: false })
        if (lokasi === '') return res.json({ msg: "lokasi tidak boleh kosong!", status: false })

        const data = await Pengaduan.create({
            id_user,
            namaLengkap_user,
            status_pengaduan: false,
            image,
            permasalahan,
            lokasi
        })

        return res.json({ status: true, data })
    } catch (ex) {
        next(ex)
    }
}