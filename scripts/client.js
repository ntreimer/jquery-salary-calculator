$(document).ready(readyNow);

let employeeInfo = [];
let monthlyCost = 0;

function readyNow(){
    $('#submitButton').on('click', grabInfo);

}//end readyNow

function grabInfo(){
    //grab information from input fields and make an object
    let newEmployee = {
        firstName: $('#inputFirstName').val(),
        lastName: $('#inputLastName').val(),
        employeeID: $('#inputID').val(),
        jobTitle: $('#inputJobTitle').val(),
        annualSalary: $('#inputSalary').val()
    }//end newEmployee
    //push that object into the employeeInfo array
    employeeInfo.push(newEmployee);
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputJobTitle').val('');
    $('#inputSalary').val('');
    //calculate the monthly cost of all the employees
    monthlyCost = calculateMonthlyCost(employeeInfo);
    //append employee info to DOM
    
    
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