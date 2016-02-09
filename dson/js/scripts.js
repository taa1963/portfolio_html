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


$(function Checked () {
    $('.form_order #link1').click(function () {

        x1.checked = x1.checked ? false : true;
        displayCount();
    });

});




