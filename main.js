window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listElememts = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value; 
        if(!task){
            alert("Please fill out the task");
            return;
        }   

        const taskElements = document.createElement("div");
        taskElements.classList.add("task");

        const taskContentElements = document.createElement("div");
        taskContentElements.classList.add("content");
    

        taskElements.appendChild(taskContentElements);

        const taskInputElements = document.createElement("input");
        taskInputElements.classList.add("text");
        taskInputElements.type = "text";
        taskInputElements.value = task;
        taskInputElements.setAttribute("readonly", "readonly");

        taskContentElements.appendChild(taskInputElements);

        const taskActionsElements = document.createElement("div");
        taskActionsElements.classList.add("actions");

        const taskEditElements = document.createElement("button");
        taskEditElements.classList.add("edit");
        taskEditElements.innerHTML = '<i class="far fa-edit"></i>';

        const taskDeleteElements = document.createElement("button");
        taskDeleteElements.classList.add("delete");
        taskDeleteElements.innerHTML = "<i class='far fa-trash-alt'>";
        
        taskActionsElements.appendChild(taskEditElements);
        taskActionsElements.appendChild(taskDeleteElements);
        
        taskElements.appendChild(taskActionsElements);

        listElememts.appendChild(taskElements);

        //clearing the input
        input.value = "";

        //for editing the text
        taskEditElements.addEventListener('click', () => {

            if (taskEditElements.innerHTML == '<i class="far fa-edit" aria-hidden="true"></i>'){
                taskInputElements.removeAttribute("readonly");
                taskInputElements.focus();
                taskEditElements.innerHTML = "<i class='far fa-save'>";
            }
            else{
                console.log("save")
                taskInputElements.setAttribute("readonly", "readonly");
                taskEditElements.innerHTML = '<i class="far fa-edit"></i>';
            }
        });

        //for deleting
        taskDeleteElements.addEventListener('click', () => {
            listElememts.removeChild(taskElements);
        });
    });
});