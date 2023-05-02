function addTodo(){
    var todoInput = document.getElementById("todo-input");
    var addButton = document.getElementById("button");
    var tasklist = document.getElementById("list");

    var todoText = todoInput.value;

    var add = document.createElement("li");
    var text = document.createTextNode(todoInput.value);
    add.appendChild(text);
    tasklist.appendChild(add);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    add.appendChild(checkbox);
}