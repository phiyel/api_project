(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

//object to hold app
var nbaTeams = {};

//get NBA teams from the api
nbaTeams.allTeams = function () {
	$.ajax({
		type: "GET",
		url: 'https://api.mysportsfeeds.com/v2.0/pull/nba/players.json',
		dataType: 'json',
		async: false,
		headers: {
			"Authorization": "Basic " + btoa("4e292105-0282-49c7-bec7-d02c62" + ":" + "MYSPORTSFEEDS")
		}
	}).then(function (res) {
		//body
		var playerDetails = res.players;
		console.log(playerDetails);

		//ToDo
		nbaTeams.showAthelete(playerDetails);
	});
};

//Atheletes position
nbaTeams.playerPosition = function (position) {
	if (position == 'PF') {
		return 'Power Forward';
	} else if (position == 'C') {
		return 'Centre';
	} else if (position == 'SG') {
		return 'Shooting Guard';
	} else if (position == 'PG') {
		return 'Point Guard';
	} else if (position == 'SF') {
		return 'Small Forward';
	} else {
		return;
	}
};

//College went by Athelete
nbaTeams.collegeOfAthelete = function (colleges) {
	if (colleges == null) {
		return 'High School';
	} else {
		return colleges;
	}
};

//Athelets details listed
nbaTeams.AtheleteTemplate = function (atheleteDtls) {
	return '\n\t\t\t<div class="card" id="card">\n\t\t\t    <div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">\n\t\t\t    \t<img class="activator athelete-card__img" src="' + atheleteDtls.player.officialImageSrc + '" onerror="this.src=\'http://via.placeholder.com/260x190\';" alt="Missing Image" />\n\t\t\t    </div>\n\t\t\t    <div class="card-content">\n\t\t\t      <span class="card-title activator grey-text text-darken-4" id="cardTitle">' + atheleteDtls.player.firstName + ' ' + atheleteDtls.player.lastName + '</span>\n\t\t\t      \n\t\t\t    </div>\n\t\t\t    <div class="card-reveal">\n\t\t\t      <span class="card-title grey-text text-darken-4">More details<i class="material-icons right">X</i></span>\n\t\t\t      <p>Born in ' + atheleteDtls.player.birthCity + ' ' + atheleteDtls.player.birthCountry + '</p>\n\t\t\t      <p>Came out of: ' + nbaTeams.collegeOfAthelete(atheleteDtls.player.college) + '</p>\n\t\t\t      <p>Current position: ' + nbaTeams.playerPosition(atheleteDtls.player.position) + '</p>\n\t\t\t      <p>Drafter year: ' + atheleteDtls.player.drafted + '</p>\n\t\t\t    </div>\n\t\t\t  </div>\n\n\t\t\t';
};

//display playcards template
nbaTeams.showAthelete = function (playerCards) {

	document.getElementById("mainContainer").innerHTML = '\n\t\t  \t\t\t<h1 class="app-title">Numb of players: ' + playerCards.length + '</h1>\n\t\t  \t\t\t' + playerCards.map(nbaTeams.AtheleteTemplate).join('') + '\n\t\t';
};

//all other funcs variables live here
nbaTeams.init = function () {
	nbaTeams.allTeams();
};

//main func to run app
$(function () {

	nbaTeams.init();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rlc2t0b3AvVG9Eby9KYXZhU2NyaXB0MTgvYXBpUHJvamVjdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGV2L3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFLO0FBQ3hCLEdBQUUsSUFBRixDQUFPO0FBQ0wsUUFBTSxLQUREO0FBRUwsT0FBSywwREFGQTtBQUdMLFlBQVUsTUFITDtBQUlMLFNBQU8sS0FKRjtBQUtMLFdBQVM7QUFDUCxvQkFBaUIsV0FBVyxLQUFLLG1DQUFtQyxHQUFuQyxHQUF5QyxlQUE5QztBQURyQjtBQUxKLEVBQVAsRUFRRyxJQVJILENBUVEsVUFBQyxHQUFELEVBQVE7QUFDZjtBQUNDLE1BQU0sZ0JBQWdCLElBQUksT0FBMUI7QUFDQSxVQUFRLEdBQVIsQ0FBWSxhQUFaOztBQUdEO0FBQ0EsV0FBUyxZQUFULENBQXNCLGFBQXRCO0FBQ0EsRUFoQkQ7QUFpQkEsQ0FsQkQ7O0FBb0JBO0FBQ0EsU0FBUyxjQUFULEdBQTBCLFVBQUMsUUFBRCxFQUFhO0FBQ3RDLEtBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNyQixTQUFPLGVBQVA7QUFDQSxFQUZELE1BRU8sSUFBSSxZQUFZLEdBQWhCLEVBQW9CO0FBQzFCLFNBQU8sUUFBUDtBQUNBLEVBRk0sTUFFRCxJQUFJLFlBQVksSUFBaEIsRUFBcUI7QUFDMUIsU0FBTyxnQkFBUDtBQUNBLEVBRkssTUFFQSxJQUFJLFlBQVksSUFBaEIsRUFBcUI7QUFDMUIsU0FBTyxhQUFQO0FBQ0EsRUFGSyxNQUVBLElBQUksWUFBWSxJQUFoQixFQUFxQjtBQUMxQixTQUFPLGVBQVA7QUFDQSxFQUZLLE1BRUE7QUFDTDtBQUNBO0FBQ0QsQ0FkRDs7QUFnQkE7QUFDQSxTQUFTLGlCQUFULEdBQTZCLFVBQUMsUUFBRCxFQUFhO0FBQ3pDLEtBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNyQixTQUFPLGFBQVA7QUFDQSxFQUZELE1BRU87QUFDTixTQUFPLFFBQVA7QUFDQTtBQUNELENBTkQ7O0FBUUE7QUFDQSxTQUFTLGdCQUFULEdBQTRCLFVBQUMsWUFBRCxFQUFpQjtBQUM1Qyx5TUFHd0QsYUFBYSxNQUFiLENBQW9CLGdCQUg1RSwyT0FNb0YsYUFBYSxNQUFiLENBQW9CLFNBTnhHLFNBTXFILGFBQWEsTUFBYixDQUFvQixRQU56SSxvT0FXcUIsYUFBYSxNQUFiLENBQW9CLFNBWHpDLFNBV3NELGFBQWEsTUFBYixDQUFvQixZQVgxRSwwQ0FZMEIsU0FBUyxpQkFBVCxDQUEyQixhQUFhLE1BQWIsQ0FBb0IsT0FBL0MsQ0FaMUIsK0NBYStCLFNBQVMsY0FBVCxDQUF3QixhQUFhLE1BQWIsQ0FBb0IsUUFBNUMsQ0FiL0IsMkNBYzJCLGFBQWEsTUFBYixDQUFvQixPQWQvQztBQW1CQSxDQXBCRDs7QUFzQkE7QUFDQSxTQUFTLFlBQVQsR0FBd0IsVUFBQyxXQUFELEVBQWdCOztBQUVyQyxVQUFTLGNBQVQsQ0FBd0IsZUFBeEIsRUFBeUMsU0FBekMsNkRBQzZDLFlBQVksTUFEekQsMkJBRU0sWUFBWSxHQUFaLENBQWdCLFNBQVMsZ0JBQXpCLEVBQTJDLElBQTNDLENBQWdELEVBQWhELENBRk47QUFNRixDQVJEOztBQVVBO0FBQ0EsU0FBUyxJQUFULEdBQWdCLFlBQUs7QUFDcEIsVUFBUyxRQUFUO0FBQ0EsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVzs7QUFFWixVQUFTLElBQVQ7QUFFQSxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9vYmplY3QgdG8gaG9sZCBhcHBcclxuY29uc3QgbmJhVGVhbXMgPSB7fTtcclxuXHJcbi8vZ2V0IE5CQSB0ZWFtcyBmcm9tIHRoZSBhcGlcclxubmJhVGVhbXMuYWxsVGVhbXMgPSAoKSA9PntcclxuXHQkLmFqYXgoe1xyXG5cdCAgdHlwZTogXCJHRVRcIixcclxuXHQgIHVybDogJ2h0dHBzOi8vYXBpLm15c3BvcnRzZmVlZHMuY29tL3YyLjAvcHVsbC9uYmEvcGxheWVycy5qc29uJyxcclxuXHQgIGRhdGFUeXBlOiAnanNvbicsXHJcblx0ICBhc3luYzogZmFsc2UsXHJcblx0ICBoZWFkZXJzOiB7XHJcblx0ICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgYnRvYShcIjRlMjkyMTA1LTAyODItNDljNy1iZWM3LWQwMmM2MlwiICsgXCI6XCIgKyBcIk1ZU1BPUlRTRkVFRFNcIilcclxuXHQgIH1cclxuXHR9KS50aGVuKChyZXMpID0+e1xyXG5cdFx0Ly9ib2R5XHJcblx0XHQgY29uc3QgcGxheWVyRGV0YWlscyA9IHJlcy5wbGF5ZXJzO1xyXG5cdFx0IGNvbnNvbGUubG9nKHBsYXllckRldGFpbHMpO1xyXG5cdFx0XHJcblxyXG5cdFx0Ly9Ub0RvXHJcblx0XHRuYmFUZWFtcy5zaG93QXRoZWxldGUocGxheWVyRGV0YWlscyk7XHJcblx0fSk7XHJcbn07XHJcblxyXG4vL0F0aGVsZXRlcyBwb3NpdGlvblxyXG5uYmFUZWFtcy5wbGF5ZXJQb3NpdGlvbiA9IChwb3NpdGlvbikgPT57XHJcblx0aWYgKHBvc2l0aW9uID09ICdQRicpIHtcclxuXHRcdHJldHVybiAnUG93ZXIgRm9yd2FyZCdcclxuXHR9IGVsc2UgaWYgKHBvc2l0aW9uID09ICdDJyl7XHJcblx0XHRyZXR1cm4gJ0NlbnRyZSdcclxuXHR9ZWxzZSBpZiAocG9zaXRpb24gPT0gJ1NHJyl7XHJcblx0XHRyZXR1cm4gJ1Nob290aW5nIEd1YXJkJ1xyXG5cdH1lbHNlIGlmIChwb3NpdGlvbiA9PSAnUEcnKXtcclxuXHRcdHJldHVybiAnUG9pbnQgR3VhcmQnXHJcblx0fWVsc2UgaWYgKHBvc2l0aW9uID09ICdTRicpe1xyXG5cdFx0cmV0dXJuICdTbWFsbCBGb3J3YXJkJ1xyXG5cdH1lbHNlIHtcclxuXHRcdHJldHVyblxyXG5cdH1cclxufVxyXG5cclxuLy9Db2xsZWdlIHdlbnQgYnkgQXRoZWxldGVcclxubmJhVGVhbXMuY29sbGVnZU9mQXRoZWxldGUgPSAoY29sbGVnZXMpID0+e1xyXG5cdGlmIChjb2xsZWdlcyA9PSBudWxsKSB7XHJcblx0XHRyZXR1cm4gJ0hpZ2ggU2Nob29sJ1xyXG5cdH0gZWxzZSB7XHJcblx0XHRyZXR1cm4gY29sbGVnZXM7XHJcblx0fVxyXG59XHJcblxyXG4vL0F0aGVsZXRzIGRldGFpbHMgbGlzdGVkXHJcbm5iYVRlYW1zLkF0aGVsZXRlVGVtcGxhdGUgPSAoYXRoZWxldGVEdGxzKSA9PntcclxuXHRyZXR1cm4gYFxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiIGlkPVwiY2FyZFwiPlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWJsb2NrIHdhdmVzLWxpZ2h0XCIgaWQ9XCJuYmEtcGljLXRlc3RcIj5cclxuXHRcdFx0ICAgIFx0PGltZyBjbGFzcz1cImFjdGl2YXRvciBhdGhlbGV0ZS1jYXJkX19pbWdcIiBzcmM9XCIke2F0aGVsZXRlRHRscy5wbGF5ZXIub2ZmaWNpYWxJbWFnZVNyY31cIiBvbmVycm9yPVwidGhpcy5zcmM9J2h0dHA6Ly92aWEucGxhY2Vob2xkZXIuY29tLzI2MHgxOTAnO1wiIGFsdD1cIk1pc3NpbmcgSW1hZ2VcIiAvPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcblx0XHRcdCAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZSBhY3RpdmF0b3IgZ3JleS10ZXh0IHRleHQtZGFya2VuLTRcIiBpZD1cImNhcmRUaXRsZVwiPiR7YXRoZWxldGVEdGxzLnBsYXllci5maXJzdE5hbWV9ICR7YXRoZWxldGVEdGxzLnBsYXllci5sYXN0TmFtZX08L3NwYW4+XHJcblx0XHRcdCAgICAgIFxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY2FyZC1yZXZlYWxcIj5cclxuXHRcdFx0ICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCI+TW9yZSBkZXRhaWxzPGkgY2xhc3M9XCJtYXRlcmlhbC1pY29ucyByaWdodFwiPlg8L2k+PC9zcGFuPlxyXG5cdFx0XHQgICAgICA8cD5Cb3JuIGluICR7YXRoZWxldGVEdGxzLnBsYXllci5iaXJ0aENpdHl9ICR7YXRoZWxldGVEdGxzLnBsYXllci5iaXJ0aENvdW50cnl9PC9wPlxyXG5cdFx0XHQgICAgICA8cD5DYW1lIG91dCBvZjogJHtuYmFUZWFtcy5jb2xsZWdlT2ZBdGhlbGV0ZShhdGhlbGV0ZUR0bHMucGxheWVyLmNvbGxlZ2UpfTwvcD5cclxuXHRcdFx0ICAgICAgPHA+Q3VycmVudCBwb3NpdGlvbjogJHtuYmFUZWFtcy5wbGF5ZXJQb3NpdGlvbihhdGhlbGV0ZUR0bHMucGxheWVyLnBvc2l0aW9uKX08L3A+XHJcblx0XHRcdCAgICAgIDxwPkRyYWZ0ZXIgeWVhcjogJHthdGhlbGV0ZUR0bHMucGxheWVyLmRyYWZ0ZWR9PC9wPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdCAgPC9kaXY+XHJcblxyXG5cdFx0XHRgXHJcbn1cclxuXHJcbi8vZGlzcGxheSBwbGF5Y2FyZHMgdGVtcGxhdGVcclxubmJhVGVhbXMuc2hvd0F0aGVsZXRlID0gKHBsYXllckNhcmRzKSA9PntcclxuXHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBgXHJcblx0XHQgIFx0XHRcdDxoMSBjbGFzcz1cImFwcC10aXRsZVwiPk51bWIgb2YgcGxheWVyczogJHtwbGF5ZXJDYXJkcy5sZW5ndGh9PC9oMT5cclxuXHRcdCAgXHRcdFx0JHtwbGF5ZXJDYXJkcy5tYXAobmJhVGVhbXMuQXRoZWxldGVUZW1wbGF0ZSkuam9pbignJyl9XHJcblx0XHRgO1x0XHJcblx0XHRcdFxyXG5cclxufVxyXG5cclxuLy9hbGwgb3RoZXIgZnVuY3MgdmFyaWFibGVzIGxpdmUgaGVyZVxyXG5uYmFUZWFtcy5pbml0ID0gKCkgPT57XHJcblx0bmJhVGVhbXMuYWxsVGVhbXMoKTtcclxufTtcclxuXHJcbi8vbWFpbiBmdW5jIHRvIHJ1biBhcHBcclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0bmJhVGVhbXMuaW5pdCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl19
