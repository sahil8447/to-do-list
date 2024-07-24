const ListContainer = document.getElementById("listcontainer");
const inputBox = document.getElementById("input-box");

function addtask(){
    if(inputBox.value === ''){
        alert('Enter some data')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ListContainer.appendChild(li);

        let span =  document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '' ;
    savetask();


}
ListContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       savetask(); }
       else if(e.target.tagName === "SPAN"){
        e.target.parentElement .remove();
        savetask();
       }


   });

   function savetask(){
    localStorage.setItem("data" , ListContainer.innerHTML)
}
function showtask(){
    ListContainer.innerHTML = localStorage.getItem("data")
}

showtask();