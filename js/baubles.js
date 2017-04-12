$(document).ready(function() {
    var previousProject = null;
    $(".project-icon").click(function() {
        var icon = $(this);
        if ($("#preview").length > 0) {
            $("#preview").slideToggle("medium", function() {
                $("#preview").remove();
                if (previousProject != icon.attr("data-div-id")) {
                    desktopSlideToggle(icon);
                }
                previousProject = icon.attr("data-div-id");
            }); 
        } else {
            desktopSlideToggle(icon);
            previousProject = icon.attr("data-div-id");
        }
    });
});

function desktopSlideToggle(element) {
    element.closest(".row").after("<div id='preview'></div>");
    element.siblings(".project-summary").clone().appendTo("#preview");
    $("#preview > .project-summary").slideToggle("medium");
}


