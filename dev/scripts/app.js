//object to hold app
const nbaTeams = {};

//get NBA teams from the api
nbaTeams.allTeams = () =>{
	$.ajax({
	  type: "GET",
	  url: 'https://api.mysportsfeeds.com/v2.0/pull/nba/players.json',
	  dataType: 'json',
	  async: false,
	  headers: {
	    "Authorization": "Basic " + btoa("4e292105-0282-49c7-bec7-d02c62" + ":" + "MYSPORTSFEEDS")
	  }
	}).then((res) =>{
		//body
		 const playerDetails = res.leaguePlayers.players;
		console.log(playerDetails);
		

		//ToDo
		nbaTeams.showAthelete(playerDetails);
	});
};

//display playcards on page
nbaTeams.showAthelete = (playerCards) =>{

		 //try for each to get player object
		playerCards.forEach((element) => {
		  //list all players
		  let firstName = element.player.firstName;
		  let lastName = element.player.lastName;
		  let playerImg = element.player.officialImageSrc;
		  //let playerDraftedBy = element.player.drafted.team.abbreviation;
		  const atheletes = `${firstName}   ${lastName} \n  ${playerImg}`;
		  console.log(atheletes);
		});
			

}

//all other funcs variables live here
nbaTeams.init = () =>{
	nbaTeams.allTeams();
};

//main func to run app
$(function() {

	nbaTeams.init();

});


