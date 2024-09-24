import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"ESH","publishDate":"2015-08-15T00:00:00.000Z","img_card":"/images/ESH_LOGO_RGB_XXL.png","img_alt":"A game made with haste","description":"I have graduated from the European School of Helsinki in the summer of 2019 with a grade of 71.44% (= Magna Cum Laureate). During my time at ESH I also participated in voluntary work with Operation Wallacea as a \"research assistant\" in the cloudforests of Honduras and the coral reefs of Roatan.\n","education":true,"duration":"2015-2019"};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/ESH.md";
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
