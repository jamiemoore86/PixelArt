//Variable setup
const sizePickerForm = document.getElementById("sizePicker");
const pixelCanvasTable = document.getElementById("pixelCanvas")
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");

let chosenColor = document.getElementById("colorPicker");

//Look for submit button click
sizePickerForm.addEventListener("submit", makeGrid, false);

//Create the grid and set up event listeners
function makeGrid(submitButton) {
    submitButton.preventDefault();

    //Clear Grid before creating new one
    pixelCanvasTable.innerHTML = "";

    let height = inputHeight.value;
    let width = inputWidth.value;

    //Loop based on chosen height
    for(var i = 0; i <= height; i++)
    {
        let trElement = document.createElement("tr");

        //Loop based on chosen width
        for(var j = 0; j <= width; j++)
        {
            let tdElement = document.createElement("td");
            //Add event listener for each td element and call changeColor
            tdElement.addEventListener("click", changeColor, false);
            trElement.appendChild(tdElement);
        }

        pixelCanvasTable.appendChild(trElement);
    }
}

//Apply the color to the clicked cell
function changeColor(clickedCell) {
    clickedCell.target.style.backgroundColor = chosenColor.value;
}