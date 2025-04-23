const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // контейнер для анимации
    renderer: 'svg', // тип рендерера (может быть 'svg', 'canvas' или 'html')
    loop: false, // зацикливание анимации
    autoplay: false, // автоматический запуск анимации
    path: './js/data.json',
    
  });
s
  function start() {
    animation.play();
    
  }
  function stop() {
    animation.stop(); 
    
  }

  document.getElementById('lottie-animation').addEventListener('mouseover', start);
  document.getElementById('lottie-animation').addEventListener('mouseout', stop);
