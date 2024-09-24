import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DsrsPVai.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/about/_---slug_.astro.mjs');
const _page3 = () => import('./pages/articles.astro.mjs');
const _page4 = () => import('./pages/articles/_---slug_.astro.mjs');
const _page5 = () => import('./pages/contactinfo.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/projects/_---slug_.astro.mjs');
const _page8 = () => import('./pages/test.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/about/[...slug].astro", _page2],
    ["src/pages/articles.astro", _page3],
    ["src/pages/articles/[...slug].astro", _page4],
    ["src/pages/contactInfo.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/projects/[...slug].astro", _page7],
    ["src/pages/Test.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "0d5a6d25-a055-4ac4-8c73-2357cb200bc4"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
