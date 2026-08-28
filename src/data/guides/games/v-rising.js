// V Rising Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/v-rising.json), whose 49 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1604030 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below (one
//   name carries a leading space, preserved byte-for-byte).
// - Sections group by what each achievement needs: early survival and
//   castle, region discovery, the servant/merchant/power systems, the V
//   Bloods and story Acts, and the Brutal-difficulty clears.
export const GUIDE = {
    "slug": "v-rising-achievement-guide",
    "category": "game",
    "gameSlug": "v-rising",
    "icon": "🧛",
    "title": "V Rising Achievement Guide",
    "summary": "A practical guide to all 49 Steam achievements in V Rising - none are hidden. The early survival and castle-building milestones, exploring every region of Vardoran, the servant, merchant and Vampire-power unlocks, the V Blood bosses and the four story Acts up to Dracula, and the Brutal-difficulty clears.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "V Rising has 49 Steam achievements and none are hidden. Most are one-time \"do this thing once\" unlocks that come naturally while progressing the campaign; the real work is the four story Acts (each ends on a boss), defeating and draining every V Blood, and then doing it all again on Brutal difficulty.",
                "Nothing is permanently missable - the world persists, bosses respawn for co-op partners, and technologies can always be finished later - but the completion is gated on beating Solarus and then Dracula, which on Brutal is a serious fight.",
                "Tip: play on a private or duo server so you control the pace, and knock out the region-discovery achievements (A Whole New World through The Forgotten Reaches) early by scouting with Bat Form once you unlock it - most of the map is safe to fly over even if the ground enemies would kill you."
            ]
        },
        {
            "heading": "Vampire Basics & Your Castle",
            "body": [
                "The tutorial-tier unlocks: your first bag and staircase, drinking high-quality blood, feeding from creatures, prisoners and blood extraction, riding a horse, planters, ultimate abilities, the room-and-floor workstation bonus and cosmetic slots.",
                "The achievements here:  Symphony of the Night (Interact with a music box.); Larger Pockets! (Equip a bag.); Exquisite Blood (Drink blood from a 100% blood quality source.); A First Taste (Feed from a living creature.); Blood Donor (Extract blood from a prisoner.); Upon a Pale Horse (Ride a horse.); Vampire Rising (Place a staircase.); A Vampire with a Hobby (Plant a seed in a planter.); Ultimate Power (Cast an ultimate ability.); Work Smart, Not Hard (Interact with a work station that has the room and floor bonus active.); Dressed to Impress (Equip an item in a Cosmetic Slot.)."
            ]
        },
        {
            "heading": "Exploring Vardoran",
            "body": [
                "One achievement for setting foot in each region - Farbane Woods, Dunley Farmlands, Hallowed Mountains, Silverlight, Cursed Forest, Gloomrot South, Gloomrot North and the Ruins of Mortium - plus using a Vampire Waygate and visiting every major region.",
                "The achievements here: A Whole New World (Venture into the Farbane Woods area.); A Fox in the Hen House (Venture into the Dunley Farmlands area.); Footsteps in the Snow (Venture into the Hallowed Mountains area.); Godless Intrusion (Venture into the Silverlight area.); Forbidden Footsteps (Venture into the Cursed Forest area.); Don't Drink the Water (Venture into the Gloomrot South area.); March of the Machines (Venture into the Gloomrot North area.); The Forgotten Reaches (Venture into the Ruins of Mortium area.); Instant Gratification (Teleport using a Vampire Waygate.); Every Corner of the World (Venture to all major regions.)."
            ]
        },
        {
            "heading": "Servants, Merchants & Vampire Powers",
            "body": [
                "Fully equipping a servant and charming humans, trading with merchants (including disguised as a human), the Ancestral Forge reforge, closing a Shadow Realm rift, the shapeshift forms and Rat Form squeezing, flight, and the Irradiant Gruel test subject.",
                "The achievements here: Gone Fishing (Catch a fish using a fishing rod.); Your Number One Fan (Fully equip a servant.); The Allure of Coin (Trade with a Shady Merchant in the Farbane Woods.); Master of Disguise (Trade with a merchant as a very ordinary human.); It's a Tight Squeeze (Use Rat Form and traverse through a small hole.); Oh No! (Eat the wrong mushroom.); A Weapon From a More Civilized Age (Reforge a shattered weapon at the Ancestral Forge.); Riftslayer (Participate in closing a rift to the Shadow Realm.); To the Skies (Find a way to fly.); A Creature of Many Forms (Use your Vampire powers to shapeshift into another form.); A Perfect Test Subject (Feed a prisoner with Irradiant Gruel and have them reach 100% blood quality as a result.); An Eye for Quality (Successfully charm a human that has 100% blood quality.)."
            ]
        },
        {
            "heading": "V Bloods, the Story Acts & Dracula",
            "body": [
                "Draining your first V Blood, claiming territory with a Castle Heart, completing the three research-station tech trees, and the four Acts - Quincey the Bandit King, Octavian the Militia Leader, Cyril the Cursed Smith and Solarus the Immaculate - then draining every V Blood and defeating Dracula, The Immortal King.",
                "The achievements here: First of Many (Drink the blood of a V Blood.); Lord of the Land (Place a Castle Heart and claim an unoccupied territory.); Completed Act 1 (Defeat Quincey the Bandit King and complete Act I.); Completed Act 2 (Defeat Octavian the Militia Leader and complete Act II.); Completed Act 3 (Defeat Cyril the Cursed Smith and complete Act III.); Completed Act 4 (Defeat Solarus the Immaculate and complete Act IV.); Collector of Forgotten Lore I (Interact with a Research Desk that has all technologies unlocked.); Collector of Forgotten Lore II (Interact with a Study that has all technologies unlocked.); Collector of Forgotten Lore III (Interact with an Athenaeum that has all technologies unlocked.); Slayer of the Immortal King (Defeat Dracula, The Immortal King.); Master of All (Defeat and drink the blood of every V Blood.)."
            ]
        },
        {
            "heading": "Brutal Difficulty",
            "body": [
                "The hardest block: complete each of the four Acts on Brutal difficulty and defeat Dracula on Brutal. Brutal adds extra boss phases and mechanics, so this is effectively a second, much harder playthrough.",
                "The achievements here: Completed Act 1 on Brutal Difficulty (Defeat Quincey the Bandit King and complete Act I on Brutal Difficulty.); Completed Act 2 on Brutal Difficulty (Defeat Octavian the Militia Leader and complete Act II on Brutal Difficulty.); Completed Act 3 on Brutal Difficulty (Defeat Cyril the Cursed Smith and complete Act III on Brutal Difficulty.); Completed Act 4 on Brutal Difficulty (Defeat Solarus the Immaculate and complete Act IV on Brutal Difficulty.); Brutal Slayer of the Immortal King (Defeat Dracula, The Immortal King, on Brutal Difficulty.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a normal-difficulty run start to finish: the basics, castle and power achievements unlock on the way, region discovery comes from scouting, and each Act boss (Quincey, Octavian, Cyril, Solarus) clears as you progress.",
                "2. Before or just after Solarus, sweep the remaining V Bloods for Master of All, and finish the three tech trees for the Collector of Forgotten Lore set.",
                "3. Defeat Dracula for Slayer of the Immortal King.",
                "4. Start a fresh Brutal run for Completed Act 1-4 on Brutal Difficulty and Brutal Slayer of the Immortal King - bring end-game gear from your first character if playing on the same server.",
                "Tip: the Brutal Act clears do not require a from-scratch character if your server allows difficulty changes - but the bosses scale hard, so treat Brutal as its own gearing project rather than a victory lap."
            ]
        }
    ]
};
