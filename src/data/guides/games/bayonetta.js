// Bayonetta Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bayonetta.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   460790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PlayStationTrophies,
//   XboxAchievements, and the games' wikis), noted in the Hidden
//   Achievements section. Every other achievement's description is Steam's
//   own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "bayonetta-achievement-guide",
    "category": "game",
    "gameSlug": "bayonetta",
    "icon": "🕸️",
    "title": "Bayonetta Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Bayonetta - 4 are hidden. Covers the story and boss fights, the Normal, Hard and Infinite Climax difficulty clears, the combat-technique challenges (Torture Attacks, Witch Time, Wicked Weaves, weapon masteries), the collectible and Alfheim-portal completion, and a handful of scripted set-piece achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Bayonetta has 50 Steam achievements, 4 of which are hidden - and all 4 hidden ones are just story-progress markers for finishing the last stretch of chapters on Normal and on Hard. The visible list breaks into three parts: story and difficulty completion (the prologue, the five main bosses, all chapters cleared on Normal, Hard and Infinite Climax), a run of combat-technique challenges (Torture Attacks, Witch Time streaks, Platinum Medals, Wicked Weaves via Dodge Offset, per-weapon masteries), and collectible/completion goals (all techniques, the Gold LP records, the Umbra Witch resting places, every Alfheim portal, Antonio's Notes) plus a few scripted set-piece feats.",
                "Nothing is missable - chapter select lets you replay any chapter on any unlocked difficulty, and medal, collectible and portal progress persists. The real work is the difficulty ladder: an all-chapters Hard clear and especially the all-chapters Infinite Climax clear (Legendary Dark Witch) demand strong command of dodging and Witch Time, since Infinite Climax removes Witch Time from normal dodges.",
                "Tip: chase the combat-technique achievements (Wicked Weave Master, the Moon of Mahaa-Kalaa counters, the per-weapon kills) on Normal difficulty replays of early chapters where enemies are forgiving - then focus your harder runs purely on surviving Hard and Infinite Climax rather than juggling technique goals at the same time."
            ]
        },
        {
            "heading": "Story & Difficulty",
            "body": [
                "The prologue, defeating each of the five main bosses (Fortitudo, Temperantia, Iustitia, Sapientia, Father Balder), completing all chapters on any difficulty, the Normal-difficulty chapter blocks and full Normal clear (Umbra Witch), the Hard-difficulty chapter blocks and full Hard clear (Umbra Elder), and the full Infinite Climax clear (Legendary Dark Witch).",
                "The achievements here: A Primer In The Magical Arts (Complete the Vestibule.); Fortitudo, Bringer Of Flame (Defeat Fortitudo on any difficulty.); Temperantia, Manipulator Of Wind (Defeat Temperantia on any difficulty.); Iustitia, Giver Of Life (Defeat Iustitia on any difficulty.); Sapientia, Controller Of Seas (Defeat Sapientia on any difficulty.); Master Of The Heavens (Defeat Father Balder on any difficulty.); Taste Of The Witching Hour (Complete all Chapters on any difficulty.); Chapters 1-4 (Normal) (Complete Chapters 1 through 4 on Normal difficulty.); Chapters 5-7 (Normal) (Complete Chapters 5 through 7 on Normal difficulty.); Chapters 8-11 (Normal) (Complete Chapters 8 through 11 on Normal difficulty.); Umbra Witch (Complete all Chapters on Normal difficulty.); New Testament: Ch. 1-4 (Hard) (Complete Chapters 1 through 4 on Hard difficulty.); New Testament: Ch. 5-7 (Hard) (Complete Chapters 5 through 7 on Hard difficulty.); New Testament: Ch. 8-11 (Hard) (Complete Chapters 8 through 11 on Hard difficulty.); Umbra Elder (Complete all Chapters on Hard difficulty.); Legendary Dark Witch (Complete all Chapters on ∞ Climax difficulty.)."
            ]
        },
        {
            "heading": "Combat Techniques",
            "body": [
                "Skill challenges: Torture Attacks (one, then 50), Witch Time (10 times, then 10 consecutively), 10 Platinum Medals, 20 Concoctions, a jump kill, the Moon of Mahaa-Kalaa avert/counter feats, taunting and defeating angered enemies, Wicked Weave attacks via Dodge Offset (one, then 20), and the Shuraba / Kulshedra / Odette weapon-mastery feats.",
                "The achievements here: I'm A Bit... I Mean Witch. (Execute a Torture Attack.); Feels Good, Doesn't It? (Execute 50 Torture Attacks.); You Want To Touch Me? (Engage Witch Time successfully 10 times.); Nice Try (Engage Witch Time successfully 10 times consecutively.); Platinum! (Earn 10 Platinum Medals. Must be earned in 10 different battles.); Double, Double, Toil And Trouble (Create 20 Concoctions.); Tread Not So Softly (Kill an enemy by jumping on top of them.); Nice And Relaxed (Avert 10 enemy attacks with the Moon of Mahaa-Kalaa equipped.); Touch And It Will Hurt (Counter 10 enemy attacks with the Moon of Mahaa-Kalaa equipped.); Touch And It Will REALLY Hurt (Counter three enemy attacks consecutively with the Moon of Mahaa-Kalaa equipped.); Come Here, Little Boy (Taunt and defeat five plus angered enemies while taking no damage. Gaze of Despair may be equipped.); Wicked Weaver (Execute a Wicked Weave attack while using Dodge Offset.); Wicked Weave Master (Execute 20 Wicked Weave attacks while using Dodge Offset.); The Deepest Cut (Kill 20 enemies using only Iai-Jutsu with Shuraba. (Iai-Jutsu performed by holding the Y button.)); Higher And Higher (While never setting foot on the ground, grab enemies 10 times using Kulshedra.); The Ice Witch (Freeze 20 enemies while wearing Odette.)."
            ]
        },
        {
            "heading": "Collectibles & Set-Pieces",
            "body": [
                "Purchasing three and then all techniques, obtaining three and then seven Angelic Hymn Gold LPs, discovering half and then all of the Umbra Witches' resting places, finding and completing the Alfheim portals (all found, half completed, all completed), collecting all of Antonio's Notes, and the scripted moments (the Chapter 9 tentacles, defending Cereza, the Chapter 14 Platinum Medals, the Chapter 2 streetcar dodge).",
                "The achievements here: Seeker Of Magic (Purchase three new techniques.); Commander Of Magic (Purchase all techniques.); Record Collector (Obtain three complete Angelic Hymn Gold LPs.); Record Fanatic (Obtain seven complete Angelic Hymn Gold LPs.); Treasure Collector (Discover half of all the Umbra Witches' final resting places.); Treasure Fanatic (Discover all of the Umbra Witches' final resting places.); The Path To The Heavens (Discover all Alfheim portals.); Angel May Cry (Complete half of all Alfheim portals.); Angel Slayer (Complete all Alfheim portals.); Truth In Its Purest Form (Collect all of Antonio's Notes.); Naughty Tentacles (Destroy all the tentacles that drop down together during in single sequence in Chapter 9.); A Mother's Love (Defend Cereza during the out of body experience, ensuring she takes no damage.); Fire The Afterburners (Earn Platinum Medals during Verse 1 and Verse 2 of Chapter 14.); Just In The Nick Of Time (Dodge the runaway streetcar during Chapter 2.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "All 4 hidden achievements are story-progress markers with no surprise to them: Chapters 12-13 (Normal) and Chapters 14-Epilogue (Normal) unlock as you finish the story on Normal, and their New Testament counterparts do the same on Hard (New Testament: Close The Book is the Hard-mode story completion).",
                "The hidden achievements: Chapters 12-13 (Normal) (Clear Chapters 12 and 13 on Normal difficulty.); Chapters 14-Epilogue (Normal) (Clear Chapter 14 through the Epilogue on Normal difficulty, finishing the story.); New Testament: Ch. 12-13 (Hard) (Clear Chapters 12 and 13 on Hard difficulty.); New Testament: Close The Book (Clear Chapter 14 through the Epilogue on Hard difficulty, finishing the story on Hard.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story on Normal difficulty start to finish - this unlocks all five boss achievements, the Normal chapter-block markers (including the two hidden ones), Umbra Witch, and Taste Of The Witching Hour.",
                "2. Replay early chapters on Normal to knock out the combat-technique achievements: Torture Attacks, Witch Time streaks, Platinum Medals, Wicked Weaves via Dodge Offset, and the Shuraba, Kulshedra and Odette weapon feats.",
                "3. Sweep for collectibles and Alfheim portals - buy all techniques, collect the seven Gold LPs, find all resting places and Antonio's Notes, and complete every Alfheim portal.",
                "4. Do the scripted set-piece achievements (Chapter 9 tentacles, defending Cereza, Chapter 14 Platinums, Chapter 2 streetcar) on targeted chapter replays.",
                "5. Clear all chapters on Hard (Umbra Elder, plus the two hidden New Testament markers), then finally on Infinite Climax for Legendary Dark Witch.",
                "Tip: on Infinite Climax, dodging no longer triggers Witch Time, so lean on the Moon of Mahaa-Kalaa's parry (which still does) and on Bat Within timing - practising those on a Hard replay first makes the Legendary Dark Witch run far less brutal."
            ]
        }
    ]
};
