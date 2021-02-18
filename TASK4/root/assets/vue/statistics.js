function getdataByParty(party) {
   return (data.filter(member => member.party == party));
}
function getPorcentAvgOfParty(party) {
   var promedio = (party.length > 0 ? (party.reduce((suma, member) => (suma + member.votes_with_party_pct), 0) / party.length).toFixed(2) : (0).toFixed(2));
   return (promedio);
}
function vwp(members) {
   return Math.round((members.total_votes - members.missed_votes) * members.votes_with_party_pct / 100);
}
function orderMembersByKey(array, key, order) {
   array.sort((a, b) => (order ? a[key] - b[key] : b[key] - a[key]));
}
function getMembersByPct(array, key, pct, bottom_top) {
   var reference = array.map(members => members[key]);
   reference.sort((a, b) => (bottom_top ? a - b : b - a));
   var limit = reference[Math.round(array.length * pct / 100) - 1];
   var extract = array.filter(members => (bottom_top ? members[key] <= limit : members[key] >= limit));
   return (extract);
}
function memberFullName(member){
   var name = member.first_name;
   name += (member.middle_name?' '+member.middle_name:'');
   name += ' ' + member.last_name;
   return(name);
 }
function storeStatistics(key, array) {
   var k1 = (key.endsWith('engaged') ? 'missed_votes' : 'votes_with_party');
   var k2 = (key.endsWith('engaged') ? 'missed_votes_pct' : 'votes_with_party_pct');
   array.forEach(
      function (members) {
         var name = memberFullName(members);
         var url = members.url;
         var votes = (k1.startsWith('missed') ? members[k1] : vwp(members));
         var pct = members[k2].toFixed(2);
         statistics[key].push({
            'name': name,
            'url': url,
            [k1]: votes,
            [k2]: pct
         });
      }
   );
}
function createTable() {
   var member_data = document.getElementById('member_data');
   if (member_data) {
      setDropStates();
      setListeners();

      memberData = new Vue({
         el: '#member_data',
         data: {
            titles: ["Name", "Party", "State", "Years in Office", "% Votes w/ Party"],
            data: []
         }
      });

      filterData();
   }

   statistics = {
      "at_a_glance": [{
            "party": "Republican",
            "number_of_reps": 0,
            "votes_with_party_pct": 0
         },
         {
            "party": "Democrat",
            "number_of_reps": 0,
            "votes_with_party_pct": 0
         },
         {
            "party": "Independent",
            "number_of_reps": 0,
            "votes_with_party_pct": 0
         },
      ],

      "least_engaged": [],

      "most_engaged": [],

      "least_loyal": [],

      "most_loyal": []
   };

   var at_a_glance = document.getElementById('at_a_glance');
   if (at_a_glance) {
      var republicans = getdataByParty("R");
      var democrats = getdataByParty("D");
      var independents = getdataByParty("I");
      statistics.at_a_glance[0].number_of_reps = republicans.length;
      statistics.at_a_glance[1].number_of_reps = democrats.length;
      statistics.at_a_glance[2].number_of_reps = independents.length;
      statistics.at_a_glance[0].votes_with_party_pct = getPorcentAvgOfParty(republicans);
      statistics.at_a_glance[1].votes_with_party_pct = getPorcentAvgOfParty(democrats);
      statistics.at_a_glance[2].votes_with_party_pct = getPorcentAvgOfParty(independents);
      var total_number_of_reps = statistics.at_a_glance.reduce((suma, party) => (suma + party.number_of_reps), 0);
      var total_votes_with_party_pct = (statistics.at_a_glance.reduce((suma, party) => (suma + party.votes_with_party_pct * party.number_of_reps / total_number_of_reps), 0)).toFixed(2);

      statistics.at_a_glance.push({
         'party': 'Total',
         'number_of_reps': total_number_of_reps,
         'votes_with_party_pct': total_votes_with_party_pct
      });

      var tableGlance = new Vue({
         el: '#at_a_glance',
         data: {
            titles: ['Party', 'Nº of Reps', '% Voted w/ Party'],
            partyS: statistics.at_a_glance
         }
      });
   }

   var head = '';
   var stat_type = '';
   var engaged = document.getElementById('engaged');
   
   if (engaged) {
      head = ['Name', 'Nº Missed Votes', '% Missed'];
      stat_type = 'engaged';
      var bottom_10_pct_members = getMembersByPct(data, 'missed_votes_pct', 10, false);
      orderMembersByKey(bottom_10_pct_members, 'missed_votes_pct', false);
      storeStatistics('least_engaged', bottom_10_pct_members);
      var top_10_pct_members = getMembersByPct(data, 'missed_votes_pct', 10, true);
      orderMembersByKey(top_10_pct_members, 'missed_votes_pct', true);
      storeStatistics('most_engaged', top_10_pct_members);
   }

   var loyalty = document.getElementById("loyalty");
   if (loyalty) {
      head = ['Name', 'Nº Party Votes', '% Party Votes'];
      stat_type = 'loyal';
      var bottom_10_pct_members = getMembersByPct(data, 'votes_with_party_pct', 10, true);
      orderMembersByKey(bottom_10_pct_members, 'votes_with_party_pct', true);
      storeStatistics('least_loyal', bottom_10_pct_members);
      var top_10_pct_members = getMembersByPct(data, 'votes_with_party_pct', 10, false);
      orderMembersByKey(top_10_pct_members, 'votes_with_party_pct', false);
      storeStatistics('most_loyal', top_10_pct_members);
   }

   if (engaged || loyalty) {
      var tableLeast = new Vue({
         el: '#least_' + stat_type,
         data: {
            titles: head,
            data: statistics['least_' + stat_type]
         }
      });

      var tableMost = new Vue({
         el: '#most_' + stat_type,
         data: {
            titles: head,
            data: statistics['most_' + stat_type]
         }
      });
   }
} 


