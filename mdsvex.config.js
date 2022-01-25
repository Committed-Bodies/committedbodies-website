const config = {
  "extensions": [".svelte.md", ".md", ".svx"],

  "smartypants": {
    "dashes": "oldschool"
  },

  "layout": {
    blog: "./src/lib/layouts/Blog-layout.svelte",
    service: "./src/lib/layouts/Service-layout.svelte",
    team: "./src/lib/layouts/Team-layout.svelte"
  },

  "remarkPlugins": [],
  "rehypePlugins": []
};

export default config;