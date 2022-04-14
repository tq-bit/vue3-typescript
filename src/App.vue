<script setup lang="ts">
import AppCard from './components/AppCard.vue';
import AppContainer from './components/AppContainer.vue';
</script>

<template>
	<app-container tag="main" :page="true" :centered="true">
		<app-card>
			<template v-slot:header> Functional components</template>
			<template v-slot:default>
				<p>
					This card element is a default HTML template while the outer container is rendered
					dynamically. You're free to toggle its tag, whether it should fill the whole page or
					whether this card is centered.
				</p>
			</template>
			<template v-slot:footer> Card footer </template>
		</app-card>
	</app-container>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
</style>
