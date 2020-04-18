executeContentScript();

$('video.video-stream.html5-main-video').on('play', function(e) { 
    chrome.storage.local.set({'mirrorStatus':'disabled'});
    executeContentScript()
});

function executeContentScript(){
    //set  mirror status to disable
    chrome.storage.local.get("mirrorStatus", function(data){
        if(data.mirrorStatus == undefined){
            chrome.storage.local.set({'mirrorStatus':'disabled'});
        }
        
        if(data.mirrorStatus == "enabled"){
            setMirrorStyle();
        }else{
            removeMirrorStyle();
        }
    })
}

function setMirrorStyle(){
    $('.video-stream.html5-main-video').css("transform","rotateY(180deg)");
    $('.video-stream.html5-main-video').css("-webkit-transform","rotateY(180deg)");
    $('.video-stream.html5-main-video').css("-moz-transform","rotateY(180deg)");
}

function removeMirrorStyle(){
    $('.video-stream.html5-main-video').css("transform","");
    $('.video-stream.html5-main-video').css("-webkit-transform","");
    $('.video-stream.html5-main-video').css("-moz-transform","");
}

