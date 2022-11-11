const button = document.querySelector('id');
const body=document.getElementsByTagName('BODY')[0];
let colorName=document.querySelector('.colorName');
const simpleCode=document.querySelector('simple');
const hexCode=document.querySelector('hex');

const arrColor=['RED','BLUE','Yellow','Green','BLACK','WHITE','PINK','CYAN'];
const clicked=()=>{
let randNumber=Math.floor(Math.random() * arrColor.length-1);
colorName.innerText=`: ${arrColor[randNumber]}`;
body.style.background=arrColor[randNumber];
};
// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length