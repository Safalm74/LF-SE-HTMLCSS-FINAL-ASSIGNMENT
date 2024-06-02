 const themeToogleBtn=document.getElementById('btn__theme-toggle');
 const body_var = document.querySelector('body')

themeToogleBtn.onclick =function (){
    document.body.classList.toggle("night-theme"); 
    body_var.classList.toggle('body-theme-night');
}