
$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        if (name == '') {
            alert('Please enter your name');
            return false;
        }

        if (email == '') {
            alert('Please enter your email');
            return false;
        }

        if (message == '') {
            alert('Please enter a message');
            return false;
        }

        let successMessage = '<div style="color: green; padding: 10px;">Form is Submitted Successfully we will contact you soon</div>';
        $('#successMessage').html(successMessage);

        $('#contactForm')[0].reset();
    });
});
