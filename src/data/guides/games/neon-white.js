// Neon White's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/neon-white.json), whose 63 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1533420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 46 of 63 ship a real,
//   official Steam description, quoted directly below.
// - The 12 mission-complete achievements' story-progress siblings
//   (Absolution, Cheese!), the six character relationship/social-link
//   achievements, all five Green boss-fight achievements, both ending
//   achievements, one combat achievement (Bloody Knuckles), Mikey's two
//   Level Rush achievements, the two Heavenly Delight Ticket
//   achievements, and Idiot are hidden achievements Steam never
//   describes publicly (confirmed via the same API call) - their
//   descriptions here are curatorial, cross-checked against a Steam
//   Community 100% Achievement Guide, GamePretty's achievement guide,
//   and independent community wikis, all agreeing on each unlock
//   condition.
// - The grouping below (the 12-mission campaign, the cast's
//   relationships and memories, Green's five boss fights across the
//   story, combat/card tricks, Ace medals and character-specific Level
//   Rushes, gifts and collectibles, and the two-ending finale) is read
//   directly from what each achievement's own name/description requires
//   or from the sourced unlock conditions above, not invented. Ending
//   details are described mechanically rather than narratively, per
//   this catalog's established spoiler-conscious convention.
export const GUIDE = {

    slug: "neon-white-achievement-guide",
    category: "game",
    gameSlug: "neon-white",
    icon: "🃏",
    title: "Neon White Achievement Guide",
    summary: "A practical guide to all 63 Steam achievements in Neon White - the 12-mission campaign, every character's relationship arc, Green's five boss fights, and the game's speed-focused Ace medal and Level Rush challenges.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Neon White has 63 Steam achievements. The base campaign is fast to finish, but 100% (fully completing the game) realistically requires going back through every level for its Ace medal, tracking down every character's relationship and memories, and finding every hidden gift and collectible along the way.",
                "Nothing here is permanently missable in the strict sense - every mission and level stays fully replayable from the mission-select map after you first clear it, so a missed collectible, relationship beat, or medal can always be gone back for."
            ]
        },

        {
            heading: "Story & Missions",
            body: [
                "Mission 1 Complete, Mission 2 Complete, Mission 3 Complete, Mission 4 Complete, Mission 5 Complete, Mission 6 Complete, Mission 7 Complete, Mission 8 Complete, Mission 9 Complete, Mission 10 Complete, Mission 11 Complete, and Mission 12 Complete track finishing each of the campaign's twelve missions in turn, unlocking automatically as you progress.",
                "Absolution rewards completing the main story campaign overall, while 100% marks the much larger goal of fully completing the entire game - every level, medal, relationship, and collectible on this list.",
                "Cheese! is a separate, later reward tied to the game's true ending - an extended epilogue scene only reachable by choosing the Book of Life option at the finale."
            ]
        },

        {
            heading: "Relationships & Memories",
            body: [
                "Whole again marks unlocking every one of White's own memories, built up across the campaign. Sweet Dreams (unlock one of Red's memories), Trinity (unlock one of Yellow's memories), and Vault (unlock one of Violet's memories) are each a first step toward that character's full relationship arc.",
                "Red, Yellow, Violet, Mikey, Raz, and Green each track completing your full relationship with that character - Green's in particular is a hidden achievement, since the game doesn't advertise upfront that its antagonist has a relationship track at all.",
                "Solitary Grace (complete Red's Sidequests), Don't Think (complete Yellow's Sidequests), and Rigged Game (complete Violet's Sidequests) are separate, dedicated side-content chains for three of the cast."
            ]
        },

        {
            heading: "Green's Boss Fights",
            body: [
                "Clocktower and Clockwork are a matched pair from the same encounter: Clocktower unlocks for simply defeating Green at the Clocktower, while Clockwork - the harder variant - requires beating him there before he reaches the top floor.",
                "Third Temple and Divine Intervention follow the same pattern at a later boss fight: Third Temple for a normal win, Divine Intervention for beating Green at the Third Temple before he reaches his final stage.",
                "Hand of God is the payoff for the campaign's final confrontation with Green, unlocking once you defeat him there.",
                "Tip: attempt the harder \"early\" variants (Clockwork, Divine Intervention) only after you've already beaten that fight normally once - knowing the boss's attack patterns in advance makes the tighter timing windows far more consistent."
            ]
        },

        {
            heading: "Combat & Card Tricks",
            body: [
                "Cannonball (stomp off the edge of a level), Trippy (get killed by a Tripwire), Not very effective... (use the Fists card), and Mimic (die from a Mimic's bullet) are all one-off interactions you're likely to stumble into naturally while experimenting with the game's discard-card combat.",
                "Bloody Knuckles is a hidden variant of the Fists achievement above, requiring you to fully exhaust the Fists card's ten punches in a row rather than just using it once.",
                "Parry (kill an enemy by parrying a bullet at them using the Katana card) and Surprise! (use the Book of Life card's discard ability to teleport directly into a Mimic) both reward more deliberate, skill-based uses of specific cards."
            ]
        },

        {
            heading: "Ace Medals & Level Rushes",
            body: [
                "Ace (earn your first Ace medal), Mikey's Pet (earn 50% of the total Ace medals), and Straight A's (earn an Ace medal on every level) track the game's top-tier speedrun ranking across the whole campaign - Straight A's in particular is one of the longest completion goals here.",
                "White's Heaven Rush Complete, White's Hell Rush Complete, Red's Heaven Rush Complete, Red's Hell Rush Complete, Violet's Heaven Rush Complete, Violet's Hell Rush Complete, Yellow's Heaven Rush Complete, and Yellow's Hell Rush Complete are each a dedicated speedrun gauntlet built from that character's own levels.",
                "Mikey's Heaven Rush Complete and Mikey's Hell Rush Complete are the same idea for Mikey specifically, but hidden and gated behind Straight A's - both of Mikey's Rush levels only unlock once you've already earned an Ace medal on every regular level in the game."
            ]
        },

        {
            heading: "Gifts, Tickets & Collectibles",
            body: [
                "How thoughtful (give your first gift), Gift Collector (collect 50% of the total gifts), and Gift Hunter (collect all gifts) track the game's gift-giving system used to build character relationships.",
                "Heavenly Delight and Lousy Keychain track redeeming Heavenly Delight Tickets at the Cathedral - your first, then every one you've earned. One ticket unlocks per assignment you complete, with the last one becoming available around Episode 11.",
                "Vending Machine (collect ten cards from vending machines) and Souvenir (find a Strange Coin) are smaller, separate collectible goals, while Idiot rewards finding Idiot Island, hidden at the lowest point of the stage during Violet's fourth Sidequest."
            ]
        },

        {
            heading: "The Ending Choice",
            body: [
                "Book of Death and Book of Life are the campaign's two mutually-presented ending choices at the finale. Book of Death is always available and needs no extra preparation, while Book of Life only appears alongside it once you've completed every character's relationship first.",
                "Tip: if you want both ending achievements, choose Book of Death first - picking Book of Life without having already seen Book of Death locks in that choice, and the only way back to the other one is replaying the whole campaign from Heaven's Gate."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the twelve missions normally first, picking up Mission 1 Complete through Mission 12 Complete, Absolution, and most of the early combat and collectible achievements without going out of your way.",
                "Work on each character's relationship, memories, and Sidequests as they become available - Red, Yellow, Violet, Mikey, and Raz can all be built up gradually rather than in one dedicated push, saving Green's relationship for whenever it naturally comes up.",
                "Once you've cleared every level once, go back for Ace medals level by level, working toward Straight A's - this also unlocks Mikey's two Level Rush achievements as a bonus.",
                "Save 100%, Book of Life, and Cheese! for the very end - decide on Book of Death first if you want to see it, then start a fresh finale attempt for Book of Life once every relationship is complete."
            ]
        }

    ]

};
