// Songs of Conquest Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/songs-of-conquest.json), whose 75 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   867210 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "songs-of-conquest-achievement-guide",
    "category": "game",
    "gameSlug": "songs-of-conquest",
    "icon": "🎼",
    "title": "Songs of Conquest Achievement Guide",
    "summary": "A practical guide to all 75 Steam achievements in Songs of Conquest - none are hidden. Covers the combat and spell feats, and the faction, campaign and win-condition achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Songs of Conquest has 75 Steam achievements and none of them are hidden. About half are combat and spell feats done in any game - spell combos (five Apocalypse casts on one turn, three Chain Lightning kills), attack and kill feats, the \"Die by the Sword / Bow / Staff\" lifetime counters (100,000 kills each), and battle-win feats (win before the enemy's turn, win a siege as attacker and defender). The rest are progression and completion: reach wielder levels 8/16/24/32, win 25 non-campaign maps with each faction (Arleon, Barya, Loth, Rana, plus the Vanir, Roots and Yulan DLC factions), and complete each faction's campaign - some also on Overwhelming difficulty.",
                "Nothing is missable - all campaigns, maps and modes are replayable and the lifetime counters only go up. This is a long completion mainly because of the 100,000-kill counters, the 25-wins-per-faction requirement across seven factions, and the Overwhelming-difficulty campaign finales.",
                "Tip: the lifetime kill counters (Die by the Sword / Bow / Staff, 100,000 each) tick up in every game you play, so just play normally toward the faction-win and campaign achievements and they will finish on their own."
            ]
        },
        {
            "heading": "Combat Feats & Spells",
            "body": [
                "The spell-combo feats (five Apocalypse casts, three Chain Lightning kills, Blind Hatred, Breath of the Phoenix, Dimensional Door, Repel, Swap), attack-count and multi-kill feats, the Die by the Sword / Bow / Staff 100,000-kill counters, casting each spell, Charged and Front Line Fighter buff stacks, double / multi / ultra kills, killing sprees, sieges as attacker and defender, a no-attack win, a win before the enemy's turn, a one-unit win, the Trojan Horse teleport, and maxing a town.",
                "The achievements here: Bringer of Ruin (Cast five Apocalypse spells on the same troop turn); The Song of Stoutheart (Complete all Arleon campaign maps (on any difficulty)); Death To Diplomacy (Complete the last Arleon campaign map on Overwhelming difficulty); Dressed For Success (Have a wielder equipped with artifacts in all slots); Attack Bonanza (Have troop perform six attacks on its turn); The Price of Freedom (Complete all Barya campaign maps (on any difficulty)); A Life's Worth (Complete the last Barya campaign map on Overwhelming difficulty); This Spot's Taken (Block an enemy troop from burrowing up); Hello There (Burrow up next to three or more ranged enemy troops); Versatile Wielder (Cast each spell (over any number of games)); Unlimited Power! (Kill three enemies using Chain Lightning); Fully Charged (Have ten or more Charged buffs on a troop); Coming Through! (Trigger three Attacks of Opportunity in a single Bull Rush); Critical Hit (Deal 500 damage or more in one attack); Deepstrike (Use Dimensional Door to position your troop in three or more Zones of Control); Die by the Bow (Kill 100 000 enemies using ranged attacks); Die by the Staff (Kill 100 000 enemies using magic damage); Die by the Sword (Kill 100 000 enemies using melee attacks); Double Kill (Win two battles on the same turn with the same wielder); Barbecue (Kill three enemies with one flame attack); In The Thick Of It (Have three or more Front Line Fighter buffs on a troop); Full House (Win a battle using each of the official wielders); Infernal Influence (Make enemy kill his friend using Blind Hatred); Killing Spree (Win six battles in a row on the same turn); Together For Her (Complete all Loth campaign maps (on any difficulty)); An Empress's Hope (Complete the last Loth campaign map on Overwhelming difficulty); Multi Kill (Win three battles on the same turn with the same wielder); Proof That Luck Can Be Consistent (Win 25 multiplayer (online or hotseat) games); Death From Above (Kill three enemies using Breath of the Phoenix); Whoops! (Have your troop die from a Quick retaliation); From the Ashes (Complete all Rana campaign maps (on any difficulty)); The Marsh Expands (Complete the last Rana campaign map on Overwhelming difficulty); Don't Touch My Stuff (Reclaim your town or settlement that is being occupied/razed/converted by the enemy); Such A Fungi (Use Repel to push an enemy troop into three Explosive Fungi); Sorcerous Spree (Cast five spells on the same troop turn); Get Over Here! (Swap enemy troop into Acid Cloud); Cleave (Kill three enemies with one sweeping attack); Landlord Extraordinaire (Max out a town in a non-campaign game (tier 5, walls, upgraded buildings on all build sites) ); Trojan Horse (Use a teleport spell to get on top of or behind the walls in a town siege); Ultra Kill (Win four battles on the same turn with the same wielder)."
            ]
        },
        {
            "heading": "Factions, Campaigns & Win Conditions",
            "body": [
                "Reaching wielder levels 8, 16, 24 and 32, completing the Arleon, Barya, Loth, Rana, Rise Eternal and Yulan campaigns (and their finales on Overwhelming difficulty), 25 non-campaign wins with Arleon, Barya, Loth, Rana, Vanir, Roots and Yulan, the Blind Hatred own-troop feat, an artifact-set completion, the No Challenge feat, the Serimnaan and fish and Vildra and Mother's Embrace and Lunge and beam-duel feats, all Roots essence research, a no-troops-purchased win, 1,000 Risen in Kastus Maal's army, the Grey Tor sidequests, and the house Li / Sheng / Xuan single-house wins.",
                "The achievements here: Adept (Reach level 8 with a wielder); Veteran (Reach level 16 with a wielder); Master (Reach level 24 with a wielder); Grand Master (Reach level 32 with a wielder); Humiliation (Win a battle before the enemy gets a turn); Pyrrhic Victory (Win a battle with only a single one unit left); Expert Essence Employment (Win a battle without making an attack); Veni, Vidi, Vici (Win a battle against a walled town); Venisti, Vidisti, Perdidisti (Defend a walled town in battle); Kneel, peasant! (Win 25 times on non-campaign maps with Arleon); Contractually Obligated to Win (Win 25 times on non-campaign maps with Barya); I Like It A Loth (Win 25 times on non-campaign maps with Loth); Here be Dragons (Win 25 times on non-campaign maps with Rana); Oops! (Have enemy kill one of your own troops when you cast Blind Hatred); Ready, Set, Go (Complete an artifact set containing at least four pieces in a non-campaign game); No Challenge At All (Challenge an enemy and have it die before it gets a chance to attack); Grisfest (Have 540 Serimnaans return to be drafted); So Long, and Thanks for All the Fish (Win a battle using a fish); Steadfast (As Vanir, win a game without ever purchasing a Vildra troop); Great Deeds Done (Win 25 times on non-campaign maps with Vanir); Core Kernel of Essence (As a Roots player, purchase all available essence research); Smothered (Absorb 1,000 damage using the Mother's Embrace trait); No Free Lunge (Use Lunge ability to finish off an enemy after it was Repelled away); Heart to Heart (Win a beam duel); Personal Growth (Win 25 times on non-campaign maps with Roots); Boycott (Win a game without ever purchasing a troop); Zounds like a Loth (Have 1000 Risen in Kastus Maal's army); Rise Eternal (Complete all Rise Eternal campaign maps (on any difficulty)); Restoration of Grey Tor (Restore all that the Faey have destroyed around Grey Tor); Winning Is Like Li (Win a non-campaign game using only house Li wielders and troops); Sheng Happens (Win a non-campaign game using only house Sheng wielders and troops); There Can Be Only Xuan (Win a non-campaign game using only house Xuan wielders and troops); Once Divided Now United (Win 25 times on non-campaign maps with Yulan); Three Houses (Complete all Yulan campaign maps (on any difficulty)); The Houses United (Complete the last Yulan campaign map on Overwhelming difficulty)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through each faction's campaign for those completion achievements.",
                "2. Do the campaign finales again on Overwhelming difficulty for the harder variants.",
                "3. Play custom / non-campaign maps toward 25 wins with each of the seven factions, doing the spell-combo and battle feats as they come up.",
                "4. Let the Die by the Sword / Bow / Staff counters (100,000 kills each) accumulate across all that play.",
                "5. Do the specific one-off feats (the fish win, the no-troops win, the single-house wins, the artifact set, the Trojan Horse) in dedicated custom games.",
                "Tip: for the 25-wins-per-faction grind, generate a small skirmish map with one weak AI and the fastest victory condition, then replay it per faction - a 15-minute win still counts, so you never need to play a full four-hour map for these."
            ]
        }
    ]
};
