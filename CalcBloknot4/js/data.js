
//======== формат Формат бумаги SRA3========//
var Lsra3=320;
var Hsra3=450;

//======== Цена за тонну бумаги========//
var Zmelov=950;
var Zofsrt=1000;
var Zkart=1500;
var Zdns=2650;
//var Zcolorcopi=3200;
//var Zsamokl=4300;

//======== Курс ЕВРО ========//
var Kevro=92;

//======== Курс удорожания ========//

var Kzena=1;
var KzenaOblColor=1;
var KzenaOblChb=1;
var KzenaBlockColor=1;
var KzenaBlockChb=1;

//======== Цена приладки ========//

var KpriladraSkoba=500;
var KpriladraPrugina=500;
var KpriladraKlei=500;



//======== формат размеры блокнота========//

var format = [
    {
        name: ' Книга, A6 (105 × 148 мм)',
        val: '1'

    },
    {
        name: 'Книга, A5 (148 × 210 мм)',
        val: '2'
    },
    {
        name: ' Книга, A4 (210 × 297 мм)',
        val: '3'
    },
    {
        name: 'Книга, A3 (297 × 420 мм)',
        val: '4'
    },
    {
        name: 'Альбом, A6 (148 × 105 мм)',
        val: '5'
    },
    {
        name: 'Альбом, A5 (210 × 148 мм)',
        val: '6'
    },
    {
        name: 'Альбом, A4 (297 × 210 мм)',
        val: '7'
    },
    {
        name: ' Альбом, A3 (420 × 297 мм)',
        val: '8'
    },
    {
        name: 'Свой размер',
        val: '9'
    }


];
// ======== формат бумаги для блокнота и обложки =========//
var typeb = [
    {
        name: 'офсетка 80 гр/м2',
        val: '80'

    },
    {
        name: 'офсетка 100 гр/м2',
        val: '100'
    },
    {
        name: 'офсетка 120 гр/м2',
        val: '120'
    },
    {
        name: 'офсетка 160 гр/м2',
        val: '160'
    },
    {
        name: 'офсетка 180 гр/м2',
        val: '180'
    },
    {
        name: 'офсетка 200 гр/м2',
        val: '200'
    },
    {
        name: 'меловка 130 гр/м2',
        val: '130'
    },
    {
        name: 'меловка 150 гр/м2',
        val: '150'
    },
    {
        name: 'меловка 170 гр/м2',
        val: '170'
    },
    {
        name: 'меловка 200 гр/м2',
        val: '200'
    },
    {
        name: 'меловка 250 гр/м2',
        val: '250'
    },
    {
        name: 'меловка 300 гр/м2',
        val: '300'
    },
    {
        name: 'картон 270 гр/м2',
        val: '270'
    },
    {
        name: 'картон 300 гр/м2',
        val: '300'
    },
    {
        name: 'dnc 300 гр/м2',
        val: '300'
    }

];


// ======== Цветность =========//
var colorb = [
    {
        name: '4+0',
        val: '1'

    },
    {
        name: '4+4',
        val: '2'
    },
    {
        name: '1+0',
        val: '3'
    },
    {
        name: '1+1',
        val: '4'
    }
];



// ======== Ламинирование =========//
var laminir = [
    {
        name: 'Без ламинации',
        val: '0'
    },
    {
        name: 'Глянец 32 мкр',
        val: '0.0180'

    },
    {
        name: 'Глянец 75 мкр',
        val: '0.1680'
    },
    {
        name: 'Глянец 125 мкр',
        val: '0.2130'
    },
    {
        name: 'Матовая 32 мкр',
        val: '0.0180'
    },
    {
        name: 'Матовая 75 мкр',
        val: '0.2400'
    },
    {
        name: 'Матовая 125 мкр',
        val: '0.3950'
    },
    {
        name: 'Ламинация софтач',
        val: '0.138'
    },
    {
        name: 'Прозрачный пластик',
        val: '0.138'
    }

];

