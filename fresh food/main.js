let searchform=document.querySelector('.search-form');
let searchbtn=document.querySelector('#search-btn');
let navbar=document.querySelector('.navbar');
let menubtn=document.querySelector('#menu-btn');
let xmark=document.querySelector('.fa-xmark');
let shoppingcart=document.querySelector('.shopping-cart');
let cartbtn=document.querySelector('#cart-btn');
let loginform=document.querySelector('.login-form');
let loginbtn=document.querySelector('#login-btn');
let cxmark=document.querySelector('.fa-circle-xmark');

searchbtn.onclick =() =>{
    searchform.classList.toggle('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

cartbtn.onclick = ()=>{
    shoppingcart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
xmark.onclick = ()=>{
    shoppingcart.classList.remove('active');
}



loginbtn.onclick = ()=>{
  loginform.classList.toggle('active');
  searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    navbar.classList.remove('active');
}
cxmark.onclick=()=>{
  loginform.classList.remove('active');
}


 menubtn.onclick=()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    shoppingcart.classList.remove('active');
    loginform.classList.remove('active');
 }



 let scrollbtn=document.querySelector('#scroll-btn');
 window.onscroll=()=> {
     if(scrollY>650){
         scrollbtn.style.display='block';
     }
     else{
         scrollbtn.style.display='none';
     }
    }
    scrollbtn.onclick = ()=>{
        scroll({
            left:0,
            top:0,
            behavior:"smooth"
        })
    }

        















 //let searchform=document.querySelector('.search-form');
 //let searchbtn=document.querySelector('#search-btn');

 //searchbtn.onclick= ()=>{
   // searchform.classList.toggle('active');
// }








