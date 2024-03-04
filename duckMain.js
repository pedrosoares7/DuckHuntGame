
body = document.querySelector('body');
duckMain = document.getElementById('duckMain');

screenWidth = body.offsetWidth;
screenHeight = body.offsetHeight;

        document.addEventListener("DOMContentLoaded", () => {
            let duckElement = document.getElementById('duckMain');
            duckElement.style.display = 'block';
            function animateDuck() {
                let randTop = Math.random() * ((window.innerHeight* 0.80) - 185);
                let randLeft = Math.random() * (window.innerWidth - 150);
                anime({
                    targets: duckElement,
                    translateX: randLeft,
                    translateY: randTop,
                    duration: 800,
                    scale: 2,
                    easing: 'linear',
                    complete: animateDuck
                });
            }

            animateDuck();
        });


      /*window.addEventListener("load", () => {  
    
  /*  let duckElement = document.getElementById('duckMain');
    duckElement.style.display = 'block';
    setInterval(() => {
        let randTop = Math.random() * (screenHeight - 25);
        let randLeft = Math.random() * (screenWidth - 25);
        if (randTop < 0) randTop = 25;
        if (randLeft < 0) randLeft = 25;
        if (randTop > screenHeight - 25) randTop = screenHeight - 25;
        if (randLeft > screenWidth - 25) randLeft = screenWidth - 25;
        duckElement.style.left = randLeft + "px";
        duckElement.style.top = randTop + "px"; 
        
    },800);*/              
            
          
        