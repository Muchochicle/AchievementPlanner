// Batman: Arkham City Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/batman-arkham-city.json), whose 64
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 200260 (Game of the Year Edition) via
//   ISteamUserStats/GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js). None are hidden; every one ships a
//   real, official Steam description, quoted verbatim below (the story
//   achievements' descriptions are already deliberately vague one-liners
//   from Rocksteady).
// - Sections group by what each achievement needs: main story and side
//   missions, the Riddler, collectibles/upgrades/combat, the challenge
//   maps, and completion/New Game Plus/DLC.
export const GUIDE = {
    "slug": "batman-arkham-city-achievement-guide",
    "category": "game",
    "gameSlug": "batman-arkham-city",
    "icon": "🦇",
    "title": "Batman: Arkham City Achievement Guide",
    "summary": "A practical guide to all 64 Steam achievements in Batman: Arkham City (Game of the Year Edition) - the main story and side-mission markers, the Riddler hostage rescues and trophy grind, the collectible / upgrade / combat feats, the Riddler's Revenge challenge-map medal tiers, and the completion, New Game Plus and Harley Quinn's Revenge DLC achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Batman: Arkham City (Game of the Year Edition) has 64 Steam achievements and none are hidden. The main story and side missions are straightforward; the real work is the Riddler trophy hunt (needed for the hostage-rescue achievements and Perfect Knight - Day 2), the challenge-map medal grinds for Batman, Catwoman, Robin and Nightwing, and a full New Game Plus.",
                "Almost nothing is missable - chapter and side content can be revisited in the open world, and challenge maps replay freely - except the Catwoman-thread choice near the end and a couple of one-shot combat setups; New Game Plus is a separate save.",
                "Tip: do the main story first, then clean up the Riddler trophies and side missions with an interactive map. Save Perfect Knight - Day 2 for after everything else (it checks every category), and grind the challenge-map medals character by character."
            ]
        },
        {
            "heading": "Main Story & Side Missions",
            "body": [
                "The campaign and side-mission markers, described by their objective only - the opening, the story set-pieces, the assassins and named villains, the Watcher in the Wings, the phone-booth and serial-killer side missions, and the AR training.",
                "The achievements here: I'm Batman (Become the Bat); Acid Bath (Save the damsel, but is she in distress?); Savior (Save the medical volunteers); Chimney Sweep (There is only one way in); One-Armed Bandit (Hammer the point home); Communication Breakdown (Clear the airwaves); Gladiator (Last man standing); Wrecking Ball (Stop the unstoppable); Lost And Found (Uncover the secret of Arkham City); Sandstorm (We are legion); Hide And Seek (A deadly game of hide and seek); Ghost Train (Fight for survival); Freefall (Don't look down); Exit Stage Right (All the world is a stage); Contract Terminated (Stop the contract operative); Serial Killer (Track down the serial killer); Mystery Stalker (Reveal the mystery watcher); Broken Toys (Destroy it all); Dial Z For Murder (Stop the phone booth killer); Stop the Clock (Time is running out); Bargaining Chip (Reunite the separated couple)."
            ]
        },
        {
            "heading": "The Riddler",
            "body": [
                "Solving your first riddle, rescuing each of the five hostages from the Riddler (Conundrum through Brainteaser) and all of them (Genius), and completing all 40 Catwoman Riddler grid items (Sphinx' Riddle).",
                "The achievements here: IQ Test (Solve the first riddle); Conundrum (Rescue the first hostage from Riddler); Mastermind (Rescue the second hostage from Riddler); Puzzler (Rescue the third hostage from Riddler); Intellectual (Rescue the fourth hostage from Riddler); Brainteaser (Rescue the fifth hostage from Riddler); Genius (Rescue all the hostages from Riddler); Sphinx' Riddle (Complete all 40 of the Catwoman Riddler grid items)."
            ]
        },
        {
            "heading": "Collectibles, Upgrades & Combat Feats",
            "body": [
                "Completing all AR training (AR Knight), collecting every gadget and upgrade (Fully Loaded), stopping all assaults (Aggravated Assault), and the combat feats: a no-damage combat challenge, a perfect combo using every move, and five different Quickfire gadgets in one fight.",
                "The achievements here: AR Knight (Complete all augmented reality training exercises); Fully Loaded (Collect all of Batman's gadgets and upgrades); Aggravated Assault (Stop all assaults in Arkham City); Flawless Freeflow Fighter 2.0 (Complete one combat challenge without taking damage (any character)); Perfect Freeflow 2.0 (Perform a perfect combo including all of Batman's combat moves (any play mode)); Gadget Attack (Use 5 different Quickfire gadgets in one fight  (any play mode))."
            ]
        },
        {
            "heading": "Challenge Maps (Riddler's Revenge)",
            "body": [
                "The medal grinds on the Riddler's Revenge challenge maps and campaigns: the Bronze/Silver/Gold tiers as Batman, and the full medal sets as Catwoman, Robin and Nightwing (including the Bundle Pack maps).",
                "The achievements here: Bronze Revenge (Obtain 24 medals on the original Arkham City maps (as Batman)); Silver Revenge (Obtain 48 medals on the original Arkham City maps (as Batman)); Gold Revenge (Obtain all 72 medals on the original Arkham City maps (as Batman)); Campaign Bronze (Obtain 36 medals on the original Arkham City campaigns (as Batman)); Campaign Silver (Obtain 72 medals on the original Arkham City campaigns (as Batman)); Campaign Gold (Obtain all 108 medals on the original Arkham City campaigns (as Batman)); Feline Revenge (Obtain all 72 medals on the original Arkham City maps (as Catwoman)); Campaign Kitty (Obtain all 108 medals on the original Arkham City campaigns (as Catwoman)); Robin Revenge (Obtain 78 medals on the original Arkham City and Robin Bundle Pack maps (as Robin)); Campaign Wonder (Obtain 114 medals on the original Arkham City and Robin Bundle Pack campaigns (as Robin)); Nightwing Revenge (Obtain 78 medals on the original Arkham City and Nightwing Bundle Pack maps (as Nightwing)); Campaign Nightwing (Obtain 114 medals on the original Arkham City and Nightwing Bundle Pack campaigns (as Nightwing))."
            ]
        },
        {
            "heading": "Completion, New Game Plus & DLC",
            "body": [
                "Completing New Game Plus (Twice Nightly), Pay Your Respects, the 12 Calendar Man visits (Storyteller), Perfect Knight - Day 2 (every category complete), the Catwoman episodes (Arkham City Sirens, Pick Pocket, Family Jewels, Lost Property), and the Harley Quinn's Revenge DLC (Breaking and Entering, How's It Hanging?, The Last Laugh, Frequent Flyer, Battering Ram, Snap To It, Bomb Squad, A Few New Tricks, Party's Over).",
                "The achievements here: Twice Nightly (Complete New Game Plus); Pay Your Respects (A moment of remembrance); Storyteller (Have 12 murderous dates with Calendar Man); Perfect Knight - Day 2 (Complete every challenge in Arkham City - Main Story, Side Missions, Upgrades, Collectables, New Game Plus and Riddlers Revenge (as Batman)); Arkham City Sirens (Drop in on an old friend); Pick Pocket (Steal the score of a lifetime); Family Jewels (Retrieve your stolen goods); Lost Property (No crimefighter should be without this); Breaking and Entering (Find a way into the secret base); How's It Hanging? (Clean up the Dry Docks); The Last Laugh (The joke's on who?); Frequent Flyer (Zip Kick 5 different thugs); Battering Ram (Shield Bash 5 different thugs); Snap To It (Snap Flash an unarmed thug, an armed thug, an environmental object and a Titan); Bomb Squad (Defuse all bombs in 3 minutes or less); A Few New Tricks (Use 5 different Quickfire gadgets in one fight as Robin in Harley Quinn's Revenge); Party's Over (Destroy all Harley Balloons)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story to credits, doing the Catwoman episodes as they unlock and grabbing story/side achievements naturally.",
                "2. Do the side missions (phone-booth killer, serial killer, the assassins) and clean up all Riddler trophies with an interactive map - this unlocks the hostage-rescue chain and Sphinx' Riddle.",
                "3. Finish the collectible/upgrade achievements (Fully Loaded, AR Knight, Aggravated Assault) and Storyteller (12 Calendar Man dates, one real day apart or via system-clock changes).",
                "4. Do the Harley Quinn's Revenge DLC for its nine achievements.",
                "5. Grind the challenge-map medals one character at a time, then do New Game Plus, and finish on Perfect Knight - Day 2.",
                "Tip: Storyteller needs 12 visits to Calendar Man on 12 different in-game dates - changing your PC's system clock between visits is the standard way to avoid waiting 12 real days."
            ]
        }
    ]
};
