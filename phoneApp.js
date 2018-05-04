// JavaScript for Phone Application Demo Program
// Jim Skon, Kenyon College, 2017
var operation;  // operation
var editid;
var tablebuilt=false;
var infobuilt=false;
//src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
//src="https://code.jquery.com/jquery-3.2.1.min.js";


$(document).ready(function able() {
    $('#VolunteerList').hide();
	$('#searchinfo').hide();
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
	
	/* $("#editEntry").click(function(){
		 $('#VolInfo').show();
		$('#VolInfoTitle').show();
		});
		*/
		

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
	      $('#searchinfo').hide();
		$('#VolInfo').hide();
	   

       }
	else {
		//$('#searchresults').clear();
		getMatches();
	$('#VolunteerList').hide();
	    $('#searchinfo').hide();
		$('#VolInfo').hide();
	$('#VolInfoTitle').hide();

       }
	
}

$("#VolunteerList tr").click(function() {
        $("#test1").html("clicked smth"); //testoutput
        var href = $(this).find("a").attr("href");
        if(href) {
            $("#test2").html("clicked with" + href); //testoutput
            window.location = href;
        }
    });

function buildInfo(list) {
	infobuilt=true;
	 var result ='<table class="table table-borderless" style="font-size:14px">';
                            result +='<tbody>';
                               result += '<tr>';
                                   result += '<td class="table-left"> <b>Name:</b> John </td>';
                                   result += '<td class="table-left"><b>Email 1: </b> jjcoolboy@hotmail.com</td>';
                              result += ' </tr>';
                               result += '<tr>';
                                   result += '<td class="table-left"><b>Address: </b> 106 Gaskin Ave</td>';
                                  result +=  '<td class="table-left"><b>Email 2: </b> surfbro217@gmail.com</td>';
                               result += '</tr>';
                               result += '<tr>';
                                   result += '<td class="table-left"><b>City: </b> Gambier</td>';
                                   result += '<td class="table-left"><b>Phone 1: </b> (740) 406-0959</td>';
                               result += '</tr>';
                               result += '<tr>';
                                   result += '<td class="table-left"><b>Zipcode: </b> 43022</td>';
                                 result +=   '<td class="table-left"><b>Phone 2: </b> (740) 406-0959</td>';
                             result +=   '</tr>';

                           result += '</tbody>';
                       result += '</table>';
		return result;
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
	tablebuilt=true;
	var result = '<table class="table table-hover borderless" style="font-size:12px" >';
    result += '<thead class="thead-dark tablehead-center">';

    result += '<tr>';
    result += '<th scope="col" style="border-radius:5px 0 0 0">First</th>';
    result += '<th scope="col">Last</th>';
    result += '<th scope="col">Side</th>';
    result += '<th scope="col" style="border-radius:0 5px 0 0">Option</th>';

    result += '</tr>';
    result += '</thead>';
    result += '<tbody>';
    result += ' <tr onclick="showInfo()";>';
    result += '<td class="table-center">Mary</td>';
    result += ' <td class="table-center">Otto</td>';
    result += '<td class="table-center">F or M</td>';

    result += '<td class="table-center"><button type="button" id="one2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Jacob</td>';
    result += '<td class="table-center">Thornton</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center" ><button type="button"  id="two2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Laney</td>';
    result += '<td class="table-center">the Bird</td>';
    result += ' <td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="three2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Mark</td>';
    result += '<td class="table-center">Otto</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="four2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Jacob</td>';
    result += '<td class="table-center">Thornton</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="five2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '  </tr>';
    result += ' <tr>';
    result += '  <td class="table-center">Lake</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="six2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="seven2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">F</td>';

    result += '<td class="table-center"><button type="button"  id="eight2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '<tr>';
    result += ' <td class="table-center">Larry</td>';
    result += '<td class="table-center">the Bird</td>';
    result += '<td class="table-center">M</td>';

    result += '<td class="table-center"><button type="button"  id="nine2" class="btn btn-dark btn-sm edit">Edit</button> </td>';
    result += '</tr>';
    result += '</tbody>';
    result += '</table>';
	
	return result;
    }


function showInfo(){
	 $('#searchinfo').show();
	$('#VolInfoTitle').show();
	$('#VolInfo').show();
	console.log("executed");
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
	if (tablebuilt==false)
	{
   $('#VolunteerList').append(buildTable(results));
	}
	if (infobuilt==false)
	{
   $('#searchinfo').append(buildInfo(results));
	 $('#searchinfo').show();
	$('#VolInfo').show();
	$('#VolInfoTitle').show();
	}
   $(".show").click(showInfo);
	//$(".edit").click();
    //$(".delete").click(processDelete);
   // $('#addmessage').text($('#addfirst').val()+" "+$('#addlast').val()+ " ADDED");
   
}

/*function clearResults() {
    $('#searchresults').empty();
}
*/
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
