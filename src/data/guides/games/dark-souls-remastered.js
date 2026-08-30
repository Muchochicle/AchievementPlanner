// DARK SOULS: REMASTERED Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dark-souls-remastered.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   570940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dark-souls-remastered-achievement-guide",
    "category": "game",
    "gameSlug": "dark-souls-remastered",
    "icon": "🔥",
    "title": "DARK SOULS: REMASTERED Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in DARK SOULS: REMASTERED - none are hidden. Covers the two endings and the spell, weapon and covenant collections, the eleven weapon-reinforcement-path achievements, and the world-progression and boss-kill achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DARK SOULS: REMASTERED has 41 Steam achievements and none of them are hidden. Most are unmissable progression: arriving in Lordran and then Anor Londo, ringing both Bells of Awakening, acquiring the Lordvessel, and defeating the four Lord Soul bosses plus the optional Gwyndolin and Priscilla. The completion-heavy ones are the collections - both endings, all rare weapons, all sorceries, all pyromancies, all miracles, discovering all 9 covenants, and acquiring a fully upgraded weapon down every one of the ten reinforcement paths (standard, crystal, lightning, raw, magic, enchanted, divine, fire, chaos, occult).",
                "This is a roughly two-playthrough completion. The two endings are mutually exclusive in a single run, and getting every spell, every rare weapon and every covenant realistically needs New Game Plus because some come from boss-soul weapons or covenant rewards you can only obtain once per cycle. Nothing is time-limited, but a few covenants and rare drops are easy to lock yourself out of for the current playthrough by killing the wrong NPC.",
                "Tip: plan two characters or two NG cycles from the start - a first run to explore freely and join the covenants you can, and a second focused run with a wiki checklist for the missing spells, weapons and covenant items, taking whichever ending you didn't get the first time."
            ]
        },
        {
            "heading": "Endings, Collections & Covenants",
            "body": [
                "The platinum (The Dark Soul), both endings (To Link the Fire, The Dark Lord), the four spell/weapon collections (all rare weapons, all sorceries, all pyromancies, all miracles), and discovering each of the nine covenants - Way of White, Princess's Guard, Blade of the Darkmoon, Warrior of Sunlight, Forest Hunter, Darkwraith, Path of the Dragon, Gravelord Servant, Chaos Servant.",
                "The achievements here: The Dark Soul (All achievements completed. Congratulations!); To Link the Fire (Reach \"To Link the Fire\" ending.); Dark Lord (Reach \"The Dark Lord\" ending.); Knight's Honor (Acquire all rare weapons.); Wisdom of a Sage (Acquire all sorceries.); Bond of a Pyromancer (Acquire all pyromancies.); Prayer of a Maiden (Acquire all miracles.); Covenant: Way of White (Discover Way of White covenant.); Covenant: Princess's Guard (Discover Princess's Guard covenant.); Covenant: Blade of the Darkmoon (Discover Blade of the Darkmoon covenant.); Covenant: Warrior of Sunlight (Discover Warrior of Sunlight covenant.); Covenant: Forest Hunter (Discover Forest Hunter covenant.); Covenant: Darkwraith (Discover Darkwraith covenant.); Covenant: Path of the Dragon (Discover Path of the Dragon covenant.); Covenant: Gravelord Servant (Discover Gravelord Servant covenant.); Covenant: Chaos Servant (Discover Chaos Servant covenant.)."
            ]
        },
        {
            "heading": "Weapon Reinforcement Paths",
            "body": [
                "Acquiring a best-in-path weapon down each of the ten upgrade paths - standard, crystal, lightning, raw, magic, enchanted, divine, occult, fire and chaos reinforcement - plus lighting a bonfire flame (Enkindle).",
                "The achievements here: Strongest Weapon (Acquire best weapon through standard reinforcement.); Crystal Weapon (Acquire best weapon through crystal reinforcement.); Lightning Weapon (Acquire best weapon through lightning reinforcement.); Raw Weapon (Acquire best weapon through raw reinforcement.); Magic Weapon (Acquire best weapon through magic reinforcement.); Enchanted Weapon (Acquire best weapon through enchanted reinforcement.); Divine Weapon (Acquire best weapon through divine reinforcement.); Occult Weapon (Acquire best weapon through occult reinforcement.); Fire Weapon (Acquire best weapon through fire reinforcement.); Chaos Weapon (Acquire best weapon through chaos reinforcement.); Enkindle (Light bonfire flame.)."
            ]
        },
        {
            "heading": "World Progression & Boss Kills",
            "body": [
                "Acquiring the Estus Flask, arriving in Lordran and then Anor Londo, ringing both Bells of Awakening, the Rite of Kindling and Art of Abysswalking, acquiring the Lordvessel, and defeating Gravelord Nito, the Bed of Chaos, the Four Kings, Seath the Scaleless, Dark Sun Gwyndolin and Crossbreed Priscilla.",
                "The achievements here: Estus Flask (Acquire Estus Flask.); Reach Lordran (Arrive in Lordran.); Ring the Bell (Undead Church) (Ring Bell of Awakening at Undead Church.); Ring the Bell (Quelaag's Domain) (Ring Bell of Awakening in Quelaag's domain.); Rite of Kindling (Acquire the Rite of Kindling.); Art of Abysswalking (Acquire the Art of Abysswalking.); Reach Anor Londo (Arrive in Anor Londo.); Lordvessel (Acquire the Lordvessel.); Defeat Gravelord Nito (Defeat the Soul Lord Gravelord Nito.); Defeat Bed of Chaos (Defeat the Soul Lord Bed of Chaos.); Defeat the Four Kings (Defeat the Four Kings, inheritors of souls.); Defeat Seath the Scaleless (Defeat Seath the Scaleless, inheritors of souls.); Defeat the Dark Sun Gwyndolin (Defeat Dark Sun Gwyndolin, the Darkmoon God.); Defeat Crossbreed Priscilla (Defeat Crossbreed Priscilla, the Lifehunter)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your first character, explore freely - reach Lordran, ring both Bells, get the Lordvessel, and beat the four Lord Soul bosses plus Gwyndolin and Priscilla.",
                "2. Join every covenant you can on that run (some conflict, so prioritise Darkwraith, Gravelord Servant and Chaos Servant, which are easy to miss).",
                "3. Start reinforcing weapons down the various paths using a wiki checklist - many need boss souls or covenant materials, so note which you can only finish in NG+.",
                "4. Take one ending on the first run, then continue into New Game Plus (or start a second character) for the other.",
                "5. On the second cycle, mop up the missing sorceries, pyromancies, miracles and rare weapons, and finish any reinforcement paths you couldn't complete before.",
                "Tip: keep a spare set of the base weapons you plan to upgrade and do not sell boss-soul weapons - Knight's Honor (all rare weapons) counts several boss-soul and covenant weapons, and re-obtaining one you sold can cost a whole extra NG cycle."
            ]
        }
    ]
};
