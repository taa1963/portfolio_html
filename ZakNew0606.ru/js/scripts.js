$(document).ready(function(){
    $('.js-show_video').click(function(){
        var video = $(this).data('video');
        $('.video_block').hide();
        $('#'+video).show();
    });
});