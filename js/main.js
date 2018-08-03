const btn =document.querySelector('#btn-bar');
const nav =document.querySelector('#nav');
const desp1 = document.querySelector('#desp1');
const desp2 = document.querySelector('#desp2');
const desp3 = document.querySelector('#desp3');
const desp4 = document.querySelector('#desp4');
const depa1 = document.querySelector('#despa1');
const depa2 = document.querySelector('#despa2');
const depa3 = document.querySelector('#despa3');

flat= false;

btn.addEventListener('click', ()  =>{

    if (!flat){
        nav. classList.add("slider");
        console.log="nav";
        console.log="btn";
        flat=true;
    }else{
    nav.classList.remove("slider");
    flat=false;
    
    
    }
})

