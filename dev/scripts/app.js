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
		 const playerDetails = res.players;
		 console.log(playerDetails);
		

		//ToDo
		nbaTeams.showAthelete(playerDetails);
	});
};

//Atheletes position
nbaTeams.playerPosition = (position) =>{
	if (position == 'PF') {
		return 'Power Forward'
	} else if (position == 'C'){
		return 'Centre'
	}else if (position == 'SG'){
		return 'Shooting Guard'
	}else if (position == 'PG'){
		return 'Point Guard'
	}else if (position == 'SF'){
		return 'Small Forward'
	}else {
		return
	}
}

//College went by Athelete
nbaTeams.collegeOfAthelete = (colleges) =>{
	if (colleges == null) {
		return 'High School'
	} else {
		return colleges;
	}
}

//Athelets details listed
nbaTeams.AtheleteTemplate = (atheleteDtls) =>{
	return `
			<div class="card" id="card">
			    <div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">
			    	<img class="activator athelete-card__img" src="${atheleteDtls.player.officialImageSrc}" onerror="this.src='http://via.placeholder.com/260x190';" alt="Missing Image" />
			    </div>
			    <div class="card-content">
			      <span class="card-title activator grey-text text-darken-4" id="cardTitle">${atheleteDtls.player.firstName} ${atheleteDtls.player.lastName}</span>
			      
			    </div>
			    <div class="card-reveal">
			      <span class="card-title grey-text text-darken-4">More details<i class="material-icons right">X</i></span>
			      <p>Born in ${atheleteDtls.player.birthCity} ${atheleteDtls.player.birthCountry}</p>
			      <p>Came out of: ${nbaTeams.collegeOfAthelete(atheleteDtls.player.college)}</p>
			      <p>Current position: ${nbaTeams.playerPosition(atheleteDtls.player.position)}</p>
			      <p>Drafter year: ${atheleteDtls.player.drafted}</p>
			    </div>
			  </div>

			`
}

//display playcards template
nbaTeams.showAthelete = (playerCards) =>{

			document.getElementById("mainContainer").innerHTML = `
		  			<h1 class="app-title">Numb of players: ${playerCards.length}</h1>
		  			${playerCards.map(nbaTeams.AtheleteTemplate).join('')}
		`;	
			

}

//all other funcs variables live here
nbaTeams.init = () =>{
	nbaTeams.allTeams();
};

//main func to run app
$(function() {

	nbaTeams.init();

});


