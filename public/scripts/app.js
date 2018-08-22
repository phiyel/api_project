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

//Drafted year
nbaTeams.TeamDraftedYear = function (draftLeague) {

	if (draftLeague == null) {

		return 'Was not drafted';
	} else {

		return draftLeague.year;
	}
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
	return '\n\t\t\t<div class="card" id="card">\n\t\t\t    <div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">\n\t\t\t    \t<img class="activator athelete-card__img" src="' + atheleteDtls.player.officialImageSrc + '" onerror="this.src=\'http://via.placeholder.com/260x190\';" alt="Missing Image" />\n\t\t\t    </div>\n\t\t\t    <div class="card-content">\n\t\t\t      <span class="card-title activator grey-text text-darken-4" id="cardTitle">' + atheleteDtls.player.firstName + ' ' + atheleteDtls.player.lastName + ' <i class="material-icons right"><svg width="12" height="14" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">\n<g>\n\t<path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>\n\t<path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>\n\t<path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>\n</g>\n</svg>\n</i></span>\n\t\t\t      \n\t\t\t    </div>\n\t\t\t    <div class="card-reveal">\n\t\t\t      <span class="card-title grey-text text-darken-4">More details<i class="material-icons right">X</i></span>\n\t\t\t      <p>Born in ' + atheleteDtls.player.birthCity + ' ' + atheleteDtls.player.birthCountry + '</p>\n\t\t\t      <p>Came out of: ' + nbaTeams.collegeOfAthelete(atheleteDtls.player.college) + '</p>\n\t\t\t      <p>Current position: ' + nbaTeams.playerPosition(atheleteDtls.player.primaryPosition) + '</p>\n\t\t\t      <p>Drafter year: ' + nbaTeams.TeamDraftedYear(atheleteDtls.player.drafted) + '</p>\n\t\t\t    </div>\n\t\t\t  </div>\n\n\t\t\t';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rlc2t0b3AvVG9Eby9KYXZhU2NyaXB0MTgvYXBpUHJvamVjdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGV2L3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFLO0FBQ3hCLEdBQUUsSUFBRixDQUFPO0FBQ0wsUUFBTSxLQUREO0FBRUwsT0FBSywwREFGQTtBQUdMLFlBQVUsTUFITDtBQUlMLFNBQU8sS0FKRjtBQUtMLFdBQVM7QUFDUCxvQkFBaUIsV0FBVyxLQUFLLG1DQUFtQyxHQUFuQyxHQUF5QyxlQUE5QztBQURyQjtBQUxKLEVBQVAsRUFRRyxJQVJILENBUVEsVUFBQyxHQUFELEVBQVE7QUFDZjtBQUNDLE1BQU0sZ0JBQWdCLElBQUksT0FBMUI7QUFDQSxVQUFRLEdBQVIsQ0FBWSxhQUFaOztBQUdEO0FBQ0EsV0FBUyxZQUFULENBQXNCLGFBQXRCO0FBQ0EsRUFoQkQ7QUFpQkEsQ0FsQkQ7O0FBdUJBO0FBQ0EsU0FBUyxlQUFULEdBQTJCLFVBQUMsV0FBRCxFQUFnQjs7QUFFMUMsS0FBSSxlQUFlLElBQW5CLEVBQXlCOztBQUV4QixTQUFPLGlCQUFQO0FBRUEsRUFKRCxNQUlPOztBQUVOLFNBQU8sWUFBWSxJQUFuQjtBQUNBO0FBRUQsQ0FYRDs7QUFhQTtBQUNBLFNBQVMsY0FBVCxHQUEwQixVQUFDLFFBQUQsRUFBYTtBQUN0QyxLQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDckIsU0FBTyxlQUFQO0FBQ0EsRUFGRCxNQUVPLElBQUksWUFBWSxHQUFoQixFQUFvQjtBQUMxQixTQUFPLFFBQVA7QUFDQSxFQUZNLE1BRUQsSUFBSSxZQUFZLElBQWhCLEVBQXFCO0FBQzFCLFNBQU8sZ0JBQVA7QUFDQSxFQUZLLE1BRUEsSUFBSSxZQUFZLElBQWhCLEVBQXFCO0FBQzFCLFNBQU8sYUFBUDtBQUNBLEVBRkssTUFFQSxJQUFJLFlBQVksSUFBaEIsRUFBcUI7QUFDMUIsU0FBTyxlQUFQO0FBQ0EsRUFGSyxNQUVBO0FBQ0w7QUFDQTtBQUNELENBZEQ7O0FBZ0JBO0FBQ0EsU0FBUyxpQkFBVCxHQUE2QixVQUFDLFFBQUQsRUFBYTtBQUN6QyxLQUFJLFlBQVksSUFBaEIsRUFBc0I7QUFDckIsU0FBTyxhQUFQO0FBQ0EsRUFGRCxNQUVPO0FBQ04sU0FBTyxRQUFQO0FBQ0E7QUFDRCxDQU5EOztBQVFBO0FBQ0EsU0FBUyxnQkFBVCxHQUE0QixVQUFDLFlBQUQsRUFBaUI7QUFDNUMseU1BR3dELGFBQWEsTUFBYixDQUFvQixnQkFINUUsMk9BTW9GLGFBQWEsTUFBYixDQUFvQixTQU54RyxTQU1xSCxhQUFhLE1BQWIsQ0FBb0IsUUFOekkscXdCQW1CcUIsYUFBYSxNQUFiLENBQW9CLFNBbkJ6QyxTQW1Cc0QsYUFBYSxNQUFiLENBQW9CLFlBbkIxRSwwQ0FvQjBCLFNBQVMsaUJBQVQsQ0FBMkIsYUFBYSxNQUFiLENBQW9CLE9BQS9DLENBcEIxQiwrQ0FxQitCLFNBQVMsY0FBVCxDQUF3QixhQUFhLE1BQWIsQ0FBb0IsZUFBNUMsQ0FyQi9CLDJDQXNCMkIsU0FBUyxlQUFULENBQXlCLGFBQWEsTUFBYixDQUFvQixPQUE3QyxDQXRCM0I7QUEyQkEsQ0E1QkQ7O0FBOEJBO0FBQ0EsU0FBUyxZQUFULEdBQXdCLFVBQUMsV0FBRCxFQUFnQjs7QUFFckMsVUFBUyxjQUFULENBQXdCLGVBQXhCLEVBQXlDLFNBQXpDLDZEQUM2QyxZQUFZLE1BRHpELDJCQUVNLFlBQVksR0FBWixDQUFnQixTQUFTLGdCQUF6QixFQUEyQyxJQUEzQyxDQUFnRCxFQUFoRCxDQUZOO0FBTUYsQ0FSRDs7QUFXQTtBQUNBLFNBQVMsSUFBVCxHQUFnQixZQUFLO0FBQ3BCLFVBQVMsUUFBVDtBQUVBLENBSEQ7O0FBS0E7QUFDQSxFQUFFLFlBQVc7O0FBRVosVUFBUyxJQUFUO0FBRUEsQ0FKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vb2JqZWN0IHRvIGhvbGQgYXBwXHJcbmNvbnN0IG5iYVRlYW1zID0ge307XHJcblxyXG4vL2dldCBOQkEgdGVhbXMgZnJvbSB0aGUgYXBpXHJcbm5iYVRlYW1zLmFsbFRlYW1zID0gKCkgPT57XHJcblx0JC5hamF4KHtcclxuXHQgIHR5cGU6IFwiR0VUXCIsXHJcblx0ICB1cmw6ICdodHRwczovL2FwaS5teXNwb3J0c2ZlZWRzLmNvbS92Mi4wL3B1bGwvbmJhL3BsYXllcnMuanNvbicsXHJcblx0ICBkYXRhVHlwZTogJ2pzb24nLFxyXG5cdCAgYXN5bmM6IGZhbHNlLFxyXG5cdCAgaGVhZGVyczoge1xyXG5cdCAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoXCI0ZTI5MjEwNS0wMjgyLTQ5YzctYmVjNy1kMDJjNjJcIiArIFwiOlwiICsgXCJNWVNQT1JUU0ZFRURTXCIpXHJcblx0ICB9XHJcblx0fSkudGhlbigocmVzKSA9PntcclxuXHRcdC8vYm9keVxyXG5cdFx0IGNvbnN0IHBsYXllckRldGFpbHMgPSByZXMucGxheWVycztcclxuXHRcdCBjb25zb2xlLmxvZyhwbGF5ZXJEZXRhaWxzKTtcclxuXHRcdFxyXG5cclxuXHRcdC8vVG9Eb1xyXG5cdFx0bmJhVGVhbXMuc2hvd0F0aGVsZXRlKHBsYXllckRldGFpbHMpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuXHJcblxyXG4gXHJcbi8vRHJhZnRlZCB5ZWFyXHJcbm5iYVRlYW1zLlRlYW1EcmFmdGVkWWVhciA9IChkcmFmdExlYWd1ZSkgPT57XHJcblx0XHJcblx0aWYgKGRyYWZ0TGVhZ3VlID09IG51bGwpIHtcclxuXHJcblx0XHRyZXR1cm4gJ1dhcyBub3QgZHJhZnRlZCdcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIGRyYWZ0TGVhZ3VlLnllYXI7XHJcblx0fVxyXG5cclxufVxyXG5cclxuLy9BdGhlbGV0ZXMgcG9zaXRpb25cclxubmJhVGVhbXMucGxheWVyUG9zaXRpb24gPSAocG9zaXRpb24pID0+e1xyXG5cdGlmIChwb3NpdGlvbiA9PSAnUEYnKSB7XHJcblx0XHRyZXR1cm4gJ1Bvd2VyIEZvcndhcmQnXHJcblx0fSBlbHNlIGlmIChwb3NpdGlvbiA9PSAnQycpe1xyXG5cdFx0cmV0dXJuICdDZW50cmUnXHJcblx0fWVsc2UgaWYgKHBvc2l0aW9uID09ICdTRycpe1xyXG5cdFx0cmV0dXJuICdTaG9vdGluZyBHdWFyZCdcclxuXHR9ZWxzZSBpZiAocG9zaXRpb24gPT0gJ1BHJyl7XHJcblx0XHRyZXR1cm4gJ1BvaW50IEd1YXJkJ1xyXG5cdH1lbHNlIGlmIChwb3NpdGlvbiA9PSAnU0YnKXtcclxuXHRcdHJldHVybiAnU21hbGwgRm9yd2FyZCdcclxuXHR9ZWxzZSB7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcbn1cclxuXHJcbi8vQ29sbGVnZSB3ZW50IGJ5IEF0aGVsZXRlXHJcbm5iYVRlYW1zLmNvbGxlZ2VPZkF0aGVsZXRlID0gKGNvbGxlZ2VzKSA9PntcclxuXHRpZiAoY29sbGVnZXMgPT0gbnVsbCkge1xyXG5cdFx0cmV0dXJuICdIaWdoIFNjaG9vbCdcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIGNvbGxlZ2VzO1xyXG5cdH1cclxufVxyXG5cclxuLy9BdGhlbGV0cyBkZXRhaWxzIGxpc3RlZFxyXG5uYmFUZWFtcy5BdGhlbGV0ZVRlbXBsYXRlID0gKGF0aGVsZXRlRHRscykgPT57XHJcblx0cmV0dXJuIGBcclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIiBpZD1cImNhcmRcIj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlIHdhdmVzLWVmZmVjdCB3YXZlcy1ibG9jayB3YXZlcy1saWdodFwiIGlkPVwibmJhLXBpYy10ZXN0XCI+XHJcblx0XHRcdCAgICBcdDxpbWcgY2xhc3M9XCJhY3RpdmF0b3IgYXRoZWxldGUtY2FyZF9faW1nXCIgc3JjPVwiJHthdGhlbGV0ZUR0bHMucGxheWVyLm9mZmljaWFsSW1hZ2VTcmN9XCIgb25lcnJvcj1cInRoaXMuc3JjPSdodHRwOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8yNjB4MTkwJztcIiBhbHQ9XCJNaXNzaW5nIEltYWdlXCIgLz5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG5cdFx0XHQgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGUgYWN0aXZhdG9yIGdyZXktdGV4dCB0ZXh0LWRhcmtlbi00XCIgaWQ9XCJjYXJkVGl0bGVcIj4ke2F0aGVsZXRlRHRscy5wbGF5ZXIuZmlyc3ROYW1lfSAke2F0aGVsZXRlRHRscy5wbGF5ZXIubGFzdE5hbWV9IDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj48c3ZnIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCIxNFwiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXHJcblx0IHZpZXdCb3g9XCIwIDAgNjAgNjBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAgNjA7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cclxuPGc+XHJcblx0PHBhdGggZD1cIk0zMCwxNmM0LjQxMSwwLDgtMy41ODksOC04cy0zLjU4OS04LTgtOHMtOCwzLjU4OS04LDhTMjUuNTg5LDE2LDMwLDE2elwiLz5cclxuXHQ8cGF0aCBkPVwiTTMwLDQ0Yy00LjQxMSwwLTgsMy41ODktOCw4czMuNTg5LDgsOCw4czgtMy41ODksOC04UzM0LjQxMSw0NCwzMCw0NHpcIi8+XHJcblx0PHBhdGggZD1cIk0zMCwyMmMtNC40MTEsMC04LDMuNTg5LTgsOHMzLjU4OSw4LDgsOHM4LTMuNTg5LDgtOFMzNC40MTEsMjIsMzAsMjJ6XCIvPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG48L2k+PC9zcGFuPlxyXG5cdFx0XHQgICAgICBcclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgPGRpdiBjbGFzcz1cImNhcmQtcmV2ZWFsXCI+XHJcblx0XHRcdCAgICAgIDxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZSBncmV5LXRleHQgdGV4dC1kYXJrZW4tNFwiPk1vcmUgZGV0YWlsczxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5YPC9pPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgPHA+Qm9ybiBpbiAke2F0aGVsZXRlRHRscy5wbGF5ZXIuYmlydGhDaXR5fSAke2F0aGVsZXRlRHRscy5wbGF5ZXIuYmlydGhDb3VudHJ5fTwvcD5cclxuXHRcdFx0ICAgICAgPHA+Q2FtZSBvdXQgb2Y6ICR7bmJhVGVhbXMuY29sbGVnZU9mQXRoZWxldGUoYXRoZWxldGVEdGxzLnBsYXllci5jb2xsZWdlKX08L3A+XHJcblx0XHRcdCAgICAgIDxwPkN1cnJlbnQgcG9zaXRpb246ICR7bmJhVGVhbXMucGxheWVyUG9zaXRpb24oYXRoZWxldGVEdGxzLnBsYXllci5wcmltYXJ5UG9zaXRpb24pfTwvcD5cclxuXHRcdFx0ICAgICAgPHA+RHJhZnRlciB5ZWFyOiAke25iYVRlYW1zLlRlYW1EcmFmdGVkWWVhcihhdGhlbGV0ZUR0bHMucGxheWVyLmRyYWZ0ZWQpfTwvcD5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQgIDwvZGl2PlxyXG5cclxuXHRcdFx0YFxyXG59XHJcblxyXG4vL2Rpc3BsYXkgcGxheWNhcmRzIHRlbXBsYXRlXHJcbm5iYVRlYW1zLnNob3dBdGhlbGV0ZSA9IChwbGF5ZXJDYXJkcykgPT57XHJcblxyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIikuaW5uZXJIVE1MID0gYFxyXG5cdFx0ICBcdFx0XHQ8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj5OdW1iIG9mIHBsYXllcnM6ICR7cGxheWVyQ2FyZHMubGVuZ3RofTwvaDE+XHJcblx0XHQgIFx0XHRcdCR7cGxheWVyQ2FyZHMubWFwKG5iYVRlYW1zLkF0aGVsZXRlVGVtcGxhdGUpLmpvaW4oJycpfVxyXG5cdFx0YDtcdFxyXG5cdFx0XHRcclxuXHJcbn1cclxuXHJcblxyXG4vL2FsbCBvdGhlciBmdW5jcyB2YXJpYWJsZXMgbGl2ZSBoZXJlXHJcbm5iYVRlYW1zLmluaXQgPSAoKSA9PntcclxuXHRuYmFUZWFtcy5hbGxUZWFtcygpO1xyXG5cclxufTtcclxuXHJcbi8vbWFpbiBmdW5jIHRvIHJ1biBhcHBcclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0bmJhVGVhbXMuaW5pdCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl19
