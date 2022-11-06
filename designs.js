// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let sizePickerForm = document.getElementById("sizePicker");

sizePickerForm.addEventListener("submit", makeGrid, false);

function makeGrid(e) {
    e.preventDefault();
    // Your code goes here!

    console.log("We reached the grid function.");

    //Add tr and td tags to table to create grid.


}
