// Death Must Die Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/death-must-die.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2334730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "death-must-die-achievement-guide",
    "category": "game",
    "gameSlug": "death-must-die",
    "icon": "💀",
    "title": "Death Must Die Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in Death Must Die - none are hidden. Covers class-specific unlock trees for all 7 heroes, boss kills, and difficulty-tier and general combat trophies. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Death Must Die has 59 Steam achievements and none are hidden. Most are class-specific unlock trees - 5 to 7 achievements per hero (Avoron, Merris, Nixi, Kront, Skadi, Lorien, Leaf) for kill counts, boss kills, talent and blessing wins, and other class-specific feats. The rest are general trophies - boss kills (the Baron, the Djinn, the Lady), difficulty-tier wins up to Difficulty 10, killing thousands of Skeletons and Oozes, and a no-damage win.",
                "The catalog marks it difficulty 3. Death Must Die is a Greek-myth bullet-heaven roguelite; most achievements come from just playing every class through several runs, though the Difficulty 10 win and the no-damage win are genuine skill checks.",
                "Tip: work through each hero's unlock achievements in turn rather than maining one character - most of the class trees only take a handful of runs each."
            ]
        },
        {
            "heading": "Class Unlocks: Avoron, Merris, Nixi, Kront & Skadi",
            "body": [
                "Kill counts, boss kills, talent and blessing wins for Avoron the Knight, Merris the Sorceress, Nixi the Assassin, Kront the Barbarian and Skadi the Warrior.",
                "The achievements here: The Sign of The Hero (Kill 500 Skeletons with Avoron); What Have You Done To My Pets? (Defeat The Gargoyles with Avoron); The Hourglass of Time (Lose 9 times as Avoron); Vampire Slayer (Defeat The Baron with Avoron); Bastion of Knowledge (Win an attempt with Avoron using the Grand Archon talent.); The Sign of Fire (Deal 100000 Damage with Merris); No Backtalk (Defeat the chatty skeleton 33 times with Merris); Training a Dragon (Win an attempt as Merris using the Pet Dragon talent.); What Sorcery is This? (Get 4 different Cast Blessings as Merris); Start a Party! (Get 40 summons with Merris); The Sign of The Assassin (Defeat The Gargoyles under 20 Seconds with Nixi); Deadly Precision (Deal a total of 2000 Critical Damage with Nixi); Grasshopper (Get 4 Dashes with Nixi); Pocket Change (Collect 1000 gold in an attempt as Nixi); Blessed By Fate (Win an attempt as Nixi using the Serendipity blessing from the Fates); The Sign of The Tornado ( Kill 25 enemies with a single strike with Kront); Shieldbreaker (Destroy an elite enemy's barrier with a single strike with Kront); Arms Still Strong (Deal a critical of 400 damage with Kront); Scrap Metal (Defeat 50 Shielders with Kront); Rocks to the Face (Win an attempt as Kront using the Rock Shield blessing from Ninh); The Sign of The Quest (Traverse 30000 distance with Skadi); The Apprentice (Level up to 30 with Skadi); Jack of All Trades (Apply 5 different statuses in an attempt with Skadi); Pest Control (Kill 25 Summoners with Skadi); Nothing But A Scratch! (Heal 999 life with Skadi)."
            ]
        },
        {
            "heading": "General Trophies & More Class Unlocks",
            "body": [
                "Killing thousands of Skeletons and Oozes, a no-damage win, defeating 50 Summoners, wins at Difficulty 5 and Difficulty 10, defeating the Baron, more Knight/Sorceress/Assassin/Barbarian/Warrior talent unlocks, all of Lorien the Ranger's unlocks, reaching the Darkmoor waypoint, and defeating the Djinn and the Lady.",
                "The achievements here: A Thousand Bones (Defeat 6000 Skeletons); Jelly (Defeat 4000 Oozes); Ghost Matter (Win an attempt without taking damage); The Summoner (Defeat 50 Summoners); Obsidian (Win an attempt at 5 Difficulty); A Black Heart (Win an attempt at 10 Difficulty); A Stake For A Vampire (Defeat the Baron); By the Holy Light! (Win an attempt as Avoron using the Light Rays blessing from Lady Justice); Pilgrim (Travel to 40 different locations in an attempt as Avoron.); There Is No Fork (Win an attempt as Merris using the Telekinesis talent); Electrifying Presence (Win an attempt as Merris using the Charged Field talent); Nocturnal (Win an attempt as Nixi using the Endless Night talent); Toxic! (Win an attempt as Nixi using the Mind Reaper talent); I Warned You! (Win an attempt as Kront using the Rampage talent); Legend vs Legend (Defeat The Djinn as Kront); Good Boys (Win an attempt as Skadi using the wolves); I Can Do This! (Win an attempt as Skadi with Darkness); The Sign Of Excellence (Level up to 40 as Lorien); Saving The Day (Kill 1000 Skeletons as Lorien); Bruised Ego (Lose an attempt as Lorien); Killer Queen (Defeat The Insect Queen as Lorien); Well Travelled (Traverse 50000 distance as Lorien); Showoff (Win an attempt as Lorien using the Bask in Greatness talent); I Just Need One Arrow (Win an attempt as Lorien using the Whistling Arrow talent); Enter The Darkmoor (Go through the waypoint to The Darkmoor); Out Of Wishes (Defeat the Djinn); The Lady Bows Her Head (Defeat the Lady)."
            ]
        },
        {
            "heading": "Leaf the Druid",
            "body": [
                "Leaf's full unlock tree - wins using the Bear form, the Panther form, the Vampirism blessing, defeating 50 Treefolk, a win without using any locations, defeating your shadow self, and a win with 3 different Dash blessings.",
                "The achievements here: Bearly a Scratch (Win an attempt as Leaf using the Bear form); Catnip (Win an attempt as Leaf using the Panther form); Satiated (Win an attempt as Leaf using the Vampirism blessing from Mort); Cut The Traitors (Defeat 50 Treefolk as Leaf); No Handouts (Win an attempt without using any locations as Leaf); Face Yourself (Defeat your shadow self as Leaf); Breaking The Rules  (Win an attempt as Leaf with 3 different Dash blessings)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Try every hero over a handful of runs each - Avoron, Merris, Nixi, Kront, Skadi and Lorien all have similar 5-7 achievement unlock trees.",
                "2. Push into higher Difficulty tiers as you get comfortable, working up to a Difficulty 10 win.",
                "3. Take down the general bosses - the Baron, the Djinn, and the Lady - and rack up Skeleton and Ooze kill counts.",
                "4. Unlock and play Leaf the Druid for their own 7-achievement tree, including the Bear and Panther forms.",
                "5. Once you're skilled enough, go for a no-damage win for Ghost Matter.",
                "Tip: the class-specific achievements are usually tied to a particular blessing or talent, so read each one before a run and plan your build around it rather than hoping it comes up naturally."
            ]
        }
    ]
};
