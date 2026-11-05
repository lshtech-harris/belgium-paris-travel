/**
 * Belgium & Paris Travel Companion 2026 - 全局行程與景點資料庫
 */

window.tripMeta = {
  title: "BELGIUM & PARIS 2026",
  subtitle: "倫敦出發・布魯塞爾・根特・布魯日 ＆ 巴黎迪士尼七天六夜三人秋遊",
  startDate: "2026.10.31",
  endDate: "2026.11.06",
  datesText: "10/31 (五) – 11/06 (五)",
  travelers: ["我", "朋友 A", "朋友 B"],
  travelerCount: 3,
  defaultCurrency: "EUR",
  twdExchangeRate: 35.0, // 1 EUR ≈ 35 TWD
  stats: {
    days: 7,
    countries: 2,
    cities: 4, // Brussels, Ghent, Bruges, Paris
    spots: 28,
    foods: 15
  },
  
  trains: {
    eurostarOutbound: {
      trainNo: "Eurostar (London ➔ Brussels)",
      date: "2026.10.31 (五)",
      departure: "08:16 倫敦聖潘克拉斯 (London St Pancras)",
      arrival: "11:38 布魯塞爾南站 (Bruxelles-Midi)",
      note: "英國出境查驗與比利時入境海關在倫敦完成，抵達布魯塞爾直接出站即可！"
    },
    eurostarIntercity: {
      trainNo: "Eurostar 9436 (Brussels ➔ Paris)",
      date: "2026.11.02 (日)",
      departure: "12:43 布魯塞爾南站 (Bruxelles-Midi)",
      arrival: "14:11 巴黎北站 (Paris Gare du Nord)",
      duration: "1 小時 28 分",
      note: "申根境內無護照檢查，但閘門會在發車前 15-20 分鐘停止刷票進站，建議最遲 12:15 抵達車站！"
    },
    eurostarInbound: {
      trainNo: "Eurostar (Paris ➔ London)",
      date: "2026.11.06 (五)",
      departure: "14:30 巴黎北站 (Paris Gare du Nord)",
      arrival: "15:57 倫敦聖潘克拉斯 (London St Pancras)",
      note: "⚠️ 關鍵提醒：前往英國非申根區，巴黎北站內需完成法國出境與英國入境海關檢查，請務必於 12:45–13:00 前抵達北站排隊過關！"
    },
    sncbWeekend: {
      type: "SNCB Weekend Ticket (Billet Week-end)",
      discount: "50% 票價折扣 (週五 19:00 至週日/國定假日)",
      validDates: "10/31 19:00 起、11/01 (國定假日諸聖節)、11/02 全天適用",
      note: "11/1 為諸聖節國定假日，享 50% 週末往返優惠，同線的根特中途下車出站 (Break of journey) 參觀再前往布魯日合規又省錢！"
    }
  },

  emergencyContacts: [
    { country: "歐盟統一緊急救援", tel: "112", note: "警察、救護車、消防通用" },
    { country: "比利時報警", tel: "101", note: "Police Secours" },
    { country: "駐歐盟兼駐比利時代表處", tel: "+32-2-511-0687", emergencyTel: "+32-475-472-515", note: "緊急急難救助電話" },
    { country: "駐法國台北代表處", tel: "+33-1-4439-8830", emergencyTel: "+33-6-8007-4994", note: "巴黎急難救助專線" }
  ]
};

