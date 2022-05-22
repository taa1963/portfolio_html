let znakval, idotel,otelnomer,otelamount, errdate1, errdate2, errdate3, errdate4, kursevro,kursdol;
errdate1=0;
errdate2=0;
errdate3=0;
errdate4=0;
idotel="3613cee3";
otelamount='amount'+idotel;
otelnomer='nomer'+idotel;
znakval=1;


$(document).ready(function() {
//jQuery(document).ready(function() {
    window.$ = jQuery;

    //CBR_XML_Daily_Ru(rates);
    
   // let k1=fx(100).from("USD").to("RUB");
   //kursevro=EURrate;
  // kursdol=USDrate;

   // console.log(kursevro);
    //console.log(kursdol);

    //$('#kurs1').text(k1)



    //znakval=1;
        DelAmount();
        AddAmount();
        DelNomer();
        AddNomer();
        //zena();




    // Первоначальное заполнение дат текущей датой

    let date = new Date();
    let date1=date.toLocaleDateString();

    document.getElementById('date1').value=date1;

    let addDays = 8;
    let date2 = new Date()
    date2.setDate(date2.getDate() + addDays);
    let date3=date2.toLocaleDateString();
    
    document.getElementById('date2').value=date3;
    zena();


   // Переключение типов валют
    $('#itog_v1').click(function () {
        $('.itog_text1').addClass('itog_text_active');
        $('.itog_znak1').addClass('itog_znak_active');
        $('.itog_text2').removeClass('itog_text_active');
        $('.itog_znak2').removeClass('itog_znak_active');
        $('.itog_text3').removeClass('itog_text_active');
        $('.itog_znak3').removeClass('itog_znak_active');
        znakval=1;
        zena();
    }); 
    
    $('#itog_v2').click(function () {
        $('.itog_text2').addClass('itog_text_active');
        $('.itog_znak2').addClass('itog_znak_active');
        $('.itog_text1').removeClass('itog_text_active');
        $('.itog_znak1').removeClass('itog_znak_active');
        $('.itog_text3').removeClass('itog_text_active');
        $('.itog_znak3').removeClass('itog_znak_active');
        znakval=2;
        zena();
    });

    $('#itog_v3').click(function () {
        $('.itog_text3').addClass('itog_text_active');
        $('.itog_znak3').addClass('itog_znak_active');
        $('.itog_text1').removeClass('itog_text_active');
        $('.itog_znak1').removeClass('itog_znak_active');
        $('.itog_text2').removeClass('itog_text_active');
        $('.itog_znak2').removeClass('itog_znak_active');
        znakval=3;
        zena();
    });


    // Выбор отеля
    $('.otel1').click(function () {
        idotel="3613cee3";
        otelamount='amount'+idotel;
        otelnomer='nomer'+idotel;
        DelAmount();
        AddAmount();
        DelNomer();
        AddNomer();
        zena();

    });

    $('.otel2').click(function () {
        idotel="3613cee4";
        otelamount='amount'+idotel;
        otelnomer='nomer'+idotel;
        DelAmount();
        AddAmount();
        DelNomer();
        AddNomer()
        zena();

    });


// Выбор количества человек
   $('.calc_sel').change(function () {
    
    zena();

  });

  // Выбор категории номера
  $('.calc_sel2').change(function () {
    
    zena();

  });




   //====Функция удаления  количества человек при смене отеля     =====//
    function DelAmount() {

        let block2 = document.getElementsByClassName('optamount');
        $(block2).remove();        
    };


    //====Функция добавления количества человек      =====//
    function AddAmount() {
        let myVar = eval(otelamount);
        let n =myVar.length;
        for (let i = 0; i < n; i++)  {
            $('.calc_sel').append('<option class="optamount" value="' + myVar[i].val + '"> ' + myVar[i].name + '</option>');
        }
     };



   //====Функция удаления  категории номера при смене отеля     =====//
   function DelNomer() {
    let blocknomer = document.getElementsByClassName('optnomer');
    $(blocknomer).remove();

   }; 


    //====Функция добавления категории номера при смене отеля      =====//
    function AddNomer() {
        let myVar2 = eval(otelnomer);
        let n =myVar2.length;
        for (let i = 0; i < n; i++)  {
            $('.calc_sel2').append('<option class="optnomer" value="' + myVar2[i].val + '"  data-DBL7="' + myVar2[i].DBL7 + '"  data-SGL7="' + myVar2[i].SGL7 + '" data-DBL14="' + myVar2[i].DBL14 + '"  data-SGL14="' + myVar2[i].SGL14 + '"  data-DBL21="' + myVar2[i].DBL21 + '" data-SGL21="' + myVar2[i].SGL21 + '" data-DBL1="' + myVar2[i].DBL1 + '" data-SGL1="' + myVar2[i].SGL1 + '"> ' + myVar2[i].name + '</option>');
        }
     };


    //====Функция прверки корректности выбора дат      =====//  

   function datev(){

    //====Дата заезда не может быть больше текущей      =====//

    //====Вычитываем и преобразуем текущую дату      =====//
    let date = new Date();
    let date1=date.toLocaleDateString();
    let st = date1;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(st.replace(pattern,'$3-$2-$1'));
    let date1v = Date.parse(dt); // текущее время
     

    //====Вычитываем и преобразуем дату заезда введенную пользователем      =====//
    let d1=document.getElementById('date1').value;
    let st2 = d1;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt2 = new Date(st2.replace(pattern,'$3-$2-$1'));
    let date1vp = Date.parse(dt2); // дата заезда

    //alert(d1)
       if(date1v>date1vp){
       errdate1=1;
        printerr();                 
       }
       else{
        errdate1=0;
        printerr();   
       }

       //====Вычитываем и преобразуем дату выезда введенную пользователем. Дата выезда не может быть меньше даты заезда      =====//

       let d3=document.getElementById('date2').value;
       let st3 = d3;
       var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
       let dt3 = new Date(st3.replace(pattern,'$3-$2-$1'));
       let date3vp = Date.parse(dt3); // дата выезда

       if(date1vp>date3vp){
        errdate2=1;  
        printerr();    
       }
       else{
        errdate2=0;  
        printerr();  
       }

       //====Разница дат заезда и  выезда не меньше 7 и не больше 28   
       let ddata=(date3vp-date1vp)/(1000*3600*24);

       if((ddata>0)&&(ddata<7)){
        errdate3=1;  
        printerr();    
       }
       else{
        errdate3=0;  
        printerr();  
       }

       if(ddata>28){
        errdate4=1;  
        printerr();    
       }
       else{
        errdate4=0;  
        printerr();  
       }
     
    };
   

  window.datev=datev;

    function printerr(){

       
        if(( errdate1)||(errdate2==1)||(errdate3==1)||(errdate4==1)){
            let block2=document.getElementsByClassName('dateerr');
            $(block2).addClass('dateerrv');
            if(errdate1==1){
            $('#daterrsp').text('Дата начала не может быть меньше текущей даты');  
            }
            if(errdate2==1){
                $('#daterrsp').text('Дата выезда не  может быть меньше даты заезда');  
            }
            if(errdate3==1){
                $('#daterrsp').text('Минимальное время пребываение в отеле  7 дней');  
            }
            if(errdate4==1){
                $('#daterrsp').text('Максимальное время пребываение в отеле  28 дней');  
            }

        }
        else{
            let block2=document.getElementsByClassName('dateerr');
            $(block2).removeClass('dateerrv');  
            zena();
        }
    }


   
  
   
 //============= Функция расчета цены         ========//
     function zena(){
         

      let call=document.querySelector('.calc_sel').value;

      let nomer=document.querySelector('.calc_sel2');
      let DBL7 = nomer.options[nomer.selectedIndex].getAttribute('data-DBL7');
      let SGL7 = nomer.options[nomer.selectedIndex].getAttribute('data-SGL7');

      let DBL14 = nomer.options[nomer.selectedIndex].getAttribute('data-DBL14');
      let SGL14 = nomer.options[nomer.selectedIndex].getAttribute('data-SGL14');

      let DBL21 = nomer.options[nomer.selectedIndex].getAttribute('data-DBL21');
      let SGL21 = nomer.options[nomer.selectedIndex].getAttribute('data-SGL21');

      let DBL1 = nomer.options[nomer.selectedIndex].getAttribute('data-DBL1');
      let SGL1 = nomer.options[nomer.selectedIndex].getAttribute('data-SGL1');

    let d1=document.getElementById('date1').value;
    let st2 = d1;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt2 = new Date(st2.replace(pattern,'$3-$2-$1'));
    let date1vp = Date.parse(dt2); // дата заезда


    let d2=document.getElementById('date2').value;
    let st1 = d2;
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt1 = new Date(st1.replace(pattern,'$3-$2-$1'));
    let date2vp = Date.parse(dt1); // дата выезда

    let dateotl=(date2vp-date1vp)/(1000*3600*24);

    //alert(d1);
    //alert(d2);
    //alert(dateotl);
   // alert(call);

     let price=0;
    if ((dateotl>7)&&(dateotl<14)&&(call=='DBL')){
        price=DBL7;
        if (dateotl>7){
            let deldata=dateotl-7;
            let delprice=deldata*DBL1;
            price=price*1+delprice*1;
        }       
    }
    if ((dateotl>7)&&(dateotl<14)&&(call=='SGL')){
        price=SGL7;
        if (dateotl>7){
            let deldata=dateotl-7;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }

    if ((dateotl>7)&&(dateotl<14)&&(call=='EB')){
        price=SGL7;
        if (dateotl>7){
            let deldata=dateotl-7;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }

    if ((dateotl>=14)&&(dateotl<21)&&(call=='DBL')){
        price=DBL14;
        if (dateotl>7){
            let deldata=dateotl-14;
            let delprice=deldata*DBL1;
            price=price*1+delprice*1;
        }       
    }
    if ((dateotl>=14)&&(dateotl<21)&&(call=='SGL')){
        price=SGL14;
        if (dateotl>7){
            let deldata=dateotl-14;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }

    if ((dateotl>=14)&&(dateotl<21)&&(call=='EB')){
        price=SGL14;
        if (dateotl>7){
            let deldata=dateotl-14;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }

    if ((dateotl>=21)&&(dateotl<28)&&(call=='DBL')){
        price=DBL21;
        if (dateotl>21){
            let deldata=dateotl-14;
            let delprice=deldata*DBL1;
            price=price*1+delprice*1;
        }       
    }
    if ((dateotl>=21)&&(dateotl<28)&&(call=='SGL')){
        price=SGL21;
        if (dateotl>21){
            let deldata=dateotl-14;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }

    if ((dateotl>=21)&&(dateotl<28)&&(call=='EB')){
        price=SGL21;
        if (dateotl>7){
            let deldata=dateotl-21;
            let delprice=deldata*SGL1;
            price=price*1+delprice*1;
        }       
    }
  

  
   let kurs_evro1=document.getElementById('kursevro1').value;
   let kurs_usd1=document.getElementById('kursusd1').value;
   

  kurs_evro1=kurs_evro1.replace(/,(?![^,]*,)/m, '.');
  kurs_usd1=kurs_usd1.replace(/,(?![^,]*,)/m, '.');


   let kurs_evro2=parseFloat(kurs_evro1);
   
   let kurs_usd2=parseFloat(kurs_usd1);

   let kurs_evro_usd=kurs_evro2/kurs_usd2;

     
     //let zenaevro=1000*kurs2*1;
     //alert(kurs_evro_usd)
     //alert(znakval)


     if (znakval==1){
        price=price*kurs_evro2; 
     }
     if (znakval==2){
        price=price**kurs_evro_usd; 
     }

     if (znakval==3){
        price=price*1; 
     }
     




     price=Math.ceil(price);
     var itog=Intl.NumberFormat('ru-RU').format(price);
    $('#zena').text(itog);






     }
   



});




















