/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
// console.log(cart)

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i = 0; i < Product.allProducts.length; i++ ) {
    let selectList = document.createElement('option');
    selectElement.appendChild(selectList);
    selectList.textContent = Product.allProducts[i].name;

    }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

// function handleSubmit(event) {

//   // TODO: Prevent the page from reloading

//   event.preventDefault();

//   localStorage.cartItems = JSON.stringify(Product.allProducts);

//   // console.log(localStorage.cartItems);

//   // let cartItems = JSON.stringify(localStorage.setItem('cart', 'Product.allProducts')) || [];
//   // cart = new Cart(cartItems);
//   // console.log(cartItems);


//   // Do all the things ...
//   addSelectedItemToCart();
//   cart.saveToLocalStorage();
//   updateCounter();
//   updateCartPreview();

// }

function handleSubmit(event) {

  // TODO: Prevent the page from reloading
    event.preventDefault();

    // if(localStorage.getItem('cart')){
    //   let x = localStorage.getItem('cart');
    //   let value1 = JSON.parse(x);
    //   console.log(value1);
    //   value1.push(event.target[1].value);
    //   let value2 = JSON.stringify(value1);
    //   localStorage.setItem('cart', value2);
    // } else{
    //   localStorage.setItem('cart', [])
    // }


    // console.log(event);



  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  let item = event.target[1].value;
  // TODO: get the quantity
  let number = event.target[2].value;

  // TODO: using those, add one item to the Cart
  let itemAndnumber = {
    item: item,
    number: number
  }
  cart.push(itemAndnumber)
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
