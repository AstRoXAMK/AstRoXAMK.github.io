import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Hietakumpu","publishDate":"2007-08-01T00:00:00.000Z","img_card":"/images/Hietakumpu.jpg","img_alt":"A game made with haste","description":"The beginning of my school life, that I am continuing and will continue for years to come. \n","education":true,"duration":"2007-2012"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/Hietakumpu.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
