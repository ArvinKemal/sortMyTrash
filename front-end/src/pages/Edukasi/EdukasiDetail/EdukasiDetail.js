import React, { useEffect, useState } from 'react'
import NavbarUser from '../../../components/layouts/Navbar-user/NavbarUser'
import './edukasi-detail.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getEdukasiByIdRoute } from '../../../utils/APIRoutes'

const EdukasiDetail = () => {
    const { id } = useParams();

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
    }, [])


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
                                // handleClick(item)
                            }}
                        >Tambah</button>
                    </div>
                </div>
                <div className='detail-edukasi-content-lower'>
                    {paragraph.map((para, index) => (
                       <p key={index}>{para }</p> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EdukasiDetail