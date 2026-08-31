// Distance Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/distance.json), whose 31 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   233610 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "distance-achievement-guide",
    "category": "game",
    "gameSlug": "distance",
    "icon": "🏎️",
    "title": "Distance Achievement Guide",
    "summary": "A practical guide to all 31 Steam achievements in Distance (2 hidden). Covers the medal and campaign achievements, the feats, Workshop and Adventure achievements, and the mastery and secret achievements. Two achievements are Steam-hidden and researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Distance has 31 Steam achievements and two are Steam-hidden (both tied to the crab-hunting secret map 'The Other Side'). The open twenty-nine are medal tiers (silver, gold, diamond on a track), campaign completions (Adventure, Cataclysm, Lost To Echoes), a set of stunt and survival feats (a 250 m wall ride, a 250 m grind, finishing Overload without dying, slicing off all wheels), the Trackmogrify and Workshop achievements, and mastery goals (all official levels, all Adventure Sprint golds, 5,000,000 lifetime eV, the Adventure campaign in under an hour).",
                "The catalog marks it difficulty 4. The diamond medal, 'Gold Collector' (gold on every Adventure Sprint level), the sub-1-hour Adventure run and the crab-hunt hidden achievements are the demanding ones.",
                "Tip: play the Adventure and Lost To Echoes campaigns, collecting crabs as you go, then chase the medal and mastery goals and finish the secret 'The Other Side' map."
            ]
        },
        {
            "heading": "Medals & Campaigns",
            "body": [
                "A silver, gold and diamond medal, slicing off all wheels, breaking a camera drone, a sub-10-second Trackmogrify track, a narrow kill-grid miss into a checkpoint, finishing Entanglement without wings, an online match, a 250 m wall ride, and breaking all pumpkins in Spooky Town.",
                "The achievements here: Advanced Driver (Get a silver medal on a track); Better than Sliced Bread (Slice off all wheels); Big Bother (Break a camera drone's screen); Cheat the System (Beat a Trackmogrify track in less than 10 seconds); Down But Not Out (Narrowly miss the kill grid then hit a checkpoint); Expert Driver (Get a gold medal on a track); Grounded Departure (Finish Entanglement without wings); Meet your Rival (Finish an online match); Ninja in Training (Complete a wall ride of 250 meters or more); Driving Ace (Get a diamond medal on a track); Pumpkin King (Break all pumpkins in Spooky Town)."
            ]
        },
        {
            "heading": "Feats, Workshop & Adventure",
            "body": [
                "Breaking 15 street lights, pressing the car's Reset button, being sliced by a laser, finishing Overload without dying, a 250 m grind, playing and discovering keywords in Trackmogrify, playing a Workshop level and completing 10 Workshop maps, and finishing the Adventure campaign.",
                "The achievements here: Rampage (Break apart 15 street lights in a level); Self-Termination (Press the Reset button for the car); Split Personality (Get sliced by a laser); Still Alive (Complete Overload without dying); The Long Grind (Complete a grind of 250 meters or more); Trackmogrifier (Play a Trackmogrify track); Welcome to the Family (Play a Workshop level); Wordsmith (Discover 10 keywords in Trackmogrify); World Traveler (Complete 10 Workshop maps); Adventurer (Finish the Adventure campaign)."
            ]
        },
        {
            "heading": "Mastery & Secrets",
            "body": [
                "5,000,000 lifetime eV, unlocking all official levels, gold on every Adventure Sprint level, a 100,000 eV trick, finishing Cataclysm, the Adventure campaign in under an hour, finishing Lost To Echoes and finding its 'pieces from the past', and the two Steam-hidden 'The Other Side' and 'Worthy' crab-hunt achievements.",
                "The achievements here: Millionaire (Earn 5,000,000 lifetime eV); Keymaster (Unlock all official levels); Gold Collector (Get Gold medals on all Adventure levels in Sprint); Six Figures (Land a trick over 100,000 eV); Moving Forward (Finish Cataclysm in the Adventure campaign); Speed Runner (Finish the Adventure campaign in 1 hour); Blast from the Past (Finish the Lost To Echoes campaign); Vendor Bender (Find pieces from the past in Lost to Echoes); The Other Side (Find all the hidden crabs in the Lost to Echoes campaign (one per track) to unlock the secret map 'The Other Side', then complete it.); Worthy (Find and complete the secret routes within the 'The Other Side' level.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Adventure campaign and the Cataclysm and Lost To Echoes campaigns.",
                "2. Collect every crab in Lost To Echoes (one per track) to unlock the secret 'The Other Side' map.",
                "3. Complete 'The Other Side' ('The Other Side' achievement) and find its secret routes ('Worthy').",
                "4. Chase the medal tiers (silver, gold, diamond) and 'Gold Collector' (gold on every Adventure Sprint level).",
                "5. Do the stunt and survival feats (250 m wall ride and grind, Overload no death, all wheels sliced) and the Workshop and Trackmogrify achievements.",
                "Tip: the crabs are exploration pickups on the Lost To Echoes tracks - play that campaign in Campaign mode (not Arcade), and use a crab-location video for the ones that are well hidden."
            ]
        }
    ]
};
