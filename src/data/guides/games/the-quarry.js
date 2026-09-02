// The Quarry Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-quarry.json), whose 40 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1577120 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 13 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-quarry-achievement-guide",
    "category": "game",
    "gameSlug": "the-quarry",
    "icon": "🐺",
    "title": "The Quarry Achievement Guide",
    "summary": "A practical guide to all 40 Steam achievements in The Quarry (13 hidden). The 13 hidden achievements are specific narrative outcomes (who lives, who dies, who gets infected) plus one podcast easter egg. Everything else - the chapter markers, the all-survive and all-die runs, the skill feats, and the tarot / clue / evidence collectibles - carries Steam's own text.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "The Quarry has 40 Steam achievements, 13 of them hidden. Nine camp counsellors spend one last night at Hackett's Quarry and become the prey in a werewolf story. The visible achievements cover the ten chapter markers plus prologue and epilogue, keeping everyone alive ('Rough Night') or killing everyone ('Hackett's Quarry Massacre'), the skill feats (15 Interrupts, 5 Don't Breathe events, a no-miss combat run), and the tarot card, clue and evidence collectibles.",
                "The 13 hidden achievements are specific narrative outcomes: individual survivors (Kaitlyn or Ryan alone), specific deaths (Nick kills Abi, Laura and Travis kill each other), infection results (save a friend, accept the bite, infect everyone, kill all the Hacketts, kill Silas), some relationship beats, and the 'Bizarre Yet Bonafide' podcast easter egg.",
                "The catalog marks it difficulty 3 and multiple playthroughs. Almost every outcome achievement is mutually exclusive with another, so plan on one blind run, one all-survive run, one all-die run, and chapter-select mop-up for the rest."
            ]
        },
        {
            "heading": "Chapters & Overall Outcomes",
            "body": [
                "The prologue, ten chapter markers and epilogue, plus the everyone-lives and everyone-dies runs.",
                "The achievements here: Prologue (Completed the Prologue); Chapter 1 (Completed Chapter 1); Chapter 2 (Completed Chapter 2); Chapter 3 (Completed Chapter 3); Chapter 4 (Completed Chapter 4); Chapter 5 (Completed Chapter 5); Chapter 6 (Completed Chapter 6); Chapter 7 (Completed Chapter 7); Chapter 8 (Completed Chapter 8); Chapter 9 (Completed Chapter 9); Chapter 10 (Completed Chapter 10); Epilogue (Witnessed the Epilogue); Rough Night (Kept everyone alive); Hackett's Quarry Massacre (Killed everyone)."
            ]
        },
        {
            "heading": "Story Outcomes",
            "body": [
                "The mutually-exclusive narrative results - individual survivors, specific kills and deaths, infection outcomes, and the Laura/Travis and Laura/Max relationship beats.",
                "The achievements here: The Final Girl (Kaitlyn survived the night as the only survivor.); Nick of Time (Took the fastest route to Nick in the chapter where he goes missing.); The White Wolf (Killed Silas, the white wolf.); Nobody's Fool (Jacob told Emma the truth.); Lovers' Quarrel (Nick killed Abi.); Should've Gone to the Motel (Reunited Laura and Max); Above the Law (Travis and Laura agreed to work together); Mutually Assured (Laura and Travis killed each other.); Just a Flesh Wound (Saved a friend from a werewolf infection.); Phlebotomy (Accepted the bite of a werewolf.); Last Man Standing (Ryan survived the night as the only survivor.); Family Matters (Killed every member of the Hackett family.); Blood Pact (Every playable character ended the night infected.); Bizzare Yet Bonafide (As Laura in Chapter 7, work out Travis's computer password from the birthday card and calendar upstairs, then listen to the 'Bizarre Yet Bonafide' podcast in his office.)."
            ]
        },
        {
            "heading": "Skill & Collectibles",
            "body": [
                "The skill feats (Interrupts, Don't Breathe, no-miss combat), the tarot card, clue and evidence collectibles, and starting a Movie Mode playthrough.",
                "The achievements here: Reactionist (Activated 15 Interrupts); You're Breathtaking! (Passed 5 Don't Breathe events); Peanut Butter Butterpops! (Never missed in a combat encounter); Hard Pass (Refused Eliza's help at every fortune-telling interlude (widely reported as bugged - it asks for more refusals than the game provides opportunities).); Decked Out (Found all Tarot cards); Forewarned is Forearmed (Got a Tarot reading); Meddling Kids! (Collected all clues); It's All Coming Together (Found a matching clue); What's This? (Collected first clue); Conspiracy Theorist (Collected all evidence); The Truth is Out There (Collected first piece of evidence); Creature Feature (Started a movie mode playthrough)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a blind first run and let the chapters, collectibles and skill feats accrue; note which characters you lost.",
                "2. Do an 'everyone lives' run for Rough Night and the survival-based outcomes (save from infection, individual survivors via chapter-select branching).",
                "3. Do an 'everyone dies' run for Hackett's Quarry Massacre, Family Matters, Blood Pact and the death-based outcomes.",
                "4. Use chapter select to pick up the isolated outcome achievements (Nick kills Abi, Laura/Travis kill each other, kill Silas) and the 'Bizarre Yet Bonafide' podcast in Chapter 7.",
                "5. Collect every tarot card, clue and piece of evidence across runs, and start a Movie Mode playthrough for Creature Feature.",
                "Tip: turn on the death/collectible chapter-select and a choices guide from the start - The Quarry's outcome achievements hinge on small QTE and dialogue picks many chapters apart, and blind guessing turns a 3-run platinum into a 6-run one."
            ]
        }
    ]
};
