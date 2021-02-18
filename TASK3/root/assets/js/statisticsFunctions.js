 var members = data.results[0].members;
 var engaged = false;
 var pass = false;
 var parties = [];
 var selection = [];
 var name = "";
 var average = 0;
 var mystr = "";
 var pField = 0;
 var sField = 0;
 var pathname = window.location.pathname;
 var engaged = pathname.includes("attendance") ? true : false;

ids.forEach(function (id) {
    parties.push({
        "idParty": id.id,
        "party": id.party,
        "membersP": members.filter(m => m.party == id.id),
        "idReps": id.idReps,
        "reps": 0,
        "idAtt": id.idAtt,
        "attendance": 0,
        "idLoyal": id.idLoyal,
        "loyalty": 0,
        "idEngaged": "mVotes",
        "engaged": 0,
        "idpMissed": "pMissed",
        "pMissed": 0,
    })
});

parties.forEach(function (partido) {
     partido.reps = partido.membersP.length;
     partido.membersP.forEach(function (votes) {
         partido.loyalty += (votes.votes_with_party_pct);
     });
     !partido.loyalty == 0 ? partido.loyalty /= partido.reps : partido.loyalty = 0;
 });

 function filtra(pass, engaged) {
     mystr = "";
     var ordenado = members.sort(function (a, b) {
         if (!pass && !engaged) {
             return (a.votes_with_party_pct - b.votes_with_party_pct)
         } else {
             if (pass && !engaged)
                 return (b.votes_with_party_pct - a.votes_with_party_pct)
         }
         if (!pass && engaged) {
             return (b.missed_votes_pct - a.missed_votes_pct)
         } else {
             return (a.missed_votes_pct - b.missed_votes_pct)
         }
     });

     var selection = [];
     do {
         selection[selection.length] = ordenado[selection.length];
         average = selection.length / ordenado.length;
     } while (average < 0.1 || (ordenado[selection.length].votes_with_party == selection[selection.length - 1].votes_with_party_pct));

     selection.forEach(function (i) {
         name = i.middle_name != null ? i.last_name + ", " + i.first_name + " " + i.middle_name : i.last_name + ", " + i.first_name + " ";
         pField = engaged ? i.missed_votes : i.total_votes;

         if (engaged) {
             sField = i.missed_votes_pct < 10 ? " " + i.missed_votes_pct.toFixed(2) : i.missed_votes_pct.toFixed(2);
         } else {
             sField = i.votes_with_party_pct.toFixed(2);
         }
         mystr += "<tr><td>" +
             name + "</td><td>" + pField + "</td><td>" + sField + "% </td></tr>";
     });
     return mystr;
 }

 if (!engaged) {
     filtra(false, false);
     document.getElementById("least-loyal").innerHTML = mystr;
     filtra(true, false);
     document.getElementById("most-loyal").innerHTML = mystr;
 } else {
     filtra(false, true);
     document.getElementById("least-engaged").innerHTML = mystr;
     filtra(true, true);
     document.getElementById("most-engaged").innerHTML = mystr;
 }

 parties.forEach(function (valor) {
     document.getElementById(valor.idReps).innerHTML = valor.reps;
     !valor.loyalty ? document.getElementById(valor.idLoyal).innerHTML = " " + valor.loyalty.toFixed(2) + " %" : document.getElementById(valor.idLoyal).innerHTML = valor.loyalty.toFixed(2) + " %";
 });




