// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //subtotal = price * quantity
  // 1. Get the value of the product
  // 2. Get the value of the quantity
  // 3. Calculate price * quantity
  const productPrice = product.querySelector('.price').innerText.replace("$","")
  const productQuantity = product.querySelector('input').value
  console.log('productPrice', productPrice)
  console.log('productQuantity', productQuantity)
  const subTotal = productPrice * productQuantity;
  console.log('subTotal', subTotal)
  const subtotalElement = product.querySelector('.subtotal span')
  // 4. Display the result 
  subtotalElement.innerText = subTotal
  console.log('subtotalElement', subtotalElement)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  console.log('allProducts', allProducts);

  for(let i = 0; i < allProducts.length; i++){
    updateSubtotal(allProducts[i])
  }
  // ITERATION 3
  // Calculate the sum of all the subtotals
  // 1. Get all the subtotals values
  let sum = 0;
  const allSubtotals = document.querySelectorAll('.subtotal span')
  console.log('allSubtotals', allSubtotals)
  // 2. Make a sum
  for(let i = 0; i < allSubtotals.length; i++){
      sum = sum + Number(allSubtotals[i].innerText)
  }
  // 3. Display the sum in the '#total-value'
  console.log('sum', sum)
  // const totalElement = document.getElementById('total-value')
  // totalElement.innerHTML = `Total: $<span>${sum}</span>`;

  document.querySelector('#total-value span').innerText = sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
