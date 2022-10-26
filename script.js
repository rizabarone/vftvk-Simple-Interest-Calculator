
function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var result = principal * years * rate / 100;
    var years_result = new Date().getFullYear() + parseInt(years);
  
    document.getElementById("result").innerHTML = `
      If you deposit <mark> ${principal} </mark>
      <br/> at an interest rate of
      <mark> ${rate} %</mark><br/>.
      You will receive an amount of <mark> ${result} </mark>
      <br/> in the year <mark> ${years_result} </mark><br/>`;

      if (principal == 0) || (principal < 0) {
          alert("Enter a positive number");
      }
  }
        

function updateRate(onchange) 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}


