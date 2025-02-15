document.addEventListener("DOMContentLoaded", function() {
    const spreadsheet = document.getElementById("spreadsheet");

    // Create a 10x10 grid
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("contenteditable", "true");
            cell.setAttribute("data-row", row);
            cell.setAttribute("data-col", col);
            spreadsheet.appendChild(cell);
        }
    }

    // Optional: Add event listeners to handle cell changes
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("input", function() {
            console.log(`Cell [${cell.getAttribute("data-row")}, ${cell.getAttribute("data-col")}] updated: ${cell.textContent}`);
        });
    });
});
