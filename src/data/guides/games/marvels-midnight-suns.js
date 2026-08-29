// Marvel's Midnight Suns Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/marvels-midnight-suns.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   368260 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 5 hidden achievements ship
//   no Steam description; their conditions here are curatorial - story
//   markers/endings kept spoiler-light, secret-boss feat conditions
//   cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "marvels-midnight-suns-achievement-guide",
    "category": "game",
    "gameSlug": "marvels-midnight-suns",
    "icon": "🌗",
    "title": "Marvel's Midnight Suns Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Marvel's Midnight Suns - abbey, friendships & systems, mysteries, words of power & combat, dlc: deadpool, venom, morbius, storm & dracula, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Marvel's Midnight Suns has 72 Steam achievements, 5 of them hidden (all main-campaign story markers). The rest cover the Abbey hub and Friendship systems, the mysteries and Words of Power, the tactical-combat feats, and the four character DLCs (Deadpool, Venom, Morbius, Storm) plus Dracula's Tomb.",
                "Nothing is permanently missable in a single campaign - but several achievements (every Haven, every Abbey upgrade, all Club meetings, both Balance maxes) want a full, unrushed playthrough, and the DLC ones need those add-ons owned.",
                "Tip: play one long campaign doing all the Abbey side content (Havens, Clubs, mysteries, petting the animals daily), and pick up the combat feats in missions as they come up. Do the character DLCs as their heroes join."
            ]
        },
        {
            "heading": "Abbey, Friendships & Systems",
            "body": [
                "The hub content: gaining and maxing Friendship with heroes and the team, finding every Haven, the cosmetic and Hunter's Quarters goals, the Item Bench / Cauldron / Forge crafting taps, building every Abbey upgrade, petting Charlie and Ebony, the Abbey Clubs, Daily Sparring, ability mods, and the THREAT Room.",
                "The achievements here: Are You On Superlink? (Gain a Friendship Level with any hero.); Did We Just Become Best Friends? (Reach the maximum Friendship Level with any hero.); Friendship is Magic (Reach the maximum Team Friendship Level in the Abbey.); Hunter the Explorer (Find every Haven on the Abbey Grounds in a single campaign.); Cape of Many Colors (Apply a Suit palette to every Hero in a single campaign.); And Look Good Doing It (Spend 1500 Gloss on cosmetic options for the Hunter.); Make a House a Home (Purchase 10 different upgrades for the Hunter's Quarters.); Might Need Pockets (Craft a combat item at the Item Bench.); Fire Burn and Cauldron Bubble (Use Agatha's Cauldron to complete a Recipe.); With a Box of Scraps (Craft a hero ability card in the Forge.); You Absolute Legend (Complete a Midnight Sun Challenge in the Forge.); Fully Operational (Build every Abbey upgrade in a single campaign.); The Best Girl (Pet Charlie 15 days in a row.); Unrequited Love (Pet Ebony on 4 different days.); Extracurricular Activities (Attend all Abbey Club meetings in a single campaign.); Spread the Pain (Complete a Daily Sparring session with every hero.); Some Minor Adjustments (Apply mods to 10 different hero abilities.); T.H.R.E.A.T. Eliminated (Survive 3 turns in the THREAT Room with every hero.); Elemental, My Dear Agatha (Solve the mystery of Agatha's Altar.); Atum's Call (Acquire the \"Reveal\" Word of Power.); Hyppus' Aid (Acquire the \"Purify\" Word of Power.)."
            ]
        },
        {
            "heading": "Mysteries, Words of Power & Combat",
            "body": [
                "The mid-game systems: the three Words of Power, opening 25 Arcane Chests, collecting Reagents, the Abbey mysteries (Agatha's Altar, Hiram Shaw's church, Lilith's Garden), maxing Light and Dark Balance, every Hunter ability, the Mission Challenges, and the combat feats (Heroism spend, 8 abilities in a turn, environmental KOs, Hero Combos, no-damage missions, redraws, Legendary abilities).",
                "The achievements here: Set's Favor (Acquire the \"Break\" Word of Power.); The Keymaster (Open 25 Arcane Chests.); Wisdom of the Woods (Collect 10 of every Reagent.); A Coven Restored (Solve the mystery of Hiram Shaw's church.); A Mother's Gift (Solve the mystery of Lilith's Garden.); A Shining Light (Reach maximum Light Balance.); A Growing Darkness (Reach maximum Dark Balance.); Fully Armed (Acquire every Hunter ability.); Challenge Accepted (Complete 10 Mission Challenges.); You Have the Lead (Complete a general mission led by every hero.); Back in Time for Lunch (Complete a general mission in 2 turns or less.); We Have Ways (Interrogate 5 enemies.); KKRRAKATHOOM (Spend 10 Heroism with a single ability.); Quantity is Quality (Use 8 hero abilities in a single turn.); Collateral Damage (KO 4 enemies with a single environmental.); Dream Team (KO a villain with a Hero Combo.); Speed Kills (KO a villain with a Quick ability.); Kitchen Sink (Use 5 environmentals in a single turn.); Wilhelm Scream (Knockback 2 enemies into Drops in a single turn.); Not a Scratch (Complete a general mission where no hero takes Health damage.); Pinball Wizard (KO multiple enemies with a single Knockback 25 times.); Needful Things (Use 25 combat items.); Trading Up (Redraw 75 cards.); Big Guns (Use 3 different Legendary hero abilities in a single mission.); Big Game Hunter (Obtain all other Midnight Suns Achievements)."
            ]
        },
        {
            "heading": "DLC: Deadpool, Venom, Morbius, Storm & Dracula",
            "body": [
                "The four character DLCs plus Dracula's Tomb: each new hero's story missions, research, and Midnight Sun Challenge, their signature-mechanic feats (En Fuego, Ravenous, Bloodlust, Next Turn / Stun), the Whisper Web and Laboratory goals, and the Hemophobic Vampyre-mission feat.",
                "The achievements here: The Good, the Bad, and the Undead (Complete all Deadpool story missions.); Dr. Deadpool, MD, PhD, JD, RN, CPA (Complete all Deadpool research.); That Special Feeling (Complete Deadpool's Midnight Sun Challenge mission.); Time to Make the Chimichangas! (Reach maximum En Fuego with Deadpool.); Hemophobic (Complete a Vampyre mission without any hero gaining Bleed from a Vampyre Bite.); Redemption (Complete all Venom story missions.); Comeback King (Complete all Venom research.); Lethal Protector (Complete Venom's Midnight Sun Challenge mission.); Never Been Satisfied (Completely spend and then refill Venom's Ravenous meter in a single encounter.); It's All Connected (Modify 5 general missions using the Whisper Web.); The Hunger (Complete all Morbius story missions.); Beyond Biochemistry (Complete all Morbius Research.); Bond of Blood (Complete Morbius' Midnight Sun Challenge mission.); Living Vampire (Use Morbius' \"Bloodlust\" on the first turn, then retain Bloodlust for the rest of the mission.); What's In This, Anyway? (Apply stat modifications to 5 different heroes using the Laboratory.); Blood Storm (Complete all Storm story missions. ); Elemental Teachings (Complete all Storm Research.); Blessings of the Goddess (Complete Storm's Midnight Sun Challenge mission.); Patience, Young One (Play 3 Storm abilities with activated Next Turn bonuses on the same turn. ); Shocking Development (Stun 4 enemies with Storm abilities in a single turn. ); Dracula's Tomb (Complete the Dracula Tomb's mission.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - story markers, endings or secret-boss feats:",
                "The achievements here: Lilith Returns (Reach a story marker in the campaign (story achievement, no plot detail).); Oshtur's Gift (Reach a story marker in the campaign (story achievement, no plot detail).); A Light Extinguished (Reach a story marker in the campaign (story achievement, no plot detail).); Big Mad (Reach a story marker in the campaign (story achievement, no plot detail).); Family is Forever (Reach a story marker near the finale (story achievement, no plot detail).)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign unrushed: find every Haven, attend every Club, solve every mystery, and do Daily Sparring and pet the animals.",
                "2. Work the systems - the three Words of Power, 25 Arcane Chests, ability mods, both Balance maxes, every Hunter ability.",
                "3. Grab the combat feats in missions (environmental KOs, Hero Combos, 8-ability turns, no-damage clears, Legendary abilities).",
                "4. Play the Deadpool, Venom, Morbius and Storm DLCs and Dracula's Tomb for their mission, research and signature-mechanic achievements.",
                "Tip: Not a Scratch (a mission with zero Health damage to any hero) is easiest on an early, easy general mission with a Block-heavy team - use Redraw to find defensive cards and end enemy turns before they can connect."
            ]
        }
    ]
};
