
$(document).ready(function() {


    function ADDCATEG() {


        var newCategor = $('#categories');
        for (var i = 0; i < categories.length; i++) {
            $('<option value="' + categories[i].val + '">' + categories[i].name + '</option>').appendTo(newCategor);

        }
    }

    ADDCATEG();


    function ADDPOL() {


        var newPol = $('#gender');
        for (var i = 0; i < gender.length; i++) {
            $('<option value="' + gender[i].val + '">' + gender[i].name + '</option>').appendTo(newPol);

        }
    }

    ADDPOL();


    $('#gener').click(function () {

        var cat = document.getElementById('categories').value;

        var pol = document.getElementById('gender').value;

        if ((cat == 'Simple') && (pol == 'd')) {
            vubor = Simpled;
        }
        if ((cat == 'Simple') && (pol == 'm')) {
            vubor = Simplem;
        }

        if ((cat == 'Short') && (pol == 'm')) {
            vubor = Shortm;
        }
        if ((cat == 'Short') && (pol == 'd')) {
            vubor = Shortd;
        }
        if ((cat == 'Noble') && (pol == 'm')) {
            vubor = Noblem;
        }
        if ((cat == 'Noble') && (pol == 'd')) {
            vubor = Nobled;
        }
		if ((cat == 'Okras') && (pol == 'm')) {
            vubor = Okrasm;
        }
        if ((cat == 'Okras') && (pol == 'd')) {
            vubor = Okrasd;
        }
		if ((cat == 'Slavonic') && (pol == 'm')) {
            vubor = Slavonicm;
        }
        if ((cat == 'Slavonic') && (pol == 'd')) {
            vubor = Slavonicd;
        }
		if ((cat == 'German') && (pol == 'm')) {
            vubor = Germanm;
        }
        if ((cat == 'German') && (pol == 'd')) {
            vubor = Germand;
        }
		if ((cat == 'English') && (pol == 'm')) {
            vubor = Englishm;
        }
        if ((cat == 'English') && (pol == 'd')) {
            vubor = Englishd;
        }
		if ((cat == 'Japanese') && (pol == 'm')) {
            vubor = Japanesem;
        }
        if ((cat == 'Japanese') && (pol == 'd')) {
            vubor = Japanesed;
        }

    console.log(cat);
	console.log(pol);


        var k = vubor.length;
        // console.log(k);

        // var min_random = 0;
        var max_random = k;

        //max_random++;

        var range = max_random;
        var n = Math.floor(Math.random() * range);
        console.log(n);

        var nevMain = vubor[n].name;
        console.log(nevMain);

        $('#new_name').text(nevMain);

    });

});






