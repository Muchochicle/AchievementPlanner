// Dungeons of Hinterberg Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dungeons-of-hinterberg.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1983260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dungeons-of-hinterberg-achievement-guide",
    "category": "game",
    "gameSlug": "dungeons-of-hinterberg",
    "icon": "⛰",
    "title": "Dungeons of Hinterberg Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Dungeons of Hinterberg (5 hidden). Covers clearing dungeons, collectibles, gear and combat progression, and the Hinterberg townsfolk's social and vacation-life systems. Five of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dungeons of Hinterberg has 50 Steam achievements and 5 are hidden. About a third are dungeon-clearing milestones (the Beginner Dungeon, then 2, 5, 10, 20 and every dungeon) and Commemorative Coin collection tiers, plus combat and gear progression - Attack Conduits, the Combo Counter, Charms, sword enchanting, armor upgrades, and stat thresholds. The rest are Hinterberg's social/vacation-life systems - befriending townsfolk, gifts, evenings alone or at the Grand Hotel, feeding a cow, selling trash, Scenic Spots, outfits and selfies, and four hidden story achievements plus a hidden waterfall-chest secret.",
                "The catalog marks it difficulty 3. Nothing is missable, but the hidden 'Something Rotten' and 'Hinterberg Hero' are late-game story beats (a secret dungeon and stopping Mayor Wagner) that take real progress to reach.",
                "Tip: explore behind waterfalls and other odd terrain features as you wander Hinterberg's regions - the hidden 'Water you looking for?' locked chest behind a waterfall near the Jelly Tunnels dungeon in the Lake area is a good example of what to look for."
            ]
        },
        {
            "heading": "Dungeons & Story Secrets",
            "body": [
                "Completing the Beginner Dungeon, then 2, 5, 10, 20 and every dungeon, becoming 'Buddies' with someone, and the four hidden story achievements - the secret dungeon, uncovering Mayor Wagner's plan, surviving the Monster Rampage, and stopping Mayor Wagner.",
                "The achievements here: Still Shaking (Complete the Beginner Dungeon.); Double Trouble (Complete 2 dungeons.); Beginner Slayer (Complete 5 dungeons.); Intermediate Slayer (Complete 10 dungeons.); Renowned Slayer (Complete 20 dungeons.); Completionist (Complete every dungeon.); Buddies (Become \"Buddies\" with someone.); Something Rotten (Complete the game's secret dungeon.); Detective (Uncover Mayor Wagner's plan.); Town Survivor (Make it through the Monster Rampage.); Hinterberg Hero (Stop Mayor Wagner.)."
            ]
        },
        {
            "heading": "Coins, Gear & Combat",
            "body": [
                "Commemorative Coin tiers up to finding all of them, getting acquainted with a dog, unlocking the third Attack Conduit slot, the Combo Counter, selling 300 pieces of trash, evenings alone, a liked gift, shrinking a Charm to one slot, enchanting three swords, late nights, upgrading every armor type, feeding a cow, the hidden waterfall chest, and a fully packed Charm stack.",
                "The achievements here: Shiny! (Find a Commemorative Coin.); Sparkly! (Find 5 Commemorative Coins.); Shimmery! (Find 10 Commemorative Coins.); Dazzling! (Find 20 Commemorative Coins.); Collector (Find all Commemorative Coins.); Furry Friend (Get acquainted with a dog.); Unlocking Potential (Unlock the third Attack Conduit slot.); Dance of Death (Unlock the Combo Counter.); Environmentalist (Sell 300 pieces of trash.); Introvert (Spend 3 evenings alone.); Generous Spirit (Give someone a gift they really like.); Efficiency (Shrink a Charm down to one slot.); Enchanting (Enchant three swords.); Night Owl (Stay up late three times.); Tough and Buff (Upgrade one piece of every kind of armor.); Animal Lover (Feed a cow.); Water you looking for? (In the Doberkogel/Lake area, walk through the waterfall directly behind the Jelly Tunnels dungeon entrance to find a locked chest - you don't need to open it, just find it.); Charmed (Completely fill your charm stack, with no gaps or empty spaces.)."
            ]
        },
        {
            "heading": "Social Life & Endgame Mastery",
            "body": [
                "An evening at the Grand Hotel, reaching Friends level with three people, saving Hannah's Shop, opening every locked chest in Hinterwald, finishing a dungeon while tired, meeting everyone in Alex's notes, Scenic Spot afternoons, using 7 then 12 Attack Conduits, Amusement and Relaxation thresholds, completing a relationship, slaying 100 monsters, the Monster Club quest, equipping 15 Charms, outfits and selfies, a 300 Physical Attack stat, 1,000,000 Hinterbucks, and full Pro Slayer armor.",
                "The achievements here: Socialite (Spend an evening at the Grand Hotel.); Friendly Overtures (Reach \"Friends\" level with three people.); Altruist (Save Hannah's Shop.); Grove Trove (Open all locked chests in Hinterwald.); Running on Fumes (Finish a dungeon while tired.); Social Butterfly (Meet everyone listed in Alex's notes.); Just Chilling (Spend the afternoon at three different Scenic Spots.); Virtuoso (Use 7 different Attack Conduits.); We Are Amused (Reach 200 Amusement.); Relaxpert (Reach 200 Relaxation.); Heart to Heart (Complete a relationship with one person.); Slayer (Slay 100 monsters.); Honorary Monster (Complete the Monster Club quest.); Utility Belt (Equip 15 Charms at once.); Top Model (Take a selfie in an Outfit.); Fashionista (Own 5 Outfits.); Style Icon (Own 10 Outfits.); Conduit Collector (Use 12 different Attack Conduits.); Super Strength (Reach 300 Physical Attack.); All That Glitters (Have 1,000,000 Hinterbucks.); Dressed like a Pro (Equip all Pro Slayer armor parts.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear dungeons as you unlock them, working up from the Beginner Dungeon to every dungeon in Hinterberg.",
                "2. Build relationships with the townsfolk, give gifts, and spend evenings both alone and at the Grand Hotel.",
                "3. Collect Commemorative Coins, upgrade your Charms, Attack Conduits, swords and armor, and grind monster kills and combat stats.",
                "4. Explore off the beaten path - open every locked chest in Hinterwald, check behind waterfalls, and visit Scenic Spots.",
                "5. Follow the main story toward its late-game beats - the secret dungeon, uncovering Mayor Wagner's plan, surviving the Monster Rampage, and stopping Wagner for good.",
                "Tip: 'Water you looking for?' just wants you to find a hidden waterfall chest, not open it - keep that in mind so you don't waste time hunting for a key."
            ]
        }
    ]
};
