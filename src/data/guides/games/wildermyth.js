// Wildermyth Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wildermyth.json), whose 94 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   763890 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wildermyth-achievement-guide",
    "category": "game",
    "gameSlug": "wildermyth",
    "icon": "📖",
    "title": "Wildermyth Achievement Guide",
    "summary": "A practical guide to all 94 Steam achievements in Wildermyth - none are hidden. Covers the five story campaigns and the difficulty clears, the per-faction 1000-kill totals and campaign-specific feats, the per-theme transformation-ability feats, the relationship, hero and battle achievements, and the Omenroad DLC challenge runs and dungeon-boss defeats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wildermyth has 94 Steam achievements and none of them are hidden. The base set covers completing each of the five hand-authored story campaigns (plus generic and legacy campaigns, and all five stories), two difficulty clears (Walking Lunch and the Carved in Stone ironman mode), 1000-kill totals against each of the five monster factions, campaign-specific scripted feats, a long list of per-theme transformation-ability challenges (Bear, Crow, Fire, Storm, Wolf and the rest), and relationship, hero-progression and battle achievements. Roughly the last third of the list belongs to the Omenroad DLC: its two campaigns, a run of single-hero challenge-run feats, defeating 20 named dungeon bosses, and winning Omenroad runs at rising Peril tiers.",
                "Nothing is missable - campaigns and the Omenroad can be replayed freely, and the kill and feat counters accumulate across every campaign you play. The length comes from breadth: the five story campaigns alone are dozens of hours, and the per-theme and Omenroad feats each need you to deliberately build heroes around a specific ability.",
                "Tip: the per-theme transformation feats (Grillmaster, Tempest, Thwack!, and the rest) each require a hero with that specific theme's ability - when a hero is offered a transformation during a campaign, steer them toward the themes you still need feats for rather than always taking the strongest option, since transformations are semi-random and you cannot force a specific theme later."
            ]
        },
        {
            "heading": "Campaigns & Difficulty",
            "body": [
                "Completing each of the five story campaigns (Age of Ulstryx, The Enduring War, Monarchs Under the Mountain, Eluna and the Moth, All the Bones of Summer), a generic and a legacy campaign, all five stories (Worldwalker), and the two difficulty clears - Walking Lunch and a Carved in Stone ironman campaign.",
                "The achievements here: Daybreak (Complete Age of Ulstryx Campaign); War Endured (Complete The Enduring War Campaign); Echoes Die (Complete Monarchs Under the Mountain Campaign); Everfading (Complete Eluna and the Moth Campaign); In Soil, In Smoke (Complete All the Bones of Summer Campaign); A Story of Heroes (Complete a Generic Campaign (Three or Five chapter)); Another Tale to Tell (Complete a Legacy Campaign (Three or Five chapter)); Worldwalker (Complete all five story campaigns); A Lowly Crust of Beef (Complete a campaign on Walking Lunch difficulty); Let Me Get My Chisel (Complete a Carved in Stone campaign)."
            ]
        },
        {
            "heading": "Monster Kills & Story Feats",
            "body": [
                "Killing 1000 of each monster faction across all campaigns (Gorgons, Morthagi, Deepists, Thrixl, Drauven) and the campaign-specific scripted feats - killing Calabyne in one turn, destroying the Enduring and the Morthagi Cores, accepting the Deepking's offer, getting all five plot characters home safely, and a no-losses Chapter 3 intro.",
                "The achievements here: Back into the Sea (Kill 1000 Gorgons (Across all campaigns)); Bonebreakers (Kill 1000 Morthagi (Across all campaigns)); Empty the Caves (Kill 1000 Deepists (Across all campaigns)); No More Nightmares (Kill 1000 Thrixl (Across all campaigns)); Drauvenslayers (Kill 1000 Drauven (Across all campaigns)); No Time for Clawmonsters (Kill Calabyne in one turn); War-Ender (Destroy the last of the Enduring); Core Failure (Destroy the Morthagi Cores); Turncoat (Accept the Deepking's offer); All My Birds, Safely Home (Acquire all five plot characters, and have them survive to the end (Eluna and the Moth)); Wingknight's Prowess (Finish Chapter 3 intro mission without losing any units (All the Bones of Summer))."
            ]
        },
        {
            "heading": "Theme Transformation Abilities",
            "body": [
                "The per-theme transformation-ability challenges (Bear, Crow, Fire, Foothill, Gem, Storm, Green, Morthagi, Shadow, Skeleton, Star, Tree, Vine, Wolf) and the transformation-collection achievements - two different theme limbs on one hero, a full head-and-four-limbs transformation, and limbs from 10 different themes.",
                "The achievements here: Bears are Scary (Kill 2 enemies simultaneously with Bear Swipes); Fight Like a Bird (Blind 20 enemies with Crow Scratch or Crow Peck); Grillmaster (Hit 5 enemies simultaneously with a Cone of Fire); Solid as the Hills (With Child of the Hills Theme, take no damage from an enemy attack 20 times); Some Say I'm Too Flashy (With Gem Theme, stunt on 100 attacks); Tempest (Kill three targets in a single use of Chain Lightning); Into Mulch (Kill three targets in a single use of Witherbolt); We Call That Mortificient! (Kill an enemy with Mortificial Hammer and Wrist Bolt in the same turn); Symbiosis (Recover 30 health with Harvest or Dread Harvest); I'm Not Smiling (Terrify 10 enemies with Inscrutable Stare); Astrology (Kill 20 Enemies using Celestial Falling Stars); Thwack! (Use Tree Bash to knock back enemies 50 tiles); A Temperamental Shrub (Poison 50 enemies with Botanical Thorn Lash); Lochias's Hunger (Kill an enemy of every monster group with Wolf Bite); Thematic Divergence (Gain limbs from two different themes on a single hero); Completing the Look (Get the head and all four limbs for a transformation); We Emerge Changed (Get transformed limbs from 10 different themes)."
            ]
        },
        {
            "heading": "Heroes, Relationships & Battles",
            "body": [
                "Resolving all three hook quests with a hero, the pet achievements, the friendship / rival / lover ability feats, poison and reaction-strike turns, ending turns in grayplane, maiming and Pyrrhic-victory battle outcomes, promoting a Legacy Hero to Mythwalker, 100 and 1000 kills with a single hero, 150 calamities in a campaign, and catching all four elemental spirit types.",
                "The achievements here: Storied Past (Resolve all three hook quests with a hero); Me and My Familiar (Get a pet); A Mythic Menagerie (Get 5 different pets across all campaigns); The Power of Friendship (Have friendship ability \"Got your back!\" occur 20 times); Cutthroat Competitors (Trigger Rival ability \"Oh yeah? Watch this!\" 5 times in a single fight); How Romantic! (Kill 10 enemies with an attack that uses Lover's Vengeance); Plague Doctor (Kill three enemies with poison in a single turn); Chain Reaction (Use three reaction strikes (guardian/sentinel) in a single turn); Passing Shadow (Have a hero end 5 consecutive turns in grayplane); The Cost of Heroism (Have a hero withdraw after being maimed); This Too Shall Pass (Be defeated in a battle); Pyrrhic Victory (Win a battle after losing three heroes to either maiming or death); Legends Never Die (Promote a Legacy Hero to the rank of Mythwalker); Who's Counting? (Kill 100 monsters with a hero); Peacemaker (Kill 1000 monsters with a hero); Overwhelming Monstrosity (Receive 150 calamities in a campaign); Gotta Ca... Must Collect All of Them (Catch All 4 elemental spirit types)."
            ]
        },
        {
            "heading": "The Omenroad DLC & Dungeon Bosses",
            "body": [
                "The Omenroad expansion: its two campaigns (The Sunswallower's Wake, A Walk in the Unlight), the single-hero challenge-run feats (damage dealt and taken, kills per turn, rewards, stunts, dodges, transformation damage, armor shred, poison), defeating each of the 20 named dungeon bosses, and winning Omenroad challenge runs at Peril 1, 5, 10, 15 and 20.",
                "The achievements here: A Hunger, Sated (Complete The Sunswallower's Wake Campaign); Neverbefore (Complete A Walk in the Unlight Campaign); The Relentless (Deal 1000 damage with a single hero in an Omenroad challenge run); The Lethal (Deal 30 single-target damage with one attack during an Omenroad challenge run); The Bulwark (Take (and survive) 300 damage with a single hero in an Omenroad challenge run); The Survivor (Have a single hero end 6 fights with 1 health in an Omenroad challenge run); The Hurricane (Kill 8 enemies in a single hero's turn in an Omenroad challenge run); The Collector (Pick up 15 rewards with a single hero in an Omenroad challenge run); The Artist (Stunt 75 times with a single hero in an Omenroad challenge run); The Unscathed (Dodge or block at least 40 attacks with a single hero in an Omenroad challenge run); The Monstrous (Deal 500 damage with a single hero's transformation abilities in an Omenroad challenge run); The Shredder (Shred 100 armor with a single hero in an Omenroad challenge run); The Hardy (Have 20 temporary HP on a single hero at one time in an Omenroad challenge run); The Virulent (Poison 80 enemies with a single hero in an Omenroad challenge run); Malthides, Brute Toxinist (Defeat Malthides, Brute Toxinist); Uur, Ancient Amalgam (Deafeat Uur, Ancient Amalgam); Bogmother (Defeat the Bogmother); Head Chef (Defeat the Head Chef); Gracnaw's Dragon (Defeat Gracnaw's Dragon); Granny Gloomfire (Defeat Granny Gloomfire); The Gardener (Defeat the Gardener); The Glorysword Clayn (Defeat the Glorysword Clayn); The Horn Grownup (Defeat the Horn Grownup); Symbiotic Advisor (Defeat the Symbiotic Advisor); The Umbercryst Martyr (Defeat the Umbercryst Martyr); Luthin the Mirrormaster (Defeat Luthin the Mirrormaster); The Riftspore Apostle (Defeat the Riftspore Apostle); Admiral of the Air (Defeat the Admiral of the Air); Starwing (Defeat Starwing); Ollend the Abductor (Defeat Ollend the Abductor); The Doorman (Defeat the Doorman); The Twins (Defeat the Twins, Wrune and Wrax); Party Wagon (Defeat the Party Wagon); King Carrion (Defeat King Carrion); Outset (Win an Omenroad challenge run at Peril 1); Pathbeater (Win an Omenroad challenge run at Peril 5); Making Tracks (Win an Omenroad challenge run at Peril 10); Seasoned Traveler (Win an Omenroad challenge run at Peril 15); Waymaster (Win an Omenroad challenge run at Peril 20)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the five story campaigns one at a time - Age of Ulstryx first, since it is the introductory one - doing each campaign's scripted feat on the way through.",
                "2. Across those campaigns, steer hero transformations toward themes whose ability feats you still need, and let the per-faction 1000-kill totals and single-hero kill counts build up.",
                "3. Do the relationship and battle achievements deliberately - trigger friendship, rival and lover abilities, a poison-kill turn, a triple reaction-strike turn, and let a maimed hero withdraw for The Cost of Heroism.",
                "4. Do a Walking Lunch (easy) campaign and a Carved in Stone (ironman) campaign for the two difficulty achievements.",
                "5. Move to the Omenroad DLC: complete its two campaigns, work through the single-hero challenge-run feats, defeat the 20 dungeon bosses, and win runs at Peril 1 through 20.",
                "Tip: the Omenroad single-hero feats (The Relentless, The Bulwark, The Hurricane, etc.) all say \"with a single hero\" - build one specialised carry per run and funnel every kill, reward and action through them rather than spreading play across the party, and you can knock out several of these feats in one Omenroad run."
            ]
        }
    ]
};
