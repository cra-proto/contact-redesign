// Visible = has .visible, or does not have .hidden
function isShown() {
    const $el = $(this);
    return $el.hasClass("visible") || !$el.hasClass("hidden");
}

function focusNewFieldset(currentFieldset) {
    // First visible fieldset after the current one
    let $target = $(currentFieldset)
        .closest("fieldset")
        .nextAll("fieldset")
        .filter(isShown)
        .first();

    // If none, first visible .results in the DOM
    if (!$target.length) {
        $target = $(".results").filter(isShown).first();
    }

    // If neither, stop
    if (!$target.length) {
        return;
    }

    // Make sure non-focusable containers can receive focus
    if (!$target.is("[tabindex]")) {
       $target.attr("tabindex", "-1");
   }

  //  $target.trigger("focus");

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

 // Focus without the browser's instant scroll
    $target[0].focus({ preventScroll: true });

    
    $target[0].scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest"
    });
}

// Bind once, outside wb-ready
$(document).on("click keydown", ".radio, input[type='radio']", function (e) {
    const oe = e.originalEvent;

    if ((oe && oe.pointerType) || e.key === "Tab") {
        const currentFieldset = $(this).closest("fieldset");

        setTimeout(function () {
            focusNewFieldset(currentFieldset);
        }, 500);
    } else {
        console.log("Keyboard or other input");
    }
});
