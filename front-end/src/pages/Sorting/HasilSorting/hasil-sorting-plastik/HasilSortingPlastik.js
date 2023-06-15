import React from 'react'
import img from '../../../../assets/img/sampah-pelastik.jpg'
import '../HasilSorting.css'
import { Gap } from '../../../../components'
import { useNavigate } from 'react-router-dom'
import NavbarUser from '../../../../components/layouts/Navbar-user/NavbarUser'

const HasilSortingPlastik = () => {
    const Navigate = useNavigate()

    return (
        <main className='hasil-sorting-container'>
            <NavbarUser title='Sortir Sampah' pindah='/sortir'/>
            <section className='hasil-sorting-content'>
                <img className='hasil-sorting-img' src={img} alt='besi' />
                <article>
                    <h2>Plastik (Anorganik)</h2>
                    <Gap height='10' />
                    <p className='p-sorting'>Sampah plastik adalah limbah yang berasal dari bahan plastik yang sudah tidak terpakai atau rusak. Plastik adalah bahan yang sangat umum digunakan dalam berbagai produk konsumen, seperti kemasan makanan, botol minuman, mainan anak-anak, dan sebagainya.
                        Sampah plastik dapat dianggap sebagai sampah anorganik karena plastik tidak dapat diurai secara alami oleh mikroorganisme dan bukan bahan organik yang dapat dijadikan pupuk untuk tanaman. Oleh karena itu, pengelolaan sampah plastik perlu dilakukan dengan baik untuk mengurangi dampak lingkungan yang merugikan.</p>
                    <p className='p-sorting'>Sampah plastik sangat sulit diurai dan memerlukan waktu ratusan hingga ribuan tahun untuk terurai. Oleh karena itu, banyak sekali sampah plastik yang menumpuk di lautan, di tempat pembuangan sampah, atau di lingkungan sekitar kita. Sampah plastik yang terbengkalai di lingkungan dapat menyebabkan pencemaran lingkungan, mengganggu kehidupan hewan dan tumbuhan, serta berdampak negatif pada kesehatan manusia.
                        Salah satu cara pengelolaan sampah plastik yang paling efektif adalah dengan mendaur ulang. Plastik yang sudah tidak terpakai dapat dikumpulkan dan diproses untuk dijadikan sebagai bahan baku untuk pembuatan produk plastik baru. Daur ulang plastik dapat membantu mengurangi penggunaan sumber daya alam yang diperlukan untuk produksi plastik dan mengurangi volume sampah yang dibuang ke tempat pembuangan akhir.</p>
                    <p className='p-sorting'>Namun, tidak semua jenis plastik dapat didaur ulang. Beberapa jenis plastik sulit didaur ulang atau memerlukan proses khusus untuk didaur ulang. Oleh karena itu, penting bagi kita untuk memilih produk yang menggunakan plastik yang mudah didaur ulang atau mengurangi penggunaan plastik secara keseluruhan dengan cara mengganti dengan bahan yang ramah lingkungan.
                        Selain mendaur ulang, cara lain untuk mengurangi sampah plastik adalah dengan menghindari penggunaan plastik sekali pakai, seperti sedotan, wadah makanan, dan kantong plastik. Kita dapat menggunakan bahan alternatif seperti kertas, kantong kain, atau tumbler untuk menggantikan produk plastik sekali pakai.</p>
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

export default HasilSortingPlastik