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
  default: () => _layout
});
var import_index_f732b4f4 = __toModule(require("../../chunks/index-f732b4f4.js"));
var import_stores_9eabddde = __toModule(require("../../chunks/stores-9eabddde.js"));
var import_Logo_50a46ba3 = __toModule(require("../../chunks/Logo-50a46ba3.js"));
var app = "";
const Icons_combined = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  return `
<svg style="${"display:none;"}"><defs><g id="${"home"}"><path d="${"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}"></path><polyline points="${"9 22 9 12 15 12 15 22"}"></polyline></g><g id="${"message"}"><path d="${"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}"></path></g><g id="${"africa"}"><path d="${"M22 11c1 0-3 4-4 4c-1 1-3 5-4 6c0 1-1 1-2 2c-6 0-1-13-5-13c-4 0-7-4-2-7c2-2 7-2 8 0c0 1 3 0 4 2c1 1 1 6 5 6Z"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M21 22c-1 1-4 1-4 0c0 0 1-2 2-3c2-1 3 1 2 3Z"}"></path></g><g id="${"user"}"><path d="${"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}"></path><circle cx="${"12"}" cy="${"7"}" r="${"4"}"></circle></g><g id="${"at-sign"}"><circle cx="${"12"}" cy="${"12"}" r="${"4"}"></circle><path d="${"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}"></path></g><g id="${"network"}"><circle cx="${"18"}" cy="${"5"}" r="${"3"}"></circle><circle cx="${"6"}" cy="${"12"}" r="${"3"}"></circle><circle cx="${"18"}" cy="${"19"}" r="${"3"}"></circle><line x1="${"8.59"}" y1="${"13.51"}" x2="${"15.42"}" y2="${"17.49"}"></line><line x1="${"15.41"}" y1="${"6.51"}" x2="${"8.59"}" y2="${"10.49"}"></line></g><g id="${"user-plus"}"><path d="${"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}"></path><circle cx="${"8.5"}" cy="${"7"}" r="${"4"}"></circle><line x1="${"20"}" y1="${"8"}" x2="${"20"}" y2="${"14"}"></line><line x1="${"23"}" y1="${"11"}" x2="${"17"}" y2="${"11"}"></line></g><g id="${"list"}"><line x1="${"8"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><line x1="${"8"}" y1="${"12"}" x2="${"21"}" y2="${"12"}"></line><line x1="${"8"}" y1="${"18"}" x2="${"21"}" y2="${"18"}"></line><line x1="${"3"}" y1="${"6"}" x2="${"3.01"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"12"}" x2="${"3.01"}" y2="${"12"}"></line><line x1="${"3"}" y1="${"18"}" x2="${"3.01"}" y2="${"18"}"></line></g><g id="${"menu"}"><line x1="${"3"}" y1="${"12"}" x2="${"21"}" y2="${"12"}"></line><line x1="${"3"}" y1="${"6"}" x2="${"21"}" y2="${"6"}"></line><line x1="${"3"}" y1="${"18"}" x2="${"21"}" y2="${"18"}"></line></g><g id="${"chevron-down"}"><polyline points="${"6 9 12 15 18 9"}"></polyline></g><g id="${"chevron-left"}"><polyline points="${"15 18 9 12 15 6"}"></polyline></g><g id="${"chevron-right"}"><polyline points="${"9 18 15 12 9 6"}"></polyline></g><g id="${"close"}"><line x1="${"18"}" y1="${"6"}" x2="${"6"}" y2="${"18"}"></line><line x1="${"6"}" y1="${"6"}" x2="${"18"}" y2="${"18"}"></line></g><g id="${"help-circle"}"><circle cx="${"12"}" cy="${"12"}" r="${"10"}"></circle><path d="${"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}"></path><line x1="${"12"}" y1="${"17"}" x2="${"12.01"}" y2="${"17"}"></line></g><g id="${"gift"}"><polyline points="${"20 12 20 22 4 22 4 12"}"></polyline><rect x="${"2"}" y="${"7"}" width="${"20"}" height="${"5"}"></rect><line x1="${"12"}" y1="${"22"}" x2="${"12"}" y2="${"7"}"></line><path d="${"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}"></path><path d="${"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"}"></path></g><g id="${"plus"}"><line x1="${"12"}" y1="${"5"}" x2="${"12"}" y2="${"19"}"></line><line x1="${"5"}" y1="${"12"}" x2="${"19"}" y2="${"12"}"></line></g><g id="${"map-pin"}"><path d="${"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}"></path><circle cx="${"12"}" cy="${"10"}" r="${"3"}"></circle></g><g id="${"mail"}"><path d="${"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}"></path><polyline points="${"22,6 12,13 2,6"}"></polyline></g><g id="${"phone"}"><path d="${"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}"></path></g><g id="${"facebook"}"><path d="${"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}"></path></g><g id="${"instagram"}"><rect x="${"2"}" y="${"2"}" width="${"20"}" height="${"20"}" rx="${"5"}" ry="${"5"}"></rect><path d="${"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}"></path><line x1="${"17.5"}" y1="${"6.5"}" x2="${"17.51"}" y2="${"6.5"}"></line></g><g id="${"youtube"}"><path d="${"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}"></path><polygon points="${"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}"></polygon></g><g id="${"twitter"}"><path d="${"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}"></path></g><g id="${"tiktok"}"><path d="${"M12 15.5c0 1.5-1.2 2.7-2.7 2.7c-1.5 0-2.7-1.2-2.7-2.7c0-1.4 .7-2.4 1.9-2.7m7.2 2.7c0 3.5-2.9 6.4-6.4 6.4c-3.6 0-6.5-2.9-6.5-6.4c0-3.3 2.5-6.4 5.7-6.4c0 0 0 3.7 0 3.7m7.2 3.3v-7.3c1.5 .8 2.9 1.4 4.5 1.2v-3.3c-2.9-0.4-4.4-2.1-4.8-4.7h-3.4v13.4"}"></path></g><g id="${"log-in"}"><path d="${"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}"></path><polyline points="${"10 17 15 12 10 7"}"></polyline><line x1="${"15"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line></g><g id="${"moon"}"><path d="${"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}"></path></g><g id="${"sun"}"><circle cx="${"12"}" cy="${"12"}" r="${"5"}"></circle><line x1="${"12"}" y1="${"1"}" x2="${"12"}" y2="${"3"}"></line><line x1="${"12"}" y1="${"21"}" x2="${"12"}" y2="${"23"}"></line><line x1="${"4.22"}" y1="${"4.22"}" x2="${"5.64"}" y2="${"5.64"}"></line><line x1="${"18.36"}" y1="${"18.36"}" x2="${"19.78"}" y2="${"19.78"}"></line><line x1="${"1"}" y1="${"12"}" x2="${"3"}" y2="${"12"}"></line><line x1="${"21"}" y1="${"12"}" x2="${"23"}" y2="${"12"}"></line><line x1="${"4.22"}" y1="${"19.78"}" x2="${"5.64"}" y2="${"18.36"}"></line><line x1="${"18.36"}" y1="${"5.64"}" x2="${"19.78"}" y2="${"4.22"}"></line></g></defs></svg>`;
});
const topNav = [
  {
    title: "Home",
    link: "/",
    "class": "hideSM hideMD"
  },
  {
    title: "Explore",
    link: "",
    subnavClass: "hideSM hideMD",
    subnav: [
      {
        title: "Facility",
        link: "/facility",
        "class": "scrollTo "
      },
      {
        title: "Trainers",
        link: "/team",
        "class": "scrollTo "
      },
      {
        title: "Services",
        link: "/services",
        "class": "scrollTo "
      }
    ]
  },
  {
    title: "Membership",
    link: "/membership",
    subnavClass: "hideSM hideMD",
    subnav: [
      {
        title: "Gym Memberships",
        link: "/membership#memberships",
        "class": "scrollTo"
      },
      {
        title: "Take back your life",
        link: "/services/take-back-your-life",
        "class": "open"
      }
    ]
  },
  {
    title: "News",
    link: "/blog"
  },
  {
    title: "Contact",
    link: "/contact",
    "class": "hideSM"
  }
];
const actionNav = [
  {
    title: "Home",
    link: "/",
    icon: "home",
    "class": "hideMD hideLG"
  },
  {
    title: "Contact",
    link: "/contact",
    icon: "phone",
    "class": "hideMD hideLG"
  },
  {
    title: "Log-in",
    link: "/portal",
    icon: "user",
    "class": "ghost"
  },
  {
    title: "Join",
    link: "/membership",
    icon: "log-in",
    "class": "primary"
  }
];
var navigation = {
  topNav,
  actionNav
};
var NavTopLevel_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.topNav.svelte-1h9knqt.svelte-1h9knqt{display:flex;justify-content:center;align-items:center;padding-right:50px;color:hsl(var(--primaryHS) var(--onPrimaryStrength0));height:100%}.topNav.svelte-1h9knqt:hover li a.svelte-1h9knqt{opacity:0.6}.topNav.svelte-1h9knqt ul.svelte-1h9knqt{list-style-type:none;height:100%;display:flex;justify-content:center;align-items:center}.topNav.svelte-1h9knqt ul li a.svelte-1h9knqt{letter-spacing:3px;display:block;color:inherit;text-decoration:none;padding:0.5rem;white-space:nowrap;transform:scale(1);transition:all 0.2s ease-in;transform-origin:center bottom;letter-spacing:0}.topNav.svelte-1h9knqt ul li a.svelte-1h9knqt:hover{opacity:1;transform:scale(1.04)}.dark .topNav.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength0))}.dark .topNav.scrolled.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength0))}@media screen and (min-width: 1430px){.dark .topNav.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength0))}.dark .topNav.scrolled.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength0))}.dark .topNav.svelte-1h9knqt a.LinkLevel1.svelte-1h9knqt{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength1))}}@media screen and (max-width: 390px){.topNav.svelte-1h9knqt.svelte-1h9knqt{padding-right:0}}@media screen and (min-width: 780px){.topNav.svelte-1h9knqt.svelte-1h9knqt{padding-right:0;color:hsl(var(--onImage)/var(--onImageStrength0))}.topNav.svelte-1h9knqt ul li a.svelte-1h9knqt{text-decoration:none}.topNav.scrolled.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--primaryHS) var(--onPrimaryStrength2))}}@media screen and (min-width: 1430px){.topNav.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onGradient)/var(--onGradientStrength0));overflow-y:scroll;padding:0 10% 10% 10%;justify-content:flex-start;background-color:transparent}.topNav.scrolled.svelte-1h9knqt.svelte-1h9knqt{color:hsl(var(--onGradient)/var(--onGradientStrength0))}.topNav.svelte-1h9knqt ul.svelte-1h9knqt{display:flex;padding:0;flex-direction:column;justify-content:flex-start;align-items:flex-start}.topNav.svelte-1h9knqt ul li a.LinkLevel1.svelte-1h9knqt{font-size:var(--fontSizeH5);color:hsl(var(--onGradient)/var(--onGradientStrength1));padding:0;transform-origin:left center}.topNav.svelte-1h9knqt ul li .subNav.svelte-1h9knqt{font-size:var(--fontSizeMd)}.topNav.svelte-1h9knqt ul li .subNav ul.svelte-1h9knqt{padding:0;line-height:1.5;margin:0;gap:0}.topNav.svelte-1h9knqt ul li .subNav ul li.svelte-1h9knqt{margin-bottom:0}.topNav.svelte-1h9knqt ul li .subNav ul li a.svelte-1h9knqt{padding:0;transform-origin:left center}.topNav:hover ul li .contactSubnav ul li a{opacity:0.6}.topNav:hover ul li .contactSubnav ul li a:hover{opacity:1;transform:scale(1.04)}}",
  map: null
};
const NavTopLevel = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f732b4f4.a)(import_stores_9eabddde.p, (value) => $page = value);
  let topNavList = navigation.topNav;
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$result.css.add(css$5);
  $$unsubscribe_page();
  return `
<nav class="${"topNav " + (0, import_index_f732b4f4.e)(y > 80 ? "scrolled" : "") + " svelte-1h9knqt"}" aria-label="${"Primary Navigation"}"><ul class="${"svelte-1h9knqt"}">${(0, import_index_f732b4f4.b)(topNavList, (item) => `<li class="${[
    (0, import_index_f732b4f4.e)((0, import_index_f732b4f4.n)(item.class)) + " svelte-1h9knqt",
    item.link === $page.url.pathname ? "active" : ""
  ].join(" ").trim()}"><a class="${"LinkLevel1 svelte-1h9knqt"}"${(0, import_index_f732b4f4.d)("href", item.link, 0)}>${(0, import_index_f732b4f4.e)(item.title)}</a>
			
			${item.subnav ? `<div class="${"subNav " + (0, import_index_f732b4f4.e)(item.subnavClass) + " svelte-1h9knqt"}"><ul class="${"svelte-1h9knqt"}">${(0, import_index_f732b4f4.b)(item.subnav, (subnavItem) => `<li class="${(0, import_index_f732b4f4.e)((0, import_index_f732b4f4.n)(subnavItem.class)) + " svelte-1h9knqt"}"><a${(0, import_index_f732b4f4.d)("href", subnavItem.link, 0)} class="${"svelte-1h9knqt"}">${(0, import_index_f732b4f4.e)(subnavItem.title)}</a>
					</li>`)}</ul>
			</div>` : ``}
			${item.title == "Contact" ? `<div class="${"subNav contactSubnav hideSM hideMD svelte-1h9knqt"}">${(0, import_index_f732b4f4.v)(import_Logo_50a46ba3.C, "ContactDetails").$$render($$result, { classList: "theme-on-primary" }, {}, {})}
			</div>` : ``}
		</li>`)}</ul>
</nav>`;
});
var ThemeSwitcher_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ':root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.themeSwitcher.svelte-16r6kis.svelte-16r6kis{position:relative;display:flex;border-radius:30px;border:1px solid currentColor;overflow:hidden;display:flex}.themeSwitcher.svelte-16r6kis label.svelte-16r6kis{padding:5px;flex:1;overflow:hidden;cursor:pointer;display:flex;justify-content:center;align-items:center}.themeSwitcher.svelte-16r6kis label input.svelte-16r6kis{display:none}.themeSwitcher.svelte-16r6kis label.darkRadio.svelte-16r6kis{color:currentColor}.themeSwitcher.svelte-16r6kis label.lightRadio.svelte-16r6kis{color:currentColor}.themeSwitcher.dark.svelte-16r6kis .lightRadio.svelte-16r6kis{background-color:white;color:black}.themeSwitcher.light.svelte-16r6kis .darkRadio.svelte-16r6kis{background-color:black;color:white}@media screen and (max-width: 779px){.themeSwitcher.svelte-16r6kis.svelte-16r6kis{border:none;height:100%}.themeSwitcher.svelte-16r6kis label.svelte-16r6kis{padding:0;height:100%;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:center}.themeSwitcher.svelte-16r6kis label svg.svelte-16r6kis{width:24px;height:24px;margin:4px 0}.themeSwitcher.svelte-16r6kis label.svelte-16r6kis:after{content:"theme";font-size:var(--fontSizeSm);padding-bottom:3px}.themeSwitcher.dark.svelte-16r6kis label.lightRadio.svelte-16r6kis{background-color:transparent;color:inherit}.themeSwitcher.dark.svelte-16r6kis label.darkRadio.svelte-16r6kis{display:none}.themeSwitcher.light.svelte-16r6kis.svelte-16r6kis{background-color:transparent}.themeSwitcher.light.svelte-16r6kis label.darkRadio.svelte-16r6kis{background-color:transparent;color:inherit}.themeSwitcher.light.svelte-16r6kis label.lightRadio.svelte-16r6kis{display:none}}',
  map: null
};
const ThemeSwitcher = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let { theme = "light" } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  $$result.css.add(css$4);
  return `<div class="${"themeSwitcher " + (0, import_index_f732b4f4.e)(theme) + " svelte-16r6kis"}"><label class="${"darkRadio svelte-16r6kis"}"><input type="${"radio"}" name="${"theme"}"${(0, import_index_f732b4f4.d)("value", "dark", 0)} class="${"svelte-16r6kis"}"${theme === "dark" ? (0, import_index_f732b4f4.d)("checked", true, 1) : ""}>
    <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"svelte-16r6kis"}"><use xlink:href="${"#moon"}"></use></svg></label>
  
  <label class="${"lightRadio svelte-16r6kis"}"><input type="${"radio"}" name="${"theme"}"${(0, import_index_f732b4f4.d)("value", "light", 0)} class="${"svelte-16r6kis"}"${theme === "light" ? (0, import_index_f732b4f4.d)("checked", true, 1) : ""}>
    <svg width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" class="${"svelte-16r6kis"}"><use xlink:href="${"#sun"}"></use></svg></label>
</div>`;
});
var NavActions_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.actionNav.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--primaryHS) var(--l-100));transition:all 0.3s linear;padding:0}.actionNav.svelte-16yjjvd ul.svelte-16yjjvd{list-style-type:none;display:flex;align-items:center;height:100%}.actionNav.svelte-16yjjvd ul li.svelte-16yjjvd{flex:1;position:relative}.actionNav.svelte-16yjjvd ul li a.svelte-16yjjvd{height:100%;color:inherit;text-decoration:none;white-space:nowrap;display:flex;flex-direction:column;justify-content:center;align-items:center}@media screen and (max-width: 779px){.actionNav.svelte-16yjjvd.svelte-16yjjvd{background-color:hsl(var(--primaryHS) var(--primaryL));color:hsl(var(--primaryHS) var(--onPrimaryStrength2));filter:drop-shadow(0 -1px 2px rgba(0, 0, 0, 0.15))}.actionNav.svelte-16yjjvd ul li.svelte-16yjjvd{height:100%}.actionNav.svelte-16yjjvd ul li a.svelte-16yjjvd{font-size:var(--fontSizeSm)}.actionNav.svelte-16yjjvd ul li a i.svelte-16yjjvd{display:flex;justify-content:center;align-items:center;padding:3px;width:30px;height:30px;top:4px;transition:all 0.3s ease-in}.actionNav.svelte-16yjjvd ul li a span.svelte-16yjjvd{padding-bottom:3px}.actionNav.svelte-16yjjvd ul li.active a i.svelte-16yjjvd{padding:0.5rem;transform:scale(1.5) translateY(-40%);background-color:hsl(var(--accentHS) var(--accentL));border-radius:50%}.actionNav.svelte-16yjjvd ul li.themeSwitchWrap.svelte-16yjjvd{order:5}}@media screen and (min-width: 780px){.actionNav.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--onImage)/var(--onImageStrength0));background-color:transparent;padding:0 0.5rem}.actionNav.svelte-16yjjvd ul.svelte-16yjjvd{justify-content:flex-end;gap:0.5rem}.actionNav.svelte-16yjjvd ul li.svelte-16yjjvd{flex:unset}.actionNav.svelte-16yjjvd ul li a.svelte-16yjjvd{font-weight:500;letter-spacing:1px;cursor:pointer;padding:0.3em 1em;border-radius:2px;text-decoration:none;display:inline-flex;justify-content:center;align-items:center;width:auto;box-shadow:0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.actionNav.svelte-16yjjvd ul li a i.svelte-16yjjvd{display:none}.actionNav.svelte-16yjjvd ul li.primary a.svelte-16yjjvd{border:1px solid hsl(var(--accentHS) var(--accentL));background-color:hsl(var(--accentHS) var(--accentL));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0)}.actionNav.svelte-16yjjvd ul li.primary a.svelte-16yjjvd:hover{border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}.actionNav.svelte-16yjjvd ul li.ghost a.svelte-16yjjvd{border:1px solid currentColor;background:transparent;color:currentColor}.actionNav.svelte-16yjjvd ul li.ghost a.svelte-16yjjvd:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}.actionNav.scrolled.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--primaryHS) var(--onPrimaryStrength2))}}@media screen and (min-width: 1430px){.actionNav.svelte-16yjjvd.svelte-16yjjvd{background-color:transparent;padding:0 0 10% 10%;justify-content:flex-start;color:hsl(var(--onGradient)/var(--onGradientStrength0))}.actionNav.scrolled.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--onGradient)/var(--onGradientStrength0))}.actionNav.svelte-16yjjvd ul.svelte-16yjjvd{justify-content:flex-start;gap:0.5rem;flex:unset}.actionNav.svelte-16yjjvd ul li.themeSwitchWrap.svelte-16yjjvd{margin-right:1rem}.actionNav.svelte-16yjjvd ul li a.svelte-16yjjvd{font-weight:500;letter-spacing:1px;cursor:pointer;padding:0.3em 1em;border-radius:2px;text-decoration:none;display:inline-flex;justify-content:center;align-items:center;width:auto;box-shadow:0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0);transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)}.actionNav.svelte-16yjjvd ul li a i.svelte-16yjjvd{display:none}.actionNav.svelte-16yjjvd ul li.primary a.svelte-16yjjvd{border:1px solid hsl(var(--accentHS) var(--accentL));background-color:hsl(var(--accentHS) var(--accentL));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0), 0 10px 10px rgba(0, 0, 0, 0)}.actionNav.svelte-16yjjvd ul li.primary a.svelte-16yjjvd:hover{border:1px solid hsl(var(--accentHS) calc(var(--accentL) - 10%));background-color:hsl(var(--accentHS) calc(var(--accentL) - 10%));color:hsl(var(--onAccent)/var(--onAccentStrength0));box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}.actionNav.svelte-16yjjvd ul li.ghost a.svelte-16yjjvd{border:1px solid currentColor;background:transparent;color:currentColor}.actionNav.svelte-16yjjvd ul li.ghost a.svelte-16yjjvd:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)}}.dark .actionNav.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength1))}.dark .actionNav.scrolled.svelte-16yjjvd.svelte-16yjjvd{color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength1))}@media screen and (max-width: 779px){.dark .actionNav.svelte-16yjjvd.svelte-16yjjvd{background-color:hsl(var(--accentAltHS) var(--accentAltL))}.dark .actionNav.svelte-16yjjvd .active a.svelte-16yjjvd{color:hsl(var(--onAccent)/var(--onAccentStrength3))}}",
  map: null
};
const NavActions = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f732b4f4.a)(import_stores_9eabddde.p, (value) => $page = value);
  let actionNavList = navigation.actionNav;
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$result.css.add(css$3);
  $$unsubscribe_page();
  return `<nav class="${"actionNav " + (0, import_index_f732b4f4.e)(y > 80 ? "scrolled" : "") + " svelte-16yjjvd"}" aria-label="${"Secondary Navigation - take action!"}"><ul class="${"svelte-16yjjvd"}"><li class="${"themeSwitchWrap svelte-16yjjvd"}">${(0, import_index_f732b4f4.v)(ThemeSwitcher, "ThemeSwitcher").$$render($$result, {}, {}, {})}</li>
        ${(0, import_index_f732b4f4.b)(actionNavList, (item) => `<li class="${[
    (0, import_index_f732b4f4.e)((0, import_index_f732b4f4.n)(item.class)) + " svelte-16yjjvd",
    item.link === $page.url.pathname ? "active" : ""
  ].join(" ").trim()}"><a${(0, import_index_f732b4f4.d)("href", item.link, 0)} class="${"svelte-16yjjvd"}"><i class="${"svelte-16yjjvd"}"><svg width="${"20"}" height="${"20"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" stroke-width="${"1"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"><use xlink:href="${"#" + (0, import_index_f732b4f4.e)(item.icon)}"></use></svg></i>
                <span class="${"svelte-16yjjvd"}">${(0, import_index_f732b4f4.e)(item.title)}
                </span></a>
            </li>`)}</ul>
</nav>`;
});
const Overlay = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"overlay"}">Overlay Here</nav>`;
});
var NavlogoWrap_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.logoWrap.svelte-xv3w0z.svelte-xv3w0z{padding:0.5rem;display:flex;justify-content:flex-start;align-items:flex-start}.logoWrap.svelte-xv3w0z svg{height:100%;max-height:100%;max-width:100%}.logoWrap.svelte-xv3w0z a.svelte-xv3w0z{height:100%;width:auto;display:block;text-decoration:none}.logoWrap.svelte-xv3w0z svg.mdScreenLogo{display:none}@media screen and (min-width: 780px) and (max-width: 1429px){.logoWrap.svelte-xv3w0z.svelte-xv3w0z{display:flex;background-color:transparent;height:120px;transform-origin:left top;transition:all 0.5s linear;will-change:height}.logoWrap.svelte-xv3w0z svg.defaultLogo{display:none}.logoWrap.svelte-xv3w0z svg.mdScreenLogo{display:block}.logoWrap.scrolled.svelte-xv3w0z.svelte-xv3w0z{height:60px}}@media screen and (min-width: 1430px){.logoWrap.svelte-xv3w0z.svelte-xv3w0z{background-color:transparent;display:flex;justify-content:flex-start;align-items:center;padding:10% 10% 5% 10%}}",
  map: null
};
const NavlogoWrap = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$result.css.add(css$2);
  return `

<div class="${"logoWrap " + (0, import_index_f732b4f4.e)(y > 80 ? "scrolled" : "") + " svelte-xv3w0z"}"><a href="${"/"}" aria-label="${"Go to home page"}" class="${"svelte-xv3w0z"}">${(0, import_index_f732b4f4.v)(import_Logo_50a46ba3.L, "Logo").$$render($$result, { myClass: "defaultLogo" }, {}, {})}
        ${(0, import_index_f732b4f4.v)(import_Logo_50a46ba3.L, "Logo").$$render($$result, { myClass: "mdScreenLogo" }, {}, {})}</a>
</div>`;
});
const config = {
  title: "Committed Bodies",
  slogan: "Take back your life - one day at a time",
  about: "Committed Bodies is a gym in Benoni that specialises in body transformation and healthy lifestyle support"
};
var siteSettings = {
  config
};
const footerLinks1 = {
  columnTitle: "Start Now",
  links: [
    {
      title: "Select a membership",
      url: "/membership"
    },
    {
      title: "Book a class",
      url: "/services"
    },
    {
      title: "Download the app",
      url: "/download"
    }
  ]
};
const footerLinks2 = {
  columnTitle: "Not sure?",
  links: [
    {
      title: "Make an appointment",
      url: "/appointment"
    },
    {
      title: "Health and Fitness advice",
      url: "/"
    },
    {
      title: "Live Chat",
      url: "/"
    }
  ]
};
var footerData = {
  footerLinks1,
  footerLinks2
};
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}footer.svelte-nsh91l.svelte-nsh91l{position:relative;background:hsl(var(--accentAltHS) var(--accentAltL));color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength0));font-weight:300}footer.svelte-nsh91l a.svelte-nsh91l{color:inherit;text-decoration:none}footer.svelte-nsh91l .footerContent.svelte-nsh91l{padding:1rem;align-items:flex-start}footer.svelte-nsh91l .footerContent div p.svelte-nsh91l{margin-top:0}footer.svelte-nsh91l .footerContent h5.svelte-nsh91l{font-size:1.2rem;margin-top:0;font-weight:300;color:hsl(var(--onAccentAlt)/var(--onAccentAltStrength3))}footer.svelte-nsh91l .footerContent .actionsWidget.svelte-nsh91l{padding:1rem}footer.svelte-nsh91l .footerContent .actionsWidget ul.svelte-nsh91l{list-style-type:none;margin:0;padding:0}footer.svelte-nsh91l .tagline.svelte-nsh91l{padding:1rem 1rem 2rem 1rem;display:flex;justify-content:space-between;background-color:hsl(var(--accentAltHS) calc(var(--accentAltL) - 10%));color:hsla(var(--onAccentAlt)/var(--onAccentAltStrength3));font-size:0.8rem}@media(min-width: 780px){footer.svelte-nsh91l .footerContent.svelte-nsh91l{display:grid;grid-template-columns:1fr auto auto;grid-gap:1rem}footer.svelte-nsh91l .footerContent .aboutWidget p.svelte-nsh91l{max-width:40ch}footer.svelte-nsh91l .footerContent .actionsWidget.svelte-nsh91l{padding:0}footer.svelte-nsh91l .footerContent .actionsWidget.align-right.svelte-nsh91l{padding:0 1rem 0 0;text-align:right;border-right:1px solid hsl(var(--onAccentAlt)/var(--onAccentAltStrength3))}footer.svelte-nsh91l .tagline.svelte-nsh91l{padding:1rem}}",
  map: null
};
const Footer = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-nsh91l"}"><div class="${"footerContent svelte-nsh91l"}"><div class="${"aboutWidget"}"><h5 class="${"svelte-nsh91l"}">About Committed Bodies</h5>
        <p class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.e)(siteSettings.config.about)}</p></div>
        <div class="${"actionsWidget align-right svelte-nsh91l"}"><h5 class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.e)(footerData.footerLinks1.columnTitle)}</h5>
            <ul class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.b)(footerData.footerLinks1.links, (link) => `<li><a${(0, import_index_f732b4f4.d)("href", link.url, 0)} class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.e)(link.title)}</a></li>`)}</ul></div>
        <div class="${"actionsWidget svelte-nsh91l"}"><h5 class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.e)(footerData.footerLinks2.columnTitle)}</h5>
            <ul class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.b)(footerData.footerLinks2.links, (link) => `<li><a${(0, import_index_f732b4f4.d)("href", link.url, 0)} class="${"svelte-nsh91l"}">${(0, import_index_f732b4f4.e)(link.title)}</a></li>`)}</ul></div></div>
    <div class="${"tagline svelte-nsh91l"}"><div class="${"copyright"}">\xA9 2022 Committed Bodies
        </div>
        <div class="${"credit"}">Site by <a href="${"www.sonya.ninja"}" alt="${"Kick-ass websites by Sonya.Ninja"}" class="${"svelte-nsh91l"}">SONYA.NINJA</a></div></div>
