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
		 const playerDetails = res.players;//res.leaguePlayers.players
		//console.log(playerDetails);
		

		//ToDo
		nbaTeams.showAthelete(playerDetails);
	});
};

//display playcards on page
nbaTeams.showAthelete = (playerCards) =>{

		 //try for each to get player object
		playerCards.forEach((element) => {
		  //list all players
		  const firstName = element.player.firstName;
		  const lastName = element.player.lastName;
		  const playerImg = element.player.officialImageSrc;
		  const atheletes = `${firstName}   ${lastName}`; // \n  ${playerImg}
		// console.log(atheletes);

		  //Append
		  const madeName = () =>{

		  const eachPlayerName = document.getElementById('nba-pic-test');
		  //eachPlayerName.innerHTML += atheletes;
		  	
		  }
		 // madeName();

		  //Create img element and setting it
		  const imgURL = () =>{

		 const eachPlayerImg = document.createElement('img');
		 eachPlayerImg.setAttribute("src", playerImg);
		 //document.getElementById('nba-pic-test').append(eachPlayerImg);

		  }
		  //imgURL();

		 const combineDataFunc = () =>{

		 	console.log('it works');
		 	let x = madeName();
		 	let y = imgURL();
		 	const card = document.getElementById('mainContainer');
			card.insertAdjacentHTML('afterbegin', '<div class="card" id="card"><div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">y</div><div class="card-content"><span class="card-title activator grey-text text-darken-4" id="cardTitle">x</span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div>');

		 } 
		 combineDataFunc();


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


