export function updateProgress() {

    const checkboxes =
        document.querySelectorAll(".achievement-check input");

    const completed =
        [...checkboxes].filter(box => box.checked).length;

    const total = checkboxes.length;

    const percentage =
        total
            ? Math.round(completed / total * 100)
            : 0;

    document.getElementById("progress-fill").style.width =
        `${percentage}%`;

    document.getElementById("progress-counter").textContent =
        `${completed} / ${total}`;

    document.getElementById("progress-text").textContent =
        `${percentage}% completed`;

}