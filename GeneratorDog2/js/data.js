// Категория кличек собак//

var categories = [
    {
        name: ' Простые и ласковые',
          val: 'Simple'

     },
    {
        name: 'Короткие и благозвучные со смыслом',
        val: 'Short'
    },
    {
        name: 'Благородные для крупных сильных собак',
        val: 'Noble'
    },
	 {
        name: 'По окрасу',
        val: 'Okras'
    },
	{
        name: 'Старославянские',
        val: 'Slavonic'
    },
	{
        name: 'Немецкие',
        val: 'German'
    },
	{
        name: 'Английские и американские',
        val: 'English'
    },
	{
        name: 'Японские',
        val: 'Japanese'
    }
];

// Пол для  кличек собак//

var gender = [
    {
        name: 'Девочка',
          val: 'd'

     },
    {
        name: 'Мальчик',
        val: 'm'
    }
   
];

// Клички собак Простые и ласковые Девочка  //

var Simpled = [
    {
        name: 'Люша'
     },
    {
        name: 'Кроха'
    },
	{
        name: 'Буся'
    },
	{
        name: 'Лялька'
    },
	{
        name: 'Плюшка '
    },
	{
        name: 'Груня '
    },
	{
        name: 'Буля '
    },
	{
        name: 'Зайка '
    },
	{
        name: 'Пулька '
    },
	{
        name: 'Лапа'
    },
	{
        name: 'Ёлка'
    },
	{
        name: 'Фрося'
    },
	{
        name: 'Ласка'
    },
	{
        name: 'Дуся'
    },
	{
        name: 'Кнопка'
    },
	{
        name: 'Барби'
    },
	{
        name: 'Пчёлка'
    },
	{
        name: 'Юла'
    },
	{
        name: 'Тиша '
    },
	{
        name: 'Няша '
    },
	{
        name: 'Туся'
    },
	{
        name: 'Шпуля'
    },
	{
        name: 'Клёпа'
    },
	{
        name: 'Душка'
    },
	{
        name: 'Милка'
    },
	{
        name: 'Триша'
    }
   
];

      // Клички собак Простые и ласковые Мальчики  //
var Simplem = [
    {
        name: 'Смайлик'
     },
    {
        name: 'Крош'
    },
	{
        name: 'Чудик'
    },
	{
        name: 'Хуч'
    },
	{
        name: 'Малыш'
    },
	{
        name: 'Лучик '
    },
	{
        name: 'Бутуз '
    },
	{
        name: 'Лунтик '
    },
	{
        name: 'Пупсик '
    },
	{
        name: 'Кнопыш'
    },
	{
        name: 'Филя'
    },
	{
        name: 'Шпунтик'
    },
	{
        name: 'Буч'
    },
	{
        name: 'Дружок'
    },
	{
        name: 'Бублик'
    },
	{
        name: 'Тима'
    },
	{
        name: 'Пухлик'
    },
	{
        name: 'Кузя'
    },
	{
        name: 'Пушок '
    },
	{
        name: 'Ёршик'
    },
	{
        name: 'Плюш'
    },
	{
        name: 'Пончик'
    },
	{
        name: 'Крендель'
    },
	{
        name: 'Живчик'
    },
	{
        name: 'Емеля'
    },
	{
        name: 'Шило'
    },
	{
        name: 'Тоша'
    },
	{
        name: 'Гудок'
    },
	{
        name: 'Шмель'
    },
	{
        name: 'Мажор'
    },
	{
        name: 'Жук'
    },
	{
        name: 'Мамай'
    }
   
];
    
     // Клички собак Короткие и благозвучные со смыслом Девочка //
