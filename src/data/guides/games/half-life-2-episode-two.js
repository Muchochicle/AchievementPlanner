// Half-Life 2: Episode Two Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/half-life-2-episode-two.json), whose 23 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   420 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "half-life-2-episode-two-achievement-guide",
    "category": "game",
    "gameSlug": "half-life-2-episode-two",
    "icon": "🌲",
    "title": "Half-Life 2: Episode Two Achievement Guide",
    "summary": "A practical guide to all 23 Steam achievements in Half-Life 2: Episode Two - none are hidden. Covers the story-progress and set-piece achievements, the collectible sweeps, and the optional combat feats including the Gnome Chompski achievement.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Half-Life 2: Episode Two has 23 Steam achievements and none of them are hidden. Most are story progress and set-piece feats - holding off the antlion invasion in the mine shaft, defeating both antlion guards, surviving the Hunter ambush with Alyx, beating the chopper without a miss, racing DOG to the White Forest base, the White Forest Inn ambush, and Defense of the Armament. Three are collectible sweeps (every antlion grub, every web cache, every radar cache), and a handful are optional combat feats. The famous one is Little Rocket Man / Gnome Alone - carrying the garden gnome, Gnome Chompski, all the way through the game and loading him into the rocket.",
                "The gnome is the only real planning constraint: you must pick him up early and physically carry or Gravity-Gun him through every level, vehicle section and firefight to the rocket silo near the end. Everything else can be retried per chapter, so nothing is permanently missable.",
                "Tip: this is a one-playthrough completion if you carry the gnome from the start - keep him in the car's trunk area during driving sections, and use a collectible guide for the grubs, webs and radar caches so you do not have to backtrack."
            ]
        },
        {
            "heading": "Story Progress & Set-Piece Feats",
            "body": [
                "Killing an acid antlion worker, squishing every grub, breaking every web cache, the mine-shaft antlion invasion, both antlion guards, running over 20 enemies with the car, the Hunter ambush, a no-miss chopper fight, the junkyard Autogun, every radar cache, the DOG race, the rocket-launcher lambda cache, the White Forest Inn ambush, sending the gnome into space, securing missile silo 2, saving every building outside the silo, and Defense of the Armament.",
                "The achievements here: Acid Reflex (Kill an acid antlion worker.); Get Some Grub (Squish every antlion grub in Episode Two.); Piñata Party (Find and break every web cache in Episode Two.); Into the Breach (Help Griggs and Sheckley hold off the antlion invasion inside the mine shaft.); Twofer (Defeat both antlion guards outside the White Forest.); Hit and Run (Run over 20 enemies with the car in Episode Two.); Meet the Hunters (Survive the Hunter ambush with Alyx.); Puttin' On a Clinic (Defeat the chopper in Episode Two without any misses.); Gunishment! (Destroy the Combine Autogun in the junkyard.); Cache Checker (Find every radar cache in chapter Under The Radar.); Pedal to the Metal (Beat DOG in a race to the White Forest base.); Gordon Propelled Rocket (Unlock the rocket launcher lambda cache in chapter Under The Radar.); Quiet Mountain Getaway (Survive the ambush at White Forest Inn.); Little Rocket Man (Send the garden gnome into space.); Secondary Silo Secured (Secure the launch doors on missile silo 2.); Neighborhood Watch (Save all buildings outside the missile silo from destruction.); Defense of the Armament (Save the missile silo from the Combine offensive.)."
            ]
        },
        {
            "heading": "Combat Feats & Gnome Chompski",
            "body": [
                "Killing a Hunter with its own flechettes, 30 kills with thrown physics objects, a hopper-mine kill, killing a Combine soldier with his own grenade, stealing a Zombine's grenade, and Gnome Alone - the payoff achievement for carrying Gnome Chompski all the way to the rocket.",
                "The achievements here: Payback (Kill a Hunter with its own flechettes.); Bone Breaker (Kill 30 enemies with thrown physics objects.); Deadly Harvest (Kill an enemy by planting a hopper mine.); Hot Potat0wned (Kill a Combine soldier with his own grenade.); Grave Robber (Steal a Zombine's grenade.); Gnome Alone (If you are reading this achievement, Gabe Newell has successfully launched Gnome Chompski into space. If you did not also receive the achievement 'Manufacturing Ascent', Newell has abandoned his plans to shoot Noam Chomsky into space.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Pick up Gnome Chompski as soon as you reach him and commit to carrying him for the whole game.",
                "2. Play through with a collectible guide, sweeping every antlion grub, web cache and radar cache as you pass them.",
                "3. Do the set-piece feats on the way (the antlion invasion, both guards, the Hunter ambush, the no-miss chopper, the DOG race, the White Forest Inn) - most are unavoidable, a few just need care.",
                "4. Do the optional combat feats (Payback, Bone Breaker, Deadly Harvest, Hot Potat0wned, Grave Robber) whenever the right enemy type appears.",
                "5. Load the gnome into the rocket at the silo for Little Rocket Man and Gnome Alone, then finish Defense of the Armament.",
                "Tip: for the no-miss chopper fight (Puttin' On a Clinic), only your fired mines count - grab a mine, wait for the chopper to hold still, and throw at point-blank range; a missed throw resets the achievement, so do not rush."
            ]
        }
    ]
};
