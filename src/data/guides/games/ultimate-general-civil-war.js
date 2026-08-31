// Ultimate General: Civil War Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/ultimate-general-civil-war.json), whose 39 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   502520 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "ultimate-general-civil-war-achievement-guide",
    "category": "game",
    "gameSlug": "ultimate-general-civil-war",
    "icon": "🎖️",
    "title": "Ultimate General: Civil War Achievement Guide",
    "summary": "A practical guide to all 39 Steam achievements in Ultimate General: Civil War - none are hidden. Covers the Confederate and Union campaign medals and the historical-battle wins for both sides. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Ultimate General: Civil War has 39 Steam achievements and none are hidden. Fifteen are campaign medals - seven Confederate and seven Union medal tiers (the top tiers require Brigadier General or Major General difficulty) plus 'The Civil War Campaign Medal' for a campaign battle win. The other twenty-four are winning each of the twelve historical battles (Antietam, Bull Run, Chancellorsville, Chickamauga, Cold Harbor, Fredericksburg, Gaines' Mill, Gettysburg, Malvern Hill, 2nd Manassas, Shiloh, Stones River) as both the Confederacy and the Union.",
                "The catalog marks it difficulty 4 and about four campaigns. The top medals only unlock on Major General difficulty, so 100% needs a Union and a Confederate campaign on that difficulty, plus every historical battle won from both sides.",
                "Tip: run a Confederate and a Union campaign on Major General for the top medals, and play every historical battle scenario as each faction."
            ]
        },
        {
            "heading": "Campaign Medals",
            "body": [
                "The seven Confederate medal tiers (the top two Major General only, the fifth Brigadier General or higher), the seven Union medal tiers (same difficulty rules), and 'The Civil War Campaign Medal' for winning a campaign battle.",
                "The achievements here: The Southern Cross of Honor (7th Level Confederate Medal (can be achieved only on \"Major General\" difficulty)); The Roll of Honor Medal (6th Level Confederate Medal (can be achieved only on \"Major General\" difficulty)); The Distinguished Service Medal (5th Level Confederate Medal (can be achieved only on \"Brigadier General\" difficulty or higher)); The Meritorious Service Medal (4th Level Confederate Medal); The Confederate Officer Star (3rd Level Confederate Medal); The Homeland Defense Cross (2nd Level Confederate Medal); The War Service Medal (1st Level Confederate Medal); The Medal of Honor (7th Level Union Medal (can be achieved only on \"Major General\" difficulty)); The Distinguished Service Cross (6th Level Union Medal (can be achieved only on \"Major General\" difficulty)); The Meritorious Service Cross (5th Level Union Medal (can be achieved only on \"Brigadier General\" difficulty or higher)); The Defense Superior Service Medal (4th Level Union Medal); The Union Officer Medal (3rd Level Union Medal); The Union Protector Star (2nd Level Union Medal); The War Service Medal (1st Level Union Medal); The Civil War Campaign Medal (Win a campaign battle)."
            ]
        },
        {
            "heading": "Historical Battles: Antietam - Gettysburg",
            "body": [
                "Winning the historical battles of Antietam, Bull Run, Chancellorsville, Chickamauga, Cold Harbor, Fredericksburg, Gaines' Mill and Gettysburg as both the Confederacy and the Union.",
                "The achievements here: Confederate hero in Battle of Antietam (Win the historical battle of Antietam as Confederate); Union hero in Battle of Antietam (Win the historical battle of Antietam as Union);  Confederate hero in Battle of Bull Run (Win the historical battle of Bull Run as Confederate); Union hero in Battle of Bull Run (Win the historical battle of Bull Run as Union); Confederate hero in Battle of Chancellorsville (Win the historical battle of Chancellorsville as Confederate); Union hero in Battle of Chancellorsville (Win the historical battle of Chancellorsville as Union); Confederate hero in Battle of Chickamauga (Win the historical battle of Chickamauga as Confederate); Union hero in Battle of Chickamauga (Win the historical battle of Chickamauga as Union); Confederate hero in Battle of Cold Harbor (Win the historical battle of Cold Harbor as Confederate); Union hero in Battle of  Cold Harbor (Win the historical battle of Cold Harbor as Union); Confederate hero in Battle of Fredericksburg (Win the historical battle of Fredericksburg as Confederate); Union hero in Battle of Fredericksburg (Win the historical battle of Fredericksburg as Union); Confederate hero in Battle of Gaines' Mill (Win the historical battle of Gaines' Mill as Confederate); Union hero in Battle of Gaines' Mill (Win the historical battle of Gaines' Mill as Union); Confederate hero in Battle of Gettysburg (Win the historical battle of Gettysburg as Confederate); Union hero in Battle of Gettysburg (Win the historical battle of Gettysburg as Union)."
            ]
        },
        {
            "heading": "Historical Battles: Malvern Hill - Stones River",
            "body": [
                "Winning the historical battles of Malvern Hill, 2nd Manassas, Shiloh and Stones River as both the Confederacy and the Union.",
                "The achievements here: Confederate hero in Battle of Malvern Hill (Win the historical battle of Malvern Hill as Confederate); Union hero in Battle of Malvern Hill (Win the historical battle of Malvern Hill as Union); Confederate hero in Battle of 2nd Manassas (Win the historical battle of 2nd Manassas as Confederate); Union hero in Battle of 2nd Manassas (Win the historical battle of 2nd Manassas as Union);  Confederate hero in Battle of Shiloh (Win the historical battle of Shiloh as Confederate); Union hero in Battle of Shiloh (Win the historical battle of Shiloh as Union); Confederate hero in Battle of Stones River (Win the historical battle of Stones River as Confederate);  Union hero in Battle of Stones River (Win the historical battle of Stones River as Union)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Play a full Confederate campaign on Major General difficulty for the top Confederate medals.",
                "2. Play a full Union campaign on Major General for the top Union medals.",
                "3. Play every historical battle scenario as the Confederacy.",
                "4. Play every historical battle scenario as the Union.",
                "Tip: the historical battles are standalone scenarios (not part of the campaign), so you can grind all 24 quickly on a lower difficulty once you know each map - only the medals need Major General."
            ]
        }
    ]
};
