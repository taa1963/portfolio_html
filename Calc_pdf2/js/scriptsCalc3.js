
$(document).ready(function() {



   // var parameter = localStorage.getItem('Zrv');
    var parameter = sessionStorage.getItem('Zrv');

    document.getElementById('ekran').value = parameter;

    //$('#Zr').text(parameter);
    //alert(Zrv);
    //alert(parameter);

    //var parameter2 = localStorage.getItem('ZkmV');
    var parameter2 = sessionStorage.getItem('ZkmV');


    document.getElementById('ekrank').value = parameter2;
    //$('#Zk').text(parameter2);



   // var parameter3 = localStorage.getItem('ZmmV');

    var parameter3 = sessionStorage.getItem('ZmmV');

    document.getElementById('ekranm').value = parameter3;
    //$('#Zm').text(parameter2);




});