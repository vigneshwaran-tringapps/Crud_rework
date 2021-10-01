var selectedRow = null
function onFormSubmit() {
        var formData = readFormData();
        selectedRow == null ? insertNewRecord(formData) : updateRecord(formData);
        resetForm();   
}
function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["age"] = document.getElementById("age").value;
    formData["gender"] = document.querySelector('input[name="gender"]:checked').value;
    formData["hobby"] = document.getElementById("hobby").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.age;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.hobby;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = ` <button id="btn1" onClick="onEdit(this)">Edit</button>
                        <button id="btn2" onClick="onDelete(this)">Delete</button>`;
}
function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("age").value = "";
    var gender = document.getElementsByClassName("gender");
    for(index = 0; index<gender.length; index++)
        gender[index].checked = false;
    document.getElementById("hobby").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("age").value = selectedRow.cells[1].innerHTML;
    var gender = selectedRow.cells[2].innerHTML;
    if(gender=="Male")
        document.getElementById("male").checked=true;
    else
        document.getElementById("female").checked=true;
    document.getElementById("hobby").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.gender;
    selectedRow.cells[3].innerHTML = formData.hobby;
}
function onDelete(td) {
    if(confirm("Are you sure to Delete this record?"))
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
}