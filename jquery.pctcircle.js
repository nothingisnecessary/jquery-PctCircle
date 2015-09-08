// Author: nothingisnecessary@gmail.com; 8 Sep 2015
// jQuery.PctCircle() plugin
// draws a fancy progress % circle, for goals and stuff.

(function ($) {

    $.fn.PctCircle = function (options) {

        var settings = $.extend({
            // defaults
            barColor: "blue",
            pct: 0
        }, options);


        var $chart = $(
            "<div class='jq-pct-circle_wrapper'><div class='jq-pct-circle_remainder'></div><div class='jq-pct-circle_mask'></div><div class='jq-pct-circle_circle'><div class='jq-pct-circle_pct'><div class='jq-pct-circle_pcttext'></div></div></div></div>");

        this.html($chart);

        var parElem = $chart;
        $(".jq-pct-circle_pcttext", parElem).text(settings.pct.toFixed(0) + '%');

        $(".jq-pct-circle_remainder", parElem).css({
            "border-top-color": "transparent",
                "border-right-color": "transparent",
                "border-bottom-color": "transparent",
                "border-left-color": "transparent"
        });

        if (settings.pct === 100) {
            $(".jq-pct-circle_circle", parElem).css({
                "border-top-color": settings.barColor,
                    "border-right-color": settings.barColor,
                    "border-bottom-color": settings.barColor,
                    "border-left-color": settings.barColor
            });
        } else if (settings.pct >= 75) {
            $(".jq-pct-circle_circle", parElem).css({
                "border-top-color": settings.barColor,
                    "border-right-color": settings.barColor,
                    "border-bottom-color": settings.barColor,
                    "border-left-color": "transparent"
            });
        } else if (settings.pct >= 50) {
            $(".jq-pct-circle_circle", parElem).css({
                "border-top-color": settings.barColor,
                    "border-right-color": settings.barColor,
                    "border-bottom-color": "transparent",
                    "border-left-color": "transparent"
            });
        } else if (settings.pct >= 25) {
            $(".jq-pct-circle_circle", parElem).css({
                "border-top-color": settings.barColor,
                    "border-right-color": "transparent",
                    "border-bottom-color": "transparent",
                    "border-left-color": "transparent"
            });
        } else if (settings.pct > 0) {
            $(".jq-pct-circle_circle", parElem).css({
                "border-top-color": "transparent",
                    "border-right-color": "transparent",
                    "border-bottom-color": "transparent",
                    "border-left-color": "transparent"
            });
        }

        if (settings.pct < 100 && settings.pct > 0) {
            var int = Math.floor(settings.pct / 25);
            var rem = settings.pct % 25;
            var arc = 3.6 * rem;
            var offset = -45;
            var initial = (int - 1) * 90;
            var rot = initial + arc + offset;

            var rotateCss = "rotate(" + rot.toString() + "deg)";
            $(".jq-pct-circle_remainder", parElem).css({
                "-webkit-transform": rotateCss,
                    "-moz-transform": rotateCss,
                    "-ms-transform": rotateCss,
                    "-o-transform": rotateCss,
            });
            $(".jq-pct-circle_mask").hide();

            $(".jq-pct-circle_remainder", parElem).css({
                "border-right-color": settings.barColor
            });
            if (settings.pct < 25) {
                $(".jq-pct-circle_mask").show(); // show blocker to prevent overlap below 0%
            }
        }
    };
    return this;
}(jQuery));