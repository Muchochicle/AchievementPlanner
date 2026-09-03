// A mailto: hand-off gives the calling page no direct signal at all about
// whether it actually opened a mail client - there is no fetch response,
// no promise, no event fired by the browser for "a handler existed" vs.
// "nothing happened". Without some signal, the previous implementation's
// only option was to either claim a fake "message sent" (exactly what the
// project's own requirements forbid: never claim success for something
// that wasn't actually confirmed) or say nothing at all (the original bug
// - clicking Send visibly did nothing).
//
// The one real, commonly-used heuristic: handing off to an external
// protocol handler (mailto:, tel:, etc.) blurs the browser window/tab as
// the OS switches focus to that external app. If the window loses focus
// shortly after navigating, a mail client most likely opened; if it
// doesn't, there's probably no mail client configured on this device at
// all (a very common case for anyone using only webmail). This is a
// best-effort signal, not a guarantee - which is exactly why the caller
// (src/js/profile.js) never phrases either outcome as certain, and always
// shows the real support address as a fallback regardless of which branch
// fires.
//
// Every side effect is injectable (navigate/addBlurListener/
// removeBlurListener/wait) so this resolves deterministically in tests
// without a real window, timers, or a mail client - see
// test/attemptMailto.test.js.
export function attemptMailto(url, {

    navigate = href => { window.location.href = href; },
    addBlurListener = handler => window.addEventListener("blur", handler, { once: true }),
    removeBlurListener = handler => window.removeEventListener("blur", handler),
    wait = ms => new Promise(resolve => setTimeout(resolve, ms)),
    timeoutMs = 1200

} = {}) {

    return new Promise(resolve => {

        let blurred = false;

        const onBlur = () => {

            blurred = true;

        };

        addBlurListener(onBlur);

        navigate(url);

        wait(timeoutMs).then(() => {

            removeBlurListener(onBlur);

            resolve(blurred);

        });

    });

}
