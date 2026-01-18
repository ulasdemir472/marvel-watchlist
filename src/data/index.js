const marvelWatchOrder = [
  // --- KRONOLOJİK BAŞLANGIÇ (PHASE 1 & ÖNCESİ) ---
  {
    id: 1,
    title: "Kaptan Amerika: İlk Yenilmez - Captain America: The First Avenger",
    year: 2011,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/captainamerica_lob_crd_01.jpg"
  },
  {
    id: 3,
    title: "Ajan Carter - Agent Carter (sezon 1)",
    year: 2015,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/agentcarters2_lob_crd_03.jpg"
  },
  {
    id: 4,
    title: "Ajan Carter - Agent Carter (sezon 2)",
    year: 2016,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://m.media-amazon.com/images/I/61ZlgPIg8SL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 5,
    title: "Kaptan Marvel - Captain Marvel",
    year: 2019,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg"
  },
  {
    id: 6,
    title: "Demir Adam - Iron Man",
    year: 2008,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/ironman_lob_crd_01_3.jpg"
  },
  {
    id: 7,
    title: "Demir Adam 2 - Iron Man 2",
    year: 2010,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/ironman2_lob_crd_01_3.jpg"
  },
  {
    id: 8,
    title: "İnanılmaz Hulk - The Incredible Hulk",
    year: 2008,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/theincrediblehulk_lob_crd_03.jpg"
  },
  {
    id: 11,
    title: "Thor",
    year: 2011,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/thor_lob_crd_01.jpg"
  },
  {
    id: 12,
    title: "Yenilmezler - The Avengers",
    year: 2012,
    type: "Movie",
    phase: "Phase 1",
    poster: "https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg"
  },
  
  // --- PHASE 2 DÖNEMİ ---
  {
    id: 14,
    title: "Demir Adam 3 - Iron Man 3",
    year: 2013,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/ironman3_lob_crd_01_10.jpg"
  },
  {
    id: 16,
    title: "SHIELD'ın Ajanları (S1, Bölüm 1-7)",
    year: 2013,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Agents_of_S.H.I.E.L.D._season_1_poster.jpeg"
  },
  {
    id: 17,
    title: "Thor: Karanlık Dünya - Thor: The Dark World",
    year: 2013,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/thorthedarkworld_lob_crd_02_1.jpg"
  },
  {
    id: 18,
    title: "SHIELD'ın Ajanları (S1, Bölüm 8-16)",
    year: 2014,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Agents_of_S.H.I.E.L.D._season_1_poster.jpeg"
  },
  {
    id: 19,
    title: "Kaptan Amerika: Kış Askeri - The Winter Soldier",
    year: 2014,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/captainamericathewintersoldier_lob_crd_01_1.jpg"
  },
  {
    id: 20,
    title: "SHIELD'ın Ajanları (S1, Bölüm 17-22)",
    year: 2014,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/53/Agents_of_S.H.I.E.L.D._season_1_poster.jpeg"
  },
  {
    id: 21,
    title: "Galaksinin Koruyucuları - Guardians of the Galaxy",
    year: 2014,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/guardiansofthegalaxy_lob_crd_03.jpg"
  },
  {
    id: 23,
    title: "Ben Groot'um - I Am Groot (Sezon 1)",
    year: 2022,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/iamgroot_lob_crd_04.jpg"
  },
  {
    id: 22,
    title: "Galaksinin Koruyucuları Vol 2",
    year: 2017,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvol.2_lob_crd_01.jpg"
  },
  {
    id: 24,
    title: "Daredevil (Sezon 1)",
    year: 2015,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/daredevilss3_lob_crd_02.jpg"
  },
  {
    id: 25,
    title: "SHIELD'ın Ajanları (S2, Bölüm 1-10)",
    year: 2014,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Agents_of_S.H.I.E.L.D._season_2_poster.jpg"
  },
  {
    id: 26,
    title: "Jessica Jones (Sezon 1)",
    year: 2015,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/jessicajoness3_lob_crd_04.jpg"
  },
  {
    id: 27,
    title: "SHIELD'ın Ajanları (S2, Bölüm 11-19)",
    year: 2015,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Agents_of_S.H.I.E.L.D._season_2_poster.jpg"
  },
  {
    id: 28,
    title: "Yenilmezler: Ultron Çağı - Age of Ultron",
    year: 2015,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/avengersageofultron_lob_crd_03.jpg"
  },
  {
    id: 29,
    title: "SHIELD'ın Ajanları (S2, Bölüm 20-22)",
    year: 2015,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5e/Agents_of_S.H.I.E.L.D._season_2_poster.jpg"
  },
  {
    id: 36,
    title: "Karınca Adam - Ant-Man",
    year: 2015,
    type: "Movie",
    phase: "Phase 2",
    poster: "https://cdn.marvel.com/content/1x/ant-man_lob_crd_01_8.jpg"
  },
  {
    id: 30,
    title: "Daredevil (Sezon 2, Bölüm 1-4)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/daredevilss3_lob_crd_02.jpg"
  },
  {
    id: 31,
    title: "Luke Cage (Sezon 1, Bölüm 1-4)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/lukecages2_lob_crd_03.jpg"
  },
  {
    id: 32,
    title: "Daredevil (Sezon 2, Bölüm 5-11)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/daredevilss3_lob_crd_02.jpg"
  },
  {
    id: 33,
    title: "Luke Cage (Sezon 1, Bölüm 5-8)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/lukecages2_lob_crd_03.jpg"
  },
  {
    id: 34,
    title: "Daredevil (Sezon 2, Bölüm 12-13)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/daredevilss3_lob_crd_02.jpg"
  },
  {
    id: 35,
    title: "Luke Cage (Sezon 1, Bölüm 9-13)",
    year: 2016,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/lukecages2_lob_crd_03.jpg"
  },

  // --- PHASE 3 DÖNEMİ ---
  {
    id: 37,
    title: "SHIELD'ın Ajanları (S3, Bölüm 1-10)",
    year: 2015,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Agents_of_S.H.I.E.L.D._season_3_poster.jpg"
  },
  {
    id: 38,
    title: "SHIELD'ın Ajanları (S3, Bölüm 11-19)",
    year: 2016,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Agents_of_S.H.I.E.L.D._season_3_poster.jpg"
  },
  {
    id: 39,
    title: "Demir Yumruk - Iron Fist (Sezon 1)",
    year: 2017,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/ironfists2_lob_crd_02.jpg"
  },
  {
    id: 40,
    title: "Kaptan Amerika: İç Savaş - Civil War",
    year: 2016,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/captainamericacivilwar_lob_crd_01_9.jpg"
  },
  {
    id: 43,
    title: "Kara Dul - Black Widow",
    year: 2021,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/blackwidow_lob_crd_06.jpg"
  },
  {
    id: 44,
    title: "SHIELD'ın Ajanları (S3, Bölüm 20-22)",
    year: 2016,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Agents_of_S.H.I.E.L.D._season_3_poster.jpg"
  },
  {
    id: 45,
    title: "Savunucular - The Defenders",
    year: 2017,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/defenderss1_lob_crd_03.jpg"
  },
  {
    id: 46,
    title: "SHIELD'ın Ajanları (S4, Bölüm 1-6)",
    year: 2016,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Agents_of_S.H.I.E.L.D._season_4_poster.jpg"
  },
  {
    id: 47,
    title: "Doktor Strange",
    year: 2016,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/doctorstrange_lob_crd_01_6.jpg"
  },
  {
    id: 48,
    title: "Kara Panter - Black Panther",
    year: 2018,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/blackpanther_lob_crd_01_4.jpg"
  },
  {
    id: 49,
    title: "SHIELD'ın Ajanları (S4, Bölüm 7-8)",
    year: 2017,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Agents_of_S.H.I.E.L.D._season_4_poster.jpg"
  },
  {
    id: 50,
    title: "Agents of SHIELD: Slingshot (S1, Bölüm 1-6)",
    year: 2016,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://m.media-amazon.com/images/M/MV5BNTc4OGVkZmMtMjY3Mi00YmQwLTlmOTQtZGE5MTI4NWYzYmQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 51,
    title: "SHIELD'ın Ajanları (S4, Bölüm 9-22)",
    year: 2017,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Agents_of_S.H.I.E.L.D._season_4_poster.jpg"
  },
  {
    id: 52,
    title: "Örümcek Adam: Eve Dönüş - Homecoming",
    year: 2017,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/spider-manhomecoming_lob_crd_02.jpg"
  },
  {
    id: 53,
    title: "Thor: Ragnarok",
    year: 2017,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/thorragnarok_lob_crd_03.jpg"
  },
  {
    id: 55,
    title: "Inhumans",
    year: 2017,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/inhumanss1_lob_crd_02.jpg"
  },
  {
    id: 56,
    title: "Cezalandırıcı - The Punisher (Sezon 1)",
    year: 2017,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/thepunishers1_lob_crd_04.jpg"
  },
  {
    id: 57,
    title: "Kaçaklar - Runaways (Sezon 1)",
    year: 2017,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/runaways_lob_crd_01.jpg"
  },
  {
    id: 58,
    title: "SHIELD'ın Ajanları (S5, Bölüm 1-10)",
    year: 2017,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Agents_of_S.H.I.E.L.D._season_5_poster.jpg"
  },
  {
    id: 59,
    title: "Jessica Jones (Sezon 2)",
    year: 2018,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/jessicajoness3_lob_crd_04.jpg"
  },
  {
    id: 60,
    title: "SHIELD'ın Ajanları (S5, Bölüm 11-18)",
    year: 2018,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Agents_of_S.H.I.E.L.D._season_5_poster.jpg"
  },
  {
    id: 61,
    title: "Cloak & Dagger (Sezon 1)",
    year: 2018,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/cloakanddagger_lob_crd_01.jpg"
  },
  {
    id: 62,
    title: "Cloak & Dagger (Sezon 2)",
    year: 2019,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/cloakanddagger_lob_crd_02_1.jpg"
  },
  {
    id: 63,
    title: "Luke Cage (Sezon 2)",
    year: 2018,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/lukecages2_lob_crd_03.jpg"
  },
  {
    id: 64,
    title: "Demir Yumruk - Iron Fist (Sezon 2)",
    year: 2018,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/ironfists2_lob_crd_02.jpg"
  },
  {
    id: 65,
    title: "Daredevil (Sezon 3)",
    year: 2018,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/c3/Daredevil_D%2B_Poster.jpeg"
  },
  {
    id: 66,
    title: "Kaçaklar - Runaways (Sezon 2)",
    year: 2018,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/runaways_lob_crd_01.jpg"
  },
  {
    id: 67,
    title: "Cezalandırıcı - The Punisher (Sezon 2)",
    year: 2019,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/thepunishers2_lob_crd_04.jpg"
  },
  {
    id: 68,
    title: "Jessica Jones (Sezon 3)",
    year: 2019,
    type: "Series",
    phase: "Defenders Saga",
    poster: "https://cdn.marvel.com/content/1x/jessicajoness3_lob_crd_04.jpg"
  },
  {
    id: 69,
    title: "Karınca Adam ve Yaban Arısı - Ant-Man and the Wasp",
    year: 2018,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/ant-manthewasp_lob_crd_01.jpg"
  },
  {
    id: 70,
    title: "Yenilmezler: Sonsuzluk Savaşı - Infinity War",
    year: 2018,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/avengersinfinitywar_lob_crd_02_1.jpg"
  },
  {
    id: 71,
    title: "SHIELD'ın Ajanları (S5, Bölüm 19-22)",
    year: 2018,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Agents_of_S.H.I.E.L.D._season_5_poster.jpg"
  },
  {
    id: 72,
    title: "SHIELD'ın Ajanları (Sezon 6)",
    year: 2019,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Agents_of_S.H.I.E.L.D._season_6_poster.jpg"
  },
  {
    id: 73,
    title: "SHIELD'ın Ajanları (Sezon 7)",
    year: 2020,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/Agents_of_S.H.I.E.L.D._season_7_poster.jpg"
  },
  {
    id: 74,
    title: "Kaçaklar - Runaways (Sezon 3)",
    year: 2019,
    type: "Series",
    phase: "Marvel Television",
    poster: "https://cdn.marvel.com/content/1x/runaways_s3_lob_crd_03.jpg"
  },
  {
    id: 75,
    title: "Yenilmezler: Endgame",
    year: 2019,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05_2.jpg"
  },
  
  // --- PHASE 4 DÖNEMİ ---
  {
    id: 76,
    title: "Loki (Sezon 1)",
    year: 2021,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/loki_lob_crd_04.jpg"
  },
  {
    id: 77,
    title: "What If...? (Sezon 1)",
    year: 2021,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/whatif_lob_crd_01.jpg"
  },
  {
    id: 78,
    title: "WandaVision",
    year: 2021,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/wandavision_lob_crd_06.jpg"
  },
  {
    id: 79,
    title: "Şahin ve Kış Askeri - The Falcon and the Winter Soldier",
    year: 2021,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/falcws_lob_crd_03.jpg"
  },
  {
    id: 80,
    title: "Shang-Chi ve On Yüzük Efsanesi",
    year: 2021,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/shangchi_lob_crd_07.jpg"
  },
  {
    id: 81,
    title: "Eternals",
    year: 2021,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg"
  },
  {
    id: 82,
    title: "Örümcek Adam: Evden Uzakta - Far From Home",
    year: 2019,
    type: "Movie",
    phase: "Phase 3",
    poster: "https://cdn.marvel.com/content/1x/spider-manfarfromhome_lob_crd_04_3.jpg"
  },
  {
    id: 83,
    title: "Örümcek Adam: Eve Dönüş Yok - No Way Home",
    year: 2021,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/spider-mannowayhome_lob_crd_03.jpg"
  },
  {
    id: 84,
    title: "Doktor Strange: Deliliğin Çoklu Evreninde",
    year: 2022,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
  },
  {
    id: 85,
    title: "Hawkeye",
    year: 2021,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/hawkeye_lob_crd_04.jpg"
  },
  {
    id: 86,
    title: "Ay Şövalyesi - Moon Knight",
    year: 2022,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/moonknight_lob_crd_05.jpg"
  },
  {
    id: 87,
    title: "Dişi Hulk: Hukuk Avukatı - She-Hulk",
    year: 2022,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/shehulk_lob_crd_04.jpg"
  },
  {
    id: 88,
    title: "Ms. Marvel",
    year: 2022,
    type: "Series",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/msmarvel_lob_crd_04.jpg"
  },
  {
    id: 89,
    title: "Thor: Aşk ve Gök Gürültüsü - Love and Thunder",
    year: 2022,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg"
  },
  {
    id: 90,
    title: "Gecenin Kurt Adamı - Werewolf by Night",
    year: 2022,
    type: "Special",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/werewolfbynight_lob_crd_01.jpg"
  },
  {
    id: 91,
    title: "Kara Panter: Sonsuza Dek Wakanda",
    year: 2022,
    type: "Movie",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg"
  },
  {
    id: 92,
    title: "Galaksinin Koruyucuları Tatil Özel",
    year: 2022,
    type: "Special",
    phase: "Phase 4",
    poster: "https://cdn.marvel.com/content/1x/theguardiansofthegalaxyholidayspecial_lob_crd_02.jpg"
  },
  
  // --- PHASE 5 (GÜNCEL SAGA) ---
  {
    id: 94,
    title: "Ant-Man ve Wasp: Quantumania",
    year: 2023,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg"
  },
  {
    id: 93,
    title: "Galaksinin Koruyucuları Vol 3",
    year: 2023,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg"
  },
  {
    id: 95,
    title: "Gizli İstila - Secret Invasion",
    year: 2023,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/secretinvasion_lob_crd_04.jpg"
  },
  {
    id: 97,
    title: "Loki (Sezon 2)",
    year: 2023,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/lokis2_lob_crd_04.jpg"
  },
  {
    id: 96,
    title: "The Marvels",
    year: 2023,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg"
  },
  {
    id: 98,
    title: "What If...? (Sezon 2)",
    year: 2023,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/whatifs2_lob_crd_02.jpg"
  },
  {
    id: 99,
    title: "Echo",
    year: 2024,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/echo_lob_crd_02.jpg"
  },
  {
    id: 101,
    title: "X-Men '97",
    year: 2024,
    type: "Series",
    phase: "Animation",
    poster: "https://cdn.marvel.com/content/1x/xmen97_lob_crd_02.jpg"
  },
  {
    id: 100,
    title: "Deadpool & Wolverine",
    year: 2024,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/deadpoolandwolverine_lob_crd_03.jpg"
  },
  {
    id: 102,
    title: "Agatha All Along",
    year: 2024,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/agathaallalong_lob_crd_02.jpg"
  },
  {
    id: 103,
    title: "What If...? (Sezon 3)",
    year: 2024,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/whatifs3_lob_crd_01.jpg"
  },
  
  // --- GELECEK YAPIMLAR (UPCOMING) ---
  {
    id: 104,
    title: "Your Friendly Neighborhood Spider-Man",
    year: 2025,
    type: "Series",
    phase: "Phase 5",
    poster: "https://m.media-amazon.com/images/M/MV5BNjdiYjdmNGQtZTgzZC00MzgzLThkODctYzM4ZjRjOWJmNWFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
  },
  {
    id: 105,
    title: "Kaptan Amerika: Cesur Yeni Dünya",
    year: 2025,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://upload.wikimedia.org/wikipedia/tr/f/fc/Kaptan_Amerika%2C_Cesur_Yeni_D%C3%BCnya.jpg"
  },
  {
    id: 106,
    title: "Daredevil: Born Again",
    year: 2025,
    type: "Series",
    phase: "Phase 5",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Daredevil_Born_Again_season_1_poster.jpg/250px-Daredevil_Born_Again_season_1_poster.jpg"
  },
  {
    id: 107,
    title: "Thunderbolts*",
    year: 2025,
    type: "Movie",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/thenewavengers_lob_crd_01.jpg"
  },
  {
    id: 108,
    title: "Fantastik Dörtlü - The Fantastic Four: First Steps",
    year: 2025,
    type: "Movie",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/2x/thefantasticfourfirststeps_lob_crd_03.jpg"
  },
  {
    id: 109,
    title: "Ironheart",
    year: 2025,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/2x/ironheart_lob_crd_04.jpg"
  },
  {
    id: 110,
    title: "Marvel Zombies",
    year: 2025,
    type: "Series",
    phase: "Phase 5",
    poster: "https://cdn.marvel.com/content/1x/marvelzombies_lob_crd_03.jpg"
  },
  {
    id: 111,
    title: "Wonder Man",
    year: 2026,
    type: "Series",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/1x/wonderman_lob_crd_03.jpg"
  },
  {
    id: 115,
    title: "VisionQuest",
    year: 2026,
    type: "Series",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/1x/visionquest_lob_crd_01.jpg"
  },
  {
    id: 116,
    title: "Your Friendly Neighborhood Spider-Man (Sezon 2)",
    year: 2026,
    type: "Series",
    phase: "Animation",
    poster: "https://cdn.marvel.com/content/1x/yourfriendlyneighborhoodspidermans2_lob_crd_01.jpg"
  },
  {
    id: 117,
    title: "X-Men '97 (Sezon 2)",
    year: 2026,
    type: "Series",
    phase: "Animation",
    poster: "https://cdn.marvel.com/content/1x/xmen97_lob_crd_02.jpg"
  },
  {
    id: 118,
    title: "Daredevil: Born Again (Sezon 2)",
    year: 2026,
    type: "Series",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/1x/daredevilbornagain_lob_crd_01.jpg"
  },
  {
    id: 113,
    title: "Avengers: Doomsday",
    year: 2026,
    type: "Movie",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/2x/avengersdoomsday_lob_crd_02.jpg"
  },
  {
    id: 112,
    title: "Blade",
    year: 2027,
    type: "Movie",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/1x/blade_lob_crd_01.jpg"
  },
  {
    id: 114,
    title: "Avengers: Secret Wars",
    year: 2027,
    type: "Movie",
    phase: "Phase 6",
    poster: "https://cdn.marvel.com/content/1x/avengerssecretwars_lob_crd_02.jpg"
  }
];

export default marvelWatchOrder;