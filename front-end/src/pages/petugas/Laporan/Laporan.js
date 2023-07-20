import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../components/layouts/Navbar-user/NavbarUser'
import { useNavigate } from 'react-router-dom'
import { getAllLaporanRoute } from '../../../utils/APIRoutes'
import './laporan.css'
import report from './assets/report.png'
import check from './assets/check.png'

const Laporan = () => {

    const navigate = useNavigate()
    const [values, setValues] = useState([]) // state awal harus array jika data lebih dari 1

    const fetchData = async () => {
        try {
            const response = await axios.get(getAllLaporanRoute)
            const datas = response.data
            const updatedValues = datas.map(data => ({ // Membuat objek baru untuk setiap data
                _id: data._id,
                id_user: data.id_user,
                namaLengkap_user: data.namaLengkap_user,
                status_pengaduan: data.status_pengaduan,
                permasalahan: data.permasalahan,
                lokasi: data.lokasi
            }));
            setValues(updatedValues) // Menggunakan array baru yang berisi semua data
        } catch (error) {
            console.error('gagal mendapatkan data', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleClick = (item) => {
        console.log(item)
        navigate(`/laporan/detail-laporan/${item}`); // Pass the item ID as a route parameter)
    }


    if (values.length === 0) { // Menampilkan pesan loading jika data belum diterima
        return <p>Loading...</p>;
    }



    return (
        <>
            <div className='laporan-container'>
                <NavbarUser title='Laporan' pindah='/' />
                <div className='laporan-item-flex'>
                    {values.map((item) => (
                        <div
                            className={`laporan-item`}
                            key={item._id}
                            onClick={() => handleClick(item._id)}
                        >
                            <div className='laporan-content-nama'>
                                {item.namaLengkap_user}
                            </div>
                            <div className='laporan-content-permasalahan'>
                                {item.permasalahan}
                            </div>
                            <div className='laporan-content-status'>
                                {item.status_pengaduan ? (
                                    <div className='laporan-content-stats'>
                                        <img className='laporan-content-status-img' src={check} alt='Check' />
                                        <span className='green'>Disetujui</span>
                                    </div>
                                ) : (
                                    <div className='laporan-content-stats'>
                                        <img className='laporan-content-status-img' src={report} alt='Report' />
                                        <span className='red'>Perlu Persetujuan</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Laporan