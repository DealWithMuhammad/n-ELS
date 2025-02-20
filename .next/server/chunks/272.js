exports.id = 272;
exports.ids = [272];
exports.modules = {

/***/ 8279:
/***/ ((module) => {

// Exports
module.exports = {
	"markdown": "markdown-styles_markdown__46bsz"
};


/***/ }),

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PostBody)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8706);
/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(413);
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8279);
/* harmony import */ var _markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);





const DynamicVideoEmbed = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(()=>__webpack_require__.e(/* import() */ 328).then(__webpack_require__.bind(__webpack_require__, 8328))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8328)
            ]
        ,
        modules: [
            "..\\components\\post\\post-body.js -> " + "./video-embed"
        ]
    }
});
function renderOptions(links) {
    var ref, ref1;
    const entryMap = new Map();
    if (links === null || links === void 0 ? void 0 : (ref = links.entries) === null || ref === void 0 ? void 0 : ref.block) {
        for (const entry of links.entries.block){
            entryMap.set(entry.sys.id, entry);
        }
    }
    // create an asset map
    const assetMap = new Map();
    // loop through the assets and add them to the map
    if (links === null || links === void 0 ? void 0 : (ref1 = links.assets) === null || ref1 === void 0 ? void 0 : ref1.block) {
        var ref2;
        for (const asset of links === null || links === void 0 ? void 0 : (ref2 = links.assets) === null || ref2 === void 0 ? void 0 : ref2.block){
            assetMap.set(asset.sys.id, asset);
        }
    }
    return {
        // other options...
        renderMark: {
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.MARKS.BOLD]: (text)=>{
                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: text
                }, `${text}-key`));
            }
        },
        renderNode: {
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.INLINES.HYPERLINK]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: node.data.uri,
                    target: "_blank",
                    rel: "nofollow noreferrer",
                    className: "text-primary-100",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_1]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-bold text-5xl sm:text-6xl xl:text-7xl leading-snug",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_2]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-4xl sm:text-5xl xl:text-6xl font-bold",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_3]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-3xl sm:text-4xl font-bold",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_4]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "text-2xl sm:text-2xl font-bold",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_5]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    className: "text-xl sm:text-xl font-bold",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.HEADING_6]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: "text-lg sm:text-lg font-bold",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.PARAGRAPH]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.QUOTE]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                    className: "bg-gray-100 p-2 mx-6 mb-4 border-l-4 border-gray-400 italic",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.UL_LIST]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "list-disc ml-4",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.OL_LIST]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                    className: "list-decimal ml-4",
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.LIST_ITEM]: (node, children)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: children
                })
            ,
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.EMBEDDED_ENTRY]: (node, children)=>{
                const entry = entryMap.get(node.data.target.sys.id);
                const { __typename  } = entry;
                switch(__typename){
                    case "Video":
                        const { youtubeUrl , title  } = entry;
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicVideoEmbed, {
                            youtubeUrl: youtubeUrl,
                            title: title
                        }));
                    default:
                        return null;
                }
            },
            // other options...
            [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_2__.BLOCKS.EMBEDDED_ASSET]: (node, next)=>{
                // find the asset in the assetMap by ID
                const asset = assetMap.get(node.data.target.sys.id);
                // render the asset accordingly
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: asset === null || asset === void 0 ? void 0 : asset.url,
                            alt: "My image alt text"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center mt-1 font-semibold",
                            children: asset === null || asset === void 0 ? void 0 : asset.description
                        })
                    ]
                }));
            }
        }
    };
}
function PostBody({ content , className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_markdown_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().markdown),
            children: (0,_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_1__.documentToReactComponents)(content.json, renderOptions(content.links))
        })
    }));
};


/***/ })

};
;