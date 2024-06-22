
let form = document.getElementsByTagName('form')[0];
let today = new Date();
let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  
  let bornDay = document.getElementById('bornDate');
  let bornMonth = document.getElementById('bornMonth');
  let bornYear = document.getElementById('bornYear');

  
  if (!validate(bornDay, bornMonth, bornYear)) {
    years.textContent = "--";
    months.textContent = "--";
    days.textContent = "--";
    return;
  }

  
  bornDay = parseInt(bornDay.value);
  bornMonth = parseInt(bornMonth.value);
  bornYear = parseInt(bornYear.value);

  
  let born = new Date(bornYear, bornMonth - 1, bornDay);


  let diffYears = today.getFullYear() - born.getFullYear();
  let diffMonths = today.getMonth() - born.getMonth();
  let diffDays = today.getDate() - born.getDate();

  
  if (diffMonths < 0 || (diffMonths === 0 && diffDays < 0)) {
    diffYears--;
    diffMonths += 12;
  }

  if (diffDays < 0) {
    diffMonths--;
    diffDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  
  years.textContent = diffYears;
  months.textContent = diffMonths;
  days.textContent = diffDays;
});


function validate(bornDay, bornMonth, bornYear) {
  let isValid = true;
  let currentYear = new Date().getFullYear();


  if (bornDay.value === "" || isNaN(bornDay.value) || bornDay.value < 1 || bornDay.value > 31) {
    setError(0, "Must be a valid day");
    isValid = false;
  } else {
    clearError(0);
  }

  
  if (bornMonth.value === "" || isNaN(bornMonth.value) || bornMonth.value < 1 || bornMonth.value > 12) {
    setError(1, "Must be a valid month");
    isValid = false;
  } else {
    clearError(1);
  }

  if (bornYear.value === "" || isNaN(bornYear.value) || bornYear.value > currentYear) {
    setError(2, "Must be a valid year");
    isValid = false;
  } else {
    clearError(2);
  }

  if (isValid && (bornDay.value > new Date(bornYear.value, bornMonth.value, 0).getDate())) {
    setError(0, "Must be a valid day");
    isValid = false;
  }

  return isValid;
}


function setError(index, message) {
  document.getElementsByTagName("small")[index].textContent = message;
  document.getElementsByTagName("label")[index].style.color = "hsl(0, 100%, 67%)";
  document.getElementsByTagName("input")[index].style.borderColor = "hsl(0, 100%, 67%)";
}


function clearError(index) {
  document.getElementsByTagName("small")[index].textContent = "";
  document.getElementsByTagName("label")[index].style.color = "hsl(0, 1%, 44%)";
  document.getElementsByTagName("input")[index].style.borderColor = "hsl(0, 0%, 86%)";
}
