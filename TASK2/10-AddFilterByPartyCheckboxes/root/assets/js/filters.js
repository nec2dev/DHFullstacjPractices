var shortData = data.results[0].members; 
var dataTable = ""; 
var partyS = Array.from(document.querySelectorAll("input[name=party]:checked")).map(elt => elt.value); 
var stateS = document.querySelector("#stateFilter").value; 
var myFilter = item => {
    if (partyS.indexOf(item.party) != -1 && (!stateS || stateS == item.state)) {
        return item;
    }
}

function filterData(stateS, partyS) { 
    if (!stateS && partyS.length == 3) {           
        return shortData.forEach(addTableToHTML);           
    }else{ 
        filterArray = shortData.filter(myFilter);    
        return filterArray.forEach(addTableToHTML);
    }
}

function refreshTable() { 
    dataTable = "";
    stateS = document.querySelector("#stateFilter").value;
    partyS = Array.from(document.querySelectorAll("input[name=party]:checked")).map(elt => elt.value);
    filterData(stateS, partyS);
    document.getElementById("sm").innerHTML = dataTable;
}

filterData(stateS, partyS);
document.getElementById("sm").innerHTML = dataTable;
