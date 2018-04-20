// JavaScript for Phone Application Demo Program
// Jim Skon, Kenyon College, 2017
var operation;  // operation
var editid;
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.2.1.min.js";


$(document).ready(function () {
    $('#VolunteerList').hide();
	$('#VolInfo').hide();
	$('#VolInfoTitle').hide();
	console.log("hidden");
    operation = "SearchAll";


	  $('#SearchOptions li a').click(function(){
	console.log("pick!"+$(this).text());
	//$(this).parents(".btn-group").find('.selection').text($(this).text());
	operation=$(this).text();
	//changeOperation(operation);
	  });
	
	 $("#editEntry").click(function(){
		 $('#VolInfo').show();
		$('#VolInfoTitle').show();
		
});
});

 var response = prompt("Enter Password:");
		
while (response != "123")
{
	response = prompt("Wrong Password, please re-enter:");
}
alert("Hello, Molly" );



changeOperation(operation);
  function changeOperation(operation){

    if(operation=="SearchAll"){
	$('#VolunteerList').show();

       }
	else {
		getMatches();
	$('#VolunteerList').hide();
	    $('#VolInfo').hide();
	$('#VolInfoTitle').hide();

       }
	
}

// Build output table from comma delimited list
function buildTable(list) {
	
  /*  var a = list.split(",");
    if (a.length < 1) {
	return "<h3>Internal Error</h3>";
    } else if (a.length == 1) {
	return "<h3>Nothing Found</h3>";
    } else {
    */
	var result = '<table class="table table-hover table-bordered" style="font-size:12px" >';
	result += '<thead class="thead-dark tablehead-center">';
	//var aLen = a.length;
	//for (var i = 1; i < aLen; i+=5) {
	    result += '<tr>';
                      result +=    '<th scope="col">First</th>';
                      result +=    '<th scope="col">Last</th>';
                      result +=    '<th scope="col">Phone Number</th>';
			result +=  '<th scope="col">Options</th>';
                     result +=   '</tr>';
                    result +=  '</thead>';
                     result += '<tbody>';
                    result +=   ' <tr>';
                    result +=    '  <td class="table-center">Mark</td>';
                    result +=     ' <td class="table-center">Otto</td>';
                     result +=     '<td class="table-center">(555) 555-5555</td>';
			result +='<td class="table-center"><button type="button" id="one" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                     result +=   '</tr>';
                     result +=   '<tr>';
                      result +=   ' <td class="table-center">Jacob</td>';
                      result +=    '<td class="table-center">Thornton</td>';
                      result +=    '<td class="table-center">(555) 555-5555</td>';
			result += '<td class="table-center"><button type="button"  id="two" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                      result +=  '</tr>';
                      result +=  '<tr>';

                      result +=   ' <td class="table-center">Larry</td>';
                          result +='<td class="table-center">the Bird</td>';
                         result +=  ' <td class="table-center">(555) 555-5555</td>';
			  result += '<td class="table-center"><button type="button"  id="three" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                      result +=    '</tr>';
                      result +=    '<tr>';

                       result +=    ' <td class="table-center">Mark</td>';
                          result +=  '<td class="table-center">Otto</td>';
                         result +=   '<td class="table-center">(555) 555-5555</td>';
			  result += '<td class="table-center"><button type="button"  id="four" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                        result +=  '</tr>';
                       result +=   '<tr>';

                       result +=    ' <td class="table-center">Jacob</td>';
                      result +=      '<td class="table-center">Thornton</td>';
                      result +=      '<td class="table-center">(555) 555-5555</td>';
		  result +=	'<td class="table-center"><button type="button"  id="five" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                      result +=  '  </tr>';
                       result +=  ' <tr>';

                        result +=  '  <td class="table-center">Larry</td>';
                      result +=    '<td class="table-center">the Bird</td>';
                      result +=    '<td class="table-center">(555) 555-5555</td>';
			result += '<td class="table-center"><button type="button"  id="six" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                   result +=     '</tr>';
                    result +=    '<tr>';

                      result +=   ' <td class="table-center">Larry</td>';
                      result +=    '<td class="table-center">the Bird</td>';
                      result +=    '<td class="table-center">(555) 555-5555</td>';
			result += '<td class="table-center"><button type="button"  id="seven" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                     result +=   '</tr>';
                     result +=   '<tr>';

                       result +=  ' <td class="table-center">Larry</td>';
                        result +=  '<td class="table-center">the Bird</td>';
                      result +=    '<td class="table-center">(555) 555-5555</td>';
			result += '<td class="table-center"><button type="button"  id="eight" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                      result +=  '</tr>';
                      result +=  '<tr>';

                      result +=   ' <td class="table-center">Larry</td>';
                       result +=   '<td class="table-center">the Bird</td>';
                        result +=  '<td class="table-center">(555) 555-5555</td>';
			result +='<td class="table-center"><button type="button"  id="nine" class="btn btn-primary btn-sm edit">Edit</button> </td>';
                     result +=   '</tr>';
                    result +=  '</tbody>';
                    result +='</table>';
	//}
	//result += "</table>";
	
	return result;
    }


function processEdit(){
 /*   $('#searchresults').empty();
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
    */
}
/*
function editDone() {
    $('#editmessage').text($('#editfirst').val()+" "+$('#editlast').val()+ " SAVED");
}
function editEntry(){
    console.log("Attempting to edit an entry");
    console.log("Firstname:" + $('#editfirst').val() + "ID:" + editid);
    $('#searchresults').empty();
    $.ajax({
	url: '/cgi-bin/bakboukg_phoneAppComplete.cgi?editid='+editid +'&editfname='+$('#editfirst').val()+'&editlname='+$('#editlast').val()+'&editphone='+$('#editphone').val()+'&edittype='+$('#edittype').val()+'&operation=edit',
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
	url: '/cgi-bin/bakboukg_phoneAppComplete.cgi?deleteid='+$(this).attr('ID')+'&operation=delete',
	dataType: 'text',
	success: function(){alert("Deleted Record: " +id );},
	error: function(){alert("Error: Something went wrong");}
    });
}
*/
function processResults(results) {
	
  //  $('#editmessage').empty();
    //$('#addmessage').empty();
    console.log("Results:"+results);
   // $('#searchresults').empty();
  //  $('#searchresults').append(buildTable(results));
    $(".edit").click(processEdit);
    //$(".delete").click(processDelete);
   // $('#addmessage').text($('#addfirst').val()+" "+$('#addlast').val()+ " ADDED");
   
}

function clearResults() {
    $('#searchresults').empty();
}

function getMatches(){
	console.log("Day"+$('#DaysList').val()+" Shift"+$('#ShiftsList').val()+" Side"+$('#SidesList').val());
    $.ajax({
	url: '/cgi-bin/bakboukg_phoneAppComplete.cgi?find='+$('#DaysList').val()+$('#ShiftsList').val()+$('#SidesList').val(),
	dataType: 'text',
	success: processResults,
	error: function(){alert("Error: Something went wrong");}
    });
}

/*function addEntry(){
    console.log("Attempting to add an entry");
    console.log("Firstname:" + $('#addfirst').val());
    $('#searchresults').empty();
    $.ajax({
	url: '/cgi-bin/bakboukg_phoneAppComplete.cgi?afname='+$('#addfirst').val()+'&alname='+$('#addlast').val()+'&aphone='+$('#addphone').val()+'&atype='+$('#addtype').val()+'&operation='+operation,
	dataType: 'text',
	success: processResults,
	error: function(){alert("Error: Something went wrong");}
    });
}
}
*/
