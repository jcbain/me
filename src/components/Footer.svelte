<script>
	import github from '$lib/images/github.svg';
</script>

<footer>
    <p>stepped away from socials but a thumbs up at <a href="https://github.com/jcbain"><img src={github} alt="github logo"/>github/jcbain</a> is welcomed!</p>
</footer>

<style>

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
        text-align: center;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

    img {
        width: 24px;
		vertical-align: middle;
    }
</style>