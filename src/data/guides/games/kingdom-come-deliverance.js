// Kingdom Come: Deliverance Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/kingdom-come-deliverance.json), whose 82 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   379430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 46 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched (community 100%
//   guides / official wikis) and is a curatorial summary. Every non-hidden
//   description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "kingdom-come-deliverance-achievement-guide",
    "category": "game",
    "gameSlug": "kingdom-come-deliverance",
    "icon": "⚔️",
    "title": "Kingdom Come: Deliverance Achievement Guide",
    "summary": "A practical guide to all 82 Steam achievements in Kingdom Come: Deliverance (46 hidden). 46 of the 82 are hidden - covering the main story's key beats, every DLC's own story achievements (From the Ashes, The Amorous Adventures of Bold Sir Hans Capon, Band of Bastards, and A Woman's Lot), and Hardcore Mode. Researched from the Kingdom Come: Deliverance wiki (kingdomcomedeliverance.wiki.gg) and TrueAchievements/PlayStationTrophies guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Kingdom Come: Deliverance has 82 Steam achievements, 46 of them hidden - the highest hidden-achievement count of any game in this catalog. The visible track covers vice-and-virtue role-play stats (becoming an alcoholic, going two days without sleep or food, reading 20 books, brewing 15 potions), skill milestones (max Speech, max level, 200 kills, 50 headshot kills, 100 combos), exploration and wealth (all locations, all wayside shrines, 30,000 Groschen stolen, 5,000 Groschen hoarded, 2,000 saved by haggling), and completing every quest.",
                "The 46 hidden achievements split into the main story plus every DLC. 24 are base-game story beats and role-play secrets: completing the first quest, saving Theresa and later Lord Capon from the Cumans, joining Radzig's garrison, becoming a monk, finding out who your real father is, conquering the Vranik camp, jailing yourself in Skalitz, courting Theresa or Lady Stephanie, betraying your friends in the Gallows Brothers quest, finishing the main story, and completing it entirely as a virgin, among others. The rest belong to specific DLC: 2 to From the Ashes (renewing Pribyslavitz illiterate, inviting Fritz and Matthew to live there), 7 to The Amorous Adventures of Bold Sir Hans Capon (Hans's Honeyed Words romance and the No Rest for the Wicked ghost-prank quest), 9 to Band of Bastards (the Thirty Pieces, Bad Blood, Uninvited Guests, What Price Honour? and Ring of Bacchus quests), and 4 to A Woman's Lot (playing as Theresa through Ordinary Routine and The Madonna of Sasau).",
                "The catalog marks it difficulty 4 and missable:true, and recommends 2 playthroughs - many of the hidden role-play achievements (Virgin vs. the courtship ones, Merciful vs. a violent playstyle, the multiple mutually-exclusive quest outcomes) actively conflict with each other, so no single save can realistically capture all 46."
            ]
        },
        {
            "heading": "Vice, Virtue & Skill Stats",
            "body": [
                "Becoming an alcoholic, going 2 days without sleep, being stuffed or starved for 2-3 days, reading 20 books, brewing 15 potion types, 20 stealth kills, bagging 50 game animals, maxing Speech, being popular everywhere, and completing every quest.",
                "The achievements here: Alcoholic (Become addicted to alcohol.); Insomniac (Don't sleep for two days and nights.); Fatso (Be stuffed to bursting for two days.); Anorectic (Starve for three days.); Bookworm (Read twenty books.); Edward Kelly (Brew fifteen types of potion); Stealth Killer (Kill twenty enemies by stealth); Hunter (Bag fifty game animals.); Bard (Level up Speech to maximum.); King Charming (Be popular in every town and village.); Completionist (Complete all quests.)."
            ]
        },
        {
            "heading": "Merciful & More Milestones",
            "body": [
                "The hidden Merciful (complete the main quest line without killing anyone except Runt), plus 200 kills, discovering every location, winning the Talmberg horse race, walking 50km, finding every wayside shrine, 30,000 Groschen stolen, max level, 100 combos, 50 headshot kills, 2,000 Groschen saved haggling, 5,000 Groschen hoarded, 3 days in prison, 10,000 herbs collected, and 1,000 Groschen won at dice.",
                "The achievements here: Merciful (Complete the main quest line without killing anyone, except for Runt.); Serial Killer (Kill 200 people.); Traveller (Discover all locations on the map.); Knightrider (Win the Talmberg horse race.); Ranger (Walk more than 50 Km.); Pilgrim (Find all wayside shrines and conciliatory crosses.); Thief (Steal things with a total value of 30,000 Groschen.); Level Cap (Reach maximum level.); Fighter (Carry out 100 combos in combat.); Sniper (Kill 50 enemies with headshots. ); Haggler (Save 2000 Groschen by haggling.); Scrooge (Hoard 5,000 Groschen.); Convict (Spend three days in prison.); David Horak (Collect 10,000 herbs.); Gambler (Win 1,000 Groschen in the dice minigame.)."
            ]
        },
        {
            "heading": "Skalitz & Prologue Secrets",
            "body": [
                "10 hidden achievements from the game's opening hours: completing the first quest, saving Theresa from the Cumans during the escape, joining Sir Radzig's garrison, saving Lord Capon from the Cumans, saving Ginger from bandits, killing Runt, becoming a monk, finding out who your real father is, conquering the enemy camp at Vranik, and completing every optional objective in the Siege quest.",
                "The achievements here: Blacksmith's Son (Complete the first quest.); Cavalier (Save Theresa from the Cumans during the escape from Skalitz.); Awakening (Join Sir Radzig's garrison.); Buddy (Save Lord Capon from the Cumans.); Ginger (Save Ginger from the bandits.); Runt (Kill Runt.); Monk (Become a monk.); Bastard (Find out who your real father is.); Conqueror (Conquer the enemy camp at Vranik.); Talmberger (Complete every optional objective in the Siege quest.)."
            ]
        },
        {
            "heading": "The End & Further Secrets",
            "body": [
                "Completing the main story, plus 12 more hidden role-play secrets - getting jailed in Skalitz, getting drunk with Father Godwin, healing everyone in Merhojed, courting Theresa or Lady Stephanie, betraying your friends in the Gallows Brothers quest, finding out about Erik's past, becoming the Talmberg Huntsman, completing the Robber Baron quest, sabotaging all three executions, joining the ritual in Playing with the Devil, and finishing the whole game as a virgin - plus finishing in Hardcore Mode, with every negative perk, and dying for the first time in Hardcore Mode.",
                "The achievements here: The End (Complete the main story line.); Firestarter (Get jailed in Skalitz during the game's very first quest.); Sinner (Get drunk with Father Godwin at the Uzhitz tavern.); Plague Doctor (Heal every sick person in Merhojed during the Pestilence quest.); McLovin (Court Theresa by completing the Courtship side quest.); Casanova (Court Lady Stephanie in the At Your Service, My Lady side quest.); Judas (Betray your friends in the Gallows Brothers quest.); Freud (Find out about Erik's past.); Master Huntsman (Become the Talmberg Huntsman.); Robber Baron (Complete the Robber Baron side quest.); Spoilsport (Sabotage all three executions in the Money for Old Rope quest.); Bad Trip  (Join the ritual during the Playing with the Devil quest.); Virgin (Stay celibate and complete the entire game without any romantic or sexual encounter.); Hardcore Henry (Finish the game in Hardcore Mode.); 'Tis but a scratch (Finish the game in Hardcore Mode with all negative perks.); Kingdom Did Not Come (Die for the first time while playing in Hardcore Mode.)."
            ]
        },
        {
            "heading": "From the Ashes & the Rattay Tourney",
            "body": [
                "Renewing Pribyslavitz, then the 2 hidden From the Ashes achievements - renewing the whole settlement without ever learning to read, and inviting Fritz and Matthew to live there - plus a 2,000-Groschen daily income from it and a full armor set from the Rattay tourney.",
                "The achievements here: Bailiff (Ensure the renewal of Pribyslavitz.); Trial-and-Error (Renew the whole of Pribyslavitz without Henry ever having learned to read.); Perfectionist (Make 2,000 Groschen a day from Pribyslavitz.); Friends without Benefits (Invite Fritz and Matthew to live in Pribyslavitz.); Arena Master (Get a complete set of armour from the Rattay tourney.)."
            ]
        },
        {
            "heading": "The Amorous Adventures of Bold Sir Hans Capon",
            "body": [
                "7 hidden achievements from Hans Capon's romantic-comedy DLC: helping and then ensuring his success in the Honeyed Words quest, winning the dice tournament in Game of Throws, stealing the necklace there instead of winning, completing most of the ghost-prank objectives in No Rest for the Wicked, and burying the charcoal-burner Lev's remains in either Rattay or near Ledetchko.",
                "The achievements here: True Friend (Help Sir Hans Capon succeed in the Honeyed Words quest.); Wingman (Ensure Capon's success in the Honeyed Words quest without him getting caught.); I Can Quit Anytime (Win the dice tournament in the Game of Throws quest.); Lord Capon's Ghost (Steal the necklace in the Game of Throws quest without winning the tournament.); Ledetchko Revenant (Complete the main objectives, the rotten-egg prank, and the itinerant-haunting in the No Rest for the Wicked quest.); Christian Burial (Bury the charcoal-burner Lev's remains in Rattay during the No Rest for the Wicked quest.); Not-so-Christian Burial (Bury the charcoal-burner Lev's remains near Ledetchko during the No Rest for the Wicked quest.)."
            ]
        },
        {
            "heading": "Band of Bastards",
            "body": [
                "9 hidden achievements from the mercenary-war DLC: tracking the attackers in Bad Blood, persuading Kuno to attack immediately in Uninvited Guests, untying Jakey or leaving him tied 12 hours in Thirty Pieces, reminding Kuno of his promise (or a high Speech check) in What Price Honour?, returning or losing the Ring of Bacchus, rescuing all 5 survivors in the Angel of Mercy quest, and beating Henry in a friendly sparring match.",
                "The achievements here: Tracker (Complete the 'try and find traces of the attackers' objective in the Bad Blood quest.); Chivalrous Soul (Persuade Kuno to attack the mill right away in the Uninvited Guests quest.); Pinky Promise (Untie Jakey and let him leave during the Thirty Pieces quest.); Torturer (Leave Jakey tied up for 12 hours during the Thirty Pieces quest.); Mercenary's Honour (Remind Kuno of his promise in the What Price Honour? quest (after freeing Jakey and warning him about the bribe), or pass a high Speech check instead.); Game Over (Return the Ring of Bacchus to Kuno in the Ring of Bacchus activity.); Lost Trinket (Let the Ring of Bacchus be stolen from you in your sleep instead of handing it to a player.); Saviour (Rescue all 5 survivors during the Angel of Mercy quest.); Death by Splinter (Beat Henry in the friendly sparring match during the Ordinary Routine quest, playing as Theresa.)."
            ]
        },
        {
            "heading": "A Woman's Lot",
            "body": [
                "Playing as Theresa: completing her story and finding the Wyrm's hidden interior areas, seeing what Henslin hides, having every sin on your conscience, delivering infernal justice, plus the 4 hidden achievements - failing all 5 morning chores in Ordinary Routine, passing out drinking with Tailor Ambrose, defending Johanka against her heresy trial in The Madonna of Sasau, and reporting every wrongdoing to the Inquisitor after the Wicket Gate quest.",
                "The achievements here: Woman's Lot (Complete Theresa's story.); Bad Girl (Fail all 5 morning chores in the Ordinary Routine quest, playing as Theresa.); Like a Ghost (Recover Pavel's treasure without being discovered.); You had one job! (Pass out from drinking with Tailor Ambrose during their conversation, playing as Theresa.); Voyeur (See what Henslin has in his braies without being observed.); Full House Sinner (Have on your conscience every sin Johanka can think of.); Infernal Justice (The punishment fits the crime.); Angel of Mercy (Successfully defend Johanka against the heresy charge in The Madonna of Sasau trial.); Cleric's Pet (Report every wrongdoing in the province to the Inquisitor after completing the Wicket Gate quest.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story once for the base-game story beats (Skalitz prologue secrets, joining Radzig, The End) and the vice/virtue/skill milestones that don't conflict with each other.",
                "2. Plan a second, deliberately different playthrough for the mutually-exclusive role-play achievements (Virgin vs. courting Theresa/Stephanie, Merciful vs. a violent run, Judas's betrayal vs. loyalty).",
                "3. Play through each DLC's own quests once, focusing on their achievement-specific choices: From the Ashes' town management, Hans Capon's Honeyed Words and Game of Throws, Band of Bastards' Thirty Pieces and Ring of Bacchus, and A Woman's Lot's Theresa-focused story.",
                "4. Save Hardcore Mode for after you know the game well - both the completion and no-negative-perk achievements, plus the first-death achievement, are easiest once you already know the map and quest solutions.",
                "5. Mop up the exploration and wealth grinds (all locations, all shrines, 50km walked, the Groschen totals) alongside normal play rather than as a dedicated pass.",
                "Tip: 'Trial-and-error' specifically requires Henry to still be illiterate when you finish renewing Pribyslavitz - if you're chasing it, start the From the Ashes DLC content before ever taking the Reading perk or finishing the 'The Fires of War' literacy quest."
            ]
        }
    ]
};
