import {

    createProfileHeader

} from "../profile-header/profile-header.js";
import {

    createProfileStats

} from "../profile-stats/profile-stats.js";

export function createProfilePage() {

    return `

        <section class="profile-page">

            ${createProfileHeader()}

            ${createProfileStats()}

            <div id="profile-sections"></div>

        </section>

    `;

}