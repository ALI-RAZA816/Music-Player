// adding song lists
let songs = [
    {
        filepath : "music/Tak Tak Funk (Slowed).mp4",
        fileName : " Tak Tak Funk"
    },
    {
        filepath : "music/Tea for Tat - Verified Picasso.mp3",
        fileName : " Tea for Tat"
    },
    {
        filepath : "music/Hensonn - Sahara (Slowed) - 128.mp3",
        fileName : " Hensonn - Sahara"
    },
    {
        filepath : "music/Style (Dub) - 128.mp3",
        fileName : " Style (Dub)"
    },
    {
        filepath : "music/Heavy Rain Lofi Hip Hop  City - 128.mp3",
         fileName : " Heavy Rain Lofi Hip Hop  City"
        
    },
    {
        filepath : "music/Lofi Hip Hop  Beats to relax - 128.mp3",
         fileName : " Lofi Hip Hop  Beats to relax"
        
    },
    {
        filepath : "music/Lofi Hip Hop  Chill Vibes - 128.mp3",
         fileName : "Lofi Hip Hop  Chill Vibes"
        
    },
    {
        filepath : "music/Lofi Hip Hop  JazzHop - 128.mp3",
         fileName : "Lofi Hip Hop  JazzHop"
        
    },
    {
        filepath : "music/Lofi Hip Hop  Nature - 128.mp3",
         fileName : "Lofi Hip Hop  Nature"
        ,
    },
    {
        filepath : "music/Lofi Hip Hop  Night - 128.mp3",
         fileName : "Lofi Hip Hop  Night"
        
    },
    {
        filepath : "music/Lofi Hip Hop  Night Park - 128.mp3",
         fileName : "Lofi Hip Hop  Night Park"
        
    }
]

// song index
let songindex = 0;
// playButton to handle play/pause
let playbutton = document.getElementById('playbtn');
let songname = document.getElementById('name');
let audioElement = new Audio();

// add event to play button to play song
playbutton.addEventListener('click',()=>{
    if(playbutton.className == 'fa-solid fa-circle-play'){
        playbutton.className = 'fa-solid fa-circle-pause';
        audioElement.src = songs[0].filepath;
        audioElement.play();
        songname.style.opacity = 1;
        songname.textContent = `Music:${songs[0].fileName}`;
    }else{
        playbutton.className = 'fa-solid fa-circle-play';
        audioElement.pause();
    }
});

// adding event to farwardbtn to play a next song
let forwardBtn = document.getElementById('forward-btn');
forwardBtn.addEventListener('click',()=>{
    if(songindex < songs.length){
        audioElement.src = songs[songindex].filepath;
        songname.innerHTML = `Music:${songs[songindex].fileName}`;
        playbutton.className = 'fa-solid fa-circle-pause';
        songname.style.opacity = 1;
        audioElement.play();
        songindex++;
    }else{
        songindex = 0;
    }
});
// adding event to farwardbtn to play a previous song
let backwardBtn = document.getElementById('backward-btn');
backwardBtn.addEventListener('click',()=>{
    if(songindex > 0){
        audioElement.src = songs[songindex - 1].filepath;
        songname.innerHTML = `Music:${songs[songindex - 1].fileName}`;
        playbutton.className = 'fa-solid fa-circle-pause';
        songname.style.opacity = 1;
        audioElement.play();
        songindex--;
    }else{
        songindex = songs.length;
        audioElement.src = songs[songindex - 1].filepath;
        audioElement.play();
    }
});
let progressBar = document.getElementById('progress-bar');
audioElement.addEventListener('timeupdate',()=>{
    progressBar.value = parseInt(audioElement.currentTime/audioElement.duration*100);
});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
});





