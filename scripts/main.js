//updating day date
function updateDate() {
  const now = new Date();

  const dayOptions = { weekday: "short" };
  const dateOptions = { month: "short", day: "numeric", year: "numeric" };

  document.getElementById("day").textContent =
    now.toLocaleDateString("en-US", dayOptions) + " ,";
  document.getElementById("date").textContent = now.toLocaleDateString(
    "en-US",
    dateOptions
  );
}
updateDate();

// discover to blogs
const discoverBtn = document.getElementById("discoverBtn");
discoverBtn.addEventListener("click", () => {
  window.location.href = "./blogs.html";
});

let remainingTask = document.querySelectorAll(".task-card").length;
let completedTask = 0;

// let remainStatus = document.getElementById("remaining-task");
let completeStatus = document.getElementById("completed-task").textContent;

const completeBtn = document.querySelectorAll(".completeBtn");
const logContainer = document.getElementById("logContainer");

function updateTaskCounts() {
  alert("Board had been updated successfully.");

  // disabling the button
  this.disabled = true;
  this.classList.add("opacity-20");

  //targetting card
  const taskCard = this.closest(".task-card");
  //  targetting the task-name
  const taskName = taskCard.children[1].textContent;

  //remaining task
  const taskRemain = document.getElementById("remaining-task");
  //completed task
  const taskComplete = document.getElementById("completed-task");

  remainingTask--;
  if (remainingTask == 0) {
    alert("Congratulations! All task has been completed.");
  }
  taskRemain.textContent = remainingTask;

  completedTask++;
  taskComplete.textContent = completedTask + parseInt(completeStatus);

  // activity log
  // add log entry
  function addLogEntry() {
    const newLogEntry = document.createElement("p");
    const currentTime = formatTime(new Date());

    newLogEntry.classList.add(
      "text-text/70",
      "p-4",
      "bg-background",
      "rounded-lg"
    );
    newLogEntry.textContent = `You have Completed The Task ${taskName} at ${currentTime}`;
    logContainer.appendChild(newLogEntry);
  }
  addLogEntry();
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

completeBtn.forEach((button) => {
  button.addEventListener("click", updateTaskCounts);
});

const clearButton = document.getElementById("clearBtn");
// clear  entries
function clearLogs() {
  logContainer.innerHTML = "";
}
clearButton.addEventListener("click", clearLogs);

// themeGenareator

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let randomColor = `rgba(${r},${g},${b},0.2)`;

  document.body.style.backgroundColor = randomColor;
});
