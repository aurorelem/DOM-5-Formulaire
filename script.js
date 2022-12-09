let input = document.getElementById("firstname")
let span = document.getElementById("display-firstname")

input.addEventListener('keyup', () =>{
    span.textContent = input.value
})

let age = document.getElementById("age")
let truth = document.getElementById("a-hard-truth")

age.addEventListener('keyup', () =>{
   if(age.value<18){
    truth.style.visibility = "hidden"
   } 
   else{
    truth.style.visibility = "visible"
   }
  /* if(age.value >= 18) {
        truth.setAttribute("style", "visibility: visible")
   }*/
})


const pwd = document.getElementById("pwd")
const pwd = document.getElementById("pwd-confirm")

pwd.addEventListener('keyup', () =>{
    if(pwd.value.lenght<6){
        pwd.style.backgroundColor = "red"
    }

    else{
        pwd.style.backgroundColor = "green"
    }
})