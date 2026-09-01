// Pentiment Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/pentiment.json), whose 41 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1205520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 7 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "pentiment-achievement-guide",
    "category": "game",
    "gameSlug": "pentiment",
    "icon": "📜",
    "title": "Pentiment Achievement Guide",
    "summary": "A practical guide to all 41 Steam achievements in Pentiment (7 hidden). Covers Andreas Maler's three investigations across 25 years in Tassing and Kiersau Abbey, the many optional conversations and side-quests, and both abbot-favour endings of Act I. Seven of the achievements are hidden - one for naming each suspect in the Act I and Act II murder cases - and because you can only make one accusation per act, they need save reloads; their conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Pentiment has 41 Steam achievements and 7 are hidden. The hidden ones are the accusations: in Act I you can name the Stonemason, the Nun, the Widow or the Prior as the killer, and in Act II you can name the Imposter, the Adulteress or the Embezzler - one achievement each. You only get to accuse one person per act, so the others need you to reload a save from just before the accusation. Everything visible is story progress (finishing each of the three acts), the two Act I endings (in or out of the abbot's favour), and a long list of optional conversations, mini-games and gags - spinning wool, the Lansquenet card game, examining flowers, petting animals, passing dialogue checks.",
                "The catalog marks it difficulty 2. Nothing here is hard to execute; the work is thoroughness. Many optional quests are gated behind specific dialogue skills, social classes chosen in the prologue, or talking to the right person on the right day, and the act structure means side content becomes permanently unavailable once you move on. A guide and a save before each accusation are all you need.",
                "Tip: make a manual save the moment Magdalene or Jacob Estler asks you to name the culprit - accuse one suspect, let the achievement pop, then reload that save and accuse the next, until you have all four (Act I) and all three (Act II)."
            ]
        },
        {
            "heading": "Act I: The First Murder",
            "body": [
                "Andreas's first investigation in 1518: naming the Stonemason, the Nun, the Widow or the Prior as the culprit, ending the act in or out of the abbot's favour, and the optional Act I work - the cellar, the grave, the gossip, Ottilia's home, Illuminata's French book, Ferenc's cipher, examining flowers - up to 'The Baron' for finishing Act I.",
                "The achievements here: The Stonemason (Act I: accuse the stonemason (Lucky) as the murderer when you name a culprit to Magdalene.); Smell the Roses (Examine 10 flowers.); The Nun (Act I: accuse the nun (Sister Matilda) as the murderer when you name a culprit.); The Widow (Act I: accuse the widow (Ottilia) as the murderer when you name a culprit.); The Prior (Act I: accuse the Prior (Ferenc) as the murderer when you name a culprit.); The Imposter (Act II: accuse the imposter (Brother Martin) as the culprit when Jacob Estler asks you to name one.); The Adulteress (Act II: accuse the adulteress (Hanna) as the culprit when you name one.); The Embezzler (Act II: accuse the embezzler (Guy the merchant) as the culprit when you name one.); Nosy Fella (Headbutt Werner.); Kiss Zdena (Seduce Zdena.); Quick Fingers (Spin wool as fast as the ladies.); Good Graces (End Act I in the abbot's favor.); Empty-headed (Have your hat stolen.); Andreas Non Grata (End Act I out of the abbot's favor.); The Root of the Problem (Get Wojslav to let you into the cellar.); Grave Matters (Convince Gernot to let you dig up the grave.); Hot Goss (Tell Jacob Estler immaterial gossip.); Legal Eagle (Convince Jacob Estler to save Ottilia's home.); Simple Soul (Convince Illuminata to give you the French book.); Like a Record Baby (Solve Ferenc's cipher with the volvelle.); The Baron (Finished Act 1.)."
            ]
        },
        {
            "heading": "Act II: A Death in the Abbey",
            "body": [
                "The investigation seven years later: naming the Imposter, the Adulteress or the Embezzler, winning or losing everything at the Lansquenet card table, the deer-hunt choice, and the optional Act II quests (Aedoc's medicine, Endris's sweetheart, the room complaint, doing penance) up to 'Vis Major' for finishing Act II.",
                "The achievements here: Should Have Seen the Other Guy (Get knocked out.); High Roller (Win everyone's money at Lansquenet.); Down to the Last Pfennig (Lose everything at Lansquenet.); Matchmaker (Convince Endris to find his sweetheart.); Room Service (Complain to Niko about your room.); Among Us (Discover the imposter.); The Cornish Patient (Get Aedoc his medicine.); The Penitent Man (Do your penance.); The Deer Hunter (Shoot the deer.); The Hand of Mercy (Refuse to shoot at the deer.); Vis Major (Finished Act 2.)."
            ]
        },
        {
            "heading": "Act III: The Reckoning",
            "body": [
                "The final act, decades later: cutting cookies for the Christmas feast, the mine shaft, the frog and cat mysteries, the secret library door, encouraging Paul to draw, petting five animals and passing five dialogue checks, up to 'Manu Propria' for completing Act III.",
                "The achievements here: Cookie Master (Cut enough cookies for everyone at the Christmas feast.); Look Before you Climb (Get assistance climbing down the mine shaft.); The Second Plague (Learn about Artemis and Apollo's frog plan.); A Fateful Sausage (Learn the mystery of the cats.); Manu Propria (Finished Act 3.); Cryptic Solutions (Find the secret door to library.); Good Influence (Encourage Paul to draw.); A Regular Saint Francis (Pet 5 animals.); Art of Persuasion (Pass 5 dialogue checks.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play Act I normally, doing as many optional conversations and side-quests as your prologue background and dialogue skills allow.",
                "2. Save before naming the Act I culprit, then accuse the Stonemason, the Nun, the Widow and the Prior in turn, reloading between each.",
                "3. Play Act II, do its side content and the Lansquenet card game (win everyone's money once, lose it all once), and make the deer-hunt choice.",
                "4. Save before the Act II accusation and get the Imposter, the Adulteress and the Embezzler with reloads.",
                "5. Play Act III and finish its short optional list (cookies, the mine shaft, the mysteries, the library door, five animals, five dialogue checks).",
                "Tip: pick different social backgrounds and university subjects in the prologue across your runs if you want to see everything - some optional quests and dialogue options only open up for certain skills, and no single Andreas can unlock every conversation."
            ]
        }
    ]
};
