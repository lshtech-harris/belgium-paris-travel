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
    badge: "🏛️ 經典巴黎 ＆ 羅浮宮週三夜場",
    country: "FR",
    title: "凱旋門登頂 ➔ 香榭麗舍逛街 ➔ 橘園睡蓮 ➔ 杜樂麗 ➔ 羅浮宮週三夜場 (至 21:00)",
    route: "凱旋門 → 香榭麗舍大道 (Longchamp/購物) → 午餐 → 橘園美術館 → 杜樂麗花園 → 羅浮宮金字塔夕景 → 18:00 羅浮宮夜場參觀",
    coverImage: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1200&auto=format&fit=crop",
    brief: "今日是巴黎最富代表性的一天！上午自凱旋門出發，沿著香榭麗舍林蔭大道漫步逛街；下午探訪橘園美術館沉浸於莫內的《睡蓮》，穿過杜樂麗花園。特別善用「週三延長開放至 21:00」的珍貴優勢，傍晚避開尖峰人潮進羅浮宮夜場，夜晚走出金字塔欣賞金色夜景！",
    reminders: [
      "⭐ 羅浮宮特別安排在星期三，因為週三、週五延長開放至 21:00，白天可以盡情逛街，完全不犧牲白天採光！",
      "羅浮宮聚焦三寶（蒙娜麗莎、勝利女神、維納斯）＋ 拿破崙三世套房，控制在 2.5–3 小時最舒適，避免審美疲勞。",
      "橘園美術館 (Musée de l’Orangerie) 規模小巧精緻，抓 1–1.5 小時欣賞橢圓展廳內的巨幅莫內睡蓮剛剛好。"
    ],
    mapUrl: "https://maps.google.com/?q=Louvre+Museum+Paris",
    timeline: [
      { time: "09:00", title: "巴黎咖啡館早餐", desc: "享用熱拿鐵佐酥脆法式牛角可頌", icon: "sun" },
      { time: "09:30 - 10:30", title: "巴黎凱旋門 (Arc de Triomphe)", desc: "登上頂樓觀景台俯瞰星形廣場 12 條放射狀大道（若不登頂下方拍照約 20-30 分鐘）", type: "spot", targetId: "arc-de-triomphe" },
      { time: "10:30 - 12:30", title: "香榭麗舍大道漫步 ＆ 精品購物 🛍️", desc: "沿林蔭大道慢慢走、逛旗艦店。Longchamp 可在此或後面百貨比較款式", type: "spot", targetId: "champs-elysees" },
      { time: "12:30", title: "法式午餐時光", desc: "大道周邊小巷尋訪特色小餐館享用法式烘餅或三明治", type: "food", targetId: "lunch-day5" },
      { time: "14:00 - 15:30", title: "橘園美術館 (Musée de l'Orangerie) 🎨", desc: "欣賞莫內曠世巨作《睡蓮 (Water Lilies)》連作，全景橢圓天窗展廳極度震撼", type: "spot", targetId: "orangerie" },
      { time: "15:30 - 17:00", title: "杜樂麗花園 ➔ 協和廣場 ➔ 羅浮宮外庭夕拍", desc: "漫步杜樂麗花園綠色鐵椅、協和廣場，約 17:00 天黑前拍羅浮宮金字塔與方形中庭 (Cour Carrée)", type: "spot", targetId: "tuileries-pyramid" },
      { time: "17:00 - 18:00", title: "晚餐 / 咖啡館休息充電", desc: "羅浮宮周邊享用輕食咖啡，儲備體力迎接重點夜場", type: "food", targetId: "dinner-pre-louvre" },
      { time: "18:00 - 21:00", title: "羅浮宮博物館 (Musée du Louvre) 週三夜場 ⭐️", desc: "週三延長開放至 21:00！精準走訪蒙娜麗莎、勝利女神、米洛維納斯與拿破崙三世奢華套房", type: "spot", targetId: "louvre-night" },
      { time: "21:00 後", title: "羅浮宮金字塔金色夜景 🌙", desc: "走出館外，貝聿銘玻璃金字塔在黑夜中亮起金黃色幾何光芒，美不勝收", type: "spot", targetId: "pyramid-night" }
    ]
  },
  {
    day: 6,
    date: "2026.11.05",
    weekday: "週四",
    city: "巴黎 Paris",
    badge: "🎨 文藝左岸 ＆ 奧賽週四夜場 ＆ 塞納河遊船",
    country: "FR",
    title: "聖母院 ➔ 聖禮拜堂彩繪玻璃 ➔ 左岸漫步 ➔ 奧賽夜場 (至 21:45) ➔ 塞納河夜景遊船",
    route: "巴黎聖母院 → 聖禮拜堂 (10:00預約) → 拉丁區/聖日耳曼散步 (午餐/咖啡) → 奧賽美術館 (16:30夜場) → 19:30 塞納河遊船 (賞鐵塔亮燈夜景)",
    coverImage: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop",
    brief: "今日是巴黎最富文藝氣質的一天。上午走訪西堤島兩大地標：瞻仰聖母院外觀，並在 10:00 晨光最美時刻走進聖禮拜堂，仰望 15 米高震撼彩繪玻璃窗。下午漫步拉丁區與聖日耳曼左岸咖啡館；傍晚利用「週四奧賽美術館開到 21:45」欣賞梵谷與莫內，晚間搭乘塞納河遊船，在河面遠眺艾菲爾鐵塔整點金光閃爍！",
    reminders: [
      "⭐ 聖禮拜堂 (Sainte-Chapelle) 白天光線穿透彩繪玻璃最美，務必提前預約上午 10:00 左右時段！",
      "⭐ 奧賽美術館 (Musée d'Orsay) 週四特別延長至 21:45，安排在下午 16:30 後進場，人潮更少、動線更舒適。",
      "塞納河遊船強烈建議排在晚上（19:30 班次），11 月天黑後沿途欣賞塞納河兩岸橋樑打光與艾菲爾鐵塔整點閃燈！"
    ],
    mapUrl: "https://maps.google.com/?q=Sainte-Chapelle+Paris",
    timeline: [
      { time: "09:00", title: "巴黎聖母院 (Notre-Dame)", desc: "西堤島核心，瞻仰哥德式飛扶壁與雙塔建築風采，感受歷史沉澱", type: "spot", targetId: "notre-dame" },
      { time: "10:00", title: "聖禮拜堂 (Sainte-Chapelle) ⭐️", desc: "預約 10:00 入場！陽光穿透 15 扇高達 15 米的 13 世紀瑰麗彩繪玻璃窗，宛如置身巨型珠寶盒", type: "spot", targetId: "sainte-chapelle" },
      { time: "11:00 - 13:30", title: "漫步左岸：拉丁區 ＆ 聖日耳曼德佩", desc: "穿過西堤島抵達左岸，探訪莎士比亞書店、漫步老街，在街角咖啡館享用悠閒午餐", type: "food", targetId: "left-bank-lunch" },
      { time: "14:00 - 16:00", title: "左岸自由漫步 / Le Bon Marché 百貨", desc: "走訪世界最古老精品百貨貴婦百貨 Le Bon Marché，或在聖日耳曼街區逛獨立選品店", type: "spot", targetId: "bon-marche" },
      { time: "16:30 - 19:00", title: "奧賽美術館 (Musée d'Orsay) 週四夜場 ⭐️", desc: "週四延長至 21:45！由舊火車站改建，欣賞莫內《睡蓮》、梵谷自畫像、雷諾瓦與大鐘剪影拍照", type: "spot", targetId: "orsay-night" },
      { time: "19:30 - 20:30", title: "塞納河夜景遊船 (Seine River Cruise) ⭐️", desc: "搭乘 Bateaux-Mouches 塞納河遊船，從水上仰望聖母院、羅浮宮與艾菲爾鐵塔整點金色閃燈 (20:00)！", type: "spot", targetId: "seine-night-cruise" },
      { time: "21:00", title: "左岸小酒館慶祝晚餐", desc: "品嚐法式洋蔥湯、香煎鴨胸或法式生牛肉塔塔", type: "food", targetId: "left-bank-dinner" }
    ]
  },
  {
    day: 7,
    date: "2026.11.06",
    weekday: "週五",
    city: "巴黎 ➔ 倫敦 London",
    badge: "🛍️ 蒙馬特晨光 ＆ 回倫敦歐洲之星",
    country: "FR",
    title: "蒙馬特聖心堂晨景 ➔ 巴黎春天/拉法葉最後採買 ➔ 14:30 Eurostar 回倫敦",
    route: "蒙馬特聖心堂 (09:00) → 奧斯曼大道 (拉法葉/春天/Longchamp) → 12:45 巴黎北站海關查驗 → 14:30 Eurostar 回倫敦 (15:57 抵達)",
    coverImage: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1200&auto=format&fit=crop",
    brief: "巴黎最後半天！清晨搭地鐵前往蒙馬特高地，在聖心堂居高臨下俯瞰整座巴黎清晨市景；隨後前往奧斯曼大道（拉法葉百貨與春天百貨）完成最後 Longchamp 與伴手禮退稅採買。中午 12:45 抵達巴黎北站，通過法國出境與英國入境海關，搭乘 14:30 歐洲之星滿載回憶返回倫敦！",
    reminders: [
      "⚠️ 關鍵時間點：14:30 Eurostar 前往倫敦，必須在巴黎北站完成英國移民海關查驗，閘門最遲 13:45 關閉，務必 12:45 前抵達北站！",
      "La Vallée Village outlet 在巴黎東郊 40 分鐘且 10:00 才開門，今日下午搭車完全無法塞入，在拉法葉與春天百貨買齊 Longchamp 與專櫃退稅最聰明省心！",
      "蒙馬特高地注意階梯綁紅繩的小販，雙手插口袋或快步通過即可。"
    ],
    mapUrl: "https://maps.google.com/?q=Paris+Gare+du+Nord",
    timeline: [
      { time: "08:30", title: "退房 ＆ 寄存行李於飯店/車站", desc: "享用晨間可頌咖啡，辦理退房手續", icon: "sun" },
      { time: "09:00 - 10:30", title: "蒙馬特高地聖心堂 (Sacré-Cœur) 晨景 ⭐️", desc: "純白羅馬拜占庭圓頂教堂，登上高台俯瞰巴黎全景，打卡小丘廣場與愛牆", type: "spot", targetId: "sacre-coeur" },
      { time: "10:45 - 12:15", title: "奧斯曼大道百貨最後購物 🛍️", desc: "前往 Galeries Lafayette 拉法葉百貨或 Printemps 春天百貨，採買 Longchamp 尼龍/皮質水餃包與伴手禮並辦理退稅", type: "spot", targetId: "haussmann-shopping" },
      { time: "12:15 - 12:45", title: "取行李前往巴黎北站 (Gare du Nord)", desc: "搭計程車或地鐵 4 號線前往巴黎北站", icon: "car" },
      { time: "12:45 - 14:00", title: "巴黎北站海關查驗 ＆ 登車候車 ⚠️", desc: "進入 Eurostar 專屬二樓大廳，依序通過法國出境海關、英國入境海關 (UK Border Control) 與行李安檢", icon: "train" },
      { time: "14:30 - 15:57", title: "Eurostar 高速返航倫敦 🇬🇧", desc: "搭乘 Eurostar 穿越英法海底隧道，於倫敦時間 15:57 準時抵達倫敦聖潘克拉斯車站 (St Pancras International)", icon: "train" }
    ]
  }
];
