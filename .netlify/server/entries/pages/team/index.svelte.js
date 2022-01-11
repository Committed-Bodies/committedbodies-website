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
  default: () => Team
});
var import_index_f732b4f4 = __toModule(require("../../../chunks/index-f732b4f4.js"));
var import_Header_d30aa814 = __toModule(require("../../../chunks/Header-d30aa814.js"));
var import_transition_slideFade_0427fdd1 = __toModule(require("../../../chunks/transition-slideFade-0427fdd1.js"));
var import_stores_9eabddde = __toModule(require("../../../chunks/stores-9eabddde.js"));
const intro = {
  title: "Personal Trainers",
  subtitle: "Expert gudance",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iusto maiores illum at, ratione necessitatibus laudantium veniam voluptas libero, eveniet aliquid suscipit quo perspiciatis dolorem blanditiis cupiditate esse velit ad!"
};
const trainers = [
  {
    firstName: "Jill",
    fullName: "Jill Myburgh",
    image: "/assets/images/trainers/jill-trainer.png",
    specialisations: [
      "Weight-loss",
      "Fitness",
      "Healthy Lifestyle"
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    firstName: "Shaun",
    fullName: "Shaun Marais",
    image: "/assets/images/trainers/shaun-trainer.png",
    specialisations: [
      "Resistance",
      "Body Building",
      "Strength"
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    firstName: "Name",
    fullName: "Name Surname",
    image: "/assets/images/kettlebell-LOGO.png",
    specialisations: [
      "Weight-loss",
      "Fitness",
      "Healthy Lifestyle"
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  },
  {
    firstName: "Name",
    fullName: "Name Surname",
    image: "/assets/images/kettlebell-LOGO.png",
    specialisations: [
      "Weight-loss",
      "Fitness",
      "Healthy Lifestyle"
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel enim tempore tenetur molestiae ipsa quasi eveniet ea consequatur commodi. Quas aut excepturi repellat expedita, dignissimos voluptate error ipsum iusto sapiente"
  }
];
var trainersData = {
  intro,
  trainers
};
var TrainersSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ':root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}section.svelte-1jttxl1.svelte-1jttxl1{padding:3vw;color:hsl(var(--onNeutral)/var(--onNeutralStrength0))}section.svelte-1jttxl1 .content.svelte-1jttxl1{grid-column:2;grid-row:1;color:hsl(var(--onNeutral)/var(--onNeutralStrength0))}section.svelte-1jttxl1 .content h2.svelte-1jttxl1{margin-top:0;font-family:"Roboto Condensed", sans-serif;line-height:1;color:hsl(var(--onNeutral)/var(--onNeutralStrength3))}section.svelte-1jttxl1 .content .subtitle.svelte-1jttxl1{font-family:"Homemade Apple", cursive;margin-top:1em;color:hsl(var(--onNeutral)/var(--onNeutralStrength1))}section.svelte-1jttxl1 .trainersGallery .trainerWrap.svelte-1jttxl1{display:flex;justify-content:center;align-items:center;flex-direction:column;padding:1rem 0;position:relative}section.svelte-1jttxl1 .trainersGallery .trainerWrap h3.svelte-1jttxl1{margin:0;color:hsl(var(--onNeutral)/var(--onNeutralStrength2))}section.svelte-1jttxl1 .trainersGallery .trainerWrap p.svelte-1jttxl1{margin:0}section.svelte-1jttxl1 .trainersGallery .trainerWrap .specialisations.svelte-1jttxl1{list-style-type:none;padding:0;margin:0}section.svelte-1jttxl1 .trainersGallery .trainerWrap .specialisations li.svelte-1jttxl1{padding:0.1rem 0.5rem;display:inline-block;margin:3px;border-radius:3px;font-size:0.8rem;font-weight:500;background:hsl(var(--neutralHS) calc(var(--neutralL) + 5%));color:hsl(var(--onNeutral)/var(--onNeutralStrength3));text-transform:uppercase;letter-spacing:1px}section.svelte-1jttxl1 .trainersGallery .trainerWrap .button.svelte-1jttxl1{margin-top:1rem;font-weight:500;letter-spacing:1px;cursor:pointer;padding:0.3em 1em;border-radius:2px;text-decoration:none;display:inline-flex;justify-content:center;align-items:center;width:auto;box-shadow:0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);border:1px solid hsl(var(--accentHS) var(--accentL));background-color:hsl(var(--accentHS) var(--accentL));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0)}section.svelte-1jttxl1 .trainersGallery .trainerWrap .button.svelte-1jttxl1:hover{border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}@media(min-width: 780px){section.svelte-1jttxl1 .trainersGallery.svelte-1jttxl1{display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem}}',
  map: null
};
const TrainersSection = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section id="${"trainers"}" class="${"svelte-1jttxl1"}"><div class="${"content svelte-1jttxl1"}"><h2 class="${"svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(trainersData.intro.title)}</h2>
        <p class="${"subtitle h4 svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(trainersData.intro.subtitle)}</p>
        <p class="${"svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(trainersData.intro.content)}</p></div>
    <div class="${"trainersGallery svelte-1jttxl1"}">${(0, import_index_f732b4f4.b)(trainersData.trainers, (trainer) => `<div class="${"trainerWrap svelte-1jttxl1"}"><img${(0, import_index_f732b4f4.d)("src", trainer.image, 0)} alt="${"Cool profile pic for " + (0, import_index_f732b4f4.e)(trainer.firstName)}">
                <h3 class="${"h5 svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(trainer.fullName)}</h3>
                <ul class="${"specialisations svelte-1jttxl1"}">${(0, import_index_f732b4f4.b)(trainer.specialisations, (specialisation) => `<li class="${"svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(specialisation)}</li>`)}</ul>
                <p class="${"svelte-1jttxl1"}">${(0, import_index_f732b4f4.e)(trainer.bio)}</p>
                <a class="${"button svelte-1jttxl1"}" href="${"/book-a-session?trainer=" + (0, import_index_f732b4f4.e)(trainer.firstName)}" alt="${"Book " + (0, import_index_f732b4f4.e)(trainer.fistName)}">Train with ${(0, import_index_f732b4f4.e)(trainer.firstName)}</a>
            </div>`)}</div>
</section>`;
});
const Team = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"pageWrap"}">${(0, import_index_f732b4f4.v)(import_Header_d30aa814.H, "Header").$$render($$result, {
    bgImage: "https://res.cloudinary.com/committed-bodies/image/upload/f_auto,q_auto,t_pageHeader/v1631431623/gym/Gym-in-Benoni_m5uh6j.jpg"
  }, {}, {
    default: () => `The Team
    `
  })}

    ${(0, import_index_f732b4f4.v)(TrainersSection, "TrainersSection").$$render($$result, {}, {}, {})}</div>`;
});
