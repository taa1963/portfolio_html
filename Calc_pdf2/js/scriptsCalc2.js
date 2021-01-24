

$(document).ready(function() {




    //var parameter = localStorage.getItem('Zrv');

   var parameter = sessionStorage.getItem('Zrv');

    $('#Zr').text(parameter);
    //alert(Zrv);
    //alert(parameter);
   // console.log(parameter);




   // var parameter2 = localStorage.getItem('ZkmV');
   var parameter2 = sessionStorage.getItem('ZkmV');
    $('#Zk').text(parameter2);


   // var parameter3 = localStorage.getItem('ZmmV');
   var parameter3 = sessionStorage.getItem('ZmmV');
    $('#Zm').text(parameter3);



});






