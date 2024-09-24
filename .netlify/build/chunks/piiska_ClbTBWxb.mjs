import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Piiska.","publishDate":"2024-04-01T00:00:00.000Z","img_card":"/images/Gamelab.jpeg","img":"/images/Gamelab.jpeg","img_alt":"Some shizz","description":"Some shit I was a part of upkeeping\n","tags":["Web development","React","Fullstack"]};
				const file = "C:/GitHub/astroxamk.github.io/src/content/projects/piiska.md";
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
