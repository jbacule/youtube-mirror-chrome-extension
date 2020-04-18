chrome.storage.local.get("mirrorStatus", function(data){
            
    if(data.mirrorStatus === "enabled"){
        $("#mirror-button").html("Unmirror Video");
    }

    if(data.mirrorStatus === "disabled"){
        $("#mirror-button").html("Mirror Video");
    }
})

$(document).ready(function() {
    $('#mirror-button').click(function(){
        chrome.storage.local.get("mirrorStatus", function(data){
            
            if(data.mirrorStatus === "enabled"){
                $("#mirror-button").html("Mirror Video");
                chrome.storage.local.set({"mirrorStatus": "disabled"});
            }

            if(data.mirrorStatus === "disabled"){
                $("#mirror-button").html("Unmirror Video");
                chrome.storage.local.set({"mirrorStatus": "enabled"});
            }
        })
        chrome.tabs.executeScript({
            file: "js/content.js"
        });
    })
});