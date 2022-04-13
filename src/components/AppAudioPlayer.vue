<script setup lang="ts">
import { onMounted, ref } from 'vue';

import iPlay from '../icons/iPlay.vue';
import iPause from '../icons/iPause.vue';


</script>

<template>
	<div>
		<audio class="hidden" src=""></audio>
	</div>
</template>

<style scoped>
.audio {}

.audio__input {}

.audio__player {}

.hidden {
  display: none;
}
</style>
