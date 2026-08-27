// Bastion's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/bastion.json), whose 24 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   107100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 19 of 24 ship a real,
//   official Steam description, quoted directly below.
// - The Survivor, The Singer, The Ura, The Beginning, and Turret Opera
//   are hidden achievements Steam never describes publicly (confirmed
//   via the same API call) - their descriptions here are curatorial,
//   cross-checked against independent community documentation of their
//   real unlock conditions (each tied to a specific story beat or, for
//   Turret Opera, a specific in-combat feat).
// - The Beginning and The End are the game's two alternate,
//   mutually-exclusive endings (Restoration vs. Evacuation) - both are
//   listed here as story achievements rather than treated as a single
//   missable pair, matching how the catalog's own missable:true flags
//   handle them.
export const GUIDE = {

    slug: "bastion-achievement-guide",
    category: "game",
    gameSlug: "bastion",
    icon: "🏛️",
    title: "Bastion Achievement Guide",
    summary: "A practical guide to all 24 Steam achievements in Bastion - the story's key beats, its two alternate endings, the Shrine Idol dream challenges, and its toughest combat feats.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Bastion has 24 Steam achievements. A first playthrough naturally covers most of the story-related ones, but a real 100% run needs a second playthrough through New Game Plus (Calamity Kid) to see both of the game's two mutually-exclusive endings, since only one can be chosen per playthrough.",
                "The Shrine Idol dream challenges (the four Onslaught achievement pairs below) are entirely optional, repeatable difficulty modifiers - nothing about them is missable, since you can always return to Who Knows Where and try again with more or fewer Idols invoked."
            ]
        },

        {
            heading: "Story & The Two Endings",
            body: [
                "The Stranger unlocks early for completing the Wharf District - the game's opening area.",
                "The Survivor and The Singer each unlock for completing a specific companion's home district (the Hanging Gardens and Prosper Bluff respectively) and then speaking with them back at the Bastion. The Ura unlocks a little later, for helping defend the Bastion when it comes under attack after Burstone Quarry.",
                "The End and The Beginning are the game's two alternate endings, offered as a single choice at the very end of the story: Evacuation unlocks The End, while Restoration unlocks The Beginning. Since only one can be chosen per playthrough, seeing both realistically means finishing the story twice.",
                "Calamity Kid is the payoff for actually completing the story again in New Game Plus - the natural way to see whichever ending you missed the first time."
            ]
        },

        {
            heading: "Building Up the Bastion",
            body: [
                "Kid-at-Arms and Man-at-Arms both track the Forge: apply at least one upgrade to every weapon for the first, then fully upgrade every single weapon for the second - a much bigger investment in Fragments and Distillery time.",
                "Pet Sitter is a smaller, separate collection goal: bring four different domesticated creatures back to the Bastion.",
                "Vigilante and Altruist track the Memorial's Vigils - optional dedications you can build for characters and events from the story - at 50 percent and 100 percent completion respectively.",
                "Ride the Wind is the simplest achievement in the game: just use the Skyway once, in the Wharf District."
            ]
        },

        {
            heading: "The Shrine Idols & Who Knows Where",
            body: [
                "Mind Voyager asks you to complete each of the four trips to Who Knows Where at least once - the game's dream-sequence, horde-style challenge levels, one themed around each major companion (the Kid, the Singer, the Survivor, and the Stranger).",
                "Each of those four dreams also has its own pair of Shrine Idol achievements - Whatever's Out There / Just Like That (the Kid's Dream), Lock Yourself In / Calamity All Around (the Singer's Dream), A Lasting Peace / Ashes in the Sky (the Survivor's Dream), and All in the Mind / About the Author (the Stranger's Dream) - unlocked for completing that dream with five or more, then all ten, Shrine Idols invoked. Idols are optional combat modifiers, similar in spirit to Transistor's Limiters, so the ten-Idol versions are real difficulty spikes best attempted once your build is strong.",
                "Tip: invoke Idols gradually rather than jumping straight to all ten - each one adds a specific combat complication, so it's much easier to learn how a dream plays with five active before adding the rest."
            ]
        },

        {
            heading: "Combat Feats",
            body: [
                "Turret Opera is a dedicated combat challenge outside the main story: deploy a single Turret and keep it alive long enough for it to defeat 20 enemies on its own, which usually means finding a safe spot to lure enemies toward it while protecting it from damage yourself.",
                "Hard Bargain is a long-term grind rather than a single feat: earn a cumulative total of at least 1,000,000 points across Score Attack Mode runs, the game's separate scored combat mode."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through the story normally first - The Stranger, The Survivor, The Singer, The Ura, and one of the two endings all come naturally, along with steady progress on Kid-at-Arms, Pet Sitter, and the Vigils.",
                "Visit Who Knows Where as it opens up for Mind Voyager, then come back for the five-Idol Shrine achievements once you're comfortable, saving the ten-Idol versions for when your build is stronger.",
                "Start New Game Plus specifically to see whichever ending you missed - that run doubles as your path to Calamity Kid and gives you more time to finish off Man-at-Arms and Altruist if you didn't in your first playthrough.",
                "Treat Turret Opera and Hard Bargain as side activities you can chip away at whenever - neither depends on story progress, so there's no wrong time to attempt them."
            ]
        }

    ]

};
