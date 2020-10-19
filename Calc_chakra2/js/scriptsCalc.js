var s;

$(document).ready(function() {

    $('#btn-calc').click(function () {

        //=========   Вычитка и вывод месяца===================//
        var month = document.getElementById("month").value;
        month = +month;
        var monthd = month;

        $('#diag1').html(monthd);
        var diag1 = monthd;
        var montth = month;

        $('#montht').text(montth);

        //=========Вычитка и вывод числа месяца ===================//
        var dayt = document.getElementById("day").value;
        dayt = +dayt;

        if (dayt > 22) {
            adddigits(dayt);
            dayt = s;
        }
        var dayd = dayt;
        $('#diag2').html(dayd);
        var diag2 = dayd;

        var dayth = dayt;

        $('#dayt').text(dayt);

        //=========Заполнение ячейки 1_3 таблицы ===================//
        var dm = dayt + month;
        if (dm > 22) {
            adddigits(dm);
            dm = s;
        }
        $('#dmt').text(dm);


        //=========Вычитка и вывод года рождения ===================//
        var yeart = document.getElementById("year").value;
        yeart = +yeart;

        if (yeart < 1900) {
            yeart = 1900;
            document.getElementById("year").value = yeart;
        }

        if (yeart > 3000) {
            yeart = 3000;
            document.getElementById("year").value = yeart;
        }

        adddigits(yeart);
        yeart = s;

        if (yeart > 22) {
            adddigits(yeart);
            yeart = s;
        }
        var yeartd = yeart;
        var diag3 = yeart;

        $('#diag3').html(yeartd);

        $('#yeart1').text(yeartd);


        //=========Вычисление нижнего элемента диаграммы ===================//
        var diag4 = monthd + dayd + yeartd;

        if (diag4 > 22) {
            adddigits(diag4);
            diag4 = s;
        }

        $('#diag4').html(diag4);

        //=========Вычисление 5 элемента диаграммы ===================//
        var diag5 = monthd + dayd;
        if (diag5 > 22) {
            adddigits(diag5);
            diag5 = s;
        }
        $('#diag5').html(diag5);


        //=========Вычисление 6 элемента диаграммы ===================//
        var diag6 = monthd + yeartd;
        if (diag6 > 22) {
            adddigits(diag6);
            diag6 = s;
        }
        $('#diag6').html(diag6);


        //=========Вычисление 7 элемента диаграммы ===================//
        var diag7 = yeartd + diag4;

        if (diag7 > 22) {
            adddigits(diag7);
            diag7 = s;
        }
        $('#diag7').html(diag7);

        //=========Вычисление 8 элемента диаграммы ===================//
        var diag8 = dayd + diag4;
        if (diag8 > 22) {
            adddigits(diag8);
            diag8 = s;
        }
        $('#diag8').html(diag8);


        //=========Вычисление 9 элемента диаграммы (диаг квадрат) ===================//
        var diag9 = monthd + dayd + yeartd + diag4;
        if (diag9 > 22) {
            adddigits(diag9);
            diag9 = s;
        }
        $('#diag9').html(diag9);

        //=========Вычисление 10 элемента диаграммы ( квадрат) ===================//
        var diag10 = diag5 + diag6 + diag7 + diag8;
        if (diag10 > 22) {
            adddigits(diag10);
            diag10 = s;
        }
        $('#diag10').html(diag10);


        //=========Вычисление 11 элемента диаграммы  ===================//
        var diag11 = diag5 + monthd;
        if (diag11 > 22) {
            adddigits(diag11);
            diag11 = s;
        }
        $('#diag11').html(diag11);


        //=========Вычисление 12 элемента диаграммы  ===================//
        var diag12 = diag5 + diag2;
        //alert(diag12);
        if (diag12 > 22) {
            adddigits(diag12);
            diag12 = s;
        }
        $('#diag12').html(diag12);

        //=========Вычисление 13 элемента диаграммы  ===================//
        var diag13 = diag1 + diag6;
        //alert(diag13);
        if (diag13 > 22) {
            adddigits(diag13);
            diag13 = s;
        }
        $('#diag13').html(diag13);

        //=========Вычисление 14 элемента диаграммы  ===================//
        var diag14 = diag3 + diag6;
        //alert(diag14);
        if (diag14 > 22) {
            adddigits(diag14);
            diag14 = s;
        }
        $('#diag14').html(diag14);

        //=========Вычисление 15 элемента диаграммы  ===================//
        var diag15 = diag3 + diag7;
        //alert(diag15);
        if (diag15 > 22) {
            adddigits(diag15);
            diag15 = s;
        }
        $('#diag15').html(diag15);


        //=========Вычисление 16 элемента диаграммы  ===================//
        var diag16 = diag4 + diag7;
        //alert(diag16);
        if (diag16 > 22) {
            adddigits(diag16);
            diag16 = s;
        }
        $('#diag16').html(diag16);

        //=========Вычисление 17 элемента диаграммы  ===================//
        var diag17 = diag4 + diag8;
        if (diag17 > 22) {
            adddigits(diag17);
            diag17 = s;
        }
        $('#diag17').html(diag17);

        //=========Вычисление 18 элемента диаграммы  ===================//
        var diag18 = diag2 + diag8;
        //alert(diag18);
        if (diag18 > 22) {
            adddigits(diag18);
            diag18 = s;
        }
        $('#diag18').html(diag18);


        //=========Вычисление 19 элемента диаграммы  ===================//
        var diag19 = diag1 + diag9;
        //alert(diag19);
        if (diag19 > 22) {
            adddigits(diag19);
            diag19 = s;
        }
        $('#diag19').html(diag19);

        //=========Вычисление 20 элемента диаграммы  ===================//
        var diag20 = diag3 + diag9;
        //alert(diag20);
        if (diag20 > 22) {
            adddigits(diag20);
            diag20 = s;
        }
        $('#diag20').html(diag20);

        //=========Вычисление 21 элемента диаграммы  ===================//
        var diag21 = diag4 + diag9;
        //alert(diag21);
        if (diag21 > 22) {
            adddigits(diag21);
            diag21 = s;
        }
        $('#diag21').html(diag21);

        //=========Вычисление 22 элемента диаграммы  ===================//
        var diag22 = diag2 + diag9;
        //alert(diag22);
        if (diag22 > 22) {
            adddigits(diag22);
            diag22 = s;
        }
        $('#diag22').html(diag22);

        //=========Вычисление 23 элемента диаграммы  ===================//
        var diag23 = diag19 + diag22;
        //alert(diag23);
        if (diag23 > 22) {
            adddigits(diag23);
            diag23 = s;
        }
        $('#diag23').html(diag23);

        //=========Вычисление 24 элемента диаграммы  ===================//
        var diag24 = diag20 + diag21;
        //alert(diag24);
        if (diag24 > 22) {
            adddigits(diag24);
            diag24 = s;
        }
        $('#diag24').html(diag24);

        //=========Вычисление 25 элемента диаграммы  ===================//
        var diag25 = diag1 + diag19;
        //alert(diag25);
        if (diag25 > 22) {
            adddigits(diag25);
            diag25 = s;
        }
        $('#diag25').html(diag25);

        //=========Вычисление 26 элемента диаграммы  ===================//
        var diag26 = diag3 + diag20;
        //alert(diag26);
        if (diag26 > 22) {
            adddigits(diag26);
            diag26 = s;
        }
        $('#diag26').html(diag26);

        //=========Вычисление 27 элемента диаграммы  ===================//
        var diag27 = diag4 + diag21;
        //alert(diag27);
        if (diag27 > 22) {
            adddigits(diag27);
            diag27 = s;
        }
        $('#diag27').html(diag27);

        //=========Вычисление 28 элемента диаграммы  ===================//
        var diag28 = diag2 + diag22;
        //alert(diag28);
        if (diag28 > 22) {
            adddigits(diag28);
            diag28 = s;
        }
        $('#diag28').html(diag28);


        //=========Вычисление 29 элемента диаграммы  ===================//
        var diag29 = diag26 + diag27;
        //alert(diag29);
        if (diag29 > 22) {
            adddigits(diag29);
            diag29 = s;
        }
        $('#diag29').html(diag29);

        //=========Вычисление 2_1 элемента таблицы  ===================//
        var tabl21 = diag28;
        //alert(tabl21);
        if (tabl21 > 22) {
            adddigits(tabl21);
            tabl21 = s;
        }
        $('#tabl21').text(tabl21);

        //=========Вычисление 2_2 элемента таблицы  ===================//
        var tabl22 = diag25;
        //alert(tabl22);
        if (tabl22 > 22) {
            adddigits(tabl22);
            tabl22 = s;
        }
        $('#tabl22').text(tabl22);

        //=========Вычисление 2_3 элемента таблицы  ===================//
        var tabl23 = tabl21 + tabl22;
        //alert(tabl22);
        if (tabl23 > 22) {
            adddigits(tabl23);
            tabl23 = s;
        }
        $('#tabl23').text(tabl23);

        //=========Вычисление 3_1 элемента таблицы  ===================//
        var tabl31 = diag22;
        //alert(tabl21);
        if (tabl31 > 22) {
            adddigits(tabl31);
            tabl31 = s;
        }
        $('#tabl31').text(tabl31);

        //=========Вычисление 3_2 элемента таблицы  ===================//
        var tabl32 = diag19;
        //alert(tabl21);
        if (tabl32 > 22) {
            adddigits(tabl32);
            tabl32 = s;
        }
        $('#tabl32').text(tabl32);

        //=========Вычисление 3_3 элемента таблицы  ===================//
        var tabl33 = tabl31 + tabl32;
        //alert(tabl21);
        if (tabl33 > 22) {
            adddigits(tabl33);
            tabl33 = s;
        }
        $('#tabl33').text(tabl33);

        //=========Вычисление 4_1 элемента таблицы  ===================//
        var tabl41 = diag9;
        //alert(tabl21);
        if (tabl41 > 22) {
            adddigits(tabl41);
            tabl41 = s;
        }
        $('#tabl41').text(tabl41);


        //=========Вычисление 4_2 элемента таблицы  ===================//
        var tabl42 = diag10;
        //alert(tabl21);
        if (tabl42 > 22) {
            adddigits(tabl42);
            tabl42 = s;
        }
        $('#tabl42').text(tabl42);

        //=========Вычисление 4_3 элемента таблицы  ===================//
        var tabl43 = tabl41 + tabl42;
        //alert(tabl21);
        if (tabl43 > 22) {
            adddigits(tabl43);
            tabl43 = s;
        }
        $('#tabl43').text(tabl43);


        //=========Вычисление 5_1 элемента таблицы  ===================//
        var tabl51 = diag20;
        //alert(tabl21);
        if (tabl51 > 22) {
            adddigits(tabl51);
            tabl51 = s;
        }
        $('#tabl51').text(tabl51);

        //=========Вычисление 5_2 элемента таблицы  ===================//
        var tabl52 = diag21;
        //alert(tabl21);
        if (tabl52 > 22) {
            adddigits(tabl52);
            tabl52 = s;
        }
        $('#tabl52').text(tabl52);

        //=========Вычисление 5_3 элемента таблицы  ===================//
        var tabl53 = tabl51 + tabl52;
        //alert(tabl21);
        if (tabl53 > 22) {
            adddigits(tabl53);
            tabl53 = s;
        }
        $('#tabl53').text(tabl53);

        //=========Вычисление 6_1 элемента таблицы  ===================//
        var tabl61 = diag26;
        //alert(tabl21);
        if (tabl61 > 22) {
            adddigits(tabl61);
            tabl61 = s;
        }
        $('#tabl61').text(tabl61);

        //=========Вычисление 6_2 элемента таблицы  ===================//
        var tabl62 = diag27;
        //alert(tabl21);
        if (tabl62 > 22) {
            adddigits(tabl62);
            tabl62 = s;
        }
        $('#tabl62').text(tabl62);

        //=========Вычисление 6_3 элемента таблицы  ===================//
        var tabl63 = tabl61 + tabl62;
        //alert(tabl21);
        if (tabl63 > 22) {
            adddigits(tabl63);
            tabl63 = s;
        }
        $('#tabl63').text(tabl63);


        //=========Вычисление 7_1 элемента таблицы  ===================//
        var tabl71 = diag3;
        //alert(tabl21);
        if (tabl71 > 22) {
            adddigits(tabl71);
            tabl71 = s;
        }
        $('#tabl71').text(tabl71);

        //=========Вычисление 7_2 элемента таблицы  ===================//
        var tabl72 = diag4;
        //alert(tabl21);
        if (tabl72 > 22) {
            adddigits(tabl72);
            tabl72 = s;
        }
        $('#tabl72').text(tabl72);

        //=========Вычисление 7_3 элемента таблицы  ===================//
        var tabl73 = tabl71 + tabl72;
        //alert(tabl21);
        if (tabl73 > 22) {
            adddigits(tabl73);
            tabl73 = s;
        }
        $('#tabl73').text(tabl73);


    });


    function adddigits(n) {
        s = 0;
        while (n != 0) {
            s = s + n % 10;
            n = Math.floor(n / 10);
        }
        //alert(s);
    }


});