var Shortd = [
    {
        name: 'Тутси – надёжная (лат.)'
     },
    {
        name: 'Бэмби – маленькая девочка (ит.)'
    },
	{
        name: 'Фанни – решительная (лат.)'
    },
	{
        name: 'Бонни – привлекательная (англ.)'
    },
	{
        name: 'Анфиса – цветок (греч.)'
    },
	{
        name: 'Айя – чудесная (араб.) '
    },
	{
        name: 'Гайда – изящная (араб.) '
    },
	{
        name: 'Грейси – грация (англ.) '
    },
	{
        name: 'Джесси – богатая (евр.) '
    },
	{
        name: 'Дея – божественная (лат.)'
    },
	{
        name: 'Белла – красавица (лат.)'
    },
	{
        name: 'Астра – звезда (греч.)'
    },
	{
        name: 'Флора – богиня весны (римск.)'
    },
	{
        name: 'Дора – дарованная (греч.)',
        val: '14'
    },
	{
        name: 'Ханна – добрая (фин.)'
    },
	{
        name: 'Ума – лен (инд.)'
    },
	{
        name: 'Беата – благословенная (лат.)'
    },
	{
        name: 'Ингрид – прекрасная (сканд.)'
    },
	{
        name: 'Сильва – лесная (лат.) '
    },
	{
        name: 'Синди – лунный свет (лат.)'
    },
	{
        name: 'Феона – божественная (греч.)'
    },
	{
        name: 'Юна – молодая, юная (лат.)'
    },
	{
        name: 'Моника – единственная (греч.)'
    },
	{
        name: 'Шани – замечательная (егип.)'
    },
	{
        name: 'Варда – цветок (ассир.)'
    },
	{
        name: 'Вега – девушка (болгар.)'
    },
	{
        name: 'Эсти – звезда (франц.)'
    },
	{
        name: 'Полли – маленькая (франц.)'
    },
	{
        name: 'Элис – истина (греч.)'
    },
	{
        name: 'Айна – единственная (фин.)'
    },
	{
        name: 'Пенни – игла и шпулька (англ.)'
    }
];

// Клички собак Короткие и благозвучные со смыслом Мальчики //
var Shortm = [
    {
        name: 'Саймон – слушающий (греч.)'
    },
    {
        name: 'Бадди – друг (англ.)'
    },
    {
        name: 'Робби – известный (англ.)'
    },
    {
        name: 'Арчи – отважный (англ.)'
    },
    {
        name: 'Марик – оберегающий море (греч.)'
    },
    {
        name: 'Мило – польза, изящество (римск.)'
    },
    {
        name: 'Вито – оживлённый (исп.)'
    },
    {
        name: 'Айко – благочестивый (афр.)'
    },
    {
        name: 'Ланс – земля (франц.) '
    },
    {
        name: 'Алтай – золотоносный (татар.)'
    },
    {
        name: 'Патрик – дворянин (чеш.)'
    },
    {
        name: 'Таффи – любимый (уэльс.)'
    },
    {
        name: 'Фило – милый, дорогой (греч.)'
    },
    {
        name: 'Марсель – парус (нидер.)'
    },
    {
        name: 'Пафос – воодушевление (греч.)'
    },
    {
        name: 'Игнат – полный огня (лат.)'
    },
    {
        name: 'Алэр – радостный, счастливый (лат.)'
    },
    {
        name: 'Ролло – знаменитый волк (римс.)'
    },
    {
        name: 'Веспер – вечерняя звезда (эсперанто)'
    },
    {
        name: 'Пантер – барс (греч.)'
    },
    {
        name: 'Кларус – ясный, светлый (лат.)'
    },
    {
        name: 'Хьюго – разум, сердце, дух (англ.)'
    },
    {
        name: 'Эфир – лёгкий, воздушный (греч.)'
    },
    {
        name: 'Хилэр – радостный (франц.)'
    },
    {
        name: 'Эрвин – почитающий друга (нем.)'
    },
    {
        name: 'Кевин – миловидный, любимый (англ.)'
    },
    {
        name: 'Мэтти – подарок бога (англ.)'
    },
    {
        name: 'Пако – свободный (исп.)'
    },
    {
        name: 'Анджи – ангельский (греч.)'
    }
];

