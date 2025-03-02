let completeBtn = document.querySelectorAll('.completeBtn')

//updating day date
function updateDate() {
 const now = new Date();
 
 const dayOptions = { weekday: "short" };
 const dateOptions = { month: "short", day: "numeric", year: "numeric" };
 
 document.getElementById("day").textContent = now.toLocaleDateString("en-US", dayOptions) + " ,";
 document.getElementById("date").textContent = now.toLocaleDateString("en-US", dateOptions);
}
updateDate();

// discover to blogs
const discoverBtn = document.getElementById('discoverBtn')
console.log(discoverBtn)
discoverBtn.addEventListener('click', () => {
 window.location.href = './QnA.html'
})

//remaining task
const taskRemain = document.getElementById('remaining-task')

//completed task
let taskCompleted = document.getElementById('completed-task')

console.log(taskRemain, taskCompleted)

function increaseTask() {
 let converted = Number(taskCompleted.textContent)
 converted++
 return taskCompleted.textContent = String(converted)
}

for (let e = 0; e < completeBtn.length; e++) {
 completeBtn[e].addEventListener('click', decreaseTask)
 
}
function decreaseTask() {
 let converted = Number(taskRemain.textContent)
 converted--
 taskRemain.textContent = String(converted).padStart(2, '0')
}

//activity log
const clearButton = document.getElementById('clearBtn');
const logContainer = document.getElementById('logContainer');

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// add log entry 
function addLogEntry() {
  const newLogEntry = document.createElement('p');
  const currentTime = formatTime(new Date());
  
  newLogEntry.classList.add('text-text/70', 'p-4', 'bg-background', 'rounded-lg');
  newLogEntry.textContent = `You have Completed The Task Add Dark Mode at ${currentTime}`;
  logContainer.appendChild(newLogEntry);
}

// clear  entries
function clearLogs() {
  logContainer.innerHTML = '';
}

// addButton.addEventListener('click', addLogEntry);
clearButton.addEventListener('click', clearLogs);