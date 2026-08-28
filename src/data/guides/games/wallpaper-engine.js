// Wallpaper Engine Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/wallpaper-engine.json), whose 17 achievements
//   were sourced directly from Steam's own achievement schema for appid
//   431960 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js). None are hidden; every one
//   ships a real, official Steam description, quoted verbatim below (a
//   few favourite-tier names read 25/50/100 while their descriptions ask
//   for 20/30/50 - both preserved as Steam has them).
// - Sections group by what each achievement needs: creating and
//   publishing, using Workshop wallpapers, and favouriting them.
export const GUIDE = {
    "slug": "wallpaper-engine-achievement-guide",
    "category": "game",
    "gameSlug": "wallpaper-engine",
    "icon": "🖼️",
    "title": "Wallpaper Engine Achievement Guide",
    "summary": "A practical guide to all 17 Steam achievements in Wallpaper Engine - none are hidden. The create-and-publish achievements (scene, video, web and app wallpapers, templates, the editor easter eggs), the use-N-Workshop-wallpapers tiers, and the favourite-N-Workshop-wallpapers tiers.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "Wallpaper Engine has 17 Steam achievements and none are hidden. They split three ways: making and publishing wallpapers of each type, using different Workshop wallpapers, and favouriting different Workshop wallpapers.",
                "Nothing is missable and there is no challenge - the only \"grind\" is Out of disk space (use 100 different Workshop wallpapers) and Wallpaper Connoisseur (favourite 50). Publishing requires a Steam account able to post to the Workshop.",
                "Tip: the create achievements only need a wallpaper that technically qualifies, not a good one - open the editor, drop in an image or template for each type (scene, video, web), and publish it to the Workshop (you can set it to hidden/friends-only)."
            ]
        },
        {
            "heading": "Creating & Publishing",
            "body": [
                "The creation achievements: posting a scene, video and web wallpaper to the Workshop, creating a local application-type wallpaper, using a 2D and a 3D scene template, posting a Steam screenshot with a Workshop wallpaper open, and the two editor easter eggs (a fatal error / 128 warnings, and the Konami code).",
                "The achievements here: High aspirations (Post a scene wallpaper to the Workshop.); Video makers (Post a video wallpaper to the Workshop.); The internet on a disk (Post a web wallpaper to the Workshop.); Press any key (Create a local application-type wallpaper.); Creativity according to instructions (Use a 2D scene template.); Working with 3D models (Use a 3D scene template.); Sharing is caring (Post a Steam screenshot with a Workshop wallpaper open.); Pest (Cause 1 fatal error or trigger 128 warnings in the editor.); k0n4m1 (30 lives)."
            ]
        },
        {
            "heading": "Using Workshop Wallpapers",
            "body": [
                "The \"use N different Workshop wallpapers\" tiers: 10, 25, 50 and 100.",
                "The achievements here: Trying something new (Use 10 different wallpapers from the Workshop.); Getting the hang of it (Use 25 different wallpapers from the Workshop.); Hard to pick just one (Use 50 different wallpapers from the Workshop.); Out of disk space (Use 100 different wallpapers from the Workshop.)."
            ]
        },
        {
            "heading": "Favouriting Workshop Wallpapers",
            "body": [
                "The \"favourite N different Workshop wallpapers\" tiers: 10, 20, 30 and 50 (the achievement names read 10/25/50/100 but the descriptions ask for 10/20/30/50).",
                "The achievements here: Keeping an eye on this one (Favorite 10 different wallpapers from the Workshop.); Found some good ones (Favorite 20 different Workshop wallpapers.); Fair collection (Favorite 30 different Workshop wallpapers.); Wallpaper Connoisseur (Favorite 50 different Workshop wallpapers.)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. In the editor, make and publish one wallpaper of each type - High aspirations (scene), Video makers (video), The internet on a disk (web) - and a local app wallpaper for Press any key.",
                "2. Use a 2D and a 3D template (Creativity according to instructions, Working with 3D models), take a screenshot with a Workshop wallpaper open (Sharing is caring), and do the two editor easter eggs (Pest, k0n4m1).",
                "3. Browse the Workshop and apply wallpapers, working through Trying something new, Getting the hang of it, Hard to pick just one and Out of disk space (10/25/50/100 used).",
                "4. Favourite wallpapers as you browse for Keeping an eye on this one, Found some good ones, Fair collection and Wallpaper Connoisseur.",
                "Tip: applying and favouriting can be done in a few minutes each - open a Workshop collection, click through 100 wallpapers applying and favouriting as you go, and both grind blocks finish together."
            ]
        }
    ]
};
