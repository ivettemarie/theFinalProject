console.log("connected!")

// ============================================//


//Initializes the taskManager object
let taskManager = new TaskManager();

//Gets the task form element
let taskForm = document.querySelector("#taskForm");


//Function that validates input, and sets error messages
function validFormFieldInput() {
    let isValid = true;
    let taskName = document.querySelector("input[name=name]").value;
    let errorMessage = "";
    if (taskName == "") {
        errorMessage += "Task name cannot be empty <br/>";
        isValid = false;
    }
    let taskDescription = document.querySelector("input[name=description]").value;
    if (taskDescription == "") {
        errorMessage += "Task description cannot be empty <br/>";
        isValid = false;
    }
    let taskStatus = document.querySelector("#status").value;
    if (taskStatus == "") {
        errorMessage += "Task status cannot be empty <br/>";
        isValid = false;
    }
    let taskAssigned = document.querySelector("input[name=assignedTo").value;
    if (taskAssigned == "") {
        errorMessage += "Task assigned to cannot be empty <br/>";
        isValid = false;
    }
    let taskDate = document.querySelector("#tasktime").value;
    if (taskDate == "") {
        errorMessage += "Task date cannot be empty <br/>";
        isValid = false;
    }
    let alert = document.querySelector("#alert");
    alert.innerHTML = errorMessage;
    return isValid;
}




//Sets a submit listener to task form, checks if valid to submit, or show error messages if not

taskForm.addEventListener("submit", function(e){
    e.preventDefault();

    //Checks if form is valid
    let isValid = validFormFieldInput();

    //Gets alert and success boxes (on top of form)
    let alert = document.querySelector("#alert");
    let success = document.querySelector("#success");
    if (isValid == false) {
        alert.classList.remove("d-none");
        success.classList.add("d-none");
        //Return and does not execute anything after this line.
        return;
    } else {
        success.classList.remove("d-none");
        alert.classList.add("d-none");
    }

    //Gets all form values
    let taskName = document.querySelector("input[name=name]").value;
    let taskDescription = document.querySelector("input[name=description]").value;
    let taskStatus = document.querySelector("#status").value;
    let taskAssigned = document.querySelector("input[name=assignedTo").value;
    let taskDate = document.querySelector("#tasktime").value;

    //Adds new task to task manager array
    taskManager.addTask(taskName, taskDescription, taskAssigned, taskDate, taskStatus);
    
    //Resets form
    taskForm.reset();

    //Re-renders card list with new tasks
    taskManager.render();

}) 









