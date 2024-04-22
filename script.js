function addTask() {
  let item = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");
  let completedTasks = document.getElementById("completedTasks");

  if (item.value.trim() !== "") {
    let make_li = document.createElement("li");
    make_li.style.display = "flex";
    make_li.style.justifyContent = "space-between";

    make_li.appendChild(document.createTextNode(item.value));

    let buttonWrapper = document.createElement("div");
    buttonWrapper.style.display = "flex";
    buttonWrapper.style.gap = "0.5rem";

    let completeButton = document.createElement("SPAN");
    let completeTxt = document.createTextNode("\u2713");
    completeButton.className = "btn btn-success";
    completeButton.appendChild(completeTxt);

    completeButton.onclick = function () {
      make_li.classList.toggle("completed");
      if (make_li.classList.contains("completed")) {
        completedTasks.appendChild(make_li);
      } else {
        taskList.appendChild(make_li);
      }
    };

    completeButton.style.marginRight = "0.5rem";

    let closeButton = document.createElement("SPAN");
    let closeTxt = document.createTextNode("\u00D7");
    closeButton.className = "btn btn-danger";
    closeButton.appendChild(closeTxt);

    closeButton.onclick = function () {
      make_li.remove();
    };

    buttonWrapper.appendChild(completeButton);
    buttonWrapper.appendChild(closeButton);

    make_li.appendChild(buttonWrapper);

    make_li.style.margin = "0.2rem";

    taskList.appendChild(make_li);

    item.value = "";
  } else {
    alert("please enter a value to item");
  }
}
