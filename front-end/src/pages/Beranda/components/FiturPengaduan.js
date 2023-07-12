import React from 'react'
import { Gap } from '../../../components'
import pengaduan from '../../../assets/img/pengaduan.svg'
import { useNavigate } from 'react-router-dom'

const FiturPengaduan = () => {
    const Navigate = useNavigate()
    return (
        <div className="fitur-pengaduan-container flex aic vh">
            <div className='card flex column aic jcc'>
                <div className='card-title'>
                    <h1 className='card-title-h1'>PENGADUAN SAMPAH</h1>
                </div>
                <Gap height="10" />
                <div className='card-image'>
                    <img className='img' src={pengaduan} alt='pengaduan' />
                </div>
                <Gap height="20" />
                <div className='card-description'>
                    <button className="button" onClick={() => Navigate('/pengaduan-sampah')}>Pengaduan</button>
                </div>
            </div>
        </div>
    )
}

export default FiturPengaduan