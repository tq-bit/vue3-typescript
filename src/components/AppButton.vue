<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: var(--accent-color-primary);
  border: none;
  color: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
}
</style>