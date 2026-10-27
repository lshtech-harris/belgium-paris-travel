/**
 * Belgium & Paris Travel Companion 2026 - 全局行程與景點資料庫
 */

window.tripMeta = {
  title: "BELGIUM & PARIS 2026",
  subtitle: "比利時布魯塞爾・根特・布魯日 ＆ 浪漫巴黎七天六夜三人秋遊",
  startDate: "2026.10.31",
  endDate: "2026.11.06",
  datesText: "10/31 (五) – 11/06 (四)",
  travelers: ["我", "朋友 A", "朋友 B"],
  travelerCount: 3,
  defaultCurrency: "EUR",
  twdExchangeRate: 35.0, // 1 EUR ≈ 35 TWD
  stats: {
    days: 7,
    countries: 2,
    cities: 4, // Brussels, Ghent, Bruges, Paris
    spots: 26,
    foods: 14
  },
  
  trains: {
    eurostar: {
      trainNo: "Eurostar 9436",
      date: "2026.11.02 (日)",
      departure: "12:43 布魯塞爾南站 (Bruxelles-Midi)",
      arrival: "14:05 巴黎北站 (Paris Gare du Nord)",
      duration: "1 小時 22 分",
      note: "申根境內無護照檢查，但閘門會在發車前 15-20 分鐘停止刷票進站，建議最遲 12:15 抵達車站！"
    },
    sncbWeekend: {
      type: "SNCB Weekend Ticket (Billet Week-end)",
      discount: "50% 票價折扣 (週五 19:00 至週日/國定假日)",
      validDates: "10/31 19:00 起、11/01 (國定假日諸聖節)、11/02 全天適用",
      note: "比利時 11/1 為諸聖節國定假日，可享受 50% 往返特惠，在同線上的根特出站 (Break of journey) 參觀再前往布魯日超方便！"
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
    title: "抵達布魯塞爾 ➔ 歷史核心漫步 ➔ WOLF 萬聖狂歡 ➔ 大廣場金色夜景",
    route: "布魯塞爾機場/車站 → 聖彌額爾主教座堂 → 聖休伯特拱廊街 → 大廣場 → 尿尿小童 → WOLF Halloween → 大廣場夜景",
    coverImage: "https://images.unsplash.com/photo-1559113202-c916b8e44373?q=80&w=1200&auto=format&fit=crop",
    brief: "中午抵達布魯塞爾後先將行李安置於飯店。下午展開布魯塞爾歷史中心步行巡禮，在世界最美大廣場與華麗拱廊街品嚐頂級巧克力與雙派比利時鬆餅。傍晚回飯店換裝，前往 WOLF Food Market 享受萬聖派對，深夜重返大廣場欣賞歐洲最震撼的金色夜景與道地修道院啤酒。",
    reminders: [
      "景點全集中於老城區，全天步行即可輕鬆串連，不需要搭乘市區地鐵。",
      "布魯塞爾大廣場 (Grand-Place) 務必白天與晚上各看一次，夜晚金碧輝煌的打光完全是不同維度的美！",
      "Maison Dandoy 有兩種鬆餅：矩形輕脆的「布魯塞爾鬆餅 (Brussels Waffle)」與富含珍珠糖結晶扎實的「列日鬆餅 (Liège Waffle)」，推薦點各一份比較！",
      "萬聖節 WOLF Food Market 17:00 起有免費彩妝，19:00 Pre-Party，不需另外訂正式晚餐。"
    ],
    mapUrl: "https://maps.google.com/?q=Grand-Place+Brussels",
    timeline: [
      { time: "11:40", title: "抵達布魯塞爾", desc: "抵達布魯塞爾機場 (BRU) 或火車站，搭乘快線前往市中心飯店寄存行李", icon: "plane" },
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
    brief: "今日展開法蘭德斯最精華雙城一日遊。上午搭乘 SNCB 抵達根特，從聖米歇爾橋遠眺經典三塔，漫步中世紀香草河岸。中午搭車前往「北方威尼斯」布魯日，首要任務搭乘運河遊船，在玫瑰碼頭守候日落藍調時刻，品嚐布魯日天鵝啤酒與暖心鬆餅，夜晚返回布魯塞爾。",
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
    badge: "🚄 跨國歐洲之星",
    country: "FR",
    title: "布魯塞爾晨光採買 ➔ Eurostar 奔向巴黎 ➔ 花都初相見",
    route: "布魯塞爾中心 (早餐/伴手禮/藝術山) → Bruxelles-Midi → 12:43 Eurostar 9436 → 14:05 Paris Gare du Nord → 巴黎飯店 Check-in → 傍晚塞納河漫步",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    brief: "晨間睡飽後享用悠閒早餐，在歷史中心最後巡禮，補齊比利時皇室御用巧克力 Neuhaus 與 Dandoy 焦糖餅乾。中午前往往布魯塞爾南站搭乘 12:43 Eurostar 高速列車直奔巴黎。抵達巴黎北站後安置行李，展開令人屏息的花都探索第一章。",
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
      { time: "12:43 - 14:05", title: "Eurostar 9436 高速奔馳", desc: "窗外穿越比利時瓦隆區與法國北部平原，車程 1 小時 22 分鐘準時抵達巴黎北站", icon: "train" },
      { time: "14:30", title: "前往巴黎飯店 Check-in", desc: "搭乘計程車/地鐵前往巴黎飯店安置行李，洗漱換裝", type: "hotel", targetId: "paris-hotel" },
      { time: "16:30", title: "巴黎傍晚散步：塞納河畔初見面", desc: "沿塞納河畔漫步、眺望西堤島與夕陽下的橋樑倒影，感受花都浪漫氣息", type: "spot", targetId: "seine-sunset" },
      { time: "19:00", title: "巴黎第一晚法式小酒館 (Bistrot) 晚餐", desc: "品嚐經典油封鴨 (Confit de Canard) 或法式生牛肉塔塔配紅酒", type: "food", targetId: "paris-bistrot" }
    ]
  },
  {
    day: 4,
    date: "2026.11.03",
    weekday: "週一",
    city: "巴黎 Paris",
    badge: "🏛️ 經典巴黎",
    country: "FR",
    title: "羅浮宮藝術尋蹤 ➔ 杜樂麗花園 ➔ 香榭麗舍 ➔ 凱旋門夜景",
    route: "羅浮宮 → 杜樂麗花園 → 協和廣場 → 香榭麗舍大道 → 巴黎凱旋門",
    coverImage: "https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=1200&auto=format&fit=crop",
    brief: "今日走訪世界四大博物館之首羅浮宮，與蒙娜麗莎、勝利女神、維納斯三寶相遇；穿過杜樂麗花園，沿香榭麗舍大道一路漫步至宏偉凱旋門，登頂俯瞰十二道放射光芒夜景。",
    reminders: ["羅浮宮請務必提前預約參觀時段", "凱旋門登頂階梯約 284 階，建議穿著輕便鞋"],
    timeline: [
      { time: "09:30", title: "羅浮宮博物館 (Musée du Louvre)", desc: "預約入場，欣賞世界頂級藝術珍品", type: "spot", targetId: "louvre" },
      { time: "13:00", title: "杜樂麗花園野餐 / 咖啡廳", desc: "坐在綠色鐵椅上享受巴黎陽光與熱咖啡", type: "food", targetId: "tuileries" },
      { time: "15:00", title: "香榭麗舍大道漫步與精品櫥窗", desc: "漫步世界最著名林蔭大道", type: "spot", targetId: "champs-elysees" },
      { time: "17:30", title: "巴黎凱旋門登頂賞夕陽夜景 ⭐️", desc: "登上頂樓觀景台俯瞰星形廣場夜景", type: "spot", targetId: "arc-de-triomphe" }
    ]
  },
  {
    day: 5,
    date: "2026.11.04",
    weekday: "週二",
    city: "巴黎 Paris",
    badge: "🎨 藝文與左岸",
    country: "FR",
    title: "奧賽美術館印象派 ➔ 聖日耳曼左岸咖啡 ➔ 莎士比亞書店 ➔ 聖母院周邊",
    route: "奧賽美術館 → 聖日耳曼德佩 → 花神咖啡/雙叟咖啡 → 莎士比亞書店 → 巴黎聖母院",
    coverImage: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1200&auto=format&fit=crop",
    brief: "探索由舊火車站改建的奧賽美術館，沉浸在莫內、梵谷、雷諾瓦的印象派色彩中。午後流連左岸文人咖啡館與拉丁區古書店，漫步西堤島瞻仰浴火重生的聖母院壯麗外觀。",
    reminders: ["奧賽美術館週一休館，排在週二參觀最合適", "花神與雙叟人潮多，可挑選戶外露天座位拍照感受氣氛"],
    timeline: [
      { time: "09:30", title: "奧賽美術館 (Musée d'Orsay)", desc: "巨大時鐘窗框剪影必拍，欣賞印象派精華", type: "spot", targetId: "orsay" },
      { time: "13:00", title: "左岸名店：花神咖啡館 (Café de Flore)", desc: "品嚐經典熱可可 (Chocolat Chaud) 與法式煎蛋捲", type: "food", targetId: "cafe-flore" },
      { time: "15:00", title: "莎士比亞書店 (Shakespeare & Company)", desc: "海明威與文豪聚集的精神地標，買一本蓋有紀念印章的二手書", type: "spot", targetId: "shakespeare-co" },
      { time: "16:30", title: "巴黎聖母院 (Cathédrale Notre-Dame)", desc: "西堤島核心，瞻仰哥德式飛扶壁與雙塔建築風采", type: "spot", targetId: "notre-dame" }
    ]
  },
  {
    day: 6,
    date: "2026.11.05",
    weekday: "週三",
    city: "巴黎 Paris",
    badge: "🗼 艾菲爾鐵塔 ＆ 蒙馬特",
    country: "FR",
    title: "蒙馬特高地聖心堂 ➔ 愛牆 ➔ 瑪黑區小店 ➔ 夏樂宮眺望艾菲爾鐵塔閃燈",
    route: "蒙馬特高地 (聖心堂/愛牆/畫家村) → 瑪黑區逛街古著 → 夏樂宮觀景台 → 戰神廣場鐵塔夜景",
    coverImage: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1200&auto=format&fit=crop",
    brief: "登頂蒙馬特高地俯瞰全巴黎全景，穿梭波西米亞風情畫家村；下午前往最潮瑪黑區發掘設計師品牌與甜點。入夜前往夏樂宮迎著微風欣賞艾菲爾鐵塔整點金光閃爍 (Sparkling Lights)。",
    reminders: ["蒙馬特階梯處請注意綁紅繩搭訕之人，雙手插口袋或快速通過即可", "艾菲爾鐵塔日落後每到整點會有 5 分鐘的金鑽閃爍"],
    timeline: [
      { time: "09:30", title: "蒙馬特聖心堂 ＆ 俯瞰巴黎全景", desc: "純白拜占庭風格圓頂教堂，巴黎最高視野之一", type: "spot", targetId: "sacre-coeur" },
      { time: "11:00", title: "愛牆 (Le Mur des Je t'aime)", desc: "用超過 250 種語言寫滿「我愛你」的深藍瓷磚牆", type: "spot", targetId: "love-wall" },
      { time: "13:30", title: "瑪黑區 (Le Marais) 探索與午餐", desc: "巴黎最文青街區，品嚐最知名中東口袋餅 L'As du Fallafel", type: "food", targetId: "marais" },
      { time: "16:30", title: "夏樂宮 (Trocadéro) 觀景台 ⭐️", desc: "拍攝艾菲爾鐵塔最壯觀正面視角的位置", type: "spot", targetId: "trocadero" },
      { time: "18:00", title: "戰神廣場 ＆ 鐵塔金色閃燈夜景 🗼", desc: "席地而坐看鐵塔亮燈，每整點 5 分鐘閃燈宛如流星璀璨", type: "spot", targetId: "eiffel-tower" }
    ]
  },
  {
    day: 7,
    date: "2026.11.06",
    weekday: "週四",
    city: "巴黎 Paris ➔ 返程",
    badge: "🛍️ 最終採買 ＆ 賦歸",
    country: "FR",
    title: "巴黎最後晨間巡禮 ➔ 百貨伴手禮 ➔ 前往戴高樂機場 (CDG) 返台",
    route: "飯店周邊咖啡館 → 莎瑪麗丹/拉法葉百貨最後採買 → 機場快線 RER B → 戴高樂機場退稅與登機",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    brief: "旅行最後一天，睡醒後悠閒享受巴黎咖啡香。安排最後免稅精品或經典藥妝、甜點採買，下午依班機時間提前 3.5 小時前往巴黎戴高樂機場辦理退稅手續，滿載回憶登機返台。",
    reminders: ["戴高樂機場 (CDG) 國際線退稅人潮較多，務必提早抵達使用 PABLO 機台掃描退稅單條碼"],
    timeline: [
      { time: "09:30", title: "最後巴黎可頌朝食時光", desc: "享用酥脆香濃的傳統奶油可頌與黑咖啡", icon: "sun" },
      { time: "10:30", title: "莎瑪麗丹 (Samaritaine) 或拉法葉百貨", desc: "採買法式果醬、馬卡龍、香水與免稅伴手禮", type: "spot", targetId: "shopping-paris" },
      { time: "14:00", title: "出發前往戴高樂機場 (CDG)", desc: "搭乘計程車或 RER B 直達航廈，辦理 PABLO 電子退稅與行李託運", icon: "plane" }
    ]
  }
];
