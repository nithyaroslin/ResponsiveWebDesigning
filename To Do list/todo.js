const ul = document.getElementById("todoList");
const input = document.querySelector("input");
const allLi = document.getElementsByName("li");
console.log(allLi);

const addNewTodo = (event) => {
  if (event.key === "Enter") {
    let newTask = event.target.value;
    let newLi = document.createElement("li");
    let taskWithSpan =
      '<span><i class="fa fa-trash"></i></span>  <i class="fa fa-edit"></i></span> ' +
      newTask;
    newLi.innerHTML = taskWithSpan;
    ul.appendChild(newLi);
    input.value = "";
  }
};

input.addEventListener("keydown", addNewTodo);

ul.addEventListener("click", function (e) {
  let target = e.target; // Clicked element
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
  }

  if (target.tagName === "I" && target.classList.contains("fa-trash")) {
    target.parentNode.parentNode.parentNode.removeChild(
      target.parentNode.parentNode
    );
  }

  if (target.tagName === "I" && target.classList.contains("fa-edit")) {
    const liItem = target.parentNode;
    let p = prompt("Edit your entry");
    let taskWithSpan =
      '<span><i class="fa fa-trash"></i></span>  <i class="fa fa-edit"></i></span> ' +
      p;
    liItem.innerHTML = taskWithSpan;
  }
});
