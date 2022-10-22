import React from 'react'
import gitHubIcon from '../assets/images/GitHubIcon.png'
import '../assets/styles.css'

function Footer() {
  return (
    <div className='my-4 container'>
      <div className='d-flex justify-content-center'>
        <p className='text-white'>Checkout my GitHub! &nbsp;&nbsp;&nbsp;</p>
        <a id='github' href='https://github.com/SupernalDeity'>
          <img style={{width: '2rem'}} src={gitHubIcon}/>
        </a>
      </div>
    </div>
  )
}

export default Footer