function setDropStates(){
    var dropStates = document.getElementById("dropStates");
    if(dropStates != null){
      var states = data.map(data => data.state);
      states = states.filter((state, i, array) => array.indexOf(state) === i);
      states.sort();
      states.forEach(state => {
        var option = document.createElement("option");
        option.value = state;
        option.innerText = state;
        dropStates.appendChild(option);
      });
    }
  }
  
  function setListeners(){
    var query = document.querySelectorAll('input[name=party]');
    if(query != null){
      query.forEach(input => input.onchange = filterData);
    }
    var dropStates = document.getElementById("dropStates");
    if(dropStates != null){
      dropStates.onchange = filterData;
    }
  }
  
  function filterData(){
    var query = document.querySelectorAll('input[name=party]:checked');
    var partyS = Array.from(query).map(element => element.value)
    var partyFilter = members => {
      if(partyS.indexOf(members.party) > -1){
        return members;
      }
    }
    mFiltrados = data.filter(partyFilter);
    var state = document.getElementById("dropStates").value;
    if (state != ""){
      mFiltrados = mFiltrados.filter(m => m.state == state);
    }
    memberData.data = mFiltrados;
  }

  function createTable(){
    var member_data = document.getElementById('member_data');
    if(member_data){
      setDropStates();
      setListeners();
  
      memberData = new Vue({
        el: '#member_data',
        data: {
          titles : ["Name","Party","State","Years in Office","% Votes w/ Party"],
          data : []
        }
      });
      filterData();
    }
  }



