import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../components/layouts/Navbar-user/NavbarUser'
import './edukasi-detail.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getEdukasiByIdRoute } from '../../../utils/APIRoutes'
import TambahEdukasi from '../../tambah-edukasi/TambahEdukasi'


const EdukasiDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [value, setValue] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${getEdukasiByIdRoute}/${id}`)
            const data = response.data
            setValue(data)

        } catch (error) {
            console.error('gagal mendapatkan data', error)
        }
    }

    let paragraph = []

    if (value.deskripsi) {
        paragraph = value.deskripsi.split("\n")
    }


    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleClick = (item) => {
        navigate(`/edukasi-sampah/tambah-edukasi/${item._id}`); // Pass the item ID as a route parameter)
    }

    return (
        <div className='detail-edukasi-container'>
            <NavbarUser title='Edukasi Sampah' pindah='/edukasi-sampah' />
            <div className='detail-edukasi-content'>
                <div className='detail-edukasi-content-upper'>
                    <div className='detail-edukasi-content-upper-title'>
                        <h3>{value.nama}</h3>
                    </div>
                    <div className='detail-edukasi-content-upper-add-edukasi'>
                        <button className='button'
                            name='tambah-edukasi'
                            style={{ width: 180 + "px" }}
                            onClick={() => {
                                handleClick(value)
                            }}
                        >Tambah</button>
                    </div>
                </div>
                <div className='detail-edukasi-content-lower'>
                    {paragraph.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
            <div className='detail-edukasi-tambah-edukasi'>
                <div className='detail-edukasi-tambah-edukasi-content'>
                    <h2>Tambahan Edukasi</h2>
                    <TambahEdukasi id={id} />
                </div>
            </div>
        </div>
    )
}

export default EdukasiDetail