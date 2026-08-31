// Fistful of Frags Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fistful-of-frags.json), whose 20 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   265630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "fistful-of-frags-achievement-guide",
    "category": "game",
    "gameSlug": "fistful-of-frags",
    "icon": "🤠",
    "title": "Fistful of Frags Achievement Guide",
    "summary": "A practical guide to all 20 Steam achievements in Fistful of Frags - none are hidden. Covers the trick-kill and PvP feats, the game-count level titles, and the movement-based kill challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fistful of Frags has 20 Steam achievements and none of them are hidden. Most are trick-kill and PvP feats - frag-robbing an injured player, long-range bow headshots, kicking enemies into hazards, killing while drunk or below 15 HP, defusing thrown dynamite, explosive chain reactions, ending a 7+ killstreak, dual Colt Walker kills, killing at 100% overencumber, and dropping 15 hats by shooting over heads. The rest are level titles for completing 25 / 100 / 500 games, your first human-player kill, the mobile cannon tutorial, and the sliding and wall-jump-kick kill counts.",
                "Nothing is missable - every counter is cumulative across matches and there are no timed or one-shot achievements.",
                "Tip: play the game normally for the level titles (25 / 100 / 500 games) and set out to do the trick-kill feats deliberately - most just need \"some\" of a specific kill, so a handful of intentional attempts each clears them."
            ]
        },
        {
            "heading": "Trick Kills & PvP Feats",
            "body": [
                "The trick-kill achievements - frag-robbing an injured player, long-range bow headshots, kicking enemies into hazards, drunk kills, defusing dynamite, explosive chain reactions, ending a 7+ killstreak, detonator kills, killing at 100% overencumber, dual Colt Walker kills, a bare-hands friend kill, sub-15-HP frags, and your first human-player kill.",
                "The achievements here: Frag Robber (Kill some enemies severely injured by another player, while that player is still close to the victim); Robin Hood (Make headshots with bow from long range); Kick their asses (Kick some enemies into water, fire or a large fall); Dutch Courage (Kill some enemies while being under whiskey's effect); Defuser (Pick lit dynamite sticks thrown by other players); Best Friends (Kill a few Steam friends with bare hands); More Dead Than Alive (Get some frags while your health is lower than 15 HP ); A Fistful of Dynamite (Get some kills with explosive chain reaction effect (their own dynamite kills them)); The Unforgiven (Kill enemies ending their streak of 7 or more kills); Detonator (Get some kills shooting at a lit dynamite); Overweighted (Kill enemies while reaching 100% overencumber due weapon accumulation); Overpowered (Kill enemies with dual Colt Walkers); My Name is Nobody  (Your first kill in a game among other human players)."
            ]
        },
        {
            "heading": "Progression & Movement Feats",
            "body": [
                "The level titles for completing 25 (Rancher), 100 (Gunfighter) and 500 (Legend) games, dropping 15 enemy hats, the mobile cannon tutorial, 25 sliding kills, and 25 wall-jump-kick kills.",
                "The achievements here: Level: Rancher (Complete 25 games); Level: Gunfighter (Complete 100 games); Level: Legend (Complete 500 games); Hat-Shooter (Drop 15 enemy player's hat by shooting over their heads); Certified mobile cannon operator (Complete the mobile cannon tutorial); Sliding killer (Kill 25 enemies while sliding); Bouncing around (Kill 25 enemies by kick right after wall-jumping)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the game normally, letting the 25 / 100 / 500 game-count titles accrue.",
                "2. Get your first human-player kill and do the mobile cannon tutorial early.",
                "3. Set out to do the trick-kill feats deliberately - kick kills, bow headshots, drunk kills, dynamite defuses, chain reactions.",
                "4. Grind the sliding and wall-jump-kick kill counts (25 each) while moving aggressively.",
                "5. Drop 15 hats by aiming just over enemies' heads for \"Hat-Shooter\".",
                "Tip: the hazard-kick, dynamite-defuse and chain-reaction feats are easiest on a crowded server with lots of dynamite flying - stay near a fire or ledge and look for opportunities."
            ]
        }
    ]
};
