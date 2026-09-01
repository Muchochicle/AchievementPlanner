// Wasteland 2: Director's Cut Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wasteland-2-directors-cut.json), whose 46 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   240760 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 11 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (PowerPyx / Game8 / PlayStationTrophies / TrueAchievements) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "wasteland-2-directors-cut-achievement-guide",
    "category": "game",
    "gameSlug": "wasteland-2-directors-cut",
    "icon": "☢️",
    "title": "Wasteland 2: Director's Cut Achievement Guide",
    "summary": "A practical guide to all 46 Steam achievements in Wasteland 2: Director's Cut (11 hidden). Covers the Arizona and Los Angeles story arcs, the many hub-outcome choices, the skill and collectible feats, and a set of secrets. Eleven of the achievements are hidden - the story markers, faction outcomes and secrets - and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wasteland 2: Director's Cut has 46 Steam achievements and 11 are hidden. Two are story markers ('West Of Eden' - reach Los Angeles; 'Back Where It All Began' - return to Arizona) and the rest are secrets and outcomes: setting off the museum nuke in Ranger Citadel, reuniting Ralphy with his father, convincing the Mannerites to stop cannibalism, Matthias' 'kill in LA' quest, finding a Wasteland 1 disk, using Finster's code (PROTEUS) to open Darwin's complex, an accidental friendly-fire kill, letting Vargas detonate the nuke, and the Hollywood Sewers button.",
                "The catalog marks it difficulty 3. Several achievements are permanently missable - they hinge on party composition, faction choices and one-time events (Ralphy in your party at the right checkpoint, Rose out of the party for the PROTEUS code, keeping Vargas alive for his ending). Follow a checklist on a single run, and note that some of the many visible hub-outcome achievements are mutually exclusive with each other.",
                "Tip: keep Ralphy in your active party after recruiting him at Rail Nomads Camp so 'Fateful Reunion' triggers when his father appears at the Canyon of Titan checkpoint - it is easy to bench him and miss it."
            ]
        },
        {
            "heading": "Arizona: Hub Outcomes",
            "body": [
                "Getting Ranger Team Delta sent after you, an STD, the museum nuke button, a pod person, the Atchison/Topekan peace, Angela killing Samuel Haas, 20 candy to the Night Terror, the nuke choices (Mad Monks, DBM, or disarm), reuniting Ralphy with his father, saving Binh, the Rodia mayor outcomes, the Angel Oracle power struggle, Retribution Jones, God's Militia, the Hollywood/Bastion peace, the Redondo Beach holes, Combat Shooting, The Fin's poster, and the Kekkahbah golden spike.",
                "The achievements here: Persona Non Grata (Get Ranger Team Delta sent after you); A Night To Remember (Get an STD); What Does This Button Do? (Set off the nuke in Ranger Citadel's museum (before going to Los Angeles).); They Walk Among Us (Have a party member turn into a pod person); Peace On The Rails (Make peace between the Atchisons and Topekans); Wasteland Justice (Witness Angela kill Samuel Haas); Tasty! (Give the Night Terror 20 pieces of candy); Embrace The Glow (Send the nuke to the Mad Monks); Fight Fire With Fire (Send the nuke to the DBM); Red Wire, Blue Wire (Disarm the nuke); Fateful Reunion (Meet Ralphy's father with Ralphy in your party (at the Canyon of Titan checkpoint).); A Gentle Heart (Save Binh from Tinker); Under Old Management (Restore Rodia's mayor to office); Hell Bent For Leather (Help Chris Van Graas Jr. become mayor of Rodia); Self Actualized (Put the Robbinsons in power in Angel Oracle); How Rude (Help Mr. Manners eliminate Tori Robbinson's plot); Civilized (Convince Mr. Manners and the Mannerites to stop eating people.); Divine Retribution (Help Retribution Jones take over Hollywood); Religious Persecution (Kill all of the God's Militia leadership); Sinners And Saints (Make peace between Hollywood and the Bastion); Too Much Time On Yer Hands (Dig up all the holes at Redondo Beach); I Am Legend (Complete Matthias' quest to kill in Los Angeles.)."
            ]
        },
        {
            "heading": "Los Angeles, Skills & Collectibles",
            "body": [
                "Reaching Los Angeles and returning to Arizona, the gorilla-costume completion, PROTEUS opening Darwin's complex, a Wasteland 1 disk, Scotchmo's thefts, all world-map caches, 20 charmed animals, 20 weapon mods, 5 tipped cows, the goat feats, the amigos outfits, the alien cartridges, all hidden shrines, a 1-ranger survival, all lore entries, 10 lock/safe repairs, letting Vargas detonate the nuke, the Hollywood Sewers button, and an accidental friendly-fire kill.",
                "The achievements here: Blast From The Past (Learn Combat Shooting); Pop Idol (Find The Fin's poster); Ezekiel 18:20 (Intervene in a God's Militia execution); Cat Burglar (Steal the Golden Spike from Kekkahbah's fortress without being detected); Not Monkeying Around (Complete the game with a Ranger dressed in a gorilla costume); Know Your Roots (Find a Wasteland 1 disk (in Darwin Village's underground complex).); Sinister Legacy (Use the code from Finster's head (PROTEUS) to get into Darwin's underground complex.); Sweet, Sweet Squeezins (Scotchmo steals 5 bottles of Snake Squeezins from you); Scavenger (Find all of the world map caches); Call Of The Wild (Use Animal Whisperer to charm 20 animals); Locked And Loaded (Apply 20 weapon mods); Moo, I Say (Tip 5 cows); Goat Simulator (Get 3 goats following the party at once); Son Of A Motherless Goat (Outfit 3 rangers in the amigos hat, jacket, and pants); Better Left Buried (Find the hidden cache of extraterrestrial cartridges); Relics Of A Bygone Age (Find all hidden shrines in the game); Skin 'O Yer Teeth (Survive a combat encounter with only 1 party member standing); Oops (Accidentally kill one of your own party members with friendly fire.); Wasteland Historian (Read every lore entry in the game); Elbow Grease (Repair 10 locks or safes using Mechanical Repair); West Of Eden (Go to Los Angeles.); Back Where It All Began (Return to Arizona.); A General and a Gentleman (Allow Vargas to detonate the nuke in the final assault.); Pushed The Button (Push the button at the end of the Hollywood Sewers.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the Arizona arc, making the hub-outcome choices you want and keeping a checklist of the missable ones.",
                "2. Keep Ralphy in your party for 'Fateful Reunion', and set off the museum nuke button before leaving for LA.",
                "3. In Los Angeles, do Matthias' quest, convince the Mannerites, and progress to Darwin's complex (Rose out of the party for the PROTEUS code, and grab the Wasteland 1 disk).",
                "4. Collect the world-map caches, hidden shrines, lore entries, and do the skill and goat/cow feats.",
                "5. In the final assault, keep Vargas alive and let him detonate the nuke, and push the Hollywood Sewers button.",
                "Tip: many of the visible faction-outcome achievements are mutually exclusive per hub - decide which side you want in each town before you act, and use a guide to see which pairs conflict."
            ]
        }
    ]
};
