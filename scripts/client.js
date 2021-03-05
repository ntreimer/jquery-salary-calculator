$(document).ready(readyNow);

let employeeInfo = [];

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
    console.log(newEmployee);
}