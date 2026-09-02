// The Rise of the Golden Idol Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-rise-of-the-golden-idol.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2716400 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 0 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-rise-of-the-golden-idol-achievement-guide",
    "category": "game",
    "gameSlug": "the-rise-of-the-golden-idol",
    "icon": "🗿",
    "title": "The Rise of the Golden Idol Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in The Rise of the Golden Idol (0 hidden). Every achievement carries Steam's own text - solving each individual scenario, completing each of the five base-game chapters, and completing every scenario and story of the four DLC packs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Rise of the Golden Idol has 46 Steam achievements, none hidden. Set in the 1970s, the sequel spreads its mystery across a media empire, a research institute and a cult, one deduction puzzle per scene. The achievements are one-to-one with content: solving each of the 20 base-game scenarios (Constriction, Academic Impact, Under Construction, News Flash and so on through Final Clash), completing each of the five base chapters (The Curse, The Pursuit, The Machine, The Trials, The Pinnacle), and solving every scenario and completing the story of each of the four DLC packs (The Sins of New Wells, The Lemurian Phoenix, The Age of Restraint, The Curse of the Last Reaper).",
                "There are no hidden achievements - the list above is the whole set, and it maps directly to progress.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable; every scenario stays available from the chapter menu."
            ]
        },
        {
            "heading": "Base Game",
            "body": [
                "The 20 base-game scenario solves and the five chapter completions (The Curse, The Pursuit, The Machine, The Trials, The Pinnacle).",
                "The achievements here: Constriction (Solve the Constriction scenario); Academic Impact (Solve the Academic Impact scenario); Under Construction (Solve the Under Construction scenario); News Flash (Solve the News Flash scenario); Garden Retreat (Solve the Garden Retreat scenario); Behind Bars (Solve the Behind Bars scenario); Blockbuster Release (Solve the Blockbuster Release scenario); Going Once (Solve the Going Once scenario); Ignition (Solve the Ignition scenario); Protest Movement (Solve the Protest Movement scenario); The Procedure (Solve the The Procedure scenario); Feathered Frenzy (Solve the Feathered Frenzy scenario); Backstage Drama (Solve the Backstage Drama scenario); Speildance (Solve the Speildance scenario); Complex (Solve the Complex scenario); Beach Trip (Solve the Beach Trip scenario); Boardroom Brawl (Solve the Boardroom Brawl scenario); Ancient Artifacts (Solve the Ancient Artifacts scenario); Steelside Warehouse (Solve the Steelside Warehouse scenario); Final Clash (Solve the Final Clash scenario); The Curse (Complete the Curse chapter); The Pursuit (Complete the Pursuit chapter); The Machine (Complete the Machine chapter); The Trials (Complete the Trials chapter); The Pinnacle (Complete the Pinnacle chapter)."
            ]
        },
        {
            "heading": "DLC: Sins of New Wells & Lemurian Phoenix",
            "body": [
                "The scenario solves and story completions for the first two DLC packs.",
                "The achievements here: Following Orders (Solve the Following Orders scenario); Trouble Unleashed (Solve the Trouble Unleashed scenario); The Raid (Solve the Raid scenario); Unravelling (Solve the Unravelling scenario); The Sins of New Wells (Complete the Sins of New Wells story); The Royal Blood (Solve the Royal Blood scenario); Eternity's End (Solve the Eternity's End scenario); Ascension (Solve the Ascension scenario); Revelation (Solve the Revelation scenario); Blaze of Glory (Solve the Blaze of Glory scenario); The Lemurian Phoenix (Complete the Lemurian Phoenix story)."
            ]
        },
        {
            "heading": "DLC: Age of Restraint & Last Reaper",
            "body": [
                "The scenario solves and story completions for the last two DLC packs.",
                "The achievements here: Fruits of Disobedience (Solve Fruits of Disobedience); Court of the Sentinels (Solve Court of the Sentinels); The Sentience Gambit (Solve The Sentience Gambit); Consequences (Solve Consequences); The Age of Restraint (Complete The Age of Restraint story); Last Orders (Solve Last Orders); Broadside Betrayal (Solve Broadside Betrayal); Sickness and Health (Solve Sickness and Health); Whishbloom (Solve Whishbloom); The Curse of the Last Reaper (Complete The Curse of the Last Reaper story)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Work through the five base chapters in order, solving every scenario - each solve is one achievement and each chapter completion another.",
                "2. Play the four DLC packs in release order (Sins of New Wells, Lemurian Phoenix, Age of Restraint, Curse of the Last Reaper), solving every scenario in each.",
                "3. Each DLC's 'Complete the ... story' achievement unlocks with its final scenario.",
                "Tip: there is no penalty for wrong guesses and no timer - if a scenario stalls, fill in every field you are sure of and brute-force the last one or two from the shrinking word bank; the achievement only cares that the board ends up correct."
            ]
        }
    ]
};
