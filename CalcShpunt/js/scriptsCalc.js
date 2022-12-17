
$(document).ready(function() {



//===== добавление нового блока (строки) ШПУНТА   =====//

function ADDSHUNT() {
  var newSection = $('<tr class="table_strt" "></tr>');
  newSection.html(
      '<td class="table_cell"> <select class="cell_select typeshpunt" onchange="typeshpuntf(this)"></td>\n+'+
      '<td class="table_cell"> <span class="mpg sp1">0</span> </td>\n+'+ 
      '<td class="table_cell"> <input type="text" class="mt sp2" value="0" oninput="mtf(this)"  > </td>\n+'+
       '<td class="table_cell"> <span class="hpr sp1">0</span> </td>\n+'+ 
       '<td class="table_cell">  <input type="text" class="lpr sp2" value="0" oninput="lprf(this)"  ></td>\n+'+
       '<td class="table_cell">  <input type="text" class="sstenka sp2" value="0" oninput="sstenkf(this)"  ></td>\n+'+
       '<td class="table_cell">  <input type="text" class="ztona sp2" value="0" oninput="ztonaf(this)"  ></td>\n+'+
      
      '<td class="table_cell"> <span class="zall sp1">0</span></td>'); 
      $('#table_shpunt').append(newSection);

     

  var newSelSek = $(newSection).find('.typeshpunt');

   for (let i = 0; i < tupeshpunt.length; i++)  {
      $('<option class="standart_opt" value="' + tupeshpunt[i].val + '">' + tupeshpunt[i].name + '</option>').appendTo(newSelSek);

   }
  
}

ADDSHUNT();


//===== Изменение значения в выпадающем списке "Наименование  "   =====//
function typeshpuntf(element){       
  let typeshpunt=element.value;  
  typeshpunt=eval(typeshpunt); 

  let newSelSek = $(element).parents('.table_strt');
  //console.log(newSelSek)
  let mpgt= $(newSelSek).find('.mpg');
  let mpgvv=typeshpunt[0].mpgv; 
  $(mpgt).text(mpgvv);

  let mtt= $(newSelSek).find('.mt');
  let mtvv=typeshpunt[0].mtv;   
  $(newSelSek).find('.mt').val(mpgvv);

  let hprt= $(newSelSek).find('.hpr');
  let hprvv=typeshpunt[0].hprv; 
  $(hprt).text(hprvv);

  let lprt= $(newSelSek).find('.lpr');
  let lprvv=typeshpunt[0].lprv; 
  $(newSelSek).find('.lpr').val(lprvv);
  //$(lprt).text(lprvv);

  let sstenkat= $(newSelSek).find('.sstenka');
  let sstenkavv=typeshpunt[0].sstenkav; 
  $(newSelSek).find('.sstenka').val(sstenkavv);
  //$(sstenkat).text(sstenkavv);

  let ztonat= $(newSelSek).find('.ztona');
  let ztonavv=typeshpunt[0].ztonav; 
  $(newSelSek).find('.ztona').val(ztonavv);
 // $(ztonat).text(ztonavv);

  let zallt= $(newSelSek).find('.zall');
  let zallvv=typeshpunt[0].zallv; 
   $(zallt).text(zallvv); 
}

window.typeshpuntf=typeshpuntf;


//===== Изменение значения в поле "Масса, тонн  "   =====//
function mtf(element){
  $(element).val($(element).val().replace(/\,/g, '.'));
        $(element).val($(element).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

  let mtv=element.value;
 
    let newSelSek = $(element).parents('.table_strt');
         
    let  typeshpunt= $(newSelSek).find('.typeshpunt');
    let typeshpuntv=$(typeshpunt).val();
    typeshpuntv=eval(typeshpuntv); 
    let mpgvv=typeshpuntv[0].mpgv; 
          
     let lnew=mtv/mpgvv;
     lnew=lnew.toFixed(2);
     let lprt= $(newSelSek).find('.lpr');
     $(newSelSek).find('.lpr').val(lnew);


     let hnew=typeshpuntv[0].hprv;
     let snew=lnew*hnew;
     snew=snew.toFixed(2)
     $(newSelSek).find('.sstenka').val(snew);
    
     let  zbl= $(newSelSek).find('.ztona');
     let ztnew=$(newSelSek).find('.ztona').val();
     //let ztnew=$(zbl).val();
     ztnew=ztnew*1;
    
     let zallt= $(newSelSek).find('.zall');
     let zallnew=ztnew*mtv;
     //console.log('ztnew='+ztnew)
     //console.log('mtv='+mtv)

     zallnew=zallnew.toFixed(2);


     $(zallt).text(zallnew); 

};

window.mtf=mtf;


//===== Изменение значения в поле "Длина, метры   "   =====//
function lprf(element){
  $(element).val($(element).val().replace(/\,/g, '.'));
        $(element).val($(element).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

  let lnew=element.value;
 
    let newSelSek = $(element).parents('.table_strt');
         
    let  typeshpunt= $(newSelSek).find('.typeshpunt');
    let typeshpuntv=$(typeshpunt).val();
    typeshpuntv=eval(typeshpuntv); 
    let mpgvv=typeshpuntv[0].mpgv; 
    

     let hnew=typeshpuntv[0].hprv;
     let snew=lnew*hnew;
     snew=snew.toFixed(2)
     $(newSelSek).find('.sstenka').val(snew);
    
    
     let ztnew=$(newSelSek).find('.ztona').val();
     
     let mtnew=mpgvv*lnew;
     mtnew=mtnew.toFixed(2);
     $(newSelSek).find('.mt').val(mtnew);
     

     let zallt= $(newSelSek).find('.zall');
     let zallnew=ztnew*mtnew;
     zallnew=zallnew.toFixed(2);
     $(zallt).text(zallnew); 

};

window.lprf=lprf;

//===== Изменение значения в поле "Площадь шпунтовой стены, м²"   =====//
function sstenkf(element){
  $(element).val($(element).val().replace(/\,/g, '.'));
        $(element).val($(element).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

  let snew=element.value;
 
    let newSelSek = $(element).parents('.table_strt');
         
    let  typeshpunt= $(newSelSek).find('.typeshpunt');
    let typeshpuntv=$(typeshpunt).val();
    typeshpuntv=eval(typeshpuntv); 
    let mpgvv=typeshpuntv[0].mpgv; 
    

     let hnew=typeshpuntv[0].hprv;
     let lnew=snew/hnew;
      lnew=lnew.toFixed(2)
      $(newSelSek).find('.lpr').val(lnew);
    
    
     let ztnew=$(newSelSek).find('.ztona').val();
     
     let mtnew=mpgvv*lnew;
     mtnew=mtnew.toFixed(2);
     $(newSelSek).find('.mt').val(mtnew);
     

     let zallt= $(newSelSek).find('.zall');
     let zallnew=ztnew*mtnew;
     zallnew=zallnew.toFixed(2);
     $(zallt).text(zallnew); 

};

window.sstenkf=sstenkf;

//===== Изменение значения в поле "Цена за тонну, рубли"   =====//
function ztonaf(element){
  $(element).val($(element).val().replace(/\,/g, '.'));
        $(element).val($(element).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

  let znew=element.value;
 
    let newSelSek = $(element).parents('.table_strt');
         
    let  typeshpunt= $(newSelSek).find('.typeshpunt');
    let typeshpuntv=$(typeshpunt).val();
    typeshpuntv=eval(typeshpuntv); 
    let mpgvv=typeshpuntv[0].mpgv; 
    
    let zall=typeshpuntv[0].zallv;
  
    let mtnew=zall/znew;
     mtnew=mtnew.toFixed(2);
     $(newSelSek).find('.mt').val(mtnew);
     
     let lnew=mtnew/mpgvv;
      lnew=lnew.toFixed(2)
       $(newSelSek).find('.lpr').val(lnew);

     let hnew=typeshpuntv[0].hprv;
      let snew=hnew*lnew;
       snew=snew.toFixed(2)
       $(newSelSek).find('.sstenka').val(snew);
    

};

window.ztonaf=ztonaf;



$('#btn3').click(function () {
  ADDSHUNT();
});

$('#btn1').click(function () {
  alert(3333)
  var data = [
    [123,"первая строка вторая колонка в кириллице"],
    [456,"вторая строка"]
  ];
 // download(data)
 var uint8 = new Uint8Array(data.length);
         for(var i = 0; i < data.length; i++) {
             x = data.charCodeAt(i);
             if (x >= 1040 && x <= 1103) { // Символы А..Я а..я
                 x -= 848;
             } else if (x == 1025) {   // Символ Ё
                 x = 168;
             } else if (x == 1105) {   // Символ ё
                 x = 184;
             }
             uint8[i] = x;
         }

 data = data.map(function(el){ return [el[0], '"' + el[1] + '"'].join(',') + "\r\n"; });
 //download(data)
  saveAs( new Blob( data, {type : 'text/csv'}), 'data.csv' );
 // saveAs( new Blob( rows, {type : 'text/csv;charset=utf-8'}), 'data.csv' );
});


// функция скачивания файла на жесткий диск
function download(data) {                
         
  // делаем перекодировку кириллических символов
  var uint8 = new Uint8Array(data.length);
  for(var i = 0; i < data.length; i++) {
      x = data.charCodeAt(i);
      if (x >= 1040 && x <= 1103) { // Символы А..Я а..я
          x -= 848;
      } else if (x == 1025) {   // Символ Ё
          x = 168;
      } else if (x == 1105) {   // Символ ё
          x = 184;
      }
      uint8[i] = x;
  }

  // имя сохраняемого файла
  filename = "lab_report.csv"     

  // сохраняем файл (в качестве данных - массив)
  var file = new Blob([uint8], {type: 'text/csv'});    

  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
  }, 0); 
}
}



  });