import React, { useEffect } from 'react'
import Navbar from '../../components/layouts/Navbar'
import './beranda.css'
import { useNavigate } from 'react-router-dom'
import FiturSorting from './components/FiturSorting'
import FiturEdukasi from './components/FiturEdukasi'
import FiturPengaduan from './components/FiturPengaduan'
import FiturLokasi from './components/FiturLokasi'

function Beranda() {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
			navigate("/daftar");
		}
    }, [])

    return (
        <>
            <Navbar />
            <div className="containerBeranda">
                <FiturSorting />
                <FiturEdukasi />
                <FiturPengaduan />
                <FiturLokasi />
            </div>
        </>
    )
}

export default Beranda;