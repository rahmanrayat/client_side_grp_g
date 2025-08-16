$(document).ready(function () {

    $('.service-item').on('click', function () {
        const message = $(this).data('message');
        $('#popupMessage').text(message);
        const modal = new bootstrap.Modal(document.getElementById('popupModal'));
        modal.show();
    });

    if (!localStorage.getItem("cookiesAccepted")) {
        $("#cookieBanner").fadeIn();
    }
    $("#acceptCookies").click(function () {
        localStorage.setItem("cookiesAccepted", "true");
        $("#cookieBanner").fadeOut();
        showCookieToast("Thanks for accepting our cookies!");
    });
    $("#rejectCookies").click(function () {
        $("#cookieBanner").fadeOut();
    });

  
    function showCookieToast(message) {
        const toast = $(`
            <div class="toast-container">
                <div class="toast">${message}</div>
            </div>
        `);
        $("body").append(toast);
        setTimeout(() => { toast.fadeOut(() => toast.remove()); }, 4000);
    }

    
    $("#contactModal form").on("submit", function(e) {
        e.preventDefault(); 
        $(this).html(`
            <div class="alert alert-success text-center">
                🚀 Just hold your chair, we'll get back to you shortly.
            </div>
        `);
    });

});

$("a.hero-btn").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top
    }, 800);
});
