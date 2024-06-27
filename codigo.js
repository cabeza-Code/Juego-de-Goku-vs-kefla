let k = document.querySelector('.kefla');
let g = document.querySelector('.goku');
let caja = document.querySelector('.caja');
let cuerpo = document.querySelector('.cuerpo');
let vida = document.querySelector('.sangre');
let tempo = document.querySelector('.tiempo');

let tiempo = 0;
let tiempo2 = 0;
let valor1 = 0;
let valor2 = 5;
let menos = 100;
let contar = 0
setInterval(()=>{ 

 let gx = g.getBoundingClientRect().x;
 let gy = g.getBoundingClientRect().y;
 let c = caja.getBoundingClientRect().width;
 let c2 = caja.getBoundingClientRect().height;
 let a  = Math.floor(gx);
  if(gx + 50 > c ||
     gy + 50 > c2) {
     g.style.left = '300px';   
     g.style.top = '0px'
  };
 
 tiempo++;
 
 if(tiempo % 60 == 0) {
    contar += 1
    tempo.innerHTML = `${contar}`
 };
 
 if(tiempo % 40 == 0) {
 let poder = document.createElement('div');
 k.appendChild(poder);
 poder.classList.add('poder');
  
 let poder2 = document.createElement('div');
 k.appendChild(poder2);
 poder2.classList.add('poder2');
 
 cuerpo.style.border = "none"
 }
 
 let elemnts = document.querySelectorAll('.poder');
 let elemnts2 = document.querySelectorAll('.poder2');
 
 elemnts.forEach((e,i)=>{
 elemnts[i].style.transform += `translatex(10px)`+
                               `translatey(${valor2}px)`;
 let x = e.getBoundingClientRect().x;
 let y = e.getBoundingClientRect().y;
 if(x + 10 > innerWidth || 
    y + 10 > innerHeight) {
    e.remove();
    valor2 = Math.floor(Math.random()*10);
 } 
 let gx2 = cuerpo.getBoundingClientRect().x;
 let gy2 = cuerpo.getBoundingClientRect().y;
 if(x + 10 > gx2 && x < gx2 + 50 && 
    y + 10 > gy2 && y < gy2 + 60) {
    e.remove();
    menos -= 1;
    vida.style.width = `${menos}%`;
    cuerpo.style.border = "solid red"
 }
 });
 
 //------------/poder dos
 
 elemnts2.forEach((e,i)=>{
elemnts2[i].style.transform += `translatex(${valor2}px)`+
                               `translatey(10px)`;
 let x = e.getBoundingClientRect().x;
 let y = e.getBoundingClientRect().y;
 if(x + 10 > innerWidth || 
    y + 10 > innerHeight) {
    e.remove();
    valor2 = Math.floor(Math.random()*10);
 } 
 let gx2 = cuerpo.getBoundingClientRect().x;
 let gy2 = cuerpo.getBoundingClientRect().y;
 if(x + 10 > gx2 && x < gx2 + 50 && 
    y + 10 > gy2 && y < gy2 + 60) {
    e.remove();
    menos -= 1;
    vida.style.width = `${menos}%`;
    cuerpo.style.border = "solid red"
 }
 });
  
},1000/60);

caja.addEventListener('touchstart',()=>{  
 let v1 = Math.random()*innerWidth;
 let v2 = Math.random()*innerHeight;
 g.style.left = `${v1}px`;
 g.style.top = `${v2}px`;
 g.classList.remove('goku2')
});

caja.addEventListener('touchend',()=>{ 
  
 g.classList.add('goku2');
});
