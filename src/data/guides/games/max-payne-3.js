// Max Payne 3 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/max-payne-3.json), whose 67 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   204100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "max-payne-3-achievement-guide",
    "category": "game",
    "gameSlug": "max-payne-3",
    "icon": "💊",
    "title": "Max Payne 3 Achievement Guide",
    "summary": "A practical guide to all 67 Steam achievements in Max Payne 3 - none are hidden. Covers the difficulty completions and single-player set-piece and grind feats, the multiplayer, collectible and New York Minute achievements, and the achievements added by the DLC multiplayer map packs.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Max Payne 3 has 67 Steam achievements and none of them are hidden. The single-player half covers finishing the story on each difficulty (Medium, Hard, Hardcore, Old School), a long list of scripted set-piece feats (six kills diving through the VIP window, nine kills while pulled by a chain, ten Bullet Time kills in a row) done on Free Aim, and grinds - 300 headshots, 100 Shootdodge kills, use every weapon, take 100 painkillers, All Of The Above (finish every single-player grind), collect all Golden Guns. The other half is multiplayer: reach rank 50, win in each mode, Full Monty, plus a large block of feats tied to the DLC map packs (Local Justice, Hostage Negotiation, Deathmatch Made in Heaven, Painful Memories) and the Dead Men Walking co-op mode.",
                "The set-piece feats are missable per chapter but every level is replayable from the chapter select, so nothing is permanently lost. New York Minute Hardcore is the hardest single-player achievement - a no-checkpoint speed run of the whole game. The multiplayer and DLC achievements need active lobbies, so they are best done sooner rather than later.",
                "Tip: do a first relaxed playthrough on Medium collecting Golden Guns and Clues and ticking off the set-piece feats chapter by chapter with a video guide, then use chapter select on Old School for anything you missed before committing to the Hardcore and New York Minute Hardcore runs."
            ]
        },
        {
            "heading": "Story, Difficulty & Single-Player Feats",
            "body": [
                "Finishing the story on Medium, Hard, Hardcore and Old School, completing Parts I-III, the scripted Free Aim set-piece kill feats (the zipline bullet cam, the VIP window, the laser hallway, the boardroom models, the chain-pull and chain-dangle kills, the push cart, the rooftop tremors, the runway, the bus ride, the rickety boat), surviving a level with no painkillers, shooting 10 airborne grenades, 100 melee kills, using every weapon, taking 100 painkillers, All Of The Above, all Golden Guns, 300 headshots, 100 Shootdodge kills, and 30 kills in 2 minutes.",
                "The achievements here: Serious Payne (Story Complete [HARD]); Maximum Payne (Story Complete [OLD SCHOOL]); Feel The Payne (Story Complete [MEDIUM]); Payne In The Ass (Story Complete [HARDCORE]); You Might Hurt Someone With That (Shoot 10 Airborne Grenades); The Fear Of Losing It (Survive A Level Without Painkillers); You Play, You Pay, You Bastard (100 Kills With Melee ); Past The Point Of No Return  (Take 100 Painkillers); A Few Hundred Bullets Back (Use Every Weapon In The Game); Part I Complete (Complete Part I Of The Story); Part II Complete (Complete Part II Of The Story); Part III Complete (Complete Part III Of The Story); Along For The Ride (Trigger A Bullet Cam On The Zipline [FREE AIM]); Out The Window (Get 6 Kills While Diving Through The VIP Window [FREE AIM]); The One Eyed Man Is King (Cover Passos With Perfect Aim); That Old Familiar Feeling (Clear The Hallway Of Lasers); Amidst The Wreckage (Destroy All The Models In The Boardroom); So Much For Being Subtle (Get 9 Kills While Being Pulled By A Chain [FREE AIM]); The Only Choice Given (Get 8 Kills While Dangling From A Chain [FREE AIM]); It Was Chaos And Luck (Get 6 Kills While Riding The Push Cart [FREE AIM]); It's Fear That Gives Men Wings (10 Bullet Time® Kills In A Row ); Sometimes You Get Lucky (Get A Headshot During The Rooftop Tremors); The Road-Kill Behind Me (Total Everything On The Runway); Trouble Had Come To Me (Clear Everyone On The Bus Ride); Something Wicked This Way Comes (Get 7 Kills While Jumping From The Rickety Boat [FREE AIM]); All Of The Above (Finish All Single Player Grinds); A License To Kill (Collect All Golden Guns); One Bullet At A Time (300 Headshots); With Practiced Bravado (100 Kills During Shootdodge); Colder Than The Devil's Heart (Kill 30 Enemies In 2 Minutes)."
            ]
        },
        {
            "heading": "Multiplayer, Collectibles & New York Minute",
            "body": [
                "Finishing in a New York Minute and unlocking/completing New York Minute Hardcore, Full Monty, killing 100 other players, looting a body, winning a wager, a flawless Gang Wars victory, rank 50, a public Deathmatch win, unlocking all faction characters and all weapons, inviting someone via the contact list, killing friends-list players, not shooting the dis-armed man, finding all Clues, and discovering all tourist locations.",
                "The achievements here: A New York Minute (Finish In A New York Minute); Full Monty (Complete One Of Each Game Mode Including All Gang Wars); Payne Bringer (Kill 100 Other Players); Grave Robber  (Looted A Body); The Gambler (Won A Wager); Sweep (Flawless Team Gang Wars Victory); Training Complete (Achieve Level Rank 50); Deathmatch Challenge (Winner In Any Public Deathmatch); Man Of Many Faces (Unlock All Faction Characters); Man Of Many Weapons (Unlock All Weapons); Max Payne Invitational (Invite someone to play through the in-game contact list); The Shadows Rushed Me (Unlock And Complete New York Minute Hardcore); You Push A Man Too Far (Don't Shoot The Dis-Armed Man); An Echo Of The Past (Find All Clues); Sure Know How To Pick A Place (Discover All Tourist Locations); Dearest Of All My Friends (Kill Someone On Your Friends List)."
            ]
        },
        {
            "heading": "DLC Map Packs & Dead Men Walking",
            "body": [
                "The map-pack and co-op feats: the Departure Lounge Shootdodge double, the Imperial Palace quad-kill, 20 Vendetta wins, an M4 to level 10, 100 kills as the SPP, a prone 720 spin, the M24/IA2 double, a level-3 explosives triple, 60 Seconds of Intimidation, killing Max as the De Marcos, the Hoboken bar melee, a Hangover headshot, the Panama yacht kill, the sniper revenge, the pepper-spray triple-blind, the Bouncing Betty dodge and kill, 10 stun-weapon hits, opening 15 doors in Dead Men Walking, completing Challenge Mode, and a x4 Challenge Mode multiplier.",
                "The achievements here: Air Ace (Get 2 kills in a single Shootdodge in the Departure Lounge); Express Checkout (Kill 4 players within 3 seconds in the Imperial Palace); Long Arm of the Law (Win 20 Vendettas in the 55th Battalion HQ); M4 Murder (Level up your M4 Assault all the way to level 10); Keep Your Nose Clean (Get 100 Kills as a member of the SPP); Old School Moves (Perform a 720 spin while prone in Nightclub); Early Adopter (In a single game, kill the same player with both the M24 and the IA2 AR); WMD (Get 3 kills from a single use of the level 3 explosives burst); 60 Seconds of Intimidation (Grind 60 Seconds of Intimidation on enemy players); Long Arm of the Lawless (Kill Max Payne in Panama as the De Marcos); Bar Brawler (Kill someone with a melee strike in the Bar area of Hoboken Bar); Ouch My Head (Headshot someone with a Hangover); Welcome Ashore (Kill a player on the yacht from the observation platform of the Panama Canal); Drinker's Revenge (Kill the sniper who broke your Hip Flask in the same life); 3 Blind Mice (Blind 3 players simultaneously with the pepper spray); Sweaty Betty (Trigger and avoid a Bouncing Betty by Shootdodging); Betty Confetti (Kill a player with the Bouncing Betty); Resisting Arrest (Stun 10 players with either the cattle prod or stun gun); Breaking and Entering (Open 15 Containers or Doors in a single game of Dead Men Walking); It Looked Easy Enough (Complete the Challenge Mode); Breaking the 4th (Earn a x4 multiplier in Challenge Mode)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play through on Medium with a video guide, collecting Golden Guns and Clues and doing the scripted set-piece feats as each chapter comes up.",
                "2. Mop up any missed set-pieces and collectibles via chapter select, and grind the single-player counters (headshots, Shootdodge kills, painkillers, every weapon) toward All Of The Above.",
                "3. Do the multiplayer achievements while lobbies are healthy - rank 50, Full Monty, the mode wins, and the DLC map-pack feats.",
                "4. Do the Dead Men Walking co-op achievements and Challenge Mode.",
                "5. Finish with the hard difficulty runs: Old School, then Hardcore, then New York Minute Hardcore as a single no-death speed run.",
                "Tip: for New York Minute Hardcore, learn a fast route and lean on Bullet Time and Shootdodge to skip fights rather than clear them - every kill adds time, but you only need to survive and keep moving, so run past enemies wherever the level lets you."
            ]
        }
    ]
};
