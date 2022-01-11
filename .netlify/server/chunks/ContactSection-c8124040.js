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
  C: () => ContactSection
});
var import_index_f732b4f4 = __toModule(require("./index-f732b4f4.js"));
var import_Logo_50a46ba3 = __toModule(require("./Logo-50a46ba3.js"));
var ContactSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.contactSection.svelte-r0sr18 h2.svelte-r0sr18{display:flex;align-items:center;justify-content:center;margin:0 0 3rem 0;color:hsla(var(--onNeutral)/var(--onNeutralStrength3));font-family:"Roboto Condensed", sans-serif}.contactSection.svelte-r0sr18 h2 span.svelte-r0sr18{border:3px solid hsl(var(--accentHS) var(--accentL));padding:1rem 2rem;text-align:center;width:auto}.contactSection.svelte-r0sr18 .contactWrap.svelte-r0sr18{display:flex;flex-direction:column;color:hsla(var(--onNeutral)/var(--onNeutralStrength1))}.contactSection.svelte-r0sr18 .contactWrap .contactInfo.svelte-r0sr18{margin:2rem;flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center}.contactSection.svelte-r0sr18 .contactWrap .contactInfo.svelte-r0sr18 .contactDetails li{text-align:center}.contactSection.svelte-r0sr18 .contactWrap .contactInfo .socialDetails li.svelte-r0sr18{text-align:center;display:block}.contactSection.svelte-r0sr18 .contactWrap .contactInfo .socialDetails li.svelte-r0sr18::before{display:none}.contactSection.svelte-r0sr18 .contactWrap .contactInfo .logoWrap.svelte-r0sr18{width:30%}.contactSection.svelte-r0sr18 .contactWrap .contactInfo .socialDetails.svelte-r0sr18{display:flex;gap:1rem;margin-top:2rem}.contactSection.svelte-r0sr18 .contactWrap a.contactMap.svelte-r0sr18{flex:1;text-decoration:none;transition:all 0.7s linear;background-color:rgba(255, 255, 255, 0.3);display:grid;place-items:center;overflow:hidden;margin:2rem}.contactSection.svelte-r0sr18 .contactWrap a.contactMap.svelte-r0sr18:before{content:"Open in Google Maps";padding:1rem;border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);z-index:2;position:absolute;transform:scale(0);opacity:0;transition:all 0.3s ease-out}.contactSection.svelte-r0sr18 .contactWrap a.contactMap img.svelte-r0sr18{will-change:transform, scale;width:100%;height:auto;object-fit:cover;object-position:center center;transition:all 0.4s ease-in-out;transform:scale(1);z-index:1}.contactSection.svelte-r0sr18 .contactWrap a.contactMap.svelte-r0sr18:hover:before{transform:scale(1);opacity:1}.contactSection.svelte-r0sr18 .contactWrap a.contactMap:hover img.svelte-r0sr18{transform:scale(1.5)}@media screen and (min-width: 780px){.contactSection.svelte-r0sr18 .contactWrap.svelte-r0sr18{flex-direction:row-reverse}.contactSection.svelte-r0sr18 .contactWrap .contactInfo.svelte-r0sr18{align-items:flex-start}.contactSection.svelte-r0sr18 .contactWrap .contactInfo.svelte-r0sr18 .contactDetails li{text-align:left}}',
  map: null
};
const ContactSection = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let contacts = import_Logo_50a46ba3.c.contacts[0];
  let socials = import_Logo_50a46ba3.c.socials;
  $$result.css.add(css);
  return `<section class="${"contactSection svelte-r0sr18"}">
    <h2 class="${"svelte-r0sr18"}"><span class="${"svelte-r0sr18"}">Contact Us</span></h2>
     
    
    <div class="${"contactWrap svelte-r0sr18"}">
        <div class="${"contactInfo svelte-r0sr18"}"><div class="${"logoWrap svelte-r0sr18"}">${(0, import_index_f732b4f4.v)(import_Logo_50a46ba3.L, "Logo").$$render($$result, {}, {}, {})}</div>  
            ${(0, import_index_f732b4f4.v)(import_Logo_50a46ba3.C, "ContactDetails").$$render($$result, { contacts, classList: "theme-on-primary" }, {}, {})} 
            <ul class="${"socialDetails svelte-r0sr18"}">${(0, import_index_f732b4f4.b)(Object.entries(socials), ([media, link]) => `${link ? `<li class="${"svelte-r0sr18"}"><a class="${(0, import_index_f732b4f4.e)(media) + " socialLink svelte-r0sr18"}"${(0, import_index_f732b4f4.d)("href", link, 0)}><i><svg width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><use xlink:href="${"#" + (0, import_index_f732b4f4.e)(media)}"></use></svg>
                            </i></a>
                    </li>` : ``}`)}</ul></div>
        
        <a class="${"contactMap svelte-r0sr18"}" href="${"https://goo.gl/maps/VA4dCUMKpTfk7nPh6"}" alt="${"Open Google Maps"}"><img src="${"/assets/images/map.svg"}" alt="${""}" class="${"svelte-r0sr18"}"></a></div>    
</section>`;
});
