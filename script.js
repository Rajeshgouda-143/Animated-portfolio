const video1 = document.getElementById("projectvideo1");
const video2 = document.getElementById("projectvideo2");
const video3 = document.getElementById("projectvideo3");
const hoverSign = document.querySelector(".hover-sign");

const videoList = [video1,video2,video3];

videoList.forEach(function(video){
    video.addEventListener("mouseover",function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout",function(){
        video.pause()
        hoverSign.classList.remove("active")
    })
})


// contact button

function GotoContact(){
    document.getElementById("contact").scrollIntoView({
        behavior:"smooth"
    });
}

//go to project section

function GotoProject(){
    document.getElementById("project").scrollIntoView({
        behavior:"smooth"
    });
}

//go to skill section

function GotoSkills(){
    document.getElementById("skills").scrollIntoView({
        behavior:"smooth"
    });
}

//go to about section
function GotoAbout(){
    document.getElementById("about").scrollIntoView({
        behavior:"smooth"
    });
}