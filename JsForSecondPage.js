const correctText = document.getElementById('p');
correctText.textContent = localStorage.getItem('correctLetters');

const wrongText = document.getElementById('p1');
wrongText.textContent = localStorage.getItem('wrongLetters');

function goHomeButtonClicked(){
    
    window.location = "http://127.0.0.1:5500/main.html";
}