$(document).ready(function () {
    const tooltip = $("#blog-gallery .tooltip");
    const blogGalleryTooltipWidth = tooltip.outerWidth();
    const blogGalleryTooltipHeight = tooltip.outerHeight();
    $("#blog-gallery .item").mousemove(function (event) {
        var x = event.pageX;
        var y = event.pageY;
        // Check if tooltip exceeds window boundaries
        if (x + blogGalleryTooltipWidth > windowWidth) {
            x -= blogGalleryTooltipWidth;
            tooltip.css({margin: "15px -15px"})
        } else {
            tooltip.css({margin: "15px 20px"})
        }
        if (y + blogGalleryTooltipHeight > windowHeight) {
            y -= blogGalleryTooltipHeight;
        }
        var tooltipText = $(this).find('.text').text();
        $(this).find('.tooltip .text').text(tooltipText);
        $(this).find('.tooltip .text').css({display: "block"});
        tooltip.css({top: y + "px", left: x + "px"}).show();
    }).mouseout(function () {
        $(".text").hide();
    });
});