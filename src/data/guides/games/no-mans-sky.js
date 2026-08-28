// No Man's Sky's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/no-mans-sky.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   275850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). Every one of the 27 ships a
//   real, official Steam description, quoted directly below - the game
//   has no hidden achievements.
// - Most achievements are milestone tiers: each "Journey Milestone"
//   category (zoology scanning, space exploration, units earned, words
//   learned, alien encounters, ships destroyed, extreme survival, on-foot
//   exploration) has two or three named ranks. The grouping below follows
//   those categories, then the handful of one-off achievements and the
//   two galaxy-centre runs.
export const GUIDE = {

    slug: "no-mans-sky-achievement-guide",
    category: "game",
    gameSlug: "no-mans-sky",
    icon: "🚀",
    title: "No Man's Sky Achievement Guide",
    summary: "A practical guide to all 27 Steam achievements in No Man's Sky - the milestone-rank tiers for scanning, exploring, trading, language, alien contact, combat and survival, the one-off build achievements, and the two galaxy-centre runs.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "No Man's Sky has 27 Steam achievements and none are hidden. Most are Journey Milestone ranks: every activity category has two or three named tiers, and reaching the higher tier automatically covers the lower one on the same account.",
                "Almost everything comes naturally from a long single save. The only ones that need a dedicated run are Take a Deep Breath (reach the centre of the galaxy in Survival mode) and To Live Forever (reach the centre in Permadeath mode).",
                "Tip: play your main save in Survival difficulty from the start. That way the long grind toward the galaxy centre also earns Take a Deep Breath, and Permadeath (To Live Forever) becomes the only mode you have to replay for."
            ]
        },

        {
            heading: "Scanning & Exploration Tiers",
            body: [
                "Planet Zoology Scanned: A Scanner Darkly ('Naturalist'), The Star Beast ('Archivist'), and Galapagos ('Encyclopedia').",
                "Space Exploration: The Stars, Like Dust ('Trailblazer'), The Longest Voyage ('Pioneer'), and A Space Odyssey ('Discoverer').",
                "On-foot Exploration: Have Spacesuit - Will Travel ('Adventurer') and Symphony For A Lost Traveler ('Nomad')."
            ]
        },

        {
            heading: "Wealth, Language & Contact Tiers",
            body: [
                "Most Units Accrued: Foundation ('Entrepreneur'), The Space Merchants ('Trader'), and The Diamond Age ('Magnate').",
                "Words Collected: Babel-17 ('Confused'), The Languages of Pao ('Interpreter'), and Citizen of the Galaxy ('Babelfish').",
                "Alien Colonist Encounters: Contact ('Known'), Who Goes There? ('Diplomat'), and What Mad Universe ('Ambassador')."
            ]
        },

        {
            heading: "Combat & Survival Tiers",
            body: [
                "Ships Destroyed: Use of Weapons ('Novice'), Pattern for Conquest ('Notorious'), and The Forever War ('Legend').",
                "Extreme Survival - surviving on hazardous planets without your protection failing: Stranger in a Strange Land ('Robust') and The Sentinel ('Everlasting')."
            ]
        },

        {
            heading: "Build & Social Achievements",
            body: [
                "The one-off progression achievements: Cradle (claim a base or buy a freighter), Navigators (build an Exocraft), and Reunion (visit another player's base)."
            ]
        },

        {
            heading: "Reaching the Galaxy Centre",
            body: [
                "Two achievements for the endgame journey inward: Take a Deep Breath (reach the centre of the galaxy in Survival mode) and To Live Forever (reach the centre in Permadeath mode). Both require playing on that specific difficulty for the whole run - you cannot lower the setting partway and still qualify."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Start a Survival save and just play the game broadly - scan wildlife (A Scanner Darkly, The Star Beast, Galapagos), warp between systems (The Stars, Like Dust, The Longest Voyage, A Space Odyssey), explore on foot (Have Spacesuit - Will Travel, Symphony For A Lost Traveler), trade and mine for units (Foundation, The Space Merchants, The Diamond Age), learn languages at monoliths and knowledge stones (Babel-17, The Languages of Pao, Citizen of the Galaxy), and interact with NPCs at settlements (Contact, Who Goes There?, What Mad Universe).",
                "Fit in some piracy for Use of Weapons, Pattern for Conquest, and The Forever War, and spend time on extreme planets for Stranger in a Strange Land and The Sentinel. Build toward Cradle, Navigators, and Reunion early since they are quick.",
                "Push that Survival save all the way to the galaxy centre for Take a Deep Breath, then start a Permadeath save and repeat the core loop to the centre for To Live Forever."
            ]
        }

    ]

};
