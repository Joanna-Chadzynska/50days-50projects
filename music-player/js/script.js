const musicContainer = document.querySelector('.music-container');
const prev = document.getElementById('pre');
const play = document.getElementById('play');
const next = document.getElementById('next');
const audio = document.getElementById('audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.getElementById('progress');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const volumeControl = document.getElementById('volume');
const volumeToggle = document.querySelector('.volume-change');
const currentTimeSpan = document.querySelector('.current');
const durationSpan = document.querySelector('.duration');

// for legacy browsers
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
const track = audioContext.createMediaElementSource(audio);

track.connect(gainNode).connect(audioContext.destination);

const tracks = [
	'creativeminds',
	'funnysong',
	'goinghigher',
	'hey',
	'littleidea',
	'theelevatorbossanova',
	'ukulele',
];

let trackIndex = 2;
let currentGainNode = 1;

// load song into DOM
loadTrack(tracks[trackIndex]);

// update songs details
function loadTrack(song) {
	const titleCapitalized = song.charAt(0).toUpperCase() + song.slice(1);
	title.innerText = titleCapitalized;
	audio.src = `assets/music/${song}.mp3`;
	cover.src = `assets/images/${song}.jpg`;
}

function pauseTrack() {
	musicContainer.classList.remove('play');
	musicContainer.classList.add('pause');
	play.querySelector('i.fas').classList.add('fa-play');
	play.querySelector('i.fas').classList.remove('fa-pause');
	audio.pause();
}

function playTrack() {
	musicContainer.classList.add('play');
	play.querySelector('i.fas').classList.remove('fa-play');
	play.querySelector('i.fas').classList.add('fa-pause');
	audio.play();
}

function prevTrack() {
	trackIndex--;

	if (trackIndex < 0) {
		trackIndex = tracks.length - 1;
	}

	loadTrack(tracks[trackIndex]);
	playTrack();
}

function nextTrack() {
	trackIndex++;

	if (trackIndex > tracks.length - 1) {
		trackIndex = 0;
	}

	loadTrack(tracks[trackIndex]);
	playTrack();
}

function updateProgress(e) {
	const progressPercent = (audio.currentTime / audio.duration) * 100;
	progress.style.width = `${progressPercent}%`;
	const currentTime = formatTime(audio.currentTime);
	currentTimeSpan.textContent = currentTime;
}

function setProgress(e) {
	const width = this.clientWidth;
	const clickX = e.offsetX;
	const duration = audio.duration;
	audio.currentTime = (clickX / width) * duration;
}

function formatTime(time) {
	const min = Math.floor(time / 60);
	const sec = Math.floor(time % 60);
	return `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

// Event listeners
play.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play');
	// check if context is in suspended state (autoplay policy)
	if (audioContext.state === 'suspended') {
		audioContext.resume();
	}
	if (isPlaying) {
		pauseTrack();
	} else {
		playTrack();
	}
});

prev.addEventListener('click', prevTrack);

next.addEventListener('click', nextTrack);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextTrack);

audio.addEventListener('loadedmetadata', () => {
	const trackDuration = formatTime(audio.duration);
	durationSpan.textContent = trackDuration;
});

volumeControl.addEventListener(
	'input',
	function () {
		gainNode.gain.value = this.value;
		currentGainNode = this.value;
		if (gainNode.gain.value === 0) {
			volumeToggle.querySelector('i.fas').classList.remove('fa-volume-down');
			volumeToggle.querySelector('i.fas').classList.add('fa-volume-mute');
		} else if (gainNode.gain.value > 1.5) {
			volumeToggle.querySelector('i.fas').classList.remove('fa-volume-down');
			volumeToggle.querySelector('i.fas').classList.add('fa-volume-up');
		} else {
			volumeToggle.querySelector('i.fas').classList.add('fa-volume-down');
			volumeToggle.querySelector('i.fas').classList.remove('fa-volume-up');
			volumeToggle.querySelector('i.fas').classList.remove('fa-volume-mute');
		}
	},
	false
);

volumeToggle.addEventListener('click', function () {
	if (gainNode.gain.value > 0) {
		gainNode.gain.value = 0;
		volumeToggle.querySelector('i.fas').classList.remove('fa-volume-down');
		volumeToggle.querySelector('i.fas').classList.add('fa-volume-mute');
	} else {
		gainNode.gain.value = currentGainNode;
		volumeToggle.querySelector('i.fas').classList.add('fa-volume-down');
		volumeToggle.querySelector('i.fas').classList.remove('fa-volume-mute');
	}
});
