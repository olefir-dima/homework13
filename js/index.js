document.addEventListener("DOMContentLoaded", function () {
  const tableContainer = document.getElementById("tableContainer");

  function createMultiplicationTable(rows, cols) {
    const table = document.createElement("table");

    for (let i = 0; i <= rows; i++) {
      const row = document.createElement("tr");

      for (let j = 0; j <= cols; j++) {
        const cell = document.createElement("td");
        if (i === 0 && j === 0) cell.textContent = "";
        else if (i === 0) cell.textContent = j;
        else if (j === 0) cell.textContent = i;
        else {
          cell.textContent = i * j;
          if (i === j) cell.classList.add("square");
        }
        row.appendChild(cell);
      }
      table.appendChild(row);
    }

    return table;
  }

  const multiplicationTable = createMultiplicationTable(10, 10);
  tableContainer.appendChild(multiplicationTable);
});
