/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/style-prop-object */
import React from 'react'
import "./Contacto.css"
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton'

const Contacto = () => {
  return (
    <section className='containerContacto'>
        <div className='mapsIsabel'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13583.579620253518!2d-64.4420547!3d-31.6640949!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942d50c84f4b00b3%3A0x945908089523cc44!2sIsabel!5e0!3m2!1ses-419!2sar!4v1717707843373!5m2!1ses-419!2sar" width="600" height="450" style={{border:"0"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <footer className='footer'>
            <div>
                <WhatsappButton />
            </div>
        </footer>
    </section>
  )
}

export default Contacto
