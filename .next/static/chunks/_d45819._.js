(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_d45819._.js", {

"[project]/components/Graphic/editable-text.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
function EditabelText(props) {
    _s();
    const { defaultText, textClassName } = props;
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultText);
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center align-middle w-full",
        children: !editMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
            className: "w-auto",
            variant: "light",
            onClick: ()=>setEditMode(true),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: textClassName,
                children: text
            }, void 0, false, {
                fileName: "[project]/components/Graphic/editable-text.tsx",
                lineNumber: 24,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Graphic/editable-text.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
            className: "w-auto",
            defaultValue: text,
            onValueChange: (value)=>setText(value),
            onKeyDown: (key)=>{
                if (key.key == "Enter") {
                    setEditMode(false);
                }
            }
        }, void 0, false, {
            fileName: "[project]/components/Graphic/editable-text.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Graphic/editable-text.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(EditabelText, "vV0P/wJMPZJZ+CLblANCVji19EQ=");
_c = EditabelText;
const __TURBOPACK__default__export__ = EditabelText;
var _c;
__turbopack_refresh__.register(_c, "EditabelText");

})()),
"[project]/components/Graphic/titulo.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Titulo
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$editable$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Graphic/editable-text.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Titulo(props) {
    const { original_tittle, original_subtittle } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full justify-center align-middle text-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$editable$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                defaultText: original_tittle,
                textClassName: "text-4xl font-semibold"
            }, void 0, false, {
                fileName: "[project]/components/Graphic/titulo.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$editable$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                defaultText: original_subtittle,
                textClassName: "text-lg"
            }, void 0, false, {
                fileName: "[project]/components/Graphic/titulo.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Graphic/titulo.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Titulo;
var _c;
__turbopack_refresh__.register(_c, "Titulo");

})()),
"[project]/utils/Stores/chartStore.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useChartStore": ()=>useChartStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useChartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        chartSelected: {
            id: 0,
            title: "",
            subtitle: "",
            active: false,
            backendData: {
                latitude: [],
                longitude: [],
                image: "",
                data: [],
                time: [],
                level: [],
                units: ""
            },
            typeChart: "bar"
        },
        typeChart: "image",
        loadChartData: ()=>{
            try {
                const data = localStorage.getItem("UserData.chartSelected");
                if (data) {
                    set((state)=>({
                            ...state,
                            chartSelected: JSON.parse(data)
                        }));
                } else {
                    const provisionalChart = {
                        id: 0,
                        title: "",
                        subtitle: "",
                        active: false,
                        backendData: {
                            latitude: [],
                            longitude: [],
                            image: "",
                            data: [],
                            time: [],
                            level: [],
                            units: ""
                        },
                        typeChart: "bar"
                    };
                    set((state)=>({
                            ...state,
                            chartSelected: provisionalChart
                        }));
                    localStorage.setItem("UserData.chartSelected", JSON.stringify(provisionalChart));
                }
            } catch (error) {
                console.error(error);
            }
        },
        selectChart: (newChart)=>{
            set((state)=>({
                    ...state,
                    chartSelected: newChart
                }));
            localStorage.setItem("UserData.chartSelected", JSON.stringify(newChart));
        },
        changeTypeChart: (newType)=>{
            set((state)=>({
                    ...state,
                    typeChart: newType
                }));
        }
    }));

})()),
"[project]/components/Graphic/general.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Visualizador
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$titulo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Graphic/titulo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$checkbox$2f$dist$2f$chunk$2d$KBN3H6OQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__checkbox_default__as__Checkbox$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/checkbox/dist/chunk-KBN3H6OQ.mjs [app-client] (ecmascript) <export checkbox_default as Checkbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/chartStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function Visualizador() {
    _s();
    const { chartSelected } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartStore"].getState();
    const [refresh, SetRefresh] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        SetRefresh(!refresh);
    }, [
        chartSelected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-10 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$titulo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                original_tittle: "Título de ejemplo",
                original_subtittle: "Subtítulo de ejemplo"
            }, void 0, false, {
                fileName: "[project]/components/Graphic/general.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$checkbox$2f$dist$2f$chunk$2d$KBN3H6OQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__checkbox_default__as__Checkbox$3e$__["Checkbox"], {
                onValueChange: (value)=>setColoresNormalizados(value),
                children: "Normalizar Colores"
            }, void 0, false, {
                fileName: "[project]/components/Graphic/general.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grafico, {
                seriesData: data,
                typeChart: typeChart,
                normalizarColores: coloresNormalizados
            }, void 0, false, {
                fileName: "[project]/components/Graphic/general.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Graphic/general.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Visualizador, "mu0Mh1VtZ/BHZGe+TEIr1ZLYyBs=");
_c = Visualizador;
var _c;
__turbopack_refresh__.register(_c, "Visualizador");

})()),
"[project]/components/Sidebar/select.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Desplegable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$select$2f$dist$2f$chunk$2d$CEHIK4GH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/select/dist/chunk-CEHIK4GH.mjs [app-client] (ecmascript) <export select_default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/listbox/dist/chunk-VHPYXGWP.mjs [app-client] (ecmascript) <export listbox_item_base_default as SelectItem>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Desplegable(props) {
    const { titulo, explicacion, elementos, onSelect, desabilitado } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$select$2f$dist$2f$chunk$2d$CEHIK4GH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__select_default__as__Select$3e$__["Select"], {
            size: "md",
            label: explicacion,
            placeholder: titulo,
            className: "flex w-full",
            isDisabled: desabilitado,
            children: elementos.map((elemento)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__SelectItem$3e$__["SelectItem"], {
                    onClick: ()=>onSelect?.(elemento.key),
                    children: elemento.label
                }, elemento.key, false, {
                    fileName: "[project]/components/Sidebar/select.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Sidebar/select.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sidebar/select.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Desplegable;
var _c;
__turbopack_refresh__.register(_c, "Desplegable");

})()),
"[project]/components/Sidebar/slider.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Deslizador
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/slider/dist/chunk-O6IB4TCE.mjs [app-client] (ecmascript) <export slider_default as Slider>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
function Deslizador(props) {
    _s();
    const { maximo, minimo, step, label, defaultValue, getValores, setConsulta, consultaOriginal, tipo } = props;
    const [sliderValue, setSliderValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0
    ]);
    function configurarConsulta() {
        let newConsulta = {
            ...consultaOriginal
        };
        if (tipo == "latitud") {
            if (Array.isArray(sliderValue)) {
                newConsulta.latitud = sliderValue;
            } else {
                newConsulta.latitud = [
                    sliderValue,
                    sliderValue
                ];
            }
        } else if (tipo == "longitud") {
            if (Array.isArray(sliderValue)) {
                newConsulta.longitud = sliderValue;
            } else {
                newConsulta.longitud = [
                    sliderValue,
                    sliderValue
                ];
            }
        }
        setConsulta(newConsulta);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$slider$2f$dist$2f$chunk$2d$O6IB4TCE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__slider_default__as__Slider$3e$__["Slider"], {
        label: label,
        step: step,
        minValue: minimo,
        maxValue: maximo,
        defaultValue: defaultValue,
        showSteps: true,
        className: "flex w-full",
        onChange: (value)=>setSliderValue(value),
        onChangeEnd: (value)=>configurarConsulta()
    }, void 0, false, {
        fileName: "[project]/components/Sidebar/slider.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(Deslizador, "d+h0y8OwMTd+oYWGo/Mp4hDfAdk=");
_c = Deslizador;
var _c;
__turbopack_refresh__.register(_c, "Deslizador");

})()),
"[project]/components/Sidebar/opciones-area.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/slider.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
const OpcionesArea = (props)=>{
    _s();
    const { setConsulta, consultaOriginal } = props;
    const [valores, setValores] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hola");
    const getValores = (v)=>{
        setValores(v);
        console.log(valores);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full flex-col gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Configuración del area del gráfico"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-area.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Rango de la latitud",
                maximo: -34,
                minimo: -35,
                step: 0.25,
                defaultValue: [
                    -34.75,
                    -34.25
                ],
                getValores: getValores,
                setConsulta: setConsulta,
                consultaOriginal: consultaOriginal,
                tipo: "latitud"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-area.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                label: "Rango de la longitud",
                maximo: 110,
                minimo: 108,
                step: 0.25,
                defaultValue: [
                    108.25,
                    109
                ],
                setConsulta: setConsulta,
                consultaOriginal: consultaOriginal,
                tipo: "longitud"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-area.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar/opciones-area.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(OpcionesArea, "xsPCFiPi4qqg/VYYh202cUQt/08=");
_c = OpcionesArea;
const __TURBOPACK__default__export__ = OpcionesArea;
var _c;
__turbopack_refresh__.register(_c, "OpcionesArea");

})()),
"[project]/components/Sidebar/time-input.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>SeleccionHora
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$date$2d$input$2f$dist$2f$chunk$2d$2LGXQJSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__time_input_default__as__TimeInput$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/date-input/dist/chunk-2LGXQJSC.mjs [app-client] (ecmascript) <export time_input_default as TimeInput>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function SeleccionHora(props) {
    const { desabilitado } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$date$2d$input$2f$dist$2f$chunk$2d$2LGXQJSC$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__time_input_default__as__TimeInput$3e$__["TimeInput"], {
        isDisabled: desabilitado,
        label: "Seleccione la hora",
        isRequired: true
    }, void 0, false, {
        fileName: "[project]/components/Sidebar/time-input.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SeleccionHora;
var _c;
__turbopack_refresh__.register(_c, "SeleccionHora");

})()),
"[project]/components/Sidebar/opciones-tiempo.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$time$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/time-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$date$2d$picker$2f$dist$2f$chunk$2d$RUXXUVWM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__date_picker_default__as__DatePicker$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/date-picker/dist/chunk-RUXXUVWM.mjs [app-client] (ecmascript) <export date_picker_default as DatePicker>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const OpcionesTiempo = (props)=>{
    const { desabilitado } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Selección del momento de los datos"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-tiempo.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$date$2d$picker$2f$dist$2f$chunk$2d$RUXXUVWM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__date_picker_default__as__DatePicker$3e$__["DatePicker"], {
                isRequired: true,
                isDisabled: desabilitado,
                label: "Escoja una fecha",
                className: "flex w-full"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-tiempo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$time$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                desabilitado: desabilitado
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/opciones-tiempo.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar/opciones-tiempo.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = OpcionesTiempo;
const __TURBOPACK__default__export__ = OpcionesTiempo;
var _c;
__turbopack_refresh__.register(_c, "OpcionesTiempo");

})()),
"[project]/components/Sidebar/boton.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Boton
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Boton(props) {
    const { texto, funcion } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
        color: "primary",
        fullWidth: false,
        onClick: funcion,
        className: "flex flex-shrink-0",
        children: texto
    }, void 0, false, {
        fileName: "[project]/components/Sidebar/boton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Boton;
var _c;
__turbopack_refresh__.register(_c, "Boton");

})()),
"[project]/config/variables.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "variables2": ()=>variables2
});
const variables2 = [
    {
        key: "u10",
        label: "Velocidad del viento"
    },
    /*{
  key: "u", // "v" 
  label: "Componente del viento", // U/V
},*/ {
        key: "t2m",
        label: "Temperatura"
    },
    /*{
  key: "t",
  label: "Temperatura en la superficie",
},*/ {
        key: "anor",
        label: "Ángulo de la orografía a escala subcuadrícula"
    },
    {
        key: "isor",
        label: "Anisotropía de la orografía a escala subcuadrícula"
    },
    {
        key: "z",
        label: "Geopotencial"
    },
    {
        key: "z",
        label: "Geopotencial en la superficie"
    },
    {
        key: "cvh",
        label: "Covertura de vegetación alta"
    },
    {
        key: "cl",
        label: "Covertura de lagos"
    },
    {
        key: "dl",
        label: "Profundidad del lago"
    },
    {
        key: "lsm",
        label: "Segmentación entre tierra y mar"
    },
    {
        key: "msl",
        label: "Presión media a nivel del mar"
    },
    {
        key: "siconc",
        label: "Covertura de hielo en el mar"
    },
    {
        key: "sst",
        label: "Temperatura en la superfice del mar"
    },
    {
        key: "slor",
        label: "Pendiente de la orografía"
    },
    {
        key: "slt",
        label: "Tipo de suelo"
    },
    {
        key: "q",
        label: "Humedad específica"
    },
    {
        key: "sdfor",
        label: "Desviación estándar de la orografía filtrada"
    },
    {
        key: "sdor",
        label: "Desviación estándar de la orografía"
    },
    {
        key: "sp",
        label: "Presión en la superficie"
    },
    {
        key: "tisr",
        label: "Radiación solar incidente"
    },
    {
        key: "tcc",
        label: "Covertura total de nubes"
    },
    {
        key: "tvh",
        label: "Tipo de vegetación alta"
    },
    {
        key: "swvl1",
        label: "Contenido volumétrico de agua"
    }
];

})()),
"[project]/components/Sidebar/Sidebar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/opciones-area.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$tiempo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/opciones-tiempo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$boton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/boton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/config/variables.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
const Sidebar = ()=>{
    _s();
    const componenteViento = [
        {
            key: "0",
            label: "U (Este - Oeste)"
        },
        {
            key: "1",
            label: "V (Norte - Sur)"
        }
    ];
    const nivelViento = [
        {
            key: "0",
            label: "A 10 metros sobre la superficie"
        },
        {
            key: "1",
            label: "otro nivel 1"
        },
        {
            key: "2",
            label: "otro nivel 2"
        },
        {
            key: "3",
            label: "..."
        }
    ];
    const nivelTemperatura = [
        {
            key: "0",
            label: "A 2 metros sobre la superficie"
        },
        {
            key: "1",
            label: "otro nivel 1"
        },
        {
            key: "2",
            label: "otro nivel 2"
        },
        {
            key: "3",
            label: "..."
        }
    ];
    const [variableSeleccionada, setVariableSeleccionada] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deshabilitarTiempo, setDeshabilitarTiempo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [consulta, setConsulta] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        variable: "",
        latitud: [
            0,
            0
        ],
        longitud: [
            0,
            0
        ]
    });
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSelect = (key)=>{
        const newConsulta = {
            ...consulta
        };
        newConsulta.variable = key;
        setConsulta(newConsulta);
        setVariableSeleccionada(key);
        if (key === "u10" || key === "t2m") {
            setDeshabilitarTiempo(false);
        } else {
            setDeshabilitarTiempo(true);
        }
    };
    const closeHandler = ()=>{
        setVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-12 p-6 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                onClick: ()=>setVisible(true),
                className: "block lg:hidden",
                children: "Configurar gráfico"
            }, void 0, false, {
                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
                closeButton: true,
                open: visible,
                onClose: closeHandler,
                className: "lg:hidden",
                width: "90%",
                blur: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center",
                            children: "Configuración del gráfico"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar/Sidebar.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        titulo: "Variable",
                                        explicacion: "Elija la variable que desea graficar",
                                        elementos: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variables2"],
                                        onSelect: handleSelect
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    variableSeleccionada === "u10" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                titulo: "Componente del viento",
                                                explicacion: "Elija el componente del viento",
                                                elementos: componenteViento
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                titulo: "Altura de los datos",
                                                explicacion: "Elija la altura de los datos",
                                                elementos: nivelViento
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true),
                                    variableSeleccionada === "t2m" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        titulo: "Altura de los datos",
                                        explicacion: "Elija la altura de los datos",
                                        elementos: nivelTemperatura
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                setConsulta: setConsulta,
                                consultaOriginal: consulta
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$tiempo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                desabilitado: deshabilitarTiempo
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$boton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            texto: "Graficar",
                            funcion: ()=>console.log([
                                    consulta
                                ])
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar/Sidebar.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex flex-col gap-12 p-6 w-1/3 shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center",
                                children: "Configuración del gráfico"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                titulo: "Variable",
                                explicacion: "Elija la variable que desea graficar",
                                elementos: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$variables$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["variables2"],
                                onSelect: handleSelect
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            variableSeleccionada === "u10" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        titulo: "Componente del viento",
                                        explicacion: "Elija el componente del viento",
                                        elementos: componenteViento
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        titulo: "Altura de los datos",
                                        explicacion: "Elija la altura de los datos",
                                        elementos: nivelViento
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            variableSeleccionada === "t2m" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                titulo: "Altura de los datos",
                                explicacion: "Elija la altura de los datos",
                                elementos: nivelTemperatura
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$area$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        setConsulta: setConsulta,
                        consultaOriginal: consulta
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$opciones$2d$tiempo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        desabilitado: deshabilitarTiempo
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$boton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        texto: "Graficar",
                        funcion: ()=>console.log([
                                consulta
                            ])
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar/Sidebar.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar/Sidebar.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar/Sidebar.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
};
_s(Sidebar, "WQEEl4azv6LoPQXI0SagF4QVPAw=");
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_refresh__.register(_c, "Sidebar");

})()),
"[project]/app/visualizer/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>page
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$general$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Graphic/general.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Sidebar/Sidebar.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
function page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex sm:flex-row w-full h-full justify-center self-center mt-6 gap-15",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/visualizer/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$general$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: data,
                typeChart: "heatmap"
            }, void 0, false, {
                fileName: "[project]/app/visualizer/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/visualizer/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),
"[project]/app/visualizer/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_d45819._.js.map