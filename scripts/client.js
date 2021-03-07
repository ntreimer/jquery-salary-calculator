$(document).ready(readyNow);

let employeeInfo = [];
let monthlyCost = 0;

function readyNow(){
    $('#submitButton').on('click', grabInfo);

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
}

function calculateMonthlyCost(array){
    let totalSalary = 0;
    monthlyCost = 0;
    for (let i = 0; i < array.length; i++) {
        totalSalary += array[i].annualSalary;
    }//end for
    monthlyCost = totalSalary / 12;
    return monthlyCost;
}//end calculateMonthlyCost

function grabInfo(){
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
    //calculate the monthly cost of all the employees
    monthlyCost = calculateMonthlyCost(employeeInfo);
    //append employee info to DOM
    addToTable(newEmployee);
    //clear input fields of info
    $('#inputFirstName').val('');
    $('#inputLastName').val('');
    $('#inputID').val('');
    $('#inputJobTitle').val('');
    $('#inputSalary').val('');
}//end grabInfo

