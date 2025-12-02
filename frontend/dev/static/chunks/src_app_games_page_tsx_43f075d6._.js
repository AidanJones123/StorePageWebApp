(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/games/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/apollo-client'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// GraphQL query to get all games
const GET_GAMES = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gql"]`
  query {
    games {
      id
      title
      platform
      description
      genre
      releaseDate
    }
  }
`;
function GamesPage() {
    _s();
    const [games, setGames] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [platformFilter, setPlatformFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Grab data on first load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamesPage.useEffect": ()=>{
            async function fetchGames() {
                try {
                    const { data } = await client.query({
                        query: GET_GAMES
                    });
                    if (data && data.games) {
                        setGames(data.games);
                    }
                } catch (error) {
                    console.error("Error fetching games:", error);
                } finally{
                    setLoading(false);
                }
            }
            fetchGames();
        }
    }["GamesPage.useEffect"], []);
    // FILTERING LOGIC (search + platform)
    const filteredGames = games.filter((game)=>platformFilter === "All" ? true : game.platform === platformFilter).filter((game_0)=>game_0.title.toLowerCase().includes(search.toLowerCase()));
    // Loading state
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Game List"
                }, void 0, false, {
                    fileName: "[project]/src/app/games/page.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/games/page.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/games/page.tsx",
            lineNumber: 65,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            padding: "20px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "Game List"
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search games...",
                value: search,
                onChange: (e)=>setSearch(e.target.value),
                style: {
                    padding: "10px",
                    margin: "10px 0",
                    width: "100%",
                    maxWidth: "400px",
                    display: "block"
                }
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: platformFilter,
                onChange: (e_0)=>setPlatformFilter(e_0.target.value),
                style: {
                    padding: "10px",
                    margin: "10px 0",
                    width: "100%",
                    maxWidth: "400px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "All",
                        children: "All Platforms"
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "Nintendo Switch",
                        children: "Nintendo Switch"
                    }, void 0, false, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            filteredGames.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "No games match your search."
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 96,
                columnNumber: 37
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                    gap: "20px",
                    marginTop: "20px"
                },
                children: filteredGames.map((game_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `/games/${game_1.id}`,
                        style: {
                            display: "block",
                            padding: "20px",
                            border: "1px solid #ddd",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            textDecoration: "none",
                            color: "black",
                            transition: "transform 0.2s, box-shadow 0.2s"
                        },
                        onMouseEnter: (e_1)=>{
                            e_1.currentTarget.style.transform = "scale(1.03)";
                            e_1.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.15)";
                        },
                        onMouseLeave: (e_2)=>{
                            e_2.currentTarget.style.transform = "scale(1)";
                            e_2.currentTarget.style.boxShadow = "none";
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: game_1.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/games/page.tsx",
                                lineNumber: 118,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "gray",
                                    marginBottom: "8px"
                                },
                                children: game_1.platform
                            }, void 0, false, {
                                fileName: "[project]/src/app/games/page.tsx",
                                lineNumber: 119,
                                columnNumber: 9
                            }, this),
                            game_1.genre && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "14px",
                                    marginBottom: "4px"
                                },
                                children: [
                                    "Genre: ",
                                    game_1.genre
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/games/page.tsx",
                                lineNumber: 124,
                                columnNumber: 26
                            }, this),
                            game_1.releaseDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "14px",
                                    marginBottom: "8px"
                                },
                                children: [
                                    "Release: ",
                                    game_1.releaseDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/games/page.tsx",
                                lineNumber: 131,
                                columnNumber: 32
                            }, this),
                            game_1.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: "14px",
                                    color: "#555"
                                },
                                children: game_1.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/games/page.tsx",
                                lineNumber: 138,
                                columnNumber: 32
                            }, this)
                        ]
                    }, game_1.id, true, {
                        fileName: "[project]/src/app/games/page.tsx",
                        lineNumber: 102,
                        columnNumber: 32
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/games/page.tsx",
                lineNumber: 96,
                columnNumber: 74
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/games/page.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
_s(GamesPage, "4cII0ZQ37TRvKgx3FzGpS1YXqs0=");
_c = GamesPage;
var _c;
__turbopack_context__.k.register(_c, "GamesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_games_page_tsx_43f075d6._.js.map