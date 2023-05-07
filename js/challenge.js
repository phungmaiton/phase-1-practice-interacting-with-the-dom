const counter = document.querySelector('#counter');
let paused = false;
const body = document.querySelector("body");

//Timer
let timer = setInterval(countUpTimer, 1000);
let totalSeconds = 0;

function countUpTimer() {
        let seconds = ++totalSeconds;
        counter.textContent = `${seconds}`;
}


//Pause

const pause = document.querySelector('#pause');

function pauseTimer() {
    if (pause.textContent === "pause") {
        clearInterval(timer);
        //delete timer;
        pause.textContent = "resume";
        plus.disabled = true;
        heart.disabled = true;
        minus.disabled = true; 
        submit.disabled = true;
    } else if (pause.textContent === "resume") {
        pause.textContent = "pause";
        timer = setInterval(countUpTimer, 1000);
        plus.disabled = false;
        heart.disabled = false;
        minus.disabled = false; 
        submit.disabled = false;
    }
}
  
pause.addEventListener('click', pauseTimer);

//Plus

const plus = document.querySelector('#plus');

plus.addEventListener('click', countUpTimer)

//Minus

const minus = document.querySelector('#minus');

minus.addEventListener('click',() => {
    let seconds = --totalSeconds;
        counter.textContent = `${seconds}`;
})

//Heart 

const heart = document.querySelector('#heart');
const likes = document.createElement("ul");
likes.className = "likes";
pause.insertAdjacentElement("afterend", likes);

let click = 0;
setInterval(() => {
    click = 0;
}, 1000);
function addLikes () {
    ++click;
}
heart.addEventListener('click', () => {
    addLikes();
    let seconds = counter.textContent;
    const like = document.createElement("li"); 
    like.setAttribute('id',`${seconds}`);
    const foundLi = document.getElementById(`${seconds}`);
    if (foundLi) {
        foundLi.textContent = `${seconds} has been liked ${click} times`; 
    } else {
        like.textContent = `${seconds} has been liked ${click} time`;
        likes.append(like);
    }
})

//Restart

const resetButton = document.createElement("button");
 
resetButton.setAttribute('id','resetButton');

resetButton.textContent = "restart";
body.append(resetButton);


function clearTimer () {
    totalSeconds = null;
    clearInterval(timer);
    counter.textContent = "0";
    // delete timer;
    timer = setInterval(countUpTimer, 1000);
    plus.disabled = false;
    heart.disabled = false;
    minus.disabled = false; 
    submit.disabled = false;
    pause.textContent = "pause";
}

resetButton.addEventListener('click', clearTimer);

//Submit

const submit = document.querySelector('#submit'); 
const commentList = document.querySelector('.comments');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let inputField = document.querySelector('#comment-input');
    let input = inputField.value;
    const p = document.createElement('p');
    let comment = commentList.appendChild(p);
    comment.innerHTML = `${input}`;
    inputField.value = null;
})