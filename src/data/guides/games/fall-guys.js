// Fall Guys Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/fall-guys.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1097150 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
//   Steam's storesearch no longer lists Fall Guys (it moved to
//   free-to-play on the Epic Games Store) but the appid 1097150 schema
//   is unmistakable.
// - Sections group by what each achievement needs: basics and Episode
//   wins, racing and skill, cosmetics and Fame, and the mess-around
//   one-offs.
export const GUIDE = {
    "slug": "fall-guys-achievement-guide",
    "category": "game",
    "gameSlug": "fall-guys",
    "icon": "🫘",
    "title": "Fall Guys Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in Fall Guys - none are hidden. The basics and Episode-win milestones, the racing and skill achievements, the cosmetic and Fame goals, and the mess-around achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Fall Guys has 34 Steam achievements and none are hidden. Most are cumulative counters - qualify from N rounds, win N Episodes, get first in a race N times - plus a set of cosmetic and Fame goals and a handful of silly one-offs.",
                "Nothing is missable and progress persists across seasons. The long ones are Golden Guy (win 20 Episodes), Veteran Status (qualify from 500 rounds), Track Star (first in a race 20 times) and Infallible (win 5 Episodes in a row).",
                "Tip: just keep playing Solo Shows - the qualify-count and win-count achievements fill naturally. Practise the pure race maps (they show up often) for the first-place achievements, and pick up cosmetics and Fame from the season pass and store as you go."
            ]
        },
        {
            "heading": "Basics & Episode Wins",
            "body": [
                "The starter and win milestones: a hug, your first qualify, your first Episode win, and the win/qualify counters (5 in a row, 7 wins, 20 wins, 100 rounds, 500 rounds).",
                "The achievements here: Fall Bae (Share a hug with a Fall Guy); One small trip (Qualify from your first round); Victory! (Win your first Episode); Infallible (Win 5 Episodes in a row); Top Tier (Win 7 Episodes); Golden Guy (Win 20 Episodes); One giant leap (Qualify from 100 rounds); Veteran Status (Qualify from 500 rounds)."
            ]
        },
        {
            "heading": "Racing & Skill",
            "body": [
                "The skill achievements: qualifying a race despite falling 10+ times, a no-fall flawless qualify, first place in a race (once, 5 times, 20 times), qualifying after overtime, a 1-point team-game qualify, and an emote just before winning a race.",
                "The achievements here: Face First (Qualify from a racing round despite falling over more than 10 times); Flawless Victory (Qualify from a round without falling over even once); Ahead of the Pack (Get first place in a racing round); Quite Dashing (Get first place in a racing round 5 times); Track Star (Get first place in a racing round 20 times); Down to the Wire (Qualify after a round goes to overtime); Low Baller (Qualify from a team game with a score of 1); Big Tease (Perform an emote just before coming first in a race round)."
            ]
        },
        {
            "heading": "Cosmetics & Fame",
            "body": [
                "The customization and season goals: equipping your first item and first legendary, unlocking 10 and 50 store items, the tiered full-outfit rarity achievements (Bargain Bucket, Mad Trendy, Head Turner), and reaching Fame level 10, 25 and 40 in a season.",
                "The achievements here: Fall Guy Fashionista (Unlock 50 cosmetic items from the store); Shopping Spree (Unlock 10 cosmetic items from the store); Snowflake (Equip your first cosmetic item); Bargain Bucket (Equip an uncommon or better Body Colour, Pattern, Upper and Lower Costume piece); Mad Trendy (Equip a rare or legendary Body Colour, Pattern, Upper and Lower Costume piece); Head Turner (Equip a legendary Body Colour, Pattern, Upper and Lower Costume piece); Catwalk Model (Equip your first legendary customization item); One to Watch (Reach lvl 10 fame during a season); Household Name (Reach lvl 25 fame during a season); Star of the Show (Reach lvl 40 fame during a season)."
            ]
        },
        {
            "heading": "Messing Around",
            "body": [
                "The one-off silly achievements: winning with a custom Celebration, winning in a party of 3+, an hour of total falling time, 1,000 bumps into other players, a 3-second head-first fall, knocking someone over, three bumps while rolling, and reaching terminal velocity.",
                "The achievements here: Show Off (Win an Episode with a custom Celebration equipped); Squad Goals (Win an Episode as part of a party of 3 or more players); Big Air (Clock up 1 hour total time falling); Stumble Chums (Bump into other Fall Guys 1000 times in total); Style Points (Fall for at least 3 seconds before landing on your head); Big Bully (Knock someone over); Troublemaker (Bump into 3 people while rolling on the ground before getting up); Fall Throttle (Reach terminal velocity )."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Solo Shows normally - One small trip, Victory!, the qualify counters (One giant leap, Veteran Status) and the win counters (Top Tier, Golden Guy) all fill with time.",
                "2. Practise the race finals for Ahead of the Pack, Quite Dashing and Track Star, and do the situational qualifies (Face First, Flawless Victory, Down to the Wire, Low Baller).",
                "3. Work the cosmetic and Fame achievements from the season pass and store as you level up.",
                "4. Do the silly one-offs deliberately: Fall Bae, Big Tease, Big Bully, Troublemaker, Style Points, Fall Throttle, Show Off and Squad Goals (needs a party).",
                "Tip: Infallible (5 Episode wins in a row) is the hardest - queue when the server population is lower (off-peak) so lobbies fill with less-experienced players, and stick to shows without a big luck element in the final."
            ]
        }
    ]
};
