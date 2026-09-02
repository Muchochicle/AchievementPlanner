// Nova Lands Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/nova-lands.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1501610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "nova-lands-achievement-guide",
    "category": "game",
    "gameSlug": "nova-lands",
    "icon": "🤖",
    "title": "Nova Lands Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in Nova Lands (3 hidden). The three hidden achievements are the developer skins, riding the Moschy mount, and Armando's hidden targets. Everything else - the steel and computer production milestones, the three island beasts, the bot automation, the tech tree and museum, and the exploration beats - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Nova Lands has 24 Steam achievements, 3 of them hidden. It is a chill automation game where you island-hop, mine resources, and wire up bots to run your factories. The visible achievements cover the production milestones (first Steel through Hypercomputer, 50 / 1,000 / 10,000 Steel), the three island beasts (defeat or befriend Moschillar, Drameleon, Tunasa), discovering 7 islands, the bot automation (connect one, then 40 at once), completing the tech tree and the museum, unlocking 25 skins and the player's house, the first spacewalk, capturing a creature, visiting the space station, and crafting a Diamond Dash.",
                "The 3 hidden achievements are collecting the developer skins, riding the Moschy mount, and finding Armando's hidden targets.",
                "The catalog marks it difficulty 2 and single-playthrough. Nothing is missable - the islands stay open and automation keeps producing while you explore."
            ]
        },
        {
            "heading": "Production",
            "body": [
                "The production milestones (first Steel, Computer, Supercomputer, Hypercomputer; 50 / 1,000 / 10,000 Steel) and the bot automation (connect a bot, 40 bots at once, complete the tech tree).",
                "The achievements here: Industrial Progress (Produce your first Steel); From Sticks to Computers (Produce your first Computer); A Fancy Calculator (Produce your first Supercomputer); Hyper Math (Produce your first Hypercomputer); Industrial Life (Produce 50 Steel); We Steel Need More (Produce 1.000 Steel); Will of Steel (Produce 10.000 Steel); The Automation Starts (Connect a bot to a bot antenna); Anthill (Have 40 bots working at the same time); Special Knowledge (Complete the tech tree on the Research)."
            ]
        },
        {
            "heading": "Beasts & Exploration",
            "body": [
                "The three island beasts (Moschillar, Drameleon, Tunasa), discovering 7 islands, the first spacewalk, the player's house, visiting the space station, and Armando's hidden targets.",
                "The achievements here: The First Beast: Moschillar (Defeat or befriend the Moschillar); The Second Beast: Drameleon (Defeat or befriend the Drameleon); The Third Beast: Tunasa (Defeat or befriend the Tunasa); Curious Explorer (Discover 7 islands); A big step for mankind (Start a spacewalk); Catch’Em All (Capture a creature); Hanging Out With The Aliens (Visit the space station); Comfy Flight (Ride the tamed Moschy (a befriended Moschillar) as a flying mount.); Targets Found (Find and shoot all of Armando's hidden targets.)."
            ]
        },
        {
            "heading": "Progression & Secrets",
            "body": [
                "Unlocking 25 skins, completing the museum, unlocking a sector, capturing a creature, crafting a Diamond Dash, the developer skins, and riding the Moschy mount.",
                "The achievements here: You Look Amazing (Unlock 25 skins); Knowledge Archive (Complete the museum); Home Owner (Unlock the player’s house); So Shiny (Craft a Diamond Dash); I Found The Developers (Collect the hidden developer skins scattered around the islands.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Build up production - steel, then computers - and connect bots to antennas so your factories run themselves.",
                "2. Explore outward: discover 7 islands, take the first spacewalk, unlock the player's house, and visit the space station.",
                "3. Deal with the three island beasts (defeat or befriend Moschillar, Drameleon and Tunasa), then tame the Moschy and ride it.",
                "4. Complete the tech tree and the museum, unlock 25 skins, and push Steel production to 10,000.",
                "5. Hunt the secrets - the developer skins and Armando's hidden targets - with a guide.",
                "Tip: 40 bots working at once is the one milestone that needs planning - lay out enough bot antennas and power before you scale, and it lands during the tech-tree grind instead of being a separate build-out."
            ]
        }
    ]
};
