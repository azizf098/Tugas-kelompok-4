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
    formData["namaBarang"] = document.getElementById("namaBarang").value;
    formData["idbarang"] = document.getElementById("idbarang").value;
    formData["harga"] = document.getElementById("harga").value;
    formData["stok"] = document.getElementById("stok").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namaBarang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idbarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.harga;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stok;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namaBarang").value = "";
    document.getElementById("idbarang").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namaBarang").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idbarang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("harga").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stok").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namaBarang;
    selectedRow.cells[1].innerHTML = formData.idbarang;
    selectedRow.cells[2].innerHTML = formData.harga;
    selectedRow.cells[3].innerHTML = formData.stok;
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
    if (document.getElementById("namaBarang").value == "") {
        isValid = false;
        document.getElementById("namaBarangValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaBarangValidationError").classList.contains("hide"))
            document.getElementById("namaBarangValidationError").classList.add("hide");
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
    cell1.innerHTML = data.namaBarang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idbarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.harga;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stok;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namaBarang").value = "";
    document.getElementById("idbarang").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("stok").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namaBarang").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idBarang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("harga").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stok").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namaBarang;
    selectedRow.cells[1].innerHTML = formData.idbarang;
    selectedRow.cells[2].innerHTML = formData.harga;
    selectedRow.cells[3].innerHTML = formData.stok;
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
    if (document.getElementById("namaBarang").value == "") {
        isValid = false;
        document.getElementById("namaBarangValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namaBarangValidationError").classList.contains("hide"))
            document.getElementById("namaBarangValidationError").classList.add("hide");
    }
    return isValid;
}