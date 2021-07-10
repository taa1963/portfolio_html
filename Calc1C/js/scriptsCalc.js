var  Zena,KchoseKadstrV;

Zena=0;
KchoseKadstrV=0;



$(document).ready(function() {

    //====Выбор типа услуги ========= //

  $('#typebisnes').change(function(){
       var typeb=document.getElementById("typebisnes").value;
      if(typeb==1){
          //var d='href="#?w=700" rel="popup_success"'
          pop();
      }
      else{
         Zena();
      }


    });

    //====Открытие всплывающей формы при выборе услги "Другое" ========= //
    function pop() {
        var popID = 'popup_success'; //получаем имя окна, важно не забывать при добавлении новых менять имя в атрибуте rel ссылки
        var popURL = '#?w=700'; //получаем размер из href атрибута ссылки

        //запрос и переменные из href url
        var query= popURL.split('?');
        var dim= query[1].split('&');
        var popWidth = dim[0].split('=')[1]; //первое значение строки запроса

        //Fade in the Popup and add close button
        $('#' + popID).fadeIn().css({ 'width': Number( popWidth ) }).prepend('<a href="calc.html" title="Закрыть" class="close"></a>');

        //Определяем маржу(запас) для выравнивания по центру (по вертикали и горизонтали) - мы добавляем 80 к высоте / ширине с учетом отступов + ширина рамки определённые в css
        //var popMargTop = ($('#' + popID).height() + 80) / 2;
        var popMargTop = 0;
       // var popMargLeft = ($('#' + popID).width() + 80) / 2;
        var popMargLeft = 0;

        //Устанавливаем величину отступа
        $('#' + popID).css({
            'margin-top' : -popMargTop,
            'margin-left' : -popMargLeft
        });

        //Добавляем полупрозрачный фон затемнения
        $('body').append('<div id="fade"></div>'); //div контейнер будет прописан перед тегом </body>.
        $('#fade').css({'filter' : 'alpha(opacity=50)'}).fadeIn(); //полупрозрачность слоя, фильтр для тупого IE

        return false;
    };

    //Закрываем окно и фон затемнения
    $(document).on('click', 'a.close, #fade', function() { //закрытие по клику вне окна, т.е. по фону...
        $('#fade , .popup_block, .popup_success').fadeOut(function() {
            $('#fade, a.close').remove();  //плавно исчезают
        });
        return false;
    });



    $('#ralc').on('input', function() {
        $(this).val($(this).val().replace(/\,/g));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });

    //=====Отслеживание движения ползунка количество пользователей =====\\
    $('#callclerk').on('input',function(){

        Zena();

    });


    $('#clerk').on('input',function(){

        var clerkv=document.getElementById('clerk').value;

        document.getElementById('callclerk').value=clerkv;

        Zena();

    });



    $('#clerk').keyup(function(e){

        var clerkv=document.getElementById('clerk').value;

        if((clerkv==0)||(clerkv==null)){
            clerkv=1;
            document.getElementById('clerk').value=clerkv;
        }


        document.getElementById('callclerk').value=clerkv;

        Zena();

    });



    //=====Отслеживание движения ползунка количество филиалов =====\\
    $('#callfill').on('input',function(){
        Zena();

    });

    $('#fill').on('input',function(){

        var fillv=document.getElementById('fill').value;

        document.getElementById('callfill').value=fillv;

        Zena();

    });



    $('#fill').keyup(function(e){

        var fillv=document.getElementById('fill').value;

        if((fillv==0)||(fillv==null)){
            fillv=1;
            document.getElementById('fill').value=fillv;
        }

        document.getElementById('callfill').value=fillv;

        Zena();

    });



    //Закрываем окно и фон затемнения
    function Zena(){
        var typeb=document.getElementById("typebisnes").value;
        var Nclerk=document.getElementById("callclerk").value;
        var Nfill=document.getElementById("callfill").value;

        Nfill=Nfill*0.33;

        var Zena=typeb*Nclerk*Nfill;



        Zena=Zena.toFixed(2);
        $('#Zenap').text(Zena);


        var typebtext=$("#typebisnes option:selected").html();
        document.getElementById('typeb').value=typebtext;
        $('#typesp').text(typebtext);


        var Nopt=$("#typebisnes option:selected").attr('data-index');
       // alert(Nopt)


        if (Nopt==1){
              $('.calc_block_itog').addClass('itog_active');
              $('.calc_block_itog_bloc1').addClass('itog_active');
              $('.calc_block_itog_bloc2').removeClass('itog_active');
              $('.calc_block_itog_bloc3').removeClass('itog_active');
            if(Zena<=10000){
                Zena=10000;
                Zena=Zena.toFixed(2);
                $('#Zenap').text(Zena);
            }

         }

        if (Nopt==2){
            $('.calc_block_itog').addClass('itog_active');
            $('.calc_block_itog_bloc1').removeClass('itog_active');
            $('.calc_block_itog_bloc2').addClass('itog_active');
            $('.calc_block_itog_bloc3').removeClass('itog_active');
            if(Zena<=30000){
                Zena=30000;
                Zena=Zena.toFixed(2);
                $('#Zenap').text(Zena);
            }
        }


        if ((Nopt==3) || (Nopt==4)) {
            $('.calc_block_itog').addClass('itog_active');
            $('.calc_block_itog_bloc1').removeClass('itog_active');
            $('.calc_block_itog_bloc2').removeClass('itog_active');
            $('.calc_block_itog_bloc3').addClass('itog_active');

            if((Zena<=60000)&&(Nopt==3)){
                Zena=60000;
                Zena=Zena.toFixed(2);
                $('#Zenap').text(Zena);
            }
            if((Zena<=100000)&&(Nopt==4)){
                Zena=100000;
                Zena=Zena.toFixed(2);
                $('#Zenap').text(Zena);
            }



        }
        if ((Nopt==0)||(Nopt==5)){
            $('.calc_block_itog').removeClass('itog_active');
            $('.calc_block_itog_bloc1').removeClass('itog_active');
            $('.calc_block_itog_bloc2').removeClass('itog_active');
            $('.calc_block_itog_bloc3').removeClass('itog_active');
        }




    }






});






