    const carouselEl = document.getElementById('carousel');
    const slidesEl = carouselEl.querySelector('.slides');
    const slideEls = Array.from(slidesEl.children);

    const prevBtn = carouselEl.querySelector('.prev');
    const nextBtn = carouselEl.querySelector('.next');
    

    let index = 0;
    const total = slideEls.length;

    function update() {
      slidesEl.style.transform = `translateX(${-index * 100}%)`;
      
    }

    function goTo(i) {
      index = (i + total) % total; 
      update();
    }


    prevBtn.addEventListener('click', () => goTo(index - 1));
    nextBtn.addEventListener('click', () => goTo(index + 1));

    let timer = null;
    const intervalMs = 3500;

    function start() {
      timer = setInterval(() => goTo(index + 1), intervalMs);
    }

    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
    }

    carouselEl.addEventListener('mouseenter', stop);
    carouselEl.addEventListener('mouseleave', start);
    carouselEl.addEventListener('focusin', stop);
    carouselEl.addEventListener('focusout', start);