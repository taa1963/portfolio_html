
//========== Лодка судейская (флаги, буи, оборудование дистанции, судейство) =================//
const zenaSud=12000;

//==========Организация, координация =================//
const zenaOrg=7000;

//==========Брифинг по безопасности =================//
const zenaBez=5000;

//==========Брифинг по безопасности =================//
const zenaPerson=5500;





$(document).ready(function() {



 

    document.getElementById('innumber').value = 1;
    document.getElementById('inrange').value = 1;

    function sizeV(element) {
        let nmember = document.getElementById('inrange').value;
        document.getElementById('innumber').value = nmember;
        Zena();
    }   


   window.sizeV=sizeV;

   Zena();
  
    //========== Функция расчета цены=======//
    function Zena() {

        let Zena=0;
        let nmember = document.getElementById('inrange').value;
         $('#nmember').text(nmember);
         document.getElementById('nmemberm').value=nmember; 

         let nJaxt=nmember/5;
         nJaxt= Math.ceil(nJaxt);
         $('#Jaxt').text(nJaxt);
         document.getElementById('Jaxtm').value=nJaxt; 
     



         let zenaNal=nJaxt*2*zenaPerson+zenaBez+zenaOrg+zenaSud;
         let zenaNalV=new Intl.NumberFormat('ru-RU').format(zenaNal);
         $('#ZenaNal').text(zenaNalV);
         document.getElementById('ZenaNalm').value=zenaNal; 



         let zenaBezNal=zenaNal+zenaNal/10;
         let zenaBezNalV=new Intl.NumberFormat('ru-RU').format(zenaBezNal);
         $('#ZenaBezNal').text(zenaBezNalV);
         document.getElementById('ZenaBezNalm').value=zenaBezNal;




    };


});
