export async function getSteamSession() {

    const response = await fetch(
        "http://localhost:3000/api/me",
        {
            credentials: "include"
        }
    );

    return await response.json();

}