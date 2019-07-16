
$(document).ready(function() {


    $('#calc_next').click(function () {
        var Zr, Zk, Zm, Zkm,Zmm,Zrm, zv,zv2,zv3;
        Zr = 0;
        Zk = 0;
        Zm = 0;
        zv = 0;
        Zkm=0;
        Zmm=0;
        Zrm=0;
        zv2=0;
        zv3=0;

        var elems = document.getElementsByClassName('ekran')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
            zv = document.getElementById(str).value;
            zv = +zv;

            Zr = Zr + zv;
            // $('#Zr').text(Zr);
            // Zrm=Zr;
            // $('#Zrm').text(Zrm);
            // document.getElementById('ekran').value=Zrm;
        }

        $('#Zr').text(Zr);
        Zrm=Zr;
        $('#Zrm').text(Zrm);
        document.getElementById('ekran').value=Zrm;
         alert(Zrm);


        var elems = document.getElementsByClassName('ekrank')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
             zv2 = document.getElementById(str).value;
            if (str =="ekrank1"){
                zv2 = +zv2;
                zv2=zv2*2
            }
            if (str =="ekrank2"){
                zv2 = +zv2;
                zv2=zv2*3;
                // alert(str);
                // alert(zv2);

            }

            if (str =="ekrank3"){
                zv2 = +zv2;
                zv2=zv2*3;
            }
            if (str =="ekrank4"){
                zv2 = +zv2;
                zv2=zv2*4;
            }


        zv2 = +zv2;
            // alert(zv3);
            Zk = Zk + zv2;
            // $('#Zk').text(Zk);
            //  Zkm=Zk;
            // $('#Zkm').text(Zkm);
            // document.getElementById('ekrank').value=Zkm;

        }
        $('#Zk').text(Zk);
        Zkm=Zk;
        $('#Zkm').text(Zkm);
        document.getElementById('ekrank').value=Zkm;




        var elems = document.getElementsByClassName('ekranm')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
             zv3 = document.getElementById(str).value;
            if (str =="ekranm1"){
                zv3 = +zv3;
                zv3=zv3*1;
            }
            if (str =="ekranm2"){
                zv3 = +zv3;
                zv3=zv3*1;
            }

            if (str =="ekranm3"){
                zv3 = +zv3;
                zv3=zv3*4;
            }
            if (str =="ekranm4"){
                zv3 = +zv3;
                zv3=zv3*2;
            }
            if (str =="ekranm5"){
                zv3 = +zv3;
                zv3=zv3*1;
            }
            if (str =="ekranm6"){
                zv3 = +zv3;
                zv3=zv3*1;
            }
            if (str =="ekranm7"){
                zv3 = +zv3;
                zv3=zv3*2;
            }



            zv3 = +zv3;
            // alert(zv3);
            Zm = Zm + zv3;
            // $('#Zm').text(Zm);
            // Zmm=Zm;
            // $('#Zmm').text(Zmm);
            // document.getElementById('ekranm').value=Zmm;

        }
        $('#Zm').text(Zm);
        Zmm=Zm;
        $('#Zmm').text(Zmm);
        document.getElementById('ekranm').value=Zmm;



    });


    $('#calc_next').click(function () {
        var block = $(this).parents('.calculator');
        block.find('.calc_block_param').hide();
        block.find('.calc_block_itog2').hide();
        block.find('.calc_block_itog').show();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;

    });

    $('#calc_detail_old1').click(function () {
        var block = $(this).parents('.calculator');
        block.find('.calc_block_param').show();
        block.find('.calc_block_itog2').hide();
        block.find('.calc_block_itog').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        //scrollTop: $("#calc_block_param").offset().top;
    });



    $('#calc_detail').click(function () {
        var block = $(this).parents('.calculator');
        block.find('.calc_block_param').hide();
        block.find('.calc_block_itog2').show();
        block.find('.calc_block_itog').hide();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
        //scrollTop: $("#calc_block_itog2").offset().top;
    });

    $('#calc_detail_old2').click(function () {
        var block = $(this).parents('.calculator');
        block.find('.calc_block_param').hide();
        block.find('.calc_block_itog2').hide();
        block.find('.calc_block_itog').show();
        //scrollTop: $("#calc_block_itog").offset().top;
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;

    });


    $('input').keydown(function(e) {

        var divs = document.getElementsByName('dev');
        if(e.keyCode === 13) {
            var index = this.getAttribute('data-index');
            index=+index;
            index=index+1;
            if (index==12){
                index=11;
            }
            divs[index].focus();

         }


        var handler = function() {
            // var index = this.dataset.index;
            var index = this.getAttribute('data-index');
            //alert(index);
        }
        for (var i = 0; i < divs.length; i++) {
            // divs[i].dataset.index = i;
            divs[i].setAttribute('data-index', i);
            divs[i] = handler;
        }
    });


    $('input').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;

    });

    $('.calc_block_param input').on('input change paste', function() {
        $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
    });


});






