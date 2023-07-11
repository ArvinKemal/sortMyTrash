import React, { useEffect, useState } from 'react'
import './pengaduan-user.css'
import NavbarUser from '../../../components/layouts/Navbar-user/NavbarUser'

const PengaduanSampahUser = () => {

    const [user, setUser] = useState({
        id_user: '',
        namaLengkap_user: ''
    })

    const fetchData = async () => {
        try {
            const data = localStorage.getItem(undefined)
            const parsedData = JSON.parse(data)
            const id = parsedData._id
            const nama = parsedData.namaLengkap
            setUser({
                id_user: id,
                namaLengkap_user: nama
            })
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const [values, setValues] = useState({
        permasalahan: '',
        lokasi: ''
    })

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }

    const validateForm = () => {
        const { permasalahan, lokasi } = values
        if (permasalahan === "") {
          alert("permasalahan harus di deskripsikan!")
          return false
        }
        if (lokasi === "") {
          alert("Lokasi diperlukan!")
          return false
        }
        return true
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log(values)
        }
    }

    return (
        <div className='pengaduan-user'>
            <NavbarUser title='Pengaduan' pindah='/' />
            <div className='pengaduan-user-container'>
                <div className='pengaduan-user-content'>
                    <form action="" method="post" onSubmit={(event) => handleSubmit(event)}>
                        <div style={{ marginBottom: 10 + "px" }}>
                            <input
                                className='inputpermasalahan'
                                type="text"
                                placeholder="Lokasi Permasalahan"
                                name='lokasi'
                                onChange={(e) => handleChange(e)}
                                required/>
                        </div>
                        <textarea
                            placeholder="Tulis isi permasalahan disini..."
                            name='permasalahan'
                            onChange={(e) => handleChange(e)}
                            required></textarea>
                        <div>
                            <input className='inputfoto' type="file" accept="image/*" required />
                        </div>
                        <div className='pengaduan-user-content-bawah'>
                            <button className='button'
                                type='submit'
                                style={{ width: 135 + "px", height: 20 + "px" }}
                            >LAPORKAN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PengaduanSampahUser