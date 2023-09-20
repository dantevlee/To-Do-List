const formElement = document.querySelector(".toDoForm");
const inputElement = document.querySelector(".inputToDo");
const ulEl = document.querySelector(".list");

// Initialize the list from local storage or create an empty array
let list = JSON.parse(localStorage.getItem("list")) || [];

// Function to update local storage with the current list
function updateLocalStorage() {
  localStorage.setItem("list", JSON.stringify(list));
}

function createToDoList(newToDo) {
  const newLine = document.createElement("div");
  newLine.classList.add("task");
  
  const textSpan = document.createElement("span");
  textSpan.classList.add("text");
  textSpan.textContent = newToDo;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.textContent = "X";

  deleteButton.addEventListener("click", function () {
    ulEl.removeChild(newLine);
    // Remove the task from the list
    const index = list.indexOf(newToDo);
    if (index !== -1) {
      list.splice(index, 1);
      updateLocalStorage(); // Update local storage
    }
  });

  ulEl.appendChild(newLine);
  newLine.appendChild(textSpan);
  newLine.appendChild(deleteButton);

}

function clearInputField() {
  inputElement.value = "";
}

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let newToDo = inputElement.value;
  if (newToDo.trim() !== "") {
    createToDoList(newToDo);
    list.push(newToDo); // Add the task to the list
    updateLocalStorage(); // Update local storage
    clearInputField(); // Clear the input field
  }
});

// Initialize the task list from the saved list
list.forEach((task) => {
  createToDoList(task);
});
