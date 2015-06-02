var images = '.image-container',
    slide = $(images + ' img').innerWidth();

function append() {
    $(images + ' img').first().appendTo($(images));
}

function prepend() {
    $(images + ' img').last().prependTo($(images));
}

$('.prev').click(function() {
    prepend();
});
$('.next').click(function() {
    append();
});

function startTimer() {
    setInterval(append, 9000);
}
$(document).ready(function() {
    $('#searchicon')
        .mouseover(function() {
            $(this).attr("src", "img/icons/42x42/charcoal/42x42-search.png");
        })
        .mouseout(function() {
            $(this).attr("src", "img/icons/42x42/mint/42x42-search.png");
        });
    $('#lightboxes')
        .mouseover(function() {
            $(this).attr("src", "img/icons/64x64/charcoal/64x64-lightbox.png");
        })
        .mouseout(function() {
            $(this).attr("src", "img/icons/64x64/white/64x64-lightbox.png");
        });
    $('#helpdesk')
        .mouseover(function() {
            $(this).attr("src", "img/icons/64x64/charcoal/64x64-help-desk.png");
        })
        .mouseout(function() {
            $(this).attr("src", "img/icons/64x64/white/64x64-help-desk.png");
        });
    $('#tutorials')
        .mouseover(function() {
            $(this).attr("src", "img/icons/64x64/charcoal/64x64-tutorials.png");
        })
        .mouseout(function() {
            $(this).attr("src", "img/icons/64x64/white/64x64-tutorials.png");
        });
});