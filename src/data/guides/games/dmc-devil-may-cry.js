// DmC: Devil May Cry Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dmc-devil-may-cry.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   220440 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dmc-devil-may-cry-achievement-guide",
    "category": "game",
    "gameSlug": "dmc-devil-may-cry",
    "icon": "😈",
    "title": "DmC: Devil May Cry Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in DmC: Devil May Cry - none are hidden. Covers Dante's 20-mission campaign and its weapon and ability unlocks, the combat and Style challenges, the upgrade and collectible completion, every difficulty clear including Dante Must Die and the Nephilim SSS run, the Secret Missions, and the Vergil's Downfall DLC campaign.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DmC: Devil May Cry has 58 Steam achievements and none of them are hidden. The base game's 50 track Dante's campaign: unlocking each weapon and ability as the story hands it to you, beating the bosses, and then a large completion layer - every difficulty cleared (Son of Sparda, Dante Must Die, Heaven or Hell, Hell and Hell, plus a Nephilim run with an SSS rank on every mission), all Keys and Secret Doors found, all Lost Souls freed, all 21 Secret Missions done, and various combat and Style-rank milestones. The remaining 8 belong to the Vergil's Downfall DLC campaign.",
                "Nothing is missable because mission select lets you replay any mission on any unlocked difficulty with your upgrades intact, and 100% completion rank is tracked per mission across all your attempts. The length comes from the difficulty ladder: Dante Must Die and the all-missions-SSS Nephilim run each demand real mastery of the combat system, and there is no way to shortcut them.",
                "Tip: buy the health and Devil Trigger upgrades and all of Dante's combat moves as early as you can afford them - a fully upgraded Dante makes the no-damage, SSS-rank and Dante Must Die achievements dramatically more achievable, and Red Orbs are plentiful enough that the two spending achievements (10,000 and 50,000) unlock naturally along the way."
            ]
        },
        {
            "heading": "Story, Weapons & Bosses",
            "body": [
                "The campaign's spine: your first upgrade, escaping your pursuer, acquiring each Angel and Demon weapon (Arbiter, Osiris, Eryx, Aquila, Revenant, Kablooey) and ability (Angel Boost, Devil Trigger), the boss encounters (the Tyrant, Mundus' spawn, Mundus himself), helping Phineas and Vergil, and completing the final mission.",
                "The achievements here: Time to go to work guys! (Purchase your first upgrade); Come on Puppy. Let's go! (Defeat your pursuer); It's got to stay in the family (Acquire Arbiter); Thing drives me crazy (Acquire Osiris); Only kind of gift worth giving (Acquire the Angel Boost ability); Flock off, feather-face! (Survive the encounter with the Tyrant); This baby sure can pack a punch (Acquire Eryx); He's a demon too (Help Phineas retrieve his eye); You are not a Human, are you? (Acquire the Devil Trigger ability); No talking! (Acquire Aquila); More than just a few sparks (Acquire Revenant); Whatever, Lady (Defeat Mundus' spawn); You're not going to shoot me (Acquire Kablooey); It's time to finish this!  (Help Vergil open the Vault); Cleaning up his Dad's mess (Defeat Mundus); The end? Don't bet on it (Complete the final mission on Human, Devil Hunter or Nephilim difficulty)."
            ]
        },
        {
            "heading": "Combat & Style Challenges",
            "body": [
                "Skill feats: a no-damage mission, the Furnace of Souls and Sky Bridge challenges, a sub-2-minute mission, weapon-type-only kill counts (firearms, Demon, Angel), slaying 100 / 1,000 / 5,000 Demons, a SSS Style Rank, 1,500 Style Bonuses, and the two Red Orb spending milestones.",
                "The achievements here: Looks like it's your lucky day (Complete a level without taking any damage); Every hero has a weakness (Complete Furnace of Souls without taking damage from the furnace); It's only the rain (Kill 10 enemies by pushing them into the Hurricane ride on Mission 1); A man with guts and honor (Reach the end of the descent on Mission 6 having killed all of the enemies); Now my coat's all charred (Navigate the Sky Bridge on Mission 16 without hitting the lasers); Where does the time go? (Complete a level with 2 minutes or less on the clock); For Tony Redgrave (Kill 50 enemies using nothing but firearms); In the name of my father (Kill 100 enemies using nothing but Demon weapons); You'll never have her fire (Kill 100 enemies using nothing but Angel weapons); Impressive (Slay 100 Demons); Bring it on! (Slay 1,000 Demons); Looks like we have a winner (Slay 5,000 Demons); Sensational! (Gain a SSS Style Rank during combat); It's showtime. Come on! (Earn 1,500 Style Bonuses); This is my kind of rain (Spend 10,000 Red Orbs); Absolutely crazy about it (Spend 50,000 Red Orbs)."
            ]
        },
        {
            "heading": "Upgrades, Collectibles & Completion",
            "body": [
                "Maxing Dante's health and Devil Trigger, buying all his combat upgrades, finding every Key and opening every Secret Door, freeing half and then all of the Lost Souls, a 100% completion rank on all missions, and a single SSS-rank mission clear.",
                "The achievements here: Let's rock, baby! (Upgrade Dante's health to maximum); You can't handle it (Upgrade Dante's Devil Trigger to maximum); Power... Give me more power! (Purchase all of Dante's combat upgrades); Dude, the show's over! (Find all of the Keys); Let's welcome chaos! (Open all of the Secret Doors); And you are set free (Free half of the Lost Souls); Fill your dark soul with light (Free all of the Lost Souls); Keeps getting better and better (Gain a 100% completion rank on all missions (difficulty doesn't matter)); Stylish! (Complete a mission with a SSS rank)."
            ]
        },
        {
            "heading": "Difficulty Clears & Secret Missions",
            "body": [
                "Completing all missions on Son of Sparda, Dante Must Die, Heaven or Hell and Hell and Hell difficulty, an all-missions SSS-rank run on Nephilim, completing 10 and then all 21 Secret Missions, and defeating a Wisp and an Imprisoner.",
                "The achievements here: Too easy! (Complete all missions on the Son of Sparda difficulty); Devils never cry (Complete all missions on the Dante Must Die difficulty); This is what I live for! (Complete all missions on the Heaven or Hell difficulty); And welcome to Hell! (Complete all missions on the Hell and Hell difficulty); Jackpot! (Complete all missions on the Nephilim difficulty with a SSS rank); This party's just getting crazy! (Complete 10 Secret Missions); One hell of a party! (Complete all of the Secret Missions); We have an uninvited guest (Defeat a Wisp); You don't belong here (Defeat an Imprisoner)."
            ]
        },
        {
            "heading": "Vergil's Downfall DLC",
            "body": [
                "The Vergil's Downfall DLC campaign: completing it, acquiring all of Vergil's health, Devil Trigger and combat upgrades, a 100% completion rank on its missions, an all-missions SSS Nephilim run, and its Son of Sparda, Vergil Must Die, Heaven or Hell and Hell and Hell clears.",
                "The achievements here: Our souls are at odds brother (Complete Vergil's downfall); I've come to retrieve my power (Acquire all of Vergil's health, Devil trigger and combat upgrades); Might controls everything (Gain a 100% completion rank on all missions in Vergil's downfall (difficulty doesn't matter)); I'll try it your way for once (Complete all missions in Vergil's downfall on the Nephilim difficulty with a SSS rank); I need more power! (Complete Vergil's downfall on Son of Sparda difficulty); This is the power of Sparda! (Complete Vergil's downfall on Vergil Must Die difficulty); Now I'm a little motivated! (Complete Vergil's downfall on Heaven or Hell difficulty); You're not worthy as my opponent (Complete Vergil's downfall on Hell and Hell difficulty)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Devil Hunter (Nephilim) difficulty, acquiring each weapon and ability as the story provides it and beating all the bosses for The end? Don't bet on it.",
                "2. Replay missions to reach 100% completion rank on each one, freeing all Lost Souls, finding all Keys and Secret Doors, and completing all 21 Secret Missions along the way.",
                "3. Buy all of Dante's upgrades and max his health and Devil Trigger, then do the combat-skill achievements (no-damage mission, sub-2-minute mission, weapon-type kill counts, SSS Style Rank, 1,500 Style Bonuses).",
                "4. Work up the difficulty ladder: Son of Sparda, then Dante Must Die, then the quick Heaven or Hell and Hell and Hell runs, and finally an all-missions SSS-rank pass on Nephilim.",
                "5. Play the Vergil's Downfall DLC and repeat the same pattern - full upgrades, 100% completion, and its own difficulty clears including the Nephilim SSS run.",
                "Tip: Hell and Hell (one hit kills Dante, but enemies die in one hit too) and Heaven or Hell (everything dies in one hit) are the fastest difficulty clears - do them right after Son of Sparda while your reflexes are sharp, and save Dante Must Die for when you are most comfortable with parries and crowd control."
            ]
        }
    ]
};
