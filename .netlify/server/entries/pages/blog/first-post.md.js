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
  default: () => First_post,
  metadata: () => metadata
});
var import_index_f732b4f4 = __toModule(require("../../../chunks/index-f732b4f4.js"));
const metadata = {
  "title": "First Post",
  "layout": "blog",
  "description": "This is a short descriptive excerpt for the blog post.\nUse this excerpt to inspire curiosity in both search engines and humans.\n",
  "date": "2021-08-05 11:30:59 -0800",
  "thumbnail": "https://res.cloudinary.com/sonya-ninja/image/upload/q_auto/v1628228850/Placeholders/imagePlaceholder_u4yliv.png"
};
const First_post = (0, import_index_f732b4f4.c)(($$result, $$props, $$bindings, slots) => {
  return `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorem nihil provident eum pariatur praesentium fuga aperiam consequatur! Dolorum voluptate eveniet quam dolorem temporibus, dignissimos quidem qui nostrum aut consequatur!</p>`;
});