var Kprug = ['15.00','19.99','19.97','19.96','19.95','19.94','19.92','19.91','19.90','19.88','19.87','19.86','19.84','19.83','19.82','19.81','19.79','19.78','19.77',
    '19.75','19.74','19.73','19.71','19.70','19.69','19.68','19.66','19.65','19.64','19.62','19.61','19.60','19.58','19.57','19.56','19.54','19.53','19.52',
    '19.51','19.49','19.48','19.47','19.45','19.44','19.43','19.41','19.40','19.39','19.38','19.36','19.35','19.34','19.32','19.31','19.30','19.28','19.27',
    '19.26','19.25','19.23','19.22','19.21','19.19','19.18','19.17','19.15','19.14','19.13','19.12','19.10','19.09','19.08','19.06','19.05','19.04','19.02',
    '19.01','19.00','18.99','18.97','18.96','18.95','18.93','18.92','18.91','18.89','18.88','18.87','18.86','18.84','18.83','18.82','18.80','18.79','18.78',
    '18.76','18.75','18.74','18.73','18.71','18.70','18.69','18.67','18.66','18.65','18.63','18.62','18.61','18.60','18.58','18.57','18.56','18.54','18.53',
    '18.52','18.50','18.49','18.48','18.47','18.45','18.44','18.43','18.41','18.40','18.39','18.37','18.36','18.35','18.34','18.32','18.31','18.30','18.28',
    '18.27','18.26','18.24','18.23','18.22','18.21','18.19','18.18','18.17','18.15','18.14','18.13','18.11','18.10','18.09','18.08','18.06','18.05','18.04',
    '18.02','18.01','18.00','17.98','17.97','17.96','17.95','17.93','17.92','17.91','17.89','17.88','17.87','17.85','17.84','17.83','17.82','17.80','17.79',
    '17.78','17.76','17.75','17.74','17.72','17.71','17.70','17.69','17.67','17.66','17.65','17.63','17.62','17.61','17.59','17.58','17.57','17.56','17.54',
    '17.53','17.52','17.50','17.49','17.48','17.46','17.45','17.44','17.43','17.41','17.40','17.39','17.37','17.36','17.35','17.33','17.32','17.31','17.30',
    '17.28','17.27','17.26','17.24','17.23','17.22','17.20','17.19','17.18','17.17','17.15','17.14','17.13','17.11','17.10','17.09','17.07','17.06','17.05',
    '17.04','17.02','17.01','17.00','16.98','16.97','16.96','16.94','16.93','16.92','16.91','16.89','16.88','16.87','16.85','16.84','16.83','16.81','16.80',
    '16.79','16.78','16.76','16.75','16.74','16.72','16.71','16.70','16.68','16.67','16.66','16.65','16.63','16.62','16.61','16.59','16.58','16.57','16.55',
    '16.54','16.53','16.52','16.50','16.49','16.48','16.46','16.45','16.44','16.42','16.41','16.40','16.39','16.37','16.36','16.35','16.33','16.32','16.31',
    '16.29','16.28','16.27','16.26','16.24','16.23','16.22','16.20','16.19','16.18','16.16','16.15','16.14','16.13','16.11','16.10','16.09','16.07','16.06',
    '16.05','16.03','16.02','16.01','16.00','15.98','15.97','15.96','15.94','15.93','15.92','15.90','15.89','15.88','15.87','15.85','15.84','15.83','15.81',
    '15.80','15.79','15.77','15.76','15.75','15.74','15.72','15.71','15.70','15.68','15.67','15.66','15.64','15.63','15.62','15.61','15.59','15.58','15.57',
    '15.55','15.54','15.53','15.51','15.50','15.49','15.48','15.46','15.45','15.44','15.42','15.41','15.40','15.38','15.37','15.36','15.35','15.33','15.32',
    '15.31','15.29','15.28','15.27','15.25','15.24','15.23','15.22','15.20','15.19','15.18','15.16','15.15','15.14','15.12','15.11','15.10','15.09','15.07',
    '15.06','15.05','15.03','15.02','15.01','14.99','14.98','14.97','14.96','14.94','14.93','14.92','14.90','14.89','14.88','14.86','14.85','14.84','14.83',
    '14.81','14.80','14.79','14.77','14.76','14.75','14.73','14.72','14.71','14.70','14.68','14.67','14.66','14.64','14.63','14.62','14.60','14.59','14.58',
    '14.57','14.55','14.54','14.53','14.51','14.50','14.49','14.47','14.46','14.45','14.44','14.42','14.41','14.40','14.38','14.37','14.36','14.34','14.33',
    '14.32','14.31','14.29','14.28','14.27','14.25','14.24','14.23','14.21','14.20','14.19','14.18','14.16','14.15','14.14','14.12','14.11','14.10','14.08',
    '14.07','14.06','14.05','14.03','14.02','14.01','13.99','13.98','13.97','13.95','13.94','13.93','13.92','13.90','13.89','13.88','13.86','13.85','13.84',
    '13.82','13.81','13.80','13.79','13.77','13.76','13.75','13.73','13.72','13.71','13.69','13.68','13.67','13.66','13.64','13.63','13.62','13.60','13.59',
    '13.58','13.56','13.55','13.54','13.53','13.51'];


