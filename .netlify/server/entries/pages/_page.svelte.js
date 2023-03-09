import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const intro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-v6w1no{font-size:3.5em;color:var(--primary-bg)}p.svelte-v6w1no{font-size:1.2em}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div><h2 class="${"svelte-v6w1no"}">Hi there! 👋</h2>
    <p class="${"svelte-v6w1no"}">I&#39;m James, an anthropologist and full-stack developer currently building cool things at <a href="${"https://tugboatqa.com"}">TugboatQA</a>!</p>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-7w87tm{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:0.6}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-k70jku_START -->${$$result.title = `<title>James Bain</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-k70jku_END -->`, ""}

<section class="${"svelte-7w87tm"}">${validate_component(Intro, "Intro").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
