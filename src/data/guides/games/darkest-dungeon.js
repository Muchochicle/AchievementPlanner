// Darkest Dungeon's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/darkest-dungeon.json), whose 126 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   262060 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 77 of 126 ship a real,
//   official Steam description, quoted directly below.
// - The other 49 are hidden achievements Steam never describes publicly
//   (confirmed via the same API call). Most were cross-checked against
//   the official Darkest Dungeon wiki's own achievements page and
//   independent Steam Community guides. Six of them - Burnout, Faced
//   Worse, Dueling Duo, The Perfection, Pavlovian, and Cooked to
//   Perfection - are among the rarest, least-documented achievements in
//   the entire game; their descriptions here reflect the best
//   cross-referenced community consensus available, and Faced Worse in
//   particular is flagged in its own description as lower-confidence
//   than the rest, since independent sources disagree on its exact
//   requirements.
// - The grouping below (early quest milestones, town/roster management,
//   combat totals, death and loss, game completion, the Crimson Court
//   DLC, the Color of Madness DLC, the Butcher's Circus PvP mode, and
//   the handful of rarest secret feats) mirrors the game's own real
//   structure - three paid DLCs each added a self-contained achievement
//   set, which is reflected here rather than flattened into one list.
export const GUIDE = {

    slug: "darkest-dungeon-achievement-guide",
    category: "game",
    gameSlug: "darkest-dungeon",
    icon: "🕯️",
    title: "Darkest Dungeon Achievement Guide",
    summary: "A practical guide to all 126 Steam achievements in Darkest Dungeon - the base campaign's quest and town milestones, the grim ways heroes are lost, full completion at every difficulty, and the Crimson Court, Color of Madness, and Butcher's Circus DLCs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Darkest Dungeon has 126 Steam achievements - the largest list in this app's catalog alongside Dead Cells. The base campaign accounts for most of them, with three paid DLCs (The Crimson Court, The Color of Madness, and The Butcher's Circus) each adding their own self-contained set on top.",
                "Nothing here is permanently missable on a single save - a campaign continues indefinitely until you choose to complete it, and nearly every achievement (quest counts, hero losses, town upgrades, DLC content) accumulates naturally the more you play rather than requiring a specific one-shot decision."
            ]
        },

        {
            heading: "Early Quest Milestones",
            body: [
                "Welcome home... (reach the Estate), The first of many victories... (complete a quest), and Discretion, my old friend... (abandon a quest) are the earliest, most automatic achievements - reached within the first few quests of any campaign.",
                "Our victories are mounting... and We are victorious, but at what cost... scale that up to 10 and 25 completed quests. The first evil to fall... (slay your first boss), A strenuous adventure comes to a close... (complete a medium quest), and A grueling adventure comes to a close... (complete a long quest) track quest length and boss progress rather than raw count.",
                "I've seen every corner of this ruined land... (complete a quest in all four regions) and Twisted and about to break (complete a dungeon with all 4 heroes afflicted) are broader milestones that come together naturally over a normal campaign, while A team of hardened veterans... (start a quest with four Resolve Level 6 heroes) and Like lambs to the slaughter... (start a Darkest Dungeon quest with four Resolve Level 0 heroes) are two deliberately opposite challenges - a maximally experienced party versus a maximally green one on the game's hardest quest type."
            ]
        },

        {
            heading: "Town & Roster Management",
            body: [
                "And our training begins... (upgrade a Combat skill) and It takes more than brawn... (learn a Camping skill) are the earliest hero-development achievements. A drink, a hand, and a companion... (treat a hero in the Tavern) and A rumination, a prayer, and a confession... (treat a hero in the Abbey) cover the game's two stress-relief buildings, while The price we pay for sanity... (remove a Quirk in the Sanitarium) and Encouragement... (lock a positive Quirk in the Sanitarium) cover its third.",
                "Weeding out the weak... (dismiss your first hero) and A veritable crowd... (have one of each class on your roster) are both roster-composition milestones rather than combat achievements.",
                "Our equipment polished to a mirror finish... (fully upgrade the Blacksmith), Our techniques sharpened to a razor's edge... (fully upgrade the Guild), The tavern my Ancestor once saw... (fully upgrade the Tavern), and The abbey my Ancestor once knew... (fully upgrade the Abbey) are the four building-upgrade achievements, capped off by Restored to its former glory... once every building in town is fully upgraded.",
                "Only the finest equipment will endure this torment... (fully upgrade one hero's weapons and armor) and Only masterful technique will suffice in battle... (fully upgrade at least four of one hero's skills) reward investing deeply in a single hero, while A true champion emerges... and Darkest sentinels... track raising one hero, then four heroes, to Resolve Level 6. A sobering visit with the departed... (visit the Graveyard) is a simple, one-off building visit."
            ]
        },

        {
            heading: "Combat Milestones",
            body: [
                "And we slew the evils that lurketh..., And we slew the abominations that haunteth..., And we slew the beasts that creepeth..., and And we slew the men who were wicked... each track 100 kills of one enemy family - Eldritch, Unholy, Beast, and Human respectively - while The fiends must be driven back... asks for 1000 kills overall.",
                "The end of the first year... and Two years of this... mark reaching week 52 and week 104 of campaign time. Greater riches were never witnessed... (20,000 gold from a single quest) and A collection of treasured antiques... (30 heirlooms from a single quest) are both single-quest hauls rather than cumulative totals.",
                "A killer of striking force and wit... (kill 50 enemies with one hero) and More than a weary traveler... (walk 500 steps with one hero) both track one specific hero's lifetime stats rather than the whole roster."
            ]
        },

        {
            heading: "Death, Loss & Dark Fates",
            body: [
                "The first of many has fallen... (lose your first hero), The stresses were unbearable... (lose a hero to heart attack), and Gnawing hunger sets in... (lose a hero to hunger) are the three earliest, most common ways a run can go wrong.",
                "That'll do, pig..., We return to the worms of the earth..., Watch your step..., and Blocked from life... are hidden achievements for losing a hero specifically to Wilbur the Swine Prince's pet pig, a Maggot, a trap, and a dungeon obstacle, respectively - each just a matter of an unlucky specific death rather than anything to chase deliberately.",
                "No retreat, no quarter... (your first party wipe) and More blood soaks the soil... (a party wipe specifically on a boss) are both party-wide losses, while Valiant sacrifice..., a hidden achievement, is the grimmest version - losing all four heroes on a Darkest Dungeon-region quest specifically. We all return to dust... marks losing a hero who had already reached the game's maximum Resolve Level 6.",
                "What is already Dead Cannot Die (survive 5 attacks at Death's Door in one fight) is the achievement's inverse - surviving repeatedly at the brink rather than falling. Sentimental relics from our forefathers... (acquire all of your Ancestor's Trinkets) is a long-term collection goal, and A terrifying figure emerged from the darkness..., a hidden achievement, marks slaying a Shambler, one of the game's rarer Eldritch curio encounters."
            ]
        },

        {
            heading: "Completing the Game",
            body: [
                "Victory, such as it is... (complete the game) is the base completion achievement, with Strict Mode (complete the game with default difficulty options) as a related variant. Driven from this land... (kill all bosses) and Caretaker (complete all Caretaker Goals) are both broader completionist checklists that go beyond finishing the main quest line alone.",
                "In such haste... (complete the game within 99 Weeks) and On the old road, we found redemption. (Dismas and Reynauld made it to the final Darkest Dungeon quest) are both about pacing and specific starting heroes rather than raw difficulty. World End (complete the game on Stygian) and Entry Level (complete the game on Radiant) are the hardest and easiest of the game's three difficulty settings respectively.",
                "Lone survivor (kill any boss with only one hero remaining) and Dysfunction (kill any boss with a party of four afflicted heroes) are both harder variant conditions on an otherwise-normal boss fight. In Sheep's Clothing (defeat the brigand Vvulf) is a specific optional-boss achievement, while Murder of Crows (kill the Shrieker) and Mine Goes to 11 (kill a Squiffy Ghast with a Jester), both hidden, and Four on the Floor (kill Squiffy Ghast, Swine Skiver, Bone Bearer, and Hateful Virago) round out the game's roster of named non-final bosses."
            ]
        },

        {
            heading: "The Crimson Court",
            body: [
                "Les Jeux Sont Faits, Just the Cheque, and Her Last Dance, all hidden, mark defeating the Crimson Court's three viscera bosses - the Baron, the Viscount, and the Countess - with Zealous Accusation (defeat the Fanatic) as the DLC's questline-ending boss fight.",
                "Symptoms (get infected by the Crimson Curse) and What Strange Bedfellows (contract the Crimson Curse via contagion from an already-infected ally) are two different ways the Curse can take hold, while Expired (lose a hero to wasting away from the Curse) and Shadows Blur Together (kill an ally while afflicted by the Curse) are two of its worse outcomes. Blood Cult is the extreme version - your entire active roster afflicted by the Crimson Curse at once.",
                "The Flesh is Willing (recruit a Flagellant) introduces the DLC's new hero class, while From Rubble to Rabble (build your first Courtyard District building), The Red Hook (build the Red Hook, the Courtyard's most expensive District building), and Happy Together (complete your first matched Trinket set) track the Courtyard's own economy and collection systems. An Unexpected Party (collect the Invitation, dropped by the Courtyard's Gatekeeper enemy) and Jailbreak (rescue a captive in the Courtyard) are both tied to specific Courtyard encounters."
            ]
        },

        {
            heading: "The Color of Madness",
            body: [
                "A Taste Of Madness (complete the first Farmstead quest) opens the DLC, leading toward Beyond The Infinite (defeat the Sleeper, the DLC's final boss) and In The Mouth of Madness (defeat the Sleeper with a party of two afflicted and two virtuous heroes, a much stricter variant of the same fight). A Merciful Act (defeat the Miller, the Farmstead's recurring boss) and There Are No Words (defeat the Thing From The Stars) are two of its other notable encounters.",
                "This Is Nothing, A Hollow Reckoning, and Ashes To Ashes track 100, 200, and 300 kills respectively in the Farmstead's Endless mode, while Lining the Jeweller's Pockets (earn 200 Shards in a single Endless run) and Rogues Gallery (fight every wandering boss in Endless mode) are two more Endless-specific goals.",
                "Tears Lost In The Dust (acquire Mildred's Locket) and Shards Well Spent (collect every Color of Madness trinket) are the DLC's own trinket-collection achievements, while Rainbow's End and Pipe Dream, both about losing a hero equipped with a specific DLC trinket (the Coat of Many Colors and the Miller's Pipe respectively), are unfortunate rather than deliberate.",
                "A Memory Of Better Times (And Spaces) (build the Windmill) and The Blinders Are Lifted (gain the Refracted affliction) are single specific milestones, while Time Is A Flat Circle (kill the Sleeper's Herald with a Riposte counterattack), Blue Skies Ahead (use a Shard Dust provision), Plowshares To Swords (reach Death's Door from the Farmhand's Riposte counterattack), and A Poor Harvest (all four heroes dodge the Miller's Reaping attack in the same turn) are each tied to specific, precisely-timed combat interactions."
            ]
        },

        {
            heading: "The Butcher's Circus",
            body: [
                "Fresh Meat (play your first match) and Mono et Mono (win a match in the dueling grounds) are the earliest achievements in the game's PvP mode. Scare Tactics (cause an enemy hero to have a heart attack), Bright Lights (daze 10 enemies), and One and Done (kill an enemy hero in the first round) are all single-match combat goals.",
                "Taking All Challengers (kill each hero class in the Butcher's Circus) is a longer-term roster-spanning goal, while Shouting Match (win a match using only stress against your enemies), Devil's Luck (have a hero survive 5 Death's Door checks in one match), MVP (have one hero deal deathblows to 4 enemies in one match), Pacemaker (have one hero survive 4 heart attacks in one match), and Naked and Unafraid (win a match without using any trinkets) are all deliberately harder, self-imposed-style match conditions.",
                "Blood Soaks the Sand (win 100 matches), Be Still My Heart! (cause 150 heart attacks), Blood Flood (kill 600 enemies), Crowd Pleaser (reach max Prestige level), and Flawless Execution (win any 10 matches without losing any heroes) are the mode's long-term grinding and mastery goals."
            ]
        },

        {
            heading: "Rare & Secret Feats",
            body: [
                "Burnout, Dueling Duo, The Perfection, Pavlovian, and Cooked to Perfection are six of the rarest achievements in the game, each tied to a narrow, specific combat interaction: losing a hero to Burn damage; two Highwaymen's Riposte counterattacks landing on the same enemy in the same fight; a single Highwayman landing 5 Ripostes in one fight without ever being hit; triggering trinket effects a cumulative 1,000 times across all your campaigns; and having Burn damage from the Hag's cauldron kill the hero trapped inside it.",
                "Faced Worse is the least-documented achievement in the entire game - even dedicated community achievement guides disagree on its exact requirements beyond it being tied to a very specific, rarely-reproduced hero combination reaching the final Darkest Dungeon quest's confrontation with the Ancestor.",
                "Tip: none of these six are worth chasing deliberately early on - they're the kind of achievement that realistically only comes from thousands of hours of normal, varied play eventually producing the right rare combination of events."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through a normal campaign first - nearly every base-game achievement here (quest counts, town upgrades, combat totals, hero losses) accumulates naturally without any dedicated detour.",
                "Buy and play through the Crimson Court and Color of Madness DLCs once the base campaign's completion achievements (Victory, such as it is..., Driven from this land..., Caretaker) are done, since both add their own self-contained storyline and boss fights.",
                "Try the Butcher's Circus PvP mode separately whenever you want a change of pace from the main campaign - its achievements are entirely independent of campaign progress.",
                "Save World End (Stygian difficulty) and Faced Worse, Pavlovian, and the game's other rarest secret feats for last - they're realistically end-of-a-very-long-campaign goals that come together, if at all, only after everything else on this list is already done."
            ]
        }

    ]

};
