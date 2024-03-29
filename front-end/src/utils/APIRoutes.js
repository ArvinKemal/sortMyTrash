export const host = 'http://localhost:8000'
export const loginRoute = `${host}/api/auth/login`
export const registerRoute = `${host}/api/auth/register`
export const loginPetugasRoute = `${host}/api/auth/login-petugas`
export const registerPetugasRoute = `${host}/api/auth/register-petugas`


export const getAllEdukasiRoute = `${host}/api/edukasi`
export const getEdukasiByIdRoute = `${host}/api/edukasi/detail-edukasi`


export const getAllTambahEdukasiRoute = `${host}/api/edukasi/detail-edukasi/tambah-edukasi`
export const getTambahEdukasiByIdRoute = `${host}/api/edukasi/get-tambah-edukasi`
export const addTambahEdukasiRoute = `${host}/api/edukasi/tambah-edukasi`
export const updateTambahEdukasiRoute = `${host}/api/edukasi/edit-tambah-edukasi`
export const deleteTambahEdukasiRoute = `${host}/api/edukasi/hapus-tambah-edukasi`

export const addPengaduanRoute = `${host}/api/pengaduan-sampah/tambah-pengaduan`


export const getAllLaporanRoute = `${host}/api/petugas/laporan`
export const getLaporanByIdRoute = `${host}/api/petugas/laporan/detail-laporan`
export const updateLaporanRoute = `${host}/api/petugas/laporan/detail-laporan`