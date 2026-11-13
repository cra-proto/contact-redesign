
    
    $(document).ready(function() {
          function focusNewFieldset(currentFieldset) {
    const $nextFieldset = $(currentFieldset).closest('fieldset').next('fieldset').children('legend').focus();
    if (!$nextFieldset.length) {
        return;
    }

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    $nextFieldset[0].scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
    });
          }
     
              

            $('button').click(function() {
               
        const selectedRadio = this;
        const currentFieldset = selectedRadio.closest("fieldset");

      

        // The marker is only needed for this change.
      

        setTimeout(function () {
            focusNewFieldset(
                currentFieldset
            );
        }, 500);
                 $("legend").on("focus", function() {
           // $(this).attr("tabindex", "0");
                $(this).css("background-color", "#e0f7fa");
            }).on("blur", function() {
                $(this).css("background-color", "");
            });
                
    });
                
          });
                
                
           /*    setTimeout(() => {
        $(this).closest('fieldset').next('fieldset').children('legend').focus(); // Change focus
         }, 500);
            });
            // Optional: highlight when focused
            $("legend").on("focus", function() {
           // $(this).attr("tabindex", "0");
                $(this).css("background-color", "#e0f7fa");
            }).on("blur", function() {
                $(this).css("background-color", "");
            });
        });*/
