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
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20handsome%20male%20arcane%20mage%20waist%20length%20silver%20white%20hair%20glowing%20purple%20rune%20on%20forehead%20dark%20navy%20gold%20armored%20robe%20league%20of%20legends%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=101",
        vector: { M: 26, S: 14, W: 4, R: 6 },
        stats: { magic: 96, power: 42, wit: 88 },
        analysis: "Sen bu dünyada bile sıradan tesadüflerin arkasındaki gizli algoritmayı çözmeye çalışan, zihni sürekli paralel ihtimaller arasında mekik dokuyan birisin. İnsanlar senin o sakin ve bazen mesafeli duruşunu görünce her şeyi umursamadığını sanıyor; oysa kafanın içinde aynı anda yedi farklı boyutun satrancını oynuyorsun. Altera Evreni'nde bu zihinsel frekansın seni sıradan bir büyücü değil, zaman-mekan dokusundaki çatlakları çıplak gözle görebilen bir Aether Mühendisi yapmış.\n\nSenin için bilgi sadece güç değil, hayatta kalma refleksi. Bir ortama girdiğinde kimin rol yaptığını, kimin yakında fikir değiştireceğini saniyeler içinde seziyorsun. Altera'da elindeki yıldız haritalarıyla koca filoların kaderini tek bir mühürle değiştirebilmenin sebebi de bu: duygularınla değil, evrenin fısıldadığı o soğukkanlı kozmik matematikle hareket ediyorsun.",
        prophecy: "Önümüzdeki üç dolunaylık döngüde, gerçek hayatında uzun zamandır zihnini kemiren ve 'bu işin içinden nasıl çıkacağım' dediğin o karmaşık düğüm, hiç beklemediğin bir eşzamanlılıkla çözülecek. Eski bir tanıdıktan gelecek şifreli bir haber ya da gece yarısı aklına düşecek ani bir fikir, seni sıkıştığın o tekdüze yörüngeden çıkarıp çok daha yüksek bir seviyeye taşıyacak. Çevrendeki insanların mantıksız bulduğu o içgüdüne sımsıkı sarıl; çünkü zihnin gelecekten gelen sinyalleri çoktan yakalamış durumda."
    },
    {
        id: 2,
        name: "Lyra Ignis",
        title: "Kızıl Şafak Komutanı",
        realm: "Volkanik Plazma Surları",
        appearance: "Omuzlarına dökülen ateş kızılı dalgalı saçlar, sol yanağında parlayan savaş izi, altın işlemeli obsidyen göğüs zırhı ve kor alevli pelerin.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20fierce%20female%20warrior%20commander%20wavy%20fiery%20red%20hair%20glowing%20cheek%20scar%20obsidian%20and%20gold%20chest%20armor%20crimson%20cape%20league%20of%20legends%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=102",
        vector: { W: 27, R: 10, S: 8, M: 5 },
        stats: { magic: 50, power: 98, wit: 72 },
        analysis: "Senin damarlarında kan yerine yüksek voltajlı bir adalet duygusu ve durdurulamaz bir meydan okuma ateşi akıyor. Gerçek dünyada da biri haksızlığa uğradığında ya da sana sınır çizilmeye çalışıldığında gözün hiçbir şeyi görmüyor; o an senin için hesap kitap devri kapanıp eylem devri başlıyor. Altera Evreni'nde bu kontrolsüz cesaretin seni sıradan bir asker değil, göktaşı demirinden dövülmüş zırhıyla orduların en önünde yürüyen yenilmez bir cephe komutanına dönüştürmüş.\n\nKaybetmekten korkmuyorsun, çünkü senin felsefende düşmek sadece daha sert bir karşı saldırı için yay gibi gerilmektir. İnsanlar senin yanında kendilerini güvende hissediyor çünkü fırtına koptuğunda saklanmak yerine kılıcını çekip yıldırımın üzerine yürüyen ilk kişi her zaman sensin.",
        prophecy: "Yakın gelecekte hayatında 'artık bu kadar yeter' deyip masaya yumruğunu vuracağın kritik bir kırılma noktası görünüyor. Uzun süredir sabrettiğin, alttan aldığın veya cesaret edemediğin o büyük yüzleşme için evren sana yeşil ışık yakacak. İlk adımı attığın an, gözünde büyüttüğün tüm engellerin kağıttan kaleler gibi devrildiğine şahit olacaksın; bu cesaretin sana hem özgürlük hem de hak ettiğin liderlik koltuğunu getirecek."
    },
    {
        id: 3,
        name: "Vespera Nyx",
        title: "Fısıldayan Gölgelerin Kraliçesi",
        realm: "Neon Gece Pazarı",
        appearance: "Kuzgun siyahı asimetrik kesim kısa saçlar, zümrüt yeşili keskin gözler, yüksek yakalı zırhlı deri trençkot ve plazma hançer kemeri.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20mysterious%20female%20cyber%20shadow%20assassin%20asymmetrical%20jet%20black%20short%20hair%20glowing%20emerald%20eyes%20high%20collar%20leather%20trench%20coat%20valorant%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=103",
        vector: { R: 27, S: 12, M: 7, W: 4 },
        stats: { magic: 64, power: 68, wit: 92 },
        analysis: "Kurallar senin için sadece başkalarının oyalanması için uydurulmuş basit kodlardan ibaret. Gerçek hayatta da kimseye bütün kartlarını açmayan, ortamın havasını saniyeler içinde koklayıp kendi lehine çeviren kıvrak ve tehlikeli bir zekan var. Altera'da krallıkların en gizli veri kasalarını ve yasaklı sırlarını elinde tutan, gölgelerin arasından süzülüp kimsenin izini süremediği o efsanevi hayaletsin.\n\nSenin en büyük silahın görünmezliğin değil, insanların egolarını kusursuzca okuyabilmen. Herkes gürültü çıkararak güç gösterisi yaparken, sen en karanlık köşeden tek bir hamleyle bütün oyunun fişini çekiyorsun.",
        prophecy: "Çok yakında gizli kalmış bir gerçek ya da birilerinin senden ustalıkla sakladığı bir plan tesadüfen önüne düşecek. İlk tepkin öfkelenmek olabilir ama sakın açık verme; sadece gülümse ve o bilgiyi kasana kilitle. Sessizce kendi hamleni kurguladığında, seni hafife alan herkesin oyunun kurallarını senin yazdığını fark etmesi çok uzun sürmeyecek."
    },
    {
        id: 4,
        name: "Orin Clockwork",
        title: "Zaman Dişlilerinin Baş Mimarı",
        realm: "Buhar ve Kuantum Şehri",
        appearance: "Dağınık bakır rengi kıvırcık saçlar, alnında parlayan pirinç siber-gözlükler, deri zırhlı önlük ve mavi enerji çekirdekli mekanik eldiven.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20male%20steampunk%20sci%20fi%20inventor%20messy%20copper%20curly%20hair%20glowing%20brass%20cyber%20goggles%20on%20forehead%20blue%20energy%20gauntlet%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=104",
        vector: { S: 28, M: 10, W: 6, R: 6 },
        stats: { magic: 70, power: 55, wit: 99 },
        analysis: "Senin beynin asla uyku moduna geçmeyen dev bir kuantum işlemcisi gibi çalışıyor. Plansızlıktan ve mantıksız dramlardan nefret ediyor, karşına çıkan her kaosu parçalara ayırıp daha verimli bir sistem kurarak çözüyorsun. Altera Evreni'nde kadim büyüyü yüksek teknolojiyle birleştirip imkansız makineler ve zaman bükücü cihazlar inşa eden dahi başmimarsın.\n\nİnsanlar bir sorunun karşısında 'bu imkansız' deyip ellerini havaya kaldırdığında, sen çoktan üç farklı prototip çizmiş ve en verimli olanını çalıştırmaya başlamış oluyorsun. Senin için evren çözülmesi gereken dev bir bulmacadan ibaret.",
        prophecy: "Zihninde uzun zamandır tasarladığın ama 'acaba zamanı geldi mi?' diye beklettiğin o proje, fikir veya plan için büyük hasat vakti yaklaşıyor. Önümüzdeki aylarda analitik zekan ve pratik bir çözümün sayesinde çevrendeki herkesi şaşırtacak somut bir başarı elde edeceksin. Detaylara olan takıntın bu kez sana büyük bir kapı aralayacak."
    },
    {
        id: 5,
        name: "Seraphina Mist",
        title: "Rüya Dokuyucu Bilinç Kahini",
        realm: "Biyolüminesans Lagün",
        appearance: "Su yeşili ve lavanta tonlarında örgülü uzun saçlar, inci işlemeli yarı saydam enerji şalı ve elinde sıvı ışık saçan kristal asa.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20mystical%20female%20sci%20fi%20dream%20oracle%20braided%20aqua%20and%20lavender%20long%20hair%20glowing%20crystal%20staff%20bioluminescent%20mist%20league%20of%20legends%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=105",
        vector: { M: 25, R: 12, S: 9, W: 4 },
        stats: { magic: 95, power: 38, wit: 84 },
        analysis: "Empati frekansın o kadar yüksek ki, bazen bir odaya girdiğinde insanların söylemediği cümleleri bile zihninde duyuyorsun. Gerçek dünyanın katı ve ruhsuz kuralları seni çabuk yoruyor; çünkü senin ruhun sınırların ötesinde yüzmeye alışkın. Altera Evreni'nde insanların bilinçaltına sızıp onların en derin korkularını ve gizli arzularını yeniden şekillendiren mistik bir rüya gezginisin.\n\nYaratıcılığın ve hayal gücün senin en büyük kalkanın. Başkalarının sadece karanlık gördüğü yerde sen yepyeni dünyalar inşa edebiliyorsun.",
        prophecy: "Rüyalarının ve ani içgüdülerinin ürkütücü bir netlikle gerçeğe dönüştüğü büyülü bir döneme giriyorsun. Hayatından çıkması gereken ağır bir enerji veya seni aşağı çeken bir bağ kendiliğinden çözülecek; yerine ruhunu besleyen yepyeni bir ilham ve tutku kaynağı gelecek. İçindeki sesi susturma, onu yaratıma dönüştür."
    },
    {
        id: 6,
        name: "Draven Stormborn",
        title: "Fırtına Kıran Siber-Gladyatör",
        realm: "Gökyüzü Arenası",
        appearance: "Kazınmış yanlar ve tepede toplanmış koyu kahverengi saçlar, boynunda elektrik mavisi plazma izleri, zırhlı gladyatör tuniği.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20male%20sky%20gladiator%20shaved%20sides%20dark%20brown%20top%20knot%20hair%20glowing%20electric%20blue%20lightning%20neck%20tattoos%20armored%20tunic%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=106",
        vector: { W: 26, R: 13, M: 6, S: 5 },
        stats: { magic: 58, power: 95, wit: 66 },
        analysis: "Sen baskı altında ezilen değil, üzerindeki basıncı saf enerjiye dönüştüren bir reaktör gibisin. Özgürlüğüne hastalıklı derecede düşkünsün; kimsenin seni bir kalıba sokmasına ya da zincirlemesine tahammülün yok. Altera'da gökyüzü fırtınalarının yüksek voltajını çıplak elleriyle yönlendiren, arenaların yenilmez şampiyonusun.\n\nEnerjin girdiğin her ortamın atmosferini anında değiştiriyor. İnsanlar ya senin rüzgarına kapılıp seninle birlikte yükseliyor ya da yolundan çekilmek zorunda kalıyor.",
        prophecy: "Seni yerinde saydıran ve enerjini boğan durgun bir dönem nihayet sona eriyor; yüksek tempolu bir macera başlıyor. Hem fiziksel hem de zihinsel sınırlarını zorlayacağın cesur bir meydan okuma kapıda. Korkusuzca üzerine gittiğinde, hiç beklemediğin bir zaferle taçlandırılacaksın."
    },
    {
        id: 7,
        name: "Aurelia Solis",
        title: "Altın Konsey Başyargıcı",
        realm: "Güneş İmparatorluğu",
        appearance: "Kusursuz topuz yapılmış bal sarısı saçlar, altın ışık halesi tacı, beyaz ve altın sırmalı asil imparatorluk zırhı.",
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20regal%20female%20high%20commander%20honey%20blonde%20bun%20hair%20golden%20halo%20crown%20white%20and%20gold%20imperial%20armor%20league%20of%20legends%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=107",
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
        avatarUrl: "https://image.pollinations.ai/prompt/3d%20game%20character%20portrait%20charismatic%20male%20sci%20fi%20dimension%20smuggler%20windswept%20platinum%20blonde%20hair%20holographic%20crystal%20monocle%20armored%20leather%20jacket%20arcane%20unreal%20engine%205%20render?width=600&height=600&nologo=true&seed=108",
        vector: { R: 25, S: 13, W: 7, M: 5 },
        stats: { magic: 60, power: 72, wit: 89 },
        analysis: "Tek bir yere, tek bir fikre veya tek bir sıkıcı rutine bağlı kalmak senin doğana tamamen aykırı. Meraklı, esprili ve en tehlikeli anlarda bile şaka yapabilecek kadar soğukkanlısın. Altera Evreni'nde yasaklı boyutlar arasında nadir kuantum eserleri taşıyan, hiçbir imparatorluğun yakalayamadığı o efsanevi boyut kaçakçısısın.\n\nSen
