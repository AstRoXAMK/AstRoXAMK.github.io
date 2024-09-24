import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"TU/e","publishDate":"2021-09-01T00:00:00.000Z","img_card":"/images/Eindhoven_University_of_Technology_logo_new.png","img_alt":"A game made with haste","description":"Starting my university life in the Netherlands, an array of bad luck and unfortunate incidents befell in my first year which prompted me to change univesities and degree. But a lasting impression was found in programming thanks to TU/e. With courses in programming, psychology, design and HTI, I wanted to keep studying most of these things. \n","education":true,"duration":"2021-2022"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/TUe.md";
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
