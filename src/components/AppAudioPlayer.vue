<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

import iPlay from './icons/iPlay.vue';
import iPause from './icons/iPause.vue';

const DEFAULT_AUDIO_ADDRESS =
	'https://www.americanrhetoric.com/mp3clips/politicalspeeches/gettysburgaddressjohnnycash.mp3';

// Define reactive values for this component
const audioFileSource = ref<string>(DEFAULT_AUDIO_ADDRESS);
const playbackTime = ref<number>(0);
const audioDuration = ref<number>(Infinity);
const isPlaying = ref<boolean>(false);

// Template elements can also be referenced using `ref`
const audioPlayerElement = ref<HTMLAudioElement | null>(null);

// Define component's functionality
const onClick = (): void | Promise<void> => {
	if (audioPlayerElement.value) {
		isPlaying.value = !isPlaying.value;

		if (isPlaying.value) {
			return audioPlayerElement.value.pause();
		}
		return audioPlayerElement.value.play();
	}
};

const onChange = (ev: Event): void => {
	if (audioPlayerElement.value) {
		audioPlayerElement.value.currentTime = +(ev.target as HTMLInputElement).value;
		playbackTime.value = +(ev.target as HTMLInputElement).value;
	}
};

const syncAudioPlayer = (): void => {
	if (audioPlayerElement.value) {
		audioPlayerElement.value.ontimeupdate = () => {
			audioDuration.value = audioPlayerElement.value?.duration || Infinity;
			playbackTime.value = audioPlayerElement.value?.currentTime || 0;
		};
		audioPlayerElement.value.onended = () => {
			isPlaying.value = false;
		};
	}
};

onMounted(() => syncAudioPlayer());
</script>

<template>
	<div class="audio">
		<audio class="hidden" ref="audioPlayerElement" controls>
			<source :src="audioFileSource" type="audio/mpeg" />
		</audio>

		<label class="hidden" for="audio-http-address">Enter the adress of a audio file</label>
		<input
			class="audio__input"
			v-model="audioFileSource"
			type="text"
			name="audio-http-address"
			id="audio-input"
		/>

		<div class="audio__player">
			<button @click="onClick" v-if="!isPlaying" class="audio__player__button">
				<i-play></i-play>
			</button>
			<button @click="onClick" v-if="isPlaying" class="audio__player__button">
				<i-pause></i-pause>
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
	padding: 0.5rem;
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
