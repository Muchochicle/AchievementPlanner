// Prison Architect Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/prison-architect.json), whose 18 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   233450 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - Sections group achievements by what each one actually requires.
export const GUIDE = {
    "slug": "prison-architect-achievement-guide",
    "category": "game",
    "gameSlug": "prison-architect",
    "icon": "🏢",
    "title": "Prison Architect Achievement Guide",
    "summary": "A practical guide to all 18 Steam achievements in Prison Architect - none are hidden. story & campaign, sandbox & economy, completion & meta.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Prison Architect has 18 Steam achievements and none are hidden. They cover the campaign chapters and their optional objectives, sandbox population and economy milestones, and a set of completion and meta goals (tech tree, collectibles, escape mode, Steam Workshop).",
                "Nothing is missable and every sandbox goal can be pursued at leisure. Confined (a 1,000-prisoner prison) and Wait and Hope (the full tech tree) are the biggest time sinks.",
                "Tip: play the campaign for the story and objective achievements, then build one large sandbox prison you keep growing toward 1,000 prisoners and a full research tree - that single prison covers most of the remaining list."
            ]
        },
        {
            "heading": "Story & Campaign",
            "body": [
                "Completing the story, and all optional objectives on the Riot and Conviction chapters plus the optional objective on Bootstraps.",
                "The achievements here: Throw The Book At Them (Complete the story); Crowd Control (Complete all optional objectives on Riot); Reformation (Complete all optional objectives on Conviction); Freedom (Complete optional objective on Bootstraps)."
            ]
        },
        {
            "heading": "Sandbox & Economy",
            "body": [
                "Building sandbox prisons with 100, 500 and 1,000 prisoners, selling a prison for over $1,000,000 profit, reaching a $50,000+ cashflow, and stopping a riot of 50+ prisoners.",
                "The achievements here: Stone Walls (Build a sandbox prison with 100 prisoners); Iron Bars (Build a sandbox prison with 500 prisoners); Confined (Build a sandbox prison with 1000 prisoners); D.B. Cooper (Sell your prison and make over $1,000,000 profit); Samuel Norton (Have a cashflow of $50,000 or more); Spare The Rod (Stopped a riot of 50 or more prisoners)."
            ]
        },
        {
            "heading": "Completion & Meta",
            "body": [
                "Executing a death-row prisoner, unlocking the entire tech tree, a 25% re-offending rate, all polaroids and all game-bible pages, escaping from a prison in escape mode, and sharing and loading a prison via Steam Workshop.",
                "The achievements here: Don't Put Me In The Dark (Executed a prisoner on death row); Wait and Hope (Unlock entire tech tree); Get Busy Living (Achieve a re-offending rate of 25%); It's Not What You Know... (Unlocked all polaroids); ... It's What You Can Prove (Unlocked all game bible pages); I May Have Found A Way Out Of Here (Escape from a decent prison in escape mode); Architect (Shared a prison via Steam Workshop); Warden (Loaded a prison from Steam Workshop)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign, clearing the optional objectives on Riot, Conviction and Bootstraps and finishing the story.",
                "2. Start one large sandbox prison and grow it steadily toward 1,000 prisoners while researching the full tech tree.",
                "3. Manage that prison's economy for the $50,000 cashflow, then sell it for D.B. Cooper, and run its programs down to a 25% re-offending rate.",
                "4. Do the meta goals: an execution, the polaroids and bible pages, an escape-mode run, and a Workshop upload and download.",
                "Tip: Get Busy Living (25% re-offending rate) needs a reform-focused regime - plenty of education, workshops, and rehab programs, low punishment - so build that prison for reform from the start rather than converting a lockdown prison later."
            ]
        }
    ]
};
