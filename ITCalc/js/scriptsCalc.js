var  ZenaBas, Kserv, Kstanz, NServmax, Zenaserv,NStanmax,Zenastan, Kobsl, Kpisyt;


Kserv=3000;
Kstanz=800;
ZenaBas=0;
NServmax=0;
Zenaserv=0;
NStanmax=0;
Zenastan=0;
Kobsl=1;
Kpisyt=1;


$(document).ready(function() {

    var serv,Serv, servst,Servst;
    var Serv = document.getElementById('serv').value;
    $('#Servmax').text(Serv);


    var Servst = document.getElementById("servst").value;
    $('#Servmaxst').text(Servst);
    document.getElementById('Servmaxst').value = Servst;

    Zena=ZenaBas;
    $('#Zena').text(Zena);

    zena();

//========== Определение цены обслуживания серверов =======================================//

    $(function() {
        Zenaserv=0;

        $("#serv").on('input',function () {

            var NServmax = document.getElementById("serv").value;
            $('#NServmax').text(NServmax);
             Zenaserv=NServmax*Kserv;
            $('#Zenaserv').text(Zenaserv);
            zena();
         })
    })

//========== Определение цены обслуживания станций  =======================================//
    $(function() {
        Zenastan=0;

        $("#servst").on('input',function () {

            var NStanmax = document.getElementById("servst").value;
            $('#NStanmax').text(NStanmax);
            // alert()
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena();
        })
    })

//========== Определение режима  обслуживания клиента  =======================================//

    $('#list1').click(function () {
        var val = document.getElementById("list1").value;

        $('#val').text(val);
        if (val==1) {Kobsl=1; };
        if (val==2) {Kobsl=1.5; };
        if (val==3) {Kobsl=2; };
        if (val==4) {Kobsl=5; };
        zena();

    });

    //========== Определение присутствия специалиста  =======================================//

    // $('#prisyt').checked(function () {
    $('#prisyt').click(function () {

        if ($("#calc_block4_check input:checkbox:checked").length > 0)
        {
            Kpisyt=2;
               // alert(Kpisyt);
        }
        else
        {
            Kpisyt=1;
            // alert(Kpisyt);
        }

        zena();

    });



    //============== Вычисление окончательной цены ===================================//

    function zena() {


        Zena=(Zenaserv+Zenastan)*Kobsl;
        document.getElementById("bs").style.display="block";

        if (Kpisyt==2) {
            Zena=130000;

        };


        if (Zena>200000) {
            Zena="Свяжитесь с нами для получения предложения";
            document.getElementById("bs").style.display="none";
        };

        if (Kobsl==5) {
            Zena="Свяжитесь с нами для получения предложения";
            document.getElementById("bs").style.display="none";
        };

        $('#Zena').text(Zena);

    };
});

