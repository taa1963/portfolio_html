
//======== данные для выпадающего списка "Тип метизов" выполняется при открытие сайта и при нажатие +========//
var tupemetis = [
    {
        name: '-------',
        val: '0'

    },
    {
        name: 'Гайка',
        val: 'gaika'

    },
    {
        name: 'Шайба',
        val: 'shaiba'
    },
    {
        name: 'Шпилька',
        val: 'shpilka'
    },
    {
        name: 'Болт',
        val: 'bolt'
    },
   
    {
        name: 'Винт',
        val: 'wint'
    },
    {
        name: 'Анкеры',
        val: 'anker'
    },
    {
        name: 'Дюбель',
        val: 'dubel'
    },
    {
        name: 'Рондоль',
        val: 'rondol'
    },
    {
        name: 'Заклепка',
        val: 'zaklepka'
    },
    {
        name: 'Такелаж',
        val: 'takelag'
    },
    {
        name: 'Саморезы',
        val: 'samores'
    },
    {
        name: 'Проволока',
        val: 'provoloka'
    },
    {
        name: 'Гвозди',
        val: 'gwosdi'
    },
    {
        name: 'ТРОС',
        val: 'tros'
    },
    {
        name: 'Цепь',
        val: 'zepi'
    },
    {
        name: 'Абразивы',
        val: 'abrasiv'
    },
    {
        name: 'Перфорированный крепеж',
        val: 'kregeq'
    },
    {
        name: 'Хомуты',
        val: 'homut'
    },
] 


//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности"  для типа метиза "Гайка" ========//
var gaikastandart = [
      {
        name: 'ГОСТ 5915-70',
        val: 'ГОСТ 5915-70',
           coating:  [
            { 
             typecoating:'Без покрытия',
              klass:'5.8'
            }
        ],
        diamerts:  [
        { 
            diamert:'6',
            leng:'',
            weight1:'0.0025736',

        },
        {
            diamert:'8',
            leng:'',
            weight1:'0.005548',
        },
        {
            diamert:'10',
            leng:'',
            weight1:'0.01022',
        },
        {
            diamert:'12',
            leng:'',
            weight1:'0.01567',
        },
        {
            diamert:'14',
            leng:'',
            weight1:'0.02533',
        },
        {
            diamert:'16',
            leng:'',
            weight1:'0.03761',
        },
        {
            diamert:'18',
            leng:'',
            weight1:'0.05327',
        },
        {
            diamert:'20',
            leng:'',
            weight1:'0.07144',
        },
        {
            diamert:'22',
            leng:'',
            weight1:'0.10315',
        },
        {
            diamert:'24',
            leng:'',
            weight1:'0.12287',
        },
        {
            diamert:'27',
            leng:'',
            weight1:'0.17528',
        },
        {
            diamert:'30',
            leng:'',
            weight1:'0.24254',
        },
        {
            diamert:'36',
            leng:'',
            weight1:'0.41678',
        },
        {
            diamert:'42',
            leng:'',
            weight1:'0.62388',
        },
        {
            diamert:'48',
            leng:'',
            weight1:'0.9562',
        },
        {
            diamert:'56',
            leng:'',
            weight1:'1.45',
        },
        {
            diamert:'64',
            leng:'',
            weight1:'1.99',
        },
        {
            diamert:'72',
            leng:'',
            weight1:'2.63',
        },
     ]
     
    
    },
    {   
        name: 'DIN 934',
        val: 'DIN 934',
        coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'8.8'
            }
        ],
        diamerts:  [
        { 
            diamert:'3',
            leng:'',
            weight1:'0.000384',

        },
        {
            diamert:'4',
            leng:'',
            weight1:'0.00081',
        },
        {
            diamert:'5',
            leng:'',
            weight1:'0.00123',
        },
        {
            diamert:'6',
            leng:'',
            weight1:'0.0025',
        },
        {
            diamert:'8',
            leng:'',
            weight1:'0.0052',
        },
        {
            diamert:'10',
            leng:'',
            weight1:'0.0116',
        },
        {
            diamert:'12',
            leng:'',
            weight1:'0.0173',
        },
        {
            diamert:'14',
            leng:'',
            weight1:'0.025',
        },
        {
            diamert:'16',
            leng:'',
            weight1:'0.0333',
        },
        {
            diamert:'18',
            leng:'',
            weight1:'0.0494',
        },
        {
            diamert:'20',
            leng:'',
            weight1:'0.0644',
        },
        {
            diamert:'22',
            leng:'',
            weight1:'0.079',
        },
        {
            diamert:'24',
            leng:'',
            weight1:'0.11',
        },
        {
            diamert:'27',
            leng:'',
            weight1:'0.165',
        },
        {
            diamert:'30',
            leng:'',
            weight1:'0.223',
        },
        {
            diamert:'36',
            leng:'',
            weight1:'0.393',
        },
        {
            diamert:'42',
            leng:'',
            weight1:'0.652',
        },
        {
            diamert:'48',
            leng:'',
            weight1:'0.977',
        },

     ]



    },
    {   
        name: 'DIN 985',
        val: 'DIN 985',
        coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'8.8'
            }
        ],
        diamerts:  [
            { 
                diamert:'3',
                leng:'',
                weight1:'0.0005',
    
            },
            {
                diamert:'4',
                leng:'',
                weight1:'0.00085',
            },
            {
                diamert:'5',
                leng:'',
                weight1:'0.0011',
            },
            {
                diamert:'6',
                leng:'',
                weight1:'0.0021',
            },
            {
                diamert:'8',
                leng:'',
                weight1:'0.0045',
            },
            {
                diamert:'10',
                leng:'',
                weight1:'0.0976',
            },
            {
                diamert:'12',
                leng:'',
                weight1:'0.014',
            },
            {
                diamert:'14',
                leng:'',
                weight1:'0.023',
            },
            {
                diamert:'16',
                leng:'',
                weight1:'0.03',
            },
            {
                diamert:'18',
                leng:'',
                weight1:'0.045',
            },
            {
                diamert:'20',
                leng:'',
                weight1:'0.057',
            },
            {
                diamert:'22',
                leng:'',
                weight1:'0.075',
            },
            {
                diamert:'24',
                leng:'',
                weight1:'0.101',
            },
            {
                diamert:'27',
                leng:'',
                weight1:'0.162',
            },
            {
                diamert:'30',
                leng:'',
                weight1:'0.212',
            },
            {
                diamert:'36',
                leng:'',
                weight1:'0.415',
            },
            {
                diamert:'42',
                leng:'',
                weight1:'0.628',
            },
            {
                diamert:'48',
                leng:'',
                weight1:'0.998',
            },
     ]
    },
    {   
        name: 'DIN 1587(колпачковая)',
        val: 'DIN 1587(колпачковая)',
        coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'8.8'
            }
        ],
        diamerts:  [
        { 
            diamert:'5',
            leng:'',
            weight1:'0.00217',

        },
        {
            diamert:'6',
            leng:'',
            weight1:'0.00463',
        },
        {
            diamert:'8',
            leng:'',
            weight1:'0.008',
        },
        {
            diamert:'10',
            leng:'',
            weight1:'0.018',
        },
        {
            diamert:'12',
            leng:'',
            weight1:'0.02951',
        },
        {
            diamert:'14',
            leng:'',
            weight1:'0.04303',
        },
        {
            diamert:'16',
            leng:'',
            weight1:'0.6589',
        },


     ]
    },
    {   
        name: 'DIN 6923(с фланцем)',
        val: 'DIN 6923(с фланцем)' ,
        coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'8.8'
            }
        ],
        diamerts:  [
        { 
            diamert:'4',
            leng:'',
            weight1:'0.0011',

        },
        {
            diamert:'5',
            leng:'',
            weight1:'0.00139',
        },
        {
            diamert:'6',
            leng:'',
            weight1:'0.00345',
        },
        {
            diamert:'8',
            leng:'',
            weight1:'0.00706',
        },
        {
            diamert:'10',
            leng:'',
            weight1:'0.01108',
        },
        {
            diamert:'12',
            leng:'',
            weight1:'0.01878',
        },
        {
            diamert:'14',
            leng:'',
            weight1:'0.02919',
        },
        {
            diamert:'16',
            leng:'',
            weight1:'0.04301',
        },

     ]      
    },
    {   
        name: 'DIN 6334(муфта)',
        val: 'DIN 6334(муфта)',
        coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'8.8'
            }
        ],
        diamerts:  [
        { 
            diamert:'6',
            leng:'',
            weight1:'0.00775',

        },
        {
            diamert:'8',
            leng:'',
            weight1:'0.018',
        },
        {
            diamert:'10',
            leng:'',
            weight1:'0.0396',
        },
        {
            diamert:'12',
            leng:'',
            weight1:'0.057',
        },
        {
            diamert:'14',
            leng:'',
            weight1:'0.08887',
        },
        {
            diamert:'16',
            leng:'',
            weight1:'0.1165',
        },
        {
            diamert:'20',
            leng:'',
            weight1:'0.219',
        },
        {
            diamert:'24',
            leng:'',
            weight1:'0.39',
        },
     ]
    }  
]   


//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности"  для типа метиза "Шайба " ========//
var shaibastandart = [
    {
      name: 'DIN125/ГОСТ-11371',
      val: 'DIN125/ГОСТ-11371',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:'5.8'
          }
      ],
      diamerts:  [
      { 
          diamert:'3',
          leng:'',
          weight1:'0.000119',

      },
      {
          diamert:'4',
          leng:'',
          weight1:'0.000308',
      },
      {
          diamert:'5',
          leng:'',
          weight1:'0.000443',
      },
      {
          diamert:'6',
          leng:'',
          weight1:'0.00102',
      },
      {
          diamert:'8',
          leng:'',
          weight1:'0.00183',
      },
      {
          diamert:'10',
          leng:'',
          weight1:'0.00357',
      },
      {
          diamert:'12',
          leng:'',
          weight1:'0.00627',
      },
      {
          diamert:'14',
          leng:'',
          weight1:'0.00862',
      },
      {
          diamert:'16',
          leng:'',
          weight1:'0.0113',
      },
      {
          diamert:'18',
          leng:'',
          weight1:'0.0147',
      },
      {
          diamert:'20',
          leng:'',
          weight1:'0.0172',
      },
      {
          diamert:'22',
          leng:'',
          weight1:'0.0183',
      },
      {
          diamert:'24',
          leng:'',
          weight1:'0.0323',
      },
      {
          diamert:'27',
          leng:'',
          weight1:'0.0423',
      },
      {
          diamert:'30',
          leng:'',
          weight1:'0.0536',
      },
      {
          diamert:'36',
          leng:'',
          weight1:'0.0921',
      },
     
   ]
   
  
  },
  {   
      name: 'DIN127/ГОСТ-6402',
      val: 'DIN127/ГОСТ-6402',
      coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:'5.8'
          }
      ],
      diamerts:  [
      { 
          diamert:'4',
          leng:'',
          weight1:'0.00018',

      },
      {
          diamert:'5',
          leng:'',
          weight1:'0.00036',
      },
      {
          diamert:'6',
          leng:'',
          weight1:'0.00083',
      },
      {
          diamert:'8',
          leng:'',
          weight1:'0.0016',
      },
      {
          diamert:'10',
          leng:'',
          weight1:'0.00253',
      },
      {
          diamert:'12',
          leng:'',
          weight1:'0.00382',
      },
      {
          diamert:'14',
          leng:'',
          weight1:'0.00601',
      },
      {
          diamert:'16',
          leng:'',
          weight1:'0.00891',
      },
      {
          diamert:'18',
          leng:'',
          weight1:'0.00973',
      },
      {
          diamert:'20',
          leng:'',
          weight1:'0.0152',
      },
      {
          diamert:'22',
          leng:'',
          weight1:'0.0165',
      },
      {
          diamert:'24',
          leng:'',
          weight1:'0.0262',
      },
      {
          diamert:'27',
          leng:'',
          weight1:'0.0287',
      },
      {
          diamert:'30',
          leng:'',
          weight1:'0.0443',
      },
      {
          diamert:'36',
          leng:'',
          weight1:'0.0673',
      },
    ]
},
{   
    name: 'DIN9021/ГОСТ-6958-78',
    val: 'DIN9021/ГОСТ-6958-78',
    coating:  [
        { 
         typecoating:'Оцинкованный',
          klass:'5.8'
        }
    ],
    diamerts:  [
    { 
        diamert:'4',
        leng:'',
        weight1:'0.00077',

    },
    {
        diamert:'5',
        leng:'',
        weight1:'0.00194',
    },
    {
        diamert:'6',
        leng:'',
        weight1:'0.00279',
    },
    {
        diamert:'8',
        leng:'',
        weight1:'0.00684',
    },
    {
        diamert:'10',
        leng:'',
        weight1:'0.0122',
    },
    {
        diamert:'12',
        leng:'',
        weight1:'0.0265',
    },
    {
        diamert:'14',
        leng:'',
        weight1:'0.0333',
    },
    {
        diamert:'16',
        leng:'',
        weight1:'0.0409',
    },
    {
        diamert:'18',
        leng:'',
        weight1:'0.0674',
    },
    {
        diamert:'20',
        leng:'',
        weight1:'0.068',
    },
    {
        diamert:'22',
        leng:'',
        weight1:'0.08',
    },
    {
        diamert:'24',
        leng:'',
        weight1:'0.138',
    },
    {
        diamert:'27',
        leng:'',
        weight1:'0.2',
    },
    {
        diamert:'30',
        leng:'',
        weight1:'0.23',
    },
    {
        diamert:'36',
        leng:'',
        weight1:'0.446',
    },
  ]
}
]


//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Шпилька" длинна 1000 мм========//

var shpilkalong = [
    {
      name:1000,
      value:1000  
    },
    {
      name:2000,
      value:2000  
   }
]    


//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Шпилька" длинна 1000 мм========//

var shpilkastandart1000 = [
    {
      name: 'DIN 975',
      val: 'DIN 975',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:'8.8'
          }
      ],
      diamerts:  [
      { 
          diamert:'5',
          leng:'',
          weight1:'0.12',

      },
      {
          diamert:'6',
          leng:'',
          weight1:'0.173',
      },
      {
          diamert:'8',
          leng:'',
          weight1:'0.313',
      },
      {
          diamert:'10',
          leng:'',
          weight1:'0.495',
      },
      {
          diamert:'12',
          leng:'',
          weight1:'0.718',
      },
      {
          diamert:'14',
          leng:'',
          weight1:'0.98',
      },
      {
          diamert:'16',
          leng:'',
          weight1:'1.315',
      },
      {
          diamert:'18',
          leng:'',
          weight1:'1.635',
      },
      {
          diamert:'20',
          leng:'',
          weight1:'2.04',
      },
     {
          diamert:'22',
          leng:'',
          weight1:'2.535',
      },
      {
          diamert:'24',
          leng:'',
          weight1:'3.056',
      },
      {
          diamert:'27',
          leng:'',
          weight1:'4.052',
      },
      {
          diamert:'30',
          leng:'',
          weight1:'4.71',
      },
      {
          diamert:'36',
          leng:'',
          weight1:'8.696',
      },
     
   ]  
  
  }
]

