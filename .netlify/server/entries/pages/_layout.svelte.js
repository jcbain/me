import { c as create_ssr_component, e as each, a as escape, n as null_to_empty, b as add_attribute, s as setContext, v as validate_component } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "header.svelte-11imdk1{display:flex;height:20px;justify-content:space-around}div.svelte-11imdk1{width:100%}.red.svelte-11imdk1{background-color:var(--theme-colorRed)}.orange.svelte-11imdk1{background-color:var(--theme-colorOrange)}.yellow.svelte-11imdk1{background-color:var(--theme-colorYellow)}.green.svelte-11imdk1{background-color:var(--theme-colorGreen)}.blue.svelte-11imdk1{background-color:var(--theme-colorBlue)}.violet.svelte-11imdk1{background-color:var(--theme-colorViolet)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const colors2 = ["red", "orange", "yellow", "green", "blue", "violet"];
  $$result.css.add(css$2);
  return `<header class="${"svelte-11imdk1"}">${each(colors2, (color) => {
    return `<div class="${escape(null_to_empty(color), true) + " svelte-11imdk1"}"></div>`;
  })}


</header>`;
});
const github = "/_app/immutable/assets/github.1ea8d62e.svg";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1w09zxn.svelte-1w09zxn{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;text-align:center}footer.svelte-1w09zxn a.svelte-1w09zxn{font-weight:bold}@media(min-width: 480px){footer.svelte-1w09zxn.svelte-1w09zxn{padding:12px 0}}img.svelte-1w09zxn.svelte-1w09zxn{width:24px;vertical-align:middle}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1w09zxn"}"><p>stepped away from socials but a thumbs up at <a href="${"https://github.com/jcbain"}" class="${"svelte-1w09zxn"}"><img${add_attribute("src", github, 0)} alt="${"github logo"}" class="${"svelte-1w09zxn"}">github/jcbain</a> is welcomed!</p>
</footer>`;
});
const colors = {
  light: {
    red: "#cc241d",
    orange: "#fe8019",
    yellow: "#d79921",
    green: "#98971a",
    blue: "#458588",
    violet: "#8f3f71",
    black: "rgba(0, 0, 0, 0.7)",
    white: "#fffff7"
  }
};
const defaultTheme = {
  name: "default",
  values: {
    textColor: colors.light.black,
    bgColor: colors.light.white,
    linkColor: colors.light.red,
    colorRed: colors.light.red,
    colorOrange: colors.light.orange,
    colorYellow: colors.light.yellow,
    colorGreen: colors.light.green,
    colorBlue: colors.light.blue,
    colorViolet: colors.light.violet
  }
};
const themes = [
  {
    name: "light",
    values: {
      ...defaultTheme.values
    }
  }
];
const ThemeContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let themes$1 = [...themes];
  let _current = themes$1[0].name;
  const getCurrentTheme = (name) => themes$1.find((h) => h.name === name);
  const Theme = writable(getCurrentTheme(_current));
  setContext("theme", {
    // provide Theme store through context
    theme: Theme,
    toggle: () => {
      let _currentIndex = themes$1.findIndex((h) => h.name === _current);
      _current = themes$1[_currentIndex === themes$1.length - 1 ? 0 : _currentIndex += 1].name;
      Theme.update((t) => ({ ...t, ...getCurrentTheme(_current) }));
    }
  });
  return `${slots.default ? slots.default({}) : ``}`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-fxeorr{display:flex;flex-direction:column;min-height:100vh}main.svelte-fxeorr{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1080px;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){main.svelte-fxeorr{padding:12px 40px}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(ThemeContext, "ThemeContext").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"app svelte-fxeorr"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
			<main class="${"svelte-fxeorr"}">${slots.default ? slots.default({}) : ``}</main>
			${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
    }
  })}`;
});
export {
  Layout as default
};
