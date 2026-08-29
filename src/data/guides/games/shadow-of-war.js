// Middle-earth: Shadow of War Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/shadow-of-war.json), whose 72 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   356190 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). 11 hidden achievements ship
//   no Steam description; their conditions here are curatorial (story
//   markers kept spoiler-light in the God of War house style), and
//   feat conditions cross-checked against community 100% guides.
// - Sections group achievements by roughly what part of the game they belong to.
export const GUIDE = {
    "slug": "shadow-of-war-achievement-guide",
    "category": "game",
    "gameSlug": "shadow-of-war",
    "icon": "⚔️",
    "title": "Middle-earth: Shadow of War Achievement Guide",
    "summary": "A practical guide to all 72 Steam achievements in Middle-earth: Shadow of War - gear, war & nemesis basics, followers, beasts & nemesis feats, slaughter tribe & dlc content, hidden achievements.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Middle-earth: Shadow of War has 72 Steam achievements, 11 of them hidden (three boss kills - Suladan, Helm Hammerhand, the Balrog - and eight story/region completions). The rest cover the gear and Gem systems, a large block of Nemesis-system feats, the beast content, and the Blade of Galadriel and Desolation of Mordor DLC campaigns.",
                "Nothing is missable and the Nemesis feats can all be engineered after the story. The long ones are a full Legendary gear set as Talion, recruiting every Advanced Class, and the two DLC campaigns.",
                "Tip: play the story and the Shadow Wars for the hidden achievements, then set up the Nemesis feats deliberately in the fortress regions. Do the two DLC campaigns last."
            ]
        },
        {
            "heading": "Gear, War & Nemesis Basics",
            "body": [
                "The systems basics: forging and slotting Gems, equipping Siege Upgrades, upgrading gear via challenges, defeating a Warchief, destroying a Monument, opening an Ithildin Door, the online and offline Vendetta missions, disabling an Outpost, recovering the Gondorian artifacts, uncovering the final Shelob memory, and purifying the Haedir.",
                "The achievements here: Forger (Forge a higher-quality Gem by combining three Gems of the same quality.); Rule of Three (Unlock 3 Gem slots.); Best Defense (Equip 3 Siege Upgrades on an Assault Team.); Fit for War (Complete a challenge to upgrade a piece of gear.); Hostile Takeover (Defeat a Warchief.); Vandal (Destroy a Monument.); Speak Friend and Enter (Open one of the Ithildin Doors.); Bound by Blood (Complete an Online Vendetta.); Avenged (Complete a Vendetta Mission.); Master Forger (Forge a top tier Gem.); Promise Keeper (Issue a Death Threat, and then successfully kill the target.); Death is not the End (Resurrect a Follower Captain.); Dismantled (Disable an Outpost.); Finished Tales (Recover all Gondorian artifacts.); The Web Revealed (Uncover the final Shelob memory and reveal the Web of Fate.); No Orc Lives Forever (Win all Fight Pit missions.); Forged by War (Unlock all player skills.); Purge (Purify all the Haedir.)."
            ]
        },
        {
            "heading": "Followers, Beasts & Nemesis Feats",
            "body": [
                "The deeper Nemesis feats: turning a Warchief's bodyguards into spies, the Online Conquest ranks, rescuing and resurrecting Followers, meeting a death-cheater, shaming an assassin deranged, the beast-riding and beast-kill feats, helping a grunt become an Overlord, the bloodbrother and Follower-vs-Follower feats, a full Legendary gear set, and recruiting a Follower of every Advanced Class.",
                "The achievements here: The Operative (Turn all of a Warchief's bodyguards (minimum 2) into spies, then confront him.); Such Great Heights (Reach the rank of Captain in Online Conquest.); No Orc Left Behind (Rescue a Follower who's been captured.); Better Luck Next Time (Meet an Enemy or a Follower who has cheated death.); It Came From Within (Start a Conquest with all Warchiefs as spies.); Power Couple (Send a Follower to support another Follower in a Nemesis Mission.); Everything is Permitted (Shame an Assassin until he becomes deranged.); Life of the Party\t (Send a Destroyer on a Vendetta Mission.); If You Can't Beat Them (Recruit an Orc after he's killed you three or more times.); I Like to Watch (Watch a Follower murder another Captain without helping him.); Second Age Warrior (Complete all Shadow of the Past missions in one region.); Rough Rider (Ride every type of beast and rare beast.); Wild Things (Kill a drake while riding a graug.); Trolling (Kill a Captain while riding an Olog.); Vertical Mobility (Help a grunt become an Overlord.); Blood on Blood (Make a Captain kill his bloodbrother.); Nemesis (Encounter the same Orc 3 times in nemesis missions without killing him.); Feed the Beasts (Attract every kind of beast using bait.); Bad Boss (Strike a Follower until he's had enough.); The Stuff of Legend (Equip a full Legendary Gear set as Talion.); Follower Perks (Use a Training Order to give a Follower a gang.); Overkill (Send a Follower to kill another Follower in a pit fight.); Headhunter (Recruit a Follower of every Advanced Class.); Flash Mob (Blind 100 Orcs.)."
            ]
        },
        {
            "heading": "Slaughter Tribe & DLC Content",
            "body": [
                "The DLC blocks: blinding 100 Orcs, the Blade of Galadriel campaign (Eltariel's path, the Rogue Nazgul, Seregost, Cirith Ungol, the Light Trap feats) and the Desolation of Mordor campaign (Baranor - Lithlad, the Fortress of Shindram as Baranor and as Talion, the Numenorean artifacts, the aerial-kill and Gold-rating feats).",
                "The achievements here: Banished Ambition (Defeat the Rogue Nazgûl.); Scorched Earth (Deny Sauron’s control of Seregost forever.); Holding the Line (Defend Cirith Ungol from a new threat.); Problem Solved (Settle the Fixer’s score with the overlord of Núrn.); The Time has Come (Witness the end of Eltariel’s path.); Elven Conquest (Complete an Online Conquest with an Eltariel skin.); I See the Light (Use Light Trap against 20 Orcs.); Complete in Defeat (Defeat the Lawless.); Unlikely Alliances (Recruit your first follower as Eltariel.); No Way Out (Change the landscape of Lithlad.); Belly of the Beast (Leave your mark on the Overlord of Lithlad.); Festival of Blood (Save Serka.); Point of No Return (Defend the Oasis.); Reap What You Sow (Conquer the Fortress of Shindrâm as Baranor.); Baranor the Conqueror (Complete the Desolation of Mordor with a Gold Rating.); Gauntlet (Collect all Númenórean artifacts and bring them to Torvin.); Bombardier (Kill at least one enemy with each ammo type while gliding as Baranor.); Eastern Front (Conquer the Fortress of Shindrâm as Talion.); Shadows of the Sand (Achieve a Gold Rating on all Shadow of the Past missions in Lithlad.)."
            ]
        },
        {
            "heading": "Hidden Achievements",
            "body": [
                "Some achievements are hidden - all are story markers or one-off feats:",
                "The achievements here: Banished (Defeat Suladan.); Brought to Heel (Defeat Helm Hammerhand.); Lord of Horror (Defeat the Balrog.); What Once Was Lost (Complete Act I of the story.); First Steps (Complete the first stage of Ratbag's questline.); Peace in Death (Complete the Shadow Wars (the epilogue).); Undeath Defeats Undeath (Complete Carnan's questline.); Fall and Rise (Complete Ratbag's questline.); Stalemate is Victory (Reach a story marker in Minas Morgul (story achievement, no plot detail).); For Gondor (Complete the Minas Ithil / Gondor region storyline.); Banish the Darkness (Complete the Blade of Galadriel DLC.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the main story and then the Shadow Wars epilogue for the hidden achievements (the three boss kills come along the way).",
                "2. Work the gear and Gem systems and the map goals (Ithildin Doors, Monuments, Haedir, Gondorian artifacts, Shelob memories).",
                "3. Engineer the Nemesis feats in the fortress regions - spies, bloodbrothers, Follower-vs-Follower, the beast-riding kills, a full Legendary set.",
                "4. Play Blade of Galadriel and Desolation of Mordor.",
                "Tip: Everything is Permitted (shame an assassin until he becomes deranged) needs repeated shaming of the same Orc between encounters - find a low-level assassin Captain and shame him every time he reappears until his personality breaks."
            ]
        }
    ]
};
