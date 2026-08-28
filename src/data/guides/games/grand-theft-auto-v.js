// Grand Theft Auto V's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grand-theft-auto-v.json), whose 77
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 271590 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 57
//   of 77 ship a real, official Steam description, quoted directly
//   below.
// - The 20 hidden achievements are eleven story-mission markers plus a
//   set of GTA Online heist and Doomsday Heist completions. Their
//   unlock conditions here are curatorial, cross-checked against
//   GamePressure, the GTA wiki, and Twinfinite. Story achievements are
//   described only by which mission or heist earns them.
// - The grouping (story, Los Santos 100%, GTA Online general, GTA
//   Online heists and Doomsday, then the Rockstar Editor / Director
//   Mode set) follows the achievements' own descriptions. GTA Online
//   achievements need the online mode.
export const GUIDE = {

    slug: "grand-theft-auto-v-achievement-guide",
    category: "game",
    gameSlug: "grand-theft-auto-v",
    icon: "🚗",
    title: "Grand Theft Auto V Achievement Guide",
    summary: "A practical guide to all 77 Steam achievements in Grand Theft Auto V - the story missions, Los Santos 100% completion, the GTA Online rank and activity achievements, the heists and Doomsday Heist, and the Rockstar Editor set.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Grand Theft Auto V has 77 Steam achievements. 20 are hidden (eleven story markers plus GTA Online heist completions). Well over half the list is GTA Online, the separate multiplayer mode.",
                "The two big single-player commitments are Career Criminal (100% game completion, a long in-game checklist) and Solid Gold, Baby! (70 gold medals across Missions and Strangers and Freaks, which usually needs mission replays).",
                "Tip: play the story for fun first, ignoring gold medals. Replay missions from the pause menu afterwards, when you know each one's objectives and have money for weapons and armour."
            ]
        },

        {
            heading: "Story",
            body: [
                "Mission markers unlock automatically: Welcome to Los Santos (first Franklin mission), A Friendship Resurrected (\"Fame or Shame\"), A Fair Day's Pay (\"Caida Libre\"), The Moment of Truth (\"Bury the Hatchet\"), and To Live or Die in Los Santos (complete the game).",
                "The heist markers: Diamond Hard (the Jewel Store Job), Blitzed (Blitz Play), Subversive (The Merryweather Heist), Small Town, Big Job (The Paleto Score), The Government Gimps (The Bureau Raid), and The Big One! (The Big Score).",
                "Solid Gold, Baby! (70 gold medals) and Career Criminal (100% completion) span the whole game."
            ]
        },

        {
            heading: "Los Santos 100%",
            body: [
                "Activities and pastimes: San Andreas Sightseer (explore the whole map), Multi-Disciplined (gold in all hobbies), Show Off (all Stunt Jumps), Close Shave (all Under the Bridge and Knife Flight challenges), Red Mist (all Rampages), and A New Perspective (15 hours in first person).",
                "Property and side strands: All's Fare in Love and War (Downtown Cab Co.), TP Industries Arms Race (McKenzie Field Hangar), Waste Management (the old dock and all nuclear waste), From Beyond the Stars (all spaceship parts), A Mystery, Solved (Leonora Johnson), and Kifflom! (the Epsilon Program).",
                "One-off feats: Three Man Army (3 minutes at 3 stars with all three protagonists), Out of Your Depth (meet the shark), Altruist Acolyte (deliver a victim to the cult), A Lot of Cheddar (spend $200 million), Trading Pure Alpha (profit on the stock market), Pimp My Sidearm and Los Santos Customs (fully mod a weapon and a vehicle), and Wanted: Alive Or Alive (deliver a bail bond target alive)."
            ]
        },

        {
            heading: "GTA Online: General",
            body: [
                "Ranks: Off the Plane (the intro), Three-Bit Gangster (25), Making Moves (50), and Above the Law (100).",
                "Activities: Numero Uno (first in every competitive type), The Midnight Club (win 5 Races in custom vehicles), Unnatural Selection (all 10 Survival waves), Backseat Driver (co-drive a Rally to 1st), Run Like The Wind (survive a day with a bounty), Clean Sweep (a Gang Attack, no deaths, 10+ kills), Decorated (30 Platinum Awards), and Stick Up Kid (hold up all 20 stores).",
                "Progression: Enjoy Your Stay (do a bit of everything), Crew Cut (a Job in a Crew), Full Refund (kill the thief who mugged you), Dialling Digits (call for a Backup Helicopter), and American Dream (own an Apartment, Garage and Insured Vehicle)."
            ]
        },

        {
            heading: "GTA Online: Heists & Doomsday",
            body: [
                "The original heists: Be Prepared (a Heist Setup), Parole Day (The Prison Break), In the Name of Science (Humane Labs Raid and Series A Funding), and Dead Presidents (The Fleeca Job and The Pacific Standard Job).",
                "Heist mechanics: Shot Caller (set up a Heist), Four Way (an even 25% Finale cut), Live a Little ($8M on Heists-update vehicles), Can't Touch This (a Heist Finale with no damage), and Mastermind (25 platinum medals across Setups and Finales).",
                "The Doomsday Heist: Getting Started (set it up), The Data Breaches (Act I), The Bogdan Problem (Act II), The Doomsday Scenario (Act III), A World Worth Saving (all three acts), plus Orbital Obliteration (an Orbital Cannon kill), Elitist (all 3 Elite Challenges), and Masterminds (all 3 Criminal Mastermind Challenges)."
            ]
        },

        {
            heading: "Rockstar Editor & Director Mode",
            body: [
                "Vinewood Visionary and Majestic (export videos / enter Director Mode 5 then 10 times), First Time Director (enter as an unlocked actor), Animal Lover (as an animal actor), Method Actor (as your own GTA Online character), and Cult Movie (as Cris Formage).",
                "Unlock sets: Humans of Los Santos (all Special Characters), Ensemble Piece (all Story Characters), Cryptozoologist (all animal actors), and Location Scout (visit all Director Mode locations)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the story for the eleven mission markers (Welcome to Los Santos through The Big One!), then work the 100% checklist - the challenge sweeps (Show Off, Close Shave, Red Mist), the collectible strands (From Beyond the Stars, Waste Management, A Mystery, Solved), the property side strands, and the one-off feats - toward Career Criminal. Replay missions for Solid Gold, Baby!.",
                "In GTA Online, rank up toward Above the Law while ticking off the general activity achievements, then run the original heists (Be Prepared, Parole Day, In the Name of Science, Dead Presidents) and the Doomsday Heist (Getting Started, The Data Breaches, The Bogdan Problem, The Doomsday Scenario, A World Worth Saving, plus the challenge achievements).",
                "Finish with the Rockstar Editor and Director Mode set (Vinewood Visionary, Majestic, First Time Director, Animal Lover, Method Actor, Cult Movie, Humans of Los Santos, Ensemble Piece, Cryptozoologist, Location Scout)."
            ]
        }

    ]

};
