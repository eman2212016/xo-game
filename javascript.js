function clock(){
    let date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let flag="AM"

    if(hours == 0){
        hours=12
    }if(hours> 12){
        hours = hours -12;
        let flag="PM";

    }

    if(hours<10){
        hours='0'+hours
    }
     if(sec < 10){
        sec='0'+sec
    }
     if(min < 10){
        min='0'+min
    }
    let x=document.querySelector(".clock")
    x.innerHTML=` ${hours} : ${min} :${sec} ${flag}`;
    x.style.fontSize='34px';

    setTimeout(function(){
        clock()
    },1000)


}
clock()
/////////////////////////////////////////////////////////////////////
// game
let turn = 'x';
let title=document.querySelector(".title")
let squares=[];

function code(num1,num2,num3){
title.innerHTML=`${squares[num1]}winner`
document.getElementById('item'+num1).style.background = '#000';
document.getElementById('item'+num2).style.background = '#000';
document.getElementById('item'+num3).style.background = '#000';
setInterval(function(){title.innerHTML+='.'},1000)
setTimeout(function(){location.reload()},4000)
}
function winners(){
for(let n=1; n<10; n++){
squares[n]=document.getElementById('item'+n).innerHTML
}
if(squares[1] == squares[2] && squares[2]== squares[3] && squares[1] !=''){
code(1,2,3)   
}else if(squares[4] == squares[5] && squares[5]== squares[6] && squares[4] !=''){
code(4,5,6)   

}else if(squares[7] == squares[8] && squares[8]== squares[9] && squares[7] !=''){
code(7,8,9)   

}else if(squares[1] == squares[4] && squares[4]== squares[7] && squares[1] !=''){
code(1,4,7)   

}else if(squares[2] == squares[5] && squares[5]== squares[8] && squares[2] !=''){
code(2,5,8)   

}else if(squares[3] == squares[6] && squares[6]== squares[9] && squares[3] !=''){
code(3,6,9)   

}else if(squares[1] == squares[5] && squares[5]== squares[9] && squares[1] !=''){
    code(1,5,9)   
    
}else if(squares[3] == squares[5] && squares[5]== squares[7] && squares[3] !=''){
        code(3,5,7)   
        
}else{
   if(squares[1,2,3,4,5,6,7,8,9] !==""){
    setInterval(function(){title.innerHTML='.'},1000)
    setTimeout(function(){location.reload()},10000)

}
}
}
function game(id){

let element=document.getElementById(id)
if(turn === 'x' && element.innerHTML == ''){
element.innerHTML='x'
turn='o'
title.innerHTML='o'
}else if (turn === 'o' && element.innerHTML == ''){
element.innerHTML='o'
turn='x'
title.innerHTML='x'

} 
winners()
}

