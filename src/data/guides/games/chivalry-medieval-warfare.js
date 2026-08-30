// Chivalry: Medieval Warfare Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/chivalry-medieval-warfare.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   219640 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "chivalry-medieval-warfare-achievement-guide",
    "category": "game",
    "gameSlug": "chivalry-medieval-warfare",
    "icon": "🗡️",
    "title": "Chivalry: Medieval Warfare Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Chivalry: Medieval Warfare - none are hidden. Covers class veterancy, the full weapon-mastery unlock ladder, faction and level progression, and one-off combat feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Chivalry: Medieval Warfare has 49 Steam achievements and none are hidden. Just over half are weapon-category \"gather enough experience\" unlock pairs (one for the first unlock, one for unlocking every weapon in that category) across all eleven weapon types - crossbows, spears, one-handed sharp, polearms, light weapons, javelins, bows, bastard weapons, two-handed swords, two-handed axes, daggers, one-handed blunt, and one-handed axes. The rest cover becoming a Veteran with each of the four classes, account level milestones, faction loyalty, and a run of specific combat feats (decapitations, blocks, headshots, fire kills).",
                "Nothing is missable - every weapon-experience tier and kill counter is a permanent account stat that keeps climbing across every match. The long poles are Swordsmith (unlock every sword) and Sands of Time (80+ hours played), both of which need broad, sustained play across weapon categories rather than any single trick.",
                "Tip: rotate through all four classes (Vanguard, Knight, Man at Arms, Archer) and try weapons outside your usual pick - since almost every weapon-mastery achievement is tied to a specific category, sticking to one favorite weapon the whole time is the single biggest thing that slows down 100%."
            ]
        },
        {
            "heading": "Class Veterancy & Kill Milestones",
            "body": [
                "The class-progression block: killing 100 Men at Arms, and reaching Veteran status with the Vanguard, Knight, Man at Arms, and Archer classes.",
                "The achievements here: Vultures Chef (Kill 100 Men at Arms.); Vanguard Veterans Helmet (Become a Veteran Vanguard); Knight Veterans Helmet (Become a Veteran Knight); Man at Arms Veterans Helmet (Become a Veteran Man at Arms); Archer Veterans Helmet (Become a Veteran Archer)."
            ]
        },
        {
            "heading": "Weapon Mastery",
            "body": [
                "The full weapon-category unlock ladder, each with a first-unlock and an all-unlocked tier: crossbows, spears, one-handed sharp weapons, polearms, light weapons, javelins, bows, bastard weapons, two-handed swords, two-handed axes, daggers, one-handed blunt weapons, and one-handed axes.",
                "The achievements here: Crossbow Unlocked (Gather enough experience with crossbows); All Crossbows Unlocked (Gather enough experience with crossbows); Spear Unlocked (Gather enough experience with spearing weapons); All Spears Unlocked (Gather enough experience with spearing weapons); One handed sharp Unlocked (Gather enough experience with one handed sharp weapons); All One handed sharp Unlocked (Gather enough experience with one handed sharp weapons); Polearm Unlocked (Gather enough experience with polearm weapons); All Polearms Unlocked (Gather enough experience with polearm weapons); Light weapon Unlocked (Gather enough experience with light weapons); All Light weapon Unlocked (Gather enough experience with light weapons); Javelin Unlocked (Gather enough experience with javelin weapons); All Javelins Unlocked (Gather enough experience with javelin weapons); Bow Unlocked (Gather enough experience with bow weapons); All Bows Unlocked (Gather enough experience with bow weapons); Bastard weapon Unlocked (Gather enough experience with bastard weapons); All Bastard weapons Unlocked (Gather enough experience with bastard weapons); Two handed weapon Unlocked (Gather enough experience with two handed weapons); All Two handed weapon Unlocked (Gather enough experience with two handed sword weapons); Two handed Axe Unlocked (Gather enough experience with two handed axes weapons); All Two handed Axe Unlocked (Gather enough experience with two handed axes weapons); Dagger Unlocked (Gather enough experience with dagger weapons); All Daggers Unlocked (Gather enough experience with dagger weapons); One handed blunt weapon Unlocked (Gather enough experience with one handed blunt weapons); All One handed blunt weapons Unlocked (Gather enough experience with one handed blunt weapons); One handed Axe Unlocked (Gather enough experience with one handed axe weapons); All  One handed Axes Unlocked (Gather enough experience with one handed axe weapons)."
            ]
        },
        {
            "heading": "Swordsmith, Faction & Level Progression",
            "body": [
                "Unlocking every sword (Swordsmith), playing an hour each on Stoneshill, Hillside, Dark Forest, and Battlegrounds (Sightseeing), logging 80+ hours (Sands of Time), a fire-themed decapitation (Rotisserie Chef), reaching account levels 5, 10, and 20, and 20 hours with the Mason Order.",
                "The achievements here: Swordsmith (Unlock all swords); Sightseeing (Play 60 minutes each on Stoneshill, Hillside, Dark Forest and Battlegrounds); Sands of Time (Play Chivalry for more than 80 hours); Rotisserie Chef (Decapitate an opponent that is on fire.); Reach level 20 (Gather enough points to reach level 20); Reach level 10 (Gather enough points to reach level 10); Reach level 5 (Gather enough points to reach level 5); Mason Order supporter (Team up with the Mason Order for 20 hours.)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "10,000 Shortbow arrows (Let it rain), surviving 10 minutes as King on Stoneshill, 1000 successful blocks (I am a wall), a 2-opponent decapitation in one swing (Heads Together), 10 ranged headshots in a single game (Five Star Archer), 100 fist kills (Fists of Fury), putting out Hillside's fire beacon (Fire Nemesis), 20 Oil Pot kills (Fire Starter), 40 arrows shot into the heart (Cupid), and 20 hours with the Agatha Knights.",
                "The achievements here: Let it rain (Fire 10,000 arrows with the Shortbow); King of Kings (Survive 10 minutes as King in Stoneshill); I am a wall (Successfully block 1000 times); Heads Together (Decapitate 2 opponents with 1 swing); Five Star Archer (Get 10 Headshots with a ranged weapon in one game. ); Fists of Fury (Have 100 kills with the fists); Fire Nemesis (Put out the fire beacon in Hillside); Fire Starter (Have 20 kills with Oil pot); Cupid (Shoot 40 arrows into the heart); Agatha Knights supporter (Team up with Agatha Knights for 20 hours. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a spread of matches across all four classes to work toward Veteran status with each (Vanguard, Knight, Man at Arms, Archer) and pick up Vultures Chef (100 Men at Arms kills) along the way.",
                "2. Deliberately cycle through every weapon category - crossbows, spears, one-handed sharp, polearms, light weapons, javelins, bows, bastard weapons, two-handed swords, two-handed axes, daggers, one-handed blunt, one-handed axes - to unlock, then fully unlock, each one, and finish with Swordsmith once every sword is unlocked.",
                "3. Pick a faction (Agatha Knights or Mason Order) and put in 20 hours with them for the loyalty achievement; the other faction's equivalent needs a separate 20 hours.",
                "4. Push account level to 5, 10, and 20, and visit Stoneshill, Hillside, Dark Forest, and Battlegrounds for an hour each (Sightseeing).",
                "5. Pick off the specific combat feats as chances come up: decapitations (including a burning-opponent one and a 2-for-1 swing), 1000 successful blocks, 10 ranged headshots in one game, 100 fist kills, putting out Hillside's fire beacon, 20 Oil Pot kills, 40 arrows into the Cupid heart, 10,000 Shortbow arrows, and surviving 10 minutes as King on Stoneshill.",
                "Tip: I am a wall (1000 successful blocks) and Let it rain (10,000 Shortbow arrows) are both pure volume achievements with no skill ceiling - block liberally and default to the Shortbow in a few sessions and they take care of themselves over time."
            ]
        }
    ]
};
