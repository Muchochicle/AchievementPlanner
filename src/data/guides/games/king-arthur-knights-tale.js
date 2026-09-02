// King Arthur: Knight's Tale Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/king-arthur-knights-tale.json), whose 59 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1157390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 5 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "king-arthur-knights-tale-achievement-guide",
    "category": "game",
    "gameSlug": "king-arthur-knights-tale",
    "icon": "⚔️",
    "title": "King Arthur: Knight's Tale Achievement Guide",
    "summary": "A practical guide to all 59 Steam achievements in King Arthur: Knight's Tale (5 hidden). The five hidden achievements are the tutorial and four spoiler-free story boss/quest markers. Everything else - the four act completions, the Roguelite clear, the Camelot building and hero milestones, and a long list of tactical combat feats - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "King Arthur: Knight's Tale has 59 Steam achievements, 5 of them hidden. Sir Mordred, resurrected by the Lady of the Lake, must hunt a corrupted, undying King Arthur across a nightmarish Avalon in turn-based tactical battles. The visible achievements cover completing each of the four acts and the Roguelite-mode clear, the Camelot management milestones (all buildings, all upgrades for one, 10,000 gold, 5,000 resources), the hero milestones (recruit 6 then 12 companions, level 25 with one then six heroes, resurrect a hero, a Morality maxed), and a long list of tactical combat feats (status stacking, Cleave and Overwatch multi-kills, backstabs, traps, 100-damage hits, duels, no-potion missions).",
                "The 5 hidden achievements are the tutorial ('Back from the Dead') and four spoiler-free story markers - defeating Balor and Tewelyn, and resolving the Uther and Tristan & Isolde questlines.",
                "The catalog marks it difficulty 3 and single-playthrough (the Roguelite clear is a separate mode). Missions are replayable, so the combat feats are not missable."
            ]
        },
        {
            "heading": "Campaign & Story",
            "body": [
                "The tutorial, the four act completions, the Roguelite clear, the side-mission counters, and the four hidden story boss/quest markers plus the Guardian Spirit and Tewelyn skirmish challenges.",
                "The achievements here: Back from the Dead (Complete the tutorial - Sir Mordred is brought back from the dead.); Dawn Before Midnight (Complete Act 1 on any difficulty.); The Wounded King (Complete Act 2 on any difficulty.); His Final Despair (Complete Act 3 on any difficulty.); The Dark Lord of Camelot (Complete Act 4 on any difficulty.); See the Consequences (Complete the main story in Roguelite mode.); Explorer of Avalon (Complete 10 side missions); Savior of Avalon (Complete 25 side missions.); Demon Slayer (Defeat Balor - a story boss, described here spoiler-free.); Valiant Defender (Don't let the Guardian Spirit lose any HP on the Forbidden Keep mission.); Pray for my Soul (Resolve Uther Pendragon's storyline - described here spoiler-free.); Just a Rotting Corpse (Defeat Sir Tewelyn - a story boss, described here spoiler-free.); Tristan & Isolde (Resolve the Tristan and Isolde questline - described here spoiler-free.); The Trials of Sir Tewelyn (Achieve 35 Skirmish Score during the Trials of Sir Tewelyn skirmish missions.)."
            ]
        },
        {
            "heading": "Camelot & Heroes",
            "body": [
                "Recruiting 6 then 12 companions, level 25 with one then six heroes, resurrecting a hero, a maxed Morality, all buildings and all upgrades for one, and the gold and resource hoards.",
                "The achievements here: Knights of the Cresenct Table (Find and Recruit 6 Hero Companions.); Ultra-Heavy (Reach 150 HP with Sir Mordred.); Ready to Fight (Equip a character with Relic items in every slot (except potions).); The Very Purpose of a Knight (Reach level 25 with one Hero.); I Shall Bere Your Noble Fame  (Reach level 25 with 6 Heroes.); Knights of the Round Table  (Find and Recruit  12 Hero Companions.); Disciples of the Four Branches (Complete a mission with 4 different classes.); A Second Chance  (Resurrect a Hero from the Crypt.); It's Only a Model  (Build all available buildings in Camelot.); Master Builder (Unlock all upgrades for a building in Camelot.); Wisdom is Better (Acquire 10,000 gold.); One Brick at a Time (Acquire 5,000 building resources.); Decisions, Decisions (Complete 30 events); A Powerful Trinket (Purchase a Relic item at the Enchanted Tower.); The Penny Knight (Sell items worth 10,000 gold at the Merchant.); Forever a Trainee (Level up a Hero three consecutive times in the Training Ground.)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "The tactical feats - flawless and frugal missions, the Black Knight injuries, status stacking, ice-and-fire, Cleave / Overwatch / trap / backstab / bleed multi-kills, 100-damage hits, duels, single-class parties, 1,000 kills, the fire-blast wipe, PvP - and the DLC skirmish score challenges.",
                "The achievements here: Field Day (Complete a mission without any of your heroes losing HP or Vitality (except tutorial missions).); Treasure Hunter (Find a hidden treasure.); Crypt? What Crypt? (Complete the main story with less than 3 heroes in the Crypt.); Alright… We'll Call It a Draw (Finish a mission with the Black Knight with Vitality loss and at least 2 permanent injuries.); A Person of Principle (Reach maximum points in one of the four Moralities.); 'Tis but a Scratch! (Apply Burning, Poison, Chill, Slow and Bleeding effects on one enemy.); Master of the Elements (Kill a frozen enemy with fire-based skills or attacks.); Cleave It To Me (Kill 3 enemies at once with the Cleave skill.); It's a Trap! (Kill 5 enemies in their own round with traps in a single encounter.); None Shall Pass (Win duels with 4 different heroes.); Get Lost! (Finish an encounter with at least 4 Lost enemies awaiting resurrection.); Out of My Way! (Deal at least 100 damage with one attack.); Frugal Knights (Complete a mission without using Potions, Shrines, Scrolls or Campfires (except tutorial missions).); Overwatcher (Kill 5 enemies with Overwatch attacks in a single encounter.); Bully King (Kill an enemy which received damage from all of your Heroes in the same turn (with at least Level 2 Heroes).); AvaLAN Party (Finish a PvP match.); Fire Walk With Me (Kill at least 5 enemies at the same time with a fire-based Arcanist spell.); Surprise Party (Apply 4 backstab attacks in a single turn.); Bloodbath (Inflict bleeding on 5 enemies in the same round.); Floor Sweep (Knockdown 3 enemies in one turn.); Fortune Favors Fools (Miss 3 attacks in a single turn.); One Step Ahead (Kill an enemy performing a surprise attack with an overwatch attack.); Just a Flesh Wound (Complete a mission with 4 injured Heroes.); My Life for Camelot (Bring 3 injured heroes to a mission.); Team Arrowhead (Complete a mission with only Marksmen in the party.); Conqueror of Avalon (Kill 1,000 enemies in Avalon); Painted Devils (Achieve 35 Skirmish Score during the Painted Devils skirmish missions. (DLC required)); Rogues and Renegades (Achieve 35 Skirmish Score during the Rogues and Renegades skirmish missions. (DLC required)); Silver Twilight (Achieve 35 Skirmish Score during the Silver Twilight skirmish missions.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign through all four acts, recruiting every companion you can (12 for the full round table) and doing side missions.",
                "2. Build up Camelot - every building, all upgrades for one, and bank the gold and resource hoards - and level a core team to 25.",
                "3. The hidden story markers (Balor, Tewelyn, Uther, Tristan & Isolde) unlock as you clear their missions.",
                "4. Farm the tactical feats on replayed missions - most (Cleave x3, Overwatch x5, backstab x4, bleed x5, traps x5) fit a single built-for-it party.",
                "5. Do a Roguelite-mode run for 'See the Consequences'.",
                "Tip: build one 'gimmick' party per feat and replay an early enemy-dense mission - a full Marksman team for 'Team Arrowhead' and the Overwatch kills, a trap-heavy Champion for the trap and Cleave feats - rather than trying to force every feat out of your main campaign roster."
            ]
        }
    ]
};
