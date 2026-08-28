// Total War: WARHAMMER III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/total-war-warhammer-3.json), whose 138
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1142710 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js). None
//   are hidden; every one ships a real, official Steam description,
//   quoted verbatim below.
// - Sections group by the WH3_ACHIEVEMENT_* apiname family: Prologue,
//   generic campaign/battle, the Realm of Chaos and its four gods, the
//   three new factions, the win-a-campaign-as-each-race block, and the
//   Mirror of Madness trials.
export const GUIDE = {
    "slug": "total-war-warhammer-3-achievement-guide",
    "category": "game",
    "gameSlug": "total-war-warhammer-3",
    "icon": "⚔️",
    "title": "Total War: WARHAMMER III Achievement Guide",
    "summary": "A practical guide to all 138 Steam achievements in Total War: WARHAMMER III - none are hidden. Grouped into the Prologue, general campaign and battle feats, the Realm of Chaos and its four Chaos Gods, the new factions (Kislev, Grand Cathay, the Ogre Kingdoms), the win-a-campaign-as-each-race set, and the Mirror of Madness trial challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Total War: WARHAMMER III has 138 Steam achievements and none are hidden. They cover the tutorial Prologue, generic campaign and battle milestones, faction-specific mechanic unlocks, and a large \"win a campaign as race X\" block that spans every race from all three games (available in the combined Immortal Empires campaign).",
                "Nothing is missable - campaigns can be replayed on any difficulty and most achievements have no time limit - but the win-a-campaign set is long (each is a full short-victory campaign) and a few battle achievements want specific hard conditions (outnumbered 10-to-1, the Legendary-difficulty win).",
                "Difficulty and estimatedTime here are curatorial; the win-a-campaign achievements are the real time sink.",
                "Tip: play the win-a-campaign achievements on Immortal Empires at Easy or Normal difficulty with short victory conditions, and pick Legendary Lords whose start position is forgiving. Battle and mechanic achievements will accumulate across those campaigns without extra effort."
            ]
        },
        {
            "heading": "Prologue",
            "body": [
                "The scripted tutorial campaign that ships with the game teaches the basics through Yuri of Kislev's story. These achievements are simply its milestones and can all be done in one two-hour sitting.",
                "The achievements here: Royal Ranks Ramped (During the Prologue, fill Yuri's army with units.); A Mortal Wound Inflicted (During the Prologue, win your first battle in the Chaos Wastes.); Establish & Advance (During the Prologue, construct 5 buildings.); The End of the Beginning (Complete the Prologue.); Enchanted Arsenal (During the Prologue, equip Yuri with every type of magic item.); Two Noble Heads (During the Prologue, recruit a second Lord.); Reverser of Ruin (During the Prologue, capture a settlement in the Chaos Wastes.); Spires to the Sky (During the Prologue, fully upgrade a settlement.); Self-Improvement (During the Prologue, spend 10 skill points.)."
            ]
        },
        {
            "heading": "Campaign Mechanics & Battles",
            "body": [
                "Generic campaign and battle achievements that are not tied to one race: hero and lord levels, mounts and ancillaries, diplomacy (alliances, trade agreements), economy income tiers, razing settlements, allied outposts, loan armies, quest and ambush battles, siege wins and multiplayer battles.",
                "The achievements here: Animated Adversary (Play a multiplayer battle.); Obliterate the Odds (Win a campaign battle in which you are outnumbered 10-to-1.); Quest for Success (Fight a quest battle.); Talented Amateur (Win 10 battles during a single campaign.); Professional Tactician (Win 50 battles during a single campaign.); The Art of Surprise (Win 5 ambush battles during a single campaign.); Blazing Besieger (Win 25 siege attack battles during a single campaign.); Sensational Steed (Have a special mount.); Elevated Excellence (Have 3 special mounts.); White Hat (Have 1 level 10 Hero.); Centres of Excellence (Have 2 level 20 Heroes at the same time.); The Height of Valour (Have 3 level 30 Heroes at the same time.); Rising Power (Have a level 10 Lord.); Dominating Force (Have a level 20 Lord.); Peak Nobility (Have a level 30 Lord.); Tear Down the Walls (Raze 1 settlement.); Burn the World (Raze 30 settlements during a single campaign.); Forward Position (Construct an allied outpost in a military ally's settlement.); Common Cause (Have a military alliance with 5 other factions at the same time.); League of Nations (Have a military alliance with 10 other factions at the same time.); Commercial Comforts (Have a trade agreement with 5 other factions at the same time.); Trading Nation (Have a trade agreement with 10 other factions at the same time.); A Steady Stream (Have a gross income of 5,000 per turn.); Well-Heeled (Have a gross income of 20,000 per turn.); Your Coffers Overfloweth (Have a gross income of 60,000 per turn.); Arms Appropriated (Borrow an army from a military ally.); Partners in Conquest (Play a multiplayer campaign.)."
            ]
        },
        {
            "heading": "The Realm of Chaos & the Chaos Gods",
            "body": [
                "The core WARHAMMER III campaign is a race through the Realm of Chaos to the four gods' domains. These achievements cover entering and completing the Khorne, Nurgle, Slaanesh and Tzeentch realms, the Daemon Prince's ascension and gifts, and each Chaos god faction's own mechanic unlocks (skulls and Bloodletting for Khorne, plagues and infections for Nurgle, gifts and disciple armies for Slaanesh, the Changing of the Ways for Tzeentch).",
                "The achievements here: The Gatekeeper (Defeat the Daemon Prince at the Brass Citadel in the realm of Khorne.); The Gardener (Defeat the Daemon Prince at the Mansion of the Plaguelord in the realm of Nurgle.); The Courtesan (Defeat the Daemon Prince at the Palace of Slaanesh in the realm of Slaanesh.); The Librarian (Defeat the Daemon Prince at the Impossible Fortress in the realm of Tzeentch.); Most Constant Votary (Playing as the Daemon Prince, ascend to a Chaos God's path.); Godly Might Given (Playing as the Daemon Prince, ascend to the Undivided path.); Benisons of the Capricious (Playing as the Daemon Prince, unlock 15 Daemonic Gifts.); Boons of the Mercurial (Playing as the Daemon Prince, unlock 5 Daemonic Gifts.); Into the Aethyr (Enter the Realm of Chaos using a Rift.); The Blood Must Flow (Playing as Khorne, reach the highest level of Bloodletting with an army.); The Collector (Playing as Khorne, collect 10,000 Skulls.); Unmaker of Magick (Playing as Khorne, construct the Khadeium Paradox.); The Blood is the Life (Playing as Khorne, recruit a Bloodthirster to one of your armies.); Intravenous Injection (Playing as Khorne, replace a Herald of Khorne with an Exalted Bloodthirster.); Ailment Accumulator (Playing as Nurgle, collect 5000 Infections.); The Fly Master Cometh (Playing as Nurgle, recruit a Great Unclean One to one of your armies.); Pustulent Promotion (Playing as Nurgle, replace a Herald of Nurgle with an Exalted Great Unclean One.); Angel of Disease (Playing as Nurgle, spread a Plague.); Elements of Decay (Playing as Nurgle, use each Plague Symptom at least once.); Opus Eternal (Playing as Slaanesh, construct the Pandemournium.); Feaster on Fear (Playing as Slaanesh, recruit a Keeper of Secrets to one of your armies.); Succulence Selected (Playing as Slaanesh, replace a Herald of Slaanesh with an Exalted Keeper of Secrets.); Purveyor of Perversion (Playing as Slaanesh, spread a Gift of Slaanesh.); Temptation's Troops (Playing as Slaanesh, summon a Disciple Army.); Revelry in Riddles (Playing as Tzeentch, construct the Symposium of Change.); Change Up (Playing as Tzeentch, replace a Herald of Tzeentch with an Exalted Lord of Change.); Face the Strange (Playing as Tzeentch, unlock all Changing of the Ways actions.); Terror Transmogrified (Playing as Tzeentch, recruit a Lord of Change to one of your armies.); Municipal Manipulator (Playing as Tzeentch, take control of a settlement via the Changing of the Ways.)."
            ]
        },
        {
            "heading": "Kislev, Grand Cathay & the Ogre Kingdoms",
            "body": [
                "Mechanic achievements for the three factions introduced with WARHAMMER III: Kislev (the Motherland, the Elemental Bear, freeing Boris Ursus), Grand Cathay (the Great Bastion, caravans, the Astromancy observatory, the Terracotta Sentinel, Wei-Jin) and the Ogre Kingdoms (camps, the Fire Mouth, tribute, raiding caravans).",
                "The achievements here: The Battle for Bokha (Playing as Kislev, win the quest battle to free Boris Ursus.); The Road to Riches (Playing as Cathay, complete a Caravan's journey.); Heavens Above (Playing as Cathay, construct the Grand Observatory of Xing Po.); Man the Wall (Playing as Cathay, occupy the entirety of the Great Bastion.); Celestial City Secured (Playing as Cathay, occupy Wei-Jin.); Shoulders of Giants (Playing as Cathay, recruit a Terracotta Sentinel to one of your armies.); Matriarchal Power (Playing as Kislev, invoke each type of Motherland in a single campaign.); Reclaim Your Place (Playing as Kislev, occupy Kislev, Erengrad and Praag.); Bear With Me (Playing as Kislev, recruit an Elemental Bear to one of your armies.); Volcanic Vehemence (Playing as the Ogre Kingdoms, construct the Fire Mouth.); Bilious Builder (Playing as the Ogre Kingdoms, deploy 5 camps in a single campaign.); Trader Raider (Playing as the Ogre Kingdoms, destroy a Caravan belonging to Cathay.); Votive Victuals (Playing as the Ogre Kingdoms, offer a tribute of Meat to the Great Maw.)."
            ]
        },
        {
            "heading": "Winning Campaigns",
            "body": [
                "One achievement for winning a campaign as each playable race across all three games - available in Immortal Empires - plus the two-tier versions and the Legendary-difficulty win. This is the bulk of a 100% completion.",
                "The achievements here: Eastern Emperor (Playing as Cathay, win a singleplayer campaign.); Dragon Emperor (Playing as Cathay, win a singleplayer campaign on Very Hard or Legendary difficulty.); All Souls Slain (Playing as the Daemon Prince, win a singleplayer campaign.); Dark Master (Playing as the Daemon Prince, win a singleplayer campaign on Very Hard or Legendary difficulty.); Blood God (Playing as Khorne, win a singleplayer campaign.); Blood-Soaked Victor (Playing as Khorne, win a singleplayer campaign on Very Hard or Legendary difficulty.); Northern Nicator (Playing as Kislev, win a singleplayer campaign.); Oblast Overlord (Playing as Kislev, win a singleplayer campaign on Very Hard or Legendary difficulty.); Legendary Strategist (Win a singleplayer campaign on Legendary difficulty.); Lord of Decay (Playing as Nurgle, win a singleplayer campaign.); Decrepit Defeater (Playing as Nurgle, win a singleplayer campaign on Very Hard or Legendary difficulty.); Tyrant Over All (Playing as the Ogre Kingdoms, win a singleplayer campaign.); Odious Overtyrant (Playing as the Ogre Kingdoms, win a singleplayer campaign on Very Hard or Legendary difficulty.); Prince of Excess (Playing as Slaanesh, win a singleplayer campaign.); Twisted Vanquisher (Playing as Slaanesh, win a singleplayer campaign on Very Hard or Legendary difficulty.); Changer of Ways (Playing as Tzeentch, win a singleplayer campaign.); Winged Warlord (Playing as Tzeentch, win a singleplayer campaign on Very Hard or Legendary difficulty.); Realm of the Ruinous (Playing as the Beastmen, win a singleplayer campaign.); Blood-Grounds, Everywhere! (Playing as the Beastmen, win a singleplayer campaign on Very Hard or Legendary difficulty.); Heirs of Breton (Playing as Bretonnia, win a singleplayer campaign.); Age of Chivalry (Playing as Bretonnia, win a singleplayer campaign on Very Hard or Legendary difficulty.); Favoured Son of Chaos (Playing as Warriors of Chaos, win a singleplayer campaign.); The End Times Approach (Playing as Warriors of Chaos, win a singleplayer campaign on Very Hard or Legendary difficulty.); Sons of Hashut (Playing as the Chaos Dwarfs, win a singleplayer campaign.); Engines of Ruin (Playing as the Chaos Dwarfs, win a singleplayer campaign on Very Hard or Legendary difficulty.); Dreadlord (Playing as the Dark Elves, win a singleplayer campaign.); Witch King (Playing as the Dark Elves, win a singleplayer campaign on Very Hard or Legendary difficulty.); Dawi Dominance (Playing as Dwarfs, win a singleplayer campaign.); Age of Reckoning (Playing as Dwarfs, win a singleplayer campaign on Very Hard or Legendary difficulty.); Imperials of Excellence (Playing as the Empire, win a singleplayer campaign.); Legends Amongst Men (Playing as the Empire, win a singleplayer campaign on Very Hard or Legendary difficulty.); Da Best Waaagh! (Playing as Greenskins, win a singleplayer campaign.); Da Greatest Waaagh! Ever! (Playing as Greenskins, win a singleplayer campaign on Very Hard or Legendary difficulty.); Asur Prince (Playing as the High Elves, win a singleplayer campaign.); Phoenix King (Playing as the High Elves, win a singleplayer campaign on Very Hard or Legendary difficulty.); Slann Mage-Priest (Playing as the Lizardmen, win a singleplayer campaign.); Old One (Playing as the Lizardmen, win a singleplayer campaign on Very Hard or Legendary difficulty.); The Dark Gods' Playthings (Playing as Norsca, win a singleplayer campaign.); Immortal Marauders (Playing as Norsca, win a singleplayer campaign on Very Hard or Legendary difficulty.); Warlord (Playing as the Skaven, win a singleplayer campaign.); Verminlord (Playing as the Skaven, win a singleplayer campaign on Very Hard or Legendary difficulty.); Walk Like a Nehekharan (Playing as the Tomb Kings, win a singleplayer campaign.); King of Kings (Playing as the Tomb Kings, win a singleplayer campaign on Very Hard or Legendary difficulty.); Master of the Seas (Playing as a Vampire Coast, win a singleplayer campaign.); A Tale will be Told (Playing as a Vampire Coast, win a singleplayer campaign on Very Hard or Legendary difficulty.); Lambs to the Slaughter (Playing as the Vampire Counts, win a singleplayer campaign.); Necromantic Dominance (Playing as the Vampire Counts, win a singleplayer campaign on Very Hard or Legendary difficulty.); Season of Supremacy (Playing as Wood Elves, win a singleplayer campaign.); Age of the Eternal Oak (Playing as Wood Elves, win a singleplayer campaign on Very Hard or Legendary difficulty.)."
            ]
        },
        {
            "heading": "Mirror of Madness Trials",
            "body": [
                "The Mirror of Madness challenge mode (added alongside the Shadows of Change / Omens of the Bear content) sets fixed-army battle puzzles with bronze, gold and platinum medal tiers. These achievements track clearing those trials at each medal level.",
                "The achievements here: Black Fire Schemer (Achieve a score of 15000 in the Black Fire Pass Trial.); Hel Fenn Schemer (Achieve a score of 15000 in the Hel Fenn Trial.); Fallen Schemer (Achieve a score of 15000 in the Fallen Gates Trial.); Dark Schemer (Achieve a score of 15000 in the Altar of Ultimate Darkness Trial.); Tzeentchian Schemer (Achieve a score of 15000 in the Realm of Tzeentch Trial.); Black Fire Mastermind (Achieve a score of 50000 in the Black Fire Pass Trial.); Hel Fenn Mastermind (Achieve a score of 50000 in the Hel Fenn Trial.); Fallen Mastermind (Achieve a score of 50000 in the Fallen Gates Trial.); Dark Mastermind (Achieve a score of 50000 in the Altar of Ultimate Darkness Trial.); Tzeentchian Mastermind (Achieve a score of 50000 in the Realm of Tzeentch Trial.); Ultimate Mastermind (Achieve a score of 100000 in all Trials of Fate.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Prologue first - it is the tutorial and clears its whole achievement block in one sitting.",
                "2. Play the base Realm of Chaos campaign once (as a Chaos god or the Daemon Prince) to get the enter/complete-realm and Daemon Prince achievements, and once as Kislev, Cathay and an Ogre lord for their mechanic sets.",
                "3. Switch to Immortal Empires and grind the Winning Campaigns list one race at a time on a low difficulty with short victory - the campaign-mechanic and battle achievements fill in alongside.",
                "4. Do the Mirror of Madness trials as a self-contained block whenever you want a break from campaigns.",
                "5. Finish with the hard battle conditions (Obliterate the Odds, the Legendary win) once you are comfortable.",
                "Tip: keep short victory conditions selected in campaign setup - the Winning achievements trigger on short victory, so there is no need to play on to a long or ultimate victory unless you want to."
            ]
        }
    ]
};