// Клички собак Благородные для крупных сильных собак Девочка //
var Nobled = [
    {
        name: 'Рони – приносящая победу (англ.)'
    },
    {
        name: 'Юста – справедливая (лат.)'
    },
    {
        name: 'Ирма – сильная, твёрдая (сканд.)'
    },
    {
        name: 'Прима – всегда первая (лат.)'
    },
    {
        name: 'Афина – богиня мудрости (греч.)'
    },
    {
        name: 'Гера – госпожа (греч.) '
    },
    {
        name: 'Герда – стойкая (сканд.) '
    },
    {
        name: 'Вита – жизнь (лат.) '
    },
    {
        name: 'Миа – своенравная (сканд.) '
    },
    {
        name: 'Вея – надёжная, крепкая (греч.)'
    },
    {
        name: 'Тайра – дочь бога грома и молнии (сканд.)'
    },
    {
        name: 'Диана – богиня охоты (греч.)'
    },
    {
        name: 'Лайна – волна (фин.)'
    },
    {
        name: 'Карла – мужественная (нем.)'
    },
    {
        name: 'Матрёна – почтенная (лат.)'
    },
    {
        name: 'Глори – слава (англ.)'
    },
    {
        name: 'Виса – сильная (лат.)'
    },
    {
        name: 'Донна – леди (англ.)'
    },
    {
        name: 'Чара – счастье (греч.)'
    },
    {
        name: 'Гея – богиня Земли (греч.)'
    },
    {
        name: 'Стеффи – царица (греч.)'
    },
    {
        name: 'Тики – надёжная (евр.)'
    },
    {
        name: 'Вива – деятельная (лат.)'
    },
    {
        name: 'Руна – секретное знание'
    },
    {
        name: 'Ника – богиня победы (греч.)'
    },
    {
        name: 'Домна – госпожа (лат.)'
    },
    {
        name: 'Айша – живущая (араб.)'
    },
    {
        name: 'Дайна – справедливая (евр.)'
    },
    {
        name: 'Минни – шлем (нем.)'
    }

];

// Клички собак Благородные для крупных сильных собак Мальчики //
var Noblem = [
    {
        name: 'Рей – мудрый защитник (англ.)'
    },
    {
        name: 'Сэм – слушающий Бога (англ.)'
    },
    {
        name: 'Алонсо – благородный, храбрый (исп.)'
    },
    {
        name: 'Барни – смелый как медведь (англ.)'
    },
    {
        name: 'Банди – воин (венг.)'
    },
    {
        name: 'Арно – господствовать (франц.)'
    },
    {
        name: 'Лекс – защитник людей (англ.)'
    },
    {
        name: 'Маркус – воинственный (рим.)'
    },
    {
        name: 'Борей – северный ветер (греч.)'
    },
    {
        name: 'Антей – вступающий в бой (греч.)'
    },
    {
        name: 'Брайен – сила (англ.)'
    },
    {
        name: 'Стоян – воинственный (греч.)'
    },
    {
        name: 'Хуффи – мирный гигант (англ.)'
    },
    {
        name: 'Ральф – мудрый волк (сканд.)'
    },
    {
        name: 'Ханлей – чемпион (ирл.)'
    },
    {
        name: 'Роджер – знаменитый копьеносец (нем.)'
    },
    {
        name: 'Рико – мощный, храбрый (исп.)'
    },
    {
        name: 'Шон – добрый бог (ирл.)'
    },
    {
        name: 'Микки – подобный Богу (англ.)'
    },
    {
        name: 'Перс – скала (англ.)'
    },
    {
        name: 'Базиль – король (франц.)'
    },
    {
        name: 'Кейси – бдительный (англ.)'
    },
    {
        name: 'Вик – завоеватель, победа (лат.)'
    },
    {
        name: 'Хартвин – выносливый друг (нем.)'
    },
    {
        name: 'Север – суровый, строгий (франц.)'
    },
    {
        name: 'Айс – лёд (англ.)'
    },
    {
        name: 'Рокки – скала (англ.)'
    },
    {
        name: 'Стэнли – камень (англ.)'
    }
];

