let toggleNavStatus = false;

let btnToggle = document.querySelector('.btn-toggle-nav');
let sideMenu = document.querySelector('.side-menu');
let sideUl = document.querySelector('.side-menu ul');
let button = document.querySelector('button');

let toggleNav = ()=>{
  if(toggleNavStatus===false){
    sideMenu.style.width = '15rem';
    sideMenu.style.backgroundColor = 'black';
    sideMenu.style.height = 'calc(100vh - 5rem)';
    sideUl.style.visibility = 'visible';
    toggleNavStatus = true;
  }
  else {
    sideMenu.style.width = '3rem';
    sideUl.style.visibility ='hidden';
    toggleNavStatus = false;
  }
}
btnToggle.addEventListener('click',toggleNav);
button.addEventListener('click',()=> {
    button.innerText='Learned!';
    button.style.backgroundColor = 'orange';
    button.style.fontWeight = '700';
    button.style.border = '0';
});
let arr = [12,223,43,54,556,76,76,73,89];
let finale=arr.sort((a,b)=>(a>b?1:-1));
console.log(finale);