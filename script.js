$(document).ready(function() {

    // Show popup on service click
    $(".service-item").click(function() {
        var message = $(this).data("message");
        $("#popupMessage").text(message);
        var popup = new bootstrap.Modal(document.getElementById('popupModal'));
        popup.show();
    });

    // Cookie Banner Logic
    if (!localStorage.getItem("cookiesAccepted")) {
        $("#cookieBanner").fadeIn();
    }

    $("#acceptCookies").click(function() {
        localStorage.setItem("cookiesAccepted", "true");
        $("#cookieBanner").fadeOut();
    });

});
