import React, { useEffect, useState } from 'react'
import './add-tambah-edukasi.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { addTambahEdukasiRoute } from '../../../utils/APIRoutes'

const AddTambahEdukasi = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [value, setValues] = useState({
    id_edukasi: '',
    namaLengkap: '',
    deskripsi: ''
  })

  const [nama, setNama] = useState({
    namaLengkap: ''
  })


  const fetchData = async () => {
    try {
      const data = localStorage.getItem(undefined)
      const parsedData = JSON.parse(data)
      const nama = parsedData.namaLengkap
      setNama(nama)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  const handleChange = (e) => {
    setValues({
      id_edukasi: id,
      namaLengkap: nama,
      deskripsi: e.target.value
    });
  }
  const validateForm = () => {
    const { id_edukasi, namaLengkap, deskripsi } = value
    if (!id_edukasi) {
      alert("Bukan punya bapakmu")
      return false
    }
    if (!namaLengkap) {
      alert("Siapa nama Kau")
      return false
    }
    if (deskripsi === '') {
      alert("Deskripsi tidak boleh kosong!")
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lakukan apa pun yang ingin Anda lakukan dengan nilai deskripsi, seperti menyimpannya di state komponen atau mengirim ke server
    if (validateForm()) {
      const { id_edukasi, namaLengkap, deskripsi } = value;
      const { data } = await axios.post(addTambahEdukasiRoute, {
        id_edukasi,
        namaLengkap,
        deskripsi
      })
      if (data.status === false) {
        alert(data.msg)
      }
      if (data.status === true) {
        navigate(`/edukasi-sampah/detail-edukasi/${value.id_edukasi}`)
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

export default AddTambahEdukasi