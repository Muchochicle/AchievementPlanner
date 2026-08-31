// Mountain Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mountain.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   313340 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mountain-achievement-guide",
    "category": "game",
    "gameSlug": "mountain",
    "icon": "🏔",
    "title": "Mountain Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Mountain - none are hidden. Covers the life-and-weather achievements, the death / pain / time achievements, and the music / order / alone-time achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Mountain has 31 Steam achievements and none are hidden. They are all passive milestones for things happening to your mountain over time - objects landing on it, weather changing, deaths, pain, thoughts, music, and finally living 'a long time' and 'forever'.",
                "The catalog marks it difficulty 1 - Mountain is an ambient toy you mostly leave running. Almost every achievement comes just by letting the game play; 'YOU ARE GOD' (live forever) is a long idle wait. Nothing is missable.",
                "Tip: leave Mountain running in the background - the days, deaths, weather events and 'lives forever' achievements all just need real time to pass."
            ]
        },
        {
            "heading": "Life & Weather",
            "body": [
                "Mountain becoming home to something new and to many things, being bombarded by things, watching the days go by, seeing things come and go, and the escalating unusual-weather achievements.",
                "The achievements here: Hello There (Mountain is home to something new); Welcome, Welcome (Mountain is home to many things); I'm a Living Target (Mountain is bombarded by things); The Days Keep Coming... (Mountain watches the days go by); I'm Still Here (Mountain sees it all come and go); Is This Normal? (Mountain has unusual weather); Is This Cheating? (Mountain cannot predict the weather); Ok, Fine (Mountain no longer trusts the weather)."
            ]
        },
        {
            "heading": "Death, Pain & Time",
            "body": [
                "Mountain experiencing death, dying several times, going on dying, surviving death (and keeping on surviving), thinking it is invincible, experiencing pain and a lot of pain, thinking (and thinking a lot, and not being able to stop), being alive for a short time, 'YOU ARE MOUNTAIN' (a long time) and 'YOU ARE GOD' (forever).",
                "The achievements here: It Happens (Mountain experiences death); Turn the Other Peak (Mountain dies several times); Getting Used to This (Mountain goes on dying); Not Done Yet (Mountain survives death); I Must Go On (Mountain keeps surviving death); It's Never Over (Mountain thinks it is invincible); Ouch! (Mountain experiences pain); At least I know I'm alive (Mountain experiences a lot of pain); I'm Thinking (Mountain thinks); I Can't Stop Thinking (Mountain thinks quite a lot); These Thoughts Never End (Mountain cannot stop thinking); Am I Interesting? (Mountain is alive for a short time); YOU ARE MOUNTAIN (Mountain lives for a long time); YOU ARE GOD (Mountain lives forever)."
            ]
        },
        {
            "heading": "Music, Order & Alone Time",
            "body": [
                "Mountain playing music and a lot of music, organizing itself (and keeping on), making it unrain, having some alone time and a lot of alone time, and singing and singing quite a lot.",
                "The achievements here: I'm A Musician? (Mountain plays music); I am Music! (Mountain plays a lot of music); Am I Being Organized? (Mountain organizes itself); I Look Beautiful (Mountain keeps organizing itself); I Must Dry Off (Mountain makes it unrain); Who's Doing This? (Mountain has some alone time); This Is Me! (Mountain has a lot of alone time); I Can Sing! (Mountain sings); I Love To Sing! (Mountain sings quite a lot)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start Mountain and leave it running.",
                "2. Interact occasionally (play notes, trigger weather) for the music and 'unrain' achievements.",
                "3. Let real time pass for the days, deaths, weather and pain milestones.",
                "4. Keep the game open across sessions toward 'YOU ARE MOUNTAIN' and 'YOU ARE GOD'.",
                "Tip: there is nothing to optimise here - just don't close the game; every remaining achievement is a matter of leaving it on long enough."
            ]
        }
    ]
};
