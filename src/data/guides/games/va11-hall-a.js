// VA-11 Hall-A's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/va11-hall-a.json), whose 34 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   447530 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 33 of 34 ship a real,
//   official Steam description, quoted directly below.
// - Did you miss me? is the one hidden achievement Steam never
//   describes publicly (confirmed via the same API call) - its
//   description here is curatorial, kept deliberately spoiler-light
//   (it's a late-story character-reunion beat), cross-checked against
//   independent achievement guides' documentation of when it unlocks.
// - This guide is kept spoiler-conscious throughout, the same way this
//   catalog's other heavily narrative games (Disco Elysium, Return of
//   the Obra Dinn, The Forgotten City) already are - it names what each
//   achievement asks you to do without describing the story beats or
//   endings themselves.
export const GUIDE = {

    slug: "va11-hall-a-achievement-guide",
    category: "game",
    gameSlug: "va11-hall-a",
    icon: "🍸",
    title: "VA-11 Hall-A Achievement Guide",
    summary: "A practical guide to all 34 Steam achievements in VA-11 Hall-A - mixing the right drinks for the right regulars, the game's five distinct endings, and its smaller decoration and collection side-goals.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "VA-11 Hall-A has 34 Steam achievements. Most of them unlock naturally just by playing through the story and serving the drinks the game asks for, but a handful reward specific bartending choices, decoration goals, or one of the game's five distinct endings.",
                "Welcome to Valhalla! is simply the game's opening achievement, unlocked at the very start of a new game."
            ]
        },

        {
            heading: "Story Progression",
            body: [
                "G'evening, Coming right up, Time to mix drinks and change lives, and Please come again mark reaching each of the game's three main chapters and then finishing the story - they unlock automatically as you progress.",
                "Welcome back! rewards starting a New Game Plus playthrough once you've already finished the story at least once."
            ]
        },

        {
            heading: "Regulars & Specific Drinks",
            body: [
                "An old friend, A different breed of cat, and On a hacking pilgrimage each reward serving one specific drink to one specific regular, which in turn brings a different character to the bar later - the game's way of rewarding attentive bartending rather than random experimentation.",
                "Deep breaths (chat behind the bar with a bandaged girl) and Don't call me Becky! (chat with Becky behind the bar) are both smaller, one-off conversation achievements with two of the bar's recurring regulars.",
                "Caci… que? rewards a specific gift a client gives you - not something you can request, just something to notice when it happens.",
                "Underappreciated drink and I know what I said both reward paying attention to which drinks your customers actually want versus what they ask for - sometimes the \"wrong\" drink is exactly right."
            ]
        },

        {
            heading: "Jill's Choices",
            body: [
                "I feel like an adult (make sure Jill pays all of her bills) and Focus! (make sure Jill doesn't get distracted even once) both track how you manage Jill's own finances and attention between shifts, separate from any single night's bartending.",
                "Cyberfunk, So unnecessary, Living with style, I like it, okay?, and Hit the jukebox all reward decorating and customizing Jill's room, playlist, and jukebox, at increasingly complete levels - So unnecessary and Living with style in particular ask for filling the room with every piece of clutter and unlocking every decoration option respectively, I like it, okay? asks for filling your whole playlist with a song you like, and Hit the jukebox asks for unlocking every song."
            ]
        },

        {
            heading: "Bartending Skill",
            body: [
                "Flawless Service rewards a single flawless night behind the bar, while Employee of the month asks for a flawless service bonus on every single night in the game - a much larger ask than the one-off version.",
                "Hey Jules and In the name of beauty! reward playing, then winning, a video game that appears within the story - two separate, sequential milestones rather than one combined achievement."
            ]
        },

        {
            heading: "Hidden & Endings",
            body: [
                "Did you miss me?, a hidden achievement, is a late-story character-reunion beat - it unlocks naturally as part of the main story without needing anything extra from you.",
                "(´・ω・`)  rewards paying attention to the audience even outside of any specific stream sequence - a subtle, easy-to-miss detail rather than a flashy trigger.",
                "Cozy hell, Dorothinquisition!, Tim's Curry, Listen to my song!, Sisterly bonding, and And now, for something completely different… are the game's distinct endings and ending-adjacent story beats - which one you see depends on the choices and drinks you've made throughout the story, so a single playthrough will only naturally unlock a subset of them.",
                "Tip: VA-11 Hall-A's different endings are tied to a hidden overall \"mood\" the game tracks across every choice you make, not any single decision - if you're chasing every ending achievement, a guide covering that mood system (rather than trial-and-error) will save considerably more time than replaying blind."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through your first ending naturally, without chasing achievements deliberately - most of the story-progression, regular, and bartending-skill achievements come together on their own.",
                "Use New Game Plus (Welcome back!) to revisit the story for the achievements you missed the first time, especially the specific-drink and ending achievements, which realistically need more than one playthrough to fully collect.",
                "Handle the decoration achievements (Cyberfunk, So unnecessary, Living with style, Hit the jukebox) whenever convenient between shifts - none of them are tied to story choices.",
                "Save Employee of the month and Jill of all trades for last - a fully flawless run and full completion are both realistically end-of-save goals that come together once everything else on this list is already done."
            ]
        }

    ]

};
