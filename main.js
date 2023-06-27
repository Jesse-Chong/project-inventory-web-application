let shoeIdCounter = 0; // counter to generate IDs

// Shoe inventory
const shoes = [
    {
        id: 1,
        name: "Eminem X Jordan 4 Retro",
        price: 20000,
        inStock: true,
        color: "Black, Gray, White, Silver",
        rating: 5
    },
    {
        id: 2,
        name: "Louis Vuitton X Nike Air Force 1 Low",
        price: 3000,
        inStock: true,
        color: "White, Green",
        rating: 4.5
    },
    {
        id: 3,
        name: "Jimmy Choo X Timberland 6 Inch Graffiti Boot",
        price: 799.99,
        inStock: true,
        color: "Chestnut, Black",
        rating: 3.5
    }
];

console.log(shoes)

//form
// add evenlisteners for form

// add event listener for resetbutton

//handleformsubmit(event)
// make sure the form adds a shoe to inventory and to the top of the page
// reset button should reset the form only

// make a validation function using alert

// create a variable with user input to add the new item when submitted

//

const form = document.getElementById('shoe-form');
const shoeInput = document.querySelector("#shoe-name");
const priceInput = document.querySelector("#shoe-inStock");
const inStockInput = document.querySelector("#shoe-color");
const colorInput = document.querySelector("#shoe-color");
const ratingInput = document.querySelector("#shoe-rating");

form.addEventListener("submit", (event) => {
    // extract values from user input and store them into variables
    event.preventDefault(); // prevent form submission from refreshing the page
    console.log(form)
    const name = shoeInput.value; // .value retrieves the user input for shoeInput
    const price = parseFloat(priceInput.value); // parseFloat is to turn the string into a number
    const inStock = inStockInput.checked; // checked property returns a boolean value to check wether the checkbox is checked or not then assign to inStock variable
    const color = colorInput.value;
    const rating = parseFloat(ratingInput.value);


        // Checks if name price color and rating are filled out, if not give an alert
        if(!name || !price || !color || !rating) {
            alert("Please fill in all required fields with valid inputs")
            return;
        }
})

