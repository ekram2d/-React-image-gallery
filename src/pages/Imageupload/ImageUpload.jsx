import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addImage } from '../../redux/features/imageSlice/imageGallerySlice';

const img_hosting_token = "58a82f569be5d273263ef9e26c647ba5";

const ImageUpload = () => {
  // const [imageFile, setImageFile] = useState(null);
  // const dispatch = useDispatch();

  // const inputImage = (event) => {
  //   const file = event.target.files[0];
  //   setImageFile(file);
  // };

  // const handleUpload = async (event) => {
  //   event.preventDefault();

  //   if (!imageFile) {
  //     console.log('Please select an image before uploading.');
  //     return;
  //   }

  //   const apiKey = img_hosting_token;
  //   const url = 'https://api.imgbb.com/1/upload';
  //   const formData = new FormData();
  //   formData.append('key', apiKey);
  //   formData.append('image', imageFile);
  //   formData.append('name', 'demo');

  //   try {
  //     const response = await axios.post(url, formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     });
  //     console.log('Image uploaded:', response.data.data.url);
  //     const image = {
  //       imageurl: response.data.data.url,
  //       id: Date.now() // Using  Date.now() to generate a unique id
  //     };

  //     dispatch(addImage(image));
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //   }
  // };

  // return (
  //   <div className='flex  w-full items-center'>
  //     <form onSubmit={handleUpload} className='w-full max-w-sm rounded-lg '>
  //       <label for="dropzone-file" class="flex  justify-center items-center   border-dashed rounded-lg cursor-pointer ">
  //         <div class="flex flex-col h-full ">
  //           <svg class="h-20 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
  //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
  //           </svg>
  //           <button type='submit' class="text-blue-500 shadow-2xl mb-2 text-xl  ">Add Images</button>

  //         </div>
  //         <input id="dropzone-file" type="file" class="hidden" onChange={inputImage} />
  //       </label>
  //     </form>
  //   </div>
  // );
};

export default ImageUpload;
