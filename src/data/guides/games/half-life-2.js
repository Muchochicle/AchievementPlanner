// Half-Life 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/half-life-2.json), whose 69 achievements were
//   sourced directly from Steam's own achievement schema for appid 220
//   via ISteamUserStats/GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js) - 64 of 69 ship a real, official Steam
//   description, quoted directly below. The Steam listing for Half-Life 2
//   covers the base game plus Episode One and Episode Two.
// - The five hidden achievements (Defiant, Submissive, Hallowed Ground,
//   Where Cubbage Fears to Tread, Singularity Collapse) ship no Steam
//   description; their conditions here are curatorial, cross-checked
//   against the Half-Life Wiki and community 100% guides.
// - The grouping (base game, Episode One, Episode Two, the shared
//   physics and weapon feats, then the secret achievements) is read from
//   each achievement's own description and its apiname prefix.
export const GUIDE = {

    slug: "half-life-2-achievement-guide",
    category: "game",
    gameSlug: "half-life-2",
    icon: "🔦",
    title: "Half-Life 2 Achievement Guide",
    summary: "A practical guide to all 69 Steam achievements in Half-Life 2 - the base game's chapter feats, the Episode One and Episode Two achievements, the shared physics and weapon challenges, and the five secret achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "The Steam version of Half-Life 2 has 69 Steam achievements, five of them hidden. They span the base game and both episodes (Episode One and Episode Two), so full completion means playing all three.",
                "Many are one-time chapter events - if you pass the spot without doing them you must replay that chapter or the game. A few, like The One Free Bullet, effectively require a dedicated run.",
                "Tip: play through once normally for the collectibles and story feats, then do a second, careful run of each game for the restriction achievements (The One Free Bullet, Keep Off the Sand!, Pacifist) and the missable physics kills."
            ]
        },

        {
            heading: "Half-Life 2: Base Game",
            body: [
                "Early chapters: Malcontent (escape the apartment raid), What cat? (break the mini-teleporter in Kleiner's lab), Trusty Hardware (get the crowbar), Anchor's Aweigh! (get the airboat), Heavy Weapons (get its mounted gun), Barnacle Bowling (five barnacles with one barrel), Vorticough (find the singing vortigaunt cave), Revenge! (destroy the hunter-chopper), Blast from the Past (find the HEV faceplate in Eli's scrapyard), Zero-Point Energy (get the Gravity Gun), Two Points (make a basket with DOG's ball), and Zombie Chopper (clear Ravenholm using only the Gravity Gun).",
                "Later chapters: OSHA Violation (three kills with the crane), Targetted Advertising (pin a soldier to the Highway 17 billboard), One Man Army (destroy six gunships), Keep Off the Sand! (cross the antlion beach untouched), Bug Hunt (50 kills with antlions), Flushed (kill an enemy with a toilet), Warden Freeman (survive the second Nova Prospekt turret standoff), Follow Freeman (command a rebel squad), Radiation Levels Detected (get through the toxic tunnel), Plaza Defender (survive the generator plaza standoff), Counter-Sniper (kill every City 17 sniper), Fight the Power (shut down the suppression device), Giant Killer (survive the rooftop strider battle), Atomizer (disintegrate 15 soldiers in a Combine ball field), and Lambda Locator (find all lambda caches)."
            ]
        },

        {
            heading: "Episode One",
            body: [
                "Watch Your Head! (reach the bottom of the Citadel elevator shaft in one piece), Containment (contain the Citadel core), Pacifist (do it without killing any stalkers), Car Crusher (squash 15 antlions with cars), Elevator Action (survive to the parking garage elevator), Live Bait (help Alyx snipe 30 enemies), Attica! (destroy the hospital-attic gunship), Citizen Escort (no citizen deaths on the way to the train), Escape From City 17 (finish the episode), and The One Free Bullet (finish it firing exactly one bullet - crowbar, grenade, rocket and Gravity Gun kills are fine)."
            ]
        },

        {
            heading: "Episode Two",
            body: [
                "Acid Reflex (kill an acid antlion worker), Get Some Grub (squish every antlion grub), Piñata Party (break every web cache), Into the Breach (hold off the mine-shaft antlion invasion with Griggs and Sheckley), Twofer (defeat both antlion guards outside White Forest), Hit and Run (run over 20 enemies with the car), Meet the Hunters (survive the Hunter ambush with Alyx), Puttin' On a Clinic (defeat the Episode Two chopper without a single miss), Gunishment! (destroy the junkyard Combine Autogun), Cache Checker (find every radar cache), Pedal to the Metal (beat DOG to the base), Gordon Propelled Rocket (unlock the rocket-launcher lambda cache), Quiet Mountain Getaway (survive the White Forest Inn ambush), Little Rocket Man (send the garden gnome into space), Secondary Silo Secured (secure the launch doors on missile silo 2), Neighborhood Watch (save every building outside the silo), Payback (kill a Hunter with its own flechettes), and Defense of the Armament (save the missile silo)."
            ]
        },

        {
            heading: "Shared Physics & Weapon Feats",
            body: [
                "These can be earned in any of the three games: Hack Attack! (five kills with a Manhack), Conservationist (five kills with the same energy ball), Think Fast! (kill an Elite Soldier with his own energy ball), Zombie-que (light 15 zombies with flares), Bone Breaker (kill 30 enemies with thrown physics objects), Deadly Harvest (kill an enemy by planting a hopper mine), Hot Potat0wned (kill a Combine soldier with his own grenade), and Grave Robber (steal a Zombine's grenade).",
                "Gnome Alone is the community achievement - it registers once Gnome Chompski has been carried through Episode Two and launched into space via Little Rocket Man."
            ]
        },

        {
            heading: "The Secret Achievements",
            body: [
                "Two are a matched pair from the opening Point Insertion scene, when a Civil Protection officer knocks a can down and tells you to pick it up: Submissive (put the can in the trash as ordered) and Defiant (throw the can back and hit him with it).",
                "The other three: Hallowed Ground (escort Father Grigori safely through the church cemetery in Ravenholm), Where Cubbage Fears to Tread (destroy the gunship attacking Lighthouse Point for Colonel Odessa Cubbage in Highway 17), and Singularity Collapse (finish Half-Life 2 by destroying the Citadel's dark fusion reactor core)."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "First pass, Half-Life 2: play straight through collecting Lambda Locator and doing the story feats (Malcontent, Trusty Hardware, Anchor's Aweigh!, Heavy Weapons, Zero-Point Energy, Follow Freeman, Fight the Power, Giant Killer), and pick up Submissive at the very start. Grab the missable physics and combat feats (OSHA Violation, Targetted Advertising, Flushed, Bug Hunt, Atomizer, Barnacle Bowling, Two Points, Vorticough, Blast from the Past) and the two Ravenholm ones (Zombie Chopper, Hallowed Ground).",
                "Second pass, Half-Life 2: a careful run for Keep Off the Sand!, Counter-Sniper, Warden Freeman, Plaza Defender, Where Cubbage Fears to Tread, Revenge!, One Man Army, and Singularity Collapse, plus Defiant with the can.",
                "Episode One: play once for Watch Your Head!, Containment, Car Crusher, Elevator Action, Live Bait, Attica!, Citizen Escort, and Escape From City 17; add Pacifist and The One Free Bullet on a second, restricted run.",
                "Episode Two: play through for Acid Reflex, Get Some Grub, Piñata Party, Into the Breach, Twofer, Hit and Run, Meet the Hunters, Gunishment!, Cache Checker, Pedal to the Metal, Gordon Propelled Rocket, Quiet Mountain Getaway, Little Rocket Man, Secondary Silo Secured, Neighborhood Watch, Defense of the Armament, and Gnome Alone, then clean up Puttin' On a Clinic and the shared feats (Hack Attack!, Conservationist, Think Fast!, Zombie-que, Bone Breaker, Deadly Harvest, Hot Potat0wned, Grave Robber)."
            ]
        }

    ]

};
