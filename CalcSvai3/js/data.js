var typesv1, Ztypesv1;
// Тип винтовой сваи для ДОМ 1 вариант и ее цена  //
typesv1="Винтовая Свая 108/2500/3,5 ";
Ztypesv1=3000;

// Тип винтовой сваи для ДОМ 1 вариант и ее цена  //
typesv2="Винтовая Свая 108/2500/4";
Ztypesv2=3300;

// Тип винтовой сваи для БАНЯ 1 вариант и ее цена  //
typesv3="Винтовая Свая 108/2500/3,5";
Ztypesv3=3000;

// Тип винтовой сваи для БАНЯ 1 вариант и ее цена  //
typesv4="Винтовая Свая 108/2500/40";
Ztypesv4=3300;


// Тип винтовой сваи для Пристройка (тепловой контур) и ее цена  //
typesv5="Винтовая Свая 108/2500/3,5";
Ztypesv5=3000;

// Тип винтовой сваи для Пристройка (открытая) и ее цена  //
typesv6="Винтовая Свая 89/2000/3";
Ztypesv6=2700;

// Тип винтовой сваи для Заборный столб 1 вариант и ее цена  //
typesv7="Винтовая Свая   76/3500/3";
Ztypesv7=1500;

// Тип винтовой сваи для Заборный столб 2 вариант и ее цена  //
typesv8="Винтовая Свая   76/4000/3";
Ztypesv8=1400;

// Цена установки 1 сваи  //
Zsvwork1=1100;

// Цена монтажа обвязки   //
Zobmont=500;


//  === Редактируемые параметры  =====//


// Тип сооружения  //

var tupeob = [
    {
        name: 'Дом',
        value: '1'

    },
    {
        name: 'Баня',
        value: '2'
    },
    {
        name: 'Пристройка (тепловой контур)',
        value: '3'
    },
    {
        name: 'Пристройка (открытая)',
        value: '4'
    },
    {
        name: 'Заборный столб',
        value: '5'
    }
];


// Материал сооружения ДОМ  //

var materialhouse = [
    {
        name: 'Брус 150 мм',
        value: '1'

    },
    {
        name: 'Брус 200 мм',
        value: '2'
    },
    {
        name: 'Бревно до 200 мм',
        value: '3'
    },
    {
        name: 'Бревно до 220 -240 мм',
        value: '4'
    },
    {
        name: 'Каркасно-шитовой',
        value: '5'
    },
    {
        name:  'Sip панели',
        value: '6'
    }
];

// Материал сооружения БАНЯ  //

var materialbath = [
    {
        name: 'Брус 150 мм',
        value: '1'

    },
    {
        name: 'Брус 200 мм',
        value: '2'
    },
    {
        name: 'Бревно до 200 мм',
        value: '3'
    },
    {
        name: 'Бревно до 220 -240 мм)',
        value: '4'
    },
    {
        name: 'Каркасно-шитовой',
        value: '5'
    }
];

// Материал сооружения Пристройка (тепловой контур)  //

var materialannex1 = [
    {
        name: 'Брус 150 мм',
        value: '1'

    },
    {
        name: 'Бревно до 200 мм',
        value: '2'
    },
    {
        name: 'Каркасно-шитовой',
        value: '3'
    },
    {
        name: 'Sip панели',
        value: '4'
    }

];

// Материал сооружения Пристройка (открытая)  //

var materialannex2 = [
    {
        name: 'Брус 150 мм',
        value: '1'

    },
    {
        name: 'Каркасно-шитовой',
        value: '2'
    }
];

// Материал сооружения Заборный столб  //

var materialpalisade = [
    {
        name: 'Полотно забора (профлист, штакетник), грунт песок',
        value: '1'

    },
    {
        name: 'Полотно забора (профлист, штакетник), грунт глина',
        value: '2'
    }
];

// Периметр Дом 1 вариант  //

