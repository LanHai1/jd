//页面加载事件
$(function () {
    //top广告关闭
    $("#header-close").click(function () {
        $(this).parent().parent().fadeOut(500);
    });
    //地址
    let addr = ["北京", "上海", "天津", "重庆", "河北", "山西", "河南", "辽宁", "吉林", "黑龙江", "内蒙古", "江苏", "山东", "安徽", "浙江", "福建", "湖北", "湖南", "广东", "广西", "江西", "四川", "海南", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "港澳", "台湾", "钓鱼岛", "海外"];
    for (let i = 0; i < addr.length; i++) {
        $("<li><a href='#'>" + addr[i] + "</a></li>").appendTo($(".addr-ul"));
    }
    $(".addr-ul>li:eq(0) a").addClass("addr-ul-selected");
    $(".addr-ul").on("mouseenter", "li>a", function () {
        if ($(this).attr("class") === "addr-ul-selected") {
            $(this).removeClass("aHover");
        } else {
            $(this).addClass("aHover");
        }
    }).on("click", "li>a", function () {
        $(".first-addr").html("<i class='fa fa-map-marker'></i>" + $(this).text() + "");
        $(".main-addr").html("<i class='fa fa-map-marker'></i>" + $(this).text() + "");
        $(this).addClass("addr-ul-selected").parent().siblings().children().removeClass("addr-ul-selected");
        $(this).removeClass("aHover");
    }).on("mouseleave", "li>a", function () {
        $(this).removeClass("aHover");
    });
    $(".first-addr").mouseenter(function () {
        $(this).next().css("display", "block").mouseleave(function () {
            $(this).css("display", "none");
        });
    });
    //nav
    $(".nav-nav>li[class='nav-hover']").on("mouseenter", function () {
        $(this).addClass("nav-hover-fff");
    }).on("mouseleave", function () {
        $(this).removeClass("nav-hover-fff");
    });
    $(".nav-fff").width($(".nav-fff").parent().parent().width() + 14);
    //我的京东
    let myJdTop = ["待处理订单", "消息", "返修退换货", "我的问答", "降价商品", "我的关注"];
    for (let i = 0; i < myJdTop.length; i++) {
        $("<li><a href='#'>" + myJdTop[i] + "</a></li>").appendTo($("#myJd-top"));
    }
    let myJdBottom = ["我的京豆", "我的优惠卷", "我的白条", "我的理财"];
    for (let i = 0; i < myJdBottom.length; i++) {
        $("<li><a href='#'>" + myJdBottom[i] + "</a></li>").appendTo($("#myJd-bottom"));
    }
    $("#myJd-jd").on("mouseenter", function () {
        $(".myJd").css("display", "block");
    }).on("mouseleave", function () {
        $(".myJd").css("display", "none");
    });
    //企业采购
    let qycg = ["企业购", "商用场景馆", "工业品", "礼品卡"];
    for (let i = 0; i < qycg.length; i++) {
        $("<li><a href='#'>" + qycg[i] + "</a></li>").appendTo($("#qygc-top"));
    }
    $("#jd-qygc").on("mouseenter", function () {
        $(".qygc").css("display", "block");
    }).on("mouseleave", function () {
        $(".qygc").css("display", "none");
    });
    //客户服务
    let khfwTop = ["帮助中心", "售后服务", "在线客服", "意见建议", "电话客服", "客服邮箱", "金融资讯", "全球售客服"];
    for (let i = 0; i < khfwTop.length; i++) {
        $("<li><a href='#'>" + khfwTop[i] + "</a></li>").appendTo($("#khfw-top"));
    }
    let khfwBottom = ["合作招商", "学习中心", "商家后台", "京麦工作台", "商家帮助", "规则平台"];
    for (let i = 0; i < khfwBottom.length; i++) {
        $("<li><a href='#'>" + khfwBottom[i] + "</a></li>").appendTo($("#khfw-bottom"));
    }
    $("#jd-khfw-hover").on("mouseenter", function () {
        $("#jd-khfw").css("display", "block");
    }).on("mouseleave", function () {
        $("#jd-khfw").css("display", "none");
    });
    //网站导航
    $("#jd-wzdh").on("mouseenter", function () {
        $("#jd-wzdh-hover").css("display", "block");
    }).on("mouseleave", function () {
        $("#jd-wzdh-hover").css("display", "none");
    });
    //特色主题
    let tszt = ["京东试用", "京东金融", "全球售", "国际站", "京东会员", "京东预售", "买什么", "俄语站", "装机大师", "0圆评测", "定期送", "港澳售", "优惠卷", "秒杀", "闪购", "印尼站", "京东金融科技", "In货推荐", "陪伴计划", "出海招商"]
    for (let i = 0; i < tszt.length; i++) {
        $("<li><a href='#'>" + tszt[i] + "</a></li>").appendTo($("#jd-wzdh-tszt"));
    }
    //行业频道
    let hypd = ["手机", "智能数码", "玩3C", "电脑办公", "家用电器", "京东智能", "服装城", "京东生鲜", "家装城", "母婴", "食品", "农资频道", "整车", "图书", "京东元器件"];
    for (let i = 0; i < hypd.length; i++) {
        $("<li><a href='#'>" + hypd[i] + "</a></li>").appendTo($("#jd-wzdh-hypd"));
    }
    //生活服务
    let shfw = ["京东众筹", "白条", "京东金融App", "京东小金库", "理财", "话费", "水电煤", "彩票", "旅行", "机票酒店", "电影票", "京东到家", "游戏"];
    for (let i = 0; i < shfw.length; i++) {
        $("<li><a href='#'>" + shfw[i] + "</a></li>").appendTo($("#jd-wzdh-shfw"));
    }
    //更多精选
    let gdjx = ["合作招商", "京东通讯", "京东E卡", "企业采购", "服务市场", "办公生活馆", "乡村招募", "校园加盟", "京友邦", "京东社区", "游戏社区", "知识长拳维权"];
    for (let i = 0; i < gdjx.length; i++) {
        $("<li><a href='#'>" + gdjx[i] + "</a></li>").appendTo($("#jd-wzdh-gdjx"));
    }
    //搜索nav1
    let searchUl0 = ["好物五折", "苹果新品", "300减100", "建材钜惠", "领劵9折", "休闲零食", "满千减百", "组装电脑"];
    for (let i = 0; i < searchUl0.length; i++) {
        $("<li><a href='#'>" + searchUl0[i] + "</a></li>").appendTo($("#searchUl"));
    }

    //搜索框palceholder轮播
    let timePalId = null;

    function palLB() {
        let palLB = ["Apple产品超级新品日 抢6期白条免息券", "金龙鱼大米", "天峻手表", "互联网电视", "电脑主机", "金龙鱼调和油", "联想笔记本"];
        let iNumber = -1;
        timePalId = setInterval(function () {
            iNumber++;
            if (iNumber === palLB.length) {
                iNumber = 0;
            }
            $("#search_pla").attr("placeholder", palLB[iNumber]);
        }, 1500);
    }

    palLB();//调用搜索框字体轮播函数
    $("#search_pla").mouseenter(function () {
        clearInterval(timePalId);
    }).mouseleave(function () {
        palLB();
    });

    //nav轮播
    let timeSpanId = null;

    function searchSpanA() {
        let searchSpan = [{name: "金秋厨具节", href: "www.1.com"},
            {name: "苹果的新品", href: "www.2.com"},
            {name: "赢刃性人生", href: "www.3.com"}];
        let iNumber = -1;
        timeSpanId = setInterval(function () {
            iNumber++;
            if (iNumber === searchSpan.length) {
                iNumber = 0;
            }
            $("#searchSpan").text(searchSpan[iNumber].name).attr("href", searchSpan[iNumber].href);
        }, 1500);
    }

    searchSpanA();
    $("#searchSpan").mouseenter(function () {
        clearInterval(timeSpanId);
    }).mouseleave(function () {
        searchSpanA();
    });

    //购物车
    $(".my-gwc").mouseenter(function () {
        $(".my-gwc-hover").css("display", "block");
    }).mouseleave(function () {
        $(".my-gwc-hover").css("display", "none");
    });

    //搜索nav2
    /*let searchArr = [];*/
    let searchUl1 = ["秒杀", "优惠卷", "PLUS会员", "闪购"];
    let searchUl2 = ["拍卖", "京东服饰", "京东超市", "京东生鲜"];
    let searchUl3 = ["全球购", "京东金融"];
    let searchArr = [searchUl1, searchUl2, searchUl3];
    for (let i = 1; i < 4; i++) {
        let searchUl = searchArr[i - 1];
        let searchUlId = "#searchUl" + i;
        for (let i = 0; i < searchUl.length; i++) {
            $("<li><a href='#'>" + searchUl[i] + "</a></li>").appendTo($(searchUlId));
        }
    }

    //User新闻border
    $("#j-news-nav li:first-child").on("mouseenter", function () {
        $("#news-border").css("marginLeft", "14px");
        $("#news-main-1").css("display", "block").siblings("ul").css("display", "none");
    });
    $("#j-news-nav li:last-child").on("mouseenter", function () {
        $("#news-border").css("marginLeft", "68px");
        $("#news-main-2").css("display", "block").siblings("ul").css("display", "none");
    });

    //User新闻内容1
    let newsMain1 = ["企业专享价：最高直降5000", "打印巅峰24小时送大闸蟹券", "助力S8 罗技新鼠标首发", "天际厨电感恩专场豪礼免费拿"];
    //User新闻内容2
    let newsMain2 = ["京东图书勋章体系改版公告", "京东PLUS会员权益更新及会费调整", "京东启用全新客服电话“950618”", "关于召回普利司通（天津）轮胎有限公司2个规格乘用车轮胎的公告"];
    let newMainAll = [newsMain1, newsMain2];
    for (let i = 1; i < 3; i++) {
        let newMainUl = newMainAll[i - 1];
        let newMainUlId = "#news-main-" + i;
        for (let i = 0; i < newMainUl.length; i++) {
            $("<li><a href='#'>" + newMainUl[i] + "</a></li>").appendTo($(newMainUlId));
        }
    }

    //service特效
    function service() {
        $("#service-Ul>li:lt(4)").on("mouseenter", function () {
            $(".topHover").prevAll().animate({"top": -29}, 500).end().parent().on("mouseenter", "span", function () {
                $(this).css({
                    "border-bottom-color": "#e01121",
                    "color": "#e01121"
                }).parent().parent().siblings("li").find("span").css({
                    "border-bottom-color": "#fff",
                    "color": "#bea68d"
                });
            });
            $(".bottomHover").nextAll().animate({"bottom": -155}, 800).end();
            $(".J_service-main").css("display", "none");
        });
        $("#service-Ul > li > a ").on("mouseenter", function () {
            $(this).find("span").css("color", "#e01121").parent().parent().siblings("li").find("span").css("color", "#bea68d");
        });
        $("#service-Ul").on("mouseleave", "span", function () {
            $(this).css("color", "#bea68d")
        });
    }

    service();
    $(".fa-times").on("click", function () {
        $(".topHover").prevAll().animate({"top": 0}, 500).end().parent().off("mouseenter", "span").find("span").css({
            "border-color": "#fff",
            "color": "#bea68d"
        });
        $(".bottomHover").nextAll().animate({"bottom": 0}, 300).end().off("mouseenter").on("mouseleave", function () {
            /* service();*/
            /*if ($(this).serviceTime) {
                clearInterval($(this).serviceTime);
                console.log("清理定时器成功");//未进来
            }
            console.log($(this));
            var serviceNumber = 0;
            $(this).serviceTime = setInterval(function () {
                serviceNumber++;
                service();
                console.log(serviceNumber);
            }, 1000);
            console.log(serviceNumber);//值一直是0
            if (serviceNumber === 1) {
                clearInterval($(this).serviceTime);
                console.log("执行一次定时器后清理定时器");//未进来
            }
            //这里是写了个定时器 然后一秒后在执行注册事件的函数 但是还是有bug bug如下： 232行代码执行时未进去，241行代码执行的值理应是1但是一直是0，244行代码执行时未进去
            */
            console.log($(this))
        });
        $(".J_service-main").css("display", "block");
    });

});