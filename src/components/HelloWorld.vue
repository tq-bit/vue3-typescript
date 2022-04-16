<script setup lang="ts">
import { ref, withDefaults} from 'vue';
import AppButton from './AppButton.vue';

const props = withDefaults(
  defineProps<{
    msg: string;
  }>(),
  { msg: 'Hello World!' }
);

const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <app-button v-ripple type="button" @click="increment">count is: {{ count }}</app-button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
