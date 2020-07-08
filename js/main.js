//navbar start
document.getElementById('toggle').addEventListener('click',()=>{
    document.getElementById('toggle').classList.toggle("on")
    document.getElementById('resize').classList.toggle("active")
})

document.querySelector('#resize ul li a').addEventListener('click',()=>{
    document.querySelector('#resize ul li a').classList.toggle("on")
    document.getElementById('resize').classList.toggle("active")
})

document.querySelector('.close-btn').addEventListener('click',()=>{
    document.querySelector('.close-btn').classList.toggle("on")
    document.getElementById('resize').classList.toggle("active")
})
//navbar end
//navbar animation
TweenMax.from('#brand',1,{
    delay:0.4,
    y:10,
    opacity:0,
    ease:Expo.easeInOut
})
TweenMax.staggerFrom('#menu li a',1,{
    delay:0.4,
   
    opacity:0,
    ease:Expo.easeInOut
},0.1)
//navbar animation end