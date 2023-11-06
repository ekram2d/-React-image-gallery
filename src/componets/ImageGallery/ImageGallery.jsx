import React, { useEffect, useRef, usesetPeopleRef, useState } from 'react';
import { useSelector } from 'react-redux';
import ImageUpload from '../../pages/Imageupload/ImageUpload';
import { useDispatch } from 'react-redux';
import { setGallery, markImage } from '../../redux/features/imageSlice/imageGallerySlice';

export default function ImageGallery() {

  const imagesdata = useSelector((state) => state.imageGallery.imageGalleryData);



  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

  const dispatch = useDispatch();




  const handleMarkClick = (imageId) => {

    dispatch(markImage(imageId));
  };

  function handleSort() {

    const peopleClone = [...imagesdata];
    const temp = peopleClone[dragImage.current];
    peopleClone[dragImage.current] = peopleClone[draggedOverImage.current];
    peopleClone[draggedOverImage.current] = temp;
    dispatch(setGallery(peopleClone));
  }


  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-rows-4 gap-4">
      {imagesdata.map((image, index) => (
        <div
          key={image.id}
          className={`relative ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            } border rounded p-2 bg-gray-100`}
          draggable="true"
          onDragStart={() => (dragImage.current = index)}
          onDragEnter={() => (draggedOverImage.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <img
            className={`rounded-lg w-full ${index === 0 ? "w-full mx-auto" : "w-full mx-auto"
              }`}
            src={image.imageurl}
            alt="product image"
          />
          <div className="absolute top-10 left-10">
            <div className="flex items-center mr-4">
              <input
                checked={image.selected}
                id={`image-checkbox-${index}`}
                type="checkbox"
                onChange={() => handleMarkClick(image.id)}
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Last grid cell with upload */}
      <div className="relative flex space-x-3 border rounded p-2 bg-gray-100">
        <ImageUpload></ImageUpload>
      </div>
    </main>

  );
}
