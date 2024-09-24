import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"virtual-areena\">Virtual Areena</h2>\n<div class=\"game\">\n  <iframe frameborder=\"0\" src=\"https://itch.io/embed/2737823?bg_color=181a1c&#x26;fg_color=dead7d&#x26;link_color=00f5a8&#x26;border_color=dead7d\" width=\"552\" height=\"167\">&#x3C;a href=\"https://rhjastren.itch.io/xgs-satama-areena-test-builds\">XGS Satama Areena (Test Builds) by RhjAstren&#x3C;/a></iframe>\n</div>\n<blockquote>\n<p>A simple-to-use virtual environment for potential customers of Satama Areena</p>\n</blockquote>\n<ul>\n  <li>\n    Lead Programmer - Roope Astrén\n  </li>\n  <li>\n    3D Modelling - Daria Khilchuck\n  </li>\n  <li>\n    UI designer - Viktoriia Gorovaia\n  </li>\n</ul>\n<h3 id=\"description\">Description</h3>\n<p>A virtual environment built onto Unity’s WebGL platform to be displayed on Satama Areena’s\nofficial website. The virtual environment can be accessed on PC and Mobile</p>\n<h3 id=\"progress\">Progress</h3>\n<h3 id=\"problems\">Problems</h3>\n<h3 id=\"conclusion\">Conclusion</h3>\n<style>\n  .game{\n    text-transform: uppercase;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: var(--accent-purple-3);\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n\n\n</style>";

				const frontmatter = {"title":"Virtual Areena","publishDate":"2024-05-06T00:00:00.000Z","img_card":"/images/Satama_Areena.jpg","img":"/images/Satama_Areena.jpg","img_alt":"Some shizz","description":"XGS internship. A virtual environment for Satama Areena in Kotka for the summer of 2024.\nThe project is still ongoing and will be completed at the end of the year.\n","tags":["Mobile","PC","Unity WebGL"],"education":false,"duration":2024,"hasLink":true};
				const file = "C:/GitHub/astroxamk.github.io/src/content/about/XGS.md";
				const url = undefined;
				function rawContent() {
					return "\n## Virtual Areena\n\n<div class=\"game\">\n  <iframe frameborder=\"0\" src=\"https://itch.io/embed/2737823?bg_color=181a1c&amp;fg_color=dead7d&amp;link_color=00f5a8&amp;border_color=dead7d\" width=\"552\" height=\"167\"><a href=\"https://rhjastren.itch.io/xgs-satama-areena-test-builds\">XGS Satama Areena (Test Builds) by RhjAstren</a></iframe>\n</div>\n\n> A simple-to-use virtual environment for potential customers of Satama Areena\n\n<ul>\n  <li>\n    Lead Programmer - Roope Astrén\n  </li>\n  <li>\n    3D Modelling - Daria Khilchuck\n  </li>\n  <li>\n    UI designer - Viktoriia Gorovaia\n  </li>\n</ul>\n\n\n### Description\n\nA virtual environment built onto Unity's WebGL platform to be displayed on Satama Areena's\nofficial website. The virtual environment can be accessed on PC and Mobile\n\n### Progress\n\n### Problems\n\n### Conclusion\n\n\n<style>\n  .game{\n    text-transform: uppercase;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    color: var(--accent-purple-3);\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 1.5rem;\n  }\n\n\n</style>";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"virtual-areena","text":"Virtual Areena"},{"depth":3,"slug":"description","text":"Description"},{"depth":3,"slug":"progress","text":"Progress"},{"depth":3,"slug":"problems","text":"Problems"},{"depth":3,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
