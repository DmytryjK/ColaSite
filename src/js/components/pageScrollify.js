$(function() {
    $.scrollify({
        section : "section",
        sectionName : "main",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
});