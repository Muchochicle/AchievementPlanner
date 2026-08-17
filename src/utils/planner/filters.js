export function applyFilter(filter) {

    const cards = document.querySelectorAll(".steam-achievement-card");

    cards.forEach(card => {

        // Steam-authoritative completion, baked in at render time - no
        // interactive control on the card to read instead.
        const completed = card.dataset.completed === "true";

        switch (filter) {

            case "completed":

                card.style.display =
                    completed ? "flex" : "none";

                break;

            case "pending":

                card.style.display =
                    completed ? "none" : "flex";

                break;

            default:

                card.style.display = "flex";

        }

    });

}

export function initAchievementFilters() {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {

        if (button.dataset.filterBound) {

            return;

        }

        button.dataset.filterBound = "true";

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            applyFilter(button.dataset.filter);

        });

    });

    const activeButton =
        document.querySelector(".filter-btn.active");

    applyFilter(activeButton?.dataset.filter ?? "all");

}