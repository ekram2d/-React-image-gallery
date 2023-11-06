import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './componets/ImageGallery/ImageGallery'
import ImageGalleryHeader from './componets/ImageGalleryHeader/ImageGalleryHeader'



function App() {
 
  return (

    <>
      <ImageGalleryHeader></ImageGalleryHeader>
      <ImageGallery></ImageGallery>

    </>
  )
}

export default App
