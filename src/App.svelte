<script lang="ts">
	import Page2 from './views/02._About_me.svelte'
	import Page3 from './views/03._Projects.svelte'
	import Page4 from './views/04._Contact_me.svelte'
	import Page5 from './views/05._Api_page.svelte'
</script>
<head>
	<link rel="shortcut icon" href="public/images/BATMAN.png">
	<meta charset="UTF-8">
	<title>Ivan's Site</title>
	<meta name="description" content="Main portfolio">
	<meta name="keywords" content="Ivan Kornienko, projects, portfolio">
	<style>
		a {
			margin: 20px;

		}
		hr {
			margin-left: 30px;
			margin-top: -4px;
		}
		nav {
			margin-top: 20px;
		}
		p {
			margin-right: 10px;
		}
	</style>
</head>
<body>
	<header>
		<h1>Kornienko Ivan</h1>
	</header>
	<a><img src="images/BATMAN.png" width="200" alt="(Profile photo)"></a>
	<hr style="border-color: black; width: 200px" />
	<hr style="margin-left:5px; margin-right:5px; margin-top: 10px">
	<article>
		<nav>
			<a style="color: sienna" href="#about_me">About me</a>
			<a style="color: sienna" href="#github_projects">My GitHub projects</a>
			<a style="color: sienna" href="#contact_me">Contact Me</a>
			<a style="color: sienna" href="#api_example">See API example</a>
		</nav>
	</article>
	<hr style="margin-left:5px; margin-right:5px; margin-top: 20px">
	<main>
		<h2>Social links</h2>
		<a href="https://vk.com/batman_vanerk" title="Open in new tab" target="_blank">
			<img src="https://tavi-dent.ru/wp-content/uploads/2022/03/vk_parketservice.jpg" width="20" alt="(VK logo)">
		</a>
		<p style="margin-bottom: -50px"><a id="about_me"></a></p>
		<div><pre>  about_me</pre></div>
		<Page2/>
		<p style="margin-bottom: -50px"><a id="github_projects"></a></p>
		<div><pre>  github_projects</pre></div>
		<Page3/>
		<p style="margin-bottom: -50px"><a id="contact_me"></a></p>
		<div><pre>  contact_me</pre></div>
		<Page4/>
		<p style="margin-bottom: -50px"><a id="api_example"></a></p>
		<div><pre>  api_example</pre></div>
		<Page5/>
	</main>
</body>
<style>
	div {
		margin: 40px 0 40px 0;
		border-left: 5px solid #666666;
		height: 40px; width: 100px;
		vertical-align: middle;
		line-height: 30px;
	}
	pre {
		font-family: Arial, Verdana, sans-serif; /* font family */
		font-size: 11pt; /* size of the main font in points */
		color: #333; /* color of main text */
	}
</style>