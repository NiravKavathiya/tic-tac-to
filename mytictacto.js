console.log('tic tac to')

let Audioturn = new Audio("a.wav")
let gamewin = new Audio("win.wav")
let music = new Audio("2.mp3")
let gameover = false;

let turn = "X";

//function to change a turn
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//function to win the game

const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {

            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "won"
            gameover = true;
            gamewin.play()

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '250px'
        }
    })
}
music.play()
gamewin.play()
//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn()
            checkwin()

            Audioturn.play()
            if (!gameover) {

                document.getElementsByClassName("info")[0].innerText = "turn for " + turn
            }

        }
    })
})

btn.addEventListener('click', () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        turn = "X";
        gameover = false;
        gamewin.pause()
        document.getElementsByClassName("info")[0].innerText = "turn for " + turn
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px'
    })
})