<script lang="ts">
	import { startApiProcessing } from '../lib/api_processing';
	import { onMount } from 'svelte/internal';
	onMount(startApiProcessing);
</script>

<svelte:head>
	<title>API images</title>
</svelte:head>

<main>
	<nav><a href="/">To the main page</a></nav>
	<hr class="upper" />
	<div class="app">
		<div class="header">
			<h2>Dog photos</h2>
			<div id="breed" />
		</div>
		<hr class="lower" />
		<div class="slideshow" id="slideshow">
			<div class="slide" />
		</div>
	</div>
</main>

<style>
	.upper {
		margin-top: 10px;
	}

	.lower {
		margin: 0 0 12px;
	}

	h2 {
		color: darkolivegreen;
		font-family: Arial, Verdana, sans-serif;
		margin-left: 10px;
	}

	.app {
		height: 100%;
		width: 100%;
		flex-direction: column;
	}

	.header {
		text-align: center;
		padding: 20px 0;
		margin-top: -30px;
	}

	a {
		color: sienna;
		font-family: Arial, Verdana, sans-serif; /* font family */
		font-size: 11pt; /* size of the main font in points */
	}

	.slideshow {
		flex: 1;
		background-color: #333;
		position: relative;
		overflow: hidden;
		width: 100%;
		height: 77vh;
	}

	.slide {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center center;
		opacity: 0;
		transform: scale(1);
		transition: all 0.9s ease-out;
	}

	.slide:nth-last-child(2) {
		opacity: 1;
		transform: scale(1.08);
	}
</style>
