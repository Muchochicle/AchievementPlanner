// Ace Patrol: Pacific Skies Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/sid-meiers-ace-patrol-pacific-skies.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   244090 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "sid-meiers-ace-patrol-pacific-skies-achievement-guide",
    "category": "game",
    "gameSlug": "sid-meiers-ace-patrol-pacific-skies",
    "icon": "✈",
    "title": "Ace Patrol: Pacific Skies Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in Ace Patrol: Pacific Skies - none are hidden. Covers the battle / campaign / difficulty wins, the squadron and mission point milestones, and the ace-pilot and one-off feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Sid Meier's Ace Patrol: Pacific Skies has 50 Steam achievements and none are hidden. They are built around the four factions (US Army, US Navy, Japanese Army, Japanese Navy) - winning a battle and a campaign with each, the 50,000 / 100,000 / 150,000 squadron-point totals for each, and the 5,000 / 10,000 / 15,000 single-mission point scores for each. The rest are the difficulty wins (Pilot through Legend), the ace-pilot achievements (5 and 50 victories with a pilot of each faction), the 'Hat Trick' (three kills in one mission) at each difficulty, and building a four-ace squadron.",
                "The catalog marks it a single playthrough - the squadron-point totals accrue over a full campaign per faction, so four campaign runs cover almost everything. Nothing is missable.",
                "Tip: play a full campaign with each faction and keep one squadron going - the 150,000-point total and the 50-victory legendary pilot both come from sticking with the same squad rather than restarting."
            ]
        },
        {
            "heading": "Battles, Campaigns & Difficulty",
            "body": [
                "Winning a battle and winning the campaign as each of the four factions (US Army, US Navy, Japanese Army, Japanese Navy), and winning a mission at Pilot, Ace, Leader and Legend difficulty.",
                "The achievements here: Win a Battle - US Army (Win a Battle as the US Army); Win a Battle - US Navy (Win a Battle as the US Navy); Win a Battle - Japanese Army (Win a Battle as the Japanese Army); Win a Battle - Japanese Navy (Win a Battle as the Japanese Navy); Win the Campaign - US Army (Win the Campaign as the US Army); Win the Campaign - US Navy (Win the Campaign as the US Navy); Win the Campaign - Japanese Army (Win the Campaign as the Japanese Army); Win the Campaign - Japanese Navy (Win the Campaign as the Japanese Navy); Win a Mission - Pilot (Win a Mission at Pilot difficulty level); Win a Mission - Ace (Win a Mission at Ace difficulty level); Win a Mission - Leader (Win a Mission at Leader difficulty level); Win a Mission - Legend (Win a Mission at Legend difficulty level)."
            ]
        },
        {
            "heading": "Squadron & Mission Points",
            "body": [
                "The 50,000 / 100,000 / 150,000 squadron-point totals for each of the four factions, and the 5,000 / 10,000 / 15,000 single-mission point scores for each of the four factions.",
                "The achievements here: 50,000 Squadron points - US Army (Earn 50,000 points with a US Army squadron); 50,000 Squadron points - US Navy (Earn 50,000 points with a US Navy squadron); 50,000 Squadron points - Japanese Army (Earn 50,000 points with a Japanese Army squadron); 50,000 Squadron points - Japanese Navy (Earn 50,000 points with a Japanese Navy squadron); 100,000 Squadron points - US Army (Earn 100,000 points with a US Army squadron); 100,000 Squadron points - US Navy (Earn 100,000 points with a US Navy squadron); 100,000 Squadron points - Japanese Army (Earn 100,000 points with a Japanese Army squadron); 100,000 Squadron points - Japanese Navy (Earn 100,000 points with a Japanese Navy squadron); 150,000 Squadron points - US Army (Earn 150,000 points with a US Army squadron); 150,000 Squadron points - US Navy (Earn 150,000 points with a US Navy squadron); 150,000 Squadron points - Japanese Army (Earn 150,000 points with a Japanese Army squadron); 150,000 Squadron points - Japanese Navy (Earn 150,000 points with a Japanese Navy squadron); 5,000 point mission - US Army (Achieve a 5,000 point mission with the US Army); 5,000 point mission - Japanese Navy (Achieve a 5,000 point mission with the Japanese Navy); 10,000 point mission - US Army (Achieve a 10,000 point mission with the US Army); 10,000 point mission - US Navy (Achieve a 10,000 point mission with the US Navy); 10,000 point mission - Japanese Army (Achieve a 10,000 point mission with the Japanese Army); 10,000 point mission - Japanese Navy (Achieve a 10,000 point mission with the Japanese Navy); 15,000 point mission - US Army (Achieve a 15,000 point mission with the US Army); 15,000 point mission - US Navy (Achieve a 15,000 point mission with the US Navy); 15,000 point mission - Japanese Army (Achieve a 15,000 point mission with the Japanese Army); 15,000 point mission - Japanese Navy (Achieve a 15,000 point mission with the Japanese Navy)."
            ]
        },
        {
            "heading": "Ace Pilots & Feats",
            "body": [
                "Earning 5 victories (Ace) and 50 victories (Legend) with a pilot of each faction, the 'Hat Trick' (three kills in one mission with one pilot) at Rookie, Pilot, Ace, Leader and Legend difficulty, creating a four-ace squadron, and the remaining 5,000-point mission scores.",
                "The achievements here: US Army Ace Pilot (5 Victories) (Earn 5 Victories with a US Army Pilot); US Navy Ace Pilot (5 Victories) (Earn 5 Victories with a US Navy Pilot); Japanese Army Ace Pilot (5 Victories) (Earn 5 Victories with a Japanese Army  Pilot); Japanese Navy Ace Pilot (5 Victories) (Earn 5 Victories with a Japanese Navy Pilot); Legendary US Army Pilot (50 Victories) (Earn 50 Victories with a US Army Pilot); Legendary US Navy Pilot (50 Victories) (Earn 50 Victories with a US Navy Pilot); Legendary Japanese Army Pilot (50 Victories) (Earn 50 Victories with a Japanese Army  Pilot); Legendary Japanese Navy Pilot (50 Victories) (Earn 50 Victories with a Japanese Navy Pilot); Hat Trick - Rookie (Shoot down 3 planes with 1 pilot in 1 mission: Rookie); Hat Trick - Pilot (Shoot down 3 planes with 1 pilot in 1 mission: Pilot); Hat Trick - Ace (Shoot down 3 planes with 1 pilot in 1 mission: Ace); Hat Trick - Leader (Shoot down 3 planes with 1 pilot in 1 mission: Leader); Hat Trick - Legend (Shoot down 3 planes with 1 pilot in 1 mission: Legend); Four Aces (Create a Squadron with four aces); 5,000 point mission - US Navy (Achieve a 5,000 point mission with the US Navy); 5,000 point mission - Japanese Army (Achieve a 5,000 point mission with the Japanese Navy)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full campaign with each faction, keeping one squadron running the whole way.",
                "2. Aim for the 150,000 squadron-point total in each campaign - it covers the 50,000 and 100,000 tiers too.",
                "3. Keep a single pilot flying to 50 victories for the 'Legendary Pilot' achievement in each faction.",
                "4. Score high single missions (15,000+) for the mission-point tiers.",
                "5. Do the 'Hat Trick' at each difficulty and build a four-ace squadron.",
                "Tip: the squadron and pilot totals do not carry between factions - plan on four separate long campaign runs, one per faction, rather than mixing."
            ]
        }
    ]
};
