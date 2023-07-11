const Edukasi = require('../models/edukasi/edukasi-sampah')
const Masyarakat = require('../models/auth/masyarakat-model')
const tambahEdukasi = require('../models/edukasi/tambah-edukasi-sampah')

module.exports.getAllTambahEdukasi = async (req, res, next) => {
    try {
        const { id } = req.params
        const data = await tambahEdukasi.find({ id_edukasi: id })

        if (!data) return res.json({ msg: "data tidak ada!", status: false })

        return res.status(200).json(data)
    } catch (ex) {
        next(ex)
    }
}

module.exports.getTambahEdukasiById = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = await tambahEdukasi.findById(id)
        if (!data) return res.json({ msg: "data tidak ada!", status: false })

        return res.status(200).json(data)
    } catch (ex) {
        next(ex)
    }
}

module.exports.addTambahEdukasi = async (req, res, next) => {
    try {
        const { id_edukasi, namaLengkap, deskripsi } = req.body;
        if (deskripsi === '') return res.json({ msg: "deskripsi tidak boleh kosong!", status: false })

        const id = await Edukasi.findById(id_edukasi)
        if (!id) return res.json({ msg: "Edukasi dengan id ini tidak ditemukan!", status: false })

        const user = await Masyarakat.findOne({ namaLengkap });
        if (!user) return res.json({ msg: "Masyarakat dengan nama ini tidak ditemukan!", status: false });

        const data = await tambahEdukasi.create({
            id_edukasi,
            namaLengkap,
            deskripsi
        })

        return res.json({status: true, data})
    } catch (ex) {
        next(ex)
    }
}

module.exports.updateTambahEdukasi = async (req, res, next) => {
    try {
        const id = req.params.id;
        const newData = req.body;

        const result = await tambahEdukasi.findByIdAndUpdate(id, newData, { new: true });

        if (!result) {
            return res.json({ msg: 'Data tidak ditemukan', status: false });
        }

        return res.status(200).json({ status: true, result});
    } catch (ex) {
        next(ex);
    }
};

module.exports.deleteTambahEdukasi = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await tambahEdukasi.deleteOne({ _id: id })
        if (!result) return res.json({ msg: "data tidak ada!", status: false })

        return res.status(200).json({ status: true, result});
    } catch (ex) {
        next(ex)
    }
}