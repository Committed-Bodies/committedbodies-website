var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => Blog,
  load: () => load
});
var import_index_f732b4f4 = __toModule(require("../../../chunks/index-f732b4f4.js"));
var import_Header_d30aa814 = __toModule(require("../../../chunks/Header-d30aa814.js"));
var import_transition_slideFade_0427fdd1 = __toModule(require("../../../chunks/transition-slideFade-0427fdd1.js"));
var import_stores_9eabddde = __toModule(require("../../../chunks/stores-9eabddde.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}section.svelte-1b0c7cf.svelte-1b0c7cf{padding:2rem;margin:2rem}section.svelte-1b0c7cf .articleList.svelte-1b0c7cf{display:grid;grid-template-rows:repeat(1fr);grid-gap:8rem}section.svelte-1b0c7cf article.svelte-1b0c7cf{display:grid;grid-template-columns:1fr 2fr}section.svelte-1b0c7cf article img.svelte-1b0c7cf{background:#a8cf44}section.svelte-1b0c7cf article .content.svelte-1b0c7cf{padding:0;display:grid;grid-template-rows:auto 1fr auto;grid-template-columns:1fr;justify-content:space-between}section.svelte-1b0c7cf article .content header.svelte-1b0c7cf{padding:2rem;display:flex;justify-content:flex-start;flex-direction:row;align-items:center}section.svelte-1b0c7cf article .content header h2.svelte-1b0c7cf{margin:0;padding:0}section.svelte-1b0c7cf article .content .excerpt.svelte-1b0c7cf{padding:2rem}section.svelte-1b0c7cf article .content footer.svelte-1b0c7cf{padding:2rem;text-align:right;display:flex;justify-content:flex-end;flex-direction:row;align-items:center}section.svelte-1b0c7cf article .content footer a.svelte-1b0c7cf{border:1px solid hsl(var(--accentHS) var(--accentL));background-color:hsl(var(--accentHS) var(--accentL));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0)}section.svelte-1b0c7cf article .content footer a.svelte-1b0c7cf:hover{border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}",
  map: null
};
const allPosts = { "./first-post.md": () => Promise.resolve().then(() => __toModule(require("./first-post.md.js"))), "./second-post.md": () => Promise.resolve().then(() => __toModule(require("./second-post.md.js"))), "./third-post.md": () => Promise.resolve().then(() => __toModule(require("./third-post.md.js"))) };
let blog = [];
for (let path in allPosts) {
  blog.push(allPosts[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async () => {
  const posts = await Promise.all(blog);
  return { props: { posts } };
};
const Blog = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  return `<div class="${"pageWrap"}">${(0, import_index_f732b4f4.v)(import_Header_d30aa814.H, "Header").$$render($$result, {}, {}, { default: () => `BLOG` })}
    <section class="${"svelte-1b0c7cf"}"><div class="${"articleList svelte-1b0c7cf"}">${(0, import_index_f732b4f4.b)(posts, ({ path, metadata }) => `<article class="${"svelte-1b0c7cf"}"><img${(0, import_index_f732b4f4.d)("src", metadata.thumbnail, 0)} alt="${"thumbnail"}" class="${"svelte-1b0c7cf"}">
                <div class="${"content svelte-1b0c7cf"}"><header class="${"svelte-1b0c7cf"}"><h2 class="${"svelte-1b0c7cf"}">${(0, import_index_f732b4f4.e)(metadata.title)}</h2></header>
                    <div class="${"excerpt svelte-1b0c7cf"}">${(0, import_index_f732b4f4.e)(metadata.description)}</div>
                    <footer class="${"svelte-1b0c7cf"}"><a${(0, import_index_f732b4f4.d)("href", `/blog/${path.replace(".md", "")}`, 0)} class="${"svelte-1b0c7cf"}">Read more
                        </a>
                    </footer></div>
            </article>`)}</div></section>
</div>`;
});
