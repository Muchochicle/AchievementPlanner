// THE LONGING Game Guide. Sources:
//
// - PRIMARY: this app's own catalog data
//   (backend/catalog/games/the-longing.json), whose 25 achievements were
//   sourced directly from Steam's own achievement schema for appid
//   893850 via ISteamUserStats/GetSchemaForGame (fetched through this
//   app's own backend/services/steamApi.js).
// - None of the achievements are hidden; every description is
//   Steam's own real text, quoted verbatim.
// - Sections are ordered chunks of the schema with a short thematic
//   intro rather than a hand-picked bucket.
export const GUIDE = {
    "slug": "the-longing-achievement-guide",
    "category": "game",
    "gameSlug": "the-longing",
    "icon": "⏳",
    "title": "THE LONGING Achievement Guide",
    "summary": "A practical guide to all 25 Steam achievements in THE LONGING - none are hidden. Covers decorating your cave home, exploring every corner of it, and finding the many small comforts your Shade can gather while waiting 400 days for the King to wake. None of the achievements are hidden.",
    "relatedSlugs": [
        "achievement-completion-and-tracking",
        "understanding-achievement-availability"
    ],
    "sections": [
        {
            "heading": "Overview",
            "body": [
                "THE LONGING has 25 Steam achievements and none are hidden. They cover finding paintings, a birthday, a musical instrument, the Halls of Eternity, a map, secret places like the Tower and the Library, someone to talk to, running water, colorful stones and crystals, a bed and a mattock, reading every book, enlarging your home, growing mushrooms, and fully exploring the cave - alongside the story's real-time ending itself.",
                "The catalog marks it difficulty 2. THE LONGING is built around a real 400-day wait (which can be sped up by actively exploring and decorating), so most achievements are collected by exploring thoroughly rather than by skill.",
                "Tip: actively explore and decorate your home rather than just letting time pass - most of these achievements are things you find and build, and doing so also shortens the wait to the ending."
            ]
        },
        {
            "heading": "Home Comforts & Secrets",
            "body": [
                "Finding pictures for your wall, a birthday, a musical instrument, the Halls of Eternity, a map of the kingdom, the secret Tower, the secret Library, a face to talk to, running water, a horse's head, colorful stones, and becoming darkness.",
                "The achievements here: My Favourite Painting (I definitely need more pictures on my wall. Especially...); Birthday (At least my birthday will be a bit sooner.); Wah Wah Wah Waaah (I wish I could play my favourite tune on my instrument to ease the pain of solitude.); The Halls of Eternity (l read about the halls of eternity, a place where time stands still.); The Map (I could really use a map of the kingdom.); The End of Longing (When will my longing end?); Secret Tower (The cave is supposedly full of hidden places.); The Library (There is a secret library somewhere in the kingdom. I could use some more books, so I'd very much like to find it.); A Face (I'd really like to converse with someone. Anyone...); Running Water (I could use some running water in my home. Not that I have any need for hygiene, I just like the sound.); Head of a Horse (It is very lonely down here. From time to time it would be nice to see another pair of eyes.); Colorful Stones (I wish I had more colors for my art studies. It should be possible to find some different colored stones in the cave.); Becoming Darkness (Where is this darkness?)."
            ]
        },
        {
            "heading": "Building, Reading & Full Exploration",
            "body": [
                "Dreaming of another place, building a bed and a mattock, leaving darkness, a disappointing achievement, crystal glory, enlarging your home, reading every book, a never-ending notebook, a truly comfortable home, growing mushrooms, and fully exploring the cave.",
                "The achievements here: Dream (I wish I could dream of another place.); Bed (A bed would be a nice addition to my furniture. I could probably build one if I had the right materials.); Mattock (A mattock would be a nice tool to have down here.); Leaving Darkness (Will I ever overcome it?); Disappointing Achievement (I should make a list of my failings. Maybe that will be a small accomplishment at least.); Crystal Glory (There are crystals in many colors. I could harvest some of them and decorate my room.); Home Improvement (I could try to enlarge my little home by hacking through the walls.); Avid Reader (I really need to read more...); Neverending Notebook (My dream would be to find a book that never ends.); Home Sweet Home (My home is not comfortable enough for this long wait.); Mushroom Gardener (Luckily I don't need to eat, but it would be nice to grow some pretty mushrooms.); The Cave (I wonder when I will have discovered every part of the cave?)."
            ]
        },
        {
            "heading": "Suggested Order",
            "body": [
                "1. Explore your cave home thoroughly from the start, decorating with paintings and colorful stones as you find them.",
                "2. Build furniture and tools - a bed, a mattock, running water - and enlarge your home by hacking through walls.",
                "3. Search for the cave's secrets - the Tower, the Library, and a face to talk to.",
                "4. Read every book you find, and grow mushrooms for décor.",
                "5. Keep exploring until you've found every part of the cave, and let the story reach its real-time ending.",
                "Tip: actively playing (not just waiting) shortens the 400-day wait, so treat exploration and decorating as the fast path to the ending too."
            ]
        }
    ]
};
