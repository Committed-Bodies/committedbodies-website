import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import sveltePreprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    "extensions": [".svelte", ...mdsvexConfig.extensions],

    kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter(),

        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "src/styles/themeVars.scss";'
                    }
                }
            }
        }
	},

    preprocess: [
        mdsvex(mdsvexConfig),
        sveltePreprocess({
            scss: {
                prependData: '@import "src/styles/themeVars.scss";'
            },
        })
    ]
};

export default config;