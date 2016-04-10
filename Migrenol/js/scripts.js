$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide_text');
        block.find('.slide_text_inc').show();
        block.find('.slide_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide_text');
        block.find('.slide_text_inc').hide();
        block.find('.slide_text_full').show();
    });
});

$(function() {
    var rows = $('.rows'),
        blocks = $('.block'),
        window_height = $(window).height();

    function resizeBlock() {
        window_height = $(window).height();
        blocks.height(window_height);
    }
    $(window).resize(function() {
        resizeBlock();
    });
    resizeBlock();

    var showLineLock = false;
    function showLine(row, fast) {
        if (fast) {
            blocks.hide();
            row.find('.block').show();
            showLineLock = false;
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
                        showLineLock = false;
                    }, 100);
                }
            });
        }
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
        showLine(row);
        curr_index = index;
        curr_row = row;
    });

    /*var prevTime = new Date().getTime(),
        lastScrollTop = 0;
    var f = function(e){
        var curTime = new Date().getTime();
        if(typeof prevTime !== 'undefined'){
            var timeDiff = curTime-prevTime;
            if(timeDiff>200) {
                var st = $(window).scrollTop();
                if (st > lastScrollTop){
                    console.log('UP')
                } else {
                    console.log('DOWN')
                }
                lastScrollTop = st;
            }
        }
        prevTime = curTime;
    };
    window.onscroll=f;*/

    showLine(curr_row, true);
});