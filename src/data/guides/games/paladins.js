// Paladins Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/paladins.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   444090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "paladins-achievement-guide",
    "category": "game",
    "gameSlug": "paladins",
    "icon": "🛡️",
    "title": "Paladins Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Paladins - none are hidden. Covers the kill, mastery and party achievements, the single-match feats and account milestones, and the progression and Ranked achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Paladins has 58 Steam achievements and none are hidden. About the first half are tiered grinds - Double Kills (10 up to 400), Champion Mastery (1 up to 10 champions at Mastery 5), 'Friends Forever' (5 up to 250 hours partied with a friend) and 'Teamed Up' (1 up to 100 party matches). The rest are single-match feats (a 20-kill match, 100,000 damage, an ace before taking damage, a from-the-grave kill), account milestones (300 matches, 1,000,000 gold, a one-year-old account) and Ranked (unlock Ranked, reach Master).",
                "The catalog marks it difficulty 4 and hundreds of hours. It is a free-to-play grind: '250 hours with a friend', '30 champions at Mastery 20' and 'Reach Master in Ranked' are the long tail, and 'Beta Player' is permanently unobtainable now.",
                "Tip: play normally with a regular duo partner - the party, friend-hours and mastery tiers all climb together - and set aside Ranked sessions for 'Pinnacle'."
            ]
        },
        {
            "heading": "Kills, Mastery & Party",
            "body": [
                "Double Kills Bronze through Diamond (10-400), Champion Mastery I through X (1-10 champions at Mastery 5), 'Survivor' (50 low-health wins), 'Boom Headshot' (5 in a row), 'Friends Forever' Bronze through Diamond (5-250 hours with a friend), and 'Teamed Up' Bronze through Diamond (1-100 party matches).",
                "The achievements here: Double Kills Bronze (10 Double Kills.); Double Kills Silver (50 Double Kills.); Double Kills Gold (100 Double Kills); Double Kills Platinum (200 Double Kills.); Double Kills Diamond (400 Double Kills.); Champion Mastery I (1 Champion at Mastery 5.); Champion Mastery II (2 Champions at Mastery 5.); Champion Mastery III (3 Champions at Mastery 5.); Champion Mastery IV (4 Champions at Mastery 5.); Champion Mastery V (5 Champions at Mastery 5.); Champion Mastery VI (6 Champions at Mastery 5.); Champion Mastery VII (7 Champions at Mastery 5.); Champion Mastery VIII (8 Champions at Mastery 5.); Champion Mastery IX (9 Champions at Mastery 5.); Champion Mastery X (10 Champions at Mastery 5.); Survivor (Survive more than 50 battles with less than 10% health.); Boom Headshot (Land 5 headshots in a row without missing.); Bronze Friends Forever (Play 5 hours with a player from your friends list in your party.); Silver Friends Forever (Play 10 hours with a player from your friends list in your party.); Friends Forever Gold (Play 25 hours with a player from your friends list in your party.); Friends Forever Platinum (Play 100 hours with a player from your friends list in your party.); Friends Forever Diamond (Play 250 hours with a player from your friends list in your party.); Teamed Up Bronze (Play a match while in a party.); Teamed Up Silver (Play 10 matches while in a party.); Teamed Up Gold (Play 20 matches while in a party.); Teamed Up Platinum (Play 50 matches while in a party.); Teamed Up Diamond (Play 100 matches while in a party.)."
            ]
        },
        {
            "heading": "Match Feats & Account",
            "body": [
                "'Beta Player' (now unobtainable), a shutout win, an untouched-ace, a from-the-grave kill, a 20-kill match, the tutorial, a bounty kill on a 15-streak enemy, a high-altitude air kill, a post-round killing blow, an environmental death and kill, 100,000 damage in a match, being last alive, 100 cards unlocked, a sub-50-health kill, and a 300-unit sniper kill.",
                "The achievements here: Beta Player (Reach level 30 during the Paladins Beta.); Untouched (Win a match where the enemy team scored no points.); Questions Later (Deal damage to every enemy champion in a match before any of them damage you.); From The Grave (Kill an enemy champion after they had already killed you.); Hard Carry (Kill more than 20 enemy champions in a single match.); Well Trained (Complete the Paladins Tutorial.); Bounty Hunter (Kill an enemy player who is on a 15 killstreak or higher.); Counter-Air Defense (Kill a player in the air who is over 100 units above the ground.); Give 110 Percent (Get a killing blow after the round has ended.); Gone Spelunking (Die to an environmental hazard.); I Like Big Numbers (Deal more than 100,000 damage during a match.); Last One Standing (Be the only player alive in a match.); Master Collector (Unlock 100 Cards.); Not Like This (Kill an enemy player while you are at or below 50 Health.); Send Off (Kill a player with an environmental hazard.); Sniper (Kill an enemy player from over 300 units away.)."
            ]
        },
        {
            "heading": "Progression & Ranked",
            "body": [
                "Unlocking Ranked, 100,000 shielded and 100,000 healed in a match, a 7-day login streak, a custom loadout, 300 matches, 500,000 and 1,000,000 lifetime gold, a 20-kill streak, 100,000 store credits spent, reaching Master in Ranked, a one-year-old account, and 30+ champions at Mastery 10, 15 and 20.",
                "The achievements here: A New Challenger (Unlock Ranked); Bullet Sponge (Shield over 100,000 damage in a match); Surgeon General (Heal over 100,000 health in a match); Citizen of the Realm (Get a daily reward 7 days in a row); This is My Style (Build your own custom loadout); Battle Thirsty (Play over 300 matches); To the Victor go the Spoils (Earn over 500,000 Gold over your play history); Millionaire (Earn over 1,000,000 Gold over your play history); Unstoppable (Reach a 20 kill streak in a match); Big Spender (Spend over 100,000 Credits in the item store over all your matches); Pinnacle (Reach Master in Ranked); Witness to History (Have a Paladins account over 1 year old); Variety is the Spice of Life (Have over 30 different champions at mastery level 10 or higher); The Dedicated (Have over 30 different champions at mastery level 15 or higher); The Insane (Have over 30 different champions at mastery level 20 or higher)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial ('Well Trained') and build a custom loadout ('This is My Style').",
                "2. Play regularly with a fixed duo partner - 'Friends Forever', 'Teamed Up', Double Kills and Champion Mastery all rise together.",
                "3. Chase the single-match feats opportunistically (20 kills, 100,000 damage/heal/shield, from-the-grave, sniper, environmental kills).",
                "4. Grind champion mastery broadly for 'Variety is the Spice of Life' and its 15/20 versions (30+ champions each).",
                "5. Play Ranked seasons for 'A New Challenger' and 'Pinnacle' (Master).",
                "Tip: 'Beta Player' can no longer be earned, so 100% on the Steam list is effectively 57/58 unless you already had it - don't burn time hunting it."
            ]
        }
    ]
};
