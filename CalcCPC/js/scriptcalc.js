let totaln, cpcn,impn,ctrn, cpmn;
totaln=0;
cpcn=0;
impn=0;
ctrn=0;
cpmn=0;



$(document).ready(function() {

    //===== закрываем ввод в поля Ширина и высота букв и отрицательных значений, запятую меняем на точку   =====//
var myInput = document.querySelectorAll("input[type=text]");

function keyAllowed(key) {
  var keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 91, 92, 93 
  ];
  if (key && keys.indexOf(key) === -1)
    return false;
  else
    return true;
}

myInput.forEach(function(element) {
  element.addEventListener('keypress', function(e) {
    var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
    if (!keyAllowed(key))
      e.preventDefault();
  }, false);

  // Disable pasting of non-numbers
  element.addEventListener('paste', function(e) {
    var pasteData = e.clipboardData.getData('text/plain');
    if (pasteData.match(/[^0-9]/))
      e.preventDefault();
  }, false);
})


//========== Изменнеие в поле "Impressions" =======//
$('#imp').on("input",function(){
    impn=1;
    ctrn=0;
    cpmn=0;
    Zena()

});


//========== Изменнеие в поле "СРС" =======//
$('#cpc').on("input",function(){
    
    totaln=0;
    cpcn=1;

    Zena()

});

//========== Изменнеие в поле "CTR" =======//
$('#ctr').on("input",function(){
    impn=0;
    ctrn=1;
    cpmn=0;
    Zena()

});

//========== Изменнеие в поле "clicks" =======//
$('#clicks').on("input",function(){

    Zena();
    // let cpcv=document.getElementById('cpc').value;
    // let totalv=document.getElementById('total').value;
    // let clicksv=document.getElementById('clicks').value;
    // let totalcl=0;

    // if ((clicksv > 0)&&(totaln==1)) {
    //     alert('totaln')
    //     let cpccl=totalv/clicksv;
    //     cpccl=cpccl.toFixed(2);
    //     document.getElementById('cpc').value=cpccl;
    // }   

    // if ((clicksv > 0)&&(cpcn==1)) {
    //     alert('cpcvn')
    //     let totalcl=cpcv*clicksv;
    //     document.getElementById('total').value=totalcl;
    // }   
     


    // if ((clicksv > 0)&&(cpcv ==0)&&(cpcv !=='Infinity')) {
    //     alert(1)
    //     let totalcl=cpcv*clicksv;
    //     document.getElementById('total').value=totalcl;
    // }

    // if ((clicksv > 0)&&(totalv >0)) {
    //     alert(2)
    //     let cpccl=totalv/clicksv;
    //     cpccl=cpccl.toFixed(2);
    //     document.getElementById('cpc').value=cpccl;
    // }




    // let cpmv=document.getElementById('cpm').value;
    // if (cpmv > 0){
    //     alert('cpmv='+cpmv)
    //     let totalcl=document.getElementById('total').value;
    //     let impv=(totalcl/cpmv)*1000;
    //     impv=impv.toFixed(2);
    //     document.getElementById('imp').value=impv;
    //     let ctrv=(clicksv/impv)*100;
    //     document.getElementById('ctr').value=ctrv;
    // }

    // let impv=document.getElementById('imp').value;
    // if (impv > 0){
    //     alert('impv='+impv)
    //     let totalcl=document.getElementById('total').value;
    //     let cpmv=(totalcl/impv)*1000;
    //     console.log(cpmv)
    //     cpmv=cpmv.toFixed(2);
    //     document.getElementById('cpm').value=cpmv;
    //     let ctrv=(clicksv/impv)*100;
    //     document.getElementById('ctr').value=ctrv;


    // }

});

//========== Изменнеие в поле "total" =======//
$('#total').on("input",function(){
    // let cpcv=document.getElementById('cpc').value;
    // let totalv=document.getElementById('total').value;
    // let clicksv=document.getElementById('clicks').value;

    // if ((clicksv !==0)&&(totalv !==0)) {
    //     let cpvcl=totalv/clicksv;
    //     document.getElementById('cpc').value=cpvcl;

    // }
    totaln=1;
     cpcn=0;
    Zena()

});

//========== Изменнеие в поле "cpm" =======//
$('#cpm').on("input",function(){
    impn=0;
     ctrn=0;
     cpmn=1;
    Zena()

});  



    //========== Функция расчета цены=======//


    function Zena() {
      
        let cpcv=document.getElementById('cpc').value;
    let totalv=document.getElementById('total').value;
    let clicksv=document.getElementById('clicks').value;
    let totalcl=0;

    if ((clicksv > 0)&&(totaln==1)) {
        //alert('totaln')
        let cpccl=totalv/clicksv;
        let n = totalv.length+2;
        cpccl=cpccl.toFixed(n);
        document.getElementById('cpc').value=cpccl;
    }   

    if ((clicksv > 0)&&(cpcn==1)) {
        //alert('cpcvn')
        let totalcl=cpcv*clicksv;
        document.getElementById('total').value=totalcl;
    }   
        


    let cpmv=document.getElementById('cpm').value;
    if (cpmn==1){
        //alert('cpmv='+cpmv)
        let totalcl=document.getElementById('total').value;
        let impv=(totalcl/cpmv)*1000;
        impv=impv.toFixed(2);
        document.getElementById('imp').value=impv;
        let ctrv=(clicksv/impv)*100;
        document.getElementById('ctr').value=ctrv;
    }

    let impv=document.getElementById('imp').value;
    if (impn==1){
       // alert('impv='+impv)
        let totalcl=document.getElementById('total').value;
        let cpmv=(totalcl/impv)*1000;
        console.log(cpmv)
        cpmv=cpmv.toFixed(2);
        document.getElementById('cpm').value=cpmv;
        let ctrv=(clicksv/impv)*100;
        document.getElementById('ctr').value=ctrv;
    }

    let ctrv=document.getElementById('ctr').value;
    if (ctrn==1){
       // alert('impv='+impv)
       let totalcl=document.getElementById('total').value;
       let impv=(totalcl/cpmv)*1000;
       impv=impv.toFixed(2);
       document.getElementById('imp').value=impv;
    }
    };


    $('#btn1').on("click",function(){
        document.getElementById('imp').value=0;
        document.getElementById('cpc').value=0;
        document.getElementById('ctr').value=0;
        document.getElementById('clicks').value=0;
        document.getElementById('total').value=0;
        document.getElementById('cpm').value=0;

    });
   


});
