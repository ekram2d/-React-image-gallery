import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
const initialState = {
  imageGalleryData: [{ imageurl: 'https://previews.dropbox.com/p/thumb/ACHplI6boHOQsu_2Kj0JVws9Mw7giS7FNEp_8ftUn2QHUqh40XbWkwP67dPOkUy0ZJV7NUFOX0rEx41oHaIcWUSYEZBnYyELGjWz39s7pkKshgWBJy3ep9q1wv1jXbXN1AY1sd4GrDXTExlClkJ1h5V0XpBFkW7CsNLY_Fmd6ul5cTCteQPRCamvOLpj9t_7TEkzcNoT_4tN3cUoSpVB7NpgkF-gKUx95dsKarjB-AQSDdY9rQSrZfaAmH3sgHDzXB7DS9e7Z5PE7WA-h_SO8ar0Pe16TIWz8lZe2P1G1Ub85bBulpB3FEnUUszIQFmNjnWO-FtydKghan-6HFEJr98a/p.png', id: 1 },
  { imageurl: 'https://previews.dropbox.com/p/thumb/ACGC8FtIuSHlMSZu-gOuAVPP43UxqHbq7XxqG4hzklputXXHi1LV-5R3whBkAjf6DEfC7yp3RKXs84AQNiFZFvZ7TlAVsXeAysPh6m7HWfwNYKX2FM07KVdPV7CcjAPT1DDV9m1HMgp20-j_gTkojr_SqfhhWRg_9SrTHwXAUJQWbio5vWwNjhTGZ80TgduMY5MliqpvLyUa0oyBRgau4CZezuytOvN1ximJTHG3yHEpRIUy9aYHDO_grT1RdRu6QymF44FFF43klh1MV0Q-R3cgn0VrcWSv2f9_oaYKWgc4KohTmeQT7w3VKssn6fgLnOfGS__4MiJUrsLdyecIJkiJ/p.png', id: 2 }

    ,
  {
    imageurl: "https://previews.dropbox.com/p/thumb/ACH8EB0UFi2a4T7IveeyAJv3KWXpPep_UCdl0iaz7xGnFvZhKl5aof8aqE3PY8KmWfPxZ37CsAbzyeCvDiB5DVb9XRv_ht-CmUUQGlwKGU2qWtiLn5Gkc4ghgOI2gkuLtBOnHcIwyHsk0uHUTXEQ-uzhTqo3v1_rTWcsi5zXyoru1OdEJr6aYtqmK6HCM7aH_Y87PRWBi81VUXp5dFyGNTOYP6rZUY81116KzrhEAUjXnUcGZ-Ej99YucQ-LgQWsfNwse_Cb6HqiJwo06ivmlLVsO0wJWDScZ71NcY1FUdm9EtD4xX_lfhNmwTAXY5S-vf2CrdOO0_Yja_fnIZLyrKnC/p.png",
    id: 3

  }

    , { imageurl: 'https://previews.dropbox.com/p/thumb/ACEE0423zbcQAcgSrP3UnVfMobOn4o2YNvVP-lFh990C3oLAxshbELW3CQAhyzrFznDM7FcOIJrkrWuczcH1pHIL5cwK_JDFbjNZ-BiOR_Mb9UCqdX2Dz6xepH0QACd8AK0WELQn8m7KVvonhpOOPLs7HYbEm6TM918I3sfKHpmrv6XlhcXcsVsEXIgz5ZrQBIzJXy_Xx8YISrqYFJM-tebjvk-JsViEeQiVee-ysZYJTBBY8SHuxkqPys-iT6fzBGnqx-x2V2grOoDmZwORMKdxcdP4Y2aPZbCvXl6BWQVO1ipgN1hfB0YS4DW8mYMPzOMtb72J0Emr1k2geBNSK60F/p.png', id: 4 },


  { imageurl: 'https://previews.dropbox.com/p/thumb/ACH3aSQ1LmeZnRakEJizvxTgxeA8RWsLdsjP8oxaBa3REOK15rbpaNjStoe14wAvQ2YIn-NuiqNJtzw04m3s-FsGGO7K6kn92hXuH2dwqjPTrqHxSOVjX9C4KZ14RlNonrHGQjb5HiH28ulxvgLp4yTsaChwJ3rBBwN87UamOmGS-cwOF-nuWn_PqJnpLiESci3iMo1HbbWXnsMvNTUYR5FQH65EVAnDjU6qi_fujkWbEPzViFYulVHkWtff67WjDT-O6MF2z5Z3kPn3da72dcbVu946IYIZ4EwgWnXaglG3HXCNjG-9l5A-ADZYi11mS00LIJNG1_HtE50egG3wG4bJ/p.png', id: 5 },
  { imageurl: 'https://previews.dropbox.com/p/thumb/ACEmCefn3LXZFG6vkIRaKgKtIq6G-pdERZsbI2qqH4YwFVQgfnr1l_VB2UKE__lKvfrV36HgLvViUE0ohIdbRfkH3cNig7ggxerDRhokMMlOYsU-xSmarF234MWJvSHHoTyJJBUjvlgKV4tSnF3HWAeyTG-0EA3sHEl9m3nPPR-FwMsBjvrxlVkYcUEe8HoIqz2yQKetJjCvbBeIv6MmyuHsfnc_hPU502EIfcSiB7ekFYS9GBTiU-Z0vozY3q8YWbYCFqsr03fzkBmIO7MudWelvMWwAQ3WV9azcTKG-Bms-xSy-Cq3YBjipxySo9R9S_6914eaQi5hepKSdzvv4oTu/p.png', id: 6 }

    ,
  {
    imageurl: "https://previews.dropbox.com/p/thumb/ACH7b3QgArRn9RhYgwhPb7Eh7PoeDVXb1V5fhOI80_lEfoYYJRpb1BsuH8y9lY5LPIchsxWQDuK67L_2P7tRP2zxBNR7r0-d_47mu0yxYpOufVRnL2q12DfQLrIqQnS4VzfjQ2YmdhGpGN0mLKUYaaoGJS7gpOVMBXPH7jsLZghrMypIW8VD8xby3sz_n8gK49IFam_xpJhoKIdEmH_DBVwbtvKZTs88SigTgtzyyWIZfB--IcO9jQdjsP4NNtRLRlgcpVas7rAMGEsdXAETWXGKDFFAKLMr91msL7f4u0HgUQNpIvX177wK9rtt9z0fj8eRJDd7jJ-YltEckbJBk6oW/p.png",
    id: 7

  }

    , { imageurl: 'https://previews.dropbox.com/p/thumb/ACGbgApYNLWPaxv881dEaFwrX0jzKW0Q2Up7tI6BJ_aNB-8CYBA5rtyVNLrFG5S3sIawJcj01LNOB9LN4aXem7xvBFKHoXt3NkcJlKuzmw4VY6h59zi9qPwD5LK3-ugPhj2quGwVIRzF2zqZVnvfMAStOVzNu89jQSq9m9C8KD-R1_2uLjnzEZ9BMtgzFXgfshF1RXExJiP1EnUp18eqE4N0VmKnnUrd1HLRmXfurchhceaIgllRfgNRMQbrt_itDd-10rJBvQVMjGvXuzuaqsI_Lyvd8nlWq8H8p7E1mZGFyvnj4nn38npxORTZX1WJnNXaUiOoNhr9Fa0BEts1umvN/p.png', id: 8 },
  { imageurl: 'https://previews.dropbox.com/p/thumb/ACFwsV_XCy0GS31hpe0Ki6EJnlxas_hhkXa58mqPVdDtmML39VkEMImqVVkRfeY7zxfTLn6W7CEW6ONmq8SOFXlf-EjuX_3qsMJHb_US70v84RISABmlTIgFC6wOnq_LYdE8yxLbZdZf2Wy-bfJqDTkCZjBBEtXErWwDvHUDZ7W04JXpC0p4BsqIKZGGtySvJNcwN-7Z-dXEH-hCrAnhHibBJlIIkKwNKQfn2VuUvV5dJIQZ3-MZUYi8azGJDuf6V6XFTPJ6HFEF4i39_Db6oPXsJ3bi9QE1yHw0WU59-yoByy-vo3NNes0fEra9aojZF9pc5AmgLjBmMBeHb322vLVo/p.png', id: 9 },
  { imageurl: 'https://previews.dropbox.com/p/thumb/ACEhJ0TU-AJRZkaw7fxuwyiv77M96mGBs0SEpwOrcvWVktHpjFuzA0CyQ5EXZRIIO4S0Bokk1Q7Od0BjaGaZ_91inEXgb76iqLygb3sX6L6Aa1TAo7L94CxUnOA05Fh_x_KpSDIKmrn_97AUXUYxhlWq-X60UmZ5Xr7TT5_TM_FT4a0OG3X-20HHC1p3Fpty_jzhp3mC3lToLl0mqMbp__obW5nhtgqXaYt5NN4ZU5WUQNZcDDwUv5aDLxHT0rkMoM6w5CCTX2bsBfmAFlBAMl0Nc5s0AqujwELEqXgJ30iI5zebihWeZ7xcITSmekRTgwDBpQ4PLzNpbc97oYODLqpu/p.jpeg', id: 10 },
  { imageurl: 'https://previews.dropbox.com/p/thumb/ACHq9TsLp_0h6n9d7m7_p2lzrxLFoZxCy4rnMQ_wYK1urWqaaUbDaHglUudCgkxfxyc4l1lsAFnzPc7oZF2XdlYFhtodYUopLxWY7oxD41gjwzUX0sdWUUZwzRFMh3yFgz-3q8W2FfWOLLE6bQTrVQZBdrNYLks1acnpyP05obqCrlPGwxr0QWKn04lE6SOJlWI-qZgNUB3Pt0i8DPyHcdq1pjUiofch-dWRFcUHjGtvqZyJ1GeEoh3DUpF-VtDrXKbGw_VSqwfMSLcC9I2VUMreM19_C7GgKirfnsA7EpnIsQczzhH23tqiJEn0oK_gKeQDwslBem6r-z24Qmr2MdHM/p.jpeg', id: 11 }

    ,


  ],
  markedImageIds: []
}

// export const imageGallerySlice = createSlice({
//   name: 'imageGallery',
//   initialState,
//   reducers: {
//     addImage: (state, action) => {
//       state.imageGalleryData.push(action.payload);
//     },
//     removeImage: (state) => {

//       state.imageGalleryData = state.imageGalleryData.filter(image => !state.markedImageIds.includes(image.id));
//       state.markedImageIds = [];
//     },
//     markImage: (state, action) => {
//       const imageId = action.payload;
//       if (state.markedImageIds.includes(imageId)) {
//         state.markedImageIds = state.markedImageIds.filter(id => id !== imageId);
//       } else {
//         state.markedImageIds.push(imageId);
//       }
//       console.log(imageId)
//     },
//     setGallery: (state,action) => {
//       state.imageGalleryData =action.payload;
//     },
//   },
// });

// export const { addImage, removeImage, markImage,setGallery } = imageGallerySlice.actions;



// export default imageGallerySlice.reducer;





