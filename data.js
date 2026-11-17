const QUESTIONS = [
    {
        dimension: "GERÇEK DÜNYA YANKISI • 01",
        text: "Gerçek dünyada hiç planlamadığın büyük bir kriz aniden patlak verdiğinde ilk tepkin ne olur?",
        options: [
            { text: "Panik yapanları susturur, kimsenin göremediği o küçük detayı bulup krizi çözerim.", scores: { S: 3, M: 1, W: 0, R: 1 } },
            { text: "Düşünmeyi bırakır, en önden ateşe atılır ve durumu bilek gücüyle kontrol altına alırım.", scores: { W: 3, R: 1, S: 0, M: 0 } },
            { text: "İçgüdülerime güvenirim; olayların akışını sezer ve kimseye çaktırmadan kendimi sıyırırım.", scores: { R: 3, M: 1, S: 0, W: 0 } },
            { text: "Olayın arkasındaki görünmeyen sebebi sorgular, derin bir sessizlikle büyük resmi beklerim.", scores: { M: 3, S: 1, W: 0, R: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 02",
        text: "Altera Evreni'ne gözlerini açtığında elinde beliren ilk kadim nesne hangisi olurdu?",
        options: [
            { text: "Gelecekteki olasılıkları fısıldayan, içi yıldız tozu dolu çatlak bir kuantum kum saati.", scores: { M: 3, S: 1, W: 0, R: 0 } },
            { text: "Sadece sahibinin öfkesiyle plazma alevi saçan, göktaşı demirinden dövülmüş ağır bir kılıç.", scores: { W: 3, M: 0, S: 0, R: 1 } },
            { text: "Evrendeki tüm biyometrik kilitleri ve zihinleri açabilen, tıkırdayan mekanik bir anahtar.", scores: { S: 3, R: 1, M: 0, W: 0 } },
            { text: "Gölgeye adım attığında ışığı büküp seni görünmez kılan, nano-dokuma kadife bir pelerin.", scores: { R: 3, M: 1, W: 0, S: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 03",
        text: "Kalabalık bir arkadaş grubunda veya bir etkinlikte senin doğal rolün hangisidir?",
        options: [
            { text: "Herkesin sırrını anlattığı, ortamın enerjisini tek bakışta okuyan gizemli gözlemci.", scores: { M: 2, R: 2, S: 0, W: 0 } },
            { text: "Ortam sıkıcılaştığında aniden çılgın bir fikir atıp herkesi maceraya sürükleyen kıvılcım.", scores: { R: 3, W: 1, S: 0, M: 0 } },
            { text: "Her şeyi önceden organize eden, hesapları tutan ve grubu dağılmaktan kurtaran beyin.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Grubun koruyucusu; birine haksızlık yapıldığında masaya yumruğunu ilk vuran kişi.", scores: { W: 3, S: 0, M: 1, R: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 04",
        text: "Yasaklı bir bölgede yolunu kaybettin. Karşına çıkan dört geçitten hangisine yürürsün?",
        options: [
            { text: "Biyolüminesans mantarların parladığı ve ağaçların telepatik fısıldadığı sisli patikaya.", scores: { M: 3, R: 1, S: 0, W: 0 } },
            { text: "Devasa titanyum dişlilerin döndüğü, mavi plazma buharlarının yükseldiği yeraltı kapısına.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Ejderha kemikleriyle işaretlenmiş, uçurum kenarındaki dar savaşçı yoluna.", scores: { W: 3, R: 1, M: 0, S: 0 } },
            { text: "Haritada hiç görünmeyen, sadece iki ayın ışığı kesiştiğinde beliren gizli tünele.", scores: { R: 3, M: 1, S: 1, W: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 05",
        text: "Gece yatağa yattığında zihnini en çok meşgul eden düşünce genellikle nedir?",
        options: [
            { text: "'Acaba farklı bir karar verseydim paralel bir evrende hayatım nasıl görünürdü?' sorgulaması.", scores: { M: 3, R: 1, S: 0, W: 0 } },
            { text: "Yarın yapacağım işlerin listesi, hedeflerim ve kurduğum uzun vadeli stratejik planlar.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Beni kısıtlayan kurallardan kurtulup tamamen özgür olacağım o büyük kırılma anı.", scores: { R: 3, W: 1, M: 0, S: 0 } },
            { text: "Sevdiklerimi koruma isteği ve aşmam gereken o büyük engelle yüzleşme cesareti.", scores: { W: 3, M: 1, S: 0, R: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 06",
        text: "Altera Konseyi sana tek bir yasaklı güç bahşedecek. Hangisini seçersin?",
        options: [
            { text: "Zamanı 10 saniye geri sarabilme ama her kullanımda bir anını sisteme feda etme gücü.", scores: { S: 2, M: 2, R: 1, W: 0 } },
            { text: "İnsanların rüyalarına sızıp oradaki kabusları fiziksel silahlara dönüştürme gücü.", scores: { M: 3, R: 2, S: 0, W: 0 } },
            { text: "Saf yıldırım enerjisini bedeninde toplayıp tek dokunuşla dağları parçalama gücü.", scores: { W: 3, S: 1, M: 0, R: 0 } },
            { text: "İstediğin kişinin yüzüne ve sesine bürünüp imparatorlukları içeriden çökertme gücü.", scores: { R: 3, S: 2, M: 0, W: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 07",
        text: "Birisi sana açıkça yalan söylediğinde bunu nasıl anlarsın ve ne yaparsın?",
        options: [
            { text: "Ses tonundaki en ufak titreşimden anlarım ama yüzüne vurmam; koz olarak arşivlerim.", scores: { R: 2, S: 2, M: 1, W: 0 } },
            { text: "Gözlerinin içine baktığım an ruhundaki çelişkiyi hisseder, soğukkanlılıkla uyarırım.", scores: { M: 3, W: 1, S: 0, R: 0 } },
            { text: "Söylediklerini geçmiş verilerle karşılaştırır, mantık hatasını yüzüne çarparım.", scores: { S: 3, W: 0, R: 1, M: 0 } },
            { text: "Sabrım taşar, hiç uzatmadan doğrudan yüzleşir ve aramızdaki köprüleri yakarım.", scores: { W: 3, R: 1, S: 0, M: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 08",
        text: "Gökyüzünde iki ayın çarpıştığı 'Kızıl Tutulma' gecesinde nerede olurdun?",
        options: [
            { text: "En yüksek gözlem kulesinde, yıldız haritalarını çözüp boyut yırtılmasını kapatmaya çalışırken.", scores: { S: 3, M: 2, W: 0, R: 0 } },
            { text: "Kaosun ortasındaki kraliyet hazinesine sızmış, en nadir enerji çekirdeğini çalarken.", scores: { R: 3, S: 1, W: 0, M: 0 } },
            { text: "Şehrin surlarında tek başıma durmuş, karanlıktan gelen devasa orduyu beklerken.", scores: { W: 3, M: 1, S: 0, R: 0 } },
            { text: "Kadim bir sunakta kendi kanımla boyutlar arası bir mühür çizerken.", scores: { M: 3, W: 1, S: 0, R: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 09",
        text: "Hayatta seni en çok neyin tüketip enerjini emdiğini hissediyorsun?",
        options: [
            { text: "Sığ sohbetler, sahte insanlar ve ruhumu beslemeyen tekdüze rutinler.", scores: { M: 2, R: 2, W: 0, S: 0 } },
            { text: "Plansızlık, kaos ve insanların işleri son dakikaya bırakıp sorumsuz davranması.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Bana ne yapmam gerektiğinin söylenmesi ve özgürlüğüme sınır çizilmesi.", scores: { R: 3, W: 1, M: 0, S: 0 } },
            { text: "Haksızlığa sessiz kalmak zorunda olmak ve harekete geçememek.", scores: { W: 3, S: 0, M: 1, R: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 10",
        text: "Altera'daki hikayenin sonunda adın tarih kitaplarına nasıl kazınsın istersin?",
        options: [
            { text: "'Evrenin en karanlık sırrını çözen ve gerçeği ortaya çıkaran bilge' olarak.", scores: { M: 3, S: 2, W: 0, R: 0 } },
            { text: "'Hiçbir tahta boyun eğmeyen, krallıkları titreten efsanevi savaşçı' olarak.", scores: { W: 3, R: 1, S: 0, M: 0 } },
            { text: "'İmparatorlukları sıfırdan kuran, çağının ötesindeki dahi mimar' olarak.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "'Kimsenin gerçek yüzünü göremediği, efsanesi fısıltılarla yaşayan gölge' olarak.", scores: { R: 3, M: 1, S: 1, W: 0 } }
        ]
    }
];

const CHARACTERS = [
    {
        id: 1,
        name: "Kaelen Vane",
        title: "Aether Rünlerinin Efendisi",
        realm: "Astral Gözlem Kulesi",
        appearance: "Belinden aşağı süzülen gümüş-beyaz uzun saçlar, alnında parlayan mor kuantum rünü ve yıldız haritaları işli koyu lacivert zırhlı cübbe.",
        visual: { bg1: "#1e1b4b", bg2: "#090a14", hair: "#e2e8f0", hairStyle: "long", skin: "#f1c27d", eye: "#c084fc", armor: "#312e81", trim: "#a855f7", accessory: "rune" },
        vector: { M: 26, S: 14, W: 4, R: 6 },
        stats: { magic: 96, power: 42, wit: 88 },
        analysis: "Sen bu dünyada bile sıradan tesadüflerin arkasındaki gizli algoritmayı çözmeye çalışan, zihni sürekli paralel ihtimaller arasında mekik dokuyan birisin. İnsanlar senin o sakin ve bazen mesafeli duruşunu görünce her şeyi umursamadığını sanıyor; oysa kafanın içinde aynı anda yedi farklı boyutun satrancını oynuyorsun. Altera Evreni'nde bu zihinsel frekansın seni sıradan bir büyücü değil, zaman-mekan dokusundaki çatlakları çıplak gözle görebilen bir Aether Mühendisi yapmış.\n\nSenin için bilgi sadece güç değil, hayatta kalma refleksi. Bir ortama girdiğinde kimin rol yaptığını, kimin yakında fikir değiştireceğini saniyeler içinde seziyorsun. Altera'da elindeki yıldız haritalarıyla koca filoların kaderini tek bir mühürle değiştirebilmenin sebebi de bu: duygularınla değil, evrenin fısıldadığı o soğukkanlı kozmik matematikle hareket ediyorsun.",
        prophecy: "Önümüzdeki üç dolunaylık döngüde, gerçek hayatında uzun zamandır zihnini kemiren ve 'bu işin içinden nasıl çıkacağım' dediğin o karmaşık düğüm, hiç beklemediğin bir eşzamanlılıkla çözülecek. Eski bir tanıdıktan gelecek şifreli bir haber ya da gece yarısı aklına düşecek ani bir fikir, seni sıkıştığın o tekdüze yörüngeden çıkarıp çok daha yüksek bir seviyeye taşıyacak.\n\nÇevrendeki insanların mantıksız bulduğu o içgüdüne sımsıkı sarıl; çünkü zihnin gelecekten gelen sinyalleri çoktan yakalamış durumda."
    },
    {
        id: 2,
        name: "Lyra Ignis",
        title: "Kızıl Şafak Komutanı",
        realm: "Volkanik Plazma Surları",
        appearance: "Omuzlarına dökülen ateş kızılı dalgalı saçlar, sol yanağında parlayan savaş izi, altın işlemeli obsidyen göğüs zırhı ve kor alevli pelerin.",
        visual: { bg1: "#7f1d1d", bg2: "#180505", hair: "#ef4444", hairStyle: "long", skin: "#e0ac69", eye: "#facc15", armor: "#1c1917", trim: "#f59e0b", accessory: "scar" },
        vector: { W: 27, R: 10, S: 8, M: 5 },
        stats: { magic: 50, power: 98, wit: 72 },
        analysis: "Senin damarlarında kan yerine yüksek voltajlı bir adalet duygusu ve durdurulamaz bir meydan okuma ateşi akıyor. Gerçek dünyada da biri haksızlığa uğradığında ya da sana sınır çizilmeye çalışıldığında gözün hiçbir şeyi görmüyor; o an senin için hesap kitap devri kapanıp eylem devri başlıyor. Altera Evreni'nde bu kontrolsüz cesaretin seni sıradan bir asker değil, göktaşı demirinden dövülmüş zırhıyla orduların en önünde yürüyen yenilmez bir cephe komutanına dönüştürmüş.\n\nKaybetmekten korkmuyorsun, çünkü senin felsefende düşmek sadece daha sert bir karşı saldırı için yay gibi gerilmektir. İnsanlar senin yanında kendilerini güvende hissediyor çünkü fırtına koptuğunda saklanmak yerine kılıcını çekip yıldırımın üzerine yürüyen ilk kişi her zaman sensin.",
        prophecy: "Yakın gelecekte hayatında 'artık bu kadar yeter' deyip masaya yumruğunu vuracağın kritik bir kırılma noktası görünüyor. Uzun süredir sabrettiğin, alttan aldığın veya cesaret edemediğin o büyük yüzleşme için evren sana yeşil ışık yakacak.\n\nİlk adımı attığın an, gözünde büyüttüğün tüm engellerin kağıttan kaleler gibi devrildiğine şahit olacaksın; bu cesaretin sana hem özgürlük hem de hak ettiğin liderlik koltuğunu getirecek."
    },
    {
        id: 3,
        name: "Vespera Nyx",
        title: "Fısıldayan Gölgelerin Kraliçesi",
        realm: "Neon Gece Pazarı",
        appearance: "Kuzgun siyahı asimetrik kesim kısa saçlar, zümrüt yeşili keskin gözler, yüksek yakalı zırhlı deri trençkot ve plazma hançer kemeri.",
        visual: { bg1: "#064e3b", bg2: "#05080a", hair: "#0f172a", hairStyle: "short", skin: "#f1c27d", eye: "#10b981", armor: "#111827", trim: "#34d399", accessory: "hood" },
        vector: { R: 27, S: 12, M: 7, W: 4 },
        stats: { magic: 64, power: 68, wit: 92 },
        analysis: "Kurallar senin için sadece başkalarının oyalanması için uydurulmuş basit kodlardan ibaret. Gerçek hayatta da kimseye bütün kartlarını açmayan, ortamın havasını saniyeler içinde koklayıp kendi lehine çeviren kıvrak ve tehlikeli bir zekan var. Altera'da krallıkların en gizli veri kasalarını ve yasaklı sırlarını elinde tutan, gölgelerin arasından süzülüp kimsenin izini süremediği o efsanevi hayaletsin.\n\nSenin en büyük silahın görünmezliğin değil, insanların egolarını kusursuzca okuyabilmen. Herkes gürültü çıkararak güç gösterisi yaparken, sen en karanlık köşeden tek bir hamleyle bütün oyunun fişini çekiyorsun.",
        prophecy: "Çok yakında gizli kalmış bir gerçek ya da birilerinin senden ustalıkla sakladığı bir plan tesadüfen önüne düşecek. İlk tepkin öfkelenmek olabilir ama sakın açık verme; sadece gülümse ve o bilgiyi kasana kilitle.\n\nSessizce kendi hamleni kurguladığında, seni hafife alan herkesin oyunun kurallarını senin yazdığını fark etmesi çok uzun sürmeyecek."
    },
    {
        id: 4,
        name: "Orin Clockwork",
        title: "Zaman Dişlilerinin Baş Mimarı",
        realm: "Buhar ve Kuantum Şehri",
        appearance: "Dağınık bakır rengi kıvırcık saçlar, alnında parlayan pirinç siber-gözlükler, deri zırhlı önlük ve mavi enerji çekirdekli mekanik eldiven.",
        visual: { bg1: "#78350f", bg2: "#140c05", hair: "#c2410c", hairStyle: "spiky", skin: "#e0ac69", eye: "#38bdf8", armor: "#451a03", trim: "#fbbf24", accessory: "goggles" },
        vector: { S: 28, M: 10, W: 6, R: 6 },
        stats: { magic: 70, power: 55, wit: 99 },
        analysis: "Senin beynin asla uyku moduna geçmeyen dev bir kuantum işlemcisi gibi çalışıyor. Plansızlıktan ve mantıksız dramlardan nefret ediyor, karşına çıkan her kaosu parçalara ayırıp daha verimli bir sistem kurarak çözüyorsun. Altera Evreni'nde kadim büyüyü yüksek teknolojiyle birleştirip imkansız makineler ve zaman bükücü cihazlar inşa eden dahi başmimarsın.\n\nİnsanlar bir sorunun karşısında 'bu imkansız' deyip ellerini havaya kaldırdığında, sen çoktan üç farklı prototip çizmiş ve en verimli olanını çalıştırmaya başlamış oluyorsun. Senin için evren çözülmesi gereken dev bir bulmacadan ibaret.",
        prophecy: "Zihninde uzun zamandır tasarladığın ama 'acaba zamanı geldi mi?' diye beklettiğin o proje, fikir veya plan için büyük hasat vakti yaklaşıyor. Önümüzdeki aylarda analitik zekan ve pratik bir çözümün sayesinde çevrendeki herkesi şaşırtacak somut bir başarı elde edeceksin.\n\nDetaylara olan takıntın bu kez sana büyük bir kapı aralayacak."
    },
    {
        id: 5,
        name: "Seraphina Mist",
        title: "Rüya Dokuyucu Bilinç Kahini",
        realm: "Biyolüminesans Lagün",
        appearance: "Su yeşili ve lavanta tonlarında örgülü uzun saçlar, inci işlemeli yarı saydam enerji şalı ve elinde sıvı ışık saçan kristal asa.",
        visual: { bg1: "#3b0764", bg2: "#090d16", hair: "#2dd4bf", hairStyle: "long", skin: "#ffdbac", eye: "#e879f9", armor: "#4c1d95", trim: "#5eead4", accessory: "crown" },
        vector: { M: 25, R: 12, S: 9, W: 4 },
        stats: { magic: 95, power: 38, wit: 84 },
        analysis: "Empati frekansın o kadar yüksek ki, bazen bir odaya girdiğinde insanların söylemediği cümleleri bile zihninde duyuyorsun. Gerçek dünyanın katı ve ruhsuz kuralları seni çabuk yoruyor; çünkü senin ruhun sınırların ötesinde yüzmeye alışkın. Altera Evreni'nde insanların bilinçaltına sızıp onların en derin korkularını ve gizli arzularını yeniden şekillendiren mistik bir rüya gezginisin.\n\nYaratıcılığın ve hayal gücün senin en büyük kalkanın. Başkalarının sadece karanlık gördüğü yerde sen yepyeni dünyalar inşa edebiliyorsun.",
        prophecy: "Rüyalarının ve ani içgüdülerinin ürkütücü bir netlikle gerçeğe dönüştüğü büyülü bir döneme giriyorsun. Hayatından çıkması gereken ağır bir enerji veya seni aşağı çeken bir bağ kendiliğinden çözülecek; yerine ruhunu besleyen yepyeni bir ilham ve tutku kaynağı gelecek.\n\nİçindeki sesi susturma, onu yaratıma dönüştür."
    },
    {
        id: 6,
        name: "Draven Stormborn",
        title: "Fırtına Kıran Siber-Gladyatör",
        realm: "Gökyüzü Arenası",
        appearance: "Kazınmış yanlar ve tepede toplanmış koyu kahverengi saçlar, boynunda elektrik mavisi plazma izleri, zırhlı gladyatör tuniği.",
        visual: { bg1: "#0369a1", bg2: "#081221", hair: "#3f2e21", hairStyle: "spiky", skin: "#c68642", eye: "#38bdf8", armor: "#1e293b", trim: "#0ea5e9", accessory: "scar" },
        vector: { W: 26, R: 13, M: 6, S: 5 },
        stats: { magic: 58, power: 95, wit: 66 },
        analysis: "Sen baskı altında ezilen değil, üzerindeki basıncı saf enerjiye dönüştüren bir reaktör gibisin. Özgürlüğüne hastalıklı derecede düşkünsün; kimsenin seni bir kalıba sokmasına ya da zincirlemesine tahammülün yok. Altera'da gökyüzü fırtınalarının yüksek voltajını çıplak elleriyle yönlendiren, arenaların yenilmez şampiyonusun.\n\nEnerjin girdiğin her ortamın atmosferini anında değiştiriyor. İnsanlar ya senin rüzgarına kapılıp seninle birlikte yükseliyor ya da yolundan çekilmek zorunda kalıyor.",
        prophecy: "Seni yerinde saydıran ve enerjini boğan durgun bir dönem nihayet sona eriyor; yüksek tempolu bir macera başlıyor. Hem fiziksel hem de zihinsel sınırlarını zorlayacağın cesur bir meydan okuma kapıda.\n\nKorkusuzca üzerine gittiğinde, hiç beklemediğin bir zaferle taçlandırılacaksın."
    },
    {
        id: 7,
        name: "Aurelia Solis",
        title: "Altın Konsey Başyargıcı",
        realm: "Güneş İmparatorluğu",
        appearance: "Kusursuz topuz yapılmış bal sarısı saçlar, altın ışık halesi tacı, beyaz ve altın sırmalı asil imparatorluk zırhı.",
        visual: { bg1: "#854d0e", bg2: "#1a1205", hair: "#facc15", hairStyle: "long", skin: "#f1c27d", eye: "#fbbf24", armor: "#f8fafc", trim: "#eab308", accessory: "crown" },
        vector: { S: 25, W: 14, M: 7, R: 4 },
        stats: { magic: 68, power: 82, wit: 94 },
        analysis: "Doğuştan gelen sarsılmaz bir otoriten ve kriz anlarında bile dağılmayan bir duruşun var. İnsanlar karmaşaya düştüğünde gözleri istemsizce seni arıyor çünkü sen her zaman oyunun üç hamle sonrasını görmüş gibi davranıyorsun. Altera'da koca bir yıldız imparatorluğunun yasalarını yazan, tek sözüyle savaşları başlatıp bitiren yüce başyargıçsın.\n\nAdaletin keskin ama merhametin stratejik; kime ne kadar güveneceğini çok iyi biliyorsun.",
        prophecy: "Yakında liderlik vasıflarını ve kriz yönetimi becerini sergilemen gereken çok önemli bir sorumluluk üstleneceksin. Başkalarının panikleyip kararsız kaldığı bir noktada senin net ve tavizsiz duruşun, sana hem büyük bir saygınlık kazandıracak hem de yeni kapıları ardına kadar açacak."
    },
    {
        id: 8,
        name: "Zephyr Ashwalker",
        title: "Boyutlar Arası Kaçakçı",
        realm: "Sınır Boşluğu",
        appearance: "Rüzgardan dağılmış platin sarısı kısa saçlar, tek gözünde holografik kristal mercek, çok cepli zırhlı deri ceket.",
        visual: { bg1: "#27272a", bg2: "#09090b", hair: "#f4f4f5", hairStyle: "short", skin: "#e0ac69", eye: "#f97316", armor: "#3f3f46", trim: "#fb923c", accessory: "goggles" },
        vector: { R: 25, S: 13, W: 7, M: 5 },
        stats: { magic: 60, power: 72, wit: 89 },
        analysis: "Tek bir yere, tek bir fikre veya tek bir sıkıcı rutine bağlı kalmak senin doğana tamamen aykırı. Meraklı, esprili ve en tehlikeli anlarda bile şaka yapabilecek kadar soğukkanlısın. Altera Evreni'nde yasaklı boyutlar arasında nadir kuantum eserleri taşıyan, hiçbir imparatorluğun yakalayamadığı o efsanevi boyut kaçakçısısın.\n\nSenin için hayat haritası olmayan bir macera; en iyi hamlelerini de her zaman doğaçlama yapıyorsun.",
        prophecy: "Ani bir rota değişikliği veya beklenmedik bir yolculuk planı kapını çalacak. İlk başta plansız göründüğü için tereddüt edebilirsin ama bu sürpriz fırsat seni hayal bile edemeyeceğin kadar renkli insanlarla ve yeni ufuklarla tanıştıracak."
    },
    {
        id: 9,
        name: "Malakor Thorne",
        title: "Karanlık Köklerin Biyo-Simyacısı",
        realm: "Zehirli Kristal Ormanı",
        appearance: "Omuzlarına düşen koyu zümrüt yeşili saçlar, keskin elmacık kemikleri, parlayan yeşil iksir tüpleriyle dolu zırhlı kadife ceket.",
        visual: { bg1: "#14532d", bg2: "#04120a", hair: "#16a34a", hairStyle: "long", skin: "#ffdbac", eye: "#4ade80", armor: "#052e16", trim: "#22c55e", accessory: "rune" },
        vector: { M: 22, S: 18, R: 7, W: 3 },
        stats: { magic: 90, power: 45, wit: 93 },
        analysis: "Merakın seni her zaman yasaklı sınırların ötesine itiyor. Başkalarının korkup kaçtığı karanlık konuları sen laboratuvar masasına yatırıp formülünü çözüyorsun. Altera'da en ölümcül toksinlerden ölümsüzlük iksiri üretebilen, doğanın ve maddenin gizli kodlarını kırmış dahi bir biyo-simyacısın.\n\nSenin için hiçbir şey tamamen iyi ya da tamamen kötü değil; her şey doğru dozaj ve doğru zamanlama meselesi.",
        prophecy: "Geçmişte yaşadığın bir hayal kırıklığını veya seni üzen bir tecrübeyi, tıpkı bir simyacı gibi saf altına dönüştüreceğin bir süreç başlıyor. O zorlu süreçte öğrendiğin gizli ders, çok yakında karşına çıkacak büyük bir fırsatta senin en keskin avantajın olacak."
    },
    {
        id: 10,
        name: "Soren Frostblade",
        title: "Kuzey Buzullarının Sessiz Muhafızı",
        realm: "Kriyo-Buzul Kalesi",
        appearance: "Buz mavisi düz saçlar, keskin bakışlar, beyaz kurt kürkü omuzluklar ve kriyo-kristalden dövülmüş parlayan kılıç.",
        visual: { bg1: "#0c4a6e", bg2: "#04111a", hair: "#7dd3fc", hairStyle: "short", skin: "#ffdbac", eye: "#bae6fd", armor: "#1e293b", trim: "#38bdf8", accessory: "scar" },
        vector: { W: 24, S: 15, M: 6, R: 5 },
        stats: { magic: 62, power: 91, wit: 81 },
        analysis: "Dışarıdan bakıldığında mutlak sıfır noktasındaki bir buzul kadar soğukkanlı ve sarsılmaz görünüyorsun, ancak değer verdiğin insanlar söz konusu olduğunda içinde sönmeyen bir füzyon ateşi yanıyor. Gereksiz konuşmaları sevmiyor, icraatlarınla iz bırakıyorsun. Altera'da tek başına bir geçidi bin kişilik orduya karşı savunan efsanevi muhafızsın.\n\nSadakatin ve iraden senin en büyük zırhın; kolay kolay kimseyi hayatına almıyorsun ama aldığın kişiyi de asla yarı yolda bırakmıyorsun.",
        prophecy: "Sabrının ve sessiz emeğinin test edildiği uzun bir bekleyişin sonuna geldin. Yakında verdiğin mücadelelerin karşılığını somut olarak göreceksin; sana gerçekten güvenen insanların desteğiyle sarsılmaz ve güçlü bir konuma yükseleceksin."
    },
    {
        id: 11,
        name: "Nyxia Ravenscroft",
        title: "Kuzgun Ruhu Çağırıcısı",
        realm: "Kül ve Gölge Ormanı",
        appearance: "Koyu mor ve siyah karışımı dağınık saçlar, kuzgun tüylü omuzluklar, gümüş rünlü yüzükler ve gotik büyücü zırhı.",
        visual: { bg1: "#4c1d95", bg2: "#090512", hair: "#581c87", hairStyle: "long", skin: "#f1c27d", eye: "#d8b4fe", armor: "#18181b", trim: "#9333ea", accessory: "hood" },
        vector: { M: 24, R: 16, W: 5, S: 5 },
        stats: { magic: 92, power: 54, wit: 82 },
        analysis: "Sıradanlık ve yapay nezaket seni fiziksel olarak yoruyor. Karanlık estetiğe, derin felsefi sorulara ve gizemli hikayelere doğal bir çekimin var. İnsanların yüzlerine taktıkları sahte maskelerin ardındaki gerçek niyeti saniyeler içinde görüyorsun. Altera'da kadim kuzgunların gözünden tüm boyutları izleyen gizemli ruh çağırıcısın.\n\nKendi karanlığınla barışık olduğun için kimsenin seni korkutmasına izin vermiyorsun.",
        prophecy: "Hayatındaki sahte maskelerin tek tek düşeceği keskin bir aydınlanma dönemine giriyorsun. Kimin gerçek dost, kimin sadece çıkarı için etrafında döndüğünü net bir şekilde görecek ve enerjini yalnızca seni gerçekten hak edenlere saklayacaksın."
    },
    {
        id: 12,
        name: "Cassian Volt",
        title: "Yıldırım ve Plazma Mühendisi",
        realm: "Gökyüzü Tersanesi",
        appearance: "Elektrik mavisi dik saçlar, neon parıltılı siber-vizör, koyu gri zırhlı ceket ve sırtında plazma reaktörü.",
        visual: { bg1: "#1d4ed8", bg2: "#060b19", hair: "#3b82f6", hairStyle: "spiky", skin: "#e0ac69", eye: "#60a5fa", armor: "#1e293b", trim: "#2563eb", accessory: "visor" },
        vector: { S: 24, R: 15, W: 7, M: 4 },
        stats: { magic: 55, power: 76, wit: 95 },
        analysis: "Hızlı düşünen, sabırsız ve her zaman bir adım sonrasını kurgulayan hiperaktif bir zekan var. Geleneksel yöntemler senin için zaman kaybı; her şeyin daha hızlı, daha akıllı ve daha havalı bir yolunu mutlaka buluyorsun. Altera'da uçan savaş gemilerinin motorlarını yıldırım enerjisiyle çalıştıran asi başmühendissin.\n\nKuralları yıkmayı seviyorsun ama bunu kaos için değil, daha iyi bir sistem inşa etmek için yapıyorsun.",
        prophecy: "Hızla gelişen beklenmedik bir olay zinciri seni yepyeni ve heyecan verici bir ortama taşıyacak. Zekice ve pratik bir hamlen sayesinde, başkalarının aylarca uğraşıp çözemediği bir düğümü birkaç günde çözüp bütün dikkatleri üzerine çekeceksin."
    },
    {
        id: 13,
        name: "Thalia Verdant",
        title: "Kadim Köklerin Biyo-Koruyucusu",
        realm: "Zümrüt Biyosfer",
        appearance: "Parlayan çiçekler ve sarmaşıklarla örülü kestane rengi uzun saçlar, yosun yeşili pelerin ve organik zırh parçaları.",
        visual: { bg1: "#065f46", bg2: "#04140e", hair: "#78350f", hairStyle: "long", skin: "#c68642", eye: "#34d399", armor: "#064e3b", trim: "#6ee7b7", accessory: "crown" },
        vector: { M: 21, W: 14, S: 9, R: 6 },
        stats: { magic: 86, power: 74, wit: 78 },
        analysis: "Doğaya, canlılara ve organik bağlara derinden bağlı, etrafına huzur veren ama damarına basıldığında bir doğa afeti kadar yıkıcı olabilen birisin. İnsanları iyileştiren, onlara akıl veren anaç ama güçlü bir enerjin var. Altera'da devasa kadim ağaçları uyandırıp orduları durduran doğa rahibesisin.\n\nSenin gücün zorlamaktan değil, evrenin doğal ritmiyle uyum içinde akmaktan geliyor.",
        prophecy: "Uzun süredir ektiğin iyilik, emek ve sabır tohumlarının nihayet filizlenme zamanı geldi. Hayatında derin bir huzur bulacağın, kendini gerçekten ait hissedeceğin yeni bir düzen kuracaksın. Ruhsal olarak yenileneceğin bereketli bir dönem seni bekliyor."
    },
    {
        id: 14,
        name: "Riven Cross",
        title: "Kızıl Ay Boyut Avcısı",
        realm: "Lanetsiz Sınır",
        appearance: "Alnına düşen gümüş perçemli siyah saçlar, geniş kenarlı avcı şapkası, zırhlı uzun deri palto ve plazma arbalet.",
        visual: { bg1: "#881337", bg2: "#0d060a", hair: "#18181b", hairStyle: "short", skin: "#f1c27d", eye: "#fb7185", armor: "#1f2937", trim: "#e11d48", accessory: "hat" },
        vector: { W: 21, R: 18, S: 7, M: 4 },
        stats: { magic: 48, power: 89, wit: 84 },
        analysis: "Tek başına hareket etmeyi seven, kimseye borçlu kalmaktan hoşlanmayan keskin nişancı ruhlu birisin. Hem fiziksel cesaretin hem de soğukkanlı taktiksel zekan çok yüksek. Altera Evreni'nde boyut yırtıklarından sızan karanlık yaratıkları avlayan, adı tavernalarda saygıyla fısıldanan o efsanevi yalnız kurt avcısısın.\n\nKalabalıklara ihtiyacın yok; çünkü kendi kendine yetebilmenin verdiği o sarsılmaz özgüvene sahipsin.",
        prophecy: "Kendi başına verdiğin ve çevrendekilerin sorguladığı bir kararın ne kadar doğru olduğunu kanıtlayacağın bir olay yaşayacaksın. Herkesin 'yapamazsın' dediği o zorlu hedefi tam on ikiden vuracak ve bağımsızlığını kendi ellerinle ilan edeceksin."
    },
    {
        id: 15,
        name: "Elowen Starweaver",
        title: "Göksel Kuantum Kütüphanecisi",
        realm: "Bulutların Üstündeki Arşiv",
        appearance: "Altın simli açık kumral dalgalı saçlar, hilal şeklinde enerji tokası, yıldız tozlu beyaz ve lacivert cübbe.",
        visual: { bg1: "#312e81", bg2: "#090a1a", hair: "#d97706", hairStyle: "long", skin: "#ffdbac", eye: "#fde047", armor: "#1e1b4b", trim: "#facc15", accessory: "rune" },
        vector: { S: 22, M: 20, R: 5, W: 3 },
        stats: { magic: 89, power: 35, wit: 97 },
        analysis: "Bilgi senin için evrendeki en saf ve en değerli enerji kaynağı. Bir konuyu merak ettiğinde gece yarısına kadar araştıran, alakasız görünen detayları birleştirip büyük resmi ortaya çıkaran entelektüel bir ruhun var. Altera'da evrenin başlangıcından beri yazılmış tüm kader kayıtlarının saklandığı Göksel Arşiv'in baş koruyucususun.\n\nSenin zihnin asla paslanmayan bir merak motoruyla çalışıyor.",
        prophecy: "Okuduğun, izlediğin veya tesadüfen duyduğun küçük bir bilgi kırıntısı, yakın gelecekte hayatındaki büyük bir düğümü çözmeni sağlayacak. Merakının peşinden gitmeye devam et; aradığın o kritik cevap hiç beklemediğin bir yerde seni bekliyor."
    },
    {
        id: 16,
        name: "Bram Ironheart",
        title: "Örs ve Yıldız Çekici Efendisi",
        realm: "Magma Dağları",
        appearance: "Örgülü gür kestane sakal ve kısa saçlar, rün dövmeli güçlü kollar, ağır zırhlı demirci önlüğü ve parlayan savaş çekici.",
        visual: { bg1: "#9a3412", bg2: "#170904", hair: "#7c2d12", hairStyle: "beard", skin: "#e0ac69", eye: "#fb923c", armor: "#292524", trim: "#f97316", accessory: "scar" },
        vector: { W: 22, S: 19, M: 5, R: 4 },
        stats: { magic: 52, power: 94, wit: 85 },
        analysis: "Sağlam, güvenilir ve temeli olmayan hiçbir şeye inanmayan kaya gibi bir karaktersin. Söz verdiğinde gezegenler yörüngesinden çıksa yine de o sözü tutarsın. Altera Evreni'nde kralların uğruna savaştığı efsanevi plazma silahlarını kendi elleriyle döven yüce zanaatkar ustasısın.\n\nBoş laflarla değil, ortaya koyduğun somut eserlerle konuşuyorsun.",
        prophecy: "Emek verip ilmek ilmek işlediğin bir iş, proje veya ilişki artık meyvelerini vermeye başlıyor. Geçici heveslerin değil, kalıcı ve sağlam değerlerin kazanacağı bir sürece giriyorsun; sarsılmaz duruşun sana büyük bir saygınlık getirecek."
    },
    {
        id: 17,
        name: "Sylas Mirage",
        title: "Aynalar Labirentinin Prensi",
        realm: "Kristal Çöl",
        appearance: "Gümüşi mavi parlak saçlar, hipnotize edici kehribar gözler, prizma gibi ışık yansıtan holografik ipek tunik.",
        visual: { bg1: "#581c87", bg2: "#11071f", hair: "#93c5fd", hairStyle: "short", skin: "#f1c27d", eye: "#fbbf24", armor: "#3b0764", trim: "#c084fc", accessory: "crown" },
        vector: { R: 22, M: 19, S: 6, W: 3 },
        stats: { magic: 91, power: 44, wit: 87 },
        analysis: "İnsanları etkileme, ikna etme ve algıları istediğin gibi bükme konusunda doğuştan gelen büyüleyici bir karizman var. Kimse senin gerçekten ne düşündüğünü tam olarak çözemiyor çünkü sen her zaman bir adım geride gülümseyerek izliyorsun. Altera'da düşmanlarını kendi yarattığı illüzyon labirentlerinde hapseden gizemli ayna büyücüsüsün.\n\nSenin için gerçeklik, onu nasıl sunduğuna göre şekillenen esnek bir kavram.",
        prophecy: "Yakında ikna kabiliyetini ve sosyal zekanı kullanman gereken kritik bir görüşme veya fırsat doğacak. İnsanların ne duymak istediğini ve neye ihtiyaç duyduğunu tam olarak bildiğin için bu durumdan istediğin sonucu alarak çıkacaksın."
    },
    {
        id: 18,
        name: "Freya Valkyrie",
        title: "Gök Kubbe Süvarisi",
        realm: "Stratosfer Kaleleri",
        appearance: "Rüzgarda uçuşan altın sarısı uzun saçlar, kanatlı gümüş miğfer ve gökyüzü mavisi ışık zırhı.",
        visual: { bg1: "#0284c7", bg2: "#071626", hair: "#fde047", hairStyle: "long", skin: "#ffdbac", eye: "#38bdf8", armor: "#e2e8f0", trim: "#0ea5e9", accessory: "crown" },
        vector: { W: 23, M: 16, S: 6, R: 5 },
        stats: { magic: 78, power: 90, wit: 74 },
        analysis: "Yüksek idealleri olan, cesur ve etrafına ışık saçan ilham verici bir ruhun var. Küçük hesapların peşinde koşmak yerine her zaman daha yüce bir amaca hizmet etmek istiyorsun. Altera'da kanatlı mekanik küheylanıyla bulutların arasından süzülüp karanlığı yaran göksel süvarisin.\n\nDüştüğünde bile gökyüzüne bakmaktan vazgeçmeyen o nadir savaşçılardansın.",
        prophecy: "Ufkunun genişleyeceği, hayata çok daha yukarıdan ve berrak bakacağın aydınlık bir döneme giriyorsun. Seni aşağı çeken küçük dertlerden ve gereksiz endişelerden sıyrılacak, büyük hedeflerine doğru hızla kanatlanacaksın."
    },
    {
        id: 19,
        name: "Dante Cipher",
        title: "Kaos ve Kuantum Teorisyeni",
        realm: "Parçalanmış Boyut",
        appearance: "Siyah ve beyaz iki renkli dağınık saçlar, asimetrik siber-ceket ve havada süzülen neon geometrik küpler.",
        visual: { bg1: "#18181b", bg2: "#050507", hair: "#e4e4e7", hairStyle: "spiky", skin: "#f1c27d", eye: "#22d3ee", armor: "#09090b", trim: "#06b6d4", accessory: "visor" },
        vector: { S: 21, R: 20, M: 5, W: 4 },
        stats: { magic: 66, power: 62, wit: 98 },
        analysis: "Senin zihnin hem bir büyükusta satranç oyuncusu kadar disiplinli hem de bir sistem korsanı kadar öngörülemez. Kuralların ve sistemlerin açıklarını saniyeler içinde bulup kendi lehine kullanıyorsun. Altera'da boyutlar arasındaki yasaklı enerji kapılarını matematiksel şifrelerle hackleyen asi dehasın.\n\nNormal insanlar duvar görürken, sen o duvarın kaynak kodundaki hatayı görüyorsun.",
        prophecy: "Herkesin kilitli sandığı bir kapının şifresini çözeceğin sürpriz bir gelişme kapıda. Alışılmışın dışındaki yaratıcı düşünce tarzın sayesinde, tamamen tıkanmış görünen bir meselede dahiyane bir çıkış yolu bulacaksın."
    },
    {
        id: 20,
        name: "Aetheris The Balanced",
        title: "Dört Boyutun Denge Köprüsü",
        realm: "Merkez Kuantum Tapınağı",
        appearance: "Omuz hizasında gece mavisi saçlar, alnında dört elementin parlayan sembolü, altın ve siyah dengeli kutsal zırh.",
        visual: { bg1: "#311042", bg2: "#090612", hair: "#1e3a8a", hairStyle: "long", skin: "#e0ac69", eye: "#facc15", armor: "#111827", trim: "#eab308", accessory: "rune" },
        vector: { M: 14, W: 14, S: 14, R: 8 },
        stats: { magic: 85, power: 85, wit: 85 },
        analysis: "Sen evrende çok nadir rastlanan bir denge ruhusun. Ne tamamen duygularının esirisin ne de buz gibi bir mantık makinesi. Gerektiğinde en ön safta savaşmayı, gerektiğinde gölgelere çekilip strateji kurmayı bilen çok yönlü bir ustasın. Altera Evreni'nde savaşan dört büyük diyarı bir arada tutan efsanevi denge koruyucususun.\n\nHer ortama uyum sağlayabilmen senin zayıflığın değil, en büyük evrimsel gücün.",
        prophecy: "Hayatındaki farklı alanların (iş, özel hayat ve kişisel hedefler) nihayet uyumlu bir dengeye oturduğu altın bir döneme giriyorsun. İki zıt durum veya kişi arasında kuracağın bilgece köprü, hem sana hem de etrafındakilere büyük bir ferahlık getirecek."
    }
];
