let totaln, cpcn,impn,ctrn, cpmn,clikn;
totaln=0;
cpcn=0;
impn=0;
ctrn=0;
cpmn=0;
clikn=0;



$(document).ready(function() {

    let urlcl1=document.location.href;
   // console.log(urlcl1);

    let clicksfl=urlcl1.includes('clicks');

    if (clicksfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('clicks') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var clnew =text.substr(text.lastIndexOf(':')+1 );
        clnew=clnew*1;
        document.getElementById('clicks').value=clnew;
        clikn=1;
        Zena();
    }

    let costfl=urlcl1.includes('cost');
   
    if (costfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('cost') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var costnew =text.substr(text.lastIndexOf(':')+1 );
        costnew=costnew*1;
        document.getElementById('total').value=costnew;
        totaln=1; 
        Zena();
    }

    let cpcfl=urlcl1.includes('cpc');
   
    if (cpcfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('cpc') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var cpcnew =text.substr(text.lastIndexOf(':')+1 );
        cpcnew=cpcnew*1;
        document.getElementById('cpc').value=cpcnew;
        cpcn=1; 
        Zena();
    }

    let impfl=urlcl1.includes('imp');
   
    if (impfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('imp') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var impnew =text.substr(text.lastIndexOf(':')+1 );
        impnew=impnew*1;
        console.log(impnew)
        document.getElementById('imp').value=impnew;
        impn=1; 
        Zena();
    }

    let ctrfl=urlcl1.includes('ctr');
   
    if (ctrfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('ctr') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var ctrnew =text.substr(text.lastIndexOf(':')+1 );
        ctrnew=ctrnew*1;
        document.getElementById('ctr').value=ctrnew;
        ctrn=1; 
        Zena();
    }

     let cpmfl=urlcl1.includes('cpm');
    if (cpmfl==true){
        var res =urlcl1.substr(urlcl1.lastIndexOf('cpm') );
        var lastIndex = res.indexOf(",");       // позиция последнего пробела
        var text = res.substring(0,lastIndex)
        var cpmnew =text.substr(text.lastIndexOf(':')+1 );
        cpmnew=cpmnew*1;
        document.getElementById('cpm').value=cpmnew;
        cpmn=1; 
        Zena();
    }




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
    clikn=1;
    Zena();
    


});

//========== Изменнеие в поле "total" =======//
$('#total').on("input",function(){
    
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
        $('.urlbl').hide();
    }   

    if ((clicksv > 0)&&(cpcn==1)) {
        //alert('cpcvn')
        let totalcl=cpcv*clicksv;
        document.getElementById('total').value=totalcl;
        $('.urlbl').hide();
    }   
        


    let cpmv=document.getElementById('cpm').value;
    if (cpmn==1){
        let totalcl=document.getElementById('total').value;
       if (totalcl>0){
        let impv=(totalcl/cpmv)*1000;
        impv=impv.toFixed(2);
         document.getElementById('imp').value=impv;
        let ctrv=(clicksv/impv)*100;
        document.getElementById('ctr').value=ctrv;
        $('.urlbl').hide();
    }
    else{
        document.getElementById('imp').value=0;
        document.getElementById('ctr').value=0;
    }
    $('.urlbl').hide();
    }

    let impv=document.getElementById('imp').value;
    if (impn==1){
        let totalcl=document.getElementById('total').value;
        if ((impv >0)&&(totalcl >0)) {

        let cpmv=(totalcl/impv)*1000;
       
        cpmv=cpmv.toFixed(2);
        document.getElementById('cpm').value=cpmv;
        let ctrv=(clicksv/impv)*100;
        document.getElementById('ctr').value=ctrv;
    }
    else{
        document.getElementById('cpm').value=0;
        document.getElementById('ctr').value=0;
    }


        $('.urlbl').hide();
    }

    let ctrv=document.getElementById('ctr').value;
    if (ctrn==1){
       // alert('impv='+impv)
       let totalcl=document.getElementById('total').value;
       let cpmv =document.getElementById('cpm').value;
       if ((totalcl>0)&&(cpmv>0)){

       let impv=(totalcl/cpmv)*1000;
       impv=impv.toFixed(2);
       document.getElementById('imp').value=impv;
       }
       else{
        document.getElementById('imp').value=0;
       }


       $('.urlbl').hide();
    }
    };


    $('#btn1').on("click",function(){
        document.getElementById('imp').value=0;
        document.getElementById('cpc').value=0;
        document.getElementById('ctr').value=0;
        document.getElementById('clicks').value=0;
        document.getElementById('total').value=0;
        document.getElementById('cpm').value=0;
        $('.urlbl').hide();

    });

    $('#btn2').on("click",function(){
        let url1=document.location.href;
     
        let url2=document.location.search;
      
        let url3=url1+url2;
      
       
        url3=url3.split("?")[0];
      

        let urtpl='?c=UAH&v='
        if (totaln==1){
         let costv=document.getElementById('total').value;
         urtpl=urtpl+',cost:'+costv;        
        }
      

        if ( clikn==1){
            let clicksv=document.getElementById('clicks').value;
            urtpl=urtpl+',clicks:'+clicksv;           
           }
        

         if (cpcn==1){
            let cpcv=document.getElementById('cpc').value;
            urtpl=urtpl+',cpc:'+cpcv;        
           }

           if (cpmn==1){
            let cpmv=document.getElementById('cpm').value;
            urtpl=urtpl+',cpm:'+cpmv;          
           }

           if (impn==1){
            let impv=document.getElementById('imp').value;
            urtpl=urtpl+',imp:'+impv;           
           }

           if (ctrn==1){
            let ctrv=document.getElementById('ctr').value;
            urtpl=urtpl+',ctr:'+ctrv;           
           }

           url3=url3+urtpl+',';

       // console.log('urtend='+url3)

       $('.urlbl').show();
       //$('.urlbl').adClass('active')

       $('#urlcl').text(url3);


    });   
   


});
