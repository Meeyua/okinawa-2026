// --- Translations ---
const translations = {
    'zh-TW': {
        nav_title: "沖繩 2026",
        tab_overview: "總覽", tab_itinerary: "每日行程", tab_map: "地圖", tab_budget: "預算", tab_prep: "準備",

        overview_title: "旅程概覽",
        overview_desc: "歡迎來到您的 2026 沖繩六天五夜自由行儀表板。此區塊彙整了最關鍵的航班與住宿資訊。",
        stat_date: "日期", stat_weather: "氣溫", stat_rate: "匯率預估", stat_mode: "模式", stat_mode_val: "自由行",

        flight_title: "🛫 航班資訊", flight_out_date: "去程 | 03/10 (二)", flight_out_code: "台灣虎航 IT230 ↗",
        flight_tpe: "桃機 TPE", flight_oka: "那霸 OKA", flight_duration_out: "約 1h 20m", flight_duration_in: "約 1h 40m",
        flight_out_note: "⚠️ 04:30 請務必完成櫃台報到", flight_in_date: "回程 | 03/15 (日)", flight_in_code: "泰亞航空 FD/SL231 ↗",
        flight_in_note: "ℹ️ 請於 14:00 前抵達那霸機場",

        hotel_title: "🏨 住宿安排", hotel_1_name: "Royal View Hotel Churaumi ↗", hotel_1_desc: "美麗海水族館旁，步行可達，北部行程基地。",
        hotel_2_name: "Hotel Naha City - Kokusai Street ↗", hotel_2_desc: "靠近國際通，購物與交通便利。",

        itinerary_title: "每日詳細行程", itinerary_desc: "點選上方的日期標籤即可切換查看當日的時間軸。行程已標註相關連結與預估花費。",

        map_title: "行程地圖", map_desc: "所有景點與路線皆已整合在 Google My Maps 中。", open_map_btn: "在 Google Maps App 開啟",

        budget_title: "預算分析", budget_desc: "預估每人總花費約 $39,100 TWD。請準備足夠日幣現金。",
        budget_chart_title: "費用分佈比例 (TWD)", budget_note: "* 餐費為高標估算，依個人消費而異",

        budget_paid_title: "已付清費用 (Paid)",
        budget_topay_title: "出發前預付 (To Pay)",
        budget_local_title: "當地開銷 (Local Cash/Card)",

        cat_flight_out: "✈️ 去程機票 (虎航)", cat_flight_in: "✈️ 回程機票 (泰亞+手續費)",
        cat_stay_royal: "🏨 住宿: Royal View", cat_stay_naha: "🏨 住宿: Naha City", cat_stay_fee: "💸 住宿手續費",
        cat_transport: "🚌 交通總計", cat_ticket: "🎟️ 票券/雜支/保險", cat_food: "🍱 餐飲/雜支", cat_total_est: "預估小計",

        prep_title: "行前準備與檢查", prep_desc: "出發前請逐一確認以下項目。",
        checklist_title: "✅ 出發前檢查清單",
        app_link_title: "📱 推薦 App & 預約連結", link_vjw_desc: "入境審查與海關申報 QR Code",
        link_orion_title: "Orion 啤酒廠預約", link_orion_desc: "參觀工廠需提前官網預約",
        link_yakiniku_title: "燒肉王 (久茂地店)", link_yakiniku_desc: "熱門時段建議提前一個月預約",
        link_oas_desc: "機場接駁巴士預約",
        emergency_title: "🆘 緊急聯絡", emergency_ambulance: "救護車 / 火警", emergency_police: "警察", emergency_office: "台北駐日經濟文化代表處那霸分處",

        // Checklist Items
        chk_passport: "護照 (效期需 6 個月以上)", chk_vjw: "VJW 登錄 (入境 QR Code)", chk_flight_tix: "機票憑證存入手機",
        chk_hotel_tix: "住宿憑證存入手機", chk_bus_res: "預約確認: OAS 巴士", chk_car_res: "預約確認: 包車司機",
        chk_orion_res: "預約確認: Orion 啤酒廠", chk_tour_res: "預約確認: 南部觀光巴士", chk_sim: "開通網卡/漫遊",
        chk_cash: "準備日幣現金", chk_license: "駕照日文譯本 (備用)",

        // Chart Labels
        chart_flight: "機票", chart_stay: "住宿", chart_transport: "交通", chart_ticket: "票券/雜支", chart_food: "餐飲"
    },
    'ja-JP': {
        nav_title: "沖縄 2026",
        tab_overview: "概要", tab_itinerary: "日程", tab_map: "地図", tab_budget: "予算", tab_prep: "準備",

        overview_title: "旅の概要",
        overview_desc: "2026年沖縄5泊6日の個人旅行ダッシュボードへようこそ。フライトと宿泊の重要情報をまとめました。",
        stat_date: "日程", stat_weather: "気温", stat_rate: "レート予測", stat_mode: "モード", stat_mode_val: "個人旅行",

        flight_title: "🛫 フライト情報", flight_out_date: "往路 | 03/10 (火)", flight_out_code: "タイガーエア IT230 ↗",
        flight_tpe: "台北桃園 TPE", flight_oka: "那覇 OKA", flight_duration_out: "約 1時間20分", flight_duration_in: "約 1時間40分",
        flight_out_note: "⚠️ 04:30 チェックイン締切", flight_in_date: "復路 | 03/15 (日)", flight_in_code: "タイ・エアアジア FD/SL231 ↗",
        flight_in_note: "ℹ️ 14:00までに空港到着推奨",

        hotel_title: "🏨 宿泊先", hotel_1_name: "ロイヤルビューホテル美ら海 ↗", hotel_1_desc: "美ら海水族館の隣、徒歩圏内。北部の拠点に最適。",
        hotel_2_name: "ホテル那覇シティ 国際通り ↗", hotel_2_desc: "国際通り近く、買い物や交通に便利。",

        itinerary_title: "詳細スケジュール", itinerary_desc: "上の日付ボタンをタップして、当日のタイムラインを表示します。",

        map_title: "旅行マップ", map_desc: "すべての観光スポットとルートはGoogleマイマップに統合されています。", open_map_btn: "Googleマップで開く",

        budget_title: "予算分析", budget_desc: "一人当たりの総費用は約 39,100 TWD (約 19万円) です。",
        budget_chart_title: "費用内訳 (TWD)", budget_note: "* 食費は最大見積もりです",
        budget_list_title: "詳細見積もり (一人当たり)",
        budget_paid_title: "支払済費用 (Paid)", budget_unpaid_title: "出発前支払い (To Pay)", budget_local_title: "現地費用 (Local)",

        cat_flight_out: "✈️ 往路航空券 (タイガー)", cat_flight_in: "✈️ 復路航空券 (エアアジア+手数料)",
        cat_stay_royal: "🏨 宿泊: ロイヤルビュー", cat_stay_naha: "🏨 宿泊: 那覇シティ", cat_stay_fee: "💸 宿泊手数料",
        cat_transport: "🚌 交通費合計", cat_ticket: "🎟️ 入場券/その他", cat_food: "🍱 食費/雑費", cat_total_est: "見積もり小計",
        cash_tip_title: "💡 現金の準備", cash_tip_desc: "一部の老舗やタクシーは現金のみです。4万〜7万円をご用意ください。",

        prep_title: "事前準備・チェック", prep_desc: "出発前に以下の項目を確認してください。",
        checklist_title: "✅ 出発前チェックリスト",
        app_link_title: "📱 アプリ & 予約リンク", link_vjw_desc: "入国審査・税関申告 QRコード",
        link_orion_title: "オリオンビール工場予約", link_orion_desc: "工場見学は事前予約が必要です",
        link_yakiniku_title: "焼肉きんぐ (久茂地店)", link_yakiniku_desc: "混雑時は1ヶ月前の予約を推奨",
        link_oas_desc: "空港シャトルバス予約",
        emergency_title: "🆘 緊急連絡先", emergency_ambulance: "救急車 / 消防", emergency_police: "警察", emergency_office: "台北駐日経済文化代表処 那覇分処",

        // Checklist Items
        chk_passport: "パスポート (有効期限6ヶ月以上)", chk_vjw: "VJW登録 (入国QR)", chk_flight_tix: "Eチケット保存",
        chk_hotel_tix: "宿泊バウチャー保存", chk_bus_res: "予約確認: OASバス", chk_car_res: "予約確認: 貸切タクシー",
        chk_orion_res: "予約確認: オリオンビール", chk_tour_res: "予約確認: 南部バスツアー", chk_sim: "SIM/ローミング設定",
        chk_cash: "日本円の準備", chk_license: "免許証翻訳 (予備)",

        // Chart Labels
        chart_flight: "航空券", chart_stay: "宿泊", chart_transport: "交通", chart_ticket: "チケット/その他", chart_food: "食費"
    }
};

