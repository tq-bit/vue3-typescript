<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import AppAudioPlayer from './components/AppAudioPlayer.vue';
</script>

<template>
	<h1>Vue 3 + Typescript: Reactivity</h1>
  <h2>Build your own audio player component</h2>

	<app-audio-player></app-audio-player>
	<p>You can find more speeches here:</p>
	<ul>
		<li>
			<a href="https://www.americanrhetoric.com/" target="_blank">American Rhetoric</a>
		</li>
		<li>
			<a href="https://commons.wikimedia.org/wiki/Category:Audio_files_of_speeches" target="_blank">Wikimedia speeches</a>
		</li>
	</ul>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
