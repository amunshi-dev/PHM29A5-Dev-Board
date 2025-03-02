const completeBtn = document.getElementById('completeBtn')

//updating day date
function updateDate() {
 const now = new Date();
 
 const dayOptions = { weekday: "short" };
 const dateOptions = { month: "short", day: "numeric", year: "numeric" };
 
 document.getElementById("day").textContent = now.toLocaleDateString("en-US", dayOptions) + " ,";
 document.getElementById("date").textContent = now.toLocaleDateString("en-US", dateOptions);
}
updateDate();

