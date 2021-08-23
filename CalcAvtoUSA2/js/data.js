var Zbroker=700;
var Zremont=150;


//======== Аукцион copart ========//
var copart = [
    {
        name: 'ABILENE - TX',
        val:540,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'AK - ANCHORAGE',
        val:2100,
        port:'WA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'ALBANY - NY',
        val:445,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'ALBUQUERQUE - NM',
        val:620,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'ALTOONA - PA',
        val:570,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'AMARILLO - TX',
        val:595,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'ANDREWS - TX',
        val:645,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'ANTELOPE - CA',
        val:500,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'APPLETON - WI',
        val:735,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'ATLANTA - GA',
        val:420,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ATLANTA EAST - GA',
        val:420,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ATLANTA NORTH - GA',
        val:420,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ATLANTA SOUTH - GA',
        val:420,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ATLANTA WEST - GA',
        val:420,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'AUSTIN - TX',
        val:395,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },

    {
        name: 'BAKERSFIELD - CA',
        val:405,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'BALTIMORE - MD',
        val:445,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'BATON ROUGE - LA',
        val:570,
        port:'GA',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'BILLINGS MT',
        val:995,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'BIRMINHAM AL',
        val:845,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:350
    },
    {
        name: 'BOISE - ID',
        val:735,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'BUFFALO - NY',
        val:600,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CANDIA - NH',
        val:750,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CARTERSVILLE - GA',
        val:435,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:350
    },
    {
        name: 'CASPER - WY',
        val:1100,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'CHAMBERSBURG - PA',
        val:470,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CHARLESTON - SC',
        val:395,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'CHARLESTON - WV',
        val:680,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'CHICAGO - IL',
        val:670,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CHICAGO NORTH - IL',
        val:670,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CHICAGO SOUTH - IL',
        val:670,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CHINA GROVE - NC',
        val:420,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'CLEVELAND - OH',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'CLEVELAND EAST - OH',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'CLEVELAND WEST - OH',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'COLORADO SPRINGS - CO',
        val:670,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'COLUMBIA - SC',
        val:385,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'COLUMBUS - OH',
        val:595,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CORPUS CHRISTI - TX',
        val:470,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'CRASHEDTOYS ATLANTA',
        val:420,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },

    {
        name: 'CRASHEDTOYS DALLAS- TX',
        val:435,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'CRASHEDTOYS EAST BETHEL - MN',
        val:800,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CRASHEDTOYS ELDRIDGE - IA',
        val:950,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CRASHEDTOYS MINNEAPOLIS-MN',
        val:1000,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'CRASHEDTOYS SACRAMENTO - CA',
        val:525,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'CULPEPER - VA',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'DALLAS - TX',
        val:395,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'DALLAS SOUTH - TX',
        val:420,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'DANVILLE - VA',
        val:570,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'DAVENPORT - IA',
        val:695,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'DAYTON - OH',
        val:620,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'DENVER - CO',
        val:650,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'DENVER CENTRAL - CO',
        val:650,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'DENVER SOUTH - CO',
        val:650,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'DES MOINES - IA',
        val:695,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'DETROIT - MI',
        val:595,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:300
    },
    {
        name: 'EDMONTON - AB',
        val:1500,
        port:'ON',
        zkoss:1250,
        zpicap:1200,
        zlogic:250
    },
    {
        name: 'EL PASO - TX',
        val:570,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'EUGENE - OR',
        val:645,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'EXETER - RI',
        val:495,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'FAYETTEVILLE - AR',
        val:570,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'FLINT - MI',
        val:795,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'FORT WAYNE - IN',
        val:745,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'FREDERICKSBURG - VA',
        val:465,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'FREMONT - CA',
        val:470,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'FRESNO - CA',
        val:425,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'FT. PIERCE - FL',
        val:445,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'FT. WORTH - TX',
        val:395,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'GLASSBORO EAST - NJ',
        val:395,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'GLASSBORO WEST - NJ',
        val:395,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'GLASSBORO WEST - NJ',
        val:670,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'GREER - SC',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'HALIFAX - NS',
        val:935,
        port:'QC',
        zkoss:1250,
        zpicap:1250,
        zlogic:250
    },
    {
        name: 'HAMMOND - IN',
        val:645,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'HAMPTON - VA',
        val:570,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'HARISBURG - PA',
        val:495,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'HARTFORD - CT',
        val:420,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'HARTFORD SPRINGFIELD - CT',
        val:430,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'HAYWARD - CA',
        val:520,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'HELENA - MT',
        val:1095,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'HONOLULU - HI',
        val:1795,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'HOUSTON - TX',
        val:395,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'INDIANAPOLIS - IN',
        val:620,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'IONIA - MI',
        val:700,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'JACKSON - MS',
        val:545,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'JACKSONVILLE EAST - FL',
        val:345,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'JACKSONVILLE WEST - FL',
        val:345,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'KANSAS CITY - KS',
        val:670,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'KINCHELOE - MI',
        val:1075,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'KNOXVILLE - TN',
        val:520,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'LANSING - MI',
        val:700,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'LAS VEGAS - NV',
        val:445,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'LEXINGTON EAST - KY',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'LEXINGTON WEST - KY',
        val:635,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'LINCOLN - NE',
        val:825,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'LITTLE ROCK - AR',
        val:570,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'LONDON - ON',
        val:525,
        port:'ON',
        zkoss:1250,
        zpicap:1200,
        zlogic:250
    },
    {
        name: 'LONG BEACH - CA',
        val:385,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'LONG ISLAND - NY',
        val:425,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'LONGVIEW - TX',
        val:445,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'LOS ANGELES - CA',
        val:280,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'LOUISVILLE - KY',
        val:645,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'LUFKIN - TX',
        val:395,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'LYMAN - ME',
        val:645,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'MACON - GA',
        val:425,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MADISON - WI',
        val:800,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'MARTINEZ - CA',
        val:495,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'MCALLEN - TX',
        val:445,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'MEBANE - NC',
        val:470,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MEMPHIS - TN',
        val:595,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MIAMI - FL',
        val:395,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'MIAMI CENTRAL - FL',
        val:395,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'MIAMI NORTH - FL',
        val:395,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'MIAMI SOUTH - FL',
        val:395,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'MILWAUKEE - WI',
        val:645,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'MINNEAPOLIS - MN',
        val:745,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'MINNEAPOLIS NORTH - MN',
        val:745,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'MOBILE - AL',
        val:520,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MOCKSVILLE - NC',
        val:465,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MONTGOMERY - AL',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'MONTREAL - QC',
        val:425,
        port:'QC',
        zkoss:1250,
        zpicap:1250,
        zlogic:250
    },
    {
        name: 'NASHVILLE - TN',
        val:495,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'NEW ORLEANS - LA',
        val:570,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'NEWBURGH - NY',
        val:395,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'NORTH BOSTON - MA',
        val:480,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'NORTH CHARLESTON - SC',
        val:410,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'NORTH SEATTLE - WA',
        val:795,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'OCALA - FL',
        val:415,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'OGDEN - UT',
        val:600,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'OKLAHOMA CITY - OK',
        val:545,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'ORLANDO - FL',
        val:425,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ORLANDO NORTH - FL',
        val:450,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'ORLANDO SOUTH - FL',
        val:450,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'PASCO - WA',
        val:845,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'PEORIA - IL',
        val:695,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PHILADELPHIA - PA',
        val:385,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PHILADELPHIA EAST - PA ',
        val:405,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PHILADELPHIA EAST-SUBLOT - PA ',
        val:435,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PHOENIX - AZ ',
        val:445,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'PITTSBURG - PA ',
        val:545,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PITTSBURGH EAST - PA ',
        val:545,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PITTSBURGH NORTH - PA',
        val:555,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PITTSBURGH SOUTH - PA',
        val:555,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PITTSBURGH WEST - PA',
        val:555,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'PORTLAND - OR',
        val:645,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'PORTLAND NORTH - OR',
        val:675,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'PORTLAND SOUTH - OR',
        val:675,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'PUNTA GORDA - FL',
        val:445,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'RALEIGH - NC',
        val:420,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'RANCHO CUCAMONGA - CA',
        val:325,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'RENO - NV',
        val:595,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'RICHMOND - VA',
        val:545,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'RICHMOND EAST - VA',
        val:545,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'ROCHESTER - NY',
        val:570,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'SACRAMENTO - CA',
        val:520,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SALT LAKE CITY - UT',
        val:595,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SALT LAKE CITY NORTH - UT',
        val:600,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SAN ANTONIO - TX',
        val:470,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'SAN BERNARDINO - CA',
        val:330,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SAN DIEGO - CA',
        val:345,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SAN JOSE - CA',
        val:520,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SAVANNAH - GA',
        val:295,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'SCRANTON - PA',
        val:445,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'SEAFORD - DE',
        val:520,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'SHREVEPORT - LA',
        val:425,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'SIKESTON - MO',
        val:695,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'SO SACRAMENTO - CA',
        val:545,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SOMERVILLE - NJ',
        val:320,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'SOUTH BOSTON - MA',
        val:495,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'SOUTHERN ILLINOIS - IL',
        val:645,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'SPARTANBURG - SC',
        val:475,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'SPOKANE - WA',
        val:845,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SPRINGFIELD - MO',
        val:670,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'ST. CLOUD - MN',
        val:745,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'ST. LOUIS - MO',
        val:645,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'SUN VALLEY - CA',
        val:370,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'SYRACUSE - NY',
        val:529,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'TALLAHASSEE - FL',
        val:445,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'TAMPA SOUTH - FL',
        val:425,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'TANNER - AL',
        val:545,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'TIFTON - GA',
        val:420,
        port:'GA',
        zkoss:810,
        zpicap:760,
        zlogic:250
    },
    {
        name: 'TORONTO - ON',
        val:525,
        port:'ON',
        zkoss:1250,
        zpicap:1250,
        zlogic:250
    },
    {
        name: 'TRENTON - NJ',
        val:320,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'TUCSON - AZ',
        val:545,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'TULSA - OK',
        val:570,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'VALLEJO - CA',
        val:520,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'VAN NUYS - CA',
        val:475,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'WACO - TX',
        val:545,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'WALTON - KY',
        val:595,
        port:'CA',
        zkoss:1100,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'WASHINGTON DC - DC',
        val:445,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'WEBSTER - NH',
        val:595,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'WEST PALM BEACH - FL',
        val:440,
        port:'FL',
        zkoss:960,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'WEST WARREN - MA',
        val:490,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'WHEELING - IL',
        val:620,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'WICHITA - KS',
        val:670,
        port:'TX',
        zkoss:955,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'YORK HAVEN - PA',
        val:495,
        port:'NJ',
        zkoss:850,
        zpicap:800,
        zlogic:250
    }
];


