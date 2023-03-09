<script>
	import Intro from '../components/intro.svelte';

</script>

<svelte:head>
	<title>James Bain</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<Intro />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
