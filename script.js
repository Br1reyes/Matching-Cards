// Game container
let game = document.querySelector(".game");
let counter = 0;
let counterdiv = document.querySelector(".counter");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];

// Array containing image URLs

let url = "https://cdn.glitch.global/305f916c-9128-48d1-be99-03be18f904f8/";

let cards = [
    "card1.jpeg?v=1710433202699",
    "card2.jpeg?v=1710433205797",
    "card3.jpeg?v=1710433280582",
    "card4.jpeg?v=1710433284377",
    "card5.jpeg?v=1710433313815",
    "card6.jpeg?v=1710433317594",
    "card7.jpeg?v=1710433321734",
    "card8.jpeg?v=1710433414467"

];







// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    counter = counter + 1;
    counterdiv.innerHTML = ("This game has been played " + counter + " times ");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + url +
            card +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("now the deck has" + cards.lengh + "cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style='background-image:url(" + url + card + ")' class='card'>");
        }
    }
    buttonDouble.style.color = "silver";
    console.log("Deck has " + cards.length + "cars.");
};

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", "<div style='background-image:url(" + url + card + ")' class='card' id='" + i + "'>");
        i = i + 1;
    }
    console.log("i'm shuffling the cards!");
    buttonShuffle.style.color = "silver";
};
/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}


// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
};
// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
            // Get the id property of the clicked thing.
            let clickedId = event.target.id;
            console.log(clickedId);
            if (clickedId !== "") {
                document.getElementById(clickedId).style.backgroundImagine = "url('" + url +  cards[clickedId] + "')";
                clickedIds.push(clickedId);
                console.log(clickedIds);
            }
            if (clickedIds.lengh === 2) {
                let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
                let card2picture = document.getElementById(clickedIds[1].style.backgroundimage);
                console.log(card1picture);
                console.log(card2picture);
                if (card1picture === card2picture) {
                    console.log("match");
                    document.getElementById(clickedIds[0]).id = "";
                    document.getElementById(clickedIds[1]).id = ""; 
                                            clickedIds = []; console.log(clickedIds);
                    }


                    else if (clickedIds.lengh > 2) {
                        document.getElementById(clickedIds[0]).style.backgroundimage = "";
                        document.getElementById(clickedIds[1]).style.backgroundimage = "";
                        clickedIds = [];
                        console.log(clickedIds);
                    }

            }
                });