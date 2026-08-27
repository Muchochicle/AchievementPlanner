// Risk of Rain 2's Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/risk-of-rain-2.json), whose 171 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   632360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js) - 154 of 171 ship a real,
//   official Steam description, quoted directly below.
// - The 17 hidden achievements (6 "Purge" and 5 "Accept and Decompile"
//   achievements tied to the secret boss Solus Heart and the Alloyed
//   Collective's offering; King of the Hill and Purified Freedom, tied
//   to the False Son secret boss at the Prime Meridian; Order Up!,
//   Chef's unlock condition; Lost in Transit, Drifter's unlock
//   condition; and Drifter/Operator's own Mastery achievements) are
//   hidden achievements Steam never describes publicly (confirmed via
//   the same API call) - their descriptions here are curatorial,
//   cross-checked against multiple independent sources
//   (riskofrain2.wiki.gg, TrueSteamAchievements, and community guides
//   that all agree on the same unlock conditions).
// - The grouping below (Survivor Mastery, per-survivor Signature
//   Challenges, the Prime Meridian, the Alloyed Collective's Offering,
//   Artifacts & Trials, Run Milestones, and Unlocking New Survivors) is
//   read directly from the achievements' own apiname patterns and
//   descriptions, not invented - every one of the game's 18 playable
//   survivors has exactly one Mastery achievement, for instance, and
//   the 6 Purge/5 Decompile achievements are unmistakably a matched
//   accept/reject pair tied to one specific secret-boss encounter.
export const GUIDE = {

    slug: "risk-of-rain-2-achievement-guide",
    category: "game",
    gameSlug: "risk-of-rain-2",
    icon: "☄️",
    title: "Risk of Rain 2 Achievement Guide",
    summary: "A practical guide to all 171 Steam achievements in Risk of Rain 2 - mastering every one of its 18 survivors, the Prime Meridian, the Alloyed Collective's secret offering, every Artifact of the Trials, and the game's many run-based milestones.",

    relatedSlugs: ["achievement-completion-and-tracking", "understanding-achievement-availability"],

    sections: [

        {
            heading: "Overview",
            body: [
                "Risk of Rain 2 has 171 Steam achievements - the second-largest list in this catalog after Vampire Survivors. Nothing here is permanently missable: every survivor, Artifact, and challenge can always be attempted again on a future run, and the game's own item and character unlocks persist across every subsequent playthrough.",
                "The list breaks down into a handful of clear families: one Mastery achievement per survivor (18 total), dozens of survivor-specific Signature Challenges, the Prime Meridian's per-survivor completion achievements, the secret Alloyed Collective encounter's Purge/Decompile choice, every Artifact of the Trials, general run milestones, and the achievements that unlock three of the newer survivors outright."
            ]
        },

        {
            heading: "Survivor Mastery",
            body: [
                "Every one of the game's 18 playable survivors has exactly one Mastery achievement, unlocked by beating the game or obliterating on Monsoon difficulty as that survivor: Commando: Mastery, Huntress: Mastery, Bandit: Mastery, MUL-T: Mastery, Engineer: Mastery, Artificer: Mastery, Mercenary: Mastery, REX: Mastery, Loader: Mastery, Acrid: Mastery, Captain: Mastery, Railgunner: Mastery, CHEF: Mastery, Seeker: Mastery, False Son: Mastery, Drifter: Mastery, and Operator: Mastery all follow the same pattern, along with the deliberately glitched-looking 「V??oid Fiend』: Mastery for the game's secret 18th survivor.",
                "Tip: Monsoon is the game's hardest normal difficulty tier, and 'obliterating' (self-destructing at the Obelisk after a full clear) counts the same as a full completion for every Mastery achievement - obliterating is often the faster route once you're confident in a build, since it skips a slow final stretch."
            ]
        },

        {
            heading: "Signature Survivor Challenges",
            body: [
                "Beyond Mastery, most survivors have one or more unique, harder in-run challenges tied to their specific kit. Commando's are Commando: Godspeed, Commando: Rolling Thunder, and Commando: Incorruptible. Huntress has Huntress: Finishing Touch, Huntress: One Shot, One Kill, and Huntress: Piercing Wind. Bandit has Bandit: Classic Man, Bandit: B&E, and Bandit: Sadist.",
                "MUL-T's are MUL-T: Pest Control, MUL-T: Gotcha!, and MUL-T: Seventh Day. Engineer has Engineer: Better With Friends, Engineer: Zero Sum, and Engineer: 100% Calculated. Artificer has Artificer: Orbital Bombardment, Artificer: Chunked!, and Artificer: Massacre.",
                "Mercenary's are Mercenary: Ethereal, Mercenary: Demon of the Skies, and Mercenary: Flash of Blades. REX has REX: Dunked, REX: Bushwhacked, and REX: Full of Life. Loader has Loader: Earthshatter, Loader: Swing By, and Loader: The Thunderdome.",
                "Acrid's are Acrid: Bad Medicine, Acrid: Easy Prey, and Acrid: Pandemic. Captain has Captain: Worth Every Penny, Captain: Wanderlust, and Captain: Smushed. Railgunner has Railgunner: Annihiliator, Railgunner: Marksman, and Railgunner: Trickshot.",
                "The three newest additions each have their own set too: CHEF has CHEF: Barbecued Bison Recipe Complete, CHEF: You’ve Always Been Crazy, and CHEF: It’s Getting Hot In Here!. False Son has False Son: Stare Them Down, False Son: Family Bonding, and False Son: Protein Heavy Diet. Seeker has Seeker: Clear Mind, Seeker: Scorched Earth, and Seeker: Airborne Souls. Drifter has Drifter: Trash Compactor, Drifter: Leave No Trace, and Drifter: In The Bag, while Operator has Operator: Putting Together a Team, Operator: Not So Different, Operator: That Just Happened, and Operator: That All You Got?.",
                "Tip: tackle these on a dedicated, focused run rather than expecting them alongside a normal clear - most require a specific setup (particular items, a specific stage, or a specific fight) that's much easier to arrange deliberately than to stumble into."
            ]
        },

        {
            heading: "The Prime Meridian",
            body: [
                "13 of the game's survivors each have their own achievement for completing the Prime Meridian's special event: Commando: Cleared Prime Meridian, Huntress: Cleared Prime Meridian, Bandit: Cleared Prime Meridian, MUL-T: Cleared Prime Meridian, Engineer: Cleared Prime Meridian, Artificer: Cleared Prime Meridian, Mercenary: Cleared Prime Meridian, REX: Cleared Prime Meridian, Loader: Cleared Prime Meridian, Acrid: Cleared Prime Meridian, Captain: Cleared Prime Meridian, Railgunner: Cleared Prime Meridian, and Void Fiend: Cleared Prime Meridian.",
                "The three newest survivors (CHEF, False Son, and Seeker) and the two most recently added (Drifter and Operator) don't have their own Prime Meridian achievement, since that content predates them."
            ]
        },

        {
            heading: "The Alloyed Collective's Offering",
            body: [
                "Defeating the Alloyed Collective's secret boss, Solus Heart, presents a one-time choice: accept its offering, or reject it. Accepting it as one of five specific survivors unlocks that survivor's own Accept and Decompile achievement - Bandit: Accept and Decompile, Captain: Accept and Decompile, Loader: Accept and Decompile, Artificer: Accept and Decompile, and REX: Accept and Decompile.",
                "Rejecting it instead, as one of six different survivors, unlocks that survivor's Purge achievement - Commando: Purge, Acrid: Purge, Huntress: Purge, Mercenary: Purge, MUL-T: Purge, and Engineer: Purge.",
                "Since each of these 11 achievements is tied to a specific survivor and a specific choice at the same one-time encounter, getting all of them realistically means replaying the Solus Heart fight multiple times across different runs, picking a different survivor and a different choice each time."
            ]
        },

        {
            heading: "Artifacts & Trials",
            body: [
                "Every Artifact of the Trials in the game has its own achievement, unlocked by completing that Artifact's specific trial: Trial of Spite, Trial of Command, Trial of Honor, Trial of Enigma, Trial of Chaos, Trial of Glass, Trial of Dissonance, Trial of Evolution, Trial of Metamorphosis, Trial of Sacrifice, Trial of Vengeance, Trial of Kin, Trial of Swarms, Trial of Death, Trial of Frailty, Trial of Soul, Trial of Devotion, Trial of Delusion, and Trial of Prestige round out the set, alongside Experienced Rebirth for the Artifact of Rebirth.",
                "Tip: each Artifact of the Trials achievement only requires completing that Artifact's specific trial once - the Artifact itself doesn't need to stay equipped afterward, so these can be knocked out steadily over many short, dedicated runs rather than one long session."
            ]
        },

        {
            heading: "Run Milestones",
            body: [
                "A large group of achievements track general run progress rather than any one survivor: Washed Away and The Calm mark beating the game normally and on Monsoon respectively, while Advancement, Flawless, Warrior, and Naturopath track increasingly strict Teleporter-related conditions. The Long Road, Engineering Perfection, and Complete 30 Stages track stage counts, while True Respite and Dragged Below mark the game's Obelisk and Void endings.",
                "Combat and survival milestones include Learning Process, I Love Dying!, Deicide, Macho, Blockade Breaker, Keyed Up, Elite Slayer, Cut Down, Blackout, Slaughter, Multikill!, Warmonger, and The Lone Survivor, alongside the more unusual Warm For Life, The Demons And The Crabs, and Death Do Us Part.",
                "Collection and exploration milestones include Moon Worshipper, Experimenting, The Basics, Newtist, Bookworm, Cosmic Explorer, Her Concepts, [REDACTED], and Rapidfire and Going Fast Recommended for attack speed and move speed thresholds.",
                "A handful of smaller, more specific milestones round out the list: Automation Activation, ...To Be Left Alone, Glorious Battle, Cleanup Duty, Ascendant, Prismatically Aligned, Guidance Offline, \"Is This Bugged?\", Deja Vu?, One with the Woods, Never Back Down, ...Maybe One More., Verified, Mechanic, and Funded!."
            ]
        },

        {
            heading: "Unlocking New Survivors",
            body: [
                "Several achievements are tied directly to unlocking a new playable survivor rather than a challenge with one already unlocked. Pause. and Power Plant unlock Artificer and REX respectively, both early, straightforward objectives.",
                "Order Up! is Chef's unlock condition - delivering three specific items to the game's Wok altar. Lost in Transit is Drifter's - using two Prison Matrices to open a hidden Vault. King of the Hill unlocks for simply defeating the secret boss False Son at the Prime Meridian, while the much harder Purified Freedom asks you to defeat him a second time while carrying a Halcyon Seed, purifying him into a playable survivor in the process."
            ]
        },

        {
            heading: "Suggested Order",
            body: [
                "Play through normally first, picking up Washed Away, the easier Teleporter and stage-count milestones, and whichever collection/exploration achievements you stumble into along the way.",
                "Unlock the newer survivors (Pause., Power Plant, Order Up!, Lost in Transit, King of the Hill, and eventually Purified Freedom) as you naturally gain the items and knowledge each one requires, rather than rushing them on unfamiliar runs.",
                "Work through each survivor's Mastery and Signature Challenges gradually, one or two survivors at a time, since most of the Signature Challenges need a build tailored to that specific survivor.",
                "Save the Alloyed Collective's Purge/Decompile achievements and the full Artifacts & Trials set for later, dedicated sessions - both require repeating a specific one-time setup (the Solus Heart fight, or a specific Artifact's trial) across many separate runs rather than anything that happens naturally."
            ]
        }

    ]

};
