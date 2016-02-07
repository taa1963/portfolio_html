$(function() {
    var count = $('.form_order input:checked').length;

    function displayCount() {
        $('#count').text(count);
    }

    displayCount();
    $('.form_order input[type=checkbox]').click(function() {
        if (this.checked) {
            count++;
        } else {
            count--;
        }
        displayCount();
    });
});

