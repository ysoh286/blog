import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		adapter: adapter()
	},
	paths: {
		base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
	},
	// this is for converting markdown files into html / svelte
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })]
};

export default config;
