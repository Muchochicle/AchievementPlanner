import { test } from "node:test";
import assert from "node:assert";

import { getPlannerData } from "../utils/plannerCatalog.js";

// backend/catalog/games/street-fighter-6.json - 43 real achievements sourced
// from a live ISteamUserStats/GetSchemaForGame/v2 response for appid
// 1364780 (fetched through this app's own services/steamApi.js). 2 achievement(s) are hidden and ship with no official
// description; those keep a curatorial description instead, and every
// other one is Steam's own real text.
// difficulty/estimatedTime/missable remain curatorial judgments.
const game = getPlannerData("street-fighter-6");

test("getPlannerData('street-fighter-6') returns real planner data with 43 curated achievements", () => {

    assert.ok(game, "expected real planner data for street-fighter-6");
    assert.ok(Array.isArray(game.achievements));
    assert.strictEqual(game.achievements.length, 43);

});

test("every Street Fighter 6 achievement has a unique id from 1 to 43 and a unique apiname", () => {

    const ids = game.achievements.map(a => a.id);
    const apinames = game.achievements.map(a => a.apiname);

    assert.deepStrictEqual([...ids].sort((a, b) => a - b), Array.from({ length: 43 }, (_, i) => i + 1));
    assert.strictEqual(new Set(ids).size, 43);
    assert.strictEqual(new Set(apinames).size, 43);

});

test("every Street Fighter 6 achievement has a valid difficulty (1-5), a positive estimatedTime, and non-empty name/description", () => {

    for (const achievement of game.achievements) {

        assert.ok(
            Number.isInteger(achievement.difficulty) && achievement.difficulty >= 1 && achievement.difficulty <= 5,
            `${achievement.name} has an out-of-range difficulty: ${achievement.difficulty}`
        );

        assert.ok(
            Number.isInteger(achievement.estimatedTime) && achievement.estimatedTime > 0,
            `${achievement.name} has an invalid estimatedTime: ${achievement.estimatedTime}`
        );

        assert.ok(achievement.name?.length > 0, "achievement is missing a name");
        assert.ok(achievement.description?.length > 0, `${achievement.name} is missing a description`);
        assert.ok(achievement.apiname?.length > 0, `${achievement.name} is missing an apiname`);

    }

});

