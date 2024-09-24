import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"content\">Content</h2>\n<p>The Elements of AI is a series of free online courses created by MinnaLearn and the University of Helsinki. We want to encourage as broad a group of people as possible to learn what AI is, what can (and can’t) be done with AI, and how to start creating AI methods. The courses combine theory with practical exercises and can be completed at your own pace.</p>";

				const frontmatter = {"title":"Elements of AI","publishDate":"2024-04-01T00:00:00.000Z","img_card":"/images/Helsinki-uni.png","img":"/images/Helsinki-uni.png","img_alt":"A game made with haste","description":"The Elements of AI is a series of free online courses created by MinnaLearn and the University of Helsinki.\n","tags":["AI","Theoretical","MOOC"],"education":false,"duration":2024,"hasLink":true};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/Elements-AI.md";
				const url = undefined;
				function rawContent() {
					return "\n## Content\n\nThe Elements of AI is a series of free online courses created by MinnaLearn and the University of Helsinki. We want to encourage as broad a group of people as possible to learn what AI is, what can (and can’t) be done with AI, and how to start creating AI methods. The courses combine theory with practical exercises and can be completed at your own pace.";
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
