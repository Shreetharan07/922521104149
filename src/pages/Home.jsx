import React from 'react'
import './home1.css'

function Home() {
    const backgroundStyle = {
       background: linear-gradient(to right, blue, yellow);, // Adjust the color as needed
        minHeight: '100vh', // Ensures the background covers the entire viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };
  return (
    <>
    <div style={backgroundStyle}>
    <center><h1 id='heading'>V.S.B Engineering College</h1></center>
    <center><img src="https://edujinni.com/Admin/assets/uploads/college/WhatsApp-Image-2020-07-01-at-11.39.07-AM.jpeg" alt="picture" /></center>
    </div>
    </>
  )
}

export default Home