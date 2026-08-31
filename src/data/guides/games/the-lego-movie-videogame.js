// The LEGO Movie - Videogame Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-lego-movie-videogame.json), whose 48 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   267530 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-lego-movie-videogame-achievement-guide",
    "category": "game",
    "gameSlug": "the-lego-movie-videogame",
    "icon": "🧱",
    "title": "The LEGO Movie - Videogame Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in The LEGO Movie - Videogame - none are hidden. Covers the story levels, the Pants / Special / Red Brick / Golden Manual collectibles up to 100%, and the character-specific and mini-game feats.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The LEGO Movie - Videogame has 48 Steam achievements and none of them are hidden. Sixteen are story-level completions (the Prologue plus Levels 1-15). Ten cover the collectible grind - all Pants, The Special in every level, all Red Bricks, all Golden Manuals, all Master Builders and Characters purchased, all Instruction Builds, 1,000,000,000 studs, and 100% completion. The rest are character-specific and mini-game feats - kill counts as Metal Beard, Rage Unikitty, Emmet Cowboy and Sheriff Not-A-Robot, the Kragle Gun, the dance mini-games, Benny's Server Room builds, and various level-specific gags.",
                "Nothing is missable - story levels replay in Free Play with the full roster and every collectible and feat can be mopped up after the credits.",
                "Tip: play the story once, then Free Play every level with a full roster to sweep Pants, The Special, Red Bricks and the character-gag achievements in one pass per level."
            ]
        },
        {
            "heading": "Story Levels",
            "body": [
                "Completing the Prologue and each of the fifteen story levels, from Bricksburg Construction to The Final Showdown.",
                "The achievements here: Cover Your Butt! (Completed Prologue - The Prophecy); Lets Get Craaazzzyyyy (Completed Level 1 - Bricksburg Construction); Darn Darn Darn Darny Darn! (Completed Level 2 - Escape From Bricksburg); Are You A DJ? (Completed Level 3 - Flatbush Gulch); Freeze, Turkeys! (Completed Level 4 - Flatbush Rooftops); Rest In Pieces (Completed Level 5 - Escape From Flatbush); No Frowny Faces (Completed Level 6 - Welcome to Cloud Cuckoo Land); Every Man For Himself! (Completed Level 7 - Attack on Cloud Cuckoo Land); You Can't Build 'Em All At Once (Completed Level 8 - Escape from Cloud Cuckoo Land); Why Are My Pants Cold and Wet? (Completed Level 9 - The Depths); This Bedoubled Land Couch (Completed Level 10 - Infiltrate The Octan Tower); See You Later Alligator (Completed Level 11 - Put The Thing On The Thing); Found Your Pants, Series Is Over (Completed Level 12 - Broadcast News); I Am A Master Builder! (Completed Level 13 - Back From Reality); Release Every Micro Manager! (Completed Level 14 - Bricksburg Under Attack); You Can Still Change Everything (Completed Level 15 - The Final Showdown)."
            ]
        },
        {
            "heading": "Collectibles & 100%",
            "body": [
                "Collecting all Pants, The Special in every level, all Red Bricks and Golden Manuals, purchasing all Master Builders and Characters, all Story and Golden Instruction Builds, 1,000,000,000 studs, and 100% completion.",
                "The achievements here: Honey, Where Are My Pants? (Collected all pairs of Pants (Single Player)); You Are The Special (Achieved The Special in every level (Single Player)); Welcome To Bricksburg (Collected all of the Red Bricks (Single Player)); Build Things Only You Can Build (Collected all Golden Manuals); Including, But Not Limited To (Purchased All Master Builders); The Special People In Your Life (Purchased All Characters); Always Read The Instructions! (Completed all Instruction Builds in Story Mode); Midas Touch (Completed all Golden Instruction Builds); Business Business Business (Earned 1,000,000,000 studs); Everything Is Awesome! (Achieved 100% Completion)."
            ]
        },
        {
            "heading": "Character & Combat Feats",
            "body": [
                "The character-specific kill counts (Metal Beard, Rage Unikitty, Emmet Cowboy, Sheriff Not-A-Robot), the Kragle Gun feats, the two dance mini-games, an instruction build with no studs lost, the hacking mini-game, character customisation, and the level-specific gags (Lincoln and Lady Liberty, Superman and Green Lantern, Benny's Server Room builds, the Invisible Jet, and the various character switches).",
                "The achievements here: Really hard? This be Impossible! (Destroyed 50 Enemies as Metal Beard); The Opposite Of Happiness (Killed 20 Enemies as Rage Unikitty); Ah! The Kragle! (Kragelized 10 people with the Kragle Gun); Building Bad (Attempted a Master Build-It with a Non-Master Builder); Pow Pow! Bullet Bullet! Gun! (Defeated 30 Enemies as Emmet Cowboy); Ayayaya! (Defeated 20 Enemies As Sheriff Not-A-Robot); I Could Sing This Song For Hours (Scored 21 awesome dance moves in the Construction Site dance mini game.); No Way, This Is My Jam. (Scored 21 awesome dance moves in the Kragelizer dance mini game.); Firestarter (Made a Fire); First Try! (Completed an Instruction Build without losing any studs); I Am The Computer (Collected all studs in a hacking mini-game); Wear Clothes… Check! (Customised your character.); A House Divided (Played as Abraham Lincoln and Lady Liberty); SPACESHIP SPACESHIP! (Completed all Master Builds in Server Room as Benny); I Super Hate You Right Now (Played as Superman and Green Lantern); It's Just Business (Used Lord Business' Legs Machine); The Prophecy, I Made It Up! (Switched from Vitruvius to Ghost Vitruvius); END OF THE LINE! (Shot Emmet with Robo Skeleton.); Glues Your Daddy? (Used the Kragle Gun to shoot Ma and Pa Bad Cop in the Relic Room.); To The Invisible Jet! (Found and destroyed the Invisible Jet); Grrrg! (Smashed a chair as Bad Cop); Too Bad! (Switched from Good Cop (Scribble Face) to Bad Cop.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play all sixteen story levels for the completion achievements.",
                "2. Free Play every level with a full roster to sweep Pants, The Special, Red Bricks and Golden Manuals.",
                "3. Buy all Master Builders and Characters with your studs, and complete all Instruction Builds.",
                "4. Do the character-specific kill counts and mini-game feats during Free Play passes.",
                "5. Fill the last percent to 100% for \"Everything Is Awesome!\".",
                "Tip: turn on the stud-multiplier Red Bricks as soon as you can afford them - \"Business Business Business\" (a billion studs) and the all-purchases achievements need a lot of currency."
            ]
        }
    ]
};
