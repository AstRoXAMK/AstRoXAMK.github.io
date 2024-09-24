/* empty css                                */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BqprInA8.mjs';
/* empty css                                       */
export { renderers } from '../renderers.mjs';

const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const name = "Roope Astr\xE9n";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-b5z6urkp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="font-bold" data-astro-cid-b5z6urkp>Contact <span data-astro-cid-b5z6urkp>${name}</span></h1> <div class="flex justify-center text-center text-2xl" data-astro-cid-b5z6urkp> <ul data-astro-cid-b5z6urkp> <li data-astro-cid-b5z6urkp> <p id="title" data-astro-cid-b5z6urkp>
Location:
</p> <p id="content" data-astro-cid-b5z6urkp>
Kotka, Finland
</p> </li> <li data-astro-cid-b5z6urkp> <p id="title" data-astro-cid-b5z6urkp>
Education:
</p> <p id="content" data-astro-cid-b5z6urkp>
XAMK University of Applied Sciences
</p> </li> <li data-astro-cid-b5z6urkp> <p id="title" data-astro-cid-b5z6urkp>
E-Mail:
</p> <p id="content" data-astro-cid-b5z6urkp>
roope.astren@gmail.com
</p> </li> <li data-astro-cid-b5z6urkp> <p id="title" data-astro-cid-b5z6urkp>
Mobile Phone:
</p> <p id="content" data-astro-cid-b5z6urkp>
(+358) 0404848971
</p> </li> <li data-astro-cid-b5z6urkp> <p id="title" data-astro-cid-b5z6urkp>
Languages:
</p> <p id="content" data-astro-cid-b5z6urkp>
Finnish, English, Swedish, Spanish
</p> </li> </ul> </div> ` })} `;
}, "C:/GitHub/astroxamk.github.io/src/pages/contactInfo.astro", void 0);

const $$file = "C:/GitHub/astroxamk.github.io/src/pages/contactInfo.astro";
const $$url = "/contactInfo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ContactInfo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
