import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Beranda, 
  SortingSampah, 
  LoginUser, 
  LokasiPembuanganUser, 
  PengaduanUser, RiwayatUser, 
  SaranUser, 
  Edukasi, 
  ProfilUser } from '../../pages'
import DaftarAkunUSer from '../../pages/daftar-akun-user/DaftarAkunUser'
import { HasilSortingAluminium, 
  HasilSortingBesi, 
  HasilSortingElektronik, 
  HasilSortingKardus, 
  HasilSortingKertas, 
  HasilSortingPlastik } from '../../pages/Sorting/HasilSorting'
import EdukasiDetail from '../../pages/Edukasi/EdukasiDetail/EdukasiDetail'

const Routingan = () => {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<LoginUser />} />
            <Route path='/daftar' element={<DaftarAkunUSer />}/>
            <Route path='/' element={ <Beranda />} />

            <Route path='/profil' element={<ProfilUser />}/>

            <Route path='/sortir' element= {<SortingSampah />} />
            <Route path='/sortir/aluminium' element={<HasilSortingAluminium />} />
            <Route path='/sortir/besi' element={<HasilSortingBesi />} />
            <Route path='/sortir/elektronik' element={<HasilSortingElektronik />} />
            <Route path='/sortir/plastik' element={<HasilSortingPlastik />} />
            <Route path='/sortir/kardus' element={<HasilSortingKardus />} />
            <Route path='/sortir/kertas' element={<HasilSortingKertas />} />

            <Route path='/edukasi-sampah' element={<Edukasi />}/>
            <Route path='/edukasi-sampah/detail-edukasi/:id' element={<EdukasiDetail />}/>

            <Route path='/pengaduan' element= {<PengaduanUser />} />
            <Route path='/saran' element={<SaranUser />} />
            <Route path='/riwayat' element= {<RiwayatUser />}/>
            <Route path='/lokasi' element={<LokasiPembuanganUser />}/>
        </Routes>
    </Router>
  )
}

export default Routingan