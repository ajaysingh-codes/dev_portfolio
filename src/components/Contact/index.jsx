import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer } from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId);
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4ih5lzs', 'template_e47lhqp', refForm.current, 'N168M_CDe-3WQX4n0')
      .then(() => {
        alert('Your message has been sent successfully!')
        window.location.reload(false)
      }, () => {
        alert('There was an error sending your message. Please try again.');
      });
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass} 
              strArray={['C','o','n','t','a','c','t',' ','m','e']}
              idx={15}/>
          </h1>
          <p>
            Let's turn our next conversation into your best decision—discover how my creativity and drive can elevate your projects! Ready to chat? I'm just an email away.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                  <input 
                    type="text"
                    name="name"
                    placeholder="Name" required/>
                </li>
                <li className='half'>
                  <input 
                    type="email"
                    name="email"
                    placeholder="Email" required/>
                </li>
                <li>
                  <input 
                    placeholder="Subject"
                    type="text"
                    name="subject" required/>
                </li>
                <li>
                  <textarea 
                    name="message"
                    placeholder="Message" required>
                  </textarea>
                </li>
                <li>
                  <input 
                    type="submit"
                    className='flat-button'
                    value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          
        </div>
        <div className='info-map'>
          Ajay Singh,
          <br />
          United States,
          <br />
          Bay area, California 95129 <br />
          <span>ajay.singh@sjsu.edu</span> 
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.303091, -121.978880]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.303091, -121.978880]}>
              <Popup>
                Ajay lives here! Come say hi!
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />

    </>
  )
}

export default Contact