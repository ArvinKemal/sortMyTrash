/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Navbar from '../../components/layouts/Navbar'
import './beranda.css'
import { useNavigate } from 'react-router-dom'
import FiturSorting from './components/FiturSorting'
import FiturEdukasi from './components/FiturEdukasi'
import FiturPengaduan from './components/FiturPengaduan'
import FiturLokasi from './components/FiturLokasi'
import FiturLaporan from './components/FiturLaporan'

function Beranda() {
    const navigate = useNavigate()

    const user = localStorage.getItem('USER')
    const petugas = localStorage.getItem('PETUGAS')

    useEffect(() => {
        if (!user && !petugas) {
            navigate("/login");
        }
    }, [])

    if (user) {
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

    if (petugas) {
        return (
            <>
                <Navbar />
                <div className="containerBeranda">
                    <FiturSorting />
                    <FiturEdukasi />
                    <FiturLaporan />
                </div>
            </>
        )
    }
}

export default Beranda;