test("every one of the 43 Street Fighter 6 achievement name+description pairs matches the catalog data", () => {

    const officialAchievements = [
        ["Actions Speak Louder", "Something in the way while you're walking through the city? Here's an easy solution: send it flyin' with a Master Action! Mm-mm-mmm... It's the little pleasures in life."],
        ["At Journey's End", "Finish the World Tour mode by completing its main story."],
        ["Becoming the Avatar", "In Avatar Battles, you can battle others as an avatar―a self outside of your self. Go there, and experience all that such combat has to offer."],
        ["Classic Leaderboard Champ", "Ever try the Ranking Challenge at the Game Center? Give it a shot! It's important to always challenge yourself, even when it comes to games."],
        ["Combat Analysis", "In combat, you must constantly analyze the situation. Spectate an Extreme Battle, and hone your ability to read and react to the unexpected."],
        ["Coolheaded Analysis", "Reviewing replay footage is a great way to learn from past fights. Watch with a calm, subjective eye, and you're bound to make some discoveries."],
        ["Dominating Like a Ninja", "Ninja can leap staircases in a single bound, but there's no skipping steps in training. Win 10 matches in a Tournament. It won't be easy, but you can do it."],
        ["Entranced by Battle", "Having an audience changes everything...and turns a mere fight into thrilling spectacle. Spectate a Battle Hub Match, and bear witness to glory."],
        ["Extreme Combat Training", "If you can't adapt, you won't last five seconds on the battlefield. Fight 20 Extreme Battles. Perfect training to sharpen your judgement."],
        ["Fashion Leader", "Clothing allows us to express ourselves. Know who else never changes their clothes? Animals. Change your outfit. Please."],
        ["Fighters' Codex", "Whoa, you seen these Character Guide things? Talk about rad! They've got all kinds of info about people's fighting styles and moves. Oh yeah, Bushinryu gets some rep too, naturally."],
        ["Fighting Fledgling", "You know how a swallow can fly at speeds of up to 200 kilometers an hour? Well, even they were chicks once. It's all about practice! Get yourself to Training Mode!"],
        ["First Encounters", "Start by fighting a match in the Battle Hub. It doesn't matter if you win or lose. What matters is challenging yourself to take that first step."],
        ["Fixin' for a Fight", "Nothing gets my engine revving more than a brawl between avatars, live and in the flesh! Let's see you do 20 Avatar Battles!"],
        ["Gazing at the Peak", "If you wanna match the one-and-only Jamie Siu, you'd better be early to the starting line. Give a Tournament a shot!"],
        ["Get Your Game Face On!", "Where's your face, dingus? Get your butt to the avatar creator and sort yourself out! Crying shame we can't fix that attitude of yours while we're at it."],
        ["Gotta Be Popular! Uwo!", "Uwo! My dream's to become famous, and make Mama proud! You should become famous too! Try sending or receiving 200 \"Nice!\" marks, for starters!"],
        ["Ha-dough-ken", "I've worked a few odd jobs during my travels, and they all helped me with my training. You should take up a part-time job during your World Tour, as well."],
        ["Joining the Pack", "A lone wolf is strong, but they're far more fearsome if they have a pack to call their own. So go on—try making some friends!"],
        ["Jungle-Sized Surprise", "Ever hear of Extreme Battles? They're a little different from regular fights—a little more WILD. Try it out, and let your instincts take over!"],
        ["Kickin' it Old School", "Did you know you can play classic games at the Battle Hub Game Center? It's true! Cassette tapes and cartridges might be old...but they're still hecka rad."],
        ["King of the Ring", "Starting to get used to competition? Then set your sights on winning 30 Battle Hub matches. Gotta give yourself a challenge if you want to get anywhere in life."],
        ["Leaving the Nest", "Complete the basic training that opens the World Tour mode."],
        ["Let the Praise Become Your Muscle", "Hrrah! To fight before a cheering crowd is an honor shared by all wrestlers! Go on—try earning yourself a \"Nice\" fan of your own!"],
        ["Mastery's Bond", "Once you find someone to call a master, you would do well to seek to deepen your bonds. Raise the bond with one of your masters to 100."],
        ["My Title, My Life", "Earned any titles for your efforts yet? Me? Pfft. I don't need a title. I'm Jamie freakin' Siu!"],
        ["Neighborhood Peacekeeper", "You gotta help people in need. I mean, that's the secret to keeping any city peaceful. So get out there and complete 22 sub-missions, got it?"],
        ["Over the Top Victory", "20 wins in Extreme Battle. Should be a snap for someone like you, yeah? Stomp this one flat, then aim for even greater heights! Bwahaha!"],
        ["Pleased to Meet You!", "I used to ask millions of questions as an agent. There's a lot you can learn from people just by talking to them—try chatting in the Battle Hub."],
        ["Practical Training", "You've heard of combo trials, I presume? It's time you practice attack sequences. I want you to finish 45 of them. It will be difficult, but I've the utmost faith in you."],
        ["Ready to Dance?", "Have you had a chance to jam out at the DJ Booth in the Battle Hub, bud? Pick your favorite tunes, and light the dance floor aflame!"],
        ["So This Is the Battle Hub...", "Ah, yes. Welcome to the Battle Hub. I do not know what you seek, but please, enjoy yourself. That is the purpose for which it was built, after all."],
        ["Spirits of Encouragement", "Having outside support is a bit like having a spirit. You can't see them, but they lend you strength all the same. Send or receive 600 \"Nice!\" marks, and you'll feel strong too."],
        ["Steely Determination", "The determination to stand in the ring and fight is what turns mind and muscle into tempered steel! Enter five Tournaments, and see for yourself!"],
        ["Taking Initiative", "You want to learn street fighting fundamentals? Well, too bad, 'cause I'm not in the mood to take on any students. Go hit the Tutorials, kid."],
        ["Tales of the Valiant", "Gonna need ya to head to the Fighting Ground and finish Arcade Mode once, buddy! It's time ya heard the stories of your fellow fighters!"],
        ["The Grand Jeté of 100 Battles", "Fight 100 online battles via Fighting Ground. What's that? Too difficult, you say? If you wish to take on the world, there can be no other path."],
        ["The Struggle Over Self", "An alternate form of combat, with an alternate path to victory. Get 20 wins in Avatar Battles. But don't obsess over the results. Let experience be your guide."],
        ["There's Always Time for Training!", "How's 30 matches in the Battle Hub sound? If yer not there yet, just keep at it! If ya wanna get sumo strong, ya can't be shy of the ring!"],
        ["Up on the Big Screen", "Sit down by the big monitor in the Battle Hub, and you can view all kinds of stuff. Man... Used to be me up there going wild on the big screen."],
        ["Veteran of Battle", "Kung fu is the result of ceaseless training. Do anything enough times, and you'll see results. So will you, once you fight in the Battle Hub 100 times."],
        ["Watching Gets Me PUMPED!", "Ah, there's nothing quite like a fight, one-on-one, in the flesh! If you wanna appreciate it too, go spectate an Avatar Battle!"],
        ["Welcome to the Stable", "Sounds like the Battle Hub has clubs you can join. Just like a sumo stable! You should join one! Ooh, I wonder if they have chanko stew..."],
    ];

    assert.strictEqual(officialAchievements.length, 43, "sanity check on this test's own reference list");

    const dataPairs = game.achievements
        .map(a => [a.name, a.description])
        .sort((a, b) => a[0].localeCompare(b[0]));

    assert.deepStrictEqual(dataPairs, [...officialAchievements].sort((a, b) => a[0].localeCompare(b[0])));

});