// --- Data ---
let currentLang = 'zh-TW';

const itineraryData = {
    'zh-TW': {
        1: {
            title: "初抵沖繩・前進北部",
            date: "03/10 (二)",
            events: [
                { time: "04:30", icon: "🛂", title: "桃園機場報到", desc: "第一航廈 IT230 (06:35起飛)", link: "https://www.tigerairtw.com/zh-tw", cost: "已付清 (NT$4,649)" },
                { time: "08:55", icon: "🛬", title: "抵達那霸機場", desc: "出關、寄放行李、機場早餐(A&W/豬肉蛋飯糰)", cost: "¥400-1800", link: "https://www.naha-airport.co.jp/zh-hant/" },
                { time: "11:50", icon: "⛩️", title: "波上宮 & 海灘", desc: "參拜、買書包御守、踏浪 (停留 2hr)", cost: "¥1300-2300", link: "http://naminouegu.jp/" },
                { time: "14:40", icon: "🚌", title: "搭乘 OAS 接駁巴士", desc: "需預約，前往美麗海紀念公園前站", cost: "¥2400 (已付)", link: "https://www.okinawa-shuttle.co.jp/tc/" },
                { time: "18:00", icon: "🏨", title: "Royal View Check-in", desc: "美麗海水族館旁", cost: "已付清 (NT$5,207)", link: "https://royalview-churaumi.com/" },
                { time: "18:30", icon: "🍽️", title: "晚餐 (花咲市場)", desc: "搭乘接駁車前往 Hanasaki Marche 用餐 (飯店建議)", cost: "¥2000-5000", link: "https://hanasaki-marche.com/#l-shop" }
            ]
        },
        2: {
            title: "北部包車一日遊 (10H)",
            date: "03/11 (三)",
            events: [
                { time: "08:30", icon: "🚙", title: "包車出發", desc: "車內嚴禁飲食，時間控制嚴格", cost: "已付清 (NT$1,790)", link: null },
                { time: "09:15", icon: "🌊", title: "古宇利島 (海洋塔/心形岩)", desc: "海洋塔 (FunPass)、蝦蝦飯、しらさ食堂、Shinmei Coffee (停留 3hr)", cost: "¥1500 (飲食/伴手禮)", link: "https://kourijima.info/" },
                { time: "13:30", icon: "🐘", title: "萬座毛", desc: "Funpass入場，象鼻岩絕景 (停留 1.5hr)", cost: "¥0 (Funpass) + ¥300-1500", link: "https://www.manzamo.jp/" },
                { time: "15:50", icon: "🍺", title: "Orion 啤酒廠", desc: "16:00 場次 (務必準時)，駕駛不可飲酒", cost: "¥1000 (已付) + ¥500-3000", link: "https://www.orionbeer.co.jp/brewerytour/" },
                { time: "18:20", icon: "🐟", title: "晚餐：海邦丸本店", desc: "海人料理，可能需排隊", cost: "¥1000-2000", link: "https://kaihou-maru.com/" }
            ]
        },
        3: {
            title: "水族館・移動至那霸",
            date: "03/12 (四)",
            events: [
                { time: "09:40", icon: "🐋", title: "美麗海水族館 (FunPass)", desc: "黑潮之海、海豚劇場 (停留 5hr)，午餐館內解決", cost: "¥1000-2000 (餐飲)", link: "https://churaumi.okinawa/tc/" },
                { time: "15:15", icon: "🚌", title: "山原急行巴士", desc: "前往縣廳前站 (可刷信用卡/IC卡)", cost: "¥2000", link: "https://yanbaru-expressbus.com/" },
                { time: "18:30", icon: "🏨", title: "Hotel Naha City Check-in", desc: "靠近國際通", cost: "已付清 (NT$4,134)", link: "https://hotel-naha-city.jp/" },
                { time: "19:00", icon: "🥩", title: "晚餐：燒肉王/屋台村", desc: "燒肉王建議提前一個月預約", cost: "¥3180", link: "https://www.yakiniku-king.jp/" },
                { time: "21:00", icon: "🍸", title: "續攤：El Lequio", desc: "清吧小酌", cost: "¥2000-4500", link: "https://www.instagram.com/el_lequio_official/" }
            ]
        },
        4: {
            title: "美國村悠閒遊",
            date: "03/13 (五)",
            events: [
                { time: "08:00", icon: "🍣", title: "早餐：泊港魚市場", desc: "新鮮生魚片、生蠔", cost: "¥2500-3800", link: "http://www.tomariiyumachi.com/" },
                { time: "13:27", icon: "🚌", title: "前往美國村", desc: "搭乘 28 號公車", cost: "¥470", link: "https://www.okinawa-americanvillage.com/" },
                { time: "14:30", icon: "🍽️", title: "午餐：Calif Kitchen", desc: "海景加州風餐廳", cost: "¥1000-2000", link: "https://thecalifkitchen.okinawa/" },
                { time: "16:00", icon: "🎡", title: "美國村散策", desc: "Blue Seal 冰淇淋、日落海灘、Tacos", cost: "¥1500-2500", link: null },
                { time: "18:00", icon: "🌅", title: "Transit Cafe", desc: "欣賞日落", cost: "¥450-800", link: "https://transitcafe-okinawa.com/" },
                { time: "20:20", icon: "🚕", title: "計程車回那霸", desc: "約 45 分鐘 (每人分攤)", cost: "¥1400-1900", link: null },
                { time: "21:00", icon: "🥩", title: "晚餐：阿古豬涮涮鍋", desc: "CHABOO 或 Midnight Sweets", cost: "¥3000-4000", link: null }
            ]
        },
        5: {
            title: "南部觀光巴士一日遊",
            date: "03/14 (六)",
            events: [
                { time: "08:45", icon: "🚩", title: "集合：縣廳前", desc: "Blue Seal Palette 久茂地店前，準時出發", cost: "已付清 (NT$840)", link: null },
                { time: "09:30", icon: "🏯", title: "沖繩世界文化王國 (FunPass)", desc: "玉泉洞鐘乳石、毒蛇博物館 (飲料自費)", cost: "¥500-1500 (飲食/伴手禮)", link: "https://www.gyokusendo.co.jp/okinawaworld/" },
                { time: "13:40", icon: "🐠", title: "DMM 水族館 (FunPass) & iias", desc: "影像技術水族館，旁有商場", cost: "¥500-2000 (購物/飲食)", link: "https://kariyushi-aquarium.com/tc/" },
                { time: "16:00", icon: "✈️", title: "瀨長島 Umikaji Terrace", desc: "希臘風建築、看飛機、幸福鬆餅", cost: "¥1000-5000", link: "https://www.umikajiterrace.com/" },
                { time: "18:15", icon: "🔥", title: "晚餐：炉ばた焼 泉崎", desc: "體驗爐端燒", cost: "¥2000-3000", link: "https://tabelog.com/okinawa/A4701/A470101/47000350/" }
            ]
        },
        6: {
            title: "最後採買 & 回家",
            date: "03/15 (日)",
            events: [
                { time: "08:00", icon: "🍚", title: "早餐：風林火山", desc: "日式定食", cost: "¥500-2000", link: null },
                { time: "10:15", icon: "🛍️", title: "國際通衝刺", desc: "唐吉訶德、牧志市場、伴手禮", cost: "¥10,000+", link: "https://naha-kokusaidori.okinawa/tw/" },
                { time: "13:30", icon: "🚝", title: "前往那霸機場", desc: "午餐在機場解決 (豬肉飯糰/拉麵)", cost: "¥800-2300", link: "https://www.naha-airport.co.jp/zh-hant/" },
                { time: "16:55", icon: "🛫", title: "回程起飛", desc: "泰亞航空 Flight 231", cost: "已付清 (NT$5,044)", link: "https://www.airasia.com/zh/tw" },
                { time: "19:00", icon: "🏠", title: "平安抵達", desc: "桃園機場解散", cost: "無", link: null }
            ]
        }
    },
    'ja-JP': {
        1: {
            title: "沖縄到着・北部へ",
            date: "03/10 (火)",
            events: [
                { time: "04:30", icon: "🛂", title: "桃園空港チェックイン", desc: "T1 タイガーエア IT230 (06:35発)", link: "https://www.tigerairtw.com/jp", cost: "支払済 (NT$4,649)" },
                { time: "08:55", icon: "🛬", title: "那覇空港到着", desc: "入国、荷物預け、朝食 (A&W/ポークたまご)", cost: "¥400-1800", link: "https://www.naha-airport.co.jp/" },
                { time: "11:50", icon: "⛩️", title: "波上宮 & ビーチ", desc: "参拝、お守り購入、散策 (2時間)", cost: "¥1300-2300", link: "http://naminouegu.jp/" },
                { time: "14:40", icon: "🚌", title: "OASバス乗車", desc: "予約制、海洋博公園前へ移動", cost: "¥2400 (済)", link: "https://www.okinawa-shuttle.co.jp/" },
                { time: "18:00", icon: "🏨", title: "ロイヤルビュー チェックイン", desc: "美ら海水族館の隣", cost: "支払済 (NT$5,207)", link: "https://royalview-churaumi.com/" },
                { time: "18:30", icon: "🍽️", title: "夕食 (ハナサキマルシェ)", desc: "シャトルバスでハナサキマルシェへ (ホテル推奨)", cost: "¥2000-5000", link: "https://hanasaki-marche.com/#l-shop" }
            ]
        },
        2: {
            title: "北部貸切タクシー観光 (10H)",
            date: "03/11 (水)",
            events: [
                { time: "08:30", icon: "🚙", title: "出発", desc: "車内飲食厳禁、時間は厳守", cost: "支払済 (NT$1,790)", link: null },
                { time: "09:15", icon: "🌊", title: "古宇利島 (古宇利オーシャンタワー/ハートロック)", desc: "海洋塔 (FunPass)、ガーリックシュリンプ、しらさ食堂、Shinmei Coffee", cost: "¥1500 (飲食/土産)", link: "https://kourijima.info/" },
                { time: "13:30", icon: "🐘", title: "万座毛", desc: "Funpass入場、絶景スポット", cost: "¥0 (Funpass) + ¥300-1500", link: "https://www.manzamo.jp/" },
                { time: "15:50", icon: "🍺", title: "オリオンビール工場", desc: "16:00 回 (時間厳守)、運転手禁酒", cost: "¥1000 (済) + ¥500-3000", link: "https://www.orionbeer.co.jp/brewerytour/" },
                { time: "18:20", icon: "🐟", title: "夕食：海邦丸 本店", desc: "海人料理、行列の可能性あり", cost: "¥1000-2000", link: "https://kaihou-maru.com/" }
            ]
        },
        3: {
            title: "水族館・那覇へ移動",
            date: "03/12 (木)",
            events: [
                { time: "09:40", icon: "🐋", title: "美ら海水族館 (FunPass)", desc: "黒潮の海、イルカショー (5時間滞在)、ランチは館内", cost: "¥1000-2000 (食事)", link: "https://churaumi.okinawa/" },
                { time: "15:15", icon: "🚌", title: "やんばる急行バス", desc: "県庁前駅へ移動 (クレカ/ICカード可)", cost: "¥2000", link: "https://yanbaru-expressbus.com/" },
                { time: "18:30", icon: "🏨", title: "那覇シティ チェックイン", desc: "国際通り近く", cost: "支払済 (NT$4,134)", link: "https://hotel-naha-city.jp/" },
                { time: "19:00", icon: "🥩", title: "夕食：焼肉きんぐ/屋台村", desc: "焼肉きんぐは1ヶ月前予約推奨", cost: "¥3180", link: "https://www.yakiniku-king.jp/" },
                { time: "21:00", icon: "🍸", title: "二次会：El Lequio", desc: "カクテルバー", cost: "¥2000-4500", link: "https://www.instagram.com/el_lequio_official/" }
            ]
        },
        4: {
            title: "アメリカンビレッジ散策",
            date: "03/13 (金)",
            events: [
                { time: "08:00", icon: "🍣", title: "朝食：泊いゆまち", desc: "新鮮な刺身、生牡蠣", cost: "¥2500-3800", link: "http://www.tomariiyumachi.com/" },
                { time: "13:27", icon: "🚌", title: "アメリカンビレッジへ", desc: "28番バス乗車", cost: "¥470", link: "https://www.okinawa-americanvillage.com/" },
                { time: "14:30", icon: "🍽️", title: "昼食：Calif Kitchen", desc: "オーシャンビュー カリフォルニアスタイル", cost: "¥1000-2000", link: "https://thecalifkitchen.okinawa/" },
                { time: "16:00", icon: "🎡", title: "ビレッジ散策", desc: "ブルーシールアイス、サンセットビーチ", cost: "¥1500-2500", link: null },
                { time: "18:00", icon: "🌅", title: "Transit Cafe", desc: "サンセットディナー", cost: "¥450-800", link: "https://transitcafe-okinawa.com/" },
                { time: "20:20", icon: "🚕", title: "タクシーで那覇へ", desc: "約45分 (一人当たり)", cost: "¥1400-1900", link: null },
                { time: "21:00", icon: "🥩", title: "夕食：あぐー豚しゃぶしゃぶ", desc: "CHABOO または Midnight Sweets", cost: "¥3000-4000", link: null }
            ]
        },
        5: {
            title: "南部バスツアー",
            date: "03/14 (土)",
            events: [
                { time: "08:45", icon: "🚩", title: "集合：県庁前", desc: "パレット久茂地 ブルーシール前", cost: "支払済 (NT$840)", link: null },
                { time: "09:30", icon: "🏯", title: "おきなわワールド (FunPass)", desc: "玉泉洞、ハブ博物公園 (飲物自費)", cost: "¥500-1500 (飲食/土産)", link: "https://www.gyokusendo.co.jp/okinawaworld/" },
                { time: "13:40", icon: "🐠", title: "DMMかりゆし水族館 (FunPass) & iias", desc: "映像技術水族館、隣にショッピングモール", cost: "¥500-2000 (買物/飲食)", link: "https://kariyushi-aquarium.com/" },
                { time: "16:00", icon: "✈️", title: "ウミカジテラス", desc: "瀬長島、飛行機鑑賞、パンケーキ", cost: "¥1000-5000", link: "https://www.umikajiterrace.com/" },
                { time: "18:15", icon: "🔥", title: "夕食：炉端焼き 泉崎", desc: "ローカルな炉端焼き体験", cost: "¥2000-3000", link: "https://tabelog.com/okinawa/A4701/A470101/47000350/" }
            ]
        },
        6: {
            title: "最終日・買い物",
            date: "03/15 (日)",
            events: [
                { time: "08:00", icon: "🍚", title: "朝食：風林火山", desc: "和定食", cost: "¥500-2000", link: null },
                { time: "10:15", icon: "🛍️", title: "国際通り", desc: "ドン・キホーテ、牧志市場、お土産", cost: "¥10,000+", link: "https://naha-kokusaidori.okinawa/" },
                { time: "13:30", icon: "🚝", title: "那覇空港へ移動", desc: "昼食は空港で (ポークたまご/ラーメン)", cost: "¥800-2300", link: "https://www.naha-airport.co.jp/" },
                { time: "16:55", icon: "🛫", title: "復路出発", desc: "タイ・エアアジア Flight 231", cost: "支払済 (NT$5,044)", link: "https://www.airasia.com/jp/ja" },
                { time: "19:00", icon: "🏠", title: "台湾到着", desc: "桃園空港解散", cost: "なし", link: null }
            ]
        }
    }
};

