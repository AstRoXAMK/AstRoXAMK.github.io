import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"EEB2","publishDate":"2012-09-01T00:00:00.000Z","img_card":"/images/EEB2.jpg","img_alt":"A game made with haste","description":"The second school I ever attended. I moved to Brussels on my fathers accord as he was repositioned to the embassy of Finland in Brussels. I started my international studies at this school and would not stop until graduation.\n","education":true,"duration":"2012-2015"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/EEB2.md";
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
