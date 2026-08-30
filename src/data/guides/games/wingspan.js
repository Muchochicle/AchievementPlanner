// Wingspan Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wingspan.json), whose 64 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1054490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wingspan-achievement-guide",
    "category": "game",
    "gameSlug": "wingspan",
    "icon": "🐦",
    "title": "Wingspan Achievement Guide",
    "summary": "A practical guide to all 64 Steam achievements in Wingspan - none are hidden. Covers high-scoring and card-synergy feats, specific bird-power combos and win conditions, and every regional expansion's bird atlas.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wingspan has 64 Steam achievements and none are hidden. As the digital adaptation of the board game, the list rewards exploring the game's many bird-power synergies and scoring paths - high single-game scores, specific card combos (ravens and crows stacked, omnivore bonuses, nectar spending), habitat and power-type variety feats, and dedicated \"Know-it-owl\" achievements for playing every bird in the base game and each regional expansion (Europe, Oceania, Asia) at least once.",
                "Nothing is missable - every achievement is checked at the end of a completed game, and any missed combo or scoring target can simply be attempted again in a future game. The genuine long poles are the three regional \"Know-it-owl\" expansion achievements, since each needs you to specifically play every new bird that expansion adds at least once, which takes many games of deliberately seeking out the newer cards.",
                "Tip: several achievements reward a specific losing or low-scoring condition (Quacking under Pressure, Eggs-istential crisis) as much as the high-scoring ones - do not feel like you need to always play to win; a deliberately unusual strategy in a casual game can clear an achievement a normal winning strategy never would."
            ]
        },
        {
            "heading": "High Scores & Card Synergies",
            "body": [
                "Early scoring and synergy achievements: a raven/gull combo win, 10+ predator hunts, 25+ tucked cards under one bird, a 120+ point game, unlocking the full bird atlas, 15 birds in one game, 3 ravens/crows in one habitat, 60+ points of birds at game end, giving away food 5 times, a Fishery Manager/Wetland Scientist combo, 30+ bonus points, playing one bird of each point value, and a 35-egg win.",
                "The achievements here: Better Luck Nest Time (Score at least 80 points in a game when one of your opponents has a raven in the same habitat as a Franklin's Gull or Killdeer.); ILL EAGLE (Succeed in 10 or more predator hunts in one game.); What the Flock (Have more than 25 cards tucked under one bird in a single game.); Beak Performance (Score 120 points or more in a single game.); A Real Know-it-owl (Unlock all birds in the bird atlas. (By playing each of them at least once)); Fully Fledged (Play 15 birds in a single game.); Attempted Murder (Play 3 ravens and/or crows in the same habitat.); This Present Caw-st a Fortune (Have at least 60 points worth of birds at the end of one game.); Toucan of My Appreciation (Give other players food tokens on at least 5 turns in one game.); Investing in the Stork Market (Score points with the Fishery Manager and Wetland Scientist cards in the same game.); A Bird’s Best Subject? Owl-jay-bra (Have more than 30 points worth of bonus points in one game.); Here's My Number, so Caw Me Maybe (Play one bird of each point value (0-9) in a game.); Clutch Performance (Win a game with at least 35 eggs in your preserve.)."
            ]
        },
        {
            "heading": "Playstyle Challenges",
            "body": [
                "A 5-player win, playing 3+ birds in one turn, an Omnivore bonus of 16+, filling every egg slot, being first to play a worm-eating bird, laying 10+ eggs with pink powers, beating Hard-difficulty Automa, playing 5 bonus-card birds, playing 5 predators, finishing your first game, playing 3 birds worth 5+ VP in one habitat, moving a bird between habitats 5 times, and playing two birds in one turn.",
                "The achievements here: Free-for-owl (Win a 5-player match.); Owl of a Sudden (Play three or more birds in a single turn.); Wild Goose Chase (Score at least 16 points from the Omnivore bonus card.); Egg-streme Measures (Have all eggs slots filled at the end of the game.); Early Bird Gets the Worm (Be the first player to play a bird that eats worms.); Money for Nothin' and Chicks for Free (Lay at least 10 eggs using pink powers in a single game.); Pheasant Diversion (Win against the Automa on Hard difficulty.); Wake Me up Before You Dodo (Play 5 bonus card birds in the same game. (Birds whose powers grant bonus cards are generally threatened/vulnerable/endangered species, or at least have a subspecies that is.)); Fly Like an Eagle (Play 5 predators in a game.); By the Pricking of My Thumbs, Something Winged This Way Comes (Finish your first game of Wingspan.); Birds of a Feather (Play 3 birds worth 5 or more VPs in the same habitat.); Fair-feather Friends (Move a bird between habitats five times in a game.); Build Two Birds with One Stone (Play two birds in one turn.)."
            ]
        },
        {
            "heading": "Endgame Conditions",
            "body": [
                "A specific hand-and-forest state at turn end, an AI win, a 90+ point win with 1 or fewer Wetland birds, finishing with a lower score than mid-game, completing the Tutorial, playing 16 birds in one game, ending with 0 eggs, the Wingspan: European Expansion atlas, a 180+ point game, caching 15 food via predator powers only, 5 European birds in one habitat, 70+ tucked cards in your final score, and a rats-avoided tucking combo.",
                "The achievements here: A Bird in the Hand (Have one bird in your hand and two in your forest at the end of your turn.); Bird Brained (Win a game against the AI.); Once Bittern, Twice Shy (Win a game with a score of at least 90 points with no more than 1 bird in your Wetland.); Quacking under Pressure (Finish a game having a lower point total than during the game.); The Eagle Has Landed (Finish the Tutorial); Passenger 57 (Play 16 birds in a single game.); Eggs-istential crisis (End the game with 0 eggs.); A Real Know-it-owl: Europe (Play at least once all the new birds of the Wingspan: European Expansion); Birdnado (Score over 180 points in a single game.); Doomsday Prepper (Cache 15 food on birds using only the predator powers.); European Union (Have five European birds in one habitat.); Full Tuck! (Get at least a 70 of tucked cards in your final score.); Rat Bird (Use three cards to pay for bird rather than rats and tuck all three.)."
            ]
        },
        {
            "heading": "Advanced Combos",
            "body": [
                "Stealing 10 food from opponents, stacking a bird on a larger-wingspan bird, triggering 3+ end-of-round powers, winning all 3 habitats' nectar scoring, an exact 777 nectar split, 5 birds in one habitat facing the same direction, a migratory-power habitat swap, 3 flightless birds, all 3 Analyst bonus cards, tucking 50+ cards under one bird, 5+ GAME END powers in a win, 5 different power types/colors in one habitat, and 5 nectar-eating birds in one habitat.",
                "The achievements here: Robin Crow (Steal 10 food from your opponents' supplies in a single game.); There's always a bigger bird! (Play a bird on top of another bird whose wingspan is larger than the previous one. ); Wait, one more thing! (Trigger three or more end of round powers in one round.); Nectar of Life (Win 1st place in all 3 habitats when scoring points for nectar spent.); Nectar Jackpot (End the game with EXACTLY seven nectar spent in each habitat (777).); All Birds, Aligned! (Play 5 birds in one habitat with beaks pointing in the same direction.); Fly me to the Moor (Send the Tui or Superb Lyrebird to the grassland habitat by copying a migratory bird power.); Unflappable (Play 3 flightless birds in one game.); Global Analyst (Score all 3 Analyst bonus cards (Forest, Grassland, and Wetland) in one game.); The Tuckinator (Tuck at least 50 cards under one bird.); Mellow Yellow (Win a game with 5 or more GAME END powers.); By Our Powers Combined (Play 5 birds with different power types/colors in one habitat.); Sweet Tooth (Play five nectar-eating birds in a single habitat.)."
            ]
        },
        {
            "heading": "Regional Expansions & Deep Cuts",
            "body": [
                "The Wingspan: Oceania Expansion atlas, 15 eggs at once with the Common Tailorbird, 15+ Duet Map tokens, a push-your-luck 15+ food cache, out-scoring an opponent's own bonus card, 5 predator activations with the Oriental Bay-Owl, a 21+ Endangered Species Protector win, a token-free Duet Mode win, 3+ birds over their egg limit at game end, sending 3 birds to an opponent's preserve, copying a power to relocate another player's bird, and the Wingspan: Asia Expansion atlas.",
                "The achievements here: A Real Know-it-owl: Oceania (Play at least once all the new birds of the Wingspan: Oceania Expansion.); Tailored Fit (Lay 15 eggs at once with the Common Tailorbird.); Devoted to Duet (Place more than 15 Tokens on the Duet Map in one game.); Jackpot Cache (Use a push-your-luck bird to cache 15+ food on it.); Like Your Birds, But Better (Score an opponent’s bonus card to earn more points from it than them.); Owl Hands On Deck (Activate 5 predator powers at the end of a single round using the Oriental Bay-Owl.); We're SO Back (Win a game while scoring 21 points or more on the \"Endangered Species Protector\" bonus card.); Swan Song, Solo (In Duet Mode, place no tokens on bonus spaces and win the game.); To Egg-Finity and Beyond! (End the game with at least 3 of your birds having gone over their egg nest limit.); Flying International (Send 3 birds to an opponent's preserve.); Double Agent (Copy another player's bird power to move a bird to another player's preserve.); A Real Know-it-owl: Asia (Play at least once all the new birds of the Wingspan: Asia Expansion.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Finish the Tutorial and your first full game to pick up the earliest milestones, then keep playing regularly toward the high-score achievements (Beak Performance at 120+, Birdnado at 180+) as your card sense improves.",
                "2. Chase specific bird-power synergies as they come up in your hand: raven/crow stacking, predator hunts, nectar spending, tucking cards, and playing multiple birds worth 5+ VP in one habitat.",
                "3. Work toward the three Know-it-owl expansion achievements (base game, Europe, Oceania, Asia) by deliberately picking new or unused birds from each set across several games.",
                "4. Try the AI and Automa-specific win achievements (Bird Brained, Pheasant Diversion on Hard) and the multiplayer-specific ones (Free-for-owl in a 5-player match, Flying International, Double Agent).",
                "5. Once comfortable with advanced combos, chase the deep-cut synergy achievements: Nectar Jackpot (exactly 777 nectar spent), All Birds Aligned, Global Analyst, and the Duet Mode-specific achievements (Devoted to Duet, Swan Song Solo).",
                "Tip: Real Know-it-owl (all base-game birds) and its expansion counterparts do not need a special \"achievement run\" - just make a habit of picking an unfamiliar bird over a familiar favorite whenever your hand allows it, and the atlas fills in naturally over your normal games."
            ]
        }
    ]
};
