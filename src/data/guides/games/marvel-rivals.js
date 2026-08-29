// Marvel Rivals Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/marvel-rivals.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2767030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "marvel-rivals-achievement-guide",
    "category": "game",
    "gameSlug": "marvel-rivals",
    "icon": "🦸",
    "title": "Marvel Rivals Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Marvel Rivals - general & progression, hero challenges - part 1, hero challenges - part 2, hero challenges - part 3.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Marvel Rivals has 49 Steam achievements and none are hidden. Seven are general progression or social goals; the other 42 are one per playable hero - \"as <hero>, do <a signature thing>\" - almost all of which can be done in Quick Play or against bots in a private lobby with practice-range-style setups.",
                "Nothing is missable and every achievement is account-wide, so you can chip away at the hero list over time. Because Marvel Rivals keeps adding heroes, the 49 count is a snapshot of the achievement schema at the time this guide was written; the method below (one focused game per hero) applies to any later additions too.",
                "Tip: most hero achievements want a single big Ultimate hit (3-4 enemies, or 3 KOs, in one cast). Queue that hero, build to Ultimate, and wait for the enemy team to group on a payload or point before firing - or set up a Custom Game vs. AI to remove the pressure entirely."
            ]
        },
        {
            "heading": "General & Progression",
            "body": [
                "The non-hero achievements: the social and customisation taps, reaching account level 20, landing multi-KO streaks, winning 100 matches, playing with a friend, and completing an Arcade match.",
                "The achievements here: Thumbs Up (Upvote 1 player.); You Do You (Use the customizable wheel once.); Rising Star (Reach level 20.); Onslaught! (Land a 3-player KO streak.); Inevitable！ (Win 100 matches.); Assemble! (Team up with a friend for a match.); Master of Modes (Complete 1 Arcade match.)."
            ]
        },
        {
            "heading": "Hero Challenges - Part 1",
            "body": [
                "One achievement per hero (first group, in schema order): Groot, the Punisher, Rocket Raccoon, Adam Warlock, Bruce Banner, Storm, Loki, Doctor Strange, Mantis, Hawkeye, Captain America, Hela, Cloak & Dagger and Black Panther.",
                "The achievements here: Vicious Vines (As Groot, imprison 4 enemies with a single use of Strangling Prison.); Smoke Screen (As the Punisher, land 3 KOs amidst the smoke of Scourge Grenade in a single game.); Go Get 'Em, Guardians!  (As Rocket Raccoon, revive the Guardians of the Galaxy members 5 times.); Family Ties (As Adam Warlock, forge a soul bond with 3 allies from the Guardians of the Galaxy.); Smart Is New Smash (As Bruce Banner, land 1 KO within 3 seconds of calming down from the Hulk to Banner.); To Me, My X-Men! (As Storm, assist X-Men members 10 times.); God of Treachery (As Loki, land one KO by stabbing from behind.); Perilous Portal (As Doctor Strange, land 1 terrain KO with the portal.); Victory in Bloom (As Mantis, assist allies in achieving a team wipe.); West Coast, Best Coast (As Hawkeye, partner with the Avengers to land 10 KOs.); Justice for All!  (As Captain America, land 3 KOs with a single use of Freedom Charge.); Terror of the Ten Realms (As Hela, land a 3-player KO streak in Yggsgard: Yggdrasill Path.); Symphony of Light and Dark (As Cloak & Dagger, assist allies in achieving a team wipe.); King of the Dead (As Black Panther, land a 3-player KO streak in the Intergalactic Empire of Wakanda: Hall of Djalia.)."
            ]
        },
        {
            "heading": "Hero Challenges - Part 2",
            "body": [
                "One achievement per hero (second group): Magik, Moon Knight, Luna Snow, Squirrel Girl, Black Widow, Iron Man, Venom, Spider-Man, Magneto, Scarlet Witch, Thor, Winter Soldier, Peni Parker and Star-Lord.",
                "The achievements here: Demon's Roar (As Magik, land 3 KOs within a single transformation into Darkchild.); Punishment of the Moon (As Moon Knight, hit 4 enemies with a single use of Hand of Khonshu.); Multiverse Tour (As Luna Snow, complete a match on 5 maps with different themes.); \"Ahhh, those tiny claws!\" (As Squirrel Girl, land 3 KOs with a single use of Unbeatable Squirrel Tsunami.); Deadly Bites (As Black Widow, land 3 KOs with critical hits in a single match.); Flawless Design (As Iron Man, hit 4 enemies with a single use of Invincible Pulse Cannon.); Grip of Hunger (As Venom, snare 4 enemies with a single use of Cellular Corrosion.); Spider-Sense Tingling! (As Spider-Man, detect an enemy with Spider-Sense and land a winning counterattack.); Homo Superior (As Magneto, assist Mutant allies 10 times.); No More Mutants (As Scarlet Witch, take down Mutant enemies 10 times.); Divine Justice (As Thor, strike down 4 enemies with a single use of God of Thunder.); Arm Race (As Winter Soldier, land 3 KOs with a single use of Kraken Impact.); Watch Your Step! (As Peni Parker, blast 3 enemies with a single use of Arachno-Mine.); Vengeance for the Milano! (As Star-Lord, land 10 KOs with assists from the Guardians of the Galaxy.)."
            ]
        },
        {
            "heading": "Hero Challenges - Part 3",
            "body": [
                "One achievement per hero (third group): Namor, Jeff the Land Shark, Psylocke, Wolverine, Iron Fist, Mister Fantastic, Invisible Woman, Human Torch, the Thing, Emma Frost, Ultron, Phoenix, Blade and Angela.",
                "The achievements here: Aquatic Assault (As Namor, summon Monstro Spawn to land 10 KOs in a single game.); Snack Attack! (As Jeff the Land Shark, swallow 4 enemies with a single use of It's Jeff!); Way of the Butterfly (As Psylocke, contest the mission area for 60 seconds in a single match.); Rage Uncaged (As Wolverine, land 3 KOs with a single use of Last Stand.); Might of Fuxi (As Iron Fist, land 3 KOs with a single use of Living Chi.); Bouncing Ideas (As Mister Fantastic, bounce 5 times with a single use of Brainiac Bounce.); Lady of the House (As Invisible Woman, assist the Fantastic Four members 10 times.); Hot & Trending (As Human Torch, land 3 KOs with a single use of Supernova.); What Time Is It? (As the Thing, knock up 4 enemies with a single use of Clobberin' Time.); Schism from Within (As Emma Frost, force mutants to move 10 times with Psionic Seduction.); No More Strings (As Ultron, take down Avengers members 10 times.); Wish Upon a Phoenix (As Phoenix, strike 4 enemies with a single Endsong Inferno landing.); Old Haunts (As Blade, land a 3-player KO streak in Empire of Eternal Night: Central Park.); Hand of Heven (As Angela, snare 4 enemies with a single use of Heven's Retribution.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game normally for a while - Thumbs Up, You Do You, Assemble!, Master of Modes and Rising Star (level 20) all come almost immediately, and Inevitable! (100 wins) and Onslaught! accumulate on their own.",
                "2. Work the hero list a few at a time: pick a hero, read its achievement, and play two or three games focused only on that condition (usually one good Ultimate).",
                "3. Mop up the awkward ones (single-transformation multi-KOs, terrain KOs, 60-second area contests) in a Custom Game against AI where you control the tempo.",
                "Tip: the \"assist X faction 10 times\" achievements (Storm, Magneto, Hawkeye, Invisible Woman) just need teammates from that faction in your games - queue with a friend on a themed team, or play them in quick succession when the game auto-fills those heroes."
            ]
        }
    ]
};
