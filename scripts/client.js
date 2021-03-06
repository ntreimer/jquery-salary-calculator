$(document).ready(readyNow);

let employeeInfo = [];
let monthlyCost = 0;

function readyNow(){
    $('#submitButton').on('click', grabInfo);

}//end readyNow

function grabInfo(){
    let newEmployee = {
        firstName: $('#inputFirstName').val(),
        lastName: $('#inputLastName').val(),
        employeeID: $('#inputID').val(),
        jobTitle: $('#inputJobTitle').val(),
        annualSalary: $('#inputSalary').val()
    }//end newEmployee
    employeeInfo.push(newEmployee);
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputJobTitle').val('');
    $('#inputSalary').val('');
    monthlyCost = calculateMonthlyCost(employeeInfo);
    console.log(monthlyCost);
}//end grabInfo

function calculateMonthlyCost(array){
    let totalSalary = 0;
    monthlyCost = 0;
    for (let i = 0; i < array.length; i++) {
        totalSalary += Number(array[i].annualSalary);
    }//end for
    monthlyCost = totalSalary / 12;
    return monthlyCost;
}//end calculateMonthlyCost