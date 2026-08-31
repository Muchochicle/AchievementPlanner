// GTA: San Andreas Definitive Edition Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/grand-theft-auto-san-andreas-the-definitive-edition.json), whose 35 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1547000 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - 3 achievement(s) are Steam-hidden and ship no
//   Steam description; their description here is researched from community
//   100% guides (TrueAchievements / Steam Community / game wikis) and is a
//   curatorial summary. Every non-hidden description is Steam's own verbatim text.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "grand-theft-auto-san-andreas-the-definitive-edition-achievement-guide",
    "category": "game",
    "gameSlug": "grand-theft-auto-san-andreas-the-definitive-edition",
    "icon": "🛩️",
    "title": "GTA: San Andreas Definitive Edition Achievement Guide",
    "summary": "A practical guide to all 35 Steam achievements in GTA: San Andreas Definitive Edition (3 hidden). Covers the story missions, the side activities and skills, and the completion and mastery achievements. Three of the achievements are hidden and their unlock conditions are researched from community 100% guides.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Grand Theft Auto: San Andreas - The Definitive Edition has 35 Steam achievements and 3 are hidden. Roughly fifteen track story progress and the missions along the way ('Big Smoke', 'The Green Sabre', 'Yay Ka-Boom-Boom', 'Saint Mark's Bistro', 'End of the Line') plus small feats like eating Cluckin' Bell meals and using a Pay 'n' Spray with a wanted level. The rest are side activities and skill maxes - vehicle schools, Vigilante/Paramedic/Firefighter/Taxi, dance and gym stats, gambling wins, dating every girlfriend - and the big completion targets: 100% completion, maximum respect, sex appeal, and all gang turfs plus $1,000,000.",
                "The catalog marks it difficulty 4. 100% completion pulls in every mission, collectible, side activity and stat, and the mini-games (dancing, driving schools, gambling) can be fiddly.",
                "Tip: follow a 100% checklist from early on - many side activities and stat grinds are easy to forget, and 'Today Was a Good Day' just needs one crime-free in-game day."
            ]
        },
        {
            "heading": "Story Missions",
            "body": [
                "Completing 'Big Smoke', 'End of the Line' and the missions in between, buying Cluckin' Bell meals, the basketball mini-game, exporting all three car lists, reaching maximum weight, buying a house, using a Pay 'n' Spray with a wanted level, the BMX/NRG challenge, the two hidden mission feats ('Who Needs Directions?' in 'Mike Toreno', 'They Can't Stop All of Us' in 'Black Project'), and 'Saint Mark's Bistro'.",
                "The achievements here: Getting Started (Complete \"Big Smoke\".); With Extra Dip (Buy 8 meals from Cluckin' Bell throughout the game.); The End of the Line (Complete \"End of the Line\".); Hoopin' it Up (Score at least 30 points in the basketball mini-game.); A Legitimate Business (Export all three car lists.); I’ll Have Two Number 9s (Reach maximum weight.); The American Dream (Purchase any house.); Pay 'n' Spray (Use a Pay 'n' Spray with wanted level.); Bike or Biker (Complete BMX or NRG challenge.); Who Needs Directions? (During the mission 'Mike Toreno', reach Toreno at Easter Basin Airport without following the referenced map locations.); Liberty City State of Mind (Complete the \"Saint Mark's Bistro\" mission.); Swiss Army Strife (Max all weapon skills.); School's Out (Fully complete a vehicle school.); Horror of the Santa Maria (Drown.); They Can’t Stop All of Us (During the mission 'Black Project', sneak into the underground base without setting off the surface alarm.)."
            ]
        },
        {
            "heading": "Side Activities & Skills",
            "body": [
                "A perfect dance routine, 12 levels each of Vigilante, Paramedic and Firefighter, 50 Taxi fares, a $1,000 Wheel of Fortune spin, 'Yay Ka-Boom-Boom', 'The Green Sabre', dating every girlfriend, an Inside Track Betting win, a max-bet roulette win, the 'Madd Dogg's Rhymes' stealth clear, maxing all weapon skills, a vehicle school, drowning, and reaching maximum respect.",
                "The achievements here: Smooth Moves (Perform a perfect dance routine.); What the City Needs (Complete 12 levels of Vigilante.); Saviour (Complete 12 levels of Paramedic.); Rescue a Kitten Too? (Complete 12 levels of Firefighter.); Yes I Speak English (Reach 50 fares in Taxi Mode.); Lucky Spinner (Win at least $1,000 in a single spin of the Wheel of Fortune.); What happens in Las Venturas... (Complete \"Yay Ka-Boom-Boom\".); All Dressed Up for San Fierro (Complete \"The Green Sabre\".); Not a Player (Go on at least one date with every potential girlfriend.); What are the Odds (Win a race in Inside Track Betting.); Double or Nothin' (Put all your money or the maximum bet on red or black and win.); Assassin (Stealth kill all enemies in the mission \"Madd Dogg's Rhymes\".); Original Gangster (Reach maximum respect.)."
            ]
        },
        {
            "heading": "Completion & Mastery",
            "body": [
                "Going a full in-game day without committing a crime, reaching 6 wanted stars, maximum sex appeal, owning all gang turfs and properties with $1,000,000, 100% completion, starting a new game after 100%, and unlocking all achievements.",
                "The achievements here: Today Was a Good Day (Go through an entire in-game day without committing any crimes.); Public Enemy No. 1 (Reach 6 wanted stars.); Chick Magnet (Achieve maximum sex appeal.); Ain’t Nothing But a G Thing (Own all gang warfare turfs, properties and have $1,000,000.); Remastered (Earn 100% completion.); ...Here we go again (Start a new game after getting 100% on a save file.); I Ain't No Buster (Unlock all achievements.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the story to 'End of the Line', doing the hidden mission feats when 'Mike Toreno' and 'Black Project' come up.",
                "2. Keep a 100% checklist: vehicle schools, Vigilante/Paramedic/Firefighter/Taxi, oysters/horseshoes/photos, unique jumps.",
                "3. Max the stats - weapon skills, muscle/fat, stamina, lung capacity, respect, sex appeal - and date every girlfriend.",
                "4. Do the gambling achievements in Las Venturas (Wheel of Fortune, roulette, Inside Track).",
                "5. Take all gang turfs, bank $1,000,000, hit 100% completion, then start a new game for '...Here we go again'.",
                "Tip: 'Today Was a Good Day' needs a full in-game day with zero crimes - park somewhere safe, put the controller down, and let the clock run rather than trying to behave while driving."
            ]
        }
    ]
};
