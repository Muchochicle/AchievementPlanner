// The Plucky Squire Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-plucky-squire.json), whose 24 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1627570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-plucky-squire-achievement-guide",
    "category": "game",
    "gameSlug": "the-plucky-squire",
    "icon": "📖",
    "title": "The Plucky Squire Achievement Guide",
    "summary": "A practical guide to all 24 Steam achievements in The Plucky Squire (7 hidden). The hidden achievements are the final-boss fight, the rat-chase section, and five word-rearranging puzzle solutions. Everything else - the Story and Adventure completions, the Glitchbird and Art Scroll collections, the boss fights, and the Challenge / Iron Squire modes - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Plucky Squire has 24 Steam achievements, 7 of them hidden. Jot, the hero of a children's storybook, is thrown out of the pages by the sorcerer Humgrump and fights back both inside the book and across the 3D desk it sits on. The visible achievements cover completing Story and Adventure modes, rescuing all Glitchbirds and finding all Art Scrolls (and finding a first of each), fully upgrading Jot, the boss fights (the Honey Badger, the Mega Eagle, the Mage), a few desk one-offs (jump off the desk, the star projector scroll, catch Floatio first try), and the Challenge and Iron Squire modes.",
                "The 7 hidden achievements are defeating Humgrump (the final boss), the rat-chase section, and five word-rearranging puzzle solutions (make the frog huge, the bridge huge, blow up a bust, cheese mushrooms, a cheese pillar).",
                "The catalog marks it difficulty 2 and single-playthrough for the main game; the Challenge and Iron Squire modes are extra. Nothing is missable - chapter select covers the collectibles and the word puzzles."
            ]
        },
        {
            "heading": "Story & Bosses",
            "body": [
                "Completing Story and Adventure modes, the boss fights (Honey Badger, Mega Eagle, Mage), the hidden Humgrump fight, and the hidden rat-chase section.",
                "The achievements here: Story Complete (Complete the Story Mode.); Adventure Complete (Complete the Adventure Mode.); Powerful Puncher (Defeat the Honey Badger in a boxing match.); Metal Warrior (Defeat the Mega Eagle.); Mighty Witch (Defeat the Mage.); WRETCHED RODENT!!! (Complete the infuriating rat-chase section.); Triumphant Squire (Defeat the sorcerer Humgrump - the final boss, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Collectibles & Word Puzzles",
            "body": [
                "The Glitchbird and Art Scroll collections (first and all), fully upgrading Jot, and the five hidden word-rearranging puzzle solutions.",
                "The achievements here: Saviour of the Glitchbirds (Rescue all Glitchbirds.); Art Collector (Find all Art Scrolls.); Powerful Jot (Fully upgrade Jot's abilities.); Huge Frog (Rearrange a sentence to make the little frog huge.); Huge Bridge (Rearrange a sentence to make the bridge huge.); Bust Buster (Rearrange a sentence to blow up Humgrump's bust.); Cheese Mushrooms (Rearrange a sentence to make cheese mushrooms.); Cheese Pillar (Rearrange a sentence to make a cheese pillar.); The Joy Of Art (Find an Art Scroll.); Cute Little Glitchbird (Find a Glitchbird.)."
            ]
        },
        {
            "heading": "Desk One-offs & Extra Modes",
            "body": [
                "Catching Floatio first try, jumping off the desk, the star projector scroll, and the Challenge and Iron Squire modes.",
                "The achievements here: Perfect Fish Grab (Catch Floatio on your first try.); Optimistic Explorer (Try jumping off the desk. Worth a go.); Star Walker (Retrieve the scroll from the top of the star projector.); Challenge Mode Complete (Complete the game in Challenge Mode); Minigame MaxiGrump (Complete every Humgrump-corrupted minigame in Challenge Mode); Brawl Buster (Defeat every enemy in Deep Doom’s elevator room without dying in Challenge Mode.); Ironclad At Artia (Reach Artia in Iron Squire Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Story mode to completion, doing each boss fight and the hidden Humgrump finale.",
                "2. As you go, solve each word-rearranging puzzle fully - the huge frog, huge bridge, exploding bust, cheese mushrooms and cheese pillar are all optional sentence rearrangements.",
                "3. Get through the rat-chase section (it is deliberately annoying) and the desk one-offs (jump off the desk, the star projector, catch Floatio on the first try).",
                "4. Use chapter select to collect every Glitchbird and Art Scroll and fully upgrade Jot.",
                "5. Play Adventure mode, then Challenge mode (all corrupted minigames, the elevator brawl) and reach Artia in Iron Squire mode.",
                "Tip: try every word-swap the game offers, not just the one that solves the puzzle - the five hidden achievements are all for 'wrong' but valid rearrangements (a huge frog, a cheese pillar), so experiment with each sentence before moving on."
            ]
        }
    ]
};
