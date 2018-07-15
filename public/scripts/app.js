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
				var playerDetails = res.players; //res.leaguePlayers.players
				//console.log(playerDetails);


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
				var atheletes = firstName + '   ' + lastName; // \n  ${playerImg}
				// console.log(atheletes);

				//Append
				var madeName = function madeName() {

						var eachPlayerName = document.getElementById('nba-pic-test');
						//eachPlayerName.innerHTML += atheletes;
				};
				// madeName();

				//Create img element and setting it
				var imgURL = function imgURL() {

						var eachPlayerImg = document.createElement('img');
						eachPlayerImg.setAttribute("src", playerImg);
						//document.getElementById('nba-pic-test').append(eachPlayerImg);
				};
				//imgURL();

				var combineDataFunc = function combineDataFunc() {

						console.log('it works');
						var x = madeName();
						var y = imgURL();
						var card = document.getElementById('mainContainer');
						card.insertAdjacentHTML('afterbegin', '<div class="card" id="card"><div class="card-image waves-effect waves-block waves-light" id="nba-pic-test">y</div><div class="card-content"><span class="card-title activator grey-text text-darken-4" id="cardTitle">x</span><p><a href="#">This is a link</a></p></div><div class="card-reveal"><p>Here is some more information about this product that is only revealed once clicked on.</p></div></div>');
				};
				combineDataFunc();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0Rlc2t0b3AvVG9Eby9KYXZhU2NyaXB0MTgvYXBpUHJvamVjdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZGV2L3NjcmlwdHMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTtBQUNBLElBQU0sV0FBVyxFQUFqQjs7QUFFQTtBQUNBLFNBQVMsUUFBVCxHQUFvQixZQUFLO0FBQ3hCLElBQUUsSUFBRixDQUFPO0FBQ0wsVUFBTSxLQUREO0FBRUwsU0FBSywwREFGQTtBQUdMLGNBQVUsTUFITDtBQUlMLFdBQU8sS0FKRjtBQUtMLGFBQVM7QUFDUCx1QkFBaUIsV0FBVyxLQUFLLG1DQUFtQyxHQUFuQyxHQUF5QyxlQUE5QztBQURyQjtBQUxKLEdBQVAsRUFRRyxJQVJILENBUVEsVUFBQyxHQUFELEVBQVE7QUFDZjtBQUNDLFFBQU0sZ0JBQWdCLElBQUksT0FBMUIsQ0FGYyxDQUVvQjtBQUNuQzs7O0FBR0E7QUFDQSxhQUFTLFlBQVQsQ0FBc0IsYUFBdEI7QUFDQSxHQWhCRDtBQWlCQSxDQWxCRDs7QUFvQkE7QUFDQSxTQUFTLFlBQVQsR0FBd0IsVUFBQyxXQUFELEVBQWdCOztBQUVyQztBQUNELGNBQVksT0FBWixDQUFvQixVQUFDLE9BQUQsRUFBYTtBQUMvQjtBQUNBLFFBQU0sWUFBWSxRQUFRLE1BQVIsQ0FBZSxTQUFqQztBQUNBLFFBQU0sV0FBVyxRQUFRLE1BQVIsQ0FBZSxRQUFoQztBQUNBLFFBQU0sWUFBWSxRQUFRLE1BQVIsQ0FBZSxnQkFBakM7QUFDQSxRQUFNLFlBQWUsU0FBZixXQUE4QixRQUFwQyxDQUwrQixDQUtpQjtBQUNsRDs7QUFFRTtBQUNBLFFBQU0sV0FBVyxTQUFYLFFBQVcsR0FBSzs7QUFFdEIsVUFBTSxpQkFBaUIsU0FBUyxjQUFULENBQXdCLGNBQXhCLENBQXZCO0FBQ0E7QUFFQyxLQUxEO0FBTUQ7O0FBRUM7QUFDQSxRQUFNLFNBQVMsU0FBVCxNQUFTLEdBQUs7O0FBRXJCLFVBQU0sZ0JBQWdCLFNBQVMsYUFBVCxDQUF1QixLQUF2QixDQUF0QjtBQUNBLG9CQUFjLFlBQWQsQ0FBMkIsS0FBM0IsRUFBa0MsU0FBbEM7QUFDQTtBQUVFLEtBTkQ7QUFPQTs7QUFFRCxRQUFNLGtCQUFrQixTQUFsQixlQUFrQixHQUFLOztBQUU1QixjQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsVUFBSSxJQUFJLFVBQVI7QUFDQSxVQUFJLElBQUksUUFBUjtBQUNBLFVBQU0sT0FBTyxTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBYjtBQUNELFdBQUssa0JBQUwsQ0FBd0IsWUFBeEIsRUFBc0MsOFlBQXRDO0FBRUMsS0FSRDtBQVNBO0FBR0EsR0F2Q0Q7QUEwQ0QsQ0E3Q0Q7O0FBK0NBO0FBQ0EsU0FBUyxJQUFULEdBQWdCLFlBQUs7QUFDcEIsV0FBUyxRQUFUO0FBQ0EsQ0FGRDs7QUFJQTtBQUNBLEVBQUUsWUFBVzs7QUFFWixXQUFTLElBQVQ7QUFFQSxDQUpEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9vYmplY3QgdG8gaG9sZCBhcHBcclxuY29uc3QgbmJhVGVhbXMgPSB7fTtcclxuXHJcbi8vZ2V0IE5CQSB0ZWFtcyBmcm9tIHRoZSBhcGlcclxubmJhVGVhbXMuYWxsVGVhbXMgPSAoKSA9PntcclxuXHQkLmFqYXgoe1xyXG5cdCAgdHlwZTogXCJHRVRcIixcclxuXHQgIHVybDogJ2h0dHBzOi8vYXBpLm15c3BvcnRzZmVlZHMuY29tL3YyLjAvcHVsbC9uYmEvcGxheWVycy5qc29uJyxcclxuXHQgIGRhdGFUeXBlOiAnanNvbicsXHJcblx0ICBhc3luYzogZmFsc2UsXHJcblx0ICBoZWFkZXJzOiB7XHJcblx0ICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgYnRvYShcIjRlMjkyMTA1LTAyODItNDljNy1iZWM3LWQwMmM2MlwiICsgXCI6XCIgKyBcIk1ZU1BPUlRTRkVFRFNcIilcclxuXHQgIH1cclxuXHR9KS50aGVuKChyZXMpID0+e1xyXG5cdFx0Ly9ib2R5XHJcblx0XHQgY29uc3QgcGxheWVyRGV0YWlscyA9IHJlcy5wbGF5ZXJzOy8vcmVzLmxlYWd1ZVBsYXllcnMucGxheWVyc1xyXG5cdFx0Ly9jb25zb2xlLmxvZyhwbGF5ZXJEZXRhaWxzKTtcclxuXHRcdFxyXG5cclxuXHRcdC8vVG9Eb1xyXG5cdFx0bmJhVGVhbXMuc2hvd0F0aGVsZXRlKHBsYXllckRldGFpbHMpO1xyXG5cdH0pO1xyXG59O1xyXG5cclxuLy9kaXNwbGF5IHBsYXljYXJkcyBvbiBwYWdlXHJcbm5iYVRlYW1zLnNob3dBdGhlbGV0ZSA9IChwbGF5ZXJDYXJkcykgPT57XHJcblxyXG5cdFx0IC8vdHJ5IGZvciBlYWNoIHRvIGdldCBwbGF5ZXIgb2JqZWN0XHJcblx0XHRwbGF5ZXJDYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcblx0XHQgIC8vbGlzdCBhbGwgcGxheWVyc1xyXG5cdFx0ICBjb25zdCBmaXJzdE5hbWUgPSBlbGVtZW50LnBsYXllci5maXJzdE5hbWU7XHJcblx0XHQgIGNvbnN0IGxhc3ROYW1lID0gZWxlbWVudC5wbGF5ZXIubGFzdE5hbWU7XHJcblx0XHQgIGNvbnN0IHBsYXllckltZyA9IGVsZW1lbnQucGxheWVyLm9mZmljaWFsSW1hZ2VTcmM7XHJcblx0XHQgIGNvbnN0IGF0aGVsZXRlcyA9IGAke2ZpcnN0TmFtZX0gICAke2xhc3ROYW1lfWA7IC8vIFxcbiAgJHtwbGF5ZXJJbWd9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhhdGhlbGV0ZXMpO1xyXG5cclxuXHRcdCAgLy9BcHBlbmRcclxuXHRcdCAgY29uc3QgbWFkZU5hbWUgPSAoKSA9PntcclxuXHJcblx0XHQgIGNvbnN0IGVhY2hQbGF5ZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1waWMtdGVzdCcpO1xyXG5cdFx0ICAvL2VhY2hQbGF5ZXJOYW1lLmlubmVySFRNTCArPSBhdGhlbGV0ZXM7XHJcblx0XHQgIFx0XHJcblx0XHQgIH1cclxuXHRcdCAvLyBtYWRlTmFtZSgpO1xyXG5cclxuXHRcdCAgLy9DcmVhdGUgaW1nIGVsZW1lbnQgYW5kIHNldHRpbmcgaXRcclxuXHRcdCAgY29uc3QgaW1nVVJMID0gKCkgPT57XHJcblxyXG5cdFx0IGNvbnN0IGVhY2hQbGF5ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHRcdCBlYWNoUGxheWVySW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwbGF5ZXJJbWcpO1xyXG5cdFx0IC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25iYS1waWMtdGVzdCcpLmFwcGVuZChlYWNoUGxheWVySW1nKTtcclxuXHJcblx0XHQgIH1cclxuXHRcdCAgLy9pbWdVUkwoKTtcclxuXHJcblx0XHQgY29uc3QgY29tYmluZURhdGFGdW5jID0gKCkgPT57XHJcblxyXG5cdFx0IFx0Y29uc29sZS5sb2coJ2l0IHdvcmtzJyk7XHJcblx0XHQgXHRsZXQgeCA9IG1hZGVOYW1lKCk7XHJcblx0XHQgXHRsZXQgeSA9IGltZ1VSTCgpO1xyXG5cdFx0IFx0Y29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XHJcblx0XHRcdGNhcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgJzxkaXYgY2xhc3M9XCJjYXJkXCIgaWQ9XCJjYXJkXCI+PGRpdiBjbGFzcz1cImNhcmQtaW1hZ2Ugd2F2ZXMtZWZmZWN0IHdhdmVzLWJsb2NrIHdhdmVzLWxpZ2h0XCIgaWQ9XCJuYmEtcGljLXRlc3RcIj55PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPjxzcGFuIGNsYXNzPVwiY2FyZC10aXRsZSBhY3RpdmF0b3IgZ3JleS10ZXh0IHRleHQtZGFya2VuLTRcIiBpZD1cImNhcmRUaXRsZVwiPng8L3NwYW4+PHA+PGEgaHJlZj1cIiNcIj5UaGlzIGlzIGEgbGluazwvYT48L3A+PC9kaXY+PGRpdiBjbGFzcz1cImNhcmQtcmV2ZWFsXCI+PHA+SGVyZSBpcyBzb21lIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyBwcm9kdWN0IHRoYXQgaXMgb25seSByZXZlYWxlZCBvbmNlIGNsaWNrZWQgb24uPC9wPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuXHRcdCB9IFxyXG5cdFx0IGNvbWJpbmVEYXRhRnVuYygpO1xyXG5cclxuXHJcblx0XHR9KTtcclxuXHRcdFx0XHJcblxyXG59XHJcblxyXG4vL2FsbCBvdGhlciBmdW5jcyB2YXJpYWJsZXMgbGl2ZSBoZXJlXHJcbm5iYVRlYW1zLmluaXQgPSAoKSA9PntcclxuXHRuYmFUZWFtcy5hbGxUZWFtcygpO1xyXG59O1xyXG5cclxuLy9tYWluIGZ1bmMgdG8gcnVuIGFwcFxyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRuYmFUZWFtcy5pbml0KCk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iXX0=
