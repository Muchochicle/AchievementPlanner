// FORCED SHOWDOWN Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/forced-showdown.json), whose 81 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   265000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "forced-showdown-achievement-guide",
    "category": "game",
    "gameSlug": "forced-showdown",
    "icon": "🎴",
    "title": "FORCED SHOWDOWN Achievement Guide",
    "summary": "A practical guide to all 81 Steam achievements in FORCED SHOWDOWN - none are hidden. Covers the campaign and combat-basics achievements, the single-battle challenge achievements, the card-play and arena-modifier achievements, and the contestants and Mentor's Maze achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "FORCED SHOWDOWN has 81 Steam achievements and none are hidden. Roughly the first twenty are campaign progress and running totals (finish a campaign, beat the three Frontline bosses, 1500 kills, 100 battle wins, 300 points), then a large block of single-battle restriction challenges (no damage for 3 arenas, win with no mana unspent, win without spells / basic attacks / letting your companion die), card-play and arena-modifier achievements (play 8 cards in a turn, a card costing 8+ mana, beat modifiers like Heat Wave and Raff's Son), and finally the six contestants each beating The Grand Return and The Mentor's Maze, plus Maze-specific goals.",
                "The catalog marks it difficulty 4 and many runs. The restriction challenges are demanding, and clearing The Grand Return and the Mentor's Maze with every contestant is the long tail.",
                "Tip: chase the running totals and easy challenges during normal campaign runs, then do dedicated attempts for the no-damage boss and restriction achievements once you have strong decks."
            ]
        },
        {
            "heading": "Campaign & Combat Basics",
            "body": [
                "Finishing a campaign, completing The Crucible, beating Graw, Mordar and Ruby von Wouthingtonne IV in Frontline, clearing Frontline with 2 contestants and 3 companions, 300 points, 400 and 1500 kills, 10 and 100 battle wins, 100 and 300 points collected, playing a spell+upgrade+consumable in one turn, 10 stored consumables, 85% block, 400 health, 100% crit, and a summon-free win.",
                "The achievements here: Take A Bow (Finish your first Campaign (win or lose).); You're Fired! (Complete The Crucible.); Eat It! (Defeat Graw in Frontline.); Calcium Deficiency (Defeat Mordar in Frontline.); Tanks For Nothing (Defeat Ruby von Wouthingtonne IV in Frontline.); The Spice of Life (Beat Frontline or higher with 2 different contestants.); PokéMaster (Beat Frontline or higher with 3 different companions.); Crowd Pleaser (Reach 300 Points.); Keep 'em Coming (Kill 400 enemies.); Reaper Man (Kill 1500 enemies.); Contender (Win 10 battles.); Champion (Win 100 battles.); Showmanship (Collect 100 points.); Loot Ninja (Collect 300 points.); MacGyverism (Play a Spell, an Upgrade and a Consumable card in one turn.); Just In Case (Have 10 consumables in your consumable inventory at the same time.); Float Like a Butterfly (Reach 85% block chance.); Fit as a Fiddle (Reach 400 health.); Critical Mass (Reach 100% crit chance.); /ignore (Win a battle without killing any summoned enemies.)."
            ]
        },
        {
            "heading": "Single-Battle Challenges",
            "body": [
                "Winning battles under restrictions: no barrels destroyed, 3 arenas without damage, no mana unspent, 8 cards in a turn, 20-second arenas, a no-damage boss, no spells, at most 2 upgrades, no companion death, no basic attack, five sub-12-second arenas, and the 350-upgrade / 150-spell / 150-consumable totals plus empty-hand, no-globe, no-resources and mana-curve wins.",
                "The achievements here: Caaareful (Win a battle without personally destroying any barrels.); Can't Touch This (Clear 3 arenas in a row without taking damage.); Dat Mana Curve Tho' (Win a battle with no mana unspent (all arenas).); Cheater (Play 8 cards in one turn.); Gotta Go Fast (Take no more than 20 seconds in any one arena in a battle.); Flawless Victory (Beat a boss without taking damage.); Anti-Mage (Win a battle without playing any spells.); Tough Enough (Win a battle without playing more than 2 upgrades.); Tamagochi Master (Win a battle without letting your companion die.); Show Off (Win a battle without using your basic attack.); Record Breaker (Clear 5 arenas in less than 12 seconds each.); Just Supplements (Play 350 upgrade cards.); Putting the Magic in MTG (Play 150 spell cards.); Trinkets 'r' Me (Play 150 consumable cards.); Mana Surplus (Win a battle with no cards left in hand.); Don't Need 'em (Win a battle without picking up any health globes. Globes sent to you by companion pickup or arena completion are allowed.); All Spent (Win a battle with no cards or mana left.); Bend it Like Beckham (Play a kicker-effect with 8+ extra mana.); Big Spender (Spend 20 mana in one card phase.); Straight (Win a battle, having played cards of mana cost 0, 1, 2, 3, 4, 5, 6, 7.)."
            ]
        },
        {
            "heading": "Card Play & Arena Modifiers",
            "body": [
                "Playing a card costing 8+ mana, an 8+-mana kicker, a card over 8 mana, beating the Denver / Heat Wave / Raff's Son modifiers cleanly, filling all consumable slots, 14 barrels in 2 seconds, 6 kills in 6 seconds, a 100-damage Guardian Light block, and the Squire of Light / Volco / Stormbringer no-damage boss and Grand Return clears, 1000 frenzy, and 5 strafes in 8 seconds.",
                "The achievements here: Daylight Robbery (Play a card that costs more than 8 mana.); ¡Toro! ¡Toro! (Win 3 battles with Denver as companion, without getting hit by him.); You are The One (Win a battle with the Heat Wave rule without getting hit by the fireballs.); Spare The Rod (Win a battle with the Raff's Son modifier without ever letting him survive.); Pacifist Pet (Win a battle without your companion killing any enemies.); Locked and Loaded (Have consumables in all 4 slots.); Where are my Rupees? (Destroy 14 barrels within 2 seconds.); The Revolver (Kill 6 enemies in 6 seconds.); Close One (Prevent 100 damage with a single Guardian Light.); Guardian Light On Cooldown (Beat a boss with Squire of Light without taking damage.); Lighting the Way (Beat The Grand Return with Squire of Light.); Strike! (Kill 6 enemies with 1 Volcanic Strike.); Instant Karma (Knock 30 enemies down with Magma Shield.); Burned (Beat a boss with Volco without taking damage.); Trailblazer (Beat The Grand Return with Volco.); All Yours (Beat 5 arenas with Stormy getting all kills.); Greased Lightning (Beat a boss with Stormbringer without taking damage.); Thunderous Applause (Beat The Grand Return with Stormbringer.); Getting Miffed (Gain 1000 frenzy.); Too Much Coffee (Perform 5 strafes within 8 seconds.)."
            ]
        },
        {
            "heading": "Contestants & The Mentor's Maze",
            "body": [
                "The Ravager no-damage boss and Grand Return clears, 15 companion-survival arenas, 100 companion kills, completing The Mentor's Maze (and in 12 then 9 battles), 5000 and 1000 Maze points, 30 cards dismantled, Pinball and zapperbot goals, beating the Maze with each of the six contestants, and the Pulse Rifle / plasma-ball / Jetpack Jump feats.",
                "The achievements here: Not a Scratch (Beat a boss with Ravager without taking damage.); Carnage Complete (Beat The Grand Return with Ravager.); Best Pals (Beat 15 arenas with your companion surviving.); Beware of Companion (Kill 100 enemies with your companion.); Surpassing The Mentor (Complete The Mentor's Maze.); Maze Runner (Complete The Mentor's Maze in 12 battles or less (bonus battles don't count).); R3-KT Got Wrecked (Complete The Mentor's Maze in 9 battles or less (bonus battles don't count).); Points Of The Maze (Collect 5000 points in The Mentor's Maze.); Every Nook And Cranny (Reach 1000 Points in The Mentor's Maze.); Dismantler (Dismantle 30 cards.); Pinball Master (Kill 10 enemies with the Pinball.); Assembly Line (Use 30 zapperbots.); Light At The End (Beat The Mentor's Maze with Squire of Light.); Blazing Through (Beat The Mentor's Maze with Volco.); In Charge (Beat The Mentor's Maze with Stormbringer.); Uncaged (Beat The Mentor's Maze with Ravager.); Maze Mission Accomplished (Beat The Mentor's Maze with Settsu.); Line 'em up (Kill 4 enemies with one Pulse Rifle piercing shot.); Bubble Pop (Burst 5 plasma balls in 10 seconds.); Brace for Impact (Hit 6 enemies with one Jetpack Jump.); Punching Bag (Win a battle, having taken 1000+ damage.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play campaigns to finish The Crucible, beat the Frontline bosses, and rack up the kill and win totals.",
                "2. Pick up the easy challenges as they come (block/crit/health thresholds, stored consumables, barrel and kill sprints).",
                "3. Do dedicated attempts for the restriction wins (no spells, no basic attack, no damage for 3 arenas, empty hand).",
                "4. Do the no-damage boss and Grand Return clears with each contestant (Squire of Light, Volco, Stormbringer, Ravager, Settsu).",
                "5. Grind The Mentor's Maze: fast clears, point totals, and a completion with every contestant.",
                "Tip: the no-damage boss achievements are far easier with a heavy block/dodge build - stack block chance and a Guardian Light and treat the fight as a survival puzzle, not a DPS race."
            ]
        }
    ]
};
