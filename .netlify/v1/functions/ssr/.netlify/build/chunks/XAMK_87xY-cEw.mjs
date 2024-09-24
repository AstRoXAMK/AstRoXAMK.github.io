import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"XAMK","publishDate":"2022-09-03T00:00:00.000Z","img_card":"/images/XAMKLogo.jpg","img_alt":"A game made with haste","description":"I have started studying at South-East of Finland University of Applied Sciences (or better known as XAMK) in the late summer of 2022 and I have been acquainted with some new knowledge and I have also been able to implement my own knowledge to other things. I can see myself studying here for some years. \n","education":true,"duration":"2022-20XX"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/XAMK.md";
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
