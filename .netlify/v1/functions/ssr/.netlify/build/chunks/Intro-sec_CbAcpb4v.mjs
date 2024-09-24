import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"content\">Content</h2>\n<p>Learn about tools used to analyse flaws in software systems, necessary knowledge to build secure software systems (esp. within Web), the skills needed to perform risk and threat analysis on existing systems and the relevant legislation within EU.</p>\n<p>This course of the course series will introduce the participant to the relevant issues in cyber security. These issues include the stakeholders’ and users’ ability to disrupt the functionality of a system; corporate responsibilities and liabilities; and the never-ending software crisis that is related to the increasing amount of software and maintenance. Here, we also introduce the basics of internet communication protocols and a gentle introduction to cryptography.</p>";

				const frontmatter = {"title":"Introduction to Cyber Security","publishDate":"2024-05-01T00:00:00.000Z","img_card":"/images/Helsinki-uni.png","img":"/images/Helsinki-uni.png","img_alt":"A game made with haste","description":"Cyber Security Base is a free course series by University of Helsinki and MOOC.fi that focuses on building core knowledge and abilities related to the work of a cyber security professional.\n","tags":["Cyber security","MOOC"],"education":false,"duration":2024,"hasLink":true};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/Intro-sec.md";
				const url = undefined;
				function rawContent() {
					return "\n## Content\n\nLearn about tools used to analyse flaws in software systems, necessary knowledge to build secure software systems (esp. within Web), the skills needed to perform risk and threat analysis on existing systems and the relevant legislation within EU.\n\nThis course of the course series will introduce the participant to the relevant issues in cyber security. These issues include the stakeholders' and users' ability to disrupt the functionality of a system; corporate responsibilities and liabilities; and the never-ending software crisis that is related to the increasing amount of software and maintenance. Here, we also introduce the basics of internet communication protocols and a gentle introduction to cryptography.";
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
