let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msgcontainer")
let msg=document.querySelector(".msg");
let newbtn =document.querySelector("#new");
let turn0 = true;
let count=0;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    enabaledboxes();
    msgcontainer.classList("hide");
}
boxes.forEach((box)=>{
box.addEventListener("click",() => {
    console.log("box was clicked");
    count++;
    if(turn0){
        box.innerText="0";
        turn0=false;
    }
        else {
            box.innerText="X";
            turn0=true;

        }
        box.disabled=true;
        checkwinner();
        
    
});
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showwinner= () => {
    msg.innerText="Winner";
    msgcontainer.classList.remove("hide");
  disabledboxes();
}
const checkwinner=() => {
    if(count===9){
        msg.innerText="Draw";
    }
    else {
    for(let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    if(pos1val!="" && pos2val!= "" &&pos3val!="") {
        if(pos1val===pos2val&&pos2val===pos3val){
        console.log("winner");
        showwinner();
        }
    }
}
}
}
enabaledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
