<template>
	<section class="card">
		<header class="card__header">
      <h3>
        <slot name="header" />
      </h3>
		</header>

		<main class="card__body">
			<slot name="default" />
		</main>

		<footer class="card__footer">
			<slot name="footer" />
		</footer>
	</section>
</template>

<style scoped>
.card {
  width: 24rem;
  padding: 1rem;
  border-radius: 4px;
  border: 2px solid var(--accent-color-primary);
  background-color: var(--background-color-secondary);
}

.card__header {
  margin-bottom: 1rem;
}

.card__footer {
  margin-top: 1rem;
}

</style>
