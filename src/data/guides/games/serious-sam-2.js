// Serious Sam 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/serious-sam-2.json), whose 30 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   204340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "serious-sam-2-achievement-guide",
    "category": "game",
    "gameSlug": "serious-sam-2",
    "icon": "🔫",
    "title": "Serious Sam 2 Achievement Guide",
    "summary": "A practical guide to all 30 Steam achievements in Serious Sam 2 (6 hidden). Covers the campaign and difficulty clears, the combat and challenge feats, and the secret easter eggs and speed achievements. Six achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Serious Sam 2 has 30 Steam achievements and six are hidden - all secret easter eggs: 'He Sure Had Me Fooled!' (the spinning health by the blue Rollerball in Road to Ursul), 'My Old Love' (the secret Rocket Launcher by the waterfall in Jungle), 'Don't Feed The Monkey!!!' (throw a banana into the monkey head in Riverdance), 'How Unfortunate' (approach the match near the dynamite in Giant Junkyard), 'Fun And Games' (blow the out-of-place blue stone in the Floaterra arena and use the teleporter), and 'Someone Pick Up The Phone...' (the red phone booth in Siriuspolis Downtown). The rest are open: the seven episode completions, the difficulty clears, the challenge feats (60 secrets, 20,000 kills, the Mental Institution restriction run), and the football-secret and par-time achievements.",
                "The catalog marks it difficulty 4 and roughly two playthroughs - 'Serious Master' (the whole game on Serious), 'Mental Institution Master' (that level on Serious with no dual weapons or sprinting), 'Serious Run' (par time on every level) and 'Sam I Am!' (20,000 kills) are all long. Nothing is missable: levels replay and counters are cumulative.",
                "Tip: knock the six hidden easter eggs out on an easy run with a secrets video open - each is a one-time interaction on a specific level and impossible to stumble on."
            ]
        },
        {
            "heading": "Campaign & Difficulty",
            "body": [
                "Completing the Jungle level, each of the seven episodes (M'Digbo, Magnor, ChiFang, Kleer, Ellenier, Kronor, Sirius), the game on any difficulty and on Serious, and the Mental Institution level on Serious with no dual weapons or sprinting.",
                "The achievements here: Serious Beginner (Complete Jungle Level); Simba Defender (Complete M'Digbo Episode); Zixie Savior (Complete Magnor Episode); Chi Fang Champion (Complete ChiFang Episode); Dances with Kleer (Complete Kleer Episode); Elvian Defender (Complete Ellenier Episode); Hugo Annihilator (Complete Kronor Episode); Mental Kicker (Complete Sirius Episode); Totally Serious (Complete Game on ANY Difficulty); Serious Master (Complete Game on SERIOUS Difficulty); Mental Institution Master (Complete Mental Institution on SERIOUS difficulty without using dual weapons, sprinting and rocket jumping)."
            ]
        },
        {
            "heading": "Combat & Challenge Feats",
            "body": [
                "Finding 60 secrets, 20,000 kills, 20 minutes of powerups, 10 Serious Bomb uses, 20 extra lives on one level, 200 hand grenades, the hidden 'He Sure Had Me Fooled!' secret, a Serious 2X-multiplier level and full game, sending 100 Klodovics flying, and all secrets on one level.",
                "The achievements here: Look, It's A Secret (Find at least 60 secrets); Sam I Am! (Kill 20000 Enemies); Powered Up (Use Powerups for more than 20 Minutes); Atomic Firecracker (Use Serious Bomb 10 times); Extra Life! (Get 20 extra lives on one level); A Helping Hand (Throw 200 hand grenades); He Sure Had Me Fooled! (In 'Road to Ursul', activate the secret spinning health item on the far left of the blue Rollerball vehicle.); Double Trouble (Complete a level on SERIOUS Difficulty with 2X Enemy Multiplier or higher); Punk Rocker (Complete Game on ANY Difficulty with 2X Enemy Multiplier or higher); Bird Lover (Send 100 Klodovics flying); Sherlock (Find all secrets on one level)."
            ]
        },
        {
            "heading": "Secret Easter Eggs & Speed",
            "body": [
                "The five remaining hidden easter eggs (the Jungle Rocket Launcher, the Riverdance banana, the Giant Junkyard match, the Floaterra teleporter, the Siriuspolis phone booth), all football-related secrets, beating par time on every level, and 300 Cannon kills.",
                "The achievements here: My Old Love (In the 'Jungle' level, find the secret Rocket Launcher near the waterfall - shoot the rope holding the wooden plank so it drops.); Don't Feed The Monkey!!! (In 'Riverdance', after crossing the bridge, pick up the banana from between the stones on the right and throw it into the large monkey head on the left.); How Unfortunate (In 'Giant Junkyard', approach the match near the large dynamite blocking your path - the secret activates automatically.); Fun And Games (In 'Floaterra', on the second island's arena, blow up the out-of-place blue stone and stand inside the teleporter in the cave behind it.); Someone Pick Up The Phone... (Find the red phone booth hidden behind a tree in 'Siriuspolis Downtown'.); Football Glory (Find all football-related secrets); Serious Run (Complete all of the levels, beating estimated time on each level); Cannon Expert (Kill 300 enemies with the Cannon)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through the campaign once on Normal, learning each level and grabbing secrets.",
                "2. Do the six hidden easter eggs on that run with a secrets video open.",
                "3. Grind the combat feats (20,000 kills, 200 grenades, 100 Klodovics, 300 Cannon kills) across playthroughs.",
                "4. Do 'Serious Run' level by level from the menu, then the 2X-multiplier clears.",
                "5. Finish the game on Serious, and do the Mental Institution restriction run.",
                "Tip: 'Sam I Am!' (20,000 kills) and the weapon kill counts stack - replay enemy-dense levels like the Kleer episode and the counters climb together."
            ]
        }
    ]
};
