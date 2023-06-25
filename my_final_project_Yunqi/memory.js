let pics = [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg','01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg']
  

let flippedCards = [];
let matchedCards = [];
let currentIndex = 0;

let startTime;
let timerInterval;
let timerElement = document.getElementById("timer");
let minutes;
let seconds;

let flipSound = new Audio("flipSound.mp3");
let matchedSound = new Audio("matched.mp3");
let dealingSound = new Audio("dealing.mp3");

let canClick = false;

function shuffle(array){
    for(let i = array.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

pics = shuffle(pics);


function createCard(pic){
    let card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-symbol", pic);
    card.setAttribute("data-flipped", "false");

    let display = document.createElement("img");
    display.src = "back.jpg";
    card.appendChild(display);

    card.addEventListener("click", function(){
        flipCard(card);
    });

    return card;
}


function createTable(){
    let table = document.getElementById("gameContainer");
    for(let i=0;i<5;i++){
        let row = document.createElement("tr");
        for (let j=0; j<8;j++){
            if(currentIndex >= pics.length){
                break;
            }

            let cell = document.createElement("td");
            let front = pics[currentIndex];
            let card = createCard(front);

            card.style.opacity = "0";
            
            cell.appendChild(card);
            row.appendChild(cell);
            currentIndex ++;
        };
        table.appendChild(row);
    }

    document.querySelector("#restartButton").addEventListener("click", restartGame);
}

function dealingAnimation() {
    dealingSound.play();
    let cards = document.querySelectorAll(".card");
    let delay = 0; 
    let duration = 500;
  
    cards.forEach(function(card) {
      setTimeout(function() {
        card.style.opacity = "1";
        card.style.animation = `showCardAnimation ${duration}ms forwards`;
      }, delay);
  
      delay += 100; 
    });
    
    setTimeout(function() {
        canClick = true;
      }, delay + duration);
      console.log(delay + duration);
  }

function startGame(){
    startButton.style.display = "none";
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("counter").style.display = "block";
    document.getElementById("timer").style.display = "block";
    
    createTable();
    dealingAnimation();
    updateCounter();
}

function flipCard(card){
    if (!canClick) {
        return;
    }
    if(card.classList.contains("flipped") || card.classList.contains("matched")){
        return;
    }
    if (flippedCards.includes(card)) {
        return;
    }
    if (!flipSound.paused) {
        return;
    }
    
    flipSound.play();

    setTimeout(function(){
        card.querySelector("img").src = card.getAttribute("data-symbol");
    }, 100)

    card.classList.add("flipped");
    flippedCards.push(card);

    console.log(card.getAttribute("data-symbol")); 

    if(flippedCards.length === 1){
        if(!timerInterval){
            startTimer();
        }
    }
    if(flippedCards.length === 2){
        lookCards();
        return;
    }
    if(flippedCards.length ===3){
        resetCards();
        
        flippedCards.push(card);
        card.querySelector("img").src = card.getAttribute("data-symbol");
        card.classList.add("flipped");

    }
}


function lookCards(){
    let firstCard = flippedCards[0];
    let secondCard = flippedCards[1];

    if(firstCard.getAttribute("data-symbol") === secondCard.getAttribute("data-symbol") && firstCard != secondCard) {
        matchedSound.play();
        
        firstCard.setAttribute("data-flipped", "true");
        secondCard.setAttribute("data-flipped", "true");

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        matchedCards.push(firstCard, secondCard);

        updateCounter();
        flippedCards = [];

        firstCard.style.animation = "shakeAnimation 1s ease-in-out forwards";
        secondCard.style.animation = "shakeAnimation 1s ease-in-out forwards";

        setTimeout(removeMatched,1100);
        setTimeout(checkGameOver,1200);
    }
}


function resetCards() {
    for (let i = 0; i < flippedCards.length; i++) {
        let card = flippedCards[i];
        card.classList.remove("flipped");
        card.firstChild.src = "back.jpg";
        card.style.animation = ""; 
    }
    flippedCards = [];
}


function removeMatched(){
    document.querySelectorAll(".card.matched").forEach(function (card) {
        card.style.visibility = "hidden";
    });
}

function updateCounter(){
    let counter = document.getElementById("counter");
    counter.textContent = "Score: " + matchedCards.length;
}

function checkGameOver() {
    if (matchedCards.length === 40) {
        clearInterval(timerInterval);
        timerElement.textContent = "Timer: " + formatTime(minutes) + ":" + formatTime(seconds);

        winScreen();
    }
  }

function restartGame(){
    document.querySelector("#gameContainer").innerHTML = "";
    flippedCards = [];
    matchedCards = [];
    currentIndex = 0;
    
    shuffle(pics);
    createTable();
    canClick = false;
    dealingAnimation();
    updateCounter();

    clearInterval(timerInterval);
    timerInterval = null;
    timerElement.textContent = "Timer: 00:00";

}

function startTimer(){
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer(){
    let currentTime = new Date();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);

    minutes = Math.floor(elapsedTime / 60);
    seconds = elapsedTime % 60;

    timerElement.textContent = "Timer: " + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : String(time);
}

function winScreen(){
    let winScreen = document.getElementById("win-screen");
    let winText = document.getElementById("win-text");
    let winScore = document.getElementById("win-score");

    winText.textContent = "Congratulations! You have completed the game in " + formatTime(minutes) + ":" + formatTime(seconds) + ".";
    winScore.textContent = "Score: " + matchedCards.length;

    winScreen.classList.add("show");
}



