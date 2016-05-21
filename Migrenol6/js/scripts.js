$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide');
        block.find('.slide_text').show();
        block.find('.slide_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide');
        block.find('.popup_block').show();
       });
});



$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide2');
        block.find('.slide2_text').show();
        block.find('.slide2_text_inc').show();
        block.find('.slide2_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide2');
        block.find('.slide2_text').hide();
        block.find('.slide2_text_full').show();
    });
});



$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide4');
        block.find('.slide3_text_inc').show();
        block.find('.slide3_text').show();
        block.find('.slide3_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide4');
        block.find('.slide3_text').hide();
        block.find('.slide3_text_full').show();
    });
});



$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide3');
        block.find('.slide4_text').show();
        block.find('.slide4_text_inc').show();
        block.find('.slide4_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide3');
        block.find('.slide4_text').hide();
        block.find('.slide4_text_full').show();
    });
});





$(function() {
    var rows = $('.rows'),
        blocks = $('.block'),
        window_height = $(window).height();
    rows.each(function(index, value) {
        $(value).attr('index', index);
    });

    function resizeBlock() {
        window_height = $(window).height();
        blocks.height(window_height);
    }
    $(window).resize(function() {
        resizeBlock();
    });
    resizeBlock();

    var showLineLock = false;
    function showLine(row, fast, revert_animation) {
        if (fast) {
            blocks.hide();
            row.find('.block').show();
            showLineLock = false;
            curr_index = '#row_' + row.attr('index');
            curr_row = row;
        } else {
            var next_row = row,
                duration = 500,
                curr_blocks = [
                    $(curr_row.find('.block')[0]),
                    $(curr_row.find('.block')[1])
                ],
                next_blocks = [
                    $(next_row.find('.block')[0]),
                    $(next_row.find('.block')[1])
                ];
            if (revert_animation) {
                curr_blocks = [
                    $(curr_row.find('.block')[1]),
                    $(curr_row.find('.block')[0])
                ];
                next_blocks = [
                    $(next_row.find('.block')[1]),
                    $(next_row.find('.block')[0])
                ];
            }

            next_row.insertAfter(curr_row);

            $({value: 0}).animate({value: window_height}, {
                duration: duration,
                easing: 'swing',
                start: function() {
                    curr_row.css({position: 'absolute'});
                    next_blocks[0].css({top: window_height}).show();
                    next_blocks[1].css({top: -window_height}).show();
                },
                step: function(now, fx){
                    curr_blocks[0].css({top: now});
                    curr_blocks[1].css({top: -now});
                    next_blocks[0].css({top: -(window_height - now)});
                    next_blocks[1].css({top: window_height - now});
                },
                done: function() {
                    curr_blocks[0].hide();
                    curr_blocks[1].hide();
                    next_blocks[0].css({top: 0});
                    next_blocks[1].css({top: 0});

                    curr_row.css({position: 'relative'});

                    resizeBlock();

                    setTimeout(function() {
                        curr_index = '#row_' + row.attr('index');
                        curr_row = row;
                        showLineLock = false;
                    }, 100);
                }
            });
        }
    }

    function showNextLine() {
        if (showLineLock) return;
        showLineLock = true;

        var index = parseInt(curr_row.attr('index')) + 1;
        var row = rows.filter('#row_'+index);
        if (row.length <= 0) {
            showLineLock = false;
            return;
        }
        showLine(row, false, false);
    }

    function showPrewLine() {
        if (showLineLock) return;
        showLineLock = true;

        var index = parseInt(curr_row.attr('index')) - 1;
        var row = rows.filter('#row_'+index);
        if (row.length <= 0) {
            showLineLock = false;
            return;
        }
        showLine(row, false, true);
    }

    var curr_index = '#row_0';
    var curr_row = $(curr_index);
    $('.navigation a').click(function(event) {
        event.stopPropagation();

        if (showLineLock) return;
        showLineLock = true;

        var index = $(this).attr('href');
        if (curr_index == index) {
            showLineLock = false;
            return;
        }
        var row = $(index);
        var revert_animation = curr_row.attr('index') > row.attr('index');
        showLine(row, false, revert_animation);
    });


    $('.navigation2 a').click(function(event) {
        event.stopPropagation();

        if (showLineLock) return;
        showLineLock = true;

        var index = $(this).attr('href');
        if (curr_index == index) {
            showLineLock = false;
            return;
        }
        var row = $(index);
        var revert_animation = curr_row.attr('index') > row.attr('index');
        showLine(row, false, revert_animation);
    });



    var prevTime = new Date().getTime();
    $(window).on( 'DOMMouseScroll mousewheel', function ( event ) {
        if (Math.abs(event.originalEvent.detail) < 15 && Math.abs(event.originalEvent.wheelDelta) < 15) return;

        var curTime = new Date().getTime();
        if(curTime - prevTime > 500) {
            prevTime = curTime;
            if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) {
                showNextLine();
            } else {
                showPrewLine();
            }
        }

        return false;
    });


  //Нажатие клавиатуры  вверх-вниз  //

    $(document).keydown(function(e) {
        switch(e.which) {
            case 37: // left
            case 38: // up
                showPrewLine();
                break;
            case 39: // right
            case 40: // down
                showNextLine();
                break;
            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    });

    showLine(curr_row, true);
});