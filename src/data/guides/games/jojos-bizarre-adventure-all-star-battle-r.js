// JoJo's Bizarre Adventure: All-Star Battle R Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/jojos-bizarre-adventure-all-star-battle-r.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1372110 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "jojos-bizarre-adventure-all-star-battle-r-achievement-guide",
    "category": "game",
    "gameSlug": "jojos-bizarre-adventure-all-star-battle-r",
    "icon": "🌟",
    "title": "JoJo's Bizarre Adventure: All-Star Battle R Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in JoJo's Bizarre Adventure: All-Star Battle R - none are hidden. Covers the All-Star Battle Mode story panels for all eight Parts, the in-match battle techniques and Secret Missions, the arena-gimmick and Dramatic Finish feats, and the Tournament and online milestones.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "JoJo's Bizarre Adventure: All-Star Battle R has 46 Steam achievements and none of them are hidden. The names are lines from the manga, but every description states the requirement. The spine is All-Star Battle Mode - a panel of encounters for each of the eight Parts of JoJo (Phantom Blood through JoJolion), with an achievement for completing the first panel and for completing all panels of each Part. Around that sit the mechanical feats (land an HHA, a GHA, an Assist, a Flash Cancel, a Stylish Evade), the Secret Mission counters (1, 30, 50), the arena-gimmick achievements, the Dramatic Finish achievements, and the competitive milestones (win a Tournament on every difficulty, rank up in Ranked Match, play 100 online matches).",
                "Nothing is missable - All-Star Battle Mode panels can be replayed, Secret Missions can be retried freely, and the online and Tournament achievements are always available. The longest are \"I reject my humanity!\" (100 online matches) and the all-Secret-Missions / all-Dramatic-Finishes / all-arena-gimmicks completion sets.",
                "Tip: read the Secret Mission text before each All-Star Battle encounter and try to satisfy it on the spot - most are simple (win with a specific move, take no damage for a while) and clearing them during your story run knocks out the \"1 / 30 / 50 Secret Missions\" achievements without extra grinding."
            ]
        },
        {
            "heading": "All-Star Battle Mode: Story Panels",
            "body": [
                "The all-achievements award plus completing the first panel and all panels of All-Star Battle Mode for each of the eight Parts, from Phantom Blood to JoJolion.",
                "The achievements here: JoJo's Bizarre Adventure (All achievements have been unlocked.); A Curious Fate (Completed All-Star Battle Mode.); Ode to Humanity (Completed 1 panel of All-Star Battle Mode Part 1.); Phantom Blood (Completed all panels of All-Star Battle Mode Part 1.); True warriors love friendship and respect! (Completed 1 panel of All-Star Battle Mode Part 2.); Battle Tendency (Completed all panels of All-Star Battle Mode Part 2.); Can't Hate The Guy (Completed 1 panel of All-Star Battle Mode Part 3.); Ain't beating them! (Completed 5 panels of All-Star Battle Mode Part 3.); Stardust Crusaders (Completed all panels of All-Star Battle Mode Part 3.); One hell of an experience! (Completed 1 panel of All-Star Battle Mode Part 4.); Diamond is Unbreakable (Completed all panels of All-Star Battle Mode Part 4.); First we need strength! (Completed 1 panel of All-Star Battle Mode Parte 5.); Golden Wind (Completed all panels of All-Star Battle Mode Parte 5.); I'm... Emporio. (Completed 1 panel of All-Star Battle Mode Part 6.); Stone Ocean (Completed all panels of All-Star Battle Mode Part 6.); So this is the Real Man's World! (Completed 1 panel of All-Star Battle Mode Part 7.); Steel Ball Run (Completed all panels of All-Star Battle Mode Part 7.); This is a story about lifting a curse... (Completed 1 panel of All-Star Battle Mode Part 8.); JoJolion (Completed all panels of All-Star Battle Mode Part 8.)."
            ]
        },
        {
            "heading": "Battle Techniques, Secret Missions & Arena Gimmicks",
            "body": [
                "The in-match feats - Single VS Battle, gallery purchases, landing an HHA / GHA / Assist / Easy Beat HHA, zoomed-in taunts, Stylish Evades, Flash Cancels, Rush Mode, the Secret Mission counters (1, 30, 50) and the arena-gimmick and Dramatic Finish first-time achievements.",
                "The achievements here: We'll train your arse off! (Completed a match in Single VS Battle.); Let's drink tea and have a nice chat, eh? (Purchased 100 gallery items.); Some words of praise would be nice! (Purchased 500 gallery items.); My heart resonates! (Landed an HHA.); Great! (Landed a GHA.); Di molto! (Landed an HHA using Easy Beat.); I knew I could count on you. (Landed an Assist.); Come prepared or not at all. (Pulled off a zoomed-in taunt.); Swish! (Pulled off a Stylish Evade.); That's the look of a real man! (Pulled off a Flash Cancel.); The hell is this, a punching contest? (Activated Rush Mode.); So you saw it... (Completed a Secret Mission for the first time.); You! You were looking! (Completed 30 Secret Missions.); You've mastered this game, haven't you! (Completed 50 Secret Missions.); An Adventurer is the only thing you can be! (Set off an arena gimmick for the first time.); Whoa! Look out above you! (Set off all arena gimmicks.); Sucks to be you! (You or an opponent were hit by an arena gimmick for the first time.); Tacos (Got hit by all arena gimmicks.); YadaaaaaaAAAAABAAAAAAAAAA (Pulled off a Dramatic Finish for the first time.); Don't come near me! (Pulled off all Dramatic Finishes.)."
            ]
        },
        {
            "heading": "Completion Sets, Tournament & Online",
            "body": [
                "Pulling off every Dramatic Finish, completing one Challenge Battle, a 10-win streak in Endless Battle, winning a Tournament for the first time and on all difficulties, and the online achievements (first Online match, Ranked rank-up, 100 Online matches).",
                "The achievements here: I... I'm so happy! (Complete 1 Challenge Battle.); Your \"end\" has no ending! (Won 10 times in a row in Endless Battle.); There can be only one! (Won Tournament for the first time.); A million-to-one luck-sucking leech! (Won Tournament on all difficulties.); This is... The World! (Participated in an Online match.); I've gotta get them before they get me! (Ranked up in Ranked Match.); I reject my humanity! (Participated in 100 Online matches.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through All-Star Battle Mode Part by Part for the first-panel and all-panels achievements across all eight JoJo Parts.",
                "2. While you do, read and complete the Secret Mission for each encounter - this feeds the \"1 / 30 / 50 Secret Missions\" achievements naturally.",
                "3. Drill the mechanical feats in Practice or Single VS Battle: HHA, GHA, Easy Beat HHA, Assist, Flash Cancel, Stylish Evade, Rush Mode, zoomed-in taunt.",
                "4. Trigger every arena gimmick and land every character's Dramatic Finish, then clear a Challenge Battle and a 10-win Endless Battle streak.",
                "5. Win a Tournament on every difficulty offline, then finish the online set - first match, a Ranked rank-up, and 100 total Online matches.",
                "Tip: spend the Gold you earn from All-Star Battle Mode on gallery items as you go - the \"100 / 500 gallery items purchased\" achievements are pure currency sinks and there is no reason to hoard."
            ]
        }
    ]
};
