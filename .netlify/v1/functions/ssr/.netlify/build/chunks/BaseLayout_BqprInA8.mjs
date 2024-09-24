import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, s as spreadAttributes, u as unescapeHTML, d as renderComponent, i as renderHead, m as maybeRenderHead, e as renderSlot } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$9 = createAstro("https://astroxamk.github.io");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$8 = createAstro("https://astroxamk.github.io");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$7 = createAstro("https://astroxamk.github.io");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$6 = createAstro("https://astroxamk.github.io");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$5 = createAstro("https://astroxamk.github.io");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$4 = createAstro("https://astroxamk.github.io");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$3 = createAstro("https://astroxamk.github.io");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$2 = createAstro("https://astroxamk.github.io");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/GitHub/astroxamk.github.io/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$1 = createAstro("https://astroxamk.github.io");
const $$MainHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title, seoTitle, seoDescription } = Astro2.props;
  return renderTemplate`<head>${renderComponent($$result, "SEO", $$SEO, { "title": seoTitle, "description": seoDescription })}<meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">${renderHead()}</head>`;
}, "C:/GitHub/astroxamk.github.io/src/Layouts/MainHead.astro", void 0);

const $$MobileNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="hamburger-icon" onclick="this.classList.toggle('open');" data-astro-cid-37bvxqo4> <div id="bar-1" data-astro-cid-37bvxqo4></div> <div id="bar-2" data-astro-cid-37bvxqo4></div> <div id="bar-3" data-astro-cid-37bvxqo4></div> <section class="fixed flex items-center justify-center" data-astro-cid-37bvxqo4> <ul id="mobile-menu" class="space-y-4 text-center text-white" data-astro-cid-37bvxqo4> <li data-astro-cid-37bvxqo4> <a href="/about" data-astro-cid-37bvxqo4>About Me</a> </li> <li data-astro-cid-37bvxqo4> <a href="/projects" data-astro-cid-37bvxqo4>Projects</a> </li> <li data-astro-cid-37bvxqo4> <a href="/articles" data-astro-cid-37bvxqo4>My Articles</a> </li> <li data-astro-cid-37bvxqo4> <a href="/contactInfo" data-astro-cid-37bvxqo4>Contact</a> </li> </ul> </section> </div>  `;
}, "C:/GitHub/astroxamk.github.io/src/components/MobileNav.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="navbar" class="w-full z-50 fixed p-0 box-border top-0 left-0 h-18 bg-slate-900" data-astro-cid-dmqpwcec> <div id="logo" class="flex items-center px-5 " data-astro-cid-dmqpwcec> <a href="/" id="home-btn" data-astro-cid-dmqpwcec> <p class="text-3xl font-bold" data-astro-cid-dmqpwcec>
RA
</p> </a> </div> <nav id="Menu-Items" class="lg:flex lg:items-center lg:justify-center py-5" data-astro-cid-dmqpwcec> <ul class="flex flex-row gap-12 justify-center text-3xl" data-astro-cid-dmqpwcec> <li class="transform hover:scale-110 transition-transform duration-150 ease-in-out" data-astro-cid-dmqpwcec> <a href="/about" data-astro-cid-dmqpwcec>About Me</a> </li> <li class="transform hover:scale-110 transition-transform duration-150 ease-in-out" data-astro-cid-dmqpwcec> <a href="/projects" data-astro-cid-dmqpwcec>Projects</a> </li> <li class="transform hover:scale-110 transition-transform duration-150 ease-in-out" data-astro-cid-dmqpwcec> <a href="/articles" data-astro-cid-dmqpwcec>Texts</a> </li> <li class="transform hover:scale-110 transition-transform duration-150 ease-in-out" data-astro-cid-dmqpwcec> <a href="/contactInfo" data-astro-cid-dmqpwcec>Contact</a> </li> </ul> </nav> <div data-astro-cid-dmqpwcec> ${renderComponent($$result, "MobileNav", $$MobileNav, { "data-astro-cid-dmqpwcec": true })} </div> </div> `;
}, "C:/GitHub/astroxamk.github.io/src/components/Nav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col lg:flex-row-reverse text-center mt-auto mb-8 justify-center lg:gap-12"> <div id="icons" class="lg:pt-2 lg:text-xl text-sm"> <div class="flex flex-row gap-3 justify-center lg:gap-6"> <a href="https://github.com/AstRooFin" target="_blank"> <p>Github</p> </a> <a href="https://www.linkedin.com/in/roope-astr%C3%A9n-7053bb249/" target="_blank"> <p>LinkedIn</p> </a> <a href="https://www.instagram.com/rhj.astren/" target="_blank"> <p>Instagram</p> </a> </div> <p class="lg:hidden py-1">
======================
</p> </div> <div id="design" class="lg:text-xl text-sm"> <p>
Designed @ Kotka
</p> <p class="lg:hidden">
----------
</p> <p>
&copy; <span id="copyright"></span> </p> </div> </footer> `;
}, "C:/GitHub/astroxamk.github.io/src/components/Footer.astro", void 0);

const $$CVDownload = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:text-2xl text-base border rounded-r-lg rounded-l-lg border-none lg:p-3 p-2 relative duration-400 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600"> <a href="/Files/CV_EN_2023.pdf">
Download my CV here
</a> </div>`;
}, "C:/GitHub/astroxamk.github.io/src/components/CV_Download.astro", void 0);

const $$ContactMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<aside class="py-10 mb-6" data-astro-cid-uesty5gv> <div id="Connect" class="flex lg:flex-row justify-center lg:gap-12 gap-6" data-astro-cid-uesty5gv> <div id="mailto" class="lg:text-2xl text-base border rounded-r-lg rounded-l-lg lg:p-3 p-2 border-none bg-gradient-to-l from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600" data-astro-cid-uesty5gv> <a href="mailto:roope.astren@gmail.com" data-astro-cid-uesty5gv> <h2 data-astro-cid-uesty5gv>
Contact me through my E-mail here
</h2> </a> </div> ${renderComponent($$result, "CVDownload", $$CVDownload, { "data-astro-cid-uesty5gv": true })} </div> </aside> `;
}, "C:/GitHub/astroxamk.github.io/src/components/ContactMe.astro", void 0);

const $$Astro = createAstro("https://astroxamk.github.io");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, seoTitle, seoDescription } = Astro2.props;
  return renderTemplate`<html data-astro-cid-j3ltlmc5> ${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "seoTitle": seoTitle, "seoDescription": seoDescription, "data-astro-cid-j3ltlmc5": true })}${maybeRenderHead()}<body class="bg-gradient-to-br from-indigo-900 via-slate-800 to-purple-900 text-white grid gap-0 overflow-hidden" data-astro-cid-j3ltlmc5> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-j3ltlmc5": true })} <div class="my-20" data-astro-cid-j3ltlmc5> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "ContactMe", $$ContactMe, { "data-astro-cid-j3ltlmc5": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j3ltlmc5": true })}  </body> </html>`;
}, "C:/GitHub/astroxamk.github.io/src/Layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
