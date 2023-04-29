let inputbox = document.getElementById("input");
let listbox = document.getElementById("list");

function addtask() {
  if (inputbox.value === "") {
    alert("You must write something ");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    li.classList.add("mb-3");
    li.innerHTML = `
        <div class="flex  ">
          <span class="font-bold w-auto text-black ">${inputbox.value}</span>
         
          
          <img src="download.png" class="w-6 h-6 ml-auto delete">
         
         <br>
         
          </div>
          <hr class="border-2 border-black font-semibold" >
        `;

    listbox.appendChild(li);
  
    
    const deleteBtn = li.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
      
      listbox.removeChild(li);
   
    });
   
    inputbox.value = "";
  

   
  }
}


