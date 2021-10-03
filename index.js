console.log("Start");
console.error("Not a valid");
console.warn("Stop");

document.getElementById('click').style.border='2px solid blue'

//dom manipulation
let elem= document.getElementById('click');
console.log(elem);

let elemClass= document.getElementsByClassName("container")
console.log(elemClass);
// elemClass[0].style.background= "yellow";
elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("test-success");
elemClass[0].classList.remove("test-success")
//to know html and text
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)

tn= document.getElementsByTagName('div')
console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText=" This is a created para"
tn[0].appendChild(createdElement)
// createdElement2=document.createElement('b');
// createdElement2.innerText="This is created bold";
// removeChild(element);

//Queries or selection by query
sel=document.querySelector('.container')
console.log(sel)