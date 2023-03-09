<script>
	import { getContext } from 'svelte'
	export const theme = getContext('theme');

	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	import './styles.css';
</script>

<div class="app">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		main {
			padding: 12px 40px;
		}
	}


</style>
