var owner, owner2, Zosago, experience, term, power,years;



Zosago=0;
owner=3500;
owner2=1.4;
experience=1;
power=1;
years=1;
term=1;


$(document).ready(function() {

 zena();


    //===== Вызов расчета цены при выборе Собственник ТС   =====//
    $('#calculator__bloc1').click(function (){
        zena();
    });

    //===== Вызов расчета цены при выборе Прописка собственника ТС  =====//
    $('#calculator__bloc2').click(function (){
        zena();
    });

   //===== Вызов расчета цены при выборе Возраст и стаж водителя   =====//

    $('#experience').change(function (){
        zena();
    });

    //===== Вызов расчета цены при выборе Мощность двигателя, Л.С.   =====//

    $('#power').change(function (){
        zena();
    });

    //===== Вызов расчета цены при выборе Безаварийный стаж водителя.   =====//

    $('#years').change(function (){
        zena();
    });

    //===== Вызов расчета цены при выборе срока страхования   =====//

    $('#term').change(function (){
        zena();
    });

    //===== Вызов расчета цены при выборе Промежуток взноса   =====//

    $('#dateperiod').change(function (){
     zena();
	});
	
	//===== Вызов расчета цены при выборе Гонорара адвоката   =====//

    $('#honorarium').change(function (){
		zena();
	});
	


    //============== Вычисление окончательной цены ===================================//

    function zena() {
        //===== Вычитка Собственник ТС  и его значения =====//
        document.getElementById('calculator__bloc1').onclick = function(e) {
            owner= e.target.value;
        };

        //===== Вычитка Прописка собственника ТС  и его коэфициента =====//
        document.getElementById('calculator__bloc2').onclick = function(e) {
            owner2= e.target.value;
        };

        //===== Вычитка Возраст и стаж водителя   и его коэфициента =====//
          experience =document.getElementById('experience').value;


        //===== Вычитка Мощность двигателя, Л.С.   и его коэфициента =====//
        power =document.getElementById('power').value;

        //===== Вычитка Безаварийный стаж водителя   и его коэфициента =====//
        years =document.getElementById('years').value;

        //===== Вычитка Срок страхования, мес   и его коэфициента =====//

       term =document.getElementById('term').value;

        //console.log(owner);
        //console.log(owner2);
        //
        //console.log(experience);
        //console.log(power);
        //console.log(years);
        //console.log(term);

        Zosago=owner*owner2*experience*power*years*term;
        Zosago=Zosago.toFixed(2);
        Zosago=new Intl.NumberFormat('ru-RU').format(Zosago);

        $('#output2').text(Zosago);

	};

});




