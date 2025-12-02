(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/apollo-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/core/ApolloClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/cache/inmemory/inMemoryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@apollo/client/link/http/HttpLink.js [app-client] (ecmascript)");
"use client";
;
const httpLink = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$link$2f$http$2f$HttpLink$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HttpLink"]({
    uri: "http://localhost:4000/"
});
const client = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$core$2f$ApolloClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApolloClient"]({
    link: httpLink,
    cache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$apollo$2f$client$2f$cache$2f$inmemory$2f$inMemoryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InMemoryCache"]()
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/new-game/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewGamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/apollo-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ADD_GAME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  mutation AddGame(
    $title: String!
    $platform: String!
    $description: String
    $genre: String
    $releaseDate: String
  ) {
    addGame(
      title: $title
      platform: $platform
      description: $description
      genre: $genre
      releaseDate: $releaseDate
    ) {
      id
      title
    }
  }
`;
function NewGamePage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(53);
    if ($[0] !== "6003ace9580836e5a61cc28fd738e70ef77c75253e94e5ad8935a2e7b475dffc") {
        for(let $i = 0; $i < 53; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6003ace9580836e5a61cc28fd738e70ef77c75253e94e5ad8935a2e7b475dffc";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            title: "",
            platform: "",
            description: "",
            genre: "",
            releaseDate: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    if ($[2] !== form) {
        t1 = function updateField(field, value) {
            setForm({
                ...form,
                [field]: value
            });
        };
        $[2] = form;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const updateField = t1;
    let t2;
    if ($[4] !== form) {
        t2 = async function submitForm(e) {
            e.preventDefault();
            ;
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$apollo$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["client"].mutate({
                    mutation: ADD_GAME,
                    variables: form
                });
                if (data) {
                    setMessage(`Game added: ${data.addGame.title}`);
                    setForm({
                        title: "",
                        platform: "",
                        description: "",
                        genre: "",
                        releaseDate: ""
                    });
                }
            } catch (t3) {
                const err = t3;
                console.error(err);
                setMessage("Error adding game");
            }
        };
        $[4] = form;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const submitForm = t2;
    let t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Add New Game"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[6] = t3;
        $[7] = t4;
    } else {
        t3 = $[6];
        t4 = $[7];
    }
    let t5;
    if ($[8] !== message) {
        t5 = message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                padding: "10px",
                background: "#e0ffe0",
                borderRadius: "6px"
            },
            children: message
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 124,
            columnNumber: 21
        }, this);
        $[8] = message;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        };
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== updateField) {
        t7 = ({
            "NewGamePage[<input>.onChange]": (e_0)=>updateField("title", e_0.target.value)
        })["NewGamePage[<input>.onChange]"];
        $[11] = updateField;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            padding: "10px"
        };
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] !== form.title || $[15] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Title",
            value: form.title,
            onChange: t7,
            required: true,
            style: t8
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[14] = form.title;
        $[15] = t7;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== updateField) {
        t10 = ({
            "NewGamePage[<input>.onChange]": (e_1)=>updateField("platform", e_1.target.value)
        })["NewGamePage[<input>.onChange]"];
        $[17] = updateField;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            padding: "10px"
        };
        $[19] = t11;
    } else {
        t11 = $[19];
    }
    let t12;
    if ($[20] !== form.platform || $[21] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Platform",
            value: form.platform,
            onChange: t10,
            required: true,
            style: t11
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[20] = form.platform;
        $[21] = t10;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== updateField) {
        t13 = ({
            "NewGamePage[<input>.onChange]": (e_2)=>updateField("genre", e_2.target.value)
        })["NewGamePage[<input>.onChange]"];
        $[23] = updateField;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            padding: "10px"
        };
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== form.genre || $[27] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Genre",
            value: form.genre,
            onChange: t13,
            style: t14
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[26] = form.genre;
        $[27] = t13;
        $[28] = t15;
    } else {
        t15 = $[28];
    }
    let t16;
    if ($[29] !== updateField) {
        t16 = ({
            "NewGamePage[<input>.onChange]": (e_3)=>updateField("releaseDate", e_3.target.value)
        })["NewGamePage[<input>.onChange]"];
        $[29] = updateField;
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            padding: "10px"
        };
        $[31] = t17;
    } else {
        t17 = $[31];
    }
    let t18;
    if ($[32] !== form.releaseDate || $[33] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Release Date",
            value: form.releaseDate,
            onChange: t16,
            style: t17
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[32] = form.releaseDate;
        $[33] = t16;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== updateField) {
        t19 = ({
            "NewGamePage[<textarea>.onChange]": (e_4)=>updateField("description", e_4.target.value)
        })["NewGamePage[<textarea>.onChange]"];
        $[35] = updateField;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            padding: "10px"
        };
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] !== form.description || $[39] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "Description",
            value: form.description,
            onChange: t19,
            rows: 4,
            style: t20
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[38] = form.description;
        $[39] = t19;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            style: {
                padding: "12px",
                backgroundColor: "#8403fc",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px"
            },
            children: "Add Game"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== submitForm || $[43] !== t12 || $[44] !== t15 || $[45] !== t18 || $[46] !== t21 || $[47] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submitForm,
            style: t6,
            children: [
                t9,
                t12,
                t15,
                t18,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[42] = submitForm;
        $[43] = t12;
        $[44] = t15;
        $[45] = t18;
        $[46] = t21;
        $[47] = t9;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/games",
            style: {
                marginTop: "20px",
                display: "inline-block"
            },
            children: "← Back to Game List"
        }, void 0, false, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t23 || $[51] !== t5) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            style: t3,
            children: [
                t4,
                t5,
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/new-game/page.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        $[50] = t23;
        $[51] = t5;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    return t25;
}
_s(NewGamePage, "n3VsnQmudsm+iRB+gx6mbpOLbmI=");
_c = NewGamePage;
var _c;
__turbopack_context__.k.register(_c, "NewGamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7ba49630._.js.map