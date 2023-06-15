import React from 'react'

const UbahSandiUser = () => {
    return (
        <div>
            <nav>
                <h1>Ubah Sandi</h1>
            </nav>
            <form action="#" method="post">
                <img src="logo.png" alt="Logo" width="auto" height="auto" />
                <label for="password_lama">Kata Sandi Lama:</label>
                <input
                    type="password"
                    id="password_lama"
                    name="password_lama"
                /><br /><br />
                <label for="password_baru">Kata Sandi Baru:</label>
                <input
                    type="password"
                    id="password_baru"
                    name="password_baru"
                /><br /><br />
                <label for="konfirmasi_password_baru">Konfirmasi Kata Sandi Baru:</label>
                <input
                    type="password"
                    id="konfirmasi_password_baru"
                    name="konfirmasi_password_baru"
                /><br /><br />
                <input type="submit" value="Simpan" />
            </form>
        </div>
    )
}

export default UbahSandiUser