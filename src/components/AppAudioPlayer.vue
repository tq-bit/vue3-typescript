<script setup lang="ts">
import { onMounted, ref } from 'vue';

import iPlay from '../icons/iPlay.vue';
import iPause from '../icons/iPause.vue';

const audioPlayer = ref<HTMLAudioElement | null>(null);
const playbackTime = ref<number>(0);
const audioDuration = ref<number>(Infinity);
const isPlaying = ref<boolean>(false);

const audioFileSource = ref<string>(
	'https://www.americanrhetoric.com/mp3clips/politicalspeeches/gettysburgaddressjohnnycash.mp3'
);
</script>

<template>
	<div class="audio">
		<audio class="hidden" ref="audioPlayerElement" controls>
			<source :src="audioFileSource" type="audio/mpeg" />
		</audio>

		<div class="audio-player">
			<input
				class="audio__player__slider"
				type="range"
				step="0.01"
				:value="playbackTime"
				:max="audioDuration"
				min="0"
				@change="onChange"
			/>
		</div>
	</div>
</template>

<style scoped>
.audio {
}

.audio__input {
}

.audio__player {
}

.audio__player__button {
}

.audio__player__slider {
}

.hidden {
	display: none;
}

input.audio__player__slider {
	background: var(--background-color-secondary);
	cursor: pointer;
	width: 100%;
	height: 1rem;
	-webkit-appearance: none;
}
input.audio__player__slider:focus {
	outline: none;
}
input.audio__player__slider::-webkit-slider-runnable-track {
	background: var(--background-color-secondary);
	cursor: pointer;
	width: 100%;
	height: 1rem;
	-webkit-appearance: none;
}
input.audio__player__slider::-webkit-slider-thumb {
	background: var(--accent-color-primary);
	height: 1rem;
	width: 1rem;
	-webkit-appearance: none;
	appearance: none;
}
input.audio__player__slider:focus::-webkit-slider-runnable-track {
	background: var(--background-color-tartiary);
}
input.audio__player__slider::-moz-range-track {
	background: var(--background-color-secondary);
	cursor: pointer;
	width: 100%;
	height: 1rem;
}
input.audio__player__slider::-moz-range-thumb {
	height: 1rem;
	width: 1rem;
	background: var(--accent-color-primary);
}
input.audio__player__slider::-ms-track {
	background: var(--background-color-secondary);
	cursor: pointer;
	width: 100%;
	height: 1rem;
}
input.audio__player__slider::-ms-fill-lower {
	background: var(--background-color-secondary);
}
input.audio__player__slider::-ms-fill-upper {
	background: var(--background-color-secondary);
}
input.audio__player__slider::-ms-thumb {
	height: 1rem;
	width: 1rem;
	background: var(--accent-color-primary);
}
input.audio__player__slider:focus::-ms-fill-lower {
	background: transparent;
}
input.audio__player__slider:focus::-ms-fill-upper {
	background: transparent;
}
</style>
