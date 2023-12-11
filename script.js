(function(){
    const btns=document.querySelectorAll(".buttons")
    const storeItems=document.querySelectorAll(".store-item")

    btns.forEach(btn=>{
        btn.addEventListener("click",function(e){
            e.preventDefault()
            const filter=e.target.dataset.filter
            storeItems.forEach(item=>{
                if(filter==="all"){
                    item.style.display="block"
                }else{
                    if(item.classList.contains(filter)){
                        item.style.display="block"
                    }else{
                        item.style.display="none"
                    }
                }
            })
        })
    })

})()