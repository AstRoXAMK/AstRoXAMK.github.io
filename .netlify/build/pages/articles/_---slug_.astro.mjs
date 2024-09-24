/* empty css                                   */
import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Hero } from '../../chunks/Hero_BYCuYzFE.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BqprInA8.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://astroxamk.github.io");
async function getStaticPaths() {
  const project = await getCollection("articles");
  const paths = [];
  for (const entry of project) {
    paths.push({
      params: {
        slug: entry.slug
      },
      props: {
        entry
      }
    });
  }
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "data-astro-cid-c7vabzjd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-12" data-astro-cid-c7vabzjd> <div id="back-link" data-astro-cid-c7vabzjd> <a href="/articles/" data-astro-cid-c7vabzjd> <p id="back" data-astro-cid-c7vabzjd>&lt;-Back</p> </a> </div> <header id="header-title" data-astro-cid-c7vabzjd> ${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "description": "", "align": "start", "data-astro-cid-c7vabzjd": true }, { "default": ($$result3) => renderTemplate` <div id="details" data-astro-cid-c7vabzjd> <div id="header-info" data-astro-cid-c7vabzjd> <div data-astro-cid-c7vabzjd> <p id="description" data-astro-cid-c7vabzjd> ${entry.data.description} </p> <div id="tags" class="flex flex-row justify-center" data-astro-cid-c7vabzjd> ${entry.data.tags.map((tag) => renderTemplate`<span id="tag" data-astro-cid-c7vabzjd>${tag}</span>`)} </div> </div> <div class="mt-6" data-astro-cid-c7vabzjd> ${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.title, "alt")} || ' ' data-astro-cid-c7vabzjd>`} </div> </div> </div> ` })} </header> <main id="wrapper" data-astro-cid-c7vabzjd> <div class="stack gap-10" id="content" data-astro-cid-c7vabzjd> <div id="markdown" data-astro-cid-c7vabzjd> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-c7vabzjd": true })} </div> </div> </main> </div> ` })} `;
}, "C:/GitHub/astroxamk.github.io/src/pages/articles/[...slug].astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
