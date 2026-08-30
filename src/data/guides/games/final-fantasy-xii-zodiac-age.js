// FINAL FANTASY XII: The Zodiac Age Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/final-fantasy-xii-zodiac-age.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   595520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "final-fantasy-xii-zodiac-age-achievement-guide",
    "category": "game",
    "gameSlug": "final-fantasy-xii-zodiac-age",
    "icon": "🦂",
    "title": "FINAL FANTASY XII: The Zodiac Age Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in FINAL FANTASY XII: The Zodiac Age - none are hidden. Covers the grind, mastery and completion achievements, and the elite-mark, Esper and story achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FINAL FANTASY XII: The Zodiac Age has 41 Steam achievements and none of them are hidden. About half are grind and completion counters - use Attack 300 times, cast 200 Magicks, 50,000 steps, 100,000 gil acquired, 500,000 Clan Points, raise your party's average level above 50, earn 48,000 License Points, complete the Bestiary, fully explore every map, learn every Magick and Technick. The rest are the optional superbosses (Yiazmat, the Hell Wyrm, Ultima, Zodiark and the eight Rare Game / Elite Mark bosses), obtaining every Esper, the main story beats, and completing Trial Mode's 50th and 100th stages. Champion of Ivalice is the all-achievements catch-all.",
                "Nothing is missable - the open world and hunts stay available after the story, maps and the Bestiary fill in over time, and there are no one-shot achievements. The completion's long poles are Yiazmat (a multi-hour HP sponge), the full Bestiary and map exploration, and Trial Mode stage 100.",
                "Tip: play the story doing hunts as you unlock them, then use the postgame to grind License Points and the count achievements while working through the superbosses and Trial Mode - the Gambit system means most of the grinding can be semi-automated."
            ]
        },
        {
            "heading": "Grinds, Mastery & Completion",
            "body": [
                "Champion of Ivalice (all achievements), 300 Attacks, 200 Magicks, 100 Technicks, 50 Steals, 500 foes defeated, a 50-chain, 50,000 steps, 100,000 gil acquired, 500,000 Clan Points, 1,000,000 gil spent, 1,000 loot sold, party average level above 50, 48,000 License Points, the Bestiary, every Magick, every Technick, a Morbid Urn, every map fully explored, and every Concurrence.",
                "The achievements here: Champion of Ivalice (Collected all other achievements.); Assault Striker (Used Attack 300 times.); Spellslinger (Cast Magicks 200 times.); Premier Prestidigitator (Used Technicks 100 times.); Master Thief (Successfully stole 50 times.); Blood Dancer (Defeated 500 foes.); The Unrelenting (Completed a 50-chain in battle.); Wayfarer (Took 50,000 steps.); Plunderer (Acquired 100,000 gil.); Record Breaker (Obtained 500,000 Clan Points.); Spendthrift (Spent 1,000,000 gil.); Privateer (Sold 1,000 pieces of loot.); Exemplar (Raised your party's average level above 50.); Conqueror (Earned 48,000 License Points.); Scrivener (Completed the Bestiary.); Runeweaver (Learned every Magick.); Jack-of-All-Trades (Learned every Technick.); Collector (Obtained a Morbid Urn.); Cartographer (Fully explored every map.); Mist Walker (Performed every Concurrence.)."
            ]
        },
        {
            "heading": "Elite Marks, Espers & Story",
            "body": [
                "Defeating Deathgaze, Fafnir, the Trickster, Carrot, Gilgamesh, the Behemoth King, Yiazmat, the Hell Wyrm, Ultima and Zodiark, obtaining every Esper, the main story beats (from the Order of the Knights of Dalmasca through restoring peace to Ivalice), and completing the 50th and 100th Trial Mode stages.",
                "The achievements here: Eagle Eye (Defeated Deathgaze.); Wyrmslayer (Defeated Fafnir.); Sharpshooter (Defeated the Trickster.); Freshmaker (Defeated Carrot.); Master Swordsman (Defeated Gilgamesh.); Lord of the Kings (Defeated the Behemoth King.); Hunter Extraordinaire (Defeated Yiazmat.); Radiant Savior (Defeated the Hell Wyrm.); Fell Angel (Defeated Ultima.); Zodiac Knight (Defeated Zodiark.); High Summoner (Obtained every Esper.); For the Homeland (Faced the Archadian Empire as an initiate in the Order of the Knights of Dalmasca.); Galbana Bloom (Defeated your first mark.); A Traitor Redeemed (Escaped from the Nalbina Dungeons.); Fated Meeting (Rescued the Princess of Dalmasca.); The Mist Seethes (Obtained the Dawn Shard.); Visions of the Dreamer (Set out from Mt Bur-Omisace.); Reins of History (Faced Doctor Cid.); Wings of My Own (Restored peace to Ivalice.); Judge Magister (Completed the 50th trial.); Imperator (Completed the 100th trial.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story, taking every Hunt from the notice boards as it becomes available and filling the Bestiary as you go.",
                "2. Grab every Esper during and just after the story (most are optional side bosses).",
                "3. In the postgame, grind License Points to 48,000 and let the count achievements (Attacks, Magicks, steps, gil, Clan Points, loot sold) accumulate.",
                "4. Fully explore every map and complete the Bestiary.",
                "5. Do the superbosses in order of difficulty - the eight Elite Marks, then Ultima and Zodiark, then the Hell Wyrm, and finally Yiazmat - and clear Trial Mode to stage 100.",
                "Tip: Yiazmat has around 50 million HP and takes hours - set up defensive Gambits (auto-Curaja, auto-Reverse, Berserk on your attacker), bring plenty of X-Potions, and be ready to leave and return; the fight persists, so you can chip it down across several sessions."
            ]
        }
    ]
};
