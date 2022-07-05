<svelte:head>
	<title>Ivan's Site</title>
	<link rel="stylesheet" href="src/lib/styles/general_style.css">
</svelte:head>

<h1>Kornienko Ivan</h1>
<img src="BATMAN.png" width="200" alt="(Profile photo)">
<hr class="underPicture">
<hr class="aboveNav">
<nav>
	<a href="/02._About_me">About me</a>
	<a href="/03._Projects">My GitHub projects</a>
	<a href="/04._Contact_me">Contact Me</a>
	<a href="/05._Api_page">See API example</a>
</nav>
<hr class="belowNav">

<style>
	.underPicture {
		border-color: black;
		width: 200px;
		background-color: black;
	}
	.aboveNav {
		margin-left:5px;
		margin-right:5px;
		margin-top: 10px
	}
	.belowNav {
		margin-left:5px;
		margin-right:5px;
		margin-top: 20px
	}
	a {
		margin: 20px;
	}
	img {
		margin-left: 20px;
	}
	hr {
		margin-left: 30px;
		margin-top: -4px;
	}
	nav {
		margin-top: 20px;
	}
</style>
