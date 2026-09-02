// Batman: Arkham Knight Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/batman-arkham-knight.json), whose 113 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   208650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 30 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "batman-arkham-knight-achievement-guide",
    "category": "game",
    "gameSlug": "batman-arkham-knight",
    "icon": "🦇",
    "title": "Batman: Arkham Knight Achievement Guide",
    "summary": "A practical guide to all 113 Steam achievements in Batman: Arkham Knight (30 hidden). The 30 hidden achievements are the main-story markers, a few Most Wanted completions, locking up the Riddler, and the ten Batgirl / Harley Quinn / Red Hood story-DLC achievements. Sourced from PlayStationTrophies, JustKillingTime and the Arkham Wiki.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Batman: Arkham Knight has 113 Steam achievements, 30 of them hidden. The finale of the Arkham series pits Batman against Scarecrow and the mysterious Arkham Knight across an evacuated Gotham, with the Batmobile as a central tool. The visible achievements are the Most Wanted side-mission chains (Two-Face's weapon caches, Firefly's fires, the militia watchtowers and checkpoints, the League of Assassins, the Mad Hatter, Man-Bat), combat, predator and Batmobile feats, the full Riddler challenge with all Riddler Trophies, and the large AR Challenge star grind.",
                "The 30 hidden achievements are the main-story markers (from 'A Battle Within' through 'Who Rules The Night' and the Knightfall Protocol), a handful of Most Wanted completions (Man-Bat's trials, Deacon Blackfire's cult, Firefly, the serial killer, Professor Pyg), 'Riddle Me That' for locking up the Riddler, and the ten story-DLC achievements from A Matter of Family (Batgirl), the Harley Quinn story pack, and the Red Hood story pack.",
                "The catalog marks it difficulty 4 and recommends 2 playthroughs: 'The Long Halloween' requires a New Story+ run, and 100% completion (which triggers 'Knightfall') needs every side mission, all 243 Riddler Trophies, and the AR Challenges finished."
            ]
        },
        {
            "heading": "Main Story",
            "body": [
                "The 12 Steam-hidden main-story markers (from 'A Battle Within' to 'Who Rules The Night' and the Knightfall Protocol) plus the non-hidden story beats - ACE Chemicals, the militia fortress assaults, the bank heists, the first supervillain lockup, and the Mr Freeze / Killer Croc / Deathstroke chains. Described spoiler-free.",
                "The achievements here: A Battle Within (Fight for your sanity - a main-story marker); A Heart Broken in Two (Secure the secret base - a main-story marker); As the Crow Flies (Escape from ACE Chemicals - a main-story marker); Be Not Afraid (Win the war for Gotham - a main-story marker); Brotherhood of the Fist (Return of the Dynamic Duo - a main-story marker); Dark Wings Fly Away in Fear (Learn what the Cloudburst is - a main-story marker); Fear of Success (Survive Scarecrow's ambush - a main-story marker); Knightfall (Initiate the Knightfall Protocol (requires 100% completion)); Master of Fear (Wayne vs Crane - complete the main story); Strange Deadfellows (Deploy the Cloudburst countermeasures - a main-story marker); The Long Halloween (Wayne vs Crane on New Story+ - complete the story a second time); Who Rules The Night (Batman vs the Arkham Knight - a main-story marker); City of Fear (Defend the assault on your ally's fortress); Creature of the Night (Freedom of the city); Cycle of Violence (Use 100 Quick Gadgets while in free flow combat); Fear of Faith (Rescue the ACE Chemical workers); Jekyll & Hyde (Stop the bank heist on Miagani Island and lock up the master mind in GCPD); Journey into Knight (Even The Odds); Living Hell (Interrogate the Militia APC Driver); No Man's Land (Restore power to the bridges of Gotham City); The Frequency of Fear (Scan Gotham City to pinpoint Scarecrow's location); Touch of Death (Apprehend the weapons dealer and lock him up in GCPD); Trail of Fear (Lock up your first Supervillain in GCPD); Two Faces of Fear! (Stop the bank heist on Bleake Island); Two Sides of the Same Coin! (Stop the bank heist on Founders' Island); Rough Justice (Stop Penguin's escape from GCPD); The Cat Came Back (Break into Riddler's secret hideout and exact your revenge); Succession Plans (Break into Hell's Gate HQ and apprehend Two-Face); Cold Case (Interrogate the Militia Lieutenant); Out in the Cold (Track down the cryopod); The Resurrection and the Life (Survive the Militia onslaught); The Beast Beneath (Defeat the prisoners); Breaking the Skin (Gain access to the high security area); Evolution (Lockup Killer Croc in GCPD)."
            ]
        },
        {
            "heading": "Most Wanted Side Missions",
            "body": [
                "The Most Wanted villain chains - Two-Face's weapon caches, Firefly's fires, the militia watchtowers, checkpoints, APCs and explosives, the League of Assassins and Ra's al Ghul, the Mad Hatter, Man-Bat, Professor Pyg, Deacon Blackfire and Prof. Pyg's operating theatre. Several completions are Steam-hidden.",
                "The achievements here: Angel in the Dark (Complete Man-Bat's trials and prove you are a worthy successor (Most Wanted)); Dark Allegiances (Apprehend Scarecrow's senior commander (Most Wanted: Occupy Gotham)); Days of Fire (Extinguish all the fires in Gotham City (Most Wanted: Firefly)); Double Jeopardy (Face off with an old friend - Deacon Blackfire's cult (Most Wanted)); The Monster Machine (Track down and apprehend the serial killer (Most Wanted: Professor Pyg)); Scar of the Bat (Cure the doctor (Most Wanted: The Perfect Crime)); The Cult (Save the sacrificial victim and lock up the executioner in GCPD (Most Wanted: The Line of Duty)); Beautiful Boy (Destroy the second weapons cache in Gotham City); Blind Love (Destroy the third weapons cache in Gotham City); Cold World (Destroy the first weapons cache in Gotham City); Practice Run (Destroy the fourth weapons cache in Gotham City); Death of Innocents (Rescue station 17 fire crew); Savage Metal (Smash 10 militia transport vehicles off the road without using the immobilizer); Gates of Gotham (Destroy all of the militia watchtowers); Gotham Underground (Defuse all of the militia explosive ordinance in Gotham City); Streets of Gotham (Destroy all of the militia checkpoints); The Road Home (Destroy all of the militia APC's); With a Vengeance! (Take on the heavy artillery reinforcements); The Demon Lives Again! (Follow the assassin's trail); Daughter Of The Demon! (Discover the Lazarus pit); Ashes to Ashes (End the League of Assassins' war); The Scene of the Crime (Rescue Mad Hatter's first hostage); Head Games (Rescue Mad Hatter's second hostage); In Storybook Endings (Lock up Mad Hatter in GCPD)."
            ]
        },
        {
            "heading": "The Riddler",
            "body": [
                "Obtaining each of the ten Riddler keys, the first Riddler race, and finally locking the Riddler up in GCPD (Steam-hidden) after collecting all 243 Riddler Trophies.",
                "The achievements here: Riddle Me That (Lock up the Riddler in GCPD (complete all Riddler challenges and races)); Death by Design (Obtain a key by completing the seventh Riddler trial); Lethal Pursuits (Obtain a key by completing the ninth Riddler trial); Nine Lives (Obtain a key by completing the last Riddler trial); Pieces of the Puzzle (Obtain a key by completing the second Riddler trial); Riddler on the Rampage (Obtain a key by completing the fourth Riddler trial); The Cat and the Bat (Obtain a key by completing the third Riddler trial); The Burning Question (Obtain a key by completing the fifth Riddler trial); The Primal Riddle (Obtain a key by completing the sixth Riddler trial); The Riddle Factory (Obtain a key by completing the eighth Riddler trial); The Road to Hell (Successfully complete the first Riddler trial)."
            ]
        },
        {
            "heading": "Combat, Predator & Batmobile Feats",
            "body": [
                "The combat and predator challenges (15 moves in one FreeFlow, every predator takedown type, 20 fear takedowns), the glide and jump feats, and the Batmobile challenges (drifting, perfect Vulcan shots, all five weapons in one tank battle, the rumble events).",
                "The achievements here: A Leap of Faith (Complete 8 different jumps over 100 meters); Blunt Trauma (Perform every type of predator takedown); Brutality 101 (Perform 15 different combat moves in one FreeFlow); Death and Glory (Perform 20 fear takedowns); Gotham After Midnight (Glide for 400 meters while less than 20 meters from the ground); Judgment Day (Win the rumble down under); Dirty Tricks (Achieve 3 minutes of drifting time in the Batmobile); Seduction of the Gun (Achieve 50 critical shots on light tanks); The Real Deal (Takedown 20 moving cars without using the Batmobile); Point of Impact (Perform 5 perfect shots in a row with the Vulcan Gun without taking damage); Run Through the Jungle (Fly under 3 main bridges between the islands in one continuous glide); Choice of Weapons (Use all five Batmobile weapons successfully in one tank battle)."
            ]
        },
        {
            "heading": "AR Challenges & the Iceberg Lounge",
            "body": [
                "The AR Challenge star milestones (23, 46, 69 stars), the character- and team-specific star sets, the individual Wayne Manor / Batcave / Silent Knight / Endless Knight / Crime Alley challenges, and the Iceberg Lounge combat map.",
                "The achievements here: Absolution (Achieve 69 Stars in AR Challenges); Fortunate Son (Achieve 46 Stars in AR Challenges); Sins of Youth (Achieve 23 Stars in AR Challenges); Street Demonz (Achieve 33 Stars in AR Challenges using the 1989 Movie Batmobile); Gangland Express (Achieve 33 Stars in AR Challenges using the 2008 Tumbler Batmobile); Joy Ride (Achieve 33 Stars in AR Challenges using the 1960's TV Series Batmobile); The World's Finest (Achieve 21 Stars in AR Challenges using the 2016 Batman v Superman Batmobile); The Big Leagues (Achieve 21 Stars in AR Challenges playing as Robin); Acts of Violence (Achieve 21 Stars in AR Challenges playing as Nightwing); Relentless (Achieve 21 Stars in AR Challenges playing as Catwoman); Shock and Awe (Achieve 21 Stars in AR Challenges playing as Azrael); Motherlode (Achieve 21 Stars in AR Challenges playing as Batgirl); Higher Learning (Achieve 21 Stars in AR Challenges playing as Red Hood); Vengeance Unlimited (Achieve 21 Stars in AR Challenges playing as Harley Quinn); Life After Death (Achieve 21 Stars in AR Challenges using the Original Arkham Batmobile); What the Butler Saw (Complete the Wayne Manor AR Challenge as Batman without using any gadgets or taking any damage); Secrets of the Batcave (Complete the Batcave AR Challenge unharmed as Batman and Nightwing, using only Beat Downs); Silent Night, Deadly Night (Complete the Silent Knight AR Challenge unharmed as Batman and Robin, using only Knockout Smashes); Eternal (Complete the Endless Knight AR Challenge, taking out 50 Enemies as Batman); The Chill in the Air (Complete the Crime Alley AR Challenge unharmed as Batman, Robin and Nightwing); The Curtain Falls (Flawless FreeFlow in every round of the Monarch Theatre as Batman, Robin, Nightwing and Catwoman); Requiem for a Killer (Defeat an old adversary in the Iceberg Lounge AR Challenge, playing as Batman)."
            ]
        },
        {
            "heading": "Story DLC (Batgirl, Harley Quinn, Red Hood)",
            "body": [
                "A Matter of Family (Batgirl) - the collectibles, the three hostage sets, the ambush and hacking thugs, the audio tapes and the Joker fight - plus the Harley Quinn story pack (defeat Nightwing) and the Red Hood story pack (defeat Black Mask). All Steam-hidden.",
                "The achievements here: A Blade of Memory (Destroy all the Teeth, Balloons and Jack-in-the-Boxes (Batgirl DLC: A Matter of Family)); A House Made of Spun Glass (Rescue the hostages at the merry-go-round (Batgirl DLC)); A Fire in the Heavens (Rescue the hostages at the Ferris wheel (Batgirl DLC)); The Laughing Fish! (Rescue the hostages on the ghost ship (Batgirl DLC)); A Courtship of Razors (Defeat the Joker in the Batgirl DLC 'A Matter of Family'); Ambush (Defeat the thug who ambushes you during a Scarecrow hack sequence (Batgirl DLC)); Weird War Tales (Defeat the hacking thug (Batgirl DLC)); All Snug in Their Beds (Find all the hidden audio tapes revealing the park's history (Batgirl DLC)); Cuckoo for Incarceration (Defeat Nightwing in the Harley Quinn story DLC); Under The Red Hood (Defeat Black Mask in the Red Hood story DLC)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story once for the twelve hidden markers, doing Most Wanted missions as they unlock (many feed into 100% completion).",
                "2. Finish every Most Wanted chain - Firefly, Two-Face, Man-Bat, Professor Pyg, Deacon Blackfire, the League of Assassins, the Mad Hatter, and the militia targets.",
                "3. Collect all 243 Riddler Trophies and win every Riddler race to lock him up for Riddle Me That, then trigger the Knightfall Protocol for 100%.",
                "4. Grind the AR Challenges to 69 stars and clear the character/team star sets and the individual named challenges.",
                "5. Run New Story+ for The Long Halloween, and play the Batgirl, Harley Quinn and Red Hood story DLCs.",
                "Tip: do not start the Knightfall Protocol until every other achievement is done - it plays the ending and completing 100% is what makes it available, so treat it as the very last thing you do."
            ]
        }
    ]
};
