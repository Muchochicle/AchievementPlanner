// RoboCop: Rogue City Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/robocop-rogue-city.json), whose 27 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1681430 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "robocop-rogue-city-achievement-guide",
    "category": "game",
    "gameSlug": "robocop-rogue-city",
    "icon": "🚔",
    "title": "RoboCop: Rogue City Achievement Guide",
    "summary": "A practical guide to all 27 Steam achievements in RoboCop: Rogue City - none are hidden. None of the achievements are hidden. Covers the story-quest completions from 'Breaking News' to the finale, the murder case with officers Kurtz and O'Neal, the three shooting-range scores, the Auto-9 upgrade and OCP skill-disk systems, and a set of trick-kill and secret-area challenges.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "RoboCop: Rogue City has 27 Steam achievements and none are hidden. Nine of them are the main story quests, completed in order from 'Breaking News' through 'No Way Out' to finishing the game on any difficulty. The rest are one-offs you can pick up as you play: a secret area in the Arcade, the hidden Auto-9 PCB in the Steel Mill, three shooting-range scores (150 / 200 / 250 points), an 'A' evaluation, a 3-enemy explosive kill, issuing a ticket, hacking a turret, the sub-10-minute Shady Meeting, equipping an Auto-9 chip, finding an OCP skill disk, fully developing a skill, saving a cat, and a handful of trick kills.",
                "The catalog marks it difficulty 3. Nothing here is hard, but a few of the one-offs are easy to walk past and some side content is chapter-restricted, so it is worth playing with a checklist. The three shooting-range scores and the 'A' evaluation are the only things that need a little deliberate effort.",
                "Tip: do the shooting range early and keep coming back to it - 250 points ('SuperCop') is a tight skill check, and practising it also sharpens the aim you need for the trick-kill achievements."
            ]
        },
        {
            "heading": "Trick Kills & Secrets",
            "body": [
                "The secret area in the Arcade, the hidden Auto-9 PCB in the Steel Mill, a sensitive-spot shot, shooting a moving motorcycle's gas tank, a throwable-object kill, the three shooting-range scores (150 / 200 / 250), and saving a cat from the Burning Hotel.",
                "The achievements here: No stone unturned (Find a secret area in the Arcade.); Zip This Up (Shoot an enemy in a sensitive spot.); Good eyes, Murphy! (Find a PCB for Auto-9 in a secret area of Steel Mill.); Live by the bike... (Shoot the gas tank of a moving motorcycle.); Strikeout! (Eliminate an enemy using a throwable object.); Dead-On (Score 150 points at the shooting range.); \"This Guy Is Really Good\" (Score 200 points at the shooting range.); SuperCop (Score 250 points at the shooting range.); A Real Hero (Save a cat from the Burning Hotel.)."
            ]
        },
        {
            "heading": "Evaluations, Skills & Gadgets",
            "body": [
                "Scoring an 'A' on an evaluation, a 3-enemy explosive kill, issuing a ticket, hacking an enemy turret, clearing a Shady Meeting in under 10 minutes, equipping the Auto-9's PCB with a chip, finding an OCP skill disk, and fully developing a skill branch.",
                "The achievements here: Officer of the month (Score \"A\" on any evaluation.); Nukem! (Eliminate 3 enemies with 1 explosive.); Uphold the Law (Issue a ticket.); May Be Used Against You (Hack an enemy turret.); There Can Only Be One (Destroy all UEDs during a Shady Meeting in under 10 minutes.); All Adds Up (Equip Auto-9's PCB with any chip.); I'd Buy That For a Dollar! (Find an OCP skill disk.); Practice Makes Perfect (Fully develop any skill.)."
            ]
        },
        {
            "heading": "Cases & Main Story",
            "body": [
                "Solving the murder case with officers Kurtz and O'Neal, and the nine main story quests in order - 'Breaking News', 'Soot's Final Encore', 'Street Vulture's Turf', 'Bank Heist', 'Ghosts from The Past', 'Wendell's Confession', 'The Man Himself', 'No Way Out' - up to completing the game on any difficulty.",
                "The achievements here: Hard Boiled (Help officers Kurtz and O'Neal solve a murder case.); Night Has Just Begun (Complete Breaking News quest.); Dead or Alive (Complete Soot's Final Encore quest.); Twenty Seconds to Comply (Complete Street Vulture's Turf quest.); Don't Mess With the Money! (Complete Bank Heist quest.); Book Him! (Complete Ghosts from The Past quest.); Let's Talk (Complete Wendell’s Confession quest.); Cashing Out (Complete The Man Himself quest.); Not Arresting You Anymore (Complete No Way Out quest.); \"Nice shooting, son\" (Complete the game on any difficulty level.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story straight through - the nine quest achievements and the finale unlock automatically.",
                "2. Visit the shooting range whenever you pass it and work up to 250 points.",
                "3. Pick up the missable one-offs as you go: the Arcade secret area, the Steel Mill PCB, the cat, an issued ticket, a hacked turret.",
                "4. Do the CSI murder case with Kurtz and O'Neal.",
                "5. Spend skill disks to fully max one skill branch, and equip an Auto-9 chip.",
                "Tip: 'There Can Only Be One' wants a Shady Meeting cleared in under 10 minutes - save beforehand, then rush the UEDs aggressively with the Auto-9 rather than playing it cautiously."
            ]
        }
    ]
};
