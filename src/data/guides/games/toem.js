// TOEM Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/toem.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1307580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "toem-achievement-guide",
    "category": "game",
    "gameSlug": "toem",
    "icon": "📷",
    "title": "TOEM Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in TOEM (1 hidden). The one hidden achievement is a developer easter egg photographed on the Oak Hotel ceiling. Everything else - the region quest and photo-challenge completions, the compendium, the close-up portraits, the landmark event photos, and the Basto resort DLC - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "TOEM has 48 Steam achievements, 1 of them hidden. You travel by bus from home to the mountain-top TOEM phenomenon, solving little problems for people with photos along the way. The visible achievements cover visiting each region (Oaklaville, Stanhamn, Logcity, Kiiruberg and the top), completing every quest and every photo challenge per region, filling the creature compendium, the eight close-up portraits, the landmark event photos (clock tower, oakhotel, Smiling Huntsman, nana's house, the TOEM phenomenon), a spread of one-offs (pet a dog, the snail race, 10,000 steps, full snow gear), and the whole Basto beach-resort DLC.",
                "The 1 hidden achievement is a developer easter egg: photographing the team hidden on the Oak Hotel ceiling in Oaklaville.",
                "The catalog marks it difficulty 2 and single-playthrough. The game is short and gentle; nothing is missable and everything is reachable after the story."
            ]
        },
        {
            "heading": "Journey & Regions",
            "body": [
                "Starting the adventure, visiting each region and the mountain top, and completing every quest per region (and all of them).",
                "The achievements here: A true completionist (Complete all quests in the base game); Business executed (Complete all quests in Logcity); Strong as an oak (Complete all quests in Oaklaville); Seaworthy (Complete all quests in Stanhamn); Ice fighter (Complete all quests in Kiiruberg); The calm forest (Visit Oaklaville); Set sail for good weather (Visit Stanhamn); The big city (Visit Logcity); Snowy peaks (Visit Kiiruberg); So close now! (Visit the top of Kiiruberg); The beginning (Start your adventure!)."
            ]
        },
        {
            "heading": "Photography",
            "body": [
                "The per-region photo challenges, the creature compendium, the eight close-up portraits, and the landmark event photos.",
                "The achievements here: A sparkling jump (Snap a close-up photo of a dancer); 100 followers (Snap a close-up photo of an influencer); A great story (Snap a close-up photo of the mountain explorer); Happy youth (Snap a close-up photo of an old man); Flight ready (Snap a close-up photo of a special seagull); Just a sock (Snap a close-up photo of the sockman); A new job (Snap a close-up photo of a stressed human); Calmed down (Snap a close-up photo of the skeleton); Collect them all (Photograph all compendium creatures from the base game); City professional (Complete the photo challenges in Logcity); Nature's show-stopper (Complete the photo challenges in Oaklaville); Calm as the sea (Complete the photo challenges in Stanhamn); The biggest hurdle (Complete the photo challenges in Kiiruberg); The grand clock tower (Photograph the grand clock tower's special event); A majestic hotel (Photograph the oakhotel from the lookout point); A voyage underwater (Photograph the Smiling Huntsman); Home sweet home (Photograph nana's house); Experience TOEM (Photograph the TOEM phenomenon); Self portrait (Snap a close-up photo of yourself); Moonlit beauty (Snap a close-up photo of the nix); King's new shirt (Snap a close-up photo of the king)."
            ]
        },
        {
            "heading": "One-offs & Basto DLC",
            "body": [
                "The small feats (employee of the month, every item equipped, full snow gear, pet a dog, the dev pets, 10,000 steps, the snail race, cool moon, the hotel easter egg) and the entire Basto beach-resort DLC.",
                "The achievements here: Employee of the month (Our best non-employed employee!); Cosplayer (Equip every base game item once); All geared up (Defeat the winds with your style!); You found us! (In the Oak Hotel in Oaklaville, point your camera up at the dark ceiling and photograph the developers hidden up there.); Who's a good boy?! (Pet a pet); Look at those cuties (Photograph all of the development team’s animals); Going long! (You just walked a thousand miles!); Slow and steady (What an amazing race that was! Thrilling action all around!); Tropical paradise (Visit Basto); Maximum vacation (Relax on a chair with your vacation outfit on); Splish-splash (Splash someone who is taking a bath); The Royal Castle (Photograph the royal sand castle); And some more (Photograph all compendium creatures on Basto); A Viking's holiday (Complete all quests in Basto); Pro gamer (Complete all carnival games); Cool moon (Wazzuuppp)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Travel region by region, completing every quest and photo challenge before you move on - the regions do not lock, but it is tidier this way.",
                "2. Photograph every compendium creature and take the eight close-up portraits and the landmark event photos as you pass them.",
                "3. In Oaklaville, point your camera at the dark hotel ceiling for the 'You found us!' easter egg.",
                "4. Mop up the one-offs: full snow gear before Kiiruberg, the snail race, 10,000 steps of walking, pet a dog, photograph the dev pets.",
                "5. Play the Basto beach-resort DLC through for its quests, compendium, carnival games and landmark photo.",
                "Tip: the compendium is the one thing easy to leave incomplete - many creatures only appear at certain times of day or after a quest changes an area, so re-sweep each region once its quests are done rather than assuming you photographed everything the first time through."
            ]
        }
    ]
};
