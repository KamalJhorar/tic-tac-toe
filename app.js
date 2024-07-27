let boxes= document.querySelectorAll('.box');

let reset= document.querySelector('.reset');
let newgame= document.querySelector('.newgame');

let msgcontainer= document.querySelector(".msg");
let msgpar= document.querySelector(".msgpara");




let turno=true; // if true the print o else x

const winpattern =[
    [0,1,2],
    [0,3,6],
    [ 0,4,8],
    [ 1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


let count=0;
boxes.forEach((box) =>{
    box.addEventListener ('click' ,()=>{
        count++;
        if(turno){
            box.innerText="O"
            turno=false;
        }
        else{
            box.innerText="X"
            turno=true;
        }
        box.disabled=true;

        checkwinner();
        if(count ===9){
            drawmatch();
        }
    }) 
   
    

})



const resetgame=()=>{
    turno= true;
    enabledbox();
    msgcontainer.classList.add("hide");

};


const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showwinner=(val)=>{
    msgpar.innerText=`Congratulations, winner ${val}`;
    msgcontainer.classList.remove("hide");
    disabledbox();
}
const drawmatch=()=>{
    msgpar.innerText=`Match is Draw Restart Game`;
    msgcontainer.classList.remove("hide");
    disabledbox();

}
let checkwinner=()=>{
    for(pattern of winpattern){
        // console.log(pattern[0]); 
        // console.log(pattern[0],pattern[1],pattern[2]);

                
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let val1= boxes[pattern[0]].innerText;
        let val2= boxes[pattern[1]].innerText;
        let val3= boxes[pattern[2]].innerText;

        if(val1 !="" &&val2 !="" &&val3!=""){
            if(val1===val2 &&val2===val3){
                // console.log('winner');
                showwinner(val1);
            }
        }


     }
}

reset.addEventListener('click',resetgame);
newgame.addEventListener('click',resetgame);