var Kskoba =['10.00','9.99','9.99','9.98','9.97','9.97','9.96','9.95','9.94','9.94','9.93','9.92','9.92','9.91','9.90','9.90','9.89','9.88','9.87','9.87','9.86','9.85',
    '9.85','9.84','9.83','9.83','9.82','9.81','9.80','9.80','9.79','9.78','9.78','9.77','9.76','9.76','9.75','9.74','9.73','9.73','9.72','9.71','9.71','9.70',
    '9.69','9.69','9.68','9.67','9.66','9.66','9.65','9.64','9.64','9.63','9.62','9.62','9.61','9.60','9.59','9.59','9.58','9.57','9.57','9.56','9.55','9.55',
    '9.54','9.53','9.52','9.52','9.51','9.50','9.50','9.49','9.48','9.48','9.47','9.46','9.45','9.45','9.44','9.43','9.43','9.42','9.41','9.41','9.40','9.39',
    '9.38','9.38','9.37','9.36','9.36','9.35','9.34','9.34','9.33','9.32','9.31','9.31','9.30','9.29','9.29','9.28','9.27','9.27','9.26','9.25','9.24','9.24',
    '9.23','9.22','9.22','9.21','9.20','9.20','9.19','9.18','9.17','9.17','9.16','9.15','9.15','9.14','9.13','9.13','9.12','9.11','9.10','9.10','9.09','9.08',
    '9.08','9.07','9.06','9.06','9.05','9.04','9.03','9.03','9.02','9.01','9.01','9.00','8.99','8.99','8.98','8.97','8.96','8.96','8.95','8.94','8.94','8.93',
    '8.92','8.92','8.91','8.90','8.89','8.89','8.88','8.87','8.87','8.86','8.85','8.85','8.84','8.83','8.82','8.82','8.81','8.80','8.80','8.79','8.78','8.78',
    '8.77','8.76','8.75','8.75','8.74','8.73','8.73','8.72','8.71','8.71','8.70','8.69','8.68','8.68','8.67','8.66','8.66','8.65','8.64','8.64','8.63','8.62',
    '8.61','8.61','8.60','8.59','8.59','8.58','8.57','8.57','8.56','8.55','8.54','8.54','8.53','8.52','8.52','8.51','8.50','8.50','8.49','8.48','8.47','8.47',
    '8.46','8.45','8.45','8.44','8.43','8.43','8.42','8.41','8.40','8.40','8.39','8.38','8.38','8.37','8.36','8.36','8.35','8.34','8.33','8.33','8.32','8.31',
    '8.31','8.30','8.29','8.29','8.28','8.27','8.26','8.26','8.25','8.24','8.24','8.23','8.22','8.22','8.21','8.20','8.19','8.19','8.18','8.17','8.17','8.16',
    '8.15','8.15','8.14','8.13','8.12','8.12','8.11','8.10','8.10','8.09','8.08','8.08','8.07','8.06','8.05','8.05','8.04','8.03','8.03','8.02','8.01','8.01',
    '8.00','7.99','7.98','7.98','7.97','7.96','7.96','7.95','7.94','7.94','7.93','7.92','7.91','7.91','7.90','7.89','7.89','7.88','7.87','7.87','7.86','7.85',
    '7.84','7.84','7.83','7.82','7.82','7.81','7.80','7.80','7.79','7.78','7.77','7.77','7.76','7.75','7.75','7.74','7.73','7.73','7.72','7.71','7.70','7.70',
    '7.69','7.68','7.68','7.67','7.66','7.66','7.65','7.64','7.63','7.63','7.62','7.61','7.61','7.60','7.59','7.59','7.58','7.57','7.56','7.56','7.55','7.54',
    '7.54','7.53','7.52','7.52','7.51','7.50','7.49','7.49','7.48','7.47','7.47','7.46','7.45','7.45','7.44','7.43','7.42','7.42','7.41','7.40','7.40','7.39',
    '7.38','7.38','7.37','7.36','7.35','7.35','7.34','7.33','7.33','7.32','7.31','7.31','7.30','7.29','7.28','7.28','7.27','7.26','7.26','7.25','7.24','7.24',
    '7.23','7.22','7.21','7.21','7.20','7.19','7.19','7.18','7.17','7.17','7.16','7.15','7.14','7.14','7.13','7.12','7.12','7.11','7.10','7.10','7.09','7.08',
    '7.07','7.07','7.06','7.05','7.05','7.04','7.03','7.03','7.02','7.01','7.00','7.00','6.99','6.98','6.98','6.97','6.96','6.96','6.95','6.94','6.93','6.93',
    '6.92','6.91','6.91','6.90','6.89','6.89','6.88','6.87','6.86','6.86','6.85','6.84','6.84','6.83','6.82','6.82','6.81','6.80','6.79','6.79','6.78','6.77',
    '6.77','6.76','6.75','6.75','6.74','6.73','6.72','6.72','6.71','6.70','6.70','6.69','6.68','6.68','6.67','6.66','6.65','6.65','6.64','6.63','6.63','6.62',
    '6.61','6.61','6.60','6.59','6.58','6.58','6.57','6.56','6.56','6.55','6.54','6.54','6.53','6.52','6.51','6.51'];

