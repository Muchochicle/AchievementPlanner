// Riptide GP2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/riptide-gp2.json), whose 29 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   257790 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "riptide-gp2-achievement-guide",
    "category": "game",
    "gameSlug": "riptide-gp2",
    "icon": "🚤",
    "title": "Riptide GP2 Achievement Guide",
    "summary": "A practical guide to all 29 Steam achievements in Riptide GP2 - none are hidden. Covers the career and event-mastery achievements, and the Hydrojet, online and stunt achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Riptide GP2 has 29 Steam achievements and none are hidden. Eleven are career and event mastery - a first-place finish, 1 / 2 / 3 stars in all Career events, 3 stars in every Hot Lap, Freestyle, Elimination and Race event, and 1000 / 1500 / 2000 points in a Freestyle event. The other eighteen are buying 1 / 4 / 8 Hydrojets, upgrading one (and fully), the online suite (play, win, 50 wins, 100 wins, close wins and losses), a rider-less win, the easter egg, a 200m jump, a level 10 stunt, reaching level 20, painting a jet, and smashing a bridge.",
                "The catalog marks it difficulty 3. 'Champion' (3 stars in every Career event) and 'Predator' (100 online wins) are the grinds; everything else is quick.",
                "Tip: three-star the whole Career (that covers the event-type mastery achievements too), then grind online for the 100-win achievement."
            ]
        },
        {
            "heading": "Career & Event Mastery",
            "body": [
                "A first-place finish, 1 / 2 / 3 stars in all Career events, 3 stars in every Hot Lap, Freestyle, Elimination and Race event, and 1000 / 1500 / 2000 points in a single Freestyle event.",
                "The achievements here: I Did It! (Place 1st in any event.); Amateur (Get 1 star in all Career events.); Professional (Get 2 stars in all Career events.); Champion (Get 3 stars in all Career events.); Speedy Racer (Earn 3 stars in every Hot Lap.); Tricky Racer (Earn 3 stars in every Freestyle event.); Aggressive Racer (Earn 3 stars in every Elimination event.); Pro Racer (Earn 3 stars in every Race event.); Stunt Novice (Get 1000 points in a Freestyle event.); Stunt Expert (Get 1500 points in a Freestyle event.); Stunt Master (Get 2000 points in a Freestyle event.)."
            ]
        },
        {
            "heading": "Hydrojets, Online & Stunts",
            "body": [
                "Buying 1 / 4 / 8 Hydrojets, upgrading one and fully upgrading one, playing and winning online (1, 50 and 100 wins), a rider-less win, the hidden easter egg, close online win and loss, a 200m jump, a level 10 stunt, reaching level 20, painting a jet, and smashing a bridge in Factory Shift.",
                "The achievements here: My First Hydrojet (Buy 1 Hydrojet.); Enthusiast (Buy 4 Hydrojets.); Collector (Buy 8 Hydrojets.); Mechanic (Upgrade a Hydrojet.); Tricked Out (Upgrade a Hydrojet fully.); Socialite (Play an Online match.); Small Fish (Win an Online match.); Big Fish (Win 50 Online matches.); Predator (Win 100 Online matches.); Still Counts (Win a race without the rider.); It's a Secret (Find the hidden easter egg.); By A Nose (Win an Online race event by less than a tenth of a second.); So Close! (Lose an Online race event by less than a tenth of a second.); Flying High (Jump over 200 meters.); Freeky Stylie (Unlock a level 10 Stunt.); Seasoned Vet (Reach level 20.); Call Me Picasso (Paint your Hydro Jet.); Destructive Tendencies (Smash a bridge in the Factory Shift event.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Career, three-starring every event - this also grants 'Speedy Racer', 'Tricky Racer', 'Aggressive Racer' and 'Pro Racer'.",
                "2. Buy and upgrade Hydrojets to 8 owned and one fully upgraded, and reach level 20.",
                "3. Push a Freestyle event to 2000 points and land a 200m jump and a level 10 stunt.",
                "4. Grind online for the win-count achievements up to 'Predator' (100 wins).",
                "5. Do the small one-offs: the easter egg, a rider-less win, painting a jet, smashing a bridge.",
                "Tip: the online win grind is fastest in private lobbies against a friend, or in low-population lobbies where you can consistently place first."
            ]
        }
    ]
};
