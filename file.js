let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

// Toggle mobile menu
function tooglemenu(){

if(menu.classList.contains("active")){
  menu.classList.remove("active");
    //also add the hamburg icon
    document.querySelector("a").innerHTML = '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>'
 } else{
     menu.classList.add("active");
     // change to times icon
    
 
     document.querySelector("a").innerHTML = '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><g fill="#151515" fill-rule="evenodd"><path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/><path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/></g></svg>' ;
 }
}

toggle.addEventListener("click" , tooglemenu , true );



let items = document.querySelectorAll(".item");


// activate submenu

function toggleItem(){
  if(this.classList.contains("submenu-active")){
    this.classList.remove("submenu-active")
  }
  else if(menu.querySelector(".submenu-active")){
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active"); 
  }
  else{
    this.classList.add("submenu-active")
  }
}

function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu.querySelector(".submenu-active").contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

// function toggleItem() {
//   if (this.classList.contains("submenu-active")) {
//     this.classList.remove("submenu-active");
//   } else if (menu.querySelector(".submenu-active")) {
//     menu.querySelector(".submenu-active").classList.remove("submenu-active");
//     this.classList.add("submenu-active");
//   } else {
//     this.classList.add("submenu-active");
//   }
// }


for(let item of items){
  if(item.querySelector(".submenu")){
    item.addEventListener("click" , toggleItem , false)
     
  }
  item.addEventListener("keypress" , toggleItem , false)
}

document.addEventListener("click", closeSubmenu, false);