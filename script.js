function getData(){
$.ajax({
    url: 'https://api.catena.id/v1/vakschain/fabric/record/list',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});
}

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); 
    row.append($("<td>" + rowData.nik + "</td>"));
    row.append($("<td>" + rowData.date + "</td>"));
    row.append($("<td>" + rowData.gender + "</td>"));
    row.append($("<td>" + rowData.age + "</td>"));
    row.append($("<td>" + rowData.location + "</td>"));
    row.append($("<td>" + rowData.health_record + "</td>"));
    row.append($("<td>" + rowData.status + "</td>"));
}

function sendData() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.catena.id/v1/vakschain/fabric/record/register";

    var data = JSON.stringify({
        nik: document.getElementById("nik").value,
        date: document.getElementById("date").value,
        gender: document.getElementById("gender").value,
        age: document.getElementById("age").value,
        location: document.getElementById("location").value,
        health_record: document.getElementById("health_record").value,
        status: document.getElementById("status").value,


    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {               
        console.log (this.responseText);
    };

    xhr.send(data);
    return false;
}

function updateData() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.catena.id/v1/vakschain/fabric/record/update";

    var data = JSON.stringify({
        nik: document.getElementById("nik3").value,
        date: document.getElementById("date3").value,
        gender: document.getElementById("gender3").value,
        age: document.getElementById("age3").value,
        location: document.getElementById("location3").value,
        health_record: document.getElementById("health_record3").value,
        status: document.getElementById("status3").value,


    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {               
        console.log (this.responseText);
    };

    xhr.send(data);
    return false;
}

function deleteData() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.catena.id/v1/vakschain/fabric/record/delete";

    var data = JSON.stringify({
        nik: document.getElementById("nik2").value,



    });

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onload = function () {               
        console.log (this.responseText);
    };

    xhr.send(data);
    return false;
}