$(document).ready(readyNow);

let employeeInfo = [];

function readyNow(){
    $('#submitButton').on('click', grabInfo);
}//end readyNow

function grabInfo(){
    console.log('I was clicked!');
}