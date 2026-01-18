const characters = [
  {
    id: 1,
    name: "Iron Man",
    realName: "Tony Stark",
    // Comic Version
    image: "https://cdn.marvel.com/content/1x/002irm_com_crd_01.jpg",
    debut: 1963, // Çizgi roman ilk çıkış yılı (Tales of Suspense #39)
    stats: { strength: 85, speed: 70, intel: 100, energy: 90, durability: 85 },
    bio: {
      en: "Tony Stark is a genius inventor and billionaire who created a powerful suit of armor. As Iron Man, he's a founding member of the Avengers.",
      tr: "Tony Stark, güçlü bir zırh yaratan dahi mucit ve milyarderdir. Iron Man olarak, Yenilmezler'in kurucu üyesidir."
    },
    movies: [6, 7, 12, 14, 28, 40, 52, 70, 75]
  },
  {
    id: 2,
    name: "Captain America",
    realName: "Steve Rogers",
    image: "https://cdn.marvel.com/content/1x/003cap_com_crd_01.jpg",
    debut: 1941,
    stats: { strength: 80, speed: 65, intel: 75, combat: 100, durability: 85 },
    bio: {
      en: "Steve Rogers was transformed from a frail young man into a super soldier. As Captain America, he represents the best of humanity.",
      tr: "Steve Rogers, zayıf bir gençten süper askere dönüştürüldü. Kaptan Amerika olarak insanlığın en iyisini temsil eder."
    },
    movies: [1, 12, 19, 28, 40, 70, 75]
  },
  {
    id: 3,
    name: "Thor",
    realName: "Thor Odinson",
    image: "https://cdn.marvel.com/content/1x/004tho_com_crd_01.jpg",
    debut: 1962,
    stats: { strength: 100, speed: 75, intel: 60, energy: 100, durability: 100 },
    bio: {
      en: "Thor is the Asgardian God of Thunder. Wielding his enchanted hammer Mjolnir, he commands lightning and protects the Realms.",
      tr: "Thor, Asgardlı Gök Gürültüsü Tanrısıdır. Büyülü çekici Mjolnir'i kullanan Thor, şimşekleri kontrol eder ve Diyarları korur."
    },
    movies: [11, 12, 17, 28, 53, 70, 75, 89]
  },
  {
    id: 4,
    name: "Black Widow",
    realName: "Natasha Romanoff",
    image: "https://cdn.marvel.com/content/1x/010blw_com_crd_01.jpg",
    debut: 1964,
    stats: { strength: 45, speed: 70, intel: 90, combat: 100, stealth: 100 },
    bio: {
      en: "Natasha Romanoff is a highly trained spy and assassin. As Black Widow, she uses her exceptional combat skills and espionage expertise.",
      tr: "Natasha Romanoff, yüksek eğitimli bir casus ve suikastçıdır. Kara Dul olarak, olağanüstü dövüş becerileri ve casusluk uzmanlığını kullanır."
    },
    movies: [7, 12, 19, 28, 40, 70, 75, 43]
  },
  {
    id: 5,
    name: "The Hulk",
    realName: "Bruce Banner",
    image: "https://cdn.marvel.com/content/1x/006hbb_com_crd_01.jpg",
    debut: 1962,
    stats: { strength: 100, speed: 50, intel: 95, durability: 100, rage: 100 },
    bio: {
      en: "Dr. Bruce Banner is a brilliant scientist who transforms into the incredible Hulk when angered, possessing unlimited strength.",
      tr: "Dr. Bruce Banner, öfkelendiğinde sınırsız güce sahip inanılmaz Hulk'a dönüşen parlak bir bilim insanıdır."
    },
    movies: [8, 12, 28, 53, 70, 75, 87]
  },
  {
    id: 6,
    name: "Hawkeye",
    realName: "Clint Barton",
    image: "https://cdn.marvel.com/content/1x/018hcb_com_crd_01.jpg",
    debut: 1964,
    stats: { strength: 45, speed: 60, intel: 75, accuracy: 100, combat: 90 },
    bio: {
      en: "Clint Barton is the world's greatest marksman. As Hawkeye, he proves that you don't need superpowers to be a hero.",
      tr: "Clint Barton, dünyanın en büyük nişancısıdır. Hawkeye olarak, kahraman olmak için süper güçlere ihtiyacınız olmadığını kanıtlar."
    },
    movies: [12, 28, 40, 70, 75, 85]
  },
  {
    id: 7,
    name: "Spider-Man",
    realName: "Peter Parker",
    image: "https://cdn.marvel.com/content/1x/005smp_com_crd_01.jpg",
    debut: 1962,
    stats: { strength: 75, speed: 90, intel: 90, agility: 100, sense: 100 },
    bio: {
      en: "Peter Parker is a young hero who gained spider-like abilities. He swings through New York City, protecting the innocent.",
      tr: "Peter Parker, örümcek benzeri yetenekler kazanan genç bir kahramandır. New York'ta sallanarak masumları korur."
    },
    movies: [40, 52, 70, 75, 82, 83]
  },
  {
    id: 8,
    name: "Black Panther",
    realName: "T'Challa",
    image: "https://cdn.marvel.com/content/1x/007blp_com_crd_01_0.jpg",
    debut: 1966,
    stats: { strength: 80, speed: 85, intel: 90, combat: 95, tech: 95 },
    bio: {
      en: "T'Challa is the King of Wakanda. Enhanced by the Heart-Shaped Herb, he protects his nation and the world with honor.",
      tr: "T'Challa, Wakanda'nın Kralıdır. Kalp Şekilli Bitki tarafından güçlendirilmiş olarak, ulusunu ve dünyayı onurla korur."
    },
    movies: [40, 48, 70, 75, 91]
  },
  {
    id: 9,
    name: "Doctor Strange",
    realName: "Stephen Strange",
    image: "https://cdn.marvel.com/content/1x/009drs_com_crd_01.jpg",
    debut: 1963,
    stats: { strength: 40, speed: 50, intel: 95, magic: 100, wisdom: 90 },
    bio: {
      en: "Dr. Stephen Strange is the Sorcerer Supreme. He wields powerful magic to protect Earth from supernatural threats.",
      tr: "Dr. Stephen Strange, Yüce Büyücüdür. Dünya'yı doğaüstü tehditlerden korumak için güçlü büyü kullanır."
    },
    movies: [47, 53, 70, 75, 83, 84]
  },
  {
    id: 10,
    name: "Scarlet Witch",
    realName: "Wanda Maximoff",
    image: "https://cdn.marvel.com/content/1x/013wmx_com_crd_01.jpg",
    debut: 1964,
    stats: { strength: 50, speed: 60, intel: 75, magic: 100, energy: 100, reality: 100 },
    bio: {
      en: "Wanda Maximoff is one of the most powerful beings. As the Scarlet Witch, she possesses chaos magic capable of warping reality.",
      tr: "Wanda Maximoff en güçlü varlıklardan biridir. Kızıl Cadı olarak, gerçekliği bükebilen kaos büyüsüne sahiptir."
    },
    movies: [28, 40, 70, 75, 78, 84]
  },
  {
    id: 11,
    name: "Vision",
    realName: "Vision",
    image: "https://cdn.marvel.com/content/1x/014vis_com_crd_01.jpg",
    debut: 1968,
    stats: { strength: 90, speed: 75, intel: 100, energy: 90, durability: 95 },
    bio: {
      en: "Vision is a synthetic being combining advanced AI with superhuman abilities. He possesses density manipulation and flight.",
      tr: "Vision, gelişmiş yapay zeka ile insanüstü yetenekleri birleştiren sentetik bir varlıktır. Yoğunluk manipülasyonu ve uçuşa sahiptir."
    },
    movies: [28, 40, 70, 78]
  },
  {
    id: 12,
    name: "Ant-Man",
    realName: "Scott Lang",
    image: "https://cdn.marvel.com/content/1x/015stl_com_crd_01.jpg",
    debut: 1979,
    stats: { strength: 75, speed: 65, intel: 70, tech: 85, stealth: 85 },
    bio: {
      en: "Scott Lang uses the Ant-Man suit to shrink or grow giant. Using Pym Particles, he became an essential Avenger.",
      tr: "Scott Lang, küçülmek veya devleşmek için Karınca Adam kostümünü kullanır. Pym Parçacıklarını kullanarak önemli bir Yenilmez oldu."
    },
    movies: [36, 40, 69, 75, 94]
  },
  {
    id: 13,
    name: "The Wasp",
    realName: "Hope Van Dyne",
    image: "https://cdn.marvel.com/content/1x/016wsp_com_crd_01.jpg",
    debut: 1963, // Jan Van Dyne olarak orijinal çıkış
    stats: { strength: 65, speed: 85, intel: 90, combat: 90, tech: 90 },
    bio: {
      en: "Hope Van Dyne is a skilled scientist and fighter. She uses her suit to shrink, fly, and fire powerful bio-electric blasts.",
      tr: "Hope Van Dyne yetenekli bir bilim insanı ve dövüşçüdür. Kostümünü küçülmek, uçmak ve güçlü biyo-elektrik patlamaları ateşlemek için kullanır."
    },
    movies: [36, 69, 75, 94]
  },
  {
    id: 14,
    name: "Star-Lord",
    realName: "Peter Quill",
    image: "https://cdn.marvel.com/content/1x/017ptq_com_crd_01.jpg",
    debut: 1976,
    stats: { strength: 60, speed: 60, intel: 70, combat: 80, charisma: 95 },
    bio: {
      en: "Peter Quill is a space adventurer and leader of the Guardians. Armed with his element guns and jet boots, he protects the cosmos.",
      tr: "Peter Quill, uzay maceracısı ve Koruyucuların lideridir. Element silahları ve jet botlarıyla donanmış olarak kozmosu korur."
    },
    movies: [21, 22, 70, 75, 53, 92, 93]
  },
  {
    id: 15,
    name: "Gamora",
    realName: "Gamora",
    image: "https://cdn.marvel.com/content/1x/018gam_com_crd_01.jpg",
    debut: 1975,
    stats: { strength: 80, speed: 80, intel: 75, combat: 100, agility: 95 },
    bio: {
      en: "Gamora is the deadliest woman in the galaxy. A master assassin, she fights to protect the innocent as a Guardian.",
      tr: "Gamora, galaksideki en ölümcül kadındır. Usta bir suikastçı olarak, bir Koruyucu sıfatıyla masumları korumak için savaşır."
    },
    movies: [21, 22, 70, 75, 93]
  },
  {
    id: 16,
    name: "Rocket",
    realName: "Rocket Raccoon",
    image: "https://cdn.marvel.com/content/1x/020roc_com_crd_01.jpg",
    debut: 1976,
    stats: { strength: 40, speed: 60, intel: 100, tech: 100, tactics: 95 },
    bio: {
      en: "Rocket is a genetically enhanced raccoon and tactician. He is an expert weapons specialist who leads with heart.",
      tr: "Rocket, genetik olarak geliştirilmiş bir rakun ve taktisyendir. Yüreğiyle liderlik eden uzman bir silah uzmanıdır."
    },
    movies: [21, 22, 70, 75, 53, 92, 93]
  },
  {
    id: 17,
    name: "Groot",
    realName: "Groot",
    image: "https://cdn.marvel.com/content/1x/019grt_com_crd_01.jpg",
    debut: 1960,
    stats: { strength: 95, speed: 45, intel: 55, durability: 95, regen: 100 },
    bio: {
      en: "Groot is a sentient tree-like creature. A loyal friend and powerful protector of the Guardians of the Galaxy.",
      tr: "Groot, duyarlı, ağaç benzeri bir yaratıktır. Sadık bir arkadaş ve Galaksinin Koruyucuları'nın güçlü bir koruyucusudur."
    },
    movies: [21, 22, 23, 70, 75, 53, 92, 93]
  },
  {
    id: 18,
    name: "Drax",
    realName: "Drax the Destroyer",
    image: "https://cdn.marvel.com/content/1x/021dra_com_crd_01.jpg",
    debut: 1973,
    stats: { strength: 95, speed: 60, intel: 50, combat: 90, durability: 95 },
    bio: {
      en: "Drax the Destroyer is a powerful warrior driven by vengeance. He is a fierce protector of the Guardians.",
      tr: "Yıkıcı Drax, intikamla hareket eden güçlü bir savaşçıdır. Koruyucuların azılı bir koruyucusudur."
    },
    movies: [21, 22, 70, 75, 53, 92, 93]
  },
  {
    id: 19,
    name: "Loki",
    realName: "Loki Laufeyson",
    image: "https://cdn.marvel.com/content/1x/022lok_com_crd_01.jpg",
    debut: 1962,
    stats: { strength: 75, speed: 70, intel: 100, magic: 95, cunning: 100 },
    bio: {
      en: "Loki is the God of Mischief. A master of illusion and manipulation, known for his unpredictable nature.",
      tr: "Loki, Yaramazlık Tanrısıdır. İllüzyon ve manipülasyon ustasıdır, öngörülemez doğasıyla bilinir."
    },
    movies: [11, 12, 17, 53, 70, 75, 76, 97]
  },
  {
    id: 20,
    name: "Daredevil",
    realName: "Matt Murdock",
    image: "https://cdn.marvel.com/content/1x/026ddm_com_crd_01.jpg",
    debut: 1964,
    stats: { strength: 60, speed: 70, intel: 85, combat: 95, senses: 100 },
    bio: {
      en: "Matt Murdock is a blind lawyer and vigilante. His senses are enhanced to superhuman levels, allowing him to 'see' through sound.",
      tr: "Matt Murdock kör bir avukat ve kanunsuzdur. Duyuları insanüstü seviyelere çıkmıştır, sesle 'görmesini' sağlar."
    },
    movies: [24, 30, 32, 34, 45, 65, 83, 87, 99, 106]
  },
  {
    id: 21,
    name: "Captain Marvel",
    realName: "Carol Danvers",
    image: "https://cdn.marvel.com/content/1x/007cpt_com_crd_01.jpg",
    debut: 1968,
    stats: { strength: 100, speed: 100, intel: 75, energy: 100, durability: 100 },
    bio: {
      en: "Carol Danvers is a cosmic hero. As Captain Marvel, she possesses immense strength and protects the entire galaxy.",
      tr: "Carol Danvers kozmik bir kahramandır. Kaptan Marvel olarak muazzam güce sahiptir ve tüm galaksiyi korur."
    },
    movies: [5, 75, 88, 96]
  },
  {
    id: 22,
    name: "Shang-Chi",
    realName: "Xu Shang-Chi",
    image: "https://cdn.marvel.com/content/1x/shangchi_com_crd_01.jpg",
    debut: 1973,
    stats: { strength: 75, speed: 85, intel: 70, combat: 100, agility: 95 },
    bio: {
      en: "Shang-Chi is the Master of Kung Fu. Trained from childhood, he uses his martial arts skills to fight for justice.",
      tr: "Shang-Chi, Kung Fu ustasıdır. Çocukluktan beri eğitilmiş olup, dövüş sanatları becerilerini adalet için kullanır."
    },
    movies: [80]
  },
  {
    id: 23,
    name: "Moon Knight",
    realName: "Marc Spector",
    image: "https://cdn.marvel.com/content/1x/moonknight_com_crd_01.jpg",
    debut: 1975,
    stats: { strength: 80, speed: 70, intel: 70, combat: 90, mystical: 90 },
    bio: {
      en: "Marc Spector is the avatar of Khonshu. With multiple personalities, Moon Knight protects the travelers of the night.",
      tr: "Marc Spector, Khonshu'nun avatarıdır. Çoklu kişilikleriyle Moon Knight, gecenin yolcularını korur."
    },
    movies: [86]
  },
  {
    id: 24,
    name: "Ms. Marvel",
    realName: "Kamala Khan",
    image: "https://cdn.marvel.com/content/1x/msmarvel_com_crd_01.jpg",
    debut: 2013,
    stats: { strength: 65, speed: 70, intel: 80, energy: 85, creativity: 100 },
    bio: {
      en: "Kamala Khan is a teenager super hero. She possesses shape-shifting abilities and a big heart.",
      tr: "Kamala Khan genç bir süper kahramandır. Şekil değiştirme yeteneklerine ve büyük bir kalbe sahiptir."
    },
    movies: [88, 96]
  },
  {
    id: 25,
    name: "She-Hulk",
    realName: "Jennifer Walters",
    image: "https://cdn.marvel.com/content/1x/shehulk_com_crd_01.jpg",
    debut: 1980,
    stats: { strength: 95, speed: 65, intel: 90, durability: 95, law: 100 },
    bio: {
      en: "Jennifer Walters is a lawyer and Hulk. She retains her intelligence when transformed and fights battles in and out of court.",
      tr: "Jennifer Walters bir avukat ve Hulk'tır. Dönüştüğünde zekasını korur, mahkeme içinde ve dışında savaşır."
    },
    movies: [87]
  }
];

export default characters;