//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Шпилька" длинна 2000 мм========//

var shpilkastandart2000 = [
    {
      name: 'DIN 975',
      val: 'DIN 975',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:'8.8'
          }
      ],
      diamerts:  [
     
      {
          diamert:'6',
          leng:'',
          weight1:'0.346',
      },
      {
          diamert:'8',
          leng:'',
          weight1:'0.626',
      },
      {
          diamert:'10',
          leng:'',
          weight1:'0.99',
      },
      {
          diamert:'12',
          leng:'',
          weight1:'1.436',
      },
      {
          diamert:'14',
          leng:'',
          weight1:'1.96',
      },
      {
          diamert:'16',
          leng:'',
          weight1:'2.63',
      },
      {
          diamert:'20',
          leng:'',
          weight1:'4.08',
      },
     {
          diamert:'22',
          leng:'',
          weight1:'5.07',
      },
      {
          diamert:'24',
          leng:'',
          weight1:'6.112',
      },
      {
          diamert:'30',
          leng:'',
          weight1:'9.42',
      },
  ]  
 }
 
]

//======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Болт" ========//

var boltstandart = [
    {
      name: '7805-70/7798-70',
      val: '7805-70/7798-70',
         coating:  [
          { 
           typecoating:'Без покрытия',
            klass:'5.8'
          },
         ],
        },  
        
      {
      name: 'DIN 933/931',
      val: 'DIN 933/931',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:'8.8'
          },
         ]
      },
      {
        name: 'DIN 603',
        val: 'DIN 603',
           coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:'5.8'
            },
           ]
        },
        {
            name: 'ГОСТ 24379',
            val: 'ГОСТ 24379',
               coating:  [
                { 
                 typecoating:'',
                  klass:''
                },
               ]
            }, 
      ]


//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Болт" длинна 7805-70/7798-70========//

var boltlong7805 = [
    {
      name:10,
      value:10  
    },
    {
      name:12,
      value:12  
   },
   {
    name:14,
    value:14  
 }, {
    name:16,
    value:16  
 },
 {
    name:18,
    value:18  
 },
 {
    name:20,
    value:20  
 },
 {
    name:22,
    value:22  
 },
 {
    name:24,
    value:24  
 },
 {
    name:27,
    value:27  
 },
 {
    name:30,
    value:30  
 },
 {
    name:36,
    value:36  
 },

]  



//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 10 мм========//

var boltdiametr_7805_10 = [
    {
      name:25,
      value:0.02782  
    },
    {
      name:30,
      value:0.03066  
   },
   {
    name:35,
    value:0.03388  
    },
    {
        name:40,
        value:0.03696  
    },
    {
        name:45,
        value:0.04005  
    },
    {
        name:50,
        value:0.04313  
    },
    {
        name:55,
        value:0.04622  
    },
    {
        name:60,
        value:0.0493  
    },
    {
        name:70,
        value:0.05547  
    },
    {
        name:75,
        value:0.05856  
    },
    {
        name:80,
        value:0.06164  
    },
    {
        name:90,
        value:0.06781  
    },
]   

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 12 мм========//

var boltdiametr_7805_12 = [
   
    {
      name:30,
      value:0.04405  
   },
   {
    name:35,
    value:0.04843  
    },
    {
        name:40,
        value:0.05287  
    },
    {
        name:45,
        value:0.05731  
    },
    {
        name:50,
        value:0.06176  
    },
    {
        name:55,
        value:0.0662  
    },
    {
        name:60,
        value:0.0493  
    },
    {
        name:70,
        value:0.07953  
    },
    {
        name:75,
        value:0.08397  
    },
    {
        name:80,
        value:0.08842  
    },
    {
        name:90,
        value:0.09729  
    },
]    

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 14 мм========//

var boltdiametr_7805_14 = [
   
    {
      name:40,
      value:0.07445  
   },
   {
        name:50,
        value:0.08655  
    },
   {
        name:60,
        value:0.09864  
    },
    {
        name:70,
        value:0.1107  
    },
   
    {
        name:80,
        value:0.1228  
    },
    {
        name:90,
        value:0.1349  
    },
    {
        name:100,
        value:0.147  
    },
]    

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 16 мм========//

var boltdiametr_7805_16 = [
   
    {
      name:40,
      value:0.09799  
   },
   {
    name:45,
    value:0.1057  
 },
   {
        name:50,
        value:0.1136  
    },
    {
        name:55,
        value:0.1215  
    },
   {
        name:60,
        value:0.1294  
    },
    {
        name:65,
        value:0.1373  
    },
    {
        name:70,
        value:0.1452  
    },
    {
        name:75,
        value:0.1531  
    },
   
    {
        name:80,
        value:0.161  
    },
    {
        name:85,
        value:0.1689  
    },
    {
        name:90,
        value:0.1768  
    },
    {
        name:100,
        value:0.1926  
    },
    {
        name:110,
        value:0.2084  
    },
    {
        name:120,
        value:0.2242  
    },
    {
        name:130,
        value:0.24  
    },
    {
        name:140,
        value:0.2558  
    },
    {
        name:150,
        value:0.2716  
    },
    {
        name:160,
        value:0.2874  
    },
]    

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 18 мм========//

var boltdiametr_7805_18 = [
   {
        name:60,
        value:0.1724  
    },
    {
        name:70,
        value:0.1924  
    },
    {
        name:80,
        value:0.2124  
    },
    {
        name:90,
        value:0.2324  
    },
    {
        name:100,
        value:0.2524  
    },
    {
        name:110,
        value:0.2723  
    },
    {
        name:120,
        value:0.2923  
    },
   
]    

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 20 мм========//

var boltdiametr_7805_20 = [
    {
         name:50,
         value:0.194  
     },
     {
        name:55,
        value:0.2068  
    },
    {
        name:60,
        value:0.2191  
    },
    {
        name:65,
        value:0.2315  
    },
     {
         name:70,
         value:0.2438  
     },
     {
        name:75,
        value:0.2561  
    },
     {
         name:80,
         value:0.2681  
     },
     {
        name:85,
        value:0.2808  
    },
     {
         name:90,
         value:0.2932  
     },
     {
         name:100,
         value:0.3178  
     },
     {
         name:110,
         value:0.3425  
     },
     {
         name:120,
         value:0.3672 
     },
     {
        name:130,
        value:0.3919 
    },
    {
        name:140,
        value:0.4166 
    },
    {
        name:150,
        value:0.4412 
    },
    {
        name:160,
        value:0.4659 
    },
    {
        name:170,
        value:0.4906 
    },
    {
        name:180,
        value:0.5153 
    },
    {
        name:200,
        value:0.5646 
    },
    {
        name:220,
        value:0.614 
    },
    
 ]    

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 22 мм========//

var boltdiametr_7805_22 = [
    
    {
        name:60,
        value:0.2665  
    },
    {
         name:70,
         value:0.2964  
     },
     {
         name:80,
         value:0.3262  
     },
     {
         name:90,
         value:0.3561  
     },
     {
         name:100,
         value:0.3859 
     },
     
     {
         name:120,
         value:0.4457 
     },
    
    {
        name:160,
        value:0.5651 
    },
    {
        name:170,
        value:0.595 
    },
    {
        name:190,
        value:0.6547 
    },
    {
        name:200,
        value:0.5646 
    },
       
 ]   
 
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"7805-70/7798-70  длинна 24 мм========//

var boltdiametr_7805_24 = [
    
    {
        name:60,
        value:0.3299  
    },
    {
         name:70,
         value:0.3665  
     },
     {
         name:80,
         value:0.4021  
     },
     {
         name:90,
         value:0.4376  
     },
     {
         name:100,
         value:0.4732
     },
     {
        name:110,
        value:0.5087
    },
     
     {
         name:120,
         value:0.5442 
     },
     {
        name:130,
        value:0.5798 
    },
    {
        name:140,
        value:0.6153 
    },
    {
        name:150,
        value:0.6508 
    },
    
    {
        name:160,
        value:0.6864 
    },
    {
        name:170,
        value:0.7219 
    },
    {
        name:180,
        value:0.7575 
    },
    {
        name:190,
        value:0.793 
    },
    {
        name:200,
        value:0.8286 
    },
       
 ]    

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 27 мм========//

var boltdiametr_7805_27 = [
    
    
     {
         name:80,
         value:0.5361  
     },
     {
         name:90,
         value:0.581 
     },
     {
         name:100,
         value:0.626
     },
     {
        name:110,
        value:0.671
    },
     
     {
         name:120,
         value:0.716 
     },
     {
        name:130,
        value:0.761 
    },
    {
        name:140,
        value:0.806 
    },
    {
        name:150,
        value:0.8501 
    },
    
    {
        name:160,
        value:0.8959 
    },
    {
        name:170,
        value:0.9409 
    },
    {
        name:180,
        value:0.9859
    },
    {
        name:190,
        value:1.031
    },
    {
        name:200,
        value:1.076
    },
       
 ]    

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70 длинна 30 мм========//

var boltdiametr_7805_30 = [
    
    
    {
        name:80,
        value:0.6918  
    },
   
    {
        name:100,
        value:0.8028
    },
    {
       name:110,
       value:0.8584
   },
    
    {
        name:120,
        value:0.9139 
    },
    {
       name:130,
       value:0.9695 
   },
   {
       name:140,
       value:1.025
   },
   {
       name:150,
       value:1.08 
   },
   
   {
       name:160,
       value:1.136
   },
   {
       name:170,
       value:1.192 
   },
   {
       name:180,
       value:1.247
   },
   
   {
       name:200,
       value:1.358
   },
        
]    

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт" 7805-70/7798-70  длинна 36 мм========//

var boltdiametr_7805_36 = [
    {
        name:100,
        value:1.231
    },
    {
       name:110,
       value:1.311
   },
    
    {
        name:120,
        value:1.391
    },
    {
       name:130,
       value:1.471
   },
   {
       name:140,
       value:1.551
   },
   {
       name:150,
       value:1.631
   },
   
   {
       name:160,
       value:1.711
   },
   {
       name:170,
       value:1.79 
   },
   {
       name:180,
       value:1.87
   },
   {
    name:190,
    value:1.95
   },   
   {
       name:200,
       value:2.03
   },
   {
    name:220,
    value:2.19
   }, 
   {
    name:260,
    value:2.51
},

        
]    

//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Болт" длинна DIN 933/931========//

var boltlong933 = [
    {
      name:5,
      value:5  
    },
    {
      name:6,
      value:6  
   },
   {
    name:8,
    value:8  
 }, {
    name:10,
    value:10  
 },
 {
    name:12,
    value:12  
 },
 {
    name:14,
    value:14  
 },
 {
    name:16,
    value:16  
 },
 {
    name:18,
    value:18  
 },
 {
    name:20,
    value:20  
 },
 {
    name:24,
    value:24  
 },
 

]  

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 5 мм========//

var boltdiametr_933_5 = [
    {
        name:16,
        value:0.00337
    },
    {
       name:20,
       value:0.00387
   },
    
    {
        name:25,
        value:0.00449
    },
    {
       name:30,
       value:0.00511
   },
   {
       name:35,
       value:0.00573
   },
   {
       name:40,
       value:0.00635
   },
   
   {
       name:50,
       value:0.00759
   },
   {
       name:60,
       value:0.00883 
   },
       
]  

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 6 мм========//

