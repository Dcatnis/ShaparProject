let offset=0;
const sliderLine = document.querySelector('.slider-line');
let photoNr=document.querySelector('.swiper-number');
let num =document.querySelector('.num')

let count=1

/*sliderLine.style.left=-3438+'px'*/
document.querySelector('.btn_next').addEventListener('click',function(){
    offset=offset+1120;
    if(offset>3438){
        offset=0
        
    }
    
    count++
    num.innerHTML=count
    if(count>5){
        count=1
        num.innerHTML=count
    }
    
    sliderLine.style.left=-offset+'px';
})

document.querySelector('.btn_prev').addEventListener('click',function(){
    offset=offset-1120;
    if(offset<0){
        offset=3360
    }
    count--
    num.innerHTML=count

    if(count<=0){
        count=5
        num.innerHTML=count
    }
   
    sliderLine.style.left=-offset+'px';
    
    
})

