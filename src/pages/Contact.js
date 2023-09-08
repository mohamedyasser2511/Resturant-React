import React from 'react'
import pizzaleft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage : `url(${pizzaleft})` }}>

        </div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Full Name</label>
                <input name='name' placeholder='Enter Full name...' type='text'/>
                <label htmlFor='email'>Email</label>
                <input name='email' placeholder='Enter Your Email...' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea rows="6" placeholder='Enter message ...' name='message' required> </textarea>
                <button type='submit'>Send message</button>


            </form>
        </div>
      
    </div>
  )
}

export default Contact
