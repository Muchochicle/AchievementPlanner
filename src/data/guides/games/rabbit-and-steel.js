// Rabbit and Steel Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/rabbit-and-steel.json), whose 54 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2132850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "rabbit-and-steel-achievement-guide",
    "category": "game",
    "gameSlug": "rabbit-and-steel",
    "icon": "🐇",
    "title": "Rabbit and Steel Achievement Guide",
    "summary": "A practical guide to all 54 Steam achievements in Rabbit and Steel (9 hidden). Covers clearing every Kingdom and its sub-boss areas on Normal, Hard and Lunar, the trinket collections, the music and palette unlocks, and the DLC content. Nine of the achievements are hidden - the six character stories, the two Floofball trinkets, and the DLC story - and their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Rabbit and Steel has 54 Steam achievements and 9 are hidden. The hidden nine are the six character stories - helping break the spell on the Crows ('Sisterly Love'), the Wolves ('A Pack of Equals'), the Dragons ('Regret'), the Mice ('The Strongest Mouse I Know'), the Frogs ('A Wonderful Collab') and the Rabbits ('Forget This Ambition') - the two Floofball trinkets ('The Moonlight Floofball' and 'The Spellbound Floofball', each a reward for a full Lunar-mode clear of the base and DLC Kingdoms), and 'I Hope You Found a Friend' (the DLC story ending). Everything visible is clearing the Moonlit Pinnacle and every sub-boss area on Normal / Hard / Lunar, collecting 10 up to 70 trinkets, unlocking all the music tracks, the Adept and Master palette milestones, and the Reflecting Pool DLC's areas and clears.",
                "The catalog marks it difficulty 5. This is a co-op MMO-raid-style bullet-hell roguelite; the Lunar-mode clears (and the two Floofballs) sit near 1% global completion and demand serious mechanical execution, and the palette unlocks are a long grind. The Normal and Hard clears and the trinket counts are the approachable part.",
                "Tip: do the six character stories by playing through the game once with each of the six characters - each one's story resolves on a full run as that character, so a Normal-difficulty pass with each covers all six hidden story achievements."
            ]
        },
        {
            "heading": "Kingdom Clears & Trinkets",
            "body": [
                "Clearing the Moonlit Pinnacle on Normal / Hard / Lunar, beating each base sub-boss area (Scholar's Nest, King's Arsenal, Red Darkhouse, Churchmouse Streets, Emerald Lakeside) on Normal / Hard / Lunar, collecting 10 / 20 / 30 / 40 trinkets, and the hidden Moonlight Floofball.",
                "The achievements here: Normal Clear (Beat the Moonlit Pinnacle on Normal Mode); Hard Clear (Beat the Moonlit Pinnacle on Hard Mode); Lunar Clear (Beat the Moonlit Pinnacle on Lunar Mode); The Scholar's Nest (Normal) (Beat the Scholar's Nest on Normal Mode); The Scholar's Nest (Hard) (Beat the Scholar's Nest on Hard Mode); The Scholar's Nest (Lunar) (Beat the Scholar's Nest on Lunar Mode); The King's Arsenal (Normal) (Beat the King's Arsenal on Normal Mode); The King's Arsenal (Hard) (Beat the King's Arsenal on Hard Mode); The King's Arsenal (Lunar) (Beat the King's Arsenal on Lunar Mode); The Red Darkhouse (Normal) (Beat the Red Darkhouse on Normal Mode); The Red Darkhouse (Hard) (Beat the Red Darkhouse on Hard Mode); The Red Darkhouse (Lunar) (Beat the Red Darkhouse on Lunar Mode); The Churchmouse Streets (Normal) (Beat the Churchmouse Streets on Normal Mode); The Churchmouse Streets (Hard) (Beat the Churchmouse Streets on Hard Mode); The Churchmouse Streets (Lunar) (Beat the Churchmouse Streets on Lunar Mode); The Emerald Lakeside (Normal) (Beat the Emerald Lakeside on Normal Mode); The Emerald Lakeside (Hard) (Beat the Emerald Lakeside on Hard Mode); The Emerald Lakeside (Lunar) (Beat the Emerald Lakeside on Lunar Mode); 10 Trinkets (Collect 10 Trinkets); 20 Trinkets (Collect 20 Trinkets); 30 Trinkets (Collect 30 Trinkets); 40 Trinkets (Collect 40 Trinkets); The Moonlight Floofball (Collect the Moonlight Floofball - a reward for completing a full Lunar-mode run of the base Kingdom (the Moonlit Pinnacle).)."
            ]
        },
        {
            "heading": "Stories, Music & DLC Clears",
            "body": [
                "The six hidden character stories (Crow, Wolf, Dragon, Mouse, Frog, Rabbit), unlocking all Kingdom music tracks, 10 Adept/Challenger and 10 Master/Spellbreaker palettes, and clearing the Reflecting Pool DLC Kingdom on Normal / Hard / Lunar.",
                "The achievements here: Sisterly Love (Help break the spell on the Crows (resolve the Crow character's story on a full run).); A Pack of Equals (Help break the spell on the Wolves (resolve the Wolf character's story).); Regret (Help break the spell on the Dragons (resolve the Dragon character's story).); The Strongest Mouse I Know (Help break the spell on the Mice (resolve the Mouse character's story).); A Wonderful Collab (Help break the spell on the Frogs (resolve the Frog character's story).); Forget This Ambition (Resolve the Rabbit character's story ('Forget This Ambition').); Moonlit Melodies (Unlock all of the Kingdom music tracks); Seeing Red (Unlock 10 Adept/Challenger Palettes); Rabbit Rabbit Rabbit (Unlock 10 Master/Spellbreaker Palettes); Normal Clear (Extra) (Beat the Reflecting Pool on Normal Mode); Hard Clear (Extra) (Beat the Reflecting Pool on Hard Mode); Lunar Clear (Extra) (Beat the Reflecting Pool on Lunar Mode)."
            ]
        },
        {
            "heading": "DLC Areas, Trinkets & Palettes",
            "body": [
                "Beating the DLC sub-boss areas (Darkhouse Depths, Subterra Sanctum, Atelier Aurum) on Normal / Hard / Lunar, collecting 50 / 60 / 70 trinkets, the hidden Spellbound Floofball, the hidden DLC story, all Extra music tracks, and the 20 / all Adept and 20 / all Master palette milestones.",
                "The achievements here: Darkhouse Depths (Normal) (Beat the Darkhouse Depths on Normal Mode); Darkhouse Depths (Hard) (Beat the Darkhouse Depths on Hard Mode); Darkhouse Depths (Lunar) (Beat the Darkhouse Depths on Lunar Mode); The Subterra Sanctum (Normal) (Beat the Subterra Sanctum on Normal Mode); The Subterra Sanctum (Hard) (Beat the Subterra Sanctum on Hard Mode); The Subterra Sanctum (Lunar) (Beat the Subterra Sanctum on Lunar Mode); Atelier Aurum (Normal) (Beat Atelier Aurum on Normal Mode); Atelier Aurum (Hard) (Beat Atelier Aurum on Hard Mode); Atelier Aurum (Lunar) (Beat Atelier Aurum on Lunar Mode); 50 Trinkets (Collect 50 Trinkets); 60 Trinkets (Collect 60 Trinkets); 70 Trinkets (Collect 70 Trinkets); The Spellbound Floofball (Collect the Spellbound Floofball - a reward for completing a full Lunar-mode run of the Reflecting Pool DLC Kingdom.); I Hope You Found a Friend (See the Reflecting Pool DLC story ending ('I Hope You Found a Friend').); Music For the Heart (Unlock all of the Extra music tracks); Rise to the Challenge (Unlock 20 Adept/Challenger Palettes); A True Challenger (Unlock all Adept/Challenger Palettes); Master of Many (Unlock 20 Master/Spellbreaker Palettes); Dedicated Spellbreaker (Unlock all Master/Spellbreaker Palettes)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a Normal-difficulty run with each of the six characters to resolve all six hidden character stories.",
                "2. Clear every area on Normal, then Hard, collecting trinkets and unlocking music as you go.",
                "3. Play the Reflecting Pool DLC and clear its areas on Normal and Hard.",
                "4. Grind the Adept and Master palette unlocks.",
                "5. Push the Lunar-mode clears, ending with the two Floofball trinkets.",
                "Tip: for the Floofballs, the community consensus is that the Assassin is the most mobile class and the Crows are the easiest Lunar area - learn invulnerability-frame builds and practise the Crow Lunar fight before attempting the full run."
            ]
        }
    ]
};
