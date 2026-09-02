// Suicide Squad: Kill the Justice League Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/suicide-squad-kill-the-justice-league.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   315210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "suicide-squad-kill-the-justice-league-achievement-guide",
    "category": "game",
    "gameSlug": "suicide-squad-kill-the-justice-league",
    "icon": "💣",
    "title": "Suicide Squad: Kill the Justice League Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Suicide Squad: Kill the Justice League (8 hidden). The hidden achievements are three campaign story markers, one high-Mastery Incursion, two Support Squad mission finales, and two gear-system unlocks - all described spoiler-free or by their mechanical requirement. Everything else - the cinematic campaign beats, Riddler challenges, character leveling and the Infamy Set grind - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Suicide Squad: Kill the Justice League has 50 Steam achievements, 8 of them hidden. Task Force X - Harley Quinn, Deadshot, King Shark and Captain Boomerang - is sent into a Brainiac-occupied Metropolis to take down a corrupted Justice League. The visible achievements cover the cinematic campaign kills, the Riddler AR challenges and trophy hunt, leveling each character to max, reaching Squad Level 50, and the Bane Infamy Set tiers in the post-campaign endgame.",
                "The 8 hidden achievements are three campaign story markers (surviving the Batman Experience, a mid-campaign beat, rescuing Lex Luthor), completing an Incursion at Mastery level 15, the final Poison Ivy and Lex Luthor Support Squad missions, and two gear-system unlocks (a Villain Synergy and Ivy's Supercharge). They are described here spoiler-free or by their mechanical requirement.",
                "The catalog marks it difficulty 3 and single-playthrough. The campaign achievements are unmissable, but the endgame grind (Squad Level 50, Mastery 20, 100 Support Squad Contracts, the Infamy tiers) is the bulk of the time and is best done in co-op."
            ]
        },
        {
            "heading": "Campaign",
            "body": [
                "The twelve cinematic story beats, from raiding the Hall of Justice through each Justice League member to Brainiac. Three of these are the hidden story markers.",
                "The achievements here: Cleaning Out the Closet (Steal something useful from the Hall of Justice); Hitting The Fan (Story progress marker - survive the Batman Experience early in the campaign. Described here spoiler-free.); Fowl Play (Recruit your first Support Squad member); Walled In (Story progress marker - reached during the mid-campaign hunt for Poison Ivy. Described here spoiler-free.); Death Blooms (Recruit your second Support Squad member); Blitzkrieg Bop (Destroy the Behemoth); Thunderstruck! (Kill The Fastest Man Alive); Hell and Back (Story progress marker - rescue Lex Luthor. Described here spoiler-free.); Blackest Night (Kill The Green Lantern); Endgame (Kill The World's Greatest Detective); Abandon All Hope (Kill The Man of Steel); No One Defeats Brainiac! (Kill The Collector of Worlds)."
            ]
        },
        {
            "heading": "Incursions & Support Squad",
            "body": [
                "The Elseworld Incursion missions at rising Mastery levels and the per-character Support Squad mission lines that unlock the gear-overhaul vendors.",
                "The achievements here: Act of War (Complete your first Incursion Mission); Battle Lines (Complete an Incursion Mission at Mastery level 5); Killin' Time (Complete an Incursion Mission at Mastery level 10); Into the Angry Planet (Complete an Incursion Mission at Mastery level 15.); The Final Frontier (Complete an Incursion Mission at Mastery level 20); Winged Vengeance (Complete the final Penguin Support Squad Mission); War Machine (Complete the final Gizmo Support Squad Mission); Welcome to the Jungle! (Complete the final Poison Ivy Support Squad mission.); Managing People (Complete the final Rick Flag Support Squad Mission); Your World is Mine! (Complete the final Lex Luthor Support Squad mission.); Shock Treatment (Complete the final Hack Support Squad Mission); Combine and Conquer (Complete the final Toyman Support Squad Mission)."
            ]
        },
        {
            "heading": "Riddler Challenges",
            "body": [
                "The Riddler AR challenge stars, riddle solutions and trophy collection across Metropolis.",
                "The achievements here: Turn and Turn Again (Achieve 13 Stars in Riddler AR Challenges); Their Dark Designs (Achieve 26 Stars in Riddler AR Challenges); Blaze of Glory (Achieve 39 Stars in Riddler AR Challenges); The Right Question (Solve 5 of Riddler's Riddles); The Real Deal (Solve 21 of Riddler's Riddles); Stop Me If You've Heard This One (Collect 10 Riddler Trophies); The Oldest One in the Book! (Collect 40 Riddler Trophies)."
            ]
        },
        {
            "heading": "Progression & Gear",
            "body": [
                "Character and Squad leveling, the Combat Flair checklist, the Bane Infamy Set tiers, the gear-modification vendors (Penguin, Toyman), the Villain Synergy and Ivy's Supercharge, Support Squad Contracts, and beginning the Batman Experience.",
                "The achievements here: Level Up (Reach Level 10 with any Squad Member); Harleen the Queen (Reach Max Level with Harley Quinn); King For A Day (Reach Max Level with King Shark); Captain Boomerang! Agent of Oz (Reach Max Level with Captain Boomerang); Lawton's Last Stand (Reach Max Level with Deadshot); The Chosen One (Fully complete the Combat Flair checklist 5 times (Single Player Sessions Only)); Trial by Blood (Reach Squad Level 50); Choices (Get Penguin to overhaul a piece of gear); The Venom Connection (Equip 3 pieces of the Tier 1 Bane Infamy Set); All Sorts of Fun (Equip 3 pieces of the Tier 2 Bane Infamy Set); The Reaper (Equip 3 pieces of the Tier 3 Bane Infamy Set); Trial By Fire (What the hell just happened?); Choice of Evils (Unlock a Villain Synergy by equipping a Notorious Villain item together with a matching Infamy Set piece.); Grand Experiment (Get Toyman to Elite a piece of gear); Forces In Motion (Get Poison Ivy to Supercharge the Affliction on a piece of gear - available once all of Ivy's Squad missions are done.); Allies (Complete 50 Support Squad Contracts); Number the Dead (Defeat 10 Raising Hell Hit Squads); Need to Know (Complete 100 Support Squad Contracts); History Repeats (Begin the Batman Experience)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign to completion for all twelve cinematic beats, including the three hidden story markers - none are missable.",
                "2. Work the Support Squad mission lines for each character; finishing Ivy's and Lex's lines gives Welcome to the Jungle!, Your World is Mine! and unlocks Ivy's Supercharge.",
                "3. Level each of the four characters to max and push Squad Level toward 50 through Incursions and Finite Crisis activities.",
                "4. Grind Incursions up the Mastery ladder - level 10, 15 (Into the Angry Planet) and 20 (The Final Frontier) - and run the Riddler AR challenges and trophy hunt alongside.",
                "5. Farm the Bane Infamy Set and a Notorious Villain item for the three Infamy tiers and the Villain Synergy, and clear 100 Support Squad Contracts.",
                "Tip: the endgame grind (Mastery 20, Squad Level 50, 100 Contracts, Infamy gear) is dramatically faster in a full co-op squad of four - each player's Contract and Mastery progress counts, and higher Mastery drops the gear you need for the Infamy tiers."
            ]
        }
    ]
};
