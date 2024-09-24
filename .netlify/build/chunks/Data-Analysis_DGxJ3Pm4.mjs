import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"content\">Content</h2>\n<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>";

				const frontmatter = {"title":"Data-Analysis with Python","publishDate":"2024-01-01T00:00:00.000Z","img_card":"/images/Helsinki-uni.png","img":"/images/Helsinki-uni.png","img_alt":"A game made with haste","description":"A course provided by the department of Computer Science of Helsinki university. A premaster course for Data Science. My free time course for learning about data analysis, ML and AI. \n","tags":["Data-analysis","AI & ML","MOOC"],"education":false,"duration":2024,"hasLink":true};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/Data-Analysis.md";
				const url = undefined;
				function rawContent() {
					return "\n## Content\n\nLorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"content","text":"Content"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
