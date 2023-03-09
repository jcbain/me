<script>
	const colors = ['red', 'orange', 'yellow', 'green', 'blue',  'violet'];
</script>

<header>
	{#each colors as color}
		<div class={color}></div>
	{/each}


</header>

<style>
	header {
		display: flex;
		height: 20px;
		justify-content: space-around;
	}

	div {
		width: 100%;
	}

	.red {
		background-color: var(--theme-colorRed);
	}
	.orange {
		background-color: var(--theme-colorOrange);
	}
	.yellow {
		background-color: var(--theme-colorYellow);
	}
	.green {
		background-color: var(--theme-colorGreen);
	}
	.blue {
		background-color: var(--theme-colorBlue);
	}
	.violet {
		background-color: var(--theme-colorViolet);
	}

</style>
