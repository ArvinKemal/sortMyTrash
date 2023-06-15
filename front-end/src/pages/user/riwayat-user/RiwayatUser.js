import React from 'react'

const RiwayatUser = () => {
  return (
    <div class="container">
      <h1>Riwayat</h1>
      <hr />
      <div class="row">
        <div class="col-md-8">
          <p>
            Laporan anda sudah diterima oleh petugas. silahkan dilihat kembali
            laporan anda
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button class="btn btn-danger btn-block">
            Hapus Riwayat Pelaporan
          </button>
        </div>
      </div>
    </div>
  )
}

export default RiwayatUser