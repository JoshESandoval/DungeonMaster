let backdrop = document.getElementById("backdrop");
let playerPool = document.getElementById("player-pool");
let aContainer = document.getElementById("backdrop");

function AddPlayer() {
    var playerName = document.getElementById("player-name");
    var newPlayer = document.createElement("span");


    newPlayer.innerHTML = playerName.value;
    newPlayer.className = "m-4 rounded-full bg-red-300 hover:bg-slate-200 ";
    newPlayer.id = playerName.value;

    playerPool.appendChild(newPlayer);

    playerName.value = "";
}

function makeGrid() {
    var gridWidth = document.getElementById("gridWidth").value;
    var gridHeight = document.getElementById("gridHeight").value;

    for (var i = 0; i < gridHeight; i++) {
        var aRow = document.createElement("div");
        aRow.id = "Row";
        aContainer.appendChild(aRow);
        aRow.className = "m-4 rounded-full bg-red-300 hover:bg-slate-200 "

        for (var j = 0; j < gridWidth; j++) {
            var aCol = document.createElement("span");
            aCol.id = i.toString() + j.toString();
            aCol.innerHTML = i.toString() + j.toString();
            aRow.appendChild(aCol);
            aCol.onclick = 
            aCol.className = "m-4 rounded-full bg-red-300 hover:bg-slate-200 "
        }
    }

}

function setPlayer() {
    var name = input("Move Which player Here?");

}
