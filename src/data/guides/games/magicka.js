// Magicka Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/magicka.json), whose 88 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   42910 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "magicka-achievement-guide",
    "category": "game",
    "gameSlug": "magicka",
    "icon": "🧙",
    "title": "Magicka Achievement Guide",
    "summary": "A practical guide to all 88 Steam achievements in Magicka - none are hidden. Covers the campaign boss kills, the spellcasting and combat feats, the Adventure-mode challenges, and the many DLC campaigns and scenarios (Vietnam, the Cruise, the Cthulhu content, the Elven Kingdom, and Dungeons & Gargoyles).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Magicka has 88 Steam achievements and none of them are hidden. The base game contributes the campaign boss kills (Ygg, Jormungandr, Jotunn, the Warlock and Machine, Vlad, Death, Fafnir, Assatur), a large block of spellcasting feats (use every basic element, all-Ice and Steam spells, 3- and 5-element spells, imbue a weapon, cross beams, deal 9000 damage), and combat and Adventure feats (a full-game side-quest clear, all secret areas, all Magicks, all the moose, an under-4-hour run, an only-Magicks level, 1000 overkills). The rest - roughly forty - come from the DLC: the Vietnam scenario, the Lonely Island Cruise, the Cthulhu content (R'lyeh, banishing 1000 mythos creatures), the Elven Kingdom, and the Dungeons & Gargoyles pack, each with its own difficulty and no-death runs.",
                "Nothing is missable - the campaign and every DLC scenario is replayable and all counters are cumulative. Magicka is chaotic co-op, so several feats are far easier (or only possible) with friends.",
                "Tip: play the base campaign with a friend for the boss kills and the survival feats, mopping up spellcasting achievements as you go, then do the DLC scenarios one at a time - many have a no-death or hard-difficulty run that needs a dedicated attempt."
            ]
        },
        {
            "heading": "Boss Kills",
            "body": [
                "Casting your first Magick, and defeating Behold, Ygg, Jormungandr, Jotunn, the Warlock and Machine, Khan, the Aristocrats, Vlad, Death, Fafnir and Assatur.",
                "The achievements here: Cooking by the book (Cast a Magick successfully.); An eye for an eye (Defeat Behold, the watcher); No more trolling (Defeat Ygg.); Solid Snake (Defeat Jormungandr.); There is no goat level  (Defeat Jotunn. ); Saved by the king  (Defeat the Warlock and Machine. ); KHAAAAAAAAN! (Defeat Khan ); 88mph  (Get thrown back in time by Vlad. ); More like the Aristocats  (Defeat the Aristocrats. ); Play it again, Vlad  (Defeat Vlad. ); Don't fear the reaper  (Defeat Death. ); Dragon \"Slayer\"  (Defeat Fafnir. ); I think Magicka is a pretty cool guy  (Defeat Assatur. )."
            ]
        },
        {
            "heading": "Spellcasting & Combat Feats",
            "body": [
                "Using every basic element, all-Ice and Steam spells, 3- and 5-element spells, imbuing a weapon, breaking free of entanglement, crossing beams, the side-quest clear, 9000 damage to one enemy, a friendly-fire beam kill, killing MacLeod, a cliff push, falling-damage death, gibbing 5 beastmen, and the teleport save.",
                "The achievements here: Basic Element  (Use all basic elements at least once. ); Vanilla Ice  (Create a spell containing only Ice. ); Let off some steam  (Create a spell containing Steam. ); State Alchemist  (Create a spell that contains at least 3 different elements. ); I'm the wizard king, I can do anything!  (Create a spell that contains 5 different elements. ); The Enchanter (Imbue your weapon with a spell. ); Houdini  (Break free from entanglement without using spells or magicks. ); IMMA FIRIN' MAH LAZER!!!!  (Successfully cross two beams into a more powerful one. ); RPG much?  (Complete all side quests in the game. ); It's over nine thousand!!!!  (Deal over 9000 damage to one enemy. ); Never cross the beams  (Cross opposite beams so that at least someone dies from it. ); There can be only one  (Kill MacLeod. ); Wingardium Leviosa  (Push someone off a cliff. ); \"Oh gravity, thou art a heartless bitch\"  (Die from falling damage. ); It's raining (beast)men  (Gib 5 beastmen in 5 seconds. ); 101st Airborne  (Jump off a cliff and save yourself by teleporting. ); First Blood  (Kill one enemy using the M60. ); This is Magicka!  (Push the soldier in battlefield down the hole. ); The perfect storm  (All players survived a thunderstorm. )."
            ]
        },
        {
            "heading": "Adventure Feats & Challenges",
            "body": [
                "Surviving a thunderbolt, the yellow-robes gags, the invisibility feat, 100,000 healing, stealing dead friends' gear, a 5-enemy Earth kill, a challenge-mode wave survival, a 50-enemy Vortex, an under-4-hour Adventure, the Gram Fafnir kill, all Magicks, all secret areas, a 20-enemy spell kill, an only-Magicks level, 1000 overkills, and finding all the moose.",
                "The achievements here: One in a million?  (Get struck by a thunderbolt and survive. ); OMG! They killed Yellow!  (Die with yellow robes. ); Blue… No Yelloooow!  (Have a hard time settling on a color. ); Better you than me  (Be invisible while one other player dies. ); Killing your friends, you're doing it wrong  (Heal a total of 100 000 hit points. ); Finders keepers  (Steal your friends equipment after he has died. ); Deep Impact  (Kill 5 enemies with a single Earth projectile. ); We are the champions  (Survive all waves of a challenge. ); I call it a Hawking Hole  (Make 50 enemies get sucked into the same Vortex. ); Mission improbable  (Complete Adventure in less than 4 hours. ); Stuff of legends  (Defeat Fafnir by striking him with Gram. ); I put on my robe and wizard hat  (Aquire all Magicks in adventure mode. ); Sherlock Holmes  (Find all secret areas in the game. ); MU-MU-MU-MULTIKILL!  (Kill 20 enemies with one spell or magick. ); Too fancy for fireballs?  (Complete one level using only magicks. ); Bad Taste  (Overkill 1000 enemies. ); King's Quest  (Find all the moose. )."
            ]
        },
        {
            "heading": "DLC Campaigns & Scenarios",
            "body": [
                "The DLC content - the Vietnam rescue mission, the Lonely Island Cruise, the Cthulhu scenario (R'lyeh, putting Cthulhu to sleep, 1000 mythos kills, the chapter no-death runs), the Elven Kingdom (the elven horses, the three Guardians), and the Dungeons & Gargoyles pack (the Wurstmacher, the onslaughts, the difficulty and no-death runs, the adventurer-defeat feats).",
                "The achievements here: Lead farmer (Kill 1000 enemies using firearms); Good Company (Accomplish all objectives in the Vietnam rescue mission); Nothing but a man, who can never fail (Win 20 versus matches in a row); Seven day cruise (Play one game per day on the Lonely Island Cruise for seven consecutive days.); Swedish Summer Achievement (Experience Rain and/or Blizzard 20 times during one Versus match to unlock a much needed treat.); No Power = No Responsibility (Defeat Parker.); From whence you came... (Get sucked into the portal to R'lyeh); Fhtagn once more! (Put great Cthulhu to sleep once more.); Banisher of horrors (Vanquish 1000 creatures of the Cthulhu mytos.); Breezed through (Complete Chapter 1 in one sitting without dying.); Handling the frustration (Complete Chapter 2 in one sitting without dying.); Driven mad (Complete Chapter 3 in one sitting without dying.); Ice Age (It's what killed the dinosaurs. Smash 100 frozen creatures to bits.); Friendship is Magicka (Find all the elven horses); Let Me In (Enter the house of Elwenhús); The Crusader Breakings (Defeat the first Guardian); A Bridge too Near (Defeat the second Guardian); Amarth Faeg! (Defeat the third Guardian); Interred with the Vampire (Finish The Other Side of the Coin); Hurt me plenty (Find and leave the brazier of Bizzlebob aflame.); Just a breeze of blue cheese (Finish the chapter without any player dying.); Hey, mach-arena! (Finish the chapter on hard difficulty without any player dying.); Not what they signed up for (Disrupt the service of 37 minions by the means of spinning saws.); Is that the wurst you can do? (Defeat the Wurstmacher.); Tenderized! (Finish the chapter on hard difficulty.); I don't believe in Orcs (Get to the Old Library without killing any Orcs.); Enduring the Tide (Survive the entire onslaught at the end of Courtyard.); Being the Tide (Survive the entire onslaught at the end of Courtyard on hard difficulty.); Don't mach such a mess (Defeat the Wurstmacher without destroying any spinning saws.); Wiped Out (Finish Dungeons & Gargoyles on normal difficulty.); Khan't we all just get along? (Finish Dungeons & Gargoyles on hard difficulty.); The postwizard (Read the entire letter from Meach in Dungeons & Gargoyles.); Ultra-Violence (Find and leave the radio of Bizzlepop in Dungeons & Gargoyles on.); Street smart (Finish Dungeons & Gargoyles without any player dying on normal difficulty.); City tour guide (Finish Dungeons & Gargoyles without any player dying on hard difficulty.); I don't believe in Trolls (Finish the bankrobbery encounter with all trolls still alive); The others were dwarfed by you (Defeat the adventurers in Dungeons & Gargoyles by defeating the Assassin last.); That was a fairy fight (Defeat the adventurers in Dungeons & Gargoyles by defeating the Champion last.); The clone wars (Defeat the adventurers in Dungeons & Gargoyles by defeating the Magician last.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the base campaign, ideally in co-op, for the boss kills and the survival feats.",
                "2. Knock out the spellcasting feats (every element, multi-element spells, beam crossing, weapon imbue) during that run.",
                "3. Do the Adventure-mode challenges - all secrets, all Magicks, all moose, the under-4-hour run, the only-Magicks level.",
                "4. Play the DLC scenarios one at a time: Vietnam, the Cruise, the Cthulhu content, the Elven Kingdom.",
                "5. Finish with Dungeons & Gargoyles and its hard-difficulty and no-death runs.",
                "Tip: the no-player-dies and hard-difficulty DLC achievements are the real gate - coordinate revives, use Ice-shield and heal spells liberally, and treat each as its own focused attempt."
            ]
        }
    ]
};
