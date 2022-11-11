
const body=document.getElementsByTagName('BODY')[0];
let colorName=document.querySelector('.colorName');
const simpleCode=document.querySelector('#simple')
const hexCode=document.querySelector('#hex');
let div = document.createElement("div");
const mode=document.querySelector('.mode');
const arrColor=['RED','BLUE','Yellow','Green','BLACK','WHITE','PINK','CYAN'];

let clicked=()=>{
let randNumber=Math.floor(Math.random() * arrColor.length);
colorName.innerText=` ${arrColor[randNumber]}`;
body.style.background=arrColor[randNumber];
};

const simpleClick=()=>{
    hexCode.classList.remove('highlight');
  simpleCode.classList.toggle('highlight');
  mode.innerText=` SIMPLE MODE`;
  clicked=()=>{
    let randNumber=Math.floor(Math.random() * arrColor.length);
    colorName.innerText=`: ${arrColor[randNumber]}`;
    body.style.background=arrColor[randNumber];
    };
};
const hexClick=()=>{
    simpleCode.classList.remove('highlight');
    hexCode.classList.toggle('highlight');
    mode.innerText=` HEX MODE`;
    clicked=()=>{
     
    const randomHexCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    colorName.innerText=` ${randomHexCode()}`;
    body.style.background=randomHexCode();}

};














// arrays
// document.getElementById()
// document.querySelector()
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// array.length