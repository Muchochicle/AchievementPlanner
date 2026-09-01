// Need for Speed Heat Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/need-for-speed-heat.json), whose 42 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1222680 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 10 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "need-for-speed-heat-achievement-guide",
    "category": "game",
    "gameSlug": "need-for-speed-heat",
    "icon": "🚗",
    "title": "Need for Speed Heat Achievement Guide",
    "summary": "A practical guide to all 42 Steam achievements in Need for Speed Heat (10 hidden). Covers the four story chapters, the three driving stories, the REP and Crew progression, the collectibles and activities, and the build-specific race challenges. Ten of the achievements are hidden - the chapters, driving stories, a top-speed run and the flamingos - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Need for Speed Heat has 42 Steam achievements and 10 are hidden. Four are story chapter completions (Chapters 1-4), three are the driving stories (Drift, Off-road, Race), one is hitting 240 mph in any car, one is picking your first ride, and one is collecting all the flamingos. Everything visible is progression and activities - REP and Crew levels, the collectibles (billboards, street art, long jumps, speed traps, drift zones), the build-specific race wins, and online events.",
                "The catalog marks it difficulty 3. Nothing is missable - the open world stays available after the story, and every activity, collectible and build challenge can be done afterward. The main efforts are 'Be The Very Best' (all collectibles and 3 stars on every activity) and the online-event achievements.",
                "Tip: the build-specific race wins ('Sideways Style', 'Redline', etc) each just need a car tuned toward that handling profile - keep one cheap car and swap its handling parts between races rather than building a separate car for each."
            ]
        },
        {
            "heading": "Story, Driving Stories & Progression",
            "body": [
                "The four story chapters, hitting 240 mph, picking your first ride, 100 cop takedowns, 3 stars on all activities, the license plate text, a Crew Time Trial, all billboards, a 399-PR race win, all collectibles + 3 stars, a last-to-first final-lap win, the three driving stories (Drift, Off-road, Race), and collecting all the flamingos.",
                "The achievements here: Welcome to Palm City (Take your first ride.); Consider Yourself Noticed (Complete Chapter 1.); Worlds Collide (Complete Chapter 2.); Home from Home (Complete Chapter 3.); Merciless (Complete Chapter 4.); Eleven - Fifty Six (Take down 100 Cop Vehicles); Warp Speed (Reach 240 mph with any car.); The Brightest Stars (Get a 3 Star Rating on all the Activities in the game); Change My Name (Change the text on the License Plate); Two Racers, One Event (Beat your first Crew Time Trial); A Bit Of Paradise (Smash your way through all the Billboards); I Said Right Now! (Win a race with a car at 399 Performance Rating); Be The Very Best (Get all Collectibles and 3 stars on all Activities); Comeback Kid (Go from last to first place during the final lap of a race and win); Carving Turns (Complete the Drift driving story.); Off the Grid (Complete the Off-road driving story.); Friends Reunited (Complete the Race driving story.)."
            ]
        },
        {
            "heading": "Customization, Challenges & Online",
            "body": [
                "A wrap, a Daily Challenge, all Drift Zones, the auxiliary-slot and effects-slot race wins, 100 cop-chase escapes, 25 and 5 online events, night gas-station repairs, all street art, a High Heat 5 win, all Long Jumps, max Crew Level, the build-specific race wins (drift, off-road, road, race), REP Levels 2 and 50, a million REP banked in one night, all speed traps, an engine swap, the Discovery Event, and a tuned-exhaust win.",
                "The achievements here: Wrap It Up! (Customize a vehicle with a wrap); Don't Quit Your Day Job (Complete your first Daily Challenge); Drift, Drift, Drift (Complete all Drift Zones); Techin' (Win a race with parts equipped in both auxiliary part slots); Blame The Vain (Win a race with all vehicle effects slots equipped); Travis, Who? (Escape 100 Cop Chases); Benefits Are Nice (Complete 25 events online with other players); You have friends? (Complete 5 events online with other players); Get Shrimpin' (Collect all the flamingos.); At The Last Second (Repair critical damage at a Gas Station at night); Graffer (Collect all Street Art); The Most Wanted (Win a High Heat 5 race and return to garage safely); Full Send (Complete all Long Jumps); All For One (Reach max Crew Level with your Crew); Sideways Style (Win a race with handling parts for maximum drift equipped); The Hackney Dream (Win a race with handling parts for maximum off-road traction equipped); Component Parts (Win a race with handling parts for maximum road traction equipped); Redline (Win a race with handling parts for maximum race equipped); Humble Beginnings (Reach REP Level 2); Notorious (Reach REP Level 50); Cashing In (Earn and bank 1 000 000 REP during one night); Danger Zone (Complete all Speed Traps); Swappin' (Win a race in a vehicle with an engine swap); Around The World (Win the Discovery Event); Hear Me Roar (Win a race in a vehicle with tuned exhaust sound)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the four story chapters, which also carry you through the early REP progression.",
                "2. Complete the three driving stories (Drift, Off-road, Race).",
                "3. Sweep the collectibles - billboards, street art, long jumps, speed traps, flamingos - and 3-star every activity.",
                "4. Do the build-specific race wins by swapping one car's handling and effect parts between races.",
                "5. Do the online-event achievements (5 and 25 events with other players) and max your Crew Level.",
                "Tip: 'The Most Wanted' (win a High Heat 5 race and return to the garage safely) is the riskiest - build up Heat during a good night, win the race, then drive carefully back to a safehouse without getting busted."
            ]
        }
    ]
};
