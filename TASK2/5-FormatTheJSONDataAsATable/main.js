document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);

if (document.getElementById('senate-data')) {
	createSenateTable();
} else if(document.getElementById('house-data')) {
	createHouseTable();
}

function createSenateTable() {

  var formatedTable = addTableToHTML(data.results[0].members);

  var senateTable = document.getElementById('senate-data');

  senateTable.innerHTML = formatedTable;

}

function createHouseTable(){

	var formatedTable = addTableToHTML(dataHouse.results[0].members);
  
	var houseTable = document.getElementById('house-data');
	
	houseTable.innerHTML = formatedTable;
	
}

 function addTableToHTML(membersArray) {

   var table = '<tbody>'

   membersArray.map(function (member) {
     table += '<tr>';

     if (member.middle_name === null) {
       table += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
     } else {
       table += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
     }
     table += '<td class="party">' + member.party + '</td>';

     table += '<td class="state">' + member.state + '</td>';

     table += '<td>' + member.seniority + '</td>';

     table += '<td> % ' + member.votes_with_party_pct + '</td>';

     table += '</tr>';
   });

   table += '</tbody>';

   return table;
 }

 