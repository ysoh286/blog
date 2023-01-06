import { formatDate } from './../../../lib/utils/formatDate';
//
/**
 * @description Loads blog post that is written in markdown
 * This is used  to preload data and dynamically load blog posts
 * Don't rename this function to something else otherwise it won't work.
 *
 * @param params
 * @returns related frontmatter fields / post
 */
export const load = async ({ params }: any) => {
	try {
		const { metadata, default: content } = await import(`../${params.slug}.md`);
		const { title, date } = metadata;
		return {
			title,
			date,
			formattedDate: formatDate(date),
			content
		};
	} catch (e) {
		return console.error(`There was an error: ${JSON.stringify(e)}`);
	}
};
