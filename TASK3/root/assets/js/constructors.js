var dataCorto = data.results[0].members;
var dataTable = "";
var selectS = "<option selected value=\"\"></option>";
var states = [];

function addTableToHTML(member, i) {
    if (member.middle_name == null) {
        member.middle_name = "";
    }
    dataTable += "<tr><td><a href = \"" + member.url + "\" target=_blank>" + member.last_name + ", " + member.first_name + " " + member.middle_name + "</a></td><td class = \"centerT party\">" + member.party + "</td><td class = \"centerT state\">" + member.state + "</td><td class = \"centerT\">" + member.seniority + "</td><td class = \"centerT\">" + member.votes_with_party_pct + " %" + "</td></tr>";
};


function getState(valor, i) {
    if (!states.includes(valor.state)) {
        states.push(valor.state);
    }
}
dataCorto.forEach(getState);
states.sort();

function createMenu() {
    states.forEach(item => {
        selectS += "<option value=\"" + item + "\">" + item + "</option>";
    });
    return selectS;
}
createMenu();
document.getElementById("stateFilter").innerHTML = selectS;
