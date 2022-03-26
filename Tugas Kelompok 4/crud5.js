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
    formData["namaPembeli"] = document.getElementById("namaPembeli").value;
    formData["jk"] = document.getElementById("jk").value;
    formData["notlp"] = document.getElementById("notlp").value;
    formData["alamat"] = document.getElementById("alamat").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namaPembeli;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.jk;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.notlp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.alamat;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namaPembeli").value = "";
    document.getElementById("jk").value = "";
    document.getElementById("notlp").value = "";
    document.getElementById("alamat").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namaPembeli").value = selectedRow.cells[0].innerHTML;
    document.getElementById("jk").value = selectedRow.cells[1].innerHTML;
    document.getElementById("notlp").value = selectedRow.cells[2].innerHTML;
    document.getElementById("alamat").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namaPembeli;
    selectedRow.cells[1].innerHTML = formData.jk;
    selectedRow.cells[2].innerHTML = formData.notlp;
    selectedRow.cells[3].innerHTML = formData.alamat;
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
    if (document.getElementById("namaPembeli").value == "") {
        isValid = false;
        document.getElementById("namaPembeliValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaPembeliValidationError").classList.contains("hide"))
            document.getElementById("namaPemmbeliValidationError").classList.add("hide");
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
    cell1.innerHTML = data.namaPembeli;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.jk;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.notlp;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.alamat;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namaPembeli").value = "";
    document.getElementById("jk").value = "";
    document.getElementById("notlp").value = "";
    document.getElementById("alamat").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namaPembeli").value = selectedRow.cells[0].innerHTML;
    document.getElementById("jk").value = selectedRow.cells[1].innerHTML;
    document.getElementById("notlp").value = selectedRow.cells[2].innerHTML;
    document.getElementById("alamat").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namaPembeli;
    selectedRow.cells[1].innerHTML = formData.jk;
    selectedRow.cells[2].innerHTML = formData.notlp;
    selectedRow.cells[3].innerHTML = formData.alamat;
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
    if (document.getElementById("namaPembeli").value == "") {
        isValid = false;
        document.getElementById("namaPembeliValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaPembeliValidationError").classList.contains("hide"))
            document.getElementById("namaPembeliValidationError").classList.add("hide");
    }
    return isValid;
}