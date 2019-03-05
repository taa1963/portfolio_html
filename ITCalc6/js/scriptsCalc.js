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
  
    Zena=ZenaBas;
    $('#Zena').text(Zena);

    zena();

//========== Определение цены обслуживания серверов ввод значения =======================================//
   //===== запрет на ввод точки, запятой, минуса   =====//

    $('#ServmaxR').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


   //===== Вычитка введеного значения и движение ползунка.
    // Определение цены обслуживания серверов после ввода значения   =====//
    $('.ServmaxR').bind('change keyup',function () {

        var KservV = document.getElementById('ServmaxR').value;

       KservV=+KservV;

        $('#KservV').text(KservV);

        document.getElementById('serv').value = KservV;
        var NServmax = document.getElementById("serv").value;

        $('#NServmax').text(NServmax);

        if (NServmax<=3) {Kserv=3000;
            Zenaserv=NServmax*Kserv;
            $('#Zenaserv').text(Zenaserv);
            zena()
        }

        if (NServmax>3) {Kserv=2500;
            Zenaserv=NServmax*Kserv;
            $('#Zenaserv').text(Zenaserv);
            zena()
        }

        if (NServmax>5) {Kserv=2500000;
            Zenaserv=NServmax*Kserv;
            $('#Zenaserv').text(Zenaserv);
            zena()
        }

    });


//========== Определение цены обслуживания серверов после движение ползунка=======================================//

    $(function() {
        Zenaserv=0;

        $("#serv").on('input',function () {

            var NServmax = document.getElementById("serv").value;
            $('#NServmax').text(NServmax);

            if (NServmax<=3) {Kserv=3000;
                Zenaserv=NServmax*Kserv;
                $('#Zenaserv').text(Zenaserv);
                zena()
            }

            if (NServmax>3) {Kserv=2500;
                Zenaserv=NServmax*Kserv;
                $('#Zenaserv').text(Zenaserv);
                zena()
            }

            if (NServmax>5) {Kserv=2500000;
                Zenaserv=NServmax*Kserv;
                $('#Zenaserv').text(Zenaserv);
                zena()
            }



         })
    })


    //========== Определение цены обслуживания станций ввод значения =======================================//
    //===== запрет на ввод точки, запятой, минуса   =====//

    $('#ServmaxST').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


    //===== Вычитка введеного значения и движение ползунка.
    // Определение цены обслуживания станций после ввода значения   =====//
    $('.ServmaxST').bind('change keyup',function () {

        var KstV = document.getElementById('ServmaxST').value;

        KstV=+KstV;

        $('#KstV').text(KstV);

        document.getElementById('servst').value = KstV;

        var NStanmax = document.getElementById("servst").value;
        $('#NStanmax').text(NStanmax);

        if (NStanmax<=25) {Kstanz=1000;

            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>25) {Kstanz=800;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>30) {Kstanz=8000000;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

    });





    //===== Вычитка введеного значения и движение ползунка.
    // Определение цены обслуживания станций после ввода значения   =====//
    $('.ServmaxST').bind('change keyup',function () {

        var KstV = document.getElementById('ServmaxST').value;

        KstV=+KstV;

        $('#KstV').text(KstV);

        document.getElementById('servst').value = KstV;

        var NStanmax = document.getElementById("servst").value;
        $('#NStanmax').text(NStanmax);

        if (NStanmax<=25) {Kstanz=1000;

            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>25) {Kstanz=800;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>30) {Kstanz=8000000;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }


    });





    //===== Вычитка введеного значения при нажатие стрелок и движение ползунка.
    // Определение цены обслуживания станций после ввода значения   =====//

    $('.ServmaxST').click(function () {

        var KstV = document.getElementById('ServmaxST').value;

        KstV=+KstV;

        $('#KstV').text(KstV);

        document.getElementById('servst').value = KstV;

        var NStanmax = document.getElementById("servst").value;
        $('#NStanmax').text(NStanmax);

        if (NStanmax<=25) {Kstanz=1000;

            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>25) {Kstanz=800;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }

        if (NStanmax>30) {Kstanz=8000000;
            Zenastan=NStanmax*Kstanz;
            $('#Zenastan').text(Zenastan);
            zena()
        }
        
    });




//========== Определение цены обслуживания станций  =======================================//
    $(function() {
        Zenastan=0;

        $("#servst").on('input',function () {

            var NStanmax = document.getElementById("servst").value;
            $('#NStanmax').text(NStanmax);
            // alert()
            Zenastan=NStanmax*Kstanz;
            if (NStanmax<=25) {Kstanz=1000;

                Zenastan=NStanmax*Kstanz;
                $('#Zenastan').text(Zenastan);
                zena()
            }

            if (NStanmax>25) {Kstanz=800;
                Zenastan=NStanmax*Kstanz;
                $('#Zenastan').text(Zenastan);
                zena()
            }

            if (NStanmax>30) {Kstanz=8000000;
                Zenastan=NStanmax*Kstanz;
                $('#Zenastan').text(Zenastan);
                zena()
            }

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


    $('#prisyt').click(function () {

        if ($("#calc_block4_check input:checkbox:checked").length > 0)
        {
            Kpisyt=2;
         }
        else
        {
            Kpisyt=1;
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


    //============== открытие меню при первом клике и закрытие если открыто==================//


    window.onload= function() {
	document.getElementById("menu_Left_mobil").onclick = function() {
		openbox("dropdown", this);
		return false;
	};
};
function openbox(id, menu_Left_mobil) {
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
		
	}
	else {
		div.style.display = 'block';
		
	}
}

    //============== открытие статей при первом клике и закрытие если открыто==================//


   $('.menu_Left_mobil').click(function(){
	  document.getElementById("menu_right_mobil").onclick = function() {
		openbox2("dropdown_right", this);
		//alert(66666);
		return false;
	  };
	  function openbox2(id, menu_right_mobil) {
	var div = document.getElementById(id);
	if(div.style.display == 'block') {
		div.style.display = 'none';
		
	}
	  else {
		div.style.display = 'block';
		
	  }
	  }

    });

    //============== Схлопывание меню при выборе одного из пунктов==================//

	 $('.leftm').click(function(){
        var block = $(this).parents('.menu_left');
         block.find('.dropdown').hide();
    });

    //============== Схлопывание статей выборе одного из пунктов==================//
    $('.rightm').click(function(){
        var block = $(this).parents('.menu_right');
        // block.find('.slide2_text_inc').hide();
        block.find('.dropdown_right').hide();
    });

});




