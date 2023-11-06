import { configureStore } from '@reduxjs/toolkit';
import imageGalleryReducer from '../redux/features/imageSlice/imageGallerySlice';


export const store = configureStore({
  reducer: {
    imageGallery:imageGalleryReducer ,
  },
});
