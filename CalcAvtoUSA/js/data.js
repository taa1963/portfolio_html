var Zbroker=1050;
var Zremont=800;

//======== Аукцион copart ========//
var copart = [
    {
        name: 'ABILENE - TX',
        val:390,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'AK - ANCHORAGE',
        val:1950,
        port:'WA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'ALBANY - NY',
        val:295,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'ALBUQUERQUE - NM',
        val:470,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'ALTOONA - PA',
        val:420,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'AMARILLO - TX',
        val:445,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'ANDREWS - TX',
        val:495,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'ANTELOPE - CA',
        val:350,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'APPLETON - WI',
        val:585,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'ATLANTA - GA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'ATLANTA EAST - GA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'ATLANTA NORTH - GA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'ATLANTA SOUTH - GA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'ATLANTA WEST - GA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'AUSTIN - TX',
        val:245,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },

    {
        name: 'BAKERSFIELD - CA',
        val:255,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'BALTIMORE - MD',
        val:295,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'BATON ROUGE - LA',
        val:420,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'BILLINGS MT',
        val:845,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'BIRMINHAM AL',
        val:845,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:200
    },
    {
        name: 'BOISE - ID',
        val:585,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'BUFFALO - NY',
        val:450,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CANDIA - NH',
        val:420,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CARTERSVILLE - GA',
        val:285,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CASPER - WY',
        val:950,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'CHAMBERSBURG - PA',
        val:320,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CHARLESTON - SC',
        val:245,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CHARLESTON - WV',
        val:530,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CHICAGO - IL',
        val:520,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CHICAGO NORTH - IL',
        val:520,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CHICAGO SOUTH - IL',
        val:520,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CHINA GROVE - NC',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CLEVELAND - OH',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CLEVELAND EAST - OH',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CLEVELAND WEST - OH',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'COLORADO SPRINGS - CO',
        val:520,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'COLUMBIA - SC',
        val:235,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'COLUMBUS - OH',
        val:445,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CORPUS CHRISTI - TX',
        val:320,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS ATLANTA',
        val:270,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS ATLANTA',
        val:270,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS DALLAS- TX',
        val:285,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS EAST BETHEL - MN',
        val:650,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS ELDRIDGE - IA',
        val:800,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS MINNEAPOLIS-MN',
        val:850,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    },
    {
        name: 'CRASHEDTOYS SACRAMENTO - CA',
        val:375,
        port:'CA',
        zkoss:960,
        zpicap:910,
        zlogic:100
    },
    {
        name: 'CULPEPER - VA',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:100
    },
    {
        name: 'DALLAS - TX',
        val:245,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'DALLAS SOUTH - TX',
        val:270,
        port:'TX',
        zkoss:805,
        zpicap:755,
        zlogic:100
    },
    {
        name: 'DANVILLE - VA',
        val:420,
        port:'NJ',
        zkoss:700,
        zpicap:650,
        zlogic:100
    }

];


//======== Аукцион iaai ========//
var iaai = [

    {
        name: 'ACE - Carson (CA)',
        val:275,
        port:'CA',
        zkoss:910,
        zpicap:910,
        zlogic:150
    },
    {
        name: 'ACE - Perris (CA)',
        val:275,
        port:'CA',
        zkoss:910,
        zpicap:910,
        zlogic:150
    },
    {
        name: 'ADESA Birmingham (AL)',
        val:345,
        port:'GA',
        zkoss:760,
        zpicap:760,
        zlogic:150
    },
    {
        name: 'Abilеne (TX)',
        val:395,
        port:'TX',
        zkoss:755,
        zpicap:755,
        zlogic:150
    },
    {
        name: 'Akron - Canton (OH)',
        val:470,
        port:'NJ',
        zkoss:650,
        zpicap:650,
        zlogic:150
    },
    {
        name: 'Albany (NY)',
        val:295,
        port:'NJ',
        zkoss:650,
        zpicap:650,
        zlogic:150
    },
    {
        name: 'Albuquerque (NM)',
        val:470,
        port:'TX',
        zkoss:755,
        zpicap:755,
        zlogic:150
    },
    {
        name: 'Altoona (PA)',
        val:395,
        port:'NJ',
        zkoss:650,
        zpicap:650,
        zlogic:150
    },
    {
        name: 'Amarillo (TX)',
        val:445,
        port:'TX',
        zkoss:755,
        zpicap:755,
        zlogic:150
    }



];


//======== Данные для выпадающего списка "Укажите Ваш город"  ========//
var state = [

    {
        name: '   ',
        val:0
    },
    {
    name: 'Киев',
    val:220
    },
    {
        name: 'Полтава',
        val:250
    },
    {
        name: 'Харьков',
        val:280
    }
 ];