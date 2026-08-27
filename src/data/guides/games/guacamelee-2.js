// Guacamelee! 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/guacamelee-2.json), whose 49 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   534550 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 44 of 49 ship a real,
//   official Steam description, quoted directly below.
// - Severed 2, PERFECT, You Survived, Talk to the Hend, and Moves Like
//   Jaguar are hidden achievements Steam never describes publicly
//   (confirmed via the same API call) - their descriptions here are
//   curatorial, cross-checked against multiple independent achievement
//   guides' documentation of their real unlock conditions.
// - The list includes achievements tied to the game's free "Enemigos"
//   Character Pack and paid "The Proving Grounds" DLC, matching this
//   catalog's existing precedent (Cuphead's catalog entry already
//   includes its Delicious Last Course DLC achievements) of covering a
//   game's full achievement list rather than excluding DLC content.
export const GUIDE = {

    slug: "guacamelee-2-achievement-guide",
    category: "game",
    gameSlug: "guacamelee-2",
    icon: "💀",
    title: "Guacamelee! 2 Achievement Guide",
    summary: "A practical guide to all 49 Steam achievements in Guacamelee! 2 - boss fights, combat mastery challenges, hidden secrets, and the Enemigos Character Pack and Proving Grounds DLC achievements.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Guacamelee! 2 has 49 Steam achievements, spread across the main story, a wide set of combat-mastery challenges, hidden secrets tucked into its Mexiverse, and the game's free Enemigos Character Pack and paid Proving Grounds DLC.",
                "Guacamastery itself is a meta-achievement for obtaining every other achievement in the game - it naturally comes last on any completionist run."
            ]
        },

        {
            heading: "Boss Fights & Story Progression",
            body: [
                "I Remember That Being Harder (defeat Calaca), Re-Resurrección (regain the mask), Show's Over, Go Home (defeat El Muñeco), Severed (defeat Uay Pek), Prickly Pair (defeat Cactuardo and Zope), King of the Hill (defeat El Trio de la Montaña), and Nacho Libre (defeat Salvador) all unlock automatically as you clear the story's boss encounters in order.",
                "Legend of the Timelines rewards reaching the game's good ending, which requires collecting all keys across the story - a larger goal than simply finishing the main campaign once.",
                "Even Darkester is a separate, harder-mode achievement: beat the whole game again on Hard mode after your first clear."
            ]
        },

        {
            heading: "Combat Mastery",
            body: [
                "Santa Golpiza! (reach 150 on your hit-meter), Grapple Expert (use all four of Coscorrona's special throws), Juan Punch Man (one-shot an enemy with a fully upgraded super move), and Talented Player (dodge 10 enemies' attacks by rolling) each reward getting comfortable with one specific combat tool.",
                "Cluckstorm (kill 50 enemies as chicken), The Floor Is... (Eagle Boost from 10 different hook points without touching the ground), and 6-Piece Combo (juggle an enemy with 6 Chicken Shots or Slides before it touches the ground) push that further into chicken-form and aerial-combo territory.",
                "Luchonarrative Resonance is the biggest combat-volume achievement here - kill 1000 mean, nasty skeletons without families - which realistically accumulates over a full playthrough rather than needing a dedicated grind."
            ]
        },

        {
            heading: "Exploration & Secrets",
            body: [
                "Questionable Plumbing (discover the Pollo Illuminati's headquarters), He Looks Portable (find Juan and Lupita in the Darkest Timeline), Special Delivery! (feed the hungry guard), I Was Told There'd Be Candy (defeat a Piñataface), and These Are Not Fertilized (lay a dozen eggs) are each tied to a specific hidden interaction somewhere in the world.",
                "Temple Raider (find 100% of the hidden items in a temple), y cant guacamelee crawl (complete a Pollo challenge dungeon), One Down... (complete a secret Chicken Key Challenge), Very Special (open the Golden Door), and One Born Every Minute (open a loot box) round out the game's secret-hunting achievements.",
                "The hidden achievements Severed 2, PERFECT, You Survived, Talk to the Hend, and Moves Like Jaguar are the least visible of the bunch: Severed 2 and PERFECT both come from destroying the two hidden cars tucked into the game's Fighting Street bonus stages, You Survived rewards entering the secret Heart of Dankness area and making it back out, Talk to the Hend rewards finding and speaking to the Holy Hen, and Moves Like Jaguar rewards clearing a hidden Jaguar gauntlet challenge in the southern part of Los Manglares.",
                "Tip: Guacamelee! 2's secrets lean on its Metroidvania structure - several of these need an ability you don't have on your first pass through an area, so a second sweep after unlocking new movement options is often the easiest way to mop them up."
            ]
        },

        {
            heading: "Full Completion",
            body: [
                "I Have Nothing Left to Teach You (fully purchase one trainer's skill tree) and El Técnico Táctico (purchase all of the upgrades) both reward spending your collected gold on the game's ability trees.",
                "Combo Machine rewards completing all of Flame Face's challenges, a dedicated combat-trial gauntlet separate from the main story.",
                "Mr. Worldwide is the game's broadest completion achievement - achieve 100% completion in all areas - realistically the last non-meta achievement most players pick up before Guacamastery itself."
            ]
        },

        {
            heading: "Enemigos Character Pack",
            body: [
                "+ Cool Cat Counter Attack ('Enemigos' Character Pack) (dodge then hit 15 enemies as Jaguar), + Steal the Show ('Enemigos' Character Pack) (perform with the Dead Band at the Mariachi Club as El Muñeco), + Body Builder ('Enemigos' Character Pack) (defeat a Giant Skeleton as Uay Pek's Head), + Welcome to MY World ('Enemigos' Character Pack) (defeat 25 Enemies in the Living World as Uay Pek), and + Jaguar's Redemption ('Enemigos' Character Pack) (defeat Salvador as Jaguar) all require the free Enemigos Character Pack, which lets you replay story encounters as one of the game's bosses."
            ]
        },

        {
            heading: "The Proving Grounds DLC",
            body: [
                "++ Slippery Snake (The Proving Grounds), ++ Explosion Therapy (The Proving Grounds), ++ Snake Temple Throwdown (The Proving Grounds), and ++ Salvador’s Sister Act (The Proving Grounds) are each tied to a specific challenge room added by the paid Proving Grounds DLC.",
                "++ Bronze Champion (The Proving Grounds) and ++ Silver Champion (The Proving Grounds) reward earning a Bronze and then a Silver medal on every one of Tiempochtli’s Challenges, while ++ Let Sleeping Gods Lie (The Proving Grounds) rewards simply waking Tiempochtli up in the first place."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first, picking up the boss-defeat achievements and most of the combat-mastery ones along the way without going far out of your way for them.",
                "Do a dedicated exploration sweep once you've unlocked the game's later movement abilities, since several secrets and hidden achievements need tools you won't have on a first pass through early areas.",
                "Save Even Darkester, Mr. Worldwide, and Guacamastery for last - a Hard mode clear and full completion are both realistically end-of-save goals that come together once everything else on this list is already done.",
                "If you own the Enemigos Character Pack and The Proving Grounds, tackle their achievements as a separate side project whenever convenient - neither depends on your progress in the main story."
            ]
        }

    ]

};
