// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const sizePickerForm = document.getElementById("sizePicker");
const pixelCanvasTable = document.getElementById("pixelCanvas")

sizePickerForm.addEventListener("submit", makeGrid, false);

function makeGrid(submitButton) {
    submitButton.preventDefault();
    // Your code goes here!

    //Clear Grid
    pixelCanvasTable.innerHTML = "";

    console.log("We reached the grid function.");

    //Add tr and td tags to table to create grid.

    //Get values from form inputs
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;

    for(var i = 0; i <= height; i++)
    {
        let trElement = document.createElement("tr");

        for(var j = 0; j <= width; j++)
        {
            let tdElement = document.createElement("td");
            trElement.appendChild(tdElement);
        }

        pixelCanvasTable.appendChild(trElement);
    }

}
