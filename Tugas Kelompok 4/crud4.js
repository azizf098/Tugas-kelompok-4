var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["tglbayar"] = document.getElementById("tglbayar").value;
    formData["total"] = document.getElementById("total").value;
    formData["id"] = document.getElementById("id").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tglbayar;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.total;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("tglbayar").value = "";
    document.getElementById("total").value = "";
    document.getElementById("id").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tglbayar").value = selectedRow.cells[0].innerHTML;
    document.getElementById("total").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tglbayar;
    selectedRow.cells[1].innerHTML = formData.total;
    selectedRow.cells[2].innerHTML = formData.id;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("tglbayar").value == "") {
        isValid = false;
        document.getElementById("tglbayarValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tglbayarValidationError").classList.contains("hide"))
            document.getElementById("tglbayarValidationError").classList.add("hide");
    }
    return isValid;
}

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tglbayar;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.total;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.id;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("tglbayar").value = "";
    document.getElementById("total").value = "";
    document.getElementById("id").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tglbayar").value = selectedRow.cells[0].innerHTML;
    document.getElementById("total").value = selectedRow.cells[1].innerHTML;
    document.getElementById("id").value = selectedRow.cells[2].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tglbayar;
    selectedRow.cells[1].innerHTML = formData.total;
    selectedRow.cells[2].innerHTML = formData.id;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("tglbayar").value == "") {
        isValid = false;
        document.getElementById("tglbayarValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("tglbayarValidationError").classList.contains("hide"))
            document.getElementById("tglbayarValidationError").classList.add("hide");
    }
    return isValid;
}