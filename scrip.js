document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Thank you for contacting Zmeg! We will get back to you soon.");

            form.reset();
        });
    }

});