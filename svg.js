import { SVG } from "https://cdn.skypack.dev/@svgdotjs/svg.js";
// create a new svg.js instance
const svg = SVG(".canvas");

// regenerate button
const btnRose = document.querySelector("#rose");
const btnAmber = document.querySelector("#amber");
const btnEmerald = document.querySelector("#emerald");
const btnPowder = document.querySelector("#powder");
const btnViolet = document.querySelector("#violet");
const btnMagenta = document.querySelector("#magenta");
const btn = document.querySelector("#btn");




const { width, height } = svg.viewbox();
// how many stripes should we paint?
// const numStripes = 7;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


let intervalId = 0;
let colors = ['#FFF7F9', '#FFDCE5', '#FF3B8D', '#DB0072', '#800040', '#4C0023'];

btnAmber.addEventListener("click", () => {

  colors = ['#FFF8EF', '#FFE0B2', '#B98300', '#926700', '#523800', '#302100'];
  generate();
});
btnRose.addEventListener("click", () => {
 
  colors = ['#FFF7F9', '#FFDCE5', '#FF3B8D', '#DB0072', '#800040', '#4C0023'];
  generate();
});
btnEmerald.addEventListener("click", () => {
  
  colors = ['#DCFFE6', '#5DFFA2', '#00A05A', '#008147', '#004825', '#002812'];
  generate();
});
btnPowder.addEventListener("click", () => {
  
  colors = ['#DAFAFF', '#8DF0FF', '#0098A9', '#007987', '#004048', '#002227'];
  generate();
});
btnViolet.addEventListener("click", () => {
  
  colors = ['#F7F1FF',	'#E8DAFF', '#9B70FF', '#794AFF', '#2D0FBF', '#0B0074'];
  generate();
});
btnMagenta.addEventListener("click", () => {
  
  colors = ['	#FFF3FC', '#FFD7F6', '#F911E0', '#CA00B6', '#740068', '#44003C'];
  generate();
});


// listen for clicks on the regenerate button
btn.addEventListener("click", () => {
  // re-paint the stripes
 if (intervalId === 0 && btn.innerText === "START"){
  generate();
  intervalId = setInterval(generate, 500);
  btn.innerText = "STOP";
 } else {
  clearInterval(intervalId);
  intervalId = 0; 
  btn.innerText = "START";
 } 
});

function generate() {

  const numStripes = getRandomIntInclusive(2, 9);
  // stripe width === viewBox width / the amount of stripes we would like to paint
  const stripeWidth = width/ numStripes;
  const stripeHeight = height/numStripes;


  // store some simple browser default colors in an array
  // const colors = ['#FFF7F9', '#FFDCE5', '#FF3B8D', '#DB0072', '#800040', '#4C0023'];

  for (let i = 0; i < width; i += stripeWidth) {
    for (let j = 0; j< height; j += stripeHeight) {
      // pick a number between 0 and 5 (the length of the colors array)
    const diceRoll = Math.floor(Math.random() * colors.length);
    // pick out the color from the array using diceRoll as the index
    const color = colors[diceRoll];

    // draw a colored stripe on the canvas based on the “dice roll”
    // const rect = svg.rect(stripeWidth, height);
    // const a = rect.x(i);
    // const b = a.y(0);

    svg.rect(stripeWidth, stripeHeight).y(j).x(i).fill(color).stroke({color:'#fff', width: 0.3});
      
    }
    
    
  }

}

generate();
