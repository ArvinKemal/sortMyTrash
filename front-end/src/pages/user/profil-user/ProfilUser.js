import React from 'react'

const ProfilUser = () => {
    return (
        <body>
            <div>
                <img src="profil.jpg" alt="Foto Profil" class="profil" />
            </div>
            <div>
                <h2>Nama User</h2>
                <p>Email: namauser@mail.com</p>
            </div>
            <hr />
            <div class="container d-flex justify-content-center">
                <div class="btn-group-vertical text-center">
                    <button type="button" class="btn btn-outline-secondary">
                        <i class="bi bi-pencil-square"></i> Ubah Profil
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <a
                            href="../halaman ubah kata sandi/ubahSandi.html"
                            class="text-decoration-none text-reset"
                        >
                            <i class="bi bi-key"></i> Ubah Kata Sandi
                        </a>
                    </button>
                    <button type="button" class="btn btn-outline-secondary">
                        <i class="bi bi-box-arrow-right"></i> Keluar Akun
                    </button>
                </div>
            </div>
        </body>
    )
}

export default ProfilUser