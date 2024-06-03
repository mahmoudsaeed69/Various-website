
// call my Element section
let ourSkils=document.querySelector(".our-skils")
let fillMycontiner=document.querySelectorAll(".our-skils .skill .full-width")

let myEvent=document.querySelector(".event")
let scd=document.querySelector(".event .unite .sec")
let min=document.querySelector(".event .unite .min")
let hour=document.querySelector(".event .unite .hours")
let days=document.querySelector(".event .unite .Days")

function fill(ele){
    let gool=ele.dataset.gool
    ele.style=`width:${gool}%`
}

function nummberCounter(){
let ele=setInterval(()=>{
scd.innerHTML -= 1
if(scd.innerHTML==="0"){
    min.innerHTML -= 1
    scd.innerHTML=60
}if(min.innerHTML==="0"){
    hour.innerHTML -= 1
    min.innerHTML = 60
}if(hour.innerHTML === "0"){
    days.innerHTML -= 1
    hour.innerHTML=24
}if(days.innerHTML==="0"){
    clearInterval(ele)
    clock.innerHTML=0
    min.innerHTML=0
    hour.innerHTML=0
    days.innerHTML=0 
}
},1000)
}

// ststs section 
let stats=document.querySelector(".stats")
let number=document.querySelectorAll(".stats .box .Number")

// satting started to scrooling

let started=false;
let startdown=false;
let widhtFill=false


    function lodingNum(num){
        let gool=num.dataset.gool
    
        let coun=setInterval(()=>{
            num.textContent++
    
            if(num.textContent == gool){
                clearInterval(coun)
            }
        },2000/gool)
    }


// window to focus section

window.onscroll=function(){
    if(window.scrollY>=stats.offsetTop){
            if(!started){
        number.forEach((span)=>{lodingNum(span)})
            }
    started =true
            

    }else if(window.scrollY>=myEvent.offsetTop){
        if(!startdown){
        nummberCounter()
    }
    startdown=true
    }else if(window.scrollY>=ourSkils.offsetTop){

        if(!widhtFill){
            fillMycontiner.forEach((ele)=> {fill(ele)})

        }
        widhtFill=true
    }

}

let videoLi=document.querySelectorAll(".video .list-video ul li")
let imgSrc=document.querySelector(".video .imge img")


for(let i=0;i<=videoLi.length;i++){

    if(i===0){
        videoLi[i].classList.add("active")
    }
    videoLi[i].onclick=function(){
    removeClass()

        videoLi[i].classList.add("active")
        imgSrc.src=videoLi[i].getAttribute("value")
    }
}
function removeClass(){
    videoLi.forEach((span)=>{
        span.classList.remove("active")

    })
}