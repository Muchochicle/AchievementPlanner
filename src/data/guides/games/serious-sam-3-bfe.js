// Serious Sam 3: BFE Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/serious-sam-3-bfe.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   41070 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "serious-sam-3-bfe-achievement-guide",
    "category": "game",
    "gameSlug": "serious-sam-3-bfe",
    "icon": "💀",
    "title": "Serious Sam 3: BFE Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Serious Sam 3: BFE (4 hidden). Covers the campaign and difficulty clears, the enemy kill feats, the Egyptian secrets and story beats, and the co-op and versus multiplayer achievements. Four achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Serious Sam 3: BFE has 62 Steam achievements and four are hidden - 'All Your Base Are Belong To Us!' (bring down the alien dropship in 'Under the Iron Cloud'), 'Detroit Steel' (start the car at the end of 'The Last Man on Earth'), and the two Christmas-event feats ('Christmas In Cairo' and 'Reindeer Hunter'). The rest are open: the campaign and hard-difficulty clears, the 'Are You Serious!?' and 'Old School' challenge runs, a big block of enemy-specific kill feats, the Egyptian-text and secret sweeps, and the co-op and versus multiplayer achievements.",
                "The catalog marks it difficulty 4 - 'Are You Serious!?' (the whole campaign on unmodified Serious difficulty), 'Serious Run' (each level in half its par time), 'Old School' (no manual reload, aim or sprint for the whole game) and 'Queen Hatshepsut' (the final level on Serious with no death or load) are all demanding. Nothing is missable: levels replay freely and the Christmas achievements just need the in-game Christmas event (December 10 to January 5) active.",
                "Tip: knock out the enemy body-part kill feats ('Ophthalmologist', 'Chiropractor', 'Kleer Wrestler') on an early easy run using melee finishers, then do the hard challenge runs once you know the encounters."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "Completing any level, completing the single-player campaign, completing it on unmodified Serious difficulty, and completing every level in half its estimated par time.",
                "The achievements here: Serious Beginner (Complete any level in single player.); Serious Sam (Complete the single player campaign.); Are You Serious!? (Complete the game in single player on unmodified serious difficulty.); Serious Run (Complete the game in single player in half the estimated time on each level.)."
            ]
        },
        {
            "heading": "Enemy Kill Feats",
            "body": [
                "The body-part removal feats (Gnaar eyes, Rocketeer hearts, Soldier necks, Kleer heads, Arachnoid necks, Scrapjack's head), squashing and ripping spiders, the kicked-enemy trick shot, the gib-as-weapon kill, the sledgehammer sprint, the 'Old School' no-reload/aim/sprint run, the 5-kamikaze chain explosion, all finishing moves, and 20 minigun kills without releasing the trigger.",
                "The achievements here: Ophthalmologist (Remove 10 Gnaar eyes.); Cardiac Surgeon (Rip out 10 Rocketeer hearts.); Chiropractor (Break 10 Soldier necks.); Kleer Wrestler (Tear off 10 Kleer heads.); Bug Hunt (Squash 10 Hatchling spiders.); Arachnophobia (Rip 10 Juvenile spiders apart.); Scorpion Slayer (Break 5 Arachnoid necks.); Load of Scrap (Rip Scrapjack's head off.); Trick Shot (Kill the kicked enemy while it is still in the air.); Useful Trophy (Kill an enemy with a gib torn from another enemy.); Berserker (Kill 3 enemies in one sprint with the Sledgehammer.); Old School (Complete the game in single player without manually reloading, aiming or sprinting.); Chain Explosion (Kill at least 5 headless kamikazes in one explosion.); Kung-fu Fighter (Perform all possible finishing moves in the game.); Wall of Bullets (Kill 20 enemies with the Minigun without releasing the trigger.)."
            ]
        },
        {
            "heading": "Egypt, Secrets & Story Beats",
            "body": [
                "Deciphering one and all Egyptian texts, the story beats (rescue Stein, secure the bird, the hidden dropship, the Sphynx riddle, kill a Witch-Bride, power the Timelock, the hidden car, wake the Guardian), the Mutilator surf, the Devastator pierce, close-range shotgun gibs, the Mutilator kill, decapitating a Khnum, 20 sledgehammer Kleer smashes, the spinning-sledge and air-kill feats, blowing up a Major Biomechanoid, 50 and all secrets, the classic outfit, the no-death Serious 'Queen Hatshepsut', and the Vista secret.",
                "The achievements here: Apprentice Egyptologist (Decipher an Egyptian text.); Master Egyptologist (Decipher all Egyptian texts.); Wanted Dead or Alive (Rescue professor Stein. So to say.); Get the hell off my ride! (Secure the bird.); All Your Base Are Belong To Us! (In the level 'Under the Iron Cloud', bring down the giant alien dropship by destroying the blue orbs on its underside.); Problem solver (Solve the riddle of the Sphynx.); Painful Divorce (Kill a Witch-Bride of Achriman.); Mission completed (Power up the Timelock.); Detroit Steel (At the end of the eleventh level, 'The Last Man on Earth', start the car.); The doorman should wear a suit (Awake the Guardian of Time.); Rodeo Surfer (Use the Mutilator to surf after a Werebull.); Skewer (Pierce 5 enemies with one Devastator round.); Up Close and Personal (Gib 20 enemies from close range with a shotgun.); Killer Jewelry (Kill an enemy using the Mutilator.); Headsman (Decapitate a Khnum.); Bone Crusher (Smash 20 Kleers with the Sledgehammer.); Circle of death (Kill at least 3 enemies in one spinning Sledgehammer attack.); Clay Pigeons (Kill 5 Cave Demons while they're in air.); Maintenance time (Blow a Major Biomechanoid into pieces.); Look, it's a secret (Find at least 50 secrets in single player.); Top Secret (Find all secrets in single player.); Classic Outfit (Find Sam's classic outfit); Queen Hatshepsut (Complete The Guardian of Time in single player on serious difficulty without dying or loading.); Vista (Find the Vista secret.)."
            ]
        },
        {
            "heading": "Co-op & Versus",
            "body": [
                "The co-op level and campaign clears, Coin-op co-op, 10 extra lives, 100 gold coins, the deathmatch / versus / CTF / Instant Kill / Last Man Standing / My Burden feats, 20 sledgehammer frags, a Beast Hunt match, the Survival medals, the hidden Christmas achievements, and completing the Jewel of the Nile campaign.",
                "The achievements here: Co-op Beginner (Complete any level in cooperative with at least 2 players.); Co-op Master (Complete the campaign in cooperative with at least 2 players.); Coin-op Co-op (Complete a Coin-op cooperative game on normal or higher difficulty.); Life Saver (Pick up at least 10 extra life items.); Gold Rush (Pick up 100 gold coins.); Deathmatch Beginner (Complete a deathmatch game with at least 1 frag.); Deathmatch Master (Win 10 deathmatch games.); Look Ma, I won! (Win a versus match.); Hammer Time (Frag 20 players with the Sledgehammer.); Beast Hunter (Complete a Beast Hunt match); Flag Thief (Score a total of 10 points in CTF matches.); Instant Killer (Make at least 3 kills in one Instant Kill match.); Last Man Standing (Win one round in Last Man Standing game with at least 4 players.); Heavy Weight Champion (Win one My Burden match with at least 3 players.); Survivor (Earn a medal in Survival.); Golden Survivor (Earn a gold medal in Survival.); Christmas In Cairo (During the in-game Christmas event (December 10 to January 5), decorate the Christmas tree.); Jewel of the Nile (Complete the Jewel of The Nile single player campaign.); Reindeer Hunter (During the Christmas event, decorate the Christmas tree on every level to unlock the Rodolfo player model.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign once on Normal or Hard, learning the encounters and grabbing secrets.",
                "2. On that run, do the enemy body-part kill feats with melee finishers and the trick-shot feats.",
                "3. Bring down the dropship in 'Under the Iron Cloud' and start the car at the end of 'The Last Man on Earth'.",
                "4. Do the hard challenge runs - 'Are You Serious!?', 'Serious Run', 'Old School' and 'Queen Hatshepsut'.",
                "5. Play the co-op and versus multiplayer achievements, and the Jewel of the Nile campaign; do the Christmas achievements during the December event.",
                "Tip: 'Serious Run' (half par time per level) is easiest done level-by-level from the menu - you can retry a single level as many times as you need without redoing the whole campaign."
            ]
        }
    ]
};
