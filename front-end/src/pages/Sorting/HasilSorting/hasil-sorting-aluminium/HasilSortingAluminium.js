import React from 'react'
import img from '../../../../assets/img/sampah-aluminium.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingAluminium = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='besi' />
                <article>
                    <h2>Aluminium (Anorganik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>Sampah aluminium adalah limbah yang berasal dari bahan logam aluminium yang tidak lagi digunakan atau rusak dan tidak dapat digunakan kembali dalam bentuknya yang asli. Sampah aluminium dapat berasal dari berbagai sumber seperti pabrik, konstruksi, kendaraan bekas, dan lain-lain.</p>
                    <p className='p-sorting'>Sampah aluminium dapat didaur ulang untuk digunakan kembali sebagai bahan baku dalam produksi aluminium baru. Proses daur ulang aluminium membutuhkan energi yang lebih sedikit daripada proses produksi aluminium dari bijih bauksit. Oleh karena itu, daur ulang aluminium dapat membantu mengurangi dampak lingkungan dari proses produksi aluminium.
                        Untuk memulai pengolahan sampah aluminium, sampah aluminium harus dikumpulkan terlebih dahulu dan dipisahkan dari bahan lain seperti plastik, kertas, dan bahan non-logam lainnya. Setelah itu, sampah aluminium akan dibawa ke pabrik daur ulang aluminium untuk diproses menjadi aluminium baru.</p>
                    <p className='p-sorting'>Dalam proses daur ulang aluminium, sampah aluminium akan dilebur di dalam tungku peleburan dengan tambahan bahan-bahan lain seperti magnesium dan silikon. Setelah dilebur, aluminium cair yang dihasilkan kemudian dapat dicetak menjadi berbagai bentuk dan ukuran sesuai kebutuhan.
                        Sampah aluminium adalah sumber daya yang berharga dan dapat didaur ulang untuk mengurangi dampak lingkungan dari produksi aluminium. Selain itu, daur ulang aluminium juga dapat membantu mengurangi jumlah sampah yang dibuang ke tempat pembuangan akhir dan memperpanjang umur pakai bahan logam aluminium.</p>
                </article>
            </section>
            <Gap height='10' />
            <div class="hasil-sorting-pagination">
                <button className='button' style={{ width: 180 + "px" }}
                    onClick={() => Navigate('/edukasi-sampah')}
                >Baca Edukasi</button>
                <button className='button' style={{ width: 180 + "px" }}
                    onClick={() => Navigate('/pengaduan')}
                >Lapor Pengaduan</button>
            </div>
        </main>
    )
}

export default HasilSortingAluminium