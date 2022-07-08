<svelte:head>
	<title>Ivan's Site</title>
</svelte:head>

<main>
	<h1>Kornienko Ivan</h1>
	<img src="BATMAN.png" width="200" alt="(Profile)" />
	<hr class="underPicture" />
	<hr class="aboveNav" />
	<nav>
		<a href="./About_me">About me</a>
		<a href="./Projects">My GitHub projects</a>
		<a href="./Contact_me">Contact Me</a>
		<a href="./Api_page">See API example</a>
	</nav>
	<hr class="belowNav" />
</main>

<style>
	.underPicture {
		border-color: black;
		width: 200px;
		background-color: black;
	}

	hr {
		margin-left: 30px;
		margin-top: -4px;
	}

	.aboveNav {
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 10px;
	}

	.belowNav {
		margin-left: 5px;
		margin-right: 5px;
		margin-top: 20px;
	}

	a {
		margin: 20px;
		color: sienna;
		font-family: Arial, Verdana, sans-serif; /* font family */
		font-size: 11pt; /* size of the main font in points */
	}

	img {
		margin-left: 20px;
	}

	nav {
		margin-top: 20px;
	}

	h1 {
		font-size: 24pt;
		font-family: Georgia, Times, serif;
		font-weight: normal; /* normal text font */
		margin-left: 20px;
		color: #333;
	}
</style>
