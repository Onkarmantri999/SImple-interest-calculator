function updateRate() {
  // Update the rate value when the slider changes position.
  var rateVal = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateVal + " %"
}

function compute() {
  // Get Elements to work with.
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * years * rate / 100;
  var year = new Date().getFullYear() + parseInt(years);

  if (principal <= 0) {
    // Input validation: Alert when principal is smaller then or equal to 0, shift focus back to principal input box.
    alert("Enter a positive number");
    document.getElementById("principal").focus();
  } else {
    // Input validation passes: Proceed with the computation.
    document.getElementById("result").innerHTML = `<br />
    If you deposit <span class="highlight">` + principal + `</span>, <br />
    at an interest rate of <span class="highlight">` + rate + `</span>, <br />
    You will receive an amount of <span class="highlight">` + interest + `</span>, <br />
    in the year <span class="highlight">` + year + `</span>`;
  }
}
