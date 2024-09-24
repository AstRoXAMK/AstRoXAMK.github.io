/* empty css                                */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Hero } from '../chunks/Hero_BYCuYzFE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqprInA8.mjs';
import { $ as $$Grid } from '../chunks/Grid_D5s1VTsW.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astroxamk.github.io");
const $$PortfolioPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead()}<a class="card"${addAttribute(`/projects/${slug}`, "href")} data-astro-cid-lgkm4u2a> <span class="title" data-astro-cid-lgkm4u2a>${data.title}</span> <p data-astro-cid-lgkm4u2a>${data.description}</p> <img${addAttribute(data.img_card, "src")}${addAttribute(data.title || "", "alt")} data-astro-cid-lgkm4u2a> </a> `;
}, "C:/GitHub/astroxamk.github.io/src/components/PortfolioPreview.astro", void 0);

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("projects")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Projects", "seoTitle": "", "seoDescription": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="w-auto lg:w-6/12 mx-auto"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Projects", "description": "Here is a collection of projects that I have worked on or am working on at the time. I have worked on a variety of projects, from web development to game development. I am always looking for new projects to work on, so if you have a project that you would like me to work on, feel free to contact me.", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> </div> ` })}`;
}, "C:/GitHub/astroxamk.github.io/src/pages/projects.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
