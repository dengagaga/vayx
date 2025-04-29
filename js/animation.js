const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: false, // зацикливание анимации
    autoplay: false, // автоматический запуск анимации
    path: './js/data.json',
    
  });
 
  function start() {
    animation.play();
    
  }

  function stop() {
    animation.stop(); 
    
  }
  setTimeout(() => {
    start();
  }, 1000); 
  setTimeout(() => {
    stop()
  }, 2000); 
 
  const animationContainer = document.getElementById('lottie-animation');

animationContainer.addEventListener('mouseover', start);
// animationContainer.addEventListener('mouseout', stop);
