$( document ).ready(function() {

  
    $("#but_block_adm_3").click(function(){
         
        var ZbutovkaAdmv=document.getElementById('ZbutovkaAdm').value;
        var ZbutovkaPrAdmv=document.getElementById('ZbutovkaPrAdm').value;
        var ZbutovkaNameAdmv=document.getElementById('ZbutovkaNameAdm').value;
        ZbutovkaNameAdmv="'"+ZbutovkaNameAdmv+"'";
       

        var ZbutovkaManipAdmv=document.getElementById('ZbutovkaManipadm').value;
        var ZbutovkaManipprAdmv=document.getElementById('ZbutovkaManipprAdm').value;
        var ZbutovkaManipNameAdm=document.getElementById('ZbutovkaManipNameAdm').value;
        ZbutovkaManipNameAdm="'"+ZbutovkaManipNameAdm+"'";

        var ZBioTyalAdmv=document.getElementById('ZBioTyalAdm').value;
        var ZBioTyalprAdmv=document.getElementById('ZBioTyalprAdm').value;
        var BioTyalNameAdmv=document.getElementById('BioTyalNameAdm').value;
        BioTyalNameAdmv="'"+BioTyalNameAdmv+"'";   



        var DostavkaBioTyalAdmv=document.getElementById('DostavkaBioTyalAdm').value;
        var DostavkaBioTyalprAdmv=document.getElementById('DostavkaBioTyalprAdm').value;
        var DostavkaBioTyalNameAdmv=document.getElementById('DostavkaBioTyalNameAdm').value;
        DostavkaBioTyalNameAdmv="'"+DostavkaBioTyalNameAdmv+"'";

        var ZPrivjzkaAdmv=document.getElementById('ZPrivjzkaAdm').value;
        var ZPrivjzkaprAdmv=document.getElementById('ZPrivjzkaprAdm').value;
        var PrivjzkaNameAdmv=document.getElementById('PrivjzkaNameAdm').value;
        PrivjzkaNameAdmv="'"+PrivjzkaNameAdmv+"'";

        var ZKotlovanAdmv=document.getElementById('ZKotlovanAdm').value;
        var ZKotlovanprAdmv=document.getElementById('ZKotlovanprAdm').value;
        var ZKotlovanNameAdmv=document.getElementById('ZKotlovanNameAdm').value;
        ZKotlovanNameAdmv="'"+ZKotlovanNameAdmv+"'";

        var ZGeoTekstUAdmv=document.getElementById('ZGeoTekstUAdm').value;
        var ZGeoTekstUprAdmv=document.getElementById('ZGeoTekstUprAdm').value;
        var ZGeoTekstUNameAdmv=document.getElementById('ZGeoTekstUNameAdm').value;
        ZGeoTekstUNameAdmv="'"+ZGeoTekstUNameAdmv+"'";

        var ZGeoTekst200Admv=document.getElementById('ZGeoTekst200Adm').value;
        var ZGeoTekst200prAdmv=document.getElementById('ZGeoTekst200prAdm').value;
        var ZGeoTekst200NameAdmv=document.getElementById('ZGeoTekst200NameAdm').value;
        ZGeoTekst200NameAdmv="'"+ZGeoTekst200NameAdmv+"'";

        var ZOtsup200Admv=document.getElementById('ZOtsup200Adm').value;
        var ZOtsup200prAdmv=document.getElementById('ZOtsup200prAdm').value;
        var ZOtsup200NameAdmv=document.getElementById('ZOtsup200NameAdm').value;
        ZOtsup200NameAdmv="'"+ZOtsup200NameAdmv+"'";

        var ZekskovatorAdmv=document.getElementById('ZekskovatorAdm').value;
        var ZekskovatorprAdmv=document.getElementById('ZekskovatorprAdm').value;
        var ZekskovatorNameAdmv=document.getElementById('ZekskovatorNameAdm').value;
        ZekskovatorNameAdmv="'"+ZekskovatorNameAdmv+"'";

        var ZPesokNAdmv=document.getElementById('ZPesokNAdm').value;
        var ZPesokNprAdmv=document.getElementById('ZPesokNprAdm').value;
        var ZPesokNNameAdmv=document.getElementById('ZPesokNNameAdm').value;
        ZPesokNNameAdmv="'"+ZPesokNNameAdmv+"'";

        var ZOtsupSh150Admv=document.getElementById('ZOtsupSh150Adm').value;
        var ZOtsupSh150prAdmv=document.getElementById('ZOtsupSh150prAdm').value;
        var ZOtsupSh150NameAdmv=document.getElementById('ZOtsupSh150NameAdm').value;
        ZOtsupSh150NameAdmv="'"+ZOtsupSh150NameAdmv+"'";

        var Zekskovator29Admv=document.getElementById('Zekskovator29Adm').value;
        var Zekskovator29prAdmv=document.getElementById('Zekskovator29prAdm').value;
        var Zekskovator29NameAdmv=document.getElementById('Zekskovator29NameAdm').value;
        Zekskovator29NameAdmv="'"+Zekskovator29NameAdmv+"'";

        var ZSheb2040Admv=document.getElementById('ZSheb2040Adm').value;
        var ZSheb2040prAdmv=document.getElementById('ZSheb2040prAdm').value;
        var ZSheb2040NameAdmv=document.getElementById('ZSheb2040NameAdm').value;
        ZSheb2040NameAdmv="'"+ZSheb2040NameAdmv+"'";

        var ZfanTrAdmv=document.getElementById('ZfanTrAdm').value;
        var ZfanTrprAdmv=document.getElementById('ZfanTrprAdm').value;
        var ZfanTrNameAdmv=document.getElementById('ZfanTrNameAdm').value;
        ZfanTrNameAdmv="'"+ZfanTrNameAdmv+"'";

        var ZfanTr110Admv=document.getElementById('ZfanTr110Adm').value;
        var ZfanTr110prAdmv=document.getElementById('ZfanTr110prAdm').value;
        var ZfanTr110NameAdmv=document.getElementById('ZfanTr110NameAdm').value;
        ZfanTr110NameAdmv="'"+ZfanTr110NameAdmv+"'";

        var ZOtbod110Admv=document.getElementById('ZOtbod110Adm').value;
        var ZOtbod110prAdmv=document.getElementById('ZOtbod110prAdm').value;
        var ZOtbod110NameAdmv=document.getElementById('ZOtbod110NameAdm').value;
        ZOtbod110NameAdmv="'"+ZOtbod110NameAdmv+"'";

        var Troyn110Admv=document.getElementById('Troyn110Adm').value;
        var Troyn110prAdmv=document.getElementById('Troyn110prAdm').value;
        var Troyn110NameAdmv=document.getElementById('Troyn110NameAdm').value;
        Troyn110NameAdmv="'"+Troyn110NameAdmv+"'";

        var Zaglyshrf110Admv=document.getElementById('Zaglyshrf110Adm').value;
        var Zaglyshrf110prAdmv=document.getElementById('Zaglyshrf110prAdm').value;
        var Zaglyshrf110NameAdmv=document.getElementById('Zaglyshrf110NameAdm').value;
        Zaglyshrf110NameAdmv="'"+Zaglyshrf110NameAdmv+"'";

        var ZTeplo144Admv=document.getElementById('ZTeplo144Adm').value;
        var ZTeplo144prAdmv=document.getElementById('ZTeplo144prAdm').value;
        var ZTeplo144NameAdmv=document.getElementById('ZTeplo144NameAdm').value;
        ZTeplo144NameAdmv="'"+ZTeplo144NameAdmv+"'";

        var ZTeplo144Admv=document.getElementById('ZTeplo144Adm').value;
        var ZTeplo144prAdmv=document.getElementById('ZTeplo144prAdm').value;
        var ZTeplo144NameAdmv=document.getElementById('ZTeplo144NameAdm').value;
        ZTeplo144NameAdmv="'"+ZTeplo144NameAdmv+"'";

        var ZGilsaAdmv=document.getElementById('ZGilsaAdm').value;
        var ZGilsaprAdmv=document.getElementById('ZGilsaprAdm').value;
        var ZGilsaNameAdmv=document.getElementById('ZGilsaNameAdm').value;
        ZGilsaNameAdmv="'"+ZGilsaNameAdmv+"'";

        var ZTruba50Admv=document.getElementById('ZTruba50Adm').value;
        var ZTruba50prAdmv=document.getElementById('ZTruba50prAdm').value;
        var ZTruba50NameAdmv=document.getElementById('ZTruba50NameAdm').value;
        ZTruba50NameAdmv="'"+ZTruba50NameAdmv+"'";

        var ZTrubaGof110Admv=document.getElementById('ZTrubaGof110Adm').value;
        var ZTrubaGof110prAdmv=document.getElementById('ZTrubaGof110prAdm').value;
        var ZTrubaGof110NameAdmv=document.getElementById('ZTrubaGof110NameAdm').value;
        ZTrubaGof110NameAdmv="'"+ZTrubaGof110NameAdmv+"'";

        var ZDostavkaBl3Admv=document.getElementById('ZDostavkaBl3Adm').value;
        var ZDostavkaBl3prAdmv=document.getElementById('ZDostavkaBl3prAdm').value;
        var ZDostavkaBl3NameAdmv=document.getElementById('ZDostavkaBl3NameAdm').value;
        ZDostavkaBl3NameAdmv="'"+ZDostavkaBl3NameAdmv+"'";

        var ZOpalybkaAdmv=document.getElementById('ZOpalybkaAdm').value;
        var ZOpalybkaprAdmv=document.getElementById('ZOpalybkaprAdm').value;
        var ZOpalybkaNameAdmv=document.getElementById('ZOpalybkaNameAdm').value;
        ZOpalybkaNameAdmv="'"+ZOpalybkaNameAdmv+"'";

        var ZPiloMatAdmv=document.getElementById('ZPiloMatAdm').value;
        var ZPiloMatprAdmv=document.getElementById('ZPiloMatprAdm').value;
        var ZPiloMatNameAdmv=document.getElementById('ZPiloMatNameAdm').value;
        ZPiloMatNameAdmv="'"+ZPiloMatNameAdmv+"'";

        var ZYtepPlAdmv=document.getElementById('ZYtepPlAdm').value;
        var ZYtepPlprAdmv=document.getElementById('ZYtepPlprAdm').value;
        var ZYtepPlNameAdmv=document.getElementById('ZYtepPlNameAdm').value;
        ZYtepPlNameAdmv="'"+ZYtepPlNameAdmv+"'";

        var ZGenoPolistirolAdmv=document.getElementById('ZGenoPolistirolAdm').value;
        var ZGenoPolistirolprAdmv=document.getElementById('ZGenoPolistirolprAdm').value;
        var ZGenoPolistirolNameAdmv=document.getElementById('ZGenoPolistirolNameAdm').value;
        ZGenoPolistirolNameAdmv="'"+ZGenoPolistirolNameAdmv+"'";

        var ZYteplTorzAdmv=document.getElementById('ZYteplTorzAdm').value;
        var ZYteplTorzprAdmv=document.getElementById('ZYteplTorzprAdm').value;
        var ZYteplTorzNameAdmv=document.getElementById('ZYteplTorzNameAdm').value;
        ZYteplTorzNameAdmv="'"+ZYteplTorzNameAdmv+"'";

        var ZGenoPolistirol2Admv=document.getElementById('ZGenoPolistirol2Adm').value;
        var ZGenoPolistirol2prAdmv=document.getElementById('ZGenoPolistirol2prAdm').value;
        var ZGenoPolistirol2NameAdmv=document.getElementById('ZGenoPolistirol2NameAdm').value;
        ZGenoPolistirol2NameAdmv="'"+ZGenoPolistirol2NameAdmv+"'";

        var ZDubekTeploAdmv=document.getElementById('ZDubekTeploAdm').value;
        var ZDubekTeploprAdmv=document.getElementById('ZDubekTeploprAdm').value;
        var ZDubekTeploNameAdmv=document.getElementById('ZDubekTeploNameAdm').value;
        ZDubekTeploNameAdmv="'"+ZDubekTeploNameAdmv+"'";

        var ZKleyPolisAdmv=document.getElementById('ZKleyPolisAdm').value;
        var ZKleyPolisprAdmv=document.getElementById('ZKleyPolisprAdm').value;
        var ZKleyPolisNameAdmv=document.getElementById('ZKleyPolisNameAdm').value;
        ZKleyPolisNameAdmv="'"+ZKleyPolisNameAdmv+"'";

        var ZGidroFundAdmv=document.getElementById('ZGidroFundAdm').value;
        var ZGidroFundprAdmv=document.getElementById('ZGidroFundprAdm').value;
        var ZGidroFundNameAdmv=document.getElementById('ZGidroFundNameAdm').value;
        ZGidroFundNameAdmv="'"+ZGidroFundNameAdmv+"'";

        var ZMembramaAdmv=document.getElementById('ZMembramaAdm').value;
        var ZMembramaprAdmv=document.getElementById('ZMembramaprAdm').value;
        var ZMembramaNameAdmv=document.getElementById('ZMembramaNameAdm').value;
        ZMembramaNameAdmv="'"+ZMembramaNameAdmv+"'";

        var ZVjzkaD12Admv=document.getElementById('ZVjzkaD12Adm').value;
        var ZVjzkaD12prAdmv=document.getElementById('ZVjzkaD12prAdm').value;
        var ZVjzkaD12NameAdmv=document.getElementById('ZVjzkaD12NameAdm').value;
        ZVjzkaD12NameAdmv="'"+ZVjzkaD12NameAdmv+"'";

        var ZArmatura65Admv=document.getElementById('ZArmatura65Adm').value;
        var ZArmatura65prAdmv=document.getElementById('ZArmatura65prAdm').value;
        var ZArmatura65NameAdmv=document.getElementById('ZArmatura65NameAdm').value;
        ZArmatura65NameAdmv="'"+ZArmatura65NameAdmv+"'";

        var ZKrepegAdmv=document.getElementById('ZKrepegAdm').value;
        var ZKrepegprAdmv=document.getElementById('ZKrepegprAdm').value;
        var ZKrepegNameAdmv=document.getElementById('ZKrepegNameAdm').value;
        ZKrepegNameAdmv="'"+ZKrepegNameAdmv+"'";

        var ZBetonFundAdmv=document.getElementById('ZBetonFundAdm').value;
        var ZBetonFundprAdmv=document.getElementById('ZBetonFundprAdm').value;
        var ZBetonFundNameAdmv=document.getElementById('ZBetonFundNameAdm').value;
        ZBetonFundNameAdmv="'"+ZBetonFundNameAdmv+"'";

        var ZBetonM400Admv=document.getElementById('ZBetonM400Adm').value;
        var ZBetonM400prAdmv=document.getElementById('ZBetonM400prAdm').value;
        var ZBetonM400NameAdmv=document.getElementById('ZBetonM400NameAdm').value;
        ZBetonM400NameAdmv="'"+ZBetonM400NameAdmv+"'";

        var ZMikserAdmv=document.getElementById('ZMikserAdm').value;
        var ZMikserprAdmv=document.getElementById('ZMikserprAdm').value;
        var ZMikserNameAdmv=document.getElementById('ZMikserNameAdm').value;
        ZMikserNameAdmv="'"+ZMikserNameAdmv+"'";

        var ZNasosAdmv=document.getElementById('ZNasosAdm').value;
        var ZNasosprAdmv=document.getElementById('ZNasosprAdm').value;
        var ZNasosNameAdmv=document.getElementById('ZNasosNameAdm').value;
        ZNasosNameAdmv="'"+ZNasosNameAdmv+"'";

        var ZDostavkaRachodAdmv=document.getElementById('ZDostavkaRachodAdm').value;
        var ZDostavkaRachodprAdmv=document.getElementById('ZDostavkaRachodprAdm').value;
        var ZDostavkaRachodNameAdmv=document.getElementById('ZDostavkaRachodNameAdm').value;
        ZDostavkaRachodNameAdmv="'"+ZDostavkaRachodNameAdmv+"'";

        var ZDostavkaPenoplAdmv=document.getElementById('ZDostavkaPenoplAdm').value;
        var ZDostavkaPenoplprAdmv=document.getElementById('ZDostavkaPenoplprAdm').value;
        var ZDostavkaPenoplNameAdmv=document.getElementById('ZDostavkaPenoplNameAdm').value;
        ZDostavkaPenoplNameAdmv="'"+ZDostavkaPenoplNameAdmv+"'";

        var ZDostavkaPilomatAdmv=document.getElementById('ZDostavkaPilomatAdm').value;
        var ZDostavkaPilomatprAdmv=document.getElementById('ZDostavkaPilomatprAdm').value;
        var ZDostavkaPilomatNameAdmv=document.getElementById('ZDostavkaPilomatNameAdm').value;
        ZDostavkaPilomatNameAdmv="'"+ZDostavkaPilomatNameAdmv+"'";

        var ZUhodFundAdmv=document.getElementById('ZUhodFundAdm').value;
        var ZUhodFundprAdmv=document.getElementById('ZUhodFundprAdm').value;
        var ZUhodFundNameAdmv=document.getElementById('ZUhodFundNameAdm').value;
        ZUhodFundNameAdmv="'"+ZUhodFundNameAdmv+"'";

        var ZDostavkaArmAdmv=document.getElementById('ZDostavkaArmAdm').value;
        var ZDostavkaArmprAdmv=document.getElementById('ZDostavkaArmprAdm').value;
        var ZDostavkaArmNameAdmv=document.getElementById('ZDostavkaArmNameAdm').value;
        ZDostavkaArmNameAdmv="'"+ZDostavkaArmNameAdmv+"'";

        var ZLivenAdmv=document.getElementById('ZLivenAdm').value;
        var ZLivenprAdmv=document.getElementById('ZLivenprAdm').value;
        var ZLivenNameAdmv=document.getElementById('ZLivenNameAdm').value;
        ZLivenNameAdmv="'"+ZLivenNameAdmv+"'";

        var ZDorabTrAdmv=document.getElementById('ZDorabTrAdm').value;
        var ZDorabTrprAdmv=document.getElementById('ZDorabTrprAdm').value;
        var ZDorabTrNameAdmv=document.getElementById('ZDorabTrNameAdm').value;
        ZDorabTrNameAdmv="'"+ZDorabTrNameAdmv+"'";

        var ZUkladkaGeoAdmv=document.getElementById('ZUkladkaGeoAdm').value;
        var ZUkladkaGeoprAdmv=document.getElementById('ZUkladkaGeoprAdm').value;
        var ZUkladkaGeoNameAdmv=document.getElementById('ZUkladkaGeoNameAdm').value;
        ZUkladkaGeoNameAdmv="'"+ZUkladkaGeoNameAdmv+"'";

        var ZGeo150Admv=document.getElementById('ZGeo150Adm').value;
        var ZGeo150prAdmv=document.getElementById('ZGeo150prAdm').value;
        var ZGeo150NameAdmv=document.getElementById('ZGeo150NameAdm').value;
        ZGeo150NameAdmv="'"+ZGeo150NameAdmv+"'";

        var ZUkladkaDrenagTrAdmv=document.getElementById('ZUkladkaDrenagTrAdm').value;
        var ZUkladkaDrenagTrprAdmv=document.getElementById('ZUkladkaDrenagTrprAdm').value;
        var ZUkladkaDrenagTrNameAdmv=document.getElementById('ZUkladkaDrenagTrNameAdm').value;
        ZUkladkaDrenagTrNameAdmv="'"+ZUkladkaDrenagTrNameAdmv+"'";

        var ZDrenagTr110Admv=document.getElementById('ZDrenagTr110Adm').value;
        var ZDrenagTr110prAdmv=document.getElementById('ZDrenagTr110prAdm').value;
        var ZDrenagTr110NameAdmv=document.getElementById('ZDrenagTr110NameAdm').value;
        ZDrenagTr110NameAdmv="'"+ZDrenagTr110NameAdmv+"'";

        var ZMontagKolAdmv=document.getElementById('ZMontagKolAdm').value;
        var ZMontagKolprAdmv=document.getElementById('ZMontagKolprAdm').value;
        var ZMontagKolNameAdmv=document.getElementById('ZMontagKolNameAdm').value;
        ZMontagKolNameAdmv="'"+ZMontagKolNameAdmv+"'";

        var ZKolodezAdmv=document.getElementById('ZKolodezAdm').value;
        var ZKolodezprAdmv=document.getElementById('ZKolodezprAdm').value;
        var ZKolodezNameAdmv=document.getElementById('ZKolodezNameAdm').value;
        ZKolodezNameAdmv="'"+ZKolodezNameAdmv+"'";

        var ZShebObratAdmv=document.getElementById('ZShebObratAdm').value;
        var ZShebObratprAdmv=document.getElementById('ZShebObratprAdm').value;
        var ZShebObratNameAdmv=document.getElementById('ZShebObratNameAdm').value;
        ZShebObratNameAdmv="'"+ZShebObratNameAdmv+"'";

        var ZShebObrat2Admv=document.getElementById('ZShebObrat2Adm').value;
        var ZShebObrat2prAdmv=document.getElementById('ZShebObrat2prAdm').value;
        var ZShebObrat2NameAdmv=document.getElementById('ZShebObrat2NameAdm').value;
        ZShebObrat2NameAdmv="'"+ZShebObrat2NameAdmv+"'";

        var ZDostavkaTrub2Admv=document.getElementById('ZDostavkaTrub2Adm').value;
        var ZDostavkaTrub2prAdmv=document.getElementById('ZDostavkaTrub2prAdm').value;
        var ZDostavkaTrub2NameAdmv=document.getElementById('ZDostavkaTrub2NameAdm').value;
        ZDostavkaTrub2NameAdmv="'"+ZDostavkaTrub2NameAdmv+"'";

        var strvv='';
        strvv=strvv+'//======== Бытовка металлическая========//'+"\n";
        strvv=strvv+'var Zbutovka='+' '+ZbutovkaAdmv+';'+'//Цена бытовки'+"\n" ;
        strvv=strvv+'var Zbutovkapr='+' '+ZbutovkaPrAdmv+';'+'//Процент наценки  бытовки'+"\n" ;
        strvv=strvv+'var ZbutovkaName='+' '+''+ZbutovkaNameAdmv+''+';'+"\n" ;
        strvv=strvv+'//======== доставка  бытовки манипулятором========//'+"\n";
        strvv=strvv+'var ZbutovkaManip='+' '+ZbutovkaManipAdmv+';'+'//Цена доставка  бытовки манипулятором'+"\n" ;
        strvv=strvv+'var ZbutovkaManippr='+' '+ZbutovkaManipprAdmv+';'+'//Процент доставка  бытовки манипулятором'+"\n" ;
        strvv=strvv+'var ZbutovkaManipName='+' '+ZbutovkaManipNameAdm+';'+"\n" ;
        strvv=strvv+'//======== аренда био туалета========//'+"\n";
        strvv=strvv+'var ZBioTyal='+' '+ZBioTyalAdmv+';'+'//Цена аренда био туалета'+"\n" ;
        strvv=strvv+'var ZBioTyalpr='+' '+ZBioTyalprAdmv+';'+'//Процент аренда био туалета'+"\n" ;
        strvv=strvv+'var BioTyalName='+' '+BioTyalNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== доставка и вывоз  биотуалета========//'+"\n";
        strvv=strvv+'var DostavkaBioTyal='+' '+DostavkaBioTyalAdmv+';'+'//Цена доставка и вывоз  биотуалета'+"\n" ;
        strvv=strvv+'var DostavkaBioTyalpr='+' '+DostavkaBioTyalprAdmv+';'+'//Процент доставка и вывоз  биотуалета'+"\n" ;
        strvv=strvv+'var DostavkaBioTyalName='+' '+DostavkaBioTyalNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Привязка пятна застройки========//'+"\n";
        strvv=strvv+'var ZPrivjzka='+' '+ZPrivjzkaAdmv+';'+'//Цена Привязка пятна застройки'+"\n" ;
        strvv=strvv+'var ZPrivjzkapr='+' '+ ZPrivjzkaprAdmv+';'+'//Процент Привязка пятна застройки'+"\n" ;
        strvv=strvv+'var PrivjzkaName='+' '+PrivjzkaNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== земляные работы по устройству котлована спецтехникой========//'+"\n";
        strvv=strvv+'var ZKotlovan='+' '+ZKotlovanAdmv+';'+'//Цена земляные работы по устройству котлована спецтехникой'+"\n" ;
        strvv=strvv+'var ZKotlovanpr='+' '+ZKotlovanprAdmv+';'+'//Процент земляные работы по устройству котлована спецтехникой'+"\n" ;
        strvv=strvv+'var ZKotlovanName='+' '+ZKotlovanNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Укладка геотекстиля========//'+"\n";
        strvv=strvv+'var ZGeoTekstU='+' '+ZGeoTekstUAdmv+';'+'//Цена Укладка геотекстиля'+"\n" ;
        strvv=strvv+'var ZGeoTekstUpr='+' '+ZGeoTekstUprAdmv+';'+'//Процент Укладка геотекстиля'+"\n" ;
        strvv=strvv+'var ZGeoTekstUName='+' '+ZGeoTekstUNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== геотекстиль 200 (50 м2)========//'+"\n";
        strvv=strvv+'var ZGeoTekst200='+' '+ZGeoTekst200Admv+';'+'//Цена  геотекстиля'+"\n" ;
        strvv=strvv+'var ZGeoTekst200pr='+' '+ZGeoTekst200prAdmv+';'+'//Процент  геотекстиля'+"\n" ;
        strvv=strvv+'var ZGeoTekst200Name='+' '+ZGeoTekst200NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Отсыпка основания фундамента песком========//'+"\n";
        strvv=strvv+'var ZOtsup200='+' '+ZOtsup200Admv+';'+'//Цена Отсыпка основания'+"\n" ;
        strvv=strvv+'var ZOtsup200pr='+' '+ZOtsup200prAdmv+';'+'//Процент Отсыпка основания'+"\n" ;
        strvv=strvv+'var ZOtsup200Name='+' '+ZOtsup200NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Экскаватор/погрузчик========//'+"\n";
        strvv=strvv+'var Zekskovator='+' '+ZekskovatorAdmv+';'+'//Цена Экскаватор/погрузчик'+"\n" ;
        strvv=strvv+'var Zekskovatorpr='+' '+ZekskovatorprAdmv+';'+'//Процент Экскаватор/погрузчик'+"\n" ;
        strvv=strvv+'var ZekskovatorName='+' '+ZekskovatorNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== песок намывной с доставкой========//'+"\n";
        strvv=strvv+'var ZPesokN='+' '+ZPesokNAdmv+';'+'//Цена песок намывной с доставкой'+"\n" ;
        strvv=strvv+'var ZPesokNpr='+' '+ZPesokNprAdmv+';'+'//Процент песок намывной с доставкой'+"\n" ;
        strvv=strvv+'var ZPesokNName='+' '+ZPesokNNameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Отсыпка основания фундамента щебнем спецтехникой и уплотнением, 150мм.========//'+"\n";
        strvv=strvv+'var ZOtsupSh150='+' '+ZOtsupSh150Admv+';'+'//Цена Отсыпка основания фундамента щебнем спецтехникой и уплотнением, 150мм.'+"\n" ;
        strvv=strvv+'var ZOtsupSh150pr='+' '+ZOtsupSh150prAdmv+';'+'//Процент Отсыпка основания фундамента щебнем спецтехникой и уплотнением, 150мм.'+"\n" ;
        strvv=strvv+'var ZOtsupSh150Name='+' '+ZOtsupSh150NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Экскаватор/погрузчик29.========//'+"\n";
        strvv=strvv+'var Zekskovator29='+' '+Zekskovator29Admv+';'+'//Цена Экскаватор/погрузчик29.'+"\n" ;
        strvv=strvv+'var Zekskovator29pr='+' '+Zekskovator29prAdmv+';'+'//Процент Экскаватор/погрузчик29.'+"\n" ;
        strvv=strvv+'var Zekskovator29Name='+' '+Zekskovator29NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== щебень гранитный 20-40 с доставкой.========//'+"\n";
        strvv=strvv+'var ZSheb2040='+' '+ZSheb2040Admv+';'+'//Цена щебень гранитный 20-40 с доставкой.'+"\n" ;
        strvv=strvv+'var ZSheb2040pr='+' '+ZSheb2040prAdmv+';'+'//Процент щебень гранитный 20-40 с доставкой.'+"\n" ;
        strvv=strvv+'var ZSheb2040Name='+' '+ZSheb2040NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== Монтаж фановой трубы под фундаментом,.========//'+"\n";
        strvv=strvv+'var ZfanTr='+' '+ZfanTrAdmv+';'+'//Цена  Монтаж фановой трубы под фундаментом.'+"\n" ;
        strvv=strvv+'var ZfanTrpr='+' '+ZfanTrprAdmv+';'+'//Процент Монтаж фановой трубы под фундаментом'+"\n" ;
        strvv=strvv+'var ZfanTrName='+' '+ZfanTrNameAdmv+';'+"\n" ;

        strvv=strvv+'//======== труба фановая 110мм наружная 1000мм Ostendorf.========//'+"\n";
        strvv=strvv+'var ZfanTr110='+' '+ZfanTr110Admv+';'+'//Цена  труба фановая 110мм наружная 1000мм Ostendorf'+"\n" ;
        strvv=strvv+'var ZfanTr110pr='+' '+ZfanTr110prAdmv+';'+'//Процент  труба фановая 110мм наружная 1000мм Ostendorf'+"\n" ;
        strvv=strvv+'var ZfanTr110Name='+' '+ZfanTr110NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== отвод 45 гр. 110мм , наружный Ostendorf.========//'+"\n";
        strvv=strvv+'var ZOtbod110='+' '+ZOtbod110Admv+';'+'//Цена  отвод 45 гр. 110мм , наружный Ostendorf'+"\n" ;
        strvv=strvv+'var ZOtbod110pr='+' '+ZOtbod110prAdmv+';'+'//Процент   отвод 45 гр. 110мм , наружный Ostendorf'+"\n" ;
        strvv=strvv+'var ZOtbod110Name='+' '+ZOtbod110NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== тройник 110мм наружный.========//'+"\n";
        strvv=strvv+'var Troyn110='+' '+Troyn110Admv+';'+'//Цена  тройник 110мм наружный.'+"\n" ;
        strvv=strvv+'var Troyn110pr='+' '+Troyn110prAdmv+';'+'//Процент   тройник 110мм наружный.'+"\n" ;
        strvv=strvv+'var Troyn110Name='+' '+Troyn110NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== заглушка фановой трубы 110мм========//'+"\n";
        strvv=strvv+'var Zaglyshrf110='+' '+Zaglyshrf110Admv+';'+'//Цена  заглушка фановой трубы 110мм'+"\n" ;
        strvv=strvv+'var Zaglyshrf110pr='+' '+Zaglyshrf110prAdmv+';'+'//Процент   заглушка фановой трубы 110мм'+"\n" ;
        strvv=strvv+'var Zaglyshrf110Name='+' '+Zaglyshrf110NameAdmv+';'+"\n" ;
        strvv=strvv+'//======== теплоизоляция на трубу 114*13*2000========//'+"\n";
        strvv=strvv+'var ZTeplo144='+' '+ZTeplo144Admv+';'+'//Цена  теплоизоляция на трубу 114*13*2000'+"\n" ;
        strvv=strvv+'var ZTeplo144pr='+' '+ZTeplo144prAdmv+';'+'//Процент теплоизоляция на трубу 114*13*2000'+"\n" ;
        strvv=strvv+'var ZTeplo144Name='+' '+ZTeplo144NameAdmv+';'+"\n" ;

        strvv=strvv+'//======== Монтаж гильз для  коммуникаций , под фундаментом =======//'+"\n";
        strvv=strvv+'var ZGilsa='+' '+ZGilsaAdmv+';'+'//Цена  Монтаж гильз для  коммуникаций , под фундаментом'+"\n" ;
        strvv=strvv+'var ZGilsapr='+' '+ZGilsaprAdmv+';'+'//Процент Монтаж гильз для  коммуникаций , под фундаментом'+"\n" ;
        strvv=strvv+'var ZGilsaName='+' '+ZGilsaNameAdmv+';'+"\n" ;

        strvv=strvv+'//======== труба ПНД50мм========//'+"\n";
        strvv=strvv+'var ZTruba50='+' '+ZTruba50Admv+';'+'//Цена  труба ПНД50мм'+"\n" ;
        strvv=strvv+'var ZTruba50pr='+' '+ZTruba50prAdmv+';'+'//Процент труба ПНД50мм'+"\n" ;
        strvv=strvv+'var ZTruba50Name='+' '+ZTruba50NameAdmv+';'+"\n" ;

        strvv=strvv+'//======== труба гофрированная 110 мм========//'+"\n";
        strvv=strvv+'var ZTrubaGof110='+' '+ZTrubaGof110Admv+';'+'//Цена  труба гофрированная 110 мм'+"\n" ;
        strvv=strvv+'var ZTrubaGof110pr='+' '+ZTrubaGof110prAdmv+';'+'//Процент труба гофрированная 110 мм'+"\n" ;
        strvv=strvv+'var ZTrubaGof110Name='+' '+ZTrubaGof110NameAdmv+';'+"\n" ;

        strvv=strvv+'//======== Доставка материалов========//'+"\n";
        strvv=strvv+'var ZDostavkaBl3='+' '+ZDostavkaBl3Admv+';'+'//Цена  Доставка материалов'+"\n" ;
        strvv=strvv+'var ZDostavkaBl3Itog=2200; //Цена  Доставка материалов'+"\n" ;
        strvv=strvv+'var ZDostavkaBl3pr='+' '+ZDostavkaBl3prAdmv+';'+'//Процент Доставка материалов'+"\n" ;
        strvv=strvv+'var ZDostavkaBl3Name='+' '+ZDostavkaBl3NameAdmv+';'+"\n" ;

        strvv=strvv+'//======== Доставка материалов========//'+"\n";
        strvv=strvv+'var ZOpalybka='+' '+ZOpalybkaAdmv+';'+'//Цена  Устройство опалубки для  фундамента'+"\n" ;
        strvv=strvv+'var ZOpalybkapr='+' '+ZOpalybkaprAdmv+';'+'//Процент Устройство опалубки для  фундамента'+"\n" ;
        strvv=strvv+'var ZOpalybkaName='+' '+ZOpalybkaNameAdmv+';'+"\n" ;

        strvv=strvv+'//======== Пиломатериалы вспомогательные========//'+"\n";
        strvv=strvv+'var ZPiloMat='+' '+ZPiloMatAdmv+';'+'//Цена  Пиломатериалы вспомогательные'+"\n" ;
        strvv=strvv+'var ZPiloMatpr='+' '+ZPiloMatprAdmv+';'+'//Процент Пиломатериалы вспомогательные'+"\n" ;
        strvv=strvv+'var ZPiloMatName='+' '+ZPiloMatNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Утепление под плитой ========//'+"\n";
        strvv=strvv+'var ZYtepPl='+' '+ZYtepPlAdmv+';'+'//Цена   Утепление под плитой'+"\n" ;
        strvv=strvv+'var ZYtepPlpr='+' '+ZYtepPlprAdmv+';'+'//Процент  Утепление под плитой'+"\n" ;
        strvv=strvv+'var ZYtepPlName='+' '+ZYtepPlNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Экструдированный пенополистирол Технониколь ========//'+"\n";
        strvv=strvv+'var ZGenoPolistirol='+' '+ZGenoPolistirolAdmv+';'+'//Цена   Экструдированный пенополистирол Технониколь'+"\n" ;
        strvv=strvv+'var ZGenoPolistirolpr='+' '+ZGenoPolistirolprAdmv+';'+'//Процент  Экструдированный пенополистирол Технониколь'+"\n" ;
        strvv=strvv+'var ZGenoPolistirolName='+' '+ZGenoPolistirolNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Утепление торца плиты  (300 мм) ========//'+"\n";
        strvv=strvv+'var ZYteplTorz='+' '+ZYteplTorzAdmv+';'+'//Цена   Утепление торца плиты  (300 мм)'+"\n" ;
        strvv=strvv+'var ZYteplTorzpr='+' '+ZYteplTorzprAdmv+';'+'//Процент  Утепление торца плиты  (300 мм)'+"\n" ;
        strvv=strvv+'var ZYteplTorzName='+' '+ZYteplTorzNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Экструдированный пенополистирол Технониколь2 ========//'+"\n";
        strvv=strvv+'var ZGenoPolistirol2='+' '+ZGenoPolistirol2Admv+';'+'//Цена   Экструдированный пенополистирол Технониколь2'+"\n" ;
        strvv=strvv+'var ZGenoPolistirol2pr='+' '+ZGenoPolistirol2prAdmv+';'+'//Процент  Экструдированный пенополистирол Технониколь2'+"\n" ;
        strvv=strvv+'var ZGenoPolistirol2Name='+' '+ZGenoPolistirol2NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  дюбель для теплоизоляции 10*100========//'+"\n";
        strvv=strvv+'var ZDubekTeplo='+' '+ZDubekTeploAdmv+';'+'//Цена   дюбель для теплоизоляции 10*100'+"\n" ;
        strvv=strvv+'var ZDubekTeplopr='+' '+ZDubekTeploprAdmv+';'+'//Процент  дюбель для теплоизоляции 10*100'+"\n" ;
        strvv=strvv+'var ZDubekTeplosmName='+' '+ZDubekTeploNameAdmv+';'+"\n" ;

        strvv=strvv+'//========   клей-пена для полистерола========//'+"\n";
        strvv=strvv+'var ZKleyPolis='+' '+ZKleyPolisAdmv+';'+'//Цена    клей-пена для полистерола'+"\n" ;
        strvv=strvv+'var ZKleyPolispr='+' '+ZKleyPolisprAdmv+';'+'//Процент   клей-пена для полистерола'+"\n" ;
        strvv=strvv+'var ZKleyPolisName='+' '+ZKleyPolisNameAdmv+';'+"\n" ;

        strvv=strvv+'//========   Укладка гидроизоляционной мембраны в основание  фундамента=======//'+"\n";
        strvv=strvv+'var ZGidroFund='+' '+ZGidroFundAdmv+';'+'//Цена    Укладка гидроизоляционной мембраны в основание  фундамента'+"\n" ;
        strvv=strvv+'var ZGidroFundpr='+' '+ZGidroFundprAdmv+';'+'//Процент   Укладка гидроизоляционной мембраны в основание  фундамента'+"\n" ;
        strvv=strvv+'var ZGidroFundName='+' '+ZGidroFundNameAdmv+';'+"\n" ;

        strvv=strvv+'//========   Мембрана плантер 2*20=======//'+"\n";
        strvv=strvv+'var ZMembrama='+' '+ZMembramaAdmv+';'+'//Цена    Мембрана плантер 2*20'+"\n" ;
        strvv=strvv+'var ZMembramapr='+' '+ZMembramaprAdmv+';'+'//Процент   Мембрана плантер 2*20'+"\n" ;
        strvv=strvv+'var ZMembramaName='+' '+ZMembramaNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Вязка арматуры D12 в два слоя с ячейкой 200*200=======//'+"\n";
        strvv=strvv+'var ZVjzkaD12='+' '+ZVjzkaD12Admv+';'+'//Цена    Вязка арматуры D12 в два слоя с ячейкой 200*200'+"\n" ;
        strvv=strvv+'var ZVjzkaD12pr='+' '+ZVjzkaD12prAdmv+';'+'//Процент  Вязка арматуры D12 в два слоя с ячейкой 200*200'+"\n" ;
        strvv=strvv+'var ZVjzkaD12Name='+' '+ZVjzkaD12NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Вязка арматуры D12 в два слоя с ячейкой 200*200=======//'+"\n";
        strvv=strvv+'var ZArmatura65='+' '+ZArmatura65Admv+';'+'//Цена    арматура по проекту (65 кг/м3)'+"\n" ;
        strvv=strvv+'var ZArmatura65pr='+' '+ZArmatura65prAdmv+';'+'//Процент  арматура по проекту (65 кг/м3)'+"\n" ;
        strvv=strvv+'var ZArmatura65Name='+' '+ZArmatura65NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  крепеж, фиксаторы, проволока=======//'+"\n";
        strvv=strvv+'var ZKrepeg='+' '+ZKrepegAdmv+';'+'//Цена    крепеж, фиксаторы, проволока'+"\n" ;
        strvv=strvv+'var ZKrepegpr='+' '+ZKrepegprAdmv+';'+'//Процент  крепеж, фиксаторы, проволока'+"\n" ;
        strvv=strvv+'var ZKrepegName='+' '+ZKrepegNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Бетонирование  фундамента с подачей=======//'+"\n";
        strvv=strvv+'var ZBetonFund='+' '+ZBetonFundAdmv+';'+'//Цена    Бетонирование  фундамента с подачей'+"\n" ;
        strvv=strvv+'var ZBetonFundpr='+' '+ZBetonFundprAdmv+';'+'//Процент  Бетонирование  фундамента с подачей'+"\n" ;
        strvv=strvv+'var ZBetonFundName='+' '+ZBetonFundNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Бетонирование  бетон М400, П4=======//'+"\n";
        strvv=strvv+'var ZBetonM400='+' '+ZBetonM400Admv+';'+'//Цена    Бетонирование  бетон М400, П4'+"\n" ;
        strvv=strvv+'var ZBetonM400pr='+' '+ZBetonM400prAdmv+';'+'//Процент Бетонирование  бетон М400, П4'+"\n" ;
        strvv=strvv+'var ZBetonM400Name='+' '+ZBetonM400NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  миксер для перевозки бетона======//'+"\n";
        strvv=strvv+'var ZMikser='+' '+ZMikserAdmv+';'+'//Цена    миксер для перевозки бетона'+"\n" ;
        strvv=strvv+'var ZMikserpr='+' '+ZMikserprAdmv+';'+'//Процент миксер для перевозки бетона'+"\n" ;
        strvv=strvv+'var ZMikserName='+' '+ZMikserNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Подача бетона насосом======//'+"\n";
        strvv=strvv+'var ZNasos='+' '+ZNasosAdmv+';'+'//Цена    Подача бетона насосом'+"\n" ;
        strvv=strvv+'var ZNasospr='+' '+ZNasosprAdmv+';'+'//Процент Подача бетона насосом'+"\n" ;
        strvv=strvv+'var ZNasosName='+' '+ZNasosNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  достака расходников======//'+"\n";
        strvv=strvv+'var ZDostavkaRachod='+' '+ZDostavkaRachodAdmv+';'+'//Цена    достака расходников'+"\n" ;
        strvv=strvv+'var ZDostavkaRachodpr='+' '+ZDostavkaRachodprAdmv+';'+'//Процент достака расходников'+"\n" ;
        strvv=strvv+'var ZDostavkaRachodName='+' '+ZDostavkaRachodNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Доставка пеноплекса и геотекстиля======//'+"\n";
        strvv=strvv+'var ZDostavkaPenopl='+' '+ZDostavkaPenoplAdmv+';'+'//Цена    Доставка пеноплекса и геотекстиля'+"\n" ;
        strvv=strvv+'var ZDostavkaPenoplpr='+' '+ZDostavkaPenoplprAdmv+';'+'//Процент Доставка пеноплекса и геотекстиля'+"\n" ;
        strvv=strvv+'var ZDostavkaPenoplName='+' '+ZDostavkaPenoplNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Доставка пиломатериалов======//'+"\n";
        strvv=strvv+'var ZDostavkaPilomat='+' '+ZDostavkaPilomatAdmv+';'+'//Цена    Доставка пиломатериалов'+"\n" ;
        strvv=strvv+'var ZDostavkaPilomatpr='+' '+ZDostavkaPilomatprAdmv+';'+'//Процент Доставка пиломатериалов'+"\n" ;
        strvv=strvv+'var ZDostavkaPilomatName='+' '+ZDostavkaPilomatNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  уход за фундаментом======//'+"\n";
        strvv=strvv+'var ZUhodFund='+' '+ZUhodFundAdmv+';'+'//Цена    уход за фундаментом'+"\n" ;
        strvv=strvv+'var ZUhodFundpr='+' '+ZUhodFundprAdmv+';'+'//Процент уход за фундаментом'+"\n" ;
        strvv=strvv+'var ZUhodFundName='+' '+ZUhodFundNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Доставка арматуры на плиту======//'+"\n";
        strvv=strvv+'var ZDostavkaArm='+' '+ZDostavkaArmAdmv+';'+'//Цена    Доставка арматуры на плиту'+"\n" ;
        strvv=strvv+'var ZDostavkaArmpr='+' '+ZDostavkaArmprAdmv+';'+'//Процент Доставка арматуры на плиту'+"\n" ;
        strvv=strvv+'var ZDostavkaArmName='+' '+ZDostavkaArmNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Устройство траншеи по периметру дома под ливневку======//'+"\n";
        strvv=strvv+'var ZLiven='+' '+ZLivenAdmv+';'+'//Цена    Устройство траншеи по периметру дома под ливневку'+"\n" ;
        strvv=strvv+'var ZLivenpr='+' '+ZLivenprAdmv+';'+'//Процент Устройство траншеи по периметру дома под ливневку'+"\n" ;
        strvv=strvv+'var ZLivenName='+' '+ZLivenNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Доработка траншеи вручную ( разуклонка песком )======//'+"\n";
        strvv=strvv+'var ZDorabTr='+' '+ZDorabTrAdmv+';'+'//Цена    Доработка траншеи вручную ( разуклонка песком )'+"\n" ;
        strvv=strvv+'var ZDorabTrpr='+' '+ZDorabTrprAdmv+';'+'//Процент Доработка траншеи вручную ( разуклонка песком )'+"\n" ;
        strvv=strvv+'var ZDorabTrName='+' '+ZDorabTrNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Укладка геотекстиля в траншею======//'+"\n";
        strvv=strvv+'var ZUkladkaGeo='+' '+ZUkladkaGeoAdmv+';'+'//Цена    Укладка геотекстиля в траншею'+"\n" ;
        strvv=strvv+'var ZUkladkaGeopr='+' '+ZUkladkaGeoprAdmv+';'+'//Процент Укладка геотекстиля в траншею'+"\n" ;
        strvv=strvv+'var ZUkladkaGeoName='+' '+ZUkladkaGeoNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Геотекстиль 150 г/кв.м термоскрепленный 1,6х50 м (80 кв.м)======//'+"\n";
        strvv=strvv+'var ZGeo150='+' '+ZGeo150Admv+';'+'//Цена    Геотекстиль 150 г/кв.м термоскрепленный 1,6х50 м (80 кв.м)'+"\n" ;
        strvv=strvv+'var ZGeo150pr='+' '+ZGeo150prAdmv+';'+'//Процент Геотекстиль 150 г/кв.м термоскрепленный 1,6х50 м (80 кв.м)'+"\n" ;
        strvv=strvv+'var ZGeo150Name='+' '+ZGeo150NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  укладка в траншею дренажной трубы с уклоном======//'+"\n";
        strvv=strvv+'var ZUkladkaDrenagTr='+' '+ZUkladkaDrenagTrAdmv+';'+'//Цена    укладка в траншею дренажной трубы с уклоном'+"\n" ;
        strvv=strvv+'var ZUkladkaDrenagTrpr='+' '+ZUkladkaDrenagTrprAdmv+';'+'//Процент укладка в траншею дренажной трубы с уклоном)'+"\n" ;
        strvv=strvv+'var ZUkladkaDrenagTrName='+' '+ZUkladkaDrenagTrNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  труба дренажная  гофрированная , без перфорации 110 мм ======//'+"\n";
        strvv=strvv+'var ZDrenagTr110='+' '+ZDrenagTr110Admv+';'+'//Цена    труба дренажная  гофрированная , без перфорации 110 мм '+"\n" ;
        strvv=strvv+'var ZDrenagTr110pr='+' '+ZDrenagTr110prAdmv+';'+'//Процент труба дренажная  гофрированная , без перфорации 110 мм '+"\n" ;
        strvv=strvv+'var ZDrenagTr110Name='+' '+ZDrenagTr110NameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Монтаж смотрового колодца======//'+"\n";
        strvv=strvv+'var ZMontagKol='+' '+ZMontagKolAdmv+';'+'//Цена   Монтаж смотрового колодца '+"\n" ;
        strvv=strvv+'var ZMontagKolpr='+' '+ZMontagKolprAdmv+';'+'//Процент Монтаж смотрового колодца '+"\n" ;
        strvv=strvv+'var ZMontagKolName='+' '+ZMontagKolNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  Колодец дренажный смотровой======//'+"\n";
        strvv=strvv+'var ZKolodez='+' '+ZKolodezAdmv+';'+'//Цена   Колодец дренажный смотровой '+"\n" ;
        strvv=strvv+'var ZKolodezpr='+' '+ZKolodezprAdmv+';'+'//Процент Колодец дренажный смотровой '+"\n" ;
        strvv=strvv+'var ZKolodezName='+' '+ZKolodezNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  обратная засыпка щебнем======//'+"\n";
        strvv=strvv+'var ZShebObrat='+' '+ZShebObratAdmv+';'+'//Цена   обратная засыпка щебнем '+"\n" ;
        strvv=strvv+'var ZShebObratpr='+' '+ZShebObratprAdmv+';'+'//Процент обратная засыпка щебнем '+"\n" ;
        strvv=strvv+'var ZShebObratName='+' '+ZShebObratNameAdmv+';'+"\n" ;

        strvv=strvv+'//========  щебень для обр. засыпки======//'+"\n";
        strvv=strvv+'var ZShebObrat2='+' '+ZShebObrat2Admv+';'+'//Цена   щебень для обр. засыпки '+"\n" ;
        strvv=strvv+'var ZShebObrat2pr='+' '+ZShebObrat2prAdmv+';'+'//Процент щебень для обр. засыпки '+"\n" ;
        strvv=strvv+'var ZShebObrat2Name='+' '+ZShebObrat2NameAdmv+';'+"\n" ;

        strvv=strvv+'//======== Доставка труб и колодцев ======//'+"\n";
        strvv=strvv+'var ZDostavkaTrub2='+' '+ZDostavkaTrub2Admv+';'+'//Цена   Доставка труб и колодцев  '+"\n" ;
        strvv=strvv+'var ZDostavkaTrub2pr='+' '+ZDostavkaTrub2prAdmv+';'+'//Процент Доставка труб и колодцев  '+"\n" ;
        strvv=strvv+'var ZDostavkaTrub2Name='+' '+ZDostavkaTrub2NameAdmv+';'+"\n" ;
         $('#stsx').text(strvv);
        
            sendAjaxForm1('result_form', 'form1', 'saves.php');
            return false;
        });
      
    });

 

function sendAjaxForm1(result_form, ajax_form, url) {
    $.ajax({
        url: url,

        type:     "post", //метод отправки
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        dataType: "html", //формат данных
        success: function(response) { //Данные отправлены успешно
            console.log(response);
             if (response.status !== 'ok') {
               
                alert('Данные успешно сохранены. ');
                return;
            }           		 
			 
        },
        error: function(response) { // Данные не отправлены
           alert('Ошибка сохранения данных!. Попробуйте позже.');          
        }
        
    });
}

