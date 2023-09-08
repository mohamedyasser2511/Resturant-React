import React from 'react'
import { Instagram , Twitter , Facebook , LinkedIn } from '@mui/icons-material'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
    <div className='socialMedia'>
    <Instagram/>
    <Facebook/>
    <LinkedIn/>
    <Twitter/>
    </div>
    <p>&copy; 2023 Minepizza.com</p>  
    </div>
  )
}

export default Footer
