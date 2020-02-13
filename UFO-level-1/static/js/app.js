// from data.js
var tableData = data;
var tbody = d3.select("tbody");

function buildtable(data) {
    tbody.html("");
    data.forEach(data_row => {
        var row = tbody.append("tr");
        Object.values(data_row).forEach(val => {
            var cell = row.append("td");
            cell.text(val);
        });
    });
};

function handleclick() {
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }; 
    buildtable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleclick);
buildtable(tableData);