// Клички собак По окрасу Девочка //
var Okrasd = [
    {
        name: 'Альба – светлая (итал.) '
    },
    {
        name: 'Блэки – чёрная (англ.) '
    },
    {
        name: 'Фокси – лисичка, рыжая  (англ.)'
    },
    {
        name: 'Дымка '
    },
    {
        name: 'Бьянка – белокурая (лат.)'
    },
    {
        name: 'Дарки – тёмная (англ.)'
    },
    {
        name: 'Голди – золотая (англ.)'
    },
    {
        name: 'Джен – белая и гладкая (англ.)'
    },
    {
        name: 'Джетта – угольная, чёрная (англ.)'
    },
    {
        name: 'Бланка – белая (исп.)'
    },
    {
        name: 'Нуара – чёрная (франц.)'
    },
    {
        name: 'Нэкка – яркое пламя (яп.)'
    },
    {
        name: 'Бруна – коричневая (нем.)'
    },
    {
        name: 'Юки – снег (яп.) '
    },
    {
        name: 'Лейла –  ночь, темнота (перс.)'
    },
    {
        name: 'Злата – богиня Зари (слав.)'
    },
    {
        name: 'Рыжуля'
    },
    {
        name: 'Шинджу – жемчужина (яп.)'
    },
    {
        name: 'Шедоу – тень, полумрак, загадка (англ.)'
    },
    {
        name: 'Руби – рубиновая (англ.) '
    },
    {
        name: 'Мэгги – жемчуг (англ.) '
    },
    {
        name: 'Маккура – полная темнота (яп.)'
    },
    {
        name: 'Лили – белый цветок (гальс.)'
    },
    {
        name: 'Зилла – тень (евр.) '
    },
    {
        name: 'Раска – светлая (слав.)'
    },
    {
        name: 'Блонди'
    },
    {
        name: 'Каштанка'
    },
    {
        name: 'Зефирка'
    },
    {
        name: 'Лисичка'
    },
    {
        name: 'Снежка'
    },
    {
        name: 'Ночка'
    },
    {
        name: 'Белка'
    },
    {
        name: 'Вакса'
    },
    {
        name: 'Яшма'
    },
    {
        name: 'Клякса'
    },
    {
        name: 'Охра'
    }

];

// Клички собак По окрасу Мальчики //
var Okrasm = [
    {
        name: 'Моррис – темный, мавр (франц.)'
    },
    {
        name: 'Альпин – белый (англ.)'
    },
    {
        name: 'Санни – солнечный (англ.)'
    },
    {
        name: 'Ред – рыжий (англ.) '
    },
    {
        name: 'Умка – белый медвежонок из мультика'
    },
    {
        name: 'Шарый – серый (польск.)'
    },
    {
        name: 'Редберд – рыжая борода (англ.)'
    },
    {
        name: 'Нерон – чёрный (лат.)'
    },
    {
        name: 'Норд – северный'
    },
    {
        name: 'Норрис – северянин (англ.)'
    },
    {
        name: 'Норберт – северное сияние (англ.)'
    },
    {
        name: 'Маккуро – чёрный как смоль (яп.)'
    },
    {
        name: 'Грей – серый (англ.)'
    },
    {
        name: 'Блэк – чёрный (англ.)'
    },
    {
        name: 'Акай – красный (яп.)'
    },
    {
        name: 'Лайт – светлый (англ.)'
    },
    {
        name: 'Руфус – рыжеволосый (римск.)'
    },
    {
        name: 'Бруно – коричневый (нем.)'
    },
    {
        name: 'Ворон'
    },
    {
        name: 'Корбл – ворон (нем.) '
    },
    {
        name: 'Нуар – чёрный (фр.)'
    },
    {
        name: 'Марон – коричневый (франц.) '
    },
    {
        name: ' Алмаз'
    },
    {
        name: 'Смоки – дымчатый (англ.)'
    },
    {
        name: 'Шварц – черный (идиш)'
    },
    {
        name: 'Фокс – лиса (англ.)'
    },
    {
        name: 'Снежок'
    },
    {
        name: 'Мелок'
    },
    {
        name: 'Грач'
    },
    {
        name: 'Кефир'
    },
    {
        name: 'Арлекин'
    },
    {
        name: 'Домино'
    },
    {
        name: ' Кокос'
    },
    {
        name: 'Оникс'
    },
    {
        name: 'Янтарик'
    },
    {
        name: 'Черныш'
    },
	 {
        name: 'Рыжик'
    },
	 {
        name: 'Север'
    },
	 {
        name: 'Лис'
    },
	 {
        name: 'Дымок'
    },
	 {
        name: 'Ландыш'
    },
	 {
        name: 'Лео'
    },
	 {
        name: 'Персик'
    },
	 {
        name: 'Мокко'
    },
	 {
        name: 'Мавр'
    },
	 {
        name: 'Снежок'
    },
	 {
        name: 'Кокос'
    }
];

