<script setup lang="ts">
import { h, Component, useSlots, useAttrs } from 'vue';
interface AppContainerProps {
	tag: keyof HTMLElementTagNameMap;
	page?: boolean;
	centered?: boolean;
}
type AppContainerClass = 'container--centered' | 'container--page';

const props = withDefaults(defineProps<AppContainerProps>(), {
	tag: 'div',
	centered: false,
	page: false,
});

const slots = useSlots();
const attrs = useAttrs();

const propClassMap: {
	prop: keyof AppContainerProps;
	class: AppContainerClass;
}[] = [
	{
		prop: 'centered',
		class: 'container--centered',
	},
	{
		prop: 'page',
		class: 'container--page',
	},
];

const assembleContainerStyles = () => {
	let containerClasses = ['container'];
	propClassMap.forEach((entry) => {
		if ([props[entry.prop]]) {
			containerClasses.push(entry.class);
		}
	});
	return containerClasses;
};

const AppContainer: Component = () => {
	return h(props.tag, attrs, slots);
};
</script>

<template>
	<app-container :class="assembleContainerStyles()">
		<slot />
	</app-container>
</template>

<style scoped>
.container {
	background-color: var(--background-color-tartiary);
	margin: auto;
	width: 100vw;
	max-width: 1200px;
	padding-left: 5rem;
	padding-right: 5rem;
}

.container--centered {
	display: flex;
	flex-grow: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.container--page {
	min-height: 100vh;
}
</style>
