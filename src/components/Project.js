import React from 'react'

function Project({ title ,imageRoute, altText, gitHubRoute, liveRoute }) {
  return (
    <div className="card col-lg-4 m-3" style={{width: '28rem'}}>
      <img src={imageRoute} className="card-img-top" alt={altText}/>
        <div className="card-body">
        <p>{title}</p>
        <a href={gitHubRoute}>GitHub</a>
        <p></p>
        <a href={liveRoute}>Live</a>
        </div>
    </div>
  )
}

export default Project