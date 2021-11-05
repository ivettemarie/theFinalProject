var assert = require('assert');
var TaskManager = require("../js/taskManager.js");
describe('TaskManager', function() {
    
    describe('addTask()', function(){
        it("should add a new task to the task manager", function(){
            let taskManager = new TaskManager();
            taskManager.addTask("test", "test", "test", "test", "todo");
            assert.equal(taskManager.tasks.length, 1);
        })
    })

    describe('deleteTask()', function(){
        it("should delete a task from the task manager", function(){
            let taskManager = new TaskManager();
            taskManager.addTask("test", "test", "test", "test", "todo");
            taskManager.addTask("test", "test", "test", "test", "todo");
            taskManager.deleteTask(1);
            assert.equal(taskManager.tasks.length, 1);
            taskManager.deleteTask(2);
            assert.equal(taskManager.tasks.length, 0);
        })
    })

    describe('getTaskById()', function(){
        it("should get a task with the id given", function(){
            let taskManager = new TaskManager();
            taskManager.addTask("test", "test", "test", "test", "todo");
            taskManager.addTask("ivette","get coffee", "Jacaree", "never", "completed");
            let task1 = taskManager.getTaskById(2);
            assert.equal(task1.name, "ivette");
            assert.equal(task1.description, "get coffee");
            assert.equal(task1.assignedTo, "Jacaree");
            let task2 = taskManager.getTaskById(1);
            assert.equal(task2.name, 'test');
            
        })
    })

    describe('constructor()', function(){
        it("should initialize a new taskManager object correctly", function(){
            let taskManager = new TaskManager();
            assert.equal(taskManager.tasks.length, 0);
            assert.equal(taskManager.currentId, 0);
        })
    })
})