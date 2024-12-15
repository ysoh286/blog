// Utils
import { formatDate } from './formatDate';

/**
 * @description Fetches Markdown posts - this is so that this can be accessible
 * @returns all posts to be shown as a list on the home page
 */
export const fetchMarkdownPosts = async () => {
	// import.meta.glob comes from vite - imports any files that matches markdown blog posts
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	try {
		const allPosts = await Promise.all(
			iterablePostFiles.map(async ([path, resolver]) => {
				// loads file contents as promise
				const { metadata } = await resolver();
				// note that the path is /src/routes/blog/title.md
				// we only just want /blog/title, hence 11 and -3
				const postPath = path.slice(11, -3);

				const basePath = process.env.BASE_PATH;

				console.log(basePath, postPath);

				return {
					meta: metadata,
					formattedDate: formatDate(metadata.date),
					path: basePath === undefined ? postPath : `${basePath}${postPath}`
				};
			})
		);
		return allPosts;
	} catch (e) {
		console.error(`There was an error fetching blog posts ${JSON.stringify(e)}`);
	}
};
