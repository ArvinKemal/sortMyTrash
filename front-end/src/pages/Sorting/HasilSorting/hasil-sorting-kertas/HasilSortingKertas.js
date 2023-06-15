import React from 'react'
import img from '../../../../assets/img/sampah-kertas.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingKertas = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='besi' />
                <article>
                    <h2>Kertas (Organik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>Sampah kertas adalah limbah yang berasal dari kertas yang sudah tidak terpakai atau rusak. Kertas merupakan bahan yang sangat umum digunakan dalam kehidupan sehari-hari untuk berbagai keperluan seperti mencetak dokumen, membuat kertas koran, kertas pembungkus, dan lain-lain.</p>
                    <p className='p-sorting'>Sampah kertas dapat dianggap sebagai sampah anorganik karena kertas yang sudah tidak terpakai tidak dapat diurai secara alami oleh mikroorganisme dan bukan bahan organik yang dapat dijadikan pupuk untuk tanaman. Oleh karena itu, pengelolaan sampah kertas perlu dilakukan dengan baik untuk mengurangi dampak lingkungan yang merugikan.
                        Salah satu cara pengelolaan sampah kertas yang paling umum dilakukan adalah dengan mendaur ulang. Kertas yang sudah tidak terpakai dapat dikumpulkan dan diproses untuk dijadikan sebagai bahan baku untuk pembuatan kertas baru atau produk kertas lainnya. Daur ulang kertas dapat membantu mengurangi penggunaan sumber daya alam yang diperlukan untuk produksi kertas dan mengurangi volume sampah yang dibuang ke tempat pembuangan akhir.</p>
                    <p className='p-sorting'>Selain mendaur ulang, sampah kertas juga dapat digunakan kembali sebagai bahan bakar alternatif dalam pembangkit listrik atau pemanas. Beberapa perusahaan juga menggunakan kertas yang tidak terpakai sebagai bahan untuk pembuatan produk kerajinan tangan atau untuk keperluan konstruksi.
                        Namun, sebelum didaur ulang atau digunakan kembali, kertas yang sudah tidak terpakai harus dipisahkan dari sampah organik dan sampah anorganik lainnya agar dapat diolah secara efektif.</p>
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

export default HasilSortingKertas