// MORDHAU Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/mordhau.json), whose 38 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   629760 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 1 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "mordhau-achievement-guide",
    "category": "game",
    "gameSlug": "mordhau",
    "icon": "⚔️",
    "title": "MORDHAU Achievement Guide",
    "summary": "A practical guide to all 38 Steam achievements in MORDHAU (1 hidden). Covers the weapon-specific kill achievements, the combat feats, and the mayhem and lifetime-milestone achievements. One achievement ('Ended Rightly') is Steam-hidden and researched from community guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "MORDHAU has 38 Steam achievements and one ('Ended Rightly', a pommel-throw kill) is Steam-hidden. The rest are open and almost all cumulative across multiplayer: weapon-specific kill counts (fists, kicks, bear trap, mallet, ballista, lute, carving knife, rocks, longsword, and the icicle and training-sword novelty kills), single-game combat feats (10-kill streak, 10 projectile headshots, deflecting a projectile with a strike, double kills, disarms, chambers, decapitations), and mayhem and lifetime milestones (killing after dying, ladder kills, 30 kills or 30 assists in a match, 1000 kills, 1000 assists).",
                "The catalog marks it difficulty 3 and mostly one long haul - almost everything ticks up while you play the normal modes. The fiddly ones are 'Ended Rightly' (the pommel throw), 'Whack-A-Mole' (couched headshots on horseback) and the 1000-kill / 1000-assist grinds.",
                "Tip: play Frontline and Invasion normally for the cumulative counts, and set up the weapon-novelty kills (icicle, training sword, lute, carving knife) on near-dead enemies or with a friend."
            ]
        },
        {
            "heading": "Weapon Kills",
            "body": [
                "The tutorial, then weapon-specific kills: 30 fist kills, 10 kick finishers, an icicle kill, 5 bear-trap kills, 5 mallet kills, a training-sword kill, the hidden 'Ended Rightly' pommel-throw kill, 20 ballista kills, 5 lute kills, 10 carving-knife kills, and 5 rock kills.",
                "The achievements here: The ABCs (Complete the tutorial); Boxer (Kill 30 enemies with fists); I Know Kung Fu (Finish off 10 enemies with a kick); That’s No Ordinary Cold (Kill an enemy with an icicle); Poacher (Kill 5 enemies with the bear trap); Clobbered (Kill 5 enemies with the mallet); Training Accident (Kill an enemy with the training sword); Ended Rightly (Kill an enemy with a pommel throw: equip a compatible weapon such as the Longsword, then tap X then 2 to unscrew the pommel and hurl it as a projectile. The throw is slow and weak, so land it on a bleeding-out or near-dead target (easiest against a friend).); Vlad the Impaler (Kill 20 enemies with the ballista); Virtuoso (Kill 5 enemies with the lute); Living Sculpture (Kill 10 enemies with the carving knife); Rock’n’Roll (Kill 5 enemies with rocks)."
            ]
        },
        {
            "heading": "Combat Feats",
            "body": [
                "20 longsword kills, a 10-kill streak, 10 projectile headshots in a game, regenerating from 1 health, deflecting a projectile with a strike, a melee double-kill, 10 fire kills, 5 couched horseback headshots, 20 disarms, blocking 1000 melee attacks and 100 projectiles, chambering 200 attacks, and 5 decapitations in a game.",
                "The achievements here: The Queen of Weapons (Kill 20 enemies with the longsword); Unstoppable (Kill 10 enemies in a row without dying); Eagle Eye (Land 10 headshots on enemies with projectiles in a single game); Lived to Tell the Tale (Regenerate to full health after getting down to 1 health); Home Run (Deflect a projectile with a strike); Guts (Kill two enemies with a single attack from a melee weapon); Pyromaniac (Kill 10 enemies with fire); Whack-A-Mole (Kill 5 enemies with headshots with a couched weapon on horseback); Put That Away (Perform 20 disarms); Tough Nut to Crack (Block 1000 melee attacks); Flyswatter (Block 100 projectiles); Chambermaid (Chamber 200 attacks); Highlander (Decapitate 5 enemies in a single game)."
            ]
        },
        {
            "heading": "Mayhem & Milestones",
            "body": [
                "Losing your head three times in a match, pulling a weapon from a living enemy, taking 400 damage without dying, 500 battlecries, killing after dying, 5 ladder kills, 30 assists and 30 kills in a match, 5 horse-trample kills, a kick-to-death fall, a burning-man kill, 1000 lifetime kills, and 1000 lifetime assists.",
                "The achievements here: Keeps Coming Off (Lose your head three times in a single match); Yoink (Take a melee weapon out of a living enemy’s body); Just a Scratch (Take 400 damage without dying); Crybaby (Battlecry 500 times); Justice from the Grave (Kill an enemy after dying); Stairway to Hell (Kill 5 enemies while climbing a ladder); You’re Welcome (Get 30 assists in a single match); Meat Grinder (Get 30 kills in a single match); Coming Through (Kill 5 enemies by trampling them with the horse); This isn’t Sparta (Cause someone to fall to their death after kicking them); Burning Man (Kill an enemy while you are on fire); Long List of Names (Kill 1000 enemies); Friend Indeed (Reach 1000 assists)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do the tutorial ('The ABCs').",
                "2. Play Frontline / Invasion normally - the longsword, fist, block, chamber, kill and assist counts all climb on their own.",
                "3. Carry the novelty weapons (lute, carving knife, mallet, training sword) and finish off low-health enemies with them.",
                "4. Set up 'Ended Rightly' (pommel throw), 'Whack-A-Mole' (couched horseback headshots) and 'That's No Ordinary Cold' (icicle) deliberately, ideally with a friend.",
                "5. Keep playing for the 1000-kill and 1000-assist milestones.",
                "Tip: a duel server or a friendly player makes every awkward weapon achievement trivial - have them use the perk that lets them run with missing limbs so they stay alive at low health while you line up the odd kill."
            ]
        }
    ]
};
