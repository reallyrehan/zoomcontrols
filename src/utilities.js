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

    // else if (e.keyCode == '37') {
    //     rewindVideo()
    //    // left arrow
    // }
    // else if (e.keyCode == '39') {
    //     forwardVideo();
    //    // right arrow
    // }
    // else if (e.keyCode == '32') {
    //     console.log('space bar')

    //     toggleVideo();
    //    // right arrow
    // }
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
    else if (e.keyCode == '67') {
        toggleSubtitle();
       // right arrow
    }
    else if (e.keyCode == '80') {
        togglePictureInPicture();
       // right arrow
    }


}

function togglePictureInPicture(){

    if (document.pictureInPictureElement){
        document.exitPictureInPicture();
    }
    else{
        var video = getVideo();
        video.requestPictureInPicture();
    }


}



function toggleSubtitle(){
    var cc_button = document.querySelector(".vjs-captions-control-button");

    if (cc_button){
        cc_button.click();

    }

}

function updateSpeed(s){
    speed_html = document.getElementById('speed_button');
    if (speed_html){
        document.getElementById('speed_button').innerText = s+'x';
    }
}

function increaseSpeed(){
    var video = getVideo();

    video.playbackRate = video.playbackRate + 0.5;
    updateSpeed(video.playbackRate);

}

function decreaseSpeed(){
    var video = getVideo();

    video.playbackRate = (video.playbackRate - 0.5) < 0 ? 0 : (video.playbackRate - 0.5);
    updateSpeed(video.playbackRate);
}




function toggleFullscreen(){
    var full_screen_button = document.querySelector(".vjs-fullscreen-toggle-control-button");

    if (!full_screen_button){
        var full_screen_button = document.querySelector(".vjs-fullscreen-control");

    }

    if (!full_screen_button){
        
        var video = getVideo();
        if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            video.requestFullscreen();
          }
    }
    full_screen_button.click();




    // console.log("new full screen")
    // var video = getVideo();
    // if (document.fullscreenElement) {
    //     document.exitFullscreen();
    //   } else {
    //     video.requestFullscreen();
    //   }

}

function toggleVideo(){
    var video = getVideo();
    console.log(video.paused)

    if (video.paused) {
        console.log('playing')
        video.play();
    }
    else{
        console.log('pausing')
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

        let speed_div = document.createElement("div");
        speed_div.innerHTML = '<span id = "speed_button" style="margin-right:15px;">1x</span>';

        let picture_div = document.createElement("div");
        picture_div.innerHTML = '<button style="cursor:pointer;margin-top:2px;" id ="pictureButton"> <svg width="28" height="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" overflow="hidden"><defs><clipPath id="clip0"><rect x="2511" y="1159" width="28" height="18"/></clipPath></defs><g clip-path="url(#clip0)" transform="translate(-2511 -1159)"><path d="M2512.5 1163.17C2512.5 1161.69 2513.69 1160.5 2515.17 1160.5L2532.83 1160.5C2534.31 1160.5 2535.5 1161.69 2535.5 1163.17L2535.5 1173.83C2535.5 1175.31 2534.31 1176.5 2532.83 1176.5L2515.17 1176.5C2513.69 1176.5 2512.5 1175.31 2512.5 1173.83Z" stroke="#FFFFFF" stroke-width="1.14583" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="8" stroke-opacity="1" fill="none" fill-rule="evenodd"/><path d="M2516 1164.17C2516 1163.52 2516.52 1163 2517.17 1163L2523.83 1163C2524.48 1163 2525 1163.52 2525 1164.17L2525 1168.83C2525 1169.48 2524.48 1170 2523.83 1170L2517.17 1170C2516.52 1170 2516 1169.48 2516 1168.83Z" fill="#FFFFFF" fill-rule="evenodd" fill-opacity="1"/></g></svg></button>';


        if (contrl_div){

            first_time = false;

            contrl_div.prepend(forward_div);
            contrl_div.prepend(rewind_div);
            contrl_div.prepend(speed_div);
            contrl_div.append(picture_div);

            

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
    
             const btn3 = document.querySelector('#pictureButton');
    
             btn3.addEventListener('click', function(event){
                // console.log('Button Clicked');
                // var video = getVideo();
    
                // video.requestPictureInPicture();
                togglePictureInPicture();
             });

        }
 



        

    }

};







// let test_div = document.createElement("div")
// test_div.innerHTML = '<button style="cursor:pointer;color:white;" onclick="rewindVideo()" id ="forwardButton"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10px" height="10px" viewBox="0 0 40.499 40.5"  xml:space="preserve"><g><path d="M39.622,21.746l-6.749,6.75c-0.562,0.562-1.326,0.879-2.122,0.879s-1.56-0.316-2.121-0.879l-6.75-6.75 c-1.171-1.171-1.171-3.071,0-4.242c1.171-1.172,3.071-1.172,4.242,0l1.832,1.832C27.486,13.697,22.758,9.25,17,9.25 c-6.064,0-11,4.935-11,11c0,6.064,4.936,11,11,11c1.657,0,3,1.343,3,3s-1.343,3-3,3c-9.373,0-17-7.626-17-17s7.627-17,17-17 c8.936,0,16.266,6.933,16.936,15.698l1.442-1.444c1.172-1.172,3.072-1.172,4.242,0C40.792,18.674,40.792,20.574,39.622,21.746z" fill = "white"/></g></svg></button>'
// test_div.id="test_remove"

// contrl_div.prepend(test_div)


// document.getElementById("test_remove").remove();