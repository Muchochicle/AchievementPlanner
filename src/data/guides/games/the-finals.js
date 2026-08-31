// THE FINALS Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-finals.json), whose 50 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   2073850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 6 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-finals-achievement-guide",
    "category": "game",
    "gameSlug": "the-finals",
    "icon": "💸",
    "title": "THE FINALS Achievement Guide",
    "summary": "A practical guide to all 50 Steam achievements in THE FINALS (6 hidden). Covers the first-steps and progression achievements, the skill challenges, and the trick-shot and secret achievements. Six of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "THE FINALS has 50 Steam achievements and 6 are hidden. Twenty-two are first steps and progression - creating a contestant, the tutorial, playing rounds with each build, and long grinds like 50,000,000 total cash, 1,000,000 arena damage, and 150 wins with each build. Eighteen are skill challenges - clutch cashouts, zipline and fire eliminations, headshot conditions, and multi-kills. The last ten are trick-shot and 'funny' achievements, including six hidden ones like destroying the Seoul skybridge and bouncing a meteor off a Jump Pad.",
                "The catalog marks it difficulty 3. Nothing here is mechanically brutal, but the cash and win grinds are long, and 'Space Rock Skipper' needs the limited-time Meteor Showers event to be active.",
                "Tip: chip away at the challenge and trick-shot achievements during normal play, and keep an eye on the event rotation so you can knock out 'Space Rock Skipper' while Meteor Showers is live."
            ]
        },
        {
            "heading": "First Steps & Progression",
            "body": [
                "Creating a contestant, the tutorial, first cashout, first revive, playing rounds with Light, Medium and Heavy builds and in a Party, and the long progression grinds - 50,000,000 total cash, 1,000,000 arena damage, hundreds of weapon and gadget eliminations, 25,000 damage blocked and healed, and 150 wins with each build.",
                "The achievements here: Participation Ribbon (Create a contestant); Initial Deposit (Insert a cash box into a cashout station); Med Student (Revive a teammate); Returning Contestant (Play 3 rounds of Quick Cash); Green Light (Play 10 rounds with a Light Build); Mass Medium (Play 10 rounds with a Medium Build); Play The Heavy (Play 10 rounds with a Heavy Build); Rising Star (Play 3 Tournament rounds); Life Of The Party (Play 10 rounds in a Party); Savings Specialist (Obtain a total of 100,000 cash); Lesson Learner (Complete the Tutorial); Attending Physician (Revive teammates 50 times); Demolition Expert (Deal 1,000,000 damage to arenas); Dead Shot (Get 300 eliminations with Ranged Weapons); Strong Arm (Get 150 eliminations with Melee Weapons); Gadget Guru (Get 150 eliminations with Gadgets); Defense Devotee (Block a total of 25,000 damage); Resident Doctor (Heal teammates for a total of 25,000 health); Light Years (Win 150 rounds with a Light Build); Medium Rare (Win 150 rounds with a Medium Build); Heavy Hand (Win 150 rounds with a Heavy Build); Deep Pockets (Obtain a total of 50,000,000 cash)."
            ]
        },
        {
            "heading": "Challenges",
            "body": [
                "Winning a Tournament final, clutch cashout starts and steals, zipline and on-fire eliminations, grenade-on-Jump-Pad and explosive-carriable headshots, slide headshots, three-weapon and melee multi-kills, three first-place finishes in a row, 25 fire and 25 gas eliminations, and a last-bullet headshot.",
                "The achievements here: Show Stopper (Win the final round in Tournament or Ranked Tournament); Stop Payment (Eliminate an opponent while they are carrying a cash box, 5 times); Asset Protection (Eliminate an opponent trying to steal your cashout, 10 times); Last-minute Gift (Start a cashout with less than 10 seconds remaining in the match); Buzzer Beater (Steal a cashout with less than 10 seconds remaining in the match); Highway Patrol (Eliminate an opponent while you are riding a Zipline, 10 times); Hot Shot (Eliminate an opponent while you are on fire, 5 times in a single round); Just Like Scotty (Win a round in any mode without being eliminated); Bombouncer (Eliminate an opponent by bouncing a grenade on a Jump Pad); Pressure Prize (Hit an opponent in the head with an explosive carriable); Dodgeball Champion (Hit opponents with 3 different carriables within 15 seconds); Clip And Slide (Eliminate an opponent with a headshot while you are sliding); Multitasker (Eliminate 3 opponents with 3 different items or carriables within 10 seconds); Busy Body (Eliminate 3 opponents with a Melee Weapon within 10 seconds); Crowd Pleaser (Finish in first place, 3 times in a row); Pyro Prodigy (Eliminate 25 opponents with fire); Toxic Tact (Eliminate 25 opponents with gas); Golden Bullet (Get a headshot elimination with the last bullet in the magazine of your primary weapon)."
            ]
        },
        {
            "heading": "Trick Shots & Secrets",
            "body": [
                "Flowerpot, cash-box and 20-metre cash-box eliminations, a fast cashout after opening a vault, and the six hidden 'funny' achievements - emote kills, dying to your own grenade, destroying the Seoul skybridge, bouncing a meteor off a Jump Pad, and the mine-on-carriable throw.",
                "The achievements here: Fatal Florist (Eliminate an opponent with a flowerpot); Charitable Donation (Eliminate an opponent with a cash box); Field Goal (Throw a cash box into a cashout station from 20 meters away); Showboaster (Use an emote immediately after eliminating an opponent.); Butter Fingers (Get eliminated by your own grenade.); Sky Bridge Saboteur (Destroy the skybridge on the Seoul map.); Artful Expressionist (Eliminate an opponent while you are emoting.); Space Rock Skipper (Bounce a meteor off a Jump Pad during the limited-time Meteor Showers event.); Speed Run (Start a cashout within 15 seconds after opening a vault); Blast Caster (Place an explosive mine on a carriable, then get an elimination by throwing it at an opponent.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial and the first-steps achievements (a contestant, first cashout, first revive, rounds with each build).",
                "2. Play normally and let the progression grinds accrue - cash, arena damage, weapon/gadget eliminations, damage blocked and healed, wins per build.",
                "3. Work the skill challenges deliberately: clutch cashouts, zipline/fire kills, the headshot conditions, and the multi-kills.",
                "4. Knock out the trick shots (flowerpot, cash box, 20-metre throw) and the hidden emote and grenade achievements.",
                "5. Wait for the Meteor Showers event and bounce a meteor off a Jump Pad for 'Space Rock Skipper'.",
                "Tip: the 150-wins-per-build achievements come naturally if you rotate builds while grinding the other progression stats - don't force a single build the whole way."
            ]
        }
    ]
};
