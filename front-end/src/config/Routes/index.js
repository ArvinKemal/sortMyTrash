import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Beranda, 
  SortingSampah, 
  LoginUser, 
  LokasiPembuanganUser, 
  PengaduanSampahUser, RiwayatUser,
  Edukasi, 
  ProfilUser,
  LoginPetugas,
DaftarAkunPetugas } from '../../pages'
import DaftarAkunUSer from '../../pages/auth/user/daftar-akun-user/DaftarAkunUser'
import { HasilSortingAluminium, 
  HasilSortingBesi, 
  HasilSortingElektronik, 
  HasilSortingKardus, 
  HasilSortingKertas, 
  HasilSortingPlastik } from '../../pages/Sorting/HasilSorting'
import EdukasiDetail from '../../pages/Edukasi/EdukasiDetail/EdukasiDetail'
import AddTambahEdukasi from '../../pages/tambah-edukasi/add-tambah-edukasi/addTambahEdukasi'
import EditTambahEdukasi from '../../pages/tambah-edukasi/edit-tambah-edukasi/edit-tambah-edukasi'


const Routingan = () => {
  return (
    <Router>
        <Routes>
            <Route path='/login' element={<LoginUser />} />
            <Route path='/daftar' element={<DaftarAkunUSer />}/>

            <Route path='/login-petugas' element={<LoginPetugas />} />
            <Route path='/daftar-petugas' element={<DaftarAkunPetugas />} />

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

            <Route path='/edukasi-sampah/tambah-edukasi/:id' element={<AddTambahEdukasi />} />
            <Route path='/edukasi-sampah/edit-edukasi/:id' element={<EditTambahEdukasi />} />

            <Route path='/pengaduan-sampah' element= {<PengaduanSampahUser />} />

            <Route path='/riwayat' element= {<RiwayatUser />}/>
            <Route path='/lokasi' element={<LokasiPembuanganUser />}/>
        </Routes>
    </Router>
  )
}

export default Routingan