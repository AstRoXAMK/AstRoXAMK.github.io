import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"portfolio-for-school-use\">Portfolio for school use</h2>\n<a href=\"https://portfolio.gamelab.fi/roope.astren/\" class=\"link-to-portfolio\" target=\"_blank\">\n  Link to the portfolio\n</a>\n<h3 id=\"description\">Description</h3>\n<p>A very simple portfolio that I use/used during my time at XAMK. It holds all the same projects as this portfolio.</p>\n<h3 id=\"progress\">Progress</h3>\n<p>The portfolio came to be very easily. I started working on it during some evening and didn’t stop until I had everything that I needed for it.</p>\n<h3 id=\"problems\">Problems</h3>\n<p>Didn’t really encounter any problems. I stayed within my repertoire of skills and was done with the portfolio in no time. I have since been updating it regularily.</p>\n<h4 id=\"conclusion\">Conclusion</h4>\n<p>It was a fun and small project that we had to do for a course. I was pleased with it and didn’t really see a need to go over-board with it.</p>\n<style>\n  .link-to-portfolio{\n    font-size: 1.7rem;\n    color: var(--accent-purple-3);\n  }\n\n  @media (max-width: 719px){\n    .link-to-portfolio{\n      font-size: 1.1rem;\n    }\n  }\n</style>";

				const frontmatter = {"title":"XAMK-Portfolio","publishDate":"2022-11-28T00:00:00.000Z","img_card":"/images/XAMKLogo.jpg","img":"/images/XAMKLogo.jpg","img_alt":"A game made with haste","description":"Portfolio for my studies at XAMK\n","tags":["HTML5","CSS3","Stoobid"]};
				const file = "C:/GitHub/astroxamk.github.io/src/content/projects/XAMKPortfolio.md";
				const url = undefined;
				function rawContent() {
					return "\n## Portfolio for school use\n\n<a href=\"https://portfolio.gamelab.fi/roope.astren/\" class=\"link-to-portfolio\" target=\"_blank\">\n  Link to the portfolio\n</a>\n\n### Description\n\nA very simple portfolio that I use/used during my time at XAMK. It holds all the same projects as this portfolio.\n\n### Progress\n\nThe portfolio came to be very easily. I started working on it during some evening and didn't stop until I had everything that I needed for it.\n\n### Problems\n\nDidn't really encounter any problems. I stayed within my repertoire of skills and was done with the portfolio in no time. I have since been updating it regularily.\n\n#### Conclusion\n\nIt was a fun and small project that we had to do for a course. I was pleased with it and didn't really see a need to go over-board with it.\n\n<style>\n  .link-to-portfolio{\n    font-size: 1.7rem;\n    color: var(--accent-purple-3);\n  }\n\n  @media (max-width: 719px){\n    .link-to-portfolio{\n      font-size: 1.1rem;\n    }\n  }\n</style>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"portfolio-for-school-use","text":"Portfolio for school use"},{"depth":3,"slug":"description","text":"Description"},{"depth":3,"slug":"progress","text":"Progress"},{"depth":3,"slug":"problems","text":"Problems"},{"depth":4,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
