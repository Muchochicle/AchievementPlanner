// Ghost of Tsushima Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ghost-of-tsushima-directors-cut.json), whose 77 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2215430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 31 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ghost-of-tsushima-directors-cut-achievement-guide",
    "category": "game",
    "gameSlug": "ghost-of-tsushima-directors-cut",
    "icon": "🗾",
    "title": "Ghost of Tsushima Achievement Guide",
    "summary": "A practical guide to all 77 Steam achievements in Ghost of Tsushima (31 hidden). Covers Jin's story across all three acts, every Tale of Tsushima, the combat and exploration collectibles, the Iki Island expansion, and the co-op Legends mode. Thirty-one of the achievements are hidden - mostly act and tale completions plus Iki Island beats - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ghost of Tsushima Director's Cut has 77 Steam achievements and 31 are hidden. Twelve are story markers - the prologue katana, one per major tale through each of the three acts, and finishing 'The Tale of Lord Shimura' - and four more (The Warrior Monk, The Vengeful Warrior, The Unbending Archer, The Headstrong Thief) unlock while completing all 61 Tales of Tsushima. The rest are combat and exploration secrets (shooting a fleeing enemy, a ledge kill, bowing at hidden altars, a Pillar of Honor, the Sly Cooper thief outfit, the flute song at Taka's grave) and seven Iki Island expansion beats (the Eagle's medicine, all Iki Mythic Tales, the five Memories of Your Father, the Saruiwa monkey statues, the archery challenges, the animal sanctuaries, the Crimson Dye Merchant).",
                "The catalog marks it difficulty 3. Nothing is permanently missable - the island stays fully open and free roam continues after the story - but full completion is long: all 61 tales, every liberation objective across three regions, every collectible category, all of Iki Island, and the separate co-op Legends mode with its raid, Survival and Rivals achievements.",
                "Tip: liberate regions and clear tales as you pass through each area rather than saving cleanup for the end - the 'Master Liberator' and per-region liberation achievements, the Mythic Tales, and most collectibles all fall into place naturally if you fully clear each region before moving the story on."
            ]
        },
        {
            "heading": "Story: Jin's Journey",
            "body": [
                "Recovering the Sakai katana in the prologue, the act-defining tales through Acts 1, 2 and 3, finishing the story, and the four companion tale-line achievements (Norio, Lady Masako, Sensei Ishikawa, Yuna) that unlock across all 61 Tales of Tsushima.",
                "The achievements here: Living Legend (Obtain all base game achievements.); Gathering Storm (Recover the katana of Clan Sakai (in the prologue, after choosing your horse).); Point of No Return (Complete the Act 1 tale 'The Warrior's Code'.); Company of Wolves (Complete the Act 1 tale 'The Tale of Ryuzo'.); Stoking the Flame (Complete the Act 1 tale 'The Broken Blacksmith'.); Family Reunion (Complete the Act 1 tale 'Shadow of the Samurai'.); Leader of the People (Complete the Act 2 tale 'The Ghost of Yarikawa'.); Birthright (Complete the Act 2 tale 'Ghosts from the Past'.); Dying Embers (Complete the Act 2 tale 'A Reckoning in Blood'.); The Ghost (Complete the Act 2 tale 'From the Darkness'.); The Exiled Alliance (Complete the Act 3 tale 'Wolves at the Gates'.); Sovereign End (Complete the Act 3 tale 'Eternal Blue Sky'.); Mono No Aware (Finish the story (complete 'The Tale of Lord Shimura').); The Warrior Monk (Unlocks while completing all Tales of Tsushima (Norio's tale line).); The Vengeful Warrior (Unlocks while completing all Tales of Tsushima (Lady Masako's tale line).); The Unbending Archer (Unlocks while completing all Tales of Tsushima (Sensei Ishikawa's tale line).); The Headstrong Thief (Unlocks while completing all Tales of Tsushima (Yuna's tale line).)."
            ]
        },
        {
            "heading": "Combat, Exploration & Collectibles",
            "body": [
                "Perfect-parry counters, standoffs, staggers, duels, Ghost Stance and Ghost Weapon kills, building your Legend, the four combat stances, upgrading your sword, charms, gifts, vanity gear, lighthouses, Shinto and Inari shrines, hidden altars, Pillars of Honor, dye merchants, the Legendary Thief outfit, the flute song at Taka's grave, records, artifacts, hot springs, haiku, bamboo strikes, and liberating every region of Tsushima.",
                "The achievements here: Teller of Tales (Complete all of the Mythic Tales.); Helping Sword Hand (Complete all Tales of Tsushima.); Flash of Steel (Defeat 20 enemies with a counterattack after a Perfect Parry.); Witness Protection (Shoot a terrified, fleeing enemy with an arrow.); All in the Wrist (Defeat the maximum amount of enemies within a single Standoff.); Open for Business (Successfully Stagger enemies 50 times.); There Can Be Only One (Successfully complete every duel.); Have a Nice Fall (Kill an enemy by knocking them off a ledge with a Shoulder Charge or Typhoon Kick.); Haunting Precision (Kill 20 enemies with Ghost Stance strikes.); The Ghost of Legend (Build your Legend to earn the title Ghost of Tsushima.); Quick Study (Learn the Stone, Water, Wind, and Moon combat stances.); Every Trick in the Book (Acquire all the throwable Ghost Weapon techniques.); The Perfect Storm (Fully upgrade your sword.); A Charming Man (Equip a charm in all 6 slots.); Gifted (Collect 10 gifts.); Slay (Acquire 30 pieces of Vanity Gear.); Light the Way (Rekindle all the lighthouses of Tsushima.); Den of Thieves (Unlocks in Act 2 on starting the tale 'A Message in Fire'.); Favor of the Kami (Find and honor all of the Shinto Shrines on Tsushima.); Honor the Unseen (Bow at 10 hidden altars across Tsushima.); Lost and Found (Find a Pillar of Honor and collect its sword kit.); Monochrome Masters (Buy an item from the Black or White Dye Merchant.); Cooper Clan Cosplayer (Acquire the Legendary Thief outfit (a Sly Cooper reference).); Dirge of the Fallen Forge (Play 'Lament of the Storm' on the flute at Taka's grave (after collecting five singing crickets).); A Moment in Time (Personalize a scene in Photo Mode.); Avid Reader (Collect 20 Records.); Know Your Enemy (Collect 20 Mongol artifacts.); Body, Mind, and Spirit (Complete all Hot Springs, Haiku, Inari Shrines, and Bamboo Strikes.); Hero of the People (Liberate 12 occupied areas in Izuhara.); A Fight For The Isle…. (Liberate all occupied areas in Izuhara.); Good Riddance (Liberate 8 occupied areas in Toyotama.); Securing Sanctuary…. (Liberate all occupied areas in Toyotama.); Mass Eviction (Liberate 7 occupied areas in Kamiagata.); A New Safe Haven (Liberate all occupied areas in Kamiagata.); Master Liberator (Liberate the entirety of Tsushima Island.)."
            ]
        },
        {
            "heading": "Iki Island Expansion",
            "body": [
                "The three Raid chapters and Legends milestones, then the Iki Island story and side content: surviving the Eagle's medicine, all Iki Mythic Tales and unwritten tales, the five Memories of Your Father, the Saruiwa monkey statues, the archery challenges, the animal sanctuaries, the Crimson Dye Merchant, the Hidden Cove bokken duels, and liberating Iki.",
                "The achievements here: Transcendence (Complete all 3 Raid chapters.); Ultimate Warrior (Reach rank 20 with all roles.); Ultimate Truth (Complete the final wave in a gold Survival.); Promising Start (Complete a Legends Mode story.); True Understanding (Complete all Legends Mode stories on a single difficulty.); Self-Actualized (Reach rank 20 in any role.); Grand Opening (Purchase something from Baku the Voiceless in New Game+.); A Legend for All Time (Complete Jin's Journey in New Game+.); Out of the Past ((Iki Island) Survive the Eagle's medicine and bid farewell to a new friend.); Friend to All Raiders (Complete all Tales of Iki.); The Benefit of All Beings (Build your Legend on Iki Island to earn the title Legacy Redeemer.); The Butcher Redeemed (Liberate Iki Island by defeating the Eagle and driving the invaders from Mongol territory.); Treasures of the Past ((Iki Island) Complete all Mythic Tales on Iki Island.); Elegy for Kazumasa ((Iki Island) Experience all five Memories of Your Father.); Common Courtesy (Discover and complete all unwritten tales on Iki Island.); Monkey See ((Iki Island) Interact with the three hidden Monkey Statues at Saruiwa.); Pride of Ishikawa ((Iki Island) Achieve bronze or higher on all Archery Challenges.); Chiyoko's Song ((Iki Island) Complete all Animal Sanctuaries.); A Few Splinters (Complete all bokken duels at the Hidden Cove Tournament.); Well-Rounded Warrior (Complete all Haiku, Onsen, Shinto Shrines, and Bamboo Strikes on Iki Island.)."
            ]
        },
        {
            "heading": "Legends Co-op Mode",
            "body": [
                "Binding gear to a class, winning a Legends Rivals match, purifying Cursed gear, summoning five Shades in a single Rivals match, and the remaining Rivals and gear achievements.",
                "The achievements here: Blood on Your Hands ((Iki Island) Buy an item from the Crimson Dye Merchant.); Honor Bound (Bind a piece of gear to a class.); Champion of the Kami (Win a Legends Rivals match.); Cursed No More (Purify a Cursed piece of gear.); A Painful Blockage (Summon five Shades in a single Rivals match.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story through all three acts, letting the act and tale achievements unlock as you go.",
                "2. Fully clear each region before advancing the story - liberate every objective, complete the Tales of Tsushima, and pick up shrines, altars, Pillars of Honor and collectibles.",
                "3. Do the combat feats (perfect-parry counters, standoffs, duels, Ghost Stance and Ghost Weapon kills) naturally over the campaign.",
                "4. Play the Iki Island expansion to completion - its story, Mythic Tales, Memories of Your Father, monkey statues, archery challenges, animal sanctuaries and the Crimson Dye Merchant.",
                "5. Play the co-op Legends mode for the Raid, Survival, Rivals and gear achievements.",
                "Tip: 'Dirge of the Fallen Forge' needs five singing crickets collected first, then the 'Lament of the Storm' flute song played at Taka's grave - grab crickets whenever you hear them chirping near lanterns rather than hunting them at the end."
            ]
        }
    ]
};
