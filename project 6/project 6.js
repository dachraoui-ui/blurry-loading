const bg = document.querySelector('.bg');
const loading = document.querySelector('.loading-text');

let i = 0;
let int = setInterval(count,30)
function count(){
   i++
   if(i>99){
      clearInterval(int);
   }
   loading.innerHTML =`${i}%`
   loading.style.opacity = scale(i,100,0,0,1);
   bg.style.filter = `blur(${scale(i,100,0,0,30)}px)`
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
   return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}