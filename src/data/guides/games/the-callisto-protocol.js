// The Callisto Protocol Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-callisto-protocol.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1544020 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 23 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-callisto-protocol-achievement-guide",
    "category": "game",
    "gameSlug": "the-callisto-protocol",
    "icon": "🪐",
    "title": "The Callisto Protocol Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in The Callisto Protocol (23 hidden). The 23 hidden achievements are the 9 chapter markers, the story and Maximum Security clears, the bio/lore grinds, the GRP and combat set-pieces, and a photo-mode shot. Sourced from PowerPyx.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Callisto Protocol has 46 Steam achievements, 23 of them hidden. The Callisto Protocol is a survival-horror game from the creators of Dead Space, set in a Jupiter-moon prison overrun by mutated inmates. The visible achievements are weapon printing and upgrading, the difficulty and New Game+ clears, and the Riot Mode wave-survival challenges added post-launch, plus the Final Transmission story DLC.",
                "The 23 hidden achievements are the nine chapter-completion markers, the story clear and Maximum Security clear, the collectible and lore grinds (all 43 implant bios, the Kallipolis mystery), the GRP-glove and combat set-pieces (25 grabs, a GRP-and-melee combo, hazard throws, both arms off a living enemy, ten hazard kills, a perfect-dodge streak), and a photo-mode shot.",
                "The catalog marks it difficulty 3, missable:true-adjacent and recommends 2 playthroughs. Nothing story-critical is missable, but the Maximum Security and Contagion-mode clears and New Game+ each need their own run, and the platinum wants a Contagion no-death clear."
            ]
        },
        {
            "heading": "Campaign Chapters",
            "body": [
                "The story clear plus the nine Steam-hidden chapter-completion markers, from finding the Outer Way boarding craft to being thrown back into your original cell. Described spoiler-free.",
                "The achievements here: I Do Belong Here (Complete the story on any difficulty); The Outer Way (Find the Outer Way boarding craft (Chapter 1)); Desperate Times (Elias gives Jacob a shiv (Chapter 2)); If the SHU Fits... (Activate the SHU (Chapter 3)); Without A Paddle (Survive the pipeslide (Chapter 4)); Crash Site (Return to the crashed ship (Chapter 5)); In the Pipe, Five by Five (Reach the Hangar flight deck (Chapter 5)); Power Up (Restore power to the old facility (Chapter 6)); What Lies Beneath (Find the source (Chapter 7)); Full Circle (Get thrown back into your original cell (Chapter 8))."
            ]
        },
        {
            "heading": "Difficulty & Completion",
            "body": [
                "The Maximum Security clear, New Game+, Hardcore and Hardcore NG+ clears, Contagion mode and a no-death Contagion clear, and buying every weapon and upgrade.",
                "The achievements here: The Protocol is About Life (Beat the game on Maximum Security difficulty); Parole Denied (Finish New Game Plus Mode); Recidivist (Finish Game in Hardcore Mode); Lifer (Finish Game in Hardcore Mode NG+); Armed to the Teeth (Purchase all weapons and upgrades); Glutton for Punishment (Finish Game in Contagion Mode); You Belong Here (Finish Game in Contagion Mode Without Dying)."
            ]
        },
        {
            "heading": "Combat, GRP & Secrets",
            "body": [
                "The GRP-glove and melee set-pieces (25 grabs, the GRP-melee combo, hazard throws, ten hazard kills, both arms off a living enemy, a perfect-dodge streak, stab five blind enemies), the Security Robot and Two-Head boss, the bio and Kallipolis lore grinds, and a photo-mode shot.",
                "The achievements here: Grim Reaper (Harvest and read all 43 implant bios); The Commonality (Uncover the mystery of Kallipolis by finding the two key bios); Get a Grip (Grab 25 enemies with the GRP glove); Terminated (Take down a Security Robot); Two Heads Are Better Than One (Defeat the Two-Head boss); In Striking Distance (Kill an enemy with a GRP-and-melee combo); Giving Back (Stab five blind enemies in the back); Mugshot (Take a photo using Photo Mode); Float Like A Butterfly (Perform a perfect dodge five times); Flesh Wound (Remove both arms from a living enemy); Chew 'Em Up (Kill ten enemies with environmental hazards); Workplace Hazard (Use the GRP to throw an enemy into a hazard); Quick Pick (Solve any Security Lock System in less than 7 seconds)."
            ]
        },
        {
            "heading": "Weapons & New Game",
            "body": [
                "Printing your first weapon, printing a weapon upgrade, and fully upgrading a weapon.",
                "The achievements here: You Need a Gun (Fully upgrade one weapon); Reforged (Print a weapon upgrade); Paper Jams (Print a weapon for the first time)."
            ]
        },
        {
            "heading": "Riot Mode & Final Transmission DLC",
            "body": [
                "The Riot Mode wave-survival content (Wave 50, dismemberment and hazard kills, the Power-up, Hoard Mode) and the Final Transmission story DLC (its completion, the Kinetic Hammer, the Biobot, the Data Drives, the Escape Pod).",
                "The achievements here: Big Game Hunter (Complete Wave 50); Big Spender (Spend 20,000 Credits); I am the Danger (Dismember 100 limbs in Riot Mode); Bear Trap (Kill a Two-Head with a Hazard); Hoard Mode (Survive five consecutive waves without spending any Credits); Subject Alpha (Use the Power-up 10 times); Instigator (Complete Riot Mode for the first time); One Last Job (Finish Final Transmission); Information Overload (Find all 8 Protocol Data Drives); This Isn't About Escape (Locate the Escape Pod); Keep Fighting (Killed your first Biobot!); It's Time (Obtain the Kinetic Hammer); Don't Let It Mellow (Destroy all Hammer Crates on the Factory Floor)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story once on Minimum or Medium Security, banking the nine chapter markers and doing the combat set-pieces as chances come up.",
                "2. Collect implant bios as you go - Grim Reaper needs all 43, and two specific ones give The Commonality.",
                "3. Play the Final Transmission DLC for its completion, the Kinetic Hammer, the Biobot and its collectibles.",
                "4. Run New Game+ on Maximum Security to stack The Protocol is About Life, Parole Denied and Armed to the Teeth, then a Hardcore NG+ pass for Lifer.",
                "5. Do a Contagion-mode clear (ideally without dying for You Belong Here) and grind Riot Mode for Wave 50 and its combat achievements.",
                "Tip: buy the GRP-throw and dodge-focused upgrades early - most of the hidden combat achievements (Get a Grip, In Striking Distance, Workplace Hazard, Float Like A Butterfly) come naturally once you lean on the GRP glove instead of ammo."
            ]
        }
    ]
};
