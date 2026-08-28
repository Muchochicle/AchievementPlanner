// Far Cry 5 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/far-cry-5.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   552520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below
//   (each description marks its mode: Solo Campaign / Campaign / Arcade /
//   DLC).
// - Sections group by what each achievement needs: main story and
//   regions, Hope County activities, the Arcade, campaign feats,
//   completion modes, and the three story DLCs.
export const GUIDE = {
    "slug": "far-cry-5-achievement-guide",
    "category": "game",
    "gameSlug": "far-cry-5",
    "icon": "🎣",
    "title": "Far Cry 5 Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Far Cry 5 - the main story and region markers, the Hope County activities (challenges, liberations, treasure hunts, stunts, collectibles), the Arcade set, the campaign combat and money feats, the completion-mode achievements, and the three story DLCs (Hours of Darkness, Lost on Mars, Dead Living Zombies).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Far Cry 5 has 72 Steam achievements and none are hidden. The base game is a mix of story markers, open-world activities and small combat/money feats; on top of that sit the Arcade (Far Cry's map-maker mode), the completion-mode achievements (Action Movie Mode, Survivor Mode, Infamous New Game+) and the three story DLCs.",
                "Nothing is missable - Hope County is a persistent open world and every activity, region and mode can be revisited or replayed - but the completion modes are effectively extra playthroughs, and the Dead Living Zombies DLC's DeceaZed to ExZist (5,000 kills) is a grind.",
                "Tip: play the base story once on Normal, mopping up activities, collectibles and treasure hunts region by region as you liberate each. Do the combat feats opportunistically, then knock out the Arcade block in a session, and finally the completion modes and DLCs."
            ]
        },
        {
            "heading": "Main Story & Regions",
            "body": [
                "The story markers: liberating Dutch's island, being deemed each Sin, the trials and Bliss beats, saving Deputy Hudson, the Marshal, Sheriff Whitehorse and Deputy Pratt, getting to the End, and helping Larry.",
                "The achievements here: The Spark (Complete the game intro by liberating Dutch’s island (Solo Campaign only).); You Are Wrath (Be deemed the Sin of Wrath (Solo Campaign only).); Special Delivery (Ensure a baby's safe passage into this world (Solo Campaign only).); Only You (Sucessfully complete the First Trial (Solo Campaign only).); Walk The Path (Discover the Bliss (Solo Campaign only).); Together Forever (Get to the End (Solo Campaign only).); Saving Deputy Hudson (Save Deputy Hudson (Solo Campaign only).); Blissful (Save the Marshal from the Bliss (Solo Campaign only).); Saving Sheriff Whitehorse (Save Sheriff Whitehorse (Solo Campaign only).); Saving Deputy Pratt (Save Deputy Pratt (Solo Campaign only).); Science Fact (Put aside skepticism and help Larry (Solo Campaign only).)."
            ]
        },
        {
            "heading": "Hope County Activities",
            "body": [
                "The open-world set: talking to 50 citizens, all Hunting & Fishing Challenges, liberating 5 locations, three treasure hunts, three side missions, a Clutch Nixon stunt in every region, one of every collectible, flying Nick's plane, destroying cult property in every region, a water-treatment pump, baiting Peaches home and triggering a Herald.",
                "The achievements here: Ain't No Wallflower (Who are these people? Speak to 50 citizens of Hope County (Solo Campaign only).); Been There, Done That (Complete all Hunting & Fishing Challenges (Campaign only).); Liberator (Liberate 5 locations from the Project at Eden's Gate (Campaign only).); Scavenger (Follow the clues to the end of 3 treasure hunts (Solo Campaign only).); What Now? (Complete 3 Side Missions in Hope County (Solo Campaign only).); The Greatest SOB That Ever Lived (Laugh in danger's face by executing a Clutch Nixon stunt in each region (Solo Campaign only).); Pack Rat (Grab 1 of each collectible item. You never know when it will come in handy (Solo Campaign only).); A Wing And A Prayer (Fly Nick's plane. Hopefully you're not afraid of heights (Solo Campaign only).); Troublemaker (Discover the joys of destroying cult property in every region (Solo Campaign only).); Sewer Rat (Destroy a cult water treatment pump and make them thirst for revenge (Solo Campaign only).); Peachy Keen (Bait Peaches into going back home (Solo Campaign only).); Kicking the Hornet's Nest (Trigger the wrath of a Herald (Solo Campaign only).)."
            ]
        },
        {
            "heading": "Arcade",
            "body": [
                "The Arcade-mode achievements: reaching level 20, playing Arcade Hero 5 times, 100 multiplayer kills, completing 10 featured maps in Solo/Co-op, and winning 10 featured maps in multiplayer.",
                "The achievements here: ARCADE Player (Reach level 20 in the Arcade (Arcade only).); ARCADE Hero (Play the 'Arcade Hero' mode 5 times (Arcade only).); ARCADE Hunter (Kill 100 enemies in Arcade Multiplayer maps (Arcade only).); ARCADE Enthusiast (Successfully complete 10 featured Arcade maps in Solo or Co-op (Arcade only).); ARCADE Competitor (Win 10 featured maps in Multiplayer (Arcade only).)."
            ]
        },
        {
            "heading": "Campaign Feats",
            "body": [
                "The combat and money feats: the Hurk vehicle-destruction bond, all 4 fishing rods, a fully customized weapon, a 150m headshot, 25 crafted recipes, clothing and vehicle spending, aerial and ground vehicle kills, distractions, wingsuit distance, 25 takedowns, sabotage kills, half of all perks, and 25 stealth kills with full survival instinct.",
                "The achievements here: The Hurk Locker (Truly bond with Hurk by destroying 15 vehicles together (Campaign only).); Hope County Master Angler (Acquire all 4 Fishing Rods (Campaign only).); Locked and Loaded (Fully customize your weapon (Campaign only).); Ghost Kill (Perform a Headshot kill with any bow or rifle on an enemy cultist more than 150m away (Campaign only).); Extra Crafty (Craft 25 recipes (Campaign only).); Fashion First (Purchase $1000 in clothing (Campaign only).); Big Spender (Spend $50000 in Vehicle Shops (Campaign only).); Stocked Garage (Buy 3 vehicles to populate your garage (Campaign only).); Ace Killer (Destroy 10 planes while driving any aerial vehicle (Campaign only).); Squash and Run (Run over and kill 20 enemies (Campaign only).); Fertilizing the Land (Using a tractor, obliterate 5 enemies (Campaign only).); Death From Above (Drop a bomb from a plane and destroy or disable 4 vehicles at once (Campaign only).); Opportunity Knocks (Using rocks or cans, distract 15 enemies (Campaign only).); Road Gunner (While driving or leaning out of a vehicle, kill 25 enemies (Campaign only).); Fish Market (Sell 20 fish for cash (Campaign only).); Where's the Beef? (Tenderize a bull with your bare hands. To death (Campaign only).); Ignoble Beasts (Kill a bison using only melee weapons (Campaign only).); Hitting it Off (Play 3 quests with a friend (Campaign only).); Like A Bird (Use a wingsuit to travel more than 5000m (Campaign only).); Close and Personal (Perform 25 close combat Takedown Kills (Campaign only).); Explosive Surprise (Sabotage 5 vehicles in a way that kills an enemy (Campaign only).); Survivalist (Purchase half of all perks available (Campaign only).); Silent Death (Perform 25 stealth kills while you have the 4 survival instinct tokens.)."
            ]
        },
        {
            "heading": "Completion Modes",
            "body": [
                "Completing the game (Wendell's Story), and the harder modes: Action Movie Mode (80s Hero), Survivor Mode (Roguelike), and Infamous-difficulty New Game+ (Infamous).",
                "The achievements here: 80s Hero (Complete the game in Action Movie Mode.); Wendell's Story (Complete the game.); Roguelike (Complete the game in Survivor Mode.); Infamous (Complete New Game+ with Infamous difficulty.)."
            ]
        },
        {
            "heading": "DLC (Hours of Darkness, Lost on Mars, Dead Living Zombies)",
            "body": [
                "Hours of Darkness (Vietnam): free the 3 POWs, 25 airstrike kills, and recovering your gear. Lost on Mars: Power Glove and Crabmone feats, Larry's notes, buying weapons, killing the Queens, the antenna reboot, and completing the game. Dead Living Zombies: the per-map feats, all 7 movie pitches, gold medals in Score Attack, and 5,000 total zombie kills.",
                "The achievements here: Leave no one behind (Free the 3 US prisoner of war.); Make them count (Kill a total of 25 enemies with airstrikes.); Welcome to Nam (Get back your gear at the helicopter crash site.); DLC: Mars:Bug Squasher (Perform 10 takedowns on Arachnids using the Power Glove.); DLC: Mars: Mars Second Amendment (Buy 12 weapons.); DLC: Mars: Martian Journal (Collect all of Larry's notes (Host Only).); DLC: Mars: Nick's Story (Complete the game (Host Only).); DLC: Mars: Slimy Death (Hit 10 Arachnids with Crabmones.); DLC: Mars: The Queen is Dead! (Kill all the Queens (Host Only).); DLC: Mars: Welcome to Mars (Reboot the Terminal on top of the Control Center Antenna.); DLC Zombies: FertiliZer (Kill 10 Gougers or Hot Heads with the tractor in Fields of Terror.); DLC Zombies: Early ExZit Denied (Try to escape the bridge early in Burned Bridges.); DLC Zombies: Blood Zragon (Kill the Blood Dragon in Killer Climate.); DLC Zombies: Killer BeeZ (Destroy all the Zom-bee nests in Laboratory of the Dead.); DLC Zombies: ReZolution (Complete all 7 movie pitches.); DLC Zombies: DeceaZed to ExZist (Kill 5000 total Gougers, Hot Heads, or Behemoths in any mode.); DLC Zombies: Gold MedaliZt (Get a gold medal in all 7 movie pitches in Score Attack.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base story once on Normal, liberating regions and clearing their activities, collectibles and treasure hunts as you go - this covers Main Story, most of Hope County Activities and many Campaign Feats.",
                "2. Do the remaining combat/money feats deliberately (Ghost Kill, Squash and Run, Fertilizing the Land, Where's the Beef?, etc.) and finish the fishing/hunting challenges.",
                "3. Do the Arcade block in one or two sessions - level 20, the map completions and the multiplayer wins.",
                "4. Play the three DLCs; grind DeceaZed to ExZist (5,000 zombie kills) across them.",
                "5. Do the completion modes last: an Action Movie Mode run, a Survivor Mode run, and Infamous New Game+ - a fast, focused route through the main story.",
                "Tip: 80s Hero, Roguelike and Infamous can be combined into fewer runs on some setups - check current guidance, but at minimum plan them as lean main-story-only playthroughs rather than full completionist runs."
            ]
        }
    ]
};
