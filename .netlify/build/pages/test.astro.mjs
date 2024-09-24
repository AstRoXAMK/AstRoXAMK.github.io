/* empty css                                */
import { a as createComponent, r as renderTemplate, i as renderHead } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Year in School</title>${renderHead()}</head> <body> <p>You started school in <span id="start-year"></span> and you are currently in your <span id="current-year"></span> year.</p>  </body> </html>`;
}, "C:/GitHub/astroxamk.github.io/src/pages/Test.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/Test.astro";
const $$url = "/Test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Test,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
