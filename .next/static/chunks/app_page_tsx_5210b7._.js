(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_page_tsx_5210b7._.js", {

"[project]/app/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Home
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/modal-confirm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$create$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/modal-create-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$create$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/modal-create-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$edit$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/modal-edit-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$main$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/main-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Sidebar/sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/progress/dist/chunk-T6O3OHG3.mjs [app-client] (ecmascript) <export circular_progress_default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const { loadData } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forceRefresh, setForceRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    function Refresh() {
        setForceRefresh(!forceRefresh);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadData();
        setIsLoading(false);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col w-full h-full items-center justify-center gap-4 py-8 md:py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row min-h-[720] w-full",
            children: [
                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full h-full justify-center self-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex sm:flex-col flex-row w-full h-full sm:w-1/3 -mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            refresh: Refresh
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$main$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            refresh: Refresh
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 35,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$create$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refresh: Refresh
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$create$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refresh: Refresh
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$edit$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refresh: Refresh
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$modal$2d$confirm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    refresh: Refresh
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Home, "c+pnOw6rWhQg3kqJeTIbu2TlJPk=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");

})()),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=app_page_tsx_5210b7._.js.map