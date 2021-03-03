<script>
	import Link from "./components/Link/Link.svelte";
	import WavingHand from "./components/WavingHand/WavingHand.svelte";
	import { links } from "./utils/links";
	import { _ } from "svelte-i18n";
	import LangPicker from "./components/LangPicker/LangPicker.svelte";
	import Footer from "./components/Footer/Footer.svelte";
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
		display: flex;
		flex-direction: column;
		row-gap: 2rem;
	}
</style>

<main class="contain">
	<h1>
		{$_('home_h1')}
		<WavingHand />
	</h1>

	<p class="intro">{$_('home_description')}</p>

	<section class="links">
		<Link
			anchor="SvelteIcons.dev"
			description={$_('link_description_svelteicons')}
			url="https://svelteicons.dev" />
		<Link
			anchor="NeoCraft.app"
			description={$_('link_description_neocraft')}
			url="https://neocraft.app" />
		<Link
			anchor="GitHub"
			description={$_('link_description_github')}
			url="https://github.com/JuSellier" />
		<Link
			anchor="Colors..."
			description={$_('link_description_colors')}
			url="https://colors.jusellier.com" />
		<Link
			anchor="LinkedIn"
			description={$_('link_description_linkedin')}
			url="https://www.linkedin.com/in/jsellier/" />
		<Link
			anchor="Surprise?"
			description={$_('link_description_surprise')}
			url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />

		<!-- {#each links as link}
			<Link {...link} />
		{/each} -->
	</section>
</main>

<Footer />
