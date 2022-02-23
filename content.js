function setMirrorStyle(){
    document.querySelector('.video-stream.html5-main-video').style['transform'] = "rotateY(180deg)"
    document.querySelector('.video-stream.html5-main-video').style['-webkit-transform'] = "rotateY(180deg)"
    document.querySelector('.video-stream.html5-main-video').style['-moz-transform'] = "rotateY(180deg)"
    document.querySelector('#mirror-video').setAttribute('is-mirrored', true)
    document.querySelector('#mirror-video').textContent = "🔍 MIRRORED"
}

function removeMirrorStyle(){
    document.querySelector('.video-stream.html5-main-video').style['transform'] = ""
    document.querySelector('.video-stream.html5-main-video').style['-webkit-transform'] = ""
    document.querySelector('.video-stream.html5-main-video').style['-moz-transform'] = ""
    document.querySelector('#mirror-video').setAttribute('is-mirrored', false)
    document.querySelector('#mirror-video').textContent = "🔍 MIRROR"
}

function loadClickEvent(){
    document.querySelector('#mirror-video').addEventListener('click', function(){
        let isMirrored = document.querySelector('#mirror-video').getAttribute('is-mirrored')
        if(isMirrored === 'true'){
            removeMirrorStyle();
        }else{
            setMirrorStyle();
        }
    })
}

function init(){
    setTimeout(function (){
        if(document.querySelector('a#mirror-video')){
            document.querySelector('a#mirror-video').remove()
        }
        document.querySelector('div#top-level-buttons-computed').insertAdjacentHTML('afterbegin',
        `<a id="mirror-video" is-mirrored="false" class="mirror-video" href="javascript:void(0)" style="text-decoration:none; color:#CC0000; font-size:15px; margin-top:8px; font-weight:500; margin-right:10px;">🔍 MIRROR</a>`)
        loadClickEvent()
    }, 5000)
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("URL CHANGED: " + request.data.url);
    init();
    sendResponse()
    return true;
});


