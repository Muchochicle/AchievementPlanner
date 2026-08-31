// Dungeons 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dungeons-3.json), whose 60 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   493900 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dungeons-3-achievement-guide",
    "category": "game",
    "gameSlug": "dungeons-3",
    "icon": "👿",
    "title": "Dungeons 3 Achievement Guide",
    "summary": "A practical guide to all 60 Steam achievements in Dungeons 3 - none are hidden. Covers all 20 campaign missions - each with a completion achievement and two optional challenge achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dungeons 3 has 60 Steam achievements and none are hidden. They are exactly the 20 campaign missions, each with a 'complete the mission' achievement and two optional challenge achievements (a specific kill count or tactic, plus a no-losses / time-limit / protect-the-target condition). There are no difficulty, endless or multiplayer achievements - finish the campaign doing every mission's two side challenges and you have 100%.",
                "The catalog marks it difficulty 3. The completion achievements are just playing through; the challenge achievements vary - some happen naturally, others (kill 100 Heroes, finish under a time limit, take no Dungeonheart damage) want a deliberate replay of that mission with the goal in mind.",
                "Tip: play each mission once for the story and easy challenges, then note which two challenge achievements you missed and replay just those missions."
            ]
        },
        {
            "heading": "Campaign Missions 1-5",
            "body": [
                "'The Shadow of Absolute Evil', 'Twistram in Ruins', 'The Gehenna Stones', 'The Ashspring Swamplands' and 'The Battle of Steelsmith' - each with its completion achievement and two challenges.",
                "The achievements here: The Shadow strikes (Successfully complete the mission “The Shadow of Absolute Evil”.); Death and destruction! (Destroy 9 Heroes with Thalya's “Fire Bomb” in the mission “The Shadow of Absolute Evil”.); Shadow hunter (Don’t let the Shadow take any damage from light in the mission “The Shadow of Absolute Evil”.); Twistram is devastated (Complete the mission “Twistram in Ruins”.); The Evilest Evil (Collect a total of 1000 Evilness in the mission “Twistram in Ruins”.); No one has to die today! (Complete the mission “Twistram in Ruins” without losing more than 3 creatures.); The Gehenna Stones (Complete the mission “The Gehenna Stones”.); The Stones’ Power (Kill at least 15 Heroes using the Stones’ magic in the mission “The Gehenna Stones”.); The White Knight (Don’t let Thalya's Life Energy fall below 75% during the mission “The Gehenna Stones”.); The Swamplanders from the swamplands (Complete the mission “The Ashspring Swamplands”.); Braiiiiins! (Awaken at least 98 Undead in the mission “The Ashspring Swamplands”.); Night of the Living Dead (on Speed) (Conquer all Graveyards in less than 25 minutes in the mission “The Ashspring Swamplands”.); Rusty Steel (Complete the mission “The Battle of Steelsmith”.); The One-Huge-Army-Building Evil (Own at least 15 creatures at the same time in the mission “The Battle of Steelsmith”.); Hands off the Dungeonheart! (The Dungeonheart must not fall below 50% life in the mission “The Battle of Steelsmith”.)."
            ]
        },
        {
            "heading": "Campaign Missions 6-10",
            "body": [
                "'The End of Burgers' End', 'The Crossing', 'The Prince of Hell', 'The Storming of Dollaran' and 'The End of Yaina Overproud' - completion plus two challenges each.",
                "The achievements here: The last burger (Complete the mission “The End of Burgers' End”.); MASS-O-BOT (Own 5 Gob-O-Bots at any time in the mission “The End of Burgers' End”.); Then let them eat cake! (Don’t allow any deliveries to reach the city in the mission “The End of Burgers' End”.); A trip on sea, what fun it can be (Complete the mission “The Crossing”.); Master of Traps (Kill at least 30 Heroes with the “Thrasher” Trap in the mission “The Crossing”.); Ignore The Level Designer’s Plan (Destroy at least 3 Hero tent camps during daylight in the mission “The Crossing”.); Damned good (Complete the mission “The Prince of Hell”.); Factory farming (Hold at least 7 Heroes in the Prison at the same time in the mission “The Prince of Hell”.); A little something extra (Get all of the bonus creatures in the mission “The Prince of Hell”.); Stock Market Crash (Complete the mission “The Storming of Dollaran”.); Spawner Killer (Destroy all of the Hero camps in the mission “The Storming of Dollaran”.); Storm And Stress (Complete the mission “The Storming of Dollaran” in less than 40 minutes.); Not-So-Overproud (Complete the mission “The End of Yaina Overproud”.); We don’t have time! (Destroy every Arcane Tear in mission “The End of Yaina Overproud” within 60 seconds maximum.); Hearts are trump (Never let the Dungeonhearts Life Energy fall under 75% in “The End of Yaina Overproud”.)."
            ]
        },
        {
            "heading": "Campaign Missions 11-15",
            "body": [
                "'Once Upon A Catapult', 'The Hungry, Hungry Ogre', 'Ups and Downs', 'The Titan of Alphaas' and 'I Am Your Father!' - completion plus two challenges each.",
                "The achievements here: For a handfull of Catapults (Complete the mission “Once Upon A Catapult”.); Flat as a pancake (Kill 50 Heroes by Catapult bombardment in the mission “Once Upon A Catapult”.); I love the smell of Catapult fire! (Capture all of the Catapults in the mission “Once Upon A Catapult” in less than 30 minutes.); Ogre Solo! (Complete the mission “The Hungry, Hungry Ogre”.); Thirst quencher (Own more than 42 Barrels of Beer at the same time in the mission “The Hungry, Hungry Ogre”.); Can’t stand to see an Ogre bleed (The Ogre in the mission “The Hungry, Hungry Ogre” must not fall below 75% Life Energy.); Tide Master (Complete the mission “Ups and Downs”.); Lifeguard (Don’t lose a single creature to the water in the mission “Ups and Downs”.); Please, no interruptions! (Stop anyone from interrupting Thalya while she contaminates the water in mission “Ups and Downs”.); Destroy the thing (Complete the mission “The Titan of Alphaas”.); Lifesaver (Don’t lose more than 8 units in the mission “The Titan of Alphaas”.); Chorus of damnation (Own at least 5 Banshees at the same time in the mission “The Titan of Alphaas”.); Difficult family relationships (Complete the mission “I Am Your Father!”.); This is fun, I’m going to keep doing this! (Sacrifice more Heroes than needed in mission “I Am Your Father!” – until the Narrator is satisfied.); Hearts of Iron (Complete the mission “I Am Your Father!” without the Dungeonheart taking any damage.)."
            ]
        },
        {
            "heading": "Campaign Missions 16-20",
            "body": [
                "'Baptism of Fire', 'Light and Shadow', 'Two Sides Of A Medal', 'A Disturbance In The Force' and 'Everything Has An End...' - completion plus two challenges each.",
                "The achievements here: Angel of Fire (Complete the mission “Baptism of Fire”.); Prepare the grave (Don’t let the Grave Golem’s Life Energy fall below 50%.); Not a scratch (Complete the mission “Baptism of Fire” without Thalya taking any damage.); Where there is Light, there is Shadow (Complete the mission “Light and Shadow”.); I need a hero! (Kill 100 Heroes in the mission “Light and Shadow”.); Prison Break (Free Thalya in less than 45 minutes in the “Light and Shadow” mission.); At the foot of Mount Destiny (Complete the mission “Two Sides Of A Medal”.); Use the terrain (Kill 30 Heroes using an Obelisk.); Discoverer (Find the two Obelisks in less than 25 minutes.); The Force disturbed (Complete the mission “A Disturbance In The Force”.); Can’t stand the sight of Dark Elf blood (Never let Thalya's Life Energy fall below 75% during the ritual.); Sacrifices! (Sacrifice all of the Titans within 40 minutes in the mission “A Disturbance In The Force”.); The Victorious Evil (Complete the mission “Everything Has An End…”.); The Benevolent Evil (Save all of the Heroes Tanos wants to punish in the mission “Everything Has An End…”.); Band of Brothers (Don’t lose a single creature to Tanos in battle in the mission “Everything Has An End…”.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign start to finish for the 20 completion achievements.",
                "2. Do each mission's two challenge achievements on the first pass where you can (many are 'own X creatures', 'kill X Heroes with trap Y').",
                "3. After the campaign, replay individual missions for the challenges you missed - the harder ones are the time limits and the 'take no damage' conditions.",
                "Tip: the 'don't lose a creature' and 'protect the Dungeonheart' challenges are easiest if you turtle early - build defensively, let the traps do the work, and only push out once the mission's main objective demands it."
            ]
        }
    ]
};
