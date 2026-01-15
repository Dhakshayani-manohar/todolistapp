document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("input");
    const inputError = document.getElementById("inputError");
    const listItem = document.getElementById("list-container");
    const addbtn = document.getElementById("addbtn");



    addbtn.addEventListener("click", addTask);

    function addTask() {

        if (input.value.trim() === "") {
            inputError.textContent = "Write the task first";
            inputError.style.display = "block";
            return;

        } else {
            inputError.style.display = "none";
            let li = document.createElement("li");
            let textspan = document.createElement("span");
            textspan.className = "tasktext";
            textspan.textContent = input.value;
            li.append(textspan);
            listItem.appendChild(li);

            let del = document.createElement("span");
            del.className = "delete"
            del.textContent = "\uD83D\uDDD1";
            li.append(del);
            input.value = "";
        }
    }

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addTask();
        }
    })

    listItem.addEventListener("click", function (e) {

    
         const li =e.target.closest("li");
         if(!li) return;
          
         if(e.target.classList.contains("delete")){
            li.remove();
            return;
         }
         li.classList.toggle("checked");



        
    })
})

