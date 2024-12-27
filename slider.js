const smallSliderWrap = document.querySelectorAll('.project-slider');
const swiper2 = new Swiper('.gal-slider', {

    slideClass: "slide",
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
      nextEl: '.next-gal',
      prevEl: '.prev-gal',
    },
    scrollbar: {
        el: ".gal-sc",
        hide: false,
        draggable: true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
        
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
       
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
        
          spaceBetween: 20
        },
        1025: {
        
          spaceBetween: 20
        }
      }
  
    
  });    
const swiper3 = new Swiper('.amenities-slider', {

    slideClass: "amenities-slide",
    slidesPerView: 1,

    navigation: {
      nextEl: '.next-am',
      prevEl: '.prev-am',
    },
    scrollbar: {
        el: ".am-sc",
        hide: false,
        draggable: true
      },
     
    
  });    

  const swiper4 = new Swiper('.charecteristic-slider', {

    slideClass: "charecteristic-slide",
    slidesPerView: 1,

    navigation: {
      nextEl: '.next-charecteristic',
      prevEl: '.prev-charecteristic',
    },
    pagination: {
      el: ".pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> </span>';
      },
    },
    
  }); 
  const swiper5 = new Swiper('.top-project-slider', {

    slideClass: "top-slide",
    autoHeight: true,
    slidesPerView: 1,

    navigation: {
      nextEl: '.next-tpr',
      prevEl: '.prev-tpr',
    },
 
    
  }); 
  const swiper6 = new Swiper('.nominates-slider', {

    slideClass: "nom-slide",
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: '.next-nom',
      prevEl: '.prev-nom',
    },
    scrollbar: {
        el: '.nm-sc',
        hide: false,
        draggable: true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 'auto',
         
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 'auto',
          spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 'auto',
          spaceBetween: 20
        },
        1025: {
          slidesPerView: 'auto',
          spaceBetween: 20
        }
      }   
   
    
});
const swiper7 = new Swiper('.area-slider', {

  slideClass: "area-slide",
  slidesPerView: 'auto',
  autoHeight: true,
  spaceBetween: 0,
  effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
  navigation: {
    nextEl: '.next-area',
    prevEl: '.prev-area',
  }

  
});
const swiper8 = new Swiper('.dis-areas', {

  slideClass: "slide",
  slidesPerView: 'auto',
  spaceBetween: 30,
  navigation: {
    nextEl: '.nx-dis',
    prevEl: '.pr-dis',
  },
  scrollbar: {
      el: '.ds-sc',
      hide: false,
      draggable: true
    },
 
  
});



smallSliderWrap.forEach(sliderWrap=>{
    const slider = sliderWrap.querySelector('.small-slider');
    const nextBtn = sliderWrap.querySelector('.next');
    const prevBtn = sliderWrap.querySelector('.prev');
    const scrollBar  = sliderWrap.querySelector('.sm-sc')
    const swiper = new Swiper(slider, {

        slideClass: "slide",
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        scrollbar: {
            el: scrollBar,
            hide: false,
            draggable: true
          },
       
        
    });
})
