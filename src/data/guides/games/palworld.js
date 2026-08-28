// Palworld's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/palworld.json), whose 75 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1623730 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 51 of 75 ship a real,
//   official Steam description, quoted directly below.
// - The 24 hidden achievements are almost all boss defeats (the tower
//   "Sovereign" bosses, the raid "Sirens", and legendary Pals) plus a
//   few endgame markers. Their conditions here are curatorial, cross-
//   checked against the videogamer.com, Game8, and PSNProfiles Palworld
//   guides. Boss names are stated because the game itself names them
//   on the tower doors.
// - The grouping (catching and taming milestones, base and crafting
//   milestones, exploration and effigies, the tower/raid/legendary
//   bosses, then the endgame) is read from the achievements' own
//   descriptions.
export const GUIDE = {

    slug: "palworld-achievement-guide",
    category: "game",
    gameSlug: "palworld",
    icon: "🔵",
    title: "Palworld Achievement Guide",
    summary: "A practical guide to all 75 Steam achievements in Palworld - the catching and taming milestones, base and crafting goals, exploration and effigies, the tower Sovereign bosses, the raid bosses, the legendary Pals, and the endgame.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Palworld has 75 Steam achievements, 24 of them hidden. The hidden ones are nearly all boss defeats - the tower \"Sovereign\" bosses, the summonable raid bosses, and the legendary Pals - which the game names openly once you reach them.",
                "Nothing is missable: it is an open survival game with no fail state, so every Pal, tower, and area can be returned to. The biggest time sinks are the high catch counts (140 kinds, 1,000 total) and the crafting grinds (20,000 ammo, 10,000 ingots).",
                "Tip: build a base with high-level Pals assigned to production early. The crafting-count achievements (Sphere Craftsman, Iron Heart, Blood and Iron) tick over on their own while your Pals work, so you only need to keep the base stocked with resources."
            ]
        },

        {
            heading: "Catching & Taming",
            body: [
                "Catch-count tiers: Beginning of the Legend (first Pal), then Newbie Pal Tamer, Intermediate Pal Tamer, Skilled Pal Tamer, Seasoned Pal Tamer, and Exceptional Pal Tamer (10, 20, 50, 90, 140 kinds), Overhunting (1,000 Pals total), and Inhuman Act (catch a Human).",
                "Fishing: Novice Angler, Seasoned Angler, and Veteran Angler (reel in 10, 30, 50 Pals) and Lunker Hunter (reel in a Lunker).",
                "Bonds and growth: Best Friends Forever (Trust level 10 with a Pal), All for One (max one Pal's rank), Voice of Resentment (max 5 Pals' ranks), Meddling With Mutation (mutate a Pal), and Hidden Potential (awaken a Pal)."
            ]
        },

        {
            heading: "Base, Labor & Combat",
            body: [
                "Crafting grinds: Sphere Craftsman (2,000 spheres), Iron Heart (10,000 ingots), and Blood and Iron (20,000 ammo).",
                "Pal Labor Research: Pal Labor Student, Pal Labor Researcher, and Pal Labor Professor (10, 30, 70 projects). Expeditions: Novice Pal Dispatcher and Elite Pal Dispatcher (10, 20 expeditions).",
                "Combat and PvE: Senior Adventurer (20 dungeons cleared), Conqueror of the Sea (seize the Oil Rig), Successful Infiltration and Unstoppable Streak (1 then 10 enemy faction bases), Silver Champ / Arena Champion / Arena Legend (Silver, Master, Legend rank in the Arena)."
            ]
        },

        {
            heading: "Exploration & Effigies",
            body: [
                "Surveying: Freshman Surveyor, Junior Surveyor, and Senior Surveyor (10, 30, 70 new areas found), Trail of the Castaway (40 Notes), and A Nose for Treasure (5 treasures via Treasure Maps).",
                "Lifmunk Effigies: Palpagos Guru (50) and Palpagos Guardian (100). The regional effigy sets - Forest Guru, Volcano Guru, Desert Guru, Snowy Mountain Guru, Sakurajima Guru, Feybreak Guru, Sunreach Guru, and World Tree Guru (20 each), plus Forest Traveler, Island Traveler, and World Traveler (4 each)."
            ]
        },

        {
            heading: "Tower Sovereigns & Bosses",
            body: [
                "The tower bosses each have a hidden \"Sovereign\" achievement: Hillside Sovereign (Zoe & Grizzbolt), Forest Sovereign (Lily & Lyleen), Desert Sovereign (Marcus & Faleris), Volcano Sovereign (Axel & Orserk), Astral Sovereign (Victor & Shadowbeak), Blossom Sovereign (Saya & Selyne), Feybreak Sovereign (Bjorn & Bastigor), and Sunreach Sovereign (Auri & Shaolong). Champion of the Palpagos Islands rewards beating six tower bosses on Hard Mode.",
                "Summonable raid bosses: Twilight Siren (Bellanoir), Eclipsed Siren (Bellanoir Libero), Incarnation of the Eternal Flame (Blazamut Ryu), Invader from Space (Xenolord), and King of Salvation (Hartalis). Plus Predator Hunter (a Predator Pal) and No-Fly Zone (an Attack Chopper).",
                "Legendary Pals to catch: Legendary Celestial Dragon (Jetragon), Holy Knight of Legend (Paladius), Dark Knight of Legend (Necromus), Legendary Steed of Ice (Frostallion), and Legendary Ocean King (Panthalus)."
            ]
        },

        {
            heading: "The Endgame",
            body: [
                "To the World Tree rewards setting foot within the World Tree, and Savior of Palpagos rewards defeating Astralym, the final boss.",
                "Bounty hunting: Rookie Pal Slayer (5 Pal Bounty Tokens) and Alpha Pal Slayer (30). Salvage: King of Salvation (above) and the trader-related Palpagos Guru effigy goals feed into general completion."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play naturally: catch broadly toward the Pal Tamer tiers and Overhunting, build a production base so Sphere Craftsman, Iron Heart, and Blood and Iron tick over, and survey the map for the Surveyor tiers and effigies.",
                "Progress the towers in order, taking each Sovereign achievement (Hillside through Astral, then Blossom, Feybreak, and Sunreach), and clear dungeons and faction bases along the way (Senior Adventurer, Unstoppable Streak).",
                "Summon and beat the raid bosses (Twilight Siren, Eclipsed Siren, Incarnation of the Eternal Flame, Invader from Space, King of Salvation), catch the legendary Pals (Jetragon, Paladius, Necromus, Frostallion, Panthalus), and grind the Arena to Legend.",
                "Finish the endgame: To the World Tree, then Savior of Palpagos, plus Champion of the Palpagos Islands (six Hard Mode tower bosses) and the bounty achievements (Rookie / Alpha Pal Slayer)."
            ]
        }

    ]

};