</footer>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--fontIncrement:0.2rem;--fontSizeBase:1rem}@media screen and (min-width: 780px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}@media screen and (min-width: 1430px){:root{--fontIncrement:0.3rem;--fontSizeBase:1.05rem}}:root{--fontSizeSm:calc(var(--fontSizeBase) - (var(--fontIncrement) * 1.5));--fontSizeMd:var(--fontSizeBase);--fontSizeH6:calc(var(--fontSizeMd) + var(--fontIncrement));--fontSizeH5:calc(var(--fontSizeH6) + var(--fontIncrement));--fontSizeH4:calc(var(--fontSizeH5) + var(--fontIncrement));--fontSizeH3:calc(var(--fontSizeH4) + var(--fontIncrement));--fontSizeH2:calc(var(--fontSizeH3) + var(--fontIncrement));--fontSizeH1:calc(var(--fontSizeH2) + var(--fontIncrement));--fontSizeXXXL:clamp(3rem, calc(5vw + 1rem), 6rem)}.navColor.svelte-56p5dg{grid-row:1;grid-column:1/span 2;background-color:hsl(var(--primaryHS) var(--primaryL));z-index:2}@media screen and (min-width: 780px) and (max-width: 1429px){.navColor.svelte-56p5dg{display:block;grid-column:1/span 3;grid-row:1;opacity:0;transition:all 0.5s linear}.navColor.scrolled.svelte-56p5dg{opacity:0.7}}@media screen and (min-width: 1430px){.navColor.svelte-56p5dg{display:block;opacity:1;grid-column:1;grid-row:1/span 3;background-image:var(--brandGradient)}}.dark .navColor.svelte-56p5dg{background-color:hsl(var(--accentAltHS) var(--accentAltL))}@media screen and (min-width: 1430px){.dark .navColor.svelte-56p5dg{background-image:linear-gradient(145deg, rgba(255, 255, 255, 0.141), transparent)}}.shadow.svelte-56p5dg{z-index:20;pointer-events:none;width:100%;height:100%;grid-area:main;box-shadow:inset 0 2px 3px rgba(0, 0, 0, 0.15)}@media screen and (min-width: 780px) and (max-width: 1429px){.shadow.svelte-56p5dg{grid-column:1/span 3;grid-row:1;box-shadow:0 2px 3px rgba(0, 0, 0, 0);transition:all 0.5s linear}.shadow.scrolled.svelte-56p5dg{backdrop-filter:blur(10px);box-shadow:0 2px 3px rgba(0, 0, 0, 0.15)}}@media screen and (min-width: 1430px){.shadow.svelte-56p5dg{grid-area:main;box-shadow:inset 2px 0 3px rgba(0, 0, 0, 0.15)}}",
  map: null
};
const _layout = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  $$result.css.add(css);
  return `
${(0, import_index_f732b4f4.v)(Icons_combined, "IconsCombined").$$render($$result, {}, {}, {})}


${(0, import_index_f732b4f4.v)(NavlogoWrap, "LogoWrap").$$render($$result, { y }, {}, {})}
${(0, import_index_f732b4f4.v)(NavTopLevel, "TopNav").$$render($$result, { y }, {}, {})}
${(0, import_index_f732b4f4.v)(NavActions, "ActionNav").$$render($$result, { y }, {}, {})}


<div class="${"navColor " + (0, import_index_f732b4f4.e)(y > 80 ? "scrolled" : "") + " svelte-56p5dg"}"></div>
<div class="${"shadow " + (0, import_index_f732b4f4.e)(y > 80 ? "scrolled" : "") + " svelte-56p5dg"}"></div>


<main>${slots.default ? slots.default({}) : ``}
    ${(0, import_index_f732b4f4.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</main>


${(0, import_index_f732b4f4.v)(Overlay, "Overlay").$$render($$result, {}, {}, {})} 


`;
});
