export function saveProgress(slug) {

    const checkboxes = document.querySelectorAll(
        ".achievement-check input"
    );

    const progress = {};

    checkboxes.forEach(box => {

        progress[box.dataset.id] = box.checked;

    });

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

    // Legacy saves were a positional boolean array (index = DOM order).
    // Current saves are an object keyed by achievement id, immune to
    // achievement-list reordering. Both are readable; only the new
    // id-keyed format is ever written going forward.
    const isLegacyArray = Array.isArray(progress);

    checkboxes.forEach((box, index) => {

        box.checked = isLegacyArray
            ? (progress[index] || false)
            : (progress[box.dataset.id] || false);

    });

}