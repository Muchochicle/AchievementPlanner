// Dust: An Elysian Tail Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dust-an-elysian-tail.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   236090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dust-an-elysian-tail-achievement-guide",
    "category": "game",
    "gameSlug": "dust-an-elysian-tail",
    "icon": "⚔",
    "title": "Dust: An Elysian Tail Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Dust: An Elysian Tail - none are hidden. None of the achievements are hidden. Covers the four story bosses, the sidequest tiers, the combo and kill milestones, freeing all twelve caged friends, the four-star Challenge Arena ratings, and a set of one-off feats and story choices.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dust: An Elysian Tail has 30 Steam achievements and none are hidden. The story track is defeating Fuse, Lady Tethys, Baron Kane and General Gaius. Around it: completing 5 / 10 / 20 sidequests, a 200-hit and a 1,000-hit combo, 500 kills, freeing a caged friend (and all twelve for 'Baker's Dozen'), a four-star rating in one and then every Challenge Arena, a 6-enemy bomb kill, a low-health parry, a slide kill, the mutually exclusive 'Paragon' / 'Renegade' laundry choice, completing all of Fale's quests, meeting Haley, fulfilling Bopo's wish for snow, destroying every enemy cannon, and completing the game on Tough or Hardcore.",
                "The catalog marks it difficulty 3. Most of it comes from a thorough playthrough; the real targets are 'The Stuff of Legends' (four stars in every Challenge Arena) and 'Above and Beyond the Call' (Tough or Hardcore clear). The 1,000-hit combo is easy in a target-rich fight with the Dust Storm ability.",
                "Tip: pick either 'Paragon' or 'Renegade' at Gianni's laundry, let the achievement pop, then reload your save to get the other - they are mutually exclusive on a single save."
            ]
        },
        {
            "heading": "Story & Sidequests",
            "body": [
                "Defeating Fuse, Lady Tethys, Baron Kane and General Gaius, and completing 5, 10 and 20 sidequests.",
                "The achievements here: Defused (Defeat Fuse); Waters of Life (Defeat Lady Tethys); High Spirits (Defeat Baron Kane); ...And the Dust Settles (Defeat General Gaius); Friend of Falana (Complete 5 Sidequests); Hero of Falana (Complete 10 Sidequests); Savior of Falana (Complete 20 Sidequests)."
            ]
        },
        {
            "heading": "Combat & Collectibles",
            "body": [
                "A 200-hit and a 1,000-hit combo, 500 kills, unlocking a treasure chest, freeing a caged friend and then all twelve, using the Dust Storm on Fidget's projectiles, picking up an ability orb, and levelling up by assigning skill gems.",
                "The achievements here: A Decent Start... (Successfully complete a 200+ hit combo); That's More Like It (Successfully complete a 1000+ hit combo); Bringer of Death (Kill 500 Enemies); Push and Turn (Unlock a Treasure Chest); Wait, aren't you...? (Unlock a Cage and Rescue a Friend); Baker's Dozen (Hang out with Twelve Friends in the Sanctuary); Distant Thunder (Use the DUST STORM on Fidget's Projectiles); Well on your Way (Pick Up an Ability Orb); With Great Power... (Level Up by Assigning Skill Gems)."
            ]
        },
        {
            "heading": "Challenges & Choices",
            "body": [
                "A four-star Challenge Arena rating (one, then all), a 6-enemy bomb kill, the mutually exclusive Paragon / Renegade laundry choice, a low-health parry, crafting from a blueprint, bugging Matti, all of Fale's quests, a Tough or Hardcore clear, a slide kill, Bopo's snow wish, meeting Haley, and destroying every enemy cannon.",
                "The achievements here: An Impressive Display (Earn a Four-Star Rating in any Challenge Arena); The Stuff of Legends (Earn a Four-Star Rating in EVERY Challenge Arena); Blue Bomber (Simultaneously Kill 6 Enemies with a Single Bomb); Paragon (Opt out of putting poison ivy into Gianni's laundry); Renegade (Reign chaos by putting poison ivy into Gianni's laundry); Cutting It Close (Successfully Parry with less than 10% health remaining); Tinkerer (Craft an item from a blueprint); Bad Therapist (Bug Matti); Opposite of Fail (Complete all Fale Quests); Above and Beyond the Call (Complete the Game on Tough or Hardcore setting); Sad Way to Go (Kill an enemy with the slide attack); One Last Wish (Fulfill Bopo’s wish for snow); The Blacksmith of Archers' Pass (Meet Haley); Silence Those Guns (Destroy every enemy Cannon)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, defeating all four bosses and doing sidequests as you go.",
                "2. Free every caged friend and pick up the combat one-offs (big combos, 500 kills, bomb kill, slide kill, low-health parry).",
                "3. Save before Gianni's laundry, get Paragon, reload, get Renegade.",
                "4. Four-star every Challenge Arena for 'The Stuff of Legends'.",
                "5. Do a Tough or Hardcore run for 'Above and Beyond the Call'.",
                "Tip: the 1,000-hit combo ('That's More Like It') is easiest against a dense enemy group - use the Dust Storm to keep the counter alive while you reposition, and don't get greedy with big single hits that end the chain."
            ]
        }
    ]
};
