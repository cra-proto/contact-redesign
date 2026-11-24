 function focusNewFieldset(currentFieldset) {
    let $target = $(currentFieldset)
        .closest('fieldset')
        .next('fieldset');
//If not fieldset scroll, target results
    if (!$target.length) {
        $target = $('.results');
    }
//If neither, stop here
    if (!$target.length) {
        return;
    }

    $target.focus();

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    $target[0].scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest"
    });
}
    
    
    $( ".wb-fieldflow" ).on( "wb-ready.wb-fieldflow", function( event ) {
$(document).ready(function () {
    $(document).on('click keydown', '.radio, input[type="radio"]', function(e) {
        const oe = e.originalEvent;

        if (oe && oe.pointerType || e.key === "Tab") {
            // mouse, touch, or pen
            console.log("Mouse/Finger/Pen click detected");
             const selectedRadio = this;
        const currentFieldset = selectedRadio.closest("fieldset, .results");
             setTimeout(function () {
            focusNewFieldset(
                currentFieldset
            );
        }, 500);
        } else {
            // pointerType is "" for keyboard (Enter/Space), or the
            // event isn't a PointerEvent at all
            console.log("Keyboard or other input");
        }
    });
});			
    });