window.dailyItineraries = [
  {
    day: 1,
    date: "2026.10.31",
    weekday: "週五",
    city: "布魯塞爾 Brussels",
    badge: "🎃 萬聖節特別夜",
    country: "BE",
    title: "倫敦出發 ➔ 抵達布魯塞爾 ➔ 歷史核心漫步 ➔ WOLF 萬聖狂歡 ➔ 大廣場金色夜景",
    route: "08:16 London St Pancras → 11:38 Bruxelles-Midi → 飯店放行李 → 聖彌額爾主教座堂 → 聖休伯特拱廊街 → 大廣場 → 尿尿小童 → WOLF Halloween → 大廣場夜景",
    coverImage: "https://images.unsplash.com/photo-1559113202-c916b8e44373?q=80&w=1200&auto=format&fit=crop",
    brief: "上午搭乘 08:16 歐洲之星跨越英法海底隧道，11:38 準時抵達布魯塞爾南站。先至飯店寄存行李，下午展開歷史中心漫步，品嚐 Dandoy 鬆餅與 Frites Atelier 頂級薯條。傍晚回飯店換裝，前往 WOLF Food Market 享受萬聖節音樂派對，深夜重返大廣場欣賞金色夜景與道地修道院啤酒。",
    reminders: [
      "景點全集中於老城區，全天步行即可輕鬆串連，不需要搭乘市區地鐵。",
      "布魯塞爾大廣場 (Grand-Place) 務必白天與晚上各看一次，夜晚金碧輝煌的打光完全是不同維度的美！",
      "Maison Dandoy 有兩種鬆餅：矩形輕脆的「布魯塞爾鬆餅 (Brussels Waffle)」與富含珍珠糖結晶扎實的「列日鬆餅 (Liège Waffle)」，推薦點各一份比較！",
      "萬聖節 WOLF Food Market 17:00 起有免費彩妝，19:00 Pre-Party，不需另外訂正式晚餐。"
    ],
    mapUrl: "https://maps.google.com/?q=Grand-Place+Brussels",
    timeline: [
      { time: "08:16 - 11:38", title: "Eurostar：倫敦 ➔ 布魯塞爾", desc: "從倫敦 St Pancras 啟程，穿越海底隧道，11:38 抵達布魯塞爾南站 (Bruxelles-Midi)", icon: "train" },
      { time: "12:00", title: "飯店寄放行李 ➔ 輕裝出發", desc: "搭乘火車或計程車至市中心飯店寄放隨身行李", icon: "user" },
      { time: "12:30", title: "午餐輕食 / Frites Atelier 頂級薯條", desc: "米其林主廚打造的比利時薯條，搭配特調松露蛋黃醬與燉牛肉醬", type: "food", targetId: "frites-atelier" },
      { time: "13:30", title: "聖彌額爾聖古都勒主教座堂", desc: "Cathédrale Saints-Michel-et-Gudule，莊嚴哥德式雙塔大教堂，精緻彩繪玻璃", type: "spot", targetId: "cathedral-brussels" },
      { time: "14:30", title: "聖休伯特拱廊街 (Galeries Royales)", desc: "19世紀新古典主義玻璃挑高拱廊街，匯聚 Neuhaus、Pierre Marcolini、Mary 等頂級比利時巧克力工坊", type: "spot", targetId: "galeries-royales" },
      { time: "15:20", title: "甜點時光：Maison Dandoy 鬆餅", desc: "百年老舖 Dandoy，品嚐外脆內輕盈的布魯塞爾鬆餅與香濃列日鬆餅", type: "food", targetId: "maison-dandoy" },
      { time: "16:00", title: "布魯塞爾大廣場 ＋ 市政廳 ⭐️", desc: "被雨果譽為「世界最美廣場」，欣賞 96 公尺市政廳塔樓與滿佈鍍金裝飾的行會建築", type: "spot", targetId: "grand-place" },
      { time: "16:45", title: "尿尿小童 (Manneken Pis)", desc: "布魯塞爾最著名地標，看小童今天穿什麼節慶服裝！路過順遊拍照", type: "spot", targetId: "manneken-pis" },
      { time: "17:15", title: "尿尿小妹 (Jeanneke Pis) ＆ Delirium 巷", desc: "位於忠實街盡頭，隔壁即為金氏世界紀錄收錄啤酒種類最多的 Delirium Café 所在巷弄", type: "spot", targetId: "jeanneke-pis" },
      { time: "17:45", title: "回飯店 Check-in 換裝休息 🎃", desc: "回飯店完成 Check-in，稍作梳洗，更換萬聖節服裝與妝容", icon: "user" },
      { time: "19:00 - 22:00", title: "Option A｜WOLF Halloween 萬聖市集派對 🎃", desc: "17 家異國美食攤位＋Live 音樂 (Afrobeats/Hip-Hop/R&B)，免費萬聖化妝與狂歡（備案：Fin de Siècle 經典燉牛肉）", type: "food", targetId: "wolf-halloween" },
      { time: "22:15", title: "大廣場金色夜景 ＋ 比利時啤酒巡禮 🍺", desc: "夜訪 Grand-Place 金碧輝煌燈光，前往木偶特色啤酒館 Poechenellekelder 或 Delirium 品嚐修道院 Trappist 啤酒", type: "spot", targetId: "brussels-beer-night" }
    ]
  },
  {
    day: 2,
    date: "2026.11.01",
    weekday: "週六",
    city: "根特 Ghent (AM) ＋ 布魯日 Bruges (PM)",
    badge: "🌉 雙城運河風情 ＆ 諸聖節",
    country: "BE",
    title: "根特中世紀天際線 ➔ 布魯日浪漫運河遊船 ➔ 玫瑰碼頭藍調夕暮",
    route: "布魯塞爾 → 根特 (聖巴夫/鐘樓/聖米歇爾橋/香草河岸) → 布魯日 (愛之湖/運河船/聖血教堂/鐘樓/玫瑰碼頭) → 布魯塞爾",
    coverImage: "https://images.unsplash.com/photo-1548685913-fe6678babe8d?q=80&w=1200&auto=format&fit=crop",
    brief: "法蘭德斯最精華雙城一日遊。上午搭乘 SNCB 抵達根特，從聖米歇爾橋遠眺經典三塔，漫步中世紀香草河岸。中午搭車前往「北方威尼斯」布魯日，首要任務搭乘運河遊船，在玫瑰碼頭守候日落藍調時刻，品嚐布魯日天鵝啤酒與暖心鬆餅，夜晚返回布魯塞爾。",
    reminders: [
      "今日為比利時國定假日「諸聖節 (All Saints' Day)」，適用 SNCB 週末票 50% 折扣！",
      "聖巴夫主教座堂上午有諸聖節彌撒（約 10:00-11:30），參觀祭壇請避開禮拜時段。",
      "⚠️ 11 月日落早（約 17:15），抵達布魯日請立刻前往運河碼頭搭船，冬季最後船班多在 16:00-16:30！",
      "布魯日不要搭回程馬車，全程石板路步行最能感受童話街道氛圍，穿著好走的休閒平底鞋。"
    ],
    mapUrl: "https://maps.google.com/?q=Bruges+Belfry",
    timeline: [
      { time: "08:30", title: "布魯塞爾搭火車前往根特", desc: "Bruxelles-Central ➔ Gent-Sint-Pieters (車程約 35 分鐘，轉乘 1 號路面電車直達舊城)", icon: "train" },
      { time: "09:30", title: "聖巴夫主教座堂 (Saint Bavo's Cathedral)", desc: "收藏北方文藝復興凡艾克兄弟國寶畫作《根特祭壇畫：神秘羔羊之崇拜》", type: "spot", targetId: "st-bavo-cathedral" },
      { time: "10:15", title: "根特鐘樓 ＋ 經典三塔天際線", desc: "與聖尼閣老教堂及主教座堂並列，UNESCO 世界文化遺產", type: "spot", targetId: "ghent-belfry" },
      { time: "11:00", title: "聖米歇爾橋 ⭐️ ＋ 香草與穀物河岸", desc: "最經典的明信片取景點，萊厄河畔香草河岸 (Graslei) 與穀物河岸 (Korenlei) 行會山形牆倒影絕美", type: "spot", targetId: "graslei-korenlei" },
      { time: "11:45", title: "格拉文斯丁伯爵城堡 (Gravensteen)", desc: "護城河環繞的中世紀雄偉石造城堡，於河畔橋上拍攝霸氣外觀", type: "spot", targetId: "gravensteen" },
      { time: "12:15", title: "根特午餐 ＆ 買甘特紫錐鼻子糖", desc: "品嚐法蘭德斯傳統奶油燉雞 (Waterzooi)，路邊推車買 Cuberdon 鼻子糖", type: "food", targetId: "ghent-lunch" },
      { time: "13:15", title: "搭火車前往布魯日", desc: "Gent-Sint-Pieters ➔ Brugge (車程僅約 25 分鐘)", icon: "train" },
      { time: "14:00", title: "愛之湖公園 (Minnewater) ＆ 天鵝湖", desc: "出火車站往舊城區必經之處，紅磚古橋、垂柳與成群白天鵝，童話氛圍拉滿", type: "spot", targetId: "minnewater" },
      { time: "14:45", title: "布魯日運河遊船 (Canal Cruise) ⭐️", desc: "最優先任務！乘小木船穿梭水都石橋與古老紅磚矮房，以水上視角看布魯日（約 35 分鐘）", type: "spot", targetId: "bruges-boat" },
      { time: "15:45", title: "城堡廣場 (Burg) ＆ 聖血教堂", desc: "哥德式聖血聖殿，珍藏十字軍東征帶回之耶穌聖血水晶瓶", type: "spot", targetId: "burg-square" },
      { time: "16:30", title: "市集廣場 (Markt) ＆ 布魯日鐘樓 ⭐️", desc: "電影《殺手沒有假期》主舞台，被七彩山形屋餐廳與 83 米高鐘樓環繞", type: "spot", targetId: "bruges-markt" },
      { time: "17:00", title: "玫瑰碼頭 (Rozenhoedkaai) 藍調夜景 ⭐️", desc: "天黑前後 17:00-17:30，暖黃街燈倒映運河水面，全布魯日最經典明信片夜景", type: "spot", targetId: "rozenhoedkaai" },
      { time: "17:30", title: "下午茶：The Waffle Duke 鬆餅", desc: "布魯日當地人氣名店，淋上濃醇比利時巧克力醬與焦糖餅乾碎脆皮鬆餅", type: "food", targetId: "waffle-duke" },
      { time: "18:15", title: "布魯日晚餐 ＆ 半月啤酒廠 Brugse Zot 🍺", desc: "品嚐法蘭德斯啤酒燉牛肉 (Carbonnade Flamande) 搭配布魯日小丑啤酒", type: "food", targetId: "bruges-dinner" },
      { time: "20:00", title: "搭火車返回布魯塞爾", desc: "Brugge ➔ Bruxelles-Central (直達車約 60 分鐘)，回飯店休息整理行李", icon: "train" }
    ]
  },
  {
    day: 3,
    date: "2026.11.02",
    weekday: "週日",
    city: "布魯塞爾 ➔ 巴黎 Paris",
    badge: "🚄 歐洲之星 ➔ 花都初相見",
    country: "FR",
    title: "布魯塞爾晨光採買 ➔ Eurostar 直奔巴黎 ➔ 塞納河新橋傍晚漫步",
    route: "布魯塞爾中心 (早餐/伴手禮/藝術山) → Bruxelles-Midi → 12:43 Eurostar 9436 → 14:11 Paris Gare du Nord → 巴黎飯店 Check-in → 傍晚塞納河漫步",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    brief: "晨間睡飽後享用悠閒早餐，在歷史中心最後巡禮，補齊比利時皇室御用巧克力 Neuhaus 與 Dandoy 焦糖餅乾。中午前往往布魯塞爾南站搭乘 12:43 Eurostar 高速列車直奔巴黎，14:11 準時抵達巴黎北站。飯店安置行李後，漫步塞納河畔、新橋與左岸，享受巴黎第一晚法式小酒館晚餐。",
    reminders: [
      "Bruxelles-Midi 站規模大且人潮多，Eurostar 閘門會在開車前 15 分鐘關閉，請務必 12:15 前抵達！",
      "巴黎北站 (Gare du Nord) 人潮極度複雜，下車與轉乘地鐵時請務必保管好後背包、手機與皮夾，切勿讓陌生人幫忙提行李。",
      "巴黎地鐵建議於手機預先加入 Navigo Easy 數位虛擬卡，進出閘門感應超方便。"
    ],
    mapUrl: "https://maps.google.com/?q=Paris+Gare+du+Nord",
    timeline: [
      { time: "09:00", title: "慢活早餐 ＆ 街區晨間散步", desc: "退房後將行李寄存在飯店櫃檯，在老城享用可頌與熱拿鐵", icon: "sun" },
      { time: "10:00", title: "伴手禮採買：皇室巧克力巡禮 🍫", desc: "Neuhaus 夾心巧克力、Pierre Marcolini 馬卡龍、Maison Dandoy 傳統焦糖脆餅 (Speculoos)", type: "spot", targetId: "chocolate-shopping" },
      { time: "10:45", title: "藝術山 (Mont des Arts) 俯瞰全城 ⭐️", desc: "花園幾何綠籬造景，眺望布魯塞爾市政廳高塔天際線，留下告別比利時最佳合照", type: "spot", targetId: "mont-des-arts" },
      { time: "11:45", title: "回飯店取行李 ➔ 出發前往南站", desc: "取回行李，前往布魯塞爾南站 (Bruxelles-Midi / Zuid)", icon: "car" },
      { time: "12:15", title: "Eurostar 刷票進站候車", desc: "出示 Eurostar 票券 QR Code 掃描進閘門，尋找月台準備登車", icon: "train" },
      { time: "12:43 - 14:11", title: "Eurostar 9436 高速奔馳", desc: "車程 1 小時 28 分鐘直達巴黎北站 (Paris Gare du Nord)", icon: "train" },
      { time: "14:40", title: "前往巴黎飯店 Check-in", desc: "搭乘計程車/地鐵前往巴黎飯店安置行李，洗漱換裝", type: "hotel", targetId: "paris-hotel" },
      { time: "16:30", title: "巴黎傍晚散步：塞納河畔 ＆ 新橋夕陽", desc: "沿塞納河畔漫步、眺望西堤島與夕陽下的橋樑倒影，感受花都浪漫氣息", type: "spot", targetId: "seine-sunset" },
      { time: "19:00", title: "巴黎第一晚法式小酒館 (Bistrot) 晚餐", desc: "品嚐經典油封鴨 (Confit de Canard) 或法式生牛肉塔塔配紅酒", type: "food", targetId: "paris-bistrot" }
    ]
  },
  {
    day: 4,
    date: "2026.11.03",
    weekday: "週一",
    city: "巴黎 ➔ 巴黎迪士尼 Disneyland",
    badge: "🏰 迪士尼歡樂一整天",
    country: "FR",
    title: "Disneyland Paris 夢想樂園全日探險 ➔ 城堡夜間無人機煙火秀",
    route: "巴黎市中心 (RER A 紅線) → Marne-la-Vallée Chessy (直達樂園門口) → 迪士尼樂園雙園/主園區 → 漫威/星戰/巨雷山 → 城堡夜間煙火秀",
    coverImage: "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?q=80&w=1200&auto=format&fit=crop",
    brief: "今日是純粹的童心與夢幻日！搭乘 RER A 紅線直達巴黎迪士尼門口。從早到晚專心玩樂園，挑戰熱門設施（巨雷山、星戰過山車、漫威復仇者校園），與經典角色合照，入夜在粉紅睡美人城堡前欣賞震撼的無人機矩陣與煙火燈光秀。",
    reminders: [
      "從巴黎市區（如 Châtelet 或 Auber）搭 RER A 紅線直達終點站 Marne-la-Vallée Chessy，車程約 40–45 分鐘。",
      "提前下載「Disneyland Paris」官方 App 查看設施排隊時間、預約餐廳或購買 Disney Premier Access 快速通關。",
      "不建議在今天硬塞 La Vallée Village outlet，迪士尼票價珍貴且園區精彩，保留完整一整天沉浸體驗最值得！"
    ],
    mapUrl: "https://maps.google.com/?q=Disneyland+Paris",
    timeline: [
      { time: "08:30", title: "搭乘 RER A 前往迪士尼樂園", desc: "搭乘 RER A 直達 Marne-la-Vallée Chessy 車站，出站即達安檢與樂園大門", icon: "train" },
      { time: "09:30", title: "入園 ＆ 睡美人城堡前拍照", desc: "穿過美國小鎮大街 (Main Street)，在全歐洲最美粉色睡美人城堡前拍攝經典大合照", type: "spot", targetId: "disney-castle" },
      { time: "10:30 - 13:00", title: "熱門遊樂設施第一波衝刺", desc: "優先衝 Big Thunder Mountain 巨雷山礦坑快車、Peter Pan's Flight、Star Wars 飛越太空山", type: "spot", targetId: "disney-rides" },
      { time: "13:00", title: "樂園特色午餐 / 主題餐廳", desc: "品嚐米奇造型披薩或主題漢堡，稍作歇息補充能量", type: "food", targetId: "disney-lunch" },
      { time: "14:30 - 18:00", title: "下午大遊行 ＆ 影城探險", desc: "觀賞歡樂迪士尼明星花車大遊行，或前往 Walt Disney Studios 體驗料理鼠王與漫威復仇者園區", type: "spot", targetId: "disney-parade" },
      { time: "18:30", title: "樂園晚餐 ＆ 紀念品商店採買", desc: "購買米奇耳朵髮箍、萬聖節/聖誕限定限定周邊與伴手禮", type: "spot", targetId: "disney-shop" },
      { time: "20:30 - 21:30", title: "夜間壓軸：Disney Illuminations 煙火無人機秀 ⭐️", desc: "城堡前壯麗的雷射投影、無人機編隊與璀璨煙火，感動收尾", type: "spot", targetId: "disney-fireworks" },
      { time: "22:00", title: "搭乘 RER A 返回巴黎市區", desc: "隨人潮搭乘 RER A 回巴黎飯店休息，回味夢幻一天", icon: "train" }
    ]
  },
  {
    day: 5,
    date: "2026.11.04",
    weekday: "週三",
    city: "巴黎 Paris",
    badge: "🏛️ 春天精品・Le 37m2・橘園・Stohrer・羅浮宮・Pho Mui",
    country: "FR",
    title: "凱旋門 ➔ 春天百貨 (Celine/Prada/Zara) ➔ Le 37m2 ➔ 14:30 橘園 ➔ Stohrer ➔ 19:00 羅浮宮夜場 ➔ Pho Mui 宵夜",
    route: "凱旋門 → RER A 4分鐘 → 春天百貨/Zara → 13:00 Le 37m2 → 14:30 橘園 → Bershka/皇家宮殿 → 16:45 Stohrer → 晚餐 → 19:00 羅浮宮夜場 → 21:20 14號線直達 Pho Mui 宵夜",
    coverImage: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1200&auto=format&fit=crop",
    brief: "今日是巴黎精品購物、經典藝術與排隊名店交織的最精彩一日！上午凱旋門登頂後搭 RER A 僅 4 分鐘直達春天百貨，直奔 Celine 與 Prada 專櫃並逛 Zara 旗艦店，全館統一辦理退稅；中午漫步至聖安娜街品嚐朋朋激推 Le 37m2 酥脆鹽酥雞便當與珍奶；下午 14:30 依約進橘園欣賞莫內《睡蓮》，逛 Rivoli 街 Bershka 與皇家宮殿黑白柱；傍晚探訪巴黎最古老 300 年老舖 Stohrer 品嚐朗姆巴巴與千層派；吃飽晚餐後 19:00 漫步羅浮宮夜場三寶，閉館後由 Pyramides 搭 14 號線 11 分鐘直達 13 區唐人街享用 Pho Mui 滾燙特別牛河宵夜！",
    reminders: [
      "⭐ 春天百貨 Celine ＆ Prada 專櫃貨量充足，一線精品雖不適用 95 折券，但全館可合併累計退稅（約 12%）；香水美妝服飾享 95 折！",
      "⭐ 美食打卡亮點：午餐 Le 37m2（聖安娜街台式鹽酥雞便當＋珍奶）、午茶 Stohrer（1730年最古老糕點舖發明朗姆巴巴）、宵夜 Pho Mui（地鐵14號線直達13區唐人街熱牛河）！",
      "⭐ 橘園已預約 14:30、羅浮宮夜場已預約 19:00。17:30–18:30 先在羅浮宮旁吃飽晚餐，才有體力走 2 小時夜場！"
    ],
    mapUrl: "https://maps.google.com/?q=Printemps+Haussmann+Paris",
    timeline: [
      { time: "09:00", title: "巴黎咖啡館早餐", desc: "享用熱拿鐵佐酥脆法式牛角可頌", icon: "sun" },
      { time: "09:30 - 10:30", title: "巴黎凱旋門 (Arc de Triomphe)", desc: "登上頂樓觀景台俯瞰星形廣場 12 條放射狀大道（若不登頂下方拍照約 20-30 分鐘）", type: "spot", targetId: "arc-de-triomphe" },
      { time: "10:30 - 10:45", title: "凱旋門搭 RER A 直達春天百貨", desc: "Charles de Gaulle 站搭 RER A 線僅 1 站（4 分鐘）直達 Auber 站，出站即達春天百貨", icon: "train" },
      { time: "10:45 - 13:00", title: "春天百貨 ＆ Zara 奧斯曼旗艦店 🛍️", desc: "春天百貨看 Celine 墨鏡、Prada 錢包與 Longchamp，全館合併辦退稅 (12%)；對面逛 4 層樓 Zara 旗艦店", type: "spot", targetId: "printemps-shopping" },
      { time: "13:00 - 14:00", title: "午餐時光：Le 37m2 台灣經典便當 ＆ 珍奶 🍱", desc: "【朋朋激推】聖安娜街人氣名店！酥脆多汁鹽酥雞便當、炸排骨飯配黑糖珍奶，家鄉味滿血復活", type: "food", targetId: "le-37m2" },
      { time: "14:00 - 14:25", title: "漫步前往橘園美術館", desc: "沿皇家大道 (Rue Royale) 經瑪德蓮教堂至協和廣場，漫步 15 分鐘至杜樂麗西南角", icon: "walk" },
      { time: "14:30 - 15:45", title: "橘園美術館 (Musée de l'Orangerie) 🎨", desc: "已預約 14:30 入場！欣賞莫內曠世巨作《睡蓮 (Water Lilies)》連作，全景橢圓天窗展廳極度震撼", type: "spot", targetId: "orangerie" },
      { time: "15:45 - 16:45", title: "Bershka Rivoli 旗艦店 ＆ 皇家宮殿 🛍️", desc: "沿杜樂麗花園旁 Rue de Rivoli 逛全巴黎最大 Bershka 旗艦店，順遊皇家宮殿拍黑白條紋柱", type: "spot", targetId: "bershka-rivoli" },
      { time: "16:45 - 17:30", title: "Stohrer 巴黎最古老烘焙糕點舖 (1730) 👑", desc: "【朋朋激推】路易十五御廚創立 300 年老舖！發明名作朗姆巴巴 (Baba au Rhum)、愛之井與千層派", type: "food", targetId: "stohrer-pastry" },
      { time: "17:30 - 18:30", title: "羅浮宮前悠閒晚餐充電 🍽️", desc: "羅浮宮內禁止飲食且將走 2 小時，此時段於周邊法式餐館或咖啡館坐下來悠閒吃晚餐補充體力", type: "food", targetId: "dinner-pre-louvre" },
      { time: "18:30 - 19:00", title: "羅浮宮金字塔黃昏外庭合照 📸", desc: "暮色籠罩下的拿破崙中庭，與貝聿銘玻璃金字塔合照，準備 19:00 預約進場", type: "spot", targetId: "pyramid-dusk" },
      { time: "19:00 - 21:00", title: "羅浮宮博物館 (Musée du Louvre) 週三夜場 ⭐️", desc: "已預約 19:00 入場（週三開放至 21:00）！精準走訪蒙娜麗莎、勝利女神、米洛維納斯與拿破崙三世奢華套房", type: "spot", targetId: "louvre-night" },
      { time: "21:00 - 21:20", title: "羅浮宮金字塔金色夜景 🌙", desc: "走出館外，貝聿銘玻璃金字塔在黑夜中亮起金黃色幾何光芒，美不勝收", type: "spot", targetId: "pyramid-night" },
      { time: "21:20 - 22:45", title: "深夜宵夜：Pho Mui 潮州越式牛肉河粉 🍜", desc: "【朋朋激推】Pyramides 搭地鐵 14 號線僅 11 分鐘直達 Olympiades！滾燙清甜大骨湯特別牛河與春捲，暖胃治癒到極點", type: "food", targetId: "pho-mui" }
    ]
  },
  {
    day: 6,
    date: "2026.11.05",
    weekday: "週四",
    city: "巴黎 Paris",
    badge: "🎨 文藝左岸 ＆ 奧賽夜場 ＆ 艾菲爾鐵塔 ＆ 遊船 ＆ 經典美食",
    country: "FR",
    title: "冠軍可頌 ➔ 聖母院 ➔ 聖禮拜堂 ➔ Bouillon 午餐 ➔ Pierre Hermé ➔ 奧賽夜場 ➔ 鐵塔遊船 ➔ Carette 宵夜",
    route: "08:30 La Maison d'Isabelle 可頌 → 聖母院 → 10:00 聖禮拜堂 → 11:30 Bouillon Chartier → 莎士比亞書店 → 13:45 Pierre Hermé → 貴婦百貨 → 17:00 奧賽 → 20:00 鐵塔遊船 → 21:50 Carette 熱可可",
    coverImage: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop",
    brief: "今日是巴黎最富文藝與極致味蕾的一天！上午自巴黎第 1 名可頌店 La Maison d'Isabelle 啟程，走訪聖母院與 10:00 晨光最璀璨的聖禮拜堂彩繪玻璃珠寶盒；中午在百年美好年代宮殿食堂 Bouillon Chartier 品嚐平價烤田螺與油封鴨腿；下午朝聖甜點界畢卡索 Pierre Hermé 巴黎總店的 Ispahan 與馬卡龍；傍晚 17:00 預約進奧賽美術館欣賞梵谷與莫內，隨後搭 RER C 直達艾菲爾鐵塔腳下搭乘 20:00 Bateaux Parisiens 遊船賞整點閃燈，下船後在夏樂宮 Carette 露天座品嚐特濃熱巧克力與鮮奶油晚宴，遙望璀璨鐵塔！",
    reminders: [
      "⭐ 美食打卡亮點：晨間 La Maison d'Isabelle（巴黎第一名AOP奶油可頌）、午餐 Bouillon Chartier（百年平價食堂烤田螺/油封鴨）、午茶 Pierre Hermé（大馬士革玫瑰荔枝 Ispahan 與馬卡龍）、宵夜 Carette Trocadéro（夏樂宮正面鐵塔濃醇熱可可配鮮奶油）！",
      "⭐ 聖禮拜堂 (Sainte-Chapelle) 白天光線穿透彩繪玻璃最美，預約上午 10:00 左右時段！",
      "⭐ 奧賽美術館已預約 11/5 17:00（週四延長開放至 21:45），請於 16:45 抵達專屬預約通道。",
      "⭐ 塞納河遊船採用 Bateaux Parisiens 純觀光 1 小時方案，登船地點在艾菲爾鐵塔腳下 Port de la Bourdonnais 3 號碼頭，20:00 啟航仰望鐵塔閃燈最夢幻！"
    ],
    mapUrl: "https://maps.google.com/?q=Eiffel+Tower+Paris",
    timeline: [
      { time: "08:30 - 09:15", title: "晨光早餐：La Maison d'Isabelle 冠軍可頌 🥐", desc: "【必吃神店】大巴黎第一名金牌奶油可頌！AOP發酵奶油外酥內嫩蜂巢組織，奶香濃郁配熱拿鐵", type: "food", targetId: "maison-isabelle" },
      { time: "09:15 - 10:00", title: "巴黎聖母院 (Notre-Dame)", desc: "西堤島核心，瞻仰哥德式飛扶壁與雙塔建築風采，感受歷史沉澱", type: "spot", targetId: "notre-dame" },
      { time: "10:00 - 11:00", title: "聖禮拜堂 (Sainte-Chapelle) ⭐️", desc: "預約 10:00 入場！陽光穿透 15 扇高達 15 米的 13 世紀瑰麗彩繪玻璃窗，宛如置身巨型珠寶盒", type: "spot", targetId: "sainte-chapelle" },
      { time: "11:30 - 13:00", title: "午餐：Bouillon Chartier 百年美好年代平價法餐 🍽️", desc: "【百年名店】挑高宮殿彩繪玻璃大食堂！侍者紙桌布手寫記帳，經典烤田螺、金黃油封鴨腿極度親民美味", type: "food", targetId: "bouillon-chartier" },
      { time: "13:00 - 13:45", title: "莎士比亞書店 (Shakespeare & Company)", desc: "探訪海明威筆下傳奇書店，木質古董書架與專屬鋼印印章", type: "spot", targetId: "shakespeare-co" },
      { time: "13:45 - 14:30", title: "午茶：Pierre Hermé 巴黎總店（馬卡龍 ＆ Ispahan）🧁", desc: "【朋朋激推】甜點界畢卡索！鎮店之寶 Ispahan（玫瑰、荔枝、覆盆子）與百香果巧克力馬卡龍", type: "food", targetId: "pierre-herme" },
      { time: "14:30 - 16:15", title: "左岸自由漫步 / Le Bon Marché 貴婦百貨", desc: "探訪世界第一家現代百貨公司，欣賞十字扶梯與頂級超市伴手禮", type: "spot", targetId: "bon-marche" },
      { time: "16:15 - 16:45", title: "沿塞納河畔漫步 ➔ 前往奧賽美術館", desc: "穿過聖日耳曼林蔭街區，沿著左岸塞納河畔悠閒走向奧賽美術館，準備於 16:45 抵達專屬通道", icon: "walk" },
      { time: "17:00 - 19:15", title: "奧賽美術館 (Musée d'Orsay) 週四夜場 ⭐️", desc: "已預約 17:00 入場（週四延長至 21:45）！欣賞莫內《睡蓮》、梵谷自畫像、雷諾瓦與大鐘剪影拍照", type: "spot", targetId: "orsay-night" },
      { time: "19:15 - 19:45", title: "奧賽搭 RER C 直奔艾菲爾鐵塔 3 號碼頭", desc: "奧賽站搭 RER C 直達 Champ de Mars - Tour Eiffel（8 分鐘），步行 6 分鐘直達 Port de la Bourdonnais", icon: "train" },
      { time: "20:00 - 21:00", title: "Bateaux Parisiens 塞納河純觀光遊船 ⭐️", desc: "持憑證於艾菲爾鐵塔腳下 3 號碼頭登船！20:00 準時啟航，仰望鐵塔整點 5 分鐘金光閃爍，1 小時遊河飽覽塞納河夜景", type: "spot", targetId: "seine-night-cruise" },
      { time: "21:00 - 21:50", title: "艾菲爾鐵塔 ＆ 夏樂宮觀景台夜拍 ⭐️", desc: "下船漫步耶拿橋拍復古旋轉木馬，登上夏樂宮 (Trocadéro) 拍正面無死角明信片全身照，看 22:00 閃燈", type: "spot", targetId: "eiffel-tower" },
      { time: "21:50 - 23:00", title: "宵夜晚宴：Carette Trocadéro 招牌熱巧克力 ＆ 晚宴 ☕️", desc: "【必吃神店】夏樂宮正對面！全巴黎最濃郁順滑熱熱可可配整碗香厚鮮奶油，佐法式洋蔥湯慶祝文藝鐵塔夜", type: "food", targetId: "carette-trocadero" }
    ]
  },
  {
    day: 7,
    date: "2026.11.06",
    weekday: "週五",
    city: "巴黎 ➔ 倫敦 London",
    badge: "🥐 蒙馬特晨景・Le Consulat・Pain Pain・14:30 返倫敦",
    country: "FR",
    title: "蒙馬特聖心堂晨景 ➔ Le Consulat 早午餐 ➔ Pain Pain 冠軍法棍外帶 ➔ 14:30 Eurostar 回倫敦",
    route: "蒙馬特聖心堂 (09:00) → 愛牆與小丘廣場 → 10:15 Le Consulat 早午餐 → 11:30 Pain Pain 外帶點心 → 12:45 巴黎北站海關查驗 → 14:30 Eurostar (15:57抵達)",
    coverImage: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1200&auto=format&fit=crop",
    brief: "巴黎最後半天！精品、美妝與快時尚已在 Day 5 買齊並辦妥退稅，今早極度從容悠閒。清晨登上蒙馬特高地在聖心堂俯瞰巴黎全景，漫步愛牆與小丘廣場；在百年傳奇咖啡館 Le Consulat 或 The Hardware Société 悠閒享用法式早午餐；離開蒙馬特前到冠軍麵包店 Pain Pain 採買熱騰騰的冠軍法棍與酥皮點心帶上高鐵；中午 12:45 準時抵達巴黎北站通過英法雙海關，搭乘 14:30 歐洲之星滿載回憶與美味返回倫敦！",
    reminders: [
      "⚠️ 關鍵時間點：14:30 Eurostar 前往倫敦，必須在巴黎北站完成英國移民海關查驗，閘門最遲 13:45 關閉，務必 12:45 前抵達北站！",
      "大採購已在 Day 5 圓滿完成，今天不用拖著行李手忙腳亂趕退稅，專注享受蒙馬特老巴黎氛圍與經典美食！",
      "早午餐與外帶：推薦 Le Consulat 藝術露天早午餐，離開前別忘記到 Pain Pain 帶一條巴黎冠軍法棍在 Eurostar 上享用！"
    ],
    mapUrl: "https://maps.google.com/?q=Paris+Gare+du+Nord",
    timeline: [
      { time: "08:30", title: "退房 ＆ 寄存行李於飯店/車站", desc: "享用晨間可頌咖啡，辦理退房手續，行李寄存櫃檯", icon: "sun" },
      { time: "09:00 - 10:15", title: "蒙馬特高地聖心堂 (Sacré-Cœur) 晨景 ＆ 愛牆漫活 ⭐️", desc: "純白羅馬拜占庭圓頂教堂，登上高台俯瞰巴黎全景，打卡小丘廣場與愛牆", type: "spot", targetId: "sacre-coeur" },
      { time: "10:15 - 11:30", title: "Le Consulat / The Hardware Société 悠閒早午餐 ☕️", desc: "【必吃名店】百年紅白藝術小餐館或人氣法式烤蛋早午餐，在石板坡道間品味慢巴黎", type: "food", targetId: "montmartre-brunch" },
      { time: "11:30 - 12:15", title: "Pain Pain 烘焙坊：採買 Eurostar 車上點心 🥖", desc: "【巴黎冠軍法棍】殉道者街藍色明星麵包店！外帶熱騰騰傳統法棍與開心果巧克力蝸牛捲上高鐵", type: "food", targetId: "pain-pain" },
      { time: "12:15 - 12:45", title: "取行李前往巴黎北站 (Gare du Nord)", desc: "搭計程車或地鐵 4 號線前往巴黎北站", icon: "car" },
      { time: "12:45 - 14:00", title: "巴黎北站海關查驗 ＆ 登車候車 ⚠️", desc: "進入 Eurostar 專屬二樓大廳，依序通過法國出境海關、英國入境海關 (UK Border Control) 與行李安檢", icon: "train" },
      { time: "14:30 - 15:57", title: "Eurostar 高速返航倫敦 🇬🇧", desc: "搭乘 Eurostar 穿越英法海底隧道，於倫敦時間 15:57 準時抵達倫敦聖潘克拉斯車站 (St Pancras International)", icon: "train" }
    ]
  }
];
