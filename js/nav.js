$(document).ready(function () {
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer;

    $(window).on('scroll', function () {
        var pos = $(window).scrollTop();
        var pos2 = pos + 50;
        var scrollBottom = pos + $(window).height();

        if (!isMobile) {
            if (pos >= navPos + $('nav').height() && lastPos < pos) {
                $('nav').addClass('fixed');
            }
            if (pos < navPos && lastPos > pos) {
                $('nav').removeClass('fixed');
            }
            lastPos = pos;
        }
    });
});