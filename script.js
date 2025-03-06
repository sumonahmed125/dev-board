const theme = document.getElementById("theme");
const date = document.getElementById("date");
const weekday = document.getElementById("weekday");
const time = document.getElementById("time");
const completeTask = document.getElementById("complete");
const assignedTask = document.getElementById("asigned");
const btn = document.querySelectorAll("#btn");
const tasks = document.getElementById("tasks");

document.getElementById("blogs").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./blog.html";
});

// theme background color
let color = ["#F4F7FF", "#F4F8D3", "#FBF3B9", "#B7B1F2", "#B9B28A", "#91AC8F"];
let count = 0;
theme.addEventListener("click", function (event) {
  event.preventDefault();
  count++;
  if (count < color.length) {
    document.body.style.backgroundColor = color[count];
  } else {
    count = 0;
    document.body.style.backgroundColor = color[count];
  }
});

// date
const currentDate = new Date();
const times = {
  month: "short",
  day: "2-digit",
  year: "numeric",
};

const formattedDate = currentDate
  .toLocaleDateString("en-US", times)
  .replace(",", "");
weekday.innerHTML = currentDate.toLocaleDateString("en-US", {
  weekday: "short",
});
time.innerHTML = formattedDate;

// complete button
let taskNumber = parseInt(completeTask.innerHTML);
let availableTask = parseInt(assignedTask.innerHTML);
let c = 0;
btn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    c++;
    if (c < 6) {
      alert("Board updated successfully!");
    } else {
      alert("Board updated successfully!");
      alert("Congrates!! You have completed all tasks");
    }

    completeTask.innerHTML = taskNumber + 1;
    taskNumber = parseInt(completeTask.innerHTML);

    assignedTask.innerHTML = availableTask - 1;
    availableTask = parseInt(assignedTask.innerHTML);
    btn.disabled = true;

    const card = this.parentElement.parentElement;
    const title = card.querySelector("#title").textContent;
    const completedItem = document.createElement("p");

    let now = new Date();
    completedItem.textContent = `you have completed the task ${title} at ${now.toLocaleTimeString()}`;
    completedItem.classList.add("completed-item");

    tasks.appendChild(completedItem);
  });
});

// remove tasks
document.getElementById("clearTasks").addEventListener("click", () => {
  tasks.innerHTML = "";
});
