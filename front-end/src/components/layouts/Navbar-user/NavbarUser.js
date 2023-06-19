import React, { useEffect, useState } from 'react'
import back from '../../../assets/img/arrow-left.svg'
import './navbarUser.css'
import { useNavigate } from 'react-router-dom'

const NavbarUser = (props) => {
    const Navigate = useNavigate()

    const [pindah, setPindah] = useState('')

    useEffect(() => {
        if (pindah !== '') {
          Navigate(pindah)
        }
      }, [pindah, Navigate])
  return (
    <nav className='navbar-user'>
        <div className='user-pagination'>
            <img className='icon-back-nav-user' 
            src={back} 
            alt='kembali'
            onClick={() => setPindah(props.pindah)}
            />
        </div>
        {props.title}
    </nav>
  )
}

export default NavbarUser