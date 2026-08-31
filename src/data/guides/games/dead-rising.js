// Dead Rising Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dead-rising.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   427190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 4 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dead-rising-achievement-guide",
    "category": "game",
    "gameSlug": "dead-rising",
    "icon": "🧟",
    "title": "Dead Rising Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Dead Rising (4 hidden). Covers the zombies, psychopaths and survivors achievements, the weapons, food and photography achievements, and the time, stunts and endings achievements. Four achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dead Rising has 50 Steam achievements and four are Steam-hidden (10 Special Forces kills, repelling a helicopter, and the two spoiler 'Snuff Shot' photos). The open forty-six include the zombie-kill ladder (1,000 / 10,000 / 53,594 for 'Zombie Genocider'), psychopath kills and photos, survivor rescues (10 / 20 / 50 for 'Saint'), the photography PP achievements, weapon and costume feats, and the survival-time ladder ('3 Day', '5 Day', '7 Day Survivor') plus the true ending with no knockout.",
                "The catalog marks it difficulty 5 - this is one of the classic brutal Steam lists. 'Zombie Genocider' (53,594 kills), 'Saint' (50 survivors), '7 Day Survivor' and 'Unbreakable' (true ending, never knocked out) each demand deep knowledge of the 72-hour timeline and several playthroughs.",
                "Tip: use one run for the story and true ending, a dedicated run for 'Saint', a level-50 grind run for the kill and survival achievements, and follow a timeline guide throughout."
            ]
        },
        {
            "heading": "Zombies, Psychopaths & Survivors",
            "body": [
                "Defeating 1,000 / 10,000 / 53,594 zombies, 1 / 5 / 10 psychopaths, the Steam-hidden 10 Special Forces kills and helicopter repel, escorting 8 survivors (and 8 female survivors) at once, all NOTEBOOK portraits, and getting 10 / 20 / 50 survivors out of the mall.",
                "The achievements here: Zombie Hunter (Defeat at least 1,000 zombies. ); Zombie Killer (Defeat at least 10,000 zombies. ); Zombie Genocider (Defeat at least 53,594 zombies. ); Self Defense (Defeat at least 1 psychopath. ); Peace Keeper (Defeat at least 5 psychopaths. ); Punisher (Defeat at least 10 psychopaths. ); Legendary Soldier (Defeat at least 10 Special Forces soldiers.); Hella Copter (Successfully repel a helicopter.); Tour Guide (Escort 8 survivors at once. ); Frank the Pimp (Simultaneously escort 8 female survivors. ); Full Set (Collect all portraits in the NOTEBOOK. ); Humanist (Get at least 10 survivors out of the mall. ); Life Saver (Get at least 20 survivors out of the mall.); Saint (Get at least 50 survivors out of the mall.)."
            ]
        },
        {
            "heading": "Weapons, Food & Photography",
            "body": [
                "10 bowling-ball zombie hits, 10 masked zombies, 30 parasol knock-asides, every food type eaten, 100 items broken, 1,000 bullets fired, a no-miss machine gun, 1,500 and 3,000 PP single photos, 50 target markers, 10 and 50 survivors photographed, 4 and 10 psychopaths photographed, all PP Stickers, the two Steam-hidden 'Snuff Shot' spoiler photos, and answering every call from Otis.",
                "The achievements here: Strike! (Send at least 10 zombies flying with bowling balls. ); Costume Party (Place novelty masks on at least 10 zombies. ); Raining Zombies (Knock at least 30 zombies aside with a parasol. ); Gourmet (Eat all types of food available in the mall. ); Item Smasher (Break at least 100 items.); Bullet Point (Fire at least 1,000 bullets. ); Perfect Gunner (Don't miss with a machine gun. ); Photojournalist (Score at least 1,500 PP from a single photo. ); The Artiste (Score at least 3,000 PP from a single photo. ); Group Photo (Get 50 Target Markers with the camera. ); Portraiture (Photograph at least 10 survivors. ); Census Taker (Photograph at least 50 survivors. ); Psycho Photo (Photograph at least 4 psychopaths. ); Psycho Collector (Photograph at least 10 psychopaths. ); PP Collector (Photograph all PP Stickers. ); Snuff Shot B (Photograph the zombie form of Brad (a story spoiler).); Snuff Shot J (Photograph the zombie form of Jessie (a story spoiler).); Transmissionary (Answer all calls from Otis. )."
            ]
        },
        {
            "heading": "Time, Stunts & Endings",
            "body": [
                "24 hours indoors and outdoors, a 5 m drop, a 42.195 km walk, stealing the convicts' vehicle, 10 m car and motorcycle jumps, a 10 m Zombie Ride, 1,000 barehanded kills, 20 and all costumes, Lv. 50, the true ending with no knockout ('Unbreakable'), Overtime Mode, the true ending ('∞ Mode'), and surviving 72 hours, 5 days and 7 days.",
                "The achievements here: Indoorsman (Spend at least 24 hours indoors. ); Outdoorsman (Spend at least 24 hours outdoors. ); Freefall (Drop from a height of at least 16 feet (5 meters). ); Marathon Runner (Cover a distance of 26.2 miles (42.195 km). ); Carjacker (Steal the convicts' vehicle. ); Stunt Driver (Jump a car at least 33 feet (10 meters). ); Stunt Rider (Jump a motorcycle at least 33 feet (10 meters). ); Zombie Road (Walk over 33 feet (10 meters) on the backs of zombies using the Zombie Ride. ); Karate Champ (Defeat at least 1,000 zombies barehanded. ); Sharp Dresser (Change into at least 20 different costumes. ); Clothes Horse (Change into all costumes available in the mall. ); Level Max (Reach Lv. 50. ); Unbreakable (Get the true ending without being knocked out. ); Overtime Mode (Unveil all CASES and be at the heliport at noon. ); ∞ Mode (Get the true ending. ); 3 Day Survivor (Survive for at least 72 hours. ); 5 Day Survivor (Survive for at least 5 days. ); 7 Day Survivor (Survive for at least 7 days. )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. First run: follow a timeline guide, unveil every CASE, reach the heliport for Overtime Mode, and get the true ending ('∞ Mode') - ideally without being knocked out ('Unbreakable').",
                "2. Dedicated 'Saint' run: escort 50 survivors out of the mall, doing the psychopath and survivor photo achievements along the way.",
                "3. Level-50 grind run: farm zombie kills toward 53,594, do the survival ladder to 7 days, and pick up the stunt, weapon and food achievements.",
                "4. Do the Steam-hidden ones as they fit: 10 Special Forces kills and the helicopter repel in Overtime/Infinity, the two 'Snuff Shot' photos at their story moments.",
                "Tip: '7 Day Survivor' is a separate ~14-real-hour mode unlocked after 5 Day Survivor - do it last, on a fully levelled Frank, with a stocked safe route."
            ]
        }
    ]
};
