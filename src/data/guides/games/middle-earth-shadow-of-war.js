// Shadow of War Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/middle-earth-shadow-of-war.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   356190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "middle-earth-shadow-of-war-achievement-guide",
    "category": "game",
    "gameSlug": "middle-earth-shadow-of-war",
    "icon": "👁",
    "title": "Shadow of War Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Shadow of War (11 hidden). Covers the Nemesis / war / gear achievements, the story and questline achievements, the Nemesis-system feats, and the DLC achievements. Eleven achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Middle-earth: Shadow of War has 72 Steam achievements and eleven are hidden - all story milestones: completing Act I ('What Once Was Lost'), the Shadow Wars endgame ('Peace in Death'), the Brûz questline ('First Steps' and 'Fall and Rise'), the Carnán quests ('Undeath Defeats Undeath'), reclaiming Minas Morgul ('Stalemate is Victory'), the Gondor and Eltariel quest completions ('For Gondor', 'Banish the Darkness'), and the boss defeats (Suladân, Helm Hammerhand, the Balrog). The rest are open: the gear and Gem forging goals, the war / siege / outpost mechanics, the Ithildin Doors and Shelob memories, a large Nemesis-system feat block, and the four DLC campaigns (Slaughter Tribe, Outlaw Tribe, Blade of Galadriel, Desolation of Mordor).",
                "The catalog marks it difficulty 4 and a long single playthrough - the Shadow Wars endgame is a lengthy series of fortress defences, and the DLC campaigns and 'Rough Rider' (ride every beast type) add many hours. Nothing is missable: quests, sieges and Nemesis missions all recur.",
                "Tip: push the main story to the Shadow Wars first - it unlocks the highest-tier Orcs and fortresses, which makes the Nemesis-system feat achievements (spies, overlords, bloodbrothers) far easier to set up."
            ]
        },
        {
            "heading": "Nemesis, War & Gear",
            "body": [
                "Forging a higher-quality and a top-tier Gem, unlocking 3 Gem slots, equipping 3 Siege Upgrades, a gear-upgrade challenge, defeating a Warchief, destroying a Monument, opening an Ithildin Door, an Online Vendetta and a Vendetta Mission, a fulfilled Death Threat, resurrecting a Follower Captain, and disabling an Outpost.",
                "The achievements here: Forger (Forge a higher-quality Gem by combining three Gems of the same quality.); Rule of Three (Unlock 3 Gem slots.); Best Defense (Equip 3 Siege Upgrades on an Assault Team.); Fit for War (Complete a challenge to upgrade a piece of gear.); Hostile Takeover (Defeat a Warchief.); Vandal (Destroy a Monument.); Speak Friend and Enter (Open one of the Ithildin Doors.); Bound by Blood (Complete an Online Vendetta.); Avenged (Complete a Vendetta Mission.); Master Forger (Forge a top tier Gem.); Promise Keeper (Issue a Death Threat, and then successfully kill the target.); Death is not the End (Resurrect a Follower Captain.); Dismantled (Disable an Outpost.)."
            ]
        },
        {
            "heading": "Story & Questlines",
            "body": [
                "The hidden boss defeats (Suladân, Helm Hammerhand, the Balrog), recovering all Gondorian artifacts, the final Shelob memory, and the hidden story/questline completions (Act I, the first and all Brûz quests, the Shadow Wars, the Carnán quests, Minas Morgul), plus winning all Fight Pit missions, unlocking all player skills, and purifying all the Haedir.",
                "The achievements here: Banished (Story: defeat Suladân.); Brought to Heel (Story: defeat Helm Hammerhand.); Lord of Horror (Story: defeat the Balrog (Tar Goroth).); Finished Tales (Recover all Gondorian artifacts.); The Web Revealed (Uncover the final Shelob memory and reveal the Web of Fate.); What Once Was Lost (Story: complete Act I.); First Steps (Complete the first Brûz quest.); Peace in Death (Complete the Shadow Wars endgame.); Undeath Defeats Undeath (Complete all Carnán quests.); Fall and Rise (Complete all Brûz quests.); No Orc Lives Forever (Win all Fight Pit missions.); Forged by War (Unlock all player skills.); Purge (Purify all the Haedir.); Stalemate is Victory (Story: defeat the Witch-king and reclaim Minas Morgul.)."
            ]
        },
        {
            "heading": "Nemesis-System Feats",
            "body": [
                "Turning all of a Warchief's bodyguards into spies, an Online Conquest Captain rank, rescuing a captured Follower, meeting someone who cheated death, an all-spy Conquest, Follower support in a Nemesis Mission, an enraged deranged Assassin, a Feast Destroyer Vendetta, dominating an Orc who killed you 3 times, watching a Follower kill a Captain, a region's Shadow of the Past missions, riding every beast type, the drake/graug and Olog kills, a grunt becoming an Overlord, a bloodbrother kill, the same Orc 3 times, baiting every beast, betraying a Follower, a full Legendary set, a Follower gang, a pit-fight Follower kill, and recruiting every Advanced Class.",
                "The achievements here: The Operative (Turn all of a Warchief's bodyguards (minimum 2) into spies, then confront him.); Such Great Heights (Reach the rank of Captain in Online Conquest.); No Orc Left Behind (Rescue a Follower who's been captured.); Better Luck Next Time (Meet an Enemy or a Follower who has cheated death.); It Came From Within (Start a Conquest with all Warchiefs as spies.); Power Couple (Send a Follower to support another Follower in a Nemesis Mission.); Everything is Permitted (Shame an Assassin until he becomes deranged.); Life of the Party\t (Send a Destroyer on a Vendetta Mission.); If You Can't Beat Them (Recruit an Orc after he's killed you three or more times.); I Like to Watch (Watch a Follower murder another Captain without helping him.); Second Age Warrior (Complete all Shadow of the Past missions in one region.); Rough Rider (Ride every type of beast and rare beast.); Wild Things (Kill a drake while riding a graug.); Trolling (Kill a Captain while riding an Olog.); Vertical Mobility (Help a grunt become an Overlord.); Blood on Blood (Make a Captain kill his bloodbrother.); Nemesis (Encounter the same Orc 3 times in nemesis missions without killing him.); Feed the Beasts (Attract every kind of beast using bait.); Bad Boss (Strike a Follower until he's had enough.); The Stuff of Legend (Equip a full Legendary Gear set as Talion.); Follower Perks (Use a Training Order to give a Follower a gang.); Overkill (Send a Follower to kill another Follower in a pit fight.); Headhunter (Recruit a Follower of every Advanced Class.)."
            ]
        },
        {
            "heading": "DLC Achievements",
            "body": [
                "The hidden 'For Gondor' and 'Banish the Darkness' quest completions, blinding 100 Orcs, and the Slaughter Tribe, Outlaw Tribe, Blade of Galadriel (Eltariel) and Desolation of Mordor (Baranor) DLC campaign achievements - the campaigns' finales, the online conquests, the Light Trap and Gold Rating feats, and the Númenórean artifacts.",
                "The achievements here: For Gondor (Complete all Gondor quests.); Banish the Darkness (Complete all Eltariel quests (the Blade of Galadriel content).); Flash Mob (Blind 100 Orcs.); Banished Ambition (Defeat the Rogue Nazgûl.); Scorched Earth (Deny Sauron’s control of Seregost forever.); Holding the Line (Defend Cirith Ungol from a new threat.); Problem Solved (Settle the Fixer’s score with the overlord of Núrn.); The Time has Come (Witness the end of Eltariel’s path.); Elven Conquest (Complete an Online Conquest with an Eltariel skin.); I See the Light (Use Light Trap against 20 Orcs.); Complete in Defeat (Defeat the Lawless.); Unlikely Alliances (Recruit your first follower as Eltariel.); No Way Out (Change the landscape of Lithlad.); Belly of the Beast (Leave your mark on the Overlord of Lithlad.); Festival of Blood (Save Serka.); Point of No Return (Defend the Oasis.); Reap What You Sow (Conquer the Fortress of Shindrâm as Baranor.); Baranor the Conqueror (Complete the Desolation of Mordor with a Gold Rating.); Gauntlet (Collect all Númenórean artifacts and bring them to Torvin.); Bombardier (Kill at least one enemy with each ammo type while gliding as Baranor.); Eastern Front (Conquer the Fortress of Shindrâm as Talion.); Shadows of the Sand (Achieve a Gold Rating on all Shadow of the Past missions in Lithlad.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story through Act I and the Minas Morgul, Suladân, Helm and Balrog fights.",
                "2. Do the Brûz, Carnán and Gondor questlines and the Ithildin Doors, Shelob memories and Gondorian artifacts.",
                "3. Push into and complete the Shadow Wars endgame.",
                "4. Grind the Nemesis-system feats (spies, overlords, bloodbrothers, beast riding) with the high-tier Orcs the endgame unlocks.",
                "5. Play the four DLC campaigns (Slaughter Tribe, Outlaw Tribe, Blade of Galadriel, Desolation of Mordor).",
                "Tip: 'Rough Rider' (ride every beast and rare beast type) is easy to leave one entry short - keep a checklist of caragors, graugs, drakes, ologs and their rare variants and mount each once."
            ]
        }
    ]
};
