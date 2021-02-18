var chamber = document.currentScript.getAttribute('chamber');
var url = "https://api.propublica.org/congress/v1/113/" + chamber + "/members.json";
fetch(url, {
  method: "GET",
  headers: {
      "X-API-Key": "qkeY5AtDwEOjI142t391o9OBxnNTFA4uvoUnxJ8s"
  }
})
.then(function(response){
  if(response.ok){
    response.json().then(function(jsonData){
      data = jsonData.results[0].members;
      createTable();
    });
  }
})
.catch(function(error){
});