const checklistKeys = [
    'chk_passport', 'chk_vjw', 'chk_flight_tix', 'chk_hotel_tix',
    'chk_bus_res', 'chk_car_res', 'chk_orion_res', 'chk_tour_res',
    'chk_sim', 'chk_cash', 'chk_license'
];

let currentDay = 1;

// --- Interaction Logic ---

function toggleLanguage() {
    currentLang = currentLang === 'zh-TW' ? 'ja-JP' : 'zh-TW';

    // Update Toggle Button Text
    const btnText = currentLang === 'zh-TW' ? 'ZH' : 'JP';
    document.getElementById('lang-label').innerText = btnText;

    // Update DOM Elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // Re-render Dynamic Content
    renderDay(currentDay);
    renderChecklist();
    updateChart();
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.remove('border-t'); // Remove border when closing
    } else {
        menu.classList.add('open');
        menu.classList.add('border-t'); // Add border when opening
    }
}

function switchTab(tabId) {
    // Hide all sections
    document.querySelectorAll('main > div').forEach(el => {
        el.classList.add('hidden');
    });
    // Show selected section
    const target = document.getElementById(`section-${tabId}`);
    if (target) {
        target.classList.remove('hidden');
        // Trigger chart resize if needed
        if (tabId === 'budget' && window.budgetChartInstance) {
            window.budgetChartInstance.resize();
        }
    }

    // Update nav buttons (Desktop)
    const buttons = ['overview', 'itinerary', 'map', 'budget', 'prep'];
    buttons.forEach(btn => {
        const el = document.getElementById(`tab-btn-${btn}`);
        if (btn === tabId) {
            el.className = 'active-tab px-3 py-4 text-sm font-medium transition-colors whitespace-nowrap';
            el.classList.add('text-sky-600', 'border-sky-600');
        } else {
            el.className = 'inactive-tab px-3 py-4 text-sm font-medium transition-colors whitespace-nowrap';
        }

        // Mobile Menu Active State
        const mobileBtn = document.getElementById(`mobile-tab-btn-${btn}`);
        if (mobileBtn) {
            if (btn === tabId) {
                mobileBtn.classList.remove('text-slate-600', 'hover:text-slate-800', 'hover:bg-slate-50');
                mobileBtn.classList.add('text-sky-600', 'bg-sky-50');
            } else {
                mobileBtn.classList.add('text-slate-600', 'hover:text-slate-800', 'hover:bg-slate-50');
                mobileBtn.classList.remove('text-sky-600', 'bg-sky-50');
            }
        }
    });

    // Close mobile menu if open
    const menu = document.getElementById('mobile-menu');
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.remove('border-t');
    }
}

