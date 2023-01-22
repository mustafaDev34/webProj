    
 const words = ['MANGO' ,'PEACH',
 'ABLE','ABOUT','ABOVE','ABSOLUTE','ACCEPT','ACROSS',
 'ACT','ACTUAL','ADD','ADDRESS','ADMIT','ADVERTISE','AFFORD','AFRAID','AFTER','AFTERNOON','AGAIN','AGAINST','AGE',
 'AGO',
 'AGREE','AHEAD',
 'AIR',
 'ALL',
 'ALLOW','ALMOST','ALONE','ALONG','ALREADY','ALRIGHT',
 'ALSO','ALTHOUGH','ALWAYS','AMAZE','AMONG','AMOUNT','AND','ANGRY','ANIMAL','ANOTHER','ANSWER','ANY',
 'APART','APPARENT','APPEAR','AREA',
 'ARM','AROUND','ARRANGE','ARRIVE','ART',
 'AS','ASHAMED','ASK',
 'AT',
 'AUNT','AUTUMN','AWARE','AWAY','AWFUL','BABY',
 'BACK','BILLION','BAD','BIRD',
 'BAG','BIRTH',
 'BALL','BIT',
 'BANK','BLACK',
 'BAR','BLOOD','BASE','BLOW','BASIC','BLUE',
 'BATH','BOARD',
 'BE','BOAT','BEACH','BODY','BEAR','BONE','BEAT','BOOK','BEAUTY','BORING','BECAUSE','BORN','BECOME','BOTH',
 'BED','BOTHER','BEFORE','BOTTLE','BEGIN','BOTTOM','BEHIND','BOX','BELIEVE','BOY','BELOW','BREAD','BENEATH','BREAK','BESIDE','BREAKFAST','BEST','BREATH','BET','BRIGHT','BETTER','BRING','BETWEEN','BROTHER','BEYOND','BROWN','BIG','BUILD',
 'BILL','BURN',
 'BUS','CHOOSE','BUSH','CHRISTMAS','BUSINESS','CHURCH','BUSY','CITY',
 'BUT','CLASS',
 'BUY','CLEAN',
 'BY','CLEAR','CAKE','CLIMB',
 'CALL','CLOCK','CAMP','CLOSE',
 'CAN','CLOSED','CAR','CLOTHES',
 'CARD','CLUB',
 'CARE','COAT',
 'CARRY','COFFEE',
 'CASE','COLD',
 'CAT','COLLECT','CATCH','COLLEGE','CAUSE','COLOUR','CENTRE','COME',
 'DIE','DIFFERENCE','DIFFERENT','DIFFICULT','DIG',
 'DINNER','DIRTY','DISCOVER','DO','DOCTOR','DOG','DOOR','DOUBLE','DOUBT','DOWN','DRAW','DREAM','DRESS','DRINK','DRIVE','DROP','DRUG','DRY','DURING','EACH',
 'EAR','EARLY','EARTH','EAST',
 'EASY',
 'EAT',
 'EDGE','EDUCATE','EGG',
 'EIGHT','EITHER','ELEVEN','ELSE','EMPLOY','EMPTY',
 'END','ENGINE','ENJOY','ENOUGH','ENTER','ESPECIALLY','EVEN','EVENING','EVER',
 'EVERY','EXACT','EXCEPT','EXCITE','EXCUSE','EXPECT','EXPENSIVE','EXPERIENCE','EXPLAIN','EXPRESS','EXTRA',
 'EYE','FIVE','GAS',
 'FACE','FIX','GENERAL',
 'FACT','FLAT','GENTLE',
 'FAIR','FLOOR','GET',
 'FIGHT','FREE','GREEN',
 'FIGURE','FREEZE','GREY',
 'FILL','FRESH','GROUND',
 'FILM','FRIDAY','GROUP',
 'FINAL','FRIEND','GROW',
 'FIND','FRIGHT','GUESS',
 'FINE','FROM','GUN',
 'HANG','HORRIBLE','HAPPEN','HORSE','HAPPY','HOSPITAL','HARD','HOT','HARDLY','HOUR','HAT','HOUSE','HATE','HOW','HAVE','HOWEVER','HE','HUGE','HEAD','HUMAN','HEALTH','HUNDRED','HEAR','HUNGER','HEART','HUNT','HEAT','HURRY','HEAVY','HURT','HELL','HUSBAND','HELLO',
 'HELP','ICE',
 'HERE','IDEA',
 'LOVELY','MINUTE','LOW','MISS',
 'NEED',
 'MIND','NEIGHBOUR',
 'NEVER','OLD',
 'NEW','ON',
 'NEWS','ONCE',
 'PEOPLE','PERFECT','PERHAPS','PERSON','PHOTOGRAPH','PICK',
 'POWER','PREPARE','PRESENT','PRESS','PRETTY','PRICE','PRINCE',
 'PRISON','PROBABLY','PROBLEM','PROGRAMME','PROMISE','PROPER','PROTECT','PUBLIC',
 'PULL','PUSH',
 'SHIRT','SLOW','SHOE','SMALL','SHOOT','SMELL','SHOP','SMILE','SHORT','SMOKE','SHOULD','SNOW','SHOULDER','SO','SHOUT','SOFT','SHOW','SOME','SHUT','SON',
 'STREET','TEACH','STRIKE','TEAM','STRONG','TEAR','STUDENT','TELEPHONE','STUDY','TELEVISION','STUFF','TELL','STUPID','TEN','SUBJECT','TEND',
 'SUCH','TERM','SUDDEN','TERRIBLE','SUGGEST','TEST','SUIT','THAN','SUMMER','THANK','SUN','THAT','SUNDAY','THE','SUPPORT','THEN','SUPPOSE','THERE','SURE','THEY','SURPRISE','THICK','SWEET','THING',
 'THINK','THIRST','THIRTEEN','THIRTY','THIS','THOUGH','THOUSAND','THREE','THROAT','THROUGH','THROW','THURSDAY','TIE',
 'TIGHT',
 'TILL',
 'WALK','WHOLE',
 'WALL','WHY',
 'WANT','WIDE','WAR','WIFE','WARM','WILD','WASH','WILL','WASTE','WIN','WATCH','WIND','WATER','WINDOW','WAVE','WINE','WAY','WINTER','WE','WISH','WEAR','WITH','WEATHER','WITHIN','WEB','WITHOUT','WED','WOMAN','WEDNESDAY','WONDER','WEEK','WOOD','WEIGHT','WORD','WELL','WORK','WEST','WORLD','WET','WORRY','WHAT','WORSE','WHEEL','WORTH','WHEN','WOULD','WHERE','WRITE','WHETHER','WRONG','WHICH','YARD',
 'YEAR','YELLOW','YES','YESTERDAY','YET',
 'YOU','YOUNG','ZERO'];

 var correctLettersCount = 0;
 var wrongLettersCount = 0;
 var currentLetterIndex = 0;

