// Curse of the Dead Gods' Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/curse-of-the-dead-gods.json), whose 30
//   achievements were sourced directly from Steam's own achievement
//   schema for appid 1123770 via ISteamUserStats/GetSchemaForGame
//   (fetched through this app's own backend/services/steamApi.js) - 25
//   of 30 ship a real, official Steam description, quoted directly
//   below. (Note "Clairvoyance" really does read "50 or more
//   Perception" in Steam's data even though its apiname mentions Greed -
//   the stat was renamed in-game; the description is quoted as-is.)
// - The five hidden achievements (Deception, Deliverance, Mastery,
//   Power, Temptation) ship no Steam description. Their unlock
//   conditions here are curatorial, cross-checked against a Steam
//   Community achievements guide and the game's own apiname strings
//   (DefeatDeathChampion, CompleteAllExplorations,
//   Get03SuccessfulParriesIn02Seconds, EquipBossWeapon,
//   EquipAllSlotsWithCursedWeapons).
// - The grouping (the three temples and their Dark Avatars, the
//   meta-progression unlock lists, Special Events, single-run mastery
//   challenges, then the endgame secrets) is read directly from what
//   each achievement's own description or apiname requires.
export const GUIDE = {

    slug: "curse-of-the-dead-gods-achievement-guide",
    category: "game",
    gameSlug: "curse-of-the-dead-gods",
    icon: "🗿",
    title: "Curse of the Dead Gods Achievement Guide",
    summary: "A practical guide to all 30 Steam achievements in Curse of the Dead Gods - the three temples and their Dark Avatars, the blessing/weapon/bestiary unlock lists, the single-run mastery challenges, and the endgame Champion of Death secrets.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Curse of the Dead Gods has 30 Steam achievements. Five are hidden (Deception, Deliverance, Mastery, Power, Temptation), all tied to the endgame. Nothing is missable - this is a run-based roguelite, so every temple, weapon, and challenge is always available on the next attempt.",
                "The list breaks into: clearing the three temples and their bosses, filling out the meta-progression unlock lists (blessings, weapons, bestiary), a few Special Event achievements, several single-run mastery challenges, and the Champion of Death endgame.",
                "Tip: spend crystal skulls on permanent weapon and altar upgrades early. A stronger baseline makes the high-stat mastery runs (Invulnerability, Omnipotence, Clairvoyance) and the boss clears far more consistent."
            ]
        },

        {
            heading: "The Three Temples",
            body: [
                "Initiation unlocks for completing the opening room of Trials.",
                "Each temple has two Champions and a Dark Avatar boss. The Jaguar: Strength (defeat Xak'olchir, the Blood Hunter), Toughness (defeat Litz & Nepac, the Cursed Twins), and Cruelty (defeat the Dark Avatar of the Jaguar).",
                "The Eagle: Nobility (defeat K'ax taca, High Lord of the Storm), Invention (defeat Malok paal, the Flesh Monstrosity), and Vanity (defeat the Dark Avatar of the Eagle).",
                "The Serpent: Awareness (defeat Xucat', the Witch), Depravity (defeat Ratyapu, the Abomination), and Avidity (defeat the Dark Avatar of the Serpent)."
            ]
        },

        {
            heading: "Unlock Lists",
            body: [
                "These fill in across many runs as you spend currency and fight new things. Belief (unlock a Blessing of the Dead Gods) and Devotion (unlock 20 Blessings) cover the passive-bonus pool.",
                "Exhumation (unlock 5 Forsaken Weapons) and Collection (unlock 20 Forsaken Weapons) cover the weapon pool, and Restoration asks you to unlock all Weapon Altar upgrades.",
                "Essay (write 5 Bestiary entries) and Memoirs (write all Bestiary entries with their complete sketches) cover the enemy log - Memoirs in particular means encountering and killing enough of every enemy type in the game."
            ]
        },

        {
            heading: "Special Events",
            body: [
                "Curiosity unlocks for starting a \"Special Event\" (a modifier run selected from the map), and Diligence for completing 10 different Special Events - so spread your attempts across the different event types rather than repeating one."
            ]
        },

        {
            heading: "Single-Run Mastery Challenges",
            body: [
                "Each of these must happen within one exploration. Greed asks for a x10 \"Greed Kill\" series (chained kills without taking damage while Greed is active), and Insanity asks for 10 Blood Offerings in a single exploration.",
                "Relief unlocks for lifting the Final Curse - surviving long enough in a run for the curse track to complete and reset. Invulnerability, Omnipotence, and Clairvoyance want you to complete any exploration with 50 or more Constitution, Dexterity, and Perception respectively, which means stacking that one stat hard through your Blessing and altar choices."
            ]
        },

        {
            heading: "The Champion of Death",
            body: [
                "The five hidden achievements are the game's true endgame. Power unlocks for equipping a hidden Champion weapon - one of the special weapons dropped by a boss - and Temptation for filling all three weapon slots with Cursed weapons at the same time.",
                "Mastery is a pure skill check: land 3 successful parries within 2 seconds. Deception unlocks for defeating Clovis Pardieux, the Champion of Death, the secret final boss reached after clearing all three temples, and Deliverance for completing every exploration and taking his place as the new Champion of Death."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Do your early runs for Initiation and steady progress on the unlock lists - Belief, Exhumation, Essay - while learning each temple. Try a Special Event or two for Curiosity as they appear.",
                "Clear each temple's Champions and Dark Avatar (Strength/Toughness/Cruelty, Nobility/Invention/Vanity, Awareness/Depravity/Avidity), then start focusing runs: one stat stacked high for Invulnerability, Omnipotence, and Clairvoyance, and aggressive no-damage play for Greed, plus Insanity and Relief.",
                "Keep unlocking toward Devotion, Collection, Restoration, and Memoirs, and knock out Diligence by working through the remaining Special Events.",
                "Finish with the endgame: grab Power and Temptation from weapon drops, land Mastery's triple parry, then beat Clovis Pardieux for Deception and complete the full endgame for Deliverance."
            ]
        }

    ]

};
