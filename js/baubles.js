$(document).ready(function() {
    $(".project-icon").click(function() {
        var icon = $(this);
        if ($("#preview").length > 0) {
            $("#preview").slideToggle("medium", function() {
                $("#preview").remove();
                desktopSlideToggle(icon);
            }); 
        } else {
            desktopSlideToggle(icon);
        }
    });
});

function desktopSlideToggle(element) {
    element.closest(".row").after("<div id='preview'></div>");
    element.siblings(".project-summary").clone().appendTo("#preview");
    $("#preview > .project-summary").slideToggle("medium");
}


