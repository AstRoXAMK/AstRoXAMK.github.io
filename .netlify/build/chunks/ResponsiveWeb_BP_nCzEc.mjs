import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Responsive Web design","publishDate":"2022-03-22T00:00:00.000Z","img_card":"/images/FreeCodeCamp_logo.png","img_alt":"A game made with haste","description":"I have commited about 300h for responsive web design on FreeCodeCamp.org and acquired the Responsive Web Design Certificate on the 22nd of March, 2022. \n","education":false,"duration":2022,"hasLink":true,"link":"https://www.freecodecamp.org/certification/fcc05fe3bf1-3983-40aa-8817-b024bb30a7de/responsive-web-design"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/ResponsiveWeb.md";
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
