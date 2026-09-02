// Trepang2 Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/trepang2.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1164940 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 9 achievement(s) are Steam-hidden or ship no Steam
//   description; their description here is researched from community
//   100% guides and is a curatorial summary. Every other description is
//   Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "trepang2-achievement-guide",
    "category": "game",
    "gameSlug": "trepang2",
    "icon": "🩸",
    "title": "Trepang2 Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in Trepang2 (9 hidden). The 9 hidden achievements are two secret-ending markers, four secret boss kills, a story-completion marker, and two Syndicate coin collectibles. Sourced from the Steam Community 100% guide.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Trepang2 has 49 Steam achievements, 9 of them hidden. Trepang2 is a fast, brutal first-person shooter about escaped test subject 106. The visible achievements are the campaign and side-mission level completions, the four difficulty clears (Hard, Very Hard, Extreme, Ragdoll), intel-document and weapon-part collection, and a long list of stylish-kill combat feats (grabs, throws, headshots, executions, environmental kills).",
                "The 9 hidden achievements are two secret-ending markers ('The Truth' and 'One Last Mission'), four secret boss and cult-leader kills (Dr. Emerson's corpse, the Mothman, the Patriarch, the Horizon CEO), a story-completion marker ('CVI'), and two Syndicate coin collectibles ('CV' and 'XCV').",
                "The catalog marks it difficulty 3 and recommends 2 playthroughs - the four difficulty clears cover the campaign and side missions, and the secret ending requires finding all the drones on a dedicated run."
            ]
        },
        {
            "heading": "Campaign, Levels & Difficulty",
            "body": [
                "The campaign chapter completions ('Break The Cycle' for finishing the story), the side-mission level completions (Gunnarson Complex, Kellington Colliery, the Oil Rig, the Iron Dragon Data Center, Site 32, the Crash Site), and the four difficulty clears (Hard, Very Hard, Extreme, Ragdoll).",
                "The achievements here: Erase Your Light (Escape from Site 14); Take Your Flight (Complete Level: Pandora Institute); To A Place Where You Will Be Remembered (Complete Level: Jorvik Castle); To A Place Where You Will Be... (Complete Level: Site 83); ..Loved (Completed Level: Horizon HQ); TREPANG2 (Break The Cycle); Not So Hard (Complete all campaign and side missions on Hard difficulty or higher); Supersoldier (Complete all campaign and side missions on Very Hard difficulty or higher); Subject 106 (Complete all campaign and side missions on Extreme difficulty or higher); Unbreakable Will (Complete all campaign and side missions on Rage Mode difficulty); Complexity (Complete Level: Gunnarson Complex); Spelunker (Complete Level: Kellington Colliery); Oil Spill (Complete Level: Oil Rig); IT Specialist (Complete Level: Iron Dragon Data Center); Dark Secrets (Complete Level: Site 32); Lost and Found (Complete Level: Crash Site)."
            ]
        },
        {
            "heading": "Secrets & Boss Kills",
            "body": [
                "The two secret-ending markers, the four secret boss and cult-leader kills (Dr. Emerson's corpse, the Mothman, the Patriarch, the Horizon CEO), the 'Cycle 106' story marker, and the two Syndicate coin collectibles. All Steam-hidden.",
                "The achievements here: The Truth (Reach the secret ending where 106 lets the world know the truth); One Last Mission ('106 is reborn' - reach the post-campaign bonus mission); Emersus (Eviscerate Dr. Emerson's corpse in the Pandora Institute); Pest Control (Kill the Mothman); XCI (Kill the Patriarch); LXXVIII (Kill the Horizon CEO); CVI ('Cycle 106 comes to an end' - a story-completion marker); CV (Collect the Syndicate coin 'CV'); XCV (Collect the Syndicate coin 'XCV')."
            ]
        },
        {
            "heading": "Intel, Weapons & Combat Feats",
            "body": [
                "Intel-document and weapon-part collection, weapon customization, and the stylish-kill feats - grabs and throws, hostage kills, stealth squad wipes, helmet-shot kills, grenade multi-kills, tomahawk and flashbang kills, and the bottle- and book-destruction totals.",
                "The achievements here: Smol Brain (Collect 50% of all intel docs); Big Brain (Collect all intel docs); Average Weapons Enjoyer (Acquire all weapon parts); Trepangus (Throw an enemy into the vent in the first combat encounter in  Site 14); Average Weapons Fan (Use a weapon bench to customize a weapon for the first time); You Monster! (Throw a TF27 soldier into the helicopter blades in Site 14); You’re Paying For Their F***ing Surgery! (Kill all TF27 soldiers in Site 14); Dry Party (Destroy 100 beer/wine bottles); 50 shades of burnt (Destroy 1000 cultist books); TrePayne (Acquire the dual wield serum); Slide Into Your DMs (Slide into an enemy and grab him while he’s ragdolled); You're a Firework! (Shoot an enemy while he’s thrown as a hostage grenade, detonating his grenade); Efficient (Use every bullet in a pistol magazine to get headshot kills); That Was a Close One! (Kill an enemy with a headshot on final bullet in the mag); Solid 106 (Stealth kill an entire squad without anyone becoming alerted); Stylish (Grab an enemy, throw and kill him with a headshot); Oh Snap! (Execute your first hostage); JuggerNOT (Kill a heavy soldier); How’s That Helmet Working? (Kill an enemy by shooting through his helmet with a DMR); Cost Effective (Kill 3 enemies with 1 grenade); Backfired (Shoot an enemy’s thrown grenade, killing him with it); Stick Around (Kill an enemy with a tomahawk); Think Fast! (Kill an enemy with a flashbang impact); Flashlight! (Alert an enemy by shining a flashlight from behind, shoot him before he turns around)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign and every side mission once on a comfortable difficulty, collecting intel docs and weapon parts as you go.",
                "2. Do a run where you find all the drones to unlock the secret ending markers ('The Truth', 'One Last Mission', 'CVI').",
                "3. Kill the four secret bosses (Dr. Emerson's corpse in the Pandora Institute, the Mothman, the Patriarch, the Horizon CEO) and grab the CV and XCV Syndicate coins.",
                "4. Grind the stylish-kill feats during normal play - most just need one specific flashy kill.",
                "5. Replay the campaign and side missions on Hard, then Very Hard, Extreme and Ragdoll for the four difficulty clears.",
                "Tip: the difficulty clears stack in your favor if you play each mission once on the highest setting you can handle - Ragdoll is the hardest, so leave it for after you know every encounter."
            ]
        }
    ]
};
