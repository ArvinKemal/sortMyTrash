import React from 'react'

const SaranUser = () => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="jumbotron">
                            <h1 class="text-center">
                                SARAN & KRITIK
                            </h1>
                        </div>
                    </div>
                </div>

                <div class="row mb-3">
                    <div class="col-md-12">
                        <nav class="nav">
                            <a href="/pengaduan" class="nav-link">Pengaduan</a>
                            <a href="/saran" class="nav-link">Saran & kritik</a>
                        </nav>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header">
                                Kirim saran & kritik terhadap pelayanan kami
                            </div>
                            <div class="card-body">
                                <form action="#" method="post">
                                    <div class="form-group">
                                        <textarea cols="30" rows="5" type="text" class="form-control" placeholder="Tulis Saran Anda Disini..." required></textarea>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="" id="" cols="30" rows="5" class="form-control" placeholder="Tulis Kritik Anda Disini..." required></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary mt-2">Kirim</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default SaranUser