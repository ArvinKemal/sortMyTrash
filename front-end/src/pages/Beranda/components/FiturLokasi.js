import React from 'react'
import { Gap } from '../../../components'
import lokasi from '../../../assets/img/lokasi.svg'
import { useNavigate } from 'react-router-dom'

const FiturLokasi = () => {
    const Navigate = useNavigate()
    return (
        <div className="fitur-lokasi-container flex aic vh">
            <div className='card flex column aic jcc'>
                <div className='card-title'>
                    <h1 className='card-title-h1'>LOKASI TEMPAT SAMPAH</h1>
                </div>
                <Gap height="10" />
                <div className='card-image'>
                    <img className='img' src={lokasi} alt='sortir' />
                </div>
                <Gap height="20" />
                <div className='card-description'>
                    <button className="button" onClick={() => Navigate('/lokasi')}>Lokasi</button>
                </div>
            </div>
        </div>
    )
}

export default FiturLokasi