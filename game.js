'use strict'
const player1=document.querySelector('.ply1');
const player2=document.querySelector('.ply2');
const button1=document.querySelector('#play1');
const button2=document.querySelector('#play2');
const reset=document.querySelector('.reset');

// console.log(player1,player2,button1,button2,reset);
const target=60;
let startscore1=0;
let startscore2=0;
let flag=1;

reset.addEventListener('click',function(){
    startscore1=0;
    startscore2=0;
    player1.textContent=0;
    player2.textContent=0;
    flag=1;
});
button1.addEventListener('click',function(){
    if(!flag){
        alert('tu khad re player1');
        return;
    }
    flag=0;
    startscore1=startscore1+Math.trunc(Math.random()*10)+1;
    player1.textContent=startscore1;
    if(startscore1>=target){
        alert(`player1 has won the match ${startscore1}`);
    }
});

button2.addEventListener('click',function(){
    if(flag){
        alert('tu khad re player2');
        return;
    }
    flag=1;
    startscore2=startscore2+Math.trunc(Math.random()*10)+1;
    player2.textContent=startscore2;
    if(startscore2>=target){
        alert(`player1 has won the match ${startscore2}`);
    }
});


