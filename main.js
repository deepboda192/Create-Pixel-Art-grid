let sizePicker = document.getElementById("sizePicker");
let inputWidth = document.getElementById("inputWidth");
let inputHeight = document.getElementById("inputHeight");
let color = document.getElementById("color-picker");
let pixelCanvas = document.getElementById("pixelCanvas");

function clearGrid() {
  const allRows = document.querySelectorAll("tr");
  allRows.forEach((row) => {
    row.remove();
  });
}

function makeGrid(e) {
  e.preventDefault();
  clearGrid();

  const width = inputWidth.value;
  const height = inputHeight.value;

  for (let i = 1; i <= height; i++) {
    //row element is created
    const row = document.createElement("tr");
    for (let j = 1; j <= width; j++) {
      // create column element
      const column = document.createElement("td");
      // append it to row element
      row.appendChild(column);
    }
    // append row element to table(i.e pixelCanvas) element
    pixelCanvas.appendChild(row);
  }
}

sizePicker.addEventListener("submit", makeGrid);

pixelCanvas.addEventListener("click", function (e) {
  e.target.style.backgroundColor = color.value;
});
