let cardImg=document.querySelectorAll(".order_background2")




for(let imgcard of cardImg){

    
    imgcard.addEventListener("mouseover",function(){
        this.nextElementSibling.classList.add('hiden')
        this.classList.add('visible')
       
        
    })

    imgcard.addEventListener("mouseout",function(){
        
        this.nextElementSibling.classList.remove('hiden')
        this.classList.remove('visible')

    })
}

