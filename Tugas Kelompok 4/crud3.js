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
    formData["transaksi"] = document.getElementById("transaksi").value;
    formData["idbarang"] = document.getElementById("idbarang").value;
    formData["idpembeli"] = document.getElementById("idpembeli").value;
    formData["tanggal"] = document.getElementById("tanggal").value;
    formData["keterangan"] = document.getElementById("keterangan").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.transaksi;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idbarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.idpembeli;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tanggal;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.keterangan;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("transaksi").value = "";
    document.getElementById("idbarang").value = "";
    document.getElementById("idpembeli").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("keterangan").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("transaksi").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idbarang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("idpembeli").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tanggal").value = selectedRow.cells[3].innerHTML;
    document.getElementById("keterangan").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.transaksi;
    selectedRow.cells[1].innerHTML = formData.idbarang;
    selectedRow.cells[2].innerHTML = formData.idpembeli;
    selectedRow.cells[3].innerHTML = formData.tanggal;
    selectedRow.cells[4].innerHTML = formData.keterangan;
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
    if (document.getElementById("transaksi").value == "") {
        isValid = false;
        document.getElementById("transaksiValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("transaksiValidationError").classList.contains("hide"))
            document.getElementById("transaksiValidationError").classList.add("hide");
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
    cell1.innerHTML = data.transaksi;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.idbarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.idpembeli;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tanggal;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.keterangan;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("transaksi").value = "";
    document.getElementById("idbarang").value = "";
    document.getElementById("idpembeli").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("keterangan").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("transaksi").value = selectedRow.cells[0].innerHTML;
    document.getElementById("idBarang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("idpembeli").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tanggal").value = selectedRow.cells[3].innerHTML;
    document.getElementById("keterangan").value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.transaksi;
    selectedRow.cells[1].innerHTML = formData.idbarang;
    selectedRow.cells[2].innerHTML = formData.idpembeli;
    selectedRow.cells[3].innerHTML = formData.tanggal;
    selectedRow.cells[4].innerHTML = formData.keterangan;
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
    if (document.getElementById("transaksi").value == "") {
        isValid = false;
        document.getElementById("transaksiValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("transaksiValidationError").classList.contains("hide"))
            document.getElementById("transaksiValidationError").classList.add("hide");
    }
    return isValid;
}