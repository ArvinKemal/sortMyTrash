// import React from 'react'
import { Gap } from '../../../components'
import laporan from '../../../assets/img/laporanIcon.png'
import { useNavigate } from 'react-router-dom'

const FiturLaporan = () => {
    const Navigate = useNavigate()
    return (
        <div className="fitur-laporan-container flex aic vh">
            <div className='card flex column aic jcc'>
                <div className='card-title'>
                    <h1>LAPORAN</h1>
                </div>
                <Gap height="10" />
                <div className='card-image'>
                    <img className='img' src={laporan} alt='sortir' />
                </div>
                <Gap height="20" />
                <div className='card-description'>
                <button className="button" onClick={() => Navigate('/laporan')}>Laporan</button>
                </div>
            </div>
        </div>
    )
}

export default FiturLaporan