//======== Аукцион iaai ========//
var iaai = [

    {
        name: 'ACE - Carson (CA)',
        val:425,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'ACE - Perris (CA)',
        val:425,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'ADESA Birmingham (AL)',
        val:495,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Abilеne (TX)',
        val:545,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Akron - Canton (OH)',
        val:620,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Albany (NY)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Albuquerque (NM)',
        val:620,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Altoona (PA)',
        val:545,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Amarillo (TX)',
        val:595,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Anaheim (CA)',
        val:320,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Anchorage (AK)',
        val:2100,
        port:'WA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Appleton (WI)',
        val:720,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Asheville (NC)',
        val:480,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Ashland (KY)',
        val:670,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Atlanta (GA)',
        val:410,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Atlanta East (GA)',
        val:410,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Atlanta North (GA)',
        val:410,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Atlanta South (GA)',
        val:410,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Austin (TX)',
        val:370,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Avenel New Jersey (NJ)',
        val:310,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Baltimore (MD)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Baton Rouge (LA)',
        val:570,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Billings (MT)',
        val:995,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Birmingham (AL)',
        val:495,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Boise (ID)',
        val:735,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Boston-Shirley (MA)',
        val:475,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Bowling Green (KY)',
        val:620,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Bridgeport (PA)',
        val:410,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Buckhannon (WV)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Buffalo (NY)',
        val:570,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Burlington (VT)',
        val:620,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Casper (WY)',
        val:1075,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Central New Jersey (NJ)',
        val:320,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Charleston (SC)',
        val:395,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Charlotte (NC)',
        val:420,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Chattanooga (TN)',
        val:545,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Chicago - North (IL)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Chicago - South (IL)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Chicago - West (IL)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Cincinnati (OH)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
     {
        name: 'Cincinnati - South (OH)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Clearwater (FL)',
        val:425,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Cleveland (OH)',
        val:595,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Cleveland (OH)',
        val:595,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Colton (CA)',
        val:395,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Columbia (SC)',
        val:390,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Columbus (OH)',
        val:620,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Concord (NC)',
        val:470,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Corpus Christi (TX)',
        val:470,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Culpeper (VA)',
        val:580,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Dallas (TX)',
        val:395,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Davenport (IA)',
        val:495,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Dayton (OH)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Denver (CO)',
        val:645,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Denver East (CO)',
        val:645,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Des Moines (IA)',
        val:695,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Detroit (MI)',
        val:595,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Dothan (AL)',
        val:495,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Dundalk (MD)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'East Bay (CA)',
        val:470,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'El Paso (TX)',
        val:570,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Englishtown (NJ)',
        val:345,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Erie (PA)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Eugene (OR)',
        val:675,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Fargo (ND)',
        val:1045,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Fayetteville (AR)',
        val:570,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Flint (MI)',
        val:675,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Fontana (CA)',
        val:325,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Fort Myers (FL)',
        val:485,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Fort Pierce (FL)',
        val:445,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Fredericksburg South (VA)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Fremont (CA)',
        val:470,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Fresno (CA)',
        val:425,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Ft Worth (TX)',
        val:405,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Grand Rapids (MI)',
        val:670,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Great Lakes (MI)',
        val:670,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Greensboro (NC)',
        val:470,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Greenville (SC)',
        val:440,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Grenada (MS)',
        val:595,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Gulf Coast (MS)',
        val:520,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Hartford (CT)',
        val:420,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Hartford - South (CT)',
        val:420,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'High Desert (CA)',
        val:420,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Honolulu (HI)',
        val:1745,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Houston (TX)',
        val:375,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Houston - North (TX)',
        val:375,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Houston South (TX)',
        val:375,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Houston-North (TX)',
        val:375,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Huntsville (AL)',
        val:520,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Indianapolis (IN)',
        val:720,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Jackson (MS)',
        val:545,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Jacksonville (FL)',
        val:345,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Kansas City (KS)',
        val:670,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Knoxville (TN)',
        val:990,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Lafayette (LA)',
        val:595,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Las Vegas (NV)',
        val:445,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Laurel (MD)',
        val:495,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Lexington (SC)',
        val:400,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Lincoln (IL)',
        val:695,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Little Rock (AR)',
        val:570,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Long Island (NY)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Longview (TX)',
        val:445,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Los Angeles (CA)',
        val:280,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Louisville (KY)',
        val:645,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Louisville North (KY)',
        val:645,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Lubbock (TX)',
        val:645,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Macon (GA)',
        val:395,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Manchester (NH)',
        val:545,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'McAllen (TX)',
        val:445,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Memphis (TN)',
        val:595,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Metro (DC)',
        val:455,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Metro DC (MD)',
        val:455,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Miami (FL)',
        val:410,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Miami North (FL)',
        val:395,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Milwaukee (WI)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Minneapolis (MN)',
        val:745,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Missoula (MT)',
        val:1070,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Nashville (TN)',
        val:495,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'New Castle (DE)',
        val:420,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'New Orleans (LA)',
        val:570,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'New Orleans East (LA)',
        val:575,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Newburgh (NY)',
        val:395,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'North Hollywood (CA)',
        val:320,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Nothern New Jersey (NJ)',
        val:320,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Nothern Virginia (VA)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Oklahoma City (OK)',
        val:545,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Omaha (NE)',
        val:775,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Orlando (FL)',
        val:425,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Orlando-North (FL)',
        val:425,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Paducah (KY)',
        val:790,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Pensacola (FL)',
        val:520,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Permian Basin (TX)',
        val:150,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Philadelphia (PA)',
        val:385,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Phoenix (AZ)',
        val:445,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Pittsburgh (PA)',
        val:545,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Pittsburgh - North (PA)',
        val:560,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Portage (WI)',
        val:700,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Portland (OR)',
        val:645,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Portland - Gorham (ME)',
        val:670,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Portland North (OR)',
        val:150,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Portland West (OR)',
        val:645,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Providence (RI)',
        val:495,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Pulaski (VA)',
        val:620,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Raleigh (NC)',
        val:445,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Reno (NV)',
        val:595,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Richmond (VA)',
        val:545,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Roanoke (VA)',
        val:700,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Rochester (NY)',
        val:570,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Rosedale (MD)',
        val:470,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Sacramento (CA)',
        val:545,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Salt Lake City (UT)',
        val:595,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'San Antonio (TX)',
        val:470,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'San Antonio-South (TX)',
        val:470,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'San Diego (CA)',
        val:345,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Savannah (GA)',
        val:295,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Scranton (PA)',
        val:445,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Seattle (WA)',
        val:645,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Shady Spring (WV)',
        val:680,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Shreveport (LA)',
        val:865,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Sioux Falls (SD)',
        val:1000,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'South Bend (IN)',
        val:695,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Southern New Jersey (NJ)',
        val:370,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Speciality Division (IL)',
        val:695,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Spokane (WA)',
        val:845,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Springfield (MO)',
        val:670,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'St. Louis (IL)',
        val:645,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'St. Paul (MN)',
        val:150,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Suffolk (VA)',
        val:645,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Syracuse (NY)',
        val:520,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Tampa (FL)',
        val:425,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Tampa North (FL)',
        val:425,
        port:'FL',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Taunton (MA)',
        val:495,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Templeton (MA)',
        val:500,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Tidewater (VA)',
        val:545,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
    },
    {
        name: 'Tifton (GA)',
        val:420,
        port:'GA',
        zkoss:910,
        zpicap:910,
        zlogic:250
    },
    {
        name: 'Tucson (AZ)',
        val:545,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Tulsa (OK)',
        val:570,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Western Colorado (CO)',
        val:7950,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'Wichita (KS)',
        val:670,
        port:'TX',
        zkoss:905,
        zpicap:905,
        zlogic:250
    },
    {
        name: 'Wilmington (NC))',
        val:445,
        port:'CA',
        zkoss:1060,
        zpicap:1060,
        zlogic:250
    },
    {
        name: 'York Springs (PA)',
        val:470,
        port:'NJ',
        zkoss:800,
        zpicap:800,
        zlogic:250
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
    },
    {
        name: 'Львов',
        val:300
    },
    {
        name: 'Чернигов',
        val:350
    },
    {
        name: 'Житомир',
        val:355
    },
    {
        name: 'Другие по договоренности',
        val:280
    }

 ];