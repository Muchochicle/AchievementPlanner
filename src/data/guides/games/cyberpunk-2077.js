// Cyberpunk 2077's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/cyberpunk-2077.json), whose 57 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   1091500 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 36 of 57 ship a real,
//   official Steam description, quoted directly below.
// - The other 21 are hidden: five story milestones, the base-game and
//   Phantom Liberty endings, and the companion questline completions.
//   Their unlock conditions here are curatorial, cross-checked against
//   VULKK's base-game and Phantom Liberty achievement guides. Endings
//   are described by how they are reached, not by what happens in them.
// - The grouping (main story and endings, district completion, companion
//   questlines, combat/build feats, exploration, then Phantom Liberty)
//   follows the achievements' own descriptions and the game's structure.
//   Phantom Liberty content is split out because it requires the paid
//   DLC, matching this catalog's DLC-inclusion precedent.
export const GUIDE = {

    slug: "cyberpunk-2077-achievement-guide",
    category: "game",
    gameSlug: "cyberpunk-2077",
    icon: "🌆",
    title: "Cyberpunk 2077 Achievement Guide",
    summary: "A practical guide to all 57 Steam achievements in Cyberpunk 2077 - the main story and its endings, district completion, the companion questlines, the combat and build feats, and the Phantom Liberty DLC.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Cyberpunk 2077 has 57 Steam achievements. 21 are hidden: five story milestones, the base-game and Phantom Liberty endings, and the companion questline completions. Seven of them require the paid Phantom Liberty DLC.",
                "The endings are mutually exclusive at the point of no return. Keep a manual save from just before the final mission (and, for Phantom Liberty, from just before \"Firestarter\") and you can reach every ending achievement from those saves without replaying the game.",
                "Tip: do all the district gigs, Cyberpsycho Sightings, and companion questlines before you touch the point-of-no-return mission. Several endings and the companion achievements depend on relationships and side content you cannot go back for once the finale starts."
            ]
        },

        {
            heading: "Main Story & Endings",
            body: [
                "The World unlocks for completing the main storyline. Five hidden achievements mark story beats along the way: The Fool (become a mercenary), The Lovers (steal the Relic), The Hermit (find Alt Cunningham), The Wheel of Fortune (interrogate Anders Hellman), and The High Priestess (talk with Hanako Arasaka).",
                "The four base-game endings: The Devil (side with Arasaka - needs Takemura saved earlier), The Star (leave Night City with the Aldecaldos - needs Panam's questline), The Sun (become a legend of the Afterlife), and Temperance (let Johnny keep your body)."
            ]
        },

        {
            heading: "District Completion",
            body: [
                "Each district has an achievement for finishing all its gigs and NCPD Scanner Hustles: It's Elementary (Watson), Little Tokyo (Westbrook), Mean Streets (Heywood), The Jungle (Santo Domingo), Greetings from Pacifica! (Pacifica), The Wasteland (the Badlands), and City Lights (City Center).",
                "I Am The Law covers completing every Cyberpsycho Sighting, and Dirty Deeds covers every Gig in Dogtown (Phantom Liberty)."
            ]
        },

        {
            heading: "Companion Questlines",
            body: [
                "Complete each major companion's storyline: Judy vs Night City (Judy Alvarez), Life of the Road (Panam Palmer), To Protect and Serve (River Ward), and To Bad Decisions! (Kerry Eurodyne, which requires Johnny's missions first).",
                "Bushido and Chill is a beat within Rogue's questline (watch Bushido X with her), and Breathtaking rewards collecting every item that once belonged to Johnny Silverhand."
            ]
        },

        {
            heading: "Combat & Build Feats",
            body: [
                "Build milestones: Full Body Conversion (an implant in every system and body part), Ten out of Ten (max out any skill), Relic Ruler (all Relic perks - Phantom Liberty), and Master Crafter (craft 3 Legendary items).",
                "Kill feats: Gun Fu (3 enemies in quick close-combat succession with a pistol/revolver), Gunslinger (shoot a grenade in midair with a revolver), Two Heads, One Bullet (2 enemies with one sniper shot), Rough Landing (2 enemies with a Berserk superhero landing), Daemon In The Shell (3 enemies with one Detonate Grenade quickhack), The Quick and the Dead (50 kills while time is slowed), V for Vendetta (kill your killer within 5 seconds of a Second Heart revive), Right Back At Ya (kill an enemy who threw a grenade at you), True Soldier (300 ranged kills), and True Warrior (100 melee kills).",
                "Stealth and netrunning: Christmas Tree Attack (a Breach Protocol with 3+ daemons) and Must Be Rats (30 Distract Enemies quickhacks without being spotted)."
            ]
        },

        {
            heading: "Exploration & Reputation",
            body: [
                "Stanislavski's Method (use a life-path dialogue option 10 times), Autojock (buy every purchasable vehicle), The Wandering Fool (find all the tarot graffiti for \"Fool on the Hill\"), Frequent Flyer (find all fast-travel dataterms), and Legend of The Afterlife (max Street Cred).",
                "Phantom Liberty world content: All the President's Men (save President Myers), Judgement Day (eliminate three \"Increased criminal activity\" bosses), Easy Come, Easy Go (steal the Arasaka medical truck or deliver 10 vehicles to El Capitan), and The APB is Not Enough (become Dogtown's most wanted criminal)."
            ]
        },

        {
            heading: "Phantom Liberty Story",
            body: [
                "Spin Doctor (complete \"Run This Town\") and Arachnophobia (defeat the Chimera) are unmissable story achievements.",
                "The DLC's endings each have an achievement: King of Cups (fulfil Songbird's request), King of Pentacles (refuse it), King of Wands (take Songbird to the stars), King of Swords (take Songbird home), and The Tower (the secret ending, from completing \"Things Done Changed\").",
                "Tip: save before \"Firestarter\". The King of Cups path branches early and locks out the others, so you need that save to reach all five DLC ending achievements without a second run."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Clear every district's gigs and hustles (It's Elementary, Little Tokyo, Mean Streets, The Jungle, Greetings from Pacifica!, The Wasteland, City Lights), all Cyberpsycho Sightings (I Am The Law), and all companion questlines (Judy vs Night City, Life of the Road, To Protect and Serve, To Bad Decisions!, Bushido and Chill) before starting the finale. Pick up Breathtaking, Stanislavski's Method, Autojock, The Wandering Fool, Frequent Flyer, and Legend of The Afterlife while roaming.",
                "Grind the combat and build feats (Full Body Conversion, Ten out of Ten, Gun Fu, Gunslinger, Two Heads One Bullet, Rough Landing, Daemon In The Shell, The Quick and the Dead, V for Vendetta, True Soldier, True Warrior, Christmas Tree Attack, Must Be Rats, Master Crafter) during normal play.",
                "In Phantom Liberty, do Dirty Deeds, All the President's Men, Judgement Day, Easy Come Easy Go, The APB is Not Enough, and Relic Ruler, then save before \"Firestarter\" and take all five DLC endings (King of Cups, King of Pentacles, King of Wands, King of Swords, The Tower). Spin Doctor and Arachnophobia come with the story.",
                "Finally, save before the base-game point of no return and take The Devil, The Star, The Sun, and Temperance from that save. The World and the five story milestones unlock along the main path."
            ]
        }

    ]

};
