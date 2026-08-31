// Street Fighter V Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/street-fighter-5.json), whose 45 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   310950 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "street-fighter-5-achievement-guide",
    "category": "game",
    "gameSlug": "street-fighter-5",
    "icon": "🔥",
    "title": "Street Fighter V Achievement Guide",
    "summary": "A practical guide to all 45 Steam achievements in Street Fighter V - none are hidden. Covers the Story and single-player content, character and player levelling, the Network and Ranked match grinds, and the combat feats, replays and Survival mode.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Street Fighter V has 45 Steam achievements and none of them are hidden. The descriptions are in-character pep talks but each states the real requirement. The spine is single-player (finish the tutorial, clear Story Mode, the character trial challenges), a levelling block (raise characters and your player level, collect Titles), a large online block (Network Battles played, Ranked wins and win streaks, league promotions to Silver and Gold), and combat feats (EX and Critical Art finishes, V-Trigger and V-Reversal use, favouriting a character, watching replays, Training Mode time, and clearing Survival on normal, hard and extreme).",
                "Nothing is missable - every mode is replayable and all counters are cumulative. The longest are \"Ceaseless Effort\" (100 Ranked wins), \"Bam, Bam, Win!\" (300 wins), \"A Fiendish Trap\" (300 Network Battles) and \"Back From Hell\" (Survival on extreme).",
                "Tip: Survival on extreme is the hardest single achievement - use the mode's power-ups, a character with a strong reversal, and expect several attempts; everything else is time or straightforward."
            ]
        },
        {
            "heading": "Story, Tutorial & Character Levelling",
            "body": [
                "The tutorial, clearing Story Mode, the 16-trial challenge set, and raising characters - one to level 5, five to level 5, all characters, and one to level 30.",
                "The achievements here: The Never-Ending Path (\"Sweet! You got all the achievements! You're really somethin'. Isn't that right, Ryu?\" \"You have done well to reach the end of this one journey. The path to becoming a true fighter still lies ahead, but let us take time to share the joy of your accomplishment.\"); Mastering The Basics (Why don't you try finishing up the tutorial? You might've mastered the first step, but nailing down the fundamentals is what's important.); Your Story Starts Here (Your first goal for Story Mode is just to clear it once. You can probably guess, but I cleared it with Master Zangief first!); Lucky We Met! (Whoa, I'm really mixing it with the celebrities here! C'mon, Rashid, you're the Raging Storm! Get out there and finish 5 Character Stories!); The 16 Trials (So you wish to learn Yoga? If that is truly the case, then first you must complete the Character Story with all characters. There is great merit in walking each of their individual paths.); One Step Forward (If you're at a loss for what to do, why not raise a character to level 5? It should help you realize what you're missing.); Quantity Over Quality (Level up 5 characters! Up to level 5 should do the trick. When it comes to food and fightin', it's quantity over quality, mate.); No Rest For The Wicked (Your stats are as pitiful as your strength, maggot! Come back when you've raised all characters to level 5.); Slow But Steady Wins The Race (Your objective should be to raise a single character to level 30. There is great meaning in accomplishing what is difficult. To find your answer, you must set your sights high.)."
            ]
        },
        {
            "heading": "Player Level, Titles & Network Battles",
            "body": [
                "Raising your player level to 50, 100 and 200, collecting 10 titles, and fighting Network Battles - 10, 50, 300, and 30 with the standard settings.",
                "The achievements here: Vindicated Honor (Raise your player level to 50. Level up that much and you'll be about ready to exact you revenge.); Burning Spirit (Your player level is a reflection of your passion! Aim for the stars, and reach level 100!); Number 2 Is The New Number 1 (Niiihehe! 2, 20, 200! Such a glorious sound, I could say it twice more! 200! Raise you player level to 200! I already have, niiihehe!); Make A Name For Yourself (Why don't you see if you can collect 10 titles? There's nothin' like a good title! Even Mel said they make me look cool!); Sultan Of Titles (I am Rashid of the Turbulent Wind! You can change how you feel, just with a title! If you had 30 of them, you'd be set for the rest of your life!); Fighting On The Internet (Alright, time you fought 10 network battles! The Internet is like my backyard - not a place I tend to lose! (Excludes Battle Lounge)); All Going To Plan! (Master Zangief! I fought in 50 network battles! The ring came to life with the clash of burning spirits! (Excludes Battle Lounge)); A Fiendish Trap (Impossible! You fought in 300 network battles? Well then, the time for you to witness my Psycho Power draws near. Mwahaha! (Excludes Battle Lounge)); Waiting Is Half The Fun (Patience is key to any warrior's training. Fight in network battles 30 times using the standby function. The longer you wait, the greater the joy will be when you finally get picked.)."
            ]
        },
        {
            "heading": "Ranked Matches & Leagues",
            "body": [
                "First Ranked win, 10 / 30 / 100 / 300 Ranked wins, fighting a stronger opponent, a three-win streak, and promotions to your first league, Silver League and Golden League.",
                "The achievements here: I Know Kung Fu! (Congratulations on your first win! Keep practicing your Kung Fu in those Ranked Matches and I know you'll only get better and better!); Addicted To Winning (It seems you've won 10 Ranked Matches. Never forget how it feels to win, or your future will soon be eclipsed by defeat.); Working Up An Appetite! (30 Ranked Matches already? Lemme go catch up to that! Dinner always tastes better after you've pummeled a bunch of chumps!); Ceaseless Effort (Ah, your 100th Ranked Match victory. That look in your eyes tells me it was a fulfilling battle. Go forward one step at a time, and never forget this feeling.); Bam, Bam, Win! (Winning 300 matches will put the word out for Matsuda Jiu-Jitsu! It'll be like, \"the succesor or Matsuda Jiu-Jitsu, Laura Matsuda is right here!\"); Always Someone Stronger (Why not try fighting someone stronger than you in a Ranked Match? There's a lot you can gain from fighting stronger opponents. Beat 10 of 'em and you'll understand.); Savoring The Win Streak (Achieved three consecutive victories in Ranked Matches, have you? It appears you are getting a handle on your power. Maintain your modesty, and focus on your training; the path ahead is long.); First Promotion! (Master Zangief sent me flowers to celebrate me moving up a league for the first time! I can't read the card with all these tears!); Muscles Bring Victory! (Did you make it to Silver League?! Horosho! You have very good muscle! You can get much stronger from now!); Let's fight someone strong! (Finally, Golden League! There are so many potential rivals! Now the fun really begins!)."
            ]
        },
        {
            "heading": "Combat Feats, Replays & Survival",
            "body": [
                "EX Special and Critical Art finishes, V-Reversal and V-Trigger use, favouriting a character and setting a title, collecting and watching replays, adding a rival, the Capcom Fighters Network, 30 minutes in Training Mode, and clearing Survival on normal, hard and extreme, plus 1,000,000 FM and a costume unlock.",
                "The achievements here: Go Out With A Bang (\"Finishing with an EX Special Move sure feels good, old man!\" \"You finally understand then, young one? How about you try doing it 300 times?\" \"Wha?! You know how many years that'll take?!\"); Critical Beauty (300 Critical Art finishes... It would seem a crimson rose that blooms within an ugly heart can still be beautiful...); Not Over 'Til It's Over (When you get that feeling like \"I can't let it end like this!\", that's when you should use a V-Reversal. Practice it 100 times, and then you'll be able to pull it off in your sleep!); Enlightenment (There is a power that resides deep within you. If you wish to know what that power is, trigger a V-Skill 100 times. Do so, and that power will belong to you.); Sudden Reversal (You know, the V-Trigger is pretty handy for shifting the flow of battle. You'll know just how effective it is once you've triggered it 100 times.); Playing Favorites (You must set a character as your favorite! Can't decide who to choose? Niiihehehe! Well, you can't go wrong with Lord Bison!); All In A Name (You'll never stand out without an original title. Try choosing an appropriate title for me.); Failing To Prepare Is Preparing To Fail (Collect 30 replays, kid. Once you've done your prep and know your opponent's weaknesses, you'll be in control of the fight. Don't risk your life by rushing in blind.); See You In My Dreams! (Visualization is a crucial skill, so try watching 50 replays! I watched so many, I started seeing Master Zangief in my dreams!); Not-So-Secret Admirer (When someone sets their sights on you, don't you just wanna try even harder? Add someone to your Favorites and see what happens!); Global Network (I have the direct lines for all the world's leaders recorded in my pocketbook. You should have 30 names in your Favorites at the very least.); Bodybuilding Is Life (Go try out Training Mode for 30 minutes! \"Bodybuilding never let man down.\" I borrowed that one from Master Zangief!); Win Or Die Tryin' (It's about time you cleared Survival Mode on normal difficulty. You know what happens if you refuse, don't you? Let's just say the only way you live is if you keep on winning!); A True Warrior's Spirit (A warrior's soul is ri...ripened in Survival Mode. Emerge victorious on hard difficulty and you'll be ready for me to co...consume.); Back From Hell (Feel like taking the plunge into Survival Mode on extreme? Come back alive, and I'll grant you an audience with none other than me, the great Lord Bison!); Priceless (You managed to get 1,000,000 FM. That's pretty good! The real value, however, is in the path you walked to earn that much.); The outfit is the highlight of battle (The true creme de la creme know how to give spectators a good show. Now go and gain new colors for your outfit.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial and clear Story Mode, then work the character trial challenges.",
                "2. Grind character and player levels - play any mode and they rise steadily.",
                "3. Play Network and Ranked matches for the win, streak and league-promotion achievements.",
                "4. Knock out the combat feats (EX finish, Critical Art, V-Trigger, V-Reversal) and the replay and Training Mode goals.",
                "5. Clear Survival on normal and hard, then commit to a serious run at Survival extreme last.",
                "Tip: leave a match going in Training Mode while you are away to clear \"Bodybuilding Is Life\" (30 minutes) with no effort."
            ]
        }
    ]
};
