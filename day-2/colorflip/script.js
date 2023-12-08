let btn = document.querySelector('button');
let color = document.getElementById('color');
let back = document.getElementById('btn');
let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click',changeColor);

function changeColor(){
    let col = "#";
   
    for(let i=1;i<=6;i++){
        
        col = col+getValu();
    }
    console.log(col)

    color.innerHTML = col;
    back.style.backgroundColor=col;
}

function getValu(){
    let num =Math.floor(Math.random()*16);
    
    return hex[num];
}