export function applyFilter(filter) {

    const cards = document.querySelectorAll(".achievement-card");

    cards.forEach(card => {

        const checked = card.querySelector(
            ".achievement-check input"
        ).checked;

        switch (filter) {

            case "completed":

                card.style.display =
                    checked ? "flex" : "none";

                break;

            case "pending":

                card.style.display =
                    checked ? "none" : "flex";

                break;

            default:

                card.style.display = "flex";

        }

    });

}

export function initAchievementFilters() {

    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            applyFilter(button.dataset.filter);

        });

    });

}