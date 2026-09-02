// GTFO Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/gtfo.json), whose 57 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   493520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "gtfo-achievement-guide",
    "category": "game",
    "gameSlug": "gtfo",
    "icon": "🔦",
    "title": "GTFO Achievement Guide",
    "summary": "A practical guide to all 57 Steam achievements in GTFO (9 hidden). The 9 hidden achievements are the game's mystery secrets - dimension teleport, the Voice of Truth, the R5 logs, the R8 meltdown outcomes, and meeting Schaeffer. Sourced from the GTFO Wiki and community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "GTFO has 57 Steam achievements, 9 of them hidden. GTFO is a brutal four-player co-op stealth-horror shooter structured around 'Rundowns' of expeditions into an underground Complex. The visible achievements are sector and Rundown completions (Main, Secondary and Overload sectors across ALT://R1 through R8), a set of disciplined-clear challenges (no health kits, no tools, melee-only, undetected), specific enemy kills, and the story-log collectibles.",
                "The 9 hidden achievements are secrets tied to the game's mystery: teleporting to another dimension, hearing a Voice of Truth broadcast in R2E1, finding all backstory logs in ALT://R5, the two mutually-exclusive R8 meltdown outcomes (start it, or don't), coming face to face with Schaeffer, finding his bucket, and discovering his secret message.",
                "The catalog marks it difficulty 4 and single-playthrough. GTFO is co-op-focused and very hard - 'Sum Total' (every sector in every Rundown) is a huge commitment, and several challenges effectively need a coordinated team."
            ]
        },
        {
            "heading": "Rundowns & Sectors",
            "body": [
                "Completing a Main, Secondary and Overload sector, all Main sectors in each Rundown (ALT://R1 through R8), the R4-R8 'Absolute' full clears, and the Additional Duty / Overload Operative / Sum Total totals.",
                "The achievements here: Bare Minimum (Complete a Main Sector); Indirect Course (Complete a Secondary Sector); Beyond Range (Complete an Overload Sector); Deviation (Complete all Main Sectors in ALT://R1); Infection (Complete all Main Sectors in ALT://R2); The Vessel (Complete all Main Sectors in ALT://R3); Contact (Complete all Main Sectors in ALT://R4); Rebirth (Complete all Main Sectors in ALT://R5); Destination (Complete all Main Sectors in ALT://R6); Rise (Complete all Main Sectors in R7); Duality (Complete all Main Sectors in R8); Additional Duty (Complete all Secondary Sectors in all Rundowns); Overload Operative (Complete all Overload Sectors in all Rundowns); Sum Total (Complete all Sectors in all Rundowns); R4 Absolute (Complete all Sectors in ALT://R4); R5 Absolute (Complete all Sectors in ALT://R5); R6 Absolute (Complete all Sectors in ALT://R6); R7 Absolute (Complete all Sectors in R7); R8 Absolute (Complete all Sectors in R8); Main Path (Complete all Main Sectors)."
            ]
        },
        {
            "heading": "Expedition Challenges",
            "body": [
                "The disciplined-clear challenges - the tutorial, an undamaged clear, per-tier no-kit / no-tool / melee-only / stealth clears, Pure Will (R8D1 no health kits), Biotracker, and the Prisoner Efficiency milestones.",
                "The achievements here: Prisoner Deemed Fit (Complete the Tutorial); Invincible (Complete an expedition without getting downed); Chemically Improved (Complete an expedition with at least one Booster activated); Trigger Discipline (Complete any A-tier expedition without using main or secondary weapons); Controlled Response (Complete any B-tier expedition alone with only pistols or revolvers equipped as main and secondary); Low Tech (Complete any C-tier expedition without anyone using the active ability of their tools); Close Quarters (Complete any D-tier expedition with everyone using shotguns equipped as main and secondary); Detox (Complete any E-tier expedition without using any boosters); Breathing Room (Complete any D-tier expedition without any doors being broken); In the Shadows (Complete any B-tier expedition without anyone having turned on the flashlight); Work Together (Complete an expedition with four player without anyone getting downed); Pure Will (Complete R8D1 without using any health kits or disinfectants); Biotracker (Complete any expedition having marked every enemy on the map using the Biotracker); Prisoner Efficiency (Achieve Prisoner Efficiency by completing the Main, Overload and Secondary Sectors of an expedition in one attempt); Ultimate Efficiency (Achieve Prisoner Efficiency in all expeditions that have Secondary and Overload Sectors); Die Together (Fail an expedition for the first time)."
            ]
        },
        {
            "heading": "Enemy Kills & Story Logs",
            "body": [
                "The specific enemy kills (a melee Scout kill, a Mother before it summons, a solo melee Giant, a Tank, a Snatcher that has grabbed a teammate), the tripmine multi-kill, and finding 5 / 20 / 50 / all story logs in the Complex.",
                "The achievements here: Unbroken (Survive a class V or higher alarm without anyone taking any damage); Predator (Kill a Scout with a melee attack without it detecting you); Rapid Response (Kill a Mother without it having used its spawning ability); Swift (Kill a P-mother without taking any damage from baby strikers); Full Blooded (Kill a Giant by yourself using only melee weapons); Mutual Insurance (Kill a Tank without anyone on the team taking any damage); Guardian Angel (Kill a Snatcher that has captured a teammate); Demolitions Expert (Kill a total of 20 enemies with one tripmine); Theorist (Find 5 story logs in the Complex); Versed (Find 20 story logs in the Complex); Cataloger (Find 50 story logs in the Complex); D-Lock Block Decipherer (Find every story log in the Complex)."
            ]
        },
        {
            "heading": "Secrets",
            "body": [
                "The nine Steam-hidden mystery achievements - the dimension teleport, the 100km descent, Schaeffer's bucket, the Voice of Truth, the R5 backstory logs, the two R8 meltdown outcomes, meeting Schaeffer, and his secret message.",
                "The achievements here: Matter Wave Projector (Teleport to another dimension for the first time); The Inner (Descend a total of 100 kilometres into the Complex by elevator); John (Find Schaeffer's bucket); The Voice of Truth (Hear a Voice of Truth broadcast for the first time in R2E1); Unmasked (Find all the character backstory logs in ALT://R5); Loyalist (Start the nuclear meltdown in R8); Defector (Reach the end of R8 without starting the nuclear meltdown); Meet Schaeffer (Come face to face with Schaeffer); Dots and Dashes (Discover Schaeffer's secret message)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial, then work through each Rundown's Main sectors with a coordinated team of four.",
                "2. Pick up the disciplined-clear challenges (no kits, no tools, melee-only, undetected) on expeditions you already know well.",
                "3. Collect story logs as you go - they build toward the 50-log and all-log achievements and some secrets.",
                "4. Do the specific enemy-kill challenges - most need a deliberate set-up and a teammate's cooperation.",
                "5. Chase the secrets last: the R8 meltdown has two mutually-exclusive outcomes (you need two runs), and several require finding hidden objects or reaching specific rooms.",
                "Tip: GTFO's expeditions rotate in and out with Rundowns, but the ALT:// Rundowns are permanent - focus the sector-completion achievements on those so your progress can't be removed in an update."
            ]
        }
    ]
};
