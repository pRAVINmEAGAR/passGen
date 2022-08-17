const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let pasEnth = 14
let ramBox=document.getElementById("getTq")
let ramBox1=document.getElementById("getTw")


function firstclick(){
appL()
}
function appL(){
      ramBox.textContent=secCp()
      ramBox1.textContent=secCp()
}

function firsrCp(){
      let tex=Math.floor(Math.random()*characters.length)
      return characters[tex]
}
function secCp(){
          let fiP=''
          for(let i=0;i<=pasEnth;i++){
           fiP+=firsrCp()
          }
          return fiP
}

function second(){
      navigator.clipboard.writeText(ramBox.innerText)
}

function copy(){
      navigator.clipboard.writeText(ramBox1.innerText)
}


















// function copy(){
//     let firsrCp=document.getElementById("getEx")
//     navigator.clipboard.writeText(firsrCp.value)
//     alert("text copy"+firsrCp.value)
//     alert("copied"+value)
// }

// function second(){
//     let firsrCp=document.getElementById("getEx")
//     navigator.clipboard.writeText(firsrCp.value)
//     alert("text copy"+firsrCp.value)
//     alert("copied"+value)
// }
