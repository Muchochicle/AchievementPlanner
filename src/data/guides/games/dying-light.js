// Dying Light's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dying-light.json), whose 78 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   239140 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 67 of 78 ship a real,
//   official Steam description, quoted directly below.
// - The 11 hidden achievements are nine main-story markers (apiname
//   ACH_1..9) plus two Hellraid DLC ones. Their conditions here are
//   curatorial, cross-checked against the Dying Light wiki and
//   PlayStationTrophies. Story markers are described by which beat earns
//   them, not by plot detail.
// - The grouping (story, the base game's combat and challenge
//   achievements, the collectible and rank goals, co-op, then the
//   post-launch content: The Following, Hellraid, and the Bozak Horde /
//   arena) is read from the achievements' own descriptions.
export const GUIDE = {

    slug: "dying-light-achievement-guide",
    category: "game",
    gameSlug: "dying-light",
    icon: "🧟",
    title: "Dying Light Achievement Guide",
    summary: "A practical guide to all 78 Steam achievements in Dying Light - the main story, the combat and parkour challenge achievements, the collectible and rank goals, co-op, and the post-launch content (The Following, Hellraid, Bozak Horde).",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Dying Light has 78 Steam achievements, 11 of them hidden (nine story markers plus two from the Hellraid add-on). The rest span combat feats, parkour challenges, collectibles, rank grinds, co-op, and the post-launch expansions.",
                "Nothing is permanently missable in the base game - the world stays open after the credits - but the co-op achievements need other players, and several are tied to the paid add-ons.",
                "Tip: play the story on a lower difficulty first for the fastest route through the story markers and the rank grinds (higher difficulty gives more XP but slows everything else down). Save the collectible and challenge sweeps for the free-roam after the credits."
            ]
        },

        {
            heading: "Story",
            body: [
                "The main story unlocks nine hidden markers in order: Flight of the Crane (jump from the Tower crane), My left or your left? (meet Rais), Snake in the grass (escape the arena), Sightseeing (reach the Old Town), Making Faces (broadcast to the outside world), Tied loose end (deal with Tahir), Now You Can Come In (find Camden), Vertigo (activate the Amplifier), and Bittersweet (complete the game).",
                "The Whole Story rewards finishing all side quests."
            ]
        },

        {
            heading: "Combat & Parkour",
            body: [
                "Kill feats: Is It Really Necessary? (first Infected), Mouths Wide Open (a Volatile), Hush, Hush Now (quiet a Screamer), This is Harraaaaan! (100 rooftop kicks), A Game of Catch (50 thrown-weapon kills), Harran Shooting Club (50 shooting kills), High Flyer (25 Ground Pound / Drop Attack kills), Judo Master (50 Grapple throws), BBQ (a burning zombie on spikes), and Can't Touch This (20 kills in a row unhurt).",
                "Traps and status: Everybody Dance Now (shock 5 at once), Electrified! (25 in the Electric Fence), Enlightened! (25 in the Light Trap), and Blinded by the Lights (blind 25 Volatiles).",
                "Movement: Pheidippides (run 42,195 m), Mount Everest (climb 8,848 m), Prom Night (survive a level-2 night pursuit), The Boy Who Could Run (all Parkour Fever Challenges) and GD Parkour Instructor (all of them at night), plus I'm a Runner and a fighter (15 Agility/Power Challenges)."
            ]
        },

        {
            heading: "Collectibles, Ranks & Craft",
            body: [
                "Collectibles and zones: It's All In the Writing (all text collectibles), Trespassing (all Quarantine Zones), Now It's Safe (all Safe Zones), Pearls in the Mud (5 GRE chests), Disaster Recovery (15 Relief Packages), and the rescue pair We're All In This Together and Homo Homini Lupus Est (15 survivors each).",
                "Ranks: Everybody Knows Kyle (Survivor 12), The Legend of Harran (Survivor 18), Agile (Agility 10), and Strong (Power 10). Crafting and misc: Little Craftsman, Master Crafter (100 blueprint uses), Open Sesame (10 lockpicks), Trade Company (sell $10,000), Bolter Hunting (5 Bolters), Gabriel's Sword (a fire sword), and Italian Plumber (a wrench Vault + Drop Attack kill)."
            ]
        },

        {
            heading: "Co-op",
            body: [
                "I've Got Your Back (a quest in co-op), Polyamory (5 quests with the same 3 partners), Together Till the End (be the last man standing), Lucky 7 (win 7 co-op competitions), and Harran Athletics (take part in 10)."
            ]
        },

        {
            heading: "The Following, Hellraid & Bozak",
            body: [
                "The Following: Afraid to get wet? (dive into the Countryside), And you liked him, didn't you? (meet your old friend again), I was waiting for you for so long (become a Faceless), Sweaty palms? (kill a Demolisher with a car), It wasn't that hard, was it? (win Bilal's race), What if you picked the other one? (make that call), I felt your presence (witness the Following's meeting), You realize it's only points, don't you? (Driver Rank 12), Formidophobic? Interesting… (destroy 50 scarecrows), and I don't approve of mindless fun (500 vehicle zombie kills).",
                "Hellraid: Throw me a bone (50 skeletons by fall damage), Non omnis moriar (finish with one life and no medkits), Blocked by Ba'al (Hellraid rank 10), Clavis was a key all along (Clavis fragments into the Arena), Time to file a tax form (3,000+ coins in a run), Wake up! (finish on Nightmare), Well-read (all 10 notes), Fast as hell (finish under 30 minutes), and the hidden Beginnings are hard (die three times on the first floor) and Into the lava (kick an enemy into the lava).",
                "Bozak Horde: Get the Bozak (complete Bozak's challenges). Bonus story: Electric Whisper and Things That Go Ka-Boom (learn to craft Electric and Exploding Arrows), Robin Hood Theory (10 bow headshots on Rais's men), and A Long Way Down (jump to the water from the Infamy Bridge at night)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play the story for the nine markers (Flight of the Crane through Bittersweet) and The Whole Story, letting the combat and movement feats build as you go. Grind Survivor, Agility and Power ranks toward Everybody Knows Kyle, The Legend of Harran, Agile, and Strong.",
                "After the credits, sweep collectibles and zones (It's All In the Writing, Trespassing, Now It's Safe, Pearls in the Mud) and clear the challenge sets (The Boy Who Could Run, GD Parkour Instructor, I'm a Runner and a fighter). Fit the one-off kill and trap feats in whenever convenient.",
                "Do a co-op session for I've Got Your Back, Polyamory, Together Till the End, Lucky 7, and Harran Athletics.",
                "Finish with the add-ons: The Following's story and side achievements, all of Hellraid (including the hidden Beginnings are hard and Into the lava), and Get the Bozak."
            ]
        }

    ]

};
