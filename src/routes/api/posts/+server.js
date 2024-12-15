// Note that this must be a JS file
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	try {
		const allPosts = await fetchMarkdownPosts();

		// sort posts by date in descending order
		let sortedPosts = [];
		if (allPosts) {
			sortedPosts = allPosts.sort((previousPost, nextPost) => {
				return new Date(nextPost.meta.date) - new Date(previousPost.meta.date);
			});
		}

		return json(sortedPosts);
	} catch (e) {
		console.error(`There was an error getting all the blog posts ${JSON.stringify(e)}`);
	}
};
