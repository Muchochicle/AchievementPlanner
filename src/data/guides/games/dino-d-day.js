// Dino D-Day Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dino-d-day.json), whose 77 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   70000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dino-d-day-achievement-guide",
    "category": "game",
    "gameSlug": "dino-d-day",
    "icon": "🦖",
    "title": "Dino D-Day Achievement Guide",
    "summary": "A practical guide to all 77 Steam achievements in Dino D-Day - none are hidden. Covers the general and human-soldier feats, the per-weapon life-kill and pterosaur feats, the dinosaur-class feats, and the support-class and objective achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Dino D-Day has 77 Steam achievements and none are hidden. Almost every one is a multiplayer feat tied to a specific class or weapon - a 7-kill life with each human firearm, per-dinosaur feats (T-Rex eats, Raptor pounces, Microraptor spits, Compy suicide detonations), the support-class heals, and a set of one-off objective and gag achievements (using a goat as a weapon, capturing a point with only raptors).",
                "The catalog marks it difficulty 4 - this is an old, lightly-populated multiplayer shooter, so most achievements need either a cooperative server or bots, and the per-class 7-kill lives take practice. Nothing is missable.",
                "Tip: set up a private or bot match and work class by class - play one dinosaur or one weapon until its feats are done rather than hoping they happen in a public game."
            ]
        },
        {
            "heading": "General & Human-Soldier Feats",
            "body": [
                "The developer kill, the Hardgrave helmet trick, a raptors-only point capture, an out-of-ammo melee kill, a wall throw-kill, the no-damage Styracosaur escort, the jackrabbit and Berserk-mode feats, the Raptor gags (Clever Girl, Griefosaurus), the goat kill, a bite-victim double-kill, killing one of each Nazi class, shooting a leaping raptor, a two-raptor rabbit kill, and 7-kill lives with the M1 Garand, BAR, Sten, Mosin-Nagant, Thompson and PIAT.",
                "The achievements here: Bite the Hand that Feeds You (Kill a developer in online play.); Helmet Trick (Kill 3 Hardgraves in one life.); It's the Rapture! (Capture a point with only raptors.); Out, but not down (Kill an enemy with a melee attack while out of bullets.); Paint the town red (Kill an enemy player by throwing him into a wall.); Reich Rolled (As Axis, get the Styracosaur to his goal without taking any damage.); Sneaky Snacker (Finish eating 3 jackrabbits in the same life.); Star Spangled Hammer (Get five fist-kills in Berserk mode.); Tonight, you dine in Hell! (Kill a raptor while she's feeding.); Clever Girl (As a Raptor, kill Ilona after she's deployed a rabbit.); Griefosaurus (Pounce the same player twice in one life.); Achilles Meal (As the Raptor, finish eating a jackrabbit.); Griefosaurus Rex (Pounce 5 different enemy players in the same life.); What's gonna happen to the goat? (Use a goat to kill an enemy player.); ThrOWNAGE (Score a double-kill with a bite victim.); Nazis...I hate these guys. (Kill one of each Nazi class in the same life.); Pull! (Shoot and kill a leaping raptor.); Bad Hare Day (Kill two raptors with the same rabbit.); That's just Garand (Score 7 kills in a single life with the M1 Garand.); Keep Calm and Carry One (Score a kill with every PIAT round in a single life.); Open BAR, dude (Score 7 kills in a single life with the BAR.); French Persistence (Score 7 kills in a single life with the Sten gun.); Uz Prieksu! (Score 7 kills in a single life with the Mosin-Nagant.); More like \"Stompson\" (Score 7 kills in a single life with the Thompson SMG.)."
            ]
        },
        {
            "heading": "Weapon Life-Kills & Pterosaur",
            "body": [
                "The pterosaur kills (a capturing enemy, 3 at once, a post-death kill), 7-kill lives with the k98, MP-40 and MP-44, and the T-Rex feats - eating 3 players, a 3-enemy roar, 7 MG kills, eating a player, a 500lb-bomb kill, the pee-then-kill gag, the Stygimoloch MG34 7-kill, and Trigger's .30 cal 7-kill.",
                "The achievements here: Divine Wind (Use a pterosaur to kill an enemy capturing a point.); Rest for the Unwary (Use a pterosaur to kill 3 or more enemies simultaneously.); Avenge me! (Score a pterosaur kill after you've died.); Struck by the Streicher (Score 7 kills in a single life using the k98.); Stricken by the Streicher (Score 7 kills in a single life using the MP-40.); Bad Medicine (Score 7 kills in a single life using the MP-44.); Combo Meal (As T-Rex, eat 3 enemy players in one life.); Mourning Breath (As T-Rex, knock 3 enemies down with one roar.); Primal Purge (As T-Rex, get 7 MG kills in one life.); Snack Attack (As T-Rex, eat an enemy player.); Spit Us Out The Bomb (As T-Rex, kill an enemy player with a 500lb bomb.); Paint the Town Yellow (Pee on a downed enemy, then kill them.); Horned Devil (As the Stygimoloch, kill 7 enemies with your MG34.); Trigger Time (As Trigger, kill 7 enemies with your .30 cal.)."
            ]
        },
        {
            "heading": "Dinosaur Classes",
            "body": [
                "The Microraptor feats (first kill, a two-man point capture, a wall-cling kill, a 7-kill life, a headshot spit, the on-fire spit gag, a claw kill after spitting), Nigel's flamethrower feats (burning a peeing dinosaur, killing a Microraptor, a 7-kill life), and the Compy suicide-detonation feats (1, 2 and 3 enemies, a capturing enemy).",
                "The achievements here: Give 'Em the Bird (Make your first kill as the Microraptor.); Party Fowl (Capture a two-man control point with Microraptors.); Wall Art (As the Microraptor, kill an enemy while clinging to the wall.); Thankskilling (As the Microraptor, kill 7 enemies in a single life.); Hock a Luger (As Microraptor, hit an enemy in the head with your poison spit.); Kiss the Cook (As Microraptor, spit in Nigel's face while you are on fire.); Adding Insult to Injury (As Microraptor, kill an enemy with your claws after spitting in their face.); It DOES burn when you pee! (As Nigel, burn a dinosaur that is peeing.); Turkey Dinner (As Nigel, kill a Microraptor with your flamethrower.); Operation Torch (As Nigel, kill 7 enemies with the Flamethrower in a single life.); I regret nothing! (As the Compy, kill an enemy with a suicide detonation.); Two for One Special (As the Compy, kill two enemies with one suicide detonation.); Threepeat (As the Compy, kill three enemies with one suicide detonation.); Is this a bad time? (As the Compy, kill an enemy that is capturing a point.)."
            ]
        },
        {
            "heading": "Support Classes & Objectives",
            "body": [
                "Joe's sticky bomb / grease gun / artillery feats, Camille's group heal, von Graff's dinosaur heal, Hissman's two-bullet double-kill, Jakob's fists, the Capture Point win, the Ju-52 capture, the alternate-weapon feats, the T-Rex and Styracosaur killing blows, a capturing-enemy headshot, 15 Santa presents, the Hardgrave berserk feats, saving a pounced teammate, the thrown-goat save, the Desmatosuchus 7-kill, and surviving a whole round with 5+ points.",
                "The achievements here: This is my BOOM stick(y)! (As Joe, kill an enemy with your sticky bomb.); It ain't easy being greasy... (As Joe, get 7 kills in one life with the grease gun.); Cloudy with a chance of Death! (As Joe, get 3 kills with a single artillery strike.); Bandage a Trois (As Camille, heal yourself and three others with a thrown healthkit.); Combat Vet(erinarian) (As von Graff, heal a dinosaur teammate.); German Efficiency (As Hissman kill two enemies with two consecutive bullets.); Frankenhurter (As Jakob, use your fists to kill two enemies in a single life.); He who controls the points... (Be on the winning team in a Capture Point game.); There's no 'I' in plane (Help capture the Ju-52 in Troina.); I choose you! (Equip an alternate weapon.); Exercise your options (Kill an enemy with an alternate weapon.); The bigger they are... (Land the killing blow on a T-Rex.); ...the harder they fall. (Land the killing blow on a Styracosaur.); Cap'd (Headshot an enemy that is capturing a point.); Santa's Little Helper (In one match, collect 15 of Santa's lost presents.); THAT WAS FREAKING AMAZING! (In Hardgrave's berserk mode, punch a T-Rex to death.); You Can't Go Home Again (As an Axis player, kill the 2 German defectors in one life (Trigger and Jakob).); If it bleeds we can kill it... (Kill a Hardgrave while he's in berserk mode.); I Regret Everything (As Compy, get 3 claw kills but fail to kill anyone with your suicide detonation.); Kelly's Heroes (Get one kill as each Allied class in a single round.); Let's Ragnaroooooook! (Get 3 kills while in berserk mode as Hardgrave.); Shoot her! (Save a teammate by killing a raptor that has pounced them.); The Silence of the Lambs (Save a teammate or yourself from a thrown goat.); Tanks a lot (Kill 7 enemies in a single life as the Desmatosuchus.); There Can Be Only One (Stay alive for an entire round and score at least 5 points.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Set up a private match with bots or friends so you can work achievements deliberately.",
                "2. Go weapon by weapon on the human classes for the 7-kill-life achievements.",
                "3. Go dinosaur by dinosaur (Raptor, T-Rex, Microraptor, Compy, Stygimoloch) for their feats.",
                "4. Do the support-class feats (Joe, Camille, von Graff, Hissman, Jakob).",
                "5. Mop up the objective and gag achievements (goat kills, Ju-52 capture, Santa's presents, berserk mode).",
                "Tip: the per-class 'kill 7 in a single life' achievements are easiest against low-skill bots on a small map - camp a chokepoint with the target weapon and reload between kills."
            ]
        }
    ]
};