// Клички собак Старославянские Девочка //
var Slavonicd = [
    {
        name: 'Луша – холеная'
    },
    {
        name: 'Млада – младшая, маленькая'
    },
    {
        name: 'Чара – чарующая, волшебная'
    },
    {
        name: 'Ждана – долгожданная'
    },
    {
        name: 'Ясна – ясная'
    },
    {
        name: 'Дана – данная миру'
    },
    {
        name: 'Дарена – подаренная '
    },
    {
        name: 'Лепа – хорошая'
    },
    {
        name: 'Забава – смешная'
    },
    {
        name: 'Веста – известие'
    },
    {
        name: 'Лада – богиня любви и семьи'
    },
    {
        name: 'Ляля – богиня весны, дочь Лады'
    },
    {
        name: 'Доля – удачливая'
    },
    {
        name: 'Иста – истинная'
    },
    {
        name: 'Звана – званная'
    },
    {
        name: 'Жива – богиня жизненной силы'
    },
    {
        name: 'Мира – мирная, ладная'
    },
    {
        name: 'Власта – властная'
    },
    {
        name: 'Волга – вольная'
    },
    {
        name: 'Рада – весёлая, радостная'
    },
    {
        name: 'Лана – поле, плодородная'
    },
    {
        name: 'Веда – ведающая'
    },
    {
        name: 'Заря – восходящий свет'
    },
    {
        name: 'Надея – надежда'
    },
    {
        name: 'Мила – милая'
    },
    {
        name: 'Айка – козочка'
    },
    {
        name: 'Друда – жрица леса'
    },
    {
        name: 'Малуша – маленькая'
    },
    {
        name: 'Раска – светлая'
    },
    {
        name: 'Сола – солнечная'
    },
    {
        name: 'Стана – стойкая'
    },
    {
        name: 'Фатта – лунная'
    },
    {
        name: 'Ярка – яркая'
    },
    {
        name: 'Яра – сильная, отважная'
    },
    {
        name: 'Ягла – быстрая, живая'
    },
    {
        name: 'Неждана – нежданная'
    }

];

// Клички собак Старославянские Мальчики //
var Slavonicm = [
    {
        name: 'Жиган – озорник'
    },
    {
        name: 'Горыня – громадный, несокрушимый '
    },
    {
        name: 'Милан – милый'
    },
    {
        name: 'Ждан – долгожданный'
    },
    {
        name: 'Стоян – крепкий, несгибаемый'
    },
    {
        name: 'Чеслав – славный честью'
    },
    {
        name: 'Трезор – от слова тревзор –  ясновидящий'
    },
    {
        name: 'Добрыня – добродушный'
    },
    {
        name: 'Данко – светящий'
    },
    {
        name: 'Деян – деятельный, активный'
    },
    {
        name: 'Боян – боец'
    },
    {
        name: 'Всемил – всем милый'
    },
    {
        name: 'Желан – желанный'
    },
    {
        name: 'Дан – дан Богом'
    },
    {
        name: 'Добран – добро дающий'
    },
    {
        name: 'Любим – любимый'
    },
    {
        name: 'Могута – мощный'
    },
    {
        name: 'Найден – найденный'
    },
    {
        name: 'Млад – молодой'
    },
    {
        name: 'Прекрас – прекрасный'
    },
    {
        name: 'Младен – молодой'
    },
    {
        name: 'Радей – радостный'
    },
    {
        name: 'Ратибор – избранный воин'
    },
    {
        name: 'Ратмир – ратующий о мире'
    },
    {
        name: 'Умир – умиротворение, мир'
    },
    {
        name: 'Хват – хваткий'
    },
    {
        name: 'Умил – умильный'
    },
    {
        name: 'Ярко – яркий'
    },
    {
        name: 'Алий – алый'
    },
    {
        name: 'Милава – милый, добрый'
    },
    {
        name: 'Услад – услада'
    },
    {
        name: 'Руслав – русый'
    },
    {
        name: 'Траян – третий сын'
    },
    {
        name: 'Неждан – нежданный'
    },
    {
        name: 'Фрол – цветущий'
    }
    
];

