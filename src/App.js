import React from 'react'

import ChihuahuaImage from './components/ChihuahuaImage'
import images from './images.json'

import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Chihuahua Clicker</h1>
      <div>Score: 3</div>
      <div>Clicks: 5</div>
      {/* reference images in the public folder */}
      {images.map(image => (
        <ChihuahuaImage key={image.id} url={process.env.PUBLIC_URL + '/img/' + image.fileName} />
      ))}
    </div>
  )
}

/* 

<img
  src={process.env.PUBLIC_URL + '/img/' + image.fileName}
  alt="chihuahua"
/>
*/

export default App
