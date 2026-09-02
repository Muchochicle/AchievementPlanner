// The Ascent Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-ascent.json), whose 66 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   979690 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 22 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-ascent-achievement-guide",
    "category": "game",
    "gameSlug": "the-ascent",
    "icon": "🌃",
    "title": "The Ascent Achievement Guide",
    "summary": "A practical guide to all 66 Steam achievements in The Ascent (22 hidden). The 22 hidden achievements are the 13 spoiler-free main-mission markers, the IMP upgrade and Kira praise, and the Cyber Heist DLC's markers and feats. Sourced from XboxAchievements and TrueAchievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Ascent has 66 Steam achievements, 22 of them hidden. The Ascent is an isometric cyberpunk action-RPG set in a corporate arcology after The Ascent Group collapses. The visible achievements are combat and cyberware feats, hacking every category, the economy and exploration milestones (200,000 uCreds, all locations, the full Codex), co-op, and a set of gags (use the sink after the toilet).",
                "The 22 hidden achievements are the 13 main-mission story markers plus upgrading your IMP drone and being praised by Kira, and the Cyber Heist DLC (its two main-mission markers, the 'Tenuous Grasp' twist, its main-story and all-missions completions, a side mission, and taking the train).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is missable - the arcology stays open after the story, and the Cyber Heist DLC is a self-contained late addition."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The 13 Steam-hidden main-mission markers, from 'What just happened?' to the finale, plus upgrading your IMP drone and earning Kira's praise. Described spoiler-free.",
                "The achievements here: What just happened? (Complete the main mission 'What just happened?'); Party crashed (Complete the main mission 'Party crashed'); A new friend (Complete the main mission 'A new friend'); Power Hungry (Complete the main mission 'Power Hungry'); Data Digging (Complete the main mission 'Data Digging'); Mnemonic Hunt (Complete the main mission 'Mnemonic Hunt'); Everyone's a smuggler (Complete the main mission \"Everyone's a smuggler\"); Magenta Power (Complete the main mission 'Magenta Power'); Nothing personal (Complete the main mission 'Nothing personal'); Severed Board (Complete the main mission 'Severed Board'); Protocol 61A (Complete the main mission 'Protocol 61A'); Something out there (Complete the main mission 'Something out there'); Win (Complete the final main mission and finish the story); Next level AI (Upgrade your IMP companion drone); Appreciation (Receive praise from Kira in conversation)."
            ]
        },
        {
            "heading": "Combat, Hacking & Cyberware",
            "body": [
                "The first kill, katana death and revive gags, augmentations and modules, proficiency points, weapon upgrades, hacking every category and deploying black ICE, energy-damage and stasis kills, and the Siege Mech and high-level kills.",
                "The achievements here: We're just getting started (First enemy kill); Sashimi (Get killed by a katana); Helping hand (Revive a DBNO friend); Drop your weapon! (Make an enemy drop an exploding grenade); Added extras (Equip two augmentations and a module); Fullchrome (Equip augmentations and upgrade attributes resulting in the fullchrome appearance); Self improvement (Allocate 3 proficiency points); Free candy (Get the goods by both hacking and destroying vending machines); Omnihacker (Hack at least one of each hackable category); Black ICE (Deploy black ICE against hacker enemy); Fight smart (Kill a robot with energy damage type); Extreme Overcharge (Deliver 4000 amount of stasis damage on one target); Opportunist (Kill 10 enemies using exploding barrels); Overkill (Kill another enemy by overcharging an enemy while it's in stasis); Karlan Engineering (Destroy a Karlan controlled Siege Mech); Big leagues (Kill 50 level 35 or higher enemies)."
            ]
        },
        {
            "heading": "Exploration, Economy & Collectibles",
            "body": [
                "Dying 100 times, resetting proficiencies, selling and ATM hacking, side missions, 200,000 uCreds, bounties, Snooze, exploding-barrel kills, the sink gag, all locations, the Codex and datapads, the Interlink Express, and all enemy Codex entries.",
                "The achievements here: Suicidal (Die more than 100 times); Do Over (Reset your proficiencies once); Fair trade (Sell Something); Teamwork (Start your first co-op session); Aficionado (Fully upgrade a weapon); Getting things done (Finish a side mission); For both our benefits (Complete all side missions); Anonymous withdrawal (Hack an ATM); Getting out of the slums (Collect 200'000 uCreds ); Bounty Hunter (Claim a bounty); Snooze or lose (Try Snooze); Hygiene (Use the sink after flushing a toilet); Explorer (Discover all locations); Tourist (Ride the Interlink Express); Comprehensive (Fill the Codex); Curious consumer (Read 10 datapads); Flatliner (Unlock all enemy Codex entries); Bring a knife to a gunfight (Obtain your first melee weapon); VIP no more (Kill a level 35 bounty)."
            ]
        },
        {
            "heading": "Cyber Heist DLC",
            "body": [
                "The Cyber Heist expansion - its main and side missions, the Karlan Siege Mech, the Making Concessions and Unshackled missions, the Zell fight, the Dark Playground, a Hammer kill, and a secret route.",
                "The achievements here: One step forward (Complete the Cyber Heist DLC mission 'Find & Replace'); All the way (Complete the Cyber Heist DLC mission 'Critical Resource'); Tenuous Grasp (Find and then lose something valuable (Cyber Heist DLC)); Completed Main Mission (Complete the Cyber Heist DLC main story); Completed All Missions (Complete every Cyber Heist DLC mission - main and side); Making Concessions (Completed Making Concessions); Unshackled (Complete Unshackled); Love Kills (Complete the Cyber Heist DLC side mission 'Love Kills'); Complete all Side Missions (Completed all Cyber Heist Side Missions); Hammering (Perform your first Hammer kill); First Melee Special Move Kill (Kill an enemy using melee's special move); Not so special (Take down a member of Zells' guard); Zell is dead (Take down Zell); Brave New World (Discover the Dark Playground); Vice Express (Take the Interlink train in the Cyber Heist DLC); Open Sesame (Find a secret route)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to the finale for the 13 hidden markers, upgrading your IMP drone along the way.",
                "2. Do every side mission, hack one of each category, and grind toward 200,000 uCreds and the full Codex.",
                "3. Pick up the combat and cyberware feats during normal play - most need one specific kill type or one augmentation.",
                "4. Explore every location, ride the Interlink Express, and read datapads for the collectible achievements.",
                "5. Play the Cyber Heist DLC as a self-contained late chapter for its markers, the Zell fight and its feats.",
                "Tip: co-op (Teamwork) and the sink-after-toilet gag (Hygiene) are two of the most-missed easy achievements - do both early so you don't forget them."
            ]
        }
    ]
};
