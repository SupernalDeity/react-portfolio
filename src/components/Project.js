import React from 'react'

function Project({ imageRoute, altText, gitHubRoute, liveRoute }) {
  return (
    <div className="card col-lg-4 m-4" style={{width: '30rem'}}>
      <img src={imageRoute} className="card-img-top" alt={altText}/>
        <div className="card-body">
        <a href={gitHubRoute}>GitHub</a>
        <p/>
        <a href={liveRoute}>Live</a>
        </div>
    </div>
  )
}

export default Project