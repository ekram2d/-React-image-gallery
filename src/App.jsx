import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './componets/ImageGallery/ImageGallery'
import ImageGalleryHeader from './componets/ImageGalleryHeader/ImageGalleryHeader'



function App() {
 
  return (

    <>
     <div style={{
      background:
        'rgb(34,193,195) linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(255,195,195,1) 100%)',
    }} >
     <ImageGalleryHeader></ImageGalleryHeader>
      <ImageGallery></ImageGallery>
     </div>

    </>
  )
}

export default App
