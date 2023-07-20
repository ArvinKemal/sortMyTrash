import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../components/layouts/Navbar-user/NavbarUser'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './laporanDetail.css'
import { getLaporanByIdRoute, updateLaporanRoute } from '../../../utils/APIRoutes'
import { Gap } from '../../../components'


const LaporanDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [values, setValues] = useState([])
    const [image, setImage] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get(`${getLaporanByIdRoute}/${id}`)
            const data = response.data
            setValues(data)
            setImage(`http://localhost:8000/${data.image}`)

        } catch (error) {
            console.error('gagal mendapatkan data', error)
        }
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const handleClick = async (item) => {
        const { id_user, namaLengkap_user, permasalahan, lokasi, image } = values
        const newStatus = true
        const formData = new FormData()
        formData.append('id_user', id_user);
        formData.append('namaLengkap_user', namaLengkap_user);
        formData.append('status_pengaduan', newStatus)
        formData.append('permasalahan', permasalahan);
        formData.append('lokasi', lokasi);
        formData.append('image', image);

        try {
            const response = await axios.put(`${updateLaporanRoute}/${id}`, formData);
            if (response.data.status === true) {
                alert('Pengaduan berhasil disetujui!');
                navigate('/laporan');
            } else {
                alert('Gagal mengupdate status pengaduan.');
            }
        } catch (error) {
            console.log('Error:', error);
            alert('Terjadi kesalahan saat mengupdate status pengaduan.');
        }
    }

    return (
        <div className='detail-laporan-container'>
            <NavbarUser title='Detail pengaduan' pindah='/laporan' />
            <div className='detail-laporan-content'>
                <div className='detail-laporan-informasi'>
                    <h4>informasi pengaduan</h4>
                    <hr></hr>
                    <div className='px'>
                        <span className='detail'>{values.namaLengkap_user}</span> melakukan pengaduan sampah dengan id: {values._id}
                    </div>
                </div>
                <div className='detail-laporan-lokasi'>
                    <h4>Lokasi</h4>
                    <hr></hr>
                    <div className='detail-laporan-lokasi-content'>
                        <div className='detail'>
                            {values.lokasi}
                        </div>
                        <Gap height='20' />
                        <div>
                            <img className='detail-laporan-image' src={image} alt='' />
                        </div>
                    </div>
                </div>
                <div className='detail-laporan-permasalahan'>
                    <h4>Permasalahan</h4>
                    <hr></hr>
                    <div className='detail'>
                        {values.permasalahan}
                    </div>
                </div>
            </div>
            <div className='laporan-btn'>
                <button className='laporan-buttonnn'

                    onClick={() => {
                        handleClick(values)
                    }}
                >SETUJUI</button>
            </div>
        </div>
    )
}

export default LaporanDetail