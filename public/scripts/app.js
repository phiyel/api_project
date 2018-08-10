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
	return '\n\t\t\t<div class="card" id="card">\n\t\t\t    <div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">\n\t\t\t    \t<img class="activator athelete-card__img" src="' + atheleteDtls.player.officialImageSrc + '" onerror="this.src=\'http://via.placeholder.com/260x190\';" alt="Missing Image" />\n\t\t\t    </div>\n\t\t\t    <div class="card-content">\n\t\t\t      <span class="card-title activator grey-text text-darken-4" id="cardTitle">' + atheleteDtls.player.firstName + ' ' + atheleteDtls.player.lastName + ' <i class="material-icons right"><svg width="12" height="14" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve">\n<g>\n\t<path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>\n\t<path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>\n\t<path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>\n</g>\n</svg>\n</i></span>\n\t\t\t      \n\t\t\t    </div>\n\t\t\t    <div class="card-reveal">\n\t\t\t      <span class="card-title grey-text text-darken-4">More details<i class="material-icons right">X</i></span>\n\t\t\t      <p>Born in ' + atheleteDtls.player.birthCity + ' ' + atheleteDtls.player.birthCountry + '</p>\n\t\t\t      <p>Came out of: ' + nbaTeams.collegeOfAthelete(atheleteDtls.player.college) + '</p>\n\t\t\t      <p>Current position: ' + nbaTeams.playerPosition(atheleteDtls.player.position) + '</p>\n\t\t\t      <p>Drafter year: ' + atheleteDtls.player.drafted + '</p>\n\t\t\t    </div>\n\t\t\t  </div>\n\n\t\t\t';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rlc2t0b3AvVG9Eby9KYXZhU2NyaXB0MTgvYXBpUHJvamVjdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGV2L3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFLO0FBQ3hCLEdBQUUsSUFBRixDQUFPO0FBQ0wsUUFBTSxLQUREO0FBRUwsT0FBSywwREFGQTtBQUdMLFlBQVUsTUFITDtBQUlMLFNBQU8sS0FKRjtBQUtMLFdBQVM7QUFDUCxvQkFBaUIsV0FBVyxLQUFLLG1DQUFtQyxHQUFuQyxHQUF5QyxlQUE5QztBQURyQjtBQUxKLEVBQVAsRUFRRyxJQVJILENBUVEsVUFBQyxHQUFELEVBQVE7QUFDZjtBQUNDLE1BQU0sZ0JBQWdCLElBQUksT0FBMUI7QUFDQSxVQUFRLEdBQVIsQ0FBWSxhQUFaOztBQUdEO0FBQ0EsV0FBUyxZQUFULENBQXNCLGFBQXRCO0FBQ0EsRUFoQkQ7QUFpQkEsQ0FsQkQ7O0FBb0JBO0FBQ0EsU0FBUyxjQUFULEdBQTBCLFVBQUMsUUFBRCxFQUFhO0FBQ3RDLEtBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNyQixTQUFPLGVBQVA7QUFDQSxFQUZELE1BRU8sSUFBSSxZQUFZLEdBQWhCLEVBQW9CO0FBQzFCLFNBQU8sUUFBUDtBQUNBLEVBRk0sTUFFRCxJQUFJLFlBQVksSUFBaEIsRUFBcUI7QUFDMUIsU0FBTyxnQkFBUDtBQUNBLEVBRkssTUFFQSxJQUFJLFlBQVksSUFBaEIsRUFBcUI7QUFDMUIsU0FBTyxhQUFQO0FBQ0EsRUFGSyxNQUVBLElBQUksWUFBWSxJQUFoQixFQUFxQjtBQUMxQixTQUFPLGVBQVA7QUFDQSxFQUZLLE1BRUE7QUFDTDtBQUNBO0FBQ0QsQ0FkRDs7QUFnQkE7QUFDQSxTQUFTLGlCQUFULEdBQTZCLFVBQUMsUUFBRCxFQUFhO0FBQ3pDLEtBQUksWUFBWSxJQUFoQixFQUFzQjtBQUNyQixTQUFPLGFBQVA7QUFDQSxFQUZELE1BRU87QUFDTixTQUFPLFFBQVA7QUFDQTtBQUNELENBTkQ7O0FBUUE7QUFDQSxTQUFTLGdCQUFULEdBQTRCLFVBQUMsWUFBRCxFQUFpQjtBQUM1Qyx5TUFHd0QsYUFBYSxNQUFiLENBQW9CLGdCQUg1RSwyT0FNb0YsYUFBYSxNQUFiLENBQW9CLFNBTnhHLFNBTXFILGFBQWEsTUFBYixDQUFvQixRQU56SSxxd0JBbUJxQixhQUFhLE1BQWIsQ0FBb0IsU0FuQnpDLFNBbUJzRCxhQUFhLE1BQWIsQ0FBb0IsWUFuQjFFLDBDQW9CMEIsU0FBUyxpQkFBVCxDQUEyQixhQUFhLE1BQWIsQ0FBb0IsT0FBL0MsQ0FwQjFCLCtDQXFCK0IsU0FBUyxjQUFULENBQXdCLGFBQWEsTUFBYixDQUFvQixRQUE1QyxDQXJCL0IsMkNBc0IyQixhQUFhLE1BQWIsQ0FBb0IsT0F0Qi9DO0FBMkJBLENBNUJEOztBQThCQTtBQUNBLFNBQVMsWUFBVCxHQUF3QixVQUFDLFdBQUQsRUFBZ0I7O0FBRXJDLFVBQVMsY0FBVCxDQUF3QixlQUF4QixFQUF5QyxTQUF6Qyw2REFDNkMsWUFBWSxNQUR6RCwyQkFFTSxZQUFZLEdBQVosQ0FBZ0IsU0FBUyxnQkFBekIsRUFBMkMsSUFBM0MsQ0FBZ0QsRUFBaEQsQ0FGTjtBQU1GLENBUkQ7O0FBVUE7QUFDQSxTQUFTLElBQVQsR0FBZ0IsWUFBSztBQUNwQixVQUFTLFFBQVQ7QUFDQSxDQUZEOztBQUlBO0FBQ0EsRUFBRSxZQUFXOztBQUVaLFVBQVMsSUFBVDtBQUVBLENBSkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL29iamVjdCB0byBob2xkIGFwcFxyXG5jb25zdCBuYmFUZWFtcyA9IHt9O1xyXG5cclxuLy9nZXQgTkJBIHRlYW1zIGZyb20gdGhlIGFwaVxyXG5uYmFUZWFtcy5hbGxUZWFtcyA9ICgpID0+e1xyXG5cdCQuYWpheCh7XHJcblx0ICB0eXBlOiBcIkdFVFwiLFxyXG5cdCAgdXJsOiAnaHR0cHM6Ly9hcGkubXlzcG9ydHNmZWVkcy5jb20vdjIuMC9wdWxsL25iYS9wbGF5ZXJzLmpzb24nLFxyXG5cdCAgZGF0YVR5cGU6ICdqc29uJyxcclxuXHQgIGFzeW5jOiBmYWxzZSxcclxuXHQgIGhlYWRlcnM6IHtcclxuXHQgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgXCIgKyBidG9hKFwiNGUyOTIxMDUtMDI4Mi00OWM3LWJlYzctZDAyYzYyXCIgKyBcIjpcIiArIFwiTVlTUE9SVFNGRUVEU1wiKVxyXG5cdCAgfVxyXG5cdH0pLnRoZW4oKHJlcykgPT57XHJcblx0XHQvL2JvZHlcclxuXHRcdCBjb25zdCBwbGF5ZXJEZXRhaWxzID0gcmVzLnBsYXllcnM7XHJcblx0XHQgY29uc29sZS5sb2cocGxheWVyRGV0YWlscyk7XHJcblx0XHRcclxuXHJcblx0XHQvL1RvRG9cclxuXHRcdG5iYVRlYW1zLnNob3dBdGhlbGV0ZShwbGF5ZXJEZXRhaWxzKTtcclxuXHR9KTtcclxufTtcclxuXHJcbi8vQXRoZWxldGVzIHBvc2l0aW9uXHJcbm5iYVRlYW1zLnBsYXllclBvc2l0aW9uID0gKHBvc2l0aW9uKSA9PntcclxuXHRpZiAocG9zaXRpb24gPT0gJ1BGJykge1xyXG5cdFx0cmV0dXJuICdQb3dlciBGb3J3YXJkJ1xyXG5cdH0gZWxzZSBpZiAocG9zaXRpb24gPT0gJ0MnKXtcclxuXHRcdHJldHVybiAnQ2VudHJlJ1xyXG5cdH1lbHNlIGlmIChwb3NpdGlvbiA9PSAnU0cnKXtcclxuXHRcdHJldHVybiAnU2hvb3RpbmcgR3VhcmQnXHJcblx0fWVsc2UgaWYgKHBvc2l0aW9uID09ICdQRycpe1xyXG5cdFx0cmV0dXJuICdQb2ludCBHdWFyZCdcclxuXHR9ZWxzZSBpZiAocG9zaXRpb24gPT0gJ1NGJyl7XHJcblx0XHRyZXR1cm4gJ1NtYWxsIEZvcndhcmQnXHJcblx0fWVsc2Uge1xyXG5cdFx0cmV0dXJuXHJcblx0fVxyXG59XHJcblxyXG4vL0NvbGxlZ2Ugd2VudCBieSBBdGhlbGV0ZVxyXG5uYmFUZWFtcy5jb2xsZWdlT2ZBdGhlbGV0ZSA9IChjb2xsZWdlcykgPT57XHJcblx0aWYgKGNvbGxlZ2VzID09IG51bGwpIHtcclxuXHRcdHJldHVybiAnSGlnaCBTY2hvb2wnXHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBjb2xsZWdlcztcclxuXHR9XHJcbn1cclxuXHJcbi8vQXRoZWxldHMgZGV0YWlscyBsaXN0ZWRcclxubmJhVGVhbXMuQXRoZWxldGVUZW1wbGF0ZSA9IChhdGhlbGV0ZUR0bHMpID0+e1xyXG5cdHJldHVybiBgXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCJjYXJkXCI+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZSB3YXZlcy1lZmZlY3Qgd2F2ZXMtYmxvY2sgd2F2ZXMtbGlnaHRcIiBpZD1cIm5iYS1waWMtdGVzdFwiPlxyXG5cdFx0XHQgICAgXHQ8aW1nIGNsYXNzPVwiYWN0aXZhdG9yIGF0aGVsZXRlLWNhcmRfX2ltZ1wiIHNyYz1cIiR7YXRoZWxldGVEdGxzLnBsYXllci5vZmZpY2lhbEltYWdlU3JjfVwiIG9uZXJyb3I9XCJ0aGlzLnNyYz0naHR0cDovL3ZpYS5wbGFjZWhvbGRlci5jb20vMjYweDE5MCc7XCIgYWx0PVwiTWlzc2luZyBJbWFnZVwiIC8+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlIGFjdGl2YXRvciBncmV5LXRleHQgdGV4dC1kYXJrZW4tNFwiIGlkPVwiY2FyZFRpdGxlXCI+JHthdGhlbGV0ZUR0bHMucGxheWVyLmZpcnN0TmFtZX0gJHthdGhlbGV0ZUR0bHMucGxheWVyLmxhc3ROYW1lfSA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+PHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTRcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB2aWV3Qm94PVwiMCAwIDYwIDYwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XHJcbjxnPlxyXG5cdDxwYXRoIGQ9XCJNMzAsMTZjNC40MTEsMCw4LTMuNTg5LDgtOHMtMy41ODktOC04LThzLTgsMy41ODktOCw4UzI1LjU4OSwxNiwzMCwxNnpcIi8+XHJcblx0PHBhdGggZD1cIk0zMCw0NGMtNC40MTEsMC04LDMuNTg5LTgsOHMzLjU4OSw4LDgsOHM4LTMuNTg5LDgtOFMzNC40MTEsNDQsMzAsNDR6XCIvPlxyXG5cdDxwYXRoIGQ9XCJNMzAsMjJjLTQuNDExLDAtOCwzLjU4OS04LDhzMy41ODksOCw4LDhzOC0zLjU4OSw4LThTMzQuNDExLDIyLDMwLDIyelwiLz5cclxuPC9nPlxyXG48L3N2Zz5cclxuPC9pPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgXHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3M9XCJjYXJkLXJldmVhbFwiPlxyXG5cdFx0XHQgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGUgZ3JleS10ZXh0IHRleHQtZGFya2VuLTRcIj5Nb3JlIGRldGFpbHM8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIHJpZ2h0XCI+WDwvaT48L3NwYW4+XHJcblx0XHRcdCAgICAgIDxwPkJvcm4gaW4gJHthdGhlbGV0ZUR0bHMucGxheWVyLmJpcnRoQ2l0eX0gJHthdGhlbGV0ZUR0bHMucGxheWVyLmJpcnRoQ291bnRyeX08L3A+XHJcblx0XHRcdCAgICAgIDxwPkNhbWUgb3V0IG9mOiAke25iYVRlYW1zLmNvbGxlZ2VPZkF0aGVsZXRlKGF0aGVsZXRlRHRscy5wbGF5ZXIuY29sbGVnZSl9PC9wPlxyXG5cdFx0XHQgICAgICA8cD5DdXJyZW50IHBvc2l0aW9uOiAke25iYVRlYW1zLnBsYXllclBvc2l0aW9uKGF0aGVsZXRlRHRscy5wbGF5ZXIucG9zaXRpb24pfTwvcD5cclxuXHRcdFx0ICAgICAgPHA+RHJhZnRlciB5ZWFyOiAke2F0aGVsZXRlRHRscy5wbGF5ZXIuZHJhZnRlZH08L3A+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0ICA8L2Rpdj5cclxuXHJcblx0XHRcdGBcclxufVxyXG5cclxuLy9kaXNwbGF5IHBsYXljYXJkcyB0ZW1wbGF0ZVxyXG5uYmFUZWFtcy5zaG93QXRoZWxldGUgPSAocGxheWVyQ2FyZHMpID0+e1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpLmlubmVySFRNTCA9IGBcclxuXHRcdCAgXHRcdFx0PGgxIGNsYXNzPVwiYXBwLXRpdGxlXCI+TnVtYiBvZiBwbGF5ZXJzOiAke3BsYXllckNhcmRzLmxlbmd0aH08L2gxPlxyXG5cdFx0ICBcdFx0XHQke3BsYXllckNhcmRzLm1hcChuYmFUZWFtcy5BdGhlbGV0ZVRlbXBsYXRlKS5qb2luKCcnKX1cclxuXHRcdGA7XHRcclxuXHRcdFx0XHJcblxyXG59XHJcblxyXG4vL2FsbCBvdGhlciBmdW5jcyB2YXJpYWJsZXMgbGl2ZSBoZXJlXHJcbm5iYVRlYW1zLmluaXQgPSAoKSA9PntcclxuXHRuYmFUZWFtcy5hbGxUZWFtcygpO1xyXG59O1xyXG5cclxuLy9tYWluIGZ1bmMgdG8gcnVuIGFwcFxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRuYmFUZWFtcy5pbml0KCk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
