// Street Fighter 6 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/street-fighter-6.json), whose 43 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1364780 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 2 achievement(s) are hidden and ship with no official
//   description on Steam; those keep their real name with a curatorial
//   (researched) description sourced from community achievement guides
//   (Steam Community 100% guides, TrueAchievements, PSNProfiles/
//   PlayStationTrophies, XboxAchievements, and the games' wikis), noted in
//   the Hidden Achievements section. Every other achievement's description
//   is Steam's own real text, quoted verbatim.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "street-fighter-6-achievement-guide",
    "category": "game",
    "gameSlug": "street-fighter-6",
    "icon": "🥊",
    "title": "Street Fighter 6 Achievement Guide",
    "summary": "A practical guide to all 43 Steam achievements in Street Fighter 6 - 2 are hidden. Covers the Battle Hub and its online modes (Extreme Battles, Avatar Battles, Tournaments), the World Tour single-player RPG mode, and the Fighting Ground staples (Arcade, combo trials, online matches, tutorials).",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Street Fighter 6 has 43 Steam achievements, 2 of which are hidden - and both hidden ones are just World Tour progress markers (finishing the opening basic training, and completing the main story). The visible list falls into three groups: the Battle Hub and its online playlists (Extreme Battles, Avatar Battles, Tournaments, plus spectating, clubs and the \"Nice!\" social system), the World Tour single-player mode (sub-missions, master bonds, part-time jobs), and the Fighting Ground essentials (Arcade Mode, combo trials, online matches, tutorials).",
                "Nothing is missable - every achievement is a cumulative counter or a one-off you can always go back for - but the list leans heavily online. Several achievements want dozens of Battle Hub, Extreme Battle or Avatar Battle matches and wins, 100 online Fighting Ground battles, and sending or receiving hundreds of \"Nice!\" marks, so the realistic path is a lot of time in matchmaking rather than a quick single-player clear.",
                "Tip: the achievement descriptions in Street Fighter 6 are written as in-character pep talks, but each one still states its real requirement - for example \"Fight 100 online battles via Fighting Ground\" or \"complete 22 sub-missions\" - so read past the flavour text for the actual number you need."
            ]
        },
        {
            "heading": "Battle Hub & Online Modes",
            "body": [
                "Everything centred on the Battle Hub: playing and winning Battle Hub matches (including 100 total), Extreme Battles and Avatar Battles, entering and winning Tournaments, spectating each match type, joining a club, the Game Center classic games and leaderboard, the \"Nice!\" fan/social milestones, chatting, replays, titles, friends, and the avatar/DJ-booth/big-screen touches.",
                "The achievements here: Get Your Game Face On! (Where's your face, dingus? Get your butt to the avatar creator and sort yourself out! Crying shame we can't fix that attitude of yours while we're at it.); So This Is the Battle Hub... (Ah, yes. Welcome to the Battle Hub. I do not know what you seek, but please, enjoy yourself. That is the purpose for which it was built, after all.); First Encounters (Start by fighting a match in the Battle Hub. It doesn't matter if you win or lose. What matters is challenging yourself to take that first step.); There's Always Time for Training! (How's 30 matches in the Battle Hub sound? If yer not there yet, just keep at it! If ya wanna get sumo strong, ya can't be shy of the ring!); King of the Ring (Starting to get used to competition? Then set your sights on winning 30 Battle Hub matches. Gotta give yourself a challenge if you want to get anywhere in life.); Jungle-Sized Surprise (Ever hear of Extreme Battles? They're a little different from regular fights—a little more WILD. Try it out, and let your instincts take over!); Extreme Combat Training (If you can't adapt, you won't last five seconds on the battlefield. Fight 20 Extreme Battles. Perfect training to sharpen your judgement.); Over the Top Victory (20 wins in Extreme Battle. Should be a snap for someone like you, yeah? Stomp this one flat, then aim for even greater heights! Bwahaha!); Becoming the Avatar (In Avatar Battles, you can battle others as an avatar―a self outside of your self. Go there, and experience all that such combat has to offer.); Fixin' for a Fight (Nothing gets my engine revving more than a brawl between avatars, live and in the flesh! Let's see you do 20 Avatar Battles!); The Struggle Over Self (An alternate form of combat, with an alternate path to victory. Get 20 wins in Avatar Battles. But don't obsess over the results. Let experience be your guide.); Gazing at the Peak (If you wanna match the one-and-only Jamie Siu, you'd better be early to the starting line. Give a Tournament a shot!); Steely Determination (The determination to stand in the ring and fight is what turns mind and muscle into tempered steel! Enter five Tournaments, and see for yourself!); Dominating Like a Ninja (Ninja can leap staircases in a single bound, but there's no skipping steps in training. Win 10 matches in a Tournament. It won't be easy, but you can do it.); Veteran of Battle (Kung fu is the result of ceaseless training. Do anything enough times, and you'll see results. So will you, once you fight in the Battle Hub 100 times.); Kickin' it Old School (Did you know you can play classic games at the Battle Hub Game Center? It's true! Cassette tapes and cartridges might be old...but they're still hecka rad.); Classic Leaderboard Champ (Ever try the Ranking Challenge at the Game Center? Give it a shot! It's important to always challenge yourself, even when it comes to games.); Entranced by Battle (Having an audience changes everything...and turns a mere fight into thrilling spectacle. Spectate a Battle Hub Match, and bear witness to glory.); Combat Analysis (In combat, you must constantly analyze the situation. Spectate an Extreme Battle, and hone your ability to read and react to the unexpected.); Watching Gets Me PUMPED! (Ah, there's nothing quite like a fight, one-on-one, in the flesh! If you wanna appreciate it too, go spectate an Avatar Battle!); Welcome to the Stable (Sounds like the Battle Hub has clubs you can join. Just like a sumo stable! You should join one! Ooh, I wonder if they have chanko stew...); Let the Praise Become Your Muscle (Hrrah! To fight before a cheering crowd is an honor shared by all wrestlers! Go on—try earning yourself a \"Nice\" fan of your own!); Gotta Be Popular! Uwo! (Uwo! My dream's to become famous, and make Mama proud! You should become famous too! Try sending or receiving 200 \"Nice!\" marks, for starters!); Spirits of Encouragement (Having outside support is a bit like having a spirit. You can't see them, but they lend you strength all the same. Send or receive 600 \"Nice!\" marks, and you'll feel strong too.); Pleased to Meet You! (I used to ask millions of questions as an agent. There's a lot you can learn from people just by talking to them—try chatting in the Battle Hub.); Coolheaded Analysis (Reviewing replay footage is a great way to learn from past fights. Watch with a calm, subjective eye, and you're bound to make some discoveries.); My Title, My Life (Earned any titles for your efforts yet? Me? Pfft. I don't need a title. I'm Jamie freakin' Siu!); Joining the Pack (A lone wolf is strong, but they're far more fearsome if they have a pack to call their own. So go on—try making some friends!); Fashion Leader (Clothing allows us to express ourselves. Know who else never changes their clothes? Animals. Change your outfit. Please.); Ready to Dance? (Have you had a chance to jam out at the DJ Booth in the Battle Hub, bud? Pick your favorite tunes, and light the dance floor aflame!); Up on the Big Screen (Sit down by the big monitor in the Battle Hub, and you can view all kinds of stuff. Man... Used to be me up there going wild on the big screen.)."
            ]
        },
        {
            "heading": "World Tour",
            "body": [
                "The World Tour single-player RPG mode: completing 22 sub-missions, raising your bond with a master to 100, taking a part-time job, and using a Master Action out in the city (the two story-completion markers are covered below under Hidden Achievements).",
                "The achievements here: Neighborhood Peacekeeper (You gotta help people in need. I mean, that's the secret to keeping any city peaceful. So get out there and complete 22 sub-missions, got it?); Mastery's Bond (Once you find someone to call a master, you would do well to seek to deepen your bonds. Raise the bond with one of your masters to 100.); Ha-dough-ken (I've worked a few odd jobs during my travels, and they all helped me with my training. You should take up a part-time job during your World Tour, as well.); Actions Speak Louder (Something in the way while you're walking through the city? Here's an easy solution: send it flyin' with a Master Action! Mm-mm-mmm... It's the little pleasures in life.)."
            ]
        },
        {
            "heading": "Fighting Ground & Training",
            "body": [
                "The core offline and competitive fundamentals: 100 online battles via the Fighting Ground, finishing Arcade Mode, completing 45 combo trials, entering Training Mode, reading a Character Guide, and working through the Tutorials.",
                "The achievements here: The Grand Jeté of 100 Battles (Fight 100 online battles via Fighting Ground. What's that? Too difficult, you say? If you wish to take on the world, there can be no other path.); Tales of the Valiant (Gonna need ya to head to the Fighting Ground and finish Arcade Mode once, buddy! It's time ya heard the stories of your fellow fighters!); Practical Training (You've heard of combo trials, I presume? It's time you practice attack sequences. I want you to finish 45 of them. It will be difficult, but I've the utmost faith in you.); Fighting Fledgling (You know how a swallow can fly at speeds of up to 200 kilometers an hour? Well, even they were chicks once. It's all about practice! Get yourself to Training Mode!); Fighters' Codex (Whoa, you seen these Character Guide things? Talk about rad! They've got all kinds of info about people's fighting styles and moves. Oh yeah, Bushinryu gets some rep too, naturally.); Taking Initiative (You want to learn street fighting fundamentals? Well, too bad, 'cause I'm not in the mood to take on any students. Go hit the Tutorials, kid.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Both hidden achievements are World Tour story markers. Leaving the Nest unlocks when you finish the mode's opening basic-training section, and At Journey's End unlocks when you complete the World Tour main story.",
                "The hidden achievements: At Journey's End (Finish the World Tour mode by completing its main story.); Leaving the Nest (Complete the basic training that opens the World Tour mode.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Start in World Tour: clear the basic training (Leaving the Nest), then play through its story while doing sub-missions, taking a part-time job, using Master Actions, and building a master bond to 100 - finishing the story gives you At Journey's End.",
                "2. Work through the Fighting Ground solo content: the Tutorials, a Character Guide, Training Mode, 45 combo trials, and one full Arcade Mode run.",
                "3. Move to the Battle Hub and settle in for the online grind: play and win Battle Hub matches toward the 100-match milestone, and rotate through Extreme Battles and Avatar Battles for their play-count and win-count achievements.",
                "4. Enter Tournaments (five total, with 10 match wins across them), spectate one of each match type, join a club, and try the Game Center classic games and Ranking Challenge.",
                "5. Keep the \"Nice!\" social achievements ticking in the background - send and receive marks as you play - and finish 100 online Fighting Ground battles.",
                "Tip: the \"Nice!\" mark achievements (200 and 600 sent or received) and the 100 online battles come naturally if you simply play online regularly and hand out \"Nice!\" marks after your matches, so there is no need to farm them separately once the rest of the list is done."
            ]
        }
    ]
};
