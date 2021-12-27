var  Kcompl, Kisd,NKcomplv, NKcompl, Ntypeisd, TitelComplekt, Nisd, ZzakasV, ZColor, Z1isd, Zposhiv_pr,Zposhiv_sl ;



Kcompl=1; //выбрали "Рассчитать пошив изделия" если =0 - выбрали "Рассчитать комплект полностью"
Kisd=1;    //выбрали "Рассчитать пошив изделия" и  "Простыня"=1,  выбрали   "Наволочка"=2, выбрали   "Наволочка"=3, комплект=4


$(document).ready(function() {
	document.getElementById('calcmenu1_2').checked = true;
	document.getElementById('calcmenu2_1').checked = true;
	$('#calcmenu1_2').checked = true;
	$('#calcmenu1_1').checked = false;
	
	
	
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
	$('#cell_select_pr1').click(function () {
		
		var typepr=document.getElementById('cell_select_pr1').value;
		//alert(typepr)
		if (typepr==1){
			var block = $(this).parents('.calc_block_sheet');
		      block.find('.type_pr').show();
              block.find('.PazPr').show();
		}
		
		if (typepr==2){
			var block = $(this).parents('.calc_block_sheet');
		      block.find('.type_pr').hide();
              block.find('.PazPr').hide();
		}
		
	});
	
		//========== Нажатие "Размер" - "Простыня" =======================================//
	$('#type_pr').click(function () {
		
		var Lpr=document.getElementById('type_pr').value;
		//alert(typepr)
		if (Lpr==1){
			var TitelPr="140*200*25";
			$('#PazPr').text(TitelPr);
		}
		
		if (Lpr==2){
			var TitelPr="160*200*25";
			$('#PazPr').text(TitelPr);
			
		}
		if (Lpr==3){
			var TitelPr="180*200*25";
			$('#PazPr').text(TitelPr);
			
		}
		
		
		
	});
	
	
	//========== Нажатие "Размер" - "Пододеяльник" =======================================//
	$('#typepodol').click(function () {
		
		var Lpod=document.getElementById('typepodol').value;
		//alert(typepr)
		if (Lpod==1){
			var TitelPod=Spod1;
			$('#PazPod').text(TitelPod);
		}
		
		if (Lpod==2){
			var TitelPod=Spod2;
			$('#PazPod').text(TitelPod);
			
		}
		if (Lpod==3){
		    var TitelPod=Spod3;
			$('#PazPod').text(TitelPod);	
			
		}
		if (Lpod==4){
		    var TitelPod=Spod4;
			$('#PazPod').text(TitelPod);	
			
		}
		if (Lpod==5){
		    var TitelPod=Spod5;
			$('#PazPod').text(TitelPod);	
			
		}
		
		
		
	});
	//========== Нажатие "Размер" - "Комплект" =======================================//
	$('#typecomlekt').click(function () {
		//alert(0)
		
		var Lcompl=document.getElementById('typecomlekt').value;
		//alert(typepr)
		if (Lcompl==1){
			TitelComplekt=Scomlekt1;
			$('#Scomlekt').text(TitelComplekt);
		}
		if (Lcompl==2){
			TitelComplekt=Scomlekt2;
			$('#Scomlekt').text(TitelComplekt);
		}
		
		if (Lcompl==3){
			TitelComplekt=Scomlekt3;
			$('#Scomlekt').text(TitelComplekt);
		}
		
		if (Lcompl==4){
			TitelComplekt=Scomlekt4;
			$('#Scomlekt').text(TitelComplekt);
		}
		if (Lcompl==5){
		    TitelComplekt=Scomlekt5;
			$('#Scomlekt').text(TitelComplekt);
		}
		if (Lcompl==6){
			TitelComplekt=Scomlekt6;
			$('#Scomlekt').text(TitelComplekt);
		}
			
	});
	
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
			 //===== Вычитика Тип изделия:======//
			 var Ntypeisd= $("#typecomlekt option:selected").text();
			 
			 //===== Вычитика состава изделия:======//
			 var Tis=document.getElementById('typecomlekt').value;
			 
				Sisd1= TitelComplekt;
				
			 
			 //===== Вычитика количества изделий:======//
			 var Ncompl=document.getElementById('Ncompl').value;
			 
				Nisd= Ncompl;
				
				//===== Вычитика цвета изделий:======//
			 var Colorcoml= $("#colorcompl option:selected").text();
			 
				Colorisd= Colorcoml;
			
			 
			 //===== Цена изделия:======//
			 var Tis=document.getElementById('typecomlekt').value;
			 Nisd=Nisd*1;
	
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
		}
		 
		 
		  //==================Простыня=============================//
		 if ((Kcompl==1)&&(Kisd==1)){
			 NKcomplv= Nisdel1;
					 
			 //===== Вычитика Тип изделия:======//
			 var Ntypeisd= $("#cell_select_pr1 option:selected").text();
			 
			  //===== Вычитика состава изделия:======//
			 var Tis=document.getElementById('type_pr').value;
			 
			 // alert(Tis)
			  Tis=Tis*1;
			 
			 var pr1=document.getElementById('cell_select_pr1').value;
			 // alert(pr1)
			 
			   if(pr1==2){
				   Sisd1= Spr4; 
				 //  alert(4)
			   }
			   
			    if(pr1==1){
			 
			   if (Tis==1){
				  Sisd1= Spr1; 
				//  alert(1)
			   }
			   if (Tis==2){
				  Sisd1= Spr2; 
				//   alert(2)
			   }
			   if (Tis==3){
				  Sisd1= Spr3; 
				 //  alert(3)
			   }
				}
			   
			 
			//===== Вычитика количества изделий:======//
			 var Npost=document.getElementById('Npost').value;
			 
				Nisd= Npost*1; 
			 
			 //===== Вычитика цвета изделий:======//
			 var ColorPr= $("#ColorPr option:selected").text();
			 //console.log(ColorPr)
				Colorisd= ColorPr;
				
				
				 //===== Цена изделия:======//
			 var Tis=document.getElementById('cell_select_pr1').value;
			 var Coloris=document.getElementById('ColorPr').value;
			 
			//alert(Tis);
			 
			 
			 Tis=Tis*1;
			   //===== Простыня на резинке  ======//
			 if (Tis==2){
				 Zposhiv_pr=Kpr*Kpr_posh1;
				 Zposhiv_sl=Kpr*Kpr_posh2;
				 
			 if (Coloris==1){
				ZColor=ZColor1;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_sl;
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
				
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
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
				console.log(ZColor);
				console.log(Kpr_rasx);
				console.log(Zposhiv_sl);
				console.log(Zposhiv_pr);
				
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
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
				
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
				
				
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
				console.log('=================');
				//console.log(ZColor);
				//console.log(Kpr_rasx);
				//console.log(Zposhiv_sl);
			 } 
			
			
			
			
			
			
			
			
			
		}		 
				
				
				
				
				
			ZzakasV=Z1isd*Nisd;
			
        }
			
			
			
		//==================Наволочка=============================//	
		if ((Kcompl==1)&&(Kisd==2)){
			 NKcomplv= Nisdel2;
			 
			 //===== Вычитика Тип изделия:======//
			  var Ntypeisd= $("#typenav option:selected").text();
			 
			  //===== Вычитика состава изделия:======//
			 var Sprnav=$("#pasnav option:selected").text();
			 Sisd1= Sprnav; 
			 
			 //===== Вычитика количества изделий:======//
			 var Nnav=document.getElementById('Nnav').value;
			 
				Nisd= Nnav;
				
				 //===== Вычитика цвета изделий:======//
			 var ColorNav= $("#ColorNav option:selected").text();
			 
				Colorisd= ColorNav;
				
				 //===== Цена изделия:======//
			 var Tis=document.getElementById('pasnav').value;
			 var Coloris=document.getElementById('ColorNav').value;
			 
			//console.log(Tis);
			//console.log(Coloris);
			 
			 
			 Tis=Tis*1;
			   //===== Наволочка 50х70 ======//
			 if (Tis==1){
				// console.log(Knav1);
		    	//console.log(Knav1_posh1);
				 
				 
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
				console.log(ZColor);
				console.log(Kpr_rasx);
				console.log(Zposhiv_pr);
				
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
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
				console.log(ZColor);
				console.log(Kpr_rasx);
				console.log(Zposhiv_sl);
				console.log(Zposhiv_pr);
				
			 } 
		 
				
				
				
				
				ZzakasV=Z1isd*Nisd;
				
			
			 
			 
		    }
			
		//==================Пододеяльник=============================//	
		if ((Kcompl==1)&&(Kisd==3)){
			 NKcomplv= Nisdel3;
			 
			 //===== Вычитика Тип изделия:======//
			  var Ntypeisd= $("#typepodol option:selected").text();
			  
			   //===== Вычитика состава изделия:======//
			   var Tpod=document.getElementById('typepodol').value;
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
			   
			    //===== Вычитика количества изделий:======//
			 var Npod=document.getElementById('Npod').value;
			 
				Nisd= Npod;
				
				 //===== Вычитика цвета изделий:======//
			 var ColorPod= $("#ColorPod option:selected").text();
			 
				Colorisd= ColorPod;
				
					 //===== Цена изделия:======//
			 var Tis=document.getElementById('typepodol').value;
			 var Coloris=document.getElementById('ColorPod').value;
			 
			//console.log(Tis);
			//console.log(Coloris);
			 
			 
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
				console.log(ZColor);
				console.log(Kpr_rasx);
				console.log(Zposhiv_pr);
				
			 }
			 if (Coloris==2){
				ZColor=ZColor2;
				Z1isd=ZColor*Kpr_rasx+Zposhiv_pr;
				//alert(ZColor);
				//alert(Kpr_rasx);
				//alert(Zposhiv_pr);
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
				console.log(ZColor);
				console.log(Kpr_rasx);
				console.log(Zposhiv_sl);
				console.log(Zposhiv_pr);
				
			 } 
		 
				
				
				
				
				ZzakasV=Z1isd*Nisd;
				
				
				
			 			 
			 
		    }
			
			
			

		$('#typest1').text(NKcomplv);
		document.getElementById('typest1m').value=NKcomplv;
		
		$('#typeisd2').text(Ntypeisd);
		document.getElementById('typeisd2m').value=Ntypeisd;
		
		$('#Sisd1').text(Sisd1);
		document.getElementById('Sisd1m').value=Sisd1;
		
		$('#Nisd').text(Nisd);
		document.getElementById('Nisdm').value=Nisd;
		
		
		$('#Colorisd').text(Colorisd);
		document.getElementById('Colorisdm').value=Colorisd;
		
		
		
		ZzakasV=Math.round(ZzakasV);
		$('#Zzakas').text(ZzakasV);
		document.getElementById('Zzakasm').value=ZzakasV;
		
		
	
		
		
		
		
		
		
		
		
		 
		 
		 
	});
	
	
	//========== Нажатие "Назад"  =======================================//
	
	$('#but_block2').click(function () {
		
		 var block = $(this).parents('.content');
		 block.find('.container').show();
		 block.find('.container2').hide();
	});
	
	
	
	
	
	
	

    //========== Нажатие "Назад" на  блоке "Фундамент" =======================================//

  // $('#but_block2_1').click(function () {
  //    var block = $(this).parents('.content');
   //     block.find('.zakas_block2').show();
    //    block.find('.zakas_block3').hide();
    //    block.find('.zakas_block4').hide();
    //    block.find('.zakas_block5').hide();
   //    block.find('.zakas_block6').hide();
 //  });

    //========== Нажатие "Вперед" на блоке "Фундамент" =======================================//

   // $('#but_block2_3').click(function () {
    //    var block = $(this).parents('.content');
    //    block.find('.zakas_block3').show();
    ////    block.find('.zakas_block2').hide();
    //    block.find('.zakas_block4').hide();
    //    block.find('.zakas_block5').hide();
     //   block.find('.zakas_block6').hide();
    // });

    //========== Нажатие "Назад" на  блоке "Стены" =======================================//

  //  $('#but_block3_2').click(function () {
   //     var block = $(this).parents('.content');
   //     block.find('.zakas_block2').show();
   //     block.find('.zakas_block3').hide();
   ////     block.find('.zakas_block4').hide();
    //    block.find('.zakas_block5').hide();
    //    block.find('.zakas_block6').hide();
    // });

    //========== Нажатие "Вперед" на  блоке "Стены" =======================================//

   // $('#but_block3_4').click(function () {
   //     var block = $(this).parents('.content');
   //     block.find('.zakas_block4').show();
   //     block.find('.zakas_block2').hide();
    //    block.find('.zakas_block3').hide();
    //    block.find('.zakas_block5').hide();
    //    block.find('.zakas_block6').hide();
   // });



    //========== Нажатие "Назад" на  блоке "Этажность"=======================================//

 //   $('#but_block4_3').click(function () {
  //      var block = $(this).parents('.content');
  //      block.find('.zakas_block3').show();
  //      block.find('.zakas_block4').hide();
  ///      block.find('.zakas_block2').hide();
  //      block.find('.zakas_block5').hide();
   //     block.find('.zakas_block6').hide();
   // });

    //========== Нажатие "Вперед" на  блоке "Этажность" =======================================//

   // $('#but_block4_5').click(function () {
   //     var block = $(this).parents('.content');
   //     block.find('.zakas_block4').hide();
   //     block.find('.zakas_block2').hide();
   //     block.find('.zakas_block3').hide();
    //    block.find('.zakas_block5').show();
    //    block.find('.zakas_block6').hide();
    //});


    //========== Нажатие "Назад" на  блоке "Площадь"=======================================//

  //  $('#but_block5_4').click(function () {
   //     var block = $(this).parents('.content');
   //     block.find('.zakas_block3').hide();
   ///     block.find('.zakas_block4').show();
   //     block.find('.zakas_block2').hide();
   //     block.find('.zakas_block5').hide();
   //     block.find('.zakas_block6').hide();
   // });

    //========== Нажатие "Вперед" на  блоке "Площадь" =======================================//

  //  $('#but_block5_6').click(function () {
  //      var block = $(this).parents('.content');
   //     block.find('.zakas_block4').hide();
   //     block.find('.zakas_block2').hide();
   //     block.find('.zakas_block3').hide();
   //     block.find('.zakas_block5').hide();
   //     block.find('.zakas_block6').show();
   //     zena();
    //});


    //========== Нажатие "Назад" на  блоке "Итоги"=======================================//

  //  $('#but_block6_5').click(function () {
  //      var block = $(this).parents('.content');
  //      block.find('.zakas_block3').hide();
  //      block.find('.zakas_block4').hide();
  //      block.find('.zakas_block2').hide();
   //     block.find('.zakas_block5').show();
   //     block.find('.zakas_block6').hide();
       // zena();
   // });

   







    //=================================================//

    function zena() {


       var Sst=document.getElementById('sp').value;
        var Zitog=(Ks*Ket+Kf)*Sst;

        $('#fundament1').text(Nfund);
        $('#typest1').text(Nsten);
        $('#et1').text(Net);
        $('#Sst1').text(Sst);
        $('#Zi1').text(Zitog);

        document.getElementById('fund2m').value=Nfund;
        document.getElementById('Msten2m').value=Nsten;
        document.getElementById('Etag2m').value=Net;
        document.getElementById('Sb2m').value=Sst;
        document.getElementById('Zb2m').value=Zitog;



    };




});














