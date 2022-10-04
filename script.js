const grid = document.getElementById("minesweeper-grid");

let seeMines = true;
let minesValue = 20;

createGrid();

function createGrid() {
    grid.innerHTML = "";
    for (let i = 0; i < 10; i++) {
        row = grid.insertRow(i);
        for (var j = 0; j < 10; j++) {
            cell = row.insertCell(j);
        }
    }
    insertMines();
}

function generateRowAndCol() {
    return Math.floor(Math.random() * 10);
}

function insertMines() {
    for (let i = 0; i < minesValue; i++) {
        let cell = grid.rows[generateRowAndCol()].cells[generateRowAndCol()];
        if (cell.getAttribute("isMine")) {
            i--; //ensures no duplicates (i.e. always the correct number of mines)
        } else cell.setAttribute("isMine", "true");
        if (seeMines) cell.innerHTML = "x";
    }
}

function showMines() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let cell = grid.rows[i].cells[j];
            if (cell.getAttribute("isMine") == "true") cell.className = "mine";
            cell.innerHTML = "x";
        }
    }
}

function checkCompletion() {
    let levelComplete = true;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (
                grid.rows[i].cells[j].getAttribute("isMine") == "false" &&
                grid.rows[i].cells[j].innerHTML == ""
            )
                levelComplete = false;
        }
    }
    if (levelComplete) {
        //add congratulatory text above grid
        showMines();
    }
}
