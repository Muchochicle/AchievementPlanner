// Two Point Museum Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/two-point-museum.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2185060 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 8 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "two-point-museum-achievement-guide",
    "category": "game",
    "gameSlug": "two-point-museum",
    "icon": "🗿",
    "title": "Two Point Museum Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Two Point Museum (8 hidden). Covers all five base-game museums, exhibit and staff milestones, and the Fantasy Finds, Zooseum and Arty-Facts DLC content. Eight of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Two Point Museum has 49 Steam achievements and 8 are hidden. About twenty-eight cover the five base-game museums (Memento Mile, Passwater Cove, Wailon Lodge, Pebberley Heights, Bungle Wasteland) and general museum-management milestones - exhibit quality, expeditions, staff training, workshop projects, Enlightenment, perks, museum level, Curator Class, and Sandbox/Exhibition modes. The rest are the Fantasy Finds, Zooseum and Arty-Facts DLC content, including three hidden chapter-5 museum completions and three other hidden achievements for a rare dice roll, a lost expedition staffer, and the Pebberley Heights Astral Anomaly chain.",
                "The catalog marks it difficulty 2. Nothing is especially hard, but reaching every museum's chapter 5, training staff to the max, and getting the DLC-specific hidden achievements takes a long, varied playthrough across all three expansions.",
                "Tip: build up each museum's five chapters in turn, and keep an eye out for the Fantasy Finds dragon event and the Pebberley Heights Astral Anomaly chain, since both drive hidden achievements."
            ]
        },
        {
            "heading": "Museums & Expeditions",
            "body": [
                "The five base museums' chapter-5 completions - Memento Mile, Passwater Cove, Wailon Lodge, Pebberley Heights and Bungle Wasteland - a Pristine-quality expedition find, 25 unlocked expedition POIs, naming a fish exhibit, a level-10 Sandbox museum, an Exhibition Mode gold trophy, and 100 Sticker Book stickers.",
                "The achievements here: Rising Star (Complete chapter 1 of Memento Mile museum.); Two Point Museum (Complete chapter 5 of Memento Mile museum.); Marine Life Museum (Complete chapter 5 of Passwater Cove museum.); Supernatural Museum (Complete chapter 5 of Wailon Lodge museum.); Space Museum (Complete chapter 5 of Pebberley Heights museum.); Science Museum (Complete chapter 5 of Bungle Wasteland museum.); Mint Condition (Discover a Pristine quality exhibit on an expedition.); Map Reader (Unlock 25 expedition points of interest (POIs).); Nomenclature (Give a fish exhibit a custom name.); Built on Sand(box) (Build a level 10 museum in Sandbox Mode.); Exhibition Expert (Earn a gold trophy in an Exhibition Mode pop-up museum.); Comprehensive Curator (Earn 100 shiny stickers in the Sticker Book.)."
            ]
        },
        {
            "heading": "Staff, Exhibits & Curator Progress",
            "body": [
                "Maxing a staff member's training, 20 Workshop projects, 30 Enlightenment in a theme, 3 perks on one exhibit, a level-50 museum, Curator Class level 7, a Dinosaur Bones skeleton, a Chomper Pit kill, a level-3 Custom Contraption, catching an exhibit thief, a 5-star tour, the Silverbottom Reunion, 5 themed onesies at once, a Remedial Springs cure, $10,000 in Sponsored exhibits, and 10 museum-born fish.",
                "The achievements here: Qualified Opinion (Train a member of staff as much as possible.); Made Them Yourself (Complete 20 Workshop projects.); Uncommon Knowledge (Reach 30 Enlightenment for any theme.); Perked Up (Install 3 perks on a single exhibit.); Mega Museum (Have a level 50 museum.); High-Class Curator (Reach Curator Class level 7.); Skill & Bones (Complete a Dinosaur Bones exhibit.); Plant Food (Have a guest eaten by a Chomper Pit exhibit.); Fully Customised Contraption (Have a level 3 (III) Custom Contraption, Science exhibit.); Directly to Jail (Catch a thief who has stolen an exhibit.); Tour de Force (Create a 5-star tour.); Silverbottom Reunion (Reunite Twiggy Silverbottom's expedition team in a single Polterguest Room.); Fancily Dressed Five (Have 5 visiting children wear onesies of 5 different themes at once.); Healing Holiday (Cure an Illness or Injury by sending staff on an expedition to Remedial Springs.); Product Placement (Earn $10,000 from Sponsored exhibits.); Fishes (Plural) (Have 10 fish born at the museum.)."
            ]
        },
        {
            "heading": "Secrets & DLC Content",
            "body": [
                "Two hidden Pebberley Heights secrets (the final Astral Anomaly, a Prehistory Mystery exhibit), a lost expedition staffer, 2000 guest Buzz, a vandalised donation stand, 10 Robo staff, a 6-theme museum, the Fantasy Finds DLC's dragon-rampage choice and natural-20 dice roll, the Zooseum DLC's Pointy Mountains and Silverbottom Park chapter-5 completions and wildlife/animal-care milestones, and the Arty-Facts DLC's Undee Docks chapter-5 completion and its art-exhibit and portrait achievements.",
                "The achievements here: The Anomalonians (Activate the final Astral Anomaly exhibit in the Pebberley Heights Space exhibit chain.); Ex-plorer (Lose a staff member on an expedition - send an under-trained or under-equipped team on a risky expedition.); Absolutely Buzzing (Have a guest reach 2000 Buzz.); Prehistory Mystery (Activate a Prehistory Mystery exhibit by placing matching activated Astral Anomalies nearby - Lone Henge at Spoony Dunes (Bone Belt), activated with a Triangular Celestial Cell, is the easiest.); Thaw & Order (Have a donation stand vandalised by a Defrosted Cave-Person.); Byte at the Museum (Employ 10 Robo staff (Janitors or Security Guards) in a single museum.); Everything for Everyone (Display an exhibit from 6 different themes in one museum.); Raining Dragons (End the reign of the dragons in Scorched Earth expedition map.); The Natural (Roll a natural 20 on the Fates O'Twenty exhibit (Fantasy Finds DLC).); Scorched Earth (During the Fantasy Finds DLC's dragon rampage, choose which point of interest to save - Fairydale or Wishfell - and let the other burn.); Secret Museum (Complete chapter 5 of the Pointy Mountains museum (Zooseum DLC).); Wildlife Museum (Complete chapter 5 of the Silverbottom Park museum (Zooseum DLC).); Monster Menagerie (Display 30 different Wildlife exhibits in a single museum.); Fauna's Favourite (Have a member of staff be 5 different animal's favourite Expert.); Sorry for the litter… (Produce 5 Wildlife offspring from a single parent.); Farflung Fixer (Have 15 Wildlife POIs at Biodiversity Level 3.); Art Museum (Complete chapter 5 of the Undee Docks museum (Arty-Facts DLC).); Please Don’t Touch! (Display every Famous Art exhibit in a single museum.); Frame It 'Til You Make It (Display a pristine piece of original Art.); Glass Case of Emotion (Employ an Art Expert with an understanding of all 7 Emotions.); Model Employee (Have a single Assistant pose for 5 portraits and/or statues.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Build up each of the five base museums through chapter 5 - Memento Mile, Passwater Cove, Wailon Lodge, Pebberley Heights and Bungle Wasteland.",
                "2. Along the way, handle the general museum-management checklist: staff training, Workshop projects, Enlightenment, perks, and Curator Class.",
                "3. At Pebberley Heights, chase the Space exhibit Astral Anomaly chain for the hidden The Anomalonians and Prehistory Mystery achievements.",
                "4. Play through the Fantasy Finds, Zooseum and Arty-Facts DLCs for their own chapter-5 museums (Pointy Mountains, Silverbottom Park, Undee Docks) and DLC-specific achievements.",
                "5. Keep an eye out for the Fantasy Finds dragon event and a natural 20 on the Fates O'Twenty exhibit.",
                "Tip: send only well-trained, well-equipped teams on dangerous expeditions unless you're deliberately going for Ex-plorer."
            ]
        }
    ]
};
