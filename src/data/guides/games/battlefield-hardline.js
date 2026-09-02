// Battlefield Hardline Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/battlefield-hardline.json), whose 62 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   1238880 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "battlefield-hardline-achievement-guide",
    "category": "game",
    "gameSlug": "battlefield-hardline",
    "icon": "🚔",
    "title": "Battlefield Hardline Achievement Guide",
    "summary": "A practical guide to all 62 Steam achievements in Battlefield Hardline - none are hidden. None of the 62 achievements are hidden - every description is Steam's own text. Covers the ten-episode crime campaign (detective play, case files, difficulty clears, episode secrets) and the Heist / Blood Money / Bounty Hunter / Hotwire multiplayer modes.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Battlefield Hardline has 62 Steam achievements and none of them are hidden. Battlefield Hardline swaps the military setting for a cops-and-criminals crime drama by Visceral Games. None of its 62 achievements are hidden. The single-player list covers the ten episode completions, the non-lethal takedowns and warrant scanning, the expert-level and case-file progression, a set of one-off episode moments, and the three difficulty clears. The multiplayer list is the Heist, Blood Money, Bounty Hunter and Hotwire modes plus large per-class kill grinds and weapon Gold Service Stars.",
                "Several single-player achievements (capture all warrants alive, complete all case files, reach Expert Level 15) reward playing like a detective - scanning, non-lethal takedowns, and thorough exploration - rather than shooting through.",
                "The catalog marks it difficulty 3, missable:true and recommends 2 playthroughs. The episode-secret achievements are one-shot moments, and the difficulty clears and the four per-class 10,000-kill multiplayer grinds are long commitments."
            ]
        },
        {
            "heading": "Single-Player Campaign",
            "body": [
                "The Prologue and ten episode completions, the detective feats (non-lethal takedowns, CEW stuns, warrant scanning, alarm disarms, grapple and zipline use), Expert Levels 5/10/15, the case files, the three difficulty clears, capturing all warrants alive, and the one-off episode moments (Roark's hidden room, the BBQ chef, the meth lab, the undetected Gauntlet run).",
                "The achievements here: On the Job (Complete the Prologue in single-player); Pressure Applied (Complete Ep. 1: Back to School); Bumpy Ride (Complete Ep. 2: Checking Out); Deal? What Deal? (Complete Ep. 3: Gator Bait); Good Guys (Complete Ep. 4: Case Closed); You Probably Have Questions (Complete Ep. 5: Gauntlet); Snow Blind (Complete Ep. 6: Out of Business); Hollyweird (Complete Ep. 7: Glass Houses); From Their Cold, Dead Hands (Complete Ep. 8: Sovereign Land); Some Damn Fine Fireworks (Complete Ep. 9: Independence Day); Served Cold (Complete Ep. 10: Legacy); Keep Digging, Detective (Complete any case file in single-player); By the Book (Do a Non-Lethal takedown on 10 criminals in single-player); You Tazed Him, Bro! (Stun 5 criminals with the T62 CEW in single-player); Watched, Dawg (Identify 10 warrants with the scanner in single-player); You're Getting Good at This (Reach Expert Level 5 in single-player); Damn Thing Doesn't Work (Disarm 2 alarm boxes in single-player); Cape and Ears Not Included (Climb a total of 10 meters with the grapple gun in single-player); Fast Rope Expert (Travel a total of 90 meters with the zipline crossbow in single-player); Almost an Expert (Reach Expert Level 10 in single-player); True Detective (Complete 3 case files in single-player); Motley Crew (Tag all criminals visible from the rooftop in Ep. 1: Back to School); Real Action Hero (Kill a criminal in Independence Day from mid-air after escaping the penthouse); Their Own Medicine (Steal a T62 CEW from the back of a police cruiser in Ep. 5: Gauntlet); Graceful Exit (Don't get spotted in the Ep. 5: Gauntlet); Knock Knock (Blow up the meth lab in Ep. 5: Gauntlet); A Craftsman's Tools (Find your weapons in Sovereign Land before instigating combat in the trailer park); Hollywood Hideaway (Find Roark's hidden room in Ep. 7: Glass Houses); BYOB (Use the BBQ to take out the chef in Ep. 7: Glass Houses); Social Climber (Find the hidden access to the mansion grounds in Ep. 10: Legacy); Case Closed (Complete all single-player episodes on Officer difficulty); Super Cop (Complete all single-player episodes on Veteran difficulty); Blue Eagle (Complete all single-player episodes on Hardline difficulty); Bring 'em to Justice (Capture all warrants alive in single-player); Dare Devil (Jump the dirt bike into the mansion grounds in Ep. 10: Legacy); One Good Cop (Reach Expert Level 15 in single-player); World's Greatest Detective (Complete all case files in single-player)."
            ]
        },
        {
            "heading": "Multiplayer",
            "body": [
                "Heist, Blood Money, Bounty Hunter, Hotwire and Squad Heist wins, the CEW and weapon kill totals, the four per-class 10,000-kill grinds, the Gold Service Stars for the M1A1, M1 Carbine, 1887, M1903 and more, rank 150, Competitive Matches, and the crafting/customization entry achievements.",
                "The achievements here: The Big Score (Win 5 Heist and 5 Blood Money matches in multiplayer); Electric Company (Take down 25 enemies with the T62 CEW in multiplayer); Menz in the Hood (Kill 25 enemies with a MAC-10 and 25 with a Double-Barrel Shotgun in multiplayer); Dead or Alive (Pick up 100 Bounties in the Bounty Hunter game mode); Got Your Back (Deny 100 Bounties in the Bounty Hunter game mode); Enforcing the Law (Get 10,000 kills with the Enforcer class); Operation Successful (Get 10,000 kills with the Operator class); Mechanical Trigger Finger (Get 10,000 kills with the Mechanic Class); Have Some Professionalism (Get 10,000 kills with the Professional class); Tommy's Favorite (Earn a Gold Service Star with the M1A1); Nailed It! (Get 100 kills with the Nail Gun); That's Not a Knife! (Kill 25 enemies with the Throwing Knife); Small Crew, Big Job! (Win 10 Squad Heist matches); Become Legend (Reach Rank 150); Grandpa's Automatic (Earn a Gold Service Star with the M1 Carbine); Bag of Tricks (Get an RPG kill while carrying the bag in a Capture the Bag match); I'll Be Back! (Earn a Gold Service Star with the 1887); Here's Johnny! (Kill 75 enemies with the Fire Axe); Test Your Mettle (Complete 25 Competitive Matches); The Ultimate Betrayal (Win a Heist match as a Cop and as a Criminal on each of the Betrayal maps); Bio-Beware! (Kill 50 enemies with Inquisition Swords); Locked & Loaded, Good to Go (Enter a match after crafting weapons in all five Gun Bench slots); Dressed to the Sixteens (Enter a match after customizing all 16 Class and Faction outfits); Bolt From the Blue (Get a Gold Service Star with the M1903); Ghost Ride the Whip (Get a Roadkill with the Hearse without being inside it)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play the campaign on Officer (easiest) difficulty first, playing like a detective - scan for warrants, take criminals alive, and explore thoroughly for the case files and episode secrets.",
                "2. On that run, do the one-off episode moments (Roark's room, the BBQ chef, the meth lab, the undetected Gauntlet, the dirt-bike jump).",
                "3. Replay on Veteran and then Hard for Super Cop and Blue Eagle, mopping up any warrants and case files missed.",
                "4. Play multiplayer, spreading time across Heist, Blood Money, Bounty Hunter and Hotwire for their win achievements.",
                "5. Grind the four per-class 10,000-kill achievements and the weapon Gold Service Stars - the longest tail in the list.",
                "Tip: reaching Expert Level 15 and completing all case files are done together on the campaign - a single careful, non-lethal, fully-explored playthrough covers most of the single-player list."
            ]
        }
    ]
};
