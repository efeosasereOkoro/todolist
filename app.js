const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const prioritySelect = document.querySelector("#priority-select");
const list = document.querySelector("#todo-list");
const sortButton = document.querySelector("#sort-button");
const dueDateInput = document.querySelector("#due-date");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value === "") {
    return;
  }
  const newItem = document.createElement("li");
  newItem.classList.add("list-group-item", "d-flex", "align-items-center", "my-todo-item");

  // Add the task's text
  newItem.innerHTML = `<span class="task-text">${input.value}</span>`;
  newItem.dataset.priority = prioritySelect.value;
  newItem.dataset.dueDate = dueDateInput.value;

  // Add the priority value to the list item
  const priority = prioritySelect.value;
  newItem.innerHTML += `<span class="ml-auto">Priority: ${priority}</span>`;

  // Add the due date to the list item
  const dueDate = dueDateInput.value;
  newItem.innerHTML += `<span class="ml-auto">Due: ${dueDate}</span>`;

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "ml-auto", "delete-button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", () => {
    newItem.remove();
  });
  // Append the delete button to the new item
  newItem.appendChild(deleteButton);
  
  //Add the edit button to the task
  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary", "ml-2", "edit-button");
  editButton.innerHTML = "Edit";
  newItem.appendChild(editButton);

  // Append the new item to the list
  list.appendChild(newItem);
  
  // Add click event listener to the edit button
  editButton.addEventListener("click", (event) => {
    //Get the task's text element
    const taskText = newItem.querySelector(".task-text");
    //Make the task's text element editable
    taskText.contentEditable = true;
    //Focus on the task's text element
    taskText.focus();
  });
  //Add blur event listener to the task's text element
  newItem.addEventListener("blur", (event) => {
  //Get the task's text element
  const taskText = newItem.querySelector(".task-text");
  //Make the task's text element non-editable
  taskText.contentEditable = false;
  //Save the changes to the task
  //You can add the code for saving the changes here
  const newTaskText = taskText.textContent;
  const newPriority = prioritySelect.value;
  //You can save the new task text and priority to the server or local storage here
});})