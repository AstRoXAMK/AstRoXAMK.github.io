import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Why are you here?</p>";

				const frontmatter = {"title":"Test Article","publishDate":"2024-03-04T00:00:00.000Z","img_card":"/images/Roope.jpg","img":"/images/Roope.jpg","img_alt":"A game made with haste","description":"Test Article\n","tags":["IDK","Just some essays","Test"]};
				const file = "C:/GitHub/astroxamk.github.io/src/content/articles/test.md";
				const url = undefined;
				function rawContent() {
					return "\nWhy are you here?";
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
