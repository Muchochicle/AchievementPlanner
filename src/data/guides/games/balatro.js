// Balatro Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/balatro.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2379780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group by what each achievement needs: progression wins,
//   scoring feats, deck size and economy, and the challenge-run and
//   100%-collection set.
export const GUIDE = {
    "slug": "balatro-achievement-guide",
    "category": "game",
    "gameSlug": "balatro",
    "icon": "🃏",
    "title": "Balatro Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Balatro - none are hidden. The Ante and Stake progression wins, the scoring and poker-hand feats, the deck-size and economy achievements, and the challenge-run and 100%-collection set.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Balatro has 31 Steam achievements and none are hidden. Most come naturally from playing a lot of runs; the completion is gated on the collection achievements (discover every Joker, Planet, Tarot, Spectral and Voucher) and the two hardest wins: Completionist+ (win with every deck on Gold Stake) and Completionist++ (a Gold Sticker on every Joker).",
                "Nothing is missable - collection progress and win records persist across every run - so this is a play-until-it's-done list rather than something to route.",
                "Tip: unlock and win with each deck on ascending Stakes as you go, rather than farming one deck - it spreads out the deck unlocks, the Stake wins and the Joker/consumable discoveries, and gets you most of the way to Completionist+ without extra effort."
            ]
        },
        {
            "heading": "Progression & Wins",
            "body": [
                "The core wins: reaching Ante 4 and Ante 8, winning a run, winning on Red, Black and Gold Stake, a 12-round speedrun win, and a win without rerolling the shop.",
                "The achievements here: Ante Up! (Reach Ante 4); Ante Upper! (Reach Ante 8); Heads Up (Win a Run); Low Stakes (Win a run on at least Red Stake difficulty); Mid Stakes (Win a run on at least Black Stake difficulty); High Stakes (Win a run on at least Gold Stake difficulty); Speedrunner (Win a run in 12 or fewer rounds); You Get What You Get (Win a run without rerolling the shop)."
            ]
        },
        {
            "heading": "Scoring & Poker Hands",
            "body": [
                "The scoring feats: a Flush with 5 Wild Cards, breaking 2 Glass Cards in one hand, a Royal Flush, levelling a poker hand to 10, and scoring 10,000 / 1,000,000 / 100,000,000 Chips in a single hand.",
                "The achievements here: Flushed (Play a Flush with 5 Wild Cards); Shattered (Break 2 Glass Cards in a single hand); Royale (Play a Royal Flush); Retrograde (Get any poker hand to level 10); 10K (Score 10,000 Chips in a single hand); 1,000K (Score 1,000,000 Chips in a single hand); 100,000K (Score 100,000,000 Chips in a single hand)."
            ]
        },
        {
            "heading": "Deck Size & Economy",
            "body": [
                "The deck and money achievements: playing and discarding 2,500 cards each, holding $400+ in a run, buying 5 Vouchers by the end of Ante 4, and thinning your deck to 20 cards or padding it to 80.",
                "The achievements here: Card Player (Play at least 2500 Cards); Card Discarder (Discard at least 2500 Cards); Nest Egg (Have $400 or more during a single run); ROI (Buy 5 Vouchers by the end of Ante 4); Tiny Hands (Thin your deck down to 20 or fewer cards); Big Hands (Have 80 or more cards in your deck)."
            ]
        },
        {
            "heading": "Challenges & Collection",
            "body": [
                "The completion block: any challenge run and every challenge run, discovering a Legendary Joker and every Planet, Tarot, Spectral and Voucher, discovering 100% of the collection, winning with every deck on Gold Stake, and earning a Gold Sticker on every Joker.",
                "The achievements here: Rule Bender (Complete any challenge run); Rule Breaker (Complete every challenge run); Legendary (Discover a Legendary Joker); Astronomy (Discover every Planet card); Cartomancy (Discover every Tarot card); Clairvoyance (Discover every Spectral card); Extreme Couponer (Discover every Voucher); Completionist (Discover 100% of your collection); Completionist+ (Win with every deck on Gold Stake difficulty); Completionist++ (Earn a Gold Sticker on every Joker)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the decks, climbing Stakes as you unlock them - clears Ante Up!, Ante Upper!, Heads Up, Low/Mid/High Stakes and most of the collection along the way.",
                "2. Do the one-off feats in runs where the opportunity comes up: Flushed, Shattered, Royale, Retrograde, the Chip-score achievements, Tiny Hands, Big Hands, ROI, Nest Egg, You Get What You Get and Speedrunner.",
                "3. Do all the challenge runs for Rule Bender and Rule Breaker.",
                "4. Finish the collection (Astronomy, Cartomancy, Clairvoyance, Extreme Couponer, Legendary, Completionist).",
                "5. Grind Completionist+ (every deck on Gold Stake) and Completionist++ (a Gold Sticker on every Joker) last - these are the real endgame.",
                "Tip: Completionist++ is by far the longest achievement - a Gold Sticker needs winning a Gold Stake run with that Joker in your final deck, so keep a checklist and deliberately build around unstickered Jokers once the rest of the list is done."
            ]
        }
    ]
};
