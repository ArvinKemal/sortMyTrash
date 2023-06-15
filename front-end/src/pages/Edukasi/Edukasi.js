import React from 'react'
import aluminium from '../../assets/icons/aluminiumIcon.png'
import besi from '../../assets/icons/besiIcon.png'
// import plastik from '../../assets/icons/plastikIcon.png'
// import elektronik from '../../assets/icons/elektronikIcon.png'
// import kardus from '../../assets/icons/kardusIcon.png'
// import kertas from '../../assets/icons/kertasIcon.png'

const Edukasi = () => {
    return (
        <div class="container mt-3">
            <div class="col-md-12">
                <div class="row">
                    <nav class="col-md-12">
                        <h2>Besi</h2>
                        <img src={besi} alt='5' />
                        <a href="/besi" >Pilih</a>
                        <h2>aluminium</h2>
                        <img src={aluminium} alt='6' />
                        <a href="/aluminium" >Pilih</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Edukasi