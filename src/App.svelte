<script>
	import Link from "./components/Link.svelte";
	import { links } from "./utils/links";
</script>

<style>
	main {
		padding: 2rem var(--size-sides);
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
	}

	h1 {
		margin-bottom: 1rem;
	}

	p.intro {
		margin-bottom: 2rem;
		color: var(--clr-txt-dim);
	}

	section.links {
		padding: 1rem 0;
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		row-gap: 20px;
		column-gap: 20px;
	}
	@media (min-width: 500px) {
		section.links {
			grid-template-columns: auto 1fr;
		}
	}
</style>

<main class="contain">
	<h1>Hi, I'm Julien 👋</h1>
	<p class="intro">For now, I just use this website to share some links.</p>
	<section class="links">
		{#each links as link}
			<Link {...link} />
		{/each}
	</section>
</main>
