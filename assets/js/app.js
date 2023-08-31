window.addEventListener('scroll',()=>{
  document.querySelector('nav').classList.toggle('sticky',scrollY>1); 
})

document.querySelector('.trigger').addEventListener("click",()=>{
  document.querySelector('.mob-nav').classList.toggle('open');
})
