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
        // prerender: {
		// 	crawl: false,
		// 	enabled: true,
		// 	onError: "continue",
		// 	entries: ['*'],
        // },
        
        vite: {
            css: {
                preprocessorOptions: {
                    scss: {
                        additionalData: '@import "src//styles/themeVars.scss"; @import "src//styles/mixins.scss";'
                    }
                }
            }
        }
	},

    preprocess: [
        mdsvex(mdsvexConfig),
        sveltePreprocess({
            scss: {
                prependData: '@import "src//styles/themeVars.scss"; @import "src//styles/mixins.scss";'
            },
        })
    ]
};

export default config;