function salaryX() {
    
    var wHours = document.getElementById("workHour").value;
    var extraH = document.getElementById("extraWorkHour").value;

    if(wHours < 4){
        extraH = 0;
    }

    var total = (wHours * 1000) + (extraH * 200);
//VALIDATE INPUT
    if(document.form.hours.selectedIndex == ""){
        alert('Please choose a value')
        return false
    }else{
//DISPLAY SALARY AND AMOUNT ON CLICK
     var salaryText = document.getElementById("salaryText").style.display = "block"
    var amount = document.getElementById("amount").style.display = "inline-block"
    }

    document.getElementById("cash").innerHTML = total;
    return false;
}       

//HIDE SALARY AND AMOUNT BEFORE CLICK
var salaryText = document.getElementById("salaryText").style.display = "none"
var amount = document.getElementById("amount").style.display = "none"
