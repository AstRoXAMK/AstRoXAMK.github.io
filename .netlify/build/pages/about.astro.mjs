/* empty css                                */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Hero } from '../chunks/Hero_BYCuYzFE.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqprInA8.mjs';
import { $ as $$Grid } from '../chunks/Grid_D5s1VTsW.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astroxamk.github.io");
const $$AboutMePreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutMePreview;
  const { data, slug } = Astro2.props.about;
  return renderTemplate`${data.hasLink ? renderTemplate`${maybeRenderHead()}<a${addAttribute(data.link || `/about/${slug}`, "href")} data-astro-cid-6x56zc3s><div class="card .with-link" data-astro-cid-6x56zc3s><span class="title" data-astro-cid-6x56zc3s>${data.title}<p data-astro-cid-6x56zc3s>${data.duration}</p></span><p data-astro-cid-6x56zc3s>${data.description}</p><img${addAttribute(data.img_card, "src")}${addAttribute(data.title || "", "alt")} data-astro-cid-6x56zc3s></div></a>` : renderTemplate`<div class="card" data-astro-cid-6x56zc3s><span class="title" data-astro-cid-6x56zc3s>${data.title}<p data-astro-cid-6x56zc3s>${data.duration}</p></span><p data-astro-cid-6x56zc3s>${data.description}</p><img${addAttribute(data.img_card, "src")}${addAttribute(data.title || "", "alt")} data-astro-cid-6x56zc3s></div>`}`;
}, "C:/GitHub/astroxamk.github.io/src/components/AboutMePreview.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  let aboutData = await getCollection("about");
  aboutData.sort((a, b) => b.data.publishDate - a.data.publishDate);
  let educationData = aboutData.filter((entry) => entry.data.education);
  let workData = aboutData.filter((entry) => !entry.data.education);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My about page", "seoTitle": "", "seoDescription": "", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-auto lg:w-6/12 mx-auto" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "About Me", "description": "I am a 3rd year Game Programming student from XAMK. Here is a short collection of my educational background and work experience/certificates.", "align": "center", "data-astro-cid-kh7btl4r": true })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <div id="work-left" data-astro-cid-kh7btl4r> <p class="flex justify-center text-3xl pb-6" data-astro-cid-kh7btl4r>
Work Life
</p> ${workData.map((entry) => renderTemplate`${renderComponent($$result3, "AboutMePreview", $$AboutMePreview, { "about": entry, "data-astro-cid-kh7btl4r": true })}`)} </div> <div id="edu-right" data-astro-cid-kh7btl4r> <p class="flex justify-center text-3xl pb-6" data-astro-cid-kh7btl4r>
Education
</p> ${educationData.map((entry) => renderTemplate`${renderComponent($$result3, "AboutMePreview", $$AboutMePreview, { "about": entry, "data-astro-cid-kh7btl4r": true })}`)} </div> ` })} </div> ` })} `;
}, "C:/GitHub/astroxamk.github.io/src/pages/about.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
