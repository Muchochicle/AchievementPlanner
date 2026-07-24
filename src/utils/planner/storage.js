export function saveProgress(slug) {

    const checkboxes = document.querySelectorAll(
        ".achievement-check input"
    );

    const progress = [...checkboxes].map(box => box.checked);

    localStorage.setItem(

        `planner-${slug}`,

        JSON.stringify(progress)

    );

}

export function loadProgress(slug) {

    const saved = localStorage.getItem(

        `planner-${slug}`

    );

    if (!saved) return;

    const progress = JSON.parse(saved);

    const checkboxes = document.querySelectorAll(
        ".achievement-check input"
    );

    checkboxes.forEach((box, index) => {

        box.checked = progress[index] || false;

    });

}