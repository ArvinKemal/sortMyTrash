import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { deleteTambahEdukasiRoute, getAllTambahEdukasiRoute } from '../../utils/APIRoutes'
import './tambah-edukasi.css'
import trash from './assets/trash.png'
import pen from './assets/pen.png'
import { useNavigate } from 'react-router-dom'

const TambahEdukasi = (props) => {
  const navigate = useNavigate()
  const [values, setValues] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(`${getAllTambahEdukasiRoute}/${props.id}`)
      const data = response.data
      setValues(data)

    } catch (error) {
      console.error('gagal mendapatkan data', error)
    }
  }

  const handleEdit = (id) => {
    navigate(`/edukasi-sampah/edit-edukasi/${id}`)
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(`${deleteTambahEdukasiRoute}/${id}`)
    if (!response) alert('Data Gagal dihapus!')
    alert('Data berhasil Dihapus!')
    fetchData()
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (values.length === 0) {
    return <div className='tambah-edukasi-error'>Belum ada tambahan edukasi</div>;
  }

  return (
    <div>
      {values.map(item => (
        <div className='tambah-edukasi-content' key={item._id}>
          <div className='tambah-edukasi-content-label'>
            <div className='tambah-edukasi-content-label-left'>
              <h2 className='tambah-edukasi-content-label-name'>{item.namaLengkap}</h2>
            </div>
            <div className='tambah-edukasi-content-label-right'>
              <div
                className='tambah-edukasi-content-label-right-item'
                onClick={() => {
                  handleEdit(item._id)
                }}>
                <img src={pen} alt='edit' />
              </div>
              <div className='tambah-edukasi-content-label-right-item'
                onClick={() => {
                  handleDelete(item._id)
                }}>
                <img src={trash} alt='delete' />
              </div>
            </div>
          </div>
          <div>
            <p className='tambah-edukasi-content-p'>{item.deskripsi}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TambahEdukasi