// FINAL FANTASY XIII Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-xiii.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   292120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-xiii-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-xiii",
    "icon": "💎",
    "title": "FINAL FANTASY XIII Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in FINAL FANTASY XIII - none are hidden. Covers the thirteen story-chapter achievements, the Gran Pulse mission and exploration achievements, and the battle-role and endgame-mastery achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY XIII has 35 Steam achievements and none of them are hidden. Thirteen are story - an \"Instrument of...\" achievement for completing each chapter. The rest are the postgame grind: master each of the six Paradigm roles, complete all Cie'th Stone missions (and 5-star every one), pass Titan's trials, deal 100,000+ damage in one hit, fully develop every character's Crystarium, hold every weapon and accessory, and analyse the full stats of 100 enemies. Superstar (a 5-star rating on the final boss) and Treasure Hunter (every weapon and accessory) are the hardest.",
                "Nothing is permanently missable - Gran Pulse and its missions stay available after the story, the Crystarium unlocks fully in the postgame, and there are no one-shot achievements. This is a long completion mainly because of the mission 5-star grind, farming enough gil and components to fully upgrade every weapon for Treasure Hunter, and grinding the Adamantoise for CP.",
                "Tip: play the story, then unlock the full Crystarium after the final boss and set up an Adamantoise/Long Gui farm on Gran Pulse - that funds the weapon and accessory collection, the character development, and the CP for role mastery all at once."
            ]
        },
        {
            "heading": "Story: The Thirteen Instruments",
            "body": [
                "The chapter-completion achievements from Instrument of Fate through Instrument of Change - Fate, Dissent, Tragedy, Flight, Vengeance, Survival, Rebellion, Shame, Wrath, Truth, Hope, Faith and Change.",
                "The achievements here: Instrument of Fate (Took the first steps toward challenging an unjust fate.); Instrument of Dissent (Survived the Purge to confront a greater peril.); Instrument of Tragedy (Strode into danger's den and paid the consequences.); Instrument of Flight (Slipped through the net and lived to fight another day.); Instrument of Vengeance (Resolved to be more than a victim of circumstance.); Instrument of Survival (Evaded pursuers, though memories of the past still gave chase.); Instrument of Rebellion (Made plans to infiltrate enemy-occupied territory.); Instrument of Shame (Carried the burden of guilt to the end of the line.); Instrument of Wrath (Took the fight to the enemy's door.); Instrument of Truth (Recognized the true threat to the world's future.); Instrument of Hope (Traveled to the world below, seeking a way to alter fate.); Instrument of Faith (Defied destiny's charge and embarked on a different path.); Instrument of Change (Witnessed the dawn of a new crystal legend.)."
            ]
        },
        {
            "heading": "Gran Pulse Missions & Exploration",
            "body": [
                "Taking 10,000 steps on the lowerworld surface, the chocobo buried-treasure feat, completing all low-level, mid-level, high-level and then every Cie'th Stone mission, the Exorcist (seven Undying battles) and Floraphobe feats, passing Titan's trials, and earning a 5-star rating for every Cie'th Stone mission.",
                "The achievements here: Pulsian Pioneer (Took over 10,000 steps on the lowerworld surface.); Gysahl Wreath (Discovered buried treasure with a little help from a chocobo.); Kelger's Cup (Completed all low-level Cie'th Stone missions.); Xezat's Chalice (Completed all mid-level Cie'th Stone missions.); Exorcist (Triumphed over undying lowerworld souls in seven fierce battles.); Floraphobe (Toppled a green terror and cut an oversized succulent down to size.); Natural Selector (Passed Titan's trials.); Dorgann's Trophy (Completed all high-level Cie'th Stone missions.); Galuf's Grail (Completed all Cie'th Stone missions.); L'Cie Paragon (Earned a 5-star rating for all Cie'th Stone missions.)."
            ]
        },
        {
            "heading": "Battle Roles & Endgame Mastery",
            "body": [
                "Mastering the Commando, Ravager, Sentinel, Saboteur, Synergist and Medic roles, dealing 100,000+ damage with one attack, felling a heavyweight of the wilds (the Adamantoise), fully developing all characters, holding every weapon and accessory, discerning the full attributes of 100 enemies, and a 5-star rating in the final battle.",
                "The achievements here: Commando's Seal (Mastered the Commando role.); Ravager's Seal (Mastered the Ravager role.); Sentinel's Seal (Mastered the Sentinel role.); Saboteur's Seal (Mastered the Saboteur role.); Synergist's Seal (Mastered the Synergist role.); Medic's Seal (Mastered the Medic role.); Limit Breaker (Dealt 100,000+ damage with a single attack.); Adamant Will (Felled a heavyweight of the lowerworld wilds.); Master's Seal (Fully developed all characters.); Treasure Hunter (Held every weapon and accessory.); Loremaster (Discerned the full attributes of 100 enemies.); Superstar (Earned a 5-star rating in the battle to determine the world's fate.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to completion for the thirteen \"Instrument\" achievements.",
                "2. After the credits, unlock the full Crystarium and set up an Adamantoise (or Long Gui) farm on Gran Pulse for CP and gil.",
                "3. Use that CP to master all six Paradigm roles and fully develop every character.",
                "4. Grind gil and components to fully upgrade one weapon per character toward Treasure Hunter (every weapon and accessory), and analyse 100 different enemies for Loremaster.",
                "5. Do the Cie'th Stone missions, then go back for 5-star ratings on all of them, and finish with a 5-star final-boss rerun for Superstar.",
                "Tip: the 5-star mission ratings mostly come down to speed - equip Haste-ish synergist buffs, open with a full pre-buff and a Libra, and aim to stagger and burst the mark boss before the time threshold rather than playing safe."
            ]
        }
    ]
};
