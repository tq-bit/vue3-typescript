<script setup lang="ts">
import { onMounted, ref } from 'vue';

import iPlay from './icons/iPlay.vue';
import iPause from './icons/iPause.vue';

const DEFAULT_AUDIO_ADDRESS =
	'https://www.americanrhetoric.com/mp3clips/politicalspeeches/gettysburgaddressjohnnycash.mp3';

const audioPlayer = ref<HTMLAudioElement | null>(null);
const audioFileSource = ref<string>(DEFAULT_AUDIO_ADDRESS);
const playbackTime = ref<number>(0);
const audioDuration = ref<number>(Infinity);
const isPlaying = ref<boolean>(false);
</script>

<template>
	<div class="audio">
		<audio class="hidden" ref="audioPlayerElement" controls>
			<source :src="audioFileSource" type="audio/mpeg" />
		</audio>

		<input
			class="audio__input"
			v-model="audioFileSource"
			type="text"
			name="audio-http-address"
			id="audio-input"
		/>

		<div class="audio__player">
			<button v-if="isPlaying" class="audio__player__button">
				<i-play></i-play>
			</button>
			<button v-else class="audio__player__button">
				<i-play></i-play>
			</button>

			<input
				class="audio__player__slider"
				type="range"
				step="0.01"
				:value="playbackTime"
				:max="audioDuration"
				min="0"
				@change="onChange"
			/>
			<label class="hidden" for="audio-http-address">Enter the adress of a audio file</label>
		</div>
	</div>
</template>

<style scoped>
.audio {
	width: 18rem;
	margin: auto;
}

.audio__input {
	width: 100%;
	padding: 0.5rem;
	border: 2px solid var(--accent-color-secondary);
	border-radius: 4px;
}

.audio__player {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
	background-color: var(--background-color-tartiary);
	padding: 0.5rem
}

.audio__player__button {
	border: none;
	outline: none;
	cursor: pointer;
	background-color: transparent;
	height: 1.5rem;
	margin: 0 0.5rem 0 0;
	padding: 0;
}

.hidden {
	display: none;
}

input.audio__player__slider {
	background: var(--background-color-secondary);
	cursor: pointer;
	-webkit-appearance: none;
	width: 100%;
	height: 1rem;
}
input.audio__player__slider:focus {
	outline: none;
}
input.audio__player__slider::-webkit-slider-runnable-track {
	background: var(--background-color-secondary);
	cursor: pointer;
	-webkit-appearance: none;
	width: 100%;
	height: 1rem;
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
