var  Zena,KpsKadstr,KchoseKadstr,KchoseKadstrV;

Zena=0;
KchoseKadstrV=0;



$(document).ready(function() {

    $('#calc_next').click(function () {
        var Zr, Zk, Zm, zv;
        Zr = 0;
        Zk = 0;
        Zm = 0;
        zv = 0;



        var elems = document.getElementsByClassName('ekran')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
            zv = document.getElementById(str).value;
            zv = +zv;

            Zr = Zr + zv;
            $('#Zr').text(Zr);

            //$('#KgasV').text(KgasV);

            //document.getElementById('vgas').value = KgasV;


            var Zrm=Zr;
            $('#Zrm').text(Zrm);
            document.getElementById('ekran').value=Zrm;



        }

        var elems = document.getElementsByClassName('ekrank')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
            var zv2 = document.getElementById(str).value;
            zv2 = +zv2;
            // alert(zv3);
            Zk = Zk + zv2;
            $('#Zk').text(Zk);
            var Zkm=Zk;
            $('#Zkm').text(Zkm);
            document.getElementById('ekrank').value=Zkm;

        }



        var elems = document.getElementsByClassName('ekranm')

        for (var i = 0; i < elems.length; i++) {

            var str = elems[i].id;
            // alert(str);
            var zv3 = document.getElementById(str).value;
            zv3 = +zv3;
            // alert(zv3);
            Zm = Zm + zv3;
            $('#Zm').text(Zm);
            var Zmm=Zm;
            $('#Zmm').text(Zmm);
            document.getElementById('ekranm').value=Zmm;

        }






    });


    $('#calc_next').click(function () {

        var block = $(this).parents('.calculator');
        block.find('.calc_block_param').hide();
        block.find('.calc_block_itog').show();


    });


    $('#calc_detail').click(function () {

        var block = $(this).parents('.calc_block_itog');

        var div = document.getElementById('calc_block_detail');

        if(div.style.display == 'block') {
            div.style.display = 'none';

        }
        else {
            div.style.display = 'block';

        }

        //block.find('.calc_block_detail').show();


    });


});






