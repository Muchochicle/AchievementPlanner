// Skullgirls 2nd Encore Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/skullgirls.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   245170 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "skullgirls-achievement-guide",
    "category": "game",
    "gameSlug": "skullgirls",
    "icon": "💀",
    "title": "Skullgirls 2nd Encore Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Skullgirls 2nd Encore - none are hidden. Covers the per-character Story Mode canon endings, the combat and system feats (Blockbusters, tag mechanics, parasite and character-specific moves), the mode challenges (Arcade, Survival, Trials), and the meta achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Skullgirls 2nd Encore has 45 Steam achievements and none of them are hidden - though many descriptions are in-character flavour text with the requirement hidden inside. Roughly a third are per-character canon Story Mode endings (completing each character's story). The rest are combat and system feats (character-specific moves, tag-team mechanics, Blockbusters, parry retaliation), mode challenges (Arcade, Survival, the Trials/Tutorial), the vocabulary/tutorial gags, and a few meta achievements (Funded! for the Kickstarter, the April Fools joke).",
                "Nothing is missable - Story Mode paths can be replayed and the combat feats can be set up in Training or against the AI. The completion is short; the only real requirement is playing every character's story and knowing which cryptic description maps to which specific mechanic.",
                "Tip: keep a community achievement guide open - descriptions like \"A sesquidecemvir of seven simulacra synergizing simultaneously\" (Toil and Trouble) or \"Beau-coup de Grâce\" describe very specific inputs (a seven-Fukua mirror, a triple-Blockbuster), and you will not stumble into them by playing normally."
            ]
        },
        {
            "heading": "Story Mode & Endings I",
            "body": [
                "The early Story Mode achievements - following all threads of fate, graduation, the vocabulary and roster-variety feats, character-specific moves (the hair dash, grappling, the Kitchen Sink, the head-toss), and the Squigly and Big Band story markers.",
                "The achievements here: Threads of Fate (Follow all threads of fate to their inevitable conclusions.); Sküllgirls (Graduation day has arrived at last! Mrs. Victoria’s so proud of you.); Prolix (Words are fun - expand your vocabulary.); An Ensemble Cast (There may be no I in “team,” but there is in “variety.”); Instant Hair Dash  (Let your parasite feel the wind between his tendrils.); Real Circus Damage (And now, for the main attraction... Grappling!); The Kitchen Sink (Throw everything at them, including...); Good Hunting, Commander (A good commander knows how to wield her forces effectively.); Getting A Head In the Game (Sometimes you just need to relax and take the weight off your shoulders.); My Pain Will Be Visited Upon You (Sometimes you can take it, and sometimes you just want to lash out.); Medical Board Will Be Notified (Your opponents aren’t the only ones under the knife.); Toil and Trouble (A sesquidecemvir of seven simulacra synergizing simultaneously.); Breaking the Cycle (Retaliate against repetition.); Call the Wardrobe Department (Make dozens of costume changes.); World Warrior Princess (Wander the world... unintentionally.); Happy Birthday (You got a present!); Two Weeks (Will Squigly decide on her choice and move towards the changing winds?)."
            ]
        },
        {
            "heading": "Combat & Mode Feats",
            "body": [
                "The system and mode feats: Independent Study and Overruled, Conqueror (Arcade), Survival Serenity, Lab Monster (leave Training and fight), the triple-Blockbuster, Prima Donna, the cymbal and solo-tag feats, the Beowulf and Painwheel feats, the robot pain gag, and the Museum of Unnatural History.",
                "The achievements here: Independent Study (Before you can hope to master others, you must master yourself.); Overruled! (The prosecution rests, your honor.); Conqueror (No challenge is too great, no obstacle too high.); Survival Serenity (Survival is no horror.); Lab Monster (Get out of the Training Room and fight!); Beau-coup de Grâce (You get a Blockbuster! Everyone gets a Blockbuster!); Prima Donna (Sopranos should always be center stage.); Foreshadowing and Cymbalism (The crash of cymbals, the sound of failure... for your opponent.); Me and My Shadows (Tag-team your opponent all alone.); The Beast Within (My, your skeleton is looking positively punishing today!); By the Scruff of Their Necks (Just give me five minutes of peace, you unruly Wulfamaniacs!); Still \"Alive\" (WHY - WHY WAS I PROGRAMMED TO FEEL PAIN?); Museum of Unnatural History (A gallery of strange and peculiar things awaits.)."
            ]
        },
        {
            "heading": "Character Story Completions",
            "body": [
                "The per-character canon Story Mode endings (Painwheel, Ms. Fortune, Squigly, Fukua, Robo-Fortune, Big Band, Eliza, Beowulf, Valentine and the rest) and the meta achievements - Funded! and April Fact's Day.",
                "The achievements here: Funded! (A heartfelt thanks to everyone that believed in Skullgirls and made this happen.); A Normal Life (\"Painwheel?\" Must be foreign.); And It's All Thanks To You (Poor Ms. Fortune.); Picking Up Where Marie Left Off (Bloodying mafia fools? What a hoot!); Training the Next Generation (One sister's safety dooms another.); Nadia Fortune and the Mystery of the Missing Fishfolk (They already took one family from her, and like hell she's going to let them do it again.); Command Override (Does he really think he can control her...?); Deeper Into Enemy Lines (Nothing more than a pawn.); The Other Candidates Will Be Consumed (As she denied her purpose, they denied her continued existence.); Until You Next Awaken (It would appear they've become quite inseparable.); Not What It Used To Be -- But Neither Am I (This city and he, they've been through a lot.); Let Them All Bathe In My Glory (It is time for a new kingdom, and a new age! This world so badly needs a wake-up call.); Kind of an Idiot, But Not a Bad Guy (Hope you can rest in peace, big guy. Or this piece of you can, anyway.); Days of Future Cats (It is for your own good, BEEP BOOP MEOW.); April Fact's Day (The joke is that she's not a joke.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through Story Mode with every character, following the canon path to each one's ending - this clears roughly a third of the list.",
                "2. Do the Arcade (Conqueror), Survival (Survival Serenity) and Trials/Tutorial achievements.",
                "3. Set up the combat and system feats in Training or against the AI with a guide: the specific character moves, the triple-Blockbuster, the solo-tag combo, the parry retaliation, and the seven-Fukua feat.",
                "4. Do the vocabulary and gag achievements (Prolix, Lab Monster, the robot pain line, April Fact's Day).",
                "5. Funded! unlocks on its own for owning the game, and the Museum achievement comes from viewing the gallery.",
                "Tip: the multi-character feats (An Ensemble Cast, Call the Wardrobe Department) just want variety - cycle through the full roster and every palette once in any mode, which also helps you learn the cast for the Story Mode runs."
            ]
        }
    ]
};