// Клички собак Немецкие Девочка //
var Germand = [
    {
        name: 'Альма – благодатная'
    },
    {
        name: 'Грета – жемчужина'
    },
    {
        name: 'Адель – благородная'
    },
    {
        name: 'Мальва – нежная, хрупкая'
    },
    {
        name: 'Велма – трудолюбивая'
    },
    {
        name: 'Матильда – опасная красота'
    },
    {
        name: 'Фрида – мирная, спокойная'
    },
    {
        name: 'Штеффи – коронованная'
    },
    {
        name: 'Линда – мягкая, кроткая'
    },
    {
        name: 'Хейди – благородная'
    },
    {
        name: 'Фредди – мирная правительница'
    },
    {
        name: 'Берта – светлая, яркая'
    },
    {
        name: 'Карла – мужественная'
    },
    {
        name: 'Жизель – стрела'
    },
    {
        name: 'Хельма – шлем, защитница'
    },
    {
        name: 'Селма – защитница бога'
    },
    {
        name: 'Вилда – дикая'
    },
    {
        name: 'Вите – жизнь'
    },
    {
        name: 'Зельда – серая красавица'
    },
    {
        name: 'Фрок – маленькая леди'
    },
    {
        name: 'Элфи – сила эльфов'
    },
    {
        name: 'Лора – лавр'
    },
    {
        name: 'Ида – трудолюбивая'
    },
    {
        name: 'Минни – шлем'
    },
    {
        name: 'Бинди – красивая змея'
    },
    {
        name: 'Джиса – залог'
    },
    {
        name: 'Ирма – сильная'
    },
    {
        name: 'Клара – ясная, светлая'
    },
    {
        name: 'Верена – священная мудрость'
    },
    {
        name: 'Хильда – участвующий в битве'
    }
  ];

// Клички собак Немецкие Мальчики //
var Germanm = [
    {
        name: 'Астор – ястреб '
    },
    {
        name: 'Хейко – домашний правитель'
    },
    {
        name: 'Конрад – отважный'
    },
    {
        name: 'Арне – орел'
    },
    {
        name: 'Рудольф – славный волк, сильный вожак'
    },
    {
        name: 'Колман – голубь'
    },
    {
        name: 'Оскар – божье копье'
    },
    {
        name: 'Фалко – племя'
    },
    {
        name: 'Кайзер – царь'
    },
    {
        name: 'Ханк – добрый бог'
    },
    {
        name: 'Карл – смелый'
    },
    {
        name: 'Фестер – из леса'
    },
    {
        name: 'Харман – смелый, выносливый'
    },
    {
        name: 'Хартвин – выносливый друг'
    },
    {
        name: 'Корбл – ворон'
    },
    {
        name: 'Фило – любить'
    },
    {
        name: 'Фредж – лорд'
    },
    {
        name: 'Бруно – коричневый'
    },
    {
        name: 'Лотар – народный воин'
    },
    {
        name: 'Вернер – находчивый защитник'
    },
    {
        name: 'Велтен – здоровый, сильный'
    },
    {
        name: 'Матис – подарок бога'
    },
    {
        name: 'Мартин – с Марса'
    },
    {
        name: 'Витольд – правитель леса'
    },
    {
        name: 'Мориц – темнокожий, мавр'
    },
    {
        name: 'Норберт – северный свет, северное сияние'
    },
    {
        name: 'Волдо – правило'
    },
    {
        name: 'Вольф – волк'
    },
    {
        name: 'Гастон – гость'
    },
    {
        name: 'Ортвин – друг'
    },
	{
        name: 'Эгмонт – защитник'
    },
	{
        name: 'Полди – смелый'
    },
	{
        name: 'Эрвин – почитающий друга'
    },
	{
        name: 'Джерд – цитадель'
    }	
  ];

