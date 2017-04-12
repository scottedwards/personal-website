$(document).ready(function() {
    var previousProject = null;
    $(".project-icon").click(function() {
        var icon = $(this);
        if ($("#preview").length > 0) {
            $("#preview").slideToggle("medium", function() {
                $("#preview").remove();
                if (previousProject != icon.attr("data-div-id")) {
                    mySlideToggle(icon);
                }
                previousProject = icon.attr("data-div-id");
            }); 
        } else {
            mySlideToggle(icon);
            previousProject = icon.attr("data-div-id");
        }
    });
});

function mySlideToggle(element) {
    if (window.matchMedia('(max-width: 767px)').matches) {
        //Mobile
        mobileSlideToggle(element);
    } else {
        //Desktop
        desktopSlideToggle(element);
    }
}

function desktopSlideToggle(element) {
    element.closest(".row").after("<div id='preview'></div>");
    element.siblings(".project-summary").clone().appendTo("#preview");
    $("#preview > .project-summary").slideToggle("medium");
}

function mobileSlideToggle(element) {
    element.closest(".project").after("<div id='preview'></div>");
    element.siblings(".project-summary").clone().appendTo("#preview");
    $("#preview > .project-summary").slideToggle("medium");
}

