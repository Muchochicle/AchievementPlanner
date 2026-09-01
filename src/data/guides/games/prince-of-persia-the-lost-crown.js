// The Lost Crown Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/prince-of-persia-the-lost-crown.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2751000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 19 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "prince-of-persia-the-lost-crown-achievement-guide",
    "category": "game",
    "gameSlug": "prince-of-persia-the-lost-crown",
    "icon": "🗡️",
    "title": "The Lost Crown Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in The Lost Crown (19 hidden). Covers every main-story boss, side-quest and exploration milestone, and the Mask of Darkness DLC's own boss and collectible achievements. Nineteen of the achievements are hidden and their unlock conditions are researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Prince of Persia: The Lost Crown has 40 Steam achievements and 19 are hidden. Eight are for defeating each of the base game's main bosses - Jahandar the King of Beasts, Kian the otherworldly Queen, Azhdah the banished God, Orod the Storm Master, Menolias the artful legend, Vahram the White Lion, King Darius, and the God Prince at the End of Time - plus completing the Lost Warriors side quest, eliminating the Jailer, and an optional fight against an alternate version of Sargon. The rest are collection and exploration achievements (amulets, upgrades, memory fragments, the Herbalist's camp, a ghost ship, the Moon Gatherer's quest), and five more come from the Mask of Darkness DLC, including its own two boss fights and three chapter-completion achievements through Radjen's Mind Palace.",
                "The catalog marks it difficulty 3. Metroidvania backtracking means very little here is truly missable - free roam after the main story lets you mop up collectibles and side content at your own pace.",
                "Tip: the three 'Remember' achievements in the Mask of Darkness DLC track progress through Radjen's Mind Palace's east, west, and northern-path areas - explore each fully before moving on rather than rushing to the DLC's final boss."
            ]
        },
        {
            "heading": "Main Story Bosses",
            "body": [
                "Defeating Jahandar, Kian, Azhdah, Menolias, Orod, Vahram, King Darius, and the God Prince, plus completing the Lost Warriors side quest, eliminating the Jailer in the Sacred Archives, and an optional fight against an alternate Sargon.",
                "The achievements here: The Maneater (Defeat Jahandar, the King of Beasts.); The Forest Trespasser (Defeat Kian, the otherworldly Queen.); Snake in the Sand (Defeat Azhdah, the banished God.); Fists & Arrows (Defeat Menolias, the artful legend.); The Storm Master (Defeat Orod, the Storm Master.); The White Lion (Defeat Vahram, the White Lion.); King of Kings (Defeat King Darius.); The End of Time (Defeat the God Prince at the End of Time.); A Warrior's End (Complete the Lost Warriors side quest.); Time Served (Eliminate the Jailer in the Sacred Archives.); Parallel Universe (Defeat the alternate version of Sargon in an optional encounter.)."
            ]
        },
        {
            "heading": "Upgrades & Exploration",
            "body": [
                "Using every Athra Surge, fully upgrading the necklace, sword and bow, collecting all amulets and Soma Tree petals, finding the Herbalist's camp, completing the prophecy fresco, speaking with every Wak-Wak head, finding the ghost ship, and completing the Moon Gatherer's quest.",
                "The achievements here: Warrior Within (Use every Athra Surge); Glory of Faravahar (Fully upgrade the necklace); Blessing of Shamshir (Fully upgrade sword and bow); Tools of a Prophet (Collect all amulets); Elixir of Gods (Acquire all Soma Tree petals); Cyra's Last Hope (Find the Herbalist's camp.); Written in the Sand (Complete the prophecy fresco); Tree of Life (Speak with every Wak-Wak head); Spectre of the Seas (Find the ghost ship.); The True Moon (Complete the Moon Gatherer's quest.)."
            ]
        },
        {
            "heading": "Combat & Side Quests",
            "body": [
                "Completing every side quest, eliminating an enemy with the Dimensional Claw, collecting ores, opportunity-attack eliminations, defeating a Lost Warrior, earning Time Crystals, and aerial and trap eliminations.",
                "The achievements here: Charitable Soul (Complete every side quest); Betrayal (Eliminate an enemy with the Dimensional Claw ); Natural Resources (Collect 5 ores); Shock Trooper (Eliminate 20 enemies with an opportunity attack); An Honorable End (Defeat a Lost Warrior); All the Time in the World (Earn 10,000 Time Crystals); Air Dancer (Eliminate 30 enemies in the air); Deadly Trap (Eliminate 5 enemies by throwing them into spikes)."
            ]
        },
        {
            "heading": "Mask of Darkness DLC",
            "body": [
                "Defeating the undead general and Radjen, clearing every area of Radjen's Mind Palace, collecting all memory fragments, Soma Tree flowers and amulets in the DLC, defeating every sentinel, a reflected Saw Bird kill, and defeating the undead master.",
                "The achievements here: The Dead Die Twice (Defeat the undead general in the Mask of Darkness DLC.); Remember Me (Complete the east side of Radjen's Mind Palace.); Remember You (Complete the west side of Radjen's Mind Palace.); Remember Us (Complete the third area of Radjen's Mind Palace after accessing the northern path.); Broken Mask (Defeat Radjen, the Mask of Darkness DLC's final boss.); Total Recall (Find all memory fragments); Health Is Wealth (Acquire all Soma Tree flowers in Mask of Darkness); Thoughtful Accessories (Collect all amulets in Mask of Darkness); Cut the Power (Defeat all sentinels ); Two Birds with One Saw (Defeat an enemy with a Saw Bird); Easy Come, Easy Go (Defeat the undead master)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the main story, defeating each boss and picking up amulets, upgrades and memory shards as you explore.",
                "2. Track down the Herbalist's camp, the ghost ship, and the Moon Gatherer's quest for their hidden exploration achievements.",
                "3. Complete every side quest, including the Lost Warriors quest and eliminating the Jailer in the Sacred Archives.",
                "4. Fight the optional alternate Sargon encounter once you're strong enough.",
                "5. Play the Mask of Darkness DLC, fully clearing Radjen's Mind Palace's east, west, and northern-path areas before the final boss.",
                "Tip: post-game free roam lets you return anywhere for missed amulets, petals, or memory fragments - there's no need to rush collectibles during your first pass through each area."
            ]
        }
    ]
};
