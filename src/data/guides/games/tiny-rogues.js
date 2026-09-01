// Tiny Rogues Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/tiny-rogues.json), whose 86 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2088570 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "tiny-rogues-achievement-guide",
    "category": "game",
    "gameSlug": "tiny-rogues",
    "icon": "⚔",
    "title": "Tiny Rogues Achievement Guide",
    "summary": "A practical guide to all 86 Steam achievements in Tiny Rogues - none are hidden. None of the achievements are hidden. Covers clearing every floor of both worlds, defeating Death (and Primal Death) with a huge range of classes and restrictions, the Cinder difficulty ladder, the Mastery and Paragon levels, the alternate realms and Thrones, and a long list of build-specific challenge kills.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Tiny Rogues has 86 Steam achievements and none are hidden. The backbone is defeating the final boss, Death: first at all, then with 5 / 17 / every class, under 25 minutes, at 1 heart, with no Mastery Perks, and at Cinder 4 / 8 / 12 / 16. Around that are the floor-clear achievements for both worlds, the Mastery (10-30) and Paragon (25-50) level milestones, entering the Burning Hells, High Heavens and Shadow Planes (and their second levels) and ascending the three Thrones, the world objectives, and a big set of build-specific kills - 10 companions, 50 Intelligence / Strength / Dexterity, 500% crit damage, 10 different set bonuses, all 16 Doppelganger forms, and defeating the endgame bosses as the Super Hero at Cinder 14.",
                "The catalog marks it difficulty 5. It is a deep, hard roguelite - 'With or Without You' alone needs a Death kill with 17 different classes, the Cinder 16 kill is a serious skill wall, and many of the build achievements ('U Can't Touch This' - 50 Dexterity, 'Hit Me With Your Best Shot' - 500% crit damage) require you to understand the item and stat systems well. Expect a long completion.",
                "Tip: work through the class-specific Death kills naturally as you unlock and try each class - 'Don't You (Forget About Me)' (every class) and the 17-class milestone come together if you rotate classes each run instead of sticking to a favourite."
            ]
        },
        {
            "heading": "World 1 Floors & Death",
            "body": [
                "Clearing every floor of world 1, defeating Death, then Death with 5 / 17 classes, unlocking all classes, the Deprived 10-curse and sub-25-minute kills, Primal Death, and the Gunslinger kill.",
                "The achievements here: Born To Lose (Defeat all world 1 floor 1 bosses.); Master Of Puppets (Defeat all world 1 floor 2 bosses.); Welcome To The Jungle (Defeat all world 1 floor 3 bosses.); Thriller (Defeat all world 1 floor 4 bosses.); Have You Ever Seen The Rain (Defeat all world 1 floor 5 bosses.); Smoke On The Water (Defeat all world 1 floor 6 bosses.); Through The Fire And Flames (Defeat all world 1 floor 7 bosses.); Losing My Religion (Defeat all world 1 floor 8 bosses.); Down Under (Defeat all world 1 floor 9 bosses.); (Don't fear) The Reaper (Defeat Death.); For Whom The Bell Tolls (Defeat Death with 5 different classes.); We Are The Champions (Unlock all character classes.); Iron Man (Defeat Death as the Deprived while having at least 10 curse.); Thunderstruck (Defeat Death in under 25 minutes.); With or Without You (Defeat Death with 17 different classes.); Angel of Death (Defeat Primal Death.); House Of The Rising Sun (Defeat Death as the Gunslinger.)."
            ]
        },
        {
            "heading": "Challenges & Cinders",
            "body": [
                "Fully repairing the Broken Hero Sword, 500G to the pawn shop, the Doppelganger 10-form kill, a no-Mastery-Perks kill, defeating Death at Cinder 4 / 8 / 12 / 16, a Cinder sum streak of 32, using 50+ dice, and surviving Death at 1 heart.",
                "The achievements here: Holding Out For A Hero (Fully repair the Broken Hero Sword.); Money For Nothing (Sell a combined total worth of 500G to the pawn shop.); Where Is My Mind? (Defeat Death as the Doppelganger while having completed every floor with a different form. (10 Total Forms)); Stand On Your Own (Defeat Death without using any Mastery Perks.); No Easy Way Out (Defeat Death at Cinder 4.); The Heat Is On (Defeat Death at Cinder 8.); Danger Zone (Defeat Death at Cinder 12.); Edge Of Seventeen (Defeat Death at Cinder 16.); The Chain (Reach a Cinder sum streak of 32 or higher.); The Gambler (Use 50 or more dice.); I'm Still Standing (Survive a fight against Death at 1 heart or less.); A Secret Place (Find and uncover 3 secret rooms.)."
            ]
        },
        {
            "heading": "Progression & Realms",
            "body": [
                "Drinking from the flask, staying at the tavern, Mastery levels 10 / 20 / 30, Paragon levels 25 / 50, entering the Burning Hells, High Heavens and Shadow Planes, and ascending the Infernal, Celestial and Primordial Thrones.",
                "The achievements here: Drink (Take a sip from your health flask.); Hotel California (Stay over night at the tavern.); Running up that Hill (Level up to Mastery Level 10.); Can't Stop (Level up to Mastery Level 20.); It's My Life (Level up to Mastery Level 30.); In Too Deep (Level up to Paragon Level 25.); Maniac (Level up to Paragon Level 50.); Highway to Hell (Enter the Burning Hells.); Stairway to Heaven (Enter the High Heavens.); Dancing in the Dark (Enter the Shadow Planes.); Sympathy For The Devil (Ascend the Infernal Throne.); Paradise City (Ascend the Celestial Throne.); It’s a Long Way to the Top (Ascend the Primordial Throne.)."
            ]
        },
        {
            "heading": "Build Feats & World Objectives",
            "body": [
                "Death kills with 10 companions, a +7 weapon, every class, 10 Luck and a no-weapon run, opening a chest at +5 Magic Find, the second levels of the three realms, and completing all eight world objectives from 'Brave the Unknown' to 'The Pact'.",
                "The achievements here: With A Little Help From My Friends (Defeat Death while having at least 10 active companions at the same time.); Breaking the Law (Defeat Death with a weapon that has at least upgrade level 7.); Don't You (Forget About Me) (Defeat Death with every class.); Never Too Much (Defeat Death while having at least 10 Luck.); Material Girl (Open a Treasure Chest while having at least +5 Magic Find.); Take On Me (Progress to and defeat Death while never attacking an enemy with a weapon. (Tip: Turn off auto equip.)); Heaven Is a Place on Earth (Enter the High Heavens Level 2.); Total Eclipse of the Heart (Enter the Burning Hells Level 2.); Karma Chameleon (Enter the Shadow Planes Level 2.); Whats Up (Complete the world objective \"Brave the Unknown\".); Around the World (Complete the world objective \"A New Dawn\".); Here I Go Again (Complete the world objective \"Beyond Tomorrow\".); Bring Me to Life (Complete the world objective \"Echoes of the Forgotten\".); Back In Black (Complete the world objective \"The End\".); Knockin' On Heaven's Door (Complete the world objective \"Visions of Starlight\".); Hells Bells (Complete the world objective \"Whispers of Brimstone\".); Everybody Wants to Rule the World (Complete the world objective \"The Pact\".)."
            ]
        },
        {
            "heading": "World 2 Bosses & Endgame",
            "body": [
                "Clearing every floor of world 2, Death kills with 50 Intelligence / Strength / Dexterity, the Chaos six-trait run, 10 set bonuses, 10 hearts sacrificed, the booze / infusion / potion buff kills, 500% crit damage, 3 auras, 10 damaging effects in a second, all 16 Doppelganger forms, the Doppelganger 'All Star' kills, 20 blessings, and the three Super Hero Cinder-14 boss kills (Eden, Amon, Primal Death).",
                "The achievements here: Magical Mystery Tour (Defeat all world 2 floor 1 bosses.); T.N.T (Defeat all world 2 floor 2 bosses.); Maneater (Defeat all world 2 floor 3 bosses.); Toxicity (Defeat all world 2 floor 4 bosses.); The Trooper (Defeat all world 2 floor 5 bosses.); Another Brick in the Wall (Defeat all the world 2 floor 6 bosses.); Trapped Under Ice (Defeat all the world 2 floor 7 bosses.); War Pigs (Defeat all the world 2 floor 8 bosses.); Otherside (Defeat all the world 2 floor 9 bosses.); Gimme chocolate!! (Defeat Death while having at least 50 Intelligence.); Gonna Fly Now (Defeat Death while having at least 50 Strength.); U Can't Touch This (Defeat Death while having at least 50 Dexterity.); Crazy Train (Play as Chaos and have 2 strength traits, 2 dexterity traits and 2 intelligence traits.); Don't Stop Believin' (Activate a total of 10 different set bonuses.); If You Want Blood (You've Got It) (Sacrifice a total of 10 hearts.); Have a Drink on Me (Defeat Death while having at least 5 different booze buffs active.); The Bad Touch (Defeat Death while having at least 4 different infusion buffs active.); The Alchemist (Defeat Death while having at least 9 different potion buffs active.); Hit Me With Your Best Shot (Defeat Death while having over 500% critical hit damage.); Rainbow in the Dark (Defeat Death while having at least 3 auras.); Cherry Bomb (Trigger more than 10 damaging effects within 1 second.); Born To Be Wild (Unlock all 16 Doppelganger forms.); All Star (Defeat Eden, Amon and Primal Death as Doppelganger.); I'm a Believer (Receive at least 20 blessings from Shrines or Cursed Shrines. ); Livin' on a Prayer (Defeat Eden on at least Cinder 14 as the Super Hero.); You Give Love a Bad Name (Defeat Amon on at least Cinder 14 as the Super Hero.); Wanted Dead or Alive (Defeat Primal Death on at least Cinder 14 as the Super Hero.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Clear every floor of world 1 and defeat Death for the first time, rotating classes to build toward the 5 / 17 / all-class milestones.",
                "2. Climb the Cinder ladder to Cinder 16, and the Mastery and Paragon levels alongside it.",
                "3. Explore the alternate realms and ascend all three Thrones, then their second levels.",
                "4. Clear world 2's floors and complete all eight world objectives.",
                "5. Grind the build-specific Death kills (50 of each stat, crit damage, companions, buffs) and the Super Hero Cinder-14 fights.",
                "Tip: the buff-stacking achievements ('The Alchemist' - 9 potion buffs, 'Have a Drink on Me' - 5 booze buffs) are easiest on a dedicated low-Cinder run where you deliberately hoard consumables and pop them all right before the Death fight."
            ]
        }
    ]
};
