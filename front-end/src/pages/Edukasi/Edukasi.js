import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getEdukasiRoute } from '../../utils/APIRoutes'
import './edukasi.css'
import NavbarUser from '../../components/layouts/Navbar-user/NavbarUser'
import { useNavigate } from 'react-router-dom'

const Edukasi = () => {
    const Navigate = useNavigate()
    const [values, setValues] = useState([]) // state awal harus array jika data lebih dari 1
    const fetchData = async () => {
        try {
            const response = await axios.get(getEdukasiRoute)
            const datas = response.data

            // buatan sendiri
            // for (let i = 0; i < datas.length; i++) {
            //     const data = datas[i]
            //     const updateValue = { ...values }
            //     updateValue._id = data._id
            //     updateValue.nama = data.nama
            //     updateValue.deskripsi = data.deskripsi
            //     setValues(updateValue)
            // }

            const updatedValues = datas.map(data => ({ // Membuat objek baru untuk setiap data
                _id: data._id,
                nama: data.nama,
                deskripsi: data.deskripsi
            }));
            setValues(updatedValues) // Menggunakan array baru yang berisi semua data

            console.log('values:', values)
            // }
        } catch (error) {
            console.error('gagal mendapatkan data', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (values.length === 0) { // Menampilkan pesan loading jika data belum diterima
        return <p>Loading...</p>;
    }


    return (
        <>
            <div className='edukasi-container'>
                <NavbarUser title='Edukasi Sampah' pindah='/' />
                {values.map((item) => (
                    <div className='edukasi-content' key={item._id}>
                        <div className='edukasi-content-nama'>
                            <h2>{item.nama}</h2>
                        </div>
                        <div className='edukasi-content-button'>
                            <button className='button' style={{ width: 180 + "px" }}
                                // onClick={() => Navigate('/pengaduan')}
                            >PILIH</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Edukasi