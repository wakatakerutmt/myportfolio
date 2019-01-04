import React from 'react'


const SwiperScript = () => (
  <script>
       const swiper = new Swiper('.swiper-container', { // eslint-disable-line
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
         pagination: {
           el: '.swiper-pagination',
           type: 'bullets',
         },
         scrollbar: {
           el: '.swiper-scrollbar',
           draggable: true,
         },
       })
  </script>
)

export default SwiperScript
