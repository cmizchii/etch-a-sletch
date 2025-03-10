


// Declaring variables:
const createButton = document.querySelector('#createButton');
const container = document.querySelector('#main-container');

// Function to create the grid based on user input
function createGrid(input) {
    // Calculate the total number of items (grid size) and the size of each cell
    const totalCells = input * input;
    const cellSize = 500 / input;

    // Clear any existing grid
    container.innerHTML = '';

    // Create the grid with the specified number of cells
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');

        // Style each cell (width, height, background color)
        cell.style.cssText = `
            width: ${cellSize}px;
            height: ${cellSize}px;
            background: white;
            display: inline-block;
            box-sizing: border-box;
        `;

        // Add hover effect to darken the cell when the mouse enters
        cell.addEventListener('mouseenter', () => {
            cell.style.background = 'black';
            cell.style.opacity = '1';
        });

        

        // Append the cell to the container
        container.appendChild(cell);
    }
}

// Default grid size (16x16) when the page loads
window.addEventListener('load', () => createGrid(16));

// When the "Create" button is clicked
createButton.addEventListener('click', () => {
    const input = Number(document.querySelector('input').value);

    // Validate input: ensure it's a number between 5 and 100
    if (isNaN(input) || input < 5 || input > 100) {
        alert("Please enter a valid number between 5 and 100.");
        return;
    }

    // Create the grid with the user-provided input
    createGrid(input);

    // Clear the input field after the grid is created
    document.querySelector('input').value = '';
});

// add a function where when i hover over a div it always changed +0.2 opacity so when you leave a div and then hover again over it its 0.4 and so on until its 1

