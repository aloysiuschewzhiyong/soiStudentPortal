$(document).ready(function () {
    // Initialise tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Autocomplete
    var tags = [
        "HTML",
        "CSS",
        "PHP",
        "JavaScript",
        "Python",
        "Java",
        "iOS",
        "Swift",
        "React",
        "Web Design",
        "Web Development"
    ];

    $("#search").autocomplete({
        source: tags
    });

    // Avatar toggle
    $(".avatar-toggle").click(function () {
        $(".avatar").toggleClass("border-grey");
    });

    // Clone card into offcanvas
    $(".card-bookmark1").click(function () {
        $(".carousel-inner .card1").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card1").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark1").css("display", "none");
    });

    $(".card-bookmark2").click(function () {
        $(".carousel-inner .card2").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card2").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark2").css("display", "none");
    });

    $(".card-bookmark3").click(function () {
        $(".carousel-inner .card3").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card3").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark3").css("display", "none");
    });

    $(".card-bookmark4").click(function () {
        $(".carousel-inner .card4").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card4").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark4").css("display", "none");
    });

    $(".card-bookmark5").click(function () {
        $(".carousel-inner .card5").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card5").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark5").css("display", "none");
    });

    $(".card-bookmark6").click(function () {
        $(".carousel-inner .card6").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card6").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark6").css("display", "none");
    });

    $(".card-bookmark7").click(function () {
        $(".carousel-inner .card7").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card7").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark7").css("display", "none");
    });

    $(".card-bookmark8").click(function () {
        $(".carousel-inner .card8").clone().appendTo(".offcanvas-body");
        $(".offcanvas-body .card8").css({ "width": "25%", "float": "left", "margin-right": "1rem" });
        $(".offcanvas-body .card-bookmark8").css("display", "none");
    });
});