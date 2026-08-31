// Assassin's Creed III Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/assassins-creed-3.json), whose 44 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   208480 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "assassins-creed-3-achievement-guide",
    "category": "game",
    "gameSlug": "assassins-creed-3",
    "icon": "🪓",
    "title": "Assassin's Creed III Achievement Guide",
    "summary": "A practical guide to all 44 Steam achievements in Assassin's Creed III - none are hidden. Covers the present-day and Animus story sequences, the completion and Homestead achievements, the naval / Club / Frontier content, and the collectible and combat feats. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Assassin's Creed III has 44 Steam achievements and none are hidden. Sixteen are story - the three present-day missions, opening the Temple Door, and completing DNA Sequences 1 through 12. The rest are open: 100% mission constraints (Perfectionist), the Homestead and Encyclopedia of the Common Man content, the Aquila naval missions and Privateer contracts, the Boston/New York Club challenges and district liberation, the convoy economy, all the collectible sweeps (Almanac pages, progress tracker), and a set of one-off combat feats (musket double-assassination, 15-kill cannon shot, rope-dart hangs, Jager notoriety kills).",
                "Nothing is missable - the epilogue missions unlock after the credits, sequences can be replayed for full synchronisation, and every collectible and challenge persists.",
                "Tip: chase full synchronisation on each memory the first time you play it - replaying a sequence later to clean up an optional constraint for 'Perfectionist' is slower than getting it on the initial run."
            ]
        },
        {
            "heading": "Present Day & Story Sequences",
            "body": [
                "Re-entering the Animus, the three present-day missions (Stadium, Skyscraper, Abstergo), opening the Temple Door, and completing DNA Sequences 1 through 12.",
                "The achievements here: Rude Awakening (Re-Enter the Animus.); Daddy Dearest (Complete Present - Stadium.); Criss Cross (Complete Present - Skyscraper.); The End is Nigh (Complete Present - Abstergo.); No Good Deed Goes Unpunished (Open the Temple Door and learn Desmond's fate.); Mystery Guest (Complete Sequence 1 & 2.); How D'ya Like Them Apples (Complete Sequence 3.); Heroes are Born (Complete Sequence 4.); The Day the Templars Cried (Complete Sequence 5.); Tea is for Englishmen (Complete Sequence 6.); The Whites of Their Eyes (Complete Sequence 7.); Caged Wolf (Complete Sequence 8.); Two if by Sea (Complete Sequence 9.); Grim Expectations (Complete Sequence 10.); Difficult End (Complete Sequence 11.); The Sum of Truth (Complete Sequence 12.)."
            ]
        },
        {
            "heading": "Completion & Homestead",
            "body": [
                "100% of all main-mission constraints, the Encyclopedia of the Common Man, crafting one of Franklin's inventions, recruiting Artisans and settling all optional characters on the Homestead, winning Fanorona/Morris/Bowls, exploring Fort Wolcott, and the Oak Island mystery.",
                "The achievements here: Perfectionist (Complete 100% of all main mission constraints.); An Extraordinary Man (Complete the Encyclopedia of the Common Man.); Patent Not Pending (Craft one of Franklin's inventions to decorate your Manor.); House Party (Recruit any of the Artisans and see them settled on the Homestead.); A Complete Set (See all the optional characters settled at the Homestead.); Original Gamer (Win a game of Fanorona, Morris and Bowls on the Homestead.); Bring Down the House (Explore Fort Wolcott.); Kidd Gloves (Uncover the mystery of Oak Island.)."
            ]
        },
        {
            "heading": "Naval, Clubs & Frontier",
            "body": [
                "All Aquila naval missions, all 12 Privateer Contracts, upgrading the Aquila, being invited to a Club, completing all challenges for a Club, liberating all districts in Boston or New York, and sending a convoy to Boston, New York and the Frontier.",
                "The achievements here: All Washed Up (Complete all Naval Missions aboard the Aquila.); Entrepreneur, not Pirate! (Complete all 12 Privateer Contracts.); Tumblehome (Upgrade the Aquila.); By Invitation Only (Be invited to join a Club.); In Good Standing (Complete all challenges for any of the Clubs.); Man of the People (Liberate all districts in Boston OR New York.); Monopoly Man (Send a convoy to Boston, New York and the Frontier.)."
            ]
        },
        {
            "heading": "Collectibles & Combat Feats",
            "body": [
                "Every page of one of Franklin's Almanacs, the full and half progress-tracker completions, the musket double-assassination, the 15-kill cannon shot, five rope-dart hangs, a no-kill convoy loot, five human-shield blocks, ten Jager kills while Notorious, a Trainee reaching Assassin rank, exchanging pelts at all general stores, witnessing a predator kill, and the post-credits epilogue missions.",
                "The achievements here: Blowing in the Wind (Retrieve every page for one of Ben Franklin's Almanacs.); Completionist (Complete ALL progress tracker grid entries.); Multitasking (Complete 50% of the Progress Tracker entries.); Spit Roast (Perform a double assassination using a musket.); Circus Act (Kill 15 guards with a single cannon shot.); Predator (Hang 5 enemies by using rope darts.); Prince of Thieves (Loot a convoy without killing any of its guards.); Whit's fur ye'll no go by ye! (Block a firing line 5 times by using a human shield.); Jager Bomb (After becoming fully Notorious, kill 10 Jagers before losing your notoriety.); Magna cum Laude (Have a Trainee reach the Assassin Rank.); Coureur des Bois (Exchange undamaged pelts at all different general stores.); Eye Witness (Witness a predator killing an enemy.); Fin (Complete each of the epilogue missions unlocked after the credits roll.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to the credits, aiming for full synchronisation on each memory as you go.",
                "2. Do the post-credits epilogue missions for 'Fin'.",
                "3. Work the Homestead - recruit every Artisan, settle the optional characters, and complete the Encyclopedia of the Common Man.",
                "4. Clear the Aquila naval missions, Privateer Contracts, Club challenges and district liberation.",
                "5. Mop up the Almanac pages, progress tracker and the one-off combat feats.",
                "Tip: the combat feats (cannon 15-kill, rope-dart hangs, human shields) are easiest against fort or patrol groups in the Frontier where guards cluster tightly."
            ]
        }
    ]
};
