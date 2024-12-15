<script>
	import { page } from '$app/stores';
</script>

<h3>Oops! An error has occurred. {$page.status}: {$page?.error?.message}</h3>
