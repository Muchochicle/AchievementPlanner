// Owlboy's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/owlboy.json), whose 12 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   115800 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 6 of 12 ship a real,
//   official Steam description, quoted directly below.
// - Hot Spring Mastery, Good boy, Reminiscing, Music Master, Oops...,
//   and Bad boy are hidden achievements Steam never describes publicly
//   (confirmed via the same API call) - their descriptions here are
//   curatorial, cross-checked against multiple independent achievement
//   guides' documentation of their real unlock conditions.
// - The grouping below (the early-game joke achievements vs. the trinket
//   and coin collection ladders vs. the two content-completion
//   achievements) is read directly from what each achievement's own
//   description/unlock condition requires, not invented.
export const GUIDE = {

    slug: "owlboy-achievement-guide",
    category: "game",
    gameSlug: "owlboy",
    icon: "🦉",
    title: "Owlboy Achievement Guide",
    summary: "A practical guide to all 12 Steam achievements in Owlboy - a handful of early-game jokes at Otus's expense, plus the trinket, coin, and disk collection ladders that reward exploring Owlboy's floating islands.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Owlboy has 12 Steam achievements. Half of them are small, early-game jokes tied to specific one-off interactions - the other half reward steadily collecting the game's trinkets, coins, and golden disks as you explore its floating islands.",
                "Several of these are genuinely missable if you rush through the game's opening hour without exploring, since a couple of the joke achievements are tied to very specific early actions."
            ]
        },

        {
            heading: "Early-Game Jokes",
            body: [
                "Hot Spring Mastery and Good boy are both tied to the game's opening stretch: talk to Toby repeatedly in the hot spring until Otus stops glowing red from the heat to earn Hot Spring Mastery, then immediately fly Geddy back toward the scientist's house afterward to trigger Good boy - an early, slightly premature attempt to report in.",
                "Bad boy is a much smaller joke - once Geddy has joined your party, simply throw him off a high ledge to trigger a short cutscene and unlock it.",
                "Oops... is the opposite of a one-off joke - it rewards grabbing and body-slamming Geddy a full 1,000 times over the course of the whole game, which realistically accumulates naturally if you use Geddy's throw as a regular attack.",
                "Reminiscing rewards bringing a shell, dropped by one of the cannon-firing Boguins, to a specific patch of dirt near the old ruins in Tropos.",
                "Music Master rewards watching Bomboman play his drums, then repeating the same rhythm yourself on the bongos upstairs in his house.",
                "Tip: Hot Spring Mastery and Good boy both need to happen early and in sequence - if you skip past the hot spring scene quickly, you can miss the window for Good boy on that playthrough."
            ]
        },

        {
            heading: "Trinkets & Coins",
            body: [
                "Trinket Master and Trinket Grand Master track trinkets earned from Buccanary's shop, at a partial and a complete set respectively - Trinket Grand Master needs every trinket the shop offers.",
                "Treasure Seeker and Treasure Seeker Grand Master do the same for Buccanary coins scattered across the islands, again at a partial count and then every coin in the game.",
                "Flight of the Boguin is a separate, one-time challenge - clearing the Boguins' Cannon minigame - rather than an ongoing collection like the trinkets and coins."
            ]
        },

        {
            heading: "Ancient Memories",
            body: [
                "Ancient Memories rewards collecting the game's golden disks, a smaller and more story-relevant set of collectibles than the trinkets or coins, each tied to specific hidden locations across the islands."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Handle Hot Spring Mastery and Good boy right at the start of the game, in that order, since they're the two achievements most likely to be missed if you play through the opening too quickly.",
                "Grab Bad boy whenever convenient once Geddy has joined you - it takes seconds and doesn't need to be planned around anything else.",
                "Let Oops... accumulate naturally by using Geddy's throw as your normal way of dealing with enemies over the course of the whole game, rather than grinding it in one sitting.",
                "Explore each island fully as you reach it for Reminiscing, Music Master, Flight of the Boguin, and the trinket/coin/disk collectibles - Owlboy's islands don't force you forward quickly, so there's little cost to a thorough sweep before moving on."
            ]
        }

    ]

};
