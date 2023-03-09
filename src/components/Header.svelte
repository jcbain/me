<script>
	const colors = ['#cc241d', '#fe8019', '#d79921', '#98971a', '#458588', '#b16826', '#ea9bd7'];
</script>

<header>
	{#each colors as color}
		<div style="background-color: {color}; width: 100%;"></div>
	{/each}


</header>

<style>
	header {
		display: flex;
		height: 40px;
		justify-content: space-around;
	}

</style>
