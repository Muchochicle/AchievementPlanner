// Death Stranding Director's Cut Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/death-stranding-directors-cut.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1850570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 31 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "death-stranding-directors-cut-achievement-guide",
    "category": "game",
    "gameSlug": "death-stranding-directors-cut",
    "icon": "📦",
    "title": "Death Stranding Director's Cut Achievement Guide",
    "summary": "A practical guide to all 63 Steam achievements in Death Stranding Director's Cut (31 hidden). The 31 hidden achievements are the 15 spoiler-free story-episode markers plus Chiral Network connection, Like-total, knowledge-restoration and one-off-action milestones. Sourced from PowerPyx, PlayStationTrophies and ScreenRant.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Death Stranding Director's Cut has 63 Steam achievements, 31 of them hidden. Death Stranding is Hideo Kojima's post-apocalyptic delivery game, following porter Sam Bridges reconnecting a fractured America. The visible achievements are delivery milestones, structure building and upgrading, connecting facilities to the Chiral Network, reading mails and interviews, combat against BTs and Catchers, and a set of Director's Cut additions.",
                "The 31 hidden achievements are the 15 story-episode markers (the Prologue through the final episode, one per named chapter), a run of connection and social-strand milestones (connect your first affiliate and then all facilities, max out every connection, the Like thresholds of 2,400 and 50,000 on a single results screen), knowledge-chip restoration and customization firsts, and one-off actions (recycle chiral crystals, take a hot spring bath, use the music player, find Higgs's home, hit Grade 60 in every delivery category).",
                "The catalog marks it difficulty 3 and single-playthrough. Nothing is permanently missable - the world stays fully connected and traversable after the credits, so the Like totals, delivery grades and remaining facility connections can all be finished in the endgame."
            ]
        },
        {
            "heading": "Story: The Episodes",
            "body": [
                "The 15 Steam-hidden story markers - the Prologue and one per named episode through the finale. They unlock automatically as the story advances and are described here spoiler-free.",
                "The achievements here: Delivering Is What I Do (Complete the Prologue: Porter); Rebuilding America (Complete Episode 1: Bridget); We Need You (Complete Episode 2: Amelie); I Won't Break (Complete Episode 3: Fragile); BB... (Complete Episode 4: Unger); We're Whole Again (Complete Episode 5: Mama); BBs: A Bridge Between This World and the One Beyond (Complete Episode 6: Deadman); \"BB\" (Complete Episode 7: Clifford); Sixty Deaths and Sixty Births in a Day (Complete Episode 8: Heartman); The Particle of God (Complete Episode 9: Higgs); I'm Your Die-Hardman (Complete Episode 10: Die-Hardman); Bring Back My Baby (Complete Episode 11: Clifford Unger); She's waiting for you on the Beach. (Complete Episode 12: Bridges); Thank You, Sam (Complete Episode 13: Sam Strand); Thanks for Everything (Complete the final episode: Lou)."
            ]
        },
        {
            "heading": "Deliveries & Orders",
            "body": [
                "Standard and premium orders, supply requests, lost cargo, and the cargo-volume and distance milestones.",
                "The achievements here: Everyday Delivery (Complete a standard order); Deliveries Done (Complete 36 standard orders); Birth of a Legend (Complete at least 10 unique premium deliveries in each order category with an evaluation of \"Legend,\" \"Legend of Legends,\" or \"Legend of Legends of Legends.\" ); Growth of a Legend (Complete at least 20 unique premium deliveries in each order category with an evaluation of \"Legend of Legends\" or \"Legend of Legends of Legends.\" ); A Helping Hand (Issue your first supply request); The Automation Revolution (Complete a standard order with a delivery bot); Good Samaritan (Deliver your first piece of lost cargo); Prominent Porter (Reach Grade 10 in any delivery evaluation category); Hooked on Delivering!? (Deliver 700 items of cargo); Pumped Porter (Deliver 3,000 kg of cargo); Well-Traveled (Travel 80 km and complete an order)."
            ]
        },
        {
            "heading": "Building & the Chiral Network",
            "body": [
                "Constructing and fully upgrading every structure type, connecting facilities to the Chiral Network, and reaching maximum connection levels - several are Steam-hidden.",
                "The achievements here: Apprentice Builder (Complete your first structure (signs, ladders, and climbing anchors also count.)); Master Builder (Complete at least one of every type of structure (including signs, ladders, and climbing anchors.)); A New Day for the UCA (Connect your first new affiliate to the UCA); In Sam We Trust (Connect every facility to the UCA / Chiral Network); Well Connected (Reach connection level three with a facility); Best Beloved (Reach the maximum connection level with every facility); Trail-Blazer (Upgrade all types of structure to the maximum level); All Roads Lead to the UCA (Complete your first road); Building Bridges (Reach Bridge Link Grade 1)."
            ]
        },
        {
            "heading": "Social Strand, Likes & Knowledge",
            "body": [
                "The Like system (your first Like, then the 2,400 and 50,000 thresholds), restoring memory chips, customization data, donations, reading 100 mails and 100 interviews, and other porter interactions - mostly Steam-hidden.",
                "The achievements here: Like and Be Liked (Give your first Like); The People's Porter (Reach 2,400 Likes on a single delivery results screen); The World's Most Popular Porter (Reach 50,000 Likes on a single delivery results screen); Giver of Gifts (Make your first donation of weapons, equipment, etc); Chiral Crafter (Recycle chiral crystals for the first time); A Thirst for Knowledge (Restore a memory chip); Fount of Knowledge (Restore every memory chip); The Custom Kid (Acquire your first piece of customization data); Soak and Sigh (Take a hot spring bath); The Post Guides the Present (Read 100 mails); The Past Guides the Present (Read 100 interviews); Childminder (Reach maximum connection level with BB); A Baby Blessing (Get a Like from BB); A Shout in the Dark (Send a shout out and have it returned for the first time)."
            ]
        },
        {
            "heading": "Combat, BB & Milestones",
            "body": [
                "BT encounters and defeating a Catcher, caring for BB, delivery grades, the hot spring, finding Higgs's home, and the remaining first-time actions.",
                "The achievements here: Pathfinder (Help porters through a MULE or terrorist area for the first time); Great Deliverer (Reach Grade 60 in every delivery evaluation category); Catcher Crusher (Defeat a Catcher); Snooze 'n' Soothe (Heal by sleeping for the first time); Boots Are a Porter's Best Friend (Change footwear for the first time); God Particle Go-Getter (Find Higgs's home); Rest In Pieces (In a BT area, cut an umbilical cord for the first time without the BT noticing); Any Porter in a Storm (Trade with another porter for the first time); Sleep Tight, Little BB (Soothe a crying BB and stop the crying for the first time); Public Service Porter (Dispose of chiralium-contaminated cargo in the crater lake for the first time); I Couldn't Hold it In! (Go outside and relieve yourself); Soothing Sounds (Use the in-game music player for the first time); Homo Faber (Fabricate all available weapons and equipment)."
            ]
        },
        {
            "heading": "100% Completion",
            "body": [
                "The platinum-equivalent catch-all for every other achievement.",
                "The achievements here: Greatest of Great Deliverers (Obtained all Death Stranding achievements)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to the end for the 15 hidden episode markers, connecting facilities to the Chiral Network as you reach them.",
                "2. Along the way, build and upgrade structures (roads, bridges, zip-lines) - Trail-Blazer wants one of every type at max level.",
                "3. Keep taking premium deliveries and pushing delivery grades; Great Deliverer needs Grade 60 in every category, which is a long grind best done in the endgame.",
                "4. Restore every memory chip, read 100 mails and 100 interviews, and do the small one-offs (hot spring, music player, pee, trade with a porter, Higgs's home).",
                "5. Farm Likes on high-value deliveries and structures until you hit the 50,000-on-one-screen threshold, and finish connecting the last facilities to maximum level.",
                "Tip: build and heavily upgrade roads early - they massively speed up the repeat deliveries that both the delivery-grade grind and the big Like totals depend on."
            ]
        }
    ]
};
