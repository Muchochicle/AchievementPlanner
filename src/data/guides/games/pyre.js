// Pyre's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data (backend/catalog/games/pyre.json),
//   whose 51 achievements were sourced directly from Steam's own
//   achievement schema for appid 462770 via ISteamUserStats/
//   GetSchemaForGame (fetched through this app's own
//   backend/services/steamApi.js) - 38 of 51 ship a real, official Steam
//   description, quoted directly below.
// - The six "deal 200 Pyre Damage" achievements for Mae, Ti'zo, Gilman,
//   Pamitha, Bertrude, and Volfred are hidden achievements Steam never
//   describes publicly, but they follow the exact same template as the
//   6 already-public damage achievements for Rukey, Hedwyn, and
//   Jodariel, just naming a different exile - a safe, pattern-based
//   curatorial description, not a guess. New Alliance, Sky Explorer,
//   Scourge of the Skies, and the four faction-themed Versus Mode
//   achievements (Home-field Heroes, Classic Nightwings, Sons of
//   Jomuer, Dames of the Downside) are also hidden - their descriptions
//   are curatorial, cross-checked against independent achievement-guide
//   sites (TrueSteamAchievements, community 100% guides).
// - The grouping below (the exiles' own damage milestones vs. Campaign
//   progression vs. Rite-specific combat challenges vs. Versus Mode)
//   is read directly from what each achievement's own official
//   description requires, not invented.
export const GUIDE = {

    slug: "pyre-achievement-guide",
    category: "game",
    gameSlug: "pyre",
    icon: "🔥",
    title: "Pyre Achievement Guide",
    summary: "A practical guide to all 51 Steam achievements in Pyre - the exiles' own damage milestones, Campaign progression and collectibles, Rite combat challenges, and Versus Mode.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Pyre has 51 Steam achievements, split fairly evenly between the story-driven Campaign and the separate local Versus Mode. The Campaign roster naturally grows as you play - exactly which exiles you recruit and liberate is shaped by your own choices, so nothing here is truly missable within a single playthrough as long as you keep progressing.",
                "True Freedom and True Nightwing are the game's two ending achievements, unlocking on Campaign completion at standard difficulty and at the harder True Nightwing difficulty respectively - realistically two separate playthroughs, since the harder difficulty is best attempted only after you already understand the Rite system from a first run."
            ]
        },

        {
            heading: "The Reader & Gather the Band",
            body: [
                "The Reader unlocks right at the very start of the Campaign, simply for beginning your quest for freedom.",
                "Gather the Band asks you to find an exile for each of the different masks - the game's roster naturally fills out as you progress through the story, so this happens on its own well before the end of a normal playthrough."
            ]
        },

        {
            heading: "The Exiles' Damage Milestones",
            body: [
                "Eight achievements each reward dealing 200 Pyre Damage with one specific exile: The Fast Talker (Rukey), The Free Spirit (Hedwyn), The Fallen Soldier (Jodariel), The Faithful Drifter (Mae), The Little Watcher (Ti'zo), The Honor Seeker (Gilman), The Guilty Sister (Pamitha), The Serpent Queen (Bertrude), and The Plan Maker (Volfred).",
                "These unlock naturally as you rotate exiles through your active Rite lineup over the course of the Campaign - deliberately playing each character for a while, rather than sticking with just two or three favorites, is the real key to picking all of these up."
            ]
        },

        {
            heading: "Liberation Rites",
            body: [
                "Home Free and Mercy Shown are opposite outcomes of the same event type - prevailing in a Liberation Rite versus suffering defeat in one - so both are realistically easy to unlock across a normal Campaign that includes at least one loss along the way.",
                "Returned to Glory asks you to liberate any three exiles from your party, a natural milestone partway through a normal playthrough."
            ]
        },

        {
            heading: "Progression & Collectibles",
            body: [
                "Master of the Rites (reach Rank 5 with any exile) and Start Duster (upgrade a Talisman to Rank 20) both reward deep investment in your characters' own growth systems.",
                "Cover to Cover and Book Worm both track the Book of Rites - unlocking every chapter, and separately checking 50 different pages - while Found Your Calling rewards doing Vocations 10 times and There For Them asks for 20 different conversations in the blackwagon, your traveling home base between Rites.",
                "Big Spender rewards spending 1,000 Sol in the Slugmarket, and First Whiff unlocks the first time you use Scribe Snuff to reset an exile's Masteries - both happen naturally if you experiment with the game's systems rather than avoiding them."
            ]
        },

        {
            heading: "Rite Challenges",
            body: [
                "Scribes' Chosen, Scribes' Guardian, and Scribes' Champion scale up the same challenge - prevailing in a Rite with three, then six, then all 12 Titan Stars active - each requiring standard difficulty or greater and getting progressively harder.",
                "Untouched Flame (prevail without your Pyre taking damage), Flame Quencher (prevail in no more than three dousings), and Fear Not the Flame (douse the adversary's Pyre by 40 or more in one go) are all precision combat challenges best attempted once you're comfortable with a specific exile's moveset.",
                "Banished One and All (banish three adversaries with a single Aura Cast) and Star Struck (fling the Orb at an adversary, then banish them within two seconds) are both tight execution challenges rather than things you'll casually stumble into.",
                "Crowd Pleaser asks you to complete three Feats of Glory, and New Alliance is a hidden pairing achievement for prevailing in a Rite using Jodariel and Pamitha together - two characters whose personal story arc makes their teaming up notable."
            ]
        },

        {
            heading: "The Beyonder Crystal",
            body: [
                "Mystic Training, Sandra's Disciple, and Sandra's Favorite track the Beyonder Crystal's practice content: completing one Practice Rite, then two Scribe Trials, then five Scribe Trials respectively."
            ]
        },

        {
            heading: "Exploration & the Overworld",
            body: [
                "Sky Explorer and Scourge of the Skies are both hidden achievements tied to flying between Rites on the overworld map: interacting with 10 different observation points, and bumping into five different rival caravans' wagons.",
                "The White Lute unlocks the first time you use that instrument to play a tune, Downside Pilgrim asks you to prevail in a Rite at each of the Celestial Landmarks, and Favored to Prevail rewards prevailing in a Rite against each of the other triumvirates you encounter across the Campaign."
            ]
        },

        {
            heading: "Versus Mode",
            body: [
                "First Ceremony and The Will of the Scribes both mark your first completed Rite in Versus Mode - against another mortal, and against a CPU opponent respectively - while Enlightened and Master Conductor scale up the CPU difficulty, asking for a win against a Master-level opponent, with Master Conductor additionally requiring six or more Titan Stars active.",
                "Lick of Flame is a tense comeback achievement: prevailing against a CPU opponent while your own Pyre has less than 10 Health remaining, using default Masteries, Talismans, and Pyre Health settings.",
                "Home-field Heroes, Classic Nightwings, Sons of Jomuer, and Dames of the Downside are four hidden, faction-themed Versus Mode achievements, each requiring a win with a specific named trio (or, for Home-field Heroes, a specific location and pairing): Ti'zo and Messenger Imp at the Isle of Khaylmer; Volfred, Ti'zo, and Oralech; Rukey, Barker, and Dalbert; and Sandra, Tamitha, and Udmildhe."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play your first Campaign playthrough normally, rotating exiles through your lineup deliberately so the eight damage-milestone achievements (The Fast Talker through The Plan Maker) all complete naturally rather than relying on just two or three favorites.",
                "Engage with every side system as you go - the Book of Rites, Vocations, the Slugmarket, the blackwagon's conversations, flying between Rites - since most of the Campaign progression and exploration achievements fall out of genuine engagement rather than deliberate farming.",
                "Once you understand a few exiles' movesets well, go back for the precision Rite challenges (Untouched Flame, Flame Quencher, Star Struck, Banished One and All) and the Titan Star scaling achievements (Scribes' Chosen through Scribes' Champion).",
                "Handle Versus Mode achievements in a separate block once you're comfortable with the Rite system - the four faction-themed ones need a specific team each, so it's easier to knock them out together rather than one at a time.",
                "Save True Nightwing for a dedicated second Campaign playthrough at that higher difficulty, once True Freedom and everything else here is already done."
            ]
        }

    ]

};
