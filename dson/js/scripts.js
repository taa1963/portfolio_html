$(function() {
    var count = $('.form_order input:checked').length;

    function displayCount() {
        $('#count').text(count);
    }

    displayCount();
    $('.form_order input[type=checkbox]').click(function () {
        if (this.checked) {
            count++;
        } else {
            count--;
        }
        displayCount();
    });

 {

        $('.form_order #link1').click(function () {
            x1.prop('checked', !x1.prop("checked"));
        });
        $('.form_order #link1').click(function () {
            x1 = $('#x1');
            x1.prop('checked', !x1.prop("checked"));
        });

    });
});