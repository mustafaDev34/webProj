  const timerElement = document.getElementById('timer');

  const startButton = document.getElementById('button');
  const resetButton = document.getElementById('reset-button');

   let intervalId;
   startButton.addEventListener('click', function() {

    if (capsLockActive()){
      document.getElementById('button').setAttribute("disabled","disabled");
    clearInterval(intervalId);

     let timer = 60;
     timerElement.textContent = "Remeaning Time: "+timer;


     intervalId = setInterval(function() {
       timer--;
       timerElement.textContent = "Remeaning Time: "+timer;


       if (timer === 0) {
         resetPage();
         localStorage.setItem('correctLetters', correctLettersCount);
         localStorage.setItem('wrongLetters', wrongLettersCount);
       }
     }, 1000);
    }else{
        alert("Hey, lütfen capslock'u aktifleştir.");
    }
   }
   );

  resetButton.addEventListener('click', function() {
    /*clearInterval(intervalId);
    timerElement.textContent = "";
    document.querySelector('#randomWord').textContent = "";
    document.getElementById('button').removeAttribute("disabled");
    currentLetterIndex = 0;
    correctLettersCount = 0;
    wrongLettersCount = 0;
    document.getElementById('olderWordsList').innerHTML = '<u style= "color: #ca5f5f;font-size: 0.7em;font-weight: bold;" class="text-sm-center" >PAST WORDS</u>';*/
    document.location.reload();
  });

  function resetPage(){
    clearInterval(intervalId);
    timerElement.textContent = "";
    document.querySelector('#randomWord').textContent = "";
    document.getElementById('button').removeAttribute("disabled");
    window.location = "http://127.0.0.1:5500/second.html";
  }

  function capsLockActive() {
    if (!event.getModifierState('CapsLock')) {
        return false;
    }else{
        return true;
    }
  }