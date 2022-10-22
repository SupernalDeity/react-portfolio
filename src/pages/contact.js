import React from 'react'

const Contact = () => {
  return (
    <div className='container'>
      <h2 className='py-3 text-light'>Contact Me</h2>
      <form>
        <div className="mb-3">
          <label className="form-label text-light">Name</label>
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Email Address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label className="form-label text-light">Message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Your Message Here" rows="3"></textarea>
        </div>
      </form>
    </div>
  )
}

export default Contact