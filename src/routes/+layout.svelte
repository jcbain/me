<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import ThemeContext from '../theme/themeContext.svelte';

	import './styles.css';
</script>


	<ThemeContext>
		<div class="app">
			<Header />
			<main>
				<slot />
			</main>
			<Footer />
		</div>
	</ThemeContext>

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
		max-width: 1080px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
		main {
			padding: 12px 40px;
		}
	}


</style>
