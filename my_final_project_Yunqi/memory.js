let pics = [
    '01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpeg', '019.jpg', '020.jpg','01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '010.jpg', '011.jpg', '012.jpg', '013.jpg', '014.jpg', '015.jpg', '016.jpg', '017.jpg', '018.jpeg', '019.jpg', '020.jpg']

let flippedCards = []
let firstCard = null;
let secondCard = null;
let currentIndex = 0;

function shuffle(array){
    for(let i = array.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffle(pics);

function createTable(){
    let table = document.getElementById("gameTable");
    for(let i=0;i<5;i++){
        let row = document.createElement("tr");
        for (let j=0; j<8;j++){
            let cell = document.createElement("td");
            let card = document.createElement("img");

            card.src = "back.jpg";
            card.setAttribute("data-flipped", "false");
            card.setAttribute("data-symbol", pics[currentIndex]);
            currentIndex ++;

            cell.appendChild(card);
            cell.onclick = function(){
                flipCard(this);
            };
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

createTable();

function flipCard(cell){
    let card = cell.getElementsByTagName("img")[0];
    if (card.getAttribute("data-flipped") === "true"){
        return;
    }

    card.src = card.getAttribute("data-symbol");
    card.setAttribute("data-flipped", "true");
    flippedCards.push(card);

    if (flippedCards.length === 2){
        setTimeout(lookCards, 10000);
    }
    if(flippedCards.length >2){
        resetCards();
    }

}

function lookCards(){
    firstCard = flippedCards[0];
    secondCard = flippedCards[1];

    if(firstCard.src === secondCard.src){
        firstCard.parentNode.remove();
        secondCard.parentNode.remove();
        flippedCards = [];
    }else{
        resetCards();
    }
}

function removeCards(card1,card2){
    let parent1 = card1.parentNode;
    let parent2 = card2.parentNode;
    let placeholder = document.createElement("td");
    parent1.replaceChild(placeholder, card1);

}

function resetCards() {
    for (let i = 0; i < flippedCards.length; i++) {
        let card = flippedCards[i];
        card.src = "back.jpg";
        card.setAttribute("data-flipped", "false");
    }
    flippedCards = [];
}

//try to use <div> instead of table (older), look at some current examples
