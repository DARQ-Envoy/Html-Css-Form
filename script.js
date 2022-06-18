const allDivs= document.querySelectorAll(".error");
const claimButton= document.querySelector(".claim");
const firstName= document.querySelector("#first_name");
const allDivsArr = [...allDivs]
const allimg= []
const alltxt= []
const allInputs= []
let img;
let errorText;
let inputs;
let val;

// console.group(":invalid")
console.log(firstName)
// console.log(":invalid",firstName.matches("inv",":invalid"))
// console.groupEnd()
allDivsArr.forEach(element => {
img = element.querySelector(".error-img")
allimg.push(img);
console.log(allimg)
errorText = element.querySelector(".state");
alltxt.push(errorText);
console.log(alltxt);
inputs = element.querySelector(".input-field");
allInputs.push(inputs);
console.log(allInputs)
});
addingErrors();
console.log(allimg)
console.log(claimButton)
claimButton.addEventListener("click",addingErrors)

function addingErrors(){
    console.log(alltxt)
    console.log(allimg)
allInputs.forEach(input=>{
  val= input.value
  console.log(val)
  console.log(alltxt)
  console.log(allimg)
  if(val >  "" && val >  " "){
allimg[allInputs.indexOf(input)].classList.remove("show");
alltxt[allInputs.indexOf(input)].classList.remove("show");
allimg[allInputs.indexOf(input)].classList.add("hide");
alltxt[allInputs.indexOf(input)].classList.add("hide");

             }

else if (val == "" || val == " "){
allimg[allInputs.indexOf(input)].classList.remove("hide");
alltxt[allInputs.indexOf(input)].classList.remove("hide");
allimg[allInputs.indexOf(input)].classList.add("show");
alltxt[allInputs.indexOf(input)].classList.add("show");
    }
})
console.log(alltxt)
console.log(allimg)
    }