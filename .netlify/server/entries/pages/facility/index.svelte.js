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
  default: () => Facility
});
var import_index_f732b4f4 = __toModule(require("../../../chunks/index-f732b4f4.js"));
var import_Header_d30aa814 = __toModule(require("../../../chunks/Header-d30aa814.js"));
var import_transition_slideFade_0427fdd1 = __toModule(require("../../../chunks/transition-slideFade-0427fdd1.js"));
var import_stores_9eabddde = __toModule(require("../../../chunks/stores-9eabddde.js"));
const intro = {
  title: "Our Facility",
  subtitle: "Designed for results",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto maiores illum at, ratione necessitatibus laudantium veniam voluptas libero, eveniet aliquid suscipit quo perspiciatis dolorem blanditiis cupiditate esse velit ad!"
};
const facilityFeatures = [
  {
    title: "Circuit Section",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/55713719_310473159632468_5149878363015348224_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=reATQcCDbigAX_oSpHN&_nc_ht=scontent.fdur7-1.fna&oh=00_AT9eByjzvm-S1U4wZXplxeyG1aW5wvzoN-9zffFKZywrkw&oe=6202DB7C",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    title: "Another Feature",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/56448917_310473129632471_3502240363223973888_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=_RGfjf1YuJ0AX97b3j-&_nc_ht=scontent.fdur7-1.fna&oh=00_AT_DPug4enHLl-u1SLZJ4J3xc_4L-pzpfKdS7mEfZuJEWw&oe=61FF5D22",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    title: "Cardio",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/55932453_310473179632466_7589220938747478016_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=K-kaUqAbC6MAX-p8qTM&_nc_ht=scontent.fdur7-1.fna&oh=00_AT9coDzaAaSz4QJt226Zdps1vQWIX9t0kl04gqaaScf1Sw&oe=6202247D",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    title: "Weights",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/55795239_310473109632473_1254009066066280448_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=EATIeUfrNFsAX_K9Z5L&_nc_ht=scontent.fdur7-1.fna&oh=00_AT8TyvKsO2-57aZaw365uBhjnGI-l6ToTQBPkPEWwahQqw&oe=6203379F",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    title: "Another Feature",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/56247828_310473259632458_5025330603558436864_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3Y0KcitjAM8AX8AwDyY&_nc_ht=scontent.fdur7-1.fna&oh=00_AT9PaWUdqM2EhrkuKnAZB2XfW649_KRhi7E_PcEae89t8g&oe=62016AF3",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    title: "One more feature",
    image: "https://scontent.fdur7-1.fna.fbcdn.net/v/t1.6435-9/56749275_315252652487852_1753502337978073088_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ZZhM894B_xEAX95vK0z&_nc_ht=scontent.fdur7-1.fna&oh=00_AT_Lo13mnr-LWu4cUO1a7N7Y-VQBwIOMbNLtcs5D9rFGFA&oe=62000719",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  }
];
var facility = {
  intro,
  facilityFeatures
};
var FacilitySection_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}section.svelte-72ejj0.svelte-72ejj0{padding:3vw}section.svelte-72ejj0 .content.svelte-72ejj0{grid-column:2;grid-row:1;color:hsl(var(--onNeutral)/var(--onNeutralStrength0))}section.svelte-72ejj0 .content h2.svelte-72ejj0{margin-top:0;font-family:"Roboto Condensed", sans-serif;line-height:1;color:hsl(var(--onNeutral)/var(--onNeutralStrength3))}section.svelte-72ejj0 .content .subtitle.svelte-72ejj0{font-family:"Homemade Apple", cursive;margin-top:1em;color:hsl(var(--onNeutral)/var(--onNeutralStrength1))}section.svelte-72ejj0 .gallery.svelte-72ejj0{grid-column:1;grid-row:1;padding:0}section.svelte-72ejj0 .gallery .feature.svelte-72ejj0{position:relative}section.svelte-72ejj0 .gallery .feature img.svelte-72ejj0{display:block;height:100%;width:100%;object-fit:cover;z-index:1}section.svelte-72ejj0 .gallery .feature .summary.svelte-72ejj0{z-index:2;background-color:hsl(var(--neutralHS) calc(var(--neutralL) - 5%));color:hsl(var(--onNeutral)/var(--onNeutralStrength1));width:100%;height:auto;bottom:0;left:0;padding:1rem}section.svelte-72ejj0 .gallery .feature .summary h3.svelte-72ejj0{margin:0;font-family:"Roboto Condensed", sans-serif}section.svelte-72ejj0 .gallery .feature .summary p.svelte-72ejj0{margin:0}',
  map: null
};
const FacilitySection = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"facility"}" class="${"svelte-72ejj0"}"><div class="${"content svelte-72ejj0"}"><h2 class="${"svelte-72ejj0"}">${(0, import_index_f732b4f4.e)(facility.intro.title)}</h2>
        <p class="${"subtitle h4 svelte-72ejj0"}">${(0, import_index_f732b4f4.e)(facility.intro.subtitle)}</p>
        <p class="${"svelte-72ejj0"}">${(0, import_index_f732b4f4.e)(facility.intro.content)}</p></div>
    <div class="${"gallery svelte-72ejj0"}">
        
        ${(0, import_index_f732b4f4.b)(facility.facilityFeatures, (feature) => `<div class="${"feature svelte-72ejj0"}"><img${(0, import_index_f732b4f4.d)("src", feature.image, 0)} alt="${"description here"}" class="${"svelte-72ejj0"}">
                <div class="${"summary svelte-72ejj0"}"><h3 class="${"h5 svelte-72ejj0"}">${(0, import_index_f732b4f4.e)(feature.title)}</h3>
                    <p class="${"svelte-72ejj0"}">${(0, import_index_f732b4f4.e)(feature.content)}</p></div>
            </div>`)}</div>
</section>`;
});
const Facility = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pageWrap"}">${(0, import_index_f732b4f4.v)(import_Header_d30aa814.H, "Header").$$render($$result, {
    bgImage: "https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg"
  }, {}, {
    default: () => `Facility
    `
  })}

    ${(0, import_index_f732b4f4.v)(FacilitySection, "FacilitySection").$$render($$result, {}, {}, {})}</div>`;
});
