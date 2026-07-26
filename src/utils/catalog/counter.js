export function updateFiltersCounter() {

    const total =

        document.querySelectorAll(

            ".filters-panel input:checked"

        ).length;

    const button =

        document.getElementById(

            "filters-toggle"

        );

    if (!button) {

        return;

    }

    if (!total) {

        button.textContent =

            "⚙ Filters";

        return;

    }

    button.textContent =

        `⚙ Filters (${total})`;

}