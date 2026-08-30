// The Crew 2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-crew-2.json), whose 34 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   646910 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-crew-2-achievement-guide",
    "category": "game",
    "gameSlug": "the-crew-2",
    "icon": "🚗",
    "title": "The Crew 2 Achievement Guide",
    "summary": "A practical guide to all 34 Steam achievements in The Crew 2 - none are hidden. Covers the Live Xtrem Series and discipline-leader story, the follower-level progression, the vehicle collection and skill feats, and the meta and endgame achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Crew 2 has 34 Steam achievements and none of them are hidden. The story spine is completing the Live Xtrem Series episodes and the Grand Finale, and beating the four discipline leaders (Street Racing, Pro Racing, Freestyle, Offroad). Progression is the follower system - reaching Popular, Famous, Star, Icon and Icon 50. The rest are collection and skill feats (own 30 vehicles, complete an event in each discipline, a 100m bike jump, a 100,000-point drift, 24 hours played) and a run of tongue-in-cheek meta achievements (Act Like a Game Designer for redoing an event three times, The End is Nigh for driving to the edge of the map).",
                "Nothing is missable - events replay freely, follower level only ever rises, and the drive-distance and time-played achievements accumulate. The longest is simply reaching Icon 50, which needs a large amount of follower XP from events, stunts and photo ops across the whole USA map.",
                "Tip: run photo ops and stunt zones in Freedrive between story events - they pay a steady stream of followers toward the Icon 50 grind, and Pics or it didn't Happen (40 Photo Ops) plus the Freedrive-stunt followers achievement come along for free while you build XP."
            ]
        },
        {
            "heading": "Story & Followers",
            "body": [
                "Completing the first Live Xtrem Series episode, beating the four discipline leaders (Tio Marquez, Clarence Bishop III, Sofia, Tucker Morgan), the Grand Finale, 40 Photo Ops, the New York Hypercar event, and reaching each follower level - Popular, Famous, Star, Icon and Icon 50.",
                "The achievements here: Welcome to MotorNation (This time we'll be generous! You have completed the 1st Episode of the Live Xtrem Series.); Ruler of the Streets (Beat Tio Marquez, The Street Racing king); Master of the Line (Beat Clarence Bishop the Third, the Pro Racing heir); Creative Thinker (Beat Sofia, the Freestyle queen); Double Down (Beat Tucker Morgan, the Offroad  champ); That's a Wrap! (Complete The Grand Finale); Pics or it didn’t Happen (Complete 40 Photo Ops); Coast to Coast (Complete the New York Hypercar event); First Autograph (Earn enough followers to reach Popular level); Press Conference (Earn enough followers to reach Famous level); Rising Star (Earn enough followers to reach Star level); The Man, the Myth, the Legend (Earn enough followers to reach Icon level); Are you a God? (Say yes) (Earn enough followers to reach Icon 50 level)."
            ]
        },
        {
            "heading": "Collection, Skills & Feats",
            "body": [
                "Painting a vehicle, owning 30 different vehicles, completing an event in each discipline and each skill type, beating a friend's highlight, an event on hard difficulty, an event in a crew, 500 followers from Freedrive stunts, 24 hours played, a 100m bike jump, and a 100,000-point drift.",
                "The achievements here: Paint Don't Hurt (Change the color of one vehicle in your home); The Collector (Own 30 different vehicles); Jack of all trades (Complete one Event in each discipline (Main Game)); Virtuoso (Complete each skill type (Main Game)); I Must Break You (Beat a friend's highlight (best score of a friend)); Hard way to hell (Complete an event on hard difficulty); Social Butterfly (Complete an event while in a crew); Easy Rider (Earn 500 Followers through stunts in Freedrive); Reality Check (You’ve spent 24 whole hours in our virtual world. We thought you should know.); Leap of Faith, No Straw (Do a 100 meter jump on a bike); Drift Like a Tester (Score 100.000 PTS or more in any drift event)."
            ]
        },
        {
            "heading": "Meta & Endgame Feats",
            "body": [
                "The tongue-in-cheek meta achievements - redoing the same event three times, a for-fun photo outside a photo op, driving to the far edge of the world, a 2km drive in the most expensive car - plus reaching max level on a vehicle, 50km in a row in a crew, watching a full narrative reward, beating a rival's ghost, completing the full Live Xtrem Series season, and an epic-parts-only vehicle.",
                "The achievements here: Act Like a Game Designer (Redo the same event at least 3 times in a row); Act Like an Art Director (Take a picture outside of any photo op just for fun, because it looks good); The End is Nigh (Go to the far edge of the world); Ride the Jewels (Drive more than 2km in a row with the most expensive car (Main Game)); Max Out Fury Load (Reach Max Level for One of your Vehicles (Main Game)); BFF (Drive 50 KM in a row in a crew); Act like a Narrative Designer (Unlock all the pieces and watch a full narrative reward); Ghost Bustin' 2 (Beat a rival or a friend’s ghost); Binge Watching (Complete the full season of the Live Xtrem Series); Epic Win (Upgrade your vehicle with epic parts only)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story: complete the Live Xtrem Series episodes and Grand Finale, and beat all four discipline leaders.",
                "2. As you build followers toward Icon 50, run Photo Ops (toward 40) and Freedrive stunts (toward 500 stunt followers) between events.",
                "3. Do the one-off skill feats - a 100m bike jump, a 100,000-point drift, an event in each discipline and skill type, a hard-difficulty event.",
                "4. Do the meta achievements deliberately: redo an event three times, take a free-roam photo, drive to the edge of the map, and drive 2km in the most expensive car.",
                "5. With a friend or crew, do the crew-event and 50km-in-a-crew achievements, and finish by reaching max level on a vehicle and building one with epic parts only.",
                "Tip: buy the cheapest 30 vehicles you can afford rather than saving for expensive ones - The Collector only checks the count, and a spread of cheap cars across disciplines also helps with Jack of all trades and Virtuoso."
            ]
        }
    ]
};
