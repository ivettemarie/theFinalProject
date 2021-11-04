console.log("connected!")

 //variable with the Cards
 
const createTaskHtml = (name, description, assignedTo, dueDate, status) =>{ 
    let cardHtml = `<div class="card mx-auto" style="width: 18rem;">
                                <div class="card-body">
                                <h4 class="taskName">${name}</h4>
                                <h6 class="taskDescription">${description}</h6>
                                <h6 class="taskAssignedTo">${assignedTo}</h6>
                                <h6 class="taskDueDate">${dueDate}</h6>
                                <span class="taskStatus">${status}</span>
                                <button type="button" class="done-button btn btn-success">Done</button>
                                <a href="#" class="btn btn-primary">Delete</a>
                                </div>
                                 </div>`;


    return cardHtml;

    
}



class TaskManager {
    //Constructor - Runs when using new
    constructor(currentId = 0) {
      this.tasks = [];
      this.currentId = currentId;

       console.log(this.tasks)
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
        console.log(task,this.tasks)
        this.tasks.push(task);
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
            let taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
            //Adds task to html array
            tasksHtmlList.push(taskHtml);
        }

        //Joins array to single html string
        const tasksHtml = tasksHtmlList.join("\n");

        //Adds string to main html
        document.querySelector("#list-group").innerHTML = tasksHtml;

    }
    
    


  
  }




  