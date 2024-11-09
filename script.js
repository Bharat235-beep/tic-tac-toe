let boxes=document.querySelectorAll('.box');
let turnO=true;
let counter=0;
let msg=document.getElementById('msg')
let msgContainer=document.querySelector('.msg-container')
const winPatterns=[
    [0,1,2],//horizontal
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const checkWinPattern=()=>{
   
    console.log(counter)
    winPatterns.forEach((pattern)=>{
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;
        if(pos1!=='' && pos2!=='' && pos3!==''){
           if(pos1===pos2 && pos2===pos3){
            console.log('Winner is',pos1)
            msg.innerHTML='Player '+pos1+' won ';
            boxes[pattern[0]].classList.add('winner')
            boxes[pattern[1]].classList.add('winner')
            boxes[pattern[2]].classList.add('winner')
            msgContainer.classList.remove('hide')
            boxes.forEach((box)=>{
                box.setAttribute('disabled',true)
            })
           }
           if(counter>=9){
            console.log('Match Draws')
            msg.innerHTML='Match Draws ';
            msgContainer.classList.remove('hide')
            boxes.forEach((box)=>{
                box.setAttribute('disabled',true)
            })
           }
        }
        // console.log(boxes[pattern[0]].innerHTML)
        // console.log(pattern[0],pattern[1],pattern[2])
    })
}
function resetGame(){
    counter=0;
    turnO=true;
    msgContainer.classList.add('hide');
    boxes.forEach((box)=>{
        box.removeAttribute('disabled');
        box.classList.remove('winner')
        box.innerHTML=''
    })
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML='O';
            turnO=false;
            box.setAttribute('disabled',true);
            ++counter;
        }
        else{
            box.innerHTML='X';
            turnO=true;
            box.setAttribute('disabled',true);
            ++counter;
        }
        console.log('turnO',turnO)
        checkWinPattern()
;    })
})