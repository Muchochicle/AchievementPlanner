// Life is Strange Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/life-is-strange.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   319630 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "life-is-strange-achievement-guide",
    "category": "game",
    "gameSlug": "life-is-strange",
    "icon": "📷",
    "title": "Life is Strange Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Life is Strange - none are hidden. Covers the five episode-completion achievements and the optional-photo achievements for each episode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Life is Strange has 60 Steam achievements and none of them are hidden. They are entirely mechanical: complete each of the five episodes, and take each of the ten optional photos in each episode (plus an \"all photos\" achievement per episode). None are tied to story choices, difficulty, or anything else - your decisions change the story but not the achievement list.",
                "The photos are the only thing to watch: each is a specific framed shot at a specific moment, and a few can be permanently missed within an episode if you move past the scene. Because episodes are replayable from the menu, nothing is lost overall - you can always redo an episode for a missed photo.",
                "Tip: play through once naturally, then use a photo-location guide on a second pass of any episode where you missed shots - most players get 40-50 of the photos blind and clean up the rest with a guide in an hour."
            ]
        },
        {
            "heading": "Episodes 1-2: Chrysalis & Out of Time",
            "body": [
                "Finishing Episode 1: Chrysalis and Episode 2: Out of Time, and taking each of the ten optional photos in each (plus Visionary and Lab Master for all photos in that episode).",
                "The achievements here: Chrysalis (Finish Episode 1: Chrysalis); Macro Eyes (Take optional photo #1 in Episode 1: Chrysalis); Wide Angles (Take optional photo #2 in Episode 1: Chrysalis); Telephotogenic (Take optional photo #3 in Episode 1: Chrysalis); Close-Ups (Take optional photo #4 in Episode 1: Chrysalis); Red Eye (Take optional photo #5 in Episode 1: Chrysalis); Focused (Take optional photo #6 in Episode 1: Chrysalis); Zoomed In (Take optional photo #7 in Episode 1: Chrysalis); Focal Pointed (Take optional photo #8 in Episode 1: Chrysalis); Maximum Aperture (Take optional photo #9 in Episode 1: Chrysalis); Light Leak (Take optional photo #10 in Episode 1: Chrysalis); Visionary (Take all optional photos in Episode 1: Chrysalis); Out of Time (Finish Episode 2: Out of Time); Field Of View (Take optional photo #1 in Episode 2: Out of Time); Full Exposure (Take optional photo #2 in Episode 2: Out of Time); Processor (Take optional photo #3 in Episode 2: Out of Time); Image Stabilizer (Take optional photo #4 in Episode 2: Out of Time); Compressed (Take optional photo #5 in Episode 2: Out of Time); Pixelated (Take optional photo #6 in Episode 2: Out of Time); Dynamic Range (Take optional photo #7 in Episode 2: Out of Time); Colorized (Take optional photo #8 in Episode 2: Out of Time); Meter Made (Take optional photo #9 in Episode 2: Out of Time); Resolution Revolution (Take optional photo #10 in Episode 2: Out of Time); Lab Master (Take all optional photos in Episode 2: Out of Time)."
            ]
        },
        {
            "heading": "Episodes 3-4: Chaos Theory & Dark Room",
            "body": [
                "Finishing Episode 3: Chaos Theory and Episode 4: Dark Room, and taking each of the ten optional photos in each (plus Camera Eye and Shutterbug for all photos in that episode).",
                "The achievements here: Chaos Theory (Finish Episode 3: Chaos Theory); Parallax View (Take optional photo #1 in Episode 3: Chaos Theory); Lenscrafted (Take optional photo #2 in Episode 3: Chaos Theory); The Reflex (Take optional photo #3 in Episode 3: Chaos Theory); Histogrammar (Take optional photo #4 in Episode 3: Chaos Theory); Bokeh (Take optional photo #5 in Episode 3: Chaos Theory); Pinholed (Take optional photo #6 in Episode 3: Chaos Theory); RAW Strength (Take optional photo #7 in Episode 3: Chaos Theory); Viewfinder (Take optional photo #8 in Episode 3: Chaos Theory); Optican (Take optional photo #9 in Episode 3: Chaos Theory); Flash! (Take optional photo #10 in Episode 3: Chaos Theory); Camera Eye (Take all optional photos in Episode 3: Chaos Theory); Dark Room (Finish Episode 4: Dark Room); Ambient (Take optional photo #1 in Episode 4: Dark Room); Time-Lapsed (Take optional photo #2 in Episode 4: Dark Room); Balance (Take optional photo #3 in Episode 4: Dark Room); Rangefinder (Take optional photo #4 in Episode 4: Dark Room); Gamma Value (Take optional photo #5 in Episode 4: Dark Room); Dioptric Power (Take optional photo #6 in Episode 4: Dark Room); Fisheye (Take optional photo #7 in Episode 4: Dark Room); Manually Exposed (Take optional photo #8 in Episode 4: Dark Room); Slideshow (Take optional photo #9 in Episode 4: Dark Room); Tripod (Take optional photo #10 in Episode 4: Dark Room); Shutterbug (Take all optional photos in Episode 4: Dark Room)."
            ]
        },
        {
            "heading": "Episode 5: Polarized",
            "body": [
                "Finishing Episode 5: Polarized and taking each of its ten optional photos, plus Selfie Awareness for all photos in the episode.",
                "The achievements here: Polarized (Finish Episode 5: Polarized); Incandescent (Take optional photo #1 in Episode 5: Polarized); Night Vision (Take optional photo #2 in Episode 5: Polarized); Framed (Take optional photo #3 in Episode 5: Polarized); Camera Obscura (Take optional photo #4 in Episode 5: Polarized); Blowup (Take optional photo #5 in Episode 5: Polarized); Iris (Take optional photo #6 in Episode 5: Polarized); Sensor (Take optional photo #7 in Episode 5: Polarized); On Display (Take optional photo #8 in Episode 5: Polarized); Light Meter (Take optional photo #9 in Episode 5: Polarized); Silhouettes (Take optional photo #10 in Episode 5: Polarized); Selfie Awareness (Take all optional photos in Episode 5: Polarized)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all five episodes through once at your own pace, making whatever choices you want.",
                "2. Take optional photos as you spot the opportunities - a distinctive white camera icon or a framing prompt marks each one.",
                "3. After finishing, check which of the 50 photos you missed.",
                "4. Replay just the relevant episodes from the menu with a photo-location guide to grab the missing shots.",
                "5. Each episode's \"all photos\" achievement unlocks automatically once you have all ten for it.",
                "Tip: several photo opportunities close the moment you advance the scene (leaving a room, starting a conversation) - when you enter a new area, sweep it for the photo prompt before you talk to anyone or trigger the next beat."
            ]
        }
    ]
};
