<script setup lang="ts">
import { ref } from 'vue';
import AppInput from './components/AppInput.vue';

const username = ref<string>('');
</script>

<template>
	<app-input label="Choose a username" v-model="username"></app-input>
	<p v-if="username">
		Your name is <output> {{ username }} </output>
	</p>

	<p v-else>Enter your username</p>
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