var perimetrhouse1 = [
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '12',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '20',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Дом 2 вариант  //

var perimetrhouse2 = [
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '13',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '21',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Бани 1 вариант  //

var perimetrbath1 = [
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '12',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '20',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Бани 2 вариант  //

var perimetrbath2 = [
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '13',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '21',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Пристройка (тепловой контур) 1 вариант  //

var perimetrlannex1 = [
    {
        name: '5*3',
        value: '9',
        mp:'24'
    },
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '12',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '20',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Пристройка (открытая) 2 вариант  //

var perimetrlannex2 = [
    {
        name: '5*3',
        value: '9',
        mp:'24'
    },
    {
        name: '5*4',
        value: '9',
        mp:'24'
    },
    {
        name: '5*5',
        value: '9',
        mp:'30'
    },
    {
        name: '5*6',
        value: '12',
        mp:'28'
    },
    {
        name: '5*7',
        value: '12',
        mp:'36'
    },
    {
        name: '5*8',
        value: '15',
        mp:'36'
    },
    {
        name: '5*9',
        value: '18',
        mp:'36'
    },
    {
        name: '5*10',
        value: '18',
        mp:'36'
    },
    {
        name: '5*11',
        value: '21',
        mp:'42'
    },
    {
        name: '5*12',
        value: '21',
        mp:'42'
    },
    {
        name: '6*6',
        value: '16',
        mp:'30'
    },
    {
        name: '6*7',
        value: '16',
        mp:'36'
    },
    {
        name: '6*8',
        value: '20',
        mp:'36'
    },
    {
        name: '6*9',
        value: '24',
        mp:'42'
    },
    {
        name: '6*10',
        value: '24',
        mp:'42'
    },
    {
        name: '6*11',
        value: '28',
        mp:'48'
    },
    {
        name: '6*12',
        value: '28',
        mp:'48'
    },
    {
        name: '7*7',
        value: '20',
        mp:'42'
    },
    {
        name: '7*8',
        value: '20',
        mp:'42'
    },
    {
        name: '7*9',
        value: '24',
        mp:'48'
    },
    {
        name: '7*10',
        value: '24',
        mp:'48'
    },
    {
        name: '7*11',
        value: '28',
        mp:'54'
    },
    {
        name: '7*12',
        value: '28',
        mp:'54'
    }
];

// Периметр Заборный столб 2 вариант  //

var perimetrpalisade = [
    {
        name: '15 м.п.',
        value: '6',
        mp:'15'
    },
    {
        name: '16 м.п.',
        value: '6',
        mp:'16'
    },
    {
        name: '17 м.п.',
        value: '7',
        mp:'17'
    },
    {
        name: '18 м.п.',
        value: '7',
        mp:'18'
    },
    {
        name: '19 м.п.',
        value: '8',
        mp:'19'
    },
    {
        name: '20 м.п.',
        value: '8',
        mp:'20'
    },
    {
        name: '21 м.п.',
        value: '9',
        mp:'21'
    },
    {
        name: '22 м.п.',
        value: '9',
        mp:'22'
    },
    {
        name: '23 м.п.',
        value: '10',
        mp:'23'
    },
    {
        name: '24 м.п.',
        value: '10',
        mp:'24'
    },
    {
        name: '25 м.п.',
        value: '10',
        mp:'25'
    },
    {
        name: '26 м.п.',
        value: '10',
        mp:'26'
    },
    {
        name: '27 м.п.',
        value: '11',
        mp:'27'
    },
    {
        name: '28 м.п.',
        value: '11',
        mp:'28'
    },
    {
        name: '29 м.п.',
        value: '12',
        mp:'29'
    },
    {
        name: '30 м.п.',
        value: '12',
        mp:'30'
    },
    {
        name: '31 м.п.',
        value: '12',
        mp:'31'
    },
    {
        name: '32 м.п.',
        value: '13',
        mp:'32'
    },
    {
        name: '33 м.п.',
        value: '13',
        mp:'33'
    },
    {
        name: '34 м.п.',
        value: '14',
        mp:'34'
    },
    {
        name: '35 м.п.',
        value: '14',
        mp:'35'
    },
    {
        name: '36 м.п.',
        value: '14',
        mp:'36'
    },
    {
        name: '37м.п.',
        value: '15',
        mp:'37'
    }
];

// Обвязка для Дома, Бани и Пристройка (тепловой контур)  //

var stud1 = [
    {
        name: 'Не требуется',
        value: '0'

    },
    {
        name: 'Швеллер 12 см',
        value: '830'

    },
    {
        name: 'Швеллер 14 см',
        value: '1020'
    },
    {
        name: 'Швеллер 16 см',
        value: '1350'
    }
];

// Обвязка для Пристройка (открытая)  //

var stud2 = [
    {
        name: 'Не требуется',
        value: '0'

    },
    {
        name: 'Швеллер 12 см',
        value: '830'

    }
];

// Обвязка для Заборный столб  //

var stud3 = [
    {
        name: 'Не требуется',
        value: '0'

    },
    {
        name: 'Проф. труба',
        value: '140'

    }
];



