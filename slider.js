$(function () {
    var $box = $('.box');
    var $arrowLeft = $('.arrow .left');
    var $arrowRight = $('.arrow .right');
    var $uLi = $('.box>ul>li');
    var $ol = $('.box>ol');
    var imgNum = $('.box>ul>li').length;    // 图片的数量
    var index = 0;// 计数器
    // 小圆点
    var num = 0;
    // 根据图片的数量动态生成小圆点
    while (num < imgNum) {
        $ol.append("<li></li>");
        num++;
    }
    var $oLi = $('.box>ol>li');
    $oLi.first().addClass('now');// 默认给第一个小圆点添加now类
    // 鼠标经过小圆点时，显示出对应的图片
    $oLi.mouseover(function () {
        $(this).addClass('now').siblings().removeClass('now');
        index = $(this).index();
        $uLi.eq(index).fadeIn().siblings().fadeOut();
    });
    $arrowRight.click(function () {
        index++;
        if (index > imgNum - 1) {
            index = 0;
        }
        // 点击右箭头修改呈现的图片时，对应的小圆点也跟着修改now类
        $uLi.eq(index).fadeIn().siblings().fadeOut();
        $oLi.eq(index).addClass('now').siblings().removeClass('now');
    });
    $arrowLeft.click(function () {
        index--;
        if (index < 0) {
            index = imgNum - 1;
        }
        $uLi.eq(index).fadeIn().siblings().fadeOut();
        $oLi.eq(index).addClass('now').siblings().removeClass('now');
    });
    // 自动轮播
    var timeId = setInterval(function () {
        $arrowRight.click();
    }, 2000);    // 2秒自动切换
    // 鼠标放在banner上，停止自动播放
    $box.hover(function () {
        clearInterval(timeId);
    }, function () {
        timeId = setInterval(function () {
            $arrowRight.click();
        }, 2000);    // 2秒自动切换
    });
});