var Kklii =['30.00','29.98','29.96','29.94','29.92','29.90','29.88','29.86','29.84','29.82','29.80','29.78','29.76','29.74','29.72','29.70','29.68','29.66','29.64','29.62',
    '29.60','29.58','29.56','29.54','29.52','29.50','29.48','29.46','29.44','29.42','29.40','29.38','29.36','29.34','29.32','29.30','29.28','29.26','29.24','29.22',
    '29.20','29.18','29.16','29.14','29.12','29.10','29.08','29.06','29.04','29.02','29.00','28.98','28.96','28.94','28.92','28.90','28.88','28.86','28.84','28.82',
    '28.80','28.78','28.76','28.74','28.72','28.70','28.68','28.66','28.64','28.62','28.60','28.58','28.56','28.54','28.52','28.50','28.48','28.46','28.44','28.42',
    '28.40','28.38','28.36','28.34','28.32','28.30','28.28','28.26','28.24','28.22','28.20','28.18','28.16','28.14','28.12','28.10','28.08','28.06','28.04','28.02',
    '28.00','27.98','27.96','27.94','27.92','27.90','27.88','27.86','27.84','27.82','27.80','27.78','27.76','27.74','27.72','27.70','27.68','27.66','27.64','27.62',
    '27.60','27.58','27.56','27.54','27.52','27.50','27.48','27.46','27.44','27.42','27.40','27.38','27.36','27.34','27.32','27.30','27.28','27.26','27.24','27.22',
    '27.20','27.18','27.16','27.14','27.12','27.10','27.08','27.06','27.04','27.02','27.00','26.98','26.96','26.94','26.92','26.90','26.88','26.86','26.84','26.82',
    '26.80','26.78','26.76','26.74','26.72','26.70','26.68','26.66','26.64','26.62','26.60','26.58','26.56','26.54','26.52','26.50','26.48','26.46','26.44','26.42',
    '26.40','26.38','26.36','26.34','26.32','26.30','26.28','26.26','26.24','26.22','26.20','26.18','26.16','26.14','26.12','26.10','26.08','26.06','26.04','26.02',
    '26.00','25.98','25.96','25.94','25.92','25.90','25.88','25.86','25.84','25.82','25.80','25.78','25.76','25.74','25.72','25.70','25.68','25.66','25.64','25.62',
    '25.60','25.58','25.56','25.54','25.52','25.50','25.48','25.46','25.44','25.42','25.40','25.38','25.36','25.34','25.32','25.30','25.28','25.26','25.24','25.22',
    '25.20','25.18','25.16','25.14','25.12','25.10','25.08','25.06','25.04','25.02','25.00','24.98','24.96','24.94','24.92','24.90','24.88','24.86','24.84','24.82',
    '24.80','24.78','24.76','24.74','24.72','24.70','24.68','24.66','24.64','24.62','24.60','24.58','24.56','24.54','24.52','24.50','24.48','24.46','24.44','24.42',
    '24.40','24.38','24.36','24.34','24.32','24.30','24.28','24.26','24.24','24.22','24.20','24.18','24.16','24.14','24.12','24.10','24.08','24.06','24.04','24.02',
    '24.00','23.98','23.96','23.94','23.92','23.90','23.88','23.86','23.84','23.82','23.80','23.78','23.76','23.74','23.72','23.70','23.68','23.66','23.64','23.62',
    '23.60','23.58','23.56','23.54','23.52','23.50','23.48','23.46','23.44','23.42','23.40','23.38','23.36','23.34','23.32','23.30','23.28','23.26','23.24','23.22',
    '23.20','23.18','23.16','23.14','23.12','23.10','23.08','23.06','23.04','23.02','23.00','22.98','22.96','22.94','22.92','22.90','22.88','22.86','22.84','22.82',
    '22.80','22.78','22.76','22.74','22.72','22.70','22.68','22.66','22.64','22.62','22.60','22.58','22.56','22.54','22.52','22.50','22.48','22.46','22.44','22.42',
    '22.40','22.38','22.36','22.34','22.32','22.30','22.28','22.26','22.24','22.22','22.20','22.18','22.16','22.14','22.12','22.10','22.08','22.06','22.04','22.02',
    '22.00','21.98','21.96','21.94','21.92','21.90','21.88','21.86','21.84','21.82','21.80','21.78','21.76','21.74','21.72','21.70','21.68','21.66','21.64','21.62',
    '21.60','21.58','21.56','21.54','21.52','21.50','21.48','21.46','21.44','21.42','21.40','21.38','21.36','21.34','21.32','21.30','21.28','21.26','21.24','21.22',
    '21.20','21.18','21.16','21.14','21.12','21.10','21.08','21.06','21.04','21.02','21.00','20.98','20.96','20.94','20.92','20.90','20.88','20.86','20.84','20.82',
    '20.80','20.78','20.76','20.74','20.72','20.70','20.68','20.66','20.64','20.62','20.60','20.58','20.56','20.54','20.52','20.50','20.48','20.46','20.44','20.42',
    '20.40','20.38','20.36','20.34','20.32','20.30','20.28','20.26','20.24','20.22','20.20','20.18','20.16','20.14','20.12','20.10','20.08','20.06','20.04','20.02'];

