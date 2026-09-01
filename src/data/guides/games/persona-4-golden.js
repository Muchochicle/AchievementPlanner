// Persona 4 Golden Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/persona-4-golden.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1113000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 14 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "persona-4-golden-achievement-guide",
    "category": "game",
    "gameSlug": "persona-4-golden",
    "icon": "🌑",
    "title": "Persona 4 Golden Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Persona 4 Golden (14 hidden). Covers the year-long story and its dungeon rescues, the Persona fusion and Compendium work, the Social Links, the combat and activity milestones, and the New Game Plus superbosses. Fourteen of the achievements are hidden - the story rescues and endgame beats - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Persona 4 Golden has 50 Steam achievements and 14 are hidden. Nine are story markers: rescuing Yukiko, Kanji, Rise, Naoto and Nanako, apprehending Mitsuo, securing Adachi, pursuing the true ending, and finishing the Hollow Forest. The other five are endgame beats: a four-Persona special fusion, defeating Margaret (max Empress Social Link, NG+), the Reaper (open 20 chests then the last one), Izanami (the true final boss), and fusing Izanagi-no-Okami (NG+). Everything visible is fusion, Compendium and Skill Card work, the Social Links, combat feats (999 damage, 50 All-Out Attacks, 100 weakness hits), and the town activities (fishing, bug catching, cooking, the quiz, the movies).",
                "The catalog marks it difficulty 3. Nothing is strictly missable on a full year, but the true ending needs specific late-game dialogue choices, 'Legend of Inaba' (all Social Links maxed) is very tight on a single run, and Margaret and Izanagi-no-Okami are New Game Plus only. Plan on a guided first run and a partial NG+ for the two NG+ achievements.",
                "Tip: follow a max-Social-Links schedule from day one - 'Legend of Inaba' (all Social Links) and 'Mr. Perfect' (all social qualities) are the hardest single-run achievements, and slipping behind early is difficult to recover from."
            ]
        },
        {
            "heading": "Story: The Midnight Channel",
            "body": [
                "The nine hidden story rescues and beats (Yukiko, Kanji, Rise, Mitsuo, Naoto, Nanako, the true ending, the Hollow Forest, Izanami), plus 50 Persona fusions.",
                "The achievements here: Golden Completed (Earn all achievements); A Prince Appears (Rescue Yukiko Amagi (finish her dungeon).); A True Man's Stand (Rescue Kanji Tatsumi (finish his dungeon).); The Lounge Is Closed (Rescue Rise Kujikawa (finish her dungeon).); Game Over (Apprehend Mitsuo Kubo.); Boarded-Up Lab (Rescue Naoto Shirogane (finish her dungeon).); The Return of the Angels (Rescue Nanako Dojima.); Breaking Through the Fog (Pursue the true ending of the game (make the correct late-game choices).); Welcome Back (Finish the Hollow Forest dungeon.); The Truth In Your Hands (Defeat Izanami (the true final boss).)."
            ]
        },
        {
            "heading": "Fusion, Compendium & Combat",
            "body": [
                "A special four-Persona fusion, a fusion accident, a Compendium purchase, Skill Card registration (one and 100), five Persona switches in a battle, 250 Risette lines, 999 damage, 50 All-Out Attacks, 100 weakness hits, 50 Sweep Bonuses, a Golden Hand, Margaret's fight, and the Reaper.",
                "The achievements here: Fusion Expert (Perform 50 Persona fusions.); Special Fusion Expert (Perform a special fusion using four or more Personas at once.); The Nose Doesn't Always Know (Experience a fusion accident.); Persona Shopper (Buy a Persona from the Compendium.); A Favor for Marie (Register a Skill Card.); Card Collector (Register 100 Skill Cards.); Displaying Adaptability (Switch Personas 5 times in 1 battle.); Hardcore Risette Fan (Hear 250 of Rise's navigation lines.); Going Nova (Deal over 999 damage in 1 attack.); Skilled Commander (Perform 50 All-Out Attacks.); Tactical Fighter (Exploit enemy weaknesses 100 times.); Fill Your Hand (Get 50 Sweep Bonuses.); Grasping at Greed (Defeat a Golden Hand.); One Who Has Proven Their Power (Challenge Margaret to a fight and win (requires max Empress Social Link - New Game Plus only).)."
            ]
        },
        {
            "heading": "Social Links, Town & NG+",
            "body": [
                "Aiya's special dish, all books, the Capsule and vending machines, Tanaka, Sozai Daigaku, perfect boxed lunches, a special relationship, all social qualities, obtaining Izanagi, Izanagi-no-Okami, the Compendium at 50% and 100%, a costume battle, top of the class, the Sea Guardian, one/ten/all Social Links, Chagall coffee, three movies, perfect bug catching, a Player-Advantage battle, visiting Nanako, and the Miracle Quiz.",
                "The achievements here: The Reaper Becomes the Reaped (Open 20 treasure chests, then agree to open the final one and defeat the Reaper.); Food Fighter (Finish Aiya's special dish.); Compulsive Reader (Read all books.); It's Working Today (Buy an item from the Capsule Machine.); Lucky Me! (Win a prize from the vending machine.); Granter of Your Desires (Buy 5 things from Tanaka's Amazing Commodities.); Seize the Moment (Buy a special croquette from Sozai Daigaku.); Cooking With Gas (Make 5 perfect boxed lunches.); A Special Lady (Enter a special relationship with someone.); Mr. Perfect (Max out all social qualities.); The Other Self (Obtain the Persona Izanagi.); The Power of Truth (Fuse Izanagi-no-Okami (New Game Plus only).); Moderate Bookkeeper (Register over 50% of the Compendium.); Thorough Bookkeeper (Complete the Persona Compendium.); Fashion Plate (Fight a battle in costume.); Head of the Class (Rank #1 in your class on an exam.); Fishing Master (Catch the Sea Guardian.); A True Bond (Max out a Social Link.); Bond Maniac (Max out 10 Social Links.); Legend of Inaba (Max out all Social Links.); An Acquired Taste (Drink the coffee at Chagall Café.); Movie Buff (Go to 3 movies at 30 Frame.); Bug Hunter (Swing the net with perfect timing.); Advantage Mine (Enter a battle with Player Advantage.); Big Bro is Worried (Visit Nanako in the hospital three times on the specific dates after she is admitted.); A New Quiz King (Win the Miracle Quiz Finals.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the full year, following a max-Social-Links and max-social-qualities schedule from the start.",
                "2. Let the nine story rescues unlock, and make the correct late-game choices for the true ending and the Hollow Forest.",
                "3. Do the fusion, Compendium and combat milestones as you play, and open 20 chests plus the last one for the Reaper.",
                "4. Complete the town activities (fishing, bug catching, cooking, the quiz, the movies, the special relationship).",
                "5. Start New Game Plus for Margaret (max Empress link first) and Izanagi-no-Okami.",
                "Tip: 'The Reaper Becomes the Reaped' - the Reaper only spawns after you have opened 20 chests and then interact with a 21st; it is a very hard fight, so come with a strong party and status-block gear (it uses instant-death spells)."
            ]
        }
    ]
};
