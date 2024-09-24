import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"tower-defensefactory-mobile-game\">Tower defense/Factory mobile game</h2>\n<h3 id=\"description\">Description</h3>\n<p>A mobile game meant to be enjoyed on the go and at home as well</p>\n<p>A part tower defense part base building game. The main game would take place in the base of the user and the missions would have been a tower defense mission to collect the resources needed to build the base.</p>\n<h3 id=\"progress\">Progress</h3>\n<p>The game, at the time of leaving, was in a state that it would have been at the stage to start devloping the tower defense and base building phase.</p>\n<p>I had worked on the UI for the most part of my time and was starting to work on the building aspect of the game.</p>\n<p>The game is being worked on by another programmer as of 18.1.2023</p>\n<h3 id=\"problems\">Problems</h3>\n<p>Well the biggest problems I had while working on the project happened to mostly be the fact that I was working alone. I had no real experience working on unity, but I was able to make use of vidoes found on YouTube to create something that, while no proud of, was still satisfied with the outcome.</p>\n<h4 id=\"conclusion\">Conclusion</h4>\n<p>While I may have not worked on the project for a long time, I was still able to learn something about Unity as well as my passions. In the future I will be working on projects that I, not only find to be more interesting than a mobile game, but also projects that I enjoy working on.</p>\n<p>I will also be working with a bigger team than me, myself and I, to divide the work and work more efficiently</p>";

				const frontmatter = {"title":"FactoryGame","publishDate":"2022-10-12T00:00:00.000Z","img_card":"/images/FactoryGameBanner.png","img":"/images/FactoryGame.png","img_alt":"A game made with haste","description":"Collaborative game with Kouvolas Game Design students\n","tags":["Unity","Game"]};
				const file = "C:/GitHub/astroxamk.github.io/src/content/projects/FactoryGame.md";
				const url = undefined;
				function rawContent() {
					return "\n## Tower defense/Factory mobile game\n\n### Description\n\nA mobile game meant to be enjoyed on the go and at home as well\n\nA part tower defense part base building game. The main game would take place in the base of the user and the missions would have been a tower defense mission to collect the resources needed to build the base. \n\n### Progress\n\nThe game, at the time of leaving, was in a state that it would have been at the stage to start devloping the tower defense and base building phase.\n\nI had worked on the UI for the most part of my time and was starting to work on the building aspect of the game.\n\nThe game is being worked on by another programmer as of 18.1.2023\n\n### Problems\n\nWell the biggest problems I had while working on the project happened to mostly be the fact that I was working alone. I had no real experience working on unity, but I was able to make use of vidoes found on YouTube to create something that, while no proud of, was still satisfied with the outcome.\n\n#### Conclusion\n\nWhile I may have not worked on the project for a long time, I was still able to learn something about Unity as well as my passions. In the future I will be working on projects that I, not only find to be more interesting than a mobile game, but also projects that I enjoy working on.\n\nI will also be working with a bigger team than me, myself and I, to divide the work and work more efficiently ";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"tower-defensefactory-mobile-game","text":"Tower defense/Factory mobile game"},{"depth":3,"slug":"description","text":"Description"},{"depth":3,"slug":"progress","text":"Progress"},{"depth":3,"slug":"problems","text":"Problems"},{"depth":4,"slug":"conclusion","text":"Conclusion"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
