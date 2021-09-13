function checkboxSetter(stream_service,switch_name){
    var checkbox = document.getElementById(switch_name);


    chrome.storage.sync.get(stream_service, function(result) {
        console.log('Value currently is ' + result[stream_service]);
        value = result[stream_service];
    
        if (value || value == undefined){
            console.log("ALREADY TRUE")
          document.getElementById(switch_name).checked=true;
    
        }
        else{
            console.log("FALSE")
          document.getElementById(switch_name).checked=false;
    
        }
    
      });




    checkbox.addEventListener('change', function() {
      if (this.checked) {
          var value = true;
    
        chrome.storage.sync.set({[stream_service]: value}, function() {
            console.log('Value for '+stream_service+' is set to ' + value);
          });
      } else {
        var value = false;
        chrome.storage.sync.set({[stream_service]: value}, function() {
            console.log('Value for '+stream_service+' is set to ' + value);
          });
      }
    });


}
checkboxSetter('Netflix','netflixSwitch');
checkboxSetter('Disney+','disneySwitch');
checkboxSetter('Prime','amazonSwitch');
checkboxSetter('Peacock','peacockSwitch');
// checkboxSetter('Hulu','huluSwitch');
checkboxSetter('YouTube','youtubeSwitch');




// NOTIFICATION
function turnOffNotificationIcon(notif_icon){

    notif_icon.classList.remove('fa-bell');
    notif_icon.classList.add('fa-bell-slash');

}

function turnOnNotificationIcon(notif_icon){

    notif_icon.classList.remove('fa-bell-slash');
    notif_icon.classList.add('fa-bell');

}

var notif_key = "notification";
var notif_icon = document.getElementById("notif")

chrome.storage.sync.get(notif_key, function(result) {
    console.log('NOTIF Value currently is ' + result[notif_key]);
    value = result[notif_key];

    if (value || value == undefined){
      console.log("NOTIF undefined or TRUE")


    }
    else{
      console.log("NOTIF FALSE")
      turnOffNotificationIcon(notif_icon);
    //   turnOnNotificationIcon(notif_icon);
      chrome.storage.sync.set({[notif_key]:true},function(){});
    }

  });






  notif_icon.addEventListener("click", function(){

    generateNotification("Hello");
    
    chrome.storage.sync.get(notif_key, function(result) {
        value = result[notif_key];
    
        if (value){
          turnOffNotificationIcon(notif_icon);
          chrome.storage.sync.set({[notif_key]:false},function(){});
    
        }
        else{
          turnOnNotificationIcon(notif_icon);
          chrome.storage.sync.set({[notif_key]:true},function(){});


        }
    
      });
    

});




function generateNotification(serv){

    // console.log(document.getElementById('message'));
    if (document.getElementById('message') == null )
    {
        console.log("HELLO")
        var button = document.createElement("div");
        button.innerHTML = '<div id="message">Notifications</div>';
        button.style = "top:10px;right:10px;position:absolute;z-index: 9999"
        document.body.appendChild(button);
        setTimeout(disableNotification,3000);}
    else if (document.getElementById('message').style.display == "none" ){
        document.getElementById('message').style.display="block";
        setTimeout(disableNotification,3000);}

    }




function disableNotification(){
    document.getElementById('message').style.display="none";
}