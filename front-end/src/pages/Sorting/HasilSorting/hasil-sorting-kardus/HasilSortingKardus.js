import React from 'react'
import img from '../../../../assets/img/sampah-kardus.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingKardus = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='kardus' />
                <article>
                    <h2>Kardus (Organik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>
                        Sampah kardus adalah limbah yang berasal dari kardus yang sudah tidak terpakai atau rusak. Kardus adalah bahan kemasan yang umum digunakan untuk membungkus barang-barang seperti makanan, minuman, pakaian, buku, dan sebagainya.</p>
                    <p className='p-sorting'>Sampah kardus dapat dianggap sebagai sampah anorganik karena kardus tidak dapat diurai secara alami oleh mikroorganisme dan bukan bahan organik yang dapat dijadikan pupuk untuk tanaman. Oleh karena itu, pengelolaan sampah kardus perlu dilakukan dengan baik untuk mengurangi dampak lingkungan yang merugikan.
                        Salah satu cara pengelolaan sampah kardus yang paling umum dilakukan adalah dengan mendaur ulang. Kardus yang sudah tidak terpakai dapat dikumpulkan dan diproses untuk dijadikan sebagai bahan baku untuk pembuatan kardus baru atau produk kertas lainnya. Daur ulang kardus dapat membantu mengurangi penggunaan sumber daya alam yang diperlukan untuk produksi kertas dan mengurangi volume sampah yang dibuang ke tempat pembuangan akhir.</p>
                    <p className='p-sorting'>Selain mendaur ulang, sampah kardus juga dapat digunakan kembali sebagai bahan bakar alternatif dalam pembangkit listrik atau pemanas. Beberapa perusahaan juga menggunakan kardus yang tidak terpakai sebagai bahan untuk pembuatan produk kerajinan tangan atau untuk keperluan konstruksi.
                        Namun, sebelum didaur ulang atau digunakan kembali, kardus yang sudah tidak terpakai harus dipisahkan dari sampah organik dan sampah anorganik lainnya agar dapat diolah secara efektif.</p>
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

export default HasilSortingKardus