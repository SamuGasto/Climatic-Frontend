(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_107313._.js", {

"[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "useModalStore": ()=>useModalStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const useModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        ModalCreateBoard: false,
        ModalEditBoard: false,
        ModalCreateChart: false,
        ModalConfirm: false,
        ModalConfirmText: "",
        functionModalConfirm: ()=>{},
        toggleModalCreateBoard: (newValue)=>{
            set((state)=>({
                    ...state,
                    ModalCreateBoard: newValue
                }));
        },
        toggleModalEditBoard: (newValue)=>{
            set((state)=>({
                    ...state,
                    ModalEditBoard: newValue
                }));
        },
        toggleModalCreateChart: (newValue)=>{
            set((state)=>({
                    ...state,
                    ModalCreateChart: newValue
                }));
        },
        toggleModalConfirm: (newValue, newText, newFunction)=>{
            set((state)=>({
                    ...state,
                    ModalConfirm: newValue,
                    ModalConfirmText: newText,
                    functionModalConfirm: newFunction
                }));
        }
    }));
const __TURBOPACK__default__export__ = useModalStore;

})()),
"[project]/components/Dashboard/Panel/board/modal-confirm.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-LT4XONRR.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function ModalConfirm(props) {
    const { refresh } = props;
    const { ModalConfirm, ModalConfirmText, functionModalConfirm, toggleModalConfirm } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    function ReadyButtonFunction() {
        functionModalConfirm();
        toggleModalConfirm(false, "", ()=>{});
        refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
            isOpen: ModalConfirm,
            backdrop: "blur",
            onOpenChange: (value)=>{
                if (!value) {
                    toggleModalConfirm(false, "", ()=>{});
                }
                refresh();
            },
            onKeyDown: (event)=>{
                if (ModalConfirm && event.key === "Enter") ReadyButtonFunction();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                        children: "Confirmación"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-center",
                            children: ModalConfirmText
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "danger",
                                variant: "flat",
                                onPress: ()=>{
                                    toggleModalConfirm(false, "", ()=>{});
                                    refresh();
                                },
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "primary",
                                onPress: ()=>{
                                    ReadyButtonFunction();
                                },
                                children: "Aceptar"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/modal-confirm.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = ModalConfirm;
const __TURBOPACK__default__export__ = ModalConfirm;
var _c;
__turbopack_refresh__.register(_c, "ModalConfirm");

})()),
"[project]/config/test-data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "exampleData": ()=>exampleData
});
const exampleData = {
    latitude: [
        -34.0,
        -34.25,
        -34.5,
        -34.75,
        -35.0
    ],
    longitude: [
        108.0,
        108.25,
        108.5,
        108.75,
        109.0,
        109.25,
        109.5,
        109.75,
        110.0
    ],
    image: "iVBORw0KGgoAAAANSUhEUgAAAoAAAAHgCAYAAAA10dzkAAAAOXRFWHRTb2Z0d2FyZQBNYXRwbG90bGliIHZlcnNpb24zLjkuMiwgaHR0cHM6Ly9tYXRwbG90bGliLm9yZy8hTgPZAAAACXBIWXMAAA9hAAAPYQGoP6dpAAB/fUlEQVR4nO3dd3xN9/8H8NdNZO8lQ4ZVSexVxN6JTakaJSHosDctgtpqdCilatSoFY1RataWomYRW4IEDUkEGXI/vz/8cr5us+7Mzb15PR+P83jkfs56n5OT5J3POjIhhAARERERFRsm+g6AiIiIiAoXE0AiIiKiYoYJIBEREVExwwSQiIiIqJhhAkhERERUzDABJCIiIipmmAASERERFTNMAImIiIiKGSaARERERMUME0AiIiKiYoYJIBEREVExwwSQiIiIqJhhAkhERERUzDABJCIiIipmmAASERERFTNMAImIiIiKGSaARERERMUME0AiIiKiYoYJIBEREVExwwSQiIiIqJhhAkhERERUzDABJCIiIipmmAASERERFTNMAImIiIiKGSaARERERMUME0AiIiKiYoYJIBEREVExwwSQiIiIqJhhAkhERERUzDABJCIiIipmmAASERERFTNMAImIiIiKGSaARERERMUME0AiIiKiYoYJoIFavXo1ZDIZ7t27p+9QilQs+nbv3j3IZDKsXr1a36EQERHliQkgGaQzZ85gyJAhqFSpEmxsbODr64vu3bvjxo0buW5/7do1hISEwNbWFs7OzujTpw+ePn2q9vk3bNiAxYsXq72/oYqMjMRHH32EsmXLwtraGv7+/hg9ejSSkpJy3X7Hjh2oWbMmLC0t4evri4iICLx580Zhm4MHD6J///6oUKECrK2tUbZsWQwYMADx8fE5jrdv3z6Eh4ejcuXKMDU1RenSpVWKPzU1FREREQgJCYGzs3OeybpcLsfq1avRsWNH+Pj4wMbGBpUrV8aMGTOQlpam1LkePXqEjz/+GP7+/rCzs4OjoyPq1KmDNWvWQAihsG1MTAxGjhyJ+vXrw9LSMtd/qMLCwiCTyQpcwsLCVI5/6dKl+PDDD+Hr6ysdQ1XK/ozJ5XLMmzcPZcqUgaWlJapWrYqNGzeqdC5lnisASEpKwqBBg+Dm5gYbGxs0a9YMf//9t8rXRmSUBBmkVatWCQDi7t27+g5FL7F07dpVeHh4iKFDh4oVK1aIr776Sri7uwsbGxtx+fJlhW3j4uKEq6urKFeunPjmm2/EzJkzhZOTk6hWrZpIT09X6/zt2rUTfn5+Ocrlcrl4/fq1ePPmjVrHLepcXFxElSpVxOTJk8WKFSvEsGHDhLm5uQgICBCvXr1S2Pb3338XMplMNGvWTCxfvlwMHTpUmJiYiE8//VRhu1q1aokyZcqIcePGiRUrVoiJEycKOzs74e7uLuLj4xW2DQ0NFZaWlqJ+/frC29s71+9Bfu7evSsACF9fX9G0aVMBQKxatSrHdi9evBAARL169cSMGTPE8uXLRb9+/YSJiYlo2rSpkMvlBZ7r4sWLokmTJuKLL74Qy5YtE999953o2LGjACAmTpyosO2qVauEiYmJqFy5sqhevXquP08nT54Uv/zyi7RMnz5dABCDBg1SKD958qTK8fv5+QlnZ2cREhIiSpQoIUJDQ1W6r6r8jE2YMEEAEAMHDhTLly8X7dq1EwDExo0blTqXss9VVlaWqF+/vrCxsRFTp04V33//vahYsaKws7MTN27cUOn6iIwRE0ADVdwTwBMnTuT4w3Ljxg1hYWEhevfurVD+2WefCSsrK3H//n2pbP/+/QKA+PHHH9U6f14JoLE7fPhwjrI1a9YIAGLFihUK5RUrVhTVqlUTmZmZUtmXX34pZDKZuHbtmlR25MgRkZWVpbDvkSNHBADx5ZdfKpQ/fPhQZGRkCCHU+x6kpaVJSeWZM2fyTADT09PFiRMncpRPmzZNABD79+9X6bzvat++vbCxsVH4JyExMVGkpKQIIYSYP3++Uj9P2oz/3r17UlJoY2OjcgKo7M/YgwcPhJmZmRg8eLBUJpfLRaNGjYS3t7dS/zgp+1xt2rRJABBbtmyRyp48eSIcHR1Fz549Vbo+ImPEJmAjs2fPHjRq1Ag2Njaws7NDu3bt8M8//0jrv/76a8hkMty/fz/HvhMnToS5uTmeP38ulUVHRyMkJAQODg6wtrZGkyZNcOLEiUK5lvzUr18f5ubmCmXvvfceKlWqhGvXrimUb9u2De3bt4evr69U1rJlS1SoUAGbN29W+dxNmzbF7t27cf/+fanZLbspMrc+gGFhYbC1tUVsbCzat28PW1tblCpVCkuWLAEAXL58Gc2bN4eNjQ38/PywYcOGHOdMSkrCiBEj4OPjAwsLC5QvXx5z586FXC5XOX5NNG3aNEdZly5dAEDhvl+9ehVXr17FoEGDUKJECan8888/hxACW7dulcoaN24MExPFX0WNGzeGs7Nzju+ll5cXzMzM1I7fwsICHh4eBW5nbm6O+vXr5yjP7VpVVbp0abx69QoZGRlSmbOzM+zs7NQ+5n+pGr+fnx9kMlmBx83MzMT169dzNM8r+zMWFRWFzMxMfP7551KZTCbDZ599hgcPHuDUqVNSeXJyMq5fv47k5GSpTJXnauvWrXB3d8cHH3wglbm5uaF79+6IiopCenp6gddLZMyYABqRX375Be3atYOtrS3mzp2LyZMn4+rVq2jYsKHUn6h79+6QyWS5Jj6bN29G69at4eTkBAA4dOgQGjdujJSUFERERGDWrFlISkpC8+bN8ddff6kcX3p6Ov7991+lFnUIIfD48WO4urpKZQ8fPsSTJ09Qu3btHNvXqVMH58+fV/k8X375JapXrw5XV1f88ssv+OWXXwrsD5iVlYU2bdrAx8cH8+bNQ+nSpTFkyBCsXr0aISEhqF27NubOnQs7Ozv07dsXd+/elfZ99eoVmjRpgnXr1qFv37749ttv0aBBA0ycOBGjRo0qMN7U1FSl7vm7f2hVkZCQAAAK9z37vv73vnt5ecHb27vA+56amorU1FSFYxYFuV1rQV6/fo1///0X9+7dw5o1a7Bq1SoEBQXByspKV2HmSZ343/Xw4UMEBgZi4sSJCmXK/oydP38eNjY2CAwMzLFd9vps27dvR2BgILZv366wP6Dcc3X+/HnUrFkzxz8XderUwatXr/LsL0xUXJQoeBMyBKmpqRg2bBgGDBiA5cuXS+WhoaHw9/fHrFmzsHz5cvj6+qJevXrYtGkTxo4dK2135swZ3LlzB1OnTgXwNpn69NNP0axZM+zZs0eqHfjkk09QqVIlTJo0Cfv27VMpxo0bN6Jfv35KbSv+00leGevXr8fDhw8xffp0qSy7psLT0zPH9p6ennj27BnS09NhYWGh9HlatWqFUqVK4fnz5/j444+V2ictLQ0ff/yx9IezV69e8PLyQv/+/bFx40Z89NFH0rEDAgKwZs0a6XuxcOFC3L59G+fPn8d7770H4O33wcvLC/Pnz8fo0aPh4+OT57mHDBmCNWvWFBhjkyZN8Oeffyp1Pe+aO3cuTE1N0a1bN6msoPv+6NGjfI+5ePFiZGRkSPelqJg3bx7s7e3Rpk0bpff55ptvFBKmFi1aYNWqVboIr0DqxF8QVX7G4uPj4e7unqO2MXvfgp4LVZ6r+Ph4NG7cONftss9VpUqVfM9HZMyYABqJ/fv3IykpCT179lSoQTM1NUXdunVx+PBhqeyjjz7CiBEjcPv2bZQrVw4AsGnTJlhYWKBTp04AgAsXLuDmzZuYNGkSEhMTFc7VokUL/PLLL5DL5Tn+u85PcHAw9u/fr8ll5un69esYPHgwgoKCEBoaKpW/fv0aAHJN8CwtLaVtVEkA1TVgwADpa0dHR/j7++PWrVvo3r27VO7v7w9HR0fcuXNHKtuyZQsaNWoEJycnhe9ty5YtMWfOHBw9ehS9e/fO87zjxo1TKlHNrvlVxYYNG7By5UqMGzdOSk6Bgu97SkpKnsc8evQopk2bhu7du6N58+Yqx6Qrs2bNwoEDB/DDDz/A0dFR6f169uyJ2rVr4+nTp9i1axceP34s3Z/CpG787ypdunSOf85U+RnL62ft3e2yhYWF5RiNrMpzpcq5iIojJoBG4ubNmwCQ5x9Me3t76esPP/wQo0aNwqZNm/DFF19ACIEtW7agTZs20nbZx3s3mfqv5ORklZIGT0/PXP9z11RCQgLatWsHBwcHbN26FaamptK67Ga23Pr7ZE+HURhNcZaWlnBzc1Moc3BwgLe3d47aEAcHB4V+mDdv3sSlS5dy7J/tyZMn+Z67YsWKqFixopqR5+3YsWMIDw9HcHAwZs6cqbCuoPue1z2/fv06unTpgsqVK+Onn35SK66srKwc0484Ozvn6DOqik2bNmHSpEkIDw/HZ599prAuu1k1m4ODg8L1+fn5wc/PD8DbZHDQoEFo2bIlYmJiCq0ZOL/4NaXKz5iVlZVGP4uqPFeanqsg9+7dw1dffYVDhw4hISEBXl5e+Pjjj/Hll1/m+6w1bdoUR44cUSj75JNPsGzZMunzwYMHMXnyZFy+fBk2NjYIDQ3FzJkzpX6PaWlp+PTTT3Hu3Dlcu3YN7du3x2+//abyNSgTCxkvJoBGInswwC+//JJrJ/d3O0x7eXmhUaNG2Lx5M7744gucPn0asbGxmDt3bo7jzZ8/H9WrV8/1nLa2tirF+Pr1a6X7mSnTUR94m4S2adMGSUlJOHbsGLy8vBTWZyecuc0pFx8fD2dn50Kp/Xs3KVWm/N1aFrlcjlatWmHcuHG5bluhQoV8z52cnKxUbYe5uTmcnZ0L3A4ALl68iI4dO6Jy5crYunWrwvMFKN73/zZPx8fHS32+3hUXF4fWrVvDwcEBv//+u9qDIuLi4lCmTBmFssOHD+c6gEUZ+/fvR9++fdGuXbtc/zD+95+aVatW5TuPXrdu3bBixQocPXoUwcHBasWkioLi15QqP2Oenp44fPgwhBAK//hk7/vfn9/8zlXQc+Xp6ZlnTMqcK1vTpk1zrY28fv065HI5fvzxR5QvXx5XrlzBwIED8fLlS3z99df5HnPgwIEKXVWsra2lry9evIi2bdviyy+/xNq1a/Hw4UN8+umnyMrKko6blZUFKysrDBs2DNu2bVPqOtSJhYwbE0Ajkd2UW7JkSbRs2bLA7T/66CN8/vnniImJwaZNm2BtbY0OHTrkOJ69vb1Sx1PGpk2btNoHMC0tDR06dMCNGzdw4MCBXGu5SpUqBTc3N5w9ezbHur/++ivP5LYgyoyY1JZy5cohNTVV7e/D8OHDtdoH8Pbt2wgJCUHJkiXx+++/5/qPQPZ9PXv2rMIf5UePHuHBgwcYNGiQwvaJiYlo3bo10tPTcfDgQY1qij08PHJ0NahWrZpax4qOjkaXLl1Qu3ZtbN68OUeiCyDHuSpVqpTvMbOTcXUH3ahCmfg1pcrPWPXq1fHTTz/h2rVrCj+v0dHR0vr8qPJcVa9eHceOHcvRVSU6OhrW1tYF/uNUkJCQEISEhEify5Yti5iYGCxdurTABNDa2jrPf3I3bdqEqlWrYsqUKQCA8uXLY968eejevTsiIiJgZ2cHGxsbLF26FABw4sSJPCdij4qKwrRp03D16lV4eXkhNDQUX375pcJzkF8sZNyYABqJ4OBg2NvbY9asWWjWrFmOqTKePn2q0ITYtWtXDB06FBs3bsSWLVvQvn172NjYSOtr1aqFcuXK4euvv0avXr1y/JH/7/GUjVFbfQCzsrLw0Ucf4dSpU4iKikJQUFCe23bt2hVr1qxBXFycVGtw8OBB3LhxAyNHjlTr/DY2NoXyBxx4O3J76tSp+OOPP3LUGCUlJcHW1jbfP+za7AOYkJCA1q1bw8TEBH/88Ueez0ClSpUQEBCA5cuX45NPPpFqOpcuXQqZTKYwYOTly5do27YtHj58iMOHDyv0JVSHpaWlVv5puXbtGtq1a4fSpUtj165deTYZ5nWuvH5GVq5cCZlMhpo1a2ocY36UjV8VmZmZuH37NhwcHBSSdGV/xjp16oSRI0fihx9+wPfffw/g7T97y5YtQ6lSpRSmrklOTkZ8fDw8PT3h4OAAQLXnqlu3bti6dSsiIyOl8n///RdbtmxBhw4ddFLzn5ycrFQt+vr167Fu3Tp4eHigQ4cOmDx5slTzlp6eLvVTzGZlZYW0tDScO3dO6ZrsY8eOSbMGNGrUCLdv35YS5IiICKViIePGBNBI2NvbY+nSpejTpw9q1qyJHj16wM3NDbGxsdi9ezcaNGgg/cIF3tYUNmvWDAsXLsSLFy9yjLY0MTHBTz/9hDZt2qBSpUro168fSpUqJf2Rtre3x86dO1WKUZt9AEePHo0dO3agQ4cOePbsGdatW6ew/t2E54svvsCWLVvQrFkzDB8+HKmpqZg/fz6qVKmSo0by3fn88lOrVi1s2rQJo0aNwvvvvw9bW1uFGlRtGjt2LHbs2IH27dsjLCwMtWrVwsuXL3H58mVs3boV9+7dy3daD232AQwJCcGdO3cwbtw4HD9+HMePH5fWubu7o1WrVtLn+fPno2PHjmjdujV69OiBK1eu4Pvvv8eAAQMUpgHp3bs3/vrrL/Tv3x/Xrl1TmKPO1tYWnTt3lj5funQJO3bsAADcunULycnJmDFjBoC3tXzKfA++//57JCUlSSNGd+7ciQcPHgAAhg4dCgcHB7x48QLBwcF4/vw5xo4di927dysco1y5cvn+0wEAM2fOxIkTJxASEgJfX188e/YM27Ztw5kzZzB06FCUL19e2jY5ORnfffcdAEjzbH7//fdwdHSEo6MjhgwZUuB1vUvV+Hfu3ImLFy8CeJvkXbp0SbqvHTt2RNWqVQH8bxqY0NBQhbkulf0Z8/b2xogRIzB//nxkZmbi/fffx2+//YZjx45h/fr1Cl0itm/fjn79+uVoUlf2uerWrRvq1auHfv364erVq3B1dcUPP/yArKwsTJs2TaX7qYxbt27hu+++K7D2r1evXvDz84OXlxcuXbqE8ePHIyYmBpGRkQDe/qO8ePFibNy4Ed27d0dCQoLURJtbk3Zepk2bhgkTJkj9uMuWLYuvvvoK48aNkxLAgmIhI6enCahJQ3m9fePw4cMiODhYODg4CEtLS1GuXDkRFhYmzp49m+MYK1asEACEnZ2deP36da7nOX/+vPjggw+Ei4uLsLCwEH5+fqJ79+7i4MGDBcaiS02aNBEA8lz+68qVK6J169bC2tpaODo6it69e4uEhIQc27m6uop69eoVeP7U1FTRq1cv4ejoKABIb6TIftXYu29nCA0NFTY2NrleQ6VKlXKU+/n5iXbt2imUvXjxQkycOFGUL19emJubC1dXV1G/fn3x9ddfS2/GKAz53fMmTZrk2H779u2ievXqwsLCQnh7e4tJkybliNfPzy/PY/73TR/Zz1pui7Jvr8jvfNnPcPb3UZNz7du3T7Rv3154eXkJMzMzYWdnJxo0aCBWrVqV41Vs+Z0vr7ed5PcmEFXjDw0NzXPbd4+ffdzcrl/Zn7GsrCwxa9Ys4efnJ8zNzUWlSpXEunXrcmyX/b3O7fqUea6EEOLZs2ciPDxcuLi4CGtra9GkSRNx5syZHNu9a+bMmcLGxkZaTExMhIWFhULZu288EeLtG07KlSsnwsPD8z12bg4ePCgAiFu3bkllCxYsEPb29sLU1FRYW1uL2bNnCwDi119/zbF/aGio6NSpU45yV1dXYWlpqRC3paWlACBevnypdCxkvGRCqDHhGpERunr1KipVqoRdu3ahXbt2+g6HiPTg2bNnePbsmfS5d+/e6Nq1q8IbRUqXLi11u3j06BGaNm2KevXqYfXq1SpNjQW87QJha2uLvXv3KnTxEEIgPj4eTk5OuHfvHipWrIi//voL77//vsL+YWFhSEpKyjEK2MrKCtOmTVOIO1vZsmVzjTOvWMg4sQmY6P8dPnwYQUFBTP6IijFnZ2eFfnxWVlYoWbKkQpN9tocPH6JZs2aoVasWVq1apXLyB7ydcxXIOZpcJpNJI5U3btwIHx8flfqN1qxZEzExMbnGrWosZJyYABL9v8GDB2Pw4MH6DoOIDMDDhw/RtGlT+Pn54euvv1aYezJ7VO3Dhw/RokULrF27FnXq1MHt27exYcMGtG3bFi4uLrh06RJGjhyJxo0bS/0sgbf9HENCQmBiYoLIyEjMmTMHmzdvVugjefXqVWRkZODZs2d48eKFlLxlj5SeMmWK9H7mbt26wcTEBBcvXsSVK1cwY8YMpWMh48UEkIiISEX79+/HrVu3cOvWLXh7eyusy+5ZlZmZiZiYGLx69QrA27k2Dxw4gMWLF+Ply5fw8fFB165dMWnSJIX99+zZg5kzZyI9PR3VqlVDVFRUjtf3tW3bFvfv35c+16hRQ+HcwcHB2LVrF6ZPn465c+fCzMwMAQEB0huJlI2FjBf7ABIREREVM6p3WCAiIiIig8YEkIiIiKiYYQJIREREVMxwEIgG5HI5Hj16BDs7u0J9NywRERkeIQRevHgBLy8vtaaMUVZaWhoyMjI0Po65uXmO19LlJSsrC1OnTsW6deuQkJAALy8vhIWFYdKkSdLfRyEEIiIisGLFCiQlJaFBgwZYunSpxq9/JDXpbQpqIxAXF5fvbPtcuHDhwoXLf5e4uDid/V16/fq18ChpqpU4PTw88nxL1H/NnDlTuLi4iF27dom7d++KLVu2CFtbW/HNN99I28yZM0c4ODiI3377TVy8eFF07NhRlClTRulzkHZxFLAGkpOT4ejoiIZojxIyM32Hoxwh13cEKjGxUu6/z6LCxLXgF8EXJW+8XPQdgkpe+FnpOwSVJZU3rNaBN2Ve6zsElVT2Vf79uPqW+TID+z5Yi6SkJDg4OOjkHCkpKXBwcMDdc36wt1O/ljHlhRxlat1HcnIy7O3tC9y+ffv2cHd3x8qVK6Wyrl27wsrKCuvWrYMQAl5eXhg9ejTGjBkD4O3fUHd3d6xevRo9evRQO1ZSD5uANZBdrV1CZmY4CSAMLAGUmes7BJWYmFjoOwTVlDCsBNvU3LDiBQBTS8NKAOXWhlUnYGZjWL8jABRKlyEb27eLurL+/zFISUlRKLewsICFRc7fc/Xr18fy5ctx48YNVKhQARcvXsTx48excOFCAMDdu3eRkJCAli1bSvs4ODigbt26OHXqFBNAPWACSERERLny8fFR+BwREYGpU6fm2G7ChAlISUlBQEAATE1NkZWVhZkzZ6J3794AgISEBACAu7u7wn7u7u7SOipcTACJiIiMjBwCcqhfm5u9b1xcnEITcG61fwCwefNmrF+/Hhs2bEClSpVw4cIFjBgxAl5eXggNDVU7DtIdJoBERERGRg65Rh1+sve2t7dXqg/g2LFjMWHCBKkpt0qVKrh//z5mz56N0NBQ6f3Ijx8/hqenp7Tf48ePpfcXU+HiPIBERESkkVevXuWY2sbU1BRy+dtEskyZMvDw8MDBgwel9SkpKYiOjkZQUFChxkpvsQaQiIjIyGQJgSwNJvlQdd8OHTpg5syZ8PX1RaVKlXD+/HksXLgQ/fv3B/B24MuIESMwY8YMvPfeeyhTpgwmT54MLy8vdO7cWe04SX1MAImIiIyMtvoAKuu7777D5MmT8fnnn+PJkyfw8vLCJ598gilTpkjbjBs3Di9fvsSgQYOQlJSEhg0bYu/evUpPNk3axXkANZA931JTWRfDmQbG4OYBNKx530zcDGtevTfervoOQSUpZQzreQCApAqGNQ1MZjnDmgewmt9DfYegtMyXGdgd/JPSc+upI/vv0v3rXhrPA+gX8EinsZJ+sQaQiIjIyMghkFWINYBkeJgAEhERGZnCbgImw8NRwERERETFDGsAiYiIjExhjwImw8MEkIiIyMjIodmb3w1ruCCpgwkgERGRkcnScBCIJvuSYWAfQCIiIqJihjWARERERiZLvF002Z+MGxNAIiIiI8M+gFQQNgETERERFTOsASQiIjIycsiQBfVfQyjXYF8yDEwAiYiIjIxcvF002Z+MG5uAiYiIiIoZ1gASEREZmSwNm4A12ZcMAxNAIiIiI8MEkArCJmAiIiKiYoY1gEREREZGLmSQCw1GAWuwLxkGJoBERERGhk3AVBAmgEREREYmCybI0qCXV5YWY6GiiX0AiYiIiIoZ1gASEREZGaFhH0DBPoBGjwkgERGRkWEfQCpIkW8C7tixI3x9fWFpaQlPT0/06dMHjx49ynXbW7duwc7ODo6OjgUeNzY2Fu3atYO1tTVKliyJsWPH4s2bN1qOnoiIiKjoKfIJYLNmzbB582bExMRg27ZtuH37Nrp165Zju8zMTPTs2RONGjUq8JhZWVlo164dMjIycPLkSaxZswarV6/GlClTdHEJREREhSpLmGi8kHEr8t/hkSNHol69evDz80P9+vUxYcIEnD59GpmZmQrbTZo0CQEBAejevXuBx9y3bx+uXr2KdevWoXr16mjTpg2++uorLFmyBBkZGbq6FCIiokIhhwxymGiwsAnY2BX5BPBdz549w/r161G/fn2YmZlJ5YcOHcKWLVuwZMkSpY5z6tQpVKlSBe7u7lJZcHAwUlJS8M8//2g9biIiIqKixCASwPHjx8PGxgYuLi6IjY1FVFSUtC4xMRFhYWFYvXo17O3tlTpeQkKCQvIHQPqckJCQ537p6elISUlRWIiIiIqa7EEgmixk3PSSAE6YMAEymSzf5fr169L2Y8eOxfnz57Fv3z6Ympqib9++EEIAAAYOHIhevXqhcePGOo979uzZcHBwkBYfHx+dn5OIiEhV7ANIBdHLNDCjR49GWFhYvtuULVtW+trV1RWurq6oUKECAgMD4ePjg9OnTyMoKAiHDh3Cjh078PXXXwMAhBCQy+UoUaIEli9fjv79++c4toeHB/766y+FssePH0vr8jJx4kSMGjVK+pySksIkkIiIiAyOXhJANzc3uLm5qbWvXC4H8LY5Fnjbny8r638vrYmKisLcuXNx8uRJlCpVKtdjBAUFYebMmXjy5AlKliwJANi/fz/s7e1RsWLFPM9tYWEBCwsLteImIiIqLG8HgajfjMtBIMavSE8EHR0djTNnzqBhw4ZwcnLC7du3MXnyZJQrVw5BQUEAgMDAQIV9zp49CxMTE1SuXFkq2759OyZOnCg1K7du3RoVK1ZEnz59MG/ePCQkJGDSpEkYPHgwEzwiIjJ4cg3fBSyH0GI0VBQV6UZ+a2trREZGokWLFvD390d4eDiqVq2KI0eOqJSoJScnIyYmRvpsamqKXbt2wdTUFEFBQfj444/Rt29fTJ8+XReXQUREVKjYB5AKIhPZoylIZSkpKXBwcEBTWReUkJkVvENRIOT6jkAlJlZW+g5BJSZuLvoOQSVvvF31HYJKUsoY1vMAAEkVDKspLbPca32HoJJqfg/1HYLSMl9mYHfwT0hOTlZ61gpVZf9d+vVCRVjbmap9nFcvstCj+lWdxkr6VaSbgImIiEh12RM6q78/64aMHRNAIiIiI5MlZMgS6tc+a7IvGQY28hMREREVM6wBJCIiMjJZGo4CzmITsNFjAkhERGRk5MIEcg1G8so5PtTosQmYiIiIqJhhDSAREZGRYRMwFYQJIBERkZGRQ7ORvIY1Yyypg03ARERERMUMawCJiIiMjOYTQbN+yNgxASQiIjIymr7Pl+8CNn5MAImIiIyMHDLIoUkfQL4JxNgxxSciIiIqZlgDSEREZGTYBEwF4XeYiIjIyGTPA6jJoorSpUtDJpPlWAYPHgwASEtLw+DBg+Hi4gJbW1t07doVjx8/1sWlk5KYABIREZFGzpw5g/j4eGnZv38/AODDDz8EAIwcORI7d+7Eli1bcOTIETx69AgffPCBPkMu9tgETEREZGTkQga5JhNBq7ivm5ubwuc5c+agXLlyaNKkCZKTk7Fy5Ups2LABzZs3BwCsWrUKgYGBOH36NOrVq6d2nKQ+1gASEREZGbmGzb+azAOYkZGBdevWoX///pDJZDh37hwyMzPRsmVLaZuAgAD4+vri1KlT2rhcUgNrAImIiChXKSkpCp8tLCxgYWGR7z6//fYbkpKSEBYWBgBISEiAubk5HB0dFbZzd3dHQkKCNsMlFbAGkIiIyMjIhYnGCwD4+PjAwcFBWmbPnl3guVeuXIk2bdrAy8tL15dJGmANIBERkZHJggxZGkzmnL1vXFwc7O3tpfKCav/u37+PAwcOIDIyUirz8PBARkYGkpKSFGoBHz9+DA8PD7VjJM2wBpCIiIhyZW9vr7AUlACuWrUKJUuWRLt27aSyWrVqwczMDAcPHpTKYmJiEBsbi6CgIJ3FTvljDSAREZGRebcZV939Vd5HLseqVasQGhqKEiX+l144ODggPDwco0aNgrOzM+zt7TF06FAEBQVxBLAeMQEkIiIyMlmAhk3Aqjtw4ABiY2PRv3//HOsWLVoEExMTdO3aFenp6QgODsYPP/ygdnykOSaARERERkYfNYCtW7eGECLXdZaWlliyZAmWLFmidkykXewDSERERFTMsAaQiIjIyGQJE2RpUAOoyb5kGJgAEhERGRkBGeQa9AEUGuxLhoEpPhEREVExwxpAIiIiI8MmYCoIE0AiIiIjIxcyyIX6zbia7EuGgQmgFoh6lSBKWOo7DKWYpKkzu5P+yEsY1n+hmVaG9SOV5mKm7xBU8srN8P4oZTjJ9R2CSlydUvUdgkpqO97XdwhKSyuRid36DoLo/xnWXysiIiIqUBZMkKVBN39N9iXDwASQiIjIyLAJmArCFJ+IiIiomGENIBERkZGRwwRyDep4NNmXDAMTQCIiIiOTJWTI0qAZV5N9yTAwASQiIjIy7ANIBWEdLxEREVExwxpAIiIiIyOECeQavM1D8E0gRo8JIBERkZHJggxZ0KAPoAb7kmFgik9ERERUzLAGkIiIyMjIhWYDOeRCi8FQkcQEkIiIyMjINewDqMm+ZBj4HSYiIiIqZlgDSEREZGTkkEGuwUAOTfYlw8AEkIiIyMjwTSBUEDYBExERERUzRT4B7NixI3x9fWFpaQlPT0/06dMHjx49ynXbW7duwc7ODo6Ojvke8+LFi+jZsyd8fHxgZWWFwMBAfPPNNzqInoiIqPBlDwLRZCHjVuS/w82aNcPmzZsRExODbdu24fbt2+jWrVuO7TIzM9GzZ080atSowGOeO3cOJUuWxLp16/DPP//gyy+/xMSJE/H999/r4hKIiIgKlRwy6X3Aai3sA2j0inwfwJEjR0pf+/n5YcKECejcuTMyMzNhZmYmrZs0aRICAgLQokULnDx5Mt9j9u/fX+Fz2bJlcerUKURGRmLIkCHavQAiIqJCJjQcBCKYABq9Il8D+K5nz55h/fr1qF+/vkLyd+jQIWzZsgVLlixR+9jJyclwdnbWRphERERERZpBJIDjx4+HjY0NXFxcEBsbi6ioKGldYmIiwsLCsHr1atjb26t1/JMnT2LTpk0YNGhQvtulp6cjJSVFYSEiIipqNGr+/f+FjJtemoAnTJiAuXPn5rvNtWvXEBAQAAAYO3YswsPDcf/+fUybNg19+/bFrl27IJPJMHDgQPTq1QuNGzdWK5YrV66gU6dOiIiIQOvWrfPddvbs2Zg2bZpa5yEiIiosxvAmkB07dqi8T6tWrWBlZaWDaIyPTAhR6G/8e/r0KRITE/PdpmzZsjA3N89R/uDBA/j4+ODkyZMICgqCo6MjUlNTpfVCCMjlcpiammL58uU5+vu96+rVq2jWrBkGDBiAmTNnFhh3eno60tPTpc8pKSnw8fFBk6BJKFHCssD9iwKTtCx9h6ASUUL/v4RUkWVV5LvVKkhzMSt4oyLkhbdhPQ8AkFpWru8QVOJaLv/fzUVNZ99L+g5BaWmpmZhRbx+Sk5PVbrEqSEpKChwcHNBlfz+Y2eT8G6qszJcZ2N5qlU5jLYiJiWo/7zKZDDdv3kTZsmV1FJFx0ctfKzc3N7i5uam1r1z+9pdpdiJ26tQpZGX9L6mJiorC3LlzcfLkSZQqVSrP4/zzzz9o3rw5QkNDlUr+AMDCwgIWFhZqxU1ERFRYNG3GLSpNwAkJCShZsqRS29rZ2ek4GuNSpKsroqOjcebMGTRs2BBOTk64ffs2Jk+ejHLlyiEoKAgAEBgYqLDP2bNnYWJigsqVK0tl27dvx8SJE3H9+nUAb5t9mzdvjuDgYIwaNQoJCQkAAFNTU7UTUyIioqLCGF4FFxoaqlJz7scff6y32kpDVKTbU6ytrREZGYkWLVrA398f4eHhqFq1Ko4cOaJSTVxycjJiYmKkz1u3bsXTp0+xbt06eHp6Ssv777+vi8sgIiIiFa1atUqlWr2lS5fC1dVVhxEZF730ATQW2X0t2AdQd9gHULfYB1D32AdQt9gHUFH236V2fwzQuA/g7uCf9NoHkHQr379WNWvWVOlgMpkMO3bsyLfvHREREemWsfQBBN6+vnXnzp1wdnZG9+7dFWr5UlJSMGLECPz88896jNAw5ZsAXrhwAaNHj4atrW2BBxJCYM6cOQqjZImIiIjUtW/fPnTo0AHvvfceXrx4gSlTpmDLli1o1qwZAOD169dYs2YNE0A1FNheNXbsWKVH4CxYsEDjgIiIiEgzxlIDOHXqVIwZMwYzZ86EEALz589Hx44dsWXLFoSEhOg7PIOWbwJ49+5dlUbFXr16FV5eXhoHRUREROozlgTwn3/+wS+//ALgbTezcePGwdvbG926dcOvv/7KwZsayDcB9PPzU+lgPj4+GgVDREREmhPQbCqXojI61MLCAklJSQplvXr1gomJCT766CO2PGpApSGLSUlJ+Ouvv/DkyRNpQuZsffv21WpgREREVLxVr14dhw8fRq1atRTKe/ToASEEQkND9RSZ4VM6Ady5cyd69+6N1NRU2NvbQyb7338WMpmMCSAREVERYSxNwJ999hmOHj2a67qePXtCCIEVK1YUclTGQelJtUaPHo3+/fsjNTUVSUlJeP78ubQ8e/ZMlzESERGRCrITQE2WoqBLly5YtGhRnut79eqFw4cPF2JExkPpBPDhw4cYNmwYrK2tdRkPERERUZ4+//xz/Pvvv/oOw+ApnQAGBwfj7NmzuoyFiIiItMBYagBzs27dOqSkpOg7DIOXbx/AHTt2SF+3a9cOY8eOxdWrV1GlShWYmSm+Qqpjx466iZCIiIhUYix9AHPDN9hqR74JYOfOnXOUTZ8+PUeZTCZDVpZhvWOWiIiIqLjKNwH871QvREREVPQJIYPQoBZPk3117cWLF/oOwSgo3Qdw7dq1ub7nNyMjA2vXrtVqUERERKQ+OWQaL0XF8uXLsWfPHgBv3w28fPlyPUdkHJROAPv164fk5OQc5S9evEC/fv20GhQREREZlocPH+Ljjz+Gi4sLrKysUKVKFYXBo0IITJkyBZ6enrCyskLLli1x8+bNAo/bpUsXTJ8+HS9evMC0adPQpUsXXV5GsaF0AiiEUJj8OduDBw/g4OCg1aCIiIhIfYU9Cvj58+do0KABzMzMsGfPHly9ehULFiyAk5OTtM28efPw7bffYtmyZYiOjoaNjQ2Cg4ORlpaW53GPHj2Ka9euoW7duqhXrx7q1KmDa9eu5Tk5NCmvwDeB1KhRAzKZDDKZDC1atECJEv/bJSsrC3fv3kVISIhOgyQiIiLlFXYfwLlz58LHxwerVq2SysqUKfPO8QQWL16MSZMmoVOnTgDedi1zd3fHb7/9hh49euR63OxJnh89eoT79+/j0aNHOHz4MGQyGRo3bqzqZdE7CkwAs0cCX7hwAcHBwbC1tZXWmZubo3Tp0ujatavOAiQiIiLVaGsamP/Ot2dhYQELC4sc2+/YsQPBwcH48MMPceTIEZQqVQqff/45Bg4cCAC4e/cuEhIS0LJlS2kfBwcH1K1bF6dOncozAYyIiMCbN2/QvHlzHD9+HMOGDcP69esVKqNIPQXewYiICGRlZaF06dJo3bo1PD09CyMuIiIi0jMfHx+FzxEREZg6dWqO7e7cuYOlS5di1KhR+OKLL3DmzBkMGzYM5ubmCA0NRUJCAgDA3d1dYT93d3dpXV6+/fZbdO7cGdWrV0e3bt3w7bffYtSoUZpdGBWcAAKAqakpPvnkE1y7dk3X8RAREZGGtNUEHBcXB3t7e6k8t9o/4O20cbVr18asWbMAvO0+duXKFSxbtgyhoaFqxwEAw4YNk8YgDBkyhFPUaYnSg0AqV66MO3fu6DIWIiIi0gKh4QCQ7ATQ3t5eYckrAfT09ETFihUVygIDAxEbGwsA8PDwAAA8fvxYYZvHjx9L6/Ly888/Y9++fQCAAwcO4Oeff1b9hlAOSieAM2bMwJgxY7Br1y7Ex8cjJSVFYSEiIqLiqUGDBoiJiVEou3HjBvz8/AC8HRDi4eGBgwcPSutTUlIQHR2NoKCgfI/NaWB0Q+lelG3btgXw9p2/704Hkz09DF8FR0REVDQIAJq8MlfVXUeOHIn69etj1qxZ6N69O/766y8sX75cmrRZJpNhxIgRmDFjBt577z2UKVMGkydPhpeXV66vnc2WPd1L9jQwrVu3xrVr13Dt2jWOAtaQ0glg9lBsIiIiKtrkkEGmwds8VH0TyPvvv4/t27dj4sSJmD59OsqUKYPFixejd+/e0jbjxo3Dy5cvMWjQICQlJaFhw4bYu3cvLC0t8zwup4HRHaUTwCZNmugyDiIiIjJg7du3R/v27fNcL5PJMH36dEyfPl3pY3IaGN1R6Q4mJSVh5cqV0mjgSpUqoX///nwTCBERURFS2BNB6xKngdENpRPAs2fPIjg4GFZWVqhTpw4AYOHChZg5cyb27duHmjVr6ixIIiIiUp5cyCDTwkTQRQGngdENpUcBjxw5Eh07dsS9e/cQGRmJyMhI3L17F+3bt8eIESN0GCIREREVVyVKlMDFixdx+fJlmJiYoESJEoiKikLnzp3xxRdfICMjQ98hGiSlE8CzZ89i/PjxCu3uJUqUwLhx43D27FmdBEdERESqE0LzpSj55JNPcOPGDQBv3zrSo0cPWFtbY8uWLRg3bpyeozNMSieA9vb20oSO74qLi4OdnZ1WgyIiIiL1ZfcB1GQpSm7cuIHq1asDALZs2YLGjRtjw4YNWL16NbZt26bf4AyU0gngRx99hPDwcGzatAlxcXGIi4vDr7/+igEDBqBnz566jJGIiIhUYGwJoBBC6vt34MABaW5iHx8f/Pvvv/oMzWApPQjk66+/hkwmQ9++ffHmzRsAgJmZGT777DPMmTNHZwESERFR8Va7dm3MmDEDLVu2xJEjR7B06VIAwN27d+Hu7q7n6AyT0gmgubk5vvnmG8yePRu3b98GAJQrVw7W1tY6C46IiIhUZ0yjgAFIk0r/9ttv+PLLL1G+fHkAwNatW1G/fn09R2eYVJ5J0draGlWqVNFFLERERKQFmg7kKGqDQKpWrYrLly/nKJ8/fz5MTU31EJHhUzoBfPnyJebMmYODBw/iyZMnOebhuXPnjtaDIyIiIspLfq+Ro/wpnQAOGDAAR44cQZ8+feDp6SlNykhERERFy9saQE3eBKLFYKhIUjoB3LNnD3bv3o0GDRroMh4iIiLSkDG9Co50Q+lpYJycnODs7KzLWIiIiIioECidAH711VeYMmUKXr16pct4iIiISENCCwsZN6WbgBcsWIDbt2/D3d0dpUuXhpmZmcL6v//+W+vBERERkeqMqQk4Pj4eBw8ehLOzM1q2bAlzc3Np3cuXL7FgwQJMmTJFjxEaJqUTwM6dO+swDCIiIiJFZ86cQevWrSGXy5GZmYlSpUrht99+Q6VKlQAAqampmDZtGhNANSidAEZERCi13caNG9GxY0fY2NioHRQRERFpQNN23CLSBvzFF1+gS5cu+Omnn/Dy5UuMHz8eTZo0wf79+1GjRg19h2fQlO4DqKxPPvkEjx8/1vZhiYiISFmavge4iDQBnzt3DhMmTICJiQns7Ozwww8/YMyYMWjRogXOnDmj7/AMmspvAimI4ORBREREemVMbwJJS0tT+DxhwgSUKFECrVu3xs8//6ynqAyf1hNAIiIiIm2oXLkyTp48iapVqyqUjxkzBnK5HD179tRTZIaPCaAW/FvVGqbmhvE6mhJpBW9TlMjkRejfUCXIzYpGs4myMq31HYFq0l30HYHqhH2mvkNQiYftC32HoJJAy4f6DkFprzKzCu1cxjIKuG/fvvjzzz/x6aef5lg3btw4CCGwbNkyPURm+LTeB5CIiIj0LLsfnyZLETBgwACsW7cuz/Xjx4/H3bt3CzEi48EEkIiIiIqs33//HdevXwcA3Lx5E7t379ZzRMZB6wmgn59fjkmiNdGxY0f4+vrC0tISnp6e6NOnDx49epTrtrdu3YKdnR0cHR2VPn5iYiK8vb0hk8mQlJSknaCJiIj0KHsQiCZLUeHp6YmRI0cCAIYPH45SpUrpOSLjoHQCGBcXhwcPHkif//rrL4wYMQLLly9X2O7KlSvw8fHRWoDNmjXD5s2bERMTg23btuH27dvo1q1bju0yMzPRs2dPNGrUSKXjh4eH5+hcSkREZNCM6F1wNWrUQJ06ddCnTx/UqVMH1atX13dIRkHpQSC9evXCoEGD0KdPHyQkJKBVq1aoVKkS1q9fj4SEBJ3Nwp2d9QNvaxcnTJiAzp07IzMzU6GmcdKkSQgICECLFi1w8uRJpY69dOlSJCUlYcqUKdizZ4/WYyciIiL1NWvWDDKZDM+fP8fFixdRvXp1HDlyBDKZDIcOHdJ3eAZN6RrAK1euoE6dOgCAzZs3S0Oz169fj9WrV+sqPgXPnj3D+vXrUb9+fYXk79ChQ9iyZQuWLFmi9LGuXr2K6dOnY+3atTAxYVdIIiIyHppMAq3pCGJtOnz4MA4dOoQKFSrgxx9/RIUKFaQy0ozSmU9mZiYsLCwAAAcOHEDHjh0BAAEBAYiPj9dNdP9v/PjxsLGxgYuLC2JjYxEVFSWtS0xMRFhYGFavXg17e3uljpeeno6ePXti/vz58PX1VTqO9PR0pKSkKCxERERFkhE0/wLApk2b4OzsjIEDB8LFxQWbNm3Sd0hGQekEsFKlSli2bBmOHTuG/fv3IyQkBADw6NEjuLioNjnXhAkTIJPJ8l2yR/wAwNixY3H+/Hns27cPpqam6Nu3r/TGkYEDB6JXr15o3Lix0uefOHEiAgMD8fHHH6sU9+zZs+Hg4CAt2uzrSERERDnVrFkTs2bNAgDMnDmT7wDWEplQ8t1tf/75J7p06YKUlBSEhoZKr1/54osvcP36dURGRip90qdPnyIxMTHfbcqWLQtzc/Mc5Q8ePICPjw9OnjyJoKAgODo6IjU1VVovhIBcLoepqSmWL1+O/v375zhG9erVcfnyZchkshz7fPnll5g2bVquMaWnpyM9PV36nJKSAh8fH1T6ZBYngtYRTgStW5wIWvcyvNML3qgIqVLGcCZWBoB+Xsf1HYLSXr3IQp8al5GcnKx0i5WqUlJS3lZQ/BgBEyv1/y7JX6ch7pNpOo1VWbt370a5cuUQEBCAmzdv4saNG2jXrp1eYzIGSg8Cadq0Kf7991+kpKTAyclJKh80aBCsrVX7K+Lm5gY3NzeV9skml8sBQErETp06hays/82uHhUVhblz5+LkyZN5DhXftm0bXr9+LX0+c+YM+vfvj2PHjqFcuXJ5ntvCwkJqBiciIiqyNG3KLUL/e3t5eWHkyJHYs2cPhg8fLtUGkmZUehWcEALnzp3D7du30atXL9jZ2cHc3FzlBFBZ0dHROHPmDBo2bAgnJyfcvn0bkydPRrly5RAUFAQACAwMVNjn7NmzMDExQeXKlaWy7du3Y+LEiVKz8n+TvH///Vc6lipzCBIRERVNsv9fNNm/aOA0MLqhdAJ4//59hISEIDY2Funp6WjVqhXs7Owwd+5cpKen6+RdfNbW1oiMjERERARevnwJT09PhISEYNKkSSrVxCUnJyMmJkbr8REREZHucBoY3VF6EMjw4cNRu3ZtPH/+HFZWVlJ5ly5dcPDgQZ0EV6VKFRw6dAiJiYlIS0vD3bt3sXTp0nxnAQ8LC8vxRo+wsDDk19WxadOmEEKw9o+IiIyDkUwEzWlgdEfpBPDYsWOYNGlSjoEZpUuXxsOHhtVpmIiIyKgZSQIIcBoYXVG6CVgulysMtsj24MED2NnZaTUoIiIiIuDtNDCtW7cG8HYamCdPnug5IuOgdA1g69atsXjxYumzTCZDamoqIiIi0LZtW13ERkREROoQMs2XIuK9996TZh9xdHREhQoV9ByRcVC6BnDBggUIDg5GxYoVkZaWhl69euHmzZtwdXXFxo0bdRkjERERqUCIt4sm+xcliYmJmDJlCg4fPownT55IU8Jle/bsmZ4iM1xKJ4De3t64ePEifv31V1y6dAmpqakIDw9H7969FQaFEBEREWlTnz59cOvWLYSHh8Pd3V16kQOpT6V5AEuUKKHy69OIiIiokBnRRNDA24Gox48fR7Vq1fQditFQug8gAPzyyy9o2LAhvLy8cP/+fQDAokWLEBUVpZPgiIiISA1G1AcQAAICAhTe4EWaUzoBXLp0KUaNGoU2bdrg+fPn0ohgJycnhcEhRERERNr0ww8/4Msvv8SRI0eQmJiIlJQUhYVUp3QC+N1332HFihX48ssvUaLE/1qOa9eujcuXL+skOCIiIlKdTGi+FCWOjo5ISUlB8+bNUbJkSTg5OcHJyQmOjo7SCGFSjdJ9AO/evYsaNWrkKLewsMDLly+1GhQRERFpwMj6APbu3RtmZmbYsGEDB4FoidIJYJkyZXDhwgX4+fkplO/duxeBgYFaD4yIiIjUpGk/viLWB/DKlSs4f/48/P399R2K0VA6ARw1ahQGDx6MtLQ0CCHw119/YePGjZg9ezZ++uknXcZIRERExVjt2rURFxfHBFCLlE4ABwwYACsrK0yaNAmvXr1Cr1694OXlhW+++QY9evTQZYxERESkCiNrAh46dCiGDx+OsWPHokqVKjAzM1NYX7VqVT1FZriUSgDfvHmDDRs2IDg4GL1798arV6+QmpqKkiVL6jo+IiIiUlUhJ4BTp07FtGnTFMr8/f1x/fp1AEBaWhpGjx6NX3/9Fenp6QgODsYPP/wAd3d3pY7/0UcfAQD69+8vlclkMgghIJPJpJlJSHlKJYAlSpTAp59+imvXrgEArK2tYW1trdPAiIiIyHBUqlQJBw4ckD6/O2PIyJEjsXv3bmzZsgUODg4YMmQIPvjgA5w4cUKpY9+9e1fr8RZ3SjcB16lTB+fPn88xCISIiIiKGD00AZcoUQIeHh45ypOTk7Fy5Ups2LABzZs3BwCsWrUKgYGBOH36NOrVq1fgsZl7aJ/SCeDnn3+O0aNH48GDB6hVqxZsbGwU1rP9nYiIqIjQ0ijg/06ybGFhAQsLi1x3uXnzJry8vGBpaYmgoCDMnj0bvr6+OHfuHDIzM9GyZUtp24CAAPj6+uLUqVN5JoA7duxAmzZtcvT3y8vvv/+OZs2awcrKSqntizulE8DsgR7Dhg2Tytj+TkREZLx8fHwUPkdERGDq1Kk5tqtbty5Wr14Nf39/xMfHY9q0aWjUqBGuXLmChIQEmJubw9HRUWEfd3d3JCQk5HnuLl26ICEhAW5ubkrF2qNHD1y4cAFly5ZVavviTqWJoImIiKjo0/RtHtn7xsXFwd7eXirPq/avTZs20tdVq1ZF3bp14efnh82bN6tdIyeEQFhYWJ7n/K+0tDS1zlNcKZ0Asv2diIjIQGipD6C9vb1CAqgsR0dHVKhQAbdu3UKrVq2QkZGBpKQkhVrAx48f59pnMFtoaKhK5+zdu7dasRZXSieAO3bsyLVcJpPB0tIS5cuXR5kyZbQWGBERERmm1NRU3L59G3369EGtWrVgZmaGgwcPomvXrgCAmJgYxMbGIigoKM9jrFq1qrDCLZaUTgA7d+4s9fl717v9ABs2bIjffvuNL2YmIiIqRsaMGYMOHTrAz88Pjx49QkREBExNTdGzZ084ODggPDwco0aNgrOzM+zt7TF06FAEBQUpNQKYdMNE2Q3379+P999/H/v370dycjKSk5Oxf/9+1K1bF7t27cLRo0eRmJiIMWPG6DJeIiIiKoAM/+sHqNai4vkePHiAnj17wt/fH927d4eLiwtOnz4tDeBYtGgR2rdvj65du6Jx48bw8PBAZGSk1q+blKd0DeDw4cOxfPly1K9fXypr0aIFLC0tMWjQIPzzzz9YvHixwizdREREpAdamgZGWb/++mu+6y0tLbFkyRIsWbJE/ZhIq5SuAbx9+3aunSvt7e1x584dAMB7772Hf//9V3vREREREZHWKZ0A1qpVC2PHjsXTp0+lsqdPn2LcuHF4//33AbydBPK/cwYRERFRIRNaWMioKd0EvHLlSnTq1Ane3t5SkhcXF4eyZcsiKioKwNtRP5MmTdJNpERERKQcPbwKTtu+/fZbpbd99yUVpBylE0B/f39cvXoV+/btw40bN6SyVq1awcTkbUVi586ddRIkERERFS+LFi1SajuZTMYEUA1KJ4AAYGJigpCQEDRt2hQWFhaQyTToYEpEREQ6oa03gegT30CmW0r3AZTL5fjqq69QqlQp2NraSt+YyZMnY+XKlToLkIiIiFTEPoBUAKVrAGfMmIE1a9Zg3rx5GDhwoFReuXJlLF68GOHh4ToJkIiIiOjBgwfYsWMHYmNjkZGRobBu4cKFeorKcCmdAK5duxbLly9HixYt8Omnn0rl1apVw/Xr13USHBEREanBCAaBvOvgwYPo2LEjypYti+vXr6Ny5cq4d+8ehBCoWbOmvsMzSEo3AT98+BDly5fPUS6Xy5GZmanVoIiIiEh9Gr0FRMP+g7owceJEjBkzBpcvX4alpSW2bduGuLg4NGnSBB9++KG+wzNISieAFStWxLFjx3KUb926FTVq1NBqUERERETZrl27hr59+wIASpQogdevX8PW1hbTp0/H3Llz9RydYVK6CXjKlCkIDQ3Fw4cPIZfLERkZiZiYGKxduxa7du3SZYxERESkikJ+FZyu2djYSP3+PD09cfv2bVSqVAkA+AYyNSldA9ipUyfs3LkTBw4cgI2NDaZMmYJr165h586daNWqlS5jJCIiIlUY2SjgevXq4fjx4wCAtm3bYvTo0Zg5cyb69++PevXq6Tk6w6TSPICNGjXC/v37dRULERERaYExzAP4roULFyI1NRUAMG3aNKSmpmLTpk147733OAJYTSolgERERESFrWzZstLXNjY2WLZsmR6jMQ75JoBOTk5Kv+3j2bNnWgmIiIiINGRk08CQ9uWbAC5evFj6OjExETNmzEBwcDCCgoIAAKdOncIff/yByZMn6zRIIiIiUoGmU7kUgQTQ2dkZN27cgKura4EVUqyEUl2+CWBoaKj0ddeuXTF9+nQMGTJEKhs2bBi+//57HDhwACNHjtRdlERERFSsLFq0CHZ2dtLXyrZIknKU7gP4xx9/5DrXTkhICCZMmKDVoIiIiEgDRtAE/G4lVFhYmP4CMVJKTwPj4uKCqKioHOVRUVFwcXHRalBERESkASObBsbU1BRPnjzJUZ6YmAhTU1M9RGT4lK4BnDZtGgYMGIA///wTdevWBQBER0dj7969WLFihc4CJCIiouJNiNwz0vT0dJibmxdyNMZB6QQwLCwMgYGB+PbbbxEZGQkACAwMxPHjx6WEkIiIiPTPWOYB/PbbbwEAMpkMP/30E2xtbaV1WVlZOHr0KAICAvQVnkFTaR7AunXrYv369bqKhYiIiEiyaNEiAG9rAJctW6bQ3Gtubo7SpUtzTkA15ZsApqSkwN7eXumDvXjxQhqxQ0RERKSJu3fvAgCaNWuGyMhIODk56Tki45HvIBAnJ6dcO13mpVSpUrhz547GQREREZEGjGwQyOHDh5n8aVm+NYBCiBxt7vnJzMzUSlDv6tixIy5cuIAnT57AyckJLVu2xNy5c+Hl5ZVj21u3bqFGjRowNTVFUlJSgcdevXo1Fi5ciBs3bsDe3h4ffvghlixZovVrICIiKkzG0gcwW1ZWFlavXo2DBw/iyZMnkMvlCusPHTqkp8gMV74JoK+vr0ojfD08PGBmZqZxUO9q1qwZvvjiC3h6euLhw4cYM2YMunXrhpMnTypsl5mZiZ49e6JRo0Y51uVm4cKFWLBgAebPn4+6devi5cuXuHfvnlZjJyIi0psilsRpYvjw4Vi9ejXatWuHypUrc1JoLcg3ASwKCdG7bxjx8/PDhAkT0LlzZ2RmZiokm5MmTUJAQABatGhRYAL4/PlzTJo0CTt37kSLFi2k8qpVq2r/AoiIiEgjv/76KzZv3oy2bdvqOxSjofRE0EXBs2fPsH79etSvX18h+Tt06BC2bNmidPPt/v37IZfL8fDhQwQGBsLb2xvdu3dHXFycrkInIiIqPEbWB9Dc3Bzly5fXdxhGxSASwPHjx8PGxgYuLi6IjY1VeCNJYmIiwsLCsHr1aqVHLN+5cwdyuRyzZs3C4sWLsXXrVjx79gytWrVCRkZGnvulp6cjJSVFYSEiIipqsvsAarIUJaNHj8Y333yT54TQpDq9JIATJkyATCbLd7l+/bq0/dixY3H+/Hns27cPpqam6Nu3r/QQDBw4EL169ULjxo2VPr9cLkdmZia+/fZbBAcHo169eti4cSNu3ryJw4cP57nf7Nmz4eDgIC0+Pj7q3wQiIiJSyvHjx7F+/XqUK1cOHTp0wAcffKCwkOpUmghaW0aPHl3gi53Lli0rfe3q6gpXV1dUqFABgYGB8PHxwenTpxEUFIRDhw5hx44d+PrrrwG8Hbksl8tRokQJLF++HP37989xbE9PTwBAxYoVpTI3Nze4uroiNjY2z5gmTpyIUaNGSZ9TUlKYBBIRUdGjaTNuEatoc3R0RJcuXfQdhlHRSwLo5uYGNzc3tfbNHvqdnp4OADh16hSysrKk9VFRUZg7dy5OnjyJUqVK5XqMBg0aAABiYmLg7e0N4G3/wn///Rd+fn55ntvCwgIWFhZqxU1ERFRYjG0amFWrVuk7BKOjUhPwsWPH8PHHHyMoKAgPHz4EAPzyyy84fvy4ToKLjo7G999/jwsXLuD+/fs4dOgQevbsiXLlyiEoKAjA2/cRV65cWVpKlSoFExMTVK5cWZo0cvv27QrvCqxQoQI6deqE4cOH4+TJk7hy5QpCQ0MREBCAZs2a6eRaiIiISH1v3rzBgQMH8OOPP+LFixcAgEePHiE1NVXPkRkmpRPAbdu2ITg4GFZWVjh//rxUA5ecnIxZs2bpJDhra2tERkaiRYsW8Pf3R3h4OKpWrYojR46oVBOXnJyMmJgYhbK1a9eibt26aNeuHZo0aQIzMzPs3btX6/MYEhERFTojGwV8//59VKlSBZ06dcLgwYPx9OlTAMDcuXMxZswYPUdnmJROAGfMmIFly5ZhxYoVCklSgwYN8Pfff+skuCpVquDQoUNITExEWloa7t69i6VLl+bZtAsAYWFhOd4CEhYWlmPkkL29PVauXInnz58jMTERkZGR7M9HRETGwcgSwOHDh6N27dp4/vw5rKyspPIuXbrg4MGDeozMcCndBzAmJibXkbYODg5KvXaNiIiICoex9QE8duwYTp48CXNzc4Xy0qVLS13SSDVKJ4AeHh64desWSpcurVB+/PhxhRG7xVFylUyYWJnqOwylmLwyjDizmWQY2ut+ithvzQLIzQ0rXmGTVfBGRYyD80t9h6CS0jbP9B2CSsqZ/avvEJSWaiYveCPKlVwuVxjwme3Bgwews7PTQ0SGT+km4IEDB2L48OGIjo6GTCbDo0ePsH79eowZMwafffaZLmMkIiIiVRhZE3Dr1q2xePFi6bNMJkNqaioiIiL4ejg1KV0DOGHCBMjlcrRo0QKvXr1C48aNYWFhgTFjxmDo0KG6jJGIiIhUYWTzAC5YsADBwcGoWLEi0tLS0KtXL9y8eROurq7YuHGjvsMzSEongDKZDF9++SXGjh2LW7duITU1FRUrVoStra0u4yMiIqJiztvbGxcvXsSmTZtw8eJFpKamIjw8HL1791YYFELKU3kiaHNzc4U3aBAREVHRYmyDQI4ePYr69eujd+/e6N27t1T+5s0bHD16VKXXwdJb+SaAqrxfLzIyUuNgiIiISAuMrAm4WbNmiI+PR8mSJRXKk5OT0axZs1wHiFD+8h0E4uDgIC329vY4ePAgzp49K60/d+4cDh48CAcHB50HSkRERMWTEAIyWc5ZIRITE2FjY6OHiAxfvjWA7757b/z48ejevTuWLVsGU9O3U4lkZWXh888/h729vW6jJCIiIqUZSxNwdkukTCZDWFiYwlvAsrKycOnSJdSvX19f4Rk0pfsA/vzzzzh+/LiU/AGAqakpRo0ahfr162P+/Pk6CZCIiIhUZCRNwNktjEII2NnZKQz4MDc3R7169TBw4EB9hWfQlE4A37x5g+vXr8Pf31+h/Pr165DLObklERERaVd2S2Tp0qUxZswYNvdqkdIJYL9+/RAeHo7bt2+jTp06AIDo6GjMmTMH/fr101mAREREpCIjqQHMFhERAQB4+vQpYmJiAAD+/v5wc3PTZ1gGTek3gXz99dcYN24cFixYgMaNG6Nx48ZYuHAhxo4dy+ZfIiKiIkSmhUVdc+bMgUwmw4gRI6SytLQ0DB48GC4uLrC1tUXXrl3x+PFjpY/56tUr9O/fH56enlIO4uXlhfDwcLx69UqDaIsvpRNAExMTjBs3Dg8fPkRSUhKSkpLw8OFDjBs3TqFfIBEREemZnl4Fd+bMGfz444+oWrWqQvnIkSOxc+dObNmyBUeOHMGjR49Ummpu5MiROHLkCHbu3CnlIFFRUThy5AhGjx6tXrDFnNIJ4Lvs7e058peIiIgkqamp6N27N1asWAEnJyepPDk5GStXrsTChQvRvHlz1KpVC6tWrcLJkydx+vRppY69bds2rFy5Em3atJFykLZt22LFihXYunWrri7JqCndB7BMmTK5zsGT7c6dO1oJiIiIiDSjj2lgBg8ejHbt2qFly5aYMWOGVH7u3DlkZmaiZcuWUllAQAB8fX1x6tQp1KtXr8Bjv3r1Cu7u7jnKS5YsySZgNSmdAL7blg8AmZmZOH/+PPbu3YuxY8dqOy4iIiJSl5YGgaSkpCgUW1hYKMzFl+3XX3/F33//jTNnzuRYl5CQAHNzczg6OiqUu7u7IyEhQalwgoKCEBERgbVr18LS0hIA8Pr1a0ybNg1BQUFKHYMUKZ0ADh8+PNfyJUuWKLwdhIiIiIyDj4+PwueIiAhMnTpVoSwuLg7Dhw/H/v37peRM27755hsEBwfD29sb1apVAwBcvHgRlpaW+OOPP3RyTmOndAKYlzZt2mDixIkKbw0hIiIiPdPCVC5xcXEKff5zq/07d+4cnjx5gpo1a0plWVlZOHr0KL7//nv88ccfyMjIQFJSkkIt4OPHj+Hh4aFUHJUrV8bNmzexfv16XL9+HQDQs2dP9O7dW2FyaFKexgng1q1b4ezsrI1YiIiISAu01QdQmUGfLVq0wOXLlxXK+vXrh4CAAIwfPx4+Pj4wMzPDwYMH0bVrVwBATEwMYmNjVWq+tba25ls/tEjpBLBGjRoKg0CEEEhISMDTp0/xww8/6CQ4IiIiKtrs7OxQuXJlhTIbGxu4uLhI5eHh4Rg1ahScnZ1hb2+PoUOHIigoSKkBINliYmLw3Xff4dq1awCAwMBADBkyBAEBAdq7mGJE6QSwU6dOCgmgiYkJ3Nzc0LRpU958IiKioqSIvQlk0aJFMDExQdeuXZGeno7g4GCVKo+2bduGHj16oHbt2lKt4enTp1GlShX8+uuvUs0iKU8mhChiL3wxHCkpKXBwcID399NgYqWbjq/aZvLKsCbtNsnQZD56Kojc3LB+/IVNlr5DUJmD2wt9h6CSxl6GNaXXANej+g5Baakv5GhY+RGSk5N1Npdu9t+lKgNmwdRc/b9LWRlpuPzTFzqNVRXlypVD7969MX36dIXyiIgIrFu3Drdv39ZTZIZL6YmgTU1N8eTJkxzliYmJfBMIERER6Ux8fDz69u2bo/zjjz9GfHy8HiIyfEongHlVFKanp8Pc3FxrAREREZGG9PQqOF1p2rQpjh07lqP8+PHjaNSokR4iMnwF9gH89ttvAQAymQw//fQTbG1tpXXZw7zZB5CIiKjo0MebQHSpY8eOGD9+PM6dOycNHDl9+jS2bNmCadOmYceOHQrbUsEKTAAXLVoE4G0N4LJlyxSae83NzVG6dGksW7ZMdxESERGRaorYIBBNff755wCAH374Icfgkex1wNvKqqwsw+srrA8FJoB3794FADRr1gyRkZEKL3gmIiIi0jW5XK7vEIyO0tPAHD58WJdxEBERkbYYWQ0gaV++CeCoUaPw1VdfwcbGBqNGjcr3QAsXLtRqYERERKQeY+sDCABHjhzB119/LU0EXbFiRYwdO5aDQNSUbwJ4/vx5ZGZmAgD+/vtvhYmgiYiIiArDunXr0K9fP3zwwQcYNmwYAODEiRNo0aIFVq9ejV69euk5QsOTbwL4brPvn3/+qetYiIiISBuMrAl45syZmDdvHkaOHCmVDRs2DAsXLsRXX33FBFANSs8D2L9/f7x4kXNG+5cvX6J///5aDYqIiIjUJxNC46UouXPnDjp06JCjvGPHjtJgVVKN0gngmjVr8Pr16xzlr1+/xtq1a7UaFBEREVE2Hx8fHDx4MEf5gQMH4OPjo4eIDF+Bo4BTUlIghIAQAi9evICl5f/eLZiVlYXff/8dJUuW1GmQREREpAIjawIePXo0hg0bhgsXLqB+/foA3vYBXL16Nb755hs9R2eYCkwAHR0dIZPJIJPJUKFChRzrZTIZpk2bppPgiIiISHXGNgr4s88+g4eHBxYsWIDNmzcDAAIDA7Fp0yZ06tRJz9EZpgITwMOHD0MIgebNm2Pbtm1wdnaW1pmbm8PPzw9eXl46DZKIiIiKty5duqBLly76DsNoFJgANmnSBMDbN4L4+PjAxETpboNERESkD0bWBAwASUlJ2Lp1K+7cuYMxY8bA2dkZf//9N9zd3VGqVCl9h2dwlH4TiJ+fHwDg1atXiI2NRUZGhsL6qlWrajcyIiIiUouxNQFfunQJLVu2hIODA+7du4cBAwbA2dkZkZGRiI2N5WBUNSidAD59+hT9+vXDnj17cl3Ply8TEREVEUZWAzhq1CiEhYVh3rx5sLOzk8rbtm3LOQDVpHR77ogRI5CUlITo6GhYWVlh7969WLNmDd577z3s2LFDlzESERFRMXbmzBl88sknOcpLlSqFhIQEPURk+JSuATx06BCioqJQu3ZtmJiYwM/PD61atYK9vT1mz56Ndu3a6TJOIiIiUpKxNQFbWFggJSUlR/mNGzfg5uamh4gMn9I1gC9fvpTm+3NycsLTp08BAFWqVMHff/+tm+iIiIhIdUILSxHSsWNHTJ8+HZmZmQDeTkEXGxuL8ePHo2vXrnqOzjApnQD6+/sjJiYGAFCtWjX8+OOPePjwIZYtWwZPT0+dBUhERETF24IFC5CamoqSJUvi9evXaNKkCcqXLw87OzvMnDlT3+EZJKWbgIcPH474+HgAQEREBEJCQrB+/XqYm5tj9erVuoqPiIiI1FDUmnE14eDggP379+P48eO4dOkSUlNTUbNmTbRs2VLfoRkspRPAjz/+WPq6Vq1auH//Pq5fvw5fX1+4urrqJDgiIiJSgxBvF032L4IaNmyIhg0b6jsMo6B0Avhf1tbWqFmzpjZjISIiIpK8fv0aBw8eRPv27QEAEydORHp6urTe1NQUX331FSwtLfUVosHKNwEcNWqU0gdauHChxsEQERGR5oxlFPCaNWuwe/duKQH8/vvvUalSJVhZWQEArl+/Di8vL4wcOVKfYRqkfBPA8+fPK3UQmUymlWCIiIhIC4xkIuj169dj3LhxCmUbNmxA2bJlAQDr1q3DkiVLmACqId8E8PDhw4UVR546duyICxcu4MmTJ3ByckLLli0xd+5ceHl55dj21q1bqFGjBkxNTZGUlJTvcc+cOYMJEybg3LlzkMlkqFOnDubNm4dq1arp6EqIiIhIFbdu3UKVKlWkz5aWljAx+d8EJnXq1MHgwYP1EZrBU3oaGH1p1qwZNm/ejJiYGGzbtg23b99Gt27dcmyXmZmJnj17olGjRgUeMzU1FSEhIfD19UV0dDSOHz8OOzs7BAcHS3MMERERGSqZXPOlKEhKSlLo8/f06VOULl1a+iyXyxXWk/LUHgRSWN6t1vXz88OECRPQuXNnZGZmwszMTFo3adIkBAQEoEWLFjh58mS+x7x+/TqePXuG6dOnw8fHB8DbqW2qVq2K+/fvo3z58rq5GCIiosJgJE3A3t7euHLlCvz9/XNdf+nSJXh7exdyVMahyNcAvuvZs2dYv3496tevr5D8HTp0CFu2bMGSJUuUOo6/vz9cXFywcuVKZGRk4PXr11i5ciUCAwMV/rP4r/T0dKSkpCgsRERERU32IBBNlqKgbdu2mDJlCtLS0nKse/36NaZNm8ZX0arJIBLA8ePHw8bGBi4uLoiNjUVUVJS0LjExEWFhYVi9ejXs7e2VOp6dnR3+/PNPrFu3DlZWVrC1tcXevXuxZ88elCiRd6Xo7Nmz4eDgIC3ZtYdERESkfV988QWePXsGf39/zJ8/H1FRUYiKisK8efPg7++P58+f44svvtB3mAZJLwnghAkTIJPJ8l2uX78ubT927FicP38e+/btg6mpKfr27Qvx/5NUDhw4EL169ULjxo2VPv/r168RHh6OBg0a4PTp0zhx4gQqV66Mdu3a4fXr13nuN3HiRCQnJ0tLXFyc+jeBiIhIV7IngtZkKQLc3d1x8uRJBAYGYsKECejSpQu6dOmCiRMnomLFijh+/Djc3d31HaZBkglR+N/lp0+fIjExMd9typYtC3Nz8xzlDx48gI+PD06ePImgoCA4OjoiNTVVWi+EgFwuh6mpKZYvX47+/fvnOMbKlSvxxRdfID4+XhpNlJGRAScnJ6xcuRI9evRQ6jpSUlLg4OAA7++nwcTKMCahNHllqu8QVGKSwSmGdEluXjR+yStL2GTpOwSVObi90HcIKmnsdUffIahkgOtRfYegtNQXcjSs/AjJyclKt1ipKvvvUt0OX6GEmfp/l95kpiF652SdxqqqZ8+e4datWwCA8uXLw9nZWc8RGTa9DAJxc3ODm5ubWvvK5W+HJmWP+jl16hSysv73RyEqKgpz587FyZMnUapUqVyP8erVK5iYmCjMX5j9Ofv4REREVHQ4OzujTp06+g7DaBTpPoDR0dH4/vvvceHCBdy/fx+HDh1Cz549Ua5cOQQFBQEAAgMDUblyZWkpVaoUTExMULlyZTg5OQEAtm/fjoCAAOm4rVq1wvPnzzF48GBcu3YN//zzD/r164cSJUqgWbNmerlWIiIirRFaWMioFekE0NraGpGRkWjRogX8/f0RHh6OqlWr4siRI7CwsFD6OMnJyYiJiZE+BwQEYOfOnbh06RKCgoLQqFEjPHr0CHv37oWnp6cuLoWIiKjQGMsoYNIdvfQBNBbsA6h77AOoW+wDqHvsA6hb7AOoKPvvUr12mvcBPL27aPUBJO0q8hNBExERkYo0HcnLuiGjxwSQiIjIyGjajMsmYONXpPsAEhEREZH2sQaQiIjI2BjJu4BJd5gAEhERGRk2AVNBmAASEREZG7l4u2iyPxk19gEkIiIiKmZYA0hERGRs2AeQCsAEkIiIyMjIoGEfQK1FQkUVm4CJiIiIihnWABIRERkbvgmECsAaQCIiIiOTPQ2MJosqli5diqpVq8Le3h729vYICgrCnj17pPVpaWkYPHgwXFxcYGtri65du+Lx48davmpSBRNAIiIi0oi3tzfmzJmDc+fO4ezZs2jevDk6deqEf/75BwAwcuRI7Ny5E1u2bMGRI0fw6NEjfPDBB3qOunhjEzAREZGxKeRRwB06dFD4PHPmTCxduhSnT5+Gt7c3Vq5ciQ0bNqB58+YAgFWrViEwMBCnT59GvXr1NAiU1MUaQCIiIiMjE0LjBQBSUlIUlvT09ALPnZWVhV9//RUvX75EUFAQzp07h8zMTLRs2VLaJiAgAL6+vjh16pTO7gHljzWAWtC4YgzMbc31HYZSkjKs9R2CSpLSLfUdgkqyhGH9T2Uqk+s7BJXYmmXoOwSVlbd7qu8QVNLILkbfIaikirmVvkNQWop5lr5DUJmPj4/C54iICEydOjXXbS9fvoygoCCkpaXB1tYW27dvR8WKFXHhwgWYm5vD0dFRYXt3d3ckJCToKHIqCBNAIiIiYyP//0WT/QHExcXB3t5eKrawsMhzF39/f1y4cAHJycnYunUrQkNDceTIEQ2CIF1iAkhERGRk3m3GVXd/ANKoXmWYm5ujfPnyAIBatWrhzJkz+Oabb/DRRx8hIyMDSUlJCrWAjx8/hoeHh9oxkmYMq72KiIiICia0sGhILpcjPT0dtWrVgpmZGQ4ePCiti4mJQWxsLIKCgjQ/EamFNYBERESkkYkTJ6JNmzbw9fXFixcvsGHDBvz555/4448/4ODggPDwcIwaNQrOzs6wt7fH0KFDERQUxBHAesQEkIiIyNgU8ptAnjx5gr59+yI+Ph4ODg6oWrUq/vjjD7Rq1QoAsGjRIpiYmKBr165IT09HcHAwfvjhB/XjI40xASQiIjIy6rzN47/7q2LlypX5rre0tMSSJUuwZMkS9YMirWIfQCIiIqJihjWARERExqaQm4DJ8DABJCIiMjIy+dtFk/3JuLEJmIiIiKiYYQ0gERGRsWETMBWACSAREZGx0XQyZ+Z/Ro9NwERERETFDGsAiYiIjIy23gVMxosJIBERkbFhH0AqABNAIiIiYyMAaDKVC/M/o8c+gERERETFDGsAiYiIjAz7AFJBmAASEREZGwEN+wBqLRIqotgETERERFTMsAaQiIjI2HAUMBWACSAREZGxkQOQabg/GTU2ARMREREVM6wBJCIiMjIcBUwFYQJIRERkbNgHkArAJmAiIiKiYoY1gERERMaGNYBUACaARERExoYJIBWACSAREZGx4TQwVAD2ASQiIiIqZlgDSEREZGQ4DQwVhAkgERGRsWEfQCpAkW8C7tixI3x9fWFpaQlPT0/06dMHjx49ktbfu3cPMpksx3L69Ol8jxsbG4t27drB2toaJUuWxNixY/HmzRtdXw4RERGR3hX5GsBmzZrhiy++gKenJx4+fIgxY8agW7duOHnypMJ2Bw4cQKVKlaTPLi4ueR4zKysL7dq1g4eHB06ePIn4+Hj07dsXZmZmmDVrls6uhYiIqFDIBSDToBZPzhpAY1fkE8CRI0dKX/v5+WHChAno3LkzMjMzYWZmJq1zcXGBh4eHUsfct28frl69igMHDsDd3R3Vq1fHV199hfHjx2Pq1KkwNzfX+nUQEREVGjYBUwGKfBPwu549e4b169ejfv36Cskf8LapuGTJkmjYsCF27NiR73FOnTqFKlWqwN3dXSoLDg5GSkoK/vnnnzz3S09PR0pKisJCREREZGgMIgEcP348bGxs4OLigtjYWERFRUnrbG1tsWDBAmzZsgW7d+9Gw4YN0blz53yTwISEBIXkD4D0OSEhIc/9Zs+eDQcHB2nx8fHR8MqIiIh0QfyvFlCdBawBNHZ6SQAnTJiQ68CNd5fr169L248dOxbnz5/Hvn37YGpqir59+0L8f/W0q6srRo0ahbp16+L999/HnDlz8PHHH2P+/Plaj3vixIlITk6Wlri4OK2fg4iISGOaJH+aNh+TQdBLH8DRo0cjLCws323Kli0rfe3q6gpXV1dUqFABgYGB8PHxwenTpxEUFJTrvnXr1sX+/fvzPLaHhwf++usvhbLHjx9L6/JiYWEBCwuLfOMmIiIiKur0kgC6ubnBzc1NrX3l8rfvp0lPT89zmwsXLsDT0zPP9UFBQZg5cyaePHmCkiVLAgD2798Pe3t7VKxYUa24iIiIigy5hs24HAVs9Ir0KODo6GicOXMGDRs2hJOTE27fvo3JkyejXLlyUu3fmjVrYG5ujho1agAAIiMj8fPPP+Onn36SjrN9+3ZMnDhRalZu3bo1KlasiD59+mDevHlISEjApEmTMHjwYNbwERGR4RPyt4sm+5NRK9IJoLW1NSIjIxEREYGXL1/C09MTISEhmDRpkkKi9tVXX+H+/fsoUaIEAgICsGnTJnTr1k1an5ycjJiYGOmzqakpdu3ahc8++wxBQUGwsbFBaGgopk+fXqjXR0REpBOcBoYKIBOC32V1paSkwMHBAb0O9YK5rWHMHZiUYa3vEFSSlG6p7xBUkiUMYmC9xFRmWP/l25pl6DsElZW3e6rvEFTSyC6m4I2KkM42L/UdgtJSXmTBqcIdJCcnw97eXjfn+P+/Sy19PkMJE/VbtN7I03EgbqlOYyX9KtI1gERERKQG9gGkAjABJCIiMjZsAqYCGFZ7FRERERFpjDWARERExkZAwxpArUVCRRQTQCIiImPDJmAqAJuAiYiIiIoZ1gASEREZG7kcgAbTPMkNa4ooUh0TQCIiImPDJmAqAJuAiYiIiIoZ1gASEREZG9YAUgFYA0hERGRs5ELzRQWzZ8/G+++/Dzs7O5QsWRKdO3dGTIziawXT0tIwePBguLi4wNbWFl27dsXjx4+1edWkAiaARERERkYIucaLKo4cOYLBgwfj9OnT2L9/PzIzM9G6dWu8fPm/dzWPHDkSO3fuxJYtW3DkyBE8evQIH3zwgbYvnZTEJmAiIiLSyN69exU+r169GiVLlsS5c+fQuHFjJCcnY+XKldiwYQOaN28OAFi1ahUCAwNx+vRp1KtXTx9hF2usASQiIjI2QsPm3//vA5iSkqKwpKenK3X65ORkAICzszMA4Ny5c8jMzETLli2lbQICAuDr64tTp05p+eJJGUwAiYiIjE32IBBNFgA+Pj5wcHCQltmzZxd4arlcjhEjRqBBgwaoXLkyACAhIQHm5uZwdHRU2Nbd3R0JCQlav3wqGJuAiYiIKFdxcXGwt7eXPltYWBS4z+DBg3HlyhUcP35cl6GRhpgAEhERGRu5HJBp8DaP/x8EYm9vr5AAFmTIkCHYtWsXjh49Cm9vb6ncw8MDGRkZSEpKUqgFfPz4MTw8PNSPk9TGJmAiIiJjo6UmYOVPJzBkyBBs374dhw4dQpkyZRTW16pVC2ZmZjh48KBUFhMTg9jYWAQFBWnlkkk1rAEkIiIijQwePBgbNmxAVFQU7OzspH59Dg4OsLKygoODA8LDwzFq1Cg4OzvD3t4eQ4cORVBQEEcA6wkTQCIiIiMj5HIIDZqAVZ0HcOnSpQCApk2bKpSvWrUKYWFhAIBFixbBxMQEXbt2RXp6OoKDg/HDDz+oHSNphgkgERGRsRECQOG9Ck4osb2lpSWWLFmCJUuWqBsVaRH7ABIREREVM6wBJCIiMjZyAcgKrwaQDA8TQCIiImMjBABNpoFhAmjsmAASEREZGSEXEBrUACrTp48MG/sAEhERERUzrAEkIiIyNkIOzZqANdiXDAITQCIiIiPDJmAqCJuAiYiIiIoZ1gBqIPs/pMyXmXqORHmZmYb1LX+TLtN3CCrJEob1P5UmbwrQh0wzw/lZy5YuM6yYXyFL3yGoJEVuOPGmpL79eSuM2rU3Il2jZtw3MKznllQnE6znVduDBw/g4+Oj7zCIiMiAxMXFwdvbWyfHTktLQ5kyZaR38WrCw8MDd+/ehaWlpRYio6KGCaAG5HI5Hj16BDs7O8hk2qupSklJgY+PD+Li4mBvb6+14+oK49UtxqtbhhYvYHgxM963hBB48eIFvLy8YGKiu9aCtLQ0ZGRkaHwcc3NzJn9GzLDaA4sYExMTnf0XBwD29vYG8csyG+PVLcarW4YWL2B4MTNewMHBQavHy42lpSUTNyqQYXVYIiIiIiKNMQEkIiIiKmaYABZBFhYWiIiIgIWFhb5DUQrj1S3Gq1uGFi9geDEzXqKih4NAiIiIiIoZ1gASERERFTNMAImIiIiKGSaARERERMUME0AiIiKiYoYJoAaOHj2KDh06wMvLCzKZDL/99pvCeiEEpkyZAk9PT1hZWaFly5a4efOmwjY3btxAp06d4OrqCnt7ezRs2BCHDx/O97zKHPfZs2fo3bs37O3t4ejoiPDwcKSmpuol5szMTIwfPx5VqlSBjY0NvLy80LdvXzx69Ehhu9KlS0Mmkyksn3zyiV7ucVhYWI5YQkJCCrzHe/fu1Uu8/401e5k/f77O7+/ff/+NVq1awdHRES4uLhg0aBBSU1PzjVfdZ1gb91fVePX9/Kpzf/X5/KoTr66e38jISLRu3RouLi6QyWS4cOFCjnOnpaVh8ODBcHFxga2tLbp27YrHjx/nG68mv4OJigomgBp4+fIlqlWrhiVLluS6ft68efj222+xbNkyREdHw8bGBsHBwUhLS5O2ad++Pd68eYNDhw7h3LlzqFatGtq3b5/vexyVOW7v3r3xzz//YP/+/di1axeOHj2KQYMG6SXmV69e4e+//8bkyZPx999/IzIyEjExMejYsWOObadPn474+HhpCQkJ0cs9BoCQkBCFWDZu3KiwPrd7PGfOHL3E+26c8fHx+PnnnyGTydC1a1ed3t9Hjx6hZcuWKF++PKKjo7F37178888/CAsLy/feqvsMa3p/1YlXn8+vuvcX0M/zq268unp+X758iYYNG2Lu3Ll5nnvkyJHYuXMntmzZgiNHjuDRo0f44IMP8o1Xk9/BREWGIK0AILZv3y59lsvlwsPDQ8yfP18qS0pKEhYWFmLjxo1CCCGePn0qAIijR49K26SkpAgAYv/+/bmeR5njXr16VQAQZ86ckbbZs2ePkMlk4uHDh4Uec27++usvAUDcv39fKvPz8xOLFi3Kc5/CjDc0NFR06tQpz/XK3GN93t9OnTqJ5s2bK5Tp4v7++OOPomTJkiIrK0va5tKlSwKAuHnzZq7n0dYzXFjx5qawnl9149XX86ut+6uN5/ddd+/eFQDE+fPnFcqTkpKEmZmZ2LJli1R27do1AUCcOnUq12Np83cwkT6xBlBH7t69i4SEBLRs2VIqc3BwQN26dXHq1CkAgIuLC/z9/bF27Vq8fPkSb968wY8//oiSJUuiVq1aah/31KlTcHR0RO3ataVtWrZsCRMTE0RHRxd6zLlJTk6GTCaDo6OjQvmcOXPg4uKCGjVqYP78+Xjz5o3e4v3zzz9RsmRJ+Pv747PPPkNiYqK0Tp17XFj39/Hjx9i9ezfCw8NzrNP2/U1PT4e5ubnCi+2trKwAAMePH1f7uLq6v+rEm5vCen41iVcfz6827q+2nl9lnDt3DpmZmQrXFBAQAF9fX+ma/kuXv4OJChMTQB3Jbq5zd3dXKHd3d5fWyWQyHDhwAOfPn4ednR0sLS2xcOFC7N27F05OTmofNyEhASVLllRYX6JECTg7O+fbjKirmP8rLS0N48ePR8+ePRVetD5s2DD8+uuvOHz4MD755BPMmjUL48aN00u8ISEhWLt2LQ4ePIi5c+fiyJEjaNOmDbKysqRzq3qPC+v+rlmzBnZ2djmasXRxf5s3b46EhATMnz8fGRkZeP78OSZMmADgbbOeusfV1f1VJ97/KsznV9149fX8auP+auv5VUZCQgLMzc1zJPLvXlNu+2Rvk9c+6v4OJipMJfQdQHEmhMDgwYNRsmRJHDt2DFZWVvjpp5/QoUMHnDlzBp6envoOMQdNY87MzET37t0hhMDSpUsV1o0aNUr6umrVqjA3N8cnn3yC2bNnq/1KJnXj7dGjh/R1lSpVULVqVZQrVw5//vknWrRooVYsuoz3XT///DN69+4NS0tLhXJd3N9KlSphzZo1GDVqFCZOnAhTU1MMGzYM7u7uCrVARYWm8Rb286tuvPp6frXxPBTm80tUnBW939BGwsPDAwByjCZ7/PixtO7QoUPYtWsXfv31VzRo0AA1a9bEDz/8ACsrK6xZs0bt43p4eODJkycK69+8eYNnz55J2xRmzNmy/3jev38f+/fvV6g9yU3dunXx5s0b3Lt3Ty/xvqts2bJwdXXFrVu3pHOreo8LI95jx44hJiYGAwYMKHBbbdxfAOjVqxcSEhLw8OFDJCYmYurUqXj69CnKli2r9nF1dX/ViTebPp5fTeJ9V2E9v5rGq83nVxkeHh7IyMhAUlKSQvl/r+m/+2Rvk9c+6v4OJipMTAB1pEyZMvDw8MDBgwelspSUFERHRyMoKAjA29GFAHL8Z2xiYgK5XK72cYOCgpCUlIRz585J2xw6dAhyuRx169Yt9JiB//3xvHnzJg4cOAAXF5c8t8124cIFmJiY5GhKKYx4/+vBgwdITEyUauDUuceFEe/KlStRq1YtVKtWrcBttXF/3+Xu7g5bW1ts2rQJlpaWaNWqldrH1dX9VSdeQH/Pr7rx/ldhPb+axqvN51cZtWrVgpmZmcI1xcTEIDY2NtdrAnT7O5ioUOlzBIqhe/HihTh//rw4f/68ACAWLlwozp8/L40MnDNnjnB0dBRRUVHi0qVLolOnTqJMmTLi9evXQoi3Iz5dXFzEBx98IC5cuCBiYmLEmDFjhJmZmbhw4YJ0Hn9/fxEZGSl9Lui4QggREhIiatSoIaKjo8Xx48fFe++9J3r27KmXmDMyMkTHjh2Ft7e3uHDhgoiPj5eW9PR0IYQQJ0+eFIsWLRIXLlwQt2/fFuvWrRNubm6iZ8+ehR7vixcvxJgxY8SpU6fE3bt3xYEDB0TNmjXFe++9J9LS0vK9x926ddPLMyGEEMnJycLa2losXbo0x7Oqq/srhBDfffedOHfunIiJiRHff/+9sLKyEt98843C+bX1DGt6f9WJV5/Przrx6vP5Vfd5EEI3z29iYqI4f/682L17twAgfv31V3H+/HkRHx8vHfvTTz8Vvr6+4tChQ+Ls2bMiKChIBAUF5RuvJr+DiYoKJoAaOHz4sACQYwkNDRVCvJ0uYPLkycLd3V1YWFiIFi1aiJiYGIVjnDlzRrRu3Vo4OzsLOzs7Ua9ePfH7778rbANArFq1SvqszHETExNFz549ha2trbC3txf9+vUTL1680EvM2VMw5LYcPnxYCCHEuXPnRN26dYWDg4OwtLQUgYGBYtasWeKPP/4o9HhfvXolWrduLdzc3ISZmZnw8/MTAwcOFAkJCQXe499//10vz4QQb6fgsLKyEklJSeK/dHl/+/TpI5ydnYW5ubmoWrWqWLt2bY7za+sZ1sb9VTVefT+/qsar7+dXnedBCN08v6tWrcp1fUREhHTs169fi88//1w4OTkJa2tr0aVLF4UEMbd4NfkdTFRUyIQQQuVqQyIiIiIyWOwDSERERFTMMAEkIiIiKmaYABIREREVM0wAiYiIiIoZJoBERERExQwTQCIiIqJihgkgERERUTHDBJCIiIiomGECSMVe06ZNMWLECKM6b1hYGDp37qzRMUqXLg2ZTAaZTIakpKQ8t1u9ejUcHR01OhflLSwsTPo+/Pbbb/oOh4iMBBNAIj2JjIzEV199JX0uXbo0Fi9erL+AcjF9+nTEx8fDwcFB36EYvT///DPXZPubb75BfHy8foIiIqNVQt8BEBVXzs7O+g6hQHZ2dvDw8NB3GACAzMxMmJmZ6TuMQufg4MAEnIi0jjWARP/x/Plz9O3bF05OTrC2tkabNm1w8+ZNaX12k+cff/yBwMBA2NraIiQkRKGW5s2bNxg2bBgcHR3h4uKC8ePHIzQ0VKFZ9t0m4KZNm+L+/fsYOXKk1NwHAFOnTkX16tUV4lu8eDFKly4tfc7KysKoUaOkc40bNw7/fcW3XC7H7NmzUaZMGVhZWaFatWrYunWrWvdn9erV8PX1hbW1Nbp06YLExMQc20RFRaFmzZqwtLRE2bJlMW3aNLx580Zaf/36dTRs2BCWlpaoWLEiDhw4oNDEee/ePchkMmzatAlNmjSBpaUl1q9fDwD46aefEBgYCEtLSwQEBOCHH35QOHdcXBy6d+8OR0dHODs7o1OnTrh37560/s8//0SdOnVgY2MDR0dHNGjQAPfv31fq2gu6roULF6JKlSqwsbGBj48PPv/8c6Smpkrr79+/jw4dOsDJyQk2NjaoVKkSfv/9d9y7dw/NmjUDADg5OUEmkyEsLEypmIiI1MEEkOg/wsLCcPbsWezYsQOnTp2CEAJt27ZFZmamtM2rV6/w9ddf45dffsHRo0cRGxuLMWPGSOvnzp2L9evXY9WqVThx4gRSUlLy7b8VGRkJb29vqclVlSa/BQsWYPXq1fj5559x/PhxPHv2DNu3b1fYZvbs2Vi7di2WLVuGf/75ByNHjsTHH3+MI0eOKH9jAERHRyM8PBxDhgzBhQsX0KxZM8yYMUNhm2PHjqFv374YPnw4rl69ih9//BGrV6/GzJkzAbxNWDt37gxra2tER0dj+fLl+PLLL3M934QJEzB8+HBcu3YNwcHBWL9+PaZMmYKZM2fi2rVrmDVrFiZPnow1a9YAeFtLGBwcDDs7Oxw7dgwnTpyQEvSMjAy8efMGnTt3RpMmTXDp0iWcOnUKgwYNkhLu/BR0XQBgYmKCb7/9Fv/88w/WrFmDQ4cOYdy4cdL6wYMHIz09HUePHsXly5cxd+5c2NrawsfHB9u2bQMAxMTEID4+Ht98841K3xsiIpUIomKuSZMmYvjw4UIIIW7cuCEAiBMnTkjr//33X2FlZSU2b94shBBi1apVAoC4deuWtM2SJUuEu7u79Nnd3V3Mnz9f+vzmzRvh6+srOnXqlOt5hRDCz89PLFq0SCG2iIgIUa1aNYWyRYsWCT8/P+mzp6enmDdvnvQ5MzNTeHt7S+dKS0sT1tbW4uTJkwrHCQ8PFz179szzvuQWT8+ePUXbtm0Vyj766CPh4OAgfW7RooWYNWuWwja//PKL8PT0FEIIsWfPHlGiRAkRHx8vrd+/f78AILZv3y6EEOLu3bsCgFi8eLHCccqVKyc2bNigUPbVV1+JoKAg6Tz+/v5CLpdL69PT04WVlZX4448/RGJiogAg/vzzzzyvOy8FXVdutmzZIlxcXKTPVapUEVOnTs1128OHDwsA4vnz57muf/f+EBFpin0Aid5x7do1lChRAnXr1pXKXFxc4O/vj2vXrkll1tbWKFeunPTZ09MTT548AQAkJyfj8ePHqFOnjrTe1NQUtWrVglwu12q8ycnJiI+PV4i3RIkSqF27ttQMfOvWLbx69QqtWrVS2DcjIwM1atRQ6XzXrl1Dly5dFMqCgoKwd+9e6fPFixdx4sQJhZqxrKwspKWl4dWrV4iJiYGPj49C38J379W7ateuLX398uVL3L59G+Hh4Rg4cKBU/ubNG6mP3MWLF3Hr1i3Y2dkpHCctLQ23b99G69atERYWhuDgYLRq1QotW7ZE9+7d4enpWeC1F3Rd1tbWOHDgAGbPno3r168jJSUFb968UVg/bNgwfPbZZ9i3bx9atmyJrl27omrVqgWem4hI25gAEqnhv4MRZDJZjn532mBiYpLjuO82RSsjuw/a7t27UapUKYV1FhYWmgWYx/mmTZuGDz74IMc6S0tLlY5lY2OjcFwAWLFihULCC7xNsLO3qVWrltRf8F1ubm4AgFWrVmHYsGHYu3cvNm3ahEmTJmH//v2oV6+eRtd17949tG/fHp999hlmzpwJZ2dnHD9+HOHh4cjIyIC1tTUGDBiA4OBg7N69G/v27cPs2bOxYMECDB06VKX7QkSkKSaARO8IDAzEmzdvEB0djfr16wMAEhMTERMTg4oVKyp1DAcHB7i7u+PMmTNo3LgxgLc1RX///XeOAR3vMjc3R1ZWlkKZm5sbEhISIISQ+qlduHBB4Vyenp6Ijo6WzvXmzRucO3cONWvWBABUrFgRFhYWiI2NRZMmTZS6hrwEBgYiOjpaoez06dMKn2vWrImYmBiUL18+12P4+/sjLi4Ojx8/hru7OwDgzJkzBZ7b3d0dXl5euHPnDnr37p3rNjVr1sSmTZtQsmRJ2Nvb53msGjVqoEaNGpg4cSKCgoKwYcOGAhPAgq7r3LlzkMvlWLBgAUxM3nav3rx5c47tfHx88Omnn+LTTz/FxIkTsWLFCgwdOhTm5uYAkOMZICLSBSaARO9477330KlTJwwcOBA//vgj7OzsMGHCBJQqVQqdOnVS+jhDhw7F7NmzUb58eQQEBOC7777D8+fP8x1sULp0aRw9ehQ9evSAhYUFXF1d0bRpUzx9+hTz5s1Dt27dsHfvXuzZs0chuRk+fDjmzJmD9957DwEBAVi4cKHCXHJ2dnYYM2YMRo4cCblcjoYNGyI5ORknTpyAvb09QkNDlb6uYcOGoUGDBvj666/RqVMn/PHHHwrNvwAwZcoUtG/fHr6+vujWrRtMTExw8eJFXLlyBTNmzECrVq1Qrlw5hIaGYt68eXjx4gUmTZoEAAUOxpg2bRqGDRsGBwcHhISEID09HWfPnsXz588xatQo9O7dG/Pnz0enTp0wffp0eHt74/79+4iMjMS4ceOQmZmJ5cuXo2PHjvDy8kJMTAxu3ryJvn37FnjtBV1X+fLlkZmZie+++w4dOnTAiRMnsGzZMoVjjBgxAm3atEGFChXw/PlzHD58GIGBgQAAPz8/yGQy7Nq1C23btoWVlRVsbW2V/t4QEalEv10QifTvv4Mxnj17Jvr06SMcHByElZWVCA4OFjdu3JDWr1q1SmHQgxBCbN++Xbz745SZmSmGDBki7O3thZOTkxg/frz48MMPRY8ePfI876lTp0TVqlWFhYWFwrGWLl0qfHx8hI2Njejbt6+YOXOmwiCQzMxMMXz4cGFvby8cHR3FqFGjRN++fRUGnMjlcrF48WLh7+8vzMzMhJubmwgODhZHjhzJ877kNghECCFWrlwpvL29hZWVlejQoYP4+uuvc9yPvXv3ivr16wsrKythb28v6tSpI5YvXy6tv3btmmjQoIEwNzcXAQEBYufOnQKA2Lt3rxDif4NAzp8/n+P869evF9WrVxfm5ubCyclJNG7cWERGRkrr4+PjRd++fYWrq6uwsLAQZcuWFQMHDhTJyckiISFBdO7cWXh6egpzc3Ph5+cnpkyZIrKysvK8D6pc18KFC4Wnp6f03Kxdu1ZhYMeQIUNEuXLlhIWFhXBzcxN9+vQR//77r7T/9OnThYeHh5DJZCI0NFTh3OAgECLSIpkQOui4REQK5HI5AgMD0b17d4W3fxRlpUuXxogRIwrlNXknTpxAw4YNcevWLYXBNfQ/MpkM27dv1/gVf0REAOcBJNKJ+/fvY8WKFbhx4wYuX76Mzz77DHfv3kWvXr30HZpKxo8fD1tbWyQnJ2v1uNu3b8f+/ftx7949HDhwAIMGDUKDBg2Y/OXi008/ZVMwEWkdawCJdCAuLg49evTAlStXIIRA5cqVMWfOHGmghiG4f/++NOK4bNmy0sAGbVi7di1mzJiB2NhYuLq6omXLlliwYAFcXFy0dg5VVapUKc83gvz44495DjzRtSdPniAlJQXA2+mG3h0ZTUSkLiaARERQTHj/y93dPcfcgkREhowJIBEREVExwz6ARERERMUME0AiIiKiYoYJIBEREVExwwSQiIiIqJhhAkhERERUzDABJCIiIipmmAASERERFTP/B+hfFFA/u6jUAAAAAElFTkSuQmCC",
    time: "2021-12-31T21:00:00.000000000",
    level: 20,
    data: [
        [
            259117.703125,
            259117.296875,
            259118.921875,
            259122.578125,
            259128.265625,
            259135.578125,
            259145.328125,
            259154.65625,
            259163.1875
        ],
        [
            259128.671875,
            259127.046875,
            259127.859375,
            259129.890625,
            259133.953125,
            259140.859375,
            259149.796875,
            259159.125,
            259168.875
        ],
        [
            259139.640625,
            259137.609375,
            259137.203125,
            259138.421875,
            259141.265625,
            259146.140625,
            259153.4375,
            259162.78125,
            259172.9375
        ],
        [
            259152.21875,
            259149.796875,
            259148.171875,
            259148.171875,
            259149.796875,
            259152.625,
            259158.3125,
            259166.4375,
            259176.1875
        ],
        [
            259165.21875,
            259163.1875,
            259161.15625,
            259160.75,
            259161.15625,
            259162.78125,
            259166.84375,
            259172.9375,
            259180.65625
        ]
    ],
    units: "m**2 / s**2"
};

})()),
"[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useBoardStore": ()=>useBoardStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/config/test-data.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useBoardStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        userData: [],
        id_boardSelected: 0,
        loadData: ()=>{
            const data = localStorage.getItem("UserData.data");
            const lastBoardSelected = localStorage.getItem("UserData.boardSelected");
            if (data) {
                const b_selected = lastBoardSelected ? Number.parseInt(lastBoardSelected) : JSON.parse(data)[0].id;
                set((state)=>({
                        ...state,
                        userData: JSON.parse(data),
                        id_boardSelected: b_selected
                    }));
            } else {
                const newBoard = {
                    id: 0,
                    name: "Primer tablero",
                    charts: [],
                    lastChartId: 0
                };
                set((state)=>({
                        ...state,
                        userData: [
                            newBoard
                        ],
                        id_boardSelected: 0
                    }));
                localStorage.setItem("UserData.data", JSON.stringify([
                    newBoard
                ]));
                localStorage.setItem("UserData.boardSelected", newBoard.id.toString());
            }
        },
        addNewBoard: async (name)=>{
            try {
                const newBoard = {
                    id: get().userData.length,
                    name: name,
                    charts: [],
                    lastChartId: 0
                };
                const finalData = [
                    ...get().userData,
                    newBoard
                ];
                set((state)=>({
                        ...state,
                        userData: finalData,
                        id_boardSelected: newBoard.id
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(finalData));
                localStorage.setItem("UserData.boardSelected", newBoard.id.toString());
            } catch (error) {
                console.error(error);
            }
        },
        addNewChart: (boardFather, title, subtitle)=>{
            try {
                const newChart = {
                    id: boardFather.lastChartId + 1,
                    title: title,
                    subtitle: subtitle,
                    active: false,
                    backendData: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$test$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exampleData"],
                    typeChart: "area"
                };
                let finalData = [
                    ...get().userData
                ];
                finalData.map((boardLocal)=>{
                    if (boardLocal.id === boardFather.id) {
                        boardLocal.charts.push(newChart);
                        boardLocal.lastChartId = boardLocal.lastChartId + 1;
                    }
                    return boardLocal;
                });
                set((state)=>({
                        ...state,
                        userData: finalData
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(finalData));
            } catch (error) {
                console.error(error);
            }
        },
        updateBoard: (board, newName, newCharts, newLastChartId)=>{
            try {
                let newValues = board;
                if (newName) newValues.name = newName;
                if (newCharts) newValues.charts = newCharts;
                if (newLastChartId) newValues.lastChartId = newLastChartId;
                let finalData = [
                    ...get().userData
                ];
                finalData.map((boardLocal)=>{
                    if (boardLocal.id === board.id) {
                        board = newValues;
                    }
                    return boardLocal;
                });
                set((state)=>({
                        ...state,
                        userData: finalData
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(finalData));
            } catch (error) {
                console.error(error);
            }
        },
        updateChart: (boardFather, chart, backendData, typeChart, newTitle, newSubtitle)=>{
            try {
                let newValues = chart;
                if (backendData) newValues.backendData = backendData;
                if (typeChart) newValues.typeChart = typeChart;
                if (newTitle) newValues.title = newTitle;
                if (newSubtitle) newValues.subtitle = newSubtitle;
                let finalData = [
                    ...get().userData
                ];
                finalData.map((boardLocal)=>{
                    if (boardLocal.id === boardFather.id) {
                        boardFather.charts.map((chart)=>{
                            if (chart.id === newValues.id) {
                                chart = newValues;
                            }
                        });
                    }
                    return boardLocal;
                });
                set((state)=>({
                        ...state,
                        userData: finalData
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(finalData));
            } catch (error) {
                console.error(error);
            }
        },
        deleteBoard: (id)=>{
            try {
                const dataFilter = get().userData.filter((value)=>value.id !== id);
                set((state)=>({
                        ...state,
                        userData: dataFilter.map((board, index)=>{
                            board.id = index;
                            return board;
                        }),
                        id_boardSelected: id - 1
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(dataFilter));
                localStorage.setItem("UserData.boardSelected", (id - 1).toString());
            } catch (error) {
                console.error(error);
            }
        },
        deleteChart: (boardFather, chart)=>{
            try {
                const newData = get().userData.map((board)=>{
                    let finalBoard = board;
                    if (board.id === boardFather.id) {
                        finalBoard.charts = board.charts.filter((chartActual)=>chartActual.id !== chart.id);
                    }
                    board.charts.map((chart, index)=>{
                        chart.id = index;
                        return chart;
                    });
                    return finalBoard;
                });
                set((state)=>({
                        ...state,
                        userData: newData
                    }));
                localStorage.setItem("UserData.data", JSON.stringify(newData));
            } catch (error) {
                console.error(error);
            }
        },
        selectBoard: (id)=>{
            set((state)=>({
                    ...state,
                    id_boardSelected: id
                }));
            localStorage.setItem("UserData.boardSelected", id.toString());
        }
    }));

})()),
"[project]/components/Dashboard/Panel/board/modal-create-board.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-LT4XONRR.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function ModalCreateBoard(props) {
    _s();
    const { refresh } = props;
    const { addNewBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const { ModalCreateBoard, toggleModalCreateBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function ReadyButtonFunction() {
        if (title.trim() === "") addNewBoard("Nuevo Tablero");
        else addNewBoard(title);
        setTitle("");
        toggleModalCreateBoard(false);
        refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
            isOpen: ModalCreateBoard,
            onOpenChange: (value)=>{
                toggleModalCreateBoard(value);
                refresh();
            },
            onKeyDown: (event)=>{
                if (ModalCreateBoard && event.key === "Enter") ReadyButtonFunction();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                        children: "Nuevo Tablero"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            autoFocus: true,
                            label: "Titulo del tablero",
                            placeholder: "Ingresa un nombre para tu tablero",
                            value: title,
                            onValueChange: (value)=>setTitle(value),
                            variant: "underlined"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "danger",
                                variant: "flat",
                                onPress: ()=>{
                                    toggleModalCreateBoard(false);
                                    setTitle("");
                                    refresh();
                                },
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "primary",
                                onPress: ()=>{
                                    ReadyButtonFunction();
                                },
                                children: "Listo"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/modal-create-board.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ModalCreateBoard, "1GNs5BG/zBCkOIT6WAuxDpPLhMw=");
_c = ModalCreateBoard;
const __TURBOPACK__default__export__ = ModalCreateBoard;
var _c;
__turbopack_refresh__.register(_c, "ModalCreateBoard");

})()),
"[project]/components/Dashboard/Panel/board/modal-create-chart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-LT4XONRR.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function ModalCreateChart(props) {
    _s();
    const { refresh } = props;
    const { userData, id_boardSelected, addNewChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const { ModalCreateChart, toggleModalCreateChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subtitle, setSubtitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function ReadyButtonFunction() {
        if (title.trim() === "") addNewChart(userData[id_boardSelected], "Nuevo Tablero", "(sin descripción)");
        else addNewChart(userData[id_boardSelected], title, subtitle);
        setTitle("");
        setSubtitle("");
        toggleModalCreateChart(false);
        refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
            isOpen: ModalCreateChart,
            onOpenChange: (value)=>{
                toggleModalCreateChart(value);
                refresh();
            },
            onKeyDown: (event)=>{
                if (ModalCreateChart && event.key === "Enter") ReadyButtonFunction();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                        children: "Nuevo Gráfico"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                autoFocus: true,
                                label: "Titulo del gráfico",
                                placeholder: "Ingresa un nombre para tu gráfico",
                                value: title,
                                onValueChange: (value)=>setTitle(value),
                                variant: "underlined"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                                label: "Subtitulo del gráfico",
                                placeholder: "Ingresa un subtitulo para tu gráfico",
                                value: subtitle,
                                onValueChange: (value)=>setSubtitle(value),
                                variant: "underlined"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "danger",
                                variant: "flat",
                                onPress: ()=>{
                                    toggleModalCreateChart(false);
                                    setTitle("");
                                    setSubtitle("");
                                    refresh();
                                },
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "primary",
                                onPress: ()=>{
                                    ReadyButtonFunction();
                                },
                                children: "Listo"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/modal-create-chart.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ModalCreateChart, "YfgYhA29YQJ+dIdVDte5zsz0j1s=");
_c = ModalCreateChart;
const __TURBOPACK__default__export__ = ModalCreateChart;
var _c;
__turbopack_refresh__.register(_c, "ModalCreateChart");

})()),
"[project]/components/Dashboard/Panel/board/modal-edit-board.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-P2T5LMDM.mjs [app-client] (ecmascript) <export modal_default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-EPDLEVDR.mjs [app-client] (ecmascript) <export modal_body_default as ModalBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-LT4XONRR.mjs [app-client] (ecmascript) <export modal_content_default as ModalContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-QY5NICTW.mjs [app-client] (ecmascript) <export modal_footer_default as ModalFooter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/react/node_modules/@nextui-org/modal/dist/chunk-3S23ARPO.mjs [app-client] (ecmascript) <export modal_header_default as ModalHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function ModalEditBoard(props) {
    _s();
    const { refresh } = props;
    const { userData, id_boardSelected, addNewBoard, updateBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const { ModalEditBoard, toggleModalEditBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function ReadyButtonFunction() {
        if (title.trim() === "") addNewBoard("Nuevo Tablero");
        else updateBoard(userData[id_boardSelected], title);
        setTitle("");
        toggleModalEditBoard(false);
        refresh();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$P2T5LMDM$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_default__as__Modal$3e$__["Modal"], {
            isOpen: ModalEditBoard,
            onOpenChange: (value)=>{
                toggleModalEditBoard(value);
                refresh();
            },
            onKeyDown: (event)=>{
                if (ModalEditBoard && event.key === "Enter") ReadyButtonFunction();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$LT4XONRR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_content_default__as__ModalContent$3e$__["ModalContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$3S23ARPO$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_header_default__as__ModalHeader$3e$__["ModalHeader"], {
                        children: "Configuración"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$EPDLEVDR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_body_default__as__ModalBody$3e$__["ModalBody"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
                            autoFocus: true,
                            label: "Titulo del tablero",
                            placeholder: "Ingresa un nuevo nombre para tu tablero",
                            value: title,
                            onValueChange: (value)=>setTitle(value),
                            variant: "underlined"
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$react$2f$node_modules$2f40$nextui$2d$org$2f$modal$2f$dist$2f$chunk$2d$QY5NICTW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__modal_footer_default__as__ModalFooter$3e$__["ModalFooter"], {
                        className: "flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "danger",
                                variant: "flat",
                                onPress: ()=>{
                                    toggleModalEditBoard(false);
                                    setTitle("");
                                    refresh();
                                },
                                children: "Cancelar"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                color: "primary",
                                onPress: ()=>{
                                    ReadyButtonFunction();
                                },
                                children: "Listo"
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/modal-edit-board.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(ModalEditBoard, "1GNs5BG/zBCkOIT6WAuxDpPLhMw=");
_c = ModalEditBoard;
const __TURBOPACK__default__export__ = ModalEditBoard;
var _c;
__turbopack_refresh__.register(_c, "ModalEditBoard");

})()),
"[project]/components/icons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AddChartIcon": ()=>AddChartIcon,
    "AddIcon": ()=>AddIcon,
    "BarChartOff": ()=>BarChartOff,
    "DeleteOffOutline": ()=>DeleteOffOutline,
    "DeleteOutline": ()=>DeleteOutline,
    "DiscordIcon": ()=>DiscordIcon,
    "Edit": ()=>Edit,
    "GithubIcon": ()=>GithubIcon,
    "HeartFilledIcon": ()=>HeartFilledIcon,
    "Logo": ()=>Logo,
    "MoonFilledIcon": ()=>MoonFilledIcon,
    "NextUILogo": ()=>NextUILogo,
    "SearchIcon": ()=>SearchIcon,
    "SunFilledIcon": ()=>SunFilledIcon,
    "TwitterIcon": ()=>TwitterIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Logo = ({ size = 36, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        height: size || height,
        viewBox: "0 0 32 32",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            clipRule: "evenodd",
            d: "M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z",
            fill: "currentColor",
            fillRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this);
_c = Logo;
const DiscordIcon = ({ size = 24, width, height, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: size || height,
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
};
_c1 = DiscordIcon;
const TwitterIcon = ({ size = 24, width, height, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: size || height,
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 62,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
};
_c2 = TwitterIcon;
const GithubIcon = ({ size = 24, width, height, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        height: size || height,
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            clipRule: "evenodd",
            d: "M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z",
            fill: "currentColor",
            fillRule: "evenodd"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
};
_c3 = GithubIcon;
const MoonFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z",
            fill: "currentColor"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 108,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 99,
        columnNumber: 3
    }, this);
_c4 = MoonFilledIcon;
const SunFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: "currentColor",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 12a7 7 0 11-7-7 7 7 0 017 7z"
                }, void 0, false, {
                    fileName: "[project]/components/icons.tsx",
                    lineNumber: 131,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"
                }, void 0, false, {
                    fileName: "[project]/components/icons.tsx",
                    lineNumber: 132,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 130,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 121,
        columnNumber: 3
    }, this);
_c5 = SunFilledIcon;
const HeartFilledIcon = ({ size = 24, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        focusable: "false",
        height: size || height,
        role: "presentation",
        viewBox: "0 0 24 24",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z",
            fill: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 152,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 143,
        columnNumber: 3
    }, this);
_c6 = HeartFilledIcon;
const SearchIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 173,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 22L20 20",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 180,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this);
_c7 = SearchIcon;
const AddIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        height: "24px",
        viewBox: "0 -960 960 960",
        width: "24px",
        fill: "#e8eaed",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 198,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 191,
        columnNumber: 3
    }, this);
_c8 = AddIcon;
const NextUILogo = (props)=>{
    const { width, height = 40 } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        height: height,
        viewBox: "0 0 161 32",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "fill-black dark:fill-white",
                d: "M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "fill-black dark:fill-white",
                d: "M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                className: "fill-white dark:fill-black",
                d: "M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
};
_c9 = NextUILogo;
function DeleteOffOutline(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width,
        height: props.height,
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M2 5.27L3.28 4L5 5.72l.28.28l1 1l2 2L16 16.72l2 2l2 2L18.73 22l-1.46-1.46c-.34.29-.77.46-1.27.46H8c-1.1 0-2-.9-2-2V9.27zM8 19h7.73L8 11.27zM18 7v9.18l-2-2V9h-5.18l-2-2zm-2.5-3H19v2H7.82l-2-2H8.5l1-1h5z"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 239,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 232,
        columnNumber: 5
    }, this);
}
_c10 = DeleteOffOutline;
function DeleteOutline(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width,
        height: props.height,
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_c11 = DeleteOutline;
function Edit(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width,
        height: props.height,
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "m18.988 2.012l3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287l-3-3L8 13z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M19 19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
}
_c12 = Edit;
function AddChartIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width,
        height: props.height,
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M11 7h2v10h-2zm4 6h2v4h-2z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fill: "currentColor",
                d: "M7 10h2v7H7zm12-5V3h-2v2h-2v2h2v2h2V7h2V5z"
            }, void 0, false, {
                fileName: "[project]/components/icons.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
_c13 = AddChartIcon;
function BarChartOff(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: props.width,
        height: props.height,
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M4 20V9h4v11zm6 0V10l4 4v6zm4-8.85l-4-4V4h4zm6 6l-4-4V13h4zm-.225 5.475l-18.4-18.4L2.8 2.8l18.4 18.4z"
        }, void 0, false, {
            fileName: "[project]/components/icons.tsx",
            lineNumber: 316,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/icons.tsx",
        lineNumber: 309,
        columnNumber: 5
    }, this);
}
_c14 = BarChartOff;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_refresh__.register(_c, "Logo");
__turbopack_refresh__.register(_c1, "DiscordIcon");
__turbopack_refresh__.register(_c2, "TwitterIcon");
__turbopack_refresh__.register(_c3, "GithubIcon");
__turbopack_refresh__.register(_c4, "MoonFilledIcon");
__turbopack_refresh__.register(_c5, "SunFilledIcon");
__turbopack_refresh__.register(_c6, "HeartFilledIcon");
__turbopack_refresh__.register(_c7, "SearchIcon");
__turbopack_refresh__.register(_c8, "AddIcon");
__turbopack_refresh__.register(_c9, "NextUILogo");
__turbopack_refresh__.register(_c10, "DeleteOffOutline");
__turbopack_refresh__.register(_c11, "DeleteOutline");
__turbopack_refresh__.register(_c12, "Edit");
__turbopack_refresh__.register(_c13, "AddChartIcon");
__turbopack_refresh__.register(_c14, "BarChartOff");

})()),
"[project]/components/Dashboard/Panel/board/layout/search.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function Search(props) {
    const { filterQuery, setFilterQuery } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
        startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchIcon"], {}, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/layout/search.tsx",
            lineNumber: 14,
            columnNumber: 21
        }, void 0),
        isClearable: true,
        className: "w-1/6",
        placeholder: "Buscar gráfico...",
        value: filterQuery,
        onValueChange: (newValue)=>{
            setFilterQuery(newValue);
        }
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/layout/search.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Search;
const __TURBOPACK__default__export__ = Search;
var _c;
__turbopack_refresh__.register(_c, "Search");

})()),
"[project]/components/Dashboard/Panel/add-chart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function ButtonAddChart(props) {
    const { refresh } = props;
    const { toggleModalCreateChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex self-center mr-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
            size: "lg",
            color: "primary",
            onPress: ()=>{
                toggleModalCreateChart(true);
                refresh();
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center gap-3 p-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddChartIcon"], {
                        width: 28
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/add-chart.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "Nuevo Gráfico"
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/add-chart.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/add-chart.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/add-chart.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/add-chart.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ButtonAddChart;
const __TURBOPACK__default__export__ = ButtonAddChart;
var _c;
__turbopack_refresh__.register(_c, "ButtonAddChart");

})()),
"[project]/components/Dashboard/Panel/board/layout/title.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function TitleCardBoard() {
    const { userData, id_boardSelected } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "text-5xl font-semibold p-3",
        children: userData[id_boardSelected].name
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/layout/title.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = TitleCardBoard;
const __TURBOPACK__default__export__ = TitleCardBoard;
var _c;
__turbopack_refresh__.register(_c, "TitleCardBoard");

})()),
"[project]/public/add-chart.svg [app-client] (static)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/add-chart.3005c547.svg");
})()),
"[project]/public/add-chart.svg.mjs { IMAGE => \"[project]/public/add-chart.svg [app-client] (static)\" } [app-client] (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$add$2d$chart$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/add-chart.svg [app-client] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$add$2d$chart$2e$svg__$5b$app$2d$client$5d$__$28$static$29$__["default"],
    width: 24,
    height: 24,
    blurDataURL: null,
    blurWidth: 0,
    blurHeight: 0
};

})()),
"[project]/components/Dashboard/Panel/board/Charts-Cards/no-chart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$add$2d$chart$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$add$2d$chart$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/public/add-chart.svg.mjs { IMAGE => "[project]/public/add-chart.svg [app-client] (static)" } [app-client] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function NoChartCard(props) {
    const { refresh } = props;
    const { toggleModalCreateChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
        className: "h-72 w-full",
        shadow: "sm",
        isPressable: true,
        onPress: ()=>{
            toggleModalCreateChart(true);
            refresh();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
            className: "flex w-full justify-center items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                alt: "addChartIcon",
                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$add$2d$chart$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$add$2d$chart$2e$svg__$5b$app$2d$client$5d$__$28$static$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                width: 180,
                height: 180
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/no-chart.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/no-chart.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, "NoChart", false, {
        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/no-chart.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = NoChartCard;
const __TURBOPACK__default__export__ = NoChartCard;
var _c;
__turbopack_refresh__.register(_c, "NoChartCard");

})()),
"[project]/components/Graphic/ventana-grafico.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>VentanaGrafico
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
function VentanaGrafico(props) {
    _s();
    const [Chart, setChart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const hasType = typeof props?.type !== "undefined";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __turbopack_require__("[project]/node_modules/react-apexcharts/dist/react-apexcharts.min.js [app-client] (ecmascript, async loader)")(__turbopack_import__).then((mod)=>{
            setChart(()=>mod.default);
        });
    }, []);
    return hasType && Chart && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Chart, {
        ...props
    }, void 0, false, {
        fileName: "[project]/components/Graphic/ventana-grafico.tsx",
        lineNumber: 13,
        columnNumber: 30
    }, this);
}
_s(VentanaGrafico, "PGiTkjF0WqM+4q9RIQLg6gHmhUY=");
_c = VentanaGrafico;
var _c;
__turbopack_refresh__.register(_c, "VentanaGrafico");

})()),
"[project]/types/chart.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ChartConfigInteractive": ()=>ChartConfigInteractive,
    "ChartConfigNoInteractive": ()=>ChartConfigNoInteractive
});
function ChartConfigInteractive(props) {
    const { data, theme, typeChart, categories, colors } = props;
    return {
        series: data,
        options: {
            chart: {
                height: "98%",
                width: "98%",
                type: typeChart,
                zoom: {
                    enabled: true,
                    type: "xy"
                }
            },
            plotOptions: {
                heatmap: {
                    radius: 6
                }
            },
            colors: colors,
            xaxis: {
                type: "category",
                categories: categories,
                title: {
                    text: "Longitud"
                },
                decimalsInFloat: 1
            },
            yaxis: {
                title: {
                    text: "Latitud"
                },
                decimalsInFloat: 1
            },
            dataLabels: {
                enabled: false
            },
            noData: {
                text: "Cargando..."
            },
            theme: {
                mode: theme
            }
        }
    };
}
_c = ChartConfigInteractive;
function ChartConfigNoInteractive(props) {
    const { data, typeChart, categories, colors } = props;
    return {
        series: data,
        options: {
            chart: {
                height: "98%",
                width: "98%",
                type: typeChart,
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: false
                }
            },
            colors: colors,
            xaxis: {
                type: "category",
                categories: categories,
                title: {
                    text: "Longitud"
                },
                decimalsInFloat: 1
            },
            yaxis: {
                title: {
                    text: "Latitud"
                },
                decimalsInFloat: 1
            },
            tooltip: {
                enabled: false
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: false
            },
            noData: {
                text: "Cargando..."
            }
        }
    };
}
_c1 = ChartConfigNoInteractive;
var _c, _c1;
__turbopack_refresh__.register(_c, "ChartConfigInteractive");
__turbopack_refresh__.register(_c1, "ChartConfigNoInteractive");

})()),
"[project]/utils/TransformToSeries.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "TransformToSeries": ()=>TransformToSeries
});
function TransformToSeries(data) {
    const firstData = [
        ...data.data
    ];
    const finalData = firstData.map((latitud, index)=>{
        return {
            name: data.latitude[index].toString(),
            data: latitud.map((element, i)=>{
                return {
                    x: data.longitude[i].toString(),
                    y: element
                };
            })
        };
    });
    return finalData;
}
_c = TransformToSeries;
var _c;
__turbopack_refresh__.register(_c, "TransformToSeries");

})()),
"[project]/utils/GenerateChart.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "CreateEmptyApexChart": ()=>CreateEmptyApexChart,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/types/chart.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$TransformToSeries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/TransformToSeries.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function CreateEmptyApexChart() {
    const emptyData = {
        latitude: [],
        longitude: [],
        image: "",
        data: [],
        time: "",
        units: ""
    };
    const { Interactive, NoInteractive } = GenerateApexChart(emptyData, "bar");
    return {
        Interactive,
        NoInteractive
    };
}
_c = CreateEmptyApexChart;
function GenerateApexChart(data, typeChart, options) {
    const seriesData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$TransformToSeries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransformToSeries"])(data);
    const labels = data.longitude.map((l)=>{
        return l.toString();
    });
    const InteractiveChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartConfigInteractive"])({
        data: seriesData,
        theme: options?.theme?.theme === "light" ? "light" : "dark",
        typeChart: typeChart,
        categories: labels,
        colors: options?.color ? options?.color : [
            "#858585"
        ]
    });
    const NoInteractiveChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$chart$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChartConfigNoInteractive"])({
        data: seriesData,
        theme: options?.theme?.theme === "light" ? "light" : "dark",
        typeChart: typeChart,
        categories: labels,
        colors: options?.color ? options?.color : [
            "#858585"
        ]
    });
    return {
        Interactive: InteractiveChart,
        NoInteractive: NoInteractiveChart
    };
}
_c1 = GenerateApexChart;
const __TURBOPACK__default__export__ = GenerateApexChart;
var _c, _c1;
__turbopack_refresh__.register(_c, "CreateEmptyApexChart");
__turbopack_refresh__.register(_c1, "GenerateApexChart");

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
"[project]/components/Dashboard/Panel/chart-image.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$ventana$2d$grafico$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Graphic/ventana-grafico.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$GenerateChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/GenerateChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/chartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function ChartImage() {
    _s();
    const { chartSelected, typeChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartStore"].getState();
    const actualTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const color = [
        "#ffcd6d"
    ];
    const { NoInteractive } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$GenerateChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(chartSelected.backendData, typeChart === "image" ? "bar" : typeChart, {
        color: color,
        theme: actualTheme
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Graphic$2f$ventana$2d$grafico$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "flex w-full h-full p-2",
            options: NoInteractive.options,
            series: NoInteractive.series,
            type: NoInteractive.options.chart?.type,
            width: NoInteractive.options.chart?.width,
            height: NoInteractive.options.chart?.height
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/chart-image.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/chart-image.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(ChartImage, "+uXmZzVdVAH9yHyB3cPOSU4IF58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ChartImage;
const __TURBOPACK__default__export__ = ChartImage;
var _c;
__turbopack_refresh__.register(_c, "ChartImage");

})()),
"[project]/components/Dashboard/Panel/board/Charts-Cards/image-chart-card.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$NK4BRF7C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/image/dist/chunk-NK4BRF7C.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/progress/dist/chunk-T6O3OHG3.mjs [app-client] (ecmascript) <export circular_progress_default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
function ImageChartCard(props) {
    _s();
    const { chart } = props;
    const [imageSrc, setImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchImage = async ()=>{
            try {
                const response = chart.backendData;
                setImageSrc(`data:image/png;base64,${response.image}`);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchImage();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-full justify-center items-center",
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__["CircularProgress"], {}, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/image-chart-card.tsx",
            lineNumber: 33,
            columnNumber: 18
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$NK4BRF7C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
            src: imageSrc
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/image-chart-card.tsx",
            lineNumber: 33,
            columnNumber: 41
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/image-chart-card.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(ImageChartCard, "120FNB89Bff670PD6MK35qOIA+4=");
_c = ImageChartCard;
const __TURBOPACK__default__export__ = ImageChartCard;
var _c;
__turbopack_refresh__.register(_c, "ImageChartCard");

})()),
"[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-J333S7JQ.mjs [app-client] (ecmascript) <export card_header_default as CardHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$chart$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/chart-image.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/chartStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$image$2d$chart$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/Charts-Cards/image-chart-card.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use-client";
;
;
;
;
;
;
;
;
;
;
function NormalCard(props) {
    _s();
    const { refresh, index, chart } = props;
    const { userData, id_boardSelected, deleteChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const { toggleModalConfirm } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    const { selectChart } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$chartStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChartStore"].getState();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "hover:cursor-pointer",
        whileHover: {
            scale: 1.02
        },
        whileTap: {
            scale: 0.9
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
            className: "h-72 w-full",
            shadow: "sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$J333S7JQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_header_default__as__CardHeader$3e$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row w-full justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex grow flex-col",
                                onClick: ()=>{
                                    selectChart(chart);
                                    router.push("/visualizer");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-semibold text-left",
                                        children: chart.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        children: chart.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                                isIconOnly: true,
                                color: "danger",
                                variant: "light",
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    toggleModalConfirm(true, "¿Estás seguro en eliminar este gráfico?", ()=>{
                                        deleteChart(userData[id_boardSelected], chart);
                                        refresh();
                                    });
                                    refresh();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteOutline"], {
                                    width: 28
                                }, void 0, false, {
                                    fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                    className: "flex w-full h-full justify-center items-center",
                    onClick: ()=>{
                        selectChart(chart);
                        router.push("/visualizer");
                    },
                    children: !chart.active ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full h-full justify-center items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChartOff"], {
                            width: 100
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                            lineNumber: 78,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-5/6 h-5/6 justify-center items-center",
                        children: chart.typeChart !== "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$chart$2d$image$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                            lineNumber: 83,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$image$2d$chart$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            chart: chart
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                            lineNumber: 85,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, index, true, {
            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(NormalCard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = NormalCard;
const __TURBOPACK__default__export__ = NormalCard;
var _c;
__turbopack_refresh__.register(_c, "NormalCard");

})()),
"[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$no$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/Charts-Cards/no-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$normal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/Charts-Cards/normal-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/render/dom/motion.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function ChartsCards(props) {
    const { refresh, charts } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "container grid grid-cols-4 gap-6 w-full",
            children: [
                charts.map((chart, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index / 8
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$normal$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            refresh: refresh,
                            index: index,
                            chart: chart
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this)),
                charts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$no$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        refresh: refresh
                    }, "NoCard", false, {
                        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ChartsCards;
const __TURBOPACK__default__export__ = ChartsCards;
var _c;
__turbopack_refresh__.register(_c, "ChartsCards");

})()),
"[project]/components/Dashboard/Panel/board/has-board.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$layout$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/layout/search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$add$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/add-chart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$layout$2f$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/layout/title.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$charts$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/Charts-Cards/charts-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
function BoardPanel(props) {
    _s();
    const { refresh } = props;
    const { userData, id_boardSelected } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const [filterQuery, setFilterQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [dataFiltered, setDataFiltered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userData[id_boardSelected].charts);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (filterQuery === "") setDataFiltered(userData[id_boardSelected].charts);
        else setDataFiltered(userData[id_boardSelected].charts.filter((chart)=>chart.title.toLowerCase().trim().includes(filterQuery.toLowerCase().trim()) || chart.subtitle.toLowerCase().trim().includes(filterQuery.toLowerCase().trim())));
    }, [
        filterQuery,
        id_boardSelected,
        userData
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-row w-full mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col w-full gap-2 justify-items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$layout$2f$title$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$layout$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                filterQuery: filterQuery,
                                setFilterQuery: setFilterQuery
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$add$2d$chart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        refresh: refresh
                    }, void 0, false, {
                        fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$Charts$2d$Cards$2f$charts$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                refresh: refresh,
                charts: dataFiltered
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard/Panel/board/has-board.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(BoardPanel, "8mUTM8ZQLLE2ZB37XnTceCEwKNM=");
_c = BoardPanel;
const __TURBOPACK__default__export__ = BoardPanel;
var _c;
__turbopack_refresh__.register(_c, "BoardPanel");

})()),
"[project]/components/Dashboard/Panel/main-panel.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$has$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Panel/board/has-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/progress/dist/chunk-T6O3OHG3.mjs [app-client] (ecmascript) <export circular_progress_default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
function MainPanel(props) {
    _s();
    const { refresh } = props;
    const { userData, id_boardSelected } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (userData[id_boardSelected]) setIsLoading(false);
    }, [
        id_boardSelected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex sm:flex-row flex-col basis-11/12 gap-6 w-full h-full -mt-16",
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$progress$2f$dist$2f$chunk$2d$T6O3OHG3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__circular_progress_default__as__CircularProgress$3e$__["CircularProgress"], {
            className: "flex w-full h-full justify-center self-center"
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/main-panel.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Panel$2f$board$2f$has$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            refresh: refresh
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Panel/main-panel.tsx",
            lineNumber: 27,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Panel/main-panel.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(MainPanel, "Yt82d/dvZsn5nYh5sqDQjv+rJ38=");
_c = MainPanel;
const __TURBOPACK__default__export__ = MainPanel;
var _c;
__turbopack_refresh__.register(_c, "MainPanel");

})()),
"[project]/components/Dashboard/Sidebar/add-new-board.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function ButtonAddBoard(props) {
    const { refresh } = props;
    const { toggleModalCreateBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
            color: "primary",
            className: "w-full text-base",
            onPress: ()=>{
                toggleModalCreateBoard(true);
                refresh();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddIcon"], {
                    size: 16,
                    className: "mr-2"
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/add-new-board.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                "Nuevo tablero"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Dashboard/Sidebar/add-new-board.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Sidebar/add-new-board.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = ButtonAddBoard;
const __TURBOPACK__default__export__ = ButtonAddBoard;
var _c;
__turbopack_refresh__.register(_c, "ButtonAddBoard");

})()),
"[project]/components/Dashboard/Sidebar/board-button.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/modalStore.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
function BoardButton(props) {
    _s();
    const { id, board, refresh } = props;
    const { id_boardSelected, selectBoard, deleteBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    const { toggleModalConfirm, toggleModalEditBoard } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$modalStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getState();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (id === id_boardSelected) setActive(true);
        else setActive(false);
    }, [
        active,
        id_boardSelected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-1 justify-center",
        children: [
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                isIconOnly: true,
                variant: "light",
                color: "danger",
                onPress: ()=>{
                    if (id > 0) {
                        toggleModalConfirm(true, "¿Estás seguro de eliminar este tablero?", ()=>{
                            deleteBoard(id);
                            refresh();
                        });
                        refresh();
                    }
                },
                children: id > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteOutline"], {
                    width: 28
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteOffOutline"], {
                    width: 28
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                className: "w-44 text-center",
                variant: active ? "bordered" : "light",
                color: "primary",
                onClick: ()=>{
                    selectBoard(id);
                    setActive(true);
                    refresh();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "w-full text-center text-pretty",
                    children: board.name
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                isIconOnly: true,
                variant: "light",
                color: "primary",
                onPress: ()=>{
                    toggleModalEditBoard(true);
                    refresh();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Edit"], {
                    width: 28
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard/Sidebar/board-button.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(BoardButton, "bmG2JTygrN+PZT3BxK5E30OQ5KE=");
_c = BoardButton;
const __TURBOPACK__default__export__ = BoardButton;
var _c;
__turbopack_refresh__.register(_c, "BoardButton");

})()),
"[project]/components/Dashboard/Sidebar/board-list.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/utils/Stores/boardStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$board$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Sidebar/board-button.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function BoardList(props) {
    const { refresh } = props;
    const { userData } = __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$Stores$2f$boardStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBoardStore"].getState();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-col space-y-2",
        children: userData.map((board, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$board$2d$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    id: index,
                    board: board,
                    refresh: refresh
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Sidebar/board-list.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, index, false, {
                fileName: "[project]/components/Dashboard/Sidebar/board-list.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Sidebar/board-list.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = BoardList;
const __TURBOPACK__default__export__ = BoardList;
var _c;
__turbopack_refresh__.register(_c, "BoardList");

})()),
"[project]/components/Dashboard/Sidebar/sidebar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$add$2d$new$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Sidebar/add-new-board.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$NK4BRF7C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/image/dist/chunk-NK4BRF7C.mjs [app-client] (ecmascript) <export image_default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-H4VOEXHF.mjs [app-client] (ecmascript) <export card_default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__ = __turbopack_import__("[project]/node_modules/@nextui-org/card/dist/chunk-5ALFRFZW.mjs [app-client] (ecmascript) <export card_body_default as CardBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$board$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/Dashboard/Sidebar/board-list.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function Sidebar(props) {
    const { refresh } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex max-w-80 h-full basis-1/12 px-6 mr-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$H4VOEXHF$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_default__as__Card$3e$__["Card"], {
            shadow: "md",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$card$2f$dist$2f$chunk$2d$5ALFRFZW$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__card_body_default__as__CardBody$3e$__["CardBody"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex w-full mb-8 justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$nextui$2d$org$2f$image$2f$dist$2f$chunk$2d$NK4BRF7C$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__image_default__as__Image$3e$__["Image"], {
                                src: "/logo.png",
                                alt: "Di-Dema Logo",
                                width: 50,
                                height: 50
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$board$2d$list$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                refresh: refresh
                            }, void 0, false, {
                                fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Sidebar$2f$add$2d$new$2d$board$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            refresh: refresh
                        }, void 0, false, {
                            fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                    lineNumber: 21,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Dashboard/Sidebar/sidebar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Sidebar;
const __TURBOPACK__default__export__ = Sidebar;
var _c;
__turbopack_refresh__.register(_c, "Sidebar");

})()),
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
            className: "flex flex-row min-h-[720] w-full",
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
                    className: "flex flex-row w-full h-full",
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

//# sourceMappingURL=_107313._.js.map