import React from 'react'
import './halamanLokasi.css'

const LokasiPembuanganUser = () => {
    return (
        <div className="lokasi-container">
            <header className='header'>
                <h1>Lokasi Pembuangan Sampah</h1>
            </header>
            <p>Berikut adalah daftar lokasi pembuangan sampah yang dapat Anda gunakan:</p>
            <ul>
                <li>TPA Gampong Jawa</li>
                <li>TPS Gampong Meunasah Papeun</li>
                <li>Bank Sampah USK</li>
                <li>Pengumpulan Sampah Bawah Jembatan Lamnyong</li>
                <li>TPS 3R Lambung</li>
                <li>Kontainer Sampah Paleuh Blang</li>
                <li>TPA Regional Blang Bintang, Aceh Besar</li>
            </ul>
        </div>
  )
}

export default LokasiPembuanganUser