const formElement = document.querySelector(".toDoForm");
const buttonElement = document.querySelector(".submitButton");
const inputElement = document.querySelector(".inputToDo");
const ulEl = document.querySelector(".list");

buttonElement.addEventListener("click", (event) => {
  event.preventDefault();
  let newToDo = inputElement.value;
  if (newToDo.trim() !== "") {
    const newLine = document.createElement("div");
    newLine.classList.add("task");
    newLine.innerHTML = `
    <span class="text">${newToDo}</span>
    <button class="delete-button">X</button>
`;

    const deleteButton = newLine.querySelector(".delete-button");
    deleteButton.addEventListener("click", function () {
      ulEl.removeChild(newLine);
    });

    ulEl.appendChild(newLine)

    inputElement.value = ""; // Clear the input field
  }
});

function createToDoList(newToDo) {
  const deleteButton = document.createElement("button");
  newToDo.appendChild(deleteButton);
}
