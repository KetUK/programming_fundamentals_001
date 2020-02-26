function addVAT(price) {
  return price + 0.2 * price;
}

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function makeHalfPrice(price) {
  return price * 0.5;
}

function countBooks(books) {
  return books.length;
}

function isInStock(bookDetails) {
  if (bookDetails.quantity >= 1) {
    return true;
  } else {
    return false;
  }
}

function getTotalOrderPrice(price, quantity) {
  let totalPrice = price * quantity;
  return totalPrice + totalPrice * 0.2;
}

module.exports = {
  addVAT,
  getFullName,
  makeHalfPrice,
  countBooks,
  isInStock,
  getTotalOrderPrice
};
