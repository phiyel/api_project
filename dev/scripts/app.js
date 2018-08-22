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



 
//Drafted year
nbaTeams.TeamDraftedYear = (draftLeague) =>{
	
	if (draftLeague == null) {

		return 'Was not drafted'

	} else {
		
		return draftLeague.year;
	}

}

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
			      <span class="card-title activator grey-text text-darken-4" id="cardTitle">${atheleteDtls.player.firstName} ${atheleteDtls.player.lastName} <i class="material-icons right"><svg width="12" height="14" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">
<g>
	<path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
	<path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
	<path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
</g>
</svg>
</i></span>
			      
			    </div>
			    <div class="card-reveal">
			      <span class="card-title grey-text text-darken-4">More details<i class="material-icons right">X</i></span>
			      <p>Born in ${atheleteDtls.player.birthCity} ${atheleteDtls.player.birthCountry}</p>
			      <p>Came out of: ${nbaTeams.collegeOfAthelete(atheleteDtls.player.college)}</p>
			      <p>Current position: ${nbaTeams.playerPosition(atheleteDtls.player.primaryPosition)}</p>
			      <p>Drafter year: ${nbaTeams.TeamDraftedYear(atheleteDtls.player.drafted)}</p>
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


