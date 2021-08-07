var anitype = ["bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello", "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp", "bounceOut", "bounceOutDown", "bounceOutLeft", "bounceOutRight", "bounceOutUp", "fadeIn", "fadeInDown", "fadeInDownBig", "fadeInLeft", "fadeInLeftBig", "fadeInRight", "fadeInRightBig", "fadeInUp", "fadeInUpBig", "fadeOut", "fadeOutDown", "fadeOutDownBig", "fadeOutLeft", "fadeOutLeftBig", "fadeOutRight", "fadeOutRightBig", "fadeOutUp", "fadeOutUpBig", "flip", "flipInX", "flipInY", "flipOutX", "flipOutY", "lightSpeedIn", "lightSpeedOut", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "rotateOut", "rotateOutDownLeft", "rotateOutDownRight", "rotateOutUpLeft", "rotateOutUpRight", "slideInUp", "slideInDown", "slideInLeft", "slideInRight", "slideOutUp", "slideOutDown", "slideOutLeft", "slideOutRight", "zoomIn", "zoomInDown", "zoomInLeft", "zoomInRight", "zoomInUp", "zoomOut", "zoomOutDown", "zoomOutLeft", "zoomOutRight", "zoomOutUp", "hinge", "rollIn", "rollOut"];

function Anim(x, i, du, dl) {
    if (du) {
        $("#" + x).css({
            "-webkit-animation-duration": du + "s",
            "animation-duration": du + "s"
        });
    }
    if (dl) {
        $("#" + x).css({
            "-webkit-animation-delay": dl + "s",
            "animation-delay": dl + "s"
        });
    }
    $("#" + x).removeClass("animated " + anitype[i] + " ").addClass('animated ' + anitype[i] + ' ').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass("animated " + anitype[i] + " ");
    });
};