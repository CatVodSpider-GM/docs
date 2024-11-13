// ==UserScript==
// @name         jQuery
// @namespace    gmspider
// @version      2024.11.20
// @description  jQuery GMSpider
// @match        https://www.template.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js
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
    const GmSpider = (function () {
        return {
            homeContent: function (filter) {
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
                return {
                    header: JSON.stringify({
                        "User-Agent": window.navigator.userAgent,
                        "Referer": "https://www.template.com/"
                    }),
                    url: "video_url"
                };
            },
            searchContent: function (key, quick, pg) {
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
    $(document).ready(function () {
        let result = "";
        if ($("#cf-wrapper").length > 0) {
            console.log("源站不可用:" + $('title').text());
            GM_toastLong("源站不可用:" + $('title').text());
        } else {
            result = GmSpider[GMSpiderArgs.fName](...GMSpiderArgs.fArgs);
        }
        console.log(result);
        if (typeof GmSpiderInject !== 'undefined') {
            GmSpiderInject.SetSpiderResult(JSON.stringify(result));
        }
    });
})();

