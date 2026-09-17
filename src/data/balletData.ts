import { Course, TimetableSlot, Teacher, PricingPlan, FaqItem } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'predbalet',
    title: 'Predbalet & Tanečná prípravka',
    subtitle: 'Prvé kroky k ladnosti a zdravému držaniu tela',
    category: 'kids',
    ageRange: '4 – 6 rokov',
    level: 'Začiatočníci',
    description: 'Hravá forma rozvoja koordinácie, rytmiky a prirodzenej flexibility s dôrazom na správne formovanie chrbtice a klenby chodidiel.',
    detailedInfo: {
      focus: [
        'Základy rytmického a priestorového vnímania',
        'Spevňovanie stredu tela hravou rozprávkovou formou',
        'Základné pozície rúk (port de bras) a nôh',
        'Korektné postavenie tela s fyzioterapeutickým dohľadom'
      ],
      attire: 'Bavlnený trikot pastelovej farby, mäkké kožené alebo plátené piškóty (demi-pointes), vlasy upravené do baletného drdolu.',
      scheduleSummary: '2× týždenne po 45 minút',
      duration: '45 minút',
      capacity: 'Maximálne 10 detí v skupine'
    },
    highlight: 'Najobľúbenejší detský kurz'
  },
  {
    id: 'klasicky-balet-deti',
    title: 'Klasický Balet I & II',
    subtitle: 'Systematická výučba metodiky Agrippiny Vaganovovej',
    category: 'kids',
    ageRange: '7 – 11 rokov',
    level: 'Začiatočníci až mierne pokročilí',
    description: 'Dôsledná práca pri baletnej tyči (à la barre) a na voľnosti (au milieu). Výučba estetiky línií, čistoty skokov (petit allegro) a muzikality.',
    detailedInfo: {
      focus: [
        'Precízna technika plié, tendu, jeté a rond de jambe',
        'Rozvoj stability a rovnováhy na jednej nohe',
        'Prvé skokové variácie a rotácie (pirouettes príprava)',
        'Klasický klavírny sprievod na každej hodine'
      ],
      attire: 'Jednofarebný baletný dres, baletné pančuchy v telovej farbe, plátené piškóty s gumičkami.',
      scheduleSummary: '2× až 3× týždenne po 60 minút',
      duration: '60 minút',
      capacity: 'Maximálne 12 žiakov'
    }
  },
  {
    id: 'junior-repertoar',
    title: 'Mládež & Scénický Repertoár',
    subtitle: 'Umelecký výraz a technická náročnosť',
    category: 'teens',
    ageRange: '12 – 17 rokov',
    level: 'Stredne pokročilí / Pokročilí',
    description: 'Prehĺbenie klasickej techniky, práca na baletných špičkách (sur les pointes) pre pripravené tanečnice a štúdium variácií zo svetových baletov.',
    detailedInfo: {
      focus: [
        'Pokročilá práca na špičkách (pointes) s ohľadom na bezpečnosť členkov',
        'Variácie z baletov Luskáčik, Spiaca krásavica a Don Quijote',
        'Rozvoj dynamiky, rotácií (fouetté, piqué tours)',
        'Príprava na konzervatóriá a javiskové vystúpenia'
      ],
      attire: 'Čierny dres, baletné pančuchy, delené piškóty, baletné špičky (po schválení pedagógom).',
      scheduleSummary: '3× týždenne po 75 minút',
      duration: '75 minút',
      capacity: '10 študentov'
    },
    highlight: 'Účasť na záverečnom galavečere'
  },
  {
    id: 'dospeli-zaciatocnici',
    title: 'Balet pre Dospelých – Začiatočníci',
    subtitle: 'Nikdy nie je neskoro splniť si detský sen',
    category: 'adults',
    ageRange: 'Od 18 do 70+ rokov',
    level: 'Úplní začiatočníci',
    description: 'Žiadne predchádzajúce tanečné skúsenosti nie sú potrebné. Kurz zameraný na eleganciu, posilnenie hlbokého stabilizačného systému a uvoľnenie mysle.',
    detailedInfo: {
      focus: [
        'Základné princípy baletného postavenia tela a dýchania',
        'Tyč (barre) zameraná na spevnenie chrbta, sedacích svalov a nôh',
        'Zlepšenie celkovej flexibility a rovnováhy',
        'Príjemná, nesúťaživá a rešpektujúca atmosféra'
      ],
      attire: 'Pohodlné elastické oblečenie (legíny, priliehavé tričko alebo dres), bavlnené ponožky alebo baletné piškóty.',
      scheduleSummary: 'Otvorené lekcie (Open Class) + ucelený semestrálny kurz',
      duration: '60 minút',
      capacity: 'Maximálne 14 osôb'
    },
    highlight: 'Vhodné bez akejkoľvek predošlej prípravy'
  },
  {
    id: 'dospeli-pokrocili',
    title: 'Balet pre Dospelých – Pokročilí & Repertoár',
    subtitle: 'Pokračujúca vášeň a zložitejšie choreografie',
    category: 'adults',
    ageRange: 'Dospelí',
    level: 'Stredne pokročilí a pokročilí',
    description: 'Pre tých, ktorí sa baletu venujú dlhšie alebo sa k nemu vracajú po rokoch. Dynamické adagio, allegro v priestore a štúdium neoklasických kombinácií.',
    detailedInfo: {
      focus: [
        'Rýchle tempo kombinácií pri tyči i v priestore',
        'Technika veľkých skokov (grand jeté) a viacnásobných piruet',
        'Voliteľný tréning na špičkách v závere hodiny',
        'Kombinácia klasického dedičstva s prvkami neoklasiky'
      ],
      attire: 'Tanečný úbor podľa vlastného uváženia, piškóty, špičky voliteľné.',
      scheduleSummary: 'Utorok a Štvrtok večer',
      duration: '75 minút',
      capacity: '12 tanečníkov'
    }
  },
  {
    id: 'barre-flexibility',
    title: 'Ballet Barre & Deep Stretch',
    subtitle: 'Funkčná elegancia, predĺženie svalov a zdravý chrbát',
    category: 'adults',
    ageRange: 'Všetky vekové kategórie',
    level: 'Všetky úrovne',
    description: 'Kombinácia baletného cvičenia pri tyči s prvkami pilatesu a asistovaného strečingu. Ideálne na úľavu od sedavého zamestnania a formovanie štíhlej línie.',
    detailedInfo: {
      focus: [
        'Cielené posilnenie medzilopatkových a sedacích svalov',
        'Bezpečný strečing bedrových kĺbov a hamstringov',
        'Zlepšenie mobility chrbtice a koordinácie',
        'Regenerácia po náročnom pracovnom dni'
      ],
      attire: 'Športové legíny, top, ponožky.',
      scheduleSummary: 'Ranné aj večerné bloky',
      duration: '60 minút',
      capacity: '14 osôb'
    }
  }
];