var boltdiametr_933_6 = [
    {
        name:16,
        value:0.00511
    },
    {
       name:20,
       value:0.0058
   },
    
    {
        name:25,
        value:0.00665
    },
    {
       name:30,
       value:0.00751
   },
   {
       name:35,
       value:0.00837
   },
   {
       name:40,
       value:0.00923
   },
   {
    name:45,
    value:0.0101
   },
   {
       name:50,
       value:0.011
   },
   {
    name:55,
    value:0.0119
   },
   {
       name:60,
       value:0.0127
   },
   {
    name:65,
    value:0.0136
   },
   {
    name:70,
    value:0.0144
   },
   {
    name:80,
    value:0.0162
   },
   {
    name:90,
    value:0.02231
   },
       
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 8 мм========//

var boltdiametr_933_8 = [
    {
        name:16,
        value:0.0118
    },
    {
       name:20,
       value:0.01325
   },
    
    {
        name:25,
        value:0.0139
    },
    {
       name:30,
       value:0.0155
   },
   {
       name:35,
       value:0.0171
   },
   {
       name:40,
       value:0.0187
   },
   {
    name:45,
    value:0.0203
   },
   {
       name:50,
       value:0.0218
   },
   {
    name:55,
    value:0.0234
   },
   {
       name:60,
       value:0.025
   },
   {
    name:65,
    value:0.0266
   },
   {
    name:70,
    value:0.0282
   },
   {
    name:75,
    value:0.0298
   },
   {
    name:80,
    value:0.0314
   },
   {
    name:90,
    value:0.0346
   },
   {
    name:100,
    value:0.0377
   },
   {
    name:110,
    value:0.0409
   },
       
] 
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 10 мм========//

var boltdiametr_933_10 = [
    
    {
       name:20,
       value:0.0212
   },
    
    {
        name:25,
        value:0.0237
    },
    {
       name:30,
       value:0.0262
   },
   {
       name:35,
       value:0.0287
   },
   {
       name:40,
       value:0.0312
   },
   {
    name:45,
    value:0.0337
   },
   {
       name:50,
       value:0.0362
   },
   {
    name:55,
    value:0.0387
   },
   {
       name:60,
       value:0.0413
   },
   {
    name:65,
    value:0.0438
   },
   {
    name:70,
    value:0.0282
   },
   
   {
    name:80,
    value:0.0513
   },
   {
    name:90,
    value:0.0563
   },
   {
    name:100,
    value:0.0613
   },
   {
    name:110,
    value:0.0664
   },
   {
    name:120,
    value:0.0714
   },
   {
    name:130,
    value:0.0764
   },
   {
    name:140,
    value:0.0814
   },
   {
    name:150,
    value:0.1048
   },
   {
    name:160,
    value:0.111
   },
   {
    name:180,
    value:0.1233
   },
   {
    name:200,
    value:0.1357
   },
       
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 12 мм========//

var boltdiametr_933_12 = [
    
    {
       name:20,
       value:0.031
   },
    
    {
        name:25,
        value:0.0341
    },
    {
       name:30,
       value:0.0377
   },
   {
       name:35,
       value:0.0413
   },
   {
       name:40,
       value:0.0449
   },
   {
    name:45,
    value:0.0485
   },
   {
       name:50,
       value:0.052
   },
   {
    name:55,
    value:0.0556
   },
   {
       name:60,
       value:0.0582
   },
   {
    name:65,
    value:0.0628
   },
   {
    name:70,
    value:0.0664
   },
   
   {
    name:80,
    value:0.0736
   },
   {
    name:90,
    value:0.0808
   },
   {
    name:100,
    value:0.088
   },
   {
    name:110,
    value:0.0952
   },
   {
    name:120,
    value:0.102
   },
   {
    name:130,
    value:0.109
   },
   {
    name:140,
    value:0.116
   },
   {
    name:150,
    value:0.123
   },
   {
    name:160,
    value:0.1595
   },
   {
    name:180,
    value:0.1773
   },
   {
    name:200,
    value:0.195
   },
       
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 14 мм========//

var boltdiametr_933_14 = [
   {
       name:30,
       value:0.0579
   },
   {
       name:40,
       value:0.0679
   },
   {
       name:50,
       value:0.0779
   },
   {
       name:60,
       value:0.0878
   },
   {
    name:70,
    value:0.0979
   },
   
   {
    name:80,
    value:0.107
   },
   {
    name:90,
    value:0.117
   },
   {
    name:100,
    value:0.127
   },
   {
    name:110,
    value:0.137
   },
   {
    name:120,
    value:0.147
   },
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 16 мм========//

var boltdiametr_933_16 = [
    {
        name:30,
        value:0.0579
    },
    {
        name:35,
        value:0.0835
    },
    {
        name:40,
        value:0.0902
    },
    {
        name:45,
        value:0.0971
    },
    {
        name:50,
        value:0.103
    },
    {
        name:55,
        value:0.11
    },
    {
        name:60,
        value:0.117
    },
    {
        name:65,
        value:0.123
    },
    {
     name:70,
     value:0.13
    },
    
    {
     name:80,
     value:0.144
    },
    {
     name:90,
     value:0.157
    },
    {
     name:100,
     value:0.17
    },
    {
     name:110,
     value:0.184
    },
    {
     name:120,
     value:0.197
    },
    {
        name:130,
        value:0.21
    },
    {
        name:140,
        value:0.224
     },  
     {
        name:150,
        value:0.237
     },  
     {
        name:160,
        value:0.2874
     }, 
     {
        name:180,
        value:0.319
     }, 
     {
        name:200,
        value:0.3506
     },       
 ] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 18 мм========//

var boltdiametr_933_18 = [
   
    {
        name:40,
        value:0.12
    },
    
    {
        name:50,
        value:0.136
    },
    {
        name:55,
        value:0.145
    },
    {
        name:60,
        value:0.153
    },
    
    {
     name:70,
     value:0.169
    },
    
    {
     name:80,
     value:0.186
    },
    {
     name:90,
     value:0.202
    },
    {
     name:100,
     value:0.218
    },
   
    {
     name:120,
     value:0.251
    },
]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 933/931 длинна 24 мм========//

var boltdiametr_933_24 = [
   
   
    {
        name:60,
        value:0.304
    },
    {
     name:70,
     value:0.334
    },
    {
     name:80,
     value:0.363
    },
    {
     name:90,
     value:0.393
    },
    {
     name:100,
     value:0.423
    },
    {
     name:120,
     value:0.483
    },
    {
        name:140,
        value:0.543
    },
    {
        name:160,
        value:0.602
    },
    {
        name:180,
        value:0.662
    },
    {
        name:200,
        value:0.722
    },
    {
        name:220,
        value:0.8996
    },
 ] 
 
 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Болт" длинна DIN 603========//

var boltlong603 = [
    {
      name:6,
      value:6  
    },
    {
      name:8,
      value:8  
   },
   {
    name:10,
    value:10  
   },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 603 длинна 6 мм========//

var boltdiametr_603_6 = [
   
   
    {
        name:16,
        value:0.0069
    },
    {
     name:20,
     value:0.0076
    },
    {
     name:25,
     value:0.0085
    },
    {
     name:30,
     value:0.0096
    },
    {
     name:35,
     value:0.0107
    },
    {
     name:40,
     value:0.0118
    },
    {
        name:50,
        value:0.014
    },
    {
        name:60,
        value:0.0162
    },
    {
        name:70,
        value:0.0184
    },
    {
        name:80,
        value:0.0206
    },
    {
        name:90,
        value:0.0228
    },
 ] 
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  DIN 603 длинна 8 мм========//

var boltdiametr_603_8 = [
   
 
    {
     name:20,
     value:0.0138
    },
    
    {
     name:30,
     value:0.017
    },
   
    {
     name:40,
     value:0.021
    },
    {
        name:50,
        value:0.025
    },
    {
        name:60,
        value:0.0289
    },
    {
        name:70,
        value:0.0329
    },
    {
        name:80,
        value:0.0368
    },
    {
        name:90,
        value:0.0408
    },
    {
        name:100,
        value:0.0448
    },
    {
        name:120,
        value:0.0528
    },
    {
        name:140,
        value:0.0608
    },
 ] 
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"   DIN 603 длинна 10 мм========//

var boltdiametr_603_10 = [
   {
     name:40,
     value:0.0327
    },
    {
        name:50,
        value:0.0389
    },
    {
        name:60,
        value:0.0451
    },
    {
        name:70,
        value:0.0513
    },
    {
        name:80,
        value:0.0575
    },
    {
        name:90,
        value:0.0637
    },
    {
        name:100,
        value:0.0699
    },
    {
        name:120,
        value:0.0823
    },
    
 ] 
 
 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Болт" длинна ГОСТ 24379========//

var boltlong24379 = [
    {
      name:16,
      value:16  
    },
    {
      name:20,
      value:20  
   },
   {
    name:24,
    value:24  
 }, {
    name:30,
    value:30  
 },
 {
    name:36,
    value:36  
 },
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  ГОСТ 24379 длинна 16 мм========//

var boltdiametr_24379_16 = [
    {
      name:400,
      value:0.75
     },
     {
         name:500,
         value:0.9
     },
     {
         name:600,
         value:1.1
     },
     {
         name:710,
         value:1.3
     },
     {
         name:800,
         value:1.4
     },
     {
         name:900,
         value:1.6
     },
     {
         name:1000,
         value:1.6
     },
     {
         name:1200,
         value:1.7
     },
     
  ] 

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  ГОСТ 24379 длинна 20 мм========//

var boltdiametr_24379_20 = [
    {
      name:400,
      value:1.1
     },
     {
         name:500,
         value:1.3
     },
     {
         name:600,
         value:1.5
     },
     {
         name:710,
         value:1.8
     },
     {
         name:800,
         value:2.1
     },
     {
         name:900,
         value:2.3
     },
     {
         name:1000,
         value:2.5
     },
     {
         name:1100,
         value:2.8
     },
     {
        name:1200,
        value:3.1
    },
     
  ] 
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  ГОСТ 24379 длинна 24 мм========//

var boltdiametr_24379_24 = [
    {
      name:500,
      value:2.2
     },
     
     {
         name:600,
         value:2.6
     },
     {
         name:710,
         value:3
     },
     {
         name:800,
         value:3.4
     },
     {
         name:900,
         value:3.8
     },
     {
         name:1000,
         value:4.2
     },
     {
         name:1100,
         value:4.6
     },
     {
        name:1200,
        value:4.9
    },
    {
        name:1300,
        value:5.3
    },
     
  ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  ГОСТ 24379 длинна 30 мм========//

var boltdiametr_24379_30 = [
    
     {
         name:600,
         value:3.9
     },
     {
         name:710,
         value:4.4
     },
     {
         name:800,
         value:4.9
     },
     {
         name:900,
         value:5.5
     },
     {
         name:1000,
         value:6.1
     },
     {
         name:1100,
         value:6.6
     },
     {
        name:1200,
        value:7.2
    },
    {
        name:1300,
        value:7.7
    },
    {
        name:1400,
        value:8.3
    },
     
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "Болт"  ГОСТ 24379 длинна 36 мм========//

var boltdiametr_24379_36 = [
    
   
    {
        name:710,
        value:6.5
    },
    {
        name:800,
        value:7.3
    },
    {
        name:900,
        value:8
    },
    {
        name:1000,
        value:8.9
    },
   
    {
       name:1200,
       value:10.5
   },
  
   {
       name:1400,
       value:12
   },
   {
       name:1500,
       value:13
   },
   {
      name:1600,
      value:13.7
   },
   
 ] 


 //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "ВИНТЫ" ========//

var wintstandart = [
    {
      name: 'DIN 912',
      val: 'DIN 912',
         coating:  [
          { 
           typecoating:'Без покрытия',
            klass:''
          },
         ],
        },  
        
      {
      name: 'DIN 7985',
      val: 'DIN 7985',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:''
          },
         ]
      },
      {
        name: 'DIN 965',
        val: 'DIN 965',
           coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:''
            },
           ]
        },
        {
            name: 'Винт конфирмат',
            val: 'Винт конфирмат',
               coating:  [
                { 
                 typecoating:'Оцинкованный',
                  klass:''
                },
               ]
            }, 
      ]
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ВИНТЫ"  DIN 912========//

var wintlong912 = [
    {
      name:5,
      value:5  
    },
    {
      name:6,
      value:6  
   },
   {
    name:8,
    value:8  
 }, {
    name:10,
    value:10  
 },
 {
    name:12,
    value:12  
 },
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 912  длинна 5 мм========//

var wintdiametr_912_5 = [
    {
      name:20,
      value:0.00401
     },
     {
         name:25,
         value:0.005
     },
     {
         name:40,
         value:0.0057
     },
  ] 

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 912  длинна 6 мм========//

var wintdiametr_912_6 = [
    {
      name:20,
      value:0.00653
     },
     {
         name:25,
         value:0.00759
     },
     {
        name:30,
        value:0.0083
    },
    {
        name:35,
        value:0.00991
    },
     {
         name:40,
         value:0.011
     },
     {
        name:50,
        value:0.0132
    },
    {
        name:60,
        value:0.0154
    },
    {
        name:70,
        value:0.0176
    },
    {
        name:80,
        value:0.0198
    },
    {
        name:100,
        value:0.0242
    },     
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 912  длинна 8 мм========//

var wintdiametr_912_8 = [
    {
      name:20,
      value:0.0134
     },
    
     {
        name:30,
        value:0.0169
    },
    {
        name:35,
        value:0.0189
    },
     {
         name:40,
         value:0.0209
     },
     {
        name:45,
        value:0.02291
    },
     {
        name:50,
        value:0.02491
    },
    {
        name:60,
        value:0.0289
    },
    {
        name:70,
        value:0.0295
    },
    {
        name:80,
        value:0.031
    },
    {
        name:100,
        value:0.035
    },     
  ] 

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 912  длинна 10 мм========//

var wintdiametr_912_10 = [
    {
      name:20,
      value:0.0229
     },
     {
        name:25,
        value:0.0254
       },

     {
        name:30,
        value:0.0279
    },
    {
        name:35,
        value:0.0304
    },
     {
         name:40,
         value:0.03291
     },
     {
        name:45,
        value:0.02291
    },
     {
        name:50,
        value:0.03931
    },
    {
        name:60,
        value:0.04571
    },
    {
        name:70,
        value:0.05211
    },
    {
        name:80,
        value:0.0585
    },
    {
        name:100,
        value:0.0712
    },     
  ] 
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 912  длинна 12 мм========//

var wintdiametr_912_12 = [
   
   
     {
         name:40,
         value:0.0465
     },
    
     {
        name:50,
        value:0.0545
    },
    {
        name:80,
        value:0.062
    },
    {
        name:100,
        value:0.072
    },     
  ] 
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ВИНТЫ"  DIN 7985========//

var wintlong7985 = [
    {
        name:4,
        value:4  
      },
    {
      name:5,
      value:5  
    },
    {
      name:6,
      value:6  
   },
   {
    name:8,
    value:8  
    },
 
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 7985  длинна 4 мм========//

var wintdiametr_7985_4 = [
    {
      name:10,
      value:0.00162
     },
     {
        name:12,
        value:0.00178
    },
    {
        name:16,
        value:0.00207
    },
    {
        name:20,
        value:0.00237
    },
     {
         name:25,
         value:0.00274
     },
     {
        name:30,
        value:0.00312
    },
     {
         name:40,
         value:0.00386
     },
     {
        name:50,
        value:0.00461
    },
    {
        name:60,
        value:0.00461
    },
    {
        name:70,
        value:0.0052
    },
  ] 

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 7985  длинна 5 мм========//

var wintdiametr_7985_5 = [
    {
      name:10,
      value:0.00295
     },
     {
        name:12,
        value:0.00319
    },
    {
        name:14,
        value:0.00334
    },
    {
        name:16,
        value:0.00367
    },
    {
        name:20,
        value:0.00415
    },
     {
         name:25,
         value:0.0475
     },
     {
        name:30,
        value:0.00535
    },
     {
         name:40,
         value:0.00652
     },
     {
        name:50,
        value:0.00775
    },
    {
        name:60,
        value:0.00895
    },
    {
        name:70,
        value:0.01027
    },
    {
        name:80,
        value:0.01154
    },
    {
        name:90,
        value:0.01205
    },
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 7985  длинна 6 мм========//

var wintdiametr_7985_6 = [
    {
      name:10,
      value:0.0046
     },
     {
        name:12,
        value:0.00494
    },
   
    {
        name:16,
        value:0.00562
    },
    {
        name:20,
        value:0.0063
    },
     {
         name:25,
         value:0.00715
     },
     {
        name:30,
        value:0.008
    },
    {
        name:35,
        value:0.00885
    },
     {
         name:40,
         value:0.0097
     },
     {
        name:50,
        value:0.0114
    },
    {
        name:60,
        value:0.0131
    },
    {
        name:70,
        value:0.0148
    },
    {
        name:80,
        value:0.017
    },
   
  ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 7985  длинна 8 мм========//

var wintdiametr_7985_8 = [
   
     {
        name:12,
        value:0.01076
    },
   
    {
        name:16,
        value:0.01185
    },
    {
        name:20,
        value:0.01315
    },
     {
         name:25,
         value:0.01436
     },
     {
        name:30,
        value:0.01696
    },
    {
        name:35,
        value:0.01698
    },
     {
         name:40,
         value:0.02222
     },
     {
        name:50,
        value:0.02322
    },
    {
        name:60,
        value:0.02488
    },
    {
        name:70,
        value:0.02587
    },
    {
        name:80,
        value:0.02658
    },
   
  ] 

  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ВИНТЫ"  DIN 965========//

var wintlong965 = [
    {
        name:3,
        value:3  
      },
    {
        name:4,
        value:4  
      },
    {
      name:5,
      value:5  
    },
    {
      name:6,
      value:6  
   },
   {
      name:8,
      value:8  
    },
    {
      name:10,
      value:10  
    },
 
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 3 мм========//

var wintdiametr_965_3 = [
    {
      name:6,
      value:0.00045
     },
     {
        name:8,
        value:0.00076
       },
       {
        name:10,
        value:0.00145
    },
     {
        name:12,
        value:0.00076
    },
    {
        name:16,
        value:0.00082
    },
    {
        name:20,
        value:0.00145
    },
     {
         name:25,
         value:0.00158
     },
     {
        name:35,
        value:0.00162
    },
     {
         name:45,
         value:0.00175
     },
     {
        name:50,
        value:0.00185
    },
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 4 мм========//

var wintdiametr_965_4 = [
    {
      name:6,
      value:0.00075
     },
     {
        name:8,
        value:0.00085
       },
       {
        name:10,
        value:0.00099
    },
     {
        name:12,
        value:0.00115
    },
    {
        name:16,
        value:0.00144
    },
    {
        name:20,
        value:0.00174
    },
     {
         name:25,
         value:0.00211
     },
     {
        name:30,
        value:0.00249
    },
     {
        name:35,
        value:0.00286
    },
    {
        name:40,
        value:0.00323
    },
     {
         name:45,
         value:0.00375
     },
     {
        name:50,
        value:0.00398
    },
    {
        name:55,
        value:0.00435
    },
    {
        name:65,
        value:0.00498
    },
    {
        name:70,
        value:0.00547
    },
    {
        name:75,
        value:0.00658
    },
    {
        name:80,
        value:0.00678
    },
] 
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 5 мм========//

var wintdiametr_965_5 = [
  
     {
        name:8,
        value:0.00158
       },
       {
        name:10,
        value:0.00163
    },
     {
        name:14,
        value:0.00163
    },
    {
        name:16,
        value:0.00235
    },
    {
        name:20,
        value:0.00283
    },
     {
         name:25,
         value:0.00343
     },
     {
        name:30,
        value:0.00403
    },
     {
        name:35,
        value:0.00463
    },
    {
        name:40,
        value:0.0052
    },
     {
         name:45,
         value:0.0052
     },
     {
        name:50,
        value:0.00643
    },
    {
        name:55,
        value:0.00643
    },
    {
        name:60,
        value:0.00763
    },
    {
        name:65,
        value:0.0085
    },
    {
        name:70,
        value:0.00881
    },
    {
        name:75,
        value:0.0089
    },
    {
        name:90,
        value:0.0092
    },
    {
        name:95,
        value:0.00985
    },
    {
        name:100,
        value:0.01
    },
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 6 мм========//

var wintdiametr_965_6 = [
  
    {
       name:8,
       value:0.0038
      },
      {
       name:10,
       value:0.0024
   },
   
   {
       name:16,
       value:0.00342
   },
   {
       name:20,
       value:0.0041
   },
    {
        name:25,
        value:0.00498
    },
    {
       name:30,
       value:0.0058
   },
    {
       name:35,
       value:0.00665
   },
   
    {
       name:50,
       value:0.0092
   },
   {
       name:55,
       value:0.0097
   },
   {
       name:60,
       value:0.0109
   },
   {
       name:65,
       value:0.0115
   },
   {
       name:70,
       value:0.0126
   },
   {
       name:75,
       value:0.0138
   },
   {
       name:80,
       value:0.0143
    },
    {
        name:85,
        value:0.0152
    },
   {
       name:90,
       value:0.016
   },
   {
       name:95,
       value:0.0169
   },
   {
       name:100,
       value:0.0178
   },
] 
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 8 мм========//

var wintdiametr_965_8 = [
       
   {
       name:16,
       value:0.00658
   },
   {
       name:20,
       value:0.0078
   },
    {
        name:25,
        value:0.00933
    },
    {
       name:30,
       value:0.01085
   },
    {
       name:35,
       value:0.01238
   },
   {
      name:40,
      value:0.01391
   },   
    {
       name:50,
       value:0.01696
   },
   
   {
       name:60,
       value:0.02001
   },
   
   {
       name:70,
       value:0.02307
   },
  
   {
       name:80,
       value:0.02612
    },
   
   {
       name:90,
       value:0.0292
   },
   
] 

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  DIN 965  длинна 10 мм========//

var wintdiametr_965_10 = [
       
    {
        name:30,
        value:0.01732
    },
    {
        name:40,
        value:0.0227
    },
    
  ]

   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ВИНТЫ"  Винт конфирмат========//

var wintlongKF = [
    {
        name:63,
        value:63  
      },
   
 
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ВИНТЫ"  Винт конфирмат  длинна 63 мм========//

var wintdiametr_KF_63 = [
    {
      name:50,
      value:0.00549
     },
     {
        name:70,
        value:0.021
    },
]



 //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "АНКЕРА" ========//

var ankerstandart = [
    {
      name: 'Анкерный болт с гайкой HNM',
      val: 'Анкерный болт с гайкой HNM',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:''
          },
         ],
        },  
        
      {
      name: 'Анкерный болт HBM',
      val: 'Анкерный болт HBM',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:''
          },
         ]
      },
      {
        name: 'Анкер кольцо HA',
        val: 'Анкер кольцо HA',
           coating:  [
            { 
             typecoating:'Оцинкованный',
              klass:''
            },
           ]
        },
        {
            name: 'Анкер крюк HG',
            val: 'Анкер крюк HG',
               coating:  [
                { 
                 typecoating:'Оцинкованный',
                  klass:''
              },
            ]
        },
         {
                name: 'Анкер MAN',
                val: 'Анкер MAN',
                   coating:  [
                    { 
                     typecoating:'Оцинкованный',
                      klass:''
                    },
            ]
            },   
                
            {
               name: 'Анкер  цанга DRМ',
               val: 'Анкер  цанга DRМ',
                 coating:  [
                  { 
                    typecoating:'Оцинкованный',
                    klass:''
                  },
                ]
            },       
            
      ]
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"========//

var ankerlongHNM = [
    
   {
    name:8,
    value:8  
 }, {
    name:10,
    value:10  
 },
 {
    name:12,
    value:12  
 },
 {
    name:14,
    value:14  
 },
 {
    name:16,
    value:16  
 },
 {
    name:20,
    value:20  
 },







]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 8 мм========//

var ankerdiametr_HNM_8 = [
    {
      name:40,
      value:0.0161
     },
     {
         name:65,
         value:0.02151
     },
     {
         name:85,
         value:0.0266
     },
  ] 

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 10 мм========//

var ankerdiametr_HNM_10 = [
    {
      name:40,
      value:0.0246
     },
     {
         name:50,
         value:0.02863
     },
     {
         name:60,
         value:0.03351
     },
     {
        name:77,
        value:0.03976
    },
    {
        name:97,
        value:0.049
    },
    {
        name:125,
        value:0.06
    },
    {
        name:150,
        value:0.0715
    },
    {
        name:180,
        value:0.0835
    },
    {
        name:200,
        value:0.09295
    },
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 12 мм========//

var ankerdiametr_HNM_12 = [
    
     {
         name:60,
         value:0.047
     },
     {
        name:75,
        value:0.05967
    },
    {
        name:99,
        value:0.07679
    },
    {
        name:129,
        value:0.0985
    },
    {
        name:150,
        value:0.111
    },
    {
        name:180,
        value:0.1345
    },
    {
        name:200,
        value:0.15
    },
    {
        name:220,
        value:0.16671
    },
    {
        name:250,
        value:0.186
    },
    {
        name:300,
        value:0.23067
    },
  ] 

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 14 мм========//

var ankerdiametr_HNM_14 = [
    
   
   {
       name:100,
       value:0.079
   },
   {
       name:150,
       value:0.122
   },
   {
       name:200,
       value:0.1508
   },
   
 ] 
 
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 16 мм========//

var ankerdiametr_HNM_16 = [
    
   
    {
        name:65,
        value:0.08357
    },
    {
        name:111,
        value:0.17033
    },
    {
        name:147,
        value:0.175
    },
    {
        name:180,
        value:0.207
    },
    {
        name:220,
        value:0.26
    },
    {
        name:250,
        value:0.2925
    },
    {
        name:300,
        value:0.356
    },
    {
        name:350,
        value:0.412
    },
    
  ] 
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "АНКЕРА" -"Анкерный болт с гайкой HNM"  длинна 20 мм========//

var ankerdiametr_HNM_20 = [
    
   
    {
        name:107,
        value:0.227
    },
    {
        name:151,
        value:0.335
    },
    
    {
        name:200,
        value:0.415
    },
    {
        name:250,
        value:0.511
    },
    {
        name:300,
        value:0.578
    },
   
    
  ] 

  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкерный болт HBM"========//

var ankerlongHBM = [
    
    {
     name:8,
     value:8  
  }, {
     name:10,
     value:10  
  },
  {
     name:12,
     value:12  
  },
 
  {
     name:16,
     value:16  
  },
 
 
 
 
 
 
 
 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкерный болт HBM"  длинна 8 мм========//
 
 var ankerdiametr_HBM_8 = [
     {
       name:45,
       value:0.0151
      },
      {
          name:60,
          value:0.02151
      },
      {
          name:80,
          value:0.02682
      },
      {
        name:90,
        value:0.0284
      },
      {
        name:100,
        value:0.032
      },
   ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкерный болт HBM"  длинна 10 мм========//
 
 var ankerdiametr_HBM_10 = [
    {
      name:50,
      value:0.03063
     },
     
     {
         name:80,
         value:0.0428
     },
     
     {
       name:100,
       value:0.052
     },
     {
        name:110,
        value:0.059
      },
      {
        name:120,
        value:0.06058
      },
      {
        name:130,
        value:0.06921
      },
      {
        name:140,
        value:0.074
      },
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкерный болт HBM"  длинна 12 мм========//
 
 var ankerdiametr_HBM_12 = [
    {
      name:65,
      value:0.06173
     },
     
     {
         name:80,
         value:0.06879
     },
     
     {
       name:100,
       value:0.086
     },
     {
        name:120,
        value:0.098
      },
      {
        name:140,
        value:0.11673
      },
      {
        name:160,
        value:0.124
      },
  ] 

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкерный болт HBM"  длинна 16 мм========//
 
 var ankerdiametr_HBM_16 = [
    
     {
       name:111,
       value:0.15
     },
     {
        name:150,
        value:0.2
      },
     
  ] 
 
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкер кольцо HA"========//

var ankerlongNA = [
    
    {
     name:8,
     value:8  
  }, {
     name:10,
     value:10  
  },
  {
     name:12,
     value:12  
  },
  {
     name:16,
     value:16  
  }, 
 ]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер кольцо HA"  длинна 8 мм========//
 
 var ankerdiametr_NA_8 = [
     {
       name:40,
       value:0.0228
      },
      {
          name:60,
          value:0.028
      },
     
   ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер кольцо HA"  длинна 10 мм========//
 
 var ankerdiametr_NA_10 = [
    {
      name:60,
      value:0.0494
     },
     {
         name:80,
         value:0.0562
     },
     {
        name:100,
        value:0.0686
    },
    {
        name:120,
        value:0.07
    },
    
  ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер кольцо HA"  длинна 12 мм========//
 
 var ankerdiametr_NA_12 = [
    {
      name:70,
      value:0.092
     },
    
     {
        name:100,
        value:0.1136
    },
    
  ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер кольцо HA"  длинна 16 мм========//
 
 var ankerdiametr_NA_16 = [
    {
      name:80,
      value:0.16756
     },
    
     {
        name:100,
        value:0.26756
    },
    
  ] 
  

  
  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкер крюк HG"========//

var ankerlongHG = [
    
    {
     name:8,
     value:8  
  }, {
     name:10,
     value:10  
  },
  {
     name:12,
     value:12  
  },
 
  {
     name:16,
     value:16  
  },
  {
    name:20,
    value:20  
 },
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер крюк HG"  длинна 8 мм========//
 
 var ankerdiametr_HG_8 = [
     {
       name:40,
       value:0.0215
      },
      {
          name:60,
          value:0.0266
      },     
   ] 

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер крюк HG"  длинна 10 мм========//
 
 var ankerdiametr_HG_10 = [
    {
      name:50,
      value:0.053
     },
     {
         name:60,
         value:0.0474
     }, 
     {
        name:80,
        value:0.0578
    },  
    {
        name:120,
        value:0.086
    },  
  ] 
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер крюк HG"  длинна 12 мм========//
 
 var ankerdiametr_HG_12 = [
    {
      name:70,
      value:0.09
     },
     {
         name:100,
         value:0.108
     }, 
     {
        name:130,
        value:0.1335
    },  
   
  ] 
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер крюк HG"  длинна 16 мм========//
 
 var ankerdiametr_HG_16 = [
    {
      name:80,
      value:0.15856
     },
     {
         name:110,
         value:0.25856
     }, 
     {
        name:130,
        value:0.35856
    },    
  ] 
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер крюк HG"  длинна 20 мм========//
 
 var ankerdiametr_HG_20 = [
    {
      name:75,
      value:0.15856
     },   
  ] 

   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкер MAN"========//

var ankerlongMAN = [
    
    {
     name:6,
     value:6  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер MAN"  длинна 6 мм========//
 
 var ankerdiametr_MAN_6 = [
     {
       name:37,
       value:0.0113
      },
      {
          name:65,
          value:0.0175
      },     
   ] 

    //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "АНКЕРА" -"Анкер  цанга DRМ"========//

var ankerlongDRМ = [
    
    {
     name:'',
     value:''  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "АНКЕРА" -"Анкер  цанга DRМ"========//
 
 var ankerdiametr_DRМ_1 = [
     {
       name:6,
       value:0.006
      },
      {
          name:8,
          value:0.012
      },   
      {
        name:10,
        value:0.022
    },    
    {
        name:12,
        value:0.054
    },  
    {
        name:16,
        value:0.108
    },  
    {
        name:20,
        value:0.209
    },  
   ] 


   //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "ДЮБЕЛЬ" ========//

var dubelstandart = [
    {
      name: 'DRIVA PA',
      val: 'DRIVA PA',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },  
        
      {
      name: 'RD',
      val: 'RD',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ]
      },
            
            
      ]
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ДЮБЕЛЬ" -" DRIVA PA"========//

var dubellongPA = [
    
   {
    name:32,
    value:32  
 }, 
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "ДЮБЕЛЬ" -" DRIVA PA"  длинна 32 мм========//

var dubeldiametr_PA_32 = [
    {
      name:14,
      value:0.005
     },     
  ] 


  //======== данные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ДЮБЕЛЬ" -" RD"========//

var dubellongRD = [
    
    {
     name:8,
     value:8  
  }, 
  {
    name:10,
    value:10  
 }, 
 {
    name:14,
    value:14  
 }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ДЮБЕЛЬ" -" DRIVA PA"длинна 8 мм ========//
 
 var dubeldiametr_RD_8 = [
     {
       name:55,
       value:0.0078
      },     
   ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ДЮБЕЛЬ" -" DRIVA PA"длинна 10 мм ========//
 
 var dubeldiametr_RD_10 = [
    {
      name:60,
      value:0.01226
     },     
  ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ДЮБЕЛЬ" -" DRIVA PA"длинна 14 мм ========//
 
 var dubeldiametr_RD_14 = [
    {
      name:80,
      value:0.02226
     },     
  ] 


    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "РОНДОЛЬ" ========//

var rondolstandart = [
    {
      name: 'IZO',
      val: 'IZO',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },  
        
    {
      name: 'SM-L',
      val: 'SM-L',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ]
    },
    {
     name: 'SM-G',
     val: 'SM-G',
           coating:  [
            { 
             typecoating:'',
              klass:''
            },
           ]
    },
    {
      name: 'ДГМ',
      val: 'ДГМ',
               coating:  [
                { 
                 typecoating:'',
                  klass:''
                },
               ]
    },
    {
     name: 'Дюбель фасадный TSX-S',
     val: 'Дюбель фасадный TSX-S',
                 coating:  [
                  { 
                   typecoating:'',
                    klass:''
                  },
                 ]
      },   
      {
        name: 'Фасадный анкер с шайбой TSX-500',
        val: 'Фасадный анкер с шайбой TSX-500',
                    coating:  [
                     { 
                      typecoating:'',
                       klass:''
                     },
                    ]
         }, 
         {
            name: 'TCHAPPAI',
            val: 'TCHAPPAI',
                        coating:  [
                         { 
                          typecoating:'',
                           klass:''
                         },
                        ]
             },                 
      ]
//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"IZO"========//

var rondollongIZO = [
    
   {
    name:10,
    value:10  
 }, 
]  
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
//========для типа метиза "РОНДОЛЬ" -"IZO"  длинна 10 мм========//

var rondoldiametr_IZO_10 = [
    {
      name:80,
      value:0.01017
    }, 
    {
        name:90,
        value:0.01
    }, 
    {
        name:100,
        value:0.01099
    }, 
    {
        name:120,
        value:0.01244
    },  
    {
        name:140,
        value:0.01283
      }, 
      {
          name:160,
          value:0.01494
      }, 
      {
          name:180,
          value:0.0152
      }, 
      {
          name:200,
          value:0.016
      }, 
  ] 

  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"SM-L"========//

var rondollongSML = [
    
    {
     name:5,
     value:5  
  }, 
  {
    name:6,
    value:6  
 }, 
 {
    name:8,
    value:8  
 }, 
 {
    name:10,
    value:10  
 }, 

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"SM-L"  длинна 5 мм========//
 
 var rondoldiametr_SML_5 = [
     {
       name:25,
       value:0.00325
     }, 
     {
         name:30,
         value:0.00368
     }, 
     {
         name:40,
         value:0.004
     },    
   ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"SM-L"  длинна 6 мм========//
 
 var rondoldiametr_SML_6 = [
    {
      name:40,
      value:0.00415
    }, 
    {
        name:60,
        value:0.0052
    }, 
    {
        name:80,
        value:0.0068
    },    
  ] 
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"SM-L"  длинна 8 мм========//
 
 var rondoldiametr_SML_8 = [
    {
      name:60,
      value:0.0092
    }, 
    {
        name:80,
        value:0.0118
    }, 
    {
        name:100,
        value:0.015
    }, 
    {
        name:120,
        value:0.0182
    },
    {
        name:140,
        value:0.0256
    }, 
    {
        name:160,
        value:0.03
    },    
  ] 

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"SM-L"  длинна 10 мм========//
 
 var rondoldiametr_SML_10 = [
    {
      name:100,
      value:0.0182
    }, 
    {
        name:120,
        value:0.0182
    }, 
    {
        name:140,
        value:0.0182
    }, 
    {
        name:160,
        value:0.0182
    },   
  ] 

  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"SM-G"========//

var rondollongSMG = [
    
    {
     name:6,
     value:6  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"SM-G"  длинна 6 мм========//
 
 var rondoldiametr_SMG_6 = [
     {
       name:40,
       value:0.004
     }, 
     {
         name:60,
         value:0.0052
     }, 
     {
         name:80,
         value:0.00722
     },     
   ] 
   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"ДГМ"========//

var rondollongDQM = [
    
    {
     name:4.5,
     value:4.5  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"ДГМ"  длинна 4.5 мм========//
 
 var rondoldiametr_DQM_45 = [
     {
       name:50,
       value:0.00795
     }, 
     {
         name:60,
         value:0.00915
     },       
   ] 
  //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"Дюбель фасадный TSX-S"========//

var rondollongTSX = [
    
    {
     name:10,
     value:10  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"Дюбель фасадный TSX-S"  длинна 10 мм========//
 
 var rondoldiametr_TSX_10 = [
     {
       name:100,
       value:0.0415
     },     
   ] 
   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"Фасадный анкер с шайбой TSX-500"========//

var rondollongTSX500 = [
    
    {
     name:10,
     value:10  
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"Фасадный анкер с шайбой TSX-500"  длинна 10 мм========//
 
 var rondoldiametr_TSX500_10 = [
     {
       name:100,
       value:0.052
     },     
   ] 

     //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"========//

var rondollongTCHAPPAI = [
    
    {
     name:5,
     value:5  
  }, 
  {
    name:6,
    value:6  
 }, 
 {
    name:8,
    value:8  
 }, 
 {
    name:10,
    value:10  
 }, 
 {
    name:12,
    value:12  
 }, 

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"  длинна 5 мм========//
 
 var rondoldiametr_TCHAPPAI_5 = [
     {
       name:25,
       value:0.0005
     }, 
     {
        name:30,
        value:0.00054
      },
      {
        name:40,
        value:0.00071
      },  
   ] 
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"  длинна 6 мм========//
 
 var rondoldiametr_TCHAPPAI_6 = [
    {
      name:30,
      value:0.00083
    }, 
    {
       name:35,
       value:0.00093
     },
     {
       name:40,
       value:0.00083
     },
     {
        name:50,
        value:0.0014
      },
      {
        name:60,
        value:0.00138
      },   
  ] 
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"  длинна 8 мм========//
 
 var rondoldiametr_TCHAPPAI_8 = [
    {
      name:30,
      value:0.00132
    }, 
    {
       name:40,
       value:0.0017
     },
     {
       name:50,
       value:0.0076
     },
     {
        name:60,
        value:0.0079
      },
      {
        name:80,
        value:0.00323
      },   
  ] 
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"  длинна 10 мм========//
 
 var rondoldiametr_TCHAPPAI_10 = [
    {
      name:50,
      value:0.0024
    }, 
    {
       name:60,
       value:0.0038
     },
     {
       name:100,
       value:0.0058
     },      
  ] 
      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "РОНДОЛЬ" -"TCHAPPAI"  длинна 12 мм========//
 
 var rondoldiametr_TCHAPPAI_12 = [
    {
      name:60,
      value:0.00562
    }, 
    {
       name:70,
       value:0.0045
     },
     {
       name:120,
       value:0.0068
     },      
  ] 

     //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "ЗАКЛЕПКА" ========//

var zaklepkastandart = [
    {
      name: 'Заклепка ZK AL/ST',
      val: 'Заклепка ZK AL/ST',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },                     
   ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ЗАКЛЕПКА" -"Заклепка ZK AL/ST"========//

var zaklepkalongZK = [
    
    {
     name:3.2,
     value:32  
  }, 
  {
    name:4,
    value:4  
 }, 
 {
    name:4.8,
    value:48  
 }, 
 {
    name:6.4,
    value:64  
 }, 
 

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ЗАКЛЕПКА" -"TCHAPPAI"  длинна 3.2 мм========//
 
 var zaklepkadiametr_ZK_32 = [
     {
       name:6,
       value:0.0008
     }, 
     {
        name:8,
        value:0.00088
      },
      {
        name:10,
        value:0.00093
      }, 
      {
        name:12,
        value:0.001
      }, 
      {
        name:16,
        value:0.0011
      }, 
     ]  
     
     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ЗАКЛЕПКА" -"TCHAPPAI"  длинна 4 мм========//
 
 var zaklepkadiametr_ZK_4 = [
    {
      name:6,
      value:0.00125
    }, 
    {
       name:8,
       value:0.0013
     },
     {
       name:10,
       value:0.0014
     }, 
     {
       name:12,
       value:0.0015
     }, 
     {
       name:14,
       value:0.0016
     }, 
     {
        name:16,
        value:0.0017
      }, 
]   
  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ЗАКЛЕПКА" -"TCHAPPAI"  длинна 4.8 мм========//
 
 var zaklepkadiametr_ZK_48 = [
    {
      name:6,
      value:0.0019
    }, 
    {
       name:8,
       value:0.00205
     },
     {
       name:10,
       value:0.0022
     }, 
     {
       name:12,
       value:0.00235
     }, 
     {
       name:14,
       value:0.00268
     }, 
     {
        name:16,
        value:0.00296
      }, 
      {
        name:18,
        value:0.00312
      }, 
      {
        name:21,
        value:0.00338
      },
      {
        name:25,
        value:0.0032
      },   
]   

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ЗАКЛЕПКА" -"TCHAPPAI"  длинна 6.4 мм========//
 
 var zaklepkadiametr_ZK_64 = [
    
     {
       name:10,
       value:0.00395
     }, 
     {
       name:14,
       value:0.00432
     }, 
     {
        name:16,
        value:0.0047
      }, 
      {
        name:18,
        value:0.0057
      }, 
      {
        name:21,
        value:0.0067
      },      
]   

    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "ТАКЕЛАЖ" ========//

var takelagstandart = [
    {
      name: 'DIN 741',
      val: 'DIN 741',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
            name: 'DIN 1480',
            val: 'DIN 1480',
               coating:  [
                { 
                 typecoating:'',
                  klass:''
                },
               ],
              },                     
   ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ТАКЕЛАЖ" -"DIN 741"========//

var takelaglong741 = [
    
    {
     name:3,
     value:0.008 
  }, 
  {
    name:5,
    value:0.011 
 }, 
 {
    name:6,
    value:0.015  
 }, 
 {
    name:8,
    value:0.02533 
 }, 
 {
    name:10,
    value:0.054  
 },
 {
    name:12,
    value:0.105  
 },
 {
    name:14,
    value:0.11  
 },
 {
    name:16,
    value:0.17  
 },
 {
    name:20,
    value:0.25  
 },
 

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"DIN 741"  длинна 3.2 мм========//
 
 var takelagdiametr_741 = [
     {
       name:'',
       value:''
     }, 
 ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ТАКЕЛАЖ" -"DIN 1480"========//

var takelaglong1480 = [
       
 {
    name:6,
    value:0.051  
 }, 
 {
    name:8,
    value:0.098 
 }, 
 {
    name:10,
    value:0.160  
 },
 {
    name:12,
    value:0.31  
 },
 {
    name:14,
    value:0.52 
 },
 {
    name:16,
    value:0.69 
 },
 {
    name:20,
    value:0.79  
 },
 

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"DIN 741"  длинна 3.2 мм========//
 
 var takelagdiametr_1480 = [
     {
       name:'',
       value:''
     }, 
 ]

 
    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "САМОРЕЗЫ" ========//

var samoresstandart = [
    {
      name: 'Кровельный шуруп, без шайбы сверло',
      val: 'Кровельный шуруп, без шайбы сверло',
         coating:  [
          { 
           typecoating:'Оцинкованный',
            klass:''
          },
         ],
        },   
        {
        name: 'Кровельный шуруп, с шайбой, резиновая прокладка сверло',
        val: 'Кровельный шуруп, с шайбой, резиновая прокладка сверло',
         coating:  [
          { 
           typecoating:'Оцинкованный',
           klass:''
           },
         ],
        },
        {
        name: 'Кровельный шуруп, с шайбой, резиновая прокладка удлиненное сверло',
        val: 'Кровельный шуруп, с шайбой, резиновая прокладка удлиненное сверло',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       },
       {
       name: 'Саморезы для сэндвич - панелей',
       val: 'Саморезы для сэндвич - панелей',
         coating:  [
        { 
         typecoating:'Оцинкованный',
         klass:''
        },
       ],
      },
      {
        name: 'Саморез оконный SD',
        val: 'Саморез оконный SD',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       },  
       {
        name: 'Саморез оконный SP',
        val: 'Саморез оконный SP',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 
       {
        name: 'Саморез для гипсокартонных листов на деревянные основания',
        val: 'Саморез для гипсокартонных листов на деревянные основания',
          coating:  [
         { 
          typecoating:'',
          klass:''
         },
        ],
       },  
       {
        name: 'Саморез для гипсокартонных листов в металлические основания',
        val: 'Саморез для гипсокартонных листов в металлические основания',
          coating:  [
         { 
          typecoating:'',
          klass:''
         },
        ],
       }, 
       {
        name: 'Саморез с прессшайбой острый',
        val: 'Саморез с прессшайбой острый',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 
       {
        name: 'Саморез с прессшайбой  со сверлом',
        val: 'Саморез с прессшайбой  со сверлом',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 


       {
        name: 'Саморез острый/белый',
        val: 'Саморез острый/белый',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 
       {
        name: 'Шуруп монтажный FRS-S',
        val: 'Шуруп монтажный FRS-S',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 
       {
        name: 'Саморез для деревянных лаг (глухарь)',
        val: 'Саморез для деревянных лаг (глухарь)',
          coating:  [
         { 
          typecoating:'Оцинкованный',
          klass:''
         },
        ],
       }, 
       {
        name: 'Универсальный шуруп',
        val: 'Универсальный шуруп',
          coating:  [
         { 
          typecoating:'',
          klass:''
         },
        ],
       },  
       
   ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Кровельный шуруп, без шайбы сверло"========//

var samoreslong1 = [
    
    {
     name:5.5,
     value:5.5 
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Кровельный шуруп, без шайбы сверло"  длинна 5.5 мм========//
 
 var samoresdiametr_1 = [
     {
       name:'19',
       value:'0.00321'
     }, 
     {
        name:'25',
        value:'0.00367'
      },
 ]

       //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Кровельный шуруп, с шайбой, резиновая прокладка сверло"========//

var samoreslong2 = [
    {
     name:4.8,
     value:48 
    },  
    {
     name:5.5,
     value:55 
    },
    {
     name:6.3,
     value:63 
    },  
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Кровельный шуруп, с шайбой, резиновая прокладка сверло"  длинна 5.5 мм========//
 
 var samoresdiametr_2_48 = [
     {
       name:'29',
       value:'0.00428'
     }, 
     {
        name:'35',
        value:'0.00488'
      },
      {
        name:'50',
        value:'0.00597'
      }, 
      {
        name:'64',
        value:'0.008'
      }, 
      {
        name:'76',
        value:'0.008'
      },
      {
        name:'80',
        value:'0.0075'
      },       
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Кровельный шуруп, с шайбой, резиновая прокладка сверло"  длинна 5.5 мм========//
 
 var samoresdiametr_2_55 = [
    {
      name:'19',
      value:'0.00438'
    }, 
    {
       name:'25',
       value:'0.00492'
     },
     {
       name:'32',
       value:'0.00538'
     }, 
     {
       name:'38',
       value:'0.00598'
     }, 
     {
       name:'51',
       value:'0.00744'
     },
     {
       name:'64',
       value:'0.00335'
     },
     {
        name:'76',
        value:'0.01068'
      }, 
      {
        name:'102',
        value:'0.0125'
      },         
]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Кровельный шуруп, с шайбой, резиновая прокладка сверло"  длинна 6.3 мм========//
 
 var samoresdiametr_2_63 = [
    {
      name:'25',
      value:'0.00761'
    }, 
    {
       name:'32',
       value:'0.00914'
     }, 
     {
       name:'38',
       value:'0.0094'
     }, 
     {
       name:'50',
       value:'0.01264'
     },
     {
       name:'60',
       value:'0.0128'
     },
     {
        name:'70',
        value:'0.013'
      }, 
      {
        name:'80',
        value:'0.01612'
      },  
      {
        name:'90',
        value:'0.0169'
      },
      {
        name:'100',
        value:'0.0187'
      },
      {
        name:'127',
        value:'0.0259'
      },            
]

    //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Кровельный шуруп, с шайбой, резиновая прокладка удлиненное сверло"========//

var samoreslong3 = [
     
    {
     name:5.5,
     value:55 
    },
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Кровельный шуруп, с шайбой, резиновая прокладка удлиненное сверло"  длинна 5.5 мм========//
 
 var samoresdiametr_3_55 = [
     {
       name:'25',
       value:'0.0053'
     }, 
     {
        name:'32',
        value:'0.0061'
      },
      {
        name:'38',
        value:'0.0067'
      }, 
      {
        name:'51',
        value:'0.008'
      },         
 ]

   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморезы для сэндвич - панелей"========//

var samoreslong4 = [
     
    {
     name:'6.3/5.5',
     value:55 
    },
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморезы для сэндвич - панелей"  длинна 5.5 мм========//
 
 var samoresdiametr_4_55 = [
     {
       name:'105',
       value:'0.0169'
     }, 
     {
        name:'135',
        value:'0.0221'
      },
      {
        name:'160',
        value:'0.025'
      }, 
      {
        name:'185',
        value:'0.0284'
      },
      {
        name:'200',
        value:'0.0322'
      },
      {
        name:'240',
        value:'0.0368'
      },
      {
        name:'280',
        value:'0.04331'
      },              
 ]


    //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез оконный SD"========//

var samoreslong5 = [
     
    {
     name:3.9,
     value:39 
    },
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез оконный SD"  длинна 3.9 мм========//
 
 var samoresdiametr_5_39 = [
     {
       name:'16',
       value:'0.0011'
     }, 
     {
        name:'19',
        value:'0.00122'
      },
      {
        name:'25',
        value:'0.0016'
      }, 
      {
        name:'32',
        value:'0.00202'
      }, 
      {
        name:'38',
        value:'0.0024'
      },         
 ]

    //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез оконный SP"========//

var samoreslong6 = [
     
    {
     name:4.1,
     value:41 
    },
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез оконный SP"  длинна 4.1 мм========//
 
 var samoresdiametr_6_41 = [
     {
        name:'25',
        value:'0.00136'
      }, 
      {
        name:'30',
        value:'0.00162'
      }, 
      {
        name:'35',
        value:'0.00192'
      },  
      {
        name:'40',
        value:'0.00209'
      },        
 ]

   //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез для гипсокартонных листов на деревянные основания"========//

var samoreslong7 = [
     
    {
     name:3.5,
     value:35 
    },
    {
        name:4.2,
        value:42 
       },
       {
        name:4.8,
        value:48 
       },   
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов на деревянные основания"  длинна 3.5 мм========//
 
 var samoresdiametr_7_35 = [
     {
        name:'16',
        value:'0.00077'
      }, 
      {
        name:'19',
        value:'0.00084'
      }, 
      {
        name:'25',
        value:'0.0011'
      },  
      {
        name:'32',
        value:'0.00136'
      }, 
      {
        name:'35',
        value:'0.00145'
      }, 
      {
        name:'41',
        value:'0.00174'
      }, 
      {
        name:'45',
        value:'0.002'
      }, 
      {
        name:'51',
        value:'0.00212'
      }, 
      {
        name:'55',
        value:'0.00227'
      }, 
      {
        name:'64',
        value:'0.00326'
      }, 
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов на деревянные основания"  длинна 4.2 мм========//
 
 var samoresdiametr_7_42 = [
    {
       name:'70',
       value:'0.00326'
     }, 
     {
       name:'76',
       value:'0.00344'
     }, 
     {
       name:'90',
       value:'0.005'
     },       
]
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов на деревянные основания"  длинна 4.8 мм========//
 
 var samoresdiametr_7_48 = [
    {
       name:'95',
       value:'0.00579'
     }, 
     {
       name:'100',
       value:'0.00636'
     }, 
     {
       name:'120',
       value:'0.008'
     },  
     {
        name:'127',
        value:'0.00833'
      },     
]

//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез для гипсокартонных листов в металлические основания "========//

var samoreslong8 = [
     
    {
     name:3.5,
     value:35 
    },
    {
        name:4.2,
        value:42 
       },
       {
        name:4.8,
        value:48 
       },   
     
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов в металлические основания"  длинна 3.5 мм========//
 
 var samoresdiametr_8_35 = [
     {
        name:'16',
        value:'0.00077'
      }, 
      {
        name:'19',
        value:'0.00084'
      }, 
      {
        name:'25',
        value:'0.0011'
      },  
      {
        name:'32',
        value:'0.00136'
      }, 
      {
        name:'35',
        value:'0.00145'
      }, 
      {
        name:'41',
        value:'0.00174'
      }, 
      {
        name:'45',
        value:'0.002'
      }, 
      {
        name:'51',
        value:'0.00212'
      }, 
      {
        name:'55',
        value:'0.00227'
      }, 
      {
        name:'64',
        value:'0.00296'
      }, 
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов в металлические основания"  длинна 4.2 мм========//
 
 var samoresdiametr_8_42 = [
    {
       name:'70',
       value:'0.00382'
     }, 
     {
       name:'76',
       value:'0.0041'
     }, 
     {
       name:'80',
       value:'0.005'
     },
     {
        name:'90',
        value:'0.0058'
      },        
]
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для гипсокартонных листов на деревянные основания"  длинна 4.8 мм========//
 
 var samoresdiametr_8_48 = [
    {
       name:'100',
       value:'0.00636'
     },       
]

//======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез с прессшайбой острый"========//

var samoreslong9 = [
  
    {
        name:4.2,
        value:42 
       },
      
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез с прессшайбой острый"  длинна 4.2 мм========//
 
 var samoresdiametr_9_42 = [
    {
        name:'13',
        value:'0.00114'
      },  
    {
        name:'16',
        value:'0.00135'
      }, 
      {
        name:'19',
        value:'0.00145'
      }, 
      {
        name:'25',
        value:'0.00216'
      },  
      {
        name:'32',
        value:'0.0023'
      }, 
      
      {
        name:'41',
        value:'0.00266'
      }, 
      {
        name:'45',
        value:'0.002'
      }, 
      {
        name:'51',
        value:'0.00322'
      }, 
      {
        name:'57',
        value:'0.0041'
      }, 
      {
        name:'76',
        value:'0.00492'
      }, 
 ]

 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез с прессшайбой  со сверлом"========//

var samoreslong10 = [
  
    {
        name:4.2,
        value:42 
       },
      
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез с прессшайбой  со сверлом"  длинна 4.2 мм========//
 
 var samoresdiametr_10_42 = [
   
    {
        name:'16',
        value:'0.00115'
      }, 
      {
        name:'19',
        value:'0.00139'
      }, 
      {
        name:'25',
        value:'0.00168'
      },  
      {
        name:'32',
        value:'0.00241'
      }, 
      
      {
        name:'41',
        value:'0.00218'
      }, 
      
      {
        name:'51',
        value:'0.0027'
      }, 
      {
        name:'57',
        value:'0.0032'
      }, 
      {
        name:'76',
        value:'0.0053'
      }, 
 ]

 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез острый/белый"========//

var samoreslong11 = [
  
    {
        name:3.5,
        value:35 
       },
      
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез острый/белый"  длинна 3.5 мм========//
 
 var samoresdiametr_11_35 = [
   
    {
        name:'9.5',
        value:'0.00098'
      }, 
      {
        name:'11',
        value:'0.00105'
      },      
 ]

 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Шуруп монтажный FRS-S"========//

var samoreslong12 = [
  
    {
        name:7.5,
        value:75 
       },
      
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Шуруп монтажный FRS-S"  длинна 3.5 мм========//
 
 var samoresdiametr_12_75 = [
   
    {
        name:'72',
        value:'0.013'
      }, 
      {
        name:'92',
        value:'0.0168'
      }, 
      {
        name:'112',
        value:'0.02'
      }, 
      {
        name:'132',
        value:'0.024'
      }, 
      {
        name:'152',
        value:'0.0272'
      },
      {
        name:'182',
        value:'0.033'
      }, 
      {
        name:'202',
        value:'0.0368'
      },      
 ]

 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Саморез для деревянных лаг (глухарь) "========//

var samoreslong13 = [
  
    {
        name:6,
        value:6 
    },
    {
        name:8,
        value:8 
    },
    {
        name:10,
        value:10 
    },
    {
        name:12,
        value:12 
    },
      
      
      
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для деревянных лаг (глухарь) "  длинна 6 мм========//
 
 var samoresdiametr_13_6 = [
   
    {
        name:'40',
        value:'0.00764'
      }, 
      {
        name:'50',
        value:'0.00897'
      }, 
      {
        name:'60',
        value:'0.01042'
      }, 
      {
        name:'70',
        value:'0.01187'
      }, 
      {
        name:'80',
        value:'0.01339'
      },
      {
        name:'90',
        value:'0.01484'
      }, 
      {
        name:'100',
        value:'0.01633'
      },
      {
        name:'120',
        value:'0.0217'
      }, 
      {
        name:'140',
        value:'0.0217'
      },       
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для деревянных лаг (глухарь) "  длинна 8 мм========//
 
 var samoresdiametr_13_8 = [
   
   
      {
        name:'50',
        value:'0.01693'
      }, 
      {
        name:'60',
        value:'0.01952'
      }, 
      {
        name:'70',
        value:'0.02195'
      }, 
      {
        name:'80',
        value:'0.02464'
      },
      {
        name:'90',
        value:'0.02735'
      }, 
      {
        name:'100',
        value:'0.02976'
      },
      {
        name:'120',
        value:'0.0346'
      }, 
      {
        name:'140',
        value:'0.04'
      },
      {
        name:'160',
        value:'0.04557'
      },   
      {
        name:'200',
        value:'0.0586'
      },        
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для деревянных лаг (глухарь)"  длинна 10 мм========//
 
 var samoresdiametr_13_10 = [
   
    {
      name:'60',
      value:'0.03395'
    }, 
    {
      name:'70',
      value:'0.03786'
    }, 
    {
      name:'80',
      value:'0.0426'
    },
    {
      name:'90',
      value:'0.0464'
    }, 
    {
      name:'100',
      value:'0.05023'
    },
    {
      name:'120',
      value:'0.059'
    }, 
    {
      name:'140',
      value:'0.0676'
    },
    {
      name:'160',
      value:'0.07615'
    },   
    {
      name:'180',
      value:'0.0847'
    },  
    {
        name:'200',
        value:'0.09353'
    },
    {
        name:'220',
        value:'0.1024'
    },
    {
        name:'260',
        value:'0.1201'
      },  
      {
          name:'300',
          value:'0.149'
      },         
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Саморез для деревянных лаг (глухарь) "  длинна 12 мм========//
 
 var samoresdiametr_13_12 = [
   
    {
      name:'120',
      value:'0.08325'
    }, 
    {
      name:'140',
      value:'0.09483'
    },
    
    {
      name:'180',
      value:'0.12648'
    },  
   
    {
        name:'240',
        value:'0.16275'
    },
    {
        name:'260',
        value:'0.19'
      },  
      {
          name:'280',
          value:'0.203'
      }, 
      {
        name:'300',
        value:'0.20183'
    },          
]

 //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "САМОРЕЗЫ" -"Универсальный шуруп"========//

var samoreslong14 = [
  
    {
        name:4,
        value:4 
    },
    {
        name:5,
        value:5 
    },
    {
        name:6,
        value:6 
    },   
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Универсальный шуруп "  длинна 4 мм========//
 
 var samoresdiametr_14_4 = [
   
    {
        name:'16',
        value:'0.00096'
      }, 
      {
        name:'20',
        value:'0.00112'
      }, 
      {
        name:'25',
        value:'0.00125'
      }, 
      {
        name:'30',
        value:'0.0015'
      }, 
      {
        name:'35',
        value:'0.00173'
      },
      {
        name:'40',
        value:'0.00193'
      }, 
      {
        name:'45',
        value:'0.00264'
      },
      {
        name:'50',
        value:'0.00244'
      }, 
      {
        name:'60',
        value:'0.0029'
      }, 
      {
        name:'70',
        value:'0.00344'
      },       
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Универсальный шуруп "  длинна 5 мм========//
 
 var samoresdiametr_14_5 = [
   
   
      {
        name:'30',
        value:'0.0025'
      }, 
      {
        name:'35',
        value:'0.0029'
      },
      {
        name:'40',
        value:'0.00372'
      }, 
      {
        name:'45',
        value:'0.00411'
      },
      {
        name:'50',
        value:'0.0039'
      }, 
      {
        name:'60',
        value:'0.00467'
      }, 
      {
        name:'70',
        value:'0.0054'
      },
      {
        name:'80',
        value:'0.0059'
      },
      {
        name:'90',
        value:'0.00683'
      }, 
      {
        name:'100',
        value:'0.00752'
      },         
 ]
  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТАКЕЛАЖ" -"Универсальный шуруп "  длинна 6 мм========//
 
 var samoresdiametr_14_6 = [
   
   
    {
      name:'30',
      value:'0.0045'
    }, 
    
    {
      name:'40',
      value:'0.00496'
    }, 
   
    {
      name:'50',
      value:'0.0059'
    }, 
    {
      name:'60',
      value:'0.0065'
    }, 
    {
      name:'70',
      value:'0.0079'
    },
    {
      name:'80',
      value:'0.00893'
    },
    {
      name:'90',
      value:'0.,00997'
    }, 
    {
      name:'100',
      value:'0.011'
    }, 
    {
        name:'120',
        value:'0.0135'
      },         
      {
        name:'140',
        value:'0.015'
      },  
      {
        name:'160',
        value:'0.0171'
      },
      {
        name:'180',
        value:'0.02013'
      },
      {
        name:'200',
        value:'0.0213'
      }            
]



    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Проволока" ========//

var provolokastandart = [
    {
      name: 'ГОСТ 3282-74 Т/О',
      val: 'ГОСТ 3282-74 Т/О',
         coating:  [
          { 
           typecoating:'Без покрытия',
            klass:''
          },
         ],
        },   
        {
        name: 'ГОСТ 285-69',
        val: 'ГОСТ 285-69',
         coating:  [
          { 
           typecoating:'Без покрытия',
           klass:''
           },
         ],
        },   
       
   ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Проволока" -"Проволока"========//

var provolokalong1 = [
    
    {
     name:'',
     value:'' 
  }, 
 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Проволока" -"ГОСТ 3282-74 Т/О========//
 
 var provolokadiametr_1 = [
     {
       name:'1,2',
       value:'0.0089'
     }, 
     {
        name:'1.6',
        value:'0.0158'
      },
      {
        name:'2',
        value:'0.0247'
      }, 
      {
         name:'3',
         value:'0.0555'
       },
       {
        name:'4',
        value:'0.0986'
      }, 
      {
         name:'5',
         value:'0.1541'
       }, 
       {
        name:'6',
        value:'0.222'
      }, 
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Проволока" -"ГОСТ 285-69========//
 
 var provolokadiametr_2 = [
    {
      name:'2,8',
      value:'0.09'
    },     
]



    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Гвозди" ========//

var gwosdistandart = [
    {
      name: 'Гвоздь строительный',
      val: 'Гвоздь строительный',
         coating:  [
          { 
           typecoating:'Без покрытия',
            klass:''
          },
         ],
        },   
        {
        name: 'Гвоздь финишный1,6*20, , КГ',
        val: 'Гвоздь финишный1,6*20, , КГ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],
        },   
       
   ]

        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Гвозди" -"Гвоздь строительный"========//

var gwosdilong1 = [
    {
     name:'1.2',
     value:'12' 
    },
    {
        name:'1.6',
        value:'16' 
    }, 
    {
        name:'1.8',
        value:'18' 
       },
       {
        name:'2',
        value:'2' 
       },
       {
        name:'2.5',
        value:'25' 
       },  
       {
        name:'3',
        value:'3' 
       },
       {
        name:'3.5',
        value:'35' 
       },
       {
        name:'4',
        value:'4' 
       }, 
       {
        name:'5',
        value:'5' 
       }, 
       {
        name:'6',
        value:'6' 
       },  

 ]  
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 1.2 мм ========//
 
 var gwosdidiametr_12 = [
     {
       name:'20',
       value:'0.000183'
     },    
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 1.6 мм ========//
 
 var gwosdidiametr_16 = [
    {
      name:'25',
      value:'0.000397'
    },   
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 1.8 мм ========//
 
 var gwosdidiametr_18 = [
    {
      name:'32',
      value:'0.00064'
    },   
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 2 мм ========//
 
 var gwosdidiametr_2 = [
    {
      name:'40',
      value:'0.000949'
    },   
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 2.5 мм ========//
 
 var gwosdidiametr_25 = [
    {
      name:'50',
      value:'0.00187'
    },  
    {
        name:'60',
        value:'0.00223'
      },  
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 3 мм ========//
 
 var gwosdidiametr_3 = [
    {
      name:'70',
      value:'0.00377'
    },  
    {
        name:'80',
        value:'0.00433'
      },  
]
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 3.5 мм ========//
 
 var gwosdidiametr_35 = [
    {
      name:'90',
      value:'0.0066'
    },  
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 4 мм ========//
 
 var gwosdidiametr_4 = [
    {
      name:'100',
      value:'0.0095'
    },
    {
        name:'120',
        value:'0.0178'
      },   
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 5 мм ========//
 
 var gwosdidiametr_5 = [
    
    {
        name:'150',
        value:'0.0219'
      },   
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь строительный" длинна 6 мм ========//
 
 var gwosdidiametr_6 = [
    
    {
        name:'200',
        value:'0.0431'
      },   
]

     //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Гвозди" -"Гвоздь финишный1"========//

var gwosdilong2 = [
    {
     name:'1.6',
     value:'16' 
    },
    {
        name:'1.8',
        value:'18' 
       },
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь финишный1" длинна 1.6 мм ========//
 
 var gwosdidiametr_2_16 = [
      {
        name:'20',
        value:'0.00034'
      },
      {
        name:'30',
        value:'0.00058'
      },
      {
        name:'40',
        value:'0.00063'
      },      
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Гвозди" -"Гвоздь финишный1" длинна 1.8 мм ========//
 
 var gwosdidiametr_2_18 = [
    {
      name:'30',
      value:'0.00064'
    },
    {
      name:'40',
      value:'0.00083'
    },
    {
      name:'50',
      value:'0.00103'
    },  
    {
        name:'50',
        value:'0.00105'
      },      
]


    //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "ТРОС" ========//

var trosstandart = [
    {
      name: 'Трос в оплетке ПВХ 2/3, , м',
      val: 'Трос в оплетке ПВХ 2/3, , м',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
        name: 'Трос в оплетке ПВХ 3/4, , м',
        val: 'Трос в оплетке ПВХ 3/4, , м',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],
        },   
        {
         name: 'Трос в оплетке ПВХ 4/5, , м',
         val: 'Трос в оплетке ПВХ 4/5, , м',
             coating:  [
              { 
               typecoating:'',
               klass:''
               },
             ],
            },
       {    
         name: 'Трос в оплетке ПВХ 5/6, , м',
         val: 'Трос в оплетке ПВХ 5/6, , м',
             coating:  [
              { 
               typecoating:'',
               klass:''
               },
             ],
       },
       {    
        name: 'Трос в оплетке ПВХ 6/8, , м',
        val: 'Трос в оплетке ПВХ 6/8, , м',
            coating:  [
             { 
              typecoating:'',
              klass:''
              },
            ],
      }, 
      {    
        name: 'Трос в оплетке ПВХ 8/10, , м',
        val: 'Трос в оплетке ПВХ 8/10, , м',
            coating:  [
             { 
              typecoating:'',
              klass:''
              },
            ],
      }, 
      {    
        name: 'DIN 3055',
        val: 'DIN 3055',
            coating:  [
             { 
              typecoating:'',
              klass:''
              },
            ],
      },      
  ]   
       
   



        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 2/3, , м"========//

var troslong1 = [
    {
     name:'',
     value:'' 
    },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 2/3, , м"  ========//
 
 var trosdiametr_1 = [
    {
      name:'',
      value:'0.0205'
    },        
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 3/4, , м"  ========//
 
 var trosdiametr_2 = [
    {
      name:'',
      value:'0.0408'
    },        
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 4/5, , м"  ========//
 
 var trosdiametr_3 = [
    {
      name:'',
      value:'0.0682'
    },        
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 5/6, , м"  ========//
 
 var trosdiametr_4 = [
    {
      name:'',
      value:'0.1048'
    },        
]
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 5/6, , м"  ========//
 
 var trosdiametr_5 = [
    {
      name:'',
      value:'0.163'
    },        
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос в оплетке ПВХ 5/6, , м"  ========//
 
 var trosdiametr_6 = [
    {
      name:'',
      value:'0.25'
    },        
]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Трос стальной " длинна 1  ========//
 
 var trosdiametr_2_1 = [
    {
      name:'1',
      value:'0.005'
    },   
    {
        name:'1.5',
        value:'0.011'
      }, 
      {
        name:'2',
        value:'0.03'
      },
      {
        name:'3',
        value:'0.03215'
      },
      {
        name:'4',
        value:'0.0571'
      },
      {
        name:'5',
        value:'0.0893'
      }, 
     {
        name:'6',
        value:'0.1285'
      },
      {
        name:'7',
        value:'0.2285'
      }, 
      {
        name:'8',
        value:'0.3'
      },  
]

   //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Цепь" ========//

var zepistandart = [
    {
      name: 'DIN 763',
      val: 'DIN 763',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
        name: 'DIN766',
        val: 'DIN766',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
     
  ]   
       
   



        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "ТРОС" -"Цепь длиннозвенная "========//

var zepilong1 = [
    {
     name:'',
     value:'' 
    },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Цепь длиннозвенная "  ========//
 
 var zepidiametr_1 = [
    {
      name:'2',
      value:'0.0614'
    },
    {
        name:'3',
        value:'0.142'
   },
   {
    name:'4',
    value:'0.2606'
},   
{
    name:'5',
    value:'0.42'
}, 
{
    name:'6',
    value:'0.606'
}, 
{
    name:'8',
    value:'1.1'
}, 
{
    name:'10',
    value:'2.2'
},        
]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "ТРОС" -"Цепь короткозвенная "  ========//

var zepidiametr_2 = [
    {
      name:'2',
      value:'0.07'
    },
    {
        name:'3',
        value:'0.16'
   },
   {
    name:'4',
    value:'0.293'
},   
{
    name:'5',
    value:'0.493'
}, 
{
    name:'6',
    value:'0.768'
}, 
{
    name:'8',
    value:'1.4'
}, 
{
    name:'10',
    value:'2.2'
},        
]

   //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Абразивы" ========//

var abrasivstandart = [
    {
      name: 'Круг отрезной 125*1,6*22 , 1 штука, ШТ',
      val: 'Круг отрезной 125*1,6*22 , 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
        name: 'Круг отрезной 125*1,8*22 , 1 штука, ШТ',
        val: 'Круг отрезной 125*1,8*22 , 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 150*1,6*22, 1 штука, ШТ',
        val: 'Круг отрезной 150*1,6*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 150*1,8*22, 1 штука, ШТ',
        val: 'Круг отрезной 150*1,8*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 180*1,6*22, 1 штука, ШТ',
        val: 'Круг отрезной 180*1,6*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 180*1,8*22, 1 штука, ШТ',
        val: 'Круг отрезной 180*1,8*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 230*1,6*22, 1 штука, ШТ',
        val: 'Круг отрезной 230*1,6*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Круг отрезной 230*1,8*22, 1 штука, ШТ',
        val: 'Круг отрезной 230*1,8*22, 1 штука, ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },     
     
  ]   
       
   



        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Абразивы" ========//

var abrasivlong1 = [
    {
     name:'',
     value:'' 
    },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Абразивы" -"Круг отрезной 125*1,6*22 , 1 штука, ШТ "  ========//
 
 var abrasivdiametr_1 = [
    {
      name:'',
      value:'0.041'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Абразивы" -"Круг отрезной 125*1,8*22 , 1 штука, ШТ "  ========//
 
 var abrasivdiametr_2 = [
    {
      name:'',
      value:'0.047'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Абразивы" -"Круг отрезной 150*1,6*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_3 = [
    {
      name:'',
      value:'0.06'
    },
 ]
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Абразивы" -"Круг отрезной 150*1,8*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_4 = [
    {
      name:'',
      value:'0.065'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Круг отрезной 180*1,6*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_5 = [
    {
      name:'',
      value:'0.087'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Круг отрезной 180*1,6*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_6 = [
    {
      name:'',
      value:'0.09'
    },
 ]

      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Круг отрезной 180*1,6*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_7 = [
    {
      name:'',
      value:'0.151'
    },
 ]
 
      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Круг отрезной 230*1,8*22, 1 штука, ШТ "  ========//
 
 var abrasivdiametr_8 = [
    {
      name:'',
      value:'0.162'
    },
 ]

   //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Перфорированный крепеж" ========//

var kregeqstandart = [
    {
      name: 'Крепежный уголок 20*20*80*2, , ШТ',
      val: 'Крепежный уголок 20*20*80*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
        name: 'Крепежный уголок 40*40*20*2, , ШТ',
        val: 'Крепежный уголок 40*40*20*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 40*40*40*2, , ШТ',
        val: 'Крепежный уголок 40*40*40*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 50*50*40*2, , ШТ',
        val: 'Крепежный уголок 50*50*40*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 50*50*50*2, , ШТ',
        val: 'Крепежный уголок 50*50*50*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 50*50*60*2, , ШТ',
        val: 'Крепежный уголок 50*50*60*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 50*50*80*2, , ШТ',
        val: 'Крепежный уголок 50*50*80*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 80*80*40*2, , ШТ',
        val: 'Крепежный уголок 80*80*40*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок 80*80*60*2, , ШТ',
        val: 'Крепежный уголок 80*80*60*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежный уголок 80*80*80*2, , ШТ',
        val: 'Крепежный уголок 80*80*80*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок с анкерным отверстием 105*105*90*2 усиленный, , ШТ',
        val: 'Крепежный уголок с анкерным отверстием 105*105*90*2 усиленный, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },  
       {
        name: 'Крепежный уголок с анкерным отверстием 125*125*65*2 усиленный, , ШТ',
        val: 'Крепежный уголок с анкерным отверстием 125*125*65*2 усиленный, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежный уголок с анкерным отверстием 50*50*40*2 усиленный, , ШТ',
        val: 'Крепежный уголок с анкерным отверстием 50*50*40*2 усиленный, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок с анкерным отверстием 70*70*55*2 усиленный, , ШТ',
        val: 'Крепежный уголок с анкерным отверстием 70*70*55*2 усиленный, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежный уголок с анкерным отверстием 90*90*65*2 усиленный, , ШТ',
        val: 'Крепежный уголок с анкерным отверстием 90*90*65*2 усиленный, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Опора бруса закрытая 100*76*50*2, , ШТ',
        val: 'Опора бруса закрытая 100*76*50*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Опора бруса закрытая 140*76*100*2, , ШТ',
        val: 'Опора бруса закрытая 140*76*100*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Опора бруса закрытая 140*76*50*2, , ШТ',
        val: 'Опора бруса закрытая 140*76*50*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Опора бруса открытая 100*76*50*2, , ШТ',
        val: 'Опора бруса открытая 100*76*50*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Опора бруса открытая 140*76*100*2, , ШТ',
        val: 'Опора бруса открытая 140*76*100*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Опора бруса открытая 140*76*50*2, , ШТ',
        val: 'Опора бруса открытая 140*76*50*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина с анкерным отверстием 100*35*2, , ШТ',
        val: 'Крепежная пластина с анкерным отверстием 100*35*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },  
       {
        name: 'Крепежная пластина с анкерным отверстием 100*35*2, , ШТ',
        val: 'Крепежная пластина с анкерным отверстием 100*35*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Крепежная пластина с анкерным отверстием 140*55*2, , ШТ',
        val: 'Крепежная пластина с анкерным отверстием 140*55*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },  
       {
        name: 'Крепежная пластина с анкерным отверстием 180*65*2, , ШТ',
        val: 'Крепежная пластина с анкерным отверстием 180*65*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина с анкерным отверстием 210*90*2, , ШТ',
        val: 'Крепежная пластина с анкерным отверстием 210*90*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       
       {
        name: 'Крепежная пластина 100*200*2, , ШТ',
        val: 'Крепежная пластина 100*200*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 100*300*2, , ШТ',
        val: 'Крепежная пластина 100*300*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 100*400*2, , ШТ',
        val: 'Крепежная пластина 100*400*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 40*120*2, , ШТ',
        val: 'Крепежная пластина 40*120*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 40*200*2, , ШТ',
        val: 'Крепежная пластина 40*200*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 60*140*2, , ШТ',
        val: 'Крепежная пластина 60*140*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 60*200*2, , ШТ',
        val: 'Крепежная пластина 60*200*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 60*240*2, , ШТ',
        val: 'Крепежная пластина 60*240*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 60*300*2, , ШТ',
        val: 'Крепежная пластина 60*300*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 80*240*2, , ШТ',
        val: 'Крепежная пластина 80*240*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Крепежная пластина 80*300*2, , ШТ',
        val: 'Крепежная пластина 80*300*2, , ШТ',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       
     
  ]   
       
   



        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Перфорированный крепеж" ========//

var kregeqlong1 = [
    {
     name:'',
     value:'' 
    },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 20*20*80*2, , ШТ "  ========//
 
 var kregeqdiametr_1 = [
    {
      name:'',
      value:'0.007'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 40*40*20*2, , ШТ "  ========//
 
 var kregeqdiametr_2 = [
    {
      name:'',
      value:'0.018'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 40*40*40*2, , ШТ "  ========//
 
 var kregeqdiametr_3 = [
    {
      name:'',
      value:'0.056'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 50*50*40*2, , ШТ "  ========//
 
 var kregeqdiametr_4 = [
    {
      name:'',
      value:'0.056'
    },
 ]
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 50*50*50*2, , ШТ "  ========//
 
 var kregeqdiametr_5 = [
    {
      name:'',
      value:'0.065'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 50*50*60*2, , ШТ "  ========//
 
 var kregeqdiametr_6 = [
    {
      name:'',
      value:'0.09'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 50*50*80*2, , ШТ "  ========//
 
 var kregeqdiametr_7 = [
    {
      name:'',
      value:'0.116'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 80*80*40*2, , ШТ "  ========//
 
 var kregeqdiametr_8 = [
    {
      name:'',
      value:'0.09'
    },
 ]
   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 80*80*40*2, , ШТ "  ========//
 
 var kregeqdiametr_9 = [
    {
      name:'',
      value:'0.13'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 80*80*80*2, , ШТ "  ========//
 
 var kregeqdiametr_10 = [
    {
      name:'',
      value:'0.166'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок 80*80*80*2, , ШТ "  ========//
 
 var kregeqdiametr_11 = [
    {
      name:'',
      value:'0.245'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок с анкерным отверстием 125*125*65*2 усиленный, , ШТ "  ========//
 
 var kregeqdiametr_12 = [
    {
      name:'',
      value:'0.35'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок с анкерным отверстием 50*50*40*2 усиленный, , ШТ "  ========//
 
 var kregeqdiametr_13 = [
    {
      name:'',
      value:'0.05'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок с анкерным отверстием 70*70*55*2 усиленный, , ШТ "  ========//
 
 var kregeqdiametr_14 = [
    {
      name:'',
      value:'0.121'
    },
 ]

      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежный уголок с анкерным отверстием 90*90*65*2 усиленный, , ШТ "  ========//
 
 var kregeqdiametr_15 = [
    {
      name:'',
      value:'0.145'
    },
 ]

      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса закрытая 100*76*50*2, , ШТ "  ========//
 
 var kregeqdiametr_16 = [
    {
      name:'',
      value:'0.282'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса закрытая 140*76*100*2, , ШТ "  ========//
 
 var kregeqdiametr_17 = [
    {
      name:'',
      value:'0.43'
    },
 ]
 
      //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса закрытая 140*76*50*2, , ШТ "  ========//
 
 var kregeqdiametr_18 = [
    {
      name:'',
      value:'0.334'
    },
 ]

       //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса открытая 100*76*50*2, , ШТ "  ========//
 
 var kregeqdiametr_19 = [
    {
      name:'',
      value:'0.282'
    },
 ]

        //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса открытая 140*76*100*2, , ШТ "  ========//
 
 var kregeqdiametr_20 = [
    {
      name:'',
      value:'0.409'
    },
 ]

        //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Опора бруса открытая 140*76*50*2, , ШТ "  ========//
 
 var kregeqdiametr_21 = [
    {
      name:'',
      value:'0.334'
    },
 ]
         //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина с анкерным отверстием 100*35*2, , ШТ "  ========//
 
 var kregeqdiametr_22 = [
    {
      name:'',
      value:'0.04'
    },
 ]

         //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина с анкерным отверстием 140*55*2, , ШТ "  ========//
 
 var kregeqdiametr_23 = [
    {
      name:'',
      value:'0.09'
    },
 ]

          //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина с анкерным отверстием 180*65*2, , ШТ "  ========//
 
 var kregeqdiametr_24 = [
    {
      name:'',
      value:'0.145'
    },
 ]
          //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина с анкерным отверстием 210*90*2, , ШТ "  ========//
 
 var kregeqdiametr_25 = [
    {
      name:'',
      value:'0.245'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина с анкерным отверстием 210*90*2, , ШТ "  ========//
 
 var kregeqdiametr_26 = [
    {
      name:'',
      value:'0.29'
    },
 ]
  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 100*240*2, , ШТ "  ========//
 
 var kregeqdiametr_27 = [
    {
      name:'',
      value:'0.35'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 100*300*2, , ШТ "  ========//
 
 var kregeqdiametr_28 = [
    {
      name:'',
      value:'0.4'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 100*400*2, , ШТ "  ========//
 
 var kregeqdiametr_29 = [
    {
      name:'',
      value:'0.58'
    },
 ]
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 40*120*2, , ШТ "  ========//
 
 var kregeqdiametr_30 = [
    {
      name:'',
      value:'0.07'
    },
 ]

//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 40*200*2, , ШТ "  ========//
 
 var kregeqdiametr_31 = [
    {
      name:'',
      value:'0.12'
    },
 ]
 
//======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 60*140*2, , ШТ "  ========//
 
 var kregeqdiametr_32 = [
    {
      name:'',
      value:'0.15'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 60*200*2, , ШТ "  ========//
 
 var kregeqdiametr_33 = [
    {
      name:'',
      value:'0.19'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 60*240*2, , ШТ "  ========//
 
 var kregeqdiametr_34 = [
    {
      name:'',
      value:'0.22'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 60*300*2, , ШТ "  ========//
 
 var kregeqdiametr_35 = [
    {
      name:'',
      value:'0.28'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 80*240*2, , ШТ "  ========//
 
 var kregeqdiametr_36 = [
    {
      name:'',
      value:'0.28'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Крепежная пластина 80*300*2, , ШТ "  ========//
 
 var kregeqdiametr_37 = [
    {
      name:'',
      value:'0.35'
    },
 ]

   //======== данные для выпадающих списков  "Стандарт", "Тип покрытия" и "Класс прочности" и т.д.  
//========для типа метиза "Хомуты" ========//

var homutstandart = [
    {
      name: 'Хомут червячный DIN 3017 10-16',
      val: 'Хомут червячный DIN 3017 10-16',
         coating:  [
          { 
           typecoating:'',
            klass:''
          },
         ],
        },   
        {
        name: 'Хомут червячный DIN 3017 12-20',
        val: 'Хомут червячный DIN 3017 12-20',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут червячный DIN 3017 16-25',
        val: 'Хомут червячный DIN 3017 16-25',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут червячный DIN 3017 20-32',
        val: 'Хомут червячный DIN 3017 20-32',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут червячный DIN 3017 25-40',
        val: 'Хомут червячный DIN 3017 25-40',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут червячный DIN 3017 32-50',
        val: 'Хомут червячный DIN 3017 32-50',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 40-60',
        val: 'Хомут червячный DIN 3017 40-60',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 50-70',
        val: 'Хомут червячный DIN 3017 50-70',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 60-80',
        val: 'Хомут червячный DIN 3017 60-80',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 70-90',
        val: 'Хомут червячный DIN 3017 70-90',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 8-12',
        val: 'Хомут червячный DIN 3017 8-12',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 80-100',
        val: 'Хомут червячный DIN 3017 80-100',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут червячный DIN 3017 90-110',
        val: 'Хомут червячный DIN 3017 90-110',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*100',
        val: 'Хомут-стяжка 3*100',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*101',
        val: 'Хомут-стяжка 3*101',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },

       {
        name: 'Хомут-стяжка 3*102',
        val: 'Хомут-стяжка 3*102',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*103',
        val: 'Хомут-стяжка 3*103',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*104',
        val: 'Хомут-стяжка 3*104',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*105',
        val: 'Хомут-стяжка 3*105',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут-стяжка 3*106',
        val: 'Хомут-стяжка 3*106',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       }, 
       {
        name: 'Хомут-стяжка 3*107',
        val: 'Хомут-стяжка 3*107',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*108',
        val: 'Хомут-стяжка 3*108',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },
       {
        name: 'Хомут-стяжка 3*109',
        val: 'Хомут-стяжка 3*109',
         coating:  [
          { 
           typecoating:'',
           klass:''
           },
         ],  
       },    
  ]   
       
   



        //======== дданные для выпадающего списка, "Длинна"  и т.д.   
//========для типа метиза "Хомуты" ========//

var homutlong1 = [
    {
     name:'',
     value:'' 
    },
]  

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 10-16 "  ========//
 
 var homutdiametr_1 = [
    {
      name:'',
      value:'0.012'
    },
 ]
 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 12-20 "  ========//
 
 var homutdiametr_2 = [
    {
      name:'',
      value:'0.013'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 16-25 "  ========//
 
 var homutdiametr_3 = [
    {
      name:'',
      value:'0.014'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 20-32 "  ========//
 
 var homutdiametr_4 = [
    {
      name:'',
      value:'0.015'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 25-40 "  ========//
 
 var homutdiametr_5 = [
    {
      name:'',
      value:'0.019'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 32-50 "  ========//
 
 var homutdiametr_6 = [
    {
      name:'',
      value:'0.02'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 40-60 "  ========//
 
 var homutdiametr_7 = [
    {
      name:'',
      value:'0.036'
    },
 ]
  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 50-70 "  ========//
 
 var homutdiametr_8 = [
    {
      name:'',
      value:'0.04'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 60-80 "  ========//
 
 var homutdiametr_9 = [
    {
      name:'',
      value:'0.04'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 70-90 "  ========//
 
 var homutdiametr_10 = [
    {
      name:'',
      value:'0.045'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 8-12 "  ========//
 
 var homutdiametr_11 = [
    {
      name:'',
      value:'0.01'
    },
 ]
    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 80-100 "  ========//
 
 var homutdiametr_12 = [
    {
      name:'',
      value:'0.05'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут червячный DIN 3017 90-110 "  ========//
 
 var homutdiametr_13 = [
    {
      name:'',
      value:'0.06'
    },
 ]

     //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*100 "  ========//
 
 var homutdiametr_14 = [
    {
      name:'',
      value:'0.00038'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*101 "  ========//
 
 var homutdiametr_15 = [
    {
      name:'',
      value:'0.00052'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*102 "  ========//
 
 var homutdiametr_16 = [
    {
      name:'',
      value:'0.0006'
    },
 ]

 //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*103 "  ========//
 
 var homutdiametr_17 = [
    {
      name:'',
      value:'0.00087'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*104 "  ========//
 
 var homutdiametr_18 = [
    {
      name:'',
      value:'0.0012'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*105 "  ========//
 
 var homutdiametr_19 = [
    {
      name:'',
      value:'0.00135'
    },
 ]

  //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*106 "  ========//
 
 var homutdiametr_20 = [
    {
      name:'',
      value:'0.0012'
    },
 ]

   //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*107 "  ========//
 
 var homutdiametr_21 = [
    {
      name:'',
      value:'0.0019'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*108 "  ========//
 
 var homutdiametr_22 = [
    {
      name:'',
      value:'0.00205'
    },
 ]

    //======== данные для выпадающего списка, "Диаметр"  и т.д.  
 //========для типа метиза "Хомут-стяжка 3*109 "  ========//
 
 var homutdiametr_23 = [
    {
      name:'',
      value:'0.0027'
    },
 ]