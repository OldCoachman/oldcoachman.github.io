<script lang="ts">
	import { startApiProcessing } from '../lib/api_processing';
	import { onMount } from 'svelte/internal';
	onMount(startApiProcessing);
</script>

<svelte:head>
	<title>API images</title>
	<link rel="stylesheet" href="/api_style/general.css" />
	<link rel="stylesheet" href="/api_style/specific.css" />
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
