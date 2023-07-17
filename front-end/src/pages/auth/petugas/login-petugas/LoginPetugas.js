/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../../assets/img/logo.png'
import axios from 'axios'
import './login.css'
import { loginPetugasRoute } from '../../../../utils/APIRoutes'

const LoginPetugas = () => {
  const navigate = useNavigate()

  const [values, setValues] = useState({
    email: "",
    password: ""
  })

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const validateForm = () => {
    const { email, password } = values
    if (email === "") {
      alert("email dan password diperlukan!")
      return false
    }
    if (password.length <= 5) {
      alert("email dan password diperlukan!")
      return false
    }
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { email, password } = values;
      const { data } = await axios.post(loginPetugasRoute, {
        email,
        password
      })
      if (data.status === false) {
        alert(data.msg)
      }
      if (data.status === true) {
        localStorage.setItem(
          "PETUGAS",
          JSON.stringify(data.user)
        )
        navigate('/')
      }
      console.log('status:', data.status)
    }
  }

  return (
    <div className='login-container'>
      <form className="login-form" action='' onSubmit={(event) => handleSubmit(event)}>
        <div>
          <img className='logo-sortmytrash' src={logo} alt={'SortMyTrash logo'} />
        </div>
        <div className="form-login">
          <input className="form-control"
            name='email'
            type="email"
            placeholder='Email'
            onChange={(e) => handleChange(e)}
            required />
        </div>
        <div className="form-login">
          <input className="form-control"
            name='password'
            type="password"
            placeholder='Kata Sandi'
            onChange={(e) => handleChange(e)}
            required />
        </div>
        <div className="form-login">
          <button
            className='button-login'
            type='submit'
          >Daftar</button>
        </div>
        <p className="desc-daftar">Belum punya akun? <Link to='/daftar-petugas'>Daftar sebagai Petugas </Link>/<Link to='/login'> Masuk sebagai User</Link></p>
      </form>
    </div>
  )
}

export default LoginPetugas