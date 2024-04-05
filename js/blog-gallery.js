$(document).ready(function () {

    window.addEventListener('resize', function () {
        windowWidth = getWindowWidth();
        if (windowWidth > 1202) {$("#blog-gallery .tooltip").css({display: "none"})}
        if (windowWidth <= 1202) {
            $("#blog-gallery .item").css({position: "relative"});
            $("#blog-gallery .tooltip").css({display: "block", top: "auto !important", left: "auto !important", transform: "translateY(-80px) !important"});
        }
    });

    $("#blog-gallery .item").mousemove(function (event) {
        const tooltip = $("#blog-gallery .tooltip");
        const tooltipText = $(this).find('.text');
        const blogGalleryTextWidth = tooltipText.outerWidth(true);
        let x = event.pageX;
        let y = event.pageY;
        $("body").css({overflowX: "hidden"});
        $(this).find(tooltip).css({transform: "translateY(0)"});
        $(this).css({position: "unset"});
        if (x + 30 + blogGalleryTextWidth > windowWidth) {
            x -= blogGalleryTextWidth;
            $(this).find(tooltip).css({margin: "15px -20px"})
        } else {
            $(this).find(tooltip).css({margin: "15px 20px"})
        }
            $(this).find('.tooltip .text').text(tooltipText.text());
            $(this).find('.tooltip .text').css({display: "block"});
            $(this).find(tooltip).css({top: y + "px", left: x + "px"}).show();

    }).mouseout(function () {
        $(this).find('.tooltip').css({margin: "15px 20px"});
        if (windowWidth <= 1202) {
            $(this).find('.tooltip').css({top: "auto", left: "auto", transform: "translateY(-80px)"}).show();
            $("#blog-gallery .item").css({position: "relative"})
        } else {
            $(this).find('.tooltip').hide();
        }
    });
});
