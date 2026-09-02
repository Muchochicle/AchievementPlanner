// Immortals of Aveum Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/immortals-of-aveum.json), whose 47 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2009100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 18 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "immortals-of-aveum-achievement-guide",
    "category": "game",
    "gameSlug": "immortals-of-aveum",
    "icon": "🔮",
    "title": "Immortals of Aveum Achievement Guide",
    "summary": "A practical guide to all 47 Steam achievements in Immortals of Aveum (18 hidden). Fifteen of the hidden achievements are spoiler-free story-progress markers; the other three are small secrets (a hidden bird, a backtrack, petting the Veki). Everything else - difficulty clears, conversation completion, gear and talent mastery, Shroudfanes and combat tallies - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Immortals of Aveum has 47 Steam achievements, 18 of them hidden. Jak, a late-blooming Triple Magnus, joins the Immortals in the Everwar between Lucium and Rasharn. The visible achievements cover the three difficulty clears (Apprentice, Magnus, Immortal), talking through every topic with six key characters, collecting 50 Lore Texts, fully upgrading and collecting Legendary Sigils / Totems / Bracers, mastering each of the three magic colour branches, the 100 / 500 / 1300 kill tallies, completing 10 and then all Shroudfanes, defeating all of The Six, and opening every main-story Golden Chest.",
                "Fifteen of the 18 hidden achievements are story-progress markers, described here spoiler-free. The other three are secrets: finding a hidden bird in the Palathon, backtracking from Kalthus to the Palathon while looking for Thaddeus, and petting the Veki during the Chapter 16 Glaivegate mission.",
                "The catalog marks it difficulty 3 and single-playthrough. The story markers are unmissable; a single Immortal-difficulty run covers all three difficulty achievements, and everything else is cleanup in the open areas after the credits."
            ]
        },
        {
            "heading": "Story",
            "body": [
                "The fifteen hidden story-progress markers, described spoiler-free.",
                "The achievements here: Unforeseen (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Battlefields Have Memories (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Maybe Engage a Little (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); No More Names (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Initiate (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Thrada-Kul (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Gravity-Challenged Rocks (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); All the Major Food Groups (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Beggars Would Ride (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Control is an Illusion (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); The Means to Save It (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Resilience to Sin (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); A Familiar Nest (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); Geas Aristeya (Story progress marker - reached at a specific point in the campaign, described here spoiler-free.); A Perfect Cycle (Story progress marker - reached at the end of the campaign, described here spoiler-free.)."
            ]
        },
        {
            "heading": "Difficulty & Conversations",
            "body": [
                "The three difficulty clears and talking through every dialogue topic with Silas Mede, Ambassador Damolie, Magister Belming, Hauser and Orphe (plus speaking to everyone at the party), and the 50 Lore Texts.",
                "The achievements here: Recruit (Completed the game on Apprentice difficulty); Lights Army (Completed the game on Magnus difficulty); Grand Magnus (Completed the game on Immortal difficulty); Socialite (Spoke to everyone at the party); Family Business (Spoke to Silas Mede about every topic); Diplomat (Spoke to Ambassador Damolie about every topic); Petite Bourgeoisie (Spoke to Magister Belming about every topic); Witch-Taker (Spoke to Hauser about every topic); Out of Time (Spoke to Orphe about every topic); Scholar (Collected 50 Lore Texts)."
            ]
        },
        {
            "heading": "Gear & Combat Mastery",
            "body": [
                "Fully upgrading and collecting the Legendary Sigils, Totems and Bracers, mastering each magic colour branch, and the kill tallies.",
                "The achievements here: Armsman (Fully Upgraded 1 Legendary Sigil); Kitted Out (Fully Upgraded 1 Legendary Totem); Best Dressed (Fully Upgraded 1 Legendary Bracer); Armaments Azure (Obtained 3 Legendary Blue Sigils); Armaments Gules (Obtained 3 Legendary Red Sigils); Armaments Vert (Obtained 3 Legendary Green Sigils); Periapt Cerulean (Obtained 1 Legendary Blue Totem); Periapt Alizarin (Obtained 1 Legendary Red Totem); Periapt Viridian (Obtained 1 Legendary Green Totem); Enlisted (Defeated 100 Enemies); Soldier (Defeated 500 Enemies); Veteran (Defeated 1300 Enemies); Master of Ultramarine (Unlocked all Talents in Blue Magic branch); Master of Carmine (Unlocked all Talents in Red Magic branch); Master of Malachite (Unlocked all Talents in Green Magic branch)."
            ]
        },
        {
            "heading": "Exploration & Secrets",
            "body": [
                "The Shroudfane side dungeons, defeating all of The Six, every main-story Golden Chest, and the three hidden secrets.",
                "The achievements here: Shroudfane Explorer (Completed 10 Shroudfanes); Shroudfane Surveyor (Completed all Shroudfanes); Tip of the Spear (Defeated All of The Six); Treasure Hunter (Opened all Golden Chests in the main story); Fowl Play (Found the hidden bird in the Palathon hub.); Backtracker (While searching for Thaddeus, travelled all the way back from Kalthus to the Palathon.); Good Boy (Pet the Veki - a dog-like creature found among the survivors during the Chapter 16 Glaivegate mission.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Immortal difficulty - it grants the Apprentice and Magnus clears too - and let the fifteen story markers unlock as you go.",
                "2. Exhaust every dialogue topic with Silas, Damolie, Belming, Hauser and Orphe whenever they are available; these can be done across the story.",
                "3. Grab the Chapter 16 Veki pet and watch for the Palathon bird and the Kalthus-to-Palathon backtrack while you are there.",
                "4. After the credits, use free roam to finish every Shroudfane, open every Golden Chest, collect 50 Lore Texts, and fully upgrade and collect the Legendary gear sets.",
                "5. Mop up the kill tallies and colour-branch mastery, and beat any remaining members of The Six.",
                "Tip: talk to the five key NPCs every time you pass through the Palathon between missions - their available topics refresh as the story advances, and it is easy to finish the game with one topic left on someone, forcing a chapter replay."
            ]
        }
    ]
};
