import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeImage } from '../../redux/features/imageSlice/imageGallerySlice';


const ImageGalleryHeader = () => {
//   const markedImageIds = useSelector((state) => state.imageGallery.markedImageIds);
//   const dispatch = useDispatch();

//   const handleRemoveImage = () => {
//     dispatch(removeImage());
//   };

//   return (
//     <div>
//       <nav className="bg-gray-50 dark:bg-gray-700">
//         <div className="max-w-screen-xl px-4 py-3 mx-auto">
//           <div className="">
//             <ul className="flex justify-between items-center font-medium mt-0 mr-6 space-x-8 text-sm">
//               <li>
//                 <a href="#" className="text-gray-900 dark:text-white" aria-current="page">
//                   {markedImageIds.length <= 0 ? '' : `${markedImageIds.length}`} File selected
//                 </a>
//               </li>

//               <li>
//                 <button onClick={handleRemoveImage} className="text-red-600">
//                   Delete files
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <hr className="mb-5" />
//       </nav>
//     </div>
//   );
};

export default ImageGalleryHeader;
