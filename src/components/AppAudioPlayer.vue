<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

import iPlay from './icons/iPlay.vue';
import iPause from './icons/iPause.vue';

const DEFAULT_AUDIO_ADDRESS =
	'https://www.americanrhetoric.com/mp3clips/politicalspeeches/gettysburgaddressjohnnycash.mp3';

// Define reactive values for this component
const currentAudioFileSource = ref<string>(DEFAULT_AUDIO_ADDRESS);
const previousAudioFileSource = ref<string>(DEFAULT_AUDIO_ADDRESS);
const playbackTime = ref<number>(0);
const audioDuration = ref<number>(Infinity);
const isPlaying = ref<boolean>(false);

// Computed properties are re-evaluated when their dependant values change
const audioSourceChanged = computed<boolean>(
	() => previousAudioFileSource.value !== currentAudioFileSource.value
);

// Template elements can also be referenced using `ref`
const audioPlayerElement = ref<HTMLAudioElement | null>(null);

// Define component's functionality
const onClickPlayButton = (): void => {
	setAudioSourceToUserInput();

	if (isPlaying.value) {
		stopPlaying();
	} else {
		startPlaying();
	}
};

const setAudioSourceToUserInput = (): void => {
	if (audioPlayerElement.value) {
		if (audioSourceChanged.value) {
			previousAudioFileSource.value = currentAudioFileSource.value;
			audioPlayerElement.value.src = currentAudioFileSource.value;
		}
	}
};

const startPlaying = (): void => {
	if (audioPlayerElement.value) {
		isPlaying.value = true;
		audioPlayerElement.value.play();
	}
};

const stopPlaying = (): void => {
	if (audioPlayerElement.value) {
		isPlaying.value = false;
		audioPlayerElement.value.pause();
	}
};

const onChangeCurrentAudioTime = (ev: Event): void => {
	if (audioPlayerElement.value) {
		audioPlayerElement.value.currentTime = +(ev.target as HTMLInputElement).value;
		playbackTime.value = +(ev.target as HTMLInputElement).value;
	}
};

const registerAudioPlayer = (): void => {
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

onMounted(() => registerAudioPlayer());
</script>

<template>
	<div class="audio">
		<audio class="hidden" ref="audioPlayerElement" controls>
			<source :src="currentAudioFileSource" type="audio/mpeg" />
		</audio>

		<div class="audio__input">
			<label class="audio__input__label" for="audio-http-address">Enter the adress of an audio file</label>
			<input
				class="audio__input__field"
				v-model="currentAudioFileSource"
				type="text"
				name="audio-http-address"
				id="audio-input"
			/>
		</div>

		<div class="audio__player">
			<button @click="onClickPlayButton" v-if="!isPlaying" class="audio__player__button">
				<i-play></i-play>
			</button>
			<button @click="onClickPlayButton" v-if="isPlaying" class="audio__player__button">
				<i-pause></i-pause>
			</button>

			<input
				class="audio__player__slider"
				type="range"
				step="0.01"
				:value="playbackTime"
				:max="audioDuration"
				min="0"
				@change="onChangeCurrentAudioTime"
			/>
		</div>
	</div>
</template>

<style scoped>
.audio {
	background-color: var(--accent-color-secondary);
	margin: auto;
	width: 100%;
	max-width: 24rem;
	padding: 1rem 1.5rem;
	border-radius: 8px;
}

.audio__input__label {
	color: #fff;
	background-color: transparent;
}

.audio__input {
	background-color: transparent;
}

.audio__input__field {
	margin: 0.25rem auto 1rem;
	width: 100%;
	padding: 0.5rem;
	border: 2px solid var(--accent-color-secondary);
	border-radius: 50px;
}

.audio__player {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--background-color-tartiary);
	padding: 0.5rem 1rem;
	border-radius: 50px;
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
	border-radius: 50px;
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
	border-radius: 50px;
}
input.audio__player__slider::-webkit-slider-thumb {
	background: var(--accent-color-primary);
	height: 1rem;
	width: 1rem;
	border-radius: 50px;
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
	border-radius: 50px;
}
input.audio__player__slider::-moz-range-thumb {
	background: var(--accent-color-primary);
	height: 1rem;
	width: 1rem;
	border-radius: 50px;
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
	background: var(--accent-color-primary);
	height: 1rem;
	width: 1rem;
	border-radius: 50px;
}
input.audio__player__slider:focus::-ms-fill-lower {
	background: transparent;
}
input.audio__player__slider:focus::-ms-fill-upper {
	background: transparent;
}
</style>
