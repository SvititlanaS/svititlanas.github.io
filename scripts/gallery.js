document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 2 }
    }
  });

  const imageData = {
    // Добавляємо ВСІ фотки //
    all: [
      "galery/kaptsova/Blouses_shirts/1.jpg", 
      "galery/kaptsova/Blouses_shirts/2.jpg", 
      "galery/kaptsova/Blouses_shirts/3.jpg", 
      "galery/kaptsova/Blouses_shirts/4.jpg", 
      "galery/kaptsova/Blouses_shirts/5.jpg", 
      "galery/kaptsova/Blouses_shirts/6.jpg", 
      "galery/kaptsova/Blouses_shirts/7.jpg", 
      "galery/kaptsova/Blouses_shirts/8.jpg", 
      "galery/kaptsova/Blouses_shirts/9.jpg", 
      "galery/kaptsova/Blouses_shirts/10.jpg",
      "galery/kaptsova/Blouses_shirts/11.jpg",
      "galery/kaptsova/Bussines/1.jpg",
      "galery/kaptsova/Bussines/2.jpg",
      "galery/kaptsova/Bussines/4.jpg",
      "galery/kaptsova/Bussines/5.jpg",
      "galery/kaptsova/Bussines/6.jpg",
      "galery/kaptsova/Bussines/7.jpg",
      "galery/kaptsova/Bussines/8.jpg",
      "galery/kaptsova/Bussines/9.jpg",
      "galery/kaptsova/dresses/1.jpg",
      "galery/kaptsova/dresses/2.jpg",
      "galery/kaptsova/dresses/3.jpg",
      "galery/kaptsova/dresses/4.jpg",
      "galery/kaptsova/dresses/5.jpg",
      "galery/kaptsova/dresses/6.jpg",
      "galery/kaptsova/dresses/7.jpg",
      "galery/kaptsova/dresses/8.jpg",
      "galery/kaptsova/dresses/9.jpg",
      "galery/kaptsova/dresses/10.jpg",
      "galery/kaptsova/dresses/11.jpg",
      "galery/kaptsova/dresses/12.jpg",
      "galery/kaptsova/pullovers/1.jpg",
      "galery/kaptsova/pullovers/2.jpg",
      "galery/kaptsova/pullovers/3.jpg",
      "galery/kaptsova/pullovers/4.jpg",
      "galery/kaptsova/pullovers/5.jpg",
      "galery/kaptsova/pullovers/6.jpg",
      "galery/kaptsova/pullovers/7.jpg",
      "galery/kaptsova/sportswear/1.jpg", 
      "galery/kaptsova/sportswear/2.jpg",
      "galery/kaptsova/sportswear/3.jpg", 
      "galery/kaptsova/sportswear/4.jpg", 
      "galery/kaptsova/sportswear/5.jpg", 
      "galery/kaptsova/sportswear/6.jpg", 
      "galery/kaptsova/sportswear/7.jpg", 
      "galery/kaptsova/sportswear/8.jpg", 
      "galery/kaptsova/sportswear/9.jpg", 
      "galery/kaptsova/sportswear/10.jpg",
      "galery/kaptsova/sportswear/11.jpg",
      "galery/kaptsova/sportswear/12.jpg",
      "galery/kaptsova/sportswear/13.jpg",
      "galery/kaptsova/sportswear/14.jpg",
      "galery/kaptsova/Swiftshots/1.jpg",
      "galery/kaptsova/Swiftshots/2.jpg",
      "galery/kaptsova/Swiftshots/3.jpg",
      "galery/kaptsova/Swiftshots/4.jpg",
      "galery/kaptsova/Swiftshots/5.jpg",
      "galery/kaptsova/Swiftshots/6.jpg",
      "galery/kaptsova/Swiftshots/7.jpg",
      "galery/kaptsova/Swiftshots/8.jpg",
      "galery/kaptsova/Swiftshots/9.jpg",
      "galery/kaptsova/Swiftshots/10.jpg",
      "galery/kaptsova/T-shirts_Polos/1.jpg",
      "galery/kaptsova/T-shirts_Polos/2.jpg",
      "galery/kaptsova/T-shirts_Polos/3.jpg",
      "galery/kaptsova/T-shirts_Polos/4.jpg",
      "galery/kaptsova/T-shirts_Polos/5.jpg",
      "galery/kaptsova/T-shirts_Polos/6.jpg",
      "galery/kaptsova/T-shirts_Polos/7.jpg",
      "galery/kaptsova/T-shirts_Polos/8.jpg",
      "galery/kaptsova/T-shirts_Polos/9.jpg",
      "galery/kaptsova/T-shirts_Polos/10.jpg",
      "galery/kaptsova/T-shirts_Polos/11.jpg",
      "galery/kaptsova/T-shirts_Polos/12.jpg",
      "galery/kaptsova/T-shirts_Polos/13.jpg",
      "galery/kaptsova/T-shirts_Polos/14.jpg",
      "galery/kaptsova/T-shirts_Polos/15.jpg",
      "galery/kaptsova/T-shirts_Polos/16.jpg",
      "galery/kaptsova/T-shirts_Polos/17.jpg",
      "galery/kaptsova/T-shirts_Polos/18.jpg",
    ],

    // Добавляємо фотки з папки Blouses_shirts //

    Blouses_shirts: [
      "galery/kaptsova/Blouses_shirts/1.jpg", 
      "galery/kaptsova/Blouses_shirts/2.jpg", 
      "galery/kaptsova/Blouses_shirts/3.jpg", 
      "galery/kaptsova/Blouses_shirts/4.jpg", 
      "galery/kaptsova/Blouses_shirts/5.jpg", 
      "galery/kaptsova/Blouses_shirts/6.jpg", 
      "galery/kaptsova/Blouses_shirts/7.jpg", 
      "galery/kaptsova/Blouses_shirts/8.jpg", 
      "galery/kaptsova/Blouses_shirts/9.jpg", 
      "galery/kaptsova/Blouses_shirts/10.jpg",
      "galery/kaptsova/Blouses_shirts/11.jpg",
    ], 
      
      // Добавляємо фотки з папки Bussines //
    Bussines: [
      "galery/kaptsova/Bussines/1.jpg",
      "galery/kaptsova/Bussines/2.jpg",
      "galery/kaptsova/Bussines/4.jpg",
      "galery/kaptsova/Bussines/5.jpg",
      "galery/kaptsova/Bussines/6.jpg",
      "galery/kaptsova/Bussines/7.jpg",
      "galery/kaptsova/Bussines/8.jpg",
      "galery/kaptsova/Bussines/9.jpg",
    ],

    // Добавляємо фотки з папки dresses //
    dresses: [
    "galery/kaptsova/dresses/1.jpg",
    "galery/kaptsova/dresses/2.jpg",
    "galery/kaptsova/dresses/3.jpg",
    "galery/kaptsova/dresses/4.jpg",
    "galery/kaptsova/dresses/5.jpg",
    "galery/kaptsova/dresses/6.jpg",
    "galery/kaptsova/dresses/7.jpg",
    "galery/kaptsova/dresses/8.jpg",
    "galery/kaptsova/dresses/9.jpg",
    "galery/kaptsova/dresses/10.jpg",
    "galery/kaptsova/dresses/11.jpg",
    "galery/kaptsova/dresses/12.jpg",
    ],

    // Добавляємо фотки з папки pullovers //
    pullovers: [
      "galery/kaptsova/pullovers/1.jpg",
      "galery/kaptsova/pullovers/2.jpg",
      "galery/kaptsova/pullovers/3.jpg",
      "galery/kaptsova/pullovers/4.jpg",
      "galery/kaptsova/pullovers/5.jpg",
      "galery/kaptsova/pullovers/6.jpg",
      "galery/kaptsova/pullovers/7.jpg"
    ],

    // Добавляємо фотки з папки sportswear //
    sportswear: [
      "galery/kaptsova/sportswear/1.jpg", 
      "galery/kaptsova/sportswear/2.jpg",
      "galery/kaptsova/sportswear/3.jpg", 
      "galery/kaptsova/sportswear/4.jpg", 
      "galery/kaptsova/sportswear/5.jpg", 
      "galery/kaptsova/sportswear/6.jpg", 
      "galery/kaptsova/sportswear/7.jpg", 
      "galery/kaptsova/sportswear/8.jpg", 
      "galery/kaptsova/sportswear/9.jpg", 
      "galery/kaptsova/sportswear/10.jpg",
      "galery/kaptsova/sportswear/11.jpg",
      "galery/kaptsova/sportswear/12.jpg",
      "galery/kaptsova/sportswear/13.jpg",
      "galery/kaptsova/sportswear/14.jpg",
    ],

    // Добавляємо фотки з папки Swiftshots //
    Swiftshots: [
      "galery/kaptsova/Swiftshots/1.jpg",
      "galery/kaptsova/Swiftshots/2.jpg",
      "galery/kaptsova/Swiftshots/3.jpg",
      "galery/kaptsova/Swiftshots/4.jpg",
      "galery/kaptsova/Swiftshots/5.jpg",
      "galery/kaptsova/Swiftshots/6.jpg",
      "galery/kaptsova/Swiftshots/7.jpg",
      "galery/kaptsova/Swiftshots/8.jpg",
      "galery/kaptsova/Swiftshots/9.jpg",
      "galery/kaptsova/Swiftshots/10.jpg"
    ],

    // Добавляємо фотки з папки T-shirts_Polos //
    "T-shirts_Polos": [
      "galery/kaptsova/T-shirts_Polos/1.jpg",
      "galery/kaptsova/T-shirts_Polos/2.jpg",
      "galery/kaptsova/T-shirts_Polos/3.jpg",
      "galery/kaptsova/T-shirts_Polos/4.jpg",
      "galery/kaptsova/T-shirts_Polos/5.jpg",
      "galery/kaptsova/T-shirts_Polos/6.jpg",
      "galery/kaptsova/T-shirts_Polos/7.jpg",
      "galery/kaptsova/T-shirts_Polos/8.jpg",
      "galery/kaptsova/T-shirts_Polos/9.jpg",
      "galery/kaptsova/T-shirts_Polos/10.jpg",
      "galery/kaptsova/T-shirts_Polos/11.jpg",
      "galery/kaptsova/T-shirts_Polos/12.jpg",
      "galery/kaptsova/T-shirts_Polos/13.jpg",
      "galery/kaptsova/T-shirts_Polos/14.jpg",
      "galery/kaptsova/T-shirts_Polos/15.jpg",
      "galery/kaptsova/T-shirts_Polos/16.jpg",
      "galery/kaptsova/T-shirts_Polos/17.jpg",
      "galery/kaptsova/T-shirts_Polos/18.jpg",
    ]
  };

  const buttons = document.querySelectorAll('.gallery-filter-buttons button');
  const wrapper = document.querySelector('.swiper-wrapper');

  function loadSlides(category) {
    wrapper.innerHTML = '';
    const slides = imageData[category] || [];
    slides.forEach(src => {
      const div = document.createElement('div');
      div.className = 'swiper-slide';
      div.innerHTML = `<img src="images/${src}" alt="">`;
      wrapper.appendChild(div);
    });
    swiper.update();
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      loadSlides(button.dataset.category);
    });
  });

  loadSlides('all');
});