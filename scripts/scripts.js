$(document).ready(function() {

    $('a.contact').click(function(e) {

        e.preventDefault();

        $('html, body').animate({
            scrollTop: $('section.contact-form').offset().top
        }, 500);
    });

    $('section.contact-form button[type="submit"]').click(function(e) {

        e.preventDefault();
    });
})
