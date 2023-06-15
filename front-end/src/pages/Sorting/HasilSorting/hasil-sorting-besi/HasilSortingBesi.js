import React from 'react'
import img from '../../../../assets/img/sampah-besi.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingBesi = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='besi' />
                <article>
                    <h2>Besi (Anorganik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>Sampah besi adalah limbah yang berasal dari bahan logam besi atau baja yang tidak lagi digunakan atau rusak dan tidak bisa digunakan kembali. Sampah besi dapat berasal dari berbagai sumber seperti pabrik, konstruksi, kendaraan bekas, dan lain-lain.</p>
                    <p className='p-sorting'>Sampah besi dapat didaur ulang untuk digunakan kembali sebagai bahan baku dalam produksi baja baru. Proses daur ulang besi membutuhkan energi yang lebih sedikit daripada proses produksi baja dari bijih besi. Oleh karena itu, daur ulang besi dapat membantu mengurangi dampak lingkungan dari proses produksi baja.
                        Untuk memulai pengolahan sampah besi, sampah besi harus dikumpulkan terlebih dahulu dan dipisahkan dari bahan lain seperti plastik, kertas, dan bahan non-logam lainnya. Setelah itu, sampah besi akan dibawa ke pabrik daur ulang besi untuk diproses menjadi baja baru.</p>
                    <p className='p-sorting'>Dalam proses daur ulang besi, sampah besi akan dilebur di dalam tungku peleburan dengan tambahan bahan-bahan lain seperti batu kapur, kokas, dan lain-lain. Setelah dilebur, baja cair yang dihasilkan kemudian dapat dicetak menjadi berbagai bentuk dan ukuran sesuai kebutuhan.
                        Sampah besi adalah sumber daya yang berharga dan dapat didaur ulang untuk mengurangi dampak lingkungan dari produksi baja. Selain itu, daur ulang besi juga dapat membantu mengurangi jumlah sampah yang dibuang ke tempat pembuangan akhir dan memperpanjang umur pakai bahan logam besi.</p>
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

export default HasilSortingBesi