// Клички собак Английские и американские Девочка //
var Englishd = [
    {
        name: 'Рокси – рассвет'
    },
    {
        name: 'Милли – служительница'
    },
    {
        name: 'Китти – чистая душа'
    },
    {
        name: 'Баффи – бог – моя присяга'
    },
    {
        name: 'Молли – возлюбленная'
    },
    {
        name: 'Дона – леди'
    },
    {
        name: 'Черри – любимая'
    },
    {
        name: 'Эбби – радующая отца'
    },
    {
        name: 'Глори – слава'
    },
    {
        name: 'Ронда – шумная'
    },
    {
        name: 'Челси – порт'
    },
    {
        name: 'Патти – дворянка'
    },
    {
        name: 'Лаки – удачливая'
    },
    {
        name: 'Пеппи – жизнерадостная'
    },
    {
        name: 'Долли – подарок бога'
    },
    {
        name: 'Салли – принцесса'
    },
    {
        name: 'Юта – эффектная'
    },
    {
        name: 'Мэгги – жемчуг'
    },
    {
        name: 'Конни – верная, устойчивая'
    },
    {
        name: 'Кара – подруга '
    },
    {
        name: 'Джен – белая и гладкая'
    },
    {
        name: 'Лекси – защитница'
    },
    {
        name: 'Ами – очень любимая'
    },
    {
        name: 'Брина – сила'
    },
    {
        name: 'Веда – мудрость'
    },
    {
        name: 'Венди – подруга'
    },
    {
        name: 'Далки – сладкая'
    },
    {
        name: 'Делис – восхительная'
    },
    {
        name: 'Джасти – ярмарка'
    },
    {
        name: 'Джетта – угольная, чёрная'
    },
	{
        name: 'Молли – любимая'
    },
	{
        name: 'Джилли – молодёжь'
    },
	{
        name: 'Пегги – жемчуг'
    },
	{
        name: 'Рути – дружба'
    },
	{
        name: 'Флика – удачливая'
    }	
  ];


// Клички собак Английские и американские Мальчики //
var Englishm = [
    {
        name: 'Джой – радость'
    },
    {
        name: 'Свитти – сладкий'
    },
    {
        name: 'Ричи – мощный, храбрый'
    },
    {
        name: 'Бакстер – пекарь'
    },
    {
        name: 'Смайл – улыбка'
    },
    {
        name: 'Лаки – счастливчик'
    },
    {
        name: 'Брэйви – смелый'
    },
    {
        name: 'Даймонд – защитник'
    },
    {
        name: 'Арчи – отважный'
    },
    {
        name: 'Арни – власть орла'
    },
    {
        name: 'Найс – красивый, славный'
    },
    {
        name: 'Купер – контейнер'
    },
    {
        name: 'Дейзи – маргаритка'
    },
    {
        name: 'Хьюго – сердце, разум, дух'
    },
    {
        name: 'Чарли – мужественный'
    },
    {
        name: 'Гейлорд – денди'
    },
    {
        name: 'Дейви - любимый'
    },
    {
        name: 'Норрис – северянин'
    },
    {
        name: 'Перс – скала, камень'
    },
    {
        name: 'Хуффи – мирный гигант'
    },
    {
        name: 'Этан – сильный'
    },
    {
        name: 'Джес – подарок'
    },
    {
        name: 'Кэмп – чемпион'
    },
    {
        name: 'Рон – мудрый'
    },
    {
        name: 'Джим – захватчик'
    },
    {
        name: 'Дастин – камень Тора'
    },
    {
        name: 'Моррис – темнокожий, мавр'
    },
    {
        name: 'Мэйсон – каменный рабочий'
    },
    {
        name: 'Роб – известный'
    },
    {
        name: 'Альпин – белый'
    },
	{
        name: 'Дикки – мощный храбрый'
    },
	{
        name: 'Фродо – мудрый'
    }
];

