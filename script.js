"use strict"

var vedio = document.getElementById('vd');

var move = document.getElementById('toggle');

move.addEventListener('click',moveFunction)


let a = 0;
move.classList.add("toggle")
function moveFunction()
{
    if(a == 0)
    {
        move.classList.remove("toggle")
        move.classList.add("hello")
        move.style.backgroundColor="red"
        vedio.pause();
        a=1;
    }
    else 
    {
        if(a == 1)
        {
            move.classList.add("toggle")
            move.classList.remove("hello")
            move.style.backgroundColor="green"
            
            vedio.play();
            a=0;
        }    
    }
}

























// play.addEventListener('click',playfun);

// function playfun(){
//     play.style.backgroundColor='green';
//     pause.style.backgroundColor='';
//     vedio.play();
// }

// pause.addEventListener('click',pausefun);

// function pausefun(){
//     pause.style.backgroundColor='green';
//     play.style.backgroundColor='';
//     vedio.pause();
// }


