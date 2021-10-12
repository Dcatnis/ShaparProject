let nextBtn=document.querySelector('.right')
let prevBtn=document.querySelector('.left')
let number=document.querySelector('.num')

let count=1
nextBtn.addEventListener('click',function(){

    count++
    number.innerHTML=count
    if(count>5){
        count=1
        number.innerHTML=count
    }

})

prevBtn.addEventListener('click',function(){

    count--
    number.innerHTML=count

    if(count<=0){
        count=5
        number.innerHTML=count
    }
})