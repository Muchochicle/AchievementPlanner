// Planet Zoo Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/planet-zoo.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   703080 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "planet-zoo-achievement-guide",
    "category": "game",
    "gameSlug": "planet-zoo",
    "icon": "🦁",
    "title": "Planet Zoo Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in Planet Zoo - career mode, franchise & zoo building, animals & breeding, welfare, research & conservation.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Planet Zoo has 38 Steam achievements and none are hidden. They split into Career Mode scenario awards (bronze/silver/gold, on normal and Hard), Franchise Mode expansion goals, animal breeding and welfare milestones, and a set of one-off building and conservation targets.",
                "Nothing is missable. The longest tasks are the full-career gold clears (Gold Career and its Hard version) and the Franchise spread achievements (a zoo on every continent and in every biome, 25 Franchise zoos). Everything else can be picked up in Sandbox or Franchise at your own pace.",
                "Tip: use Sandbox mode with unlimited funds for the fiddly one-offs (albino breed, 90%+ genetics, 30-animal high-welfare habitat, all continents/biomes) - they have no time pressure there, and Sandbox achievements count."
            ]
        },
        {
            "heading": "Career Mode",
            "body": [
                "The scenario-award achievements: a single bronze, silver and gold award; completing all career levels to bronze, silver and gold standard; the same three at gold/silver/bronze on Hard difficulty; and An Elephant Never Forgets for adopting the retiring Indian Elephants in Scenario 7.",
                "The achievements here: Bronze Award (Gain a bronze award in career mode); Silver Award (Gain a silver award in career mode); Gold Award (Gain a gold award in career mode); Career Complete (Complete all career levels to a bronze standard); Silver Career (Complete all career levels to a silver standard); Gold Career (Complete all career levels to a gold standard); An Elephant Never Forgets (Adopt the retiring Indian Elephants in Scenario 7); Hard - Career Complete (Complete all career levels to a bronze standard on hard difficulty); Hard - Silver Career (Complete all career levels to a silver standard on hard difficulty); Hard - Gold Career (Complete all career levels to a gold standard on hard difficulty)."
            ]
        },
        {
            "heading": "Franchise & Zoo Building",
            "body": [
                "The Franchise and construction goals: creating your avatar, opening your first and 25th Franchise zoos, a zoo on every continent and in every biome, 1 km of tracked ride, 10 km of barrier, a 5-star Education rating, repaying $50,000 in loans, and taking part in a community challenge.",
                "The achievements here: Welcome to Planet Zoo (Create your avatar and place them on the globe); Franchise Zoo (Open your first Franchise zoo); Global Zoo (Open 25 Franchise zoos); Tour Guide (Build 1km of a tracked ride); Barrier Builder (Build 10km of barrier); Planet Zoo (Open a zoo on every continent); Diversity (Open a zoo in every biome); Nerd (Achieve an Education Rating of 5 Stars in a Franchise zoo); Loaner (Repay $50,000 in loans); Community (Take part in a community challenge)."
            ]
        },
        {
            "heading": "Animals & Breeding",
            "body": [
                "The breeding and collection milestones: your first baby animal, 73 babies, an albino breed, releasing and adopting your first animal, a juvenile Lion born in a 10-species zoo, a Lion/Tiger/Bear trio, two different Elephant breeds born, an animal with 90%+ genetics in every category, and an animal at a 5-star Animal Rating.",
                "The achievements here: Life finds a way  (Have your first baby animal born in your zoo); Baby Boom (Have 73 baby animals born); Ghost (Have an albino breed); Say Goodbye (Release your first animal); Welcome to the Family (Adopt your first animal); Circle of Life (Have a Juvenile Lion be born in a Zoo containing at least 10 species); Oh My! (Have a Lion, a Tiger and a Bear in your Zoo at any one time); The Elephant in the Room (Have two different breeds of Elephant born in your Zoo); Natural Selection (Have an animal in your zoo with a genetic makeup of over 90% in all categories); A superstar comes along (Have an animal reach a 5 star Animal Rating)."
            ]
        },
        {
            "heading": "Welfare, Research & Conservation",
            "body": [
                "The care and conservation goals: fully training a staff member, completing the Zoopedia, placing 25 different Enrichment Items, three Keepers on different work zones, all enrichment items enabled in one exhibit, researching one animal in Franchise mode, a 30-animal habitat all above 75% welfare, and releasing 20 critically endangered animals to the wild.",
                "The achievements here: Trainer (Fully train a member of staff); Zoologist (Complete the Zoopedia); Enriched (Place 25 different Enrichment Items); This one’s a Keeper (Have at least 3 Keepers, each with a different work zone, in a Sandbox, Franchise or Challenge zoo); Redecorating (Enable all enrichment items in an exhibit); Animal Research (Complete the research on one animal in Franchise mode); Wow, that's a lot! (Build a habitat with 30 animals in it that all have welfare over 75%); Rebuilding (Release 20 critically endangered animals to the wild)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Career Mode - Bronze/Silver/Gold Award and the all-levels bronze/silver clears come naturally, and the campaign teaches every system.",
                "2. Push the career levels to gold, then replay on Hard for the Hard - Gold Career chain.",
                "3. Start a Franchise and expand deliberately: a zoo on every continent and biome, 25 zoos total, the Education and loan goals.",
                "4. Use a Sandbox zoo to finish the animal and welfare one-offs (albino, genetics, 73 babies, high-welfare habitat, endangered releases).",
                "Tip: Baby Boom (73 babies) and Rebuilding (release 20 critically endangered) go fastest with a dedicated breeding zoo of fast-reproducing, high-value endangered species - Sandbox with contraception off and plenty of habitat space."
            ]
        }
    ]
};
