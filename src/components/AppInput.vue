<script setup lang="ts">
withDefaults(
	defineProps<{
		label: string;
		required: boolean;
		modelValue: string | number;
	}>(),
	{
		label: 'Choose a username',
		required: false,
		modelValue: '',
	}
);

const emit = defineEmits<{
	(event: 'update:modelValue', payload: string): void;
}>();
</script>

<template>
	<div class="input__wrapper">
		<label class="input__label" v-if="label" for="">{{ label }}</label>
		<input
			class="input__field"
			v-bind="$attrs"
			@input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
			:value="modelValue"
			:placeholder="label ? label : ''"
		/>
	</div>
</template>

<style scoped>
.input__wrapper {
	display: block;
	margin: auto;
	text-align: left;
	width: fit-content;
	margin-top: 1rem;
  background-color: var(--background-color-secondary);
  padding: 1rem 1.5rem;
  border-radius: 4px;
}
.input__label,
.input__field {
	display: block;
	font-size: 1.25rem;
  background-color: var(--background-color-secondary);
}

.input__label {
  color: var(--accent-color-secondary)
}

.input__field {
	padding: 0.5rem;
	width: 18rem;
	border: 2px solid var(--accent-color-secondary);
	border-radius: 4px;
	margin-top: 0.5rem;
  transition: all 0.25s;
}
.input__field:focus {
  transition: all 0.25s;
  outline: none;
  box-shadow: var(--accent-color-primary) 0 0 2px 1px;
}
</style>
