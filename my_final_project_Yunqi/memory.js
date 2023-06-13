let pics = [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg','01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpg', '019.jpg', '020.jpg']
  

let flippedCards = []
let currentIndex = 0;


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
            card.addEventListener("click", function(){
                flipCard(card);
            });
            
            cell.appendChild(card);
            row.appendChild(cell);
            currentIndex ++;
        };
        table.appendChild(row);
    }
}

createTable();


function flipCard(card){
    if(card.classList.contains("flipped")){
        return;
    }

    card.classList.add("flipped");
    flippedCards.push(card);

    card.querySelector("img").src = card.getAttribute("data-symbol");
    console.log(card.getAttribute("data-symbol")); // one image can't been display, use consle.log to debug 

    if(flippedCards.length === 2){
        lookCards();
    }else if(flippedCards.length ===3 ){
        resetCards();
        flippedCards.push(card);
        card.querySelector("img").src = card.getAttribute("data-symbol");
    }

}


function lookCards(){
    let firstCard = flippedCards[0];
    let secondCard = flippedCards[1];

    if(firstCard.getAttribute("data-symbol") === secondCard.getAttribute("data-symbol")) {
        firstCard.setAttribute("data-flipped", "true");
        secondCard.setAttribute("data-flipped", "true");

        firstCard.classList.add("matched");
        secondCard.classList.add("matched");

        setTimeout(removeMatched,500);

        flippedCards = [];
        setTimeout(checkGameOver,600);
    }
}


function resetCards() {
    for (let i = 0; i < flippedCards.length; i++) {
        let card = flippedCards[i];
        card.classList.remove("flipped");
        card.firstChild.src = "back.jpg";
    }
    flippedCards = [];
}


function removeMatched(){
    let matchedCards = document.querySelectorAll(".card.matched");
    matchedCards.forEach(function (card) {
        card.parentNode.removeChild(card);
    });
}


function checkGameOver() {
    let remainingCards = document.querySelectorAll(".card:not(.matched)");
    if (remainingCards.length === 0) {
      alert("Congratulations! You have completed the game!");
    }
  }
