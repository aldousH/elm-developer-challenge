/**
 * Created by alexsewell on 6/3/16.
 */


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: '2QkLK7EG1Hw',
        events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
            'onStateChange': stateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

function seek(sec){
    if(player){
        player.seekTo(sec, true);
    }
}

var timestamp, chapter, timer;

function timestamp_reached() {
    $('#ch' + chapter).click();
    timestamp_callback();
}

function timestamp_callback() {
    clearTimeout(timer);

    var current_time = player.getCurrentTime();
    console.log(current_time);
    if (current_time < 131) {
        timestamp = 131;
        chapter = 1;
    } else if (131 < current_time && current_time < 336) {
        timestamp = 336;
        chapter = 2;
    } else if (336 < current_time && current_time < 760) {
        timestamp = 761;
        chapter = 3;
    }

    remaining_time = timestamp - current_time;
    if (remaining_time > 0) {
     
        timer = setTimeout(timestamp_reached, remaining_time * 1000);
    }
}

function stateChange(video) {
    if (video.data == YT.PlayerState.PLAYING) {
        timestamp_callback();
    }
}
