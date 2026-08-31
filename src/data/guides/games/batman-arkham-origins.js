// Batman: Arkham Origins Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/batman-arkham-origins.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   209000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "batman-arkham-origins-achievement-guide",
    "category": "game",
    "gameSlug": "batman-arkham-origins",
    "icon": "🦇",
    "title": "Batman: Arkham Origins Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Batman: Arkham Origins (6 hidden). Covers the six hidden main-story beats, the Gotham crime and collectible sweeps, the combat, predator and Dark Knight challenges, New Game Plus and the (now server-dependent) multiplayer set, and the Cold, Cold Heart add-on.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Batman: Arkham Origins has 60 Steam achievements and six are hidden - all six are automatic story beats: identifying Black Mask's assassins (City of Assassins), defeating Deathstroke (One eye open), learning who the Joker is (Nobody that matters), finding the Black Mask (Everyone wears masks), saving a life (One Rule), and defeating the Joker (Perhaps sooner, Perhaps later). The rest are open: the Enigma/Extortion collectible and tower sweeps, the Most Wanted side-missions, the combat, predator and gadget feats, the Dark Knight challenge tracks, the New Game Plus and 'I Am The Night' clears, a block of multiplayer achievements, and the Cold, Cold Heart add-on.",
                "The catalog marks it roughly two playthroughs - a normal run plus New Game Plus - and difficulty 4 chiefly because of 'I Am The Night' (finish the whole campaign without dying once) and the multiplayer achievements, whose official servers are unreliable years after release. The story itself and everything else is not missable; collectibles and challenges can be mopped up freely after the credits.",
                "Tip: do 'I Am The Night' as your New Game Plus run once you know the game and have every upgrade - it covers 'Give Them Something to Believe', 'I Am The Night' and most combat feats in one pass."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The six automatic story beats, in order - identifying Black Mask's assassins, defeating Deathstroke, learning who the Joker is, finding the Black Mask, saving a life, and defeating the Joker.",
                "The achievements here: City of Assassins (Story: identify each of Black Mask's assassins.); One eye open (Story: defeat Deathstroke.); Nobody that matters (Story: discover who the Joker is.); Everyone wears masks (Story: find the Black Mask.); One Rule (Story: save a life.); Perhaps sooner, Perhaps later (Story: defeat the Joker.)."
            ]
        },
        {
            "heading": "Gotham Crime & Collectibles",
            "body": [
                "Shutting down a tower network, deciphering an Extortion file, collecting all Enigma items and every collectible, completing a Most Wanted entry, capturing all of Black Mask's assassins, the three Dark Knight tracks (Shadow Vigilante, Gotham Protector, Worst Nightmare), the World's Greatest Detective track, all Dark Knight challenges, all Casefiles, 20 Crimes in Progress, and hearing everything Alfred has to say.",
                "The achievements here: Shut Down (Shut down an entire Tower Network); Counter-intelligence (Decipher one Extortion File); Enigma Unravelled (Collect all Enigma items); First Riddler Trophy (Collect every collectible); One down, several to go (Complete a Most Wanted entry); The Innocent and the Predatory (Capture all of Black Mask's Assassins); Shadow Vigilante (Master the Shadow Vigilante Dark Knight track); Gotham Protector (Master the Gotham Protector Dark Knight track); Worst Nightmare (Master the Worst Nightmare Dark Knight track); World's Greatest Detective\t (Master the World's Greatest Detective Dark Knight track\t); Legend of the Dark Knight (Complete all Dark Knight challenges); Crime Scene Investigator (Complete all Casefiles); Crime Fighter (Stop 20 Crime in Progress); Thanks, old friend (Hear everything Alfred has to say)."
            ]
        },
        {
            "heading": "Combat, Predator & Challenges",
            "body": [
                "The Combat Training and Custom-map medals, all upgrades, an x50 combo, the flawless-predator and silent-takedown feats, the Bridge glide, Batwing fast-travel, the no-damage Shiva fight, the no-fail Deathstroke fight, using every Freeflow Focus gadget in one combo, the 26-mile glide, the Ranked and Campaign challenge medals, scanning 20 Anarky tags, and completing all Most Wanted missions.",
                "The achievements here: Personal Trainer (Obtain all the medals on Combat Training maps); Perfectionist (Obtain all the medals on Custom maps in Challenge mode); I've Got This (Acquire all upgrades); Free Flow Fifty (Reach x50 Combo); Anyone see that? (Complete a predator encounter without ever being spotted); What hit me? (Take down 100 enemies who didn't know you were there); Silent Knight (Complete a predator encounter using only silent takedowns); Point to Point (Glide across Bridge without touching ground); Around the World (Use the Batwing to travel to all Fast Travel points); Flawless Display (Successfully battle Shiva without taking any damage); Point Counter-Point (Complete Deathstroke without failing a single counter); One of Each (Use every Freeflow Focus gadget in one combo); Air Marathon (Glide 26 miles total); Medalist (Obtain all medals on the original Ranked Maps in Challenge mode (as Batman)); Olympian (Obtain all medals on the original Campaign maps in Challenge mode (as Batman)); Voice of the People (Scan 20 Anarky Tags); Clean Streets (Complete all Most Wanted missions)."
            ]
        },
        {
            "heading": "New Game Plus & Multiplayer",
            "body": [
                "Completing New Game Plus, finishing 'I Am The Night' mode, and the multiplayer set - the Joker and Bane faction max levels, max overall level, the Predator Paragon and Clutch feats, winning a round of each map with each faction, and several per-match challenges (these need the online servers to be up).",
                "The achievements here: Give Them Something to Believe (Complete New Game Plus); I Am The Night (Finish I Am The Night Mode); Predator Paragon (Take down 6 different Elites in a match, using 6 different methods as Batman or Robin in multiplayer); Killing Joke (Reach max level with the Joker faction in multiplayer); Fallen Knight (Reach max level with the Bane faction in multiplayer); Gotham All-Star (Reach max overall level in multiplayer); Clutch (Kill a Hero to bring back your entire gang when at 0 reinforcements on a full multiplayer server); Tales of Gotham (Win a round of each map with each faction in multiplayer); I Like Those Odds (As a Hero, defeat 4 Elites within 40 seconds without using melee in multiplayer); Not An Ordinary Criminal (As an Elite, earn 4000 XP in a single multiplayer match); Arsenal, Awesome (Fully upgrade a weapon in multiplayer); Legend (Earn a level of prestige in multiplayer); Know Thy Enemy (Defeat each of the enemy players at least once in a multiplayer match)."
            ]
        },
        {
            "heading": "Cold, Cold Heart",
            "body": [
                "The Cold, Cold Heart add-on - the no-damage Bruce Wayne section, receiving the XE Suit, assembling the cryodrill, stopping Mr. Freeze and bringing Boyle to justice, all Activist tags, freeing all frozen civilians, stopping Anarky in South Gotham, and the freeze/stalactite/ice-wall combat feats.",
                "The achievements here: Master Wayne (Take no damage when playing as Bruce Wayne); Let it Snow (Receive the Extreme Environment Suit (XE Suit)); Drilling for Justice (Assemble the cryonucleation tunneller - the cryodrill); For Auld Lang Syne (Stop Freeze and bring Boyle to justice); Paint the Town Red (Find all Activist tags in Cold, Cold Heart); Breaking the Ice (Free all civilians frozen in cryogenic ice); Down with the Revolution (Stop Anarky thug operations in South Gotham); Snowjob (Get 3 enemies frozen in one attack); Stalact-tactician (Takedown 2 enemies with one stalactite); Come Out of the Cold (Perform 3 ice wall takedowns)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through on a normal difficulty, letting the six story beats unlock as you go.",
                "2. Mop up the Enigma datapacks/relays, Extortion files, Anarky tags and Most Wanted missions in the open world.",
                "3. Do the Dark Knight challenge tracks and the AR / Combat Training / Challenge-mode medals.",
                "4. Play the Cold, Cold Heart add-on and its feats.",
                "5. Start New Game Plus as an 'I Am The Night' run for the two clear achievements and most combat feats.",
                "Tip: for 'I Am The Night', keep to predator takedowns and avoid optional fights - a single death restarts the whole mode, so bank progress by finishing chapters rather than chasing side content."
            ]
        }
    ]
};
