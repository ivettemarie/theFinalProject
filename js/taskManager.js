console.log("connected!")

 //variable with the Cards
 
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) =>{ 
    let cardHtml = `<div class="card mx-auto" style="width: 18rem;" data-taskId="${id}">
                                <div class="card-body">
                                <h4 class="taskName">${name}</h4>
                                <h6 class="taskDescription">${description}</h6>
                                <h6 class="taskAssignedTo">${assignedTo}</h6>
                                <h6 class="taskDueDate">${dueDate}</h6>
                                <span class="taskStatus ${status == "Completed" ? "success" : ""}">${status}</span>`;
                                
    if (status != "Completed") {
        cardHtml += `<button type="button" class="done-button btn btn-success">Done</button>`;
    }
    cardHtml +=
                                `<button type="button" class="delete-button btn btn-danger">Delete</button>
                                </div>
                                 </div>`;


    return cardHtml;

    
}



class TaskManager {
    //Constructor - Runs when using new
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;

    }


    //Method, adds a new task to this.tasks array
    addTask( name, description, assignedTo, dueDate, status = "Todo"){
        this.currentId += 1;
        let task = {
            id: this.currentId,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        }
        this.tasks.push(task);
    }

    deleteTask(taskId){
        const newTasks = [];
        for(let i in this.tasks){
            let task = this.tasks[i];
            if (taskId != task.id) {
                newTasks.push(task);
            }
        }

        this.tasks = newTasks;

    }

    //Method, renders a card list using the tasks in the this.tasks array
    render(){
        let tasksHtmlList = [];

        //Loops around the tasks array
        for(let i = 0; i < this.tasks.length; i++){
            let task = this.tasks[i];
            //Gets date and formats it to readable format
            let date = new Date(task.dueDate);
            let formattedDate = date.toDateString();
            let taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            //Adds task to html array
            tasksHtmlList.push(taskHtml);
        }

        //Joins array to single html string
        const tasksHtml = tasksHtmlList.join("\n");

        //Adds string to main html
        document.querySelector("#tasksList").innerHTML = tasksHtml;

    }

    getTaskById(id){
        //Loop through tasks
        for(let i in this.tasks){
            //Get task at index i
            const task = this.tasks[i];
            //If task is equal to id
            if (id == task.id){
                //Return the task
                return task ;
            }
        }
        //Return null if no task with id found
        return null;
    }

    save(){
        const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", tasksJson);
        const currentId = this.currentId.toString();
        localStorage.setItem("currentId", currentId);
    }

    load(){
        const tasksJson = localStorage.getItem("tasks");
        if (tasksJson != null) {
            this.tasks = JSON.parse(tasksJson);
        }

        const currentId = localStorage.getItem("currentId");
        if (currentId != null) {
            this.currentId = JSON.parse(currentId);
        }
    }
    
  
  }


  // So it can be included in test
  module.exports = TaskManager;


  