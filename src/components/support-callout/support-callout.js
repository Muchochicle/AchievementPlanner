import { escapeHtml } from "../../utils/format/escapeHtml.js";
import { SUPPORT_URL, SUPPORT_PLATFORM, hasSupportDestination } from "../../utils/support/supportConfig.js";

// Task 6: the "Support Achievement Planner" section shown on the Podiums
// page, in place of a donations leaderboard.
//
// Why no leaderboard: a supporter ranking would need automatic, verified
// per-user donation amounts. An external donation link (PayPal, Ko-fi,
// etc. - the deliberately simple approach the brief asks for) gives this
// site no such data: it never sees who donated or how much. Rather than
// fabricate a hardcoded leaderboard (explicitly forbidden by the brief),
// this section is just an honest support ask.
//
// Two states, driven entirely by src/utils/support/supportConfig.js:
//   - no real destination configured yet -> an honest "not available yet"
//     note. No fake link, no "donate" button that goes nowhere.
//   - a real https:// destination configured -> a real outbound button.
export function createSupportCallout() {

    const configured = hasSupportDestination();

    const platform = SUPPORT_PLATFORM ? escapeHtml(SUPPORT_PLATFORM) : "an external payment platform";

    const action = configured
        ? `
            <a
                class="btn-primary support-callout-btn"
                href="${escapeHtml(SUPPORT_URL)}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Support Achievement Planner${SUPPORT_PLATFORM ? ` via ${platform}` : ""}
            </a>
            <p class="support-callout-fineprint">
                Opens ${platform} in a new tab. Achievement Planner never sees your
                payment details - the donation is handled entirely there.
            </p>
        `
        : `
            <p class="support-callout-pending">
                A donation link isn't set up yet. When it is, it'll appear right
                here - handled through ${platform}, never through this site
                directly.
            </p>
        `;

    return `

        <section class="support-callout" aria-labelledby="support-callout-heading">

            <h2 id="support-callout-heading" class="podiums-group-title">Support Achievement Planner</h2>

            <div class="support-callout-body">

                <p>
                    Achievement Planner is a free, independent, fan-made project. If
                    it's been useful to you and you'd like to help keep it running,
                    a small one-off contribution goes a long way.
                </p>

                ${action}

                <p class="support-callout-note">
                    There's no supporter leaderboard: donations happen on ${platform},
                    which doesn't tell this site who contributed - so any such ranking
                    would be guesswork, and we won't fake one. Support is always
                    optional and never unlocks anything in the app.
                </p>

            </div>

        </section>

    `;

}
