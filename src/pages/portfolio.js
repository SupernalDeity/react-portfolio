import React from 'react'
import Project from '../components/Project'
import gamersCheckpoint from '../assets/images/The-Gamers-Checkpointfresh.png'
import solarClicker from '../assets/images/solar-clicker.png'
import jate from '../assets/images/JATE.png'
import weatherDashboard from '../assets/images/WeatherDashboard.png'
import socialNetwork from '../assets/images/socialnetwork.JPG'
import employeeTracker from '../assets/images/employeetracker.JPG'

function Portfolio() {
  return (
    <div className='container-fluid'>
      <div className='d-flex flex-wrap justify-content-between'>
      < Project 
      title={'Gamers Checkpoint'}
      imageRoute={gamersCheckpoint} 
      altText={'Gamers Checkpoint Main Page'}
      gitHubRoute={'https://github.com/SupernalDeity/gamers-checkpoint'}
      liveRoute={'https://supernaldeity.github.io/gamers-checkpoint/'}
      ></Project>
      < Project 
      title={'Solar Clicker'}
      imageRoute={solarClicker} 
      altText={'Solar Clicker Game Page'}
      gitHubRoute={'https://github.com/SupernalDeity/solar-clicker'}
      liveRoute={'https://young-oasis-85311.herokuapp.com/'}
      ></Project>
      < Project 
      imageRoute={jate} 
      title={'JATE (Just Another Text Editor)'}
      altText={'Just Another Text Editor'}
      gitHubRoute={'https://github.com/SupernalDeity/jate'}
      liveRoute={'https://arcane-crag-05579.herokuapp.com/'}
      ></Project>
      < Project 
      imageRoute={weatherDashboard} 
      title={'Weather Dashbaord'}
      altText={'Weather Dashboard Home Page'}
      gitHubRoute={'https://github.com/SupernalDeity/weather-dashboard'}
      liveRoute={'https://supernaldeity.github.io/weather-dashboard/'}
      ></Project>
      < Project 
      imageRoute={socialNetwork} 
      title={'Social Network API'}
      altText={'Social Network Api Structure'}
      gitHubRoute={'https://github.com/SupernalDeity/social-network-api'}
      liveRoute={null}
      ></Project>
      < Project 
      imageRoute={employeeTracker} 
      title={'Employee Tracker API'}
      altText={'Employee Tracker Backend'}
      gitHubRoute={'https://github.com/SupernalDeity/employee-tracker'}
      liveRoute={null}
      ></Project>
      </div>
    </div>
  )
}

export default Portfolio