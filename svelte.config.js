import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			// Add fallback for SPA-like behavior if needed
			fallback: 'index.html',
		}),
		prerender: {
			handleMissingId: 'warn', // Prevent errors from unresolved links
		},
	},
};

export default config;