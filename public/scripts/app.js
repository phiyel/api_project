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
		var playerDetails = res.leaguePlayers.players;
		console.log(playerDetails);

		//ToDo
		nbaTeams.showAthelete(playerDetails);
	});
};

//display playcards on page
nbaTeams.showAthelete = function (playerCards) {

	//try for each to get player object
	playerCards.forEach(function (element) {
		//list all players
		var firstName = element.player.firstName;
		var lastName = element.player.lastName;
		var playerImg = element.player.officialImageSrc;
		//let playerDraftedBy = element.player.drafted.team.abbreviation;
		var atheletes = firstName + '   ' + lastName + ' \n  ' + playerImg;
		console.log(atheletes);
	});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rlc2t0b3AvVG9Eby9KYXZhU2NyaXB0MTgvYXBpUHJvamVjdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGV2L3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFLO0FBQ3hCLEdBQUUsSUFBRixDQUFPO0FBQ0wsUUFBTSxLQUREO0FBRUwsT0FBSywwREFGQTtBQUdMLFlBQVUsTUFITDtBQUlMLFNBQU8sS0FKRjtBQUtMLFdBQVM7QUFDUCxvQkFBaUIsV0FBVyxLQUFLLG1DQUFtQyxHQUFuQyxHQUF5QyxlQUE5QztBQURyQjtBQUxKLEVBQVAsRUFRRyxJQVJILENBUVEsVUFBQyxHQUFELEVBQVE7QUFDZjtBQUNDLE1BQU0sZ0JBQWdCLElBQUksYUFBSixDQUFrQixPQUF4QztBQUNELFVBQVEsR0FBUixDQUFZLGFBQVo7O0FBR0E7QUFDQSxXQUFTLFlBQVQsQ0FBc0IsYUFBdEI7QUFDQSxFQWhCRDtBQWlCQSxDQWxCRDs7QUFvQkE7QUFDQSxTQUFTLFlBQVQsR0FBd0IsVUFBQyxXQUFELEVBQWdCOztBQUVyQztBQUNELGFBQVksT0FBWixDQUFvQixVQUFDLE9BQUQsRUFBYTtBQUMvQjtBQUNBLE1BQUksWUFBWSxRQUFRLE1BQVIsQ0FBZSxTQUEvQjtBQUNBLE1BQUksV0FBVyxRQUFRLE1BQVIsQ0FBZSxRQUE5QjtBQUNBLE1BQUksWUFBWSxRQUFRLE1BQVIsQ0FBZSxnQkFBL0I7QUFDQTtBQUNBLE1BQU0sWUFBZSxTQUFmLFdBQThCLFFBQTlCLGFBQThDLFNBQXBEO0FBQ0EsVUFBUSxHQUFSLENBQVksU0FBWjtBQUNELEVBUkQ7QUFXRCxDQWREOztBQWdCQTtBQUNBLFNBQVMsSUFBVCxHQUFnQixZQUFLO0FBQ3BCLFVBQVMsUUFBVDtBQUNBLENBRkQ7O0FBSUE7QUFDQSxFQUFFLFlBQVc7O0FBRVosVUFBUyxJQUFUO0FBRUEsQ0FKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vb2JqZWN0IHRvIGhvbGQgYXBwXHJcbmNvbnN0IG5iYVRlYW1zID0ge307XHJcblxyXG4vL2dldCBOQkEgdGVhbXMgZnJvbSB0aGUgYXBpXHJcbm5iYVRlYW1zLmFsbFRlYW1zID0gKCkgPT57XHJcblx0JC5hamF4KHtcclxuXHQgIHR5cGU6IFwiR0VUXCIsXHJcblx0ICB1cmw6ICdodHRwczovL2FwaS5teXNwb3J0c2ZlZWRzLmNvbS92Mi4wL3B1bGwvbmJhL3BsYXllcnMuanNvbicsXHJcblx0ICBkYXRhVHlwZTogJ2pzb24nLFxyXG5cdCAgYXN5bmM6IGZhbHNlLFxyXG5cdCAgaGVhZGVyczoge1xyXG5cdCAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoXCI0ZTI5MjEwNS0wMjgyLTQ5YzctYmVjNy1kMDJjNjJcIiArIFwiOlwiICsgXCJNWVNQT1JUU0ZFRURTXCIpXHJcblx0ICB9XHJcblx0fSkudGhlbigocmVzKSA9PntcclxuXHRcdC8vYm9keVxyXG5cdFx0IGNvbnN0IHBsYXllckRldGFpbHMgPSByZXMubGVhZ3VlUGxheWVycy5wbGF5ZXJzO1xyXG5cdFx0Y29uc29sZS5sb2cocGxheWVyRGV0YWlscyk7XHJcblx0XHRcclxuXHJcblx0XHQvL1RvRG9cclxuXHRcdG5iYVRlYW1zLnNob3dBdGhlbGV0ZShwbGF5ZXJEZXRhaWxzKTtcclxuXHR9KTtcclxufTtcclxuXHJcbi8vZGlzcGxheSBwbGF5Y2FyZHMgb24gcGFnZVxyXG5uYmFUZWFtcy5zaG93QXRoZWxldGUgPSAocGxheWVyQ2FyZHMpID0+e1xyXG5cclxuXHRcdCAvL3RyeSBmb3IgZWFjaCB0byBnZXQgcGxheWVyIG9iamVjdFxyXG5cdFx0cGxheWVyQ2FyZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG5cdFx0ICAvL2xpc3QgYWxsIHBsYXllcnNcclxuXHRcdCAgbGV0IGZpcnN0TmFtZSA9IGVsZW1lbnQucGxheWVyLmZpcnN0TmFtZTtcclxuXHRcdCAgbGV0IGxhc3ROYW1lID0gZWxlbWVudC5wbGF5ZXIubGFzdE5hbWU7XHJcblx0XHQgIGxldCBwbGF5ZXJJbWcgPSBlbGVtZW50LnBsYXllci5vZmZpY2lhbEltYWdlU3JjO1xyXG5cdFx0ICAvL2xldCBwbGF5ZXJEcmFmdGVkQnkgPSBlbGVtZW50LnBsYXllci5kcmFmdGVkLnRlYW0uYWJicmV2aWF0aW9uO1xyXG5cdFx0ICBjb25zdCBhdGhlbGV0ZXMgPSBgJHtmaXJzdE5hbWV9ICAgJHtsYXN0TmFtZX0gXFxuICAke3BsYXllckltZ31gO1xyXG5cdFx0ICBjb25zb2xlLmxvZyhhdGhlbGV0ZXMpO1xyXG5cdFx0fSk7XHJcblx0XHRcdFxyXG5cclxufVxyXG5cclxuLy9hbGwgb3RoZXIgZnVuY3MgdmFyaWFibGVzIGxpdmUgaGVyZVxyXG5uYmFUZWFtcy5pbml0ID0gKCkgPT57XHJcblx0bmJhVGVhbXMuYWxsVGVhbXMoKTtcclxufTtcclxuXHJcbi8vbWFpbiBmdW5jIHRvIHJ1biBhcHBcclxuJChmdW5jdGlvbigpIHtcclxuXHJcblx0bmJhVGVhbXMuaW5pdCgpO1xyXG5cclxufSk7XHJcblxyXG5cclxuIl19