document.querySelector('#button').addEventListener('click', function() {
    correctLettersCount = 0;
    wrongLettersCount = 0;

    if(capsLockActive()){
    var list = document.getElementById('olderWordsList');
    var wordElement = document.querySelector('#randomWord');
    wordElement.innerHTML = '';

    var randomIndex = Math.floor(Math.random() * words.length);
    var word = words[randomIndex];

    for (var i = 0; i < word.length; i++) {
      var letterElement = document.createElement('span');
      letterElement.classList.add('letter');
      letterElement.innerHTML = word[i];
      wordElement.appendChild(letterElement);
    }
    
    document.addEventListener('keypress', function(event) {
      var correctLetter = word[currentLetterIndex];
      var pressedKey = event.key;
      if (currentLetterIndex < word.length-1){
        if (pressedKey === correctLetter) {

            document.querySelectorAll('.letter')[currentLetterIndex].style.color = 'green';
            currentLetterIndex++;
            correctLettersCount++;
          } else {

            document.querySelectorAll('.letter')[currentLetterIndex].style.color = 'red';
            currentLetterIndex++;
            wrongLettersCount++;
          }
      }else{

        if (pressedKey === correctLetter) {
          correctLettersCount++;
        } else {
          wrongLettersCount++;
        }

        var listEntry = document.createElement('li');
        listEntry.style.fontSize = "10px";
        listEntry.style.textAlign = "center";
        listEntry.appendChild(document.createTextNode(word));

        currentLetterIndex = 0;

        wordElement.innerHTML = '';
        randomIndex = Math.floor(Math.random() * words.length);
        word = words[randomIndex];

        for (var i = 0; i < word.length; i++) {
            var letterElement = document.createElement('span');
            letterElement.classList.add('letter');
            letterElement.innerHTML = word[i];
            wordElement.appendChild(letterElement);
        }
        
        list.appendChild(listEntry);
      }    
    });

}else{
    const startButton = document.getElementById('button');
    startButton.onchange(function(){
        alert("Hey, lütfen capslock'u aktifleştir.");
    })  
}
  });

function checkCapsLock(e) {
    document.addEventListener('keydown', function(event) {
        if (!event.getModifierState('CapsLock')) {
            alert("Hey, lütfen capslock'u aktifleştir.");
        }
    })
}

function capsLockActive() {
    if (!event.getModifierState('CapsLock')) {
        return false;
    }else{
        return true;
    }
  }

window.addEventListener('load',checkCapsLock);

window.onload(document.addEventListener('keydown', function(event) {
    var keys = document.querySelectorAll('.key');
    for (var i = 0; i < keys.length; i++) {
      if (keys[i].innerHTML === event.key) {
        keys[i].style.backgroundColor = 'rgba(217, 50, 50,0.7)';
        setTimeout(function(key) {
            key.style.backgroundColor = 'white';
          }, 140, keys[i]);
      }else{
        keys[i].style.backgroundColor = 'white';
      }
    }
  })
);






  
  