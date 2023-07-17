import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../../assets/img/logo.png'
import axios from 'axios'
import { registerRoute } from '../../../../utils/APIRoutes'

const DaftarAkunUSer = () => {
	const navigate = useNavigate()

	const [values, setValues] = useState({
		namaLengkap: "",
		email: "",
		nomorTelepon: "",
		password: ""
	})

	useEffect(() => {
		if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
			navigate("/");
		}
	}, []);

	const handleChange = (event) => {
		console.log(event.target)
		setValues({ ...values, [event.target.name]: event.target.value })
	}

	const validateForm = () => {
		const { email, nomorTelepon, password } = values
		if (email === "") {
			alert("email dan password diperlukan!")
			return false
		}
		if (nomorTelepon.length <= 8 || nomorTelepon.length >= 14) {
			alert("Nomor Telepon tidak valid!")
			return false
		}
		if (password.length <= 5) {
			alert("password lemah!")
			return false
		}
		return true
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (validateForm()) {
			const { namaLengkap, email, nomorTelepon, password } = values;
			const { data } = await axios.post(registerRoute, {
				namaLengkap,
				email,
				nomorTelepon,
				password
			})
			if (data.status === false) {
				alert(data.msg)
			}
			if (data.status === true) {
				localStorage.setItem(
					process.env.REACT_APP_LOCALHOST_KEY,
					JSON.stringify(data.user)
				)
				navigate('/')
			}
			console.log(data)
		}
	}

	return (
		<>
			<div className='login-container'>
				<form className="signin-form" action='' onSubmit={(event) => handleSubmit(event)}>
					<div>
						<img className='logo-sortmytrash' src={logo} alt={'SortMyTrash logo'} />
					</div>
					<div className="form-daftar">
						<input className="form-control"
							type='text'
							placeholder='Nama Lengkap'
							name='namaLengkap'
							onChange={(e) => handleChange(e)}
							required />
					</div>
					<div className="form-daftar">
						<input className="form-control"
							type='text'
							placeholder='Email'
							name='email'
							onChange={(e) => handleChange(e)}
							required />
					</div>
					<div className="form-daftar">
						<input className="form-control"
							type='text'
							placeholder='Nomor Telepon'
							name='nomorTelepon'
							onChange={(e) => handleChange(e)}
							required />
					</div>

					<div className="form-daftar">
						<input
							className="form-control"
							type="password"
							name='password'
							onChange={(e) => handleChange(e)}
							placeholder='Kata Sandi'
							required />
					</div>

					<div className="form-daftar">
						<button
							className="button-daftar"
							type="submit"
						>Daftar</button>
					</div>
					<p className="desc-daftar">Sudah punya akun? <Link to='/login'>Masuk Disini</Link> </p>
				</form>
			</div>
		</>
	)
}

export default DaftarAkunUSer	