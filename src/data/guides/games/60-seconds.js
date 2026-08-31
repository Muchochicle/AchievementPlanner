// 60 Seconds! Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/60-seconds.json), whose 56 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   368360 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "60-seconds-achievement-guide",
    "category": "game",
    "gameSlug": "60-seconds",
    "icon": "☢️",
    "title": "60 Seconds! Achievement Guide",
    "summary": "A practical guide to all 56 Steam achievements in 60 Seconds! - none are hidden. Covers the survival milestones and endings, the scavenge and event achievements, the difficulty and choice achievements, and the challenges and secret storylines. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "60 Seconds! has 56 Steam achievements and none are hidden. Fourteen are survival milestones and shelter-play goals (5/10/20/40/111 days, collecting soup and water, breaking everything, both endings), fourteen are events and characters (mutant roaches, finding the dog, rescuing the whole family, the military rescue), fourteen are difficulty and choice runs (winning every mode on each of the three difficulties, no-weapon defence, always-YES and always-NO wins, 30 trades), and fourteen are the timed challenges and the game's branching secret storylines (the cat questline, the VIP bunker, 'Soup Can into Space', and the Deedee / Rick / Enigma threads).",
                "The catalog marks it difficulty 3 and several runs. The survival is RNG-heavy, and the secret storylines each need a specific chain of choices over multiple expeditions, so a checklist helps.",
                "Tip: alternate between careful survival runs (for the day milestones) and deliberately branching runs where you chase one secret storyline at a time."
            ]
        },
        {
            "heading": "Survival Milestones & Endings",
            "body": [
                "Surviving 5, 10, 20, 40 and 111 days, collecting 10 soup cans and 10 water bottles, breaking or using one and then everything in the shelter, turning it into a madhouse, scavenging every item at least once, the government fallout drill, and both the bad and good ('Rescue time!') endings.",
                "The achievements here: Prepper (Survive 5 days in your fallout shelter.); I will survive! (Last for 10 days in your fallout shelter.); Survivalist (Stay in your fallout shelter for 20 days.); Last man standing (Stay alive in your fallout shelter for 40 days.); Konrad style! (Beat the fallout shelter survival record.); Souper! (Collect 10 soup cans from your house.); 2-1-6 (Collect 10 water bottles from your house.); Danger zone (Break or use everything possible in your shelter.); All thumbs (Break or use something in your fallout shelter.); Cuckoo's nest (Turn your fallout shelter into a madhouse.); Gotta get 'em all (Scavenge each item at least once.); Atomic drill (Complete the government endorsed fallout drill.); This is the end (It's all over.); Rescue time! (Get rescued by the military.)."
            ]
        },
        {
            "heading": "Events & Characters",
            "body": [
                "Fighting the mutant roaches, dying in the shelter, finding the dog, rescuing the whole family, ramming 1337 obstacles, trimming Ted's beard, reaching the shelter in time (and not), the mutant and 'Miracle' events, meeting the 'law-enforcement', the 'Pro gamer' minimal-supplies run, ramming a toilet, and the 'Enola Gay' every-mode win on Little Boy difficulty.",
                "The achievements here: Bughunter (Show those mutant roaches who is in charge.); One way ticket (Die in your fallout shelter.); Friend in need (Find a new friend.); Family guy (Rescue the whole family.); Tora! Tora! Tora! (Ram 1337 obstacles in your house.); Lumbersexual (Trim Ted's beard the trendy way.); Home, sweet home (Get to the shelter before the bomb hits.); New species (Mutant!!!); Duck and cover! (Survival is overrated. Stay to see the fireworks!); Miracle (Listen to the voices from beyond.); New order (Meet the local 'law-enforcement'.); Pro gamer (In Apocalypse mode grab only what a real gamer needs.); Unplugged (Ram a toilet.); Enola Gay (Win a game in every mode on Little Boy difficulty.)."
            ]
        },
        {
            "heading": "Difficulty, Choices & Trades",
            "body": [
                "Winning every mode on Fat Man and Tsar Bomba difficulty, stocking the shelter, allying with wastelanders, no-weapon defence, beating three bandit attacks in one game, fully exploring the shelter, 'What goes around...', always-NO and always-YES wins, receiving a gift, rescuing someone from bandits, showing your evil self, and 30 successful trades.",
                "The achievements here: Manhattan Project (Win a game in every mode on Fat Man difficulty.); Dead Hand (Win a game in every mode on Tsar Bomba difficulty.); Be Prepared (Don't forget to stock your shelter.); A New Hope (Ally with other wastelanders.); Pacifist (Defend yourself without a weapon.); Unbreakable (Defeat three bandit attacks in one game.); No stone unturned (Fully explore your shelter.); What goes around... (Give and get back.); Naysayer (Always say NO and win.); Yes Man (Always say YES and win.); A gift (Receive a gift.); Liberation (Rescue someone from the bandits.); The Dark Side (Show your evil self.); Fair Exchange (Perform 30 successful trades.)."
            ]
        },
        {
            "heading": "Challenges & Secret Storylines",
            "body": [
                "The Holidays! and generic challenge completions, the stylish hat, the cat companion and the cat-vs-dog outcome, 'Soup Can into Space', the VIP bunker, the 'Cat Lady' / 'Feline Domination' cat-takeover thread, the 'Girl Power' Dolores run, 'Disco Roach', and the 'Enigma' / 'Dawkins Residence' / 'Not Alone' secret threads.",
                "The achievements here: Holidays! (Complete the Holidays! challenge.); Challenger (Complete one challenge.); Mad Hatter (Put on a stylish hat.); Out of the Bag (Find a new companion.); Raining Cats and Dogs (There can only be one.); Soup Can into Space (Reach for the stars.); Men in Black (Find your way into the VIP bunker.); Cat Lady (Learn to serve and obey the new masters.); Feline Domination (Look at me. I'm the captain, meow.); Girl Power (Live through the nuclear blast as Dolores.); Disco Roach (Make them dance.); Enigma (Reconnect with old friends.); Dawkins Residence (Find Deedee's apartment.); Not Alone (If you play it, they will come.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Do a few honest survival runs for the 5/10/20/40-day milestones and both endings.",
                "2. Chase the scavenge and shelter achievements ('Gotta get 'em all', 'Danger zone', 'Cuckoo's nest').",
                "3. Do focused choice runs: always-YES, always-NO, no-weapon defence, 30 trades.",
                "4. Win every mode on each of the three difficulties (Little Boy, Fat Man, Tsar Bomba).",
                "5. Work the secret storylines one per run: the cat takeover, the VIP bunker, Deedee, Rick, Enigma, 'Soup Can into Space'.",
                "Tip: many secret-storyline steps need you to consistently send the same character on expeditions and keep them alive - decide the thread before the bomb drops and grab the items it needs in your 60 seconds."
            ]
        }
    ]
};
