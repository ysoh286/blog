<!-- +layout.svelte -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/styles.css';
</script>

<Header />
<main>
	<slot />
</main>

<Footer />
