//FUNCTION FOR SALARY
function salaryX() {
    var wHours = document.getElementById("workHour").value;
    var extraH = document.getElementById("extraWorkHour").value;
//IF WORKING HOUR IS LESS THAN 4 HROURS EXTRA HOUR SHOULD NOT BE CONSIDERED
    if(wHours < 4){
        extraH = 0;
    }
//EQUATION
    var total = (wHours * 1000) + (extraH * 1200);
//VALIDATE INPUT
    if(document.form.hours.selectedIndex == ""){
        alert('Please choose a value')
        return false
    }else{
//DISPLAY SALARY AND AMOUNT ON CLICK
     var salaryText = document.getElementById("salaryText").style.display = "block"
    var amount = document.getElementById("amount").style.display = "inline-block"
    }
//OUTPUT
    document.getElementById("cash").innerHTML = total;
    return false;
}       

//HIDE SALARY AND AMOUNT BEFORE CLICK
var salaryText = document.getElementById("salaryText").style.display = "none"
var amount = document.getElementById("amount").style.display = "none"
