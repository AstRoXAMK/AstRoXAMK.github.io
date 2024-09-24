import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"HUS - Secretary","publishDate":"2019-08-12T00:00:00.000Z","img_card":"/images/HUS_logo.png","img_alt":"A game made with haste","description":"Customer service and general services for Helsinki University Hospital. Most of the time was spent at Töölö Hospital Surgical outpatient clinic. 2023 Moved to Siltasairaala for the summer. Worked on/off during afore mentioned years.\n","education":false,"duration":"2019-2023"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/Secretary.md";
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
