// Mini Metro Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mini-metro.json), whose 73 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   287980 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mini-metro-achievement-guide",
    "category": "game",
    "gameSlug": "mini-metro",
    "icon": "🚇",
    "title": "Mini Metro Achievement Guide",
    "summary": "A practical guide to all 73 Steam achievements in Mini Metro - none are hidden. Covers the per-city passenger-delivery achievements and the second, constrained challenge for each city (limited tunnels, lines, loops, carriages or stations), plus the daily-challenge achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mini Metro has 73 Steam achievements and none of them are hidden. Almost every city in the game contributes two: a straightforward one for delivering a set number of passengers there, and a harder \"challenge\" one that adds a constraint - deliver X passengers using no more than one tunnel, three lines, one loop, one carriage per line, eight stations per line, and so on. Two more are for the daily challenge (post a score once, and post one every weekday for a week), and a few cities instead ask you to simply survive to a given week.",
                "Nothing is missable - every city and its challenge can be replayed endlessly, and there is no overarching completion requirement beyond the individual achievements. The challenge achievements are the real content: each is a self-contained puzzle about routing a network efficiently under one specific restriction.",
                "Tip: for the constrained challenges, use Normal mode (not Endless) and design your whole network around the restriction from the first station rather than adapting mid-game - if the challenge limits tunnels, plan which river crossing every line will share before you place a single line, since re-routing after a jam usually fails the constraint."
            ]
        },
        {
            "heading": "Core Cities: Delivery & Challenges",
            "body": [
                "The original cities and their challenges: delivering passengers in London, Paris, New York, Berlin, Hong Kong, Osaka, Saint Petersburg, Montréal, São Paulo, Cairo, Auckland and Melbourne, plus each one's constrained challenge (limited tunnels, lines, locomotives, carriages, stations or loops, or reaching a target week).",
                "The achievements here: Oyster (Deliver 200 passengers in London.); Navigo (Deliver 200 passengers in Paris.); MetroCard (Deliver 200 passengers in New York.); Monatskarten (Deliver 200 passengers in Berlin.); Octopus (Deliver 200 passengers in Hong Kong.); イコカ (Deliver 500 passengers in Osaka.); Подорожник (Deliver 500 passengers in Saint Petersburg.); OPUS (Deliver 500 passengers in Montréal.); Bilhete Único (Deliver 500 passengers in São Paulo.); ركاب (Deliver 500 passengers in Cairo.); Hop (Deliver 600 passengers in Auckland.); Thames Tunnel (Deliver 1000 passengers in London using no more than one tunnel.); City of Lines (Deliver 1300 passengers in Paris using no more than three lines.); Square Times (Deliver 1600 passengers in New York City with square stations on no more than two lines.); The Grey Lokomotive (Deliver 1000 passengers in Berlin using no more than one locomotive per line.); Hong Kong Eights (Deliver 1100 passengers in Hong Kong with no more than eight stations per line.); Ten weeks in Osaka (Reach week ten in Osaka.); Neva the Great (Deliver 1500 passengers in Saint Petersburg with tunnels on no more than one line.); Green and orange and yellow and blue (Deliver 1600 passengers in Montréal using no more than four lines.); São Paulo Grand Prix (Deliver 1200 passengers in São Paulo using only loops.); The City of Six Carriages (Deliver 1400 passengers in Cairo using no more than one carriage per line.); Second Harbor Crossing (Deliver 1500 passengers in Auckland using no more than two tunnels.); myki (Deliver 300 passengers in Melbourne.); Hook Turn (Deliver 1000 passengers in Melbourne with at least one station connected to all lines.)."
            ]
        },
        {
            "heading": "Daily Challenge & Expansion Cities I",
            "body": [
                "The daily-challenge achievements (one score, then one every weekday for a week), and the first wave of expansion cities and their challenges - San Francisco, Seoul, Shanghai, Washington D.C., Istanbul, Mumbai, Stockholm, Singapore, Guangzhou and Barcelona - plus the higher passenger targets for London, New York and Paris.",
                "The achievements here: Day trip (Post a score in a daily challenge.); Commuter (Post a score in the daily challenge every weekday for one week.); Clipper (Deliver 500 passengers in San Francisco.); Don't Have a Cow, Man (Reach week nine in San Francisco.); T-money (Deliver 500 passengers in Seoul.); Seoul Train (Deliver 1400 passengers in Seoul with tunnels on no more than one line.); 交通一卡通 (Deliver 500 passengers in Shanghai.); Shanglow? Shanghai! (Deliver 1200 passengers in Shanghai with at least one station connected to all lines.); SmarTrip (Deliver 500 passengers in Washington, D.C.); Money Train (Deliver 2100 passengers in Washington, D.C.); Istanbulkart (Deliver 500 passengers in Istanbul.); Marmaray (Deliver 1500 passengers in Istanbul using no more than one tunnel.); स्मार्टकार्ड (Deliver 500 passengers in Mumbai.); Elaborate Dance Number (Reach week nine in Mumbai.); SL Access (Deliver 500 passengers in Stockholm.); Centralen (Reach week eight in Stockholm with at least one station connected to all lines.); EZ-Link (Deliver 500 passengers in Singapore.); Circle Line (Deliver 1600 passengers in Singapore using no more than one loop.); Earl Grey (Deliver 1000 passengers in London.); Mustard and Sauerkraut (Deliver 1000 passengers in New York City.); Baguette Tradition (Deliver 1000 passengers in Paris.); 羊城通 (Deliver 500 passengers in Guangzhou.); City of Rams (Deliver 1500 passengers in Guangzhou with tunnels on no more than one line.); T-Mobilitat (Deliver 500 passengers in Barcelona.)."
            ]
        },
        {
            "heading": "Expansion Cities II",
            "body": [
                "The later expansion cities and their challenges: Santiago, Lagos, Chicago, Chongqing, Budapest, Addis Ababa, Nanjing, Tashkent, Boston, Warsaw, Lisbon and Tokyo - each with a passenger-delivery achievement and a constrained challenge.",
                "The achievements here: This perfect dream (Deliver 1200 passengers in Barcelona with tunnels on no more than one line.); Bip! (Deliver 500 passengers in Santiago.); Mapu chuco (Deliver 1500 passengers in Santiago using no more than one tunnel.); Lagos Connect (Deliver 500 passengers in Lagos.); Mainland to Island (Deliver 1200 passengers in Lagos with tunnels on no more than one line.); Ventra (Deliver 500 passengers in Chicago.); 106 miles (Deliver 1400 passengers in Chicago with no more than eight stations per line.); 宜居畅通卡 (Deliver 500 passengers in Chongqing.); Fog City (Deliver 1800 passengers in Chongqing using no more than one loop.); Elektra (Deliver 400 passengers in Budapest.); From Buda to Pest and back again (Deliver 1200 passengers in Budapest using no more than two tunnels.); የአዲስ አበባ ቀላል ባቡር (Deliver 500 passengers in Addis Ababa.); Bean there done that (Deliver 1800 passengers in Addis Ababa using only loops.); 金陵通 (Deliver 500 passengers in Nanjing.); Zijin Shan (Deliver 1600 passengers in Nanjing using no more than one loop.); ATTO (Deliver 500 passengers in Tashkent.); It's about the journey (Deliver 1600 passengers in Tashkent with tunnels on no more than one line.); CharlieCard (Deliver 400 passengers in Boston.); Four ways to Fenway (Deliver 1600 passengers in Boston using no more than four lines.); WKM (Deliver 300 passengers in Warsaw.); Warsaw Tourist (Deliver 1600 passengers in Warsaw using no more than one loop.); Navegante (Deliver 400 passengers in Lisbon.); Lisbon Tourist (Deliver 1400 passengers in Lisbon using no more than four lines.); Pasmo (Deliver 500 passengers in Tokyo.); Tokyo Tourist (Deliver 1200 passengers in Tokyo with at least one station connected to all lines.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play each city's Normal mode once to hit its basic passenger-delivery achievement (200-600 passengers depending on the city).",
                "2. Come back to each city for its challenge achievement - read the constraint first, then design a network that respects it from the start.",
                "3. Do the \"reach week N\" achievements (Osaka, San Francisco, Mumbai, Stockholm) by playing defensively and adding stations and carriages as demand grows rather than expanding aggressively.",
                "4. Post a score in the daily challenge (Day trip), then remember to do it every weekday for a week (Commuter).",
                "5. Mop up any remaining city challenges, prioritising the tunnel- and loop-limited ones since those are the puzzles most sensitive to your opening layout.",
                "Tip: for the loop-only challenges (São Paulo, Addis Ababa, Circle Line), a single well-placed loop that touches every station type is far more efficient than several small loops - passengers on a loop always have a route to their destination, so one big loop can carry a surprising volume before it congests."
            ]
        }
    ]
};
