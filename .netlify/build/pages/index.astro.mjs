/* empty css                                */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqprInA8.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const name = "Roope Astr\xE9n";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Roope Astr\xE9n Portfolio", "seoTitle": "", "seoDescription": "", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:w-8/12 w-11/12 lg:my-4 sm:my-0" data-astro-cid-j7pv25f6> <div id="left-main" class="text-center w-auto flex flex-col justify-center" data-astro-cid-j7pv25f6> <div class="uppercase" data-astro-cid-j7pv25f6> <p class="lg:text-5xl text-2xl text-center " data-astro-cid-j7pv25f6>I am</p> <p class="lg:text-5xl text-2xl text-center" data-astro-cid-j7pv25f6>${name}</p> </div> <div id="typed-strings" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6> <span id="grade" data-astro-cid-j7pv25f6></span> </p> <p data-astro-cid-j7pv25f6>
Web development, C#, C++ and more
</p> </div> <div class="text-center mt-6 max-h-0 " data-astro-cid-j7pv25f6> <span id="Typed" data-astro-cid-j7pv25f6></span> </div> </div> <div id="right-main" class="mt-2 lg:w-10/12 sm:w-full" data-astro-cid-j7pv25f6> <img src="/images/img1.png" width="100%" height="100%" alt="pic of me" data-astro-cid-j7pv25f6> </div> </div> ` })}  `;
}, "C:/GitHub/astroxamk.github.io/src/pages/index.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
