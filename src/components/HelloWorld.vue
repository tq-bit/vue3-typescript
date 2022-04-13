<script setup lang="ts">
import { ref, withDefaults, useSlots, useAttrs } from 'vue';

const props = withDefaults(
  defineProps<{
    msg: string;
  }>(),
  { msg: 'Hello World!' }
);

const emit = defineEmits<{
  (event: 'click', count: number): void;
}>();

const slots = useSlots();
const attributes = useAttrs()

const count = ref<number>(0);
const increment = () => count.value++;
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="increment">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
