var total = 0;
function calculate() {
  document.getElementById("name").innerHTML = document.getElementById(
    "txtName"
  ).value;
  document.getElementById("mobile").innerHTML = document.getElementById(
    "txtMobile"
  ).value;
  document.getElementById("date").innerHTML = document.getElementById(
    "txtDate"
  ).value;
  document.getElementById("days").innerHTML = document.getElementById(
    "txtDays"
  ).value;
  document.getElementById("persons").innerHTML = document.getElementById(
    "txtPersons"
  ).value;

  days = document.getElementById("txtDays").value;
  persons = document.getElementById("txtPersons").value;

  var mcost;
  var adonName1 = "";
  var adonName2 = "";
  var adonName3 = "";
  var adonName4 = "";
  var adonCost;

  if (checkDelux.checked) {
    adonName1 += checkDelux.value;

    mcost = 2000;
  }
  if (checkSuite.checked) {
    adonName2 += checkSuite.value;

    mcost = 1000;
  }
  if (checkFood.checked) {
    adonName3 += checkFood.value;
    adonCost = 800;

    mcost = mcost + adonCost;
  }
  if (checkLocker.checked) {
    adonName4 += checkLocker.value;
    adonCost = 500;

    mcost = mcost + adonCost;
  }
  total = mcost * days + (persons * 500 - 500);
  document.getElementById("room1").innerHTML = adonName1;
  document.getElementById("room2").innerHTML = adonName2;
  document.getElementById("food").innerHTML = adonName3;
  document.getElementById("locker").innerHTML = adonName4;
  document.getElementById("total").innerHTML = total;
}

function confirm() {
  if (total > 0) {
    document.getElementById("total_amount").innerText = total;
  } else {
    alert("Enter Details");
  }
}
