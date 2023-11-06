import { configureStore } from '@reduxjs/toolkit';
import imageGalleryReducer from '../redux/features/imageSlice/imageGallerySlice';
// import imageGalleryReducer from '../redux/features/imageGallery/imageGallerySlice';

export const store = configureStore({
  reducer: {
    imageGallery:imageGalleryReducer ,
  },
});
