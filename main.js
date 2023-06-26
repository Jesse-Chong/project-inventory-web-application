import { nanoid } from "nanoid";

// Shoe inventory
const shoes = [
    {
        id: nanoid(),
        name: "Eminem X Jordan 4 Retro",
        price: 20000,
        inStock: true,
        color: "Black, Gray, White, Silver",
        rating: 5
    },
    {
        id: nanoid(),
        name: "Louis Vuitton X Nike Air Force 1 Low",
        price: 3000,
        inStock: true,
        color: "White, Green",
        rating: 4.5
    },
    {
        id: nanoid(),
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

// resetbutton
// add resetbutton add event listener

//handleformsubmit(event)
// make sure the form adds a shoe to inventory and to the top of the page

// make a validation function using alert



const form = document.getElementById('shoe-form');
const shoeInput = document.querySelector("input[name='name']");
const priceInput = document.querySelector("input[name='price']");
const inStockInput = document.querySelector("input[name='inStock']");
const colorInput = document.querySelector("input[name='color']");
const ratingInput = document.querySelector("input[name='rating']");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})