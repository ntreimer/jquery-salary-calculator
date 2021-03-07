$(document).ready(readyNow);

let employeeInfo = [];
let monthlyCost = 0;

function readyNow(){
    $('#submitButton').on('click', grabInfo);
    $('#tableBody').on('click', '.deleteButton', deleteRow);
}//end readyNow

function addToTable(object){
    $('#tableBody').append(`<tr>
    <td> ${object.firstName} </td>
    <td> ${object.lastName} </td>
    <td> ${object.employeeID} </td>
    <td> ${object.jobTitle} </td>
    <td> ${object.annualSalary} </td>
    <td style="text-align: center"> <button class="deleteButton">Delete</button> </td>
    </tr>`);
}//end addToTable

function calculateMonthlyCost(array){
    let totalSalary = 0;
    monthlyCost = 0;
    for (let i = 0; i < array.length; i++) {
        totalSalary += array[i].annualSalary;
    }//end for
    monthlyCost = (totalSalary / 12).toFixed(2);
    return monthlyCost;
}//end calculateMonthlyCost

function deleteRow(){
    $(this).parent().parent().remove();
}

function grabInfo(){
    //empty current monthlyCost
    //grab information from input fields and make an object
    let newEmployee = {
        firstName: $('#inputFirstName').val(),
        lastName: $('#inputLastName').val(),
        employeeID: Number($('#inputID').val()),
        jobTitle: $('#inputJobTitle').val(),
        annualSalary: Number($('#inputSalary').val())
    }//end newEmployee
    //push that object into the employeeInfo array
    employeeInfo.push(newEmployee);
    //append employee info to DOM
    addToTable(newEmployee);
    //calculate the monthly cost of all the employees
    monthlyCost = calculateMonthlyCost(employeeInfo);
    //display calculated monthly cost on DOM
    showMonthlyCost();
    //make monthly cost red if over $20k
    monthlyExceedCheck();
    //clear input fields of info
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputJobTitle').val('');
    $('#inputSalary').val('');
}//end grabInfo

function monthlyExceedCheck(){
    if(monthlyCost>20000){
        $('#totalMonthly').css("background-color", "red");
    }
}//end monthlyExceedCheck

function showMonthlyCost(){
    $('#totalMonthly').empty();
    $('#totalMonthly').append(`Total Monthly: $ ${monthlyCost}`);
}//end showMonthlyCost