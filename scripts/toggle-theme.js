 const themeToogleBtn=document.getElementsByClassName('header__theme-toggle');
 const body_var = document.querySelector('body');
 const social_links=document.getElementsByClassName('ul-social-links');
 var is_day=true;

 function theme_toggle(is_day){
    if (is_day){
        console.log('ThemeChanged: Night');
        Array.from(social_links).forEach((ul)=>{
            ul.innerHTML=`
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/night-social-links1.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/night-social-links4.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/night-social-links2.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/night-social-links3.svg" class="icon-img">
                </figure>
            </li>
             `
        });
    }
    else{
        console.log('ThemeChanged: Day');

        Array.from(social_links).forEach((ul)=>{
            ul.innerHTML=`
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/social-links1.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/social-links2.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/social-links4.svg" class="icon-img">
                </figure>
            </li>
            <li> 
                <figure class="square-icon">
                    <img src="assets/img/social-links3.svg" class="icon-img">
                </figure>
            </li>
            `
        });
    }
 }

Array.from(themeToogleBtn).forEach((btn)=>{
    btn.onclick =function (){
        document.body.classList.toggle("night-theme"); 
        body_var.classList.toggle('body-theme-night');
        theme_toggle(is_day)
        is_day?btn.innerHTML='🌝':btn.innerHTML='🌚';
        is_day?is_day=false:is_day=true;
}});