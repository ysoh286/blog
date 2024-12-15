<!-- list of blog posts -->
<script>
	import { base } from '$app/paths';
	export let data;
</script>

<ul class="data-posts">
	{#each data.posts as post}
		<li>
			<p>
				<a href={base + post.path}>
					{post.meta.title}
				</a>
				<span>{post.formattedDate}</span>
			</p>
		</li>
	{/each}
</ul>

<style>
	.data-posts {
		display: grid;
		grid-template-columns: 1;
		align-items: center;
		justify-content: center;
		list-style: none;
	}

	.data-posts p {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: baseline;
	}

	.data-posts span {
		color: gray;
		margin-left: 20px;
	}
</style>
