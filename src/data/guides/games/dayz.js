// DayZ Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/dayz.json), whose 13 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   221100 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "dayz-achievement-guide",
    "category": "game",
    "gameSlug": "dayz",
    "icon": "🧟",
    "title": "DayZ Achievement Guide",
    "summary": "A practical guide to all 13 Steam achievements in DayZ - none are hidden. Covers the survival-basics achievements and the combat and interaction achievements. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "DayZ has 13 Steam achievements and none are hidden. Seven are survival basics - eating and drinking, equipping a firearm, melee weapon and backpack, killing your first infected, cooking a steak on a stick, starting a fire three different ways, shaving, and gutting a deer. The other six are combat and interaction feats: a 300 m survivor kill, killing an infected soldier, bandaging other survivors 30 times, handcuffing 10 people, 15 melee survivor kills, and 20 headshot kills.",
                "The catalog marks it a single playthrough - achievements are account-wide and cumulative, so character deaths (permadeath) don't reset progress toward them. The PvP-flavoured ones ('Marksman', 'Close and personal', 'You have the right...') just need time on populated servers.",
                "Tip: knock out all seven survival-basics achievements in one careful inland run - carry a matchbox, a road flare and the parts for a hand drill, and cook and shave before you go looking for other players."
            ]
        },
        {
            "heading": "Survival Basics",
            "body": [
                "Eating and drinking something, equipping a firearm plus a melee weapon plus a backpack, killing your first infected, cooking a steak on a stick, igniting a fire with a matchbox, a road flare and a hand drill, shaving your face, and gutting a deer.",
                "The achievements here: Bodily Needs (Ate and drank something.); Geared (Equipped a firearm, a melee weapon and a backpack.); Act of mercy (Killed my first infected.); Field cook (Cooked a steak on a stick.); I'm the firestarter (Ignited fire using a matchbox, a road flare and a hand drill.); Babyface (Shaved my face.); Natural instincts (Gutted a deer.)."
            ]
        },
        {
            "heading": "Combat & Interaction",
            "body": [
                "Killing a survivor from over 300 metres, killing an infected soldier, applying bandages to other survivors 30 times, handcuffing 10 people, 15 melee survivor kills, and 20 headshot kills on survivors or infected.",
                "The achievements here: Marksman (Killed a survivor at more than three hundred meters.); Pacify (Killed an infected soldier.); Heal the world (Applied bandages on other survivors thirty times.); You have the right... (Handcuffed ten people.); Close and personal (Killed fifteen survivors with any melee weapon.); Lobotomy (Killed twenty survivors or infected with a head-shot.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. On a fresh spawn, eat and drink, then find a firearm, a melee weapon and a backpack for 'Bodily Needs' and 'Geared'.",
                "2. Kill an infected and an infected soldier, cook a steak, shave, gut a deer, and start a fire three different ways.",
                "3. Carry handcuffs and restrain 10 players over time for 'You have the right...'.",
                "4. Help friendly survivors and bandage them 30 times for 'Heal the world'.",
                "5. Do the PvP kills - 15 melee, 20 headshots, and one shot from over 300 metres.",
                "Tip: 'Heal the world' (bandage others 30 times) is fastest with a partner - take turns cutting yourselves on a knife or barbed wire and bandaging each other."
            ]
        }
    ]
};
