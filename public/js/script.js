

$(document).ready(function() {

    $('#monitor').html($(window).width());

    $(window).resize(function() {
        var viewportWidth = $(window).width();
        $('#monitor').html(viewportWidth);
    });

});

