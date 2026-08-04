import SteamAuth from "steam-openid";

const steam = new SteamAuth({

    realm: process.env.STEAM_REALM,

    returnUrl: process.env.STEAM_RETURN_URL,

    apiKey: process.env.STEAM_API_KEY

});

export default steam;