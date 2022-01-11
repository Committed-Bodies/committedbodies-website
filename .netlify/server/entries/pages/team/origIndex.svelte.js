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
  default: () => OrigIndex,
  load: () => load
});
var import_index_f732b4f4 = __toModule(require("../../../chunks/index-f732b4f4.js"));
var import_Header_d30aa814 = __toModule(require("../../../chunks/Header-d30aa814.js"));
var import_transition_slideFade_0427fdd1 = __toModule(require("../../../chunks/transition-slideFade-0427fdd1.js"));
var import_stores_9eabddde = __toModule(require("../../../chunks/stores-9eabddde.js"));
var origIndex_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}section.svelte-j58rxd.svelte-j58rxd{background-color:hsl(var(--neutralHS) var(--neutralL))}section.grid.svelte-j58rxd.svelte-j58rxd{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));grid-gap:2rem;justify-content:space-between;align-items:center}section.svelte-j58rxd article.svelte-j58rxd{background:#ffffff;display:grid;grid-template-rows:200px 1fr 60px;justify-content:center;align-content:center;grid-template-columns:1fr;grid-gap:1rem}section.svelte-j58rxd article header img.svelte-j58rxd{background:#a8cf44;width:100%;height:100%;object-fit:cover;object-position:center}section.svelte-j58rxd article .content.svelte-j58rxd{padding:0.5rem}section.svelte-j58rxd article .content h3.svelte-j58rxd{margin:0 0}section.svelte-j58rxd article footer.svelte-j58rxd{padding:0.5rem;display:flex;flex-direction:row;align-items:center;justify-content:flex-end}section.svelte-j58rxd article footer a.svelte-j58rxd{position:relative;font-weight:500;letter-spacing:1px;cursor:pointer;padding:0.3em 1em;border-radius:2px;text-decoration:none;display:inline-flex;justify-content:center;align-items:center;width:auto;box-shadow:0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);border:1px solid hsl(var(--accentHS) var(--accentL));background-color:hsl(var(--accentHS) var(--accentL));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0)}section.svelte-j58rxd article footer a.svelte-j58rxd:hover{border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}section.svelte-j58rxd article:nth-of-type(odd) header img.svelte-j58rxd{background-color:#fd6b17}",
  map: null
};
const allTeam = { "./cool-cat.md": () => Promise.resolve().then(() => __toModule(require("./cool-cat.md.js"))), "./jane-doe.md": () => Promise.resolve().then(() => __toModule(require("./jane-doe.md.js"))), "./john-doe.md": () => Promise.resolve().then(() => __toModule(require("./john-doe.md.js"))), "./smooth-operator.md": () => Promise.resolve().then(() => __toModule(require("./smooth-operator.md.js"))) };
let team = [];
for (let path in allTeam) {
  team.push(allTeam[path]().then(({ metadata }) => {
    return { path, metadata };
  }));
}
const load = async () => {
  const teamMembers = await Promise.all(team);
  return { props: { teamMembers } };
};
const OrigIndex = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let { teamMembers } = $$props;
  if ($$props.teamMembers === void 0 && $$bindings.teamMembers && teamMembers !== void 0)
    $$bindings.teamMembers(teamMembers);
  $$result.css.add(css);
  return `<div class="${"pageWrap"}">${(0, import_index_f732b4f4.v)(import_Header_d30aa814.H, "Header").$$render($$result, {}, {}, { default: () => `TEAM` })}
    <section class="${"svelte-j58rxd"}"><h3 class="${"svelte-j58rxd"}">Something about our team</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem eius ea sit unde reprehenderit non? Amet pariatur itaque ipsam quam. Fuga, tenetur recusandae. Cupiditate praesentium temporibus amet magnam natus quos?</p>
        <p>Beatae asperiores atque exercitationem dolorum dolore neque tempore possimus hic velit cumque laudantium consequatur commodi temporibus a perferendis illum earum explicabo fugit, vitae enim corporis aliquam blanditiis expedita iusto? Quod!</p>
        <p>At veritatis cum repellat, vel debitis placeat velit accusamus, minus rem eaque vero qui necessitatibus minima omnis ex commodi deleniti unde consequatur rerum. Suscipit error quod at quas, vel sit?</p>
        <p>Quod illum alias autem architecto corrupti ea id eius ab optio rerum eveniet odit animi, laudantium ad maiores ullam amet inventore placeat sint exercitationem mollitia suscipit commodi. Ratione, dolorem ullam.</p></section>
    <section class="${"grid svelte-j58rxd"}">${(0, import_index_f732b4f4.b)(teamMembers, ({ path, metadata }) => `<article class="${"svelte-j58rxd"}"><header><img${(0, import_index_f732b4f4.d)("src", metadata.thumbnail, 0)} alt="${"thumbnail"}" class="${"svelte-j58rxd"}"></header>
            <div class="${"content svelte-j58rxd"}"><h3 class="${"svelte-j58rxd"}">${(0, import_index_f732b4f4.e)(metadata.name)}</h3>
                ${(0, import_index_f732b4f4.e)(metadata.title)}<br></div>
            <footer class="${"svelte-j58rxd"}"><a${(0, import_index_f732b4f4.d)("href", `/blog/${path.replace(".md", "")}`, 0)} class="${"svelte-j58rxd"}">Read more
                </a></footer>
        </article>`)}</section>
</div>`;
});
