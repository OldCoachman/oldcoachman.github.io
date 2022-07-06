<script lang="ts">
	import '$lib/styles/api_style.css';
	import '../lib/styles/general_style.css';
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
		margin-left: 12px;
		margin-right: 12px;
		margin-top: 10px;
	}
	.lower {
		margin: 0 12px 12px;
	}
</style>
