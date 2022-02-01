






$(document).ready(function() {



 

    document.getElementById('innumberLarge').value = 41;
    document.getElementById('inrangeLarge').value = 41;

    function sizeVLarge(element) {
        let nmember = document.getElementById('inrangeLarge').value;
        document.getElementById('innumberLarge').value = nmember;
        ZenaLarge();
    }   


   window.sizeVLarge=sizeVLarge;

   ZenaLarge();
  
    //========== Функция расчета цены=======//
    function ZenaLarge() {

        let ZenaLarge=0;
        let nmemberLarge = document.getElementById('inrangeLarge').value;
         $('#nmemberLarge').text(nmemberLarge);
         document.getElementById('nmembermLarge').value=nmemberLarge; 


         let nJaxtLarge=nmemberLarge/5;
         nJaxtLarge= Math.ceil(nJaxtLarge);
         $('#JaxtLarge').text(nJaxtLarge);
         document.getElementById('JaxtmLarge').value=nJaxtLarge; 


         let zenaOrgLarge=nJaxtLarge*1000;
         



         let zenaNalLarge=nJaxtLarge*2*zenaPersonLarge+zenaBezLarge+zenaOrgLarge+zenaSudLarge;
         let zenaNalLargeV=new Intl.NumberFormat('ru-RU').format(zenaNalLarge);
         $('#ZenaNalLarge').text(zenaNalLargeV);
         document.getElementById('ZenaNalmLarge').value=zenaNalLarge; 



         let zenaBezNalLarge=zenaNalLarge+zenaNalLarge/10;
         let zenaBezNalVLarge=new Intl.NumberFormat('ru-RU').format(zenaBezNalLarge);
         $('#ZenaBezNalLarge').text(zenaBezNalVLarge);
         document.getElementById('ZenaBezNalmLarge').value=zenaBezNalLarge;




    };


});
