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
            { text: "Gelecekteki olasılıkları fısıldayan, içi yıldız tozu dolu çatlak bir kum saati.", scores: { M: 3, S: 1, W: 0, R: 0 } },
            { text: "Sadece sahibinin öfkesiyle alev alan, göktaşı demirinden dövülmüş ağır bir kılıç.", scores: { W: 3, M: 0, S: 0, R: 1 } },
            { text: "Evrendeki tüm kilitleri ve zihinleri açabilen, tıkırdayan mekanik bir anahtar.", scores: { S: 3, R: 1, M: 0, W: 0 } },
            { text: "Gölgeye adım attığında seni görünmez kılan, kenarları yanık kadife bir pelerin.", scores: { R: 3, M: 1, W: 0, S: 0 } }
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
        text: "Yasaklı bir ormanda yolunu kaybettin. Karşına çıkan dört geçitten hangisine yürürsün?",
        options: [
            { text: "Mor mantarların parladığı ve ağaçların fısıldadığı sisli patikaya.", scores: { M: 3, R: 1, S: 0, W: 0 } },
            { text: "Devasa dişlilerin döndüğü, buharların yükseldiği yeraltı demir kapısına.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Ejderha kemikleriyle işaretlenmiş, uçurum kenarındaki dar savaşçı yoluna.", scores: { W: 3, R: 1, M: 0, S: 0 } },
            { text: "Haritada hiç görünmeyen, sadece ay ışığı vurduğunda beliren gizli tünele.", scores: { R: 3, M: 1, S: 1, W: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 05",
        text: "Gece yatağa yattığında zihnini en çok meşgul eden düşünce genellikle nedir?",
        options: [
            { text: "'Acaba farklı bir karar verseydim hayatım şu an nasıl görünürdü?' sorgulaması.", scores: { M: 3, R: 1, S: 0, W: 0 } },
            { text: "Yarın yapacağım işlerin listesi, hedeflerim ve kurduğum uzun vadeli planlar.", scores: { S: 3, W: 1, M: 0, R: 0 } },
            { text: "Beni kısıtlayan kurallardan kurtulup tamamen özgür olacağım o büyük gün.", scores: { R: 3, W: 1, M: 0, S: 0 } },
            { text: "Sevdiklerimi koruma isteği ve aşmam gereken o büyük engelle yüzleşme cesareti.", scores: { W: 3, M: 1, S: 0, R: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 06",
        text: "Altera Konseyi sana tek bir yasaklı güç bahşedecek. Hangisini seçersin?",
        options: [
            { text: "Zamanı 10 saniye geri sarabilme ama her kullanımda bir anını unutma gücü.", scores: { S: 2, M: 2, R: 1, W: 0 } },
            { text: "İnsanların rüyalarına girip oradaki kabusları gerçek silahlara dönüştürme gücü.", scores: { M: 3, R: 2, S: 0, W: 0 } },
            { text: "Saf yıldırım enerjisini bedeninde toplayıp tek dokunuşla dağları parçalama gücü.", scores: { W: 3, S: 1, M: 0, R: 0 } },
            { text: "İstediğin kişinin yüzüne ve sesine bürünüp krallıkları içeriden çökertme gücü.", scores: { R: 3, S: 2, M: 0, W: 0 } }
        ]
    },
    {
        dimension: "GERÇEK DÜNYA YANKISI • 07",
        text: "Birisi sana açıkça yalan söylediğinde bunu nasıl anlarsın ve ne yaparsın?",
        options: [
            { text: "Ses tonundaki en ufak titreşimden anlarım ama yüzüne vurmam; koz olarak saklarım.", scores: { R: 2, S: 2, M: 1, W: 0 } },
            { text: "Gözlerinin içine baktığım an ruhundaki çelişkiyi hisseder, soğukkanlılıkla uyarırım.", scores: { M: 3, W: 1, S: 0, R: 0 } },
            { text: "Söylediklerini geçmiş verilerle karşılaştırır, mantık hatasını yüzüne çarparım.", scores: { S: 3, W: 0, R: 1, M: 0 } },
            { text: "Sabrım taşar, hiç uzatmadan doğrudan yüzleşir ve aramızdaki köprüleri yakarım.", scores: { W: 3, R: 1, S: 0, M: 0 } }
        ]
    },
    {
        dimension: "PARALEL BOYUT EŞİĞİ • 08",
        text: "Gökyüzünde iki ayın çarpıştığı 'Kızıl Tutulma' gecesinde nerede olurdun?",
        options: [
            { text: "En yüksek gözlem kulesinde, yıldız haritalarını çözüp kıyameti engellemeye çalışırken.", scores: { S: 3, M: 2, W: 0, R: 0 } },
            { text: "Kaosun ortasındaki kraliyet hazinesine sızmış, en değerli tılsımı çalarken.", scores: { R: 3, S: 1, W: 0, M: 0 } },
            { text: "Şehrin surlarında tek başıma durmuş, karanlıktan gelen orduyu beklerken.", scores: { W: 3, M: 1, S: 0, R: 0 } },
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

// 20 BENZERSİZ KARAKTER (Her birinin saçı, tarzı, kıyafeti ve vektör ağırlığı özgündür)
const CHARACTERS = [
    {
        id: 1,
        name: "Kaelen Vane",
        title: "Aether Rünlerinin Efendisi",
        realm: "Astral Kule",
        appearance: "Belinden aşağı süzülen gümüş-beyaz uzun saçlar, alnında parlayan mor rün dövmesi ve yıldız haritaları işli koyu lacivert cübbe.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaelenVane&hair=long16&hairColor=e8e8e8&skinColor=f2d3b1&clothing=robe&backgroundColor=1e1b4b",
        vector: { M: 26, S: 14, W: 4, R: 6 },
        stats: { magic: 96, power: 42, wit: 88 },
        analysis: "Sen bu dünyada bile sıradan olayların arkasındaki gizli anlamları arayan, sezgileri ürkütücü derecede güçlü birisin. Altera Evreni'nde zihnin o kadar keskin ki, zamanın dokusundaki çatlakları çıplak gözle görebiliyorsun. İnsanlar senin soğukkanlı duruşunu bazen mesafeli sansa da, aslında beyninin içinde aynı anda yedi farklı paralel senaryo hesaplıyorsun.",
        prophecy: "Önümüzdeki üç dolunay içinde, gerçek hayatında uzun süredir cevabını aradığın o karmaşık düğüm hiç beklemediğin bir tesadüfle çözülecek. Eski bir tanıdıktan gelecek şifreli bir mesaj veya ani bir teklif, seni konfor alanından çıkarıp çok daha büyük bir sahneye taşıyacak. Sezgilerine güven; zihnin sana yolu zaten fısıldıyor."
    },
    {
        id: 2,
        name: "Lyra Ignis",
        title: "Kızıl Şafak Komutanı",
        realm: "Volkanik Surlar",
        appearance: "Omuzlarına dökülen ateş kızılı dalgalı saçlar, sol yanağında savaş izi, altın işlemeli obsidyen göğüs zırhı ve alev rengi pelerin.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=LyraIgnis&hair=long04&hairColor=b91c1c&skinColor=ecad80&backgroundColor=450a0a",
        vector: { W: 27, R: 10, S: 8, M: 5 },
        stats: { magic: 50, power: 98, wit: 72 },
        analysis: "İçinde bastırılamayan bir adalet duygusu ve engel tanımayan bir ateş taşıyorsun. Gerçek dünyada da biri haksızlığa uğradığında gözün hiçbir şeyi görmüyor. Altera'da bu tutkun seni orduların en önünde yürüyen yenilmez bir lidere dönüştürmüş. Kaybetmekten korkmuyorsun, çünkü her düşüşünde daha sert ayağa kalkmayı biliyorsun.",
        prophecy: "Yakın gelecekte hayatında 'artık yeter' deyip masaya yumruğunu vuracağın kritik bir eşik görünüyor. Ertelediğin bir yüzleşme veya cesaret edemediğin o büyük başlangıç için evren sana yeşil ışık yakacak. İlk adımı attığın an, etrafındaki tüm engellerin domino taşı gibi devrildiğine şahit olacaksın."
    },
    {
        id: 3,
        name: "Vespera Nyx",
        title: "Fısıldayan Gölgelerin Kraliçesi",
        realm: "Gece Pazarı",
        appearance: "Kuzgun siyahı asimetrik kesim kısa saçlar, zümrüt yeşili keskin gözler, yüksek yakalı siyah deri trençkot ve gümüş hançer kemeri.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=VesperaNyx&hair=short05&hairColor=09090b&skinColor=f5cfa0&backgroundColor=090d16",
        vector: { R: 27, S: 12, M: 7, W: 4 },
        stats: { magic: 64, power: 68, wit: 92 },
        analysis: "Kurallar senin için sadece başkalarının uyması gereken tavsiyelerden ibaret. Gerçek hayatta da kimseye tam olarak sırrını vermeyen, ortamın havasını saniyeler içinde okuyup kendi lehine çeviren kıvrak bir zekan var. Altera'da krallıkların en gizli sırlarını elinde tutan, kimsenin yakalayamadığı o efsanevi gölgesin.",
        prophecy: "Çok yakında gizli kalmış bir gerçek veya birilerinin senden sakladığı bir plan önüne düşecek. İlk tepkin öfkelenmek olabilir ama dur ve gülümse; çünkü bu bilgi eline geçecek en güçlü koz olacak. Sessizce hamleni yaptığında oyunun kurallarını tamamen sen yazacaksın."
    },
    {
        id: 4,
        name: "Orin Clockwork",
        title: "Zaman Dişlilerinin Baş Mimarı",
        realm: "Buhar ve Pirinç Şehri",
        appearance: "Dağınık bakır rengi kıvırcık saçlar, alnında pirinç mekanik gözlükler, yağ lekeli deri önlük ve parlayan mavi enerji çekirdekli eldiven.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=OrinClockwork&hair=short12&hairColor=c2410c&skinColor=f2d3b1&glasses=variant02&backgroundColor=271c19",
        vector: { S: 28, M: 10, W: 6, R: 6 },
        stats: { magic: 70, power: 55, wit: 99 },
        analysis: "Senin beynin asla durmayan dev bir saat mekanizması gibi çalışıyor. Kaostan nefret ediyor, her soruna rasyonel ve yaratıcı bir sistem kurarak yaklaşıyorsun. Altera Evreni'nde büyü ile teknolojiyi birleştirip imkansız makineler inşa eden dahi mucitsin. İnsanlar 'yapılamaz' dediğinde sen çoktan prototipi çizmiş oluyorsun.",
        prophecy: "Zihninde uzun zamandır tasarladığın ama 'acaba tutar mı?' diye beklediğin o proje veya fikir için hasat vakti yaklaşıyor. Önümüzdeki aylarda teknik bir becerin veya analitik bir çözümün sayesinde çevrendeki herkesi şaşırtacak bir başarı elde edeceksin. Detaylara olan takıntın bu kez sana büyük kazandıracak."
    },
    {
        id: 5,
        name: "Seraphina Mist",
        title: "Rüya Dokuyucu Kahin",
        realm: "Sisli Lagün",
        appearance: "Su yeşili ve lavanta tonlarında örgülü uzun saçlar, inci işlemeli yarı saydam şal ve elinde su damlası formunda parlayan asa.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=SeraphinaMist&hair=long19&hairColor=7e22ce&skinColor=fae7d0&backgroundColor=1e1b4b",
        vector: { M: 25, R: 12, S: 9, W: 4 },
        stats: { magic: 95, power: 38, wit: 84 },
        analysis: "Empati yeteneğin o kadar yüksek ki, bazen başkalarının duygularını kendi duygularınla karıştırıyorsun. Hayal gücün sınırsız ve gerçek dünyanın sıkıcı rutinleri seni çabuk boğuyor. Altera'da insanların zihinlerine sızıp onların en derin arzularını ve korkularını şekillendiren mistik bir rüya gezginisin.",
        prophecy: "Rüyalarının ve ani içgüdülerinin tuhaf bir şekilde gerçeğe dönüştüğü bir döneme giriyorsun. Hayatından çıkması gereken toksik bir alışkanlık veya kişi kendiliğinden uzaklaşacak; yerine ruhunu besleyen yepyeni bir ilham kaynağı gelecek. Yaratıcılığını saklama, onu dışa vur."
    },
    {
        id: 6,
        name: "Draven Stormborn",
        title: "Fırtına Kıran Gladyatör",
        realm: "Gökyüzü Arenası",
        appearance: "Kazınmış yanlar ve tepede toplanmış koyu kahverengi saçlar, boynunda elektrik mavisi şimşek izleri, kolsuz zırhlı tunik.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=DravenStorm&hair=short02&hairColor=3f2e21&skinColor=d08b5b&backgroundColor=0f172a",
        vector: { W: 26, R: 13, M: 6, S: 5 },
        stats: { magic: 58, power: 95, wit: 66 },
        analysis: "Sen baskı altında ezilen değil, baskıyı yakıta çeviren bir karaktersin. Özgürlüğüne düşkünsün ve kimsenin seni kafese kapatmasına izin vermezsin. Altera'da gökyüzü fırtınalarının enerjisini çıplak elleriyle yönlendiren, arenaların yenilmez şampiyonusun. Enerjin girdiğin her ortamın havasını anında değiştiriyor.",
        prophecy: "Seni yerinde saydıran durgun bir dönem bitiyor ve yüksek tempolu bir macera başlıyor. Fiziksel olarak da zihinsel olarak da sınırlarını zorlayacağın bir meydan okuma kapıda. Korkusuzca üzerine gittiğinde, hiç beklemediğin bir zaferle ödüllendirileceksin."
    },
    {
        id: 7,
        name: "Aurelia Solis",
        title: "Altın Konsey Başyargıcı",
        realm: "Güneş İmpartorluğu",
        appearance: "Kusursuz topuz yapılmış bal sarısı saçlar, altın defne tacı, beyaz ve altın sırmalı asil imparatorluk üniforması.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=AureliaSolis&hair=long08&hairColor=eab308&skinColor=f2d3b1&backgroundColor=422006",
        vector: { S: 25, W: 14, M: 7, R: 4 },
        stats: { magic: 68, power: 82, wit: 94 },
        analysis: "Doğal bir otoriten ve sarsılmaz bir duruşun var. İnsanlar karmaşaya düştüğünde gözleri otomatik olarak seni arıyor çünkü sen her zaman ne yaptığını biliyormuş gibi görünüyorsun. Altera'da koca bir imparatorluğun yasalarını yazan, tek sözüyle savaşları başlatıp bitiren yüce başyargıçsın.",
        prophecy: "Yakında liderlik vasıflarını sergilemen gereken önemli bir sorumluluk üstleneceksin. Başkalarının kararsız kaldığı bir noktada senin net duruşun hem sana büyük bir prestij kazandıracak hem de maddi/manevi kapıları ardına kadar açacak."
    },
    {
        id: 8,
        name: "Zephyr Ashwalker",
        title: "Boyutlar Arası Kaçakçı",
        realm: "Sınır Boşluğu",
        appearance: "Rüzgardan dağılmış platin sarısı kısa saçlar, tek gözünde kristal mercek, çok cepli yıpranmış deri ceket ve atkı.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=ZephyrAsh&hair=short15&hairColor=f4f4f5&skinColor=ecad80&backgroundColor=18181b",
        vector: { R: 25, S: 13, W: 7, M: 5 },
        stats: { magic: 60, power: 72, wit: 89 },
        analysis: "Tek bir yere, tek bir fikre veya tek bir rutine bağlı kalmak senin doğana aykırı. Meraklı, esprili ve kriz anlarında bile şaka yapabilecek kadar soğukkanlısın. Altera Evreni'nde yasaklı boyutlar arasında nadir eserler taşıyan, kimsenin izini süremediği efsanevi bir kaçakçısın.",
        prophecy: "Ani bir rota değişikliği veya beklenmedik bir yolculuk planı kapını çalacak. İlk başta plansız göründüğü için tereddüt edebilirsin ama bu ani fırsat seni hayal bile edemeyeceğin kadar renkli insanlarla ve yeni ufuklarla tanıştıracak."
    },
    {
        id: 9,
        name: "Malakor Thorne",
        title: "Karanlık Köklerin Simyacısı",
        realm: "Zehirli Bataklık",
        appearance: "Omuzlarına düşen koyu zümrüt yeşili saçlar, keskin elmacık kemikleri, şişelerle dolu deri kemer ve kadife simyacı ceketi.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=MalakorThorne&hair=long11&hairColor=14532d&skinColor=f5cfa0&backgroundColor=052e16",
        vector: { M: 22, S: 18, R: 7, W: 3 },
        stats: { magic: 90, power: 45, wit: 93 },
        analysis: "Merakın seni her zaman sınırların ötesine itiyor. Başkalarının korkup kaçtığı konuları sen laboratuvar masasına yatırıp inceliyorsun. Altera'da en ölümcül zehirlerden hayat iksiri üretebilen, doğanın gizli formüllerini çözmüş karanlık ama dahi bir simyacısın.",
        prophecy: "Geçmişte yaşadığın bir hayal kırıklığını veya seni üzen bir tecrübeyi, tıpkı bir simyacı gibi altına dönüştüreceğin bir süreç başlıyor. Öğrendiğin o acı ders, çok yakında karşına çıkacak büyük bir fırsatta senin en büyük avantajın olacak."
    },
    {
        id: 10,
        name: "Soren Frostblade",
        title: "Kuzey Buzullarının Sessiz Muhafızı",
        realm: "Sonsuz Kış Diyarı",
        appearance: "Buz mavisi düz saçlar, soluk ten, beyaz kurt kürkü omuzluklar ve kristal buzdan dövülmüş çift elli kılıç.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=SorenFrost&hair=short08&hairColor=38bdf8&skinColor=fae7d0&backgroundColor=082f49",
        vector: { W: 24, S: 15, M: 6, R: 5 },
        stats: { magic: 62, power: 91, wit: 81 },
        analysis: "Dışarıdan bakıldığında buz gibi soğukkanlı ve sarsılmaz görünüyorsun, ancak sevdiklerin söz konusu olduğunda içinde sönmeyen bir sadakat ateşi yanıyor. Gereksiz konuşmaları sevmiyor, icraatlarınla konuşuyorsun. Altera'da tek başına bir geçidi bin kişilik orduya karşı savunan efsanevi muhafızsın.",
        prophecy: "Sabrının ve sadakatinin test edildiği sessiz bir dönemin sonuna geldin. Yakında verdiğin emeklerin karşılığını somut olarak göreceksin; sana güvenen insanların desteğiyle sarsılmaz bir konuma yükseleceksin."
    },
    {
        id: 11,
        name: "Nyxia Ravenscroft",
        title: "Kuzgun Ruhu Çağırıcısı",
        realm: "Kül Ormanı",
        appearance: "Koyu mor ve siyah karışımı dağınık saçlar, tüylü omuzluklar, gümüş yüzüklerle dolu parmaklar ve gotik büyücü kıyafeti.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=NyxiaRaven&hair=long14&hairColor=3b0764&skinColor=f2d3b1&backgroundColor=171717",
        vector: { M: 24, R: 16, W: 5, S: 5 },
        stats: { magic: 92, power: 54, wit: 82 },
        analysis: "Sıradanlık seni hasta ediyor. Karanlık estetiğe, derin felsefi sorulara ve gizemli hikayelere doğal bir çekimin var. İnsanların maskelerinin ardındaki gerçek yüzlerini saniyeler içinde görüyorsun. Altera'da kadim kuzgunların gözünden tüm kıtayı izleyen gizemli ruh çağırıcısın.",
        prophecy: "Hayatındaki sahte maskelerin tek tek düşeceği bir aydınlanma dönemine giriyorsun. Kimin gerçek dost, kimin sadece çıkarı için yanında olduğunu net bir şekilde görecek ve enerjini yalnızca seni gerçekten hak edenlere saklayacaksın."
    },
    {
        id: 12,
        name: "Cassian Volt",
        title: "Yıldırım Mühendisi",
        realm: "Gökyüzü Tersanesi",
        appearance: "Elektrik mavisi dik saçlar, neon parıltılı teknolojik vizör, koyu gri zırhlı ceket ve sırtında plazma jeneratörü.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=CassianVolt&hair=short04&hairColor=0284c7&skinColor=ecad80&backgroundColor=0f172a",
        vector: { S: 24, R: 15, W: 7, M: 4 },
        stats: { magic: 55, power: 76, wit: 95 },
        analysis: "Hızlı düşünen, sabırsız ve her zaman bir adım sonrasını kurgulayan hiperaktif bir zekan var. Geleneksel yöntemler sana göre değil; her şeyin daha hızlı ve daha akıllı bir yolunu mutlaka buluyorsun. Altera'da uçan savaş gemilerinin motorlarını yıldırım enerjisiyle çalıştıran asi başmühendissin.",
        prophecy: "Hızla gelişen beklenmedik bir olay zinciri seni yepyeni bir ortama taşıyacak. Zekice ve pratik bir hamlen sayesinde, başkalarının aylarca uğraşıp çözemediği bir işi birkaç günde bitirip dikkatleri üzerine çekeceksin."
    },
    {
        id: 13,
        name: "Thalia Verdant",
        title: "Kadim Köklerin Koruyucusu",
        realm: "Zümrüt Yağmur Ormanı",
        appearance: "Çiçekler ve sarmaşıklarla örülü kestane rengi uzun saçlar, yosun yeşili pelerin ve ahşap zırh parçaları.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=ThaliaVerdant&hair=long02&hairColor=5c3a21&skinColor=d08b5b&backgroundColor=064e3b",
        vector: { M: 21, W: 14, S: 9, R: 6 },
        stats: { magic: 86, power: 74, wit: 78 },
        analysis: "Doğaya, hayvanlara ve organik bağlara derinden bağlı, huzur veren ama damarına basıldığında doğa afeti kadar yıkıcı olabilen birisin. İnsanları iyileştiren, onlara akıl veren bir enerjin var. Altera'da devasa kadim ağaçları uyandırıp orduları durduran doğa rahibesisin.",
        prophecy: "Uzun süredir ektiğin iyilik ve sabır tohumlarının filizlenme zamanı geldi. Hayatında huzur bulacağın, kendini gerçekten ait hissedeceğin yeni bir çevre veya ev düzeni kuracaksın. Ruhsal olarak yenileneceğin bereketli bir dönem seni bekliyor."
    },
    {
        id: 14,
        name: "Riven Cross",
        title: "Kızıl Ay Avcısı",
        realm: "Lanetsiz Sınır",
        appearance: "Alnına düşen gümüş perçemli siyah saçlar, geniş kenarlı avcı şapkası, uzun deri palto ve gümüş işlemeli arbalet.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=RivenCross&hair=short10&hairColor=18181b&skinColor=f2d3b1&backgroundColor=27272a",
        vector: { W: 21, R: 18, S: 7, M: 4 },
        stats: { magic: 48, power: 89, wit: 84 },
        analysis: "Tek başına hareket etmeyi seven, kimseye borçlu kalmaktan hoşlanmayan keskin nişancı ruhlu birisin. Hem fiziksel cesaretin hem de taktiksel zekan çok yüksek. Altera Evreni'nde karanlık yaratıkları avlayan, adı tavernalarda saygıyla fısıldanan yalnız kurt avcısısın.",
        prophecy: "Kendi başına verdiğin bir kararın ne kadar doğru olduğunu kanıtlayacağın bir olay yaşayacaksın. Çevrendekilerin 'yapamazsın' dediği bir hedefi tam on ikiden vuracak ve özgürlüğünü kendi ellerinle ilan edeceksin."
    },
    {
        id: 15,
        name: "Elowen Starweaver",
        title: "Göksel Kütüphaneci",
        realm: "Bulutların Üstündeki Arşiv",
        appearance: "Altın simli açık kumral dalgalı saçlar, hilal şeklinde saç tokası, yıldız tozlu beyaz ve lacivert cübbe.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=ElowenStar&hair=long06&hairColor=b45309&skinColor=fae7d0&backgroundColor=1e1b4b",
        vector: { S: 22, M: 20, R: 5, W: 3 },
        stats: { magic: 89, power: 35, wit: 97 },
        analysis: "Bilgi senin için en büyük güç. Bir konuyu merak ettiğinde gece yarısına kadar araştıran, detayları birleştiren entelektüel bir ruhun var. Altera'da evrenin başlangıcından beri yazılmış tüm kader kitaplarının saklandığı Göksel Kütüphane'nin baş koruyucususun.",
        prophecy: "Okuduğun, izlediğin veya tesadüfen duyduğun küçük bir bilgi kırıntısı, yakın gelecekte hayatındaki büyük bir problemi çözmeni sağlayacak. Merakının peşinden gitmeye devam et; aradığın cevap hiç beklemediğin bir sayfada gizli."
    },
    {
        id: 16,
        name: "Bram Ironheart",
        title: "Örs ve Çekiç Efendisi",
        realm: "Cüce Dağları",
        appearance: "Örgülü gür kestane sakal ve kısa saçlar, ateşten kızarmış kollar, ağır demirci önlüğü ve rünlü savaş çekici.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=BramIron&hair=short01&hairColor=78350f&skinColor=ecad80&backgroundColor=431407",
        vector: { W: 22, S: 19, M: 5, R: 4 },
        stats: { magic: 52, power: 94, wit: 85 },
        analysis: "Sağlam, güvenilir ve temeli olmayan hiçbir şeye inanmayan taş gibi bir karaktersin. Söz verdiğinde dünyalar yıkılsa o sözü tutarsın. Altera Evreni'nde kralların uğruna savaştığı efsanevi silahları kendi elleriyle döven yüce zanaatkar ustasısın.",
        prophecy: "Emek verip ilmek ilmek işlediğin bir iş veya ilişki artık meyvelerini vermeye başlıyor. Geçici heveslerin değil, kalıcı değerlerin kazanacağı bir sürece giriyorsun; sağlam duruşun sana büyük bir saygınlık getirecek."
    },
    {
        id: 17,
        name: "Sylas Mirage",
        title: "Aynalar Labirentinin Prensi",
        realm: "Kristal Çöl",
        appearance: "Gümüşi mavi parlak saçlar, hipnotize edici kehribar gözler, prizma gibi ışık yansıtan ipek tunik.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=SylasMirage&hair=short14&hairColor=93c5fd&skinColor=f2d3b1&backgroundColor=311042",
        vector: { R: 22, M: 19, S: 6, W: 3 },
        stats: { magic: 91, power: 44, wit: 87 },
        analysis: "İnsanları etkileme, ikna etme ve gerçeği istediğin gibi bükme konusunda doğuştan gelen bir karizman var. Kimse senin ne düşündüğünü tam olarak bilemiyor. Altera'da düşmanlarını kendi yarattığı illüzyon labirentlerinde hapseden gizemli ayna büyücüsüsün.",
        prophecy: "Yakında ikna kabiliyetini ve sosyal zekanı kullanman gereken kritik bir görüşme veya fırsat doğacak. İnsanların ne duymak istediğini tam olarak bildiğin için bu durumdan istediğin sonucu alarak çıkacaksın."
    },
    {
        id: 18,
        name: "Freya Valkyrie",
        title: "Gök Kubbe Süvarisi",
        realm: "Bulut Kaleleri",
        appearance: "Rüzgarda uçuşan altın sarısı uzun saçlar, kanatlı gümüş miğfer ve gökyüzü mavisi pelerin.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=FreyaValkyrie&hair=long01&hairColor=facc15&skinColor=fae7d0&backgroundColor=0369a1",
        vector: { W: 23, M: 16, S: 6, R: 5 },
        stats: { magic: 78, power: 90, wit: 74 },
        analysis: "Yüksek idealleri olan, cesur ve ilham verici bir ruhun var. Küçük hesapların peşinde koşmak yerine her zaman daha yüce bir amaca hizmet etmek istiyorsun. Altera'da kanatlı küheylanıyla bulutların arasından süzülüp karanlığı yaran göksel süvarisin.",
        prophecy: "Ufkunun genişleyeceği, hayata çok daha yukarıdan ve net bakacağın bir döneme giriyorsun. Seni aşağı çeken küçük dertlerden sıyrılacak ve büyük hedeflerine doğru hızla kanatlanacaksın."
    },
    {
        id: 19,
        name: "Dante Cipher",
        title: "Kaos Teorisyeni",
        realm: "Parçalanmış Boyut",
        appearance: "Siyah ve beyaz iki renkli dağınık saçlar, asimetrik ceket ve havada süzülen geometrik ışık küpleri.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=DanteCipher&hair=short09&hairColor=e4e4e7&skinColor=f2d3b1&backgroundColor=18181b",
        vector: { S: 21, R: 20, M: 5, W: 4 },
        stats: { magic: 66, power: 62, wit: 98 },
        analysis: "Senin zihnin hem bir satranç ustası kadar disiplinli hem de bir anarşist kadar öngörülemez. Sistemin açıklarını saniyeler içinde bulup kendi lehine kullanıyorsun. Altera'da boyutlar arasındaki yasaklı kapıları matematiksel şifrelerle hackleyen asi dehasın.",
        prophecy: "Herkesin kilitli sandığı bir kapının şifresini çözeceğin sürpriz bir gelişme kapıda. Alışılmışın dışındaki düşünce tarzın sayesinde, tamamen tıkanmış görünen bir meselede dahiyane bir çıkış yolu bulacaksın."
    },
    {
        id: 20,
        name: "Aetheris The Balanced",
        title: "Dört Elementin Köprüsü",
        realm: "Merkez Tapınağı",
        appearance: "Omuz hizasında gece mavisi saçlar, alnında dört elementin sembolü, altın ve siyah dengeli kutsal zırh.",
        avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=AetherisPrime&hair=long10&hairColor=1e3a8a&skinColor=ecad80&backgroundColor=2e1065",
        vector: { M: 14, W: 14, S: 14, R: 8 },
        stats: { magic: 85, power: 85, wit: 85 },
        analysis: "Sen nadide bir denge ruhusun. Ne tamamen duygularının esirisin ne de buz gibi bir mantık makinesi. Gerektiğinde savaşmayı, gerektiğinde geri çekilip strateji kurmayı bilen çok yönlü bir bukalemun gibisin. Altera Evreni'nde savaşan dört büyük diyarı bir arada tutan efsanevi denge koruyucususun.",
        prophecy: "Hayatındaki farklı alanların (iş, özel hayat, kişisel hedefler) nihayet uyumlu bir dengeye oturduğu altın bir döneme giriyorsun. İki zıt durum veya kişi arasında kuracağın köprü, hem sana hem etrafındakilere büyük bir ferahlık getirecek."
    }
];
