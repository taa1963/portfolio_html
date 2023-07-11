        function PrintElem(elem)
       
        {
            // $('.table > tbody > tr > td').addClass('table_print'); 
            Popup($(elem).html());

        }
        function Popup(data)
        {
            var mywindow = window.open('', 'Смета фундамента', 'height=800,width=800');
            mywindow.document.write('<html><head><title>Смета фундамента</title>');
            window.open('','','left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
            // mywindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
            mywindow.document.write('</head><body >');
            mywindow.document.write(data);
            mywindow.document.write('</body></html>');
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10
            mywindow.print();
            mywindow.close();
            // $('.table > tbody > tr > td').removeClass('table_print'); 

            return true;

        }


