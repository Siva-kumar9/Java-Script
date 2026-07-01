let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector(".reset");

let newbtn=document.querySelector("#new");

let msg=document.querySelector("#msg");

let msgcontainer=document.querySelector(".msg-container");

let turnO=true;

let count=0;

const wp=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame= () => {
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide")
    count=0;
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner()
    });
});

const disablebox= ()=>{
    for(b of boxes){
        b.disabled=true;
    }
}

const enablebox= ()=>{
    for(b of boxes){
        b.disabled=false;
        b.innerText="";
    }
}
const draw = () => {
    console.log(count)
    if(count==9)
    {
        msg.innerText="Game Was Draw";
        msgcontainer.classList.remove("hide")
        disablebox();
    }
}

const showWinner= (winner) => {
    msg.innerText= `Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disablebox();
}

const checkWinner = () => {
    draw();
    for(p of wp){
        let pos1val = boxes[p[0]].innerText
        let pos2val = boxes[p[1]].innerText
        let pos3val = boxes[p[2]].innerText
        if(pos1val !="" && pos2val !="" && pos3val !="")
    {
        if(pos1val == pos2val && pos2val == pos3val)
        {
            console.log("Winner",pos1val)
            showWinner(pos1val);
            count=0;
        }
    }
    }
};



newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);