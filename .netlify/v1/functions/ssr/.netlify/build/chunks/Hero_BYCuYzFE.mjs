import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_HCeeQtoM.mjs';
import { a as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, d as renderComponent, u as unescapeHTML, c as createAstro, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_mOXIqnvi.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import 'clsx';
/* empty css                         */

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc) || imageSrc.startsWith("/")) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://astroxamk.github.io", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Data-Analysis.md": () => import('./Data-Analysis_DXlToPO1.mjs'),"/src/content/about/EEB2.md": () => import('./EEB2_CGiG0GgZ.mjs'),"/src/content/about/ESH.md": () => import('./ESH_CGu4mBaM.mjs'),"/src/content/about/Elements-AI.md": () => import('./Elements-AI_CVJ9MD4T.mjs'),"/src/content/about/Hietakumpu.md": () => import('./Hietakumpu_BoYjrAdU.mjs'),"/src/content/about/Intro-sec.md": () => import('./Intro-sec_DEWpRi2U.mjs'),"/src/content/about/ResponsiveWeb.md": () => import('./ResponsiveWeb_l4Obb_78.mjs'),"/src/content/about/ScrumMaster.md": () => import('./ScrumMaster_BiQFgmEz.mjs'),"/src/content/about/Secretary.md": () => import('./Secretary_Bw7WEHnp.mjs'),"/src/content/about/TUe.md": () => import('./TUe_O9cuV7pw.mjs'),"/src/content/about/XAMK.md": () => import('./XAMK_0uy0wnep.mjs'),"/src/content/about/XGS.md": () => import('./XGS_CgRbqc7b.mjs'),"/src/content/articles/test copy.md": () => import('./test copy_y68qdudE.mjs'),"/src/content/articles/test.md": () => import('./test_AEOxq4-S.mjs'),"/src/content/projects/Beet-the-root.md": () => import('./Beet-the-root_D_gJeR6a.mjs'),"/src/content/projects/Dump-folder.md": () => import('./Dump-folder_yKAK-pqm.mjs'),"/src/content/projects/FactoryGame.md": () => import('./FactoryGame_CRqxZgmK.mjs'),"/src/content/projects/ISLP&R.md": () => import('./ISLP_R_sU7jD0ak.mjs'),"/src/content/projects/XAMKPortfolio.md": () => import('./XAMKPortfolio_ldjvbok1.mjs'),"/src/content/projects/alus.md": () => import('./alus_Bx7YYTYG.mjs'),"/src/content/projects/piiska.md": () => import('./piiska_aidIzdcm.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"about":{"type":"content","entries":{"elements-ai":"/src/content/about/Elements-AI.md","data-analysis":"/src/content/about/Data-Analysis.md","esh":"/src/content/about/ESH.md","hietakumpu":"/src/content/about/Hietakumpu.md","eeb2":"/src/content/about/EEB2.md","responsiveweb":"/src/content/about/ResponsiveWeb.md","scrummaster":"/src/content/about/ScrumMaster.md","intro-sec":"/src/content/about/Intro-sec.md","secretary":"/src/content/about/Secretary.md","tue":"/src/content/about/TUe.md","xamk":"/src/content/about/XAMK.md","xgs":"/src/content/about/XGS.md"}},"articles":{"type":"content","entries":{"test-copy":"/src/content/articles/test copy.md","test":"/src/content/articles/test.md"}},"projects":{"type":"content","entries":{"alus":"/src/content/projects/alus.md","beet-the-root":"/src/content/projects/Beet-the-root.md","dump-folder":"/src/content/projects/Dump-folder.md","factorygame":"/src/content/projects/FactoryGame.md","piiska":"/src/content/projects/piiska.md","islpr":"/src/content/projects/ISLP&R.md","xamkportfolio":"/src/content/projects/XAMKPortfolio.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/about/Data-Analysis.md": () => import('./Data-Analysis_BjeMgh8c.mjs'),"/src/content/about/EEB2.md": () => import('./EEB2_CIOUzBxa.mjs'),"/src/content/about/ESH.md": () => import('./ESH_DlZu4ppZ.mjs'),"/src/content/about/Elements-AI.md": () => import('./Elements-AI_DxMiJdpX.mjs'),"/src/content/about/Hietakumpu.md": () => import('./Hietakumpu_BG6QeO2C.mjs'),"/src/content/about/Intro-sec.md": () => import('./Intro-sec_01-neQBq.mjs'),"/src/content/about/ResponsiveWeb.md": () => import('./ResponsiveWeb_XBbfBQHs.mjs'),"/src/content/about/ScrumMaster.md": () => import('./ScrumMaster_qzlxIuBk.mjs'),"/src/content/about/Secretary.md": () => import('./Secretary_BbPvhOkl.mjs'),"/src/content/about/TUe.md": () => import('./TUe_CwPzQ-u6.mjs'),"/src/content/about/XAMK.md": () => import('./XAMK_DF5YOKoB.mjs'),"/src/content/about/XGS.md": () => import('./XGS_Bepk3XUu.mjs'),"/src/content/articles/test copy.md": () => import('./test copy_COMrJASZ.mjs'),"/src/content/articles/test.md": () => import('./test_DSqgPM8K.mjs'),"/src/content/projects/Beet-the-root.md": () => import('./Beet-the-root_1uM2McNO.mjs'),"/src/content/projects/Dump-folder.md": () => import('./Dump-folder_BEpa7TWR.mjs'),"/src/content/projects/FactoryGame.md": () => import('./FactoryGame_haqy-5Ic.mjs'),"/src/content/projects/ISLP&R.md": () => import('./ISLP_R_D323f08G.mjs'),"/src/content/projects/XAMKPortfolio.md": () => import('./XAMKPortfolio_CT5qUTem.mjs'),"/src/content/projects/alus.md": () => import('./alus_NJMHAULz.mjs'),"/src/content/projects/piiska.md": () => import('./piiska_Be9YnE2Z.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$Astro = createAstro("https://astroxamk.github.io");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", description, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="stack gap-2" data-astro-cid-bbe6dxrz> <h1 class="lg:text-6xl font-bold mb-2 flex justify-center" id="title" data-astro-cid-bbe6dxrz>${title}</h1> ${description && renderTemplate`<p id="description" data-astro-cid-bbe6dxrz>${description}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/GitHub/astroxamk.github.io/src/components/Hero.astro", void 0);

export { $$Hero as $, getCollection as g };
