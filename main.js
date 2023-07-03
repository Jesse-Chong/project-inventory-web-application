// Shoe inventory
const shoes = [
  {
    id: 3,
    name: "Eminem X Jordan 4 Retro",
    price: 20000,
    inStock: true,
    color: "Black, Gray, White, Silver",
    rating: 5,
  },
  {
    id: 2,
    name: "Louis Vuitton X Nike Air Force 1 Low",
    price: 3000,
    inStock: true,
    color: "White, Green",
    rating: 4.5,
  },
  {
    id: 1,
    name: "Jimmy Choo X Timberland 6 Inch Graffiti Boot",
    price: 799.99,
    inStock: true,
    color: "Chestnut, Black",
    rating: 3.5,
  },
];

console.log(shoes);

// map extracts all the id from the shoe objects, and spread those values as arguments to the Math.max which returns the maximum value for id.
let maxId = Math.max(...shoes.map((shoe) => shoe.id));
const form = document.getElementById("shoe-form");
const shoeInput = document.querySelector("#shoe-name");
const priceInput = document.querySelector("#shoe-price");
const inStockInput = document.querySelector("#shoe-inStock");
const colorInput = document.querySelector("#shoe-color");
const ratingInput = document.querySelector("#shoe-rating");
const shoeContainer = document.getElementById("shoe-info");
const shoeImage = document.querySelector("#shoe-image-url");
const shoeElements = document.querySelectorAll(".shoe");

form.addEventListener("submit", (event) => {
  // extract values from user input and store them into variables
  event.preventDefault(); // prevent form submission from refreshing the page
  console.log("form submitted");
  const name = shoeInput.value; // .value retrieves the user input for shoeInput
  const price = parseFloat(priceInput.value); // parseFloat is to turn the string into a number
  const inStock = inStockInput.checked; // checked property returns a boolean value to check wether the checkbox is checked or not then assign to inStock variable
  const color = colorInput.value;
  const rating = parseFloat(ratingInput.value);
  const imageUrl = shoeImage.value;

  // Checks if name price color and rating are filled out, if not give an alert
  if (!name || isNaN(price) || !color || isNaN(rating)) {
    alert("Please fill in all required fields with valid inputs");
    return;
  }

  const newShoe = {
    id: ++maxId, // increament the counter and assign it to id of newShoe
    name,
    price,
    inStock,
    color,
    rating,
    imageUrl: imageUrl,
  };

  addShoeToInventory(newShoe); // add the new shoe to the inventory

  // reset the values of the submit form after user submits
  shoeInput.value = "";
  priceInput.value = "";
  inStockInput.checked = false;
  colorInput.value = "";
  ratingInput.value = "";
  shoeImage.value = "";
});

// create new shoe element and add to inventory
function addShoeToInventory(shoe) {
  // use shoe as a parameter
  const { id, name, price, inStock, color, rating, imageUrl } = shoe; // destructure shoe to get access to properties of shoe
  console.log(shoe);
  const newShoe = document.createElement("div"); // let newShoe create a new div
  newShoe.classList.add("shoe"); // add a class to it named "shoe"

  const shoeImageElement = document.createElement("img");
  shoeImageElement.classList.add("shoe-img");
  shoeImageElement.src = imageUrl;

  shoeImageElement.style.display = "block";

  const shoeInfo = document.createElement("div"); // assign the variable to a created dive element
  shoeInfo.classList.add("shoe-info"); // add a class to it name "shoe-info"
  // set the innerHTML property to shoe shoe info, (if instock is true write In Stock, else write Out of Stock)
  shoeInfo.innerHTML = `
    <h3>Shoe ID: ${id}</h3>
    <h3>${name}</h3>
    <p>Price: $${price}</p>
    <p><label for="toggle-inStock-${id}">${
    inStock ? "In Stock" : "Out of Stock"
  }</label></p>
    <p><input type="checkbox" id="toggle-inStock-${id}" ${
    inStock ? "checked" : ""
  }></p>
    <p>Color: ${color}</p>
    <p>Rating: ${rating}</p>`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove"; // set the removebutton to say Remove
  removeButton.addEventListener("click", () => {
    newShoe.remove(); // after clicking the removebutton, remove the newshoe that was added
  });

  newShoe.appendChild(shoeImageElement);
  newShoe.appendChild(shoeInfo); //  append the shoe info and remove button as child elements in newShoe
  newShoe.appendChild(removeButton);
  shoeContainer.insertBefore(newShoe, shoeContainer.firstChild); // insert the newShoe element to the beginning of the shoeContainer to add the inventory on top of the list
}

shoeElements.forEach((shoe) => {
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", () => {
    shoe.remove();
  });

  shoe.appendChild(removeButton);
});

// this is in charge of resetting the form without refreshing page
const resetButton = document.getElementById("reset");
const imageUrl = document.getElementById("img");
resetButton.addEventListener("click", () => {
  shoeInput.value = "";
  priceInput.value = "";
  inStockInput.checked = false; // unchecks the box
  colorInput.value = "";
  ratingInput.value = "";
  shoeImage.value = "";
});

function handleToggleInStock() {
  const shoesInfo = document.querySelectorAll(".shoe");
  shoesInfo.forEach((shoeInfo) => {
    const checkbox = shoeInfo.querySelector('input[type="checkbox"]');
    const stockStatus = shoeInfo.querySelector(`label[for="${checkbox.id}"]`);
    checkbox.addEventListener("change", () => {
      const inStock = checkbox.checked;
      stockStatus.textContent = inStock ? "In Stock" : "Out of Stock";
    });
  });
}

handleToggleInStock();
