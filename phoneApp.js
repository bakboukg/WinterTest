// JavaScript for Phone Application Demo Program
// Jim Skon, Kenyon College, 2017
var operation;  // operation
var editid;

$(document).ready(function () {
    $('.editdata').hide();
    $("#search-btn").click(getMatches);
    $("#add-btn").click(addEntry);
    operation = "Find Last";
    $("#clear").click(clearResults);

    $(".dropdown-menu li a").click(function(){
	console.log("pick!"+$(this).text());
	$(this).parents(".btn-group").find('.selection').text($(this).text());
	operation=$(this).text();
	changeOperation(operation);
    });


});

changeOperation(operation);

function changeOperation(operation){
    if(operation=="Add Entry"){
	$('#addmessage').empty();
	$('.inputdata').show();
	$('.searchbox').hide();
	$('.results').hide();
	$('.editdata').hide();}
    else{
	$('.editdata').hide();
	$('.inputdata').hide();
	$('.results').show();
	$('.searchbox').show();
    }    
}

// Build output table from comma delimited list
function buildTable(list) {
    var a = list.split(",");
    if (a.length < 1) {
	return "<h3>Internal Error</h3>";
    } else if (a.length == 1) {
	return "<h3>Nothing Found</h3>";
    } else {
	var result = '<table class="w3-table-all w3-hoverable" border="2"><tr><th>First</th><th>Last</th><th>Phone</th><th>Type</th><th>Action</th><tr>';
	var aLen = a.length;
	for (var i = 1; i < aLen; i+=5) {
	    result += "<tr><td class='first'>"+a[i]+"</td><td class='last'>"+a[i+1]+"</td><td class='phone'>"+a[i+2]+"</td><td class='type'>"+a[i+3]+"</td>";
	    result += "<td><button type='button' ID='"+a[i+4]+"' class='btn btn-primary btn-sm edit'>Edit</button> ";
	    result += "<button type='button' ID='"+a[i+4]+"' class='btn btn-primary btn-sm delete'>Delete</button></td></tr>";
	}
	result += "</table>";
	
	return result;
    }
}

function processEdit(){
    $('#searchresults').empty();
    $('.editdata').show();
    $("#edit-btn").click(editEntry);
    console.log("Edit Record: " + $(this).attr('ID'));
    var row=$(this).parents("tr");
    console.log("First name of record: "+ $(row).find('.first').text());
    editid=$(this).attr('ID');

    $('#editfirst').val( $(row).find('.first').text());
    $('#editlast').val( $(row).find('.last').text());
    $('#editphone').val( $(row).find('.phone').text());
    $('#edittype').val( $(row).find('.type').text());
}

function editDone() {
    $('#editmessage').text($('#editfirst').val()+" "+$('#editlast').val()+ " SAVED");
}
function editEntry(){
    console.log("Attempting to edit an entry");
    console.log("Firstname:" + $('#editfirst').val() + "ID:" + editid);
    $('#searchresults').empty();
    $.ajax({
	url: '/cgi-bin/skon_phoneAppComplete.cgi?editid='+editid +'&editfname='+$('#editfirst').val()+'&editlname='+$('#editlast').val()+'&editphone='+$('#editphone').val()+'&edittype='+$('#edittype').val()+'&operation=edit',
	dataType: 'text',
	success: editDone(),
	error: function(){alert("Error: Something went wrong");}
    });
}


function processDelete(){
    console.log("Attempting to delete an entry");
    $('#searchresults').empty();
    var id=$(this).attr('ID');
    $.ajax({
	url: '/cgi-bin/skon_phoneAppComplete.cgi?deleteid='+$(this).attr('ID')+'&operation=delete',
	dataType: 'text',
	success: function(){alert("Deleted Record: " +id );},
	error: function(){alert("Error: Something went wrong");}
    });
}
function processResults(results) {
    $('#editmessage').empty();
    $('#addmessage').empty();
    console.log("Results:"+results);
    $('#searchresults').empty();
    $('#searchresults').append(buildTable(results));
    $(".edit").click(processEdit);
    $(".delete").click(processDelete);
    $('#addmessage').text($('#addfirst').val()+" "+$('#addlast').val()+ " ADDED");
    
}

function clearResults() {
    $('#searchresults').empty();
}

function getMatches(){
    $('.editdata').hide();
    $('#searchresults').empty();
    $.ajax({
	url: '/cgi-bin/skon_phoneAppComplete.cgi?find='+$('#search').val()+'&operation='+operation,
	dataType: 'text',
	success: processResults,
	error: function(){alert("Error: Something went wrong");}
    });
}

function addEntry(){
    console.log("Attempting to add an entry");
    console.log("Firstname:" + $('#addfirst').val());
    $('#searchresults').empty();
    $.ajax({
	url: '/cgi-bin/skon_phoneAppComplete.cgi?afname='+$('#addfirst').val()+'&alname='+$('#addlast').val()+'&aphone='+$('#addphone').val()+'&atype='+$('#addtype').val()+'&operation='+operation,
	dataType: 'text',
	success: processResults,
	error: function(){alert("Error: Something went wrong");}
    });
}
    

    
