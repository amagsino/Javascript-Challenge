// from data.js
var tableData = data;
var tbody = d3.select("tbody");

tableData.forEach(alien => {
	var row =tbody.append("tr");
	Object.entries(alien).forEach(([key,value]) => {
		var cell = row.append("td");
		cell.text(value);
	});
});


var button = d3.select("button");
button.on("click", function() {
	var filteredData = tableData;

	var inputDate = d3.select("#datetime");
	var inputDateValue = inputDate.property("value");
	if (inputDateValue != "") {
		filteredData = filteredData.filter(alien => alien.datetime === inputDateValue);
	}
	var inputCity = d3.select("#city");
	var inputCityValue = inputCity.property("value");
	if (inputCityValue != "") {
		filteredData = filteredData.filter(alien => alien.city.toLowerCase() === inputCityValue.toLowerCase());
	}
	var inputState = d3.select("#state");
	var inputStateValue = inputState.property("value");
	if (inputStateValue != "") {
		filteredData = filteredData.filter(alien => alien.state.toLowerCase() === inputStateValue.toLowerCase());
	}
	var inputCountry = d3.select("#country");
	var inputCountryValue = inputCountry.property("value");
	if (inputCountryValue != "") {
		filteredData = filteredData.filter(alien => alien.country.toLowerCase() === inputCountryValue.toLowerCase());
	}
	var inputShape = d3.select("#shape");
	var inputShapeValue = inputShape.property("value");
	if (inputShapeValue != "") {
		filteredData = filteredData.filter(alien => alien.shape.toLowerCase() === inputShapeValue.toLowerCase());
	}
	
	tbody.html("")
	filteredData.forEach(alien => {
		var row = tbody.append("tr");
		Object.entries(alien).forEach(([key, value]) => {
			var cell = row.append("td");
			cell.text(value);
		});
	});
});