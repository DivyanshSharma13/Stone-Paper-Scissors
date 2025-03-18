let btns = document.querySelectorAll('.rps')
let scoreUser = document.querySelectorAll('#user-score')
let scoreComputer = document.querySelectorAll('#computer-score')
let msg = document.querySelector('#msg');
let resetbtn = document.querySelector('.reset');
let newbtn = document.querySelector('.Newgame'); 
let msgcontainer = document.querySelector('.msgcontainer')

const buttons = [
    btns[0],
    btns[1],
    btns[2]
];

let isUserTurn = true;               //  check kro kiski turn hai
let userChoice = null;
let computerChoice = null;

let winneruser=0;
let winnercomp = 0;
let draw=0;

btns.forEach((btn) => {
    btn.addEventListener('click',() => {
        if(!isUserTurn) return;      //  user ki turn nahi hai toh kuch naa kro

        userChoice  = btn;
        console.log("clicked by user");
        
        isUserTurn = false;          //  computer ki turn hai

        setTimeout(()=>{
            const randomIdx = Math.floor(Math.random()*btns.length);
            buttons[randomIdx].click();
            computerChoice = buttons[randomIdx];
            console.log("computer selected");

            isUserTurn=true; 
            winnerkonhai();        //  user ki turn
           
        },500)
        resetgame();
        newGame();
    })
})

const showwinner = () =>{
    if(winneruser === 1){
        msg.innerText = "User wins this round !"
        msg.style.backgroundColor = "transparent";
        msg.style.color = "blue";
        msg.style.fontSize = "30px";
        msg.style.fontWeight = "900";
        msg.style.boxShadow = "none";
        scoreUser[0].innerText = parseInt(scoreUser[0].innerText)+1;
    }
    else if(winnercomp==1){
        msg.innerText = "you loose !!!"
        msg.style.backgroundColor = "transparent";
        msg.style.color = "red";
        msg.style.fontSize = "30px";
        msg.style.boxShadow = "none";
        scoreComputer[0].innerText = parseInt(scoreComputer[0].innerText)+1;
    }
    else if(draw==1){
        msg.innerText = "DRAW !"
        msg.style.backgroundColor = "transparent";
        msg.style.color = "black";
        msg.style.fontSize = "30px";
        msg.style.boxShadow = "none";
    }
    winnercomp=0;
    winneruser=0;
    draw=0;
}

function winnerkonhai(){
        if(userChoice === computerChoice){
            console.log("Draw");
            draw=1;
        }
        else if((userChoice ===buttons[0] && computerChoice === buttons[2] )||
               (userChoice === buttons[1] && computerChoice === buttons[0] )||
               (userChoice === buttons[2]&& computerChoice === buttons[1] )
    )
            {
              console.log("User win")
              winneruser=1;
            }
            else{
                console.log("Computer Wins");
                winnercomp=1;
            }
            showwinner();
}

function resetgame(){
    resetbtn.addEventListener("click",()=>{
    scoreUser[0].innerText = parseInt(scoreUser[0].innerText)-scoreUser[0].innerText;
    scoreComputer[0].innerText = parseInt(scoreComputer[0].innerText)-scoreComputer[0].innerText;
    })
}
function newGame(){
    newbtn.addEventListener("click",()=>{
        scoreUser[0].innerText = parseInt(scoreUser[0].innerText)-scoreUser[0].innerText;
        scoreComputer[0].innerText = parseInt(scoreComputer[0].innerText)-scoreComputer[0].innerText;
        msg.innerText="Pick your move";
        msg.style.backgroundColor = "black";
        msg.style.color = "white";
        })
}


