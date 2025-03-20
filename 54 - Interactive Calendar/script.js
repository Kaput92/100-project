const monthEl = document.getElementById("month");
const dayEl = document.getElementById("day");
const dayNumberEl = document.getElementById("day-number");
const yearEL = document.getElementById("year");

const date = new Date();

const month = date.getMonth()
monthEl.innerHTML = date.toLocaleDateString("en", { month: "long" });

dayNumberEl.innerHTML = date.getDate();
dayEl.innerHTML = date.toLocaleDateString("en", { weekday: "long" });

dayNumberEl.innerHTML = date.getDate();
yearEL.innerHTML = date.getFullYear();

