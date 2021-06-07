$.ajax({
    url: 'https://api.catena.id/v1/vakschain/fabric/record/list',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});

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