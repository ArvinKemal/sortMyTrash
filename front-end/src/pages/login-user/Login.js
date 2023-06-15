import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import './login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = (e) => {
    e.preventDefault();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     navigate("/")
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage)
    //     alert('Email atau Password yang anda masukan salah!')
    //   });
  }

  return (
    <div className='login-container'>

      <form className="login-form">
        <div>
          <img className='logo-sortmytrash' src={logo} alt={'SortMyTrash logo'} />
        </div>
        <div className="form-login">
          <input
            type="email"
            className="form-control"
            placeholder='Email'
            onChange={(e) => { setEmail(e.target.value) }}
            required />
        </div>
        <div class="form-login">
          <input
            type="password"
            className="form-control"
            placeholder='Kata Sandi'
            onChange={(e) => { setPassword(e.target.value) }}
            required />
        </div>
        <div className="form-login">
          <button className='button-login' onClick={onLogin}

          >Daftar</button>
        </div>
        <p class="desc-daftar">Belum punya akun? <Link to='/daftar'>Daftar Disini</Link> </p>
      </form>
    </div>
  )
}

export default Login