import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ScrumMaster","publishDate":"2023-12-19T00:00:00.000Z","img_card":"/images/seal-csm.png","img_alt":"A game made with haste","description":"A ScrumMaster learning and IT-development with Agile, offered by Scrum Alliance and conducted by Petri Heiramo.\n","education":false,"duration":2024};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/ScrumMaster.md";
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
