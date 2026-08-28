// Content Warning Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/content-warning.json), whose 48 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   2881650 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below
//   ("SpöökTube" is spelt with the umlaut in Steam's text - preserved
//   byte-for-byte, along with several curly apostrophes).
// - Sections group by what each achievement needs: view milestones,
//   uploads and money, room unlocks, the Network Deals, monster/event
//   filming, and the emote/joke unlocks.
export const GUIDE = {
    "slug": "content-warning-achievement-guide",
    "category": "game",
    "gameSlug": "content-warning",
    "icon": "📹",
    "title": "Content Warning Achievement Guide",
    "summary": "A practical guide to all 48 Steam achievements in Content Warning - none are hidden. The weekly and per-video SpöökTube view milestones, the upload and money goals, the room and equipment unlocks, the seven Network Deals, the monster and event filming achievements, and the emote and joke unlocks.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Content Warning has 48 Steam achievements and none are hidden. Almost everything comes from playing dives with friends, filming monsters and events for views, upgrading the house, and completing the seven Network Deals.",
                "Nothing is missable - your channel, money and unlocks persist across sessions - and the game is short per run, so this is a \"keep diving\" completion. The longest are the big view milestones (2.5M weekly views, 1M views on one video) and uploading 100 videos.",
                "Tip: dive with a full group, always film every monster and reaction you can, and upload the best footage every week - the view milestones, the money and most of the filming achievements all advance from the same loop."
            ]
        },
        {
            "heading": "Weekly & Per-Video View Milestones",
            "body": [
                "The two view ladders: total Weekly Views (100k, 500k, 1M, 2.5M) and views on a single video (10k, 100k, 500k, 1M).",
                "The achievements here: Spööktube Sensation (Reach 100k Weekly Views); Spööktube Famous (Reach 500k Weekly Views); Spööktube Superstar (Reach 1M Weekly Views); Spööktube Cloutlord (Reach 2,5M Weekly Views); Spööktube Bronze (Get 10k Views On A Spööktube Video); Spööktube Silver (Get 100k Views On A Spööktube video); Spööktube Gold (Get 500k Views On A Spööktube video); Spööktube Platinum (Get 1M Views On A Spööktube video)."
            ]
        },
        {
            "heading": "Uploads & Money",
            "body": [
                "Saving a video, buying all hats, uploading your first video and 100 videos, and earning $100 and $100,000.",
                "The achievements here: Archivist (Save A Spööktube Video); Hat Trick (Buy All Hats); Spööktube Pioneer (Uploaded Your First Video To Spööktube); Spööktube Master (Uploaded 100 Videos To Spööktube); Pocket Change (Earn $100); Rolling in It (Earn $100,000)."
            ]
        },
        {
            "heading": "Unlocks & New Rooms",
            "body": [
                "Opening the Monitor Room and unlocking the Trampoline, Podcast Studio, Green Screen, Cinema and Pool.",
                "The achievements here: Behind the Screens (Open The Monitor Room); Bouncy Break (Unlock Trampoline); On Air (Unlock Podcast Studio); We’ll Fix It in Post (Unlock Green Screen); Home Theater (Unlock Cinema); Swimfluencer (Unlock Pool)."
            ]
        },
        {
            "heading": "Network Deals",
            "body": [
                "Completing each of the seven Network Deals: Norf Gun, MoneyMoney, Reporter, Dance Video, Donkey, MultiMonster and HoldTheBombo.",
                "The achievements here: Norf or Nothing (Finish Norf Gun Network Deal); Money Money (Finish MoneyMoney Network Deal); Breaking News! (Finish Reporter Network Deal); Dancing Queen (Finish Dance Video Network Deal); Don’t Try This at Home (Finish Donkey Network Deal); Gotta Film 'Em All (Finish MultiMonster Network Deal); Explosive Content (Finish HoldTheBombo Network Deal)."
            ]
        },
        {
            "heading": "Filming Monsters & Events",
            "body": [
                "Filming specific monsters and events for content: the Catchya (once and 10 times), sleeping in the ceiling, the Shroom curse, filming Big Slap, Flicker and The Streamer, being taken by Jello, recovering a lost camera, and scaring The Ear by being loud.",
                "The achievements here: Not a Bot! (Perform A Catchya); Verified Human (Perform 10 Catchyas); Bat Nap (Sleep In The Ceiling); Shroomed Out (Got Curse Of Shroom); Big Slap (Film Big Slap); Did you see that? (Film Flicker); Ewan Conan (Film The Streamer); Any% Done (Die Within 30 Seconds); Jello'd (Get Taken By Jello); Lost & Found (Recover A Lost Camera); Let’s Get Loud! (Scare The Ear By Being Loud)."
            ]
        },
        {
            "heading": "Emotes & Messing Around",
            "body": [
                "The joke unlocks: changing your face, the defib revive, getting left behind, summoning and zapping Big Slap, listening to Phonk, the Ancient Gesture and Peace emote, dying within 30 seconds, Party Time, and slipping on the trampoline.",
                "The achievements here: Face Off (Change Face); Certified Medic (Revive A Friend Using The Defib); Eh, Guys? (Got Left Behind (Dive bell goes up without you)); Sir Slap (Summon Big Slap); Sigma (Listen to Phonk); Ancient Gesture (Use Ancient Gesture); Peace & Love (Use Peace Emote); Big Zap (Zap Big Slap); Party Time! (Party Time); Oops! (Slip On The Trampoline)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Dive every session with a group, film everything, and upload weekly - the view milestones, money, and monster-filming achievements accumulate naturally.",
                "2. Buy the room unlocks (Trampoline, Podcast Studio, Green Screen, Cinema, Pool) and all hats as money comes in, and open the Monitor Room.",
                "3. Take and complete each Network Deal as it is offered - there are only seven.",
                "4. Do the joke achievements deliberately on a throwaway dive: Any% Done (die in 30s), Oops! (slip on the trampoline), Sigma (listen to Phonk), the emotes, and the Big Slap interactions.",
                "5. Grind the last view milestones (Spööktube Cloutlord, Spööktube Platinum) and Spööktube Master (100 uploads).",
                "Tip: many monster-filming achievements need that specific monster to spawn - if you are hunting a particular one (Flicker, Big Slap, The Streamer), keep re-diving the same level until it shows up rather than moving on."
            ]
        }
    ]
};
