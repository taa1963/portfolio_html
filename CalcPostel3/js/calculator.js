var  Kcompl, Kisd,NKcomplv, NKcompl, Ntypeisd, TitelComplekt, Nisd, ZzakasV, ZColor, Z1isd, Zposhiv_pr,Zposhiv_sl ;



Kcompl=1; //выбрали "Рассчитать пошив изделия" если =0 - выбрали "Рассчитать комплект полностью"
Kisd=1;    //выбрали "Рассчитать пошив изделия" и  "Простыня"=1,  выбрали   "Наволочка"=2, выбрали   "Наволочка"=3, комплект=4


$(document).ready(function() {
	document.getElementById('calcmenu1_2').checked = true;
	document.getElementById('calcmenu2_1').checked = true;
	$('#calcmenu1_2').checked = true;
	$('#calcmenu1_1').checked = false;
	
	
	
	
	//========== Запрет отрицательных и дробных значений в инрут =======================================//
		
	
	var myInput = document.querySelectorAll("input[type=number]");

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
	
	
  
	
	
	
	
	
	
	//========== Нажатие "Рассчитать комплект полностью" =======================================//
	$('#calcmenu1_1').click(function () {
	Kcompl=0;
	Kisd=4;
	 var block = $(this).parents('.container');
		 block.find('.calc_block_sheet').hide();
         block.find('.calc_block_Pillowcase').hide();
		 block.find('.calc_block_Duvetcover').hide();
		 block.find('.calc_menu2').hide();
		
		  block.find('.calc_block_complect').show();
		  TitelComplekt=Scomlekt1;
	
	});
	
	
	
	//========== Нажатие "Рассчитать пошив изделия" =======================================//
	$('#calcmenu1_2').click(function () {
		document.getElementById('calcmenu2_1').checked = true;
	Kcompl=1;
    Kisd=1;	
	 var block = $(this).parents('.container');
		 block.find('.calc_block_sheet').show();
         block.find('.calc_block_Pillowcase').hide();
		 block.find('.calc_block_Duvetcover').hide();
		  block.find('.calc_block_complect').hide();
		  block.find('.calc_menu2').show();
		
	
	});
	
	
	//========== Нажатие "Простыня" =======================================//
	$('#calcmenu2_1').click(function () {
		Kisd=1;
		 var block = $(this).parents('.container');
		 block.find('.calc_block_sheet').show();
         block.find('.calc_block_Pillowcase').hide();
		 block.find('.calc_block_Duvetcover').hide();
		  block.find('.calc_block_complect').hide();
		
	
	});
	
	//========== Нажатие "Наволочка" =======================================//
	$('#calcmenu2_2').click(function () {
		Kisd=2;
		 var block = $(this).parents('.container');
		 block.find('.calc_block_sheet').hide();
         block.find('.calc_block_Pillowcase').show();
		 block.find('.calc_block_Duvetcover').hide();
		  block.find('.calc_block_complect').hide();
		
	
	});
	
	//========== Нажатие "Пододеяльник" =======================================//
	$('#calcmenu2_3').click(function () {
		Kisd=3;
		 var block = $(this).parents('.container');
		 block.find('.calc_block_sheet').hide();
         block.find('.calc_block_Pillowcase').hide();
		 block.find('.calc_block_Duvetcover').show();
		  block.find('.calc_block_complect').hide();
		Sisd1= Spod1; 
	
	});
	
	
	
	//========== Нажатие "Тип" - "Простыня" =======================================//
	$('.typepr').click(function () {
		
		 var block = $(this).parents('.proct');
            block.find('.typepr').show();
			var nn=block.find('.typepr').val();
						
			if (nn==1){
			var block = $(this).parents('.proct');
		      block.find('.type_pr').show();
              block.find('.PazPr').show();
		}
		
		if (nn==2){
			var block = $(this).parents('.proct');
		      block.find('.type_pr').hide();
              block.find('.PazPr').hide();
		}
		
	});
	
	
	//========== Нажатие "Тип" - "Простыня"  для динамического объекта=======================================//
	
	
	 function typeprcl(element) {
		 
		 var block = $(element).parents('.proct');
            block.find('.typepr').show();
			var nn=block.find('.typepr').val();
						
			if (nn==1){
			var block = $(element).parents('.proct');
		      block.find('.type_pr').show();
              block.find('.PazPr').show();
		}
		
		if (nn==2){
			var block = $(element).parents('.proct');
		      block.find('.type_pr').hide();
              block.find('.PazPr').hide();
		}
	};
	
	window.typeprcl = typeprcl;
	
	
	
	
		//========== Нажатие "Размер" - "Простыня" =======================================//
	$('.type_pr').click(function () {
		
		 var block = $(this).parents('.proct');
           	var Lpr=block.find('.type_pr').val();
		
		if (Lpr==1){
			var TitelPr="140*200*25";
			var PazPr =block.find('.PazPr');
			PazPr.text(TitelPr);
		}
		
		if (Lpr==2){
			var TitelPr="160*200*25";
			var PazPr =block.find('.PazPr')
			PazPr.text(TitelPr);
		}
		if (Lpr==3){
			var TitelPr="180*200*25";
			var PazPr =block.find('.PazPr')
			PazPr.text(TitelPr);
		}
	});
	
	

	//========== Нажатие "Размер" - "Простыня" для динамического элемента =======================================//
	
	 function razprcl(element) {

		
		 var block = $(element).parents('.proct');
           	var Lpr=block.find('.type_pr').val();
		
		if (Lpr==1){
			var TitelPr="140*200*25";
			var PazPr =block.find('.PazPr');
			PazPr.text(TitelPr);
		}
		
		if (Lpr==2){
			var TitelPr="160*200*25";
			var PazPr =block.find('.PazPr')
			PazPr.text(TitelPr);
		}
		if (Lpr==3){
			var TitelPr="180*200*25";
			var PazPr =block.find('.PazPr')
			PazPr.text(TitelPr);
		}
	};
		window.razprcl = razprcl;
	  
	//========== Нажатие "Удалить объект" - "Простынь" =======================================/
	
	 function DelPR(element) {
		 var sss= $(element).parents('.proct');
        sss.remove();
	 };		 
	window.DelPR = DelPR;
	
	
	
	
	
	
	
	//========== Нажатие "Добавить объект" - "Простынь" =======================================//
	$('#block_pr').click(function () {
		
		  var newSection = $('<tr class="proct" style="background: #e1e5ca;"></tr>');
            newSection.html(
			 '<td class="table_cell"> <h3>Простыня</h3></td>\n+'+
                   '<td class="table_cell">\n<p class="cell_titel">Тип</p>\n<select class="cell_select typepr" onclick="typeprcl(this)">\n <option value="1">Простыня на резинке</option>\n<option value="2">Простыня без резинки</option>\n</select>\n</td>\n+'+
                   '<td class="table_cell">\n<p class="cell_titel">Размер</p>\n<select class="cell_select type_pr" onclick="razprcl(this)" >\n<option value="1">Полуторка</option>\n<option value="2">Двухспальная</option>\n<option value="3">евро/макси</option>\n</select>\n<span class="PazPr" id="PazPr">140*200*25</span>\n</td>\n+'+
                   '<td class="table_cell">\n<p class="cell_titel">Количество</p>\n<input type="number"  class="Numberin Npost"  value="10" step="10" size="10000" min="0"/>\n</td>n+' +
                   '<td class="table_cell" >\n<p class="cell_titel">Ткань</p>\n<select class="cell_select ColorPr" >\n<option value="1">Тенсель</option>\n<option value="2">Сатин</option>\n<option value="3">Страйп сатин</option>\n<option value="4" >Бязь</option>\n<option value="5">Поплин</option>\n<option value="6">Страйп темный</option>\n</select>\n\</td>\n+'+
				   '<td class="table_cell"><button class="butuv_del" onclick="DelPR(this); ">Удалить объект</button></td>');
            $('#sheet_uvv').append(newSection);
	});	
	
	
	//========== Нажатие "Добавить объект" - "Наволочка" =======================================//
	$('#block_nav').click(function () {
		
		  var newSection = $('<tr class="navol" style="background: #f4edd2;">"></tr>');
            newSection.html(
			 	    '<td class="table_cell"> <h3>Наволочка</h3></td>\n+'+
					'<td class="table_cell">\n<p class="cell_titel">Тип</p>\n<select class="cell_select typenav">\n<option value="1">С рюшками</option>\n<option value="2">С замком</option>\n</select>\n</td>n+' +
                    '<td class="table_cell">\n<p class="cell_titel">Размер</p>\n<select class="cell_select pasnav">\n<option value="1">50х70</option>\n<option value="2">70х70</option>\n</select>\n</td>n+' +
                    '<td class="table_cell">\n<p class="cell_titel">Количество</p>\n<input type="number"  class="Numberin Nnav" value="10" step="10" size="10000" min="10"  />\n</td>n+' +
                    '<td class="table_cell">\n<p class="cell_titel">Ткань</p>\n<select class="cell_select ColorNav">\n<option value="1">Тенсель</option>\n<option value="2">Сатин</option>\n<option value="3">Страйп сатин</option>\n<option value="4">Бязь</option>\n<option value="5">Поплин</option>\n<option value="6">Страйп- темный</option>\n</select>\n</td>+'+
					'<td class="table_cell"> <button class="butuv_del" onclick="DelNAV(this); ">Удалить объект</button></td>');
		            $('#Pillowcase_uvv').append(newSection);
		});	
	
	
		//========== Нажатие "Удалить объект" - "Наволочка" =======================================/
	
	 function DelNAV(element) {
		 alert('ddd');
		 var sss= $(element).parents('.navol');
        sss.remove();
	 };		 
	window.DelNAV = DelNAV;
		
		
	
	
	
	
	//========== Нажатие "Размер" - "Пододеяльник" =======================================//
	$('.typepodol').click(function () {
	 	 var block = $(this).parents('.podol');
           	var Lpod=block.find('.typepodol').val();
		
		
		if (Lpod==1){
			var TitelPod=Spod1;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
		
		if (Lpod==2){
			var TitelPod=Spod2;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
		if (Lpod==3){
		    var TitelPod=Spod3;
		var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);	
		}
		if (Lpod==4){
		    var TitelPod=Spod4;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);	
    	}
		if (Lpod==5){
		    var TitelPod=Spod5;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
	});
	
	
		//========== Нажатие "Добавить объект" - "Пододеяльник" =======================================//
	$('#block_Pod').click(function () {
		
		  var newSection = $(' <tr class="podol" style="background: #e1d4cc;"></tr>');
            newSection.html(
			        
			           '<td class="table_cell"> <h3>Пододеяльник </h3></td>\n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Тип</p>\n<select class="cell_select typepodol" onclick="typepodcl(this)">\n<option value="1">1,5-ка</option>\n<option value="2">2-ка</option>\n<option value="3">Евро</option>\n<option value="4">2+евро </option>\n<option value="5">Детский </option>\n</select>\n</td>n+' +
                       '<td class="table_cell">\n<p class="cell_titel">Размер</p>\n<span class="PazPod" >150*210</span>\n</td>n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Количество</p>\n<input type="number"  class="Numberin Npod"  value="10" step="10" size="10000" min="0"  />\n</td>n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Ткань</p>\n<select class="cell_select ColorPod" >\n<option value="1">Тенсель</option>\n<option value="2">Сатин</option>\n<option value="3">Страйп сатин</option>\n<option value="4">Бязь</option>\n<option value="5">Поплин</option>\n<option value="6">Страйп- темный</option>\n</select>\n</td>n+' +
					   '<td class="table_cell"><button class="butuv_del" onclick="DelPOD(this); ">Удалить объект</button> </td>');
		            $('#Duvetcover_uvv').append(newSection);
	});	
	
	
		//========== Нажатие "Удалить объект" - "Пододеяльник" =======================================/
	
	 function DelPOD(element) {
		 var sss= $(element).parents('.podol');
        sss.remove();
	 };		 
	window.DelPOD = DelPOD;
	
	//========== Нажатие "Размер" - "Пододеяльник"  динамический блок =======================================//
	
	
	 function typepodcl(element) {
	     var block = $(element).parents('.podol');
        var Lpod=block.find('.typepodol').val();
		
		
		if (Lpod==1){
			var TitelPod=Spod1;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
		
		if (Lpod==2){
			var TitelPod=Spod2;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
		if (Lpod==3){
		    var TitelPod=Spod3;
		var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);	
		}
		if (Lpod==4){
		    var TitelPod=Spod4;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);	
		}
		if (Lpod==5){
		    var TitelPod=Spod5;
			var PazPodn =block.find('.PazPod');
			PazPodn.text(TitelPod);
		}
	};
	
	
	window.typepodcl = typepodcl;
	
	
	
	
	//========== Нажатие "Размер" - "Комплект" =======================================//
	
		
	$('.typecomlekt').click(function () {
		var block = $(this).parents('.complect');
		var Lcompl=block.find('.typecomlekt').val();;
		
		if (Lcompl==1){
			TitelComplekt=Scomlekt1;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
			
			$('#Scomlekt').text(TitelComplekt);
		}
		if (Lcompl==2){
			TitelComplekt=Scomlekt2;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		
		if (Lcompl==3){
			TitelComplekt=Scomlekt3;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		
		if (Lcompl==4){
			TitelComplekt=Scomlekt4;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		if (Lcompl==5){
		    TitelComplekt=Scomlekt5;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		if (Lcompl==6){
			TitelComplekt=Scomlekt6;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
			
	});
	
		//========== Нажатие "Добавить объект" - "Комплект" =======================================//
	$('#block_Complect').click(function () {
		
		  var newSection = $(' <tr  class="complect" style="background: #e1d4cc;"></tr>');
            newSection.html(
					   '<td class="table_cell"> <h3>Комлект </h3></td>n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Тип</p>\n<select class="cell_select typecomlekt" onclick="typecomlektcl(this)">\n<option value="1">1,5-ка</option>\n<option value="2">2-ка</option>\n<option value="3">«Семейный»</option>\n<option value="4">2+евро простыня </option>\n<option value="5">Евро* </option>\n<option value="6">Детский </option>\n</select>\n</td>n+' +
                       '<td class="table_cell">\n<p class="cell_titel">Состав комплекта</p>\n<span class="Scomlekt">Пододеяльник - 150*210,Простыня - 150*210,Наволочка - 70*50 2шт.</span>\n</td>n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Количество</p>\n<input type="number"  class="Numberin Ncompl"  value="10" step="10" size="10000" min="0"  />\n </td>n+'+
                       '<td class="table_cell">\n<p class="cell_titel">Ткань</p>\n<select class="cell_select colorcompl" >\n<option value="1">Тенсель</option>\n<option value="2" >Сатин</option>\n<option value="3">Страйп сатин</option>\n<option value="4">Бязь</option>\n<option value="5">Поплин</option>\n<option value="6">Страйп- темный</option>\n</select>\n</td>n+' +
					   '<td class="table_cell"><button class="butuv_del" onclick="DelCOMPL(this)"; ">Удалить объект</button> </td>');
				   $('#complect_uvv').append(newSection);
	});	
	
	
		//========== Нажатие "Удалить объект" - "Комплект" =======================================/
	
	 function DelCOMPL(element) {
		 var sss= $(element).parents('.complect');
        sss.remove();
	 };		 
	window.DelCOMPL = DelCOMPL;
	
	
	
	//========== Нажатие "Размер" - "Комплект" динамический объект=======================================//
	
	
	 function typecomlektcl(element) {
		
		
		 var block = $(element).parents('.complect');
           	var Lcompl=block.find('.typecomlekt').val();
		
		if (Lcompl==1){
			TitelComplekt=Scomlekt1;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
			
			$('#Scomlekt').text(TitelComplekt);
		}
		if (Lcompl==2){
			TitelComplekt=Scomlekt2;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		
		if (Lcompl==3){
			TitelComplekt=Scomlekt3;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		
		if (Lcompl==4){
			TitelComplekt=Scomlekt4;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		if (Lcompl==5){
		    TitelComplekt=Scomlekt5;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
		if (Lcompl==6){
			TitelComplekt=Scomlekt6;
			var Scomlekt =block.find('.Scomlekt');
			Scomlekt.text(TitelComplekt);
		}
			
	};
	
	window.typecomlektcl = typecomlektcl;
	
	
	
	
	
	
	
	
	
	
	//========== Нажатие "Далее"  =======================================//
	
	$('#but_block1').click(function () {
		
		 var block = $(this).parents('.content');
		 block.find('.container').hide();
		 block.find('.container2').show();
		 
		  //===== Заполнение поля "Вид заказа" на форме итогов ==========================================//
		 
		 if (Kcompl==1){
			 NKcompl=NKcompl1;
		 }
		  if (Kcompl==0){
			 NKcompl=NKcompl2;
		 }
		 
		 $('#NKcompl').text(NKcompl);
		 document.getElementById('NKcomplm').value=NKcompl;
		 
		 
		 //==================Заполнение полей "Вид изделия"  и других на форме итогов=============================//
		 
		  //==================Комплект из 3 наименование=============================//
		 
		 if (Kcompl==0){
			 NKcomplv= Nisdel4;
			 
			  var nn=$(".complect").length;
			 
			 var PR=document.getElementsByClassName('complect');
			 var Ntypeisd='';
	    	  var SisdV='';
			  var NisdV='';
			  var Colorisd='';
			  var ZzakasS =0;
			 
			 
			 //===== Вычитка  изделия:======//
			 for (var i = 0; i < nn; i++)  {
					 
				  //===== Вычитка Тип изделия:======//
				 var block=PR[i];			
				 var block2=block.querySelector('.typecomlekt');				
				var Ntypeisdv1=block2.options[block2.selectedIndex].text;
				Ntypeisd= Ntypeisd+Ntypeisdv1+';' ;
				
				//===== Вычитка  состава изделия:======//
				var bloc3=block.querySelector('.typecomlekt');
				var Lcompl=bloc3.value;
				if (Lcompl==1){
			      TitelComplekt=Scomlekt1;
			    }
		        if (Lcompl==2){
		         TitelComplekt=Scomlekt2;
		        }
		    	if (Lcompl==3){
			       TitelComplekt=Scomlekt3;
		        }
				if (Lcompl==4){
			      TitelComplekt=Scomlekt4;
		        }
		        if (Lcompl==5){
		           TitelComplekt=Scomlekt5;
		        }
		        if (Lcompl==6){
		        	TitelComplekt=Scomlekt6;
		        }
				
              SisdV=SisdV+TitelComplekt+';'+'  ';
			  
			  
			   //===== Вычитика количества изделий:======//
			   
			    var bloc4=block.querySelector('.Ncompl');
				var Nisd=bloc4.value;
			 
				Nisd= Nisd*1;
			  NisdV=NisdV+Nisd+';' ;
			  	//===== Вычитика цвета изделий:======//
				
				 var block5=block.querySelector('.colorcompl');				
				var Colorcoml=block5.options[block5.selectedIndex].text;
				Colorisd= Colorisd+Colorcoml+';' ;
			
			   //===== Цена изделия:======//
			   var bloc6=block.querySelector('.typecomlekt');
				var  Tis=bloc6.value;
			  	
			 Tis=Tis*1;
			 
			 if (Tis==1){
				ZzakasV=Zcoplekt1;
				ZzakasV=ZzakasV*Nisd;
			 }
			 
			  if (Tis==2){
				ZzakasV=Zcoplekt2;
				ZzakasV=ZzakasV*Nisd;
			 }
			 
			  if (Tis==3){
				ZzakasV=Zcoplekt3;
				ZzakasV=ZzakasV*Nisd;
			 }
			 
			 
			  if (Tis==4){
				ZzakasV=Zcoplekt4;
				ZzakasV=ZzakasV*Nisd;
			 }
			 
			  if (Tis==5){
				ZzakasV=Zcoplekt5;
				ZzakasV=ZzakasV*Nisd;
			 }
			 
			  if (Tis==6){
				ZzakasV=Zcoplekt6;
				ZzakasV=ZzakasV*Nisd;
			 }
			  
			  ZzakasS=ZzakasS+ZzakasV;
			
				
				
			 }
				
				 ///===== Заполнение Вид изделия:    ======///
			 $('#typest1').text(NKcomplv);
		    document.getElementById('typest1m').value=NKcomplv;
			 
			  ///===== Заполнение Тип изделия: :    ======///
			 $('#typeisd2').text(Ntypeisd);
		     document.getElementById('typeisd2m').value=Ntypeisd;
			 
			  ///===== Заполнение Размер или состав: :    ======///
			 $('#Sisd1').text(SisdV);
		    document.getElementById('Sisd1m').value=SisdV;
			
			 ///===== Заполнение количества изделий :    ======///
			$('#Nisd').text(NisdV);
		    document.getElementById('Nisdm').value=NisdV;
			
			///===== Заполнение цвета изделий :    ======///
			$('#Colorisd').text(Colorisd);
		    document.getElementById('Colorisdm').value=Colorisd;
			 
			 ZzakasS=Math.round(ZzakasS);
		    $('#Zzakas').text(ZzakasS);
		     document.getElementById('Zzakasm').value=ZzakasS;
				
			
		}
		 
		 
		  //==================Простыня=============================//
		 if ((Kcompl==1)&&(Kisd==1)){
			 NKcomplv= Nisdel1;
			 
			 var nn=$(".proct").length;
			 
			 var PR=document.getElementsByClassName('proct');
			 var Ntypeisd='';
	    	  var SisdV='';
			  var NisdV='';
			  var Colorisd='';
			  var ZzakasS =0;
			 
			 
			 //===== Вычитка  изделия:======//
			 for (var i = 0; i < nn; i++)  {
					 
				  //===== Вычитка Тип изделия:======//
				 var block=PR[i];			
				 var block2=block.querySelector('.typepr');				
				var Ntypeisdv1=block2.options[block2.selectedIndex].text;
				Ntypeisd= Ntypeisd+Ntypeisdv1+';';
				
				//===== Вычитка  состава изделия:======//
				var bloc3=block.querySelector('.typepr');
				var Tis=bloc3.value;
				var bloc4=block.querySelector('.type_pr');
				var pr1=bloc4.value;
			  if(pr1==2){
				   Sisd1= Spr4;
				  }
			   
			    if(pr1==1){
			 
			   if (Tis==1){
				  Sisd1= Spr1;
				 
			   }
			   if (Tis==2){
				  Sisd1= Spr2; 
			   }
			   if (Tis==3){
				  Sisd1= Spr3; 
			   }
			 }
			 SisdV=SisdV+Sisd1+';';
			 
			 
			 //===== Вычитка   количества изделий:======//
			 var bloc5=block.querySelector('.Npost');
				var Nisd=bloc5.value;
				Nisd= Nisd*1; 
				NisdV=NisdV+Nisd+';';
				
				 //===== Вычитика   Вычитка цвета изделий::======//
				 
				 var block6=block.querySelector('.ColorPr');				
				var ColorPr=block6.options[block6.selectedIndex].text;
				Colorisd= Colorisd+ColorPr+';';
				 
				 
				 
				  //===== Цена изделия:======//
				  
				 var bloc7=block.querySelector('.ColorPr');
				var Coloris=bloc7.value; 
				  
					 
			 
			 Tis=Tis*1;
			   //===== Простыня на резинке  ======//
			 if (Tis==2){
				 Zposhiv_pr=Kpr*Kpr_posh1;
				 Zposhiv_sl=Kpr*Kpr_posh2;
				 
			 if (Coloris==1){
				ZColor=ZColor1;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
				}
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			    }
			 if (Coloris==3){
				ZColor=ZColor3;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			    }
			 if (Coloris==4){
				ZColor=ZColor4;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			    }
			 if (Coloris==5){
				ZColor=ZColor5;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			    }
			 if (Coloris==6){
				ZColor=ZColor6;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
				} 
		 }
			 
			 
			 
			 //===== Простыня без  резинки  ======// 
				
		if (Tis==1){
			var type_prv=document.getElementById('type_pr').value;
			if(type_prv==1){	
				 Zposhiv_pr=Kpr1*Kpr1_posh1;
				 Zposhiv_sl=Kpr1*Kpr1_posh2;
				 Kpr_rasx=Kpr1_rasx;
			}
			if(type_prv==2){	
				 Zposhiv_pr=Kpr2*Kpr2_posh1;
				 Zposhiv_sl=Kpr2*Kpr2_posh2;
				  Kpr_rasx=Kpr2_rasx;
			}
			if(type_prv==3){	
				 Zposhiv_pr=Kpr3*Kpr3_posh1;
				 Zposhiv_sl=Kpr3*Kpr3_posh2;
				 Kpr_rasx=Kpr3_rasx;
			}
			
			 if (Coloris==1){
				ZColor=ZColor1;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			 }
			 if (Coloris==3){
				ZColor=ZColor3;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==4){
				ZColor=ZColor4;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			 }
			 if (Coloris==5){
				ZColor=ZColor5;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==6){
				ZColor=ZColor6;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 } 
    	}		 
			ZzakasV=Z1isd*Nisd;
			ZzakasS=ZzakasS+ZzakasV;
	 }
			 
			 
			 
			 
			 ///===== Заполнение Вид изделия:    ======///
			 $('#typest1').text(NKcomplv);
		    document.getElementById('typest1m').value=NKcomplv;
			 
			  ///===== Заполнение Тип изделия: :    ======///
			 $('#typeisd2').text(Ntypeisd);
		     document.getElementById('typeisd2m').value=Ntypeisd;
			 
			  ///===== Заполнение Размер или состав: :    ======///
			 $('#Sisd1').text(SisdV);
		    document.getElementById('Sisd1m').value=SisdV;
			
			 ///===== Заполнение количества изделий :    ======///
			$('#Nisd').text(NisdV);
		    document.getElementById('Nisdm').value=NisdV;
			
			///===== Заполнение цвета изделий :    ======///
			$('#Colorisd').text(Colorisd);
		    document.getElementById('Colorisdm').value=Colorisd;
			 
			 ZzakasS=Math.round(ZzakasS);
		    $('#Zzakas').text(ZzakasS);
		     document.getElementById('Zzakasm').value=ZzakasS;
			 
			 			
        }
			
			
			
		//==================Наволочка=============================//	
		if ((Kcompl==1)&&(Kisd==2)){
			 NKcomplv= Nisdel2;
			 
			  var nn=$(".navol").length;
			 
			 var PR=document.getElementsByClassName('navol');
			 var Ntypeisd='';
	    	  var SisdV='';
			  var NisdV='';
			  var Colorisd='';
			  var ZzakasS =0;
			 
			 
			 //===== Вычитка  изделия:======//
			 for (var i = 0; i < nn; i++)  {
					 
				  //===== Вычитка Тип изделия:======//
				 var block=PR[i];			
				 var block2=block.querySelector('.typenav');				
				var Ntypeisdv1=block2.options[block2.selectedIndex].text;
				Ntypeisd= Ntypeisd+Ntypeisdv1+';';
				
				
				  //===== Вычитка состава изделия:======//
				   var block3=block.querySelector('.pasnav');				
				var Sprnav=block3.options[block3.selectedIndex].text;
				SisdV= SisdV+Sprnav+';';
				  
			 //===== Вычитка количества изделий:======//
			 var block4=block.querySelector('.Nnav');	
			 var Nisd=block4.value; 
				Nisd=Nisd*1;
				NisdV=NisdV+Nisd+';';
				
				 //===== Вычитка цвета изделий:======// 
				   var block5=block.querySelector('.ColorNav');				
				var ColorNav=block5.options[block5.selectedIndex].text;
				Colorisd= Colorisd+ColorNav+';';
				
					 //===== Цена изделия:======//
				var block6=block.querySelector('.pasnav');	
			    var Tis=block6.value;	
				
      			var block7=block.querySelector('.ColorNav');	
			     var Coloris=block7.value;	  
						 
			 
			 Tis=Tis*1;
			   //===== Наволочка 50х70 ======//
			 if (Tis==1){
				 Zposhiv_pr=Knav1*Knav1_posh1;
				 Zposhiv_sl=Knav1*Knav1_posh2;
				 Kpr_rasx=Knav1_rasx;
			 }
			 
			  //===== Наволочка 70х70 ======//
			 
			  if (Tis==2){
				 Zposhiv_pr=Knav2*Knav2_posh1;
				 Zposhiv_sl=Knav2*Knav2_posh2;
				  Kpr_rasx=Knav2_rasx;
			 }
			 
			 
			 
				 
			 if (Coloris==1){
				ZColor=ZColor1;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
				}
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
				}
			 if (Coloris==3){
				ZColor=ZColor3;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==4){
				ZColor=ZColor4;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			 }
			 if (Coloris==5){
				ZColor=ZColor5;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==6){
				ZColor=ZColor6;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 } 
		 				
				ZzakasV=Z1isd*Nisd;
				
				ZzakasS=ZzakasS+ZzakasV;
			
				
				 }
			   
			    ///===== Заполнение Вид изделия:    ======///
			 $('#typest1').text(NKcomplv);
		    document.getElementById('typest1m').value=NKcomplv;
			 
			  ///===== Заполнение Тип изделия: :    ======///
			 $('#typeisd2').text(Ntypeisd);
		     document.getElementById('typeisd2m').value=Ntypeisd;
			 
			  ///===== Заполнение Размер или состав: :    ======///
			 $('#Sisd1').text(SisdV);
		    document.getElementById('Sisd1m').value=SisdV;
			
			 ///===== Заполнение количества изделий :    ======///
			$('#Nisd').text(NisdV);
		    document.getElementById('Nisdm').value=NisdV;
			
			///===== Заполнение цвета изделий :    ======///
			$('#Colorisd').text(Colorisd);
		    document.getElementById('Colorisdm').value=Colorisd;
			 
			 ZzakasS=Math.round(ZzakasS);
		    $('#Zzakas').text(ZzakasS);
		     document.getElementById('Zzakasm').value=ZzakasS;
			   
			 
			 
		    }
			
		//==================Пододеяльник=============================//	
		if ((Kcompl==1)&&(Kisd==3)){
			 NKcomplv= Nisdel3;
			 
			 var nn=$(".podol").length;
			 
			  var PR=document.getElementsByClassName('podol');
			 var Ntypeisd='';
	    	  var SisdV='';
			  var NisdV='';
			  var Colorisd='';
			  var ZzakasS =0;
			 
			 
			 //===== Вычитка  изделия:======//
			 for (var i = 0; i < nn; i++)  {
					 
				  //===== Вычитка Тип изделия:======//
				 var block=PR[i];			
				 var block2=block.querySelector('.typepodol');				
				var Ntypeisdv1=block2.options[block2.selectedIndex].text;
				Ntypeisd= Ntypeisd+Ntypeisdv1+';';
				
				
				 //var Ntypeisd= $("#typepodol option:selected").text();
				
				
				  //===== Вычитка состава изделия:======//
				   var block3=block.querySelector('.typepodol');				
				
				
				var Tpod=block3.value;
			   if (Tpod==1){
				  Sisd1= Spod1; 
			   }
			   if (Tpod==2){
				  Sisd1= Spod2; 
			   }
			   if (Tpod==3){
				  Sisd1= Spod3; 
			   }
			   if (Tpod==4){
				  Sisd1= Spod4; 
			   }
			   if (Tpod==5){
				  Sisd1= Spod5; 
			   }
		    	SisdV= SisdV+Sisd1+';';
				
				
				 //===== Вычитика количества изделий:======//
			 
			  var block4=block.querySelector('.Npod');
			    Nisd=block4.value;
				
				Nisd= Nisd*1;
				NisdV=NisdV+Nisd+';';
				
				 //===== Вычитика цвета изделий:======//
				 
				  var block5=block.querySelector('.ColorPod');
				  var ColorPod=block5.options[block5.selectedIndex].text;
				  Colorisd= Colorisd+ColorPod+';';
				  
				  
				  
				 //===== Цена изделия:======//
				var block6=block.querySelector('.typepodol'); 
			   var Tis=block6.value;
			   var block7=block.querySelector('.ColorPod'); 
			 var Coloris=block7.value;

			 
			 Tis=Tis*1;
			   //===== Пододеяльник 1,5-ка ======//
			 if (Tis==1){
		    	 Zposhiv_pr= Kpod1*Kpod1_posh1;
				 Zposhiv_sl=Kpod1*Kpod1_posh2;
				 Kpr_rasx=Kpod1_rasx;
			 }
			   //===== Пододеяльник 2-ка ======//
			 if (Tis==2){
				 Zposhiv_pr= Kpod2*Kpod2_posh1;
				 Zposhiv_sl=Kpod2*Kpod2_posh2;
				 Kpr_rasx=Kpod2_rasx;
			 }
			   //===== Пододеяльника Евро ======//
			 if (Tis==3){
				 Zposhiv_pr= Kpod3*Kpod3_posh1;
				 Zposhiv_sl=Kpod3*Kpod3_posh2;
				 Kpr_rasx=Kpod3_rasx;
			 }
			   //===== Пододеяльника 2+евро ======//
			 if (Tis==4){
				 Zposhiv_pr= Kpod4*Kpod4_posh1;
				 Zposhiv_sl=Kpod4*Kpod4_posh2;
				 Kpr_rasx=Kpod4_rasx;
			 }
			   //===== Пододеяльника Детский ======//
			 if (Tis==5){
				 Zposhiv_pr= Kpod5*Kpod5_posh1;
				 Zposhiv_sl=Kpod5*Kpod5_posh2;
				 Kpr_rasx=Kpod5_rasx;
			 }
			 
			 
				 
			 if (Coloris==1){
				ZColor=ZColor1;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			 }
			 if (Coloris==3){
				ZColor=ZColor3;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==4){
				ZColor=ZColor4;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
			 }
			 if (Coloris==5){
				ZColor=ZColor5;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			 }
			 if (Coloris==6){
				ZColor=ZColor6;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
			} 
		 
						
				ZzakasV=Z1isd*Nisd;
				
				ZzakasS=ZzakasS+ZzakasV;
				
				
			 }	
			 
			 
			 
			 ///===== Заполнение Вид изделия:    ======///
			 $('#typest1').text(NKcomplv);
		     document.getElementById('typest1m').value=NKcomplv;
			 
			  ///===== Заполнение Тип изделия: :    ======///
			 $('#typeisd2').text(Ntypeisd);
		     document.getElementById('typeisd2m').value=Ntypeisd;
			 
			  ///===== Заполнение Размер или состав: :    ======///
			 $('#Sisd1').text(SisdV);
		    document.getElementById('Sisd1m').value=SisdV;
			
			 ///===== Заполнение количества изделий :    ======///
			$('#Nisd').text(NisdV);
		    document.getElementById('Nisdm').value=NisdV;
			
			///===== Заполнение цвета изделий :    ======///
			$('#Colorisd').text(Colorisd);
		    document.getElementById('Colorisdm').value=Colorisd;
			 
			 ZzakasS=Math.round(ZzakasS);
		    $('#Zzakas').text(ZzakasS);
		     document.getElementById('Zzakasm').value=ZzakasS;
		 
			 
		    }
	
		 
	});
	
	
	//========== Нажатие "Назад"  =======================================//
	
	$('#but_block2').click(function () {
		
		 var block = $(this).parents('.content');
		 block.find('.container').show();
		 block.find('.container2').hide();
	});
	
	
	



});