export const TIMETABLE_DATA: TimetableSlot[] = [
  // Pondelok
  { id: 't1', day: 'Pondelok', time: '16:00 – 16:45', title: 'Predbalet (4–6 r.)', category: 'kids', level: 'Začiatočníci', instructor: 'Nina Šestáková', hall: 'Sála Vaganova', spotsLeft: 3 },
  { id: 't2', day: 'Pondelok', time: '17:00 – 18:00', title: 'Klasický Balet I (7–9 r.)', category: 'kids', level: 'Mierne pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 2 },
  { id: 't3', day: 'Pondelok', time: '18:15 – 19:15', title: 'Balet pre Dospelých – Začiatočníci', category: 'adults', level: 'Základná úroveň', instructor: 'Barbora Lindnerová', hall: 'Sála Vaganova', spotsLeft: 4 },
  { id: 't4', day: 'Pondelok', time: '19:30 – 20:45', title: 'Dospelí – Pokročilí & Špičky', category: 'adults', level: 'Pokročilí', instructor: 'Mgr. art. Viktor Kováč', hall: 'Sála Petipa', spotsLeft: 5 },

  // Utorok
  { id: 't5', day: 'Utorok', time: '08:30 – 09:30', title: 'Morning Barre & Stretch', category: 'adults', level: 'Všetky úrovne', instructor: 'Barbora Lindnerová', hall: 'Sála Petipa', spotsLeft: 6 },
  { id: 't6', day: 'Utorok', time: '16:15 – 17:15', title: 'Klasický Balet II (10–12 r.)', category: 'kids', level: 'Pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 2 },
  { id: 't7', day: 'Utorok', time: '17:30 – 18:45', title: 'Mládež & Scénický Repertoár', category: 'teens', level: 'Stredne pokročilí', instructor: 'Mgr. art. Viktor Kováč', hall: 'Sála Vaganova', spotsLeft: 1 },
  { id: 't8', day: 'Utorok', time: '19:00 – 20:00', title: 'Dospelí – Open Class', category: 'adults', level: 'Mierne pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Petipa', spotsLeft: 4 },

  // Streda
  { id: 't9', day: 'Streda', time: '16:00 – 16:45', title: 'Predbalet (4–6 r.) Skupina B', category: 'kids', level: 'Začiatočníci', instructor: 'Nina Šestáková', hall: 'Sála Petipa', spotsLeft: 4 },
  { id: 't10', day: 'Streda', time: '17:00 – 18:00', title: 'Klasický Balet I (7–9 r.)', category: 'kids', level: 'Mierne pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 3 },
  { id: 't11', day: 'Streda', time: '18:15 – 19:15', title: 'Dospelí – Základy techniky', category: 'adults', level: 'Začiatočníci', instructor: 'Barbora Lindnerová', hall: 'Sála Vaganova', spotsLeft: 2 },
  { id: 't12', day: 'Streda', time: '19:30 – 20:30', title: 'Ballet Barre & Deep Stretch', category: 'adults', level: 'Všetky úrovne', instructor: 'Barbora Lindnerová', hall: 'Sála Petipa', spotsLeft: 5 },

  // Štvrtok
  { id: 't13', day: 'Štvrtok', time: '16:30 – 17:30', title: 'Klasický Balet II (10–12 r.)', category: 'kids', level: 'Pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 3 },
  { id: 't14', day: 'Štvrtok', time: '17:45 – 19:00', title: 'Mládež – Technika na špičkách', category: 'teens', level: 'Pokročilí', instructor: 'Mgr. art. Viktor Kováč', hall: 'Sála Vaganova', spotsLeft: 2 },
  { id: 't15', day: 'Štvrtok', time: '19:15 – 20:30', title: 'Dospelí – Repertoár & Variácie', category: 'adults', level: 'Stredne pokročilí', instructor: 'Mgr. art. Viktor Kováč', hall: 'Sála Petipa', spotsLeft: 4 },

  // Piatok
  { id: 't16', day: 'Piatok', time: '15:30 – 16:30', title: 'Individuálna príprava na konzervatórium', category: 'teens', level: 'Výberový tréning', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 1 },
  { id: 't17', day: 'Piatok', time: '17:00 – 18:00', title: 'Baletná gymnastika a flexibilita', category: 'kids', level: 'Všetky deti', instructor: 'Nina Šestáková', hall: 'Sála Petipa', spotsLeft: 5 },
  { id: 't18', day: 'Piatok', time: '18:15 – 19:30', title: 'Piatkový Večerný Open Class', category: 'adults', level: 'Všetky úrovne', instructor: 'Barbora Lindnerová', hall: 'Sála Vaganova', spotsLeft: 7 },

  // Sobota
  { id: 't19', day: 'Sobota', time: '09:30 – 10:15', title: 'Sobotný Predbalet (Rodič + dieťa)', category: 'kids', level: 'Začiatočníci', instructor: 'Nina Šestáková', hall: 'Sála Petipa', spotsLeft: 3 },
  { id: 't20', day: 'Sobota', time: '10:30 – 11:45', title: 'Víkendový Intenzívny Balet', category: 'adults', level: 'Mierne pokročilí', instructor: 'MgA. Elena Vráblová', hall: 'Sála Vaganova', spotsLeft: 4 },
  { id: 't21', day: 'Sobota', time: '12:00 – 13:30', title: 'Majstrovská trieda & Pas de deux', category: 'teens', level: 'Pokročilí', instructor: 'Mgr. art. Viktor Kováč', hall: 'Sála Vaganova', spotsLeft: 2 }
];

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'elena-vrablova',
    name: 'MgA. Elena Vráblová',
    role: 'Zakladateľka & Umelecká riaditeľka',
    bio: 'Bývalá prvá sólistka Baletu Slovenského národného divadla. Absolventka Hudobnej a tanečnej fakulty VŠMU a stáže na prestížnej Vaganova Ballet Academy v Petrohrade. Viac ako 18 rokov sa venuje pedagogickej činnosti so zameraním na čistotu ruskej baletnej školy.',
    credentials: [
      'Bývalá prvá sólistka Baletu SND',
      'Certifikovaná pedagogička Vaganovovej metódy',
      'Porotkyňa medzinárodných tanečných súťaží'
    ],
    image: '/src/assets/images/ballet_teacher_1789654535705.jpg'
  },
  {
    id: 'viktor-kovac',
    name: 'Mgr. art. Viktor Kováč',
    role: 'Hlavný pedagóg klasického tanca a pas de deux',
    bio: 'Pôsobil na popredných európskych scénach vrátane Štátnej opery vo Viedni a Národného divadla v Prahe. Vyniká detailnou znalosťou mužskej techniky, skokov a partnerského tanca. V škole vedie mládežnícke výberové triedy a prípravu na profesionálnu dráhu.',
    credentials: [
      'Sólista Štátnej opery vo Viedni (2012 – 2019)',
      'Laureát baletnej súťaže Prix de Lausanne',
      'Špecialista na javiskovú koordináciu a rotácie'
    ],
    image: '/src/assets/images/ballet_hero_1789654472002.jpg'
  },
  {
    id: 'nina-sestakova',
    name: 'Nina Šestáková',
    role: 'Pedagogička detskej prípravky & predbaletu',
    bio: 'Špecializuje sa na vývojovú kineziológiu a citlivý úvod do tanca pre deti predškolského veku. Svojím trpezlivým a láskavým prístupom vytvára u najmenších prirodzenú lásku k pohybu, správnemu držaniu tela a hudobnému cíteniu.',
    credentials: [
      'Absolventka Tanečného konzervatória Evy Jaczovej',
      'Certifikát z vývojovej motoriky a detskej fyzioterapie',
      'Autorka metodiky Hravý baletný svet'
    ],
    image: '/src/assets/images/ballet_shoes_1789654521063.jpg'
  },
  {
    id: 'barbora-lindnerova',
    name: 'Barbora Lindnerová',
    role: 'Lektorka baletu pre dospelých & Barre Fitness',
    bio: 'Búra mýty o tom, že balet je len pre deti. Pripravuje pre dospelých študentov lekcie, ktoré sú fyzicky posilňujúce, bezpečné pre kĺby a mentálne uvoľňujúce. Zameriava sa na ladnosť a radosť z dosiahnutého pokroku bez stresu.',
    credentials: [
      'Absolventka pedagogiky tanca na VŠMU',
      'Inštruktorka funkčného strečingu a pilatesu',
      'Viac než 8 rokov praxe s výučbou dospelých začiatočníkov'
    ],
    image: '/src/assets/images/ballet_studio_1789654486085.jpg'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'trial',
    name: 'Skúšobná Lekcia',
    price: '0 €',
    period: 'pri zápise do kurzu',
    description: 'Ideálny spôsob, ako spoznať naše štúdio, pedagógov a atmosféru bez akéhokoľvek záväzku.',
    features: [
      'Jedna 60-minútová lekcia podľa výberu',
      'Osobná konzultácia vhodnej úrovne',
      'Zapožičanie baletných piškót na hodinu zdarma',
      'Pri zakúpení kurzu v deň skúšky je lekcia zdarma (inak 12 €)'
    ],
    popular: false,
    ctaText: 'Rezervovať skúšobnú hodinu'
  },
  {
    id: 'semester',
    name: 'Semestrálny Kurz',
    price: '89 €',
    period: 'mesačne / platba za semester',
    description: 'Najefektívnejší spôsob kontinuálneho rastu. Ucelený systém lekcií s garanciou stáleho miesta v skupine.',
    features: [
      '2 tréningy týždenne (cca 8 lekcií mesačne)',
      'Stály kolektív a stabilný pedagóg',
      'Možnosť nahradenia až 4 vymeškaných hodín',
      'Účasť na záverečnom vystúpení v divadle',
      '10% zľava na workshopy a súkromné hodiny'
    ],
    popular: true,
    ctaText: 'Prihlásiť sa na semester'
  },
  {
    id: 'pass-10',
    name: 'Flexibilná Permanentka',
    price: '135 €',
    period: '10 vstupov / platnosť 3 mesiace',
    description: 'Perfektné riešenie pre dospelých a vyťažených študentov, ktorí potrebujú časovú slobodu.',
    features: [
      '10 vstupov na akékoľvek otvorené hodiny (Open Class)',
      'Platnosť 90 dní od prvého použitia',
      'Rezervácia lekcie pohodlne cez online systém',
      'Možnosť kombinovať balet a Ballet Barre',
      'Bez viazanosti na konkrétny deň'
    ],
    popular: false,
    ctaText: 'Kúpiť permanentku'
  },
  {
    id: 'private',
    name: 'Individuálny Tréning',
    price: '48 €',
    period: '60 minút / 1 na 1',
    description: 'Exkluzívna pozornosť pedagóga. Určené na rýchly progres, prípravu na konkurz alebo špecifické ciele.',
    features: [
      'Individuálne nastavený plán lekcie na mieru',
      'Podrobná korekcia technických detailov',
      'Tréning na baletných špičkách alebo pas de deux',
      'Konzultácia baletnej výživy a regenerácie'
    ],
    popular: false,
    ctaText: 'Dohodnúť termín'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Som úplný začiatočník a nemám žiadnu flexibilitu. Môžem začať s baletom ako dospelý?',
    answer: 'Jednoznačne áno! Veľká časť našich dospelých študentov začínala bez akejkoľvek predošlej skúsenosti s tancom. Balet nie je len o dokonalom rozštepe, ale o postupnom uvedomení si vlastného tela, spevnení stredu a radosti z hudby. Naše lekcie pre dospelých začínajú od úplných základov v rešpektujúcej atmosfére.'
  },
  {
    question: 'Čo si mám obliecť na prvú skúšobnú hodinu?',
    answer: 'Na skúšobnú hodinu nepotrebujete profesionálny baletný úbor. Postačia vám pohodlné legíny, priliehavé tričko, v ktorom pedagóg vidí držanie chrbta, a čisté bavlnené ponožky. Ak máte vlastné piškóty, vezmite si ich. V štúdiu máme aj niekoľko párov na bezplatné zapožičanie.'
  },
  {
    question: 'Ako prebieha výučba detí a od akého veku prijímate žiakov?',
    answer: 'Prijímame deti od 4 rokov do kurzu Predbalet. Výučba prebieha hravou, rozprávkovou formou s dôrazom na zdravý fyziologický vývin. Od 7 rokov prechádzajú deti do systematickej výučby klasického baletu s prvkami Vaganovovej metodiky a klavírnym sprievodom.'
  },
  {
    question: 'Kedy môžu žiačky začať tancovať na baletných špičkách (pointes)?',
    answer: 'Bezpečnosť a zdravie kĺbov sú u nás na prvom mieste. Tancovať na špičkách je možné až po dôkladnom spevnení svalstva priehlavku, členkov a trupu — zvyčajne po minimálne 3–4 rokoch pravidelného tréningu a vo veku od 11–12 rokov po schválení pedagógom.'
  },
  {
    question: 'Čo ak vymeškám hodinu z dôvodu choroby alebo pracovnej cesty?',
    answer: 'V rámci semestrálnych kurzov garantujeme možnosť nahradiť si až 4 vymeškané hodiny na ktorejkoľvek inej paralelnej lekcii príslušnej úrovne počas trvania daného semestra.'
  },
  {
    question: 'Kde presne sa štúdio nachádza a ako je to s parkovaním?',
    answer: 'Naše štúdio sídli v tichej historickej budove na Laurinskej 14 v centre Bratislavy. Priestory disponujú vysokými stropmi, veľkými oknami s prirodzeným svetlom a špičkovými odpruženými podlahami Harlequin. Parkovanie je možné v priľahlých parkovacích domoch Opera a Carlton, alebo MHD (zastávky Námestie SNP, Šafárikovo námestie a Jesenského sú vzdialené 3 minúty pešo).'
  }
];

export const STUDIO_FEATURES = [
  {
    title: 'Odpružené podlahy Harlequin',
    description: 'Profesionálny baletný balizol na špeciálnej dvojitej odpruženej konštrukcii šetriacej kĺby a chrbticu pri každom doskoku.'
  },
  {
    title: 'Živý klavírny sprievod',
    description: 'Klasické hodiny sprevádza koncertný klavirista, čo prehlbuje hudobné cítenie a citlivosť na rytmus a dynamiku.'
  },
  {
    title: 'Prirodzené svetlo a priestor',
    description: 'Dve priestranné sály (120 m² a 95 m²) s 4,2 m vysokými stropmi, dvojradovými dubovými tyčami a celostenovými zrkadlami.'
  },
  {
    title: 'Pohodlie a zázemie',
    description: 'Dizajnové šatne so sprchami, oddychový lounge s bylinkovými čajmi a knižnicou baletnej literatúry.'
  }
];
