var notImportant = "fa-regular fa-star";
var importantIcon = "fa-solid fa-star";
var isImportant = false;


function toggleImportant(){
if(isImportant){
    console.log("")
    //change it to not important
    isImportant = false; 
    $("#formIcon")
    .removeClass (importantIcon)
    .addClass (notImportantIcon);
}
else{
    // change it to Important
    isImportant = true;
    $("#formIcon")
    .removeClass (notImportantIcon)
    .addClass (importantIcon);
}
}

function toggleImportant(){

}

function toggleView (){
    if(isVisible) {
        //hide it 
        isVisible = false;
        $("#form").hide();
    }
    else{
        isVisible = true;
        $("#form").show();
    }
}

function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let category = $("#selCategory").val();
    let dueDate = $("#selDueDate").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();

    console.log(title, desc, category, dueDate, priority, color);


/**
 * JS
 * Object literal
 * object constructor
 * class
 * steps: create a class to represent tasks and objects 
 */


let task = new Task(isImportant, title, desc, category, dueDate, priority, color);
console.log(task);
displayTask(task);
}

function displayTask(task){
    let icon = "";
    if(task.isImportant){
        icon = `<i class = '${importantIcon}'></i>`;

    }
    else {
        icon = `<i class='${notImportantIcon}'></i>`;
    }
// let icon = `<i class='${task.isImportant ? importantIcon : notImportantIcon}'></i>`;

let syntax = `<div class='task' style"border: 2px solid ${task.color}">
<div class='info'>

${icon}

    <h5>${task.title}</h5>
    <p>${task.description}</p>
</div>

<label class='category'>${task.category}</label>

<div class='details'>
    <label>${task.dueDate}</label>
    <label>${task.priority}</label>
</div>
</div>`;

$("#pending-tasks").append(syntax);  /**append means to add  */

}

function init(){
    console.log("Task manager");

    //hook events
    $("#formIcon").click(toggleImportant);
    $("#toggleView").click(toggleView);
    $("#btnSave").click(saveTask);

    //load data
}

window.onload = init;


