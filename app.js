let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');

on.addEventListener('click', function (){
 img.src = "https://www.w3schools.com/js/pic_bulbon.gif"
});

on.addEventListener('click', function(){
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif"
});

let inc = document.querySelector('.inc');
let input = document.querySelector('.input');
let dec = document.querySelector('.dec');

inc.addEventListener('click', function(){
    $test = number(input.value);
    if( ($test+1) < 3){
        input.value= $test + 1;
        inc.style.cursor = 'pointer';
        
    }else{
        inc.style.cursor = 'not-allowed'
    }
});

let clr = document.querySelector('.clr')
let btn = document.querySelector('.btn_clr')

btn.addEventListener('click',function(){

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    clr.style.background =`rgb(${red},${green},${blue})`;
});





