import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTambahEdukasiByIdRoute, updateTambahEdukasiRoute } from '../../../utils/APIRoutes'

const EditTambahEdukasi = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [valueAwal, setValueAwal] = useState({
        _id: id,
        id_edukasi: '',
        namaLengkap: '',
        deskripsi: ''
    })

    const fetchData = async () => {
        try {
            const response = await axios.get(`${getTambahEdukasiByIdRoute}/${id}`)
            const data = response.data
            setValueAwal({
                _id: id,
                id_edukasi: data.id_edukasi,
                namaLengkap: data.namaLengkap,
                deskripsi: data.deskripsi
            })

        } catch (error) {
            console.error('gagal mendapatkan data', error)
        }
    }

    useEffect(() => {
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [valueEdit, setValueEdit] = useState({
        _id: id,
        id_edukasi: valueAwal.id_edukasi,
        namaLengkap: valueAwal.namaLengkap,
        deskripsi: ''
    })


    useEffect(() => {
        setValueEdit((prevValueEdit) => ({
            ...prevValueEdit,
            id_edukasi: valueAwal.id_edukasi,
            namaLengkap: valueAwal.namaLengkap,
            deskripsi: valueAwal.deskripsi
        }));
    }, [valueAwal]);

    const handleChange = (e) => {
        setValueEdit((prevValueEdit) => ({
            ...prevValueEdit,
            deskripsi: e.target.value
        }));
    };

    const validateForm = () => {
        const { _id, id_edukasi, namaLengkap } = valueEdit
        if (_id !== valueAwal._id) {
            alert("_id tidak boleh berubah!")
        }
        if (id_edukasi !== valueAwal.id_edukasi) {
            alert("Jangan merubah id_edukasi!")
            return false
        }
        if (namaLengkap !== valueAwal.namaLengkap) {
            alert("nama user berbeda!")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Lakukan apa pun yang ingin Anda lakukan dengan nilai deskripsi, seperti menyimpannya di state komponen atau mengirim ke server
        if (validateForm()) {
            const { _id, id_edukasi, namaLengkap, deskripsi } = valueEdit;

              const { data } = await axios.put(`${updateTambahEdukasiRoute}/${_id}`, {
                id_edukasi,
                namaLengkap,
                deskripsi
              })
              if (data.status === false) {
                alert(data.msg)
              }
              if (data.status === true) {
                navigate(`/edukasi-sampah/detail-edukasi/${id_edukasi}`)
              }
              console.log(data)
            }
        };

    return (
        <div className='add-tambah-edukasi-container'>
            <h1>Form Deskripsi</h1>
            <form onSubmit={handleSubmit}>
                <div className='add-tambah-edukasi-container-form'>
                    <label htmlFor="add-tambah-edukasi-container-form">Deskripsi Edukasi:</label>
                    <textarea
                        id="add-tambah-edukasi-container-form"
                        name="add-tambah-edukasi-container-form"
                        value={valueEdit.deskripsi}
                        onChange={handleChange} />
                </div>
                <div className='add-tambah-edukasi-container-button'>
                    <button className='button'
                        type='submit'
                        style={{ width: 100 + "px", height: 20 + "px" }}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditTambahEdukasi