import React from 'react'
import img from '../../../../assets/img/sampah-besi.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingElektronik = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='besi' />
                <article>
                    <h2>Elektronik (Anorganik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>
                        Sampah elektronik, juga dikenal sebagai e-waste, merujuk pada limbah yang berasal dari peralatan elektronik yang tidak lagi digunakan atau sudah rusak. Contoh peralatan elektronik yang bisa menjadi sampah elektronik antara lain telepon genggam, laptop, printer, televisi, kulkas, mesin cuci, dan sebagainya.</p>
                    <p className='p-sorting'>Sampah elektronik mengandung bahan berbahaya seperti timbal, merkuri, kadmium, dan bahan kimia lainnya yang berpotensi merusak lingkungan dan kesehatan manusia. Oleh karena itu, penting untuk mengelola dan memproses e-waste dengan baik untuk mengurangi dampak lingkungan yang merugikan.
                        Salah satu cara untuk mengelola sampah elektronik adalah dengan mendaur ulang. Pada proses daur ulang, sampah elektronik akan diproses untuk memisahkan bahan-bahan berbahaya dan bahan-bahan yang bisa didaur ulang seperti logam dan plastik. Setelah diproses, bahan-bahan yang bisa didaur ulang dapat digunakan kembali sebagai bahan baku dalam produksi elektronik baru.</p>
                    <p className='p-sorting'>Namun, pengolahan sampah elektronik bisa sangat rumit karena peralatan elektronik terdiri dari berbagai komponen yang berbeda-beda dan memerlukan teknologi khusus untuk dapat didaur ulang secara efektif. Selain itu, seringkali sampah elektronik dibuang di tempat pembuangan sampah umum yang dapat meningkatkan risiko kerusakan lingkungan dan kesehatan.
                        Oleh karena itu, sangat penting untuk mengurangi produksi sampah elektronik dengan memilih peralatan elektronik yang tahan lama dan mudah diperbaiki serta membuangnya dengan tepat sesuai dengan aturan dan regulasi yang berlaku.</p>
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

export default HasilSortingElektronik