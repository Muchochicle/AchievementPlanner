import {

    createProfileHeader

} from "../profile-header/profile-header.js";
import {

    createProfileStats

} from "../profile-stats/profile-stats.js";
import {

    createProfileBadges

} from "../profile-badges/profile-badges.js";

export function createProfilePage() {

    return `

        <section class="profile-page">

            ${createProfileHeader()}

            ${createProfileStats()}

            ${createProfileBadges()}

            <div id="profile-sections"></div>

        </section>

    `;

}