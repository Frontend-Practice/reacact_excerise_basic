console.log("Hello boy! this is excirise day 1.");

setInterval(function(){
	var imageBanner = document.querySelector(".header-section-image-zoom-auto");
	imageBanner.className = "header-section-image-zoom-auto zoom";
	setTimeout(function(){
		imageBanner.className = "header-section-image-zoom-auto";
	}, 1500);
}, 10000);


var player;

function onPlayerReady(event) {
	return;
    event.target.playVideo();
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player-trailer', {
      	height: '0',
      	width: '0',
      	videoId: 'LGy5ZxH_J_M',
      	frameborder: "0",
      	playsinline: 1,
      	disablekb : 0,
      	events: {
        	'onReady': onPlayerReady,
      	}
    });
}

function playVideo() {
    player.playVideo();
    var iframe = document.getElementById("youtube-player-trailer");
    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
  	if (requestFullScreen) {
   		requestFullScreen.bind(iframe)();
  	}
}

function stopVideo() {
    player.stopVideo();
}

document.addEventListener("fullscreenchange", function() {
  if (!document.fullscreenElement) stopVideo();
}, false);

document.addEventListener("msfullscreenchange", function() {
  if (!document.msFullscreenElement) stopVideo();
}, false);

document.addEventListener("mozfullscreenchange", function() {
  if (!document.mozFullScreen) stopVideo();
}, false);

document.addEventListener("webkitfullscreenchange", function() {
  if (!document.webkitIsFullScreen) stopVideo();
}, false);