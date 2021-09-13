console.log("Zoom Controls Activated");

const global_video = document.querySelector('video');
var first_time = true;
const skip_time = 15;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        increaseVolume();
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
        decreaseVolume();
    }

    else if (e.keyCode == '37') {
        rewindVideo()
       // left arrow
    }
    else if (e.keyCode == '39') {
        forwardVideo();
       // right arrow
    }
    else if (e.keyCode == '32') {
        toggleVideo();
       // right arrow
    }
    else if (e.keyCode == '70') {
        toggleFullscreen();
       // right arrow
    }
    else if (e.keyCode == '77') {
        toggleMute();
       // right arrow
    }
    else if (e.keyCode == '188') {
        decreaseSpeed();
       // right arrow
    }
    else if (e.keyCode == '190') {
        increaseSpeed();
       // right arrow
    }


}

function increaseSpeed(){
    var video = getVideo();

    video.playbackRate = video.playbackRate + 0.5;

}

function decreaseSpeed(){
    var video = getVideo();

    video.playbackRate = (video.playbackRate - 0.5) < 0 ? 0.5 : (video.playbackRate - 0.5);

}




function toggleFullscreen(){
    var full_screen_button = document.getElementsByClassName("vjs-fullscreen-toggle-control-button vjs-control")[0];
    full_screen_button.click();

}

function toggleVideo(){
    var video = getVideo();

    if (video.paused) {
        video.play();
    }
    else{
        video.pause();
    }

}


function getVideo(){
    
    return global_video;
}


function toggleMute(){
    var video = getVideo();

    if (video.muted == true){
        video.muted = false;
    }
    else{
        video.muted = true;
    }

}

function increaseVolume(){
    var video = getVideo();

    if (video.muted == true){
        video.muted = false;
    }
    video.volume = (video.volume + 0.1) > 1 ? 1 : (video.volume + 0.1);
        

}
function decreaseVolume(){
    var video = getVideo();

    video.volume = (video.volume - 0.1) < 0 ? 0 : (video.volume - 0.1);


}

function forwardVideo(){
    var video = getVideo();

    video.currentTime = video.currentTime + skip_time;

}

function rewindVideo(){
    var video = getVideo();

    video.currentTime = video.currentTime - skip_time;

}


global_video.onplay = (event) => {
 
    if (first_time){
        contrl_div = document.getElementsByClassName("vjs-extend-control")[0];
        // contrl_div = document.getElementsByTagName('video')[0];

        let forward_div = document.createElement("div");
        forward_div.innerHTML = '<button style="cursor:pointer;margin-right:5px;" id ="forwardButton"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 40.499 40.5"  xml:space="preserve"><g><path d="M39.622,21.746l-6.749,6.75c-0.562,0.562-1.326,0.879-2.122,0.879s-1.56-0.316-2.121-0.879l-6.75-6.75 c-1.171-1.171-1.171-3.071,0-4.242c1.171-1.172,3.071-1.172,4.242,0l1.832,1.832C27.486,13.697,22.758,9.25,17,9.25 c-6.064,0-11,4.935-11,11c0,6.064,4.936,11,11,11c1.657,0,3,1.343,3,3s-1.343,3-3,3c-9.373,0-17-7.626-17-17s7.627-17,17-17 c8.936,0,16.266,6.933,16.936,15.698l1.442-1.444c1.172-1.172,3.072-1.172,4.242,0C40.792,18.674,40.792,20.574,39.622,21.746z" fill = "white"/></g></svg></button>'

        let rewind_div = document.createElement("div");
        rewind_div.innerHTML = '<button style="cursor:pointer;margin-right:10px;" id ="rewindButton"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 40.5 40.5" style="enable-background:new 0 0 40.5 40.5;" xml:space="preserve"><g><path d="M40.5,20.25c0,9.374-7.625,17-17,17c-1.656,0-3-1.343-3-3s1.344-3,3-3c6.064,0,11-4.936,11-11c0-6.065-4.936-11-11-11 c-5.756,0-10.486,4.447-10.953,10.086l1.832-1.832c1.171-1.172,3.071-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242l-6.75,6.75 c-0.563,0.562-1.326,0.879-2.121,0.879c-0.796,0-1.559-0.316-2.121-0.879l-6.75-6.75c-1.172-1.172-1.172-3.071,0-4.242 c1.172-1.172,3.071-1.172,4.243,0l1.444,1.444c0.669-8.766,8-15.698,16.934-15.698C32.875,3.25,40.5,10.876,40.5,20.25z" fill="white"/></g></svg></button>';

        // console.log(contrl_div);

        if (contrl_div){
            contrl_div.prepend(forward_div);
            contrl_div.prepend(rewind_div);
        }
        first_time = false;

        const btn1 = document.querySelector('#forwardButton');
        btn1.addEventListener('click', function(event){
            // console.log('Button Clicked');
            var video = getVideo();

            video.currentTime = video.currentTime + skip_time;
         });

         const btn2 = document.querySelector('#rewindButton');

         btn2.addEventListener('click', function(event){
            // console.log('Button Clicked');
            var video = getVideo();

            video.currentTime = video.currentTime - skip_time;
         });
        

    }

};







// let test_div = document.createElement("div")
// test_div.innerHTML = '<button style="cursor:pointer;color:white;" onclick="rewindVideo()" id ="forwardButton"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 40.499 40.5"  xml:space="preserve"><g><path d="M39.622,21.746l-6.749,6.75c-0.562,0.562-1.326,0.879-2.122,0.879s-1.56-0.316-2.121-0.879l-6.75-6.75 c-1.171-1.171-1.171-3.071,0-4.242c1.171-1.172,3.071-1.172,4.242,0l1.832,1.832C27.486,13.697,22.758,9.25,17,9.25 c-6.064,0-11,4.935-11,11c0,6.064,4.936,11,11,11c1.657,0,3,1.343,3,3s-1.343,3-3,3c-9.373,0-17-7.626-17-17s7.627-17,17-17 c8.936,0,16.266,6.933,16.936,15.698l1.442-1.444c1.172-1.172,3.072-1.172,4.242,0C40.792,18.674,40.792,20.574,39.622,21.746z" fill = "white"/></g></svg></button>'
// test_div.id="test_remove"

// contrl_div.prepend(test_div)


// document.getElementById("test_remove").remove();