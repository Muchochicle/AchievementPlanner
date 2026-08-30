// For Honor Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/for-honor.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   304390 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "for-honor-achievement-guide",
    "category": "game",
    "gameSlug": "for-honor",
    "icon": "🪓",
    "title": "For Honor Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in For Honor - none are hidden. Covers the Knight/Viking/Samurai story campaign, faction and hero reputation, PvP combat feats, mode wins, gear customization, and the War and Breach/Arcade systems.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "For Honor has 60 Steam achievements and none are hidden. They split into the three-chapter story campaign (Knight, Viking, Samurai) with its collectible and difficulty tiers, faction and hero Reputation milestones, a block of PvP combat feats (ledge kills, honorable and dishonorable kills, revives, kill streaks, parries), first-win-and-20-wins pairs for every PvP mode (Duel, Brawl, Dominion, Skirmish, Elimination), gear and hero customization, the Faction War meta-game (deploying Troops), and the Breach mode plus Arcade Quests and the Wu Lin heroes.",
                "Nothing is missable - the campaign stays replayable from the mission list, and every counter (kills, parries, revives, Troops deployed) is a permanent multiplayer stat. The long poles are the 20-win achievements for every PvP mode and Like Killing Ants (5000 soldier kills), which need broad, sustained play rather than any one clever trick.",
                "Tip: play a mix of Dominion and the smaller modes (Duel, Brawl, Skirmish, Elimination, Breach) rather than only your favorite - the mode-specific Master achievements (20 wins each) and the PvP combat feats (Heads Up, Unfair Fight, You're On Fire) come far more naturally when you rotate through everything the game offers."
            ]
        },
        {
            "heading": "Story Campaign",
            "body": [
                "The single-player block: completing the Knight, Viking, and Samurai Chapters and Mission 1, collecting all Breakables and Observables across Story Mode, clearing the campaign on Normal, Hard, and Realistic, and reaching Story Level 10, 20, and the maximum 30.",
                "The achievements here: Dishonorable Discharge (Complete the Knight Chapter.); Working Hard for the Loot (Complete the Viking Chapter.); If you want peace, prepare for war (Complete the Samurai Chapter.); Welcome To The Blackstone Legion (Complete Mission 1.); Hooligan (Get 100 % of the Breakables from all Missions in Story Mode.); Lore Master (Get 100 % of the Observables from all Missions in Story Mode.); An Average Accomplishment (Complete Story Mode at Normal difficulty.); A Remarkable Accomplishment (Complete Story Mode at Hard difficulty.); An Exceptional Accomplishment (Complete Story Mode at Realistic difficulty.); A Beginning (Reach Story Level 10 in Story Mode.); A Middle (Reach Story Level 20  in Story Mode.); An End (Reach maximum Story Level 30 in Story Mode.)."
            ]
        },
        {
            "heading": "Faction & Hero Reputation",
            "body": [
                "The roster-building block: recruiting 4 Heroes of a single Faction, reaching Reputation 1 with a Knight, a Samurai, and a Viking hero, and reaching Reputation 5 with any hero.",
                "The achievements here: Getting the band back together (Recruit 4 Heroes of a single Faction.); Get Knighted (Reach Reputation 1 with one of the Knight Heroes.); Impressive (Reach Reputation 1 with one of the Samurai Heroes.); I've Heard Your Name (Reach Reputation 1 with one of the Viking Heroes.); Legendary Hero (Reach Reputation 5 with any Hero.)."
            ]
        },
        {
            "heading": "PvP Combat Feats",
            "body": [
                "The combat-technique achievements: environmental kills (ledges, fire, spikes), winning a 1v2 in PvP, attacking from above, a fully honorable Dominion match, 50 Honorable Kills in 4v4, saving an ally 50 times, five 5-kill streaks, maxing Renown 50 times in Dominion, activating Revenge 50 times, parrying 50 attacks, and killing 5000 soldiers total.",
                "The achievements here: Long Way Down (Kill 50 Opponents by throwing them off a ledge.); Anything Can Be A Weapon (Throw an opponent into fire or spikes 50 times.); Unfair Fight (Kill an enemy in a 1V2 situation in PvP.); Heads Up! (Kill 25 Heroes by attacking them from above in PvP.); Principled Warrior (Complete a Dominion PvP match without a single Dishonorable Kill.); Do it for the Honor! (Complete 50 Honorable Kills in 4v4 PvP matches.); I've Got Your Back! (Save an ally 50 times in 4v4 PvP matches.); You're On Fire! (Get 5 Kill Streaks of 5 kills in Elimination or Skirmish in PvP.); Look At All These Feats (Get the max Renown level 50 times in Dominion PvP matches.); Revenge Spammer (Activate Revenge mode 50 times.); You Can't Touch This (Parry attacks 50 Times.); Like Killing Ants (Kill 5000 soldiers.)."
            ]
        },
        {
            "heading": "PvP Mode Mastery",
            "body": [
                "First-win and 20-win pairs for every PvP mode: Duel, Brawl, Dominion, Skirmish, and Elimination.",
                "The achievements here: Duelist (Win your first Duel PvP match.); Duel Master (Win 20 Duel PvP matches.); Brawler (Win your first Brawl PvP match.); Brawl Master (Win 20 Brawl PvP matches.); Dominator (Win your first Dominion PvP match.); Dominion Master (Win 20 Dominion PvP matches.); Skirmisher (Win your first Skirmish PvP match.); Skirmish Master (Win 20 Skirmish PvP matches.); Eliminator (Win your first Elimination PvP match.); Elimination Master (Win 20 Elimination PvP matches.)."
            ]
        },
        {
            "heading": "Gear & Customization",
            "body": [
                "The cosmetic and loadout achievements: maxing a piece of Gear, equipping a Symbol/Paint Pattern/Color Swatch, mixing Effect/Emote/Execution on one Hero, full Heroic Gear, changing a Gear visual, a second loadout with a non-default Feat, an Ornament on 4 Heroes of one Faction, and 4 non-default Feats on a single Hero.",
                "The achievements here: Gear Head (Level up a piece of Gear of any rarity to its maximum level.); Discerning Taste (Equip your first Symbol, Paint Pattern and Color Swatch on any Hero.); Play Your Way (Equip a different Effect, Emote and Execution on a single Hero.); Swag Up (Equip a Hero with Heroic Armor and Weapons in all Gear slots.); Makeover! (Change the visual of any piece of Gear.); Evening Wear (Update a second loadout for a Hero by setting a feat other than the default.); You're So Vain (Equip an Ornament on 4 Heroes of a single Faction.); You're A Wizard (Set 4 non-default Feats for a single Hero.)."
            ]
        },
        {
            "heading": "Faction War & Seasons",
            "body": [
                "The metagame layer: manually deploying Troops for the first time, 100 times, in 5 different Campaigns, in 50 different Battles, on 10 enemy territories, on 10 friendly territories, and returning at the start of a new Season.",
                "The achievements here: Cry Havoc (Manually deploy Troops on a territory for the first time.); Let Slip The Dogs Of War (Manually deploy Troops on territories 100 times.); For Honor! (Participate in a Season and come back to see the results at the start of the next Season.); A Reservist (Manually deploy Troops in 5 different Campaigns.); Active Duty (Manually deploy Troops in 50 different Battles.); Warmonger (Manually deploy Troops on 10 enemy territories.); Protector (Manually deploy Troops on 10 friendly territories.)."
            ]
        },
        {
            "heading": "Breach, Arcade & Wu Lin",
            "body": [
                "The newer content: winning your first Breach match and completing 15 more, finishing your first Arcade Quest and Quests of 5 rarities, and the Wu Lin faction achievements - 10 matches with any Wu Lin hero, and Reputation 7 with one.",
                "The achievements here: Breach Apprentice (Win your first Breach match.); Breach Master (Complete 15 Breach matches.); Quest for Glory (Complete your first Quest in Arcade.); Serial Quester (Complete Quests of 5 different rarity levels.); An Unstoppable Force (Complete 10 matches with any Wu Lin Hero.); Loyalty and Righteousness (Reach Reputation 7 with one of the Wu Lin Heroes.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story campaign's three chapters (Knight, Viking, Samurai) to completion, then replay on Hard and Realistic for the difficulty achievements, mopping up Breakables and Observables and pushing Story Level to 30 along the way.",
                "2. Recruit Heroes from a single faction and push Reputation with a Knight, Viking, and Samurai hero to Reputation 1, then any hero to Reputation 5.",
                "3. Play a wide mix of PvP modes - Duel, Brawl, Dominion, Skirmish, Elimination, Breach - to win each for the first time, then grind 20 wins in each for the Master achievements.",
                "4. Work the combat feats as opportunities appear during PvP: ledge kills, environmental kills, honorable kills, parries, revives, kill streaks, and an honor-only Dominion match.",
                "5. Handle customization (gear, symbols, effects, portraits, Joustus-style Ornaments) and the Faction War achievements (deploying Troops manually across campaigns, territories, and Seasons) as side tasks between matches.",
                "Tip: Principled Warrior (a Dominion match with zero Dishonorable Kills) is easiest in a match where you consistently finish off human opponents rather than AI soldiers or already-downed enemies - dishonorable kills come from finishers on minions and fleeing or downed players, so just fight it out properly."
            ]
        }
    ]
};
