import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

const config = {
	kit: {
		adapter: adapter()
	},
	// this is for converting markdown files into html / svelte
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
};

export default config;