function renderDay(dayNum) {
    currentDay = dayNum; // Track current day for lang switch
    const container = document.getElementById('day-content-container');
    const data = itineraryData[currentLang][dayNum];

    // Update buttons state
    document.querySelectorAll('.day-selector').forEach(btn => {
        btn.classList.remove('bg-sky-600', 'text-white', 'shadow-md');
        btn.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    });
    const activeBtn = document.getElementById(`day-btn-${dayNum}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-white', 'text-slate-600', 'border-slate-200');
        activeBtn.classList.add('bg-sky-600', 'text-white', 'shadow-md');
    }

    // Generate HTML
    let html = `
        <div class="flex items-end justify-between mb-8 border-b border-slate-100 pb-4">
            <div>
                <span class="text-sky-600 font-bold tracking-wide uppercase text-sm">Day ${dayNum} - ${data.date}</span>
                <h2 class="text-2xl font-bold text-slate-800 mt-1">${data.title}</h2>
            </div>
        </div>
        <div class="relative border-l-2 border-slate-200 ml-3 space-y-8">
    `;

    data.events.forEach(event => {
        const linkHtml = event.link
            ? `<a href="${event.link}" target="_blank" class="hover:text-sky-600 hover:underline decoration-sky-300 underline-offset-4 transition-colors">${event.title} ↗</a>`
            : event.title;

        const costHtml = event.cost
            ? `<span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap flex-shrink-0">${event.cost}</span>`
            : '';

        html += `
            <div class="relative pl-8">
                <div class="absolute -left-2.5 top-0 bg-white border-2 border-sky-500 rounded-full w-5 h-5"></div>
                <div class="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                    <div class="min-w-[70px] font-mono font-bold text-slate-500 pt-0.5 sm:w-20 w-full mb-1 sm:mb-0">${event.time}</div>
                    <div class="bg-slate-50 p-4 rounded-lg w-full hover:bg-sky-50 transition-colors border border-transparent hover:border-sky-100">
                        <div class="flex justify-between items-start mb-1 gap-2 flex-wrap sm:flex-nowrap">
                            <div class="font-bold text-slate-800 text-lg flex items-center gap-2 flex-1 min-w-0 break-words">
                                <span class="flex-shrink-0">${event.icon}</span> <span class="break-words min-w-0">${linkHtml}</span>
                            </div>
                            ${costHtml}
                        </div>
                        <div class="text-slate-600 text-sm">${event.desc}</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function renderChecklist() {
    const list = document.getElementById('checklist-container');
    let html = '';
    checklistKeys.forEach((key, index) => {
        const text = translations[currentLang][key];
        // Check if already checked (simple persistence in DOM for this demo)
        // In a real app, we'd check a state array. Here we'll just re-render unchecked for simplicity on lang switch
        // to avoid complexity with tracking boolean states across languages without a robust state manager.
        // Or better: Preserve state.
        const isChecked = window.checklistState && window.checklistState[index];
        const bgClass = isChecked ? 'bg-emerald-500 border-emerald-500' : 'border-slate-300';
        const textClass = isChecked ? 'line-through text-slate-400' : 'text-slate-700';
        const checkMark = isChecked ? '✓' : '✓'; // Always char, color hides it
        const checkColor = isChecked ? 'text-white' : 'text-white'; // actually checkmark is white, bg handles visibility

        html += `
            <li class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors" onclick="toggleCheck(${index})">
                <div id="check-box-${index}" class="w-6 h-6 rounded border-2 ${bgClass} flex items-center justify-center text-white transition-colors">
                    ${checkMark}
                </div>
                <span id="check-text-${index}" class="${textClass} select-none">${text}</span>
            </li>
        `;
    });
    list.innerHTML = html;
}

// Simple state for checklist to persist across lang switch
window.checklistState = new Array(checklistKeys.length).fill(false);

function toggleCheck(index) {
    window.checklistState[index] = !window.checklistState[index];
    const box = document.getElementById(`check-box-${index}`);
    const text = document.getElementById(`check-text-${index}`);

    if (window.checklistState[index]) {
        // Checked
        box.classList.remove('border-slate-300');
        box.classList.add('bg-emerald-500', 'border-emerald-500');
        text.classList.remove('text-slate-700');
        text.classList.add('line-through', 'text-slate-400');
    } else {
        // Unchecked
        box.classList.remove('bg-emerald-500', 'border-emerald-500');
        box.classList.add('border-slate-300');
        text.classList.remove('line-through', 'text-slate-400');
        text.classList.add('text-slate-700');
    }
}

// --- Init Chart ---
function initChart() {
    const ctx = document.getElementById('budgetChart').getContext('2d');
    window.budgetChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: getChartLabels(),
            datasets: [{
                data: [9693, 9494, 4030, 3494, 12900], // Updated with correct totals
                backgroundColor: [
                    '#0ea5e9', // Flight
                    '#6366f1', // Stay
                    '#10b981', // Transport
                    '#f59e0b', // Ticket/Misc
                    '#f43f5e'  // Food
                ],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: {
                            family: 'sans-serif',
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return ` $${context.raw.toLocaleString()} TWD`;
                        }
                    }
                }
            },
            cutout: '65%'
        }
    });
}

function getChartLabels() {
    const t = translations[currentLang];
    return [t.chart_flight, t.chart_stay, t.chart_transport, t.chart_ticket, t.chart_food];
}

function updateChart() {
    if (window.budgetChartInstance) {
        // Recalculate Totals
        // Flights: 9693
        // Stay: 9494
        // Transport: 1790 (Paid) + 840 (Paid) + 500 (OAS) + 900 (Local) = 4030
        // Ticket/Misc: 1450 (FunPass) + 210 (Orion) + 330 (SIM) + 1000 (Ins) = 2990
        // Food: 12900

        const data = [9693, 9494, 4030, 2990, 12900];

        window.budgetChartInstance.data.labels = getChartLabels();
        window.budgetChartInstance.data.datasets[0].data = data;
        window.budgetChartInstance.data.datasets[0].backgroundColor = [
            '#0ea5e9', // Flight
            '#6366f1', // Stay
            '#10b981', // Transport
            '#f59e0b', // Ticket
            '#f43f5e'  // Food
        ];
        window.budgetChartInstance.update();
    }
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    renderDay(1);
    renderChecklist();
    initChart();
    switchTab('overview'); // Start at overview
    // Trigger initial chart update with correct values
    updateChart();
});
