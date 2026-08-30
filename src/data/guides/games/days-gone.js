// Days Gone Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/days-gone.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1259420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 18 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PSNProfiles/
//   PlayStationTrophies, GameFAQs, and the games' wikis), noted in the
//   Hidden Achievements section. Every other achievement's description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "days-gone-achievement-guide",
    "category": "game",
    "gameSlug": "days-gone",
    "icon": "🏍️",
    "title": "Days Gone Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Days Gone - 18 are hidden. Covers Deacon's cross-Oregon campaign storylines, the open-world camps, hordes, bike and skill milestones, the Survival Mode and New Game+ clears, and the free Broken Road Horde Assault mode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Days Gone has 67 Steam achievements, 18 of which are hidden. Eleven of the hidden ones are simply story-progress markers - one for finishing each major narrative storyline as biker Deacon St. John rides across a Freaker-overrun Oregon - and unlock automatically as you play the campaign. The rest of the list is open-world activity: clearing Freaker hordes, ambush camps, infestations and NERO checkpoints, upgrading Deacon's bike, filling out the skill tree, earning encampment trust, and hunting collectibles.",
                "Almost nothing in the base campaign is missable because the open world stays available after the credits, but full completion is a serious time investment: it requires a second run of the whole story in Survival Mode, a New Game+ run (including a Hard II or Survival II clear), a Permadeath-mode clear, and gold medals in every Challenge. The Horde Assault achievements come from the free Broken Road mode and are graded on score and survival time.",
                "Tip: the single biggest hidden-achievement gotcha is Take Back Your Name - it is tied to the 'Ripped Apart' storyline, which only appears late and only if you have kept clearing world activities (camps, hordes, NERO checkpoints). If you rush the main missions and ignore the open world, that storyline - and its achievement - can be the last thing standing between you and the credits."
            ]
        },
        {
            "heading": "Story, Side Storylines & Riding",
            "body": [
                "Finishing the main story and the four repeatable regional storylines (Ambush Camp Hunter, Infestation Exterminator, Marauder Camp Hunter, World's End), your first horde kill, and the early riding, drifting and bike-upgrade milestones - plus the 100%-completion capstone.",
                "The achievements here: One Percenter (Go above and BEYOND, unlocking every trophy in Days Gone); Days Done (Complete the story of Days Gone); Ambush Camp Hunter (Complete the Ambush Camp Hunter storyline); Infestation Exterminator (Complete the Infestation Exterminator storyline); Marauder Camp Hunter (Complete the Marauder Camp Hunter storyline); World's End (Complete the World's End storyline); One Down (Defeat your first Horde); Farewell Drift (Accumulate 10 minutes of drifting while on your bike); Ghost of Farewell (Get 100 stealth kills); Old Reliable (Kill 200 Enemies with a Crafted Weapon); Variety is the Spice of Life (Kill an enemy with every type of crossbow bolt); Farewell Original (Purchase an upgrade under the Performance, Visual, and Paint Categories for your bike); First Time Buyer (Upgrade your bike for the first time); Burnout Apocalypse (Use nitro and drift at the same time on your bike for at least 5 seconds); The Art of Bike Repair (Apply 100 scrap to your bike)."
            ]
        },
        {
            "heading": "Survival Skills, Camps & Collectibles",
            "body": [
                "Collectibles, rescuing survivors, upgrading Health/Stamina/Focus, earning Allied Trust with the encampments, clearing every ambush camp, infestation and NERO checkpoint in a region, unlocking skills, and the crafting and Anarchist-cairn feats.",
                "The achievements here: You've Got Red on You (Collect 541 Items from corpses); Lend Me Your Ears (Collect 989 Freaker Ears); Finders Keepers (Unlock your first collectible); Wannabe Fortune Hunter (Unlock over 50% of the collectibles); The Broken Roadshow (Unlock over 75% of collectibles); Surviving isn't Living (Rescue 10 survivors); Better Living through Chemistry (Upgrade either your Health, Stamina, or Focus for the first time); Performance Enhanced (Max out either your Health, Stamina, or Focus); Best Friends Forever (Receive the Allied Trust status with an Encampment); Best Friends Forever (For Life) (Gain the Allied Trust status with three different Encampments); Make it Rain (Spend 20,000 credits at one Encampment); Welcome to the Party, Pal (Clear all Ambush Camps, Infestations, and NERO Checkpoints in a single region); Kitchen Courier (Sell Animal Meat or Plants to any Encampment); Don't Stop Me Now (Unlock your first skill); I'm Out of Control (Unlock 15 skills); There's No Stopping Me (Unlock 30 skills); Mr. Fahrenheit (Unlock 45 skills); Go Kick Rocks (Knock down 12 Anarchist Cairns); D.I.Y. Oregonian (Craft 50 items)."
            ]
        },
        {
            "heading": "Survival Mode, Challenges & New Game+",
            "body": [
                "The endgame grind: completing the story again in Survival Mode, earning bronze/silver/gold medals across the Challenge modes (including gold in every Challenge), reaching Founder Rank, unlocking all Patches, and the two New Game+ story clears.",
                "The achievements here: Surviving is Living (Complete the story of Days Gone in Survival Mode); Days Gone in 60 Seconds (Defeat a Horde in under 1 minute in Survival Mode); Participation Award (Earn your first Bronze Medal in a Challenge); Second (the) Best (Earn your first Silver Medal in a Challenge); Golden Boy (Earn your first Gold Medal in a Challenge); I Make This Look Good (Earn a Gold Medal in a Challenge with a Character Skin and Custom Accent equipped); Worthy (Fully upgrade any Ring); Gold Team Rules (Earn a Gold Medal in all Challenges); You Done Good, Kid (Earn a Medal in all Sub-Challenges); Dolla Dolla Bills, Y'all (Spend 3000 credits on your Loadout); Lost & Damned (Reach the Founder Rank); Gotta Patch 'Em All (Unlock all Patches); One More Ride (Complete the story of Days Gone in New Game+); 2 Days 2 Done (Complete the story of Days Gone on Hard II or Survival II in New Game+); Logan's Shadow (Kill an enemy with every type of ammo from a mysterious weapon earned in New Game+)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Eleven hidden achievements (Just a Flesh Wound through I've Been Waiting for This) are unmissable story-completion markers, one per major storyline, and unlock as you finish the campaign. This is a Knife is a single combat feat. The remaining six belong to the free Broken Road update's Horde Assault mode and to Permadeath mode.",
                "The hidden achievements: Just a Flesh Wound (Complete the mission 'You Got A Death Wish' in the 'He's My Brother' storyline.); Special Delivery (Complete the 'Chasing Leon' storyline.); The Ends and the Means (Complete the mission 'They're Not Sleeping' in the 'Finding Nero' storyline.); Lost and Found (Complete the mission 'No One Saw It Coming' in the 'He's My Brother' storyline.); Brothers in Arm (Complete the mission 'I Could Use a Hand' in the 'He's My Brother' storyline.); Take Back Your Name (Complete the mission 'Should Have Seen It Coming' in the 'Ripped Apart' storyline.); Riding NOMAD (Complete the mission 'Riding Nomad Again' in the 'We've All Done Things' storyline.); Hold on Tight (Complete the mission 'A War We Can Win' in the 'I Remember' storyline.); It's Getting Cold Outside (Complete the mission 'We Couldn't Take the Risk' in the 'I'm Never Giving Up' storyline.); Morior Invictus (Complete the mission 'Ascending from the Underworld' in the 'Race Against Time' storyline.); I've Been Waiting for This (Complete the mission 'For An Outlaw Biker'.); This is a Knife (Kill a Breaker, Reacher, or Rager Freaker with a melee knife attack.); More Freakers, More Problems (Defeat an increased-size horde in the Horde Assault mode added by the Broken Road update.); I'm On Top of the World (Beat the target score on every level of the Horde Assault mode.); Freakshow (Survive for 15 minutes in a single Horde Assault run.); Survivor (Reach the maximum player level in the Horde Assault mode.); Dead Don’t Ride (Complete the story of Days Gone in Permadeath mode on any difficulty.); Sarah's Gift (Beat the target score on all four Horde Assault maps (Cascade, Belknap, Lost Lake, and Crater Lake), recovering something of Sarah's that was thought lost.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign at a normal difficulty, and keep clearing open-world activities (ambush camps, infestations, NERO checkpoints, hordes) alongside the story missions - this both unlocks the 'Ripped Apart' storyline for Take Back Your Name and knocks out most of the activity achievements early.",
                "2. As you go, upgrade the bike fully, spend generously at encampments for Allied Trust, rescue survivors, hunt collectibles, and fill the skill tree - almost all of Survival Skills, Camps & Collectibles falls out of a thorough first playthrough.",
                "3. Finish the story for the eleven story markers and Days Done, then mop up any missed collectibles and camps for the remaining open-world achievements.",
                "4. Start a New Game+ run and complete the story again on Hard II or Survival II for One More Ride and 2 Days 2 Done, and pick up Logan's Shadow with the NG+ mystery weapon.",
                "5. Do a dedicated Survival Mode story clear and a Permadeath clear, then grind the Challenge modes for gold medals and tackle the Horde Assault score/survival targets.",
                "Tip: Survival Mode disables fast travel, the survival-vision scanner and the HUD, so it is far smoother to attempt after you already know the map, enemy placements and horde routes from your first playthrough rather than as your opening run."
            ]
        }
    ]
};
