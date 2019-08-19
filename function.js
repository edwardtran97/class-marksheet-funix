var list = []; // list of Students

$(document).ready(function() {
	//Add click event
	$("#insert").click(function() {
		clickInsert();
	});

	$("#calculate").click(function() {
		showMedium();
	});	

	$("#hsg").click(function() {
		showGoodStudent();
	});		
});

/* Check the value entered */
function clickInsert() {

	// Get Input
	var fullname = $("#fullname").val();
	var math = $("#math").val();
	var physical = $("#physical").val();
	var chemistry = $("#chemistry").val();
	if(fullname == "") {
		alert("Missing fullname"); // Alert missing fullname
		return false;
	} 
	if(math == "") {
		alert("Enter Math score from 0 to 10"); // Alert enter score from 0 to 10
		return false;
	}
	if(physical == "") {
		alert("Enter Physical score from 0 to 10"); // Alert enter score from 0 to 10
		return false;
	}
	if(chemistry == "") {
		alert("Enter Chemistry score from 0 to 10"); // Alert enter score from 0 to 10
		return false;
	}
	
	// Reset form input 
	$("input").val("");
	
	// Add to Array
	var student = new Student(fullname, math, physical, chemistry);
	list.push(student);

	// Update on HTML
	addRow(student, list.length, false);
}


/* Add row into List */
function addRow(student, order_number, gpa) {	
	// Add new row into table
	var row = $("<tr></tr>").attr("id", order_number);
	$("tbody").append(row);

	// Add cell
	$("#" + order_number).append($("<td></td>").text(order_number));
	$("#" + order_number).append($("<td></td>").text(student.fullname));
	$("#" + order_number).append($("<td></td>").text(student.math));
	$("#" + order_number).append($("<td></td>").text(student.physical));
	$("#" + order_number).append($("<td></td>").text(student.chemistry));

	// Calculate GPA
	if(gpa == true) {
		$("#" + order_number).append($("<td></td>").text(student.medium));
	} else {
		$("#" + order_number).append($("<td></td>").text("?"));
	}
}

function Student(fullname, math, physical, chemistry) {
	this.fullname = fullname;
	this.math = parseInt(math);
	this.physical = parseInt(physical);
	this.chemistry = parseInt(chemistry);

	// The average scoring formula
	this.medium = (this.math + this.physical + this.chemistry) / 3; 
}

/* Show GPA */
function showMedium() {
	// Clear table
	$("tbody").empty();

	//Show
	for (var i = 0; i < list.length; i++) {
		addRow(list[i],i + 1, true);
	}
}

/* Show good student */
function showGoodStudent() {
	// Find good students and show
	for (var i = 0; i < list.length; i++) {
		if(list[i].medium >= 8.0) {
			$("#"+(i + 1)).addClass("goodStudent");
		}
	}
}