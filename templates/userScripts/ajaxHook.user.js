// ==UserScript==
// @name         ajaxHook
// @namespace    gmspider
// @version      2024.11.20
// @description  ajaxHook GMSpider
// @author       Luomo
// @match        https://www.template.com/*
// @require      https://cdn.jsdelivr.net/gh/CatVodSpider-GM/Spiders-Lib@main/lib/browser-extension-url-match-1.2.0.min.js
// @require      https://cdn.jsdelivr.net/gh/CatVodSpider-GM/Spiders-Lib@main/lib/ajaxhook-3.0.3.min.js
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==
console.log(JSON.stringify(GM_info));
(function () {
    const GMSpiderArgs = {};
    if (typeof GmSpiderInject !== 'undefined') {
        let args = JSON.parse(GmSpiderInject.GetSpiderArgs());
        GMSpiderArgs.fName = args.shift();
        GMSpiderArgs.fArgs = args;
    } else {
        //使用 Chrome 浏览器进行调试时，可以手动设置当前调试的方法
        GMSpiderArgs.fName = "homeContent";
        GMSpiderArgs.fArgs = [true];
    }
    Object.freeze(GMSpiderArgs);
    let hookConfigs = {
        "homeContent": [{
            dataKey: "data1",
            matcher: matchPattern("https://www.template.com/api/data1?*").assertValid()
        }, {
            dataKey: "data2",
            matcher: matchPattern("https://www.template.com/api/data2*").assertValid(),
            require: false
        }],
        "categoryContent": [{
            dataKey: "data3",
            matcher: matchPattern("https://www.template.com/api/data3?*").assertValid()
        }, {
            dataKey: "data4",
            matcher: matchPattern("https://www.template.com/api/data4?*").assertValid(),
            onRequestHook: function (config, handler) {
                let url = new URL(config.url);
                url.searchParams.set('page', GMSpiderArgs.fArgs[1]);
                config.url = url.toString();
            }
        }],
        "detailContent": [{
            dataKey: "data4",
            matcher: matchPattern("https://www.template.com/api/data4?*").assertValid()
        }],
        "playerContent": [{
            dataKey: "data5",
            matcher: matchPattern("https://www.template.com/api/data5?*").assertValid()
        }],
        "searchContent": [{
            dataKey: "data6",
            matcher: matchPattern("https://www.template.com/api/data6?*").assertValid()
        }, {
            matcher: matchPattern("https://www.template.com/api/data7?*").assertValid(),
            onResponseHook: function (response, handler) {
                console.log("response finished");
            }
        }],
    };
    const GmSpider = (function () {
        return {
            homeContent: function (filter) {
                console.log(hookResult);
                return {
                    class: [{type_id: "type_id-A", type_name: "type_name-A"}, {
                        type_id: "type_id-B", type_name: "type_name_B"
                    }], filters: {
                        "type_id-B": [{
                            key: "key-A", name: "name-A", value: [{
                                n: "n-AA", v: "v-AA"
                            }, {
                                n: "n-AB", v: "v-AB"
                            }]
                        }, {
                            key: "key-B", name: "name-B", value: [{
                                n: "n-BA", v: "v-BA"
                            }, {
                                n: "n-BB", v: "v-BB"
                            }]
                        }]
                    }, list: [{
                        vod_id: "vod_id-A",
                        vod_name: "vod_name-A",
                        vod_pic: "vod_pic-A",
                        vod_remarks: "vod_remarks-A",
                        vod_year: "vod_year-A"
                    }, {
                        vod_id: "vod_id-B",
                        vod_name: "vod_name-B",
                        vod_pic: "vod_pic-B",
                        vod_remarks: "vod_remarks-B",
                        vod_year: "vod_year-B"
                    }]
                };
            },
            categoryContent: function (tid, pg, filter, extend) {
                console.log(hookResult);
                return {
                    list: [{
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }, {
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }, {
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }],
                    pagecount: 5
                };
            },
            detailContent: function (ids) {
                console.log(hookResult);
                return {
                    list: [{
                        "vod_id": "vod_id",
                        "vod_name": "vod_name",
                        "vod_pic": "vod_pic",
                        "vod_remarks": "vod_remarks",
                        "vod_year": "vod_year",
                        "vod_area": "vod_area",
                        "type_name": "type_name",
                        "vod_actor": "vod_actor",
                        "vod_director": "vod_director",
                        "vod_content": "vod_content",
                        "vod_play_from": "vod_play_from",
                        "vod_play_url": "vod_play_url",
                        "vod_tag": "vod_tag",
                        "action": "action"
                    }]
                };
            },
            playerContent: function (flag, id, vipFlags) {
                console.log(hookResult);
                return {
                    header: JSON.stringify({
                        "User-Agent": window.navigator.userAgent,
                        "Referer": "https://www.template.com/"
                    }),
                    url: "video_url"
                };
            },
            searchContent: function (key, quick, pg) {
                console.log(hookResult);
                return {
                    list: [{
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }, {
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }, {
                        vod_id: "vod_id-A",
                        vod_name: "rect,ratio:2",
                        vod_remarks: "vod_remarks",
                        vod_year: "vod_year",
                        style: {
                            "type": "rect",
                            "ratio": 2
                        }
                    }],
                    pagecount: 5
                };
            }
        };
    })();
    let spiderExecuted = false;
    let dataReadyCount = 0;
    let hookResult = {};
    const {unProxy, originXhr} = proxy({
        onRequest: (config, handler) => {
            hookConfigs[GMSpiderArgs.fName].forEach((hookConfig) => {
                if (typeof hookConfig.onRequestHook === "function" && hookConfig.matcher.match(config.url)) {
                    hookConfig.onRequestHook(config, handler);
                }
            });
            handler.next(config);
        },
        onResponse: (response, handler) => {
            if (!spiderExecuted) {
                let dataTodoCount = 0;
                hookConfigs[GMSpiderArgs.fName].forEach((hookConfig) => {
                    if (typeof hookConfig.dataKey !== "undefined") {
                        if (hookConfig?.require !== false) {
                            dataTodoCount++;
                        }
                        if (hookConfig.matcher.match(response.config.url)) {
                            if (hookConfig?.require !== false) {
                                dataReadyCount++;
                            }
                            try {
                                let data = JSON.parse(response.response);
                                if (typeof data === 'object' && data) {
                                    hookResult[hookConfig.dataKey] = data;
                                } else {
                                    hookResult[hookConfig.dataKey] = response.response;
                                }
                            } catch (e) {
                            }
                        }
                    }
                    if (typeof hookConfig.onResponseHook === "function" && hookConfig.matcher.match(response.config.url)) {
                        hookConfig.onResponseHook(response, handler);
                    }
                });
                if (dataTodoCount === dataReadyCount) {
                    spiderExecuted = true;
                    const result = GmSpider[GMSpiderArgs.fName](...GMSpiderArgs.fArgs);
                    console.log(result);
                    if (typeof GmSpiderInject !== 'undefined' && spiderExecuted) {
                        GmSpiderInject.SetSpiderResult(JSON.stringify(result));
                    }
                }
            }
            handler.next(response);
        }
    }, unsafeWindow)
})();