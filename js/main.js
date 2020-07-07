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