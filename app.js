let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("reset");
let newGame = document.querySelector(".new-btn");
let popup = document.getElementById("popup");
let winnerText = document.getElementById("winnerText");
let turn = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText = "X";
            turn = false;
        }else{
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabled = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
  winnerText.textContent = `${winner} Wins!`;
  popup.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos1Val === pos3Val) {
        showWinner(`Player ${pos1Val}`);
        disabled();
        newGame.classList.remove("hide");
        return;
      }
    }
  }
};

const reset = () =>{
    turn = true;
    enableBoxes();
}

newGame.addEventListener("click", () => {
  popup.classList.add("hide");
  newGame.classList.add("hide");
  reset();
});
resetbtn.addEventListener("click",reset);