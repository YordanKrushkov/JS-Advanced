function solve() {
 
   let buttons = document.querySelectorAll('.add-product');
   let checkOutButton = document.querySelector('.checkout');
   let output = document.querySelector("body > div > textarea");
   let totalPrice = 0;
   let productList = [];

   buttons.forEach(x => x.addEventListener('click', addProduct));

   checkOutButton.addEventListener('click', checkOut);

   function checkOut(e) {
      buttons.forEach(x => x.removeEventListener('click', addProduct));
      if (output.value !== '') {
         output.value += `You bought ${productList.join(',')} for ${totalPrice.toFixed(2)}.`
      }
      checkOutButton.removeEventListener("click", checkOut);
   }


   function addProduct(e) {
      let itemName = e.target.parentElement.previousElementSibling.children[0].textContent;
      let itemPrice = e.target.parentElement.nextElementSibling.textContent;
      if (!productList.includes(itemName)) {
         productList.push(itemName);
      }
      totalPrice += Number(itemPrice);
      output.value += `Added ${itemName} for ${itemPrice} to the cart.\n`
   }

}

