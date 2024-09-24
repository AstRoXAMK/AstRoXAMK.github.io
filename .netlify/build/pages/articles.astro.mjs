/* empty css                                */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Hero } from '../chunks/Hero_BYCuYzFE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqprInA8.mjs';
import { $ as $$Grid } from '../chunks/Grid_D5s1VTsW.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://astroxamk.github.io");
const $$ArticlesPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArticlesPreview;
  const { data, slug } = Astro2.props.article;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/articles/${slug}`, "href")} data-astro-cid-drm27hkk> <span class="title" data-astro-cid-drm27hkk>${data.title}</span> <p data-astro-cid-drm27hkk>${data.description}</p> <img${addAttribute(data.img_card, "src")}${addAttribute(data.title || "", "alt")} data-astro-cid-drm27hkk> </a> `;
}, "C:/GitHub/astroxamk.github.io/src/components/ArticlesPreview.astro", void 0);

const $$Astro = createAstro("https://astroxamk.github.io");
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const entries = (await getCollection("articles")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Texts and Articles", "seoTitle": "", "seoDescription": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-auto lg:w-6/12 mx-auto"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Texts and Articles", "description": "This is a simple Astro app with Tailwind CSS", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small" }, { "default": ($$result3) => renderTemplate`${entries.map((entry) => renderTemplate`<li> ${renderComponent($$result3, "ArticlesPreview", $$ArticlesPreview, { "article": entry })} </li>`)}` })} </div> ` })}`;
}, "C:/GitHub/astroxamk.github.io/src/pages/articles.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/articles.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Articles,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
