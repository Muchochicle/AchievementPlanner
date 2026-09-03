// Mina the Hollower Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mina-the-hollower.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1875580 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mina-the-hollower-achievement-guide",
    "category": "game",
    "gameSlug": "mina-the-hollower",
    "icon": "🕯️",
    "title": "Mina the Hollower Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Mina the Hollower (1 hidden). The one hidden achievement is a disturbing dance scene from a hidden merchant side quest. Everything else - the story and New Game Plus completions, the Spark Generator bosses, the shop and fishing milestones, and a long list of weapon and Trinket 'Feats' - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mina the Hollower has 50 Steam achievements, 1 of them hidden. From the makers of Shovel Knight, it is a Game Boy-styled action-adventure where Mina burrows and fights to restore a cursed island's Spark Generators. The visible achievements cover reaching the ending and finishing New Game Plus, unlocking all Weapons / Trinkets / Cloaks / Upgrades, defeating Thorne and the minibosses, restoring the Spark Generators, the shop and fishing milestones, the minigame challenges, the challenge-modifier and speedrun clears, and a long list of weapon- and Trinket-specific 'Feats' (each a clever use of one item), plus 'Feat Accompli' for earning them all.",
                "The 1 hidden achievement, 'Traumatized', is watching the Grinnsly dance scene at the end of the hidden Poppit merchant side quest.",
                "The catalog marks it difficulty 3 (the Feats and modifier runs are demanding) and two playthroughs (New Game Plus is required). The Feats are not missable - equipment and enemies are replayable."
            ]
        },
        {
            "heading": "Story & Progression",
            "body": [
                "Reaching the ending, New Game Plus, unlocking all equipment and upgrades, Thorne, the minibosses, the Spark Generators, the shop and fishing milestones, the minigames, and the challenge-modifier and speedrun clears - plus the hidden Poppit dance scene.",
                "The achievements here: Hollow Victory (Reach the conclusion of the game.); Fully Equipped (Unlock all Weapons, Trinkets, Cloaks, and Upgrades.); Hollowin' Again! (Finish the game in New Game Plus.); Thorne Beater (Defeat Thorne for the first time.); Sparks of Genius (Restore half of the Spark Generators.); Big Spender (Spend a combined 50,000 Bones in shops.); First Purchase (Buy your first item.); Fishin' Reactor (Acquire all trophies on the Fish Board.); Renegade Roundup (Defeat Armand, Maxi, Willis, the Dugin, and Evra.); Minigame Master (Master all Racing, Ring Dive, and Wrecker challenges.); Hardifier (Finish the game with 3 active Hard Modifiers.); Weirdifier (Finish the game with 3 active Weird Modifiers.); Speed Runner (Complete the game in under 4 hours.); Untouchable (Defeat a Spark Generator boss without taking damage.); Bone Pincher (Finish the game without spending any Bones in shops.); Bone Keeper (Complete the game without ever losing your Bones.); Off the Grid (Finish the game without ever entering the Underlab.); Traumatized (Complete the hidden Poppit merchant side quest - buy from every hidden Poppit shop - and watch the disturbing Grinnsly dance scene.); Masochist (Defeat a boss while wearing exactly 3 Beastium Trinkets.); Pawned Off (Sell the maximum number of items at Pawnty's Exchange.); Bonestone Tycoon (Convert over 20,000 in the Bone Sinterer in one go.); Lopsided (Raise one stat to 10 while keeping all others at 3 or below.); Below Zero (Finish the game with -1% Collection or less.); Trash Juggler (Knock the kids' can below the bottom of the bridge.); Opossum Impressem (Show Lena that you can clear 10 tiles without touching the ground.); Feat Accompli (Earn all other Feats.)."
            ]
        },
        {
            "heading": "Weapon Feats",
            "body": [
                "The one-off clever-use Feats for each Weapon - the Iron Steed hops, Bounding Bombs, Hollower's Rocks, Volt Hatchet, Gyro Dagger, Recall Disc, Drill Driver, Dynamo Lantern, Deflector Parasol, Beckoning Collar, Gnawing Ghosts, Mist Jar, Fog Thrower, Dread Mace, Blaststrike Maul, Whisper & Vesper, Guardian Casket, Battery Buster.",
                "The achievements here: Steed Hopper (Using the Iron Steed, hop on 3 enemies' heads without touching the ground.); Drag Race (Ride the Iron Steed across 6 unique screens without doubling back.); Bounding Bonanza (Kill an enemy with a Bounding Bomb explosion, after both orbs bounce 3 times.); Skippin' Stone (Kill an enemy across 8 tiles of water using the Hollower's Rocks.); Four-Point Hatchet (Hit 4 enemies, one with each spark of a single Volt Hatchet.); Boomerang Blade (Kill 2 foes with a single Gyro Dagger, changing its direction with each strike.); Wormhole (Kill an enemy after warping from offscreen with the Recall Disc.); Bashful (Strike 3 enemies with one charge of the Drill Driver.); Light 'em Up (Avoid a certain fate in the darkness by using the Dynamo Lantern.); Pitfall Parasol (Knock multiple enemies into a pit using a single Deflector Parasol.); Beckoning Buddy (Keep the Beckoning Collar creature active for most of a boss fight.); Haunting Reach (Hit a foe from 25 tiles away using the Gnawing Ghosts.); Mist Glide (Use the Mist Jar to phase through 3 enemies in one use.); Fogburst (Eliminate 6 enemies using one continuous spray of the Fog Thrower.); Tip Tapper (Kill 10 enemies in a row using Nightstar's Dread Mace upgrade, hitting only with the tip.); Hammerama (Defeat a boss using only fully charged attacks from the Blaststrike Maul.); Sniper Dagger (Kill a boss with Whisper and Vesper thrown from across the screen.); Perfect Guard (Parry 15 consecutive attacks with the Guardian Casket.); Buster Bounce (Defeat 3 enemies in a row with only double bank shots using the Battery Buster.)."
            ]
        },
        {
            "heading": "Trinket Feats",
            "body": [
                "The one-off Feats tied to Trinkets - the Chain Capacitor, Shock Flint, Plasma Jug, Joule Syringe, Dodging Pendulum, Beastium builds - and the odd challenges (Lopsided stats, negative Collection, the hub minigames).",
                "The achievements here: Combo Conductor (While in combat, maintain max combo with the Chain Capacitor Trinket for 10 seconds.); Shock Tactician (Defeat a boss using a spark from the Shock Flint Trinket.); Plasma Survivor (Fill your reserve tank with the Plasma Jug Trinket while at 1 HP.); Joule Junkie (Kill a boss while at 1 HP, using only Sidearms and the Joule Syringe Trinket.); Pendulum Master (Parry 10 attacks without getting hit using the Dodging Pendulum Trinket.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to the ending, restoring the Spark Generators and beating Thorne and the minibosses.",
                "2. Find every hidden Poppit shop and buy everything to trigger the 'Traumatized' dance scene.",
                "3. Collect every Weapon, Trinket, Cloak and Upgrade, then work the Feats - each is a single clever use of one item, easy to set up at any enemy group once you have the gear.",
                "4. Do the fishing board, the minigame challenges, and the shop-money achievements.",
                "5. Do a New Game Plus run, and dedicated runs for the Hard-modifier, Weird-modifier and sub-4-hour speedrun clears.",
                "Tip: the weapon and Trinket Feats are the whole platinum - keep a note of which item each Feat wants and, whenever you swap to a new Weapon, immediately try its Feat on the next enemy group rather than saving them all for an end-game grind."
            ]
        }
    ]
};
