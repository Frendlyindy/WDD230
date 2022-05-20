const btn = document.getElementById("btn");
const list = document.getElementById('list');
const iput = document.getElementById('favchap');

btn.addEventListener("click", function(){

if(iput.value !== "") {

    const dlt = document.createElement("button");
    const newLI = document.createElement("li");
    dlt.textContent = "❌";
    newLI.textContent = iput.value;
    newLI.appendChild(dlt);
    list.appendChild(newLI);
    iput.value = "";
    iput.focus();
    dlt.addEventListener("click", function(){
        list.removeChild(newLI);
    })
    } 


});