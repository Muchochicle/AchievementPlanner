// Total War: Shogun 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/total-war-shogun-2.json), whose 106 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   34330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "total-war-shogun-2-achievement-guide",
    "category": "game",
    "gameSlug": "total-war-shogun-2",
    "icon": "⚔️",
    "title": "Total War: Shogun 2 Achievement Guide",
    "summary": "A practical guide to all 106 Steam achievements in Total War: Shogun 2 - none are hidden. Covers multiplayer combat and rank milestones, grand campaign progression, every clan's campaign victory, and the Fall of the Samurai expansion's avatar, historical battle, and clan-specific content.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Total War: Shogun 2 has 106 Steam achievements and none are hidden. The base game splits into multiplayer combat and Avatar Conquest milestones (province captures, clan tokens, skill trees, siege wins, multiplayer win counts), general battle-tactics feats (all-hero armies, unit-class variety, cavalry-free or ranged-free wins), and grand campaign progression - becoming Shogun, controlling whole islands, maxing out agents, and winning a full campaign as every one of the game's clans across every difficulty tier. The Fall of the Samurai expansion adds its own avatar skill trees, a full set of historical battle achievements, and clan-specific objectives for each of its playable factions.",
                "Nothing is missable - every multiplayer, campaign, and historical-battle achievement can be earned in any future match or campaign, and clan-victory achievements simply accumulate as you play more campaigns with different clans. The genuine long poles are winning a campaign with every clan across every difficulty (up to Legendary) and Zen-like Dedication (200 multiplayer battles of any type), both of which need very broad, sustained play rather than a single strong session.",
                "Tip: the per-clan victory achievements (Hojo, Oda, Takeda, Tokugawa, Chosokabe, Date, Mori, Shimazu, Uesugi) do not need Legendary difficulty each - clear them on Easy or Normal first to bank the clan-specific achievement, then chase the harder difficulty-tier achievements (Famous Shogun, Against All Odds) separately with whichever clan you are strongest with."
            ]
        },
        {
            "heading": "Multiplayer Combat & Ranks",
            "body": [
                "Early multiplayer and Avatar Conquest achievements: holding provinces on the clan map, capturing provinces solo, joining a clan, spending your skill tree, leveling a veteran unit, keeping ashigaru from routing, hiding your army for 30+ seconds, defeating a Creative Assembly staffer, an all-hero-unit win, holding every key building, 10 multiplayer battles, rallying 5 units at once, and siege wins as attacker and defender.",
                "The achievements here: Stranglehold (Your clan holds 5 provinces simultaneously on the multiplayer clan campaign map.); Carve a Path (Capture 15 provinces on the avatar campaign map.); Uniter of Japan (Capture all provinces on the avatar campaign map.); Loyal to the Clan (Personally earn 20 clan tokens.); Serve with Honour (Join a multiplayer clan in Shogun 2.); Path of the Leader (Spend the maximum number of points in your avatar's skill tree.); Heroic Warriors (Through the avatar system, get a veteran unit to level 9.); Exceptional Warriors (Through the avatar system, get a veteran unit to level 4.); Commander of Commoners (Keep at least 4 ashigaru units for a whole battle without routing once.); Elusive Strike force (Have all your army, except the general, hidden simultaneously for more than 30 seconds.); Spreading Like Wildfire (Defeat a Creative Assembly staff member in battle, or anyone else who has gained this achievement.); Legendary Force (Win a battle using an army composed entirely of hero units and your general.); Battlefield Dominance (On maps with more than one key building, your alliance shows its dominance by holding all of them simultaneously.); Experienced Taisho (Play 10 multiplayer battles of any type.); Inspiring Counterattack (Successfully rally 5 units at once with one use of the general's rally ability.); Castle-stormer (Win 10 siege battles as the attacker.); Man the Defences (Win 10 siege battles as the defender.); The Dragon of Japan (Win 100 matchmade battles in multiplayer.); Master of the Waves (Win 20 naval battles in multiplayer.); Bringer of Death (Win 50 matchmade battles in multiplayer.)."
            ]
        },
        {
            "heading": "Multiplayer Mastery & Battle Tactics",
            "body": [
                "Multiplayer win-count milestones (25 up to 200 battles of various types), naval battle wins, matchlock-heavy and unit-class-balanced army wins, cavalry-free and ranged-free wins, a low-casualty win, and completely wiping out an enemy unit.",
                "The achievements here: Zen-like Dedication (Win 200 multiplayer battles of any type.); The Army on the March (Win 25 land battles.); Claw of the Tiger (Win 25 matchmade battles in multiplayer.); Swathed in Fire (Win a multiplayer battle where more than 50% of your army is made up of matchlock units.); Balanced Attacker (Win a battle using an army composed of at least one of every class of unit (sword infantry, cavalry, archer, matchlock, spear, naginata).); The Gathering Storm (Win a multiplayer battle using no cavalry units (excluding the general) in your army.); Berserk Charge (Win a multiplayer battle using no ranged units in your army.); Fear No Horseman (Win a multiplayer battle using no spear units in your army.); Onna-Bugeisha (Win a defensive siege battle with the lady of the house, the Onna Bushi, as your general. (Single Player Only)); Forged in the Hottest Flame (Win your first multiplayer battle.); Swift and Deadly (Win a multiplayer battle losing less than 15% of your starting troops.); Unnecessary Force (Completely wipe out an enemy unit.)."
            ]
        },
        {
            "heading": "Grand Campaign Progression",
            "body": [
                "Becoming Shogun, controlling all of Kyushu and Shikoku, wiping out the Hattori clan, collecting 10,000 heads, maxing a general/metsuke/missionary/monk/ninja, reaching 100 fame in 50 turns, maxing a unit's rank, monopolizing trade posts, and being first to master epic architecture, gunpowder, or Shih.",
                "The achievements here: Divine Right (Achieve the ultimate goal and become Shogun in the grand campaign.); Holder of Kyushu (Control all the provinces on the island of Kyushu in the campaign.); Holder of Shikoku (Control all the provinces on the island of Shikoku in the campaign.); Eradicate the Hattori (Wipe out the Hattori clan in the campaign.); Head-Hunter (Collect 10,000 heads of enemy soldiers.); Fearsome Commander of Men (Obtain a maximum level general in the campaign.); Master Interrogator (Obtain a maximum level metsuke.); Servant of God (Obtain a maximum level missionary.); Legendary Sohei (Obtain a maximum level monk.); Agent of the Stealthy Blade (Obtain a maximum level ninja in the campaign.); Soaring Fame (Obtain 100 fame within 50 turns.); Living for Battle (Obtain a unit of maximum rank in the grand campaign.); Trade Route Monopoly (Control all the trade posts on the campaign map at the same time.); Glittering Grand Cities (Be the first clan in the campaign to master the art of epic architecture.); Advanced Firearms (Be the first clan in the campaign to obtain gunpowder mastery.); Military Might (Be the first clan in the campaign to master the art of Shih.); Belligerent Admiral (Sink a nanban trade ship or the flagship vessel the Nihon Maru during a naval battle.)."
            ]
        },
        {
            "heading": "Clan Campaign Victories",
            "body": [
                "Winning a campaign as each clan (Hojo, Oda, Takeda, Tokugawa, Chosokabe, Date, Mori, Shimazu, Uesugi), as a Christian daimyo, at every difficulty from Easy through Legendary, wiping out the Ikko-Ikki, and winning multiplayer co-op and head-to-head campaigns.",
                "The achievements here: Hojo Victory (Win a campaign as the Hojo clan.); Oda Victory (Win a campaign as the Oda clan.); Takeda Victory (Win a campaign as the Takeda clan.); Tokugawa Victory (Win a campaign as the Tokugawa clan.); Chosokabe Victory (Win a campaign as the Chosokabe clan.); Date Victory (Win a campaign as the Date clan.); A Promising Beginning (Win a campaign on easy difficulty.); One Rule Under God (Win a campaign as a Christian daimyo.); Famed Shogun (Win a campaign on hard difficulty.); A Respectable Rule (Win a campaign on normal difficulty.); Mori Victory (Win a campaign as the Mori clan.); United in Conquest (Win a multiplayer co-op campaign.); Japan Torn Asunder (Win a multiplayer head to head campaign.); Dishonoured Foe (Win a multiplayer head to head campaign despite giving the other player 10,000 koku.); Shimazu Victory (Win a campaign as the Shimazu clan.); Uesugi Victory (Win a campaign as the Uesugi clan.); Eradicate the Ikko-Ikki (Wipe out the Ikko-Ikki in the campaign.); Stubborn Pursuer of Victory (Win a campaign on very hard difficulty.); There Can Be Only One (Achieve the ultimate accolade and obtain rank 1 on the multiplayer Shogun Ladder.); Against All Odds (Win a campaign on legendary difficulty.); Summer Son  (Your daimyo wins 3 consecutive land battles during the summer season.)."
            ]
        },
        {
            "heading": "Fall of the Samurai: Avatar & Historical Battles",
            "body": [
                "Maxing a Fall of the Samurai avatar skill tree, creating a second avatar, defeating an army from the other game's era, and clearing the expansion's historical battles - Toba-Fushimi, Osaka, Ueno, Aizu, Miyako Bay, and Hakodate - through to Journey's End.",
                "The achievements here: Skilled Warrior (Max out any [Fall of the Samurai] avatar skill tree, by spending a skill point in each skill within a single skill tree.); Double Dragons (Create a second avatar for use in avatar conquest mode.); Keeping to Traditions (Defeat a Fall of the Samurai army with a Shogun 2 army.); Modernisation (Defeat a Shogun 2 army with a Fall of the Samurai army. [Fall of the Samurai only]); Not On My Watch (Chase down and rout an enemy unit as it tries to escape the Battle of Toba-Fushimi. [Fall of the Samurai only]); A Journey Begins (Play a historical battle. [Fall of the Samurai only]); Uphill Struggle (Win the Battle of Osaka after both bridges get blown up by the defenders. [Fall of the Samurai only]); A Blow to the Temple (Win the Battle of Ueno without capturing any of the key temple buildings. [Fall of the Samurai only]); Wrecking Ball (Win the Battle of Aizu after provoking all four hidden armies at once. [Fall of the Samurai only]); The Iron Lady (Complete the Battle of Miyako Bay with the Kotetsu having taken less than 25% damage. [Fall of the Samurai only]); Perfect Ten (Complete the Battle of Hakodate without any Imperial units being routed. [Fall of the Samurai only]); Journey's End (Complete all historical battles. [Fall of the Samurai only])."
            ]
        },
        {
            "heading": "Fall of the Samurai: Clan-Specific & Naval Feats",
            "body": [
                "Clan-specific Fall of the Samurai objectives for the Choshu, Satsuma, Tosa, Aizu, Nagaoka, and Jozai, plus general expansion achievements - defensive winter sieges, gifting units in co-op, US Marine and British/French naval feats, railways, maxed agents, legendary-difficulty clan victories, drop-in battles, independence, and siege fire-and-recapture feats.",
                "The achievements here: Requiem of the Dead (Win a defensive siege battle with your daimyo during any winter turn.); Gift-wrapped (Gift your co-op partner an army or navy.); Agent Provocateur (Playing as the Choshu, incite 3 rebellions in the same campaign using an ishin shishi. [Fall of the Samurai only]); Gateway to the West (Playing as the Satsuma, construct a trade district and trade with a foreign power within the same campaign. [Fall of the Samurai only]); Father of the Imperial Navy (Playing as the Tosa, carry out 5 naval bombardments in the same campaign. [Fall of the Samurai only]); Wolves of Mibu (Playing as the Aizu, carry out 3 successful assassinations of generals in the same campaign using a shinsengumi. [Fall of the Samurai only]); One Hundred Sacks of Rice (Playing as the Nagaoka, research any eighth tier technology. [Fall of the Samurai only]); Hereditary Honour (Playing as the Jozai, win 3 ambush battles in the same campaign. [Fall of the Samurai only]); Semper Fi (Win a battle with United States Marines in your army. [Fall of the Samurai only]); Rule, Britannia! (Win a battle with British ships in your navy. [Fall of the Samurai only]); L'Ocean is Mine! (Carry out a bombardment with a French ironclad in your navy. [Fall of the Samurai only]  ); Embrace the New (Attain the maximum level of clan development. [Fall of the Samurai only]); All Aboard! (Construct a railway between 2 provinces. [Fall of the Samurai only]); Thy Will Be Done (Obtain a maximum level agent of each type. [Fall of the Samurai only]); Hero of the Empire (Win a campaign on legendary difficulty playing as either the Satsuma, the Tosa or the Choshu. [Fall of the Samurai only]); Hero of the Shogunate (Win a campaign on legendary difficulty playing as either the Aizu, the Jozai or the Nagaoka. [Fall of the Samurai only]); The Duellist (Fight a drop-in battle.); Ezo Republic (Declare your independence and complete a campaign. [Fall of the Samurai only]); A Warrior's Bane (Sink  an HMS Warrior-class ship. [Fall of the Samurai only]); Hard Pounding (Call in naval fire support during a land battle. [Fall of the Samurai only]); Damn the Torpedoes (Sink an enemy ship by ramming. [Fall of the Samurai only]); Warhead (Sink an enemy ship with torpedoes. [Fall of the Samurai only]); Towering Inferno (As the attacker, burn a castle's gates, towers and tenshu to the ground using fire arrows and win the battle.); Redoubtable (As the defender, recapture a tower.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play multiplayer battles regularly to build up the win-count and rank achievements (10, 25, 50, 100, 200 battles), picking up the siege, naval, and unit-composition achievements (all-hero army, no-cavalry win, no-ranged win) as situations allow.",
                "2. Push Avatar Conquest: capture provinces, join a clan, spend your full skill tree, and level a veteran unit up through the ranks.",
                "3. Play the grand campaign toward becoming Shogun, controlling entire islands, maxing out your general and agents, and monopolizing trade routes.",
                "4. Play a campaign with each of the game's clans (Hojo, Oda, Takeda, Tokugawa, Chosokabe, Date, Mori, Shimazu, Uesugi) for their individual victory achievements, then replay with your strongest clan across the difficulty ladder up to Legendary.",
                "5. If you own the Fall of the Samurai expansion, max an avatar skill tree, create a second avatar, and clear every one of its historical battles, then work through each of its unique clans' specific objectives (Choshu rebellions, Satsuma trade, Tosa bombardments, and more).",
                "Tip: Journey's End (complete all historical battles in Fall of the Samurai) is its own self-contained checklist separate from the main campaign - tackle it as a dedicated side project once you are comfortable with the expansion's unit roster, rather than trying to fit it in during a normal campaign playthrough."
            ]
        }
    ]
};
