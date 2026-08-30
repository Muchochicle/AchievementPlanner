// SCP: Secret Laboratory Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/scp-secret-laboratory.json), whose 52 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   700330 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below.
// - With a list this large, sections are ordered chunks of the schema
//   with a short thematic intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "scp-secret-laboratory-achievement-guide",
    "category": "game",
    "gameSlug": "scp-secret-laboratory",
    "icon": "☣️",
    "title": "SCP: Secret Laboratory Achievement Guide",
    "summary": "A practical guide to all 52 Steam achievements in SCP: Secret Laboratory - none are hidden. Covers role-specific kills and feats across every faction (SCPs, MTF, Chaos Insurgency, Scientists, Class-D), team objectives, item-specific combat techniques, and special-event achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "SCP: Secret Laboratory has 52 Steam achievements and none are hidden. As a free multiplayer asymmetric horror game, almost every achievement is tied to one of the game's roles - specific SCP kills and feats (049, 096, 106, 173, 939, 079), Class-D and Scientist objectives (escaping, keycard upgrades, finding weapons), Chaos Insurgency and MTF combat feats, and general round-outcome achievements (surviving a warhead, canceling one, escaping the Pocket Dimension). A handful of item-specific achievements (SCP-018, SCP-268, SCP-330, SCP-500, SCP-1576, SCP-2176, Micro H.I.D., the Jailbird, the 3-X Particle Disruptor) round out the list.",
                "Nothing is missable - every achievement can be attempted again in any future round since SCP:SL rounds are short (10-20 minutes) and restart constantly on official servers. The list deliberately spans every role in the game, so the real requirement is playing a wide variety of roles across many rounds rather than mastering one character.",
                "Tip: SCP:SL assigns your role randomly each round (with some player choice via role preferences), so rather than farming a specific role, keep a mental list of which role-specific achievements you still need and play toward them whenever that role comes up - trying to force a specific role every round fights the game's own matchmaking."
            ]
        },
        {
            "heading": "SCP Roleplay Kills & Feats",
            "body": [
                "Role-specific feats for the game's anomalies and factions: curing ten people as SCP-049, killing SCP-096 while it enters rage, capturing a player within 5 seconds as SCP-106, evading SCP-173, respawning as Nine-Tailed Fox or Chaos Insurgency, escaping as Class-D, killing a keycard-holding Scientist as Class-D, and passing a Tesla gate while SCP-079 is watching.",
                "The achievements here: My Cure Is Most Effective... (As SCP-049, cure ten people in a single game.); Pacified (Kill SCP-096 while it’s entering rage.); Melancholy of Decay (As SCP-106, capture a player within five seconds of emerging from the ground.); Don’t Blink (Successfully evade SCP-173.); Lights Out (Respawn as Nine-Tailed Fox.); It's Always Left, Brothers! (Escape as Class-D personnel.); Access Granted (As Class-D, kill a Scientist holding a keycard.); We of Delta Command... (Respawn as Chaos Insurgency.); Proceed With Caution (Successfully pass through a Tesla gate that SCP-079 is monitoring.)."
            ]
        },
        {
            "heading": "Team Roles & Objectives",
            "body": [
                "Objective-based team play: upgrading a keycard as a Scientist alongside Class-D, escaping as a Scientist, broadcasting an Intercom message, a grenade kill, escaping the Pocket Dimension, 5 kills in under 30 seconds, obtaining a max-level keycard, killing the final SCP as MTF, surviving an Alpha Warhead detonation, disarming an MTF operative, and finding a gun as Class-D.",
                "The achievements here: Friendship (As a Scientist, successfully upgrade your keycard alongside any amount of Class-D.); For Science! (Escape as a Scientist.); Is This Thing On? (Broadcast a 'helpful' message via the Intercom.); Fire In The Hole! (Kill an enemy using a grenade.); He’ll Be Back... (Successfully escape from the Pocket Dimension.); Be Polite. Be Efficient. (Kill five enemies in less than 30 seconds.); Executive Access (Obtain a max-level keycard.); Secure. Contain. Protect. (As MTF, kill the final SCP in a round.); T-Minus 90 seconds... (Survive a successful Alpha Warhead Detonation.); Change in Command (Disarm an MTF operative.); ... You Thinking What I'm Thinking? (Find any gun as a Class-D.)."
            ]
        },
        {
            "heading": "Combat & Survival Feats",
            "body": [
                "A wide mix of combat and survival achievements: detaining or killing 50 Class-D as a Scientist, canceling the Alpha Warhead in its last 15 seconds, killing an SCP as a Scientist, surviving a low-health fall, an SCP getting a kill in the first minute, killing an SCP with the Micro H.I.D., the Halloween and Christmas event achievements, being first to escape, escaping under SCP-207's effects, using SCP-500 near death, surviving a lethal hit with adrenaline, punishing a charging or firing Micro H.I.D. user as an SCP, recharging the Micro H.I.D., liberating 2+ SCP objects while escaping as Class-D, and surviving a full round undying as a Facility Guard.",
                "The achievements here: They Are Just Resources... (Detain or kill 50 Class-D as a Scientist.); That was... close. (Cancel the Alpha Warhead detonation within the last 15 seconds of the countdown.); If you want something done right... (Kill an SCP as a Scientist.); Walk It Off (Survive a fall with less than half of your health remaining.); Anomalously Efficient (As an SCP, get a kill within the first minute of the game.); Microwave Meal (Kill an SCP with the Micro H.I.D.); Happy Halloween! (Play the Halloween version of the game.); Merry Christmas! (Play the Christmas version of the game.); Escape Artist (Be the first to escape the Facility.); High on the Wings of Caffeine (Escape while under the effects of SCP-207.); Crisis Averted (Use SCP-500 when you're about to die.); Ha! I didn't even feel that! (Use adrenaline to survive a hit that would otherwise kill you.); I'll Pass, Thanks (As an SCP, kill someone who's charging or firing the Micro H.I.D.); Overcurrent (Try to recharge the Micro H.I.D.); Property of the Chaos Insurgency (Liberate two or more SCP objects from the Facility, while escaping as a Class-D.); Overtime (Survive an entire round without dying as a Facility Guard.)."
            ]
        },
        {
            "heading": "Advanced Techniques & Special Items",
            "body": [
                "The deep-cut item and technique achievements: consuming 3 SCP-330 candies in one life, surviving as the last member of the winning team, 4 kills with 4 different weapons in one life, 3 LMG kills without releasing the trigger, radio contact between Chaos Insurgency and MTF, a kill right after canceling SCP-268, an Amnestic Cloud lunge kill as SCP-939, contacting the dead via SCP-1576, cutting SCP-079's connection with SCP-2176, revealing an SCP-268 user with SCP-1344, an SCP-018 kill, a 3-X Particle Disruptor triple kill in one life, a post-death grenade kill, a charged Jailbird kill on a 049-2 instance, a 25m+ Revolver headshot, and reaching a tier-three bond with SCP-127.",
                "The achievements here: Rule Breaker (Consume 3 candies from SCP-330 in a single life.); Complete the Mission (Complete a round as the last surviving member of the winning team.); Army of One (In a single life, get 4 kills using 4 different weapons.); LMGG (Using an LMG, get 3 kills without letting go of the trigger.); On Speaking Terms (As a Chaos Insurgent, use a radio to communicate with MTF.); Hats Off to You! (Get a kill immediately after canceling the effects of SCP-268.); Amnestic Ambush (As SCP-939, kill a player under the effects of your Amnestic Cloud using Lunge.); Afterlife Communicator (Contact the dead using SCP-1576.); Signal Lost (Cut SCP-079’s connection using SCP-2176.); Hawkeye (Reveal an enemy player under the effects of SCP-268 using SCP-1344.); Think Fast! (Kill a player using SCP-018.); Trilateral Termination (In a single life, kill three enemy players with the 3-X Particle Disruptor.); Mutually-Assured Destruction (Kill someone with a grenade after your death.); Undead Space Program (Kill an instance of 049-2 using a charged hit with the Jailbird.); Arizona Ranger (Get a headshot kill with a Revolver from over 25 meters away.); Tooth and Nail (Reach a tier three bond with SCP-127.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a wide mix of rounds and note which role you get each time, working toward the SCP-specific feats (049 cures, 096 rage-kill, 106 emerge-capture, 173 evasion, 939 amnestic lunge kill) whenever you land an SCP role.",
                "2. As Class-D, work toward escaping, finding a gun, killing a keycard-holding Scientist, and liberating SCP objects while escaping.",
                "3. As a Scientist, upgrade your keycard alongside Class-D, escape, kill an SCP, and detain or kill 50 Class-D over time.",
                "4. As MTF or Chaos Insurgency, work the warhead achievements (survive one, cancel one in the last 15 seconds), kill the final SCP, disarm an operative, and use the radio to talk to the other faction.",
                "5. Pick off the item-specific and general combat achievements as items and situations come up naturally: grenades, the Micro H.I.D., SCP-018/268/330/500/1576/2176, the Jailbird, the 3-X Particle Disruptor, a long-range Revolver headshot, and the two seasonal event achievements (Halloween, Christmas) when those events run.",
                "Tip: several achievements need coordination with your own team rather than just kills - upgrading a keycard with Class-D as a Scientist, surviving with at least one other player against drone-style threats, and radio contact between Chaos Insurgency and MTF all go faster if you communicate with teammates rather than playing solo."
            ]
        }
    ]
};