// Клички собак Японские Девочка //
var Japanesed = [
    {
        name: 'Поти – собачка'
    },
    {
        name: 'Айка – элегия'
    },
    {
        name: 'Кейко – счастливая '
    },
    {
        name: 'Таки – новинка'
    },
    {
        name: 'Юмэ – сон, мечта'
    },
    {
        name: 'Юми – полезная красота'
    },
    {
        name: 'Эйти – мудрость, ум'
    },
    {
        name: 'Симми – свежесть, новизна'
    },
    {
        name: 'Наоми – прежде всего красота'
    },
    {
        name: 'Хана – цветок или фаворит'
    },
    {
        name: 'Тайра – спокойствие'
    },
    {
        name: 'Сэйби – совершенная красота'
    },
    {
        name: 'Рики – исключительный талант'
    },
    {
        name: 'Айбу – ласка'
    },
    {
        name: 'Гати – вкус, изящество'
    },
    {
        name: 'Нэкка – яркое пламя'
    },
    {
        name: 'Нэя – девушка'
    },
    {
        name: 'Ики – очарование'
    },
    {
        name: 'Онга – изящная, грациозная'
    },
    {
        name: 'Ниджи – радуга'
    },
    {
        name: 'Шинджу – жемчужина'
    },
    {
        name: 'Дайка – дорогая, «ваша светлость»'
    },
    {
        name: 'Юки – снег'
    },
    {
        name: 'Йоко – уверенный ребёнок'
    },
    {
        name: 'Чика – мудрость'
    },
    {
        name: 'Маккура – полная темнота'
    },
    {
        name: 'Сату – сладкая'
    },
    {
        name: 'Акина – цветок весны'
    },
    {
        name: 'Тануки – хитрая лиса'
    },
    {
        name: 'Митико – дитя красоты'
    }	
  ];

// Клички собак Японские Мальчики //
var Japanesem = [
    {
        name: 'Пэтто – любимец, баловень'
    },
    {
        name: 'Айбу – ласка'
    },
    {
        name: 'Рай – гром'
    },
    {
        name: 'Пин – номер первый'
    },
    {
        name: 'Сатой – умный'
    },
    {
        name: 'Симбо – доверие'
    },
    {
        name: 'Ранки – горный туман'
    },
    {
        name: 'Рин – звонок, колокольчик'
    },
    {
        name: 'Поти – собачка'
    },
    {
        name: 'Рико – умный'
    },
    {
        name: 'Кай – загадочность, чудо'
    },
    {
        name: 'Кандай – великодушие'
    },
    {
        name: 'Нэкки – пыл, рвение'
    },
    {
        name: 'Акай – красный'
    },
    {
        name: 'Юки –снег'
    },
    {
        name: 'Рико – ребёнок жасмина'
    },
    {
        name: 'Широ – белоснежный'
    },
    {
        name: 'Йошико – благородный ребёнок'
    },
    {
        name: 'Така – благородного происхождения'
    },
    {
        name: 'Никко – солнечный '
    },
    {
        name: 'Синко – верный'
    },
    {
        name: 'Анто – остров спокойствия'
    },
    {
        name: 'Мачико – счастливчик'
    },
    {
        name: 'Кумико – красивый, долгожитель'
    },
    {
        name: 'Сэйби – совершенная красота'
    },
    {
        name: 'Кури – каштановый'
    },
    {
        name: 'Нихон – японский'
    },
    {
        name: 'Сайтоку – талантливый'
    },
    {
        name: 'Тайдо – великодушие'
    },
    {
        name: 'Томо – друг'
    },
	{
        name: 'Юнару – самый лучший'
    }
	
  ];



