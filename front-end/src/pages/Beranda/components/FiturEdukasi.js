// import React from 'react'
import { Button, Gap } from '../../../components'
import edukasi from '../../../assets/img/edukasi.svg'
import { useNavigate } from 'react-router-dom'

const FiturEdukasi = () => {
    const Navigate = useNavigate()
    return (
        <div className="fitur-edukasi-container flex aic vh">
            <div className='card flex column aic jcc'>
                <div className='card-title'>
                    <h1>EDUKASI SAMPAH</h1>
                </div>
                <Gap height="10" />
                <div className='card-image'>
                    <img className='img' src={edukasi} alt='sortir' />
                </div>
                <Gap height="20" />
                <div className='card-description'>
                <button className="button" onClick={() => Navigate('/edukasi-sampah')}>Edukasi</button>
                </div>
            </div>
        </div>
    )
}

export default FiturEdukasi