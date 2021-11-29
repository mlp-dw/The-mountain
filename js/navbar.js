// selectionner mon button
const burger = document.querySelector('#burger-btn')
const navCollapse = document.querySelector('.nav-collapse')



// ecouteur d'evenement sur le button de type on click 
burger.addEventListener('click', ()=>{
    // ajouter ou enlever la class active sur la div de navigation ( selection la div de navigation) 
    console.log(navCollapse.classList)
    navCollapse.classList.toggle('active')
})