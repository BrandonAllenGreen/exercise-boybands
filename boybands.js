

let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
let currentBand = "";
let currentVeggie = "";
let bandElement = document.getElementById("boy-bands");
let veggieElement = document.getElementById("vegetables");

for (let i = 0; i < 5; i++) {
  currentBand += "<li>" + bands[i] + "</li>";
  bandElement.innerHTML = currentBand;
 
  currentVeggie += "<li>" + vegetables[i] + "</li>";
  veggieElement.innerHTML = currentVeggie;
}

