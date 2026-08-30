// Prey Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/prey-2017.json), whose 58 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   480490 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 23 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community guides, TrueAchievements, gaming-news sites),
//   noted individually where it appears below. Every other achievement's
//   description is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "prey-2017-achievement-guide",
    "category": "game",
    "gameSlug": "prey-2017",
    "icon": "🛸",
    "title": "Prey Achievement Guide",
    "summary": "A practical guide to all 58 Steam achievements in Prey - 23 are hidden. Covers combat, Typhon powers, and exploration aboard Talos I, key story choices and character endings, the game's many hidden story-branch achievements, and the standalone Mooncrash DLC.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Prey (2017) has 58 Steam achievements, 23 of which are hidden. As an immersive sim built around meaningful story choices, most of the hidden achievements track specific, often mutually exclusive story branches - who you save or kill, which ending you choose, and how you treat the people (and Typhon) around you - so several genuinely cannot all be earned in a single playthrough. The visible achievements cover combat and Typhon-power use, exploring and scanning Talos I, and crafting/recycling systems, while a final block of 10 achievements covers the standalone Mooncrash roguelike DLC.",
                "Several achievements are mutually exclusive within one playthrough: I and It (kill every human) directly conflicts with Do No Harm and I and Thou (the empathetic ending), and No Needles (never take any power) conflicts with Know Thine Enemy/Split Affinity. Split Affinity itself needs two full completions - once Typhon-only, once Human-only - so getting every base-game achievement realistically takes at least three playthroughs: an empathetic/human-only run, a Typhon-focused run, and a fully hostile run for I and It.",
                "Tip: several late-game hidden achievements (Best Served Cold, Suicide by Proxy, This Never Happened) are permanent, mutually-exclusive story choices - save your game before a major confrontation if you want to see multiple outcomes across different playthroughs rather than committing blind."
            ]
        },
        {
            "heading": "Talos I: Combat, Powers & Exploration",
            "body": [
                "Repairing objects, defeating Typhon with specific powers and tactics, acquiring Human abilities and Typhon powers, hacking, mimicking objects, and general survival and crafting achievements aboard Talos I.",
                "The achievements here: Engineer (You repaired (20) objects on and around Talos I.); I and Thou (Complete the game with maximum empathy by helping and saving everyone you can rather than ignoring or harming them.); I and It (You killed every Human on and around Talos I.); No Needles (You completed the game without ever acquiring any Typhon power or Human ability.); Do No Harm (You completed the game without killing any Humans.); Mimic Massacre (You killed (5) Mimics in 5 seconds.); Dead Calm (You killed an enemy while using Combat Focus.); Mimesis (You mimicked a Mimic.); Shapeshifter (You mimicked (20) or more unique objects.); Know Thine Enemy (You acquired a Typhon power.); Know Thy Self (You acquired a Human ability.); Split Affinity (You completed the game once acquiring only Typhon Powers and again acquiring only Human abilities.); Operator (You hacked at least (20) hackable objects on and around Talos I.); A Different Side of Yu (You scanned your Phantom Shift duplicate with the Psychoscope.); Deprogramming (You used Mindjack to free a mind-controlled Human.); Tee One Up (You killed an enemy while they were Lifted.); Escape Velocity (You blasted yourself as an object for at least 20 meters while in normal gravity.); It's Alive! (You created a Phantom using Phantom Genesis.); Thoughts Can Kill (You used Psychoshock on a Human.); Ball Lightning (You used Electrostatic Burst to drop two or more Operators at once.); TranStar Gourmand (You consumed one of every type of food and drink on Talos I.); Cold Dead Hands (You fully upgraded a weapon.); Reduce, Reuse, Recycle (You used a single Recycler Charge to recycle at least 20 objects.)."
            ]
        },
        {
            "heading": "Talos I: Endings & Key Choices",
            "body": [
                "Recycling yourself, full exploration achievements (finding every employee, reading every e-mail, listening to every recording), and the earliest hidden story-branch achievements around Dahl, Alex Yu, and Mikhaila's father.",
                "The achievements here: Intrinsic Value (Recycle yourself using a Recycler Charge.); Missing Persons (You located all employees on Talos I.); Press Sneak (You read all the e-mails on Talos I.); Psychometry (You found and listened to all TranScribe recordings.); No Show (Die to the helicopter blades on your very first day at TranStar.); Awkward Ride Home (Escape Talos I aboard Walther Dahl's shuttle with only Dahl as your companion.); Push the Fat Guy (Kill Alex Yu.); Abandon Ship (Flee Talos I aboard Alex's escape pod before completing your mission.); Self-Incriminating (Discover the truth of what happened to Mikhaila's father and tell her.)."
            ]
        },
        {
            "heading": "Talos I: Hidden Story Achievements",
            "body": [
                "A long run of hidden achievements tied to specific character relationships and story choices - Igwe, January, Luka, Danielle Sho, Dahl, Mikhaila, and the smuggler's dead drops and Starbender Cycle books.",
                "The achievements here: Brain Trust (Bring Igwe, January, and Mikhaila together to meet in your office.); Dear Future Self (Find and listen to all of the messages you left for your future self.); Best Served Cold (Kill Luka to avenge Abby.); Suicide by Proxy (Kill January.); Open Says She (Use Danielle Sho's voice samples to gain access to Deep Storage.); This Never Happened (Perform an apto-regressive neurotomy on Walther Dahl, erasing his memory.); Facsimile (Meet the Operator January for the first time.); A Friend in Need (Find Mikhaila injured in the Power Plant and give her a medkit.); Prism Master (Find and read all six books of the Starbender Cycle series.); The Gates of Hell (Complete the Shipping and Receiving objective without any human casualties.); Adrift (Answer Dr. Igwe's distress call and save him in time after he is stranded outside the station.); Black Market (Find all of the smuggler's hidden dead drops on Talos I.); You Rang? (Use the Psychotronics satellite to summon or dismiss the Typhon Nightmare.); Makeup Exam (Retake the Neuromod Division's aptitude test and pass all three sections using Kinetic Blast, Mimic Matter, and Remote Manipulation in turn.); Coffee Break (Find Dr. Calvino's secret coffee stash.); Gift to the World (Recover Gustav Leitner's connectome for Dr. Igwe.)."
            ]
        },
        {
            "heading": "Mooncrash DLC",
            "body": [
                "The standalone Mooncrash roguelike expansion's achievements: unlocking and escaping with all five playable characters, neuromod and sim-point milestones, and specific combat and collection feats.",
                "The achievements here: Galaxy Brain (In Mooncrash, install every neuromod power for every character.); Squad Goals (In Mooncrash, unlock all 5 playable characters.); Cryptomancer (In Mooncrash, finish the game with a surplus of 50,000 sim points or more.); Psychostatic Efficiency (In Mooncrash, damage 3 enemies with a single Psychostatic Cutter projectile.); Quantum Leap (In Mooncrash, complete all Story Objectives.); I’m Your Biggest Fan (In Mooncrash, you read all of the second Starbender series and still no regrets.); Apex Predator (In Mooncrash, defeat a Moon Shark.); Three-Body Problem (In Mooncrash, GLOO 3 enemies with a single GLOO charge.); Contract Fulfilled (In Mooncrash, complete all KASMA Orders.); No One Left Behind (In Mooncrash, escape the simulation with all five playable characters in a single run.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On your first playthrough, play empathetically - help everyone you can, avoid killing humans, and pick up Typhon powers freely - to work toward I and Thou, Do No Harm, and the general power/hacking/crafting achievements.",
                "2. Along the way, explore fully: read every e-mail, listen to every TranScribe recording, locate every employee, and find all the smuggler's dead drops and Starbender Cycle books for the collection achievements.",
                "3. Make deliberate choices at the game's key branch points (Dahl's fate, January vs. the Alex/Morgan reveal, Mikhaila's father) and note which hidden achievements you get, since many are mutually exclusive.",
                "4. Play a second, Human-abilities-only run and a third, fully hostile \"kill everyone\" run to pick up Split Affinity, No Needles, and I and It.",
                "5. Finish with the Mooncrash DLC: unlock and escape with all five playable characters, complete every KASMA Order and Story Objective, and chain the various single-run combat/collection achievements.",
                "Tip: Makeup Exam requires retaking the Neuromod Division's aptitude test using Kinetic Blast, Mimic Matter, and Remote Manipulation on three separate attempts in a row - it's easy to miss simply because most players only take that test once during the story."
            ]
        }
